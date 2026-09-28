import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "KR Engenharia is the trade name of KR Consultoria e Soluções em Engenharia LTDA: protection and automation engineering with multi-vendor experience, led by Eng. Kayllon Rogger Nunes.",
  alternates: {
    canonical: "/en/about/",
    languages: {
      "pt-BR": "/sobre/",
      "en-US": "/en/about/",
    },
  },
  openGraph: {
    title: "About | KR Engenharia",
    description:
      "KR Engenharia is the trade name of KR Consultoria e Soluções em Engenharia LTDA: protection and automation engineering with multi-vendor experience, led by Eng. Kayllon Rogger Nunes.",
    url: "/en/about/",
    siteName: "KR Engenharia",
    locale: "en_US",
    alternateLocale: ["pt_BR"],
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "About - KR Engenharia", type: "image/jpeg" }],
  },
};

export default function AboutLayoutEn({ children }: { children: React.ReactNode }) {
  return children;
}
