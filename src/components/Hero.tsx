"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import MagneticButton from "@/components/MagneticButton";
import { portfolio } from "@/data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 16, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const moduleEntrance = {
  hidden: { opacity: 0, y: 14, scale: 0.95 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.5 + index * 0.06,
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as const
    }
  })
};

export default function Hero() {
  const { personalInfo, socialLinks, actions, heroModules } = portfolio;

  return (
    <section id="top" className="relative min-h-[85vh] lg:min-h-[calc(100vh-6rem)] flex items-center overflow-hidden px-5 pb-12 pt-28 sm:pt-32">
      <div className="mx-auto grid max-w-7xl w-full items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.08, delayChildren: 0.2 }}
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

          <motion.p variants={fadeUp} className="mt-6 font-mono text-[0.65rem] uppercase tracking-[0.38em] text-slate-500">
            {personalInfo.positioning}
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="mt-4 max-w-5xl text-balance text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl"
          >
            {personalInfo.headline}
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            {personalInfo.subheadline}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-7 flex flex-wrap gap-3">
            <Link href="/work" passHref legacyBehavior>
              <MagneticButton ariaLabel={actions.viewProjects} variant="primary">
                {actions.viewProjects}
              </MagneticButton>
            </Link>
            <MagneticButton href={socialLinks.github} ariaLabel={actions.github}>
              {actions.github}
            </MagneticButton>
            <MagneticButton href={socialLinks.resume} ariaLabel="Resume">
              {socialLinks.resume ? "Resume" : "Resume (Coming soon)"}
            </MagneticButton>
            <MagneticButton href="#contact" ariaLabel="Contact" variant="ghost">
              Contact
            </MagneticButton>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-xl lg:max-w-none"
          initial={{ opacity: 0, y: 24, rotateX: 6 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ delay: 0.45, duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="glow-border glass-panel relative overflow-hidden rounded-[2rem] p-4 sm:p-5">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-200/70 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(125,211,252,0.12),transparent_44%)]" />
            <div className="relative rounded-[1.5rem] border border-white/10 bg-black/30 p-4">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-slate-500" />
                  <span className="h-2 w-2 rounded-full bg-slate-400" />
                  <span className="h-2 w-2 rounded-full bg-sky-200" />
                </div>
                <span className="font-mono text-[0.6rem] uppercase tracking-[0.28em] text-slate-500">system cockpit</span>
              </div>

              <div className="relative min-h-[20rem] lg:min-h-[22rem] overflow-hidden rounded-2xl border border-white/10 bg-[#070b12] p-4">
                <div className="animate-scan absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-sky-200/10 to-transparent" />
                <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,rgba(148,163,184,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.15)_1px,transparent_1px)] [background-size:32px_32px]" />
                <div className="relative flex h-full flex-col gap-4">
                  <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3.5">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="font-mono text-[0.6rem] uppercase tracking-[0.28em] text-slate-500">active build layer</p>
                        <h2 className="mt-1 text-xl font-semibold text-white">{personalInfo.name}</h2>
                      </div>
                      <div className="rounded-full border border-sky-200/20 bg-sky-200/10 px-2.5 py-0.5 font-mono text-[0.6rem] uppercase tracking-[0.22em] text-sky-100">
                        online
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                    {heroModules.map((module, index) => (
                      <motion.div
                        key={module.label}
                        custom={index}
                        variants={moduleEntrance}
                        initial="hidden"
                        animate="visible"
                      >
                        <motion.div
                          className="group rounded-xl border border-white/10 bg-white/[0.045] p-2.5 transition-colors hover:border-sky-200/30 hover:bg-white/[0.07] h-full"
                          animate={{ y: [0, index % 2 === 0 ? -3 : 3, 0] }}
                          transition={{ duration: 4 + index * 0.22, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <div className="mb-2.5 flex items-center justify-between">
                            <span className="h-1.5 w-1.5 rounded-full bg-sky-200/80 shadow-[0_0_12px_rgba(125,211,252,0.6)]" />
                            <span className="font-mono text-[0.55rem] text-slate-655 font-semibold">0{index + 1}</span>
                          </div>
                          <p className="text-xs font-semibold text-white">{module.label}</p>
                          <p className="mt-0.5 text-[0.65rem] text-slate-500">{module.detail}</p>
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-auto rounded-xl border border-white/10 bg-black/25 p-3.5">
                    <div className="mb-2.5 flex items-center justify-between font-mono text-[0.6rem] uppercase tracking-[0.24em] text-slate-500">
                      <span>deployment readiness</span>
                      <span className="text-sky-100">stable</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        className="h-full rounded-full bg-[linear-gradient(90deg,#64748b,#bae6fd,#64748b,#c7d2fe)] bg-[size:200%_100%] animate-shine"
                        initial={{ width: "24%" }}
                        animate={{ width: "92%" }}
                        transition={{ delay: 0.8, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
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
