type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
}: SectionHeadingProps) {
  const titleClass = tone === "dark" ? "text-white" : "text-brand-navy";
  const descriptionClass = tone === "dark" ? "text-slate-200" : "text-slate-600";

  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? (
        <p className="text-sm font-bold uppercase tracking-wide text-brand-orange">
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`mt-3 text-2xl font-bold sm:text-3xl ${titleClass}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-base leading-8 ${descriptionClass}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
