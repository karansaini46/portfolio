"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";

export default function Hero() {
  const [hoveredNode, setHoveredNode] = useState<typeof portfolio.projects[0] | null>(null);

  const handleNodeClick = (slug: string) => {
    const el = document.getElementById(`project-${slug}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      const section = document.getElementById("selected-systems");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        // Dispatch an event to select this project in the Showcase
        window.dispatchEvent(new CustomEvent("select-project", { detail: slug }));
      }
    }
  };

  // Node coordinates inside the 300x300 SVG system map coordinate space
  const getProj = (slug: string) => portfolio.projects.find((p) => p.slug === slug)!;
  const nodes = [
    { project: getProj("ghostcto"), cx: 80, cy: 70 },
    { project: getProj("devmind-ai"), cx: 220, cy: 60 },
    { project: getProj("d-desk"), cx: 60, cy: 175 },
    { project: getProj("invoiceflow"), cx: 240, cy: 165 },
    { project: getProj("renderpilot"), cx: 110, cy: 245 },
    { project: getProj("ether"), cx: 200, cy: 240 },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 px-5 border-b border-border-subtle overflow-hidden">
      {/* Background guide lines */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-border-subtle opacity-30 pointer-events-none" />
      <div className="absolute left-1/3 inset-y-0 w-px bg-border-subtle opacity-30 pointer-events-none" />

      <div className="mx-auto max-w-7xl w-full grid md:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: textual info */}
        <div className="md:col-span-7 flex flex-col items-start text-left">
          {/* Availability Badge */}
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-accent-secondary/35 bg-accent-secondary/5 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-accent-secondary mb-6"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-secondary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-secondary" />
            </span>
            {portfolio.personalInfo.availability}
          </motion.div>

          {/* Subheadline Eyebrow */}
          <motion.p
            className="font-mono text-xs uppercase tracking-[0.24em] text-text-muted mb-3"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.4 }}
          >
            SYSTEM ARCHIVE // {portfolio.personalInfo.role.toUpperCase()}
          </motion.p>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl font-sans font-bold tracking-tight text-text-primary text-balance leading-[1.05]">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              {portfolio.personalInfo.headline}
            </motion.span>
          </h1>

          {/* Long Paragraph */}
          <motion.p
            className="mt-6 text-base sm:text-lg text-text-secondary max-w-xl leading-relaxed text-balance"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {portfolio.personalInfo.subheadline}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            className="mt-8 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <button
              onClick={() => document.getElementById("selected-systems")?.scrollIntoView({ behavior: "smooth" })}
              className="rounded bg-accent-primary px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-white hover:bg-accent-primary/85 transition-colors cursor-pointer"
            >
              {portfolio.actions.viewProjects}
            </button>
            <a
              href="#contact"
              className="rounded border border-border-visible bg-surface-raised px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-text-primary hover:border-text-secondary transition-colors"
            >
              Get in touch
            </a>
          </motion.div>
        </div>

        {/* Right Column: Interactive Systems Map */}
        <div className="md:col-span-5 flex flex-col items-center justify-center">
          <div className="relative w-full max-w-[360px] aspect-square rounded-2xl border border-border-subtle bg-background-elevated p-6 flex flex-col justify-between overflow-hidden">
            {/* Fine coordinate markers */}
            <div className="absolute top-2 left-3 font-mono text-[8px] text-text-muted">SYS_MAP // MAP_COORD: 0x4A</div>
            <div className="absolute bottom-2 right-3 font-mono text-[8px] text-text-muted">ALIGN_MODE: SVG</div>

            {/* Interactive SVG Diagram */}
            <svg viewBox="0 0 300 300" className="w-full h-full text-text-muted relative z-10 select-none">
              {/* Outer Orbit Path */}
              <circle cx="150" cy="150" r="105" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" className="opacity-25" />
              <circle cx="150" cy="150" r="65" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" className="opacity-25" />

              {/* Central Hub Node */}
              <circle cx="150" cy="150" r="5" className="fill-background stroke-accent-primary" strokeWidth="1.5" />
              
              {/* Node connection lines */}
              {nodes.map(({ project, cx, cy }) => {
                const isHovered = hoveredNode?.slug === project.slug;
                return (
                  <motion.line
                    key={`line-${project.slug}`}
                    x1="150"
                    y1="150"
                    x2={cx}
                    y2={cy}
                    stroke={isHovered ? "var(--accent-primary)" : "currentColor"}
                    strokeWidth={isHovered ? "1" : "0.5"}
                    className="opacity-20"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.8 }}
                  />
                );
              })}

              {/* Interactive Nodes */}
              {nodes.map(({ project, cx, cy }) => {
                const isHovered = hoveredNode?.slug === project.slug;
                const isAI = project.category === "ai";
                const isRealtime = project.category === "realtime";
                
                return (
                  <g
                    key={project.slug}
                    className="cursor-pointer"
                    onMouseEnter={() => setHoveredNode(project)}
                    onMouseLeave={() => setHoveredNode(null)}
                    onClick={() => handleNodeClick(project.slug)}
                  >
                    {/* Ring highlight on hover */}
                    {isHovered && (
                      <motion.circle
                        cx={cx}
                        cy={cy}
                        r="8"
                        className="stroke-accent-primary"
                        strokeWidth="0.75"
                        fill="none"
                        initial={{ scale: 0.6, opacity: 0 }}
                        animate={{ scale: 1, opacity: 0.7 }}
                      />
                    )}
                    {/* Node Core */}
                    <circle
                      cx={cx}
                      cy={cy}
                      r={isHovered ? "4" : "3.5"}
                      className={`transition-colors duration-200 ${
                        isHovered
                          ? "fill-accent-primary"
                          : isAI
                          ? "fill-accent-gold"
                          : isRealtime
                          ? "fill-accent-secondary"
                          : "fill-text-secondary"
                      }`}
                    />
                    
                    {/* Compact identifier next to node */}
                    <text
                      x={cx + (cx > 150 ? 8 : -8)}
                      y={cy + 3}
                      textAnchor={cx > 150 ? "start" : "end"}
                      className="font-mono text-[7px] uppercase tracking-wider fill-text-secondary font-semibold"
                    >
                      {project.title}
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* Dynamic Node Details Display HUD */}
            <div className="h-16 border-t border-border-subtle pt-3 flex flex-col justify-center font-mono select-none">
              {hoveredNode ? (
                <motion.div
                  initial={{ opacity: 0, y: 2 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-left"
                >
                  <div className="flex items-center justify-between text-[9px]">
                    <span className="text-accent-primary uppercase tracking-wider font-bold">
                      {hoveredNode.title}
                    </span>
                    <span className="text-text-muted uppercase">
                      STATUS: {hoveredNode.status}
                    </span>
                  </div>
                  <div className="text-[8px] text-text-secondary mt-1 overflow-hidden text-ellipsis whitespace-nowrap">
                    {hoveredNode.stack.slice(0, 4).join(" + ")}
                  </div>
                </motion.div>
              ) : (
                <div className="text-left text-text-muted text-[9px] uppercase tracking-wider flex items-center justify-between">
                  <span>SELECT NODE TO EXPLORE</span>
                  <span className="animate-pulse">_</span>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
