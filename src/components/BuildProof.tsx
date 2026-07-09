"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { portfolio } from "@/data/portfolio";

export default function BuildProof() {
  return (
    <section id="proof" className="relative px-5 py-24 sm:py-32">
      <div className="mx-auto max-w-[90rem]">
        <SectionHeader
          eyebrow="engineering proof"
          title="Verified capability through real build depth."
          description="Capability is shown through product systems, architecture decisions, and workflows Karan can discuss clearly in an interview."
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {portfolio.proofPoints.map((point, index) => (
            <motion.article
              key={point.title}
              className="glow-border glass-panel rounded-[1.75rem] p-5"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.04, duration: 0.52 }}
              whileHover={{ y: -6 }}
            >
              <div className="mb-7 flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-[0.26em] text-slate-500">proof {String(index + 1).padStart(2, "0")}</span>
                <span className="h-2 w-2 rounded-full bg-sky-200 shadow-[0_0_18px_rgba(125,211,252,0.75)]" />
              </div>
              <h3 className="text-xl font-semibold text-white">{point.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-400">{point.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {point.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300">
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
