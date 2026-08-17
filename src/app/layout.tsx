import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

import { getSiteMeta } from "@/lib/api/seo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  weight: ["600", "700", "800"],
  display: "swap",
});

/**
 * Метаданные собираются из админки (раздел «Оформление»).
 *
 * Здесь только общее для всех страниц: шаблон заголовка, запасные
 * заголовок и описание, иконки, коды подтверждения прав. Своё у каждой
 * страницы — в её `generateMetadata`.
 */
export async function generateMetadata(): Promise<Metadata> {
  const { brand, seo } = await getSiteMeta();

  const icons = [
    ...(brand.favicon ? [{ rel: "icon", url: brand.favicon }] : []),
    ...(brand.appleTouchIcon
      ? [{ rel: "apple-touch-icon", url: brand.appleTouchIcon }]
      : []),
  ];

  return {
    // Без него относительные адреса картинок в OG собрать не из чего.
    metadataBase: new URL(seo.siteUrl),
    title: {
      // Шаблон применяется к заголовкам дочерних сегментов, то есть
      // страниц. Страница без своего заголовка получает default как есть —
      // так живёт главная, у которой название студии уже внутри
      // заголовка и через шаблон задвоилось бы.
      template: seo.titleTemplate,
      default: seo.defaultTitle,
    },
    description: seo.defaultDescription,
    ...(icons.length ? { icons } : {}),
    ...(brand.ogImage ? { openGraph: { images: [brand.ogImage] } } : {}),
    verification: {
      ...(seo.googleVerification ? { google: seo.googleVerification } : {}),
      ...(seo.yandexVerification ? { yandex: seo.yandexVerification } : {}),
    },
    // Рубильник для стенда: закрывает от индексации сайт целиком.
    ...(seo.noindexAll ? { robots: { index: false, follow: false } } : {}),
  };
}

export async function generateViewport(): Promise<Viewport> {
  const { brand } = await getSiteMeta();
  return brand.themeColor ? { themeColor: brand.themeColor } : {};
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { seo } = await getSiteMeta();

  return (
    <html
      lang="ru"
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <head>
        {/* Счётчики из админки. Вставляются как есть — это выполнение
            произвольного кода на страницах сайта, поэтому поле правит
            только администратор. */}
        {seo.headSnippet ? (
          <script dangerouslySetInnerHTML={{ __html: seo.headSnippet }} />
        ) : null}
      </head>
      <body className="flex min-h-full flex-col">
        {seo.bodySnippet ? (
          <div dangerouslySetInnerHTML={{ __html: seo.bodySnippet }} />
        ) : null}
        {children}
      </body>
    </html>
  );
}
