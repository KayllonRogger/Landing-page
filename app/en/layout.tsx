import type { Metadata } from "next";
import DocumentLanguage from "../components/DocumentLanguage/DocumentLanguage";

const EN_TITLE = "KR Engenharia - Multi-Vendor Protection and Automation Engineering";
const EN_DESCRIPTION =
  "Protection and automation engineering with multi-vendor experience: relay settings, testing, and commissioning on ABB, Schneider Electric, SEL, and Siemens platforms, plus commissioning experience involving GE IEDs. Electrical studies and retrofits.";

export const metadata: Metadata = {
  title: {
    default: EN_TITLE,
    template: "%s | KR Engenharia",
  },
  description: EN_DESCRIPTION,
  keywords: [
    "Protection Engineering",
    "Relay Settings",
    "Protection Testing",
    "Substation Commissioning",
    "Electrical Studies",
    "Selectivity Studies",
    "IEC 61850",
    "ABB Relion",
    "GE",
    "Schneider Electric MiCOM",
    "SEL",
    "Siemens SIPROTEC",
    "Protection Retrofit",
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
      "Electrical studies, relay settings, testing, and commissioning of protection systems on ABB, GE, Schneider Electric, SEL, and Siemens platforms.",
    images: ["/og-image.jpg"],
  },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <div lang="en-US">
      <DocumentLanguage lang="en-US" />
      {children}
    </div>
  );
}
