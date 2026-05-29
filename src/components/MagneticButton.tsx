"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import type { MouseEvent, ReactNode } from "react";

type MagneticButtonProps = {
  children: ReactNode;
  href?: string;
  ariaLabel: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
};

const variants = {
  primary:
    "border-sky-300/40 bg-sky-100 text-slate-950 shadow-[0_0_40px_rgba(125,211,252,0.14)] hover:bg-white",
  secondary:
    "border-white/12 bg-white/[0.06] text-slate-100 hover:border-sky-300/35 hover:bg-white/[0.1]",
  ghost: "border-transparent bg-transparent text-slate-300 hover:text-white",
};

export default function MagneticButton({
  children,
  href,
  ariaLabel,
  variant = "secondary",
  className = "",
  disabled = false,
  onClick,
}: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 18, mass: 0.25 });
  const springY = useSpring(y, { stiffness: 220, damping: 18, mass: 0.25 });

  function handleMove(event: MouseEvent<HTMLElement>) {
    if (disabled) return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.16);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.16);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  const baseClass = `inline-flex min-h-11 items-center justify-center rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors duration-200 ${variants[variant]} ${className}`;

  if (!href && !onClick) {
    return (
      <span
        aria-label={ariaLabel}
        aria-disabled="true"
        className={`${baseClass} cursor-not-allowed opacity-45`}
        title="Link unavailable"
      >
        {children}
      </span>
    );
  }

  if (onClick) {
    return (
      <motion.button
        type="button"
        aria-label={ariaLabel}
        className={baseClass}
        disabled={disabled}
        onClick={onClick}
        onMouseLeave={handleLeave}
        onMouseMove={handleMove}
        style={{ x: springX, y: springY }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.button>
    );
  }

  const isExternal = href?.startsWith("http");

  return (
    <motion.a
      aria-label={ariaLabel}
      className={baseClass}
      href={href}
      onMouseLeave={handleLeave}
      onMouseMove={handleMove}
      rel={isExternal ? "noopener noreferrer" : undefined}
      style={{ x: springX, y: springY }}
      target={isExternal ? "_blank" : undefined}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.a>
  );
}
