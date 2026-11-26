import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Testes e comissionamento, diagnóstico e investigação de falhas, retrofit e integração de SPCS e estudos elétricos. Contrate uma etapa ou um pacote integrado, com responsabilidades definidas na proposta.",
  alternates: {
    canonical: "/servicos/",
    languages: {
      "pt-BR": "/servicos/",
      "en-US": "/en/services/",
    },
  },
  openGraph: {
    title: "Serviços | KR Engenharia",
    description:
      "Testes e comissionamento, diagnóstico e investigação de falhas, retrofit e integração de SPCS e estudos elétricos. Contrate uma etapa ou um pacote integrado, com responsabilidades definidas na proposta.",
    url: "/servicos/",
    siteName: "KR Engenharia",
    locale: "pt_BR",
    alternateLocale: ["en_US"],
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Serviços - KR Engenharia", type: "image/jpeg" }],
  },
};

export default function ServicosLayout({ children }: { children: React.ReactNode }) {
  return children;
}
