import { Container } from "@/components/site/container";
import { ProjectCard } from "@/components/site/project-card";
import { SectionIntro } from "@/components/site/section-intro";
import { projects } from "@/content/site";

export const metadata = {
  title: "Projects",
  description:
    "Project index for JJ / EXIBIST covering robotics, AI, simulation, systems, and technical interface work.",
};

export default function ProjectsPage() {
  const featured = projects.filter((project) => project.featured);
  const additional = projects.filter((project) => !project.featured);

  return (
    <div className="pb-20 pt-12 sm:pt-16">
      <Container className="space-y-14">
        <SectionIntro
          eyebrow="Projects"
          title="Work organized around engineering problems, not just tools."
          description="Each project is framed by the system problem, the implementation contribution, and why the work matters technically."
        />

        <div className="space-y-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-cyan-200/72">
                Featured
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.05em] text-stone-50">
                Core case studies
              </h2>
            </div>
          </div>
          <div className="grid gap-6 xl:grid-cols-2">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-stone-500">
              Additional work
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.05em] text-stone-50">
              Broader range and future additions
            </h2>
          </div>
          <div className="grid gap-6 xl:grid-cols-2">
            {additional.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
