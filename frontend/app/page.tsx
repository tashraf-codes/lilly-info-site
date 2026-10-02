import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getCompany, getMedicines } from "@/lib/api";
import { getTherapeuticAreaIcon } from "@/lib/icons";
import HeroContent from "@/components/HeroContent";
import HeroScene from "@/components/HeroScene";
import StatsBand from "@/components/StatsBand";
import MilestoneSlider from "@/components/MilestoneSlider";
import MedicineCard from "@/components/MedicineCard";
import Reveal from "@/components/motion/Reveal";
import StaggerGroup from "@/components/motion/StaggerGroup";
import TiltCard from "@/components/motion/TiltCard";

export default async function HomePage() {
  const [company, medicines] = await Promise.all([getCompany(), getMedicines()]);
  const featured = medicines.slice(0, 6);
  const yearsActive = new Date().getFullYear() - company.founded;

  return (
    <div>
      <section className="relative overflow-hidden border-b border-border bg-muted">
        <div className="hero-mesh" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-20">
          <HeroContent company={company} />
          <HeroScene />
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <StatsBand
            stats={[
              { value: yearsActive, suffix: "+", label: "Years of continuous operation" },
              { value: medicines.length, label: "Medicines featured on this site" },
              { value: company.therapeuticAreas.length, label: "Therapeutic areas covered" },
              { value: 1923, label: "First mass-produced insulin" },
            ]}
          />
        </div>
      </section>

      <section className="border-b border-border bg-muted">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <Reveal>
            <div className="flex items-end justify-between">
              <div>
                <h2 className="text-2xl font-bold">Milestones</h2>
                <p className="mt-2 max-w-2xl text-neutral-600">
                  A century and a half of firsts &mdash; drag or tap through a few defining moments.
                </p>
              </div>
              <Link
                href="/about"
                className="group hidden shrink-0 items-center gap-1 text-sm font-semibold text-brand hover:underline sm:flex"
              >
                Full history
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="mt-8">
            <MilestoneSlider milestones={company.history} />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <Reveal>
          <h2 className="text-2xl font-bold">Therapeutic Areas</h2>
          <p className="mt-2 max-w-2xl text-neutral-600">
            Lilly research and medicines span the following major areas.
          </p>
        </Reveal>
        <StaggerGroup className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {company.therapeuticAreas.map((area) => {
            const Icon = getTherapeuticAreaIcon(area);
            return (
              <Reveal key={area} as="div">
                <TiltCard className="h-full rounded-lg border border-border bg-white p-4 text-center shadow-sm transition-shadow hover:shadow-md hover:border-brand/40">
                  <Icon className="mx-auto h-6 w-6 text-brand" strokeWidth={1.75} />
                  <p className="mt-3 text-sm font-medium text-neutral-800">{area}</p>
                </TiltCard>
              </Reveal>
            );
          })}
        </StaggerGroup>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <Reveal>
          <div className="flex items-end justify-between">
            <h2 className="text-2xl font-bold">Featured Medicines</h2>
            <Link
              href="/medicines"
              className="group flex items-center gap-1 text-sm font-semibold text-brand hover:underline"
            >
              View all
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>
        <StaggerGroup className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((medicine) => (
            <Reveal key={medicine.slug}>
              <MedicineCard medicine={medicine} />
            </Reveal>
          ))}
        </StaggerGroup>
      </section>
    </div>
  );
}
