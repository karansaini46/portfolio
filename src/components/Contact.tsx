"use client";

import { motion } from "framer-motion";
import MagneticButton from "@/components/MagneticButton";
import { portfolio } from "@/data/portfolio";

export default function Contact() {
  const { contact, socialLinks, resumeUrl, actions } = portfolio;
  const emailHref = socialLinks.email ? `mailto:${socialLinks.email}` : "";

  return (
    <section id="contact" className="relative px-5 py-24 sm:py-32">
      <motion.div
        className="glow-border glass-panel mx-auto max-w-5xl overflow-hidden rounded-[2.25rem] p-6 text-center sm:p-10"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mx-auto max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.34em] text-sky-100/70">contact</p>
          <h2 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-white sm:text-6xl">{contact.title}</h2>
          <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">{contact.subtext}</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <MagneticButton href={emailHref} ariaLabel={actions.email} variant="primary">
              {actions.email}
            </MagneticButton>
            <MagneticButton href={socialLinks.github} ariaLabel={actions.github}>
              {actions.github}
            </MagneticButton>
            <MagneticButton href={socialLinks.linkedin} ariaLabel={actions.linkedin}>
              {actions.linkedin}
            </MagneticButton>
            <MagneticButton href={resumeUrl} ariaLabel={actions.resume}>
              {actions.resume}
            </MagneticButton>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
