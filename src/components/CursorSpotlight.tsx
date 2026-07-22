"use client";

import { useEffect, useRef, useCallback } from "react";

export default function CursorSpotlight() {
  const elRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = useCallback((event: PointerEvent) => {
    const el = elRef.current;
    if (!el) return;

    // Check if hovering over text elements
    const target = event.target as HTMLElement | null;
    if (target) {
      const tag = target.tagName;
      const isText = ["P", "SPAN", "H1", "H2", "H3", "H4", "H5", "H6", "LI", "A", "BUTTON", "INPUT", "TEXTAREA"].includes(tag);
      const hasTextParent = target.closest("p, article, ul, ol, section");
      if (isText || !!hasTextParent) {
        el.style.display = "none";
        return;
      }
    }

    el.style.display = "";
    el.style.background = `radial-gradient(400px circle at ${event.clientX}px ${event.clientY}px, rgba(236, 233, 225, 0.05), transparent 60%)`;
  }, []);

  const handlePointerLeave = useCallback(() => {
    const el = elRef.current;
    if (el) el.style.display = "none";
  }, []);

  useEffect(() => {
    // Check if device supports fine pointer (mouse/trackpad) and prefers reduced motion
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!hasFinePointer || reducedMotion) {
      return;
    }

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [handlePointerMove, handlePointerLeave]);

  return (
    <div
      ref={elRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[2] hidden opacity-60 mix-blend-screen md:block"
      style={{ display: "none" }}
    />
  );
}
