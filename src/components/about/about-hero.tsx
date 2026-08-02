import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import type { AboutHero as AboutHeroData } from "@/lib/types";

export function AboutHero({ data }: { data: AboutHeroData }) {
  return (
    <section className="relative overflow-hidden bg-surface-light py-24">
      {/* Бирюзовое свечение справа сверху */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 size-[700px] max-w-full"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 20%, rgba(0, 224, 199, 0.09) 0%, rgba(0, 0, 0, 0) 70%)",
        }}
      />

      <Container className="relative">
        {/* Вертикальная линия у левого края контента */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-4 hidden w-px sm:left-6 lg:left-10 lg:block"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,147,148,0.25) 30%, rgba(0,147,148,0.25) 70%, rgba(0,0,0,0) 100%)",
          }}
        />

        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:gap-20">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-brand-400" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-700">
                {data.eyebrow}
              </span>
            </div>

            <h1 className="mt-10 max-w-4xl font-display text-4xl font-extrabold leading-[1.06] tracking-tight text-surface-dark sm:text-5xl lg:text-[68px]">
              {data.titleLead}
              <span className="text-brand-400">{data.titleAccent}</span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg font-semibold leading-relaxed text-surface-dark lg:text-xl">
              {data.lead}
            </p>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-500">
              {data.description}
            </p>

            <Button href={data.cta.href} size="lg" className="mt-12">
              {data.cta.label}
              <ArrowRight className="size-4" />
            </Button>
          </div>

          <AboutCard card={data.card} />
        </div>
      </Container>
    </section>
  );
}

function AboutCard({ card }: { card: AboutHeroData["card"] }) {
  return (
    <div className="flex flex-col gap-6 rounded-2xl border border-brand-700/30 bg-ink p-8">
      <div className="flex items-center gap-3 pb-2">
        <span className="brand-gradient flex size-10 shrink-0 items-center justify-center rounded-[14px] font-display text-lg font-extrabold text-white">
          {card.monogram}
        </span>
        <span>
          <span className="block font-display text-sm font-bold text-white">
            {card.name}
          </span>
          <span className="block text-xs text-muted-500">{card.tagline}</span>
        </span>
      </div>

      <dl className="flex flex-col">
        {card.rows.map((row) => (
          <div
            key={row.label}
            className="flex items-center justify-between gap-4 border-b border-white/5 pb-4 [&:not(:first-child)]:pt-6"
          >
            <dt className="text-xs text-muted-500">{row.label}</dt>
            <dd className="text-right font-display text-sm font-semibold text-white">
              {row.value}
            </dd>
          </div>
        ))}
      </dl>

      <p className="flex items-center gap-3 rounded-[14px] border border-brand-400/15 bg-brand-400/7 px-4 py-3">
        <span className="size-2 shrink-0 rounded-full bg-brand-400/70" />
        <span className="text-xs text-brand-400">{card.status}</span>
      </p>
    </div>
  );
}
