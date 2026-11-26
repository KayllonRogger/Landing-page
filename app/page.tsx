import Hero from "./components/Hero";
import Services from "./components/Services";
import RecentProjects from "./components/RecentProjects";
import About from "./components/About";
import EntryOffer from "./components/EntryOffer";

export default function Home() {
  return (
    <div className="flex flex-col bg-white">
      {/* What KR does → which problems (solutions) → why trust → selected experience → how to hire */}
      <Hero />
      <Services />
      <About />
      <RecentProjects />
      <EntryOffer />
    </div>
  );
}
