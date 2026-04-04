import { CalloutPanel } from "@/components/site/callout-panel";
import { Container } from "@/components/site/container";
import { ExperienceCard } from "@/components/site/experience-card";
import { SectionIntro } from "@/components/site/section-intro";
import { experience } from "@/content/site";

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
              deterministic simulation work, scouting and vision tooling, and
              other support systems. That range is part of the credibility.
            </p>
          </CalloutPanel>
        </div>
      </Container>
    </div>
  );
}
