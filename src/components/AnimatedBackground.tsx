"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function AnimatedBackground() {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 30, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 30, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      mouseX.set(((event.clientX - width / 2) / (width / 2)) * 30);
      mouseY.set(((event.clientY - height / 2) / (height / 2)) * 30);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!isMounted) return null;

  return (
    <div aria-hidden="true" className="fixed inset-0 z-0 overflow-hidden bg-background pointer-events-none">
      {/* Heavy dark vignette overlay to keep text highly legible */}
      <div className="absolute inset-0 z-[5] bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--background)_80%)] pointer-events-none" />

      {/* Parallax Container */}
      <motion.div
        className="absolute inset-[-50px] z-[1]"
        style={{ x: springX, y: springY, willChange: "transform" }}
      >
        {/* Soft Animated Glow Blobs */}
        <motion.div 
          className="absolute top-[20%] left-[20%] w-[40vw] h-[40vw] rounded-full bg-accent-primary opacity-[0.03] blur-[100px] will-change-transform"
          animate={{
            x: [0, 50, -20, 0],
            y: [0, -40, 20, 0],
            scale: [1, 1.1, 0.9, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div 
          className="absolute bottom-[10%] right-[10%] w-[50vw] h-[50vw] rounded-full bg-accent-secondary opacity-[0.02] blur-[120px] will-change-transform"
          animate={{
            x: [0, -60, 30, 0],
            y: [0, 50, -30, 0],
            scale: [1, 1.2, 0.8, 1]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        <motion.div 
          className="absolute top-[40%] right-[40%] w-[30vw] h-[30vw] rounded-full bg-accent-gold opacity-[0.02] blur-[90px] will-change-transform"
          animate={{
            x: [0, 40, -40, 0],
            y: [0, 40, -40, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        
        {/* Fine, subtle grid pattern */}
        <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(236,233,225,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(236,233,225,0.02)_1px,transparent_1px)] [background-size:64px_64px]" />
      </motion.div>
    </div>
  );
}
