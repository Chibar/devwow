import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { asset } from "@/lib/base-path";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { accentGradient, accentWash } from "@/lib/accents";
import { cn } from "@/lib/cn";
import type { NavLink, ServiceCase } from "@/lib/types";

export function ServiceCases({
  eyebrow,
  title,
  cases,
  link,
}: {
  eyebrow: string;
  title: string;
  cases: ServiceCase[];
  link: NavLink;
}) {
  return (
    <section className="bg-surface-dark py-28">
      <Container>
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-brand-700">
            {eyebrow}
          </p>
          <h2 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-white lg:text-[52px]">
            {title}
          </h2>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {cases.map((item) => (
            <article
              key={item.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-brand-700/22 bg-ink"
            >
              {/* Превью: градиентная подложка + декоративный паттерн */}
              <div
                className={cn(
                  "relative flex h-48 items-center justify-center border-b border-brand-700/12",
                  accentWash[item.accent],
                )}
              >
                <Image
                  src={asset(item.pattern)}
                  alt=""
                  aria-hidden
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover opacity-20"
                />

                <span className="relative flex flex-col items-center gap-2">
                  <span
                    className={cn(
                      "flex size-12 items-center justify-center rounded-[14px] font-display text-lg font-extrabold text-white",
                      accentGradient[item.accent],
                    )}
                  >
                    {item.name.charAt(0)}
                  </span>
                  <span className="font-display text-lg font-bold text-white">
                    {item.name}
                  </span>
                </span>

                <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-brand-400 px-3 py-1 text-xs font-semibold text-ink">
                  <span aria-hidden className="size-1.5 rounded-full bg-black/30" />
                  {item.status}
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-4 p-7">
                <div>
                  <p className="text-xs text-muted-500">{item.category}</p>
                  <h3 className="mt-2 font-display text-xl font-bold text-white">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-300">
                    {item.description}
                  </p>
                </div>

                <ul className="flex flex-wrap gap-3">
                  {item.metrics.map((metric) => (
                    <li key={metric} className="text-xs font-semibold text-brand-400">
                      {metric}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto border-t border-white/5 pt-4">
                  <Button href={item.href} size="sm">
                    Смотреть кейс
                    <ArrowRight className="size-3.5" />
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href={link.href}
            className="inline-flex items-center gap-2.5 text-base font-semibold text-brand-900 transition-colors hover:text-brand-400"
          >
            {link.label}
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
