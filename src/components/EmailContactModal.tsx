"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useMemo, useState } from "react";
import MagneticButton from "@/components/MagneticButton";

type EmailContactModalProps = {
  email: string;
  isOpen: boolean;
  onClose: () => void;
};

export default function EmailContactModal({ email, isOpen, onClose }: EmailContactModalProps) {
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">("idle");
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
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/82 px-4 py-8 backdrop-blur-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          onClick={handleClose}
        >
          <motion.div
            className="glow-border glass-panel relative w-full max-w-xl overflow-hidden rounded-[2rem] p-5 text-left shadow-2xl sm:p-7"
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(125,211,252,0.16),transparent_38%),radial-gradient(circle_at_80%_20%,rgba(79,70,229,0.12),transparent_34%)]" />
            <div className="relative">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.34em] text-sky-100/70">contact</p>
                  <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">Email Karan</h2>
                </div>
                <button
                  type="button"
                  aria-label="Close email popup"
                  className="rounded-full border border-white/10 bg-black/45 px-3 py-2 text-sm text-slate-200 backdrop-blur transition-colors hover:bg-white/10"
                  onClick={handleClose}
                >
                  Close
                </button>
              </div>

              <p className="mt-6 text-base leading-7 text-slate-300">
                Let&apos;s talk - copy my email or open Gmail to send a message.
              </p>

              <div className="mt-7 rounded-2xl border border-white/10 bg-black/30 p-3">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <input
                    aria-label="Email address"
                    className="min-h-11 min-w-0 flex-1 rounded-xl border border-white/10 bg-white/[0.04] px-4 font-mono text-sm text-sky-100 outline-none selection:bg-sky-200/25"
                    readOnly
                    value={email}
                    onFocus={(event) => event.currentTarget.select()}
                  />
                  <MagneticButton ariaLabel="Copy email address" className="w-full sm:w-auto" onClick={handleCopy}>
                    {copyState === "copied" ? "Copied" : copyState === "failed" ? "Copy failed" : "Copy email"}
                  </MagneticButton>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <MagneticButton ariaLabel="Open Gmail compose" className="w-full sm:w-auto" href={gmailHref} variant="primary">
                  Open Gmail
                </MagneticButton>
                <MagneticButton ariaLabel="Close email popup" className="w-full sm:w-auto" onClick={handleClose}>
                  Done
                </MagneticButton>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
