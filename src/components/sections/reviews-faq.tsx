import { ArrowRight, Star } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { getFaq, getReviews } from "@/lib/api/home";

export async function ReviewsFaq() {
  const [reviews, faq] = await Promise.all([getReviews(), getFaq()]);

  return (
    <section className="bg-surface-light py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow text-brand-700">Что говорят клиенты</p>
            <h2 className="mt-4 font-display text-4xl font-extrabold text-surface-dark lg:text-5xl">
              Отзывы
            </h2>

            <div className="mt-10 flex flex-col gap-5">
              {reviews.map((review) => (
                <figure
                  key={review.id}
                  className="flex flex-col gap-5 rounded-[14px] border border-brand-700/18 bg-white p-7 shadow-[0_4px_24px_0_rgba(0,98,112,0.06)]"
                >
                  <div className="flex gap-1">
                    {Array.from({ length: review.rating }).map((_, index) => (
                      <Star
                        key={index}
                        className="size-4 fill-brand-400 text-brand-400"
                      />
                    ))}
                  </div>

                  <blockquote className="text-sm italic leading-relaxed text-surface-dark">
                    «{review.quote}»
                  </blockquote>

                  <figcaption className="flex items-center gap-3 border-t border-brand-700/10 pt-3">
                    <span className="brand-gradient flex size-9 items-center justify-center rounded-full font-display text-sm font-bold text-white">
                      {review.monogram}
                    </span>
                    <span>
                      <span className="block font-display text-sm font-semibold text-surface-dark">
                        {review.author}
                      </span>
                      <span className="block text-xs text-muted-500">
                        {review.position}
                      </span>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>

            <Button href="#contact" className="mt-8">
              Обсудить мой проект
              <ArrowRight className="size-3.5" />
            </Button>
          </div>

          <div>
            <p className="eyebrow text-brand-700">Частые вопросы</p>
            <h2 className="mt-4 font-display text-4xl font-extrabold text-surface-dark lg:text-5xl">
              FAQ
            </h2>

            <FaqAccordion items={faq} className="mt-10" />
          </div>
        </div>
      </Container>
    </section>
  );
}
