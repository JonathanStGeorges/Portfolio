import { Badge } from "@/components/site/badge";
import type { ExperienceEntry } from "@/content/site";

type ExperienceCardProps = {
  entry: ExperienceEntry;
};

export function ExperienceCard({ entry }: ExperienceCardProps) {
  return (
    <article className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 sm:p-8">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr]">
        <div className="space-y-5">
          <Badge tone="signal">{entry.period}</Badge>
          <div className="space-y-3">
            <h3 className="font-display text-3xl font-semibold tracking-[-0.05em] text-stone-50">
              {entry.title}
            </h3>
            <p className="font-mono text-[0.72rem] uppercase tracking-[0.32em] text-stone-500">
              {entry.organization}
            </p>
            <p className="text-sm leading-7 text-stone-300">{entry.summary}</p>
          </div>

          <div className="space-y-3">
            {entry.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
                className="block text-sm text-cyan-100 transition hover:text-cyan-50"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-stone-500">
              Responsibilities
            </p>
            <ul className="space-y-3 text-sm leading-7 text-stone-300">
              {entry.responsibilities.map((responsibility) => (
                <li key={responsibility} className="flex gap-3">
                  <span className="mt-3 h-1.5 w-1.5 rounded-full bg-cyan-200" />
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-stone-500">
              Public evidence
            </p>
            <ul className="space-y-3 text-sm leading-7 text-stone-300">
              {entry.evidence.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-3 h-1.5 w-1.5 rounded-full bg-white/35" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}
