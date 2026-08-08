import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import RecentProjects from "./components/RecentProjects";
import About from "./components/About";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <RecentProjects />
      <About />
      <Footer />
    </div>
  );
}
