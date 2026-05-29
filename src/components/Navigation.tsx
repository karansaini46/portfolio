"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { portfolio } from "@/data/portfolio";

export default function Navigation() {
  const [pathname, setPathname] = useState("/");
  const [active, setActive] = useState("Home");

  const currentActive = pathname === "/work" ? "Work" : active;

  const navItems = [
    { label: "Home", href: pathname === "/" ? "#top" : "/" },
    { label: "Work", href: pathname === "/work" ? "#top" : "/work" },
    { label: "Stack", href: pathname === "/" ? "#stack" : "/#stack" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    // Detect pathname on client side to avoid Next.js static prerender errors
    setPathname(window.location.pathname);
  }, []);

  useEffect(() => {
    if (pathname === "/work") return;

    const observers = [
      { id: "top", label: "Home" },
      { id: "work", label: "Work" },
      { id: "stack", label: "Stack" },
      { id: "contact", label: "Contact" },
    ]
      .map((item) => {
        const el = document.getElementById(item.id);
        if (!el) return null;
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActive(item.label);
            }
          },
          { rootMargin: "-35% 0px -55% 0px", threshold: 0.01 },
        );
        observer.observe(el);
        return observer;
      })
      .filter((o): o is IntersectionObserver => o !== null);

    return () => observers.forEach((observer) => observer.disconnect());
  }, [pathname]);

  return (
    <motion.header
      className="fixed left-0 right-0 top-0 z-50 px-4 py-4"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-[#070a0f]/72 px-3 py-2 shadow-2xl shadow-black/20 backdrop-blur-xl">
        <Link
          aria-label={`${portfolio.personalInfo.name} home`}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-sm font-semibold text-white hover:bg-white/[0.1] transition-colors"
          href={pathname === "/" ? "#top" : "/"}
        >
          {portfolio.personalInfo.initials}
        </Link>
        <div className="flex max-w-[72vw] items-center gap-1 overflow-x-auto rounded-full p-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {navItems.map((item) => (
            <Link
              key={item.label}
              className={`relative rounded-full px-3 py-2 text-xs font-medium transition-colors sm:px-4 ${
                currentActive === item.label ? "text-white" : "text-slate-400 hover:text-slate-100"
              }`}
              href={item.href}
            >
              {currentActive === item.label ? (
                <motion.span
                  className="absolute inset-0 rounded-full bg-white/[0.08]"
                  layoutId="active-section"
                  transition={{ duration: 0.28, ease: "easeOut" }}
                />
              ) : null}
              <span className="relative z-10">{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </motion.header>
  );
}
