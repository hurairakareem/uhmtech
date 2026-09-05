import Link from "next/link";

type CtaProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export function Cta({ href, children, variant = "primary", className = "" }: CtaProps) {
  const style =
    variant === "primary" ? "btn-primary" : variant === "ghost" ? "btn-ghost" : "btn-secondary";
  return (
    <Link href={href} className={`btn ${style} ${className}`}>
      {children}
    </Link>
  );
}
