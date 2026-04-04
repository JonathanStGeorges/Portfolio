import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/site/badge";
import { Container } from "@/components/site/container";
import { projects } from "@/content/site";
import { getProjectBySlug } from "@/lib/site";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pb-20 pt-12 sm:pt-16">
      <Container className="space-y-10">
        <div className="space-y-5">
          <Link
            href="/projects"
            className="inline-flex rounded-full border border-white/10 px-4 py-2 text-sm text-stone-300 transition hover:border-white/20 hover:bg-white/6 hover:text-stone-100"
          >
            Back to projects
          </Link>
          <div className="flex flex-wrap gap-3">
            <Badge tone="signal">{project.category}</Badge>
            {project.placeholder ? <Badge tone="muted">Placeholder</Badge> : null}
          </div>
          <div className="space-y-4">
            <h1 className="max-w-5xl font-display text-4xl font-semibold tracking-[-0.06em] text-stone-50 sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>
            <p className="max-w-3xl text-base leading-8 text-stone-300 sm:text-lg">
              {project.summary}
            </p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-8">
            {project.image ? (
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.accent}`}
                />
                <div className="relative aspect-[16/10]">
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    fill
                    sizes="(min-width: 1024px) 55vw, 100vw"
                    className="object-cover mix-blend-screen opacity-85"
                  />
                </div>
              </div>
            ) : (
              <div className="hero-grid rounded-[2rem] border border-white/10 bg-white/[0.03] p-10">
                <p className="font-mono text-[0.72rem] uppercase tracking-[0.3em] text-stone-500">
                  Project surface
                </p>
                <p className="mt-8 max-w-xl font-display text-3xl font-semibold tracking-[-0.05em] text-stone-50">
                  {project.significance}
                </p>
              </div>
            )}

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-6">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-cyan-200/72">
                  Problem
                </p>
                <p className="mt-4 text-sm leading-7 text-stone-300">
                  {project.problem}
                </p>
              </div>
              <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-6">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-cyan-200/72">
                  Contribution
                </p>
                <p className="mt-4 text-sm leading-7 text-stone-300">
                  {project.contribution}
                </p>
              </div>
            </div>

            <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-6">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-cyan-200/72">
                Why it matters
              </p>
              <p className="mt-4 text-sm leading-7 text-stone-300">
                {project.significance}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-6">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-stone-500">
                Roles
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-stone-300">
                {project.roles.map((role) => (
                  <li key={role} className="flex gap-3">
                    <span className="mt-3 h-1.5 w-1.5 rounded-full bg-cyan-200" />
                    <span>{role}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-6">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-stone-500">
                Stack
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-stone-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-6">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-stone-500">
                Domains
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.domains.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-stone-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-6">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-stone-500">
                Artifacts
              </p>
              <div className="mt-4 space-y-3">
                {project.artifacts.map((artifact) =>
                  artifact.href ? (
                    <a
                      key={artifact.label}
                      href={artifact.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between border-b border-white/10 py-3 text-sm text-stone-200 transition hover:text-cyan-50"
                    >
                      <span>{artifact.label}</span>
                      <span className="font-mono text-[0.66rem] uppercase tracking-[0.28em] text-stone-500">
                        open
                      </span>
                    </a>
                  ) : (
                    <div
                      key={artifact.label}
                      className="border-b border-white/10 py-3 text-sm text-stone-300"
                    >
                      <div className="text-stone-100">{artifact.label}</div>
                      {artifact.note ? (
                        <div className="mt-1 text-stone-500">{artifact.note}</div>
                      ) : null}
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
