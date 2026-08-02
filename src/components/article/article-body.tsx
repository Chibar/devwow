import Image from "next/image";
import Link from "next/link";
import { Share2 } from "lucide-react";

import { asset } from "@/lib/base-path";
import { Container } from "@/components/ui/container";
import { richText } from "@/components/ui/rich-text";
import type { ArticleBlock, ArticleDetail } from "@/lib/types";

export function ArticleBody({ article }: { article: ArticleDetail }) {
  return (
    <section className="bg-surface-light pb-16 pt-20">
      <Container>
        <div className="mx-auto max-w-[860px]">
          {article.body.map((block, index) => (
            <Block key={index} block={block} />
          ))}

          {article.tags.length > 0 ? (
            <div className="mt-10 flex flex-wrap items-center gap-2 border-t border-brand-700/14 pt-10">
              <span className="mr-2 text-sm text-muted-100">Теги:</span>
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg border border-brand-700/25 px-3 py-1 text-xs text-muted-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}

          <div className="mt-8 flex flex-wrap items-center gap-5 border-t border-brand-700/14 pt-8">
            <span className="flex items-center gap-2 text-sm text-muted-400">
              <Share2 className="size-4" />
              {article.shareLabel}
            </span>
            <div className="flex items-center gap-3">
              {article.shareTargets.map((target) => (
                <Link
                  key={target}
                  href="#"
                  className="flex size-10 items-center justify-center rounded-full border border-brand-700/35 text-xs font-semibold text-muted-400 transition-colors hover:border-brand-700 hover:text-brand-900"
                >
                  {target}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Block({ block }: { block: ArticleBlock }) {
  switch (block.type) {
    case "lead":
      return (
        <p className="border-l-2 border-brand-400 pl-6 text-lg font-semibold leading-[1.85] text-surface-dark">
          {block.text}
        </p>
      );

    case "paragraph":
      return (
        <p className="mt-8 text-base leading-[1.9] text-[#333333]">
          {richText(block.text)}
        </p>
      );

    case "heading2":
      return (
        <h2 className="mt-14 font-display text-2xl font-extrabold text-surface-dark lg:text-[30px]">
          {block.text}
        </h2>
      );

    case "heading3":
      return (
        <h3 className="mt-10 font-display text-xl font-bold text-surface-dark lg:text-[22px]">
          {block.text}
        </h3>
      );

    case "list":
      return (
        <ul className="mt-6 flex flex-col gap-3">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3">
              <span
                aria-hidden
                className="mt-[11px] size-1.5 shrink-0 rounded-full bg-brand-900"
              />
              <span className="text-base leading-7 text-[#333333]">{item}</span>
            </li>
          ))}
        </ul>
      );

    case "steps":
      return (
        <ol className="mt-6 flex flex-col gap-4">
          {block.items.map((item, index) => (
            <li key={item.title} className="flex gap-4">
              <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-[10px] bg-brand-900 font-display text-xs font-extrabold text-white">
                {index + 1}
              </span>
              <span className="text-base leading-6 text-surface-dark">
                <span className="font-semibold">{item.title}</span>
                <span className="font-normal text-muted-500"> — {item.text}</span>
              </span>
            </li>
          ))}
        </ol>
      );

    case "quote":
      return (
        <figure className="mt-12 rounded-[14px] border-l-[3px] border-brand-900 bg-[#EEF4F5] px-8 py-7">
          <blockquote className="font-display text-xl font-semibold leading-snug text-surface-dark">
            {block.text}
          </blockquote>
          <figcaption className="mt-4 text-sm text-muted-400">
            {block.author}
          </figcaption>
        </figure>
      );

    case "figure":
      return (
        <figure className="mt-12">
          <div className="relative aspect-[858/358] overflow-hidden rounded-[14px] border border-brand-700/20">
            <Image
              src={asset(block.src)}
              alt=""
              aria-hidden
              fill
              sizes="(max-width: 1024px) 100vw, 860px"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-3 text-center text-sm text-muted-100">
            {block.caption}
          </figcaption>
        </figure>
      );

    case "code":
      return (
        <div className="mt-10 overflow-hidden rounded-[14px] border border-brand-400/15">
          <div className="flex items-center justify-between border-b border-white/5 bg-ink-soft px-5 py-3">
            <span className="text-xs text-muted-500">{block.filename}</span>
            <span className="flex gap-1.5">
              <span className="size-2.5 rounded-full bg-[#FF5F57]" />
              <span className="size-2.5 rounded-full bg-[#FEBC2E]" />
              <span className="size-2.5 rounded-full bg-[#28C840]" />
            </span>
          </div>
          <pre className="overflow-x-auto bg-ink-card p-6">
            <code className="font-mono text-sm leading-[1.75] text-[#E0E0E0]">
              {block.code}
            </code>
          </pre>
        </div>
      );

    case "stats":
      return (
        <dl className="mt-8 grid gap-6 rounded-[14px] border border-brand-700/20 bg-[#EEF4F5] p-8 sm:grid-cols-3">
          {block.items.map((item) => (
            <div key={item.label} className="flex flex-col gap-1.5">
              <dt className="sr-only">{item.label}</dt>
              <dd className="font-display text-3xl font-extrabold tracking-tighter text-brand-900 lg:text-4xl">
                {item.value}
              </dd>
              <p className="text-sm leading-snug text-muted-500">{item.label}</p>
            </div>
          ))}
        </dl>
      );
  }
}
