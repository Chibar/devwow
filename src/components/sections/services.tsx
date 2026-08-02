import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { asset } from "@/lib/base-path";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { getServices } from "@/lib/api/home";

export async function Services() {
  const services = await getServices();

  return (
    <section id="services" className="bg-surface-light py-24">
      <Container>
        <SectionHeading eyebrow="Что мы делаем" title="Услуги" />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.id}
              className="flex flex-col gap-5 rounded-[14px] border border-brand-700 bg-white p-8 shadow-[0_4px_20px_0_rgba(0,98,112,0.07)]"
            >
              <Image
                src={asset(service.icon)}
                alt=""
                aria-hidden
                width={48}
                height={48}
                className="size-12"
              />

              <div>
                <h3 className="font-display text-xl font-bold text-surface-dark">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-500">
                  {service.description}
                </p>
              </div>

              <ul className="mt-auto flex flex-wrap gap-x-4 gap-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-1 text-xs text-brand-900"
                  >
                    <Check className="size-3 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href={service.href}
                className="flex items-center gap-1.5 text-sm font-semibold text-brand-900 transition-colors hover:text-brand-700"
              >
                Подробнее
                <ArrowRight className="size-3.5" />
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <div className="flex w-full max-w-3xl flex-col items-start justify-between gap-6 rounded-2xl border border-brand-700/25 bg-[linear-gradient(135deg,rgba(0,98,112,0.08)_0%,rgba(0,224,199,0.06)_100%)] px-10 py-8 sm:flex-row sm:items-center">
            <div>
              <p className="font-display text-xl font-bold text-surface-dark">
                Нужна консультация?
              </p>
              <p className="mt-1 text-sm text-muted-500">
                Бесплатно разберём вашу задачу за 30 минут.
              </p>
            </div>
            <Button href="#contact" className="shrink-0">
              Записаться
              <ArrowRight className="size-3.5" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
