import { ReactNode } from "react";

type CalloutPanelProps = {
  label: string;
  title: string;
  children: ReactNode;
};

export function CalloutPanel({ label, title, children }: CalloutPanelProps) {
  return (
    <div className="rounded-[2rem] border border-cyan-300/16 bg-cyan-400/[0.06] p-6 sm:p-8">
      <p className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-cyan-200/80">
        {label}
      </p>
      <h3 className="mt-4 font-display text-2xl font-semibold tracking-[-0.04em] text-stone-50 sm:text-3xl">
        {title}
      </h3>
      <div className="mt-5 space-y-4 text-sm leading-7 text-stone-200/92">
        {children}
      </div>
    </div>
  );
}
