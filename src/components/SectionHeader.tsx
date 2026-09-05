export function SectionHeader({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? <p className="eyebrow justify-center">{eyebrow}</p> : null}
      <h2 className={`mt-3 text-3xl font-extrabold tracking-tight md:text-4xl ${light ? "text-white" : "text-ink"}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-base leading-7 md:text-lg ${light ? "text-white/75" : "text-muted"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
