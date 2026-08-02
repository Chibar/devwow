import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { accentDot } from "@/lib/accents";
import { cn } from "@/lib/cn";
import type { ServicesHero as ServicesHeroData } from "@/lib/types";

export function ServicesHero({ data }: { data: ServicesHeroData }) {
  return (
    <section className="relative overflow-hidden bg-surface-light py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 75% 50%, rgba(0, 224, 199, 0.08) 0%, rgba(0, 0, 0, 0) 70%)",
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

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
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

            <p className="mt-7 text-lg font-semibold leading-relaxed text-surface-dark lg:text-xl">
              {data.lead}
            </p>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-500">
              {data.description}
            </p>
          </div>

          <ul className="flex flex-col gap-4">
            {data.teasers.map((teaser) => (
              <li key={teaser.id}>
                <Link
                  href="#offers"
                  className="flex items-center gap-5 rounded-[14px] border border-brand-700/18 bg-white px-7 py-5 shadow-[0_2px_12px_0_rgba(0,98,112,0.05)] transition-colors hover:border-brand-700/45"
                >
                  <span
                    className={cn(
                      "size-2.5 shrink-0 rounded-full",
                      accentDot[teaser.accent],
                    )}
                  />
                  <span className="flex-1">
                    <span className="block font-display text-base font-bold text-surface-dark">
                      {teaser.title}
                    </span>
                    <span className="mt-0.5 block text-xs text-muted-200">
                      {teaser.subtitle}
                    </span>
                  </span>
                  <ArrowRight className="size-4 shrink-0 text-brand-700" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
