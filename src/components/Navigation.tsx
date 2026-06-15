"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { portfolio } from "@/data/portfolio";
import BrandMark from "@/components/brand/BrandMark";

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Work", href: "/work" },
    { label: "Stack", href: "/#stack" },
    { label: "Contact", href: "#contact" },
  ];

  const handleToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        triggerRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Focus trap for mobile menu
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const focusable = menuRef.current?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex="0"]'
    );
    if (!focusable || focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          last.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === last) {
          first.focus();
          e.preventDefault();
        }
      }
    };

    window.addEventListener("keydown", handleTab);
    return () => window.removeEventListener("keydown", handleTab);
  }, [mobileMenuOpen]);

  return (
    <motion.header
      className="fixed left-0 right-0 top-0 z-50 border-b border-border-subtle bg-background/80 backdrop-blur-md"
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 h-16">
        {/* Left Side: Logo & Wordmark */}
        <Link href="/" className="flex items-center gap-3 group">
          <BrandMark size={24} className="transition-transform group-hover:rotate-45" />
          <span className="font-mono text-xs uppercase tracking-[0.24em] text-text-primary font-bold">
            {portfolio.personalInfo.name}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : item.href === "/work"
                ? pathname === "/work"
                : pathname === "/" && item.href.startsWith("/#");

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative font-mono text-xs uppercase tracking-wider py-1.5 transition-colors ${
                  isActive ? "text-accent-primary" : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-primary"
                    transition={{ duration: 0.25 }}
                  />
                )}
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          {/* Command trigger helper */}
          <button
            onClick={() => window.dispatchEvent(new KeyboardEvent("keydown", { key: "k", metaKey: true }))}
            className="flex items-center gap-2 rounded border border-border-subtle bg-surface-raised px-2.5 py-1 font-mono text-[10px] text-text-muted hover:border-border-visible transition-colors cursor-pointer"
            title="Search command palette (⌘K)"
          >
            <span>Search</span>
            <kbd className="opacity-60">⌘K</kbd>
          </button>
          
          <a
            href={portfolio.socialLinks.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded border border-accent-primary/40 bg-accent-primary/10 px-3.5 py-1.5 font-mono text-xs text-accent-primary hover:bg-accent-primary hover:text-white transition-colors"
          >
            Résumé
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          ref={triggerRef}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav"
          onClick={handleToggle}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden cursor-pointer"
        >
          <span className={`h-0.5 w-5 bg-text-primary transition-transform duration-200 ${mobileMenuOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-5 bg-text-primary transition-opacity duration-200 ${mobileMenuOpen ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-5 bg-text-primary transition-transform duration-200 ${mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav"
            ref={menuRef}
            className="fixed inset-0 top-16 z-40 bg-background md:hidden flex flex-col justify-between p-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex flex-col gap-6 mt-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-sans text-2xl font-medium tracking-tight text-text-primary hover:text-accent-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-4 mb-12">
              <a
                href={portfolio.socialLinks.resume}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex min-h-12 items-center justify-center rounded border border-accent-primary/40 bg-accent-primary/10 font-mono text-sm text-accent-primary hover:bg-accent-primary hover:text-white transition-colors"
              >
                View Résumé
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  // Dispatch trigger
                  window.dispatchEvent(new KeyboardEvent("keydown", { key: "k", metaKey: true }));
                }}
                className="flex min-h-12 items-center justify-center gap-2 rounded border border-border-subtle bg-surface-raised font-mono text-sm text-text-secondary cursor-pointer"
              >
                Open Command Palette <kbd className="opacity-60 text-xs">⌘K</kbd>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
