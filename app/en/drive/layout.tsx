import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Portal | KR Engenharia",
  description: "Secure enterprise workspace for technical engineering documentation and reports.",
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

export default function DriveLayoutEn({ children }: { children: React.ReactNode }) {
  return children;
}
