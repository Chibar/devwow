import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { getPortfolio } from "@/lib/api/home";

export async function Portfolio() {
  const cases = await getPortfolio();

  return (
    <section id="portfolio" className="bg-surface-dark py-24">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow text-brand-700">Наши работы</p>
            <h2 className="mt-4 font-display text-4xl font-extrabold text-white lg:text-5xl">
              Портфолио
            </h2>
          </div>
          <Link
            href="#contact"
            className="flex items-center gap-2 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-400"
          >
            Все кейсы
            <ArrowRight className="size-3.5" />
          </Link>
        </div>

        <div className="mt-14 flex flex-col gap-5">
          {cases.map((item) => (
            <article
              key={item.id}
              className="flex flex-col gap-8 rounded-[14px] border border-brand-700/30 bg-ink p-10 lg:flex-row lg:items-center"
            >
              <div className="flex flex-1 flex-col gap-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-400 px-2.5 py-1 text-xs font-semibold text-ink">
                    <span className="size-1.5 rounded-full bg-black/40" />
                    {item.status}
                  </span>
                  <span className="text-xs text-muted-500">{item.category}</span>
                </div>

                <h3 className="font-display text-2xl font-bold leading-tight text-white lg:text-3xl">
                  {item.title}
                </h3>

                <p className="max-w-xl text-sm leading-relaxed text-muted-300">
                  {item.description}
                </p>

                <ul className="flex flex-wrap gap-4">
                  {item.metrics.map((metric) => (
                    <li key={metric} className="text-sm font-semibold text-brand-400">
                      {metric}
                    </li>
                  ))}
                </ul>

                <ul className="flex flex-wrap gap-2">
                  {item.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded border border-white/7 bg-white/4 px-2.5 py-1 text-xs text-muted-300"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <Button href={item.href} className="shrink-0 self-start lg:self-center">
                Смотреть кейс
                <ArrowRight className="size-3.5" />
              </Button>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button href="#contact" variant="outline-dark" size="lg">
            Хочу такой же проект
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
