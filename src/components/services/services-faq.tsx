import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import type { FaqItem, NavLink } from "@/lib/types";

export function ServicesFaq({
  eyebrow,
  title,
  description,
  cta,
  items,
}: {
  eyebrow: string;
  title: string;
  description: string;
  cta: NavLink;
  items: FaqItem[];
}) {
  return (
    <section className="bg-surface-light py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-brand-700">
              {eyebrow}
            </p>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.25] tracking-tight text-surface-dark lg:text-[52px]">
              {title}
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-500">
              {description}
            </p>
            <Button href={cta.href} className="mt-10">
              {cta.label}
              <ArrowRight className="size-3.5" />
            </Button>
          </div>

          <FaqAccordion items={items} />
        </div>
      </Container>
    </section>
  );
}
