import { projects } from "@/content/site";

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}

export function getPublishedProjects() {
  return projects.filter((project) => !project.placeholder);
}
