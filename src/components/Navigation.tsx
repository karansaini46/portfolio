"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { portfolio } from "@/data/portfolio";

export default function Navigation() {
  const [active, setActive] = useState(portfolio.navigation[0]?.href ?? "#work");

  useEffect(() => {
    const observers = portfolio.navigation
      .map((item) => document.querySelector(item.href))
      .filter((section): section is Element => section instanceof Element)
      .map((section) => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActive(`#${entry.target.id}`);
            }
          },
          { rootMargin: "-35% 0px -55% 0px", threshold: 0.01 },
        );
        observer.observe(section);
        return observer;
      });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  return (
    <motion.header
      className="fixed left-0 right-0 top-0 z-50 px-4 py-4"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.65, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-[#070a0f]/72 px-3 py-2 shadow-2xl shadow-black/20 backdrop-blur-xl">
        <a
          aria-label={`${portfolio.personalInfo.name} home`}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-sm font-semibold text-white"
          href="#top"
        >
          {portfolio.personalInfo.initials}
        </a>
        <div className="flex max-w-[72vw] items-center gap-1 overflow-x-auto rounded-full p-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {portfolio.navigation.map((item) => (
            <a
              key={item.href}
              className={`relative rounded-full px-3 py-2 text-xs font-medium transition-colors sm:px-4 ${
                active === item.href ? "text-white" : "text-slate-400 hover:text-slate-100"
              }`}
              href={item.href}
            >
              {active === item.href ? (
                <motion.span
                  className="absolute inset-0 rounded-full bg-white/[0.08]"
                  layoutId="active-section"
                  transition={{ duration: 0.28, ease: "easeOut" }}
                />
              ) : null}
              <span className="relative z-10">{item.label}</span>
            </a>
          ))}
        </div>
      </nav>
    </motion.header>
  );
}
