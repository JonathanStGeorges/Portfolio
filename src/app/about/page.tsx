import { Container } from "@/components/site/container";
import { SectionIntro } from "@/components/site/section-intro";
import { focusAreas, principles, siteConfig } from "@/content/site";

export const metadata = {
  title: "About",
  description:
    "About JJ / EXIBIST: robotics, AI, systems design, and design-aware engineering.",
};

export default function AboutPage() {
  return (
    <div className="pb-20 pt-12 sm:pt-16">
      <Container className="space-y-16">
        <SectionIntro
          eyebrow="About"
          title="Engineer, student, and systems-minded builder working where robotics, software, and interface design overlap."
          description="The work is less about isolated apps and more about technical systems that have to be understood, used, and maintained by real people under real constraints."
        />

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 sm:p-8">
            <div className="space-y-6 text-base leading-8 text-stone-300">
              <p>
                {siteConfig.name} works across robotics software, machine
                learning, simulation architecture, and product-style technical
                interfaces. The through-line is architecture: how codebases are
                organized, how tools are shaped for operators or teammates, and
                how a system holds up once it has to do more than demo well.
              </p>
              <p>
                In robotics, that means thinking about subsystem boundaries,
                state flow, dashboards, diagnostics, and collaboration inside a
                shared team repo. In ML and research work, it means building the
                pipeline around the model instead of pretending the model is the
                whole product. In simulation and tooling, it means caring about
                determinism, contracts, replayability, and the surfaces other
                engineers will actually touch.
              </p>
              <p>
                Design is part of that engineering practice, not decoration
                layered on later. A good technical UI reduces mistakes, speeds
                up understanding, and makes a system more useful the moment it
                leaves the author’s laptop.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-cyan-300/16 bg-cyan-400/[0.06] p-6 sm:p-8">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-cyan-100/75">
              Working style
            </p>
            <div className="mt-5 space-y-4 text-sm leading-7 text-stone-200">
              <p>Architectural thinking over isolated script-writing.</p>
              <p>Comfortable moving between code, tooling, interface, and workflow.</p>
              <p>Strong bias toward reusable systems and clearer project structure.</p>
              <p>Interested in difficult surfaces: robotics, simulation, vision, and ML.</p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
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

        <div className="grid gap-4 lg:grid-cols-2">
          {principles.map((principle) => (
            <div
              key={principle.title}
              className="rounded-[1.6rem] border border-white/10 bg-black/18 p-6"
            >
              <p className="font-display text-2xl font-semibold tracking-[-0.04em] text-stone-50">
                {principle.title}
              </p>
              <p className="mt-3 text-sm leading-7 text-stone-300">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
