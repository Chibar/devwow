"use client";

import { useState, useTransition } from "react";
import { Send } from "lucide-react";

import { subscribeToBlog } from "@/lib/api/leads";
import { cn } from "@/lib/cn";
import type { LeadResult } from "@/lib/types";

export function SubscribeForm({
  placeholder,
  submitLabel,
}: {
  placeholder: string;
  submitLabel: string;
}) {
  const [result, setResult] = useState<LeadResult | null>(null);
  const [isPending, startTransition] = useTransition();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const email = String(new FormData(form).get("email") ?? "").trim();

    if (!email) {
      setResult({ ok: false, message: "Укажите e-mail." });
      return;
    }

    startTransition(async () => {
      try {
        const response = await subscribeToBlog(email);
        setResult(response);
        if (response.ok) form.reset();
      } catch {
        setResult({
          ok: false,
          message: "Не удалось подписаться. Попробуйте ещё раз.",
        });
      }
    });
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          name="email"
          required
          placeholder={placeholder}
          className="w-full rounded-lg border border-brand-700/30 bg-ink-card px-5 py-4 text-sm text-white placeholder:text-muted-600 focus:border-brand-700 focus:outline-none sm:max-w-sm"
        />
        <button
          type="submit"
          disabled={isPending}
          className="flex shrink-0 items-center justify-center gap-2.5 rounded-lg bg-brand-900 px-7 py-4 text-sm font-semibold text-white shadow-[0_4px_20px_0_rgba(0,98,112,0.3)] transition-colors hover:bg-brand-700 disabled:opacity-60"
        >
          {isPending ? "Отправляем…" : submitLabel}
          <Send className="size-3.5" />
        </button>
      </div>

      {result ? (
        <p
          role="status"
          className={cn(
            "text-sm",
            result.ok ? "text-brand-400" : "text-[#FF5F57]",
          )}
        >
          {result.message}
        </p>
      ) : null}
    </form>
  );
}
