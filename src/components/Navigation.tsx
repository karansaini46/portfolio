"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { portfolio } from "@/data/portfolio";
import BrandMark from "@/components/brand/BrandMark";

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

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
    <>
      <motion.header
        className="fixed left-0 right-0 top-0 z-50 flex justify-center w-full pt-4 md:pt-6 px-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          className={`flex items-center justify-between transition-all duration-300 rounded-2xl w-full max-w-6xl ${
            isScrolled 
              ? "bg-surface/80 backdrop-blur-xl border border-border-visible shadow-2xl h-16 px-6"
              : "bg-transparent border-transparent h-[4.5rem] px-3"
          }`}
        >
          {/* Left Side: Logo */}
          <Link href="/" className="flex items-center group shrink-0">
            <span className={`font-mono uppercase tracking-[0.2em] text-text-primary font-bold transition-all duration-300 ${isScrolled ? 'text-[11px]' : 'text-sm'}`}>
              {portfolio.personalInfo.name}
            </span>
          </Link>

          {/* Center: Desktop Navigation */}
          <nav className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2">
            <div className="flex items-center gap-1.5 p-1.5 rounded-full bg-surface-raised/50 border border-border-subtle backdrop-blur-md">
              {portfolio.navigation.map((item) => {
                const isActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`relative px-5 py-2 font-sans text-sm font-medium transition-colors rounded-full z-10 ${
                      isActive ? "text-background" : "text-text-secondary hover:text-text-primary"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-text-primary rounded-full -z-10 shadow-[0_0_12px_rgba(236,233,225,0.2)]"
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      />
                    )}
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Right: Actions */}
          <div className="hidden md:flex items-center gap-3.5 shrink-0">
            <button
              onClick={() => window.dispatchEvent(new KeyboardEvent("keydown", { key: "k", metaKey: true }))}
              className="group flex items-center justify-center w-10 h-10 rounded-full bg-surface-raised border border-border-subtle hover:border-border-visible hover:bg-surface transition-all cursor-pointer"
              title="Search command palette (⌘K)"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-text-muted group-hover:text-text-primary transition-colors">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
            
            <button
              onClick={() => setContactModalOpen(true)}
              className="relative overflow-hidden group rounded-full border border-border-visible bg-surface px-5 py-2 font-sans text-sm font-medium text-text-primary transition-all hover:border-text-primary hover:bg-surface-raised"
            >
              <span className="relative z-10">Contact Me</span>
            </button>
            <a
              href={portfolio.socialLinks.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden group rounded-full border border-accent-primary/30 bg-accent-primary/10 px-5 py-2 font-sans text-sm font-medium text-accent-primary transition-all hover:border-accent-primary/50 hover:shadow-[0_0_20px_rgba(180,95,53,0.15)]"
            >
              <span className="relative z-10">Résumé</span>
              <div className="absolute inset-0 bg-accent-primary/20 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out" />
            </a>
          </div>

          {/* Mobile menu trigger */}
          <button
            ref={triggerRef}
            aria-expanded={mobileMenuOpen}
            onClick={handleToggle}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden cursor-pointer shrink-0 z-50"
          >
            <span className={`h-0.5 w-5 bg-text-primary rounded-full transition-all duration-300 ${mobileMenuOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-5 bg-text-primary rounded-full transition-opacity duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-5 bg-text-primary rounded-full transition-all duration-300 ${mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </motion.div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav"
            ref={menuRef}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden flex flex-col justify-center p-8"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-col gap-8 text-center mt-10">
              {portfolio.navigation.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 + 0.1, duration: 0.4, ease: "easeOut" }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-sans text-4xl font-medium tracking-tight text-text-primary hover:text-accent-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="flex flex-col gap-4 mt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setContactModalOpen(true);
                }}
                className="flex min-h-[52px] items-center justify-center rounded-xl border border-border-visible bg-surface font-sans text-sm font-medium text-text-primary active:bg-surface-raised transition-colors"
              >
                Contact Me
              </button>
              <a
                href={portfolio.socialLinks.resume}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex min-h-[52px] items-center justify-center rounded-xl border border-accent-primary/40 bg-accent-primary/10 font-sans text-sm font-medium text-accent-primary active:bg-accent-primary/20 transition-colors"
              >
                View Résumé
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  window.dispatchEvent(new KeyboardEvent("keydown", { key: "k", metaKey: true }));
                }}
                className="flex min-h-[52px] items-center justify-center gap-2 rounded-xl border border-border-subtle bg-surface-raised font-sans text-sm font-medium text-text-secondary active:bg-surface transition-colors"
              >
                Search <kbd className="font-mono text-[10px] uppercase tracking-widest bg-surface px-1.5 py-0.5 rounded border border-border-visible">⌘K</kbd>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Funky Contact Modal */}
      <AnimatePresence>
        {contactModalOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background/95 backdrop-blur-md p-4 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button 
              onClick={() => setContactModalOpen(false)} 
              className="absolute top-6 right-6 md:top-12 md:right-12 w-12 h-12 flex items-center justify-center rounded-full bg-surface border border-border-visible text-text-primary hover:bg-surface-raised transition-colors z-50 group"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:rotate-90 transition-transform duration-300">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            
            <motion.h2 
              className="text-4xl md:text-6xl lg:text-7xl font-sans font-bold mb-16 text-center max-w-4xl tracking-tight text-text-primary"
              initial={{ scale: 0.8, opacity: 0, rotate: -5, y: 50 }}
              animate={{ scale: 1, opacity: 1, rotate: 0, y: 0 }}
              transition={{ type: "spring", bounce: 0.6, duration: 0.8 }}
            >
              How would you like to bother me today?
            </motion.h2>

            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 max-w-4xl relative z-10">
              {[
                { name: "Shoot an Email", href: `mailto:${portfolio.socialLinks.email}`, styles: "bg-accent-primary/10 text-accent-primary border-accent-primary/30 hover:bg-accent-primary hover:text-background hover:border-accent-primary hover:shadow-[0_0_30px_rgba(180,95,53,0.3)]" },
                { name: "Stalk my GitHub", href: portfolio.socialLinks.github, styles: "bg-surface-raised text-text-primary border-border-visible hover:bg-text-primary hover:text-background hover:border-text-primary hover:shadow-[0_0_30px_rgba(236,233,225,0.15)]" },
                { name: "Professional Flexing", href: portfolio.socialLinks.linkedin, styles: "bg-accent-secondary/10 text-accent-secondary border-accent-secondary/30 hover:bg-accent-secondary hover:text-background hover:border-accent-secondary hover:shadow-[0_0_30px_rgba(156,165,121,0.3)]" },
                { name: "Doomscroll my X", href: portfolio.socialLinks.x, styles: "bg-accent-gold/10 text-accent-gold border-accent-gold/30 hover:bg-accent-gold hover:text-background hover:border-accent-gold hover:shadow-[0_0_30px_rgba(208,181,120,0.3)]" },
                { name: "Judge my Résumé", href: portfolio.socialLinks.resume, styles: "bg-danger/10 text-danger border-danger/30 hover:bg-danger hover:text-background hover:border-danger hover:shadow-[0_0_30px_rgba(185,78,72,0.3)]" },
              ].map((link, i) => {
                const deterministicRotate = (i % 2 === 0 ? 1 : -1) * (5 + (i * 2)); // deterministic rotation
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-8 py-5 rounded-full border-2 text-lg md:text-xl font-bold shadow-xl transition-all duration-300 cursor-pointer ${link.styles}`}
                    initial={{ y: 150, opacity: 0, scale: 0 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 15,
                      delay: i * 0.08 + 0.2
                    }}
                    whileHover={{ 
                      scale: 1.15,
                      rotate: deterministicRotate,
                      transition: { type: "spring", stiffness: 400, damping: 10 }
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {link.name}
                  </motion.a>
                )
              })}
            </div>
            
            <motion.div 
               className="mt-20 font-mono text-xs uppercase tracking-widest text-text-muted text-center"
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 1.2, duration: 0.5 }}
            >
               (Warning: I might actually reply fast)
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
// Force clean recompile
