import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projetos e Experiência de Campo",
  description:
    "Casos da trajetória profissional de Kayllon Rogger Nunes: subestações de 230 a 500 kV, indústrias, retrofit SEL em mineração e aplicações offshore no Brasil, nos EUA e na Polônia, com IEDs ABB, GE, Schneider Electric, SEL e Siemens.",
  alternates: {
    canonical: "/projetos/",
    languages: {
      "pt-BR": "/projetos/",
      "en-US": "/en/projects/",
    },
  },
  openGraph: {
    title: "Projetos e Experiência de Campo | KR Engenharia",
    description:
      "Casos da trajetória profissional de Kayllon Rogger Nunes: subestações de 230 a 500 kV, indústrias, retrofit SEL em mineração e aplicações offshore no Brasil, nos EUA e na Polônia, com IEDs ABB, GE, Schneider Electric, SEL e Siemens.",
    url: "/projetos/",
    siteName: "KR Engenharia",
    locale: "pt_BR",
    alternateLocale: ["en_US"],
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Experiência de Campo - KR Engenharia", type: "image/jpeg" }],
  },
};

export default function ProjetosLayout({ children }: { children: React.ReactNode }) {
  return children;
}
