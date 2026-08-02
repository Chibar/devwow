"use client";

import { useState, useTransition } from "react";
import { FileText, Phone, Send, User } from "lucide-react";

import { submitLead } from "@/lib/api/leads";
import { cn } from "@/lib/cn";
import type { LeadResult } from "@/lib/types";

const fieldClasses =
  "w-full rounded-[10px] border border-white/8 bg-surface-dark py-3.5 pl-10 pr-4 text-sm text-white placeholder:text-white/50 focus:border-brand-700 focus:outline-none";

const labelClasses =
  "text-xs font-semibold uppercase tracking-wide text-muted-500";

export function LeadForm({ disclaimer }: { disclaimer: string }) {
  const [result, setResult] = useState<LeadResult | null>(null);
  const [isPending, startTransition] = useTransition();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") ?? "").trim();
    const contact = String(formData.get("contact") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !contact) {
      setResult({ ok: false, message: "Заполните имя и контакт для связи." });
      return;
    }

    startTransition(async () => {
      try {
        const response = await submitLead({ name, contact, message });
        setResult(response);
        if (response.ok) form.reset();
      } catch {
        setResult({
          ok: false,
          message:
            "Не удалось отправить заявку. Попробуйте ещё раз или напишите на hello@kts.studio.",
        });
      }
    });
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <label htmlFor="lead-name" className={labelClasses}>
          Ваше имя
        </label>
        <div className="relative">
          <User className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-500" />
          <input
            id="lead-name"
            name="name"
            required
            placeholder="Иван Петров"
            className={fieldClasses}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="lead-contact" className={labelClasses}>
          Телефон или Telegram
        </label>
        <div className="relative">
          <Phone className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-500" />
          <input
            id="lead-contact"
            name="contact"
            required
            placeholder="+7 (999) 123-45-67 или @username"
            className={fieldClasses}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="lead-message" className={labelClasses}>
          Краткое описание задачи
        </label>
        <div className="relative">
          <FileText className="absolute left-4 top-4 size-4 text-muted-500" />
          <textarea
            id="lead-message"
            name="message"
            rows={4}
            placeholder="Расскажите о проекте: что нужно сделать, в какие сроки, есть ли бюджет..."
            className={cn(fieldClasses, "resize-none")}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="flex w-full items-center justify-center gap-2.5 rounded-[10px] bg-brand-900 py-4 text-base font-semibold text-white shadow-[0_10px_15px_-3px_rgba(0,98,112,0.2),0_4px_6px_-4px_rgba(0,98,112,0.2)] transition-colors hover:bg-brand-700 disabled:opacity-60"
      >
        {isPending ? "Отправляем…" : "Отправить заявку"}
        <Send className="size-3.5" />
      </button>

      {result ? (
        <p
          role="status"
          className={cn(
            "text-center text-sm",
            result.ok ? "text-brand-400" : "text-[#FF5F57]",
          )}
        >
          {result.message}
        </p>
      ) : null}

      <p className="text-center text-xs text-muted-600">{disclaimer}</p>
    </form>
  );
}
