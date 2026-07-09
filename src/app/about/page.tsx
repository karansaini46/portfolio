"use client";

import { motion } from "framer-motion";
import AnimatedBackground from "@/components/AnimatedBackground";
import CursorSpotlight from "@/components/CursorSpotlight";
import Navigation from "@/components/Navigation";
import CommandPalette from "@/components/CommandPalette";
import About from "@/components/About";
import StackSnapshot from "@/components/StackSnapshot";
import ArchitectureExplorer from "@/components/ArchitectureExplorer";
import ContactCTA from "@/components/ContactCTA";
import { portfolio } from "@/data/portfolio";
import BrandMark from "@/components/brand/BrandMark";

// Scroll reveal animation wrapper
const ScrollReveal = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

export default function AboutPage() {
  return (
    <>
      <AnimatedBackground />
      <CursorSpotlight />
      <Navigation />
      <CommandPalette />
      
      <main className="relative z-10 mx-auto max-w-5xl px-6 pt-32 pb-24 min-h-screen">
        {/* Page Header */}
        <div className="mb-24 md:mb-32 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8 p-4 rounded-full bg-surface-raised border border-border-visible shadow-xl"
          >
            <BrandMark size={48} className="text-accent-primary" />
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-bold tracking-tight text-text-primary text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            The Developer Behind the Systems
          </motion.h1>
          <motion.p 
            className="mt-6 text-text-secondary text-lg max-w-2xl text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Full-stack products across AI workflows, realtime collaboration, developer tools, and scalable technical platforms.
          </motion.p>
        </div>

        <div className="space-y-32 md:space-y-48">
          {/* About Section */}
          <ScrollReveal>
            <About />
          </ScrollReveal>

          {/* Architecture/Experience Explorer */}
          <ScrollReveal>
            <div className="rounded-3xl border border-border-subtle bg-surface/30 backdrop-blur-sm p-4 sm:p-8">
              <ArchitectureExplorer />
            </div>
          </ScrollReveal>

          {/* Tech Stack */}
          <ScrollReveal>
            <StackSnapshot />
          </ScrollReveal>

          {/* Contact */}
          <ScrollReveal>
            <div className="rounded-3xl border border-accent-primary/20 bg-[radial-gradient(ellipse_at_top,rgba(180,95,53,0.05)_0%,transparent_70%)] bg-surface p-8 sm:p-12 text-center">
              <ContactCTA />
            </div>
          </ScrollReveal>
        </div>
      </main>
      
      <footer className="relative z-10 border-t border-border-subtle bg-surface/50 backdrop-blur-md px-5 py-8 text-center font-mono text-[10px] text-text-muted">
        © {new Date().getFullYear()} {portfolio.personalInfo.name}. Engineered with precision.
      </footer>
    </>
  );
}
