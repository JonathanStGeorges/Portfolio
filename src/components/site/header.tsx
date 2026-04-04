import Link from "next/link";
import { siteConfig } from "@/content/site";
import { Container } from "@/components/site/container";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/leadership", label: "Leadership" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-[color:rgba(10,13,18,0.82)] backdrop-blur-xl">
      <Container className="flex flex-wrap items-center justify-between gap-4 py-4">
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-400/10 font-display text-sm font-semibold tracking-[0.2em] text-cyan-100 transition group-hover:border-cyan-300/40 group-hover:bg-cyan-400/14">
            JJ
          </div>
          <div className="space-y-1">
            <p className="font-display text-sm font-semibold tracking-[0.12em] text-stone-100">
              {siteConfig.name}
            </p>
            <p className="font-mono text-[0.64rem] uppercase tracking-[0.32em] text-stone-400">
              Robotics / AI / Systems
            </p>
          </div>
        </Link>

        <nav className="flex flex-wrap items-center gap-2 text-sm text-stone-300">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 transition hover:bg-white/6 hover:text-stone-50"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-cyan-300/30 bg-cyan-400/10 px-4 py-2 text-cyan-50 transition hover:border-cyan-200/50 hover:bg-cyan-400/16"
          >
            GitHub
          </a>
        </nav>
      </Container>
    </header>
  );
}
