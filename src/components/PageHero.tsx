import { Breadcrumbs } from "@/components/Breadcrumbs";

export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  crumbs: { name: string; href: string }[];
}) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-paper">
      <div className="circuit pointer-events-none absolute inset-0 opacity-50" />
      <div className="container-xl relative py-14 md:py-20">
        <Breadcrumbs items={crumbs} />
        {eyebrow ? <p className="eyebrow mt-6">{eyebrow}</p> : null}
        <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-muted md:text-lg">{description}</p>
      </div>
    </section>
  );
}
