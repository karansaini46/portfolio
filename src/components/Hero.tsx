"use client";

import { motion } from "framer-motion";
import MagneticButton from "@/components/MagneticButton";
import { portfolio } from "@/data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export default function Hero() {
  const { personalInfo, socialLinks, actions, heroModules } = portfolio;

  return (
    <section id="top" className="relative min-h-screen overflow-hidden px-5 pb-20 pt-32 sm:pt-36">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:min-h-[calc(100vh-9rem)] lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.12, delayChildren: 1.85 }}
          className="max-w-4xl"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-3 rounded-full border border-sky-200/15 bg-white/[0.05] px-4 py-2 text-xs font-medium text-sky-100/90 shadow-[0_0_40px_rgba(14,165,233,0.08)] backdrop-blur"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-300 opacity-45" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-sky-200" />
            </span>
            {personalInfo.availability}
          </motion.div>

          <motion.p variants={fadeUp} className="mt-8 font-mono text-xs uppercase tracking-[0.38em] text-slate-500">
            {personalInfo.positioning}
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="mt-5 max-w-5xl text-balance text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl"
          >
            {personalInfo.headline}
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            {personalInfo.subheadline}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-3">
            <MagneticButton href="#work" ariaLabel={actions.viewProjects} variant="primary">
              {actions.viewProjects}
            </MagneticButton>
            <MagneticButton href={socialLinks.github} ariaLabel={actions.github}>
              {actions.github}
            </MagneticButton>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-xl lg:max-w-none"
          initial={{ opacity: 0, y: 34, rotateX: 10 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ delay: 2.05, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="glow-border glass-panel relative overflow-hidden rounded-[2rem] p-4 sm:p-5">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-200/70 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(125,211,252,0.12),transparent_44%)]" />
            <div className="relative rounded-[1.5rem] border border-white/10 bg-black/30 p-4">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-500" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-sky-200" />
                </div>
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-slate-500">system cockpit</span>
              </div>

              <div className="relative min-h-[25rem] overflow-hidden rounded-3xl border border-white/10 bg-[#070b12] p-4 sm:p-5">
                <div className="animate-scan absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-sky-200/10 to-transparent" />
                <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(to_right,rgba(148,163,184,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.18)_1px,transparent_1px)] [background-size:38px_38px]" />
                <div className="relative flex h-full flex-col gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-slate-500">active build layer</p>
                        <h2 className="mt-2 text-2xl font-semibold text-white">{personalInfo.name}</h2>
                      </div>
                      <div className="rounded-full border border-sky-200/20 bg-sky-200/10 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-sky-100">
                        online
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {heroModules.map((module, index) => (
                      <motion.div
                        key={module.label}
                        className="group rounded-2xl border border-white/10 bg-white/[0.045] p-3 transition-colors hover:border-sky-200/30 hover:bg-white/[0.07]"
                        animate={{ y: [0, index % 2 === 0 ? -4 : 4, 0] }}
                        transition={{ duration: 4 + index * 0.22, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <div className="mb-4 flex items-center justify-between">
                          <span className="h-2 w-2 rounded-full bg-sky-200/80 shadow-[0_0_16px_rgba(125,211,252,0.7)]" />
                          <span className="font-mono text-[0.6rem] text-slate-600">0{index + 1}</span>
                        </div>
                        <p className="text-sm font-semibold text-white">{module.label}</p>
                        <p className="mt-1 text-xs text-slate-500">{module.detail}</p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-auto rounded-2xl border border-white/10 bg-black/25 p-4">
                    <div className="mb-3 flex items-center justify-between font-mono text-[0.65rem] uppercase tracking-[0.24em] text-slate-500">
                      <span>deployment readiness</span>
                      <span className="text-sky-100">stable</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-slate-400 via-sky-200 to-indigo-300"
                        initial={{ width: "24%" }}
                        animate={{ width: "92%" }}
                        transition={{ delay: 2.55, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
