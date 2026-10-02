import { getCompany } from "@/lib/api";
import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import StaggerGroup from "@/components/motion/StaggerGroup";
import Timeline from "@/components/Timeline";
import FaqAccordion from "@/components/FaqAccordion";

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
        <h2 className="text-2xl font-bold">By the Numbers</h2>
        <p className="mt-2 text-neutral-600">Illustrative figures describing Lilly&apos;s global scale.</p>
      </Reveal>
      <StaggerGroup className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {company.byTheNumbers.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.05}>
            <div className="rounded-lg border border-border bg-white p-5">
              <p className="text-2xl font-bold text-brand">{stat.value}</p>
              <p className="mt-1 text-sm font-semibold text-neutral-800">{stat.label}</p>
              <p className="mt-1 text-sm text-neutral-500">{stat.note}</p>
            </div>
          </Reveal>
        ))}
      </StaggerGroup>

      <Reveal className="mt-16">
        <h2 className="text-2xl font-bold">Global Locations</h2>
        <p className="mt-2 text-neutral-600">A sample of sites across Lilly&apos;s global footprint.</p>
      </Reveal>
      <StaggerGroup className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {company.locations.map((loc, i) => (
          <Reveal key={loc.city} delay={i * 0.04}>
            <div className="flex items-start gap-3 rounded-lg border border-border bg-white p-4">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" strokeWidth={1.75} />
              <div>
                <p className="text-sm font-semibold text-neutral-900">{loc.city}</p>
                <p className="text-sm text-neutral-500">{loc.type}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </StaggerGroup>

      <Reveal className="mt-16">
        <h2 className="text-2xl font-bold">History Timeline</h2>
      </Reveal>
      <div className="mt-8">
        <Timeline history={company.history} />
      </div>

      <Reveal className="mt-16">
        <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
      </Reveal>
      <div className="mt-6">
        <FaqAccordion faqs={company.faqs} />
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
