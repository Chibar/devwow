/**
 * Выгружает мок-данные в JSON — ровно в той форме, в которой их ждут
 * эндпоинты бэкенда. Результат кладётся в `backend-handoff/fixtures/`
 * и используется как сид БД и как эталон для тестов контрактов.
 *
 * Запуск: npx tsx scripts/export-mocks.ts
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

import * as home from "../src/lib/mock/home";
import { about } from "../src/lib/mock/about";
import { servicesPage } from "../src/lib/mock/services";
import { projectsPage } from "../src/lib/mock/projects";
import { blogPage } from "../src/lib/mock/blog";
import { articleDetails } from "../src/lib/mock/article";
import { contactsPage } from "../src/lib/mock/contacts";

const outDir = join(process.cwd(), "backend-handoff", "fixtures");
mkdirSync(outDir, { recursive: true });

/** Файл на эндпоинт: имя файла = путь эндпоинта без слеша. */
const files: Record<string, unknown> = {
  navigation: home.navigation,
  hero: home.hero,
  clients: home.clients,
  technologies: home.technologies,
  services: home.services,
  portfolio: home.portfolio,
  team: home.team,
  posts: home.posts,
  reviews: home.reviews,
  faq: home.faq,
  contact: home.contact,
  footer: home.footer,
  about,
  "services-page": servicesPage,
  "projects-page": projectsPage,
  "blog-page": blogPage,
  "contacts-page": contactsPage,
};

for (const [name, data] of Object.entries(files)) {
  writeFileSync(
    join(outDir, `${name}.json`),
    JSON.stringify(data, null, 2) + "\n",
    "utf8",
  );
}

// Статьи с полным текстом — по файлу на слаг
const articlesDir = join(outDir, "articles");
mkdirSync(articlesDir, { recursive: true });

for (const [slug, article] of Object.entries(articleDetails)) {
  writeFileSync(
    join(articlesDir, `${slug}.json`),
    JSON.stringify(article, null, 2) + "\n",
    "utf8",
  );
}

const count = Object.keys(files).length + Object.keys(articleDetails).length;
console.log(`Экспортировано файлов: ${count} → ${outDir}`);
