import type { BlogPage } from "@/lib/types";

/**
 * Мок-данные страницы «Блог». Тексты и даты взяты из макета Figma
 * (frame «Блог»). Структура — под будущие эндпоинты FastAPI.
 */
export const blogPage: BlogPage = {
  hero: {
    eyebrow: "Блог",
    titleLead: "Блог ",
    titleAccent: "DEV",
    lead: "Мысли о технологиях, управлении проектами и цифровом продукте.",
    description:
      "Делаем сложное понятным. Статьи от разработчиков для тех, кто выбирает технологию.",
  },

  featured: {
    id: "stack-2026",
    badge: "★ Главное",
    title: "Как выбрать стек технологий для стартапа в 2026",
    excerpt:
      "Разбираем, когда Next.js + FastAPI — оптимальный выбор, а когда монолит на Django спасёт вас от overengineering и лишних расходов.",
    categoryIds: ["tech"],
    readingTime: "8 мин",
    date: "15.07.2026",
    visual: "/article-visuals/featured.svg",
    href: "/blog/stack-2026",
  },

  listEyebrow: "Все статьи",
  categories: [
    { id: "all", label: "Все" },
    { id: "tech", label: "Технологии" },
    { id: "management", label: "Управление" },
    { id: "integrations", label: "Интеграции" },
    { id: "cases", label: "Кейсы" },
  ],

  articles: [
    {
      id: "bitrix-2026",
      title: "Почему 1С-Битрикс всё ещё актуален в 2026",
      excerpt:
        "Несмотря на хайп вокруг headless CMS, Битрикс остаётся прагматичным выбором для ритейла и корпоративных порталов. Объясняем почему.",
      categoryIds: ["tech", "integrations"],
      readingTime: "6 мин",
      date: "03.07.2026",
      visual: "/article-visuals/dots.svg",
      href: "/blog/bitrix-2026",
    },
    {
      id: "payments-checklist",
      title: "Интеграция с платёжными системами: полный чек-лист",
      excerpt:
        "От выбора провайдера до обработки edge cases — всё, что нужно учесть, чтобы деньги не пропадали в никуда.",
      categoryIds: ["integrations"],
      readingTime: "11 мин",
      date: "27.06.2026",
      visual: "/article-visuals/lines.svg",
      href: "/blog/payments-checklist",
    },
    {
      id: "agile-waterfall",
      title: "Agile vs. Waterfall: что выбрать для вашего проекта",
      excerpt:
        "Мы работали по обеим методологиям. Рассказываем, когда спринты — это благо, а когда классическое планирование надёжнее.",
      categoryIds: ["management"],
      readingTime: "9 мин",
      date: "18.06.2026",
      visual: "/article-visuals/circles.svg",
      href: "/blog/agile-waterfall",
    },
    {
      id: "postgres-mongo",
      title: "PostgreSQL vs MongoDB: когда и что использовать",
      excerpt:
        "Сравниваем реляционный и документный подходы на реальных сценариях — от маркетплейса до IoT-платформы.",
      categoryIds: ["tech"],
      readingTime: "12 мин",
      date: "10.06.2026",
      visual: "/article-visuals/grid.svg",
      href: "/blog/postgres-mongo",
    },
    {
      id: "api-speedup",
      title: "Кейс: как мы ускорили API маркетплейса с 800 мс до 90 мс",
      excerpt:
        "Разбираем поэтапную оптимизацию — от профилирования запросов до Redis-кэширования и денормализации схемы.",
      categoryIds: ["cases", "tech"],
      readingTime: "14 мин",
      date: "02.06.2026",
      visual: "/article-visuals/dots.svg",
      href: "/blog/api-speedup",
    },
    {
      id: "docker-practices",
      title: "Docker в продакшене: 10 практик, которые спасут нервы",
      excerpt:
        "Собрали конкретные рекомендации по образам, secrets, health check и логированию. Проверено на живых проектах.",
      categoryIds: ["tech"],
      readingTime: "10 мин",
      date: "24.05.2026",
      visual: "/article-visuals/lines.svg",
      href: "/blog/docker-practices",
    },
    {
      id: "estimate",
      title: "Как правильно оценить стоимость разработки",
      excerpt:
        "Почему смета расползается и как её зафиксировать. Методы декомпозиции, буфер рисков и работа с неопределённостью.",
      categoryIds: ["management"],
      readingTime: "7 мин",
      date: "15.05.2026",
      visual: "/article-visuals/circles.svg",
      href: "/blog/estimate",
    },
    {
      id: "microservices-bank",
      title: "Кейс: построение микросервисной архитектуры для банка",
      excerpt:
        "Как мы декомпозировали монолит на 14 сервисов за 6 месяцев без остановки продакшена и потери данных.",
      categoryIds: ["cases", "management"],
      readingTime: "16 мин",
      date: "07.05.2026",
      visual: "/article-visuals/grid.svg",
      href: "/blog/microservices-bank",
    },
  ],

  subscribe: {
    eyebrow: "Рассылка",
    titleLead: "Подпишитесь на наш ",
    titleAccent: "блог",
    description:
      "Раз в месяц — дайджест полезных статей о разработке и технологиях. Никакого спама и рекламы — только по делу.",
    placeholder: "your@email.com",
    submitLabel: "Подписаться",
    disclaimer: "Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности",
  },
};
