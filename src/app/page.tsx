"use client";

import AnimatedBackground from "@/components/AnimatedBackground";
import CursorSpotlight from "@/components/CursorSpotlight";
import Hero from "@/components/Hero";
import IntroLoader from "@/components/IntroLoader";
import Navigation from "@/components/Navigation";
import ShowcasePreview from "@/components/ShowcasePreview";
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
      
      <main className="relative z-10 flex flex-col min-h-screen">
        <Hero />
        <div className="pb-32">
          <ShowcasePreview />
        </div>
      </main>

      <footer className="relative z-10 border-t border-border-subtle bg-surface/50 backdrop-blur-md px-5 py-8 text-center font-mono text-[10px] text-text-muted will-change-transform">
        © {new Date().getFullYear()} {portfolio.personalInfo.name}. Engineered with precision.
      </footer>
    </>
  );
}
