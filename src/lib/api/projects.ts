import { projectsPage } from "@/lib/mock/projects";
import { apiFetch, isApiEnabled } from "@/lib/api/client";
import type { ProjectsPage } from "@/lib/types";

/** Данные страницы «Проекты» — тот же контракт, что и у остальных страниц. */
export function getProjectsPage(): Promise<ProjectsPage> {
  if (!isApiEnabled) return Promise.resolve(projectsPage);
  return apiFetch<ProjectsPage>("/projects-page", { revalidate: 300 });
}
