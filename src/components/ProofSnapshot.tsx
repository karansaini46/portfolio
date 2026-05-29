"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { portfolio } from "@/data/portfolio";

export default function ProofSnapshot() {
  return (
    <section id="proof" className="relative px-5 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="engineering proof"
          title="Capability shown through product depth."
          description="A summary of architectural workflows and systems Karan is comfortable discussing in detail during an interview."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {portfolio.proofPoints.map((point, index) => (
            <motion.article
              key={point.title}
              className="glow-border glass-panel flex flex-col justify-between rounded-[1.75rem] p-5"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.05, duration: 0.52 }}
              whileHover={{ y: -4 }}
            >
              <div>
                <div className="mb-5 flex items-center justify-between">
                  <span className="font-mono text-[0.65rem] uppercase tracking-[0.24em] text-slate-500">
                    capability {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-200 shadow-[0_0_12px_rgba(125,211,252,0.7)]" />
                </div>
                <h3 className="text-lg font-semibold text-white tracking-tight">{point.title}</h3>
                <p className="mt-3 text-xs leading-6 text-slate-400">{point.description}</p>
              </div>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {point.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/5 bg-white/[0.03] px-2.5 py-0.5 text-[0.65rem] text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
