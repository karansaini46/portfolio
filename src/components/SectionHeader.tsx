"use client";

import { motion } from "framer-motion";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeader({ eyebrow, title, description, align = "left" }: SectionHeaderProps) {
  return (
    <div className={`mb-10 ${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}`}>
      <p className="font-mono text-xs uppercase tracking-[0.32em] text-sky-200/70">
        <span className="block overflow-hidden py-0.5">
          <motion.span
            className="block"
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] as const }}
          >
            {eyebrow}
          </motion.span>
        </span>
      </p>
      <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-white sm:text-5xl">
        <span className="block overflow-hidden py-1">
          <motion.span
            className="block"
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] as const, delay: 0.08 }}
          >
            {title}
          </motion.span>
        </span>
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">
          <span className="block overflow-hidden py-1">
            <motion.span
              className="block"
              initial={{ y: "40%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] as const, delay: 0.16 }}
            >
              {description}
            </motion.span>
          </span>
        </p>
      ) : null}
    </div>
  );
}
