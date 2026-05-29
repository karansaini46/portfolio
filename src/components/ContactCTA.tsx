"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import EmailContactModal from "@/components/EmailContactModal";
import MagneticButton from "@/components/MagneticButton";
import { portfolio } from "@/data/portfolio";

export default function ContactCTA() {
  const { contact, socialLinks, actions } = portfolio;
  const [isEmailOpen, setIsEmailOpen] = useState(false);

  return (
    <>
      <section id="contact" className="relative px-5 py-16 sm:py-24">
        <motion.div
          className="glow-border glass-panel mx-auto max-w-4xl overflow-hidden rounded-[2.25rem] p-6 text-center sm:p-8"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mx-auto max-w-2xl">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.34em] text-sky-100/70">contact</p>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              {contact.title}
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              {contact.subtext}
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <MagneticButton ariaLabel={actions.email} onClick={() => setIsEmailOpen(true)} variant="primary">
                {actions.email}
              </MagneticButton>
              <MagneticButton href={socialLinks.github} ariaLabel={actions.github}>
                {actions.github}
              </MagneticButton>
              <MagneticButton href={socialLinks.linkedin} ariaLabel={actions.linkedin}>
                {actions.linkedin}
              </MagneticButton>
              <MagneticButton href={socialLinks.resume} ariaLabel="Resume">
                {socialLinks.resume ? "Resume" : "Resume (Coming Soon)"}
              </MagneticButton>
            </div>
          </div>
        </motion.div>
      </section>
      <EmailContactModal email={socialLinks.email} isOpen={isEmailOpen} onClose={() => setIsEmailOpen(false)} />
    </>
  );
}
