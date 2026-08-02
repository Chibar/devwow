import type { Metadata } from "next";

import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooterSection } from "@/components/layout/site-footer";
import { ProjectsHero } from "@/components/projects/projects-hero";
import { ProjectsGrid } from "@/components/projects/projects-grid";
import { ProjectsCta } from "@/components/projects/projects-cta";
import { getProjectsPage } from "@/lib/api/projects";

export const metadata: Metadata = {
  title: "Проекты — DEV Studio",
  description:
    "Наши проекты: веб-платформы, мобильные приложения и интеграции. Каждый проект — решение конкретной бизнес-задачи.",
};

export default async function ProjectsPage() {
  const page = await getProjectsPage();

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <ProjectsHero data={page.hero} />
        <ProjectsGrid
          title={page.listTitle}
          categories={page.categories}
          projects={page.projects}
        />
        <ProjectsCta data={page.cta} />
      </main>
      <SiteFooterSection />
    </>
  );
}
