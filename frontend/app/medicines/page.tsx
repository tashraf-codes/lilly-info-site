import type { Metadata } from "next";
import { getMedicines } from "@/lib/api";
import FilterBar from "@/components/FilterBar";
import MedicineCard from "@/components/MedicineCard";
import Reveal from "@/components/motion/Reveal";
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
          oncology, immunology, neuroscience, cardiometabolic health, and bone health.
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
            <MedicineCard medicine={medicine} />
          </AnimatedGridItem>
        ))}
        {filtered.length === 0 && (
          <p className="text-neutral-500">No medicines found in this category.</p>
        )}
      </AnimatedGrid>
    </div>
  );
}
