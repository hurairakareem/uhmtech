import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/content/site";

export function BrandLink({ light = false, className = "" }: { light?: boolean; className?: string }) {
  return (
    <Link href="/" className={`brand ${className}`} aria-label={`${siteConfig.name} home`}>
      <Image
        src="/brand/New_logo.png"
        alt={siteConfig.name}
        width={82}
        height={124}
        className="brand-logo h-12 w-auto object-contain"
        priority
      />
    </Link>
  );
}
