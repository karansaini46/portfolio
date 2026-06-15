"use client";

import { useState } from "react";
import EmailContactModal from "@/components/EmailContactModal";
import { portfolio } from "@/data/portfolio";

export default function ContactCTA() {
  const { contact, socialLinks } = portfolio;
  const [isEmailOpen, setIsEmailOpen] = useState(false);

  return (
    <>
      <section id="contact" className="relative px-5 py-24 sm:py-32 border-b border-border-subtle bg-background">
        {/* Structural guidelines */}
        <div className="absolute inset-y-0 left-1/4 w-px bg-border-subtle opacity-20 pointer-events-none" />

        <div className="mx-auto max-w-4xl text-center relative z-10">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-accent-secondary mb-4">
            05 // CONNECT
          </p>
          
          <h2 className="text-3xl sm:text-5xl font-sans font-bold tracking-tight text-text-primary text-balance">
            {contact.title}
          </h2>
          
          <p className="mt-6 text-base text-text-secondary max-w-2xl mx-auto leading-relaxed text-balance">
            {contact.subtext}
          </p>

          {/* Clean, professional action buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setIsEmailOpen(true)}
              className="rounded bg-accent-primary px-6 py-3 font-mono text-xs uppercase tracking-wider text-white hover:bg-accent-primary/90 transition-colors cursor-pointer"
            >
              Send Email
            </button>
            
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded border border-border-subtle bg-surface px-6 py-3 font-mono text-xs uppercase tracking-wider text-text-primary hover:border-border-visible transition-colors"
            >
              GitHub
            </a>

            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded border border-border-subtle bg-surface px-6 py-3 font-mono text-xs uppercase tracking-wider text-text-primary hover:border-border-visible transition-colors"
            >
              LinkedIn
            </a>

            {socialLinks.x && (
              <a
                href={socialLinks.x}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded border border-border-subtle bg-surface px-6 py-3 font-mono text-xs uppercase tracking-wider text-text-primary hover:border-border-visible transition-colors"
              >
                Twitter / X
              </a>
            )}

            <a
              href={socialLinks.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded border border-border-subtle bg-surface px-6 py-3 font-mono text-xs uppercase tracking-wider text-text-primary hover:border-border-visible transition-colors"
            >
              View Résumé
            </a>
          </div>
        </div>
      </section>

      <EmailContactModal email={socialLinks.email} isOpen={isEmailOpen} onClose={() => setIsEmailOpen(false)} />
    </>
  );
}
