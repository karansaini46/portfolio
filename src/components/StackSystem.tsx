"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { portfolio } from "@/data/portfolio";

export default function StackSystem() {
  const marqueeItems = portfolio.skills.flatMap((group) => group.items);

  return (
    <section id="stack" className="relative overflow-hidden px-5 py-24 sm:py-32">
      <div className="mx-auto max-w-[90rem]">
        <SectionHeader
          eyebrow="engineering stack"
          title="A system map for building product-grade applications."
          description="The stack is organized by the parts of a product I can ship: interface, services, data, realtime behavior, automation, and deployment."
        />

        <div className="glass-panel overflow-hidden rounded-[2.25rem] p-4 sm:p-6 lg:p-8">
          <div className="relative grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <motion.div
              className="relative mx-auto flex aspect-square w-full max-w-[31rem] items-center justify-center rounded-full border border-white/10 bg-black/20"
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="absolute inset-[12%] rounded-full border border-dashed border-slate-700/70" />
              <div className="absolute inset-[25%] rounded-full border border-dashed border-slate-700/70" />
              <div className="absolute inset-[38%] rounded-full border border-sky-200/20 bg-sky-200/[0.04]" />
              <div className="relative z-10 text-center">
                <p className="font-mono text-xs uppercase tracking-[0.32em] text-slate-500">core</p>
                <p className="mt-3 text-3xl font-semibold text-white">Full Stack</p>
                <p className="mt-2 text-sm text-slate-500">product systems</p>
              </div>
              {portfolio.skills.slice(0, 7).map((group, index) => {
                const angle = (index / 7) * Math.PI * 2 - Math.PI / 2;
                const x = Math.cos(angle) * 42;
                const y = Math.sin(angle) * 42;
                return (
                  <motion.div
                    key={group.title}
                    className="absolute rounded-full border border-white/10 bg-[#0b111b]/90 px-3 py-2 text-center text-xs text-slate-200 shadow-xl backdrop-blur"
                    style={{ left: `${50 + x}%`, top: `${50 + y}%`, transform: "translate(-50%, -50%)" }}
                    animate={{ y: [0, index % 2 ? -6 : 6, 0] }}
                    transition={{ duration: 4.2 + index * 0.2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {group.title}
                  </motion.div>
                );
              })}
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              {portfolio.skills.map((group, index) => (
                <motion.div
                  key={group.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.045] p-5 transition-colors hover:border-sky-200/25 hover:bg-white/[0.065]"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: index * 0.04, duration: 0.48 }}
                >
                  <h3 className="font-mono text-xs uppercase tracking-[0.24em] text-sky-100/70">{group.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-slate-300">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-8 overflow-hidden border-y border-white/10 py-4">
            <div className="animate-marquee flex w-max gap-3">
              {[...marqueeItems, ...marqueeItems].map((item, index) => (
                <span
                  key={`${item}-${index}`}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-slate-500"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
