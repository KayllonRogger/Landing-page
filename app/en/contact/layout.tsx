import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Describe your need for studies, relay settings, testing, commissioning, or retrofit. Contact by email or WhatsApp with KR’s engineer.",
  alternates: {
    canonical: "/en/contact/",
    languages: {
      "pt-BR": "/contato/",
      "en-US": "/en/contact/",
    },
  },
  openGraph: {
    title: "Contact | KR Engenharia",
    description:
      "Describe your need for studies, relay settings, testing, commissioning, or retrofit. Contact by email or WhatsApp with KR’s engineer.",
    url: "/en/contact/",
    siteName: "KR Engenharia",
    locale: "en_US",
    alternateLocale: ["pt_BR"],
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Contact - KR Engenharia", type: "image/jpeg" }],
  },
};

export default function ContactLayoutEn({ children }: { children: React.ReactNode }) {
  return children;
}
