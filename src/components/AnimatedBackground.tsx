"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function AnimatedBackground() {
  const [isLowPower] = useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    }
    return false;
  });
  const [tabVisible, setTabVisible] = useState(true);

  // Parallax values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 40, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 25 });

  useEffect(() => {
    // Tab visibility handling
    const handleVisibility = () => {
      setTabVisible(!document.hidden);
    };
    document.addEventListener("visibilitychange", handleVisibility);

    // Mouse move parallax (only on desktop / pointer devices)
    const handleMouseMove = (event: MouseEvent) => {
      if (isLowPower || document.hidden) return;
      const width = window.innerWidth;
      const height = window.innerHeight;
      // Max 12px shift
      const xVal = ((event.clientX - width / 2) / (width / 2)) * 12;
      const yVal = ((event.clientY - height / 2) / (height / 2)) * 12;
      mouseX.set(xVal);
      mouseY.set(yVal);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY, isLowPower]);

  if (!tabVisible) return null;

  return (
    <div aria-hidden="true" className="fixed inset-0 z-0 overflow-hidden bg-background pointer-events-none">
      {/* Heavy dark vignette overlay to keep text highly legible */}
      <div className="absolute inset-0 z-[5] bg-gradient-to-b from-transparent via-background/40 to-background pointer-events-none" />

      {/* Parallax Content */}
      <motion.div
        className="absolute inset-[-24px] z-[1] opacity-[0.06]"
        style={{
          x: isLowPower ? 0 : springX,
          y: isLowPower ? 0 : springY,
        }}
      >
        {/* Fine grid */}
        <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(236,233,225,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(236,233,225,0.08)_1px,transparent_1px)] [background-size:80px_80px]" />
        
        {/* Sparse Guide Lines */}
        <div className="absolute top-[20%] left-0 right-0 h-px bg-border-subtle" />
        <div className="absolute bottom-[30%] left-0 right-0 h-px bg-border-subtle" />
        <div className="absolute left-[15%] top-0 bottom-0 w-px bg-border-subtle" />
        <div className="absolute right-[25%] top-0 bottom-0 w-px bg-border-subtle" />

        {/* Dynamic connection path line */}
        {!isLowPower && (
          <svg className="absolute inset-0 w-full h-full text-accent-secondary/15" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              d="M 0 150 L 300 150 L 450 350 L 1200 350 L 1400 600 L 2000 600"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.75"
              strokeDasharray="6 4"
              initial={{ strokeDashoffset: 0 }}
              animate={{ strokeDashoffset: -100 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            />
          </svg>
        )}
      </motion.div>

      {/* Static HUD / Technical indicators */}
      <div className="absolute inset-0 z-[2] opacity-[0.25] text-[9px] font-mono text-text-muted p-6 select-none pointer-events-none">
        <div className="absolute top-6 left-6">SYS_LOC // 45.09.N_122.68.W</div>
        <div className="absolute top-6 right-6">SYS_STATUS // ACTIVE</div>
        <div className="absolute bottom-6 left-6">ARCHIVE_LAYER // v1.0.0</div>
        <div className="absolute bottom-6 right-6">GRID_ALIGN // OK</div>
      </div>
    </div>
  );
}
