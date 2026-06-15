"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useMemo, useState, useRef } from "react";

type EmailContactModalProps = {
  email: string;
  isOpen: boolean;
  onClose: () => void;
};

export default function EmailContactModal({ email, isOpen, onClose }: EmailContactModalProps) {
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">("idle");
  const modalRef = useRef<HTMLDivElement>(null);
  
  const gmailHref = useMemo(
    () => `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`,
    [email],
  );

  const handleClose = useCallback(() => {
    setCopyState("idle");
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") handleClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleClose, isOpen]);

  // Focus trap for accessibility
  useEffect(() => {
    if (!isOpen) return;
    
    // Tiny delay to allow animation
    const timer = setTimeout(() => {
      const focusable = modalRef.current?.querySelectorAll<HTMLElement>(
        'input, button:not([disabled]), a[href], [tabindex="0"]'
      );
      if (!focusable || focusable.length === 0) return;
      
      // Focus the first element (the close button or copy input)
      focusable[0].focus();

      const handleTab = (e: KeyboardEvent) => {
        if (e.key !== "Tab") return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            last.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === last) {
            first.focus();
            e.preventDefault();
          }
        }
      };

      window.addEventListener("keydown", handleTab);
      return () => window.removeEventListener("keydown", handleTab);
    }, 80);

    return () => clearTimeout(timer);
  }, [isOpen]);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopyState("copied");
    } catch {
      setCopyState("failed");
    }
  }

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          aria-label="Email contact options"
          aria-modal="true"
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/80 px-4 py-8 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          onClick={handleClose}
        >
          <motion.div
            ref={modalRef}
            className="relative w-full max-w-xl overflow-hidden rounded-xl border border-border-visible bg-surface p-6 text-left shadow-2xl sm:p-8"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(event) => event.stopPropagation()}
          >
            {/* Design detail line */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-primary/60 to-transparent" />

            <div className="relative">
              <div className="flex items-start justify-between gap-5 border-b border-border-subtle pb-4 mb-6">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-accent-secondary">
                    CONNECT // EMAIL
                  </p>
                  <h2 className="mt-1 text-2xl font-bold tracking-tight text-text-primary">
                    Email Karan Saini
                  </h2>
                </div>
                <button
                  type="button"
                  aria-label="Close email popup"
                  className="rounded border border-border-subtle bg-surface-raised px-3 py-1.5 font-mono text-xs text-text-primary hover:border-text-secondary cursor-pointer"
                  onClick={handleClose}
                >
                  Close
                </button>
              </div>

              <p className="text-sm text-text-secondary leading-relaxed">
                Direct communication gateway. Copy the address below or open Gmail directly to initialize message delivery.
              </p>

              <div className="mt-6 rounded-lg border border-border-subtle bg-background p-3">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <input
                    aria-label="Email address"
                    className="min-h-10 min-w-0 flex-1 rounded border border-border-subtle bg-surface px-3 font-mono text-xs text-text-primary outline-none focus:border-accent-primary"
                    readOnly
                    value={email}
                    onFocus={(event) => event.currentTarget.select()}
                  />
                  <button
                    onClick={handleCopy}
                    className="rounded bg-surface-raised border border-border-subtle px-4 py-2 font-mono text-xs text-text-primary hover:border-border-visible cursor-pointer"
                  >
                    {copyState === "copied" ? "Copied" : copyState === "failed" ? "Copy failed" : "Copy email"}
                  </button>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={gmailHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-h-10 rounded bg-accent-primary flex items-center justify-center font-mono text-xs uppercase tracking-wider text-white hover:bg-accent-primary/95 transition-colors text-center"
                >
                  Open Gmail
                </a>
                <button
                  type="button"
                  className="flex-1 min-h-10 rounded border border-border-subtle bg-surface-raised font-mono text-xs uppercase tracking-wider text-text-primary hover:border-border-visible cursor-pointer"
                  onClick={handleClose}
                >
                  Done
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
