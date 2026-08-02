# KTS Studio — сайт студии

Главная страница по макету Figma («Дизайн студии», frame «Главная»).

## Стек

- Next.js 16 (App Router, Turbopack) + React 19
- TypeScript
- Tailwind CSS v4 (токены в `src/app/globals.css`)
- lucide-react — иконки интерфейса
- Шрифты Manrope (заголовки) и Inter (текст) через `next/font/google`

## Запуск

```bash
npm run dev
```

Сборка и проверки:

```bash
npm run build
```

## Структура

```
src/
  app/
    layout.tsx        шрифты, метаданные
    page.tsx          сборка секций главной
    about/page.tsx    страница «О нас»
    services/page.tsx страница «Услуги»
    projects/page.tsx страница «Проекты»
    blog/page.tsx     страница «Блог»
    globals.css       дизайн-токены из макета
  components/
    layout/           шапка, подвал, мобильное меню
    sections/         секции главной по порядку макета
    about/            секции страницы «О нас»
    services/         секции страницы «Услуги»
    projects/         секции страницы «Проекты»
    blog/             секции страницы «Блог»
    ui/               кнопка, контейнер, заголовок секции, FAQ, форма
  lib/
    types.ts          доменные типы (контракт с бэкендом)
    accents.ts        оттенки брендового градиента
    mock/             мок-данные страниц
    api/              слой доступа к данным + обёртка над fetch
public/
  figma/ hero/ services/ tech/                  ассеты главной
  principles/ tech-light/                       ассеты «О нас»
  service-icons/ process-icons/ case-patterns/  ассеты «Услуг»
  project-visuals/                              ассеты «Проектов»
  article-visuals/                              ассеты «Блога»
```

### Брендинг

В макете главная подписана как **KTS Studio**, а страница «О нас» — как
**DEV Studio / Digital Engineering Vanguard**. Шапка и подвал общие для обеих
страниц и пока используют вариант с главной. Когда бренд определится, менять
нужно будет только `footer` в [src/lib/mock/home.ts](src/lib/mock/home.ts),
логотип в `public/figma/` и тексты в
[src/lib/mock/about.ts](src/lib/mock/about.ts).

## Мок-данные и переход на FastAPI

Всё динамическое содержимое (услуги, кейсы, команда, статьи, отзывы, FAQ,
контакты, футер, страница «О нас») лежит в `src/lib/mock/`. Компоненты
обращаются к нему не напрямую, а через `src/lib/api/` — асинхронные функции
с типами из `src/lib/types.ts`.

Когда появится FastAPI:

1. Задать `NEXT_PUBLIC_API_URL` в `.env.local` (пример — `.env.example`).
2. Реализовать на бэкенде эндпоинты `/about`, `/services-page`,
   `/projects-page`, `/blog-page`, `/subscribers`, `/hero`, `/services`,
   `/portfolio`,
   `/team`, `/posts`, `/reviews`, `/faq`, `/clients`, `/technologies`,
   `/contact`, `/footer`, `/navigation` и `POST /leads`.

Пока переменная пуста, слой данных отдаёт моки — разметку менять не нужно.

## Деплой на GitHub Pages

Сайт собирается статикой (`output: "export"`) и выкладывается workflow-ом
[.github/workflows/deploy.yml](.github/workflows/deploy.yml) при пуше в `main`.

Что нужно сделать один раз:

1. Создать репозиторий на GitHub и запушить `main`.
2. В настройках репозитория: **Settings → Pages → Build and deployment →
   Source: GitHub Actions**.

`basePath` workflow подставляет сам: для обычного репозитория — `/<repo>`,
для `<owner>.github.io` — пустой. Локально собрать «как на Pages»:

```bash
NEXT_PUBLIC_BASE_PATH=/<repo> npm run build
```

Результат окажется в `out/`.

### Ограничения статики

- Server actions недоступны — форма заявки отправляется из браузера.
- FastAPI на Pages не поднять: бэкенд нужно хостить отдельно, указать его адрес
  в переменной репозитория `NEXT_PUBLIC_API_URL` (Settings → Secrets and
  variables → Actions → Variables) и разрешить CORS для домена Pages.
- Оптимизация изображений отключена (`images.unoptimized`), поэтому пути к
  файлам из `public/` пробрасываются через хелпер `asset()` из
  [src/lib/base-path.ts](src/lib/base-path.ts) — `next/image` сам basePath
  к ним не добавляет.

## Адаптив

В макете есть только десктоп 1920px. Мобильная и планшетная раскладки сделаны
по здравому смыслу: сетки 6/8/3 колонок схлопываются до 2–4 и 1, навигация
уходит в бургер-меню.
