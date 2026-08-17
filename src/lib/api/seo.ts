import type { Metadata } from "next";
import { cache } from "react";

import { siteMeta as fallback } from "@/lib/mock/seo";
import { apiFetch, isApiEnabled } from "@/lib/api/client";
import type { LegalDocument, LegalLink, PageMeta, SiteMeta } from "@/lib/types";

/**
 * Оформление и метаданные из админки.
 *
 * Всё приходит одним ответом `/api/seo/site`: набор маленький, кешируется
 * тем же ISR, что и контент, и шесть отдельных запросов на каждый рендер
 * ни к чему. `cache` из React вдобавок склеивает вызовы внутри одного
 * рендера — `generateMetadata` и разметка шапки берут один и тот же
 * результат.
 */
const REVALIDATE = 300;

export const getSiteMeta = cache(async (): Promise<SiteMeta> => {
  if (!isApiEnabled) return fallback;

  try {
    return await apiFetch<SiteMeta>("/seo/site", { revalidate: REVALIDATE });
  } catch {
    // Метаданные не повод ронять страницу: отдаём то, что знает код.
    return fallback;
  }
});

const EMPTY_PAGE: PageMeta = {
  route: "",
  name: "",
  title: "",
  description: "",
  ogTitle: "",
  ogDescription: "",
  ogImage: "",
  canonical: "",
  noindex: false,
};

function pageOf(meta: SiteMeta, route: string): PageMeta {
  return meta.pages.find((page) => page.route === route) ?? EMPTY_PAGE;
}

/**
 * Метаданные страницы для `generateMetadata`.
 *
 * Заголовок отдаётся строкой: шаблон `%s — KTS Studio` живёт в корневом
 * макете, и Next применит его сам. Пустой заголовок означает «взять
 * запасной из макета» — так устроена главная, у которой название студии
 * уже внутри заголовка и через шаблон задвоилось бы.
 */
export async function pageMetadata(route: string): Promise<Metadata> {
  const meta = await getSiteMeta();
  const page = pageOf(meta, route);
  return metadataFrom(meta, page);
}

/** То же самое, но для страницы, которой нет в списке маршрутов. */
export function metadataFrom(meta: SiteMeta, page: PageMeta): Metadata {
  const { seo, brand } = meta;
  const description = page.description || seo.defaultDescription;
  const image = page.ogImage || brand.ogImage;
  const noindex = seo.noindexAll || page.noindex;

  return {
    ...(page.title ? { title: page.title } : {}),
    description,
    alternates: { canonical: page.canonical || page.route || undefined },
    openGraph: {
      title: page.ogTitle || page.title || seo.defaultTitle,
      description: page.ogDescription || description,
      siteName: seo.ogSiteName,
      url: page.canonical || page.route || undefined,
      type: "website",
      locale: "ru_RU",
      ...(image ? { images: [image] } : {}),
    },
    ...(noindex ? { robots: { index: false, follow: false } } : {}),
  };
}

/** Метаданные статьи: заголовок и описание для выдачи, картинка для превью. */
export async function articleMetadata(slug: string): Promise<PageMeta | null> {
  if (!isApiEnabled) return null;

  try {
    return await apiFetch<PageMeta>(`/seo/article/${slug}`, { revalidate: REVALIDATE });
  } catch {
    return null;
  }
}

/* ─── Юридические документы ─────────────────────────────────────────── */

export async function getLegalPages(): Promise<LegalLink[]> {
  if (!isApiEnabled) return [];

  try {
    return await apiFetch<LegalLink[]>("/legal", { revalidate: REVALIDATE });
  } catch {
    return [];
  }
}

export async function getLegalPage(slug: string): Promise<LegalDocument | null> {
  if (!isApiEnabled) return null;

  try {
    return await apiFetch<LegalDocument>(`/legal/${slug}`, { revalidate: REVALIDATE });
  } catch {
    return null;
  }
}
