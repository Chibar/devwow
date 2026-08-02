import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import type { ArticleAuthor } from "@/lib/types";

export function ArticleAuthorCard({ author }: { author: ArticleAuthor }) {
  return (
    <section className="bg-surface-dark py-20">
      <Container>
        <div className="mx-auto flex max-w-[860px] flex-col gap-8 rounded-2xl border border-brand-700/25 bg-ink p-10 sm:flex-row">
          <span className="brand-gradient flex size-20 shrink-0 items-center justify-center rounded-2xl font-display text-2xl font-extrabold text-white">
            {author.initials}
          </span>

          <div className="flex flex-col gap-3">
            <div>
              <p className="font-display text-xl font-bold text-white">
                {author.name}
              </p>
              <p className="mt-0.5 text-sm text-brand-700">{author.role}</p>
            </div>

            <p className="text-sm leading-relaxed text-muted-300">{author.bio}</p>

            <Link
              href={author.link.href}
              className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-400"
            >
              {author.link.label}
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
