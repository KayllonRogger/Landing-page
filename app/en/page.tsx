import Hero from "../components/Hero";
import TechStack from "../components/TechStack";
import Services from "../components/Services";
import EntryOffer from "../components/EntryOffer";
import RecentProjects from "../components/RecentProjects";
import About from "../components/About";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KR Engenharia - Substation Automation & Power Systems Engineering",
  description: "Intelligent substation automation and electrical power systems engineering. Integrated solutions for reliability, efficiency, and grid digitalization.",
};

export default function HomeEn() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Hero locale="en" />
      <TechStack locale="en" />
      <Services locale="en" />
      <EntryOffer locale="en" />
      <RecentProjects locale="en" />
      <About locale="en" />
    </div>
  );
}

