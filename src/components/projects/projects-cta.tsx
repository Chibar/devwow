import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import type { ProjectsCta as ProjectsCtaData } from "@/lib/types";

export function ProjectsCta({ data }: { data: ProjectsCtaData }) {
  return (
    <section className="bg-surface-dark py-28">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-brand-700/28 bg-ink px-6 py-20 sm:px-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, rgba(0, 98, 112, 0.12) 0%, rgba(0, 0, 0, 0) 65%), radial-gradient(circle at 80% 50%, rgba(0, 224, 199, 0.06) 0%, rgba(0, 0, 0, 0) 65%)",
            }}
          />

          <div className="relative grid items-center gap-12 lg:grid-cols-[minmax(0,4fr)_minmax(0,1fr)]">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-brand-700">
                {data.eyebrow}
              </p>

              <h2 className="mt-5 font-display text-3xl font-extrabold leading-[1.25] tracking-tight text-white sm:text-4xl lg:text-[58px]">
                {data.titleLead}
                <br />
                <span className="text-brand-400">{data.titleAccent}</span>
              </h2>

              <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-300">
                {data.description}
              </p>

              <ul className="mt-8 flex flex-col gap-3">
                {data.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <span
                      aria-hidden
                      className="size-1.5 shrink-0 rounded-full bg-brand-400"
                    />
                    <span className="text-sm text-white/45">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <Button href={data.primary.href} size="lg" className="justify-center">
                {data.primary.label}
                <ArrowRight className="size-4" />
              </Button>
              <Button
                href={data.secondary.href}
                variant="outline-dark"
                className="justify-center"
              >
                {data.secondary.label}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
