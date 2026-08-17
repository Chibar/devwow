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
const nextConfig: NextConfig = {
  output: "standalone",
};

export default nextConfig;
