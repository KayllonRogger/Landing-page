import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Estudos elétricos, parametrização e testes de proteção, comissionamento e retrofit de proteção e automação. Contrate uma etapa ou um pacote integrado, com responsabilidades definidas na proposta.",
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
      "Estudos elétricos, parametrização e testes de proteção, comissionamento e retrofit de proteção e automação. Contrate uma etapa ou um pacote integrado, com responsabilidades definidas na proposta.",
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
