export const siteConfig = {
  name: "UHM Tech",
  shortName: "UHM",
  tagline: "Technology, automation, and intelligent solutions for modern businesses.",
  description:
    "UHM Tech helps businesses automate operations, implement CRM platforms, build software and SaaS products, integrate systems, and deliver professional customer experiences.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://uhmtech.com",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@uhmtech.com",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "",
  address: process.env.NEXT_PUBLIC_CONTACT_ADDRESS ?? "",
  hours: "Monday – Friday, 9:00 AM – 6:00 PM (local time)",
  social: {
    linkedin: "",
    twitter: "",
    github: "https://github.com/1234usamas",
  },
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services", mega: true },
  { href: "/solutions", label: "Solutions" },
  { href: "/industries", label: "Industries" },
  { href: "/products", label: "Products" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/technologies", label: "Tech" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;
