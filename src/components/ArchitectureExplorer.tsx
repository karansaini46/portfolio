"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolio } from "@/data/portfolio";

type Coordinates = { x: number; y: number };

export default function ArchitectureExplorer() {
  const [activeSlug, setActiveSlug] = useState("ether");
  const activeProject = portfolio.projects.find((p) => p.slug === activeSlug) || portfolio.projects[0];
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);

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

  // Explicit coordinates dictionary to ensure pixel-perfect node layouts
  const layoutMap: Record<string, Record<string, Coordinates>> = {
    ghostcto: {
      client: { x: 40, y: 150 },
      api: { x: 150, y: 150 },
      db: { x: 260, y: 70 },
      redis: { x: 260, y: 150 },
      vector: { x: 260, y: 230 },
    },
    "devmind-ai": {
      webhook: { x: 40, y: 150 },
      api: { x: 150, y: 100 },
      jobs: { x: 150, y: 200 },
      gemini: { x: 260, y: 200 },
      vector: { x: 260, y: 100 },
    },
    "d-desk": {
      client: { x: 40, y: 150 },
      gateway: { x: 150, y: 85 },
      api: { x: 150, y: 215 },
      db: { x: 260, y: 150 },
    },
    invoiceflow: {
      client: { x: 40, y: 150 },
      api: { x: 150, y: 150 },
      stripe: { x: 260, y: 70 },
      puppeteer: { x: 260, y: 150 },
      mail: { x: 260, y: 230 },
    },
    renderpilot: {
      client: { x: 40, y: 150 },
      queue: { x: 150, y: 150 },
      workers: { x: 260, y: 80 },
      s3: { x: 260, y: 220 },
    },
    ether: {
      url: { x: 30, y: 50 },
      github: { x: 30, y: 150 },
      analyzer: { x: 30, y: 250 },
      parser: { x: 120, y: 90 },
      dep_graph: { x: 120, y: 210 },
      layout: { x: 200, y: 90 },
      state: { x: 200, y: 210 },
      renderer: { x: 270, y: 50 },
      inspector: { x: 270, y: 120 },
      search: { x: 270, y: 190 },
      ai: { x: 270, y: 255 },
    },
  };

  const projectLayout = layoutMap[activeProject.slug] || layoutMap.ghostcto;
  const nodes = activeProject.archNodes || [];
  const edges = activeProject.archEdges || [];
  const hoveredNode = nodes.find((n) => n.id === hoveredNodeId);

  return (
    <section id="architecture-explorer" className="relative px-5 py-24 sm:py-32 border-b border-border-subtle bg-background-elevated/20">
      {/* Structural layout guides */}
      <div className="absolute inset-y-0 right-1/4 w-px bg-border-subtle opacity-20 pointer-events-none" />

      <div className="mx-auto max-w-[90rem]">
        {/* Section Header */}
        <div className="mb-12 text-left max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-accent-secondary">
            02 // SYSTEM SCHEMATICS
          </p>
          <h2 className="mt-3 text-3xl sm:text-5xl font-sans font-bold tracking-tight text-text-primary">
            Project Architecture Explorer
          </h2>
          <p className="mt-4 text-base text-text-secondary">
            Visual dependency flow diagrams showcasing components, databases, server routing, and background systems. Select a system below to explore its architecture.
          </p>
          
          <div className="mt-8 flex flex-wrap gap-2">
            {portfolio.projects.filter(p => p.archNodes && p.archNodes.length > 0).map((project) => {
              const isActive = activeSlug === project.slug;
              return (
                <button
                  key={project.slug}
                  onClick={() => setActiveSlug(project.slug)}
                  className={`px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all border ${
                    isActive 
                      ? "bg-accent-primary text-white border-accent-primary shadow-[0_0_15px_rgba(180,95,53,0.3)]" 
                      : "bg-surface text-text-secondary border-border-subtle hover:border-border-visible hover:text-text-primary"
                  }`}
                >
                  {project.title}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Interactive Diagram */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="relative w-full max-w-[500px] aspect-[4/3] rounded-xl border border-border-subtle bg-background p-6 overflow-hidden">
              <div className="absolute top-2 left-3 font-mono text-[8px] text-text-muted uppercase">
                Schematic: {activeProject.title} — Interactive Nodes
              </div>

              <svg viewBox="0 0 300 300" className="w-full h-full text-text-muted relative z-10 select-none">
                {/* Draw connection edges with flowing animations */}
                {edges.map((edge, idx) => {
                  const fromCoord = projectLayout[edge.from];
                  const toCoord = projectLayout[edge.to];
                  if (!fromCoord || !toCoord) return null;

                  const isFlowActive = hoveredNodeId === edge.from || hoveredNodeId === edge.to;

                  return (
                    <g key={`edge-${idx}`}>
                      <line
                        x1={fromCoord.x}
                        y1={fromCoord.y}
                        x2={toCoord.x}
                        y2={toCoord.y}
                        stroke={isFlowActive ? "var(--accent-primary)" : "currentColor"}
                        strokeWidth={isFlowActive ? "1.25" : "0.75"}
                        className="opacity-25"
                      />
                      {/* Flow dashes */}
                      <motion.line
                        x1={fromCoord.x}
                        y1={fromCoord.y}
                        x2={toCoord.x}
                        y2={toCoord.y}
                        stroke="var(--accent-primary)"
                        strokeWidth="1.25"
                        strokeDasharray="6 6"
                        className="opacity-50"
                        initial={{ strokeDashoffset: 0 }}
                        animate={{ strokeDashoffset: -120 }}
                        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                      />
                    </g>
                  );
                })}

                {/* Draw Nodes */}
                {nodes.map((node) => {
                  const coord = projectLayout[node.id];
                  if (!coord) return null;

                  const isHovered = hoveredNodeId === node.id;
                  const isDatabase = node.type === "database";
                  const isAI = node.type === "ai";

                  return (
                    <g
                      key={`node-${node.id}`}
                      className="cursor-pointer"
                      onMouseEnter={() => setHoveredNodeId(node.id)}
                      onMouseLeave={() => setHoveredNodeId(null)}
                    >
                      {/* Node highlight halo */}
                      {isHovered && (
                        <circle
                          cx={coord.x}
                          cy={coord.y}
                          r="12"
                          className="stroke-accent-primary opacity-35"
                          strokeWidth="1"
                          fill="none"
                        />
                      )}
                      
                      {/* Node circle */}
                      <circle
                        cx={coord.x}
                        cy={coord.y}
                        r="6"
                        className={`transition-all duration-200 ${
                          isHovered
                            ? "fill-accent-primary stroke-accent-primary"
                            : isAI
                            ? "fill-accent-gold stroke-border-subtle"
                            : isDatabase
                            ? "fill-accent-secondary stroke-border-subtle"
                            : "fill-surface-raised stroke-border-subtle"
                        }`}
                        strokeWidth="1.5"
                      />

                      {/* Node label */}
                      <text
                        x={coord.x}
                        y={coord.y - 12}
                        textAnchor="middle"
                        className={`font-mono text-[7px] uppercase tracking-wider font-bold transition-colors ${
                          isHovered ? "fill-accent-primary" : "fill-text-secondary"
                        }`}
                      >
                        {node.id}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>

          {/* Right Column: Node Details Panel */}
          <div className="lg:col-span-5 h-72 flex flex-col justify-center">
            <div className="rounded-xl border border-border-subtle bg-background p-6 h-full flex flex-col justify-between select-none">
              <div className="border-b border-border-subtle pb-3">
                <span className="font-mono text-[9px] text-text-muted uppercase tracking-widest block">
                  Node Inspector
                </span>
                <h3 className="font-sans text-xl font-bold text-text-primary mt-1">
                  {hoveredNode ? hoveredNode.label : "Explore Schematics"}
                </h3>
              </div>

              <div className="flex-1 py-4">
                <AnimatePresence mode="wait">
                  {hoveredNode ? (
                    <motion.div
                      key={hoveredNode.id}
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      className="text-sm text-text-secondary leading-relaxed"
                    >
                      <p className="font-mono text-[10px] text-accent-secondary uppercase mb-2">
                        Type: {hoveredNode.type}
                      </p>
                      <p>{hoveredNode.description}</p>
                    </motion.div>
                  ) : (
                    <motion.p
                      key="idle"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.5 }}
                      className="text-xs text-text-muted italic leading-relaxed"
                    >
                      Hover over nodes in the schematic graph to inspect their deployment status, system responsibilities, and connection details.
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              <div className="font-mono text-[8px] text-text-muted border-t border-border-subtle pt-3 flex items-center justify-between">
                <span>SYSTEM: {activeProject.title.toUpperCase()}</span>
                <span>STATUS: STABLE</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
