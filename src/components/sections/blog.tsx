import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";

import { Container } from "@/components/ui/container";
import { getPosts } from "@/lib/api/home";

export async function Blog() {
  const posts = await getPosts();

  return (
    <section id="blog" className="bg-surface-dark py-24">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow text-brand-700">Экспертиза</p>
            <h2 className="mt-4 font-display text-4xl font-extrabold text-white lg:text-5xl">
              Последние статьи
            </h2>
          </div>
          <Link
            href="#blog"
            className="flex items-center gap-2 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-400"
          >
            Весь блог
            <ArrowRight className="size-3.5" />
          </Link>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={post.href}
              className="flex flex-col gap-5 rounded-[14px] border border-brand-700/25 bg-ink p-7 transition-colors hover:border-brand-700/60"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-700/12 px-2.5 py-1 text-xs text-brand-700">
                  <Tag className="size-2.5" />
                  {post.category}
                </span>
                <span className="text-[10px] text-muted-600">{post.date}</span>
              </div>

              <div>
                <h3 className="font-display text-lg font-bold leading-snug text-white">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-300">
                  {post.excerpt}
                </p>
              </div>

              <div className="mt-auto flex items-center gap-3 border-t border-white/5 pt-4">
                <Clock className="size-3 text-muted-500" />
                <span className="text-xs text-muted-500">{post.readingTime}</span>
                <span className="ml-auto flex items-center gap-1 text-xs font-semibold text-brand-900">
                  Читать
                  <ArrowRight className="size-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
