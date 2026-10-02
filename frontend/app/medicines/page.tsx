import Link from "next/link";
import type { Metadata } from "next";
import { getMedicines } from "@/lib/api";
import FilterBar from "@/components/FilterBar";
import Reveal from "@/components/motion/Reveal";
import TiltCard from "@/components/motion/TiltCard";
import AnimatedGrid, { AnimatedGridItem } from "@/components/motion/AnimatedGrid";

export const metadata: Metadata = {
  title: "Medicines | Lilly",
};

export default async function MedicinesPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const [allMedicines, filtered] = await Promise.all([
    getMedicines(),
    getMedicines(category),
  ]);
  const categories = [...new Set(allMedicines.map((m) => m.category))];

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <Reveal>
        <h1 className="text-4xl font-bold tracking-tight">Medicines</h1>
        <p className="mt-3 max-w-2xl text-neutral-600">
          An overview of selected medicines developed by Lilly, spanning diabetes &amp; obesity,
          oncology, immunology, neuroscience, and cardiometabolic health.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-8">
        <FilterBar categories={categories} active={category} />
      </Reveal>

      <AnimatedGrid
        replayKey={category ?? "all"}
        className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {filtered.map((medicine) => (
          <AnimatedGridItem key={medicine.slug}>
            <TiltCard className="h-full">
              <Link
                href={`/medicines/${medicine.slug}`}
                className="block h-full rounded-lg border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md hover:border-brand/40"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-brand">
                  {medicine.category}
                </p>
                <h2 className="mt-2 text-lg font-bold">{medicine.name}</h2>
                <p className="text-sm text-neutral-500">{medicine.genericName}</p>
                <p className="mt-3 text-sm text-neutral-600 line-clamp-3">{medicine.about}</p>
              </Link>
            </TiltCard>
          </AnimatedGridItem>
        ))}
        {filtered.length === 0 && (
          <p className="text-neutral-500">No medicines found in this category.</p>
        )}
      </AnimatedGrid>
    </div>
  );
}
