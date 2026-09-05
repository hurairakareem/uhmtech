export type Industry = {
  slug: string;
  name: string;
  summary: string;
  description: string;
  needs: string[];
};

export const industries: Industry[] = [
  {
    slug: "healthcare",
    name: "Healthcare",
    summary: "Patient communication, scheduling, records workflows, and operational systems designed with care for process and privacy.",
    description:
      "Healthcare organizations need reliable scheduling, communication, and internal systems. We help automate coordination, support channels, and management platforms without forcing a generic CRM template onto clinical operations.",
    needs: ["Appointment and inquiry handling", "Secure operational records", "Support across phone, chat, and email", "Integrations with existing clinical or admin tools"],
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    summary: "Lead capture, qualification, follow-up, and deal operations for property businesses.",
    description:
      "Real estate teams lose deals in delayed follow-up and disconnected listing data. We connect inquiry channels, CRM, and appointment workflows so agents and operations share one picture.",
    needs: ["Lead capture from web and campaigns", "Qualification and appointment setting", "Pipeline visibility", "Document and follow-up automation"],
  },
  {
    slug: "ecommerce",
    name: "E-commerce",
    summary: "Order, customer, support, and integration workflows for online retail.",
    description:
      "Commerce operations need inventory, orders, payments, and customer service to move together. We integrate storefronts with CRM, support, and back-office systems.",
    needs: ["Order and customer sync", "Support across channels", "Returns and ticket workflows", "Payment and accounting connections"],
  },
  {
    slug: "financial-services",
    name: "Financial Services",
    summary: "Structured client onboarding, communication, and workflow systems with audit-friendly records.",
    description:
      "Financial teams need process discipline. We design CRM, onboarding, and customer communication with permissions, logging, and integrations that respect operational controls.",
    needs: ["Client onboarding workflows", "Document collection", "Secure communication history", "Reporting for operations leadership"],
  },
  {
    slug: "education",
    name: "Education",
    summary: "Admissions, student communication, and school or training operations systems.",
    description:
      "Education providers manage inquiries, enrollments, schedules, and parent or student communication. We implement CRM, portals, and support processes that scale with intake cycles.",
    needs: ["Inquiry and admissions pipelines", "Student or parent communication", "Scheduling and records", "Portals for staff and families"],
  },
  {
    slug: "retail",
    name: "Retail",
    summary: "Customer service, inventory-aware operations, and omnichannel communication.",
    description:
      "Retail brands need consistent service whether customers call, chat, or email. We connect store, warehouse, and customer systems around shared records.",
    needs: ["Omnichannel support", "Customer history at the point of contact", "Inventory-aware operations", "Campaign and loyalty connections"],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    summary: "Quote-to-delivery processes, inventory, and internal tools for production businesses.",
    description:
      "Manufacturers often run on email and spreadsheets between sales and production. We automate handoffs, inventory visibility, and custom operational systems.",
    needs: ["Quote and order workflows", "Inventory and project tracking", "Dealer or customer portals", "ERP-style process design"],
  },
  {
    slug: "logistics",
    name: "Logistics",
    summary: "Tracking, customer updates, and operational systems for movement-heavy businesses.",
    description:
      "Logistics companies need status visibility and proactive customer communication. We integrate operations data with CRM, portals, and support channels.",
    needs: ["Status updates to customers", "Exception handling", "Partner and customer portals", "API connections to tracking systems"],
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    summary: "Pipeline, delivery, and client communication for firms that sell expertise.",
    description:
      "Agencies, consultancies, and firms need a clean path from inquiry to engagement to delivery. We connect CRM, projects, billing, and client communication.",
    needs: ["Lead and proposal process", "Project and resource visibility", "Client portals", "Email and meeting follow-up automation"],
  },
  {
    slug: "technology",
    name: "Technology",
    summary: "Product, support, and go-to-market systems for software and tech companies.",
    description:
      "Technology companies often need product infrastructure and customer operations at the same time. We help with SaaS builds, integrations, and customer experience systems.",
    needs: ["Product and admin platforms", "Support and success operations", "CRM for product-led or sales-led motions", "API and billing integrations"],
  },
  {
    slug: "startups",
    name: "Startups",
    summary: "MVPs, first CRM, and automation that will not need to be thrown away at the next stage.",
    description:
      "Early teams need speed with a clean foundation. We help you choose what to automate, what to build, and what to postpone.",
    needs: ["MVP and product scoping", "Lightweight CRM", "Founder-friendly automation", "A path to scale"],
  },
  {
    slug: "smb",
    name: "Small & Medium Businesses",
    summary: "Practical automation and systems that reduce admin without enterprise overhead.",
    description:
      "SMBs need tools their teams will use. We implement CRM, automation, and support operations in stages that match capacity.",
    needs: ["CRM that matches the team", "Inbox and call handling", "Core process automation", "Simple reporting"],
  },
  {
    slug: "enterprise",
    name: "Enterprise",
    summary: "Multi-team systems, integrations, and governed automation across larger organizations.",
    description:
      "Enterprise work requires permissions, documentation, and integration discipline. We design architecture that multiple teams can run.",
    needs: ["Cross-system integration", "Role-based access", "Phased rollouts", "Support for existing platforms"],
  },
  {
    slug: "hospitality",
    name: "Hospitality",
    summary: "Reservations, guest communication, and operations support across phone, chat, and email.",
    description:
      "Hotels, venues, and hospitality groups need booking context at every touchpoint. We connect inquiry channels, property or reservation systems, and support queues without inventing a new front desk process.",
    needs: ["Reservation and inquiry handling", "Guest communication history", "Multi-property operations views", "Integrations with booking tools"],
  },
  {
    slug: "construction",
    name: "Construction",
    summary: "Estimating, project handoff, and client communication for contractors and developers.",
    description:
      "Construction businesses often lose the thread between site, office, and client. We implement CRM, project records, and document workflows that match how jobs actually move.",
    needs: ["Lead and estimate pipeline", "Job and document tracking", "Client updates", "Subcontractor or vendor records"],
  },
  {
    slug: "insurance",
    name: "Insurance & brokerage",
    summary: "Intake, follow-up, and policy-adjacent operations with an audit-friendly customer record.",
    description:
      "Brokers and insurance operations need structured intake and communication, not a generic retail CRM copy. We design pipelines, document collection, and service queues around the real case types.",
    needs: ["Structured intake", "Follow-up and renewal reminders", "Document collection", "Service request handling"],
  },
  {
    slug: "energy",
    name: "Energy & utilities-adjacent",
    summary: "Field-aware customer operations, project tracking, and integration with existing operational systems.",
    description:
      "Energy and utilities-adjacent companies mix long sales cycles with operational work orders. We help connect CRM, project systems, and customer communication with clear ownership.",
    needs: ["Long-cycle pipeline visibility", "Work-order style tracking", "Customer notifications", "System integrations"],
  },
];

export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}
