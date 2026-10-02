import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMedicine, getMedicines } from "@/lib/api";

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
      <Link href="/medicines" className="text-sm font-semibold text-brand hover:underline">
        &larr; All medicines
      </Link>

      <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-brand">
        {medicine.category}
      </p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight">{medicine.name}</h1>
      <p className="mt-1 text-lg text-neutral-500">{medicine.genericName}</p>

      <p className="mt-6 text-neutral-700">{medicine.about}</p>

      <dl className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Fact label="Drug Class" value={medicine.drugClass} />
        <Fact label="Form" value={medicine.form} />
        <Fact label="First Approved" value={String(medicine.approvalYear)} />
        <Fact label="Used For" value={medicine.usedFor.join(", ")} />
      </dl>

      <div className="mt-10 rounded-lg border border-border bg-muted p-4 text-sm text-neutral-600">
        This summary is for general educational purposes only and is not medical advice or
        prescribing information. Consult a healthcare professional and official labeling before
        making any decisions about this medicine.
      </div>
    </div>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4">
      <dt className="text-xs font-semibold uppercase tracking-wide text-neutral-500">{label}</dt>
      <dd className="mt-1 font-medium text-neutral-900">{value}</dd>
    </div>
  );
}
