"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import { portfolio } from "@/data/portfolio";

const logs = [
  "LINKING GATEWAY TO PRIVATE DECK...",
  "VERIFYING SECURITY TOKENS: [OK]",
  "DECRYPTING CORE MODULE FILES...",
  "ESTABLISHING COMPILER SYNCS...",
  "COCKPIT LAYERS ONLINE. LAUNCHING."
];

export default function IntroLoader() {
  const [visible, setVisible] = useState(true);
  const [logIndex, setLogIndex] = useState(0);
  const [percent, setPercent] = useState(0);

  const handleExit = useCallback(() => {
    setVisible(false);
  }, []);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      setVisible(false);
      return;
    }

    // Progress percentage ticking
    const percentInterval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(percentInterval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 9) + 5;
      });
    }, 70);

    // Logs sequence ticking
    const logInterval = setInterval(() => {
      setLogIndex((prev) => {
        if (prev < logs.length - 1) {
          return prev + 1;
        }
        clearInterval(logInterval);
        return prev;
      });
    }, 240);

    // Complete loader
    const timeout = setTimeout(() => {
      handleExit();
    }, 1800);

    return () => {
      clearInterval(percentInterval);
      clearInterval(logInterval);
      clearTimeout(timeout);
    };
  }, [handleExit]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          aria-label="Skip intro sequence"
          className="fixed inset-0 z-[100] flex cursor-pointer flex-col items-center justify-center bg-[#050608] text-left outline-none"
          onClick={handleExit}
          exit={{ 
            opacity: 0, 
            filter: "blur(16px)",
            scale: 0.975,
            transition: { duration: 0.48, ease: [0.22, 1, 0.36, 1] }
          }}
        >
          {/* Subtle grid and vignette inside loader */}
          <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,rgba(148,163,184,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.18)_1px,transparent_1px)] [background-size:64px_64px] pointer-events-none" />
          <div className="absolute inset-0 bg-radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.6)_85%,#050608_100%) pointer-events-none" />

          <div className="relative w-full max-w-md px-8">
            {/* Top Border HUD Bracket */}
            <motion.div 
              className="absolute -top-12 left-8 right-8 flex items-center justify-between font-mono text-[0.55rem] tracking-[0.24em] text-slate-600 border-b border-white/5 pb-2"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.6 }}
            >
              <span>DECK_LINK: SECURE</span>
              <span>SYS_BOOT: OK</span>
            </motion.div>

            {/* Terminal Title */}
            <div className="relative">
              <motion.span 
                className="font-mono text-[0.6rem] uppercase tracking-[0.36em] text-sky-400"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                // LINKING PRIVATE CONSOLE //
              </motion.span>
              <motion.h1 
                className="mt-3 font-sans text-3xl font-semibold tracking-tight text-white sm:text-4xl"
                initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                {portfolio.personalInfo.name}
              </motion.h1>
              <motion.p 
                className="mt-1.5 font-mono text-xs uppercase tracking-[0.28em] text-slate-500 font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                {portfolio.personalInfo.role}
              </motion.p>
            </div>

            {/* Readout console */}
            <motion.div 
              className="mt-7 min-h-[5.2rem] rounded-lg border border-white/5 bg-black/40 p-4 font-mono text-[0.65rem] leading-6 tracking-[0.08em] text-slate-400"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
            >
              <div className="text-sky-300/80 space-y-0.5">
                {logs.slice(0, logIndex + 1).map((log, idx) => (
                  <motion.div 
                    key={idx} 
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -4 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <span className="text-[0.5rem] text-slate-650">❯</span>
                    <span>{log}</span>
                  </motion.div>
                ))}
              </div>
              {percent < 100 && (
                <div className="mt-1 flex items-center gap-1.5 text-slate-500">
                  <span className="h-1.5 w-1 bg-sky-400 animate-pulse" />
                  <span className="text-[0.6rem]">BUFFERING LINK...</span>
                </div>
              )}
            </motion.div>

            {/* Percent progress bar */}
            <motion.div 
              className="mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
            >
              <div className="flex justify-between font-mono text-[0.55rem] tracking-[0.2em] text-slate-500 mb-2">
                <span>SYS_INIT_SEQUENCE</span>
                <span>{Math.min(percent, 100)}%</span>
              </div>
              <div className="h-[2px] overflow-hidden bg-white/5">
                <div 
                  className="h-full bg-sky-400 transition-all duration-100 ease-out" 
                  style={{ width: `${Math.min(percent, 100)}%` }} 
                />
              </div>
            </motion.div>

            {/* Action override skip */}
            <motion.div 
              className="absolute -bottom-16 left-0 right-0 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.35, 0.7, 0.35] }}
              transition={{ delay: 0.5, duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="inline-block font-mono text-[0.55rem] uppercase tracking-[0.28em] text-slate-500 hover:text-slate-350 transition-colors">
                [ BYPASS BOOT SEQUENCE ]
              </span>
            </motion.div>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
