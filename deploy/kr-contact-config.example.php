<?php
// Copy to /home1/kayllo23/kr-contact-config.php on the server (one level ABOVE
// public_html, so it is never served) and fill in the real values.
// Never commit the real file.
return [
    'resend_api_key' => 're_xxxxxxxxx',
    // Must belong to the domain verified in Resend.
    'from' => 'KR Engenharia <formulario@mail.krconsultoria.com.br>',
    'to' => 'contato@krconsultoria.com.br',
];
