import Link from "next/link";
import type { Metadata } from "next";
import { getMedicines } from "@/lib/api";

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
      <h1 className="text-4xl font-bold tracking-tight">Medicines</h1>
      <p className="mt-3 max-w-2xl text-neutral-600">
        An overview of selected medicines developed by Lilly, spanning diabetes &amp; obesity,
        oncology, immunology, neuroscience, and cardiometabolic health.
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        <FilterLink label="All" active={!category} />
        {categories.map((c) => (
          <FilterLink key={c} label={c} active={category === c} />
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((medicine) => (
          <Link
            key={medicine.slug}
            href={`/medicines/${medicine.slug}`}
            className="rounded-lg border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-brand">
              {medicine.category}
            </p>
            <h2 className="mt-2 text-lg font-bold">{medicine.name}</h2>
            <p className="text-sm text-neutral-500">{medicine.genericName}</p>
            <p className="mt-3 text-sm text-neutral-600 line-clamp-3">{medicine.about}</p>
          </Link>
        ))}
        {filtered.length === 0 && (
          <p className="text-neutral-500">No medicines found in this category.</p>
        )}
      </div>
    </div>
  );
}

function FilterLink({ label, active }: { label: string; active: boolean }) {
  const href = label === "All" ? "/medicines" : `/medicines?category=${encodeURIComponent(label)}`;
  return (
    <Link
      href={href}
      className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
        active
          ? "border-brand bg-brand text-white"
          : "border-border text-neutral-700 hover:border-brand hover:text-brand"
      }`}
    >
      {label}
    </Link>
  );
}
