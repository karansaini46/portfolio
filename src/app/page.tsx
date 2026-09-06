"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import AnimatedBackground from "@/components/AnimatedBackground";
import CursorSpotlight from "@/components/CursorSpotlight";
import IntroLoader from "@/components/IntroLoader";
import Navigation from "@/components/Navigation";
import CommandPalette from "@/components/CommandPalette";
import ProjectCaseStudy from "@/components/ProjectCaseStudy";
import { portfolio, Project } from "@/data/portfolio";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  // Filter out in-development projects
  const allProjects = portfolio.projects.filter(p => p.status !== "in-development");
  const totalPages = Math.ceil(allProjects.length / 4);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [selectedProject]);

  const visibleProjects = allProjects.slice(
    carouselIndex * 4,
    carouselIndex * 4 + 4
  );

  const goTo = (page: number) => {
    setCarouselIndex(page);
  };

  return (
    <>
      <IntroLoader />
      <AnimatedBackground />
      <CursorSpotlight />
      <Navigation />
      <CommandPalette />
      
      <main className="relative z-10 flex flex-col min-h-screen">
        {/* Projects Carousel Section */}
        <section className="flex-1 flex flex-col justify-center px-5 pt-24 pb-4">
          <div className="mx-auto max-w-[90rem] w-full">

            {/* Carousel Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <motion.p
                  className="font-mono text-[10px] uppercase tracking-[0.24em] text-accent-secondary"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Engineering Archive
                </motion.p>
                <motion.h1
                  className="mt-1 text-2xl sm:text-3xl font-sans font-bold tracking-tight text-text-primary"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  Selected Systems
                </motion.h1>
              </div>
            </div>

            {/* Project Cards Grid with side arrows */}
            <div className="relative">
              {/* Left Arrow */}
              {totalPages > 1 && (
                <button
                  onClick={() => goTo((carouselIndex - 1 + totalPages) % totalPages)}
                  className="absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-border-visible bg-surface/80 backdrop-blur-sm flex items-center justify-center text-text-muted hover:text-text-primary hover:border-text-muted hover:bg-surface-raised transition-all cursor-pointer shadow-lg"
                  aria-label="Previous projects"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
              )}

              <AnimatePresence mode="wait">
                <motion.div
                  key={carouselIndex}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  {visibleProjects.map((project, i) => {
                    const hasScreenshot = project.screenshots && project.screenshots.length > 0;
                    return (
                      <motion.div
                        key={project.slug}
                        layoutId={`card-container-${project.slug}`}
                        onClick={() => setSelectedProject(project)}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.08, duration: 0.4 }}
                        className="group relative cursor-pointer flex flex-col overflow-hidden rounded-2xl bg-surface-raised border border-border-subtle hover:border-border-visible transition-colors"
                        whileHover={{ y: -4, transition: { duration: 0.25 } }}
                      >
                        {/* Image / Placeholder */}
                        <div className="relative w-full aspect-[16/10] overflow-hidden bg-background">
                          {hasScreenshot ? (
                            <motion.div
                              layoutId={`card-image-${project.slug}`}
                              className="absolute inset-0"
                            >
                              <Image
                                src={project.screenshots[0]}
                                alt={project.title}
                                fill
                                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                                className="object-cover object-top opacity-80 transition-transform duration-700 ease-out group-hover:scale-105 group-hover:opacity-100"
                              />
                            </motion.div>
                          ) : (
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--surface-raised)_0%,var(--background)_100%)] flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(236,233,225,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(236,233,225,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />
                            </div>
                          )}
                          <div className="absolute inset-0 border-[0.5px] border-white/5 rounded-t-2xl pointer-events-none" />
                        </div>

                        {/* Card Content */}
                        <div className="relative p-4 flex-1 flex flex-col justify-between z-10 border-t border-border-subtle">
                          <div>
                            <motion.div
                              layoutId={`card-badge-${project.slug}`}
                              className="inline-flex items-center gap-1.5 rounded-full border border-border-visible bg-background px-2 py-0.5 text-[9px] uppercase font-mono tracking-wider text-text-muted mb-2"
                            >
                              <span className="w-1 h-1 rounded-full bg-accent-primary" />
                              {project.type}
                            </motion.div>

                            <motion.h2
                              layoutId={`card-title-${project.slug}`}
                              className="text-lg font-bold text-text-primary mb-1 leading-tight"
                            >
                              {project.title}
                            </motion.h2>

                            <p className="text-text-secondary text-xs line-clamp-2 leading-relaxed">
                              {project.shortDescription}
                            </p>
                          </div>

                          <div className="mt-3 flex flex-wrap gap-1">
                            {project.stack.slice(0, 3).map(tech => (
                              <span key={tech} className="text-[9px] font-mono border border-border-subtle bg-surface px-2 py-0.5 rounded text-text-muted">
                                {tech}
                              </span>
                            ))}
                            {project.stack.length > 3 && (
                              <span className="text-[9px] font-mono text-text-muted px-1 py-0.5">+{project.stack.length - 3}</span>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>

              {/* Right Arrow */}
              {totalPages > 1 && (
                <button
                  onClick={() => goTo((carouselIndex + 1) % totalPages)}
                  className="absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-border-visible bg-surface/80 backdrop-blur-sm flex items-center justify-center text-text-muted hover:text-text-primary hover:border-text-muted hover:bg-surface-raised transition-all cursor-pointer shadow-lg"
                  aria-label="Next projects"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              )}

              {/* Page indicator dots */}
              {totalPages > 1 && (
                <div className="flex justify-center gap-2 mt-5">
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        i === carouselIndex
                          ? "w-8 bg-accent-primary"
                          : "w-1.5 bg-text-muted/30 hover:bg-text-muted/50"
                      }`}
                      aria-label={`Go to page ${i + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="relative px-5 pb-8 pt-0">
          <div className="mx-auto max-w-[90rem]">
            {/* Big headline */}
            <motion.div
              className="mb-5"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <h2 className="text-2xl sm:text-3xl font-sans font-bold tracking-tight text-text-primary">
                Tech Stack
              </h2>
              <div className="mt-1 h-px w-16 bg-accent-primary" />
            </motion.div>

            {/* Stack groups displayed inline */}
            <div className="flex flex-wrap gap-x-10 gap-y-5 mt-1">
              {portfolio.skills.map((group) => (
                <div key={group.title} className="flex items-center gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent-secondary whitespace-nowrap">
                    {group.title}
                  </span>
                  <span className="text-border-visible text-xs">—</span>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-border-subtle bg-surface-raised/60 px-2.5 py-1 font-mono text-[11px] text-text-secondary hover:text-text-primary hover:border-border-visible transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Expanded Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 z-[60] bg-background/80 backdrop-blur-md cursor-pointer"
            />
            <div className="fixed inset-0 z-[70] pointer-events-none flex items-center justify-center p-4 sm:p-6 lg:p-12 overflow-y-auto">
              <motion.div
                layoutId={`card-container-${selectedProject.slug}`}
                className="w-full max-w-5xl bg-surface border border-border-subtle rounded-3xl shadow-2xl overflow-hidden pointer-events-auto my-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header / Image Area */}
                <div className="relative w-full h-[40vh] min-h-[300px] overflow-hidden bg-background">
                  {selectedProject.screenshots && selectedProject.screenshots.length > 0 ? (
                    <motion.div
                      layoutId={`card-image-${selectedProject.slug}`}
                      className="absolute inset-0"
                    >
                      <Image
                        src={selectedProject.screenshots[0]}
                        alt={selectedProject.title}
                        fill
                        sizes="(min-width: 1024px) 60vw, 95vw"
                        className="object-cover object-top opacity-70"
                        priority
                      />
                    </motion.div>
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-surface to-background" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />

                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-6 right-6 z-50 w-10 h-10 rounded-full bg-background/50 backdrop-blur border border-border-visible flex items-center justify-center text-text-muted hover:text-white hover:bg-surface transition-colors cursor-pointer"
                  >
                    ✕
                  </button>

                  <div className="absolute bottom-8 left-8 right-8">
                    <motion.div
                      layoutId={`card-badge-${selectedProject.slug}`}
                      className="inline-flex items-center gap-1.5 rounded-full border border-border-visible bg-background/50 backdrop-blur px-3 py-1 text-xs uppercase font-mono tracking-wider text-text-muted mb-4"
                    >
                      {selectedProject.type}
                    </motion.div>
                    <motion.h2
                      layoutId={`card-title-${selectedProject.slug}`}
                      className="text-4xl sm:text-5xl font-bold text-text-primary"
                    >
                      {selectedProject.title}
                    </motion.h2>
                  </div>
                </div>

                {/* Content Area */}
                <div className="bg-surface relative z-10 px-8 py-10 max-h-[50vh] overflow-y-auto">
                  <ProjectCaseStudy project={selectedProject} />
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      <footer className="relative z-10 border-t border-border-subtle bg-surface/50 backdrop-blur-md px-5 py-6 text-center font-mono text-[10px] text-text-muted will-change-transform">
        © {new Date().getFullYear()} {portfolio.personalInfo.name}. Engineered with precision.
      </footer>
    </>
  );
}
