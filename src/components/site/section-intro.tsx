type SectionIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionIntro({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionIntroProps) {
  return (
    <div
      className={`space-y-4 ${
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"
      }`}
    >
      <p className="font-mono text-[0.74rem] uppercase tracking-[0.35em] text-cyan-200/72">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-semibold tracking-[-0.04em] text-stone-50 sm:text-4xl">
        {title}
      </h2>
      <p className="max-w-2xl text-base leading-8 text-stone-300 sm:text-lg">
        {description}
      </p>
    </div>
  );
}
