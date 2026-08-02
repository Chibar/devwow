"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, Clock } from "lucide-react";

import { asset } from "@/lib/base-path";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/cn";
import type { Article, ArticleCategory } from "@/lib/types";

export function BlogGrid({
  eyebrow,
  categories,
  articles,
}: {
  eyebrow: string;
  categories: ArticleCategory[];
  articles: Article[];
}) {
  const [activeId, setActiveId] = useState(categories[0]?.id ?? "all");

  const labels = useMemo(
    () => new Map(categories.map((category) => [category.id, category.label])),
    [categories],
  );

  const visible = useMemo(
    () =>
      activeId === "all"
        ? articles
        : articles.filter((article) => article.categoryIds.includes(activeId)),
    [activeId, articles],
  );

  return (
    <section className="bg-surface-light py-20">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-brand-700/14 pb-8">
          <p className="text-xs uppercase tracking-[0.22em] text-brand-700">
            {eyebrow}
          </p>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const isActive = category.id === activeId;

              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveId(category.id)}
                  aria-pressed={isActive}
                  className={cn(
                    "rounded-lg border px-5 py-2.5 text-sm font-semibold transition-colors",
                    isActive
                      ? "border-brand-900 bg-brand-900 text-white shadow-[0_4px_14px_0_rgba(0,98,112,0.22)]"
                      : "border-brand-700/32 text-muted-500 hover:border-brand-700 hover:text-brand-900",
                  )}
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((article) => (
            <article
              key={article.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-brand-700/17 bg-white shadow-[0_4px_20px_0_rgba(0,98,112,0.05)]"
            >
              <div className="relative h-[200px] shrink-0">
                <Image
                  src={asset(article.visual)}
                  alt=""
                  aria-hidden
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col gap-4 p-7">
                <div className="flex items-center justify-between gap-3">
                  <span className="flex flex-wrap gap-2">
                    {article.categoryIds.map((id) => (
                      <span
                        key={id}
                        className="rounded-full border border-brand-900/14 bg-brand-900/6 px-2.5 py-1 text-xs text-brand-900"
                      >
                        {labels.get(id) ?? id}
                      </span>
                    ))}
                  </span>
                  <span className="flex shrink-0 items-center gap-1 text-xs text-[#BBBBBB]">
                    <Clock className="size-3" />
                    {article.readingTime}
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold leading-snug text-surface-dark">
                  {article.title}
                </h3>

                <p className="text-sm leading-relaxed text-muted-500">
                  {article.excerpt}
                </p>

                <div className="mt-auto flex items-center justify-between border-t border-brand-700/10 pt-4">
                  <span className="text-xs text-[#BBBBBB]">{article.date}</span>
                  <Link
                    href={article.href}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-900 transition-colors hover:text-brand-700"
                  >
                    Читать
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {visible.length === 0 ? (
          <p className="mt-12 text-center text-sm text-muted-500">
            В этой рубрике пока нет статей.
          </p>
        ) : null}
      </Container>
    </section>
  );
}
