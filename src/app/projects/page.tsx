import { Container } from "@/components/site/container";
import { ProjectCard } from "@/components/site/project-card";
import { SectionIntro } from "@/components/site/section-intro";
import {
  personalRepositoryCatalog,
  supportingRepositories,
  teamRepositoryCatalog,
} from "@/content/site";
import { getProjectsByBucket } from "@/lib/site";

export const metadata = {
  title: "Projects",
  description:
    "Project index for JJ / EXIBIST covering robotics, AI, simulation, systems, and technical interface work.",
};

export default function ProjectsPage() {
  const groupedProjects = getProjectsByBucket().filter(
    (group) => group.projects.length > 0,
  );

  return (
    <div className="pb-20 pt-12 sm:pt-16">
      <Container className="space-y-14">
        <SectionIntro
          eyebrow="Projects"
          title="GitHub-backed work organized by where it sits in the engineering stack."
          description="The portfolio now separates team software, research, AI and vision work, simulation, and infrastructure so the overall footprint reads as a real build history instead of a flat list."
        />

        {groupedProjects.map((group) => (
          <div key={group.bucket} className="space-y-8">
            <div>
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-cyan-200/72">
                {group.bucket}
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.05em] text-stone-50">
                {group.bucket === "Team Software / Leadership"
                  ? "Shared robotics software and team tooling"
                  : group.bucket === "Research"
                    ? "Deep technical study and model work"
                    : group.bucket === "AI / Vision"
                      ? "Vision systems and interactive ML tooling"
                      : group.bucket === "Simulation / Engines"
                        ? "Simulation architecture and engine-oriented systems"
                        : "Templates, planning tools, and software infrastructure"}
              </h2>
            </div>
            <div className="grid gap-6 xl:grid-cols-2">
              {group.projects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        ))}

        <div className="space-y-6">
          <div className="section-divider" />
          <div>
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-stone-500">
              Supporting repositories
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.05em] text-stone-50">
              Additional GitHub surface worth knowing about
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-stone-300">
              These repos expand the footprint without needing full case-study treatment.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {supportingRepositories.map((repo) => (
              <a
                key={repo.name}
                href={repo.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-5 transition hover:border-cyan-300/25 hover:bg-white/[0.05]"
              >
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full border border-white/10 px-3 py-1 text-[0.65rem] uppercase tracking-[0.22em] text-stone-200">
                    {repo.category}
                  </span>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-[0.65rem] uppercase tracking-[0.22em] text-stone-400">
                    {repo.ownership === "team" ? "Team repo" : "Personal repo"}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-2xl font-semibold tracking-[-0.04em] text-stone-50">
                  {repo.name}
                </h3>
                <p className="mt-3 text-sm leading-7 text-stone-300">
                  {repo.summary}
                </p>
                <p className="mt-3 text-xs leading-6 text-stone-500">
                  {repo.sourceNote}
                </p>
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="section-divider" />
          <div>
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-stone-500">
              Complete repository catalog
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.05em] text-stone-50">
              Every verified public repo, grouped by account
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-stone-300">
              The curated case studies stay at the top, but nothing is omitted
              from the public GitHub surface. These catalog sections include the
              rest of the verified personal and team repositories.
            </p>
          </div>

          {[
            {
              title: "Personal GitHub",
              count: personalRepositoryCatalog.length,
              repos: personalRepositoryCatalog,
            },
            {
              title: "FRC1884 organization",
              count: teamRepositoryCatalog.length,
              repos: teamRepositoryCatalog,
            },
          ].map((group) => (
            <details
              key={group.title}
              className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-6"
            >
              <summary className="cursor-pointer list-none">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="font-display text-2xl font-semibold tracking-[-0.04em] text-stone-50">
                      {group.title}
                    </p>
                    <p className="mt-2 text-sm text-stone-400">
                      {group.count} verified repositories
                    </p>
                  </div>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.22em] text-stone-300">
                    Expand
                  </span>
                </div>
              </summary>

              <div className="mt-6 grid gap-3">
                {group.repos.map((repo) => (
                  <a
                    key={repo.name}
                    href={repo.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-[1.1rem] border border-white/10 bg-black/12 p-4 transition hover:border-cyan-300/25 hover:bg-white/[0.04]"
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-display text-xl font-semibold tracking-[-0.04em] text-stone-50">
                        {repo.name}
                      </span>
                      <span className="rounded-full border border-white/10 px-2.5 py-1 text-[0.62rem] uppercase tracking-[0.2em] text-stone-400">
                        {repo.language}
                      </span>
                      <span className="rounded-full border border-white/10 px-2.5 py-1 text-[0.62rem] uppercase tracking-[0.2em] text-stone-500">
                        Updated {repo.updatedAt}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-7 text-stone-300">
                      {repo.description ||
                        "Public repository in the verified GitHub account. No public description is currently set."}
                    </p>
                  </a>
                ))}
              </div>
            </details>
          ))}
        </div>
      </Container>
    </div>
  );
}
