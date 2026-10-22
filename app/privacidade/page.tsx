import type { Metadata } from 'next';

import { COMPANY } from '@/lib/company';

export const metadata: Metadata = {
    title: 'Política de Privacidade',
    description:
        'Como a KR Engenharia trata os dados de quem entra em contato pelo site, por e-mail ou pelo WhatsApp, e como pedir a exclusão.',
    alternates: { canonical: '/privacidade/' },
};

const ATUALIZADA_EM = '22/10/2026';

const secao = { marginTop: '2rem' } as const;
const titulo = { fontSize: '1.25rem', fontWeight: 600, color: '#003366', marginBottom: '0.5rem' } as const;

export default function Privacidade() {
    return (
        <article style={{ maxWidth: '760px', margin: '0 auto', padding: '3rem 1rem 4rem', lineHeight: 1.65, color: '#333' }}>
            <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#003366' }}>Política de Privacidade</h1>
            <p style={{ color: '#666' }}>Atualizada em {ATUALIZADA_EM}.</p>

            <p style={secao}>
                Esta política explica como a {COMPANY.legalName} (&quot;KR Engenharia&quot;), CNPJ {COMPANY.cnpj}, com sede
                em {COMPANY.address.street}, {COMPANY.address.cityPt}, trata os dados pessoais de quem entra em contato
                com a empresa, conforme a Lei Geral de Proteção de Dados (Lei 13.709/2018).
            </p>

            <section style={secao}>
                <h2 style={titulo}>Quais dados tratamos</h2>
                <ul style={{ paddingLeft: '1.25rem', listStyle: 'disc' }}>
                    <li>Nome, empresa, cargo, e-mail e telefone que você informa.</li>
                    <li>O conteúdo das mensagens que você envia pelo site, por e-mail ou pelo WhatsApp, incluindo arquivos.</li>
                    <li>Dados da demanda: serviço, local da obra ou planta e prazo.</li>
                    <li>No WhatsApp, o número de telefone e o nome do seu perfil, fornecidos pela própria plataforma.</li>
                </ul>
            </section>

            <section style={secao}>
                <h2 style={titulo}>Para que usamos</h2>
                <p>
                    Para responder ao seu contato, entender a necessidade técnica, preparar e enviar propostas e manter o
                    histórico comercial da relação com a sua empresa. A base legal é o procedimento preliminar a um
                    contrato a seu pedido e o legítimo interesse da KR em atender quem a procura. Não vendemos dados nem
                    os usamos para publicidade de terceiros.
                </p>
            </section>

            <section style={secao}>
                <h2 style={titulo}>Atendimento automático no WhatsApp</h2>
                <p>
                    Nosso WhatsApp comercial pode ser atendido primeiro por um assistente virtual, que usa a API do
                    WhatsApp Business (Meta) e a inteligência artificial Claude (Anthropic). Você pode pedir para falar
                    com uma pessoa a qualquer momento.
                </p>
            </section>

            <section style={secao}>
                <h2 style={titulo}>Com quem compartilhamos</h2>
                <p>Somente com fornecedores que operam os serviços usados no atendimento, cada um para a sua função:</p>
                <ul style={{ paddingLeft: '1.25rem', listStyle: 'disc' }}>
                    <li>Meta (WhatsApp Business): recebimento e envio das mensagens do WhatsApp.</li>
                    <li>Anthropic: geração das respostas do assistente virtual.</li>
                    <li>Resend: entrega dos e-mails do formulário do site.</li>
                    <li>Provedores de hospedagem e e-mail da KR, onde ficam os sistemas internos.</li>
                </ul>
                <p>
                    Alguns desses fornecedores processam dados fora do Brasil, com as salvaguardas previstas nos seus
                    termos.
                </p>
            </section>

            <section style={secao}>
                <h2 style={titulo}>Por quanto tempo guardamos</h2>
                <p>
                    Enquanto houver relação comercial ou proposta em andamento e, depois disso, pelo prazo necessário
                    para cumprir obrigações legais ou defender direitos da KR. Conversas que não viraram negócio podem ser
                    excluídas a pedido a qualquer momento.
                </p>
            </section>

            <section style={secao} id="exclusao">
                <h2 style={titulo}>Seus direitos e como pedir a exclusão dos dados</h2>
                <p>
                    Você pode pedir acesso, correção, exclusão ou informações sobre o uso dos seus dados. Para isso,
                    escreva para <a href={`mailto:${COMPANY.email}`} style={{ color: '#003366', textDecoration: 'underline' }}>{COMPANY.email}</a>{' '}
                    com o assunto &quot;Dados pessoais&quot; e informe o e-mail ou o telefone usado no contato. Também pode
                    pedir pelo próprio WhatsApp, escrevendo &quot;excluir meus dados&quot;: uma pessoa da equipe confirma e
                    responde. Atendemos em até 15 dias.
                </p>
            </section>

            <section style={secao}>
                <h2 style={titulo}>Contato</h2>
                <p>
                    Responsável pelo tratamento: {COMPANY.legalName}. E-mail: {COMPANY.email}. Telefone e WhatsApp:{' '}
                    {COMPANY.phoneDisplay}.
                </p>
            </section>
        </article>
    );
}
