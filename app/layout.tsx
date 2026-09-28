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
const DEFAULT_TITLE = "KR Engenharia - Engenharia de Proteção e Automação Multimarcas";
const DEFAULT_DESCRIPTION =
  "Engenharia de proteção e automação com experiência multimarcas: parametrização, testes e comissionamento em plataformas ABB, Schneider Electric, SEL e Siemens, além de experiência em comissionamento envolvendo IEDs GE. Estudos elétricos e retrofit.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | KR Engenharia",
  },
  description: DEFAULT_DESCRIPTION,
  authors: [{ name: "KR Consultoria e Soluções em Engenharia LTDA" }],
  keywords: [
    "Engenharia de Proteção",
    "Parametrização de Relés",
    "Testes de Proteção",
    "Comissionamento de Subestações",
    "Estudos Elétricos",
    "Estudos de Seletividade",
    "IEC 61850",
    "ABB Relion",
    "GE",
    "Schneider Electric MiCOM",
    "SEL",
    "Siemens SIPROTEC",
    "Retrofit de Proteção",
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
      "Estudos elétricos, parametrização, testes e comissionamento de sistemas de proteção em plataformas ABB, GE, Schneider Electric, SEL e Siemens.",
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
        <main id="conteudo" className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
