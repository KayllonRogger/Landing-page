import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import GeoDetector from "./components/GeoDetector";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://krconsultoria.com.br";
const DEFAULT_TITLE = "KR Engenharia - Automação de Subestações & Sistemas de Energia";
const DEFAULT_DESCRIPTION =
  "Automação inteligente de subestações e sistemas de energia. Engenharia integrada para confiabilidade, eficiência e digitalização da rede elétrica. CNPJ: 68.797.626/0001-04 • CREA- nº 141854962-2.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | KR Engenharia",
  },
  description: DEFAULT_DESCRIPTION,
  authors: [{ name: "KR Consultoria e Soluções em Engenharia LTDA" }],
  keywords: [
    "Automação de Subestações",
    "Sistemas de Energia",
    "SAS",
    "SCADA",
    "IEC 61850",
    "Proteção de Sistemas Elétricos",
    "Comissionamento de Subestações",
    "MiCOM",
    "SIPROTEC",
    "BCU C264",
  ],
  creator: "KR Engenharia",
  publisher: "KR Engenharia",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
    languages: {
      "pt-BR": "/",
      "en-US": "/en/",
    },
  },
  openGraph: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: "/",
    siteName: "KR Engenharia",
    locale: "pt_BR",
    alternateLocale: ["en_US"],
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: DEFAULT_TITLE,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description:
      "Automação inteligente de subestações e sistemas de energia. CNPJ: 68.797.626/0001-04 • CREA- nº 141854962-2.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <GeoDetector />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
