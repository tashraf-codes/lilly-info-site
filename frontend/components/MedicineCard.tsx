import Link from "next/link";
import TiltCard from "@/components/motion/TiltCard";
import MedicineArt from "@/components/illustrations/MedicineArt";
import type { Medicine } from "@/lib/types";

export default function MedicineCard({ medicine }: { medicine: Medicine }) {
  return (
    <TiltCard className="h-full">
      <Link
        href={`/medicines/${medicine.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-white shadow-sm transition-shadow hover:shadow-md hover:border-brand/40"
      >
        <div className="flex items-start justify-between gap-3 border-b border-border bg-muted/60 px-6 py-4">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-wide text-brand">
              {medicine.category}
            </p>
            <h3 className="mt-1 truncate text-lg font-bold">{medicine.name}</h3>
            <p className="text-sm text-neutral-500">{medicine.genericName}</p>
          </div>
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-border bg-white shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
            <MedicineArt formType={medicine.formType} className="h-10 w-10" />
          </div>
        </div>
        <p className="flex-1 px-6 py-4 text-sm text-neutral-600 line-clamp-3">{medicine.about}</p>
      </Link>
    </TiltCard>
  );
}
