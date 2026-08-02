/**
 * Тонкая обёртка над fetch для будущего FastAPI-бэкенда.
 *
 * Пока `NEXT_PUBLIC_API_URL` не задан, слой данных работает на моках
 * (см. `@/lib/api/home`) и до сюда дело не доходит.
 */

export const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "";

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
