import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Services from "./components/Services";
import EntryOffer from "./components/EntryOffer";
import RecentProjects from "./components/RecentProjects";
import About from "./components/About";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Hero />
      <TechStack />
      <Services />
      <EntryOffer />
      <RecentProjects />
      <About />
    </div>
  );
}
