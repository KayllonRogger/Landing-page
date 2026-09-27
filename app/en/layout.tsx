import type { Metadata } from "next";

const EN_TITLE = "KR Engenharia - Substation Automation & Power Systems";
const EN_DESCRIPTION =
  "Intelligent substation automation and electrical power systems engineering. Reliability, efficiency, and digital transformation of the electric grid. CNPJ: 68.797.626/0001-04 • CREA- No. 141854962-2.";

export const metadata: Metadata = {
  title: {
    default: EN_TITLE,
    template: "%s | KR Engenharia",
  },
  description: EN_DESCRIPTION,
  keywords: [
    "Substation Automation",
    "Power Systems Engineering",
    "SAS",
    "SCADA",
    "IEC 61850",
    "Relay Protection",
    "Substation Commissioning",
    "MiCOM",
    "SIPROTEC",
    "BCU C264",
  ],
  alternates: {
    canonical: "/en/",
    languages: {
      "pt-BR": "/",
      "en-US": "/en/",
    },
  },
  openGraph: {
    title: EN_TITLE,
    description: EN_DESCRIPTION,
    url: "/en/",
    siteName: "KR Engenharia",
    locale: "en_US",
    alternateLocale: ["pt_BR"],
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: EN_TITLE,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: EN_TITLE,
    description:
      "Intelligent substation automation and electrical power systems engineering. CNPJ: 68.797.626/0001-04 • CREA- No. 141854962-2.",
    images: ["/og-image.jpg"],
  },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return children;
}
