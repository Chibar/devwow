import Image from "next/image";
import { ChevronRight } from "lucide-react";

import { asset } from "@/lib/base-path";
import { Container } from "@/components/ui/container";
import { withEmphasis } from "@/components/ui/emphasis";
import type { ProcessStep } from "@/lib/types";

export function Process({
  eyebrow,
  title,
  steps,
  note,
}: {
  eyebrow: string;
  title: string;
  steps: ProcessStep[];
  note: string;
}) {
  return (
    <section className="bg-surface-light py-28">
      <Container>
        <p className="text-xs uppercase tracking-[0.22em] text-brand-700">
          {eyebrow}
        </p>
        <h2 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-surface-dark lg:text-[52px]">
          {title}
        </h2>

        <ol className="mt-16 grid overflow-hidden rounded-2xl border border-brand-700/18 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => (
            <li
              key={step.id}
              className="relative flex flex-col justify-center gap-6 border-b border-r border-brand-700/12 bg-white p-8 last:border-r-0"
            >
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-brand-400">
                  {step.index}
                </span>
                <span aria-hidden className="h-px flex-1 bg-brand-700/15" />
              </div>

              <span className="brand-gradient flex size-11 items-center justify-center rounded-[14px]">
                <Image
                  src={asset(step.icon)}
                  alt=""
                  aria-hidden
                  width={22}
                  height={22}
                  className="size-[22px]"
                />
              </span>

              <div>
                <h3 className="font-display text-base font-bold text-surface-dark">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#777777]">
                  {step.description}
                </p>
              </div>

              {/* Стрелка-связка между шагами, как в макете */}
              {index < steps.length - 1 ? (
                <span
                  aria-hidden
                  className="absolute right-0 top-1/2 hidden size-5 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border border-brand-700/25 bg-surface-light lg:flex"
                >
                  <ChevronRight className="size-2.5 text-brand-700" />
                </span>
              ) : null}
            </li>
          ))}
        </ol>

        <p className="mt-10 flex items-center gap-4 rounded-[14px] border border-brand-700/18 bg-brand-900/5 px-8 py-5 text-sm text-muted-500">
          <span aria-hidden className="size-1.5 shrink-0 rounded-full bg-brand-700" />
          <span>{withEmphasis(note, "text-surface-dark")}</span>
        </p>
      </Container>
    </section>
  );
}
