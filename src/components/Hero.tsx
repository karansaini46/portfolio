"use client";

import { motion, Variants } from "framer-motion";
import { portfolio } from "@/data/portfolio";
import Link from "next/link";
import MagneticButton from "./MagneticButton"; // We'll need to create this or ensure it exists

const sentence: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.03,
    },
  },
};

const letter: Variants = {
  hidden: { opacity: 0, y: 50, rotateX: -90 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { type: "spring", damping: 20, stiffness: 200 },
  },
};

export default function Hero() {
  const headline = portfolio.personalInfo.headline;

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center pt-20 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,var(--surface-raised)_0%,transparent_70%)] opacity-30" />
      
      <div className="mx-auto max-w-5xl w-full flex flex-col items-center text-center relative z-10">
        
        {/* Eyebrow */}
        <motion.div
          className="inline-flex items-center gap-2 rounded-full border border-border-visible bg-surface px-4 py-1.5 mb-8 shadow-sm"
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-secondary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-secondary" />
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-text-secondary">
            {portfolio.personalInfo.availability}
          </span>
        </motion.div>

        {/* Main Cinematic Headline */}
        <motion.h1
          className="text-5xl sm:text-7xl md:text-[5rem] lg:text-[6rem] font-sans font-bold tracking-tight text-text-primary text-balance leading-[1.05] mb-8 [perspective:1000px]"
          variants={sentence}
          initial="hidden"
          animate="visible"
        >
          {headline.split("").map((char, index) => (
            <motion.span
              key={char + "-" + index}
              variants={letter}
              className="inline-block"
              style={{ originY: 1.2, originX: 0.5 }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-lg sm:text-xl text-text-secondary max-w-2xl text-balance leading-relaxed mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {portfolio.personalInfo.subheadline}
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <MagneticButton variant="primary" href="/projects" ariaLabel="View Projects" className="relative overflow-hidden rounded-xl px-8 py-4 font-sans text-sm font-semibold shadow-[0_0_40px_rgba(180,95,53,0.2)] transition-shadow hover:shadow-[0_0_60px_rgba(180,95,53,0.4)] border-none">
            <span className="relative z-10">{portfolio.actions.viewProjects}</span>
          </MagneticButton>
          
          <MagneticButton variant="secondary" href="/about" ariaLabel="Learn More" className="rounded-xl border border-border-visible bg-surface px-8 py-4 font-sans text-sm font-medium text-text-primary hover:bg-surface-raised hover:border-text-muted transition-all">
            <span className="relative z-10">Learn more</span>
          </MagneticButton>
        </motion.div>
      </div>

      {/* Ambient glowing orb behind text */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-primary opacity-[0.04] blur-[120px] rounded-full pointer-events-none will-change-transform"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.04 }}
        transition={{ delay: 0.5, duration: 2, ease: "easeOut" }}
      />
    </section>
  );
}
