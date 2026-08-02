import { contactsPage } from "@/lib/mock/contacts";
import { apiFetch, isApiEnabled } from "@/lib/api/client";
import type { ContactsPage } from "@/lib/types";

/** Данные страницы «Контакты» — тот же контракт, что и у остальных страниц. */
export function getContactsPage(): Promise<ContactsPage> {
  if (!isApiEnabled) return Promise.resolve(contactsPage);
  return apiFetch<ContactsPage>("/contacts-page", { revalidate: 300 });
}
