import Counter from "@/components/motion/Counter";
import Reveal from "@/components/motion/Reveal";

interface Stat {
  value: number;
  suffix?: string;
  label: string;
}

export default function StatsBand({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
      {stats.map((stat, i) => (
        <Reveal key={stat.label} delay={i * 0.08}>
          <div className="text-center sm:text-left">
            <Counter
              value={stat.value}
              suffix={stat.suffix}
              className="text-3xl font-bold tracking-tight text-brand sm:text-4xl"
            />
            <p className="mt-1 text-sm text-neutral-600">{stat.label}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
