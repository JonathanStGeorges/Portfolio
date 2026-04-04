import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/site/badge";
import type { ProjectEntry } from "@/content/site";

type ProjectCardProps = {
  project: ProjectEntry;
  priority?: boolean;
};

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  return (
    <article className="project-card group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.035]">
      <div className="relative overflow-hidden border-b border-white/8">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-90`}
        />
        {project.image ? (
          <div className="relative aspect-[16/10]">
            <Image
              src={project.image.src}
              alt={project.image.alt}
              fill
              priority={priority}
              sizes="(min-width: 1280px) 40vw, (min-width: 768px) 44vw, 100vw"
              className="object-cover mix-blend-screen opacity-80 transition duration-500 group-hover:scale-[1.02]"
            />
          </div>
        ) : (
          <div className="relative aspect-[16/10] overflow-hidden">
            <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(140,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(140,255,255,0.08)_1px,transparent_1px)] [background-size:44px_44px]" />
            <div className="absolute inset-x-8 top-8 flex items-center justify-between text-[0.65rem] uppercase tracking-[0.26em] text-stone-200/70">
              <span>{project.category}</span>
              <span>{project.domains[0]}</span>
            </div>
            <div className="absolute bottom-8 left-8 right-8">
              <p className="font-display text-2xl font-semibold tracking-[-0.05em] text-stone-50">
                {project.title}
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-5 p-6">
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            <Badge tone={project.placeholder ? "muted" : "signal"}>
              {project.category}
            </Badge>
            {project.placeholder ? <Badge tone="muted">Placeholder</Badge> : null}
          </div>
          <div className="space-y-2">
            <h3 className="font-display text-2xl font-semibold tracking-[-0.04em] text-stone-50">
              {project.title}
            </h3>
            <p className="text-sm leading-7 text-stone-300">{project.summary}</p>
          </div>
        </div>

        <div className="space-y-3">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-stone-500">
            Domains
          </p>
          <div className="flex flex-wrap gap-2">
            {project.domains.map((domain) => (
              <span
                key={domain}
                className="rounded-full border border-white/10 px-3 py-1 text-xs text-stone-300"
              >
                {domain}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-auto flex items-center justify-between gap-4 pt-2">
          <div className="text-xs uppercase tracking-[0.24em] text-stone-500">
            {project.stack.slice(0, 3).join(" / ")}
          </div>
          <Link
            href={`/projects/${project.slug}`}
            className="rounded-full border border-white/10 px-4 py-2 text-sm text-stone-100 transition hover:border-cyan-300/30 hover:bg-cyan-400/10 hover:text-cyan-50"
          >
            View project
          </Link>
        </div>
      </div>
    </article>
  );
}
