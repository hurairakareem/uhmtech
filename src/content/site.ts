export const siteConfig = {
  name: "UHM Tech",
  shortName: "UHM",
  tagline: "Technology, automation, and intelligent solutions for modern businesses.",
  description:
    "UHM Tech helps businesses automate operations, implement CRM platforms, build software and SaaS products, integrate systems, and deliver professional customer experiences.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://uhmtech.com",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "info@uhmtech.com",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "03080007173",
  phoneHref: `+92${(process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "03080007173").replace(/\D/g, "").replace(/^0/, "")}`,
  address: process.env.NEXT_PUBLIC_CONTACT_ADDRESS ?? "24 Blue Avenue, Islamabad, Pakistan",
  hours: "Monday – Friday, 9:00 AM – 6:00 PM (local time)",
  social: {
    linkedin: "https://www.linkedin.com/company/uhm-tech/",
    twitter: "https://x.com/uhmtech",
    facebook: "https://www.facebook.com/people/UHM-Tech/61594981400937/",
    instagram: "https://www.instagram.com/uhmtech/",
    youtube: "https://www.youtube.com/@uhmtech",
    github: "https://github.com/uhmtech",
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
