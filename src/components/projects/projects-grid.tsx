"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";

import { asset } from "@/lib/base-path";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/cn";
import type { Project, ProjectCategory } from "@/lib/types";

export function ProjectsGrid({
  title,
  categories,
  projects,
}: {
  title: string;
  categories: ProjectCategory[];
  projects: Project[];
}) {
  const [activeId, setActiveId] = useState(categories[0]?.id ?? "all");

  const visible = useMemo(
    () =>
      activeId === "all"
        ? projects
        : projects.filter((project) => project.categoryId === activeId),
    [activeId, projects],
  );

  return (
    <section className="bg-surface-light pb-28">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="font-display text-2xl font-extrabold text-surface-dark">
            {title}
          </h2>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const isActive = category.id === activeId;

              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveId(category.id)}
                  aria-pressed={isActive}
                  className={cn(
                    "rounded-lg border px-5 py-2.5 text-sm font-semibold transition-colors",
                    isActive
                      ? "border-brand-900 bg-brand-900 text-white shadow-[0_4px_16px_0_rgba(0,98,112,0.22)]"
                      : "border-brand-700/35 text-muted-500 hover:border-brand-700 hover:text-brand-900",
                  )}
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => (
            <article
              key={project.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-brand-700/18 bg-white shadow-[0_4px_20px_0_rgba(0,98,112,0.06)]"
            >
              <div className="relative h-[220px] shrink-0">
                <Image
                  src={asset(project.visual)}
                  alt=""
                  aria-hidden
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />

                <span
                  className={cn(
                    "absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold",
                    project.inProgress
                      ? "border border-brand-700 bg-brand-700/20 text-brand-700"
                      : "bg-brand-400 text-ink",
                  )}
                >
                  <span
                    aria-hidden
                    className={cn(
                      "size-1.5 rounded-full",
                      project.inProgress ? "bg-brand-700" : "bg-black/30",
                    )}
                  />
                  {project.status}
                </span>

                <span className="absolute right-4 top-4 text-xs text-muted-200">
                  {project.year}
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-4 p-7">
                <div>
                  <p className="text-xs text-brand-700">{project.category}</p>
                  <h3 className="mt-1.5 font-display text-xl font-bold text-surface-dark">
                    {project.name}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-500">
                    {project.description}
                  </p>
                </div>

                <ul className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-lg border border-brand-900/15 bg-brand-900/6 px-2.5 py-1 text-xs text-brand-900"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto border-t border-brand-700/12 pt-4">
                  <Link
                    href={project.href}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-900 transition-colors hover:text-brand-700"
                  >
                    Смотреть кейс
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {visible.length === 0 ? (
          <p className="mt-12 text-center text-sm text-muted-500">
            В этой категории пока нет проектов.
          </p>
        ) : null}
      </Container>
    </section>
  );
}
