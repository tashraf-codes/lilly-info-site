import Link from "next/link";
import { getCompany, getMedicines } from "@/lib/api";

export default async function HomePage() {
  const [company, medicines] = await Promise.all([getCompany(), getMedicines()]);
  const featured = medicines.slice(0, 6);

  return (
    <div>
      <section className="border-b border-border bg-muted">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand">
            {company.founded} &middot; {company.headquarters}
          </p>
          <h1 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
            {company.legalName}
          </h1>
          <p className="mt-2 text-lg italic text-neutral-500">&ldquo;{company.tagline}&rdquo;</p>
          <p className="mt-6 max-w-2xl text-neutral-700">{company.summary}</p>
          <div className="mt-8 flex gap-4">
            <Link
              href="/medicines"
              className="rounded-md bg-brand px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              Browse Medicines
            </Link>
            <Link
              href="/about"
              className="rounded-md border border-border px-5 py-3 text-sm font-semibold text-neutral-800 transition-colors hover:border-brand hover:text-brand"
            >
              Company History
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-bold">Therapeutic Areas</h2>
        <p className="mt-2 max-w-2xl text-neutral-600">
          Lilly research and medicines span the following major areas.
        </p>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {company.therapeuticAreas.map((area) => (
            <div
              key={area}
              className="rounded-lg border border-border bg-white p-4 text-center text-sm font-medium text-neutral-800 shadow-sm"
            >
              {area}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-bold">Featured Medicines</h2>
          <Link href="/medicines" className="text-sm font-semibold text-brand hover:underline">
            View all &rarr;
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((medicine) => (
            <Link
              key={medicine.slug}
              href={`/medicines/${medicine.slug}`}
              className="rounded-lg border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-brand">
                {medicine.category}
              </p>
              <h3 className="mt-2 text-lg font-bold">{medicine.name}</h3>
              <p className="text-sm text-neutral-500">{medicine.genericName}</p>
              <p className="mt-3 text-sm text-neutral-600 line-clamp-3">{medicine.about}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
