import { projects } from "@/content/site";

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}

export function getPublishedProjects() {
  return projects;
}

export function getProjectsByBucket() {
  const order = [
    "Team Software / Leadership",
    "Research",
    "AI / Vision",
    "Simulation / Engines",
    "Tools / Infrastructure",
  ] as const;

  return order.map((bucket) => ({
    bucket,
    projects: projects.filter((project) => project.bucket === bucket),
  }));
}
