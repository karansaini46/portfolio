"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";

export default function CommandPalette() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Define commands
  const commands = [
    { name: "Go to Home", category: "Navigation", action: () => router.push("/") },
    { name: "Go to Work", category: "Navigation", action: () => router.push("/work") },
    { name: "Go to Stack", category: "Navigation", action: () => router.push("/#stack") },
    { name: "Contact Karan", category: "Contact", action: () => router.push("#contact") },
    { name: "Open GitHub Profile", category: "External", action: () => window.open(portfolio.socialLinks.github, "_blank") },
    { name: "Open LinkedIn Profile", category: "External", action: () => window.open(portfolio.socialLinks.linkedin, "_blank") },
    { name: "View Résumé PDF", category: "External", action: () => window.open(portfolio.socialLinks.resume, "_blank") },
    // Projects
    ...portfolio.projects.map((project) => ({
      name: `View project: ${project.title}`,
      category: "Projects",
      action: () => router.push(`/work#${project.slug}`),
    })),
  ];

  // Filter commands
  const filtered = commands.filter((cmd) =>
    cmd.name.toLowerCase().includes(search.toLowerCase()) ||
    cmd.category.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key?.toLowerCase() === "k") {
        e.preventDefault();
        setSearch("");
        setActiveIndex(0);
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Focus trap
  useEffect(() => {
    if (!isOpen) return;

    const handleTab = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        e.preventDefault(); // Keep focus inside the input/list
      }
    };

    window.addEventListener("keydown", handleTab);
    return () => window.removeEventListener("keydown", handleTab);
  }, [isOpen]);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => (prev + 1) % filtered.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filtered[activeIndex]) {
        filtered[activeIndex].action();
        setIsOpen(false);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-[100] flex items-start justify-center bg-black/60 p-4 pt-[15vh] backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      >
        <motion.div
          ref={containerRef}
          className="w-full max-w-xl overflow-hidden rounded-xl border border-border-visible bg-surface shadow-2xl"
          initial={{ opacity: 0, scale: 0.97, y: -8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.97, y: -8 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Input field */}
          <div className="flex items-center border-b border-border-subtle px-4 py-3">
            <svg
              className="mr-3 h-4 w-4 text-text-muted"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              ref={inputRef}
              type="text"
              className="w-full bg-transparent font-mono text-sm text-text-primary outline-none placeholder:text-text-muted"
              placeholder="Type a command or search..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setActiveIndex(0);
              }}
              onKeyDown={(e) => handleKeyDown(e.nativeEvent)}
            />
            <button
              onClick={() => setIsOpen(false)}
              className="rounded border border-border-subtle px-1.5 py-0.5 font-mono text-[9px] text-text-muted hover:border-border-visible cursor-pointer"
            >
              ESC
            </button>
          </div>

          {/* Results list */}
          <div className="max-h-80 overflow-y-auto p-2">
            {filtered.length === 0 ? (
              <div className="p-4 text-center font-mono text-xs text-text-muted">
                No commands found.
              </div>
            ) : (
              filtered.map((cmd, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={cmd.name}
                    className={`flex w-full items-center justify-between rounded px-3 py-2 text-left transition-colors cursor-pointer ${
                      isActive ? "bg-accent-primary/10 text-accent-primary" : "text-text-secondary hover:bg-surface-raised hover:text-text-primary"
                    }`}
                    onClick={() => {
                      cmd.action();
                      setIsOpen(false);
                    }}
                    onMouseEnter={() => setActiveIndex(index)}
                  >
                    <span className="font-sans text-sm font-medium">{cmd.name}</span>
                    <span className="font-mono text-[10px] uppercase tracking-wider opacity-60">
                      {cmd.category}
                    </span>
                  </button>
                );
              })
            )}
          </div>

          {/* Footer instruction help */}
          <div className="flex justify-between border-t border-border-subtle px-4 py-2 font-mono text-[9px] text-text-muted">
            <div className="flex gap-3">
              <span>↑↓ Navigation</span>
              <span>↵ Select</span>
            </div>
            <span>Press ESC to close</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
