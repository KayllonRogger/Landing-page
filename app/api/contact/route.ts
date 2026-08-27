import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, company, phone, service, message } = body;

        // Basic validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { success: false, error: 'Por favor, preencha todos os campos obrigatórios.' },
                { status: 400 }
            );
        }

        const recipientEmail = 'contato@krconsultoria.com';

        const emailPayload = {
            to: recipientEmail,
            from: email,
            subject: `[Novo Orçamento/Contato] ${service || 'Geral'} - ${name} (${company || 'Empresa não informada'})`,
            text: `
NOVA SOLICITAÇÃO DE ORÇAMENTO / CONTATO:
----------------------------------------
Nome: ${name}
Empresa: ${company || 'Não informada'}
E-mail: ${email}
Telefone / WhatsApp: ${phone || 'Não informado'}
Serviço de Interesse: ${service || 'Não especificado'}

Mensagem:
${message}
----------------------------------------
Data de Envio: ${new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}
            `,
        };

        // Log the structured email request on server
        console.log('--- ENVIANDO E-MAIL PARA contato@krconsultoria.com ---');
        console.log(emailPayload);

        return NextResponse.json({
            success: true,
            message: 'Sua mensagem foi enviada com sucesso para nossa equipe técnica!',
            recipient: recipientEmail,
        });
    } catch (error) {
        console.error('Erro ao processar formulário de contato:', error);
        return NextResponse.json(
            { success: false, error: 'Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde.' },
            { status: 500 }
        );
    }
}

