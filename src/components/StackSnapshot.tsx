"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolio } from "@/data/portfolio";

export default function StackSnapshot() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  // Deployed project relationships mapping
  const techRelationships: Record<string, string[]> = {
    "Next.js": ["GhostCTO", "RenderPilot"],
    React: ["GhostCTO", "DevMind AI", "D-Desk", "InvoiceFlow", "RenderPilot", "ETHER"],
    TypeScript: ["GhostCTO", "DevMind AI", "D-Desk", "InvoiceFlow", "RenderPilot", "ETHER"],
    TailwindCSS: ["GhostCTO", "RenderPilot", "ETHER"],
    "Framer Motion": ["GhostCTO", "RenderPilot"],
    "Node.js": ["GhostCTO", "DevMind AI", "D-Desk", "InvoiceFlow", "RenderPilot", "ETHER"],
    Express: ["GhostCTO", "DevMind AI", "InvoiceFlow", "RenderPilot", "ETHER"],
    "REST APIs": ["GhostCTO", "DevMind AI", "D-Desk", "InvoiceFlow", "RenderPilot"],
    Prisma: ["GhostCTO", "DevMind AI", "D-Desk", "InvoiceFlow", "RenderPilot"],
    JWT: ["D-Desk", "DevMind AI"],
    PostgreSQL: ["GhostCTO", "DevMind AI", "D-Desk", "InvoiceFlow", "RenderPilot"],
    pgvector: ["GhostCTO", "DevMind AI"],
    Redis: ["GhostCTO", "DevMind AI", "RenderPilot"],
    BullMQ: ["GhostCTO", "DevMind AI", "RenderPilot"],
    "Socket.io": ["D-Desk"],
    LangChain: ["GhostCTO", "DevMind AI", "ETHER"],
    "Gemini AI": ["GhostCTO", "DevMind AI", "ETHER"],
    "Vector Embeddings": ["GhostCTO", "DevMind AI", "ETHER"],
    "Semantic Search": ["GhostCTO", "DevMind AI", "ETHER"],
    Docker: ["GhostCTO", "RenderPilot", "ETHER"],
    Vercel: ["GhostCTO", "DevMind AI", "D-Desk", "InvoiceFlow", "RenderPilot"],
    Render: ["GhostCTO", "DevMind AI", "InvoiceFlow"],
    "S3 Storage": ["RenderPilot"],
  };

  const activeProjects = techRelationships[hoveredTech || ""] || [];

  return (
    <section id="stack" className="relative px-5 py-24 sm:py-32 border-b border-border-subtle bg-background">
      {/* Structural layout lines */}
      <div className="absolute inset-y-0 left-1/4 w-px bg-border-subtle opacity-20 pointer-events-none" />

      <div className="mx-auto max-w-[90rem]">
        {/* Section Header */}
        <div className="mb-16 text-left max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-accent-secondary">
            03 // CAPABILITIES
          </p>
          <h2 className="mt-3 text-3xl sm:text-5xl font-sans font-bold tracking-tight text-text-primary">
            Engineering Capabilities Matrix
          </h2>
          <p className="mt-4 text-base text-text-secondary">
            Technologies mapped as a structured, operational system. Hover over any technology to locate its implementation across the systems archive.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Stack System Layers */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            {portfolio.skills.map((layer) => (
              <div
                key={layer.title}
                className="grid sm:grid-cols-12 gap-4 items-center border-b border-border-subtle pb-6"
              >
                {/* Layer Title */}
                <div className="sm:col-span-4 flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-primary" />
                  <h3 className="font-mono text-xs uppercase tracking-wider text-text-primary font-semibold">
                    {layer.title}
                  </h3>
                </div>

                {/* Layer Items */}
                <div className="sm:col-span-8 flex flex-wrap gap-2">
                  {layer.items.map((tech) => {
                    const isHovered = hoveredTech === tech;
                    return (
                      <button
                        key={tech}
                        className={`px-3.5 py-1.5 font-mono text-xs rounded border transition-all cursor-pointer ${
                          isHovered
                            ? "bg-accent-primary/10 border-accent-primary text-accent-primary"
                            : "bg-surface border-border-subtle text-text-secondary hover:border-border-visible hover:text-text-primary"
                        }`}
                        onMouseEnter={() => setHoveredTech(tech)}
                        onMouseLeave={() => setHoveredTech(null)}
                      >
                        {tech}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Deployment Tracer Inspector */}
          <div className="lg:col-span-4 h-72 flex flex-col justify-center">
            <div className="rounded-xl border border-border-subtle bg-background-elevated p-6 h-full flex flex-col justify-between select-none">
              <div className="border-b border-border-subtle pb-3">
                <span className="font-mono text-[9px] text-text-muted uppercase tracking-widest block">
                  Dependency Tracer
                </span>
                <h3 className="font-sans text-xl font-bold text-text-primary mt-1">
                  {hoveredTech ? hoveredTech : "Tracer Standby"}
                </h3>
              </div>

              <div className="flex-1 py-4">
                <AnimatePresence mode="wait">
                  {hoveredTech ? (
                    <motion.div
                      key={hoveredTech}
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      className="text-sm text-text-secondary leading-relaxed"
                    >
                      <p className="font-mono text-[10px] text-accent-secondary uppercase mb-2">
                        Deployed In Systems
                      </p>
                      {activeProjects.length > 0 ? (
                        <ul className="space-y-1.5">
                          {activeProjects.map((pName) => (
                            <li key={pName} className="flex items-center gap-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-accent-primary" />
                              <span className="font-sans text-sm font-semibold text-text-primary">
                                {pName}
                              </span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-xs text-text-muted italic">Core system utility / library</p>
                      )}
                    </motion.div>
                  ) : (
                    <motion.p
                      key="idle"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.5 }}
                      className="text-xs text-text-muted italic leading-relaxed"
                    >
                      Hover over any system technology item to trace its utilization and production deployment in individual case studies.
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              <div className="font-mono text-[8px] text-text-muted border-t border-border-subtle pt-3 flex items-center justify-between">
                <span>TRACER_PORT: 5002</span>
                <span>STATE: DEPLOYED</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
