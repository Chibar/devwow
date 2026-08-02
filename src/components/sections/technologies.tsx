import Image from "next/image";

import { asset } from "@/lib/base-path";
import { Container } from "@/components/ui/container";
import { getTechnologies } from "@/lib/api/home";

export async function Technologies() {
  const technologies = await getTechnologies();

  return (
    <section className="bg-surface-dark py-20">
      <Container>
        <p className="eyebrow text-center text-brand-700">
          Наш технологический стек
        </p>

        <ul className="mt-10 grid grid-cols-2 overflow-hidden rounded-[14px] border border-white/5 sm:grid-cols-4 lg:grid-cols-8">
          {technologies.map((tech) => (
            <li
              key={tech.id}
              className="flex flex-col items-center justify-center gap-3 border-b border-r border-white/5 bg-surface-dark px-3 py-8 last:border-r-0"
            >
              <Image
                src={asset(tech.icon)}
                alt=""
                aria-hidden
                width={26}
                height={26}
                className="size-6"
              />
              <span className="text-center text-[11px] leading-snug text-white/35">
                {tech.name}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
