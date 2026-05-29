"use client";

import AnimatedBackground from "@/components/AnimatedBackground";
import ContactCTA from "@/components/ContactCTA";
import CursorSpotlight from "@/components/CursorSpotlight";
import Navigation from "@/components/Navigation";
import ProjectCaseStudy from "@/components/ProjectCaseStudy";
import WorkHeader from "@/components/WorkHeader";
import { portfolio } from "@/data/portfolio";

export default function WorkPage() {
  return (
    <>
      <AnimatedBackground />
      <CursorSpotlight />
      <Navigation />
      <main className="relative z-10">
        <WorkHeader />
        
        {/* Render Case Studies for all projects */}
        <div className="space-y-6">
          {portfolio.projects.map((project) => (
            <ProjectCaseStudy key={project.slug} project={project} />
          ))}
        </div>

        <ContactCTA />
      </main>
      <footer className="relative z-10 border-t border-white/10 px-5 py-8 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {portfolio.personalInfo.name}. Built for product-grade full-stack work.
      </footer>
    </>
  );
}
