import About from "@/components/About";
import AnimatedBackground from "@/components/AnimatedBackground";
import BuildProof from "@/components/BuildProof";
import Contact from "@/components/Contact";
import CursorSpotlight from "@/components/CursorSpotlight";
import Hero from "@/components/Hero";
import IntroLoader from "@/components/IntroLoader";
import Navigation from "@/components/Navigation";
import ProjectShowcase from "@/components/ProjectShowcase";
import StackSystem from "@/components/StackSystem";
import { portfolio } from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <IntroLoader />
      <AnimatedBackground />
      <CursorSpotlight />
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <ProjectShowcase />
        <StackSystem />
        <BuildProof />
        <About />
        <Contact />
      </main>
      <footer className="relative z-10 border-t border-white/10 px-5 py-8 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {portfolio.personalInfo.name}. Built for product-grade full-stack work.
      </footer>
    </>
  );
}
