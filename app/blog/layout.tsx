import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artigos técnicos sobre proteção, testes e comissionamento de sistemas elétricos.",
  alternates: {
    canonical: "/blog/",
    languages: {
      "pt-BR": "/blog/",
      "en-US": "/en/blog/",
    },
  },
  openGraph: {
    title: "Blog | KR Engenharia",
    description:
      "Artigos técnicos sobre proteção, testes e comissionamento de sistemas elétricos.",
    url: "/blog/",
    siteName: "KR Engenharia",
    locale: "pt_BR",
    alternateLocale: ["en_US"],
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Blog - KR Engenharia", type: "image/jpeg" }],
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
