/**
 * Тонкая обёртка над fetch к FastAPI-бэкенду.
 *
 * Пока адрес API не задан, слой данных работает на моках
 * (см. `@/lib/api/home`) и до сюда дело не доходит.
 *
 * Адресов два, и это не дублирование:
 *
 * * `API_URL` — внутренний, `http://api:8000/api`. Виден только на
 *   сервере и используется при рендере: запрос идёт по сети docker,
 *   не выходя в интернет и не проходя через nginx.
 * * `NEXT_PUBLIC_API_URL` — публичный, `https://api.devwow.ru/api`.
 *   Подставляется в браузерный бандл на сборке, по нему уходят формы.
 *
 * `process.env.API_URL` в браузере всегда пустой, поэтому одно и то же
 * выражение даёт нужный адрес на обеих сторонах.
 */

export const API_URL = process.env.API_URL ?? process.env.NEXT_PUBLIC_API_URL ?? "";

export const isApiEnabled = API_URL.length > 0;

export class ApiError extends Error {
  constructor(
    message: string,
    readonly status: number,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

export async function apiFetch<T>(
  path: string,
  init?: RequestInit & { revalidate?: number },
): Promise<T> {
  const { revalidate, ...rest } = init ?? {};

  const response = await fetch(`${API_URL}${path}`, {
    ...rest,
    headers: {
      "Content-Type": "application/json",
      ...rest.headers,
    },
    next: revalidate === undefined ? undefined : { revalidate },
  });

  if (!response.ok) {
    throw new ApiError(
      `Запрос ${path} завершился со статусом ${response.status}`,
      response.status,
    );
  }

  return (await response.json()) as T;
}
