"use client";

import { motion } from "framer-motion";
import MagneticButton from "@/components/MagneticButton";
import ProjectCard from "@/components/ProjectCard";
import ScreenshotGallery from "@/components/ScreenshotGallery";
import SectionHeader from "@/components/SectionHeader";
import { flagshipProject, portfolio, supportingProjects } from "@/data/portfolio";

export default function ProjectShowcase() {
  return (
    <section id="work" className="relative px-5 py-24 sm:py-32">
      <div className="mx-auto max-w-[90rem]">
        <SectionHeader
          eyebrow="selected work"
          title="Projects built like products, not exercises."
          description="Each build is positioned as a system: interface, API layer, data model, workflows, deployment posture, and the details that make it feel real."
        />

        <motion.article
          className="glow-border glass-panel relative overflow-hidden rounded-[2.25rem] p-5 sm:p-7 lg:p-8"
          initial={{ opacity: 0, y: 38 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(125,211,252,0.16),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(79,70,229,0.12),transparent_32%)]" />
          <div className="relative grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <ScreenshotGallery title={flagshipProject.title} screenshots={flagshipProject.screenshots} large />

            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-sky-200/25 bg-sky-200/10 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.24em] text-sky-100">
                  {flagshipProject.complexity}
                </span>
                <span className="text-sm text-slate-500">{flagshipProject.type}</span>
              </div>
              <h3 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                {flagshipProject.title}
              </h3>
              <p className="mt-5 text-base leading-8 text-slate-300">{flagshipProject.description}</p>

              <div className="mt-7 flex flex-wrap gap-2">
                {flagshipProject.architecture.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-sky-200/15 bg-sky-200/[0.07] px-3 py-1.5 text-xs text-sky-100/85"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 grid gap-3">
                {flagshipProject.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-3 text-sm text-slate-300">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-sky-200" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <MagneticButton href={flagshipProject.liveUrl} ariaLabel={`${flagshipProject.title} ${portfolio.actions.liveDemo}`} variant="primary">
                  {portfolio.actions.liveDemo}
                </MagneticButton>
                <MagneticButton href={flagshipProject.githubUrl} ariaLabel={`${flagshipProject.title} ${portfolio.actions.github}`}>
                  {portfolio.actions.github}
                </MagneticButton>
              </div>
            </div>
          </div>
        </motion.article>

        <div className="mt-8 grid gap-7 lg:grid-cols-2">
          {supportingProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
