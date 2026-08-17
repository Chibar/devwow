import type { SiteMeta } from "@/lib/types";

/**
 * Значения по умолчанию для оформления и метаданных.
 *
 * Раньше всё это лежало прямо в коде: заголовки в `export const metadata`
 * каждой страницы, путь к логотипу — в шапке, подпись кнопки — в вёрстке.
 * Теперь источник истины в админке, а этот файл остаётся запасным:
 * по нему сайт собирается, когда `API_URL` не задан.
 *
 * Значения совпадают с `app/site_defaults.py` бэкенда — тем, что
 * попадает в базу при первом развёртывании.
 */
export const siteMeta: SiteMeta = {
  brand: {
    siteName: "KTS Studio",
    logo: "/figma/logo.svg",
    logoAlt: "KTS Studio",
    logoWidth: 220,
    logoHeight: 44,
    footerLogo: "",
    footerLogoText: "KTS",
    footerLogoAccent: "T",
    favicon: "",
    appleTouchIcon: "",
    ogImage: "",
    themeColor: "#010101",
  },
  seo: {
    titleTemplate: "%s — KTS Studio",
    defaultTitle: "KTS Studio — IT-студия полного цикла",
    defaultDescription:
      "Разрабатываем веб-платформы, мобильные приложения и сложные интеграции для бизнеса, которому важен результат.",
    ogSiteName: "KTS Studio",
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
    googleVerification: "",
    yandexVerification: "",
    headSnippet: "",
    bodySnippet: "",
    noindexAll: true,
  },
  layout: {
    headerCta: { label: "Обсудить проект", href: "/contacts" },
    footerContactsTitle: "Контакты",
  },
  pages: [
    {
      route: "/",
      name: "Главная",
      title: "",
      description:
        "Разрабатываем веб-платформы, мобильные приложения и сложные интеграции для бизнеса, которому важен результат.",
      ogTitle: "",
      ogDescription: "",
      ogImage: "",
      canonical: "",
      noindex: false,
    },
    {
      route: "/about",
      name: "О нас",
      title: "О нас",
      description: "Мы создаём цифровые продукты, которые приносят прибыль бизнесу.",
      ogTitle: "",
      ogDescription: "",
      ogImage: "",
      canonical: "",
      noindex: false,
    },
    {
      route: "/services",
      name: "Услуги",
      title: "Услуги",
      description:
        "Разработка сложных цифровых продуктов: от веб-платформ до мобильных приложений и интеграций.",
      ogTitle: "",
      ogDescription: "",
      ogImage: "",
      canonical: "",
      noindex: false,
    },
    {
      route: "/projects",
      name: "Проекты",
      title: "Проекты",
      description:
        "Наши проекты: веб-платформы, мобильные приложения и интеграции. Каждый проект — решение конкретной бизнес-задачи.",
      ogTitle: "",
      ogDescription: "",
      ogImage: "",
      canonical: "",
      noindex: false,
    },
    {
      route: "/blog",
      name: "Блог",
      title: "Блог",
      description:
        "Мысли о технологиях, управлении проектами и цифровом продукте. Статьи от разработчиков для тех, кто выбирает технологию.",
      ogTitle: "",
      ogDescription: "",
      ogImage: "",
      canonical: "",
      noindex: false,
    },
    {
      route: "/contacts",
      name: "Контакты",
      title: "Контакты",
      description:
        "Обсудим ваш проект, ответим на вопросы или просто познакомимся. Телефон, Telegram, email и реквизиты KTS Studio.",
      ogTitle: "",
      ogDescription: "",
      ogImage: "",
      canonical: "",
      noindex: false,
    },
  ],
};
