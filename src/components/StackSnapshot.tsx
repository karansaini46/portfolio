"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { portfolio } from "@/data/portfolio";

export default function StackSnapshot() {
  return (
    <section id="stack" className="relative px-5 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="engineering stack"
          title="A focused system map."
          description="Technologies structured by architecture layers, selected for reliability, scalability, and developer experience."
        />

        <div className="glow-border glass-panel rounded-[2rem] p-5 sm:p-7 lg:p-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {portfolio.skills.map((group, index) => (
              <motion.div
                key={group.title}
                className="relative rounded-2xl border border-white/5 bg-white/[0.02] p-4 transition-all duration-300 hover:border-sky-300/20 hover:bg-white/[0.04]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-200/20 to-transparent" />
                <h4 className="font-mono text-[0.7rem] uppercase tracking-[0.24em] text-sky-200/80">
                  {group.title}
                </h4>
                <ul className="mt-4 space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs font-medium text-slate-300">
                      <span className="h-1 w-1 rounded-full bg-sky-200/60" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
