"use client";

import { motion } from "framer-motion";
import ScreenshotGallery from "@/components/ScreenshotGallery";
import { type Project } from "@/data/portfolio";

type ProjectCaseStudyProps = {
  project: Project;
};

export default function ProjectCaseStudy({ project }: ProjectCaseStudyProps) {
  return (
    <motion.section
      id={project.slug}
      className="relative scroll-mt-24 py-8 border-b border-border-subtle last:border-b-0"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="relative">
        
        {/* Header: Title, Badge, Type */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border-subtle pb-6 mb-8">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded border border-accent-secondary/35 bg-accent-secondary/5 px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-accent-secondary">
                {project.badge}
              </span>
              <span className="font-mono text-xs text-text-muted">{project.type}</span>
            </div>
            <h2 className="mt-3 text-2xl sm:text-4xl font-sans font-bold tracking-tight text-text-primary">
              {project.title}
            </h2>
          </div>

          {/* Action Links */}
          {(project.liveUrl || project.githubUrl) && (
            <div className="flex flex-wrap gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded bg-accent-primary px-4 py-2 font-mono text-xs uppercase tracking-wider text-white hover:bg-accent-primary/90 transition-colors"
                >
                  Launch System ↗
                </a>
              )}
              
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded border border-border-subtle bg-surface px-4 py-2 font-mono text-xs uppercase tracking-wider text-text-primary hover:border-border-visible transition-colors"
                >
                  Source Code
                </a>
              )}
            </div>
          )}
        </div>

        {/* Screenshots Gallery Section */}
        <div className="mb-10">
          <ScreenshotGallery title={project.title} screenshots={project.screenshots} large />
        </div>

        {/* Content Columns */}
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Left Column: Details, Problem */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-accent-secondary border-b border-border-subtle pb-1 mb-3">
                System Overview
              </h4>
              <p className="text-sm text-text-secondary leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-accent-secondary border-b border-border-subtle pb-1 mb-3">
                Problem Statement
              </h4>
              <p className="text-xs text-text-secondary leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-accent-secondary border-b border-border-subtle pb-1 mb-3">
                Target Demographics
              </h4>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.targetUsers.map((user) => (
                  <span
                    key={user}
                    className="rounded border border-border-subtle bg-surface px-2.5 py-1 font-mono text-[10px] text-text-secondary"
                  >
                    {user}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Features and Tech Stack */}
          <div className="lg:col-span-5 space-y-6 lg:border-l lg:border-border-subtle lg:pl-8">
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-accent-secondary border-b border-border-subtle pb-1 mb-3">
                Core Capabilities
              </h4>
              <ul className="space-y-2 list-none p-0 text-xs text-text-secondary">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2.5">
                    <span className="text-accent-primary mt-0.5">▪</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-accent-secondary border-b border-border-subtle pb-1 mb-3">
                Component Technology Stack
              </h4>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded border border-border-subtle bg-surface px-2.5 py-1 font-mono text-[10px] text-text-primary"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </motion.section>
  );
}
