import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portal do Cliente | KR Engenharia",
  description: "Ambiente protegido com isolamento por empresa para compartilhamento seguro de documentos e relatórios técnicos.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "none",
      "max-snippet": -1,
    },
  },
};

export default function DriveLayout({ children }: { children: React.ReactNode }) {
  return children;
}
