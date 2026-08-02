import { Container } from "@/components/ui/container";
import type { AboutStat } from "@/lib/types";

export function AboutStats({ stats }: { stats: AboutStat[] }) {
  return (
    <section className="bg-surface-dark">
      <Container>
        <dl className="grid grid-cols-1 border-y border-white/5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col justify-center border-b border-white/5 px-6 py-14 last:border-b-0 sm:border-r sm:[&:nth-child(2n)]:border-r-0 lg:border-b-0 lg:border-r lg:[&:nth-child(2n)]:border-r lg:last:border-r-0"
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-display text-5xl font-extrabold tracking-tighter text-brand-400 lg:text-6xl">
                {stat.value}
              </dd>
              <p className="mt-3 max-w-[271px] text-sm leading-snug text-white/55">
                {stat.label}
              </p>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
