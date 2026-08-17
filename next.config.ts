import type { NextConfig } from "next";

/**
 * Сборка под Node на VPS.
 *
 * Раньше здесь стоял статический экспорт под GitHub Pages. Он несовместим
 * с живым контентом: в этом режиме Next не поднимает сервер, а значит нет
 * ни серверного рендера с запросами к API, ни ISR, ни Route Handlers —
 * включая обработчик сброса кеша.
 *
 * `standalone` кладёт в сборку самодостаточный сервер вместе с нужной
 * частью node_modules — ровно то, что нужно контейнеру.
 */
/**
 * Хост медиатеки бэкенда. Логотип и картинки из админки лежат на
 * поддомене API, а `next/image` разрешает внешние домены по списку —
 * без этой записи он откажется их оптимизировать.
 */
const mediaHost = process.env.NEXT_PUBLIC_MEDIA_HOST;

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: mediaHost
      ? [{ protocol: "https", hostname: mediaHost, pathname: "/media/**" }]
      : [],
  },
};

export default nextConfig;
