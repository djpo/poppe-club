import { error } from "@sveltejs/kit";
import type { Project } from "$lib/dev-projects-content.ts";
import { devProjects } from "$lib/dev-projects-content.ts";

export function load({ params }): { project: Project } {
  const project = devProjects.find((project) => project.slug === params.slug);

  if (!project) error(404);

  return { project };
}
