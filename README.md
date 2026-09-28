This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Envio do formulário de contato

O formulário envia mensagens pelo endpoint `app/api/contact/route.ts`, usando a API do Resend somente no servidor.

1. Adicione e verifique `mail.krconsultoria.com.br` no Resend, incluindo os registros DNS solicitados pelo serviço.
2. Crie uma chave de API com permissão de envio.
3. Copie `.env.example` para `.env.local` e preencha `RESEND_API_KEY` e o remetente verificado.
4. Cadastre as mesmas variáveis de ambiente na plataforma de hospedagem antes do deploy.

O remetente deve pertencer ao domínio verificado. O endereço informado pelo visitante é usado como `Reply-To`, nunca como remetente. O endpoint inclui validação no servidor, honeypot, limite básico de três tentativas por IP a cada 15 minutos e não registra o conteúdo enviado.

> O limitador em memória protege uma instância do servidor. Em uma hospedagem com várias instâncias, use um armazenamento compartilhado de rate limiting para proteção global.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
