"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import MagneticButton from "@/components/MagneticButton";
import ScreenshotGallery from "@/components/ScreenshotGallery";
import SectionHeader from "@/components/SectionHeader";
import { flagshipProject, portfolio } from "@/data/portfolio";

export default function ShowcasePreview() {
  const project = flagshipProject;

  return (
    <section id="work" className="relative px-5 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="selected work"
          title="Projects built like products, not exercises."
          description="A showcase of systems combining interface depth, API design, database schemas, and background automation."
        />

        <motion.article
          className="glow-border glass-panel relative overflow-hidden rounded-[2.25rem] p-5 sm:p-7 lg:p-8"
          initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(125,211,252,0.14),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(79,70,229,0.12),transparent_32%)]" />
          <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -36, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] as const }}
            >
              <ScreenshotGallery title={project.title} screenshots={project.screenshots} large />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 36, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] as const, delay: 0.08 }}
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-sky-200/25 bg-sky-200/10 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.24em] text-sky-100">
                  {project.badge}
                </span>
                <span className="text-sm text-slate-500">{project.type}</span>
              </div>
              <h3 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                {project.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{project.shortDescription}</p>

              {/* Stack tags: max 6 */}
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.slice(0, 6).map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-sky-200/15 bg-sky-200/[0.07] px-2.5 py-1 text-xs text-sky-100/80"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Highlights: max 3 */}
              <div className="mt-6 grid gap-2.5">
                {project.highlights.slice(0, 3).map((highlight) => (
                  <div key={highlight} className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-2.5 text-xs text-slate-300">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-sky-200" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/work#ghostcto" passHref legacyBehavior>
                  <MagneticButton ariaLabel={`View ${project.title} Case Study`} variant="primary">
                    {portfolio.actions.viewCaseStudy}
                  </MagneticButton>
                </Link>
                <MagneticButton href={project.liveUrl} ariaLabel={`${project.title} ${portfolio.actions.liveDemo}`}>
                  {project.liveUrl ? portfolio.actions.liveDemo : "Coming Soon"}
                </MagneticButton>
              </div>
            </motion.div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
