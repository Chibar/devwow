import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooterSection } from "@/components/layout/site-footer";
import { ReadingProgress } from "@/components/article/reading-progress";
import { ArticleHeader } from "@/components/article/article-header";
import { ArticleBody } from "@/components/article/article-body";
import { ArticleAuthorCard } from "@/components/article/article-author";
import { RelatedArticles } from "@/components/article/related-articles";
import { Subscribe } from "@/components/blog/subscribe";
import { getArticle, getArticleSlugs, getRelatedArticles } from "@/lib/api/article";
import { getBlogPage } from "@/lib/api/blog";
import { articleMetadata, getSiteMeta, metadataFrom } from "@/lib/api/seo";
import { articleSubscribe } from "@/lib/mock/article";

/** Двоичный декор блока подписки на детальной странице. */
const binary = ["01001110", "01100101", "01111000", "01110100"];

export function generateStaticParams() {
  return getArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  // Заголовок и описание для выдачи правятся в админке отдельно от
  // текста: заголовок, хороший на странице, во вкладке часто длинён.
  const [meta, site, article] = await Promise.all([
    articleMetadata(slug),
    getSiteMeta(),
    getArticle(slug),
  ]);

  if (!meta && !article) return { title: "Статья не найдена" };

  const page = meta ?? {
    route: `/blog/${slug}`,
    name: "",
    title: article!.title,
    description: article!.excerpt,
    ogTitle: "",
    ogDescription: "",
    ogImage: "",
    canonical: "",
    noindex: false,
  };

  return metadataFrom(site, page);
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [article, blog] = await Promise.all([getArticle(slug), getBlogPage()]);

  if (!article) notFound();

  const related = getRelatedArticles(slug);

  return (
    <>
      <ReadingProgress />
      <SiteHeader />
      <main className="flex-1">
        <ArticleHeader article={article} />
        <ArticleBody article={article} />
        <ArticleAuthorCard author={article.author} />
        <RelatedArticles articles={related} categories={blog.categories} />
        <Subscribe
          data={articleSubscribe}
          binary={binary}
          binaryClassName="lg:text-[13px] lg:tracking-[0.2em]"
        />
      </main>
      <SiteFooterSection />
    </>
  );
}
