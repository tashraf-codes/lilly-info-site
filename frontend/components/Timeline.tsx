"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import Reveal from "@/components/motion/Reveal";
import type { HistoryEvent } from "@/lib/types";

export default function Timeline({ history }: { history: HistoryEvent[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.6"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25, mass: 0.3 });

  return (
    <div ref={containerRef} className="relative pl-6">
      <div className="absolute left-0 top-1 bottom-1 w-px bg-border" aria-hidden="true" />
      <motion.div
        className="absolute left-0 top-1 w-px origin-top bg-brand"
        style={{ scaleY: progress, bottom: "0.25rem" }}
        aria-hidden="true"
      />
      <ol className="space-y-8">
        {history.map((item, i) => (
          <Reveal key={item.year} as="li" delay={i * 0.03} className="relative">
            <span className="absolute -left-[26px] top-1 h-3 w-3 rounded-full border-2 border-background bg-brand" />
            <p className="text-sm font-semibold text-brand">{item.year}</p>
            <p className="mt-1 text-neutral-700">{item.event}</p>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}
