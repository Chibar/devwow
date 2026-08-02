import Link from "next/link";
import { Download } from "lucide-react";

import { Container } from "@/components/ui/container";
import type { ContactsRequisites as ContactsRequisitesData } from "@/lib/types";

export function ContactsRequisites({
  data,
}: {
  data: ContactsRequisitesData;
}) {
  return (
    <section className="bg-surface-light py-24">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-brand-700">
              {data.eyebrow}
            </p>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-tight text-surface-dark lg:text-[34px]">
              {data.title}
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-500">
              {data.description}
            </p>

            <Link
              href={data.download.href}
              className="mt-8 inline-flex items-center gap-2 rounded-[10px] border border-brand-700/30 px-5 py-3 text-sm font-semibold text-muted-500 transition-colors hover:border-brand-700 hover:text-brand-900"
            >
              {data.download.label}
              <Download className="size-3.5" />
            </Link>
          </div>

          <dl className="overflow-hidden rounded-2xl border border-brand-700/18 bg-white">
            {data.rows.map((row, index) => (
              <div
                key={row.label}
                className={
                  index < data.rows.length - 1
                    ? "grid gap-6 border-b border-brand-700/9 px-8 py-4 sm:grid-cols-[200px_1fr]"
                    : "grid gap-6 px-8 py-4 sm:grid-cols-[200px_1fr]"
                }
              >
                <dt className="self-center text-xs font-semibold uppercase tracking-wide text-brand-700">
                  {row.label}
                </dt>
                <dd className="self-center text-sm leading-relaxed text-[#333333]">
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
