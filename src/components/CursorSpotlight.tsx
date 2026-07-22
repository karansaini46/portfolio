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
        el.style.opacity = "0";
        return;
      }
    }

    el.style.opacity = "0.6";
    // Only update transform (compositor-only, no repaint).
    // The gradient is static and centered — we move the element instead.
    el.style.transform = `translate3d(${event.clientX - 400}px, ${event.clientY - 400}px, 0)`;
  }, []);

  const handlePointerLeave = useCallback(() => {
    const el = elRef.current;
    if (el) el.style.opacity = "0";
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
      className="pointer-events-none fixed z-[2] hidden md:block"
      style={{
        width: 800,
        height: 800,
        top: 0,
        left: 0,
        opacity: 0,
        background: "radial-gradient(circle, rgba(236, 233, 225, 0.05) 0%, transparent 60%)",
        mixBlendMode: "screen",
        willChange: "transform",
        transform: "translate3d(-9999px, -9999px, 0)",
      }}
    />
  );
}
