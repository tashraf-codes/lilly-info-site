"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { HistoryEvent } from "@/lib/types";

export default function MilestoneSlider({ milestones }: { milestones: HistoryEvent[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  function scrollToIndex(index: number) {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(index, milestones.length - 1));
    const card = track.children[clamped] as HTMLElement | undefined;
    card?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
    setActive(clamped);
  }

  function handleScroll() {
    const track = trackRef.current;
    if (!track) return;
    const cardWidth = track.children[0]?.clientWidth ?? 1;
    const index = Math.round(track.scrollLeft / (cardWidth + 24));
    setActive(index);
  }

  return (
    <div className="relative">
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {milestones.map((item) => (
          <div
            key={item.year}
            className="w-[82%] shrink-0 snap-start rounded-xl border border-border bg-white p-6 shadow-sm sm:w-[46%] lg:w-[31%]"
          >
            <p className="text-4xl font-bold tracking-tight text-brand">{item.year}</p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">{item.event}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex gap-1.5">
          {milestones.map((item, i) => (
            <button
              key={item.year}
              type="button"
              aria-label={`Go to milestone ${item.year}`}
              onClick={() => scrollToIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === active ? "w-6 bg-brand" : "w-1.5 bg-border"
              }`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Previous milestone"
            onClick={() => scrollToIndex(active - 1)}
            className="rounded-full border border-border p-2 text-neutral-600 transition-colors hover:border-brand hover:text-brand disabled:opacity-30"
            disabled={active === 0}
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Next milestone"
            onClick={() => scrollToIndex(active + 1)}
            className="rounded-full border border-border p-2 text-neutral-600 transition-colors hover:border-brand hover:text-brand disabled:opacity-30"
            disabled={active === milestones.length - 1}
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
