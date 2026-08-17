"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

import type { NavLink } from "@/lib/types";

export function MobileNav({ items, cta }: { items: NavLink[]; cta: NavLink }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label={open ? "Закрыть меню" : "Открыть меню"}
        className="inline-flex size-10 items-center justify-center rounded-lg border border-white/10 text-white/70 transition-colors hover:text-brand-400"
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      {open ? (
        <div className="fixed inset-x-0 top-16 z-50 border-b border-white/10 bg-ink px-4 pb-6 pt-4">
          <nav className="flex flex-col">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/5 py-3 text-base text-white/70 transition-colors hover:text-brand-400"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          {cta.label ? (
            <Link
              href={cta.href}
              onClick={() => setOpen(false)}
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-900 px-6 py-3 text-sm font-semibold text-white"
            >
              {cta.label}
              <ArrowRight className="size-3.5" />
            </Link>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
