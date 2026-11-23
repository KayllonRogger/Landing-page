import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Testing and commissioning, fault diagnosis and investigation, protection, control and SCADA retrofits, and electrical studies. Hire a single stage or an integrated package, with responsibilities set in the proposal.",
  alternates: {
    canonical: "/en/services/",
    languages: {
      "pt-BR": "/servicos/",
      "en-US": "/en/services/",
    },
  },
  openGraph: {
    title: "Services | KR Engenharia",
    description:
      "Testing and commissioning, fault diagnosis and investigation, protection, control and SCADA retrofits, and electrical studies. Hire a single stage or an integrated package, with responsibilities set in the proposal.",
    url: "/en/services/",
    siteName: "KR Engenharia",
    locale: "en_US",
    alternateLocale: ["pt_BR"],
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Services - KR Engenharia", type: "image/jpeg" }],
  },
};

export default function ServicesLayoutEn({ children }: { children: React.ReactNode }) {
  return children;
}
