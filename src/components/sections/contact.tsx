import { Check } from "lucide-react";

import { Container } from "@/components/ui/container";
import { LeadForm } from "@/components/ui/lead-form";
import { getContactBlock } from "@/lib/api/home";

export async function Contact() {
  const contact = await getContactBlock();

  return (
    <section id="contact" className="bg-ink py-24">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="eyebrow text-brand-700">{contact.eyebrow}</p>
            <h2 className="mt-4 font-display text-4xl font-extrabold text-white lg:text-5xl">
              {contact.title}
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-400">
              {contact.description}
            </p>

            <ul className="mt-8 flex flex-col gap-4">
              {contact.benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-900">
                    <Check className="size-3 text-white" />
                  </span>
                  <span className="text-sm text-muted-200">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-brand-700/25 bg-ink-soft p-6 sm:p-10">
            <LeadForm disclaimer={contact.disclaimer} />
          </div>
        </div>
      </Container>
    </section>
  );
}
