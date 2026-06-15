"use client";

import { useEffect, useState } from "react";
import AnimatedBackground from "@/components/AnimatedBackground";
import ContactCTA from "@/components/ContactCTA";
import CursorSpotlight from "@/components/CursorSpotlight";
import Navigation from "@/components/Navigation";
import ProjectCaseStudy from "@/components/ProjectCaseStudy";
import WorkHeader from "@/components/WorkHeader";
import CommandPalette from "@/components/CommandPalette";
import { portfolio } from "@/data/portfolio";

export default function WorkPage() {
  const [activeSlug, setActiveSlug] = useState(portfolio.projects[0].slug);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSlug(entry.target.id);
          }
        });
      },
      { threshold: 0.15, rootMargin: "-10% 0px -60% 0px" }
    );

    portfolio.projects.forEach((project) => {
      const el = document.getElementById(project.slug);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleScrollTo = (slug: string) => {
    const el = document.getElementById(slug);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <AnimatedBackground />
      <CursorSpotlight />
      <Navigation />
      <CommandPalette />
      <main className="relative z-10 mx-auto max-w-7xl px-5 pt-16">
        <WorkHeader />

        <div className="grid lg:grid-cols-12 gap-12 items-start mt-8">
          {/* Sticky Side Navigator (Left) */}
          <aside className="hidden lg:block lg:col-span-3 sticky top-24 max-h-[70vh] border-r border-border-subtle pr-6">
            <p className="font-mono text-[9px] uppercase tracking-widest text-text-muted mb-4">
              Case Study Index
            </p>
            <nav className="flex flex-col gap-1.5">
              {portfolio.projects.map((project) => {
                const isActive = project.slug === activeSlug;
                return (
                  <button
                    key={project.slug}
                    onClick={() => handleScrollTo(project.slug)}
                    className={`text-left font-sans text-sm font-semibold transition-all py-1.5 border-l-2 pl-3 cursor-pointer ${
                      isActive
                        ? "border-accent-primary text-accent-primary"
                        : "border-transparent text-text-secondary hover:text-text-primary hover:border-text-muted"
                    }`}
                  >
                    {project.title}
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* Scrolling Case Studies (Right) */}
          <div className="lg:col-span-9 space-y-20">
            {portfolio.projects.map((project) => (
              <ProjectCaseStudy key={project.slug} project={project} />
            ))}
          </div>
        </div>

        <ContactCTA />
      </main>
      <footer className="relative z-10 border-t border-border-subtle px-5 py-8 text-center text-xs text-text-muted">
        © {new Date().getFullYear()} {portfolio.personalInfo.name}. Built for product-grade full-stack work.
      </footer>
    </>
  );
}
