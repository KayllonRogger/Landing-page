import Hero from "../components/Hero";
import Services from "../components/Services";
import RecentProjects from "../components/RecentProjects";
import About from "../components/About";
import EntryOffer from "../components/EntryOffer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "KR Engenharia - Protection System Testing, Commissioning, and Fault Diagnosis" },
  description: "Protection testing and commissioning, fault diagnosis, IEC 61850 retrofits, and electrical studies, with multi-vendor experience on ABB, Schneider Electric, SEL, and Siemens IEDs.",
};

export default function HomeEn() {
  return (
    <div className="flex flex-col bg-white">
      {/* What KR does → which problems (solutions) → why trust → selected experience → how to hire */}
      <Hero locale="en" />
      <Services locale="en" />
      <About locale="en" />
      <RecentProjects locale="en" />
      <EntryOffer locale="en" />
    </div>
  );
}
