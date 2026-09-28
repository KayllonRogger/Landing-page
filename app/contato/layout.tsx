import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Descreva a sua demanda de estudos, parametrização, testes, comissionamento ou retrofit. Contato por e-mail ou WhatsApp com o engenheiro da KR.",
  alternates: {
    canonical: "/contato/",
    languages: {
      "pt-BR": "/contato/",
      "en-US": "/en/contact/",
    },
  },
  openGraph: {
    title: "Contato | KR Engenharia",
    description:
      "Descreva a sua demanda de estudos, parametrização, testes, comissionamento ou retrofit. Contato por e-mail ou WhatsApp com o engenheiro da KR.",
    url: "/contato/",
    siteName: "KR Engenharia",
    locale: "pt_BR",
    alternateLocale: ["en_US"],
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Contato - KR Engenharia", type: "image/jpeg" }],
  },
};

export default function ContatoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
