"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { selectedProjects } from "@/data/portfolio";
import ScreenshotGallery from "@/components/ScreenshotGallery";

export default function ShowcasePreview() {
  const [activeSlug, setActiveSlug] = useState(selectedProjects[0].slug);
  const activeProject = selectedProjects.find((p) => p.slug === activeSlug) || selectedProjects[0];

  useEffect(() => {
    const handleSelect = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        setActiveSlug(customEvent.detail);
      }
    };
    window.addEventListener("select-project", handleSelect);
    return () => window.removeEventListener("select-project", handleSelect);
  }, []);

  return (
    <section id="selected-systems" className="relative px-5 py-24 sm:py-32 border-b border-border-subtle">
      {/* Structural guidelines */}
      <div className="absolute inset-y-0 left-1/4 w-px bg-border-subtle opacity-20 pointer-events-none" />

      <div className="mx-auto max-w-[90rem]">
        {/* Section Header */}
        <div className="mb-16 text-left max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-accent-secondary">
            01 // SYSTEMS ARCHIVE
          </p>
          <h2 className="mt-3 text-3xl sm:text-5xl font-sans font-bold tracking-tight text-text-primary">
            Selected Systems
          </h2>
          <p className="mt-4 text-base text-text-secondary">
            High-integrity web architectures engineered to solve complex operational, integration, and performance challenges.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Numbered List */}
          <div className="lg:col-span-5 flex flex-col gap-1">
            {selectedProjects.map((project, index) => {
              const isActive = project.slug === activeSlug;
              return (
                <button
                  key={project.slug}
                  id={`project-selector-${project.slug}`}
                  onClick={() => {
                    setActiveSlug(project.slug);
                    // Also dispatch event to keep ArchitectureExplorer in sync
                    window.dispatchEvent(new CustomEvent("select-project", { detail: project.slug }));
                  }}
                  className={`flex items-start gap-5 p-4 text-left border-l-2 transition-all cursor-pointer ${
                    isActive
                      ? "border-accent-primary bg-background-elevated"
                      : "border-border-subtle hover:border-text-muted hover:bg-background-elevated/40"
                  }`}
                >
                  <span className="font-mono text-xs text-text-muted mt-0.5">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <h3 className={`font-sans text-lg font-bold transition-colors ${
                      isActive ? "text-accent-primary" : "text-text-primary"
                    }`}>
                      {project.title}
                    </h3>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-accent-secondary mt-0.5">
                      {project.type}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Screenshot & Metadata Display */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlug}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-xl border border-border-subtle bg-background-elevated p-6"
              >
                {/* HUD Header info */}
                <div className="flex items-center justify-between border-b border-border-subtle pb-4 mb-6 font-mono text-[9px] text-text-muted">
                  <span>SYS_ID: {activeProject.slug.toUpperCase()}</span>
                  <span>CLASS: {activeProject.complexity.toUpperCase()}</span>
                </div>

                {/* Screenshot Display Frame */}
                <div className="mb-6">
                  <ScreenshotGallery title={activeProject.title} screenshots={activeProject.screenshots} large={true} />
                </div>

                {/* Description & Requirements */}
                <h4 className="font-sans text-xl font-bold text-text-primary mb-2">
                  {activeProject.title}
                </h4>
                <p className="text-sm text-text-secondary leading-relaxed mb-6">
                  {activeProject.fullDescription}
                </p>

                {/* Technical Specs Grid */}
                <div className="grid sm:grid-cols-2 gap-6 border-t border-border-subtle pt-6 font-mono text-[11px]">
                  <div>
                    <span className="text-text-muted uppercase tracking-wider block mb-2">
                      SYSTEM COMPONENT STACK
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {activeProject.stack.slice(0, 8).map((tech) => (
                        <span key={tech} className="bg-surface px-2 py-0.5 rounded text-text-secondary border border-border-subtle">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col justify-between">
                    <div>
                      <span className="text-text-muted uppercase tracking-wider block mb-2">
                        OPERATIONAL IMPACT
                      </span>
                      <ul className="space-y-1 list-none p-0 text-text-secondary">
                        {activeProject.highlights.slice(0, 2).map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-accent-primary">▪</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Links */}
                    {(activeProject.liveUrl || activeProject.githubUrl) && (
                      <div className="flex items-center gap-4 mt-6 pt-4 border-t border-border-subtle/50">
                        {activeProject.liveUrl && (
                          <a
                            href={activeProject.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent-primary hover:underline font-semibold"
                          >
                            Launch System ↗
                          </a>
                        )}
                        {activeProject.githubUrl && (
                          <a
                            href={activeProject.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text-primary hover:underline"
                          >
                            Source Code
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
