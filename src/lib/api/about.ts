import { about } from "@/lib/mock/about";
import { apiFetch, isApiEnabled } from "@/lib/api/client";
import type { AboutPage } from "@/lib/types";

/** Данные страницы «О нас» — тот же контракт, что и у главной. */
export function getAboutPage(): Promise<AboutPage> {
  if (!isApiEnabled) return Promise.resolve(about);
  return apiFetch<AboutPage>("/about", { revalidate: 300 });
}
