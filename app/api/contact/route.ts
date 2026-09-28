const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 3;
const RESEND_ENDPOINT = 'https://api.resend.com/emails';
const requestsByIp = new Map<string, number[]>();

type ContactBody = {
    name?: unknown;
    company?: unknown;
    email?: unknown;
    phone?: unknown;
    service?: unknown;
    message?: unknown;
    website?: unknown;
    locale?: unknown;
};

function cleanText(value: unknown, maxLength: number) {
    return typeof value === 'string'
        ? value.replace(/\0/g, '').trim().slice(0, maxLength)
        : '';
}

function escapeHtml(value: string) {
    return value.replace(/[&<>"']/g, (character) => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;',
    })[character] ?? character);
}

function getClientIp(request: Request) {
    return request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
        || request.headers.get('x-real-ip')
        || 'unknown';
}

function isRateLimited(ip: string) {
    const now = Date.now();
    const recent = (requestsByIp.get(ip) ?? []).filter((timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS);

    if (recent.length >= RATE_LIMIT_MAX_REQUESTS) {
        requestsByIp.set(ip, recent);
        return true;
    }

    recent.push(now);
    requestsByIp.set(ip, recent);
    return false;
}

function isSameOrigin(request: Request) {
    const origin = request.headers.get('origin');
    const host = request.headers.get('host');
    if (!origin || !host) return true;

    try {
        return new URL(origin).host === host;
    } catch {
        return false;
    }
}

function json(data: object, status = 200) {
    return Response.json(data, {
        status,
        headers: { 'Cache-Control': 'no-store' },
    });
}

export async function POST(request: Request) {
    const contentLength = Number(request.headers.get('content-length') ?? 0);
    if (contentLength > 20_000) {
        return json({ success: false, error: 'Solicitação muito grande.' }, 413);
    }

    if (!isSameOrigin(request)) {
        return json({ success: false, error: 'Solicitação não autorizada.' }, 403);
    }

    try {
        const body = await request.json() as ContactBody;
        const isEnglish = body.locale === 'en';
        const website = cleanText(body.website, 200);

        // Honeypot: bots commonly fill this hidden field. Return a neutral success
        // response so the endpoint does not reveal the anti-spam rule.
        if (website) {
            return json({ success: true });
        }

        const ip = getClientIp(request);
        if (isRateLimited(ip)) {
            return json({
                success: false,
                error: isEnglish
                    ? 'Too many attempts. Please wait a few minutes and try again.'
                    : 'Muitas tentativas. Aguarde alguns minutos e tente novamente.',
            }, 429);
        }

        const name = cleanText(body.name, 120);
        const company = cleanText(body.company, 160);
        const email = cleanText(body.email, 254).toLowerCase();
        const phoneDisplay = cleanText(body.phone, 40);
        const phoneDigits = phoneDisplay.replace(/\D/g, '');
        const service = cleanText(body.service, 120);
        const message = cleanText(body.message, 5_000);
        const emailIsValid = !email || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        const phoneIsValid = !phoneDigits || phoneDigits.length >= 10;

        if (
            name.length < 2 ||
            (!email && !phoneDigits) ||
            !emailIsValid ||
            !phoneIsValid ||
            message.length < 20
        ) {
            return json({
                success: false,
                error: isEnglish ? 'Please review the required fields.' : 'Revise os campos obrigatórios.',
            }, 400);
        }

        const apiKey = process.env.RESEND_API_KEY;
        const from = process.env.CONTACT_FROM_EMAIL;
        const to = process.env.CONTACT_TO_EMAIL || 'contato@krconsultoria.com.br';

        if (!apiKey || !from) {
            return json({
                success: false,
                error: isEnglish
                    ? 'Email delivery is not configured yet. Please use the direct contact details.'
                    : 'O envio de e-mail ainda não está configurado. Use os dados de contato direto.',
            }, 503);
        }

        const safeName = name.replace(/[\r\n]+/g, ' ');
        const subject = `Nova solicitação pelo site — ${safeName}`;
        const fields = [
            ['Nome', name],
            ['Empresa', company || 'Não informada'],
            ['E-mail', email || 'Não informado'],
            ['Telefone / WhatsApp', phoneDisplay || 'Não informado'],
            ['Serviço', service || 'Não especificado'],
            ['Idioma da página', isEnglish ? 'Inglês' : 'Português'],
        ];
        const text = [
            'Nova solicitação recebida pelo formulário do site da KR Engenharia.',
            '',
            ...fields.map(([label, value]) => `${label}: ${value}`),
            '',
            'Mensagem:',
            message,
        ].join('\n');
        const html = `
            <h1>Nova solicitação pelo site</h1>
            <table style="border-collapse:collapse">
                ${fields.map(([label, value]) => `
                    <tr>
                        <th style="padding:6px 12px 6px 0;text-align:left;vertical-align:top">${escapeHtml(label)}</th>
                        <td style="padding:6px 0">${escapeHtml(value)}</td>
                    </tr>
                `).join('')}
            </table>
            <h2>Mensagem</h2>
            <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
        `;

        const resendResponse = await fetch(RESEND_ENDPOINT, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from,
                to: [to],
                ...(email ? { reply_to: email } : {}),
                subject,
                text,
                html,
            }),
            signal: AbortSignal.timeout(10_000),
        });

        if (!resendResponse.ok) {
            const providerBody = await resendResponse.json().catch(() => null) as {
                name?: string;
                message?: string;
            } | null;
            console.error(
                `Contact email provider error: ${resendResponse.status}`,
                providerBody?.name ?? 'unknown_error',
                providerBody?.message ?? 'No provider message',
            );
            return json({
                success: false,
                error: isEnglish
                    ? 'The message could not be sent right now. Please try again later.'
                    : 'Não foi possível enviar a mensagem agora. Tente novamente mais tarde.',
            }, 502);
        }

        const resendResult = await resendResponse.json() as { id?: string };

        return json({
            success: true,
            deliveryId: resendResult.id,
            message: isEnglish
                ? 'Message sent successfully. We will reply using the contact details provided.'
                : 'Mensagem enviada com sucesso. Retornaremos pelos dados de contato informados.',
        });
    } catch (error) {
        console.error('Contact form processing error', {
            name: error instanceof Error ? error.name : 'UnknownError',
        });
        return json({ success: false, error: 'Não foi possível processar a solicitação.' }, 400);
    }
}
