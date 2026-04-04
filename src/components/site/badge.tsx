import { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  tone?: "default" | "signal" | "muted";
};

export function Badge({ children, tone = "default" }: BadgeProps) {
  const toneClass =
    tone === "signal"
      ? "border-cyan-300/35 bg-cyan-400/10 text-cyan-100"
      : tone === "muted"
        ? "border-white/10 bg-white/5 text-stone-300"
        : "border-white/12 bg-white/6 text-stone-100";

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-[0.68rem] font-medium uppercase tracking-[0.28em] ${toneClass}`}
    >
      {children}
    </span>
  );
}
