import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";

import { asset } from "@/lib/base-path";
import { Container } from "@/components/ui/container";
import type { ContactsMap as ContactsMapData } from "@/lib/types";

export function ContactsMap({ data }: { data: ContactsMapData }) {
  return (
    <section className="bg-surface-dark py-24">
      <Container>
        <p className="text-xs uppercase tracking-[0.22em] text-brand-700">
          {data.eyebrow}
        </p>
        <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-white lg:text-[38px]">
          {data.title}
        </h2>

        <div className="relative mt-12 overflow-hidden rounded-2xl border border-brand-700/28">
          {/* На узких экранах держим высоту, а не пропорцию: иначе карта
              вылезала бы за контейнер и метка уезжала из кадра. */}
          <div className="relative h-[320px] lg:h-auto lg:aspect-[1291/478]">
            <Image
              src={asset(data.image)}
              alt=""
              aria-hidden
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>

          {/* Кнопки масштаба — декоративные, как в макете */}
          <div aria-hidden className="absolute right-5 top-5 flex flex-col gap-2">
            {["+", "−"].map((sign) => (
              <span
                key={sign}
                className="flex size-9 items-center justify-center rounded-[10px] border border-brand-700/28 bg-ink-card text-base font-bold text-muted-400"
              >
                {sign}
              </span>
            ))}
          </div>

          <div className="absolute bottom-6 left-6 flex w-[260px] max-w-[calc(100%-3rem)] flex-col gap-3 rounded-[14px] border border-brand-700/30 bg-ink/92 p-5">
            <div className="flex items-center gap-3">
              <span className="brand-gradient flex size-8 items-center justify-center rounded-[10px]">
                <MapPin className="size-3.5 text-white" />
              </span>
              <span>
                <span className="block font-display text-sm font-bold text-white">
                  {data.card.name}
                </span>
                <span className="block text-xs text-muted-400">
                  {data.card.kind}
                </span>
              </span>
            </div>

            <span aria-hidden className="h-px bg-white/5" />

            <p className="text-sm text-muted-300">{data.card.address}</p>
            <p className="text-xs text-brand-700">{data.card.note}</p>

            <Link
              href={data.card.link.href}
              className="mt-1 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-900 transition-colors hover:text-brand-400"
            >
              {data.card.link.label}
              <ArrowUpRight className="size-3" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
