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
        {/* Soft Animated Glow Blobs — radial-gradient instead of filter:blur()
            to avoid expensive GPU blur textures. CSS @keyframes instead of
            Framer Motion to keep animation on the compositor thread. */}
        <div 
          className="absolute top-[20%] left-[20%] w-[40vw] h-[40vw] rounded-full animate-blob1"
          style={{ background: "radial-gradient(circle, rgba(180,95,53,0.03) 0%, rgba(180,95,53,0) 70%)" }}
        />
        
        <div 
          className="absolute bottom-[10%] right-[10%] w-[50vw] h-[50vw] rounded-full animate-blob2"
          style={{ background: "radial-gradient(circle, rgba(156,165,121,0.02) 0%, rgba(156,165,121,0) 70%)" }}
        />

        <div 
          className="absolute top-[40%] right-[40%] w-[30vw] h-[30vw] rounded-full animate-blob3"
          style={{ background: "radial-gradient(circle, rgba(208,181,120,0.02) 0%, rgba(208,181,120,0) 70%)" }}
        />
        
        {/* Fine, subtle grid pattern */}
        <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(236,233,225,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(236,233,225,0.02)_1px,transparent_1px)] [background-size:64px_64px]" />
      </motion.div>
    </div>
  );
}
