<?php
// Contact form endpoint for the static export hosted on Apache/PHP (HostGator).
// Mirrors app/api/contact/route.ts, which only runs under `next dev`.
// Secrets live OUTSIDE public_html, in kr-contact-config.php (see
// deploy/kr-contact-config.example.php). Never commit the real file.

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

const RATE_LIMIT_WINDOW = 900; // seconds
const RATE_LIMIT_MAX = 3;

function respond(array $data, int $status = 200): void
{
    http_response_code($status);
    echo json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function clean_text($value, int $max): string
{
    if (!is_string($value)) {
        return '';
    }
    return mb_substr(trim(str_replace("\0", '', $value)), 0, $max);
}

function is_rate_limited(string $ip): bool
{
    $file = sys_get_temp_dir() . '/kr-contact-' . hash('sha256', $ip);
    $now = time();
    $recent = [];
    if (is_readable($file)) {
        $stored = json_decode((string) file_get_contents($file), true);
        if (is_array($stored)) {
            $recent = array_values(array_filter($stored, fn($t) => is_int($t) && $now - $t < RATE_LIMIT_WINDOW));
        }
    }
    $limited = count($recent) >= RATE_LIMIT_MAX;
    if (!$limited) {
        $recent[] = $now;
    }
    @file_put_contents($file, json_encode($recent), LOCK_EX);
    return $limited;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    respond(['success' => false, 'error' => 'Método não permitido.'], 405);
}

if ((int) ($_SERVER['CONTENT_LENGTH'] ?? 0) > 20000) {
    respond(['success' => false, 'error' => 'Solicitação muito grande.'], 413);
}

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
$host = $_SERVER['HTTP_HOST'] ?? '';
if ($origin !== '' && $host !== '' && parse_url($origin, PHP_URL_HOST) !== preg_replace('/:\d+$/', '', $host)) {
    respond(['success' => false, 'error' => 'Solicitação não autorizada.'], 403);
}

$body = json_decode((string) file_get_contents('php://input'), true);
if (!is_array($body)) {
    respond(['success' => false, 'error' => 'Não foi possível processar a solicitação.'], 400);
}

$isEnglish = ($body['locale'] ?? '') === 'en';

// Honeypot: bots fill this hidden field. Answer with a neutral success.
if (clean_text($body['website'] ?? '', 200) !== '') {
    respond(['success' => true]);
}

$ip = trim(explode(',', $_SERVER['HTTP_X_FORWARDED_FOR'] ?? '')[0]) ?: ($_SERVER['REMOTE_ADDR'] ?? 'unknown');
if (is_rate_limited($ip)) {
    respond(['success' => false, 'error' => $isEnglish
        ? 'Too many attempts. Please wait a few minutes and try again.'
        : 'Muitas tentativas. Aguarde alguns minutos e tente novamente.'], 429);
}

$name = clean_text($body['name'] ?? '', 120);
$company = clean_text($body['company'] ?? '', 160);
$email = mb_strtolower(clean_text($body['email'] ?? '', 254));
$phone = clean_text($body['phone'] ?? '', 40);
$phoneDigits = preg_replace('/\D/', '', $phone);
$service = clean_text($body['service'] ?? '', 120);
$message = clean_text($body['message'] ?? '', 5000);

$emailValid = $email === '' || filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
$phoneValid = $phoneDigits === '' || strlen($phoneDigits) >= 10;
if (mb_strlen($name) < 2 || ($email === '' && $phoneDigits === '') || !$emailValid || !$phoneValid || mb_strlen($message) < 20) {
    respond(['success' => false, 'error' => $isEnglish ? 'Please review the required fields.' : 'Revise os campos obrigatórios.'], 400);
}

$configFile = dirname(__DIR__, 2) . '/kr-contact-config.php';
$config = is_readable($configFile) ? require $configFile : null;
$apiKey = is_array($config) ? ($config['resend_api_key'] ?? '') : '';
$from = is_array($config) ? ($config['from'] ?? '') : '';
$to = is_array($config) ? ($config['to'] ?? 'contato@krconsultoria.com.br') : 'contato@krconsultoria.com.br';

if ($apiKey === '' || $from === '' || !function_exists('curl_init')) {
    respond(['success' => false, 'error' => $isEnglish
        ? 'Email delivery is not configured yet. Please use the direct contact details.'
        : 'O envio de e-mail ainda não está configurado. Use os dados de contato direto.'], 503);
}

$fields = [
    ['Nome', $name],
    ['Empresa', $company ?: 'Não informada'],
    ['E-mail', $email ?: 'Não informado'],
    ['Telefone / WhatsApp', $phone ?: 'Não informado'],
    ['Serviço', $service ?: 'Não especificado'],
    ['Idioma da página', $isEnglish ? 'Inglês' : 'Português'],
];
$text = "Nova solicitação recebida pelo formulário do site da KR Engenharia.\n\n";
$rows = '';
foreach ($fields as [$label, $value]) {
    $text .= "$label: $value\n";
    $rows .= '<tr><th style="padding:6px 12px 6px 0;text-align:left;vertical-align:top">'
        . htmlspecialchars($label, ENT_QUOTES) . '</th><td style="padding:6px 0">'
        . htmlspecialchars($value, ENT_QUOTES) . '</td></tr>';
}
$text .= "\nMensagem:\n$message";
$html = '<h1>Nova solicitação pelo site</h1><table style="border-collapse:collapse">' . $rows
    . '</table><h2>Mensagem</h2><p style="white-space:pre-wrap">' . htmlspecialchars($message, ENT_QUOTES) . '</p>';

$payload = [
    'from' => $from,
    'to' => [$to],
    'subject' => 'Nova solicitação pelo site — ' . preg_replace('/[\r\n]+/', ' ', $name),
    'text' => $text,
    'html' => $html,
];
if ($email !== '') {
    $payload['reply_to'] = $email;
}

$ch = curl_init('https://api.resend.com/emails');
curl_setopt_array($ch, [
    CURLOPT_POST => true,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT => 10,
    CURLOPT_HTTPHEADER => ['Authorization: Bearer ' . $apiKey, 'Content-Type: application/json'],
    CURLOPT_POSTFIELDS => json_encode($payload, JSON_UNESCAPED_UNICODE),
]);
$result = curl_exec($ch);
$status = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($result === false || $status < 200 || $status >= 300) {
    error_log('Contact email provider error: HTTP ' . $status);
    respond(['success' => false, 'error' => $isEnglish
        ? 'The message could not be sent right now. Please try again later.'
        : 'Não foi possível enviar a mensagem agora. Tente novamente mais tarde.'], 502);
}

$decoded = json_decode((string) $result, true);
respond([
    'success' => true,
    'deliveryId' => is_array($decoded) ? ($decoded['id'] ?? null) : null,
    'message' => $isEnglish
        ? 'Message sent successfully. We will reply using the contact details provided.'
        : 'Mensagem enviada com sucesso. Retornaremos pelos dados de contato informados.',
]);
