"use client";

import { portfolio, experimentalProjects } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="relative px-5 py-24 sm:py-32 border-b border-border-subtle bg-background">
      {/* Structural guidelines */}
      <div className="absolute inset-y-0 left-1/4 w-px bg-border-subtle opacity-20 pointer-events-none" />

      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: About Copy */}
        <div className="lg:col-span-6 text-left">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-accent-secondary">
            04 // PROFILE
          </p>
          <h2 className="mt-3 text-3xl sm:text-5xl font-sans font-bold tracking-tight text-text-primary">
            About Karan
          </h2>
          
          <div className="mt-8 space-y-6 text-base text-text-secondary leading-relaxed max-w-xl">
            {portfolio.about.paragraphs.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-10 rounded-xl border border-border-subtle bg-background-elevated p-6 max-w-xl">
            <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted">
              Working Capability Range
            </span>
            <div className="mt-4 grid grid-cols-2 gap-3 font-mono text-xs text-text-secondary">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-secondary" /> Product UI & State
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-secondary" /> API Engineering
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-secondary" /> Database Schemas
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-secondary" /> Deployments & Queues
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Lab Entries / Experimental Systems */}
        <div className="lg:col-span-6 text-left">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-accent-primary">
            SYS_LAB // ACTIVE EXPERIMENTS
          </p>
          <h2 className="mt-3 text-2xl font-sans font-bold tracking-tight text-text-primary mb-8">
            Experimental Systems
          </h2>

          <div className="space-y-6">
            {experimentalProjects.map((entry) => (
              <div
                key={entry.slug}
                className="rounded-xl border border-border-subtle bg-background-elevated/40 p-6 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between border-b border-border-subtle pb-3 mb-4 font-mono text-[9px] text-text-muted">
                  <span className="text-accent-primary uppercase tracking-wider font-bold">
                    {entry.title}
                  </span>
                  <span className="uppercase border border-accent-secondary/40 px-2 py-0.5 rounded text-accent-secondary">
                    {entry.status}
                  </span>
                </div>

                <div className="space-y-3">
                  <div>
                    <span className="font-mono text-[8px] text-text-muted uppercase block">
                      Concept
                    </span>
                    <p className="text-sm text-text-primary font-medium mt-0.5">
                      {entry.type}
                    </p>
                  </div>

                  <div>
                    <span className="font-mono text-[8px] text-text-muted uppercase block">
                      Why it matters
                    </span>
                    <p className="text-xs text-text-secondary mt-0.5">
                      {entry.shortDescription}
                    </p>
                  </div>

                  <div>
                    <span className="font-mono text-[8px] text-text-muted uppercase block">
                      System Stack
                    </span>
                    <div className="flex flex-wrap gap-1.5 mt-1.5">
                      {entry.stack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="bg-surface px-2 py-0.5 rounded text-[10px] font-mono text-text-secondary border border-border-subtle"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
