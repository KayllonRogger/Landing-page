import Hero from "./components/Hero";
import Problems from "./components/Problems/Problems";
import TechStack from "./components/TechStack";
import Services from "./components/Services";
import RecentProjects from "./components/RecentProjects";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import About from "./components/About";
import EntryOffer from "./components/EntryOffer";

export default function Home() {
  return (
    <div className="flex flex-col bg-white">
      {/* 1. Problems KR solves  2. Services  3. Why trust (expertise, who, track record)  4. How hiring works  5. Contact */}
      <Hero />
      <Problems />
      <Services />
      <TechStack />
      <About />
      <RecentProjects />
      <HowItWorks />
      <EntryOffer />
    </div>
  );
}
