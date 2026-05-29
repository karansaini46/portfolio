"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";
import ScreenshotLightbox from "@/components/ScreenshotLightbox";
import { portfolio } from "@/data/portfolio";

type ScreenshotGalleryProps = {
  title: string;
  screenshots: string[];
  large?: boolean;
};

export default function ScreenshotGallery({ title, screenshots, large = false }: ScreenshotGalleryProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [failed, setFailed] = useState<Record<string, true>>({});

  const availableScreenshots = useMemo(
    () => screenshots.filter((screenshot) => !failed[screenshot]),
    [failed, screenshots],
  );

  if (screenshots.length === 0 || availableScreenshots.length === 0) {
    return (
      <div
        className={`relative flex ${large ? "min-h-[22rem]" : "min-h-[15rem]"} items-center justify-center overflow-hidden rounded-[1.5rem] border border-dashed border-white/15 bg-[#070a0f]`}
      >
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(to_right,rgba(148,163,184,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.2)_1px,transparent_1px)] [background-size:34px_34px]" />
        <div className="relative text-center">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-slate-500">{title}</p>
          <p className="mt-3 text-sm font-medium text-slate-300">{portfolio.actions.screenshotFallback}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div
        className={`group relative aspect-[16/10] ${large ? "min-h-[21rem]" : "min-h-[15rem]"} overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#070a0f] p-3`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(125,211,252,0.13),transparent_46%)] opacity-80" />
        <div className="relative h-full">
          {availableScreenshots.slice(0, 3).map((screenshot, index) => (
            <motion.button
              key={screenshot}
              type="button"
              aria-label={`Open ${title} screenshot ${index + 1}`}
              className={`absolute overflow-hidden rounded-2xl border border-white/12 bg-slate-950 shadow-2xl shadow-black/30 ${
                index === 0
                  ? "inset-x-0 bottom-0 top-0 z-30"
                  : index === 1
                    ? "bottom-4 right-3 top-7 z-20 w-[76%]"
                    : "bottom-8 right-7 top-14 z-10 w-[64%]"
              }`}
              initial={false}
              whileHover={{ y: index === 0 ? -8 : -4, rotate: index === 0 ? -0.7 : 0.8, scale: 1.012 }}
              animate={{
                x: index === 0 ? 0 : 24 + index * 16,
                opacity: index === 0 ? 1 : 0.48 - index * 0.08,
              }}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setSelected(screenshot)}
            >
              <Image
                src={screenshot}
                alt={`${title} screenshot ${index + 1}`}
                fill
                className="object-contain transition duration-500 group-hover:scale-[1.012]"
                sizes={large ? "(min-width: 1024px) 52vw, 92vw" : "(min-width: 1024px) 38vw, 92vw"}
                onError={() => setFailed((current) => ({ ...current, [screenshot]: true }))}
              />
              <span className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-white/[0.04]" />
            </motion.button>
          ))}
        </div>
      </div>
      <ScreenshotLightbox image={selected} title={title} onClose={() => setSelected(null)} />
    </>
  );
}
