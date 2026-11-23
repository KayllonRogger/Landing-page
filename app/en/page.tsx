import Hero from "../components/Hero";
import Problems from "../components/Problems/Problems";
import TechStack from "../components/TechStack";
import Services from "../components/Services";
import RecentProjects from "../components/RecentProjects";
import HowItWorks from "../components/HowItWorks/HowItWorks";
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
      {/* 1. Problems KR solves  2. Services  3. Why trust (expertise, who, track record)  4. How hiring works  5. Contact */}
      <Hero locale="en" />
      <Problems locale="en" />
      <Services locale="en" />
      <TechStack locale="en" />
      <About locale="en" />
      <RecentProjects locale="en" />
      <HowItWorks locale="en" />
      <EntryOffer locale="en" />
    </div>
  );
}
