import { Container } from "@/components/ui/container";
import { SubscribeForm } from "@/components/blog/subscribe-form";
import type { SubscribeBlock } from "@/lib/types";

/** Столбик двоичных цифр справа — декор из макета. */
const binaryColumn = ["01", "10", "11", "00", "01", "10"];

export function Subscribe({ data }: { data: SubscribeBlock }) {
  return (
    <section className="bg-surface-dark py-28">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-brand-700/28 bg-ink px-6 py-20 sm:px-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 15% 50%, rgba(0, 98, 112, 0.1) 0%, rgba(0, 0, 0, 0) 60%), radial-gradient(circle at 85% 50%, rgba(0, 224, 199, 0.05) 0%, rgba(0, 0, 0, 0) 60%)",
            }}
          />

          <div
            aria-hidden
            className="pointer-events-none absolute right-16 top-20 hidden flex-col font-bold leading-none tracking-[0.3em] text-brand-700/5 lg:flex lg:text-[60px]"
          >
            {binaryColumn.map((pair, index) => (
              <span key={index}>{pair}</span>
            ))}
          </div>

          <div className="relative max-w-2xl">
            <p className="text-xs uppercase tracking-[0.22em] text-brand-700">
              {data.eyebrow}
            </p>

            <h2 className="mt-6 font-display text-3xl font-extrabold leading-[1.25] tracking-tight text-white sm:text-4xl lg:text-[56px]">
              {data.titleLead}
              <span className="text-brand-400">{data.titleAccent}</span>
            </h2>

            <p className="mt-4 text-base leading-relaxed text-muted-300">
              {data.description}
            </p>

            <div className="mt-10">
              <SubscribeForm
                placeholder={data.placeholder}
                submitLabel={data.submitLabel}
              />
            </div>

            <p className="mt-4 text-xs text-muted-600">{data.disclaimer}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
