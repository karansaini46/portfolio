"use client";

import { motion } from "framer-motion";
import MagneticButton from "@/components/MagneticButton";
import ScreenshotGallery from "@/components/ScreenshotGallery";
import { portfolio, type Project } from "@/data/portfolio";

type ProjectCaseStudyProps = {
  project: Project;
};

export default function ProjectCaseStudy({ project }: ProjectCaseStudyProps) {
  return (
    <motion.section
      id={project.slug}
      className="relative scroll-mt-24 px-5 py-12 sm:py-16"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="glow-border glass-panel relative overflow-hidden rounded-[2.25rem] p-5 sm:p-7 lg:p-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(125,211,252,0.08),transparent_36%),radial-gradient(circle_at_80%_100%,rgba(79,70,229,0.06),transparent_32%)]" />
          
          <div className="relative">
            {/* Header: Title, Badge, Type */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/5 pb-6">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-sky-200/25 bg-sky-200/10 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.24em] text-sky-100">
                    {project.badge}
                  </span>
                  <span className="text-sm text-slate-500">{project.type}</span>
                </div>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                  {project.title}
                </h2>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                <MagneticButton href={project.liveUrl} ariaLabel={`${project.title} ${portfolio.actions.liveDemo}`} variant="primary">
                  {project.liveUrl ? portfolio.actions.liveDemo : "Coming Soon"}
                </MagneticButton>
                <MagneticButton href={project.githubUrl} ariaLabel={`${project.title} ${portfolio.actions.github}`}>
                  {project.githubUrl ? portfolio.actions.github : "Private Repo"}
                </MagneticButton>
              </div>
            </div>

            {/* Screenshots Gallery Section */}
            <div className="mt-8">
              <ScreenshotGallery title={project.title} screenshots={project.screenshots} large />
            </div>

            {/* Content Columns */}
            <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              {/* Left Column: Details, Problem, Target Users */}
              <div className="space-y-8">
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-[0.24em] text-sky-200/80">overview</h4>
                  <p className="mt-3 text-base leading-8 text-slate-300">
                    {project.fullDescription}
                  </p>
                </div>

                <div>
                  <h4 className="font-mono text-xs uppercase tracking-[0.24em] text-sky-200/80">problem solved</h4>
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {project.problem}
                  </p>
                </div>

                <div>
                  <h4 className="font-mono text-xs uppercase tracking-[0.24em] text-sky-200/80">target users</h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.targetUsers.map((user) => (
                      <span key={user} className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 text-xs text-slate-300">
                        {user}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Features and Tech Stack */}
              <div className="space-y-8 lg:border-l lg:border-white/5 lg:pl-10">
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-[0.24em] text-sky-200/80">core features</h4>
                  <div className="mt-4 grid gap-3">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.015] p-3 text-sm text-slate-300">
                        <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-sky-200/80" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-mono text-xs uppercase tracking-[0.24em] text-sky-200/80">technology stack</h4>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span key={item} className="rounded-full border border-sky-200/10 bg-sky-200/[0.04] px-3 py-1.5 text-xs text-sky-100/90 font-medium">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
