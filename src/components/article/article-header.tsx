import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";

import { asset } from "@/lib/base-path";
import { Container } from "@/components/ui/container";
import type { ArticleDetail } from "@/lib/types";

export function ArticleHeader({ article }: { article: ArticleDetail }) {
  return (
    <section className="relative overflow-hidden bg-surface-light pt-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-20 h-64"
        style={{
          backgroundImage:
            "radial-gradient(circle at 60% 0%, rgba(0, 224, 199, 0.06) 0%, rgba(0, 0, 0, 0) 70%)",
        }}
      />

      <Container className="relative">
        <nav aria-label="Хлебные крошки" className="flex items-center gap-2 text-xs">
          <Link href="/blog" className="text-muted-200 transition-colors hover:text-brand-700">
            Блог
          </Link>
          <span className="text-[#CCCCCC]">/</span>
          <span className="text-muted-500">{article.breadcrumb}</span>
        </nav>

        <div className="mx-auto mt-10 max-w-[860px]">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-brand-400/30 bg-brand-400/12 px-3.5 py-1.5 text-xs font-semibold text-[#00B5A6]">
              {article.breadcrumb}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-muted-100">
              <Clock className="size-3" />
              {article.readingTime}
            </span>
          </div>

          <h1 className="mt-7 font-display text-3xl font-extrabold leading-[1.07] tracking-tight text-surface-dark sm:text-4xl lg:text-[52px]">
            {article.title}
          </h1>

          <p className="mt-7 text-lg leading-relaxed text-muted-500 lg:text-xl">
            {article.excerpt}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-b border-brand-700/16 pb-8">
            <div className="flex items-center gap-4">
              <span className="brand-gradient flex size-12 shrink-0 items-center justify-center rounded-full font-display text-base font-extrabold text-white">
                {article.author.initials}
              </span>
              <span>
                <span className="block font-display text-sm font-bold text-surface-dark">
                  {article.author.name}
                </span>
                <span className="block text-xs text-[#888888]">
                  {article.author.role}
                </span>
              </span>
            </div>

            <div className="text-right">
              <p className="text-xs text-muted-100">{article.publishedLabel}</p>
              <p className="text-sm font-semibold text-brand-400">
                {article.publishedAt}
              </p>
            </div>
          </div>
        </div>

        {article.cover ? (
          <figure className="mt-12">
            <div className="relative aspect-[1470/478] overflow-hidden rounded-2xl border border-brand-700/20">
              <Image
                src={asset(article.cover.src)}
                alt=""
                aria-hidden
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-center text-xs text-muted-100">
              {article.cover.caption}
            </figcaption>
          </figure>
        ) : null}
      </Container>
    </section>
  );
}
