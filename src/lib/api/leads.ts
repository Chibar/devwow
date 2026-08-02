import { apiFetch, isApiEnabled } from "@/lib/api/client";
import type { LeadInput, LeadResult } from "@/lib/types";

/**
 * Отправка заявки.
 *
 * Вынесено из `@/lib/api/home`, чтобы клиентский бандл формы не тянул
 * за собой мок-данные всех секций.
 *
 * Сайт собирается как статика (GitHub Pages), поэтому запрос уходит
 * из браузера напрямую в API — на бэкенде понадобится CORS.
 */
export async function submitLead(input: LeadInput): Promise<LeadResult> {
  if (!isApiEnabled) {
    await new Promise((resolve) => setTimeout(resolve, 600));
    return {
      ok: true,
      message: `Спасибо, ${input.name.trim()}! Мы свяжемся с вами в течение рабочего дня.`,
    };
  }

  return apiFetch<LeadResult>("/leads", {
    method: "POST",
    body: JSON.stringify(input),
  });
}

/** Подписка на рассылку блога — тот же принцип, что и у формы заявки. */
export async function subscribeToBlog(email: string): Promise<LeadResult> {
  if (!isApiEnabled) {
    await new Promise((resolve) => setTimeout(resolve, 600));
    return {
      ok: true,
      message: `Готово! Дайджест будет приходить на ${email.trim()}.`,
    };
  }

  return apiFetch<LeadResult>("/subscribers", {
    method: "POST",
    body: JSON.stringify({ email: email.trim() }),
  });
}
