import Image from "next/image";
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
    <section className="page-hero relative overflow-hidden">
      <Image
        src="/brand/hero-ai-services.jpg"
        alt=""
        fill
        sizes="100vw"
        className="page-hero-image"
      />
      <div className="page-hero-shade" aria-hidden="true" />
      <div className="container-xl page-hero-content relative">
        <Breadcrumbs items={crumbs} />
        {eyebrow ? <p className="eyebrow mt-6">{eyebrow}</p> : null}
        <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-muted md:text-lg">{description}</p>
      </div>
    </section>
  );
}
