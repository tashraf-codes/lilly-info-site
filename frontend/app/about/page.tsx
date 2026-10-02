import { getCompany } from "@/lib/api";
import type { Metadata } from "next";
import Reveal from "@/components/motion/Reveal";
import StaggerGroup from "@/components/motion/StaggerGroup";
import Timeline from "@/components/Timeline";

export const metadata: Metadata = {
  title: "About & History | Lilly",
};

export default async function AboutPage() {
  const company = await getCompany();

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <Reveal>
        <h1 className="text-4xl font-bold tracking-tight">About {company.shortName}</h1>
        <p className="mt-4 text-neutral-700">{company.summary}</p>
      </Reveal>

      <StaggerGroup className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Reveal>
          <Fact label="Founded" value={String(company.founded)} />
        </Reveal>
        <Reveal delay={0.05}>
          <Fact label="Founder" value={company.founder} />
        </Reveal>
        <Reveal delay={0.1}>
          <Fact label="Headquarters" value={company.headquarters} />
        </Reveal>
        <Reveal delay={0.15}>
          <Fact label="Industry" value={company.industry} />
        </Reveal>
        <Reveal delay={0.2}>
          <Fact label="Stock Ticker" value={company.stockTicker} />
        </Reveal>
        <Reveal delay={0.25}>
          <Fact label="Therapeutic Areas" value={company.therapeuticAreas.join(", ")} />
        </Reveal>
      </StaggerGroup>

      <Reveal className="mt-16">
        <h2 className="text-2xl font-bold">History Timeline</h2>
      </Reveal>
      <div className="mt-8">
        <Timeline history={company.history} />
      </div>
    </div>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 transition-colors hover:border-brand/40">
      <dt className="text-xs font-semibold uppercase tracking-wide text-neutral-500">{label}</dt>
      <dd className="mt-1 font-medium text-neutral-900">{value}</dd>
    </div>
  );
}
