"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { portfolio } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="relative px-5 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <SectionHeader eyebrow={portfolio.about.eyebrow} title={portfolio.about.title} />

        <motion.div
          className="glass-panel relative overflow-hidden rounded-[2rem] p-6 sm:p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-200/60 to-transparent" />
          <div className="space-y-6 text-lg leading-9 text-slate-300">
            {portfolio.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8 rounded-3xl border border-white/10 bg-black/20 p-5">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-slate-500">working range</p>
            <div className="mt-4 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
              <span>Product UI</span>
              <span>API design</span>
              <span>Database schema</span>
              <span>Deployment flow</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
