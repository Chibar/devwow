"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

import { cn } from "@/lib/cn";
import type { FaqItem } from "@/lib/types";

export function FaqAccordion({
  items,
  className,
}: {
  items: FaqItem[];
  className?: string;
}) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div
      className={cn(
        "rounded-[14px] border border-brand-700/18 bg-white px-6",
        className,
      )}
    >
      {items.map((item, index) => {
        const isOpen = openId === item.id;

        return (
          <div
            key={item.id}
            className={cn(
              index < items.length - 1 && "border-b border-brand-700/15",
            )}
          >
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : item.id)}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${item.id}`}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
            >
              <span className="font-display text-base font-semibold text-surface-dark">
                {item.question}
              </span>
              <span className="flex size-7 shrink-0 items-center justify-center rounded border border-brand-700 text-brand-700">
                {isOpen ? <Minus className="size-3.5" /> : <Plus className="size-3.5" />}
              </span>
            </button>

            {isOpen ? (
              <p
                id={`faq-panel-${item.id}`}
                className="pb-5 text-sm leading-relaxed text-muted-500"
              >
                {item.answer}
              </p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
