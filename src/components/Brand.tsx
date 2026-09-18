import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/content/site";

export function BrandLink({ light = false, className = "" }: { light?: boolean; className?: string }) {
  return (
    <Link href="/" className={`brand ${className}`} aria-label={`${siteConfig.name} home`}>
      <Image
        src="/brand/New_logo.png"
        alt={siteConfig.name}
        width={44}
        height={44}
        className="brand-logo h-10 w-10 object-contain"
        priority
      />
      <span className={`leading-tight ${light ? "text-white" : "text-ink"}`}>
        <span className="block text-sm font-extrabold tracking-tight">UHM</span>
        <span className="block text-[10px] font-bold uppercase tracking-[0.18em]">Tech</span>
      </span>
    </Link>
  );
}
