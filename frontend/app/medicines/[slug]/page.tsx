import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getMedicine, getMedicines } from "@/lib/api";
import Reveal from "@/components/motion/Reveal";
import StaggerGroup from "@/components/motion/StaggerGroup";

export async function generateStaticParams() {
  const medicines = await getMedicines();
  return medicines.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const medicine = await getMedicine(slug);
  return { title: medicine ? `${medicine.name} | Lilly` : "Medicine | Lilly" };
}

export default async function MedicineDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const medicine = await getMedicine(slug);

  if (!medicine) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/medicines"
        className="group inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline"
      >
        <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
        All medicines
      </Link>

      <Reveal delay={0.05}>
        <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-brand">
          {medicine.category}
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">{medicine.name}</h1>
        <p className="mt-1 text-lg text-neutral-500">{medicine.genericName}</p>
        <p className="mt-6 text-neutral-700">{medicine.about}</p>
      </Reveal>

      <StaggerGroup className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Reveal>
          <Fact label="Drug Class" value={medicine.drugClass} />
        </Reveal>
        <Reveal delay={0.05}>
          <Fact label="Form" value={medicine.form} />
        </Reveal>
        <Reveal delay={0.1}>
          <Fact label="First Approved" value={String(medicine.approvalYear)} />
        </Reveal>
        <Reveal delay={0.15}>
          <Fact label="Used For" value={medicine.usedFor.join(", ")} />
        </Reveal>
      </StaggerGroup>

      <Reveal delay={0.2}>
        <div className="mt-10 rounded-lg border border-border bg-muted p-4 text-sm text-neutral-600">
          This summary is for general educational purposes only and is not medical advice or
          prescribing information. Consult a healthcare professional and official labeling before
          making any decisions about this medicine.
        </div>
      </Reveal>
    </div>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 transition-colors hover:border-brand/40">
      <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">{label}</p>
      <p className="mt-1 font-medium text-neutral-900">{value}</p>
    </div>
  );
}
