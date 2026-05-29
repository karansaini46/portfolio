"use client";

import { motion } from "framer-motion";
import MagneticButton from "@/components/MagneticButton";
import ScreenshotGallery from "@/components/ScreenshotGallery";
import { portfolio, type Project } from "@/data/portfolio";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      className="glow-border glass-panel group overflow-hidden rounded-[2rem] p-4 sm:p-5"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
    >
      <ScreenshotGallery title={project.title} screenshots={project.screenshots} />

      <div className="pt-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.24em] text-sky-100/80">
            {project.complexity}
          </span>
          <span className="text-sm text-slate-500">{project.type}</span>
        </div>
        <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white">{project.title}</h3>
        <p className="mt-4 text-sm leading-7 text-slate-400">{project.description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span key={item} className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs text-slate-300">
              {item}
            </span>
          ))}
        </div>

        <div className="mt-7 grid gap-2">
          {project.highlights.map((highlight) => (
            <div key={highlight} className="flex items-start gap-3 text-sm text-slate-300">
              <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-sky-200/80" />
              <span>{highlight}</span>
            </div>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap gap-3 border-t border-white/10 pt-5">
          <MagneticButton href={project.liveUrl} ariaLabel={`${project.title} ${portfolio.actions.liveDemo}`} variant="primary">
            {portfolio.actions.liveDemo}
          </MagneticButton>
          <MagneticButton href={project.githubUrl} ariaLabel={`${project.title} ${portfolio.actions.github}`}>
            {portfolio.actions.github}
          </MagneticButton>
        </div>
      </div>
    </motion.article>
  );
}
