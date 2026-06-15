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
    "border-accent-primary bg-accent-primary text-white hover:bg-accent-primary/90",
  secondary:
    "border-border-subtle bg-surface text-text-primary hover:border-border-visible",
  ghost: "border-transparent bg-transparent text-text-secondary hover:text-text-primary",
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

  const baseClass = `inline-flex min-h-10 items-center justify-center rounded border px-5 py-2.5 text-xs font-semibold uppercase tracking-wider font-mono transition-colors duration-200 ${variants[variant]} ${className}`;

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
