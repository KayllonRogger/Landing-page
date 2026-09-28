import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects and Field Experience",
  description:
    "Cases from Kayllon Rogger Nunes's professional career: 230 to 500 kV substations, industrial facilities, an SEL retrofit in mining, and offshore applications in Brazil, the USA, and Poland, with ABB, GE, Schneider Electric, SEL, and Siemens IEDs.",
  alternates: {
    canonical: "/en/projects/",
    languages: {
      "pt-BR": "/projetos/",
      "en-US": "/en/projects/",
    },
  },
  openGraph: {
    title: "Projects and Field Experience | KR Engenharia",
    description:
      "Cases from Kayllon Rogger Nunes's professional career: 230 to 500 kV substations, industrial facilities, an SEL retrofit in mining, and offshore applications in Brazil, the USA, and Poland, with ABB, GE, Schneider Electric, SEL, and Siemens IEDs.",
    url: "/en/projects/",
    siteName: "KR Engenharia",
    locale: "en_US",
    alternateLocale: ["pt_BR"],
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Field Experience - KR Engenharia", type: "image/jpeg" }],
  },
};

export default function ProjectsLayoutEn({ children }: { children: React.ReactNode }) {
  return children;
}
