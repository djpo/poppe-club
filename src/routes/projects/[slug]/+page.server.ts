import { error } from "@sveltejs/kit";
import { projects } from "../../projects-content.ts";
import type { Project } from "../../projects-content.ts";

export function load({ params }): { project: Project } {
  const project = projects.find((project) => project.slug === params.slug);

  if (!project) error(404);

  return { project };
}
