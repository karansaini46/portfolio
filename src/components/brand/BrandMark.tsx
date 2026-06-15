"use client";

import { motion } from "framer-motion";

type BrandMarkProps = {
  size?: number;
  className?: string;
};

export default function BrandMark({ size = 32, className = "" }: BrandMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-accent-primary ${className}`}
      role="img"
      aria-label="Brand logo"
    >
      {/* Outer Orbit Path */}
      <motion.circle
        cx="16"
        cy="16"
        r="11"
        stroke="currentColor"
        strokeWidth="1"
        strokeOpacity="0.15"
        strokeDasharray="4 2"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "16px 16px" }}
      />
      {/* Converging Connection Lines */}
      <line x1="8" y1="16" x2="24" y2="16" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />
      <line x1="16" y1="8" x2="16" y2="24" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />
      <line x1="10.34" y1="10.34" x2="21.66" y2="21.66" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.15" />
      
      {/* Central Node */}
      <circle cx="16" cy="16" r="3" className="fill-background stroke-accent-primary" strokeWidth="1.5" />
      
      {/* Satellite Connected Nodes */}
      <circle cx="8" cy="16" r="1.5" className="fill-accent-secondary" />
      <circle cx="24" cy="16" r="1.5" className="fill-accent-secondary" />
      <circle cx="16" cy="8" r="1.5" className="fill-accent-primary" />
      <circle cx="16" cy="24" r="1.5" className="fill-accent-primary" />
    </svg>
  );
}
