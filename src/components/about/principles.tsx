import Image from "next/image";

import { asset } from "@/lib/base-path";
import { Container } from "@/components/ui/container";
import type { Principle } from "@/lib/types";

export function Principles({
  eyebrow,
  title,
  description,
  items,
}: {
  eyebrow: string;
  title: string;
  description: string;
  items: Principle[];
}) {
  return (
    <section className="bg-surface-light py-28">
      <Container>
        <div className="grid items-end gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-brand-700">
              {eyebrow}
            </p>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.25] tracking-tight text-surface-dark lg:text-[54px]">
              {title}
            </h2>
          </div>
          <p className="text-base leading-relaxed text-muted-500">{description}</p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.id}
              className="relative flex flex-col gap-6 overflow-hidden rounded-2xl border border-brand-700/22 bg-white p-10 shadow-[0_4px_24px_0_rgba(0,98,112,0.06)]"
            >
              <span
                aria-hidden
                className="absolute right-8 top-8 text-[72px] font-bold leading-none text-brand-700/7"
              >
                {item.index}
              </span>

              <span className="brand-gradient flex size-14 items-center justify-center rounded-[14px]">
                <Image
                  src={asset(item.icon)}
                  alt=""
                  aria-hidden
                  width={28}
                  height={28}
                  className="size-7"
                />
              </span>

              <div className="flex flex-col gap-3">
                <h3 className="font-display text-xl font-bold text-surface-dark">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-500">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
