"use client";

import { experimentalProjects } from "@/data/portfolio";
import ProjectCard from "@/components/ProjectCard";

export default function UnderDevelopment() {
  const projects = experimentalProjects.filter((project) => project.status === "in-development");

  if (projects.length === 0) return null;

  return (
    <section id="under-development" className="relative px-5 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-left max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-sky-400">
            SYS_LAB // ACTIVE WORK
          </p>
          <h2 className="mt-3 text-3xl sm:text-5xl font-sans font-bold tracking-tight text-text-primary">
            Under Development
          </h2>
          <p className="mt-4 text-base text-text-secondary">
            Systems and platforms currently being built in the laboratory.
          </p>
        </div>

        <div className="grid gap-7 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
