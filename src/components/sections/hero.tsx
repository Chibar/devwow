import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { asset } from "@/lib/base-path";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { DashboardMockup } from "@/components/sections/dashboard-mockup";
import { getHero } from "@/lib/api/home";

export async function Hero() {
  const hero = await getHero();

  return (
    <section className="relative overflow-hidden bg-surface-light">
      {/* Фоновая графика из макета + бирюзовое свечение поверх неё */}
      <Image
        src={asset("/hero/hero-canvas.png")}
        alt=""
        aria-hidden
        fill
        priority
        sizes="100vw"
        className="pointer-events-none object-contain object-center opacity-70"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 65% 40%, rgba(0, 224, 199, 0.1) 0%, rgba(0, 0, 0, 0) 70%)",
        }}
      />

      <Container className="relative">
        <div className="grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-20">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-700 bg-[rgba(0,227,151,0.04)] px-3.5 py-1.5">
              <span className="size-1.5 rounded-full bg-brand-400" />
              <span className="text-xs font-semibold uppercase tracking-wide text-brand-900">
                {hero.badge}
              </span>
            </span>

            <h1 className="mt-7 font-display text-4xl font-extrabold leading-[1.07] tracking-tight text-surface-dark sm:text-5xl lg:text-[64px]">
              {hero.titleLead}
              <span className="text-brand-400">{hero.titleAccent}</span>
            </h1>

            <p className="mt-7 max-w-md text-lg leading-relaxed text-muted-500">
              {hero.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href={hero.primaryCta.href} size="lg">
                {hero.primaryCta.label}
                <ArrowRight className="size-4" />
              </Button>
              <Button href={hero.secondaryCta.href} variant="outline" size="lg">
                {hero.secondaryCta.label}
              </Button>
            </div>

            <dl className="mt-14 flex flex-wrap gap-10">
              {hero.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-3xl font-extrabold text-brand-900">
                    {stat.value}
                  </dd>
                  <p className="mt-1 text-sm text-muted-500">{stat.label}</p>
                </div>
              ))}
            </dl>
          </div>

          <div className="flex justify-center lg:justify-end">
            <DashboardMockup data={hero.dashboard} />
          </div>
        </div>
      </Container>
    </section>
  );
}
