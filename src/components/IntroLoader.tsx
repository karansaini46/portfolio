"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import { portfolio } from "@/data/portfolio";
import BrandMark from "@/components/brand/BrandMark";

export default function IntroLoader() {
  const [visible, setVisible] = useState(() => {
    if (typeof window !== "undefined") {
      const hasSeenIntro = sessionStorage.getItem("has-seen-intro");
      const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
      return !(hasSeenIntro || reducedMotion);
    }
    return true;
  });

  const handleExit = useCallback(() => {
    setVisible(false);
  }, []);

  useEffect(() => {
    if (!visible) return;

    // Short reveal sequence (approx 650ms)
    const timeout = setTimeout(() => {
      sessionStorage.setItem("has-seen-intro", "true");
      handleExit();
    }, 650);

    return () => clearTimeout(timeout);
  }, [visible, handleExit]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="dialog"
          aria-label="Archive loading sequence"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background text-left outline-none"
          exit={{
            opacity: 0,
            transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
          }}
        >
          {/* Subtle structural guides */}
          <div className="absolute inset-0 opacity-[0.02] [background-image:linear-gradient(to_right,rgba(236,233,225,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(236,233,225,0.15)_1px,transparent_1px)] [background-size:64px_64px] pointer-events-none" />

          <div className="relative flex flex-col items-center gap-4">
            {/* KS Orbit logo resolving */}
            <motion.div
              initial={{ scale: 0.86, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <BrandMark size={48} />
            </motion.div>

            {/* Wordmark */}
            <motion.h1
              className="font-mono text-sm tracking-[0.24em] text-text-primary uppercase"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.4 }}
            >
              {portfolio.personalInfo.name}
            </motion.h1>

            {/* One structural line draws briefly */}
            <div className="relative w-36 h-px overflow-hidden bg-border-subtle mt-2">
              <motion.div
                className="absolute inset-y-0 left-0 bg-accent-primary"
                initial={{ left: "-100%", width: "100%" }}
                animate={{ left: "100%" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
            </div>

            {/* System Status Label */}
            <motion.p
              className="font-mono text-[0.6rem] tracking-[0.18em] text-text-muted uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              Initializing Archive
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
