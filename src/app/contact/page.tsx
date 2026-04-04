import { CalloutPanel } from "@/components/site/callout-panel";
import { Container } from "@/components/site/container";
import { SectionIntro } from "@/components/site/section-intro";
import { siteConfig } from "@/content/site";

export const metadata = {
  title: "Contact",
  description:
    "Contact and public code links for JJ / EXIBIST, including GitHub and FRC Team 1884 repositories.",
};

export default function ContactPage() {
  return (
    <div className="pb-20 pt-12 sm:pt-16">
      <Container className="space-y-12">
        <SectionIntro
          eyebrow="Contact"
          title="The clearest current endpoints are the code surfaces."
          description="GitHub is the primary contact surface today. The portfolio is structured so email, resume, and additional profiles can be added later without changing the layout."
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 sm:p-8">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-stone-500">
              Available links
            </p>
            <div className="mt-4">
              {siteConfig.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noreferrer" : undefined}
                  className="flex items-center justify-between border-b border-white/10 py-4 text-sm text-stone-200 transition hover:text-cyan-50"
                >
                  <span>{link.label}</span>
                  <span className="font-mono text-[0.66rem] uppercase tracking-[0.28em] text-stone-500">
                    {link.note ?? "open"}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <CalloutPanel
            label="Maintainer note"
            title="Future contact fields are expected."
          >
            <p>
              This site intentionally avoids fake placeholders for email or
              resume URLs. Add those links later in
              <code className="mx-1 rounded bg-black/20 px-2 py-1 font-mono text-[0.82em]">
                src/content/site.ts
              </code>
              when the public endpoints are ready.
            </p>
          </CalloutPanel>
        </div>
      </Container>
    </div>
  );
}
