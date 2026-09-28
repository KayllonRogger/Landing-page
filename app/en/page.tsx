import Hero from "../components/Hero";
import TechStack from "../components/TechStack";
import Services from "../components/Services";
import RecentProjects from "../components/RecentProjects";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import About from "../components/About";
import EntryOffer from "../components/EntryOffer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "KR Engenharia - Multi-Vendor Protection and Automation Engineering" },
  description: "Relay settings, testing, and commissioning on ABB, Schneider Electric, SEL, and Siemens platforms, plus commissioning experience involving GE IEDs. Electrical studies, retrofits, and field support.",
};

export default function HomeEn() {
  return (
    <div className="flex flex-col bg-white">
      <Hero locale="en" />
      <TechStack locale="en" />
      <Services locale="en" />
      <RecentProjects locale="en" />
      <HowItWorks locale="en" />
      <About locale="en" />
      <EntryOffer locale="en" />
    </div>
  );
}
