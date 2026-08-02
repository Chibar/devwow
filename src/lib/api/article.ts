import { articleDetails } from "@/lib/mock/article";
import { blogPage } from "@/lib/mock/blog";
import { apiFetch, isApiEnabled } from "@/lib/api/client";
import type { Article, ArticleDetail } from "@/lib/types";

/** Все статьи блога — главная плюс карточки списка. */
function allArticles(): Article[] {
  return [blogPage.featured, ...blogPage.articles];
}

/** Слаги для статической генерации: карточки блога плюс статьи с полным текстом. */
export function getArticleSlugs(): string[] {
  return Array.from(
    new Set([...allArticles().map((article) => article.id), ...Object.keys(articleDetails)]),
  );
}

/**
 * Статья по слагу.
 *
 * Если полного текста нет, страница собирается из карточки списка:
 * шапка есть, тело пустое. Так все ссылки в блоге остаются рабочими.
 */
export async function getArticle(slug: string): Promise<ArticleDetail | null> {
  if (isApiEnabled) {
    try {
      return await apiFetch<ArticleDetail>(`/articles/${slug}`, {
        revalidate: 300,
      });
    } catch {
      return null;
    }
  }

  const detailed = articleDetails[slug];
  if (detailed) return detailed;

  const card = allArticles().find((article) => article.id === slug);
  if (!card) return null;

  const labels = new Map(
    blogPage.categories.map((category) => [category.id, category.label]),
  );

  return {
    slug: card.id,
    title: card.title,
    excerpt: card.excerpt,
    categoryIds: card.categoryIds,
    breadcrumb: labels.get(card.categoryIds[0]) ?? "Блог",
    readingTime: `${card.readingTime} чтения`,
    publishedLabel: "Опубликовано",
    publishedAt: card.date,
    author: articleDetails["next-js-choice"].author,
    body: [],
    tags: card.categoryIds.map((id) => labels.get(id) ?? id),
    shareLabel: "Поделиться статьёй:",
    shareTargets: ["TG", "VK", "WA", "🔗"],
  };
}

/** Три другие статьи для блока «Похожие статьи». */
export function getRelatedArticles(slug: string): Article[] {
  return allArticles()
    .filter((article) => article.id !== slug)
    .slice(0, 3);
}
