import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { asset } from "@/lib/base-path";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import type { AboutTechCta, Technology } from "@/lib/types";

export function AboutTech({
  eyebrow,
  title,
  note,
  technologies,
  cta,
}: {
  eyebrow: string;
  title: string;
  note: string;
  technologies: Technology[];
  cta: AboutTechCta;
}) {
  return (
    <section className="bg-surface-light py-28">
      <Container>
        <div className="grid items-end gap-6 lg:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-brand-700">
              {eyebrow}
            </p>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.25] tracking-tight text-surface-dark lg:text-[54px]">
              {title}
            </h2>
          </div>
          <p className="max-w-xs justify-self-start text-sm text-muted-200 lg:justify-self-end lg:text-right">
            {note}
          </p>
        </div>

        <ul className="mt-14 grid grid-cols-2 overflow-hidden rounded-2xl border border-brand-700/18 sm:grid-cols-4 lg:grid-cols-8">
          {technologies.map((tech) => (
            <li
              key={tech.id}
              className="flex flex-col items-center justify-center gap-4 border-b border-r border-brand-700/12 bg-white px-4 py-10 last:border-r-0"
            >
              <Image
                src={asset(tech.icon)}
                alt=""
                aria-hidden
                width={28}
                height={28}
                className="size-7"
              />
              <span className="text-center text-xs leading-tight text-muted-100">
                {tech.name}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col items-start justify-between gap-6 rounded-2xl border border-brand-700/20 bg-[linear-gradient(135deg,rgba(0,98,112,0.07)_0%,rgba(0,224,199,0.05)_100%)] px-10 py-7 sm:flex-row sm:items-center">
          <div>
            <p className="font-display text-lg font-bold text-surface-dark">
              {cta.title}
            </p>
            <p className="mt-1 text-sm text-muted-500">{cta.description}</p>
          </div>
          <Button href={cta.cta.href} className="shrink-0">
            {cta.cta.label}
            <ArrowRight className="size-3.5" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
