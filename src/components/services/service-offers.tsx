import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { asset } from "@/lib/base-path";
import { Container } from "@/components/ui/container";
import type { ServiceOffer } from "@/lib/types";

export function ServiceOffers({
  eyebrow,
  title,
  description,
  offers,
}: {
  eyebrow: string;
  title: string;
  description: string;
  offers: ServiceOffer[];
}) {
  return (
    <section id="offers" className="bg-surface-dark py-28">
      <Container>
        <div className="grid items-end gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-brand-700">
              {eyebrow}
            </p>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.25] tracking-tight text-white lg:text-[52px]">
              {title}
            </h2>
          </div>
          <p className="text-base leading-relaxed text-muted-300">{description}</p>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-2">
          {offers.map((offer) => (
            <article
              key={offer.id}
              className="relative flex flex-col gap-7 overflow-hidden rounded-2xl border border-brand-700/22 bg-ink p-10"
            >
              <span
                aria-hidden
                className="absolute right-10 top-6 font-display text-[96px] font-extrabold leading-none tracking-tighter text-brand-700/6"
              >
                {offer.index}
              </span>

              <span className="brand-gradient flex size-16 items-center justify-center rounded-2xl">
                <Image
                  src={asset(offer.icon)}
                  alt=""
                  aria-hidden
                  width={40}
                  height={40}
                  className="size-10"
                />
              </span>

              <div className="flex flex-col gap-3">
                <h3 className="font-display text-2xl font-bold text-white">
                  {offer.title}
                </h3>
                <p className="max-w-2xl text-sm leading-relaxed text-muted-300">
                  {offer.description}
                </p>
              </div>

              <ul className="flex flex-wrap gap-2">
                {offer.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-lg border border-brand-700/18 bg-brand-700/10 px-3 py-1.5 text-xs text-brand-700"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="mt-auto border-t border-white/5 pt-4">
                <Link
                  href={offer.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-900 transition-colors hover:text-brand-400"
                >
                  Подробнее
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
