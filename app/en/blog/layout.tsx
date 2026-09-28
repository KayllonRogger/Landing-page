import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Technical articles on protection, testing, and commissioning of electrical systems.",
  alternates: {
    canonical: "/en/blog/",
    languages: {
      "pt-BR": "/blog/",
      "en-US": "/en/blog/",
    },
  },
  openGraph: {
    title: "Blog | KR Engenharia",
    description:
      "Technical articles on protection, testing, and commissioning of electrical systems.",
    url: "/en/blog/",
    siteName: "KR Engenharia",
    locale: "en_US",
    alternateLocale: ["pt_BR"],
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Blog - KR Engenharia", type: "image/jpeg" }],
  },
};

export default function BlogLayoutEn({ children }: { children: React.ReactNode }) {
  return children;
}
