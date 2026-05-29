"use client";

import SectionHeader from "@/components/SectionHeader";

export default function WorkHeader() {
  return (
    <section id="top" className="relative px-5 pb-8 pt-32 sm:pt-36">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="case studies"
          title="Selected full-stack systems built around real product complexity."
          description="Detailed deep-dives into the architecture, user requirements, technical stacks, and database models of each build."
        />
      </div>
    </section>
  );
}
