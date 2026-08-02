import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

import { asset } from "@/lib/base-path";
import { Container } from "@/components/ui/container";
import type { ArticleCategory, BlogHero as BlogHeroData, FeaturedArticle } from "@/lib/types";

export function BlogHero({
  data,
  featured,
  categories,
}: {
  data: BlogHeroData;
  featured: FeaturedArticle;
  categories: ArticleCategory[];
}) {
  const labels = new Map(categories.map((c) => [c.id, c.label]));

  return (
    <section className="relative overflow-hidden bg-surface-light pt-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 85% 40%, rgba(0, 224, 199, 0.07) 0%, rgba(0, 0, 0, 0) 70%)",
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

        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-brand-400" />
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-700">
            {data.eyebrow}
          </span>
        </div>

        <div className="mt-8 grid items-end gap-8 lg:grid-cols-2 lg:gap-16">
          <h1 className="font-display text-5xl font-extrabold leading-none tracking-tight text-surface-dark lg:text-[76px]">
            {data.titleLead}
            <span className="text-brand-400">{data.titleAccent}</span>
          </h1>

          <div>
            <p className="text-lg font-semibold leading-snug text-surface-dark lg:text-xl">
              {data.lead}
            </p>
            <p className="mt-3 text-base leading-relaxed text-muted-500">
              {data.description}
            </p>
          </div>
        </div>

        {/* Главная статья: визуал слева, содержание справа */}
        <article className="mt-14 grid overflow-hidden rounded-2xl border border-brand-700/20 bg-white shadow-[0_6px_32px_0_rgba(0,98,112,0.07)] lg:grid-cols-[minmax(0,5fr)_minmax(0,2fr)]">
          <div className="relative min-h-[240px] lg:min-h-[595px]">
            <Image
              src={asset(featured.visual)}
              alt=""
              aria-hidden
              fill
              sizes="(max-width: 1024px) 100vw, 70vw"
              className="object-cover"
            />
            <span className="absolute left-5 top-5 rounded-full bg-brand-400 px-3 py-1.5 text-xs font-semibold text-ink">
              {featured.badge}
            </span>
          </div>

          <div className="flex flex-col justify-between gap-8 border-brand-700/14 p-10 lg:border-l">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                {featured.categoryIds.map((id) => (
                  <span
                    key={id}
                    className="rounded-full border border-brand-900/15 bg-brand-900/7 px-3 py-1 text-xs text-brand-900"
                  >
                    {labels.get(id) ?? id}
                  </span>
                ))}
                <span className="flex items-center gap-1.5 text-xs text-muted-200">
                  <Clock className="size-3" />
                  {featured.readingTime}
                </span>
              </div>

              <h2 className="font-display text-3xl font-extrabold leading-tight text-surface-dark">
                {featured.title}
              </h2>

              <p className="text-base leading-relaxed text-muted-500">
                {featured.excerpt}
              </p>
            </div>

            <div className="flex items-center justify-between border-t border-brand-700/12 pt-8">
              <span className="text-sm text-muted-100">{featured.date}</span>
              <Link
                href={featured.href}
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-900 transition-colors hover:text-brand-700"
              >
                Читать
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </article>
      </Container>
    </section>
  );
}
