import Image from "next/image";
import Hero from "./components/Hero";
import Services from "./components/Services";
import RecentProjects from "./components/RecentProjects";
import About from "./components/About";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Hero />
      <Services />
      <RecentProjects />
      <About />
    </div>
  );
}
