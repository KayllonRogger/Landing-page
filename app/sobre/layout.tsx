import type { Metadata } from "next";

const DESCRIPTION =
  "KR Engenharia é o nome comercial da KR Consultoria e Soluções em Engenharia LTDA: engenharia de proteção e automação com experiência multimarcas, conduzida pelo Eng. Kayllon Rogger Nunes. CNPJ 68.797.626/0001-04.";

export const metadata: Metadata = {
  title: "Sobre",
  description: DESCRIPTION,
  alternates: {
    canonical: "/sobre/",
    languages: {
      "pt-BR": "/sobre/",
      "en-US": "/en/about/",
    },
  },
  openGraph: {
    title: "Sobre a KR Engenharia",
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
        alt: "Sobre a KR Engenharia",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobre | KR Engenharia",
    description:
      "Engenharia de proteção e automação com experiência multimarcas. KR Consultoria e Soluções em Engenharia LTDA • CNPJ 68.797.626/0001-04.",
    images: ["/og-image.jpg"],
  },
};

export default function SobreLayout({ children }: { children: React.ReactNode }) {
  return children;
}
