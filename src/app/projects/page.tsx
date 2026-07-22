"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import AnimatedBackground from "@/components/AnimatedBackground";
import CursorSpotlight from "@/components/CursorSpotlight";
import Navigation from "@/components/Navigation";
import CommandPalette from "@/components/CommandPalette";
import { portfolio, Project } from "@/data/portfolio";
import ProjectCaseStudy from "@/components/ProjectCaseStudy";

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [selectedProject]);

  return (
    <>
      <AnimatedBackground />
      <CursorSpotlight />
      <Navigation />
      <CommandPalette />
      
      <main className="relative z-10 mx-auto max-w-6xl px-6 pt-32 pb-24 min-h-screen">
        <div className="mb-16">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold tracking-tight text-text-primary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Engineering Archive
          </motion.h1>
          <motion.p 
            className="mt-4 text-text-secondary text-lg max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            A collection of high-integrity web architectures engineered to solve complex operational, integration, and performance challenges.
          </motion.p>
        </div>

        <div className="mb-20">
          <h2 className="text-2xl font-sans font-bold text-text-primary mb-8 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-accent-primary" />
            Deployed Systems
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {portfolio.projects.filter(p => p.status !== "in-development").map((project, i) => {
              const hasScreenshot = project.screenshots && project.screenshots.length > 0;
              return (
                <motion.div
                  key={project.slug}
                  layoutId={`card-container-${project.slug}`}
                  onClick={() => setSelectedProject(project)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative cursor-pointer flex flex-col overflow-hidden rounded-3xl bg-surface-raised border border-border-subtle hover:border-border-visible transition-colors"
                >
                  {/* Image Section */}
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
                          sizes="(min-width: 1024px) 50vw, 100vw"
                          className="object-cover object-top opacity-80 transition-transform duration-700 ease-out group-hover:scale-105 group-hover:opacity-100"
                        />
                      </motion.div>
                    ) : (
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--surface-raised)_0%,var(--background)_100%)] flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(236,233,225,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(236,233,225,0.03)_1px,transparent_1px)] bg-[size:24px_24px]" />
                      </div>
                    )}
                    <div className="absolute inset-0 border-[0.5px] border-white/5 rounded-t-3xl pointer-events-none" />
                  </div>
                  
                  {/* Card Content Section */}
                  <div className="relative p-6 md:p-8 bg-surface-raised flex-1 flex flex-col justify-between z-10 border-t border-border-subtle">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <motion.div layoutId={`card-badge-${project.slug}`} className="inline-flex items-center gap-1.5 rounded-full border border-border-visible bg-background px-2.5 py-1 text-[10px] uppercase font-mono tracking-wider text-text-muted">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-primary" />
                          {project.type}
                        </motion.div>
                      </div>
                      
                      <motion.h2 layoutId={`card-title-${project.slug}`} className="text-2xl font-bold text-text-primary mb-2">
                        {project.title}
                      </motion.h2>
                      
                      <p className="text-text-secondary text-sm line-clamp-2">
                        {project.shortDescription}
                      </p>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.stack.slice(0, 4).map(tech => (
                        <span key={tech} className="text-[10px] font-mono border border-border-subtle bg-surface px-2.5 py-1 rounded-md text-text-muted">
                          {tech}
                        </span>
                      ))}
                      {project.stack.length > 4 && (
                        <span className="text-[10px] font-mono text-text-muted px-1 py-1">+{project.stack.length - 4}</span>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-sans font-bold text-text-primary mb-8 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-accent-secondary animate-pulse" />
            Under Development
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.projects.filter(p => p.status === "in-development").map((project, i) => (
              <motion.div
                key={project.slug}
                layoutId={`card-container-${project.slug}`}
                onClick={() => setSelectedProject(project)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="group relative cursor-pointer flex flex-col overflow-hidden rounded-2xl bg-background-elevated border border-border-subtle border-dashed hover:border-solid hover:border-border-visible transition-colors"
              >
                {/* Abstract Data Viz for In Development */}
                <div className="relative w-full aspect-[2/1] overflow-hidden bg-background border-b border-border-subtle">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--surface-raised)_0%,var(--background)_100%)] flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(236,233,225,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(236,233,225,0.03)_1px,transparent_1px)] bg-[size:16px_16px]" />
                    <div className="w-16 h-16 rounded-full border-[0.5px] border-accent-secondary/30 flex items-center justify-center relative">
                      <div className="w-8 h-8 rounded-full bg-surface border border-border-subtle shadow-[0_0_20px_rgba(156,165,121,0.1)] flex items-center justify-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-secondary animate-ping" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative p-6 flex-1 flex flex-col justify-between z-10">
                  <div>
                    <motion.div layoutId={`card-badge-${project.slug}`} className="inline-flex items-center gap-1.5 rounded-full border border-border-visible bg-surface px-2.5 py-1 text-[9px] uppercase font-mono tracking-wider text-text-muted mb-3">
                      {project.type}
                    </motion.div>
                    
                    <motion.h2 layoutId={`card-title-${project.slug}`} className="text-xl font-bold text-text-primary mb-2">
                      {project.title}
                    </motion.h2>
                    
                    <p className="text-text-secondary text-xs line-clamp-3">
                      {project.shortDescription}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      {/* Expanded Modal */}
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
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
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
                    <motion.div layoutId={`card-badge-${selectedProject.slug}`} className="inline-flex items-center gap-1.5 rounded-full border border-border-visible bg-background/50 backdrop-blur px-3 py-1 text-xs uppercase font-mono tracking-wider text-text-muted mb-4">
                      {selectedProject.type}
                    </motion.div>
                    <motion.h2 layoutId={`card-title-${selectedProject.slug}`} className="text-4xl sm:text-5xl font-bold text-text-primary">
                      {selectedProject.title}
                    </motion.h2>
                  </div>
                </div>

                {/* Content Area - Using the existing Case Study component for inner details */}
                <div className="bg-surface relative z-10 px-8 py-10 max-h-[50vh] overflow-y-auto">
                   <ProjectCaseStudy project={selectedProject} />
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      <footer className="relative z-10 border-t border-border-subtle bg-surface/50 backdrop-blur-md px-5 py-8 text-center font-mono text-[10px] text-text-muted mt-20 will-change-transform">
        © {new Date().getFullYear()} {portfolio.personalInfo.name}. Engineered with precision.
      </footer>
    </>
  );
}
