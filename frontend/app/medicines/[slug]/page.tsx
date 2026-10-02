import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getMedicine, getMedicines } from "@/lib/api";
import MedicineArt from "@/components/illustrations/MedicineArt";
import MedicineCard from "@/components/MedicineCard";
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

  const sameCategory = await getMedicines(medicine.category);
  const related = sameCategory.filter((m) => m.slug !== medicine.slug).slice(0, 3);

  return (
    <div>
      <div className="mx-auto max-w-5xl px-6 pt-10">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-neutral-500">
          <Link href="/" className="transition-colors hover:text-brand">
            Home
          </Link>
          <span aria-hidden="true">/</span>
          <Link href="/medicines" className="transition-colors hover:text-brand">
            Medicines
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-neutral-800">{medicine.name}</span>
        </nav>
      </div>

      <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-8 px-6 py-10 md:grid-cols-[1.3fr_0.7fr] md:py-16">
        <Reveal delay={0.05}>
          <Link
            href="/medicines"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
            All medicines
          </Link>
          <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-brand">
            {medicine.category}
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight">{medicine.name}</h1>
          <p className="mt-1 text-lg text-neutral-500">{medicine.genericName}</p>
          <p className="mt-6 text-neutral-700">{medicine.about}</p>
        </Reveal>
        <Reveal delay={0.15} className="flex justify-center md:justify-end">
          <div className="relative flex h-48 w-48 items-center justify-center overflow-hidden rounded-full bg-muted">
            <div className="hero-mesh opacity-60" aria-hidden="true" />
            <MedicineArt formType={medicine.formType} className="relative h-32 w-32" />
          </div>
        </Reveal>
      </div>

      <div className="mx-auto max-w-5xl px-6 pb-16">
        <StaggerGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2">
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

        {related.length > 0 && (
          <div className="mt-16">
            <Reveal>
              <div className="flex items-end justify-between">
                <h2 className="text-xl font-bold">More in {medicine.category}</h2>
                <Link
                  href={`/medicines?category=${encodeURIComponent(medicine.category)}`}
                  className="group flex items-center gap-1 text-sm font-semibold text-brand hover:underline"
                >
                  View all
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </Reveal>
            <StaggerGroup className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {related.map((m) => (
                <Reveal key={m.slug}>
                  <MedicineCard medicine={m} />
                </Reveal>
              ))}
            </StaggerGroup>
          </div>
        )}
      </div>
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
