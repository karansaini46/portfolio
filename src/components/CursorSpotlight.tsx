"use client";

import { useEffect, useState } from "react";

export default function CursorSpotlight() {
  const [position, setPosition] = useState({ x: 50, y: 18 });

  useEffect(() => {
    const handleMove = (event: PointerEvent) => {
      setPosition({
        x: (event.clientX / window.innerWidth) * 100,
        y: (event.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[2] hidden opacity-70 mix-blend-screen md:block"
      style={{
        background: `radial-gradient(560px circle at ${position.x}% ${position.y}%, rgba(125, 211, 252, 0.11), transparent 58%)`,
      }}
    />
  );
}
