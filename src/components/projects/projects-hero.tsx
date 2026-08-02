import { Container } from "@/components/ui/container";
import type { ProjectsHero as ProjectsHeroData } from "@/lib/types";

export function ProjectsHero({ data }: { data: ProjectsHeroData }) {
  return (
    <section className="relative overflow-hidden bg-surface-light pb-14 pt-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 50%, rgba(0, 224, 199, 0.07) 0%, rgba(0, 0, 0, 0) 70%)",
        }}
      />

      <Container className="relative">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-4 hidden w-px sm:left-6 lg:left-10 lg:block"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,147,148,0.22) 30%, rgba(0,147,148,0.22) 70%, rgba(0,0,0,0) 100%)",
          }}
        />

        <div className="grid items-end gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-brand-400" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-700">
                {data.eyebrow}
              </span>
            </div>

            <h1 className="mt-10 font-display text-4xl font-extrabold leading-[1.06] tracking-tight text-surface-dark sm:text-5xl lg:text-[68px]">
              {data.titleLead}
              <span className="text-brand-400">{data.titleAccent}</span>
            </h1>

            <p className="mt-6 text-lg font-semibold leading-snug text-surface-dark lg:text-xl">
              {data.lead}
            </p>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-500">
              {data.description}
            </p>
          </div>

          <dl className="grid gap-5 sm:grid-cols-3">
            {data.stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col gap-2 rounded-[14px] border border-brand-700/20 bg-white p-6"
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-4xl font-extrabold tracking-tighter text-brand-900">
                  {stat.value}
                </dd>
                <p className="text-xs leading-snug text-[#777777]">{stat.label}</p>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
