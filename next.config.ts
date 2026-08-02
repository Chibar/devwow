import type { NextConfig } from "next";

/**
 * Статический экспорт для GitHub Pages.
 *
 * basePath нужен для project-страницы (https://<owner>.github.io/<repo>/):
 * в CI он подставляется из имени репозитория, локально остаётся пустым.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: {
    // На Pages нет сервера оптимизации изображений.
    unoptimized: true,
  },
};

export default nextConfig;
