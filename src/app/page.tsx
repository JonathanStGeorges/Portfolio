import Link from "next/link";
import { Badge } from "@/components/site/badge";
import { CalloutPanel } from "@/components/site/callout-panel";
import { Container } from "@/components/site/container";
import { ExperienceCard } from "@/components/site/experience-card";
import { ProjectCard } from "@/components/site/project-card";
import { SectionIntro } from "@/components/site/section-intro";
import { experience, focusAreas, principles, siteConfig } from "@/content/site";
import { getFeaturedProjects } from "@/lib/site";

const featuredProjects = getFeaturedProjects();

export default function Home() {
  return (
    <div className="pb-20">
      <section className="pt-10 sm:pt-16">
        <Container>
          <div className="surface hero-grid fade-rise overflow-hidden rounded-[2.25rem] px-6 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
            <div className="grid gap-12 lg:grid-cols-[1.25fr_0.9fr] lg:items-end">
              <div className="space-y-8">
                <div className="flex flex-wrap gap-3">
                  <Badge tone="signal">{siteConfig.role}</Badge>
                  <Badge>{siteConfig.locationLabel}</Badge>
                </div>

                <div className="space-y-5">
                  <p className="font-mono text-[0.72rem] uppercase tracking-[0.36em] text-cyan-100/70">
                    {siteConfig.name}
                  </p>
                  <h1 className="max-w-4xl font-display text-5xl font-semibold tracking-[-0.07em] text-stone-50 sm:text-6xl lg:text-7xl">
                    {siteConfig.headline}
                  </h1>
                  <p className="max-w-3xl text-base leading-8 text-stone-300 sm:text-lg">
                    {siteConfig.shortIntro}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/projects"
                    className="rounded-full border border-cyan-300/30 bg-cyan-400/10 px-5 py-3 text-sm font-medium text-cyan-50 transition hover:border-cyan-200/50 hover:bg-cyan-400/16"
                  >
                    Explore projects
                  </Link>
                  <Link
                    href="/leadership"
                    className="rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-stone-100 transition hover:border-white/20 hover:bg-white/6"
                  >
                    See leadership context
                  </Link>
                </div>
              </div>

              <div className="fade-rise-delay grid gap-4">
                <div className="rounded-[1.75rem] border border-white/10 bg-black/18 p-6">
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-stone-500">
                    Operating range
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {[
                      "robotics software",
                      "AI / ML",
                      "simulation",
                      "vision",
                      "systems design",
                      "technical UI",
                    ].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 px-3 py-1 text-xs text-stone-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-[1.75rem] border border-white/10 bg-black/18 p-6">
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-stone-500">
                    Current signal
                  </p>
                  <div className="mt-4 space-y-4 text-sm leading-7 text-stone-300">
                    <p>
                      Public team software work across FRC 1884 repositories,
                      plus independent systems and ML projects built outside the
                      season cycle.
                    </p>
                    <p>
                      Strongest through-line: architecture choices that make
                      hard systems easier to run, reason about, and extend.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="pt-18 sm:pt-24">
        <Container>
          <SectionIntro
            eyebrow="Focus areas"
            title="The work spans hardware-adjacent software, model research, simulation platforms, and technical interfaces."
            description="The portfolio is organized around engineering surfaces that reinforce each other rather than around a generic skill list."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {focusAreas.map((focus) => (
              <div
                key={focus.label}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5"
              >
                <p className="font-display text-xl font-semibold tracking-[-0.04em] text-stone-50">
                  {focus.label}
                </p>
                <p className="mt-3 text-sm leading-7 text-stone-300">
                  {focus.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="pt-18 sm:pt-24">
        <Container>
          <div className="section-divider mb-10" />
          <SectionIntro
            eyebrow="Featured work"
            title="Selected projects that show range, depth, and technical intent."
            description="These projects were chosen to show robotics leadership, ML research, deterministic simulation, and vision tooling without flattening everything into a generic gallery."
          />
          <div className="mt-10 grid gap-6 xl:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                priority={index < 2}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="pt-18 sm:pt-24">
        <Container>
          <SectionIntro
            eyebrow="Leadership"
            title="Technical credibility is stronger when it comes with shared responsibility."
            description="The team context matters because it shows work done inside a real collaborative environment, with deployment pressure, operator needs, and public code surfaces."
          />
          <div className="mt-10">
            <ExperienceCard entry={experience[0]} />
          </div>
        </Container>
      </section>

      <section className="pt-18 sm:pt-24">
        <Container className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="space-y-10">
            <SectionIntro
              eyebrow="How I work"
              title="I care about how systems are structured, how they are used, and whether they survive contact with reality."
              description="That usually means thinking past the main algorithm and into the deployment path, review flow, debugging surface, and interface quality."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {principles.map((principle) => (
                <div
                  key={principle.title}
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5"
                >
                  <p className="font-display text-xl font-semibold tracking-[-0.04em] text-stone-50">
                    {principle.title}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-stone-300">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <CalloutPanel
            label="Contact / links"
            title="GitHub is the clearest place to see the code surface right now."
          >
            <p>
              The site is built to make future additions easy. Public writeups,
              resume links, demos, or papers can be added without changing the
              visual structure.
            </p>
            <div className="pt-2">
              {siteConfig.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noreferrer" : undefined}
                  className="flex items-center justify-between border-b border-white/10 py-3 text-sm text-stone-200 transition hover:text-cyan-50"
                >
                  <span>{link.label}</span>
                  <span className="font-mono text-[0.66rem] uppercase tracking-[0.28em] text-stone-500">
                    {link.note ?? "open"}
                  </span>
                </a>
              ))}
            </div>
          </CalloutPanel>
        </Container>
      </section>
    </div>
  );
}
