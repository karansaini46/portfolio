"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import MagneticButton from "@/components/MagneticButton";
import ScreenshotGallery from "@/components/ScreenshotGallery";
import { portfolio, supportingProjects } from "@/data/portfolio";

const cardVariants = {
  hidden: (index: number) => {
    if (index === 0) {
      return { opacity: 0, x: -64, y: 40, rotate: -4, scale: 0.96, filter: "blur(6px)" };
    }
    if (index === 2) {
      return { opacity: 0, x: 64, y: 40, rotate: 4, scale: 0.96, filter: "blur(6px)" };
    }
    return { opacity: 0, y: 55, scale: 0.95, filter: "blur(6px)" };
  },
  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1] as const,
      delay: index * 0.08,
    }
  })
};

export default function ProjectPreviewStrip() {
  return (
    <section className="relative px-5 pb-16 sm:pb-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-3">
          {supportingProjects.map((project, index) => (
            <motion.article
              key={project.slug}
              className="glow-border glass-panel group flex flex-col justify-between overflow-hidden rounded-[1.75rem] p-4 sm:p-5"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              whileHover={{ y: -8, scale: 1.012, transition: { duration: 0.28, ease: "easeOut" } }}
            >
              <div>
                <ScreenshotGallery title={project.title} screenshots={project.screenshots} />

                <div className="pt-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-0.5 font-mono text-[0.6rem] uppercase tracking-[0.24em] text-sky-100/70">
                      {project.badge}
                    </span>
                    <span className="text-xs text-slate-500">{project.type}</span>
                  </div>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white group-hover:text-sky-200 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-xs leading-6 text-slate-400">
                    {project.shortDescription}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.stack.slice(0, 4).map((item) => (
                      <span key={item} className="rounded-full border border-white/5 bg-black/20 px-2 py-1 text-[0.7rem] text-slate-300">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4">
                <Link href={`/work#${project.slug}`} passHref legacyBehavior>
                  <MagneticButton ariaLabel={`View ${project.title} Details`} variant="primary" className="!min-h-9 !px-4 !py-1.5 !text-xs">
                    {portfolio.actions.viewDetails}
                  </MagneticButton>
                </Link>
                <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-slate-500">
                  {project.architecture[0] || ""}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
