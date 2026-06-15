"use client";

import { useEffect, useState } from "react";

export default function CursorSpotlight() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [disabledOverText, setDisabledOverText] = useState(false);

  useEffect(() => {
    // Check if device supports fine pointer (mouse/trackpad) and prefers reduced motion
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!hasFinePointer || reducedMotion) {
      return;
    }

    const handlePointerMove = (event: PointerEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
      setVisible(true);

      // Check if hovering over text elements
      const target = event.target as HTMLElement | null;
      if (target) {
        const tag = target.tagName;
        const isText = ["P", "SPAN", "H1", "H2", "H3", "H4", "H5", "H6", "LI", "A", "BUTTON", "INPUT", "TEXTAREA"].includes(tag);
        const hasTextParent = target.closest("p, article, ul, ol, section");
        setDisabledOverText(isText || !!hasTextParent);
      }
    };

    const handlePointerLeave = () => {
      setVisible(false);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  if (!visible || disabledOverText) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[2] hidden opacity-60 mix-blend-screen md:block"
      style={{
        background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(236, 233, 225, 0.05), transparent 60%)`,
      }}
    />
  );
}
