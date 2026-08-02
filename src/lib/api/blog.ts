import { blogPage } from "@/lib/mock/blog";
import { apiFetch, isApiEnabled } from "@/lib/api/client";
import type { BlogPage } from "@/lib/types";

/** Данные страницы «Блог» — тот же контракт, что и у остальных страниц. */
export function getBlogPage(): Promise<BlogPage> {
  if (!isApiEnabled) return Promise.resolve(blogPage);
  return apiFetch<BlogPage>("/blog-page", { revalidate: 300 });
}
