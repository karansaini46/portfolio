"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState, useCallback } from "react";

const TOTAL_DURATION = 1600;
const SMOOTH: [number, number, number, number] = [0.22, 1, 0.36, 1];
const SHARP: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function IntroLoader() {
  const [visible, setVisible] = useState(() => {
    if (typeof window !== "undefined") {
      const hasSeenIntro = sessionStorage.getItem("has-seen-intro");
      const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
      return !(hasSeenIntro || reducedMotion);
    }
    return true;
  });

  const [counter, setCounter] = useState(0);

  const handleExit = useCallback(() => {
    sessionStorage.setItem("has-seen-intro", "true");
    setVisible(false);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const start = performance.now();
    const duration = TOTAL_DURATION - 300;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setCounter(Math.floor((1 - Math.pow(1 - progress, 3)) * 100));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [visible]);

  useEffect(() => {
    if (!visible) return;
    const timeout = setTimeout(handleExit, TOTAL_DURATION);
    return () => clearTimeout(timeout);
  }, [visible, handleExit]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="dialog"
          aria-label="Loading"
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: "#070706" }}
          exit={{
            opacity: 0,
            scale: 1.05,
            filter: "blur(12px)",
            transition: { duration: 0.4, ease: SHARP },
          }}
        >
          {/* Grid */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              opacity: 0.025,
              backgroundImage:
                "linear-gradient(to right, rgba(236,233,225,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(236,233,225,0.15) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />

          {/* Grain */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              opacity: 0.035,
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`,
              mixBlendMode: "overlay",
            }}
          />

          {/* ── ORBITAL ANIMATION ── */}
          <div className="relative" style={{ width: "280px", height: "280px" }}>

            {/* Center pulse */}
            <motion.div
              className="absolute rounded-full"
              style={{
                width: 6,
                height: 6,
                top: "50%",
                left: "50%",
                x: "-50%",
                y: "-50%",
                backgroundColor: "var(--accent-primary)",
              }}
              animate={{
                scale: [1, 1.8, 1],
                opacity: [0.8, 1, 0.8],
                boxShadow: [
                  "0 0 0px rgba(180,95,53,0)",
                  "0 0 20px rgba(180,95,53,0.5)",
                  "0 0 0px rgba(180,95,53,0)",
                ],
              }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Ring 1 — outer, slow */}
            <motion.div
              className="absolute inset-0"
              initial={{ rotate: 0, opacity: 0, scale: 0.7 }}
              animate={{ rotate: 360, opacity: 1, scale: 1 }}
              transition={{
                rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                opacity: { duration: 0.4, delay: 0.1 },
                scale: { duration: 0.6, delay: 0.1, ease: SMOOTH },
              }}
            >
              {/* Ring circle (SVG for crisp stroke) */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 280 280">
                <motion.circle
                  cx="140"
                  cy="140"
                  r="130"
                  fill="none"
                  stroke="var(--border-subtle)"
                  strokeWidth="0.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                />
              </svg>
              {/* Orbiting dot */}
              <div
                className="absolute rounded-full"
                style={{
                  width: 5,
                  height: 5,
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%) translateY(-130px)",
                  backgroundColor: "var(--accent-primary)",
                  boxShadow: "0 0 12px rgba(180,95,53,0.6)",
                }}
              />
              {/* Opposite faint dot */}
              <div
                className="absolute rounded-full"
                style={{
                  width: 3,
                  height: 3,
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%) translateY(130px)",
                  backgroundColor: "var(--text-muted)",
                  opacity: 0.3,
                }}
              />
            </motion.div>

            {/* Ring 2 — middle, counter-rotate */}
            <motion.div
              className="absolute"
              style={{
                top: "50%",
                left: "50%",
                width: 190,
                height: 190,
                x: "-50%",
                y: "-50%",
              }}
              initial={{ rotate: 45, opacity: 0, scale: 0.5 }}
              animate={{ rotate: -315, opacity: 1, scale: 1 }}
              transition={{
                rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                opacity: { duration: 0.4, delay: 0.2 },
                scale: { duration: 0.6, delay: 0.2, ease: SMOOTH },
              }}
            >
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 190 190">
                <motion.circle
                  cx="95"
                  cy="95"
                  r="90"
                  fill="none"
                  stroke="var(--border-subtle)"
                  strokeWidth="0.5"
                  strokeDasharray="4 8"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
                />
              </svg>
              <div
                className="absolute rounded-full"
                style={{
                  width: 4,
                  height: 4,
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%) translateX(90px)",
                  backgroundColor: "var(--accent-gold)",
                  boxShadow: "0 0 10px rgba(208,181,120,0.5)",
                }}
              />
            </motion.div>

            {/* Ring 3 — inner, fast */}
            <motion.div
              className="absolute"
              style={{
                top: "50%",
                left: "50%",
                width: 100,
                height: 100,
                x: "-50%",
                y: "-50%",
              }}
              initial={{ rotate: -20, opacity: 0, scale: 0.3 }}
              animate={{ rotate: 340, opacity: 1, scale: 1 }}
              transition={{
                rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                opacity: { duration: 0.3, delay: 0.35 },
                scale: { duration: 0.5, delay: 0.35, ease: SMOOTH },
              }}
            >
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                <motion.circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="var(--border-subtle)"
                  strokeWidth="0.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                />
              </svg>
              <div
                className="absolute rounded-full"
                style={{
                  width: 3,
                  height: 3,
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%) translateY(-45px)",
                  backgroundColor: "var(--accent-secondary)",
                  boxShadow: "0 0 8px rgba(156,165,121,0.5)",
                }}
              />
            </motion.div>

            {/* Crosshair lines through center */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 280 280"
            >
              <motion.line
                x1="140" y1="40" x2="140" y2="240"
                stroke="var(--border-subtle)"
                strokeWidth="0.3"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.4 }}
                transition={{ duration: 0.5, delay: 0.15 }}
              />
              <motion.line
                x1="40" y1="140" x2="240" y2="140"
                stroke="var(--border-subtle)"
                strokeWidth="0.3"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.4 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
            </svg>
          </div>

          {/* ── BOTTOM HUD ── */}
          <div className="absolute bottom-0 left-0 right-0 px-6 sm:px-10 pb-8 flex items-end justify-between">
            {/* Counter */}
            <motion.div
              className="font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.35 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              <span
                className="text-3xl sm:text-4xl font-bold tabular-nums"
                style={{ color: "var(--text-primary)" }}
              >
                {String(counter).padStart(3, "0")}
              </span>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              className="flex-1 mx-8 sm:mx-16 mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              <div
                className="w-full max-w-xs mx-auto h-px relative overflow-hidden"
                style={{ backgroundColor: "var(--surface-raised)" }}
              >
                <motion.div
                  className="absolute inset-y-0 left-0"
                  style={{
                    background: "linear-gradient(90deg, var(--accent-primary), var(--accent-gold))",
                  }}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: TOTAL_DURATION / 1000 - 0.3,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                />
              </div>
            </motion.div>

            {/* Label */}
            <motion.span
              className="font-mono text-[9px] tracking-[0.25em] uppercase"
              style={{ color: "var(--text-muted)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.35 }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              Loading
            </motion.span>
          </div>

          {/* Corner brackets */}
          {(
            [
              ["top-5 left-5", false, false],
              ["top-5 right-5", true, false],
              ["bottom-5 left-5", false, true],
              ["bottom-5 right-5", true, true],
            ] as const
          ).map(([pos, flipX, flipY], i) => (
            <motion.svg
              key={i}
              className={`absolute ${pos} pointer-events-none`}
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              style={{
                transform: `scaleX(${flipX ? -1 : 1}) scaleY(${flipY ? -1 : 1})`,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              transition={{ delay: 0.15 + i * 0.05, duration: 0.4 }}
            >
              <motion.path
                d="M0 10V0H10"
                stroke="var(--text-muted)"
                strokeWidth="0.75"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.05, ease: "easeOut" }}
              />
            </motion.svg>
          ))}

          {/* Vignette */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at center, transparent 40%, #070706 100%)",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
