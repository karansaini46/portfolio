"use client";

import AnimatedBackground from "@/components/AnimatedBackground";
import ContactCTA from "@/components/ContactCTA";
import CursorSpotlight from "@/components/CursorSpotlight";
import Hero from "@/components/Hero";
import IntroLoader from "@/components/IntroLoader";
import Navigation from "@/components/Navigation";
import ShowcasePreview from "@/components/ShowcasePreview";
import ArchitectureExplorer from "@/components/ArchitectureExplorer";
import StackSnapshot from "@/components/StackSnapshot";
import About from "@/components/About";
import CommandPalette from "@/components/CommandPalette";
import { portfolio } from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <IntroLoader />
      <AnimatedBackground />
      <CursorSpotlight />
      <Navigation />
      <CommandPalette />
      
      <main className="relative z-10">
        <Hero />
        <ShowcasePreview />
        <ArchitectureExplorer />
        <StackSnapshot />
        <About />
        <ContactCTA />
      </main>

      <footer className="relative z-10 border-t border-border-subtle px-5 py-8 text-center text-xs text-text-muted">
        © {new Date().getFullYear()} {portfolio.personalInfo.name}. Built for product-grade full-stack work.
      </footer>
    </>
  );
}
