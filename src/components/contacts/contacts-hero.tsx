import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { ContactIcon } from "@/components/contacts/contact-icon";
import type { ContactsHero as ContactsHeroData } from "@/lib/types";

export function ContactsHero({ data }: { data: ContactsHeroData }) {
  return (
    <section className="relative overflow-hidden bg-surface-light py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 50%, rgba(0, 224, 199, 0.07) 0%, rgba(0, 0, 0, 0) 70%)",
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

            <h1 className="mt-10 font-display text-4xl font-extrabold leading-[1.06] tracking-tight text-surface-dark sm:text-5xl lg:text-[62px]">
              {data.titleLead}
              <span className="text-brand-400">{data.titleAccent}</span>
            </h1>

            <p className="mt-7 text-lg font-semibold leading-snug text-surface-dark lg:text-xl">
              {data.lead}
            </p>

            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-500">
              {data.description}
            </p>
          </div>

          <ul className="flex flex-col gap-4">
            {data.highlights.map((channel) => (
              <li key={channel.id}>
                <Link
                  href={channel.href ?? "#"}
                  className="flex items-center gap-5 rounded-[14px] border border-brand-700/18 bg-white px-7 py-5 shadow-[0_2px_12px_0_rgba(0,98,112,0.05)] transition-colors hover:border-brand-700/45"
                >
                  <ContactIcon name={channel.icon} />
                  <span className="flex-1">
                    <span className="block text-xs uppercase tracking-wide text-brand-700">
                      {channel.label}
                    </span>
                    <span className="mt-0.5 block font-display text-base font-bold text-surface-dark">
                      {channel.value}
                    </span>
                    <span className="block text-xs text-muted-200">
                      {channel.note}
                    </span>
                  </span>
                  <ChevronRight className="size-4 shrink-0 text-muted-200" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
