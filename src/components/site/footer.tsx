import { siteConfig } from "@/content/site";
import { Container } from "@/components/site/container";

export function Footer() {
  return (
    <footer className="border-t border-white/8 py-12">
      <Container className="grid gap-8 md:grid-cols-[1.3fr_1fr] md:items-end">
        <div className="space-y-4">
          <p className="font-display text-2xl font-semibold tracking-[-0.04em] text-stone-100">
            Built to show the shape of the work, not just a list of tools.
          </p>
          <p className="max-w-2xl text-sm leading-7 text-stone-400">
            The portfolio is intentionally data-driven so projects, links, and
            leadership notes can be updated without rewriting the layout.
          </p>
        </div>

        <div className="space-y-3 md:justify-self-end md:text-right">
          {siteConfig.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
              className="block text-sm text-stone-300 transition hover:text-cyan-100"
            >
              {link.label}
              {link.note ? (
                <span className="ml-2 text-stone-500">{link.note}</span>
              ) : null}
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}
