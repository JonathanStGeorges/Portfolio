import { CalloutPanel } from "@/components/site/callout-panel";
import { Container } from "@/components/site/container";
import { ExperienceCard } from "@/components/site/experience-card";
import { SectionIntro } from "@/components/site/section-intro";
import { experience, supportingRepositories } from "@/content/site";

export const metadata = {
  title: "Leadership",
  description:
    "Leadership and team engineering context for JJ / EXIBIST within ASL Robotics / FRC Team 1884.",
};

export default function LeadershipPage() {
  return (
    <div className="pb-20 pt-12 sm:pt-16">
      <Container className="space-y-14">
        <SectionIntro
          eyebrow="Leadership"
          title="The portfolio is grounded in team responsibility, not just solo experiments."
          description="This section exists to show that the engineering work lives inside collaborative systems with real deadlines, public repos, and operator-facing consequences."
        />

        <ExperienceCard entry={experience[0]} />

        <div className="grid gap-6 lg:grid-cols-3">
          <CalloutPanel
            label="Repository practice"
            title="GitHub as engineering surface"
          >
            <p>
              Code review, structure, branching discipline, and public repo
              hygiene are part of the work. The point is not just to ship code,
              but to keep the codebase usable for the rest of the team.
            </p>
          </CalloutPanel>

          <CalloutPanel
            label="Operator reality"
            title="Software has to work under time pressure"
          >
            <p>
              Robot software and its supporting tools are only valuable if they
              help people make correct decisions quickly. That pressure changes
              how interfaces, diagnostics, and abstractions should be designed.
            </p>
          </CalloutPanel>

          <CalloutPanel
            label="Technical range"
            title="Leadership is broader than a single robot repo"
          >
            <p>
              The public FRC1884 surface already spans season robot code,
              PathPlanA autonomous tooling, deterministic simulation work,
              scouting and strategy software, and operations support systems.
              That range is part of the credibility.
            </p>
          </CalloutPanel>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 sm:p-8">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-cyan-200/72">
              Toolchain context
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.05em] text-stone-50">
              PathPlanner is part of the stack. PathPlanA is a distinct team repo.
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-7 text-stone-300">
              <p>
                The preseason and 2025 robot-code READMEs explicitly credit
                PathPlanner + PathPlannerLib, Choreo, and maple-sim in the 1884
                software stack.
              </p>
              <p>
                The 2026-era codebase also has a separate team planner repo:
                PathPlanA. Its integration docs show a deploy-backed flow where
                autos are authored in Flutter, exported into the Season2026
                deploy tree, previewed on the operator board, and then executed
                through the robot’s existing auto-align queue.
              </p>
              <p>
                That is the accurate relationship: upstream PathPlanner is a
                credited dependency in the team stack, while PathPlanA is
                team-specific planning tooling that fits around that workflow.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {experience[0].stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs text-stone-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 sm:p-8">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-stone-500">
              Supporting team repos
            </p>
            <div className="mt-4 space-y-4">
              {supportingRepositories
                .filter((repo) => repo.ownership === "team")
                .map((repo) => (
                  <a
                    key={repo.name}
                    href={repo.href}
                    target="_blank"
                    rel="noreferrer"
                    className="block rounded-[1.2rem] border border-white/10 p-4 transition hover:border-cyan-300/25 hover:bg-white/[0.03]"
                  >
                    <p className="font-display text-xl font-semibold tracking-[-0.04em] text-stone-50">
                      {repo.name}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-stone-300">
                      {repo.summary}
                    </p>
                  </a>
                ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
