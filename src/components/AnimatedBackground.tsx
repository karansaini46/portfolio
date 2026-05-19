"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div aria-hidden="true" className="fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#050608]" />
      <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(to_right,rgba(148,163,184,0.24)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.24)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="animate-grid-shift absolute inset-[-72px] opacity-[0.12] [background-image:linear-gradient(to_right,rgba(125,211,252,0.32)_1px,transparent_1px),linear-gradient(to_bottom,rgba(125,211,252,0.22)_1px,transparent_1px)] [background-size:72px_72px]" />
      <motion.div
        className="absolute left-0 right-0 top-0 h-[36rem] bg-[radial-gradient(ellipse_at_top,rgba(30,64,175,0.28),transparent_62%)]"
        animate={{ opacity: [0.45, 0.72, 0.45] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-18rem] left-1/2 h-[34rem] w-[90rem] -translate-x-1/2 rotate-[-7deg] bg-[linear-gradient(90deg,transparent,rgba(71,85,105,0.22),rgba(14,165,233,0.12),transparent)] blur-3xl"
        animate={{ x: ["-52%", "-48%", "-52%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(5,6,8,0.62)_54%,#050608)]" />
    </div>
  );
}
