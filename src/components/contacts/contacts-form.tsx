"use client";

import { useState, useTransition } from "react";
import { Send } from "lucide-react";

import { submitLead } from "@/lib/api/leads";
import { cn } from "@/lib/cn";
import type { ContactsForm as ContactsFormData, LeadResult } from "@/lib/types";

const fieldClasses =
  "w-full rounded-[14px] border border-brand-700/22 bg-surface-light px-5 py-4 text-sm text-surface-dark placeholder:text-surface-dark/50 focus:border-brand-700 focus:outline-none";

const labelClasses =
  "text-xs font-semibold uppercase tracking-wide text-[#888888]";

export function ContactsForm({ data }: { data: ContactsFormData }) {
  const [channel, setChannel] = useState(data.channels[1] ?? data.channels[0]);
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
        // Предпочтительный способ связи уходит вместе с текстом задачи
        const response = await submitLead({
          name,
          contact,
          message: message
            ? `${message}\n\nУдобный способ связи: ${channel}`
            : `Удобный способ связи: ${channel}`,
        });
        setResult(response);
        if (response.ok) form.reset();
      } catch {
        setResult({
          ok: false,
          message:
            "Не удалось отправить заявку. Попробуйте ещё раз или напишите на info@dev.studio.",
        });
      }
    });
  }

  return (
    <div className="rounded-2xl border border-brand-700/20 bg-white p-8 shadow-[0_8px_40px_0_rgba(0,98,112,0.07)] sm:p-10">
      <p className="text-xs uppercase tracking-[0.22em] text-brand-700">
        {data.eyebrow}
      </p>
      <h2 className="mt-3 font-display text-2xl font-extrabold text-surface-dark">
        {data.title}
      </h2>
      <p className="mt-2 text-sm text-[#777777]">{data.description}</p>

      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="contacts-name" className={labelClasses}>
            Ваше имя *
          </label>
          <input
            id="contacts-name"
            name="name"
            required
            placeholder="Иван Петров"
            className={fieldClasses}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="contacts-contact" className={labelClasses}>
            Телефон / Telegram *
          </label>
          <input
            id="contacts-contact"
            name="contact"
            required
            placeholder="+7 (999) 123-45-67 или @username"
            className={fieldClasses}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="contacts-message" className={labelClasses}>
            Краткое описание задачи *
          </label>
          <textarea
            id="contacts-message"
            name="message"
            rows={4}
            placeholder="Расскажите о проекте: что нужно, в какие сроки, есть ли бюджет..."
            className={cn(fieldClasses, "resize-none")}
          />
        </div>

        <fieldset className="flex flex-col gap-3">
          <legend className={labelClasses}>{data.channelLabel}</legend>
          <div className="flex flex-wrap gap-3">
            {data.channels.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setChannel(option)}
                aria-pressed={option === channel}
                className={cn(
                  "rounded-[10px] border px-5 py-2.5 text-sm font-semibold transition-colors",
                  option === channel
                    ? "border-brand-900 bg-brand-900 text-white shadow-[0_4px_14px_0_rgba(0,98,112,0.22)]"
                    : "border-brand-700/30 text-muted-500 hover:border-brand-700 hover:text-brand-900",
                )}
              >
                {option}
              </button>
            ))}
          </div>
        </fieldset>

        <button
          type="submit"
          disabled={isPending}
          className="mt-2 flex w-full items-center justify-center gap-2.5 rounded-[14px] bg-brand-900 py-4 text-base font-semibold text-white shadow-[0_6px_28px_0_rgba(0,98,112,0.28)] transition-colors hover:bg-brand-700 disabled:opacity-60"
        >
          {isPending ? "Отправляем…" : data.submitLabel}
          <Send className="size-4" />
        </button>

        {result ? (
          <p
            role="status"
            className={cn(
              "text-center text-sm",
              result.ok ? "text-brand-700" : "text-[#FF5F57]",
            )}
          >
            {result.message}
          </p>
        ) : null}

        <p className="flex items-center justify-center gap-2 text-xs text-muted-200">
          <span aria-hidden className="size-1.5 rounded-full bg-brand-400" />
          {data.note}
        </p>
      </form>
    </div>
  );
}
