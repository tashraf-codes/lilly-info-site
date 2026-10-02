import { getCompany } from "@/lib/api";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About & History | Lilly",
};

export default async function AboutPage() {
  const company = await getCompany();

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight">About {company.shortName}</h1>
      <p className="mt-4 text-neutral-700">{company.summary}</p>

      <dl className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Fact label="Founded" value={String(company.founded)} />
        <Fact label="Founder" value={company.founder} />
        <Fact label="Headquarters" value={company.headquarters} />
        <Fact label="Industry" value={company.industry} />
        <Fact label="Stock Ticker" value={company.stockTicker} />
        <Fact label="Therapeutic Areas" value={company.therapeuticAreas.join(", ")} />
      </dl>

      <h2 className="mt-16 text-2xl font-bold">History Timeline</h2>
      <ol className="mt-8 space-y-8 border-l border-border pl-6">
        {company.history.map((item) => (
          <li key={item.year} className="relative">
            <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-brand" />
            <p className="text-sm font-semibold text-brand">{item.year}</p>
            <p className="mt-1 text-neutral-700">{item.event}</p>
          </li>
        ))}
      </ol>
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
