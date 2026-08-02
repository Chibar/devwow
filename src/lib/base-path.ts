/**
 * Префикс для путей к статике из `public/`.
 *
 * `next/image` и `next/link` подставляют basePath сами, но для ручных
 * ссылок на файлы он нужен явно.
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  return `${basePath}${path}`;
}
