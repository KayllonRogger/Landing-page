import type { Metadata } from "next";

const DESCRIPTION =
  "Excelência técnica, confiabilidade inegociável e inovação contínua na engenharia elétrica e automação de subestações. Registro CREA- nº 141854962-2 • CNPJ: 68.797.626/0001-04.";

export const metadata: Metadata = {
  title: "Sobre Nós | KR Engenharia",
  description: DESCRIPTION,
  alternates: {
    canonical: "/sobre/",
    languages: {
      "pt-BR": "/sobre/",
      "en-US": "/en/about/",
    },
  },
  openGraph: {
    title: "Sobre a KR Engenharia | Subestações & Automação de Energia",
    description: DESCRIPTION,
    url: "/sobre/",
    siteName: "KR Engenharia",
    locale: "pt_BR",
    alternateLocale: ["en_US"],
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "KR Engenharia - Sobre Nós",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobre Nós | KR Engenharia",
    description:
      "Excelência técnica na engenharia elétrica e automação de subestações. Registro CREA- nº 141854962-2 • CNPJ: 68.797.626/0001-04.",
    images: ["/og-image.jpg"],
  },
};

export default function SobreLayout({ children }: { children: React.ReactNode }) {
  return children;
}
