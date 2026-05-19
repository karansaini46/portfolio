"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { portfolio } from "@/data/portfolio";

export default function IntroLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timeout = window.setTimeout(() => setVisible(false), reducedMotion ? 0 : 1850);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          aria-label="Skip intro"
          className="fixed inset-0 z-[100] flex cursor-pointer items-center justify-center bg-[#050608] text-left"
          onClick={() => setVisible(false)}
          exit={{ opacity: 0, filter: "blur(14px)" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative overflow-hidden px-8 py-10">
            <motion.div
              className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-sky-200/80 to-transparent"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            />
            <motion.p
              className="font-mono text-xs uppercase tracking-[0.45em] text-slate-500"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              entering private build console
            </motion.p>
            <motion.h1
              className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-6xl"
              initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.18, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {portfolio.personalInfo.name}
            </motion.h1>
            <motion.p
              className="mt-4 text-lg text-slate-300"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.82, duration: 0.45 }}
            >
              {portfolio.personalInfo.role}
            </motion.p>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
