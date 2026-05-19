"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { portfolio } from "@/data/portfolio";

type ScreenshotLightboxProps = {
  image: string | null;
  title: string;
  onClose: () => void;
};

export default function ScreenshotLightbox({ image, title, onClose }: ScreenshotLightboxProps) {
  useEffect(() => {
    if (!image) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [image, onClose]);

  return (
    <AnimatePresence>
      {image ? (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/82 px-4 py-8 backdrop-blur-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label={`${title} screenshot preview`}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-6xl overflow-hidden rounded-[1.75rem] border border-white/15 bg-[#070a0f] p-3 shadow-2xl"
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label={portfolio.actions.closeLightbox}
              className="absolute right-5 top-5 z-10 rounded-full border border-white/10 bg-black/60 px-3 py-2 text-sm text-slate-200 backdrop-blur transition-colors hover:bg-white/10"
              onClick={onClose}
            >
              Close
            </button>
            <div className="relative aspect-[16/10] overflow-hidden rounded-[1.25rem] bg-slate-950">
              <Image src={image} alt={`${title} screenshot`} fill className="object-contain" sizes="95vw" />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
