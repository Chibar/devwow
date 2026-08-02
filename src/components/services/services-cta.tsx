import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import type { ServicesCta as ServicesCtaData } from "@/lib/types";

export function ServicesCta({ data }: { data: ServicesCtaData }) {
  return (
    <section className="bg-surface-dark py-28">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-brand-700/30 bg-ink px-6 py-20 text-center sm:px-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 50% 50%, rgba(0, 224, 199, 0.06) 0%, rgba(0, 0, 0, 0) 70%)",
            }}
          />

          {/* Декоративные скобки по углам, как в макете */}
          <span
            aria-hidden
            className="absolute left-8 top-8 text-xs text-brand-700/25"
          >
            {"{"}
          </span>
          <span
            aria-hidden
            className="absolute bottom-8 right-8 text-xs text-brand-700/25"
          >
            {"}"}
          </span>

          <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-7">
            <p className="text-xs uppercase tracking-[0.22em] text-brand-700">
              {data.eyebrow}
            </p>

            <h2 className="font-display text-3xl font-extrabold leading-[1.25] tracking-tight text-white sm:text-4xl lg:text-[56px]">
              {data.titleLead}
              <br />
              <span className="text-brand-400">{data.titleAccent}</span>
            </h2>

            <p className="text-base leading-relaxed text-muted-300">
              {data.description}
            </p>

            <div className="mt-2 flex flex-wrap justify-center gap-4">
              <Button href={data.primary.href} size="lg">
                {data.primary.label}
                <ArrowRight className="size-4" />
              </Button>
              <Button href={data.secondary.href} variant="outline-dark" size="lg">
                {data.secondary.label}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
