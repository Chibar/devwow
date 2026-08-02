import { servicesPage } from "@/lib/mock/services";
import { apiFetch, isApiEnabled } from "@/lib/api/client";
import type { ServicesPage } from "@/lib/types";

/** Данные страницы «Услуги» — тот же контракт, что и у остальных страниц. */
export function getServicesPage(): Promise<ServicesPage> {
  if (!isApiEnabled) return Promise.resolve(servicesPage);
  return apiFetch<ServicesPage>("/services-page", { revalidate: 300 });
}
