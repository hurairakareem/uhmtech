export type Product = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  description: string;
  features: string[];
  status: "available" | "in-development" | "coming-soon";
};

export const products: Product[] = [
  {
    slug: "operations-console",
    name: "Operations Console",
    category: "Business management",
    summary: "A modular operations workspace for teams that need tickets, tasks, and customer context in one place.",
    description:
      "Operations Console is a product-style management system we implement for companies that have outgrown spreadsheets but do not want a rigid off-the-shelf suite. Modules can be enabled as processes mature.",
    features: [
      "Role-based work queues",
      "Customer and account context",
      "Workflow and SLA timers",
      "Reporting views for team leads",
      "API access for surrounding systems",
    ],
    status: "coming-soon",
  },
  {
    slug: "lifecycle-crm-kit",
    name: "Lifecycle CRM Kit",
    category: "CRM",
    summary: "A reusable CRM architecture for lead-to-customer processes across Zoho, HubSpot, Salesforce, or custom builds.",
    description:
      "Lifecycle CRM Kit is not a marketplace theme. It is a structured implementation pattern: data model, stages, automations, and dashboards that we adapt to each client.",
    features: [
      "Stage definitions for marketing, sales, and service",
      "Assignment and SLA patterns",
      "Lifecycle reporting",
      "Integration points for email, chat, and calling",
    ],
    status: "coming-soon",
  },
  {
    slug: "assist-desk",
    name: "Assist Desk",
    category: "Customer experience",
    summary: "Shared inbox, chat, and calling context for customer support teams.",
    description:
      "Assist Desk brings email, chat, and call notes into a support workspace that can sit on top of CRM. It is designed for teams that need channel discipline before they buy a large suite.",
    features: [
      "Shared email and chat queues",
      "Collision detection for agents",
      "Canned replies with governance",
      "CRM sync of conversations",
    ],
    status: "coming-soon",
  },
  {
    slug: "flowline",
    name: "Flowline",
    category: "Automation",
    summary: "An automation layer for connecting CRM events, internal tools, and notifications.",
    description:
      "Flowline is our approach to maintainable automation: named workflows, logs, and retries — so operations are not dependent on hidden one-off scripts.",
    features: [
      "Event-driven workflows",
      "Human approval steps",
      "Delivery logs",
      "Connectors for common CRMs and APIs",
    ],
    status: "coming-soon",
  },
  {
    slug: "signal-ai",
    name: "Signal AI",
    category: "AI",
    summary: "Assisted classification, summaries, and routing for support and sales conversations.",
    description:
      "Signal AI is an expandable AI layer for qualification, ticket summaries, and suggested replies. It is designed to sit behind human review until a process is trusted.",
    features: [
      "Conversation summaries",
      "Intent classification",
      "Suggested next actions",
      "Handoff to live agents",
    ],
    status: "coming-soon",
  },
  {
    slug: "portal-hub",
    name: "Portal Hub",
    category: "Customer portals",
    summary: "Role-based customer, partner, and dealer portals connected to CRM and order data.",
    description:
      "Portal Hub is a product pattern for self-service: tickets, orders, documents, and branded dashboards. It can sit on a custom stack or connect to an existing CRM.",
    features: [
      "Tenant-aware or account-aware login",
      "Ticket and request submission",
      "Document and invoice views",
      "Admin publishing controls",
      "API access for surrounding systems",
    ],
    status: "coming-soon",
  },
  {
    slug: "schedule-desk",
    name: "Schedule Desk",
    category: "Operations",
    summary: "Appointment setting, reminders, and calendar operations for sales and service teams.",
    description:
      "Schedule Desk covers booking rules, owner calendars, and reminder sequences that write back to CRM so a booked meeting is not only an email thread.",
    features: [
      "Availability rules",
      "Reminder sequences",
      "No-show follow-up tasks",
      "CRM activity logging",
    ],
    status: "coming-soon",
  },
  {
    slug: "ledger-link",
    name: "Ledger Link",
    category: "Integrations",
    summary: "A billing and accounting sync pattern between CRM, payments, and finance tools.",
    description:
      "Ledger Link is how we package payment events, invoice status, and customer identifiers so commercial teams and finance are not reconciling by hand.",
    features: [
      "Payment event ingestion",
      "Invoice status sync",
      "Failed-payment workflows",
      "Idempotent API handling",
    ],
    status: "coming-soon",
  },
]

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
