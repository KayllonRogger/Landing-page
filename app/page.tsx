import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Services from "./components/Services";
import RecentProjects from "./components/RecentProjects";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import About from "./components/About";
import EntryOffer from "./components/EntryOffer";

export default function Home() {
  return (
    <div className="flex flex-col bg-white">
      <Hero />
      <TechStack />
      <Services />
      <RecentProjects />
      <HowItWorks />
      <About />
      <EntryOffer />
    </div>
  );
}
