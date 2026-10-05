export type ServiceItem = {
  slug: string;
  name: string;
  shortName?: string;
  navGroup: "core" | "experience" | "build" | "partner";
  summary: string;
  description: string;
  heroHeadline: string;
  heroSupport: string;
  outcomes: string[];
  offerings: { title: string; description: string }[];
  platforms?: { name: string; items: string[] }[];
  faqs: { q: string; a: string }[];
  related: string[];
  capabilities?: string[];
  problem?: string;
  solution?: string;
  workflow?: string[];
  deliverables?: string[];
  benefits?: string[];
  engagement?: { title: string; text: string }[];
  ctaLabel?: string;
  seoTitle?: string;
  seoDescription?: string;
};

export function serviceContactHref(service: Pick<ServiceItem, "name">) {
  return `/contact?service=${encodeURIComponent(service.name)}`;
}

export const services: ServiceItem[] = [
  {
    slug: "business-automation",
    name: "Business Automation",
    seoTitle: "Business Process Automation in Pakistan",
    seoDescription:
      "Automate approvals, sales follow-ups, customer support, and daily operations. UHM Tech connects your workflows and business systems across Pakistan.",
    navGroup: "core",
    summary:
      "Automate repetitive processes and connect your business systems to improve efficiency and growth.",
    description:
      "We design and implement automation that follows how your business actually works — from lead capture and approvals to operations, reporting, and customer lifecycle workflows.",
    heroHeadline: "Automate operations without losing control of the process.",
    heroSupport:
      "UHM Tech maps your workflows, then builds reliable automation across CRM, operations, finance, and support systems — including custom logic where platforms fall short.",
    outcomes: [
      "Fewer manual handoffs between teams",
      "Faster cycle times for sales, support, and operations",
      "Consistent data across connected systems",
      "Clear reporting on work that used to live in spreadsheets",
    ],
    offerings: [
      { title: "Workflow automation", description: "Approvals, routing, task creation, and status updates triggered by real business events." },
      { title: "CRM automation", description: "Lead scoring, assignment, follow-ups, and deal-stage automation aligned to your sales process." },
      { title: "Sales automation", description: "Pipeline hygiene, quote-to-close sequences, and activity reminders that keep deals moving." },
      { title: "Marketing automation", description: "Nurture sequences, campaign tracking, and lead handoff between marketing and sales." },
      { title: "Customer support automation", description: "Ticket routing, SLA timers, knowledge triggers, and customer updates." },
      { title: "Business process automation", description: "Cross-department processes such as onboarding, fulfillment, billing, and renewals." },
      { title: "API & third-party integrations", description: "Connect platforms, databases, and internal tools so work happens once." },
      { title: "Custom dashboards", description: "Operational views for leadership, teams, and clients — not generic platform reports." },
      { title: "Reporting & analytics", description: "Reliable metrics from clean data, not disconnected exports." },
      { title: "Lead & deal management", description: "Structured capture, qualification, and progression through your commercial process." },
      { title: "Customer lifecycle automation", description: "From first inquiry to onboarding, retention, and expansion." },
      { title: "Custom automation solutions", description: "When off-the-shelf workflows are not enough, we build the missing layer." },
    ],
    platforms: [
      { name: "Platforms we commonly automate", items: ["Zoho", "HubSpot", "Salesforce", "Odoo", "Custom systems"] },
    ],
    faqs: [
      { q: "Do we need to replace our current systems first?", a: "Not always. Many programs start by connecting and automating what you already use, then replacing only the tools that create friction." },
      { q: "Can automation be rolled out in phases?", a: "Yes. We typically start with one high-impact process, prove the workflow, then expand." },
    ],
    related: ["crm-solutions", "api-integrations", "ai-automation"],
  },
  {
    slug: "crm-solutions",
    name: "CRM Solutions",
    seoTitle: "CRM Implementation & Consulting in Pakistan",
    seoDescription:
      "Plan, implement, customize, and integrate Zoho, HubSpot, Salesforce, or Odoo CRM around your sales and service workflows.",
    navGroup: "core",
    summary:
      "Design, customize, integrate, and automate CRM platforms around your business processes.",
    description:
      "We implement CRM as an operating system for customer work — sales, marketing, service, and operations — across Zoho, HubSpot, Salesforce, Odoo, and custom CRM builds.",
    heroHeadline: "A CRM that matches your process, not a generic pipeline.",
    heroSupport:
      "From discovery and data model design to customization, integration, training, and automation, we help teams actually use the CRM they invest in.",
    outcomes: [
      "A CRM model that reflects real products, teams, and customer journeys",
      "Cleaner handoffs between sales, delivery, and support",
      "Automation that reduces admin instead of adding it",
      "Room to add new platforms or modules later",
    ],
    offerings: [
      { title: "CRM strategy & architecture", description: "Process mapping, data model, permissions, and rollout plan." },
      { title: "Implementation & customization", description: "Modules, fields, layouts, automations, and user experience tailored to each team." },
      { title: "Migration", description: "Structured movement of accounts, contacts, deals, tickets, and history." },
      { title: "Integrations", description: "Email, telephony, accounting, websites, payment, and internal systems." },
      { title: "Training & adoption", description: "Role-based training so the CRM becomes daily workflow, not extra data entry." },
    ],
    platforms: [
      {
        name: "Zoho",
        items: [
          "Zoho CRM",
          "Zoho Creator",
          "Zoho Books",
          "Zoho Projects",
          "Zoho Flow",
          "Zoho Analytics",
          "Zoho Campaigns",
          "Zoho Desk",
          "Zoho Sign",
          "Zoho Forms",
          "Zoho SalesIQ",
          "Other Zoho ecosystem solutions",
        ],
      },
      {
        name: "HubSpot",
        items: ["HubSpot CRM", "Sales Hub", "Marketing Hub", "Service Hub", "Automation", "Workflows", "Integrations", "Custom solutions"],
      },
      {
        name: "Salesforce",
        items: ["Salesforce CRM", "Automation", "Customization", "Integrations", "Reports & dashboards", "Business process automation"],
      },
      {
        name: "Odoo",
        items: ["CRM", "Sales", "Accounting", "Inventory", "HR", "Projects", "Automation", "Custom modules", "Integrations"],
      },
    ],
    faqs: [
      { q: "Which CRM should we choose?", a: "It depends on process complexity, team size, existing tools, and how much customization you need. We help you choose based on fit, not a single-platform bias." },
      { q: "Can you work with a CRM we already use?", a: "Yes. We regularly improve, clean up, and automate existing Zoho, HubSpot, Salesforce, and Odoo environments." },
    ],
    related: ["business-automation", "software-development", "email-services"],
  },
  {
    slug: "zoho-crm",
    name: "Zoho CRM & Zoho Ecosystem",
    seoTitle: "Zoho CRM Implementation in Pakistan",
    seoDescription:
      "Zoho CRM setup, customization, migration, automation, and integrations for teams in Pakistan, delivered around your actual sales process.",
    shortName: "Zoho",
    navGroup: "core",
    summary: "Implement, customize, and automate Zoho CRM and the wider Zoho suite around your operations.",
    description:
      "Zoho can cover CRM, finance, projects, support, analytics, and custom apps. We help you use the right mix — and connect it to everything else.",
    heroHeadline: "Make Zoho work as one connected business system.",
    heroSupport:
      "We implement Zoho CRM and related Zoho products with clean data models, automations, and integrations that teams can actually run day to day.",
    outcomes: [
      "Zoho configured around your sales and service process",
      "Connected Books, Desk, Campaigns, and custom Creator apps where needed",
      "Less duplicate data entry across Zoho modules",
    ],
    offerings: [
      { title: "Zoho CRM", description: "Pipelines, layouts, blueprints, assignment rules, and custom modules." },
      { title: "Zoho Creator", description: "Custom applications for processes Zoho CRM should not be forced to hold." },
      { title: "Zoho Books", description: "Invoicing and finance workflows connected to commercial records." },
      { title: "Zoho Projects", description: "Delivery tracking linked to deals and customers." },
      { title: "Zoho Flow & APIs", description: "Cross-app automation inside and outside Zoho." },
      { title: "Zoho Analytics", description: "Reporting models that leadership can trust." },
      { title: "Zoho Campaigns", description: "Campaign operations connected to CRM records." },
      { title: "Zoho Desk", description: "Support operations with SLA, routing, and CRM context." },
      { title: "Zoho Sign, Forms & SalesIQ", description: "Signature, capture, and website engagement connected to CRM." },
    ],
    faqs: [
      { q: "Do we need the full Zoho suite?", a: "No. We recommend the modules that match your process and leave room to add more later." },
    ],
    related: ["crm-solutions", "business-automation", "hubspot"],
  },
  {
    slug: "hubspot",
    name: "HubSpot Implementation",
    seoTitle: "HubSpot CRM Implementation in Pakistan",
    seoDescription:
      "Configure HubSpot CRM, Sales Hub, Marketing Hub, and Service Hub with clean lifecycle stages, practical automation, and reliable reporting.",
    shortName: "HubSpot",
    navGroup: "core",
    summary: "HubSpot CRM, Sales Hub, Marketing Hub, and Service Hub implementation with practical automation.",
    description:
      "We set up HubSpot so marketing, sales, and service share one customer record — with workflows that reduce manual follow-up.",
    heroHeadline: "HubSpot configured for how your revenue team actually works.",
    heroSupport:
      "From CRM foundations to hubs, workflows, and integrations, we focus on adoption and clean data, not unused features.",
    outcomes: [
      "Shared lifecycle stages across marketing, sales, and service",
      "Workflows that match real handoff rules",
      "Integrations that keep HubSpot from becoming a silo",
    ],
    offerings: [
      { title: "HubSpot CRM", description: "Properties, pipelines, permissions, and reporting foundations." },
      { title: "Sales Hub", description: "Sequences, deal process, quoting support, and activity tracking." },
      { title: "Marketing Hub", description: "Forms, landing operations, nurture, and attribution-ready tracking." },
      { title: "Service Hub", description: "Tickets, SLAs, knowledge workflows, and customer context." },
      { title: "Automation & custom solutions", description: "Workflows, custom coded actions where appropriate, and integrations." },
    ],
    faqs: [
      { q: "Can HubSpot connect to our existing tools?", a: "Yes. We commonly connect websites, email, telephony, billing, and internal systems." },
    ],
    related: ["crm-solutions", "email-services", "chat-support"],
  },
  {
    slug: "salesforce",
    name: "Salesforce Solutions",
    seoTitle: "Salesforce CRM Consulting in Pakistan",
    seoDescription:
      "Salesforce CRM configuration, customization, automation, integration, and reporting aligned to how your teams sell and support customers.",
    shortName: "Salesforce",
    navGroup: "core",
    summary: "Salesforce CRM customization, automation, reporting, and integrations for growing operations.",
    description:
      "Salesforce is powerful when the data model, automation, and user experience are designed with intent. We help teams get there without unnecessary complexity.",
    heroHeadline: "Salesforce that supports the business process — not the other way around.",
    heroSupport:
      "We customize Salesforce around your objects, automations, dashboards, and connected systems, with a clear path for future change.",
    outcomes: [
      "Object model aligned to products and customer journeys",
      "Automation that is documented and maintainable",
      "Dashboards that answer operational questions",
    ],
    offerings: [
      { title: "Salesforce CRM", description: "Core sales and service configuration." },
      { title: "Automation", description: "Flows and process automation designed for scale." },
      { title: "Customization", description: "Fields, page layouts, Lightning experience, and custom logic." },
      { title: "Integrations", description: "APIs and middleware to finance, support, and product systems." },
      { title: "Reports & dashboards", description: "Leadership and team reporting from trusted records." },
    ],
    faqs: [
      { q: "Is Salesforce only for large enterprises?", a: "No. It can fit mid-market teams when scoped correctly. We help you avoid over-building." },
    ],
    related: ["crm-solutions", "api-integrations", "software-development"],
  },
  {
    slug: "odoo",
    name: "Odoo Implementation",
    seoTitle: "Odoo ERP & CRM Implementation in Pakistan",
    seoDescription:
      "Implement and customize Odoo CRM, sales, accounting, inventory, and operations with connected workflows for your business.",
    shortName: "Odoo",
    navGroup: "core",
    summary: "Odoo CRM, sales, accounting, inventory, HR, projects, and custom modules — implemented as one system.",
    description:
      "Odoo can unify commercial and operational work. We implement the apps you need and extend them with custom modules when standard flows are not enough.",
    heroHeadline: "Odoo as a connected operations platform.",
    heroSupport:
      "We implement Odoo around sales, delivery, inventory, accounting, and people processes — with automation and integrations that keep data consistent.",
    outcomes: [
      "Fewer disconnected tools between sales and operations",
      "Custom modules only where they create real value",
      "A foundation that can grow into broader ERP use",
    ],
    offerings: [
      { title: "CRM & Sales", description: "Leads, opportunities, quotations, and customer records." },
      { title: "Accounting", description: "Invoicing and financial workflows connected to operations." },
      { title: "Inventory", description: "Stock, fulfillment, and warehouse-related processes." },
      { title: "HR & Projects", description: "People and delivery tracking in the same environment." },
      { title: "Automation & custom modules", description: "Server actions, automated flows, and tailored apps." },
    ],
    faqs: [
      { q: "Can Odoo replace several tools at once?", a: "Sometimes. We recommend a staged rollout so teams are not asked to change everything on day one." },
    ],
    related: ["crm-solutions", "management-systems", "business-automation"],
  },
  {
    slug: "software-development",
    name: "Software Development",
    seoTitle: "Custom Software Development in Lahore",
    seoDescription:
      "Plan and build custom web applications, internal tools, and business software in Lahore, with maintainable architecture and integrations.",
    navGroup: "build",
    summary:
      "Build scalable web applications, mobile apps, SaaS products, and enterprise systems.",
    description:
      "We design and develop custom software when platforms are not enough — from internal tools and portals to full products and modernizations of legacy systems.",
    heroHeadline: "Software built around your business, not a forced template.",
    heroSupport:
      "UHM Tech delivers web, mobile, cloud, and API-driven systems with architecture that can grow — including MVPs, enterprise applications, and product development.",
    outcomes: [
      "Applications that match operational reality",
      "APIs and data models that other systems can use",
      "A path from MVP to production without a rewrite",
    ],
    offerings: [
      { title: "Custom software development", description: "Purpose-built systems for processes that off-the-shelf tools cannot cover well." },
      { title: "Web application development", description: "Secure, responsive applications for customers, partners, and internal teams." },
      { title: "Mobile application development", description: "Mobile experiences connected to your backend and operations." },
      { title: "Enterprise applications", description: "Role-based systems with auditability, permissions, and integrations." },
      { title: "Business management systems", description: "CRM, ERP, HR, inventory, project, and workflow systems — custom or extended." },
      { title: "Customer portals & admin dashboards", description: "Self-service and operations views with clear permissions." },
      { title: "Internal business tools", description: "Replace spreadsheet-heavy work with maintainable applications." },
      { title: "API & database development", description: "REST APIs, data models, and reliable persistence." },
      { title: "Cloud applications", description: "Hosted systems designed for availability and growth." },
      { title: "MVP & product development", description: "Focused first releases with a roadmap for the next stages." },
      { title: "Legacy system modernization", description: "Replace or wrap aging systems without freezing the business." },
    ],
    faqs: [
      { q: "Do you only work with a fixed technology list?", a: "No. We commonly use React, Next.js, Node.js, TypeScript, Python, SQL, MongoDB, and cloud services — and we add tech when the product requires it." },
    ],
    related: ["saas-development", "management-systems", "api-integrations"],
  },
  {
    slug: "saas-development",
    name: "SaaS Development",
    seoTitle: "SaaS Product Development in Pakistan",
    seoDescription:
      "Build SaaS products from MVP to launch with clear user workflows, secure architecture, and a practical path to future growth.",
    navGroup: "build",
    summary: "Design, build, and scale multi-tenant SaaS products, portals, and subscription platforms.",
    description:
      "We help founders and companies turn an operating idea into a product: architecture, UX, multi-tenant design, billing-ready foundations, and ongoing product development.",
    heroHeadline: "Build a SaaS product that can grow with your customers.",
    heroSupport:
      "From MVP to multi-tenant platforms, we design product architecture, admin panels, customer portals, APIs, and the operational layer around the software.",
    outcomes: [
      "A product foundation that can add tenants and features",
      "Admin and customer experiences that support real operations",
      "Clear technical path for billing, roles, and scaling",
    ],
    offerings: [
      { title: "SaaS product development", description: "End-to-end product engineering with maintainable architecture." },
      { title: "SaaS MVP development", description: "A focused first version that can be demonstrated, sold, and extended." },
      { title: "Multi-tenant SaaS", description: "Tenant isolation, roles, and configuration designed from the start." },
      { title: "Subscription platforms", description: "Plans, entitlements, and customer lifecycle inside the product." },
      { title: "Customer portals & admin panels", description: "The surfaces operators and customers use every day." },
      { title: "SaaS dashboards", description: "Product analytics and operational views." },
      { title: "API-based products", description: "Platforms that other systems can integrate with." },
      { title: "Product UI/UX & architecture", description: "Interface and technical design as one product decision." },
      { title: "Product maintenance & scaling", description: "Ongoing development after launch." },
    ],
    faqs: [
      { q: "Can you take over an existing SaaS codebase?", a: "Yes. We can assess architecture, stabilize delivery, and continue product development." },
    ],
    related: ["software-development", "ai-automation", "api-integrations"],
  },
  {
    slug: "app-development",
    name: "App Development",
    navGroup: "build",
    summary: "Build modern web and mobile applications that support operations, customer experience, and growth.",
    description:
      "We design and build custom applications for business workflows, customer-facing experiences, and internal systems — with a focus on speed, usability, and long-term maintainability.",
    heroHeadline: "Applications designed around your real business workflow.",
    heroSupport:
      "From internal tools to customer apps and product experiences, we build applications that connect to your data, workflows, and growth goals.",
    outcomes: [
      "Applications that fit operational reality instead of forcing workarounds",
      "Faster delivery of digital experiences to customers and teams",
      "A scalable foundation for future feature expansion",
    ],
    offerings: [
      { title: "Custom app development", description: "Purpose-built applications for internal teams, customers, or operations." },
      { title: "Web application development", description: "Responsive applications that power daily work and customer journeys." },
      { title: "Mobile application development", description: "iOS and Android experiences connected to your systems and data." },
      { title: "Business apps", description: "Operational and management tools tailored to your process." },
      { title: "Client portals", description: "Secure interfaces for customers, vendors, partners, and staff." },
      { title: "Dashboard & reporting apps", description: "Practical business views for visibility, tracking, and decision-making." },
    ],
    faqs: [
      { q: "Do you build apps only from scratch?", a: "No. We can also improve, modernize, or extend existing applications and business workflows." },
    ],
    related: ["software-development", "apps-customization", "api-integrations"],
  },
  {
    slug: "apps-customization",
    name: "Apps Customization",
    navGroup: "build",
    summary: "Customize existing applications so they match your workflows, processes, and business rules.",
    description:
      "Many businesses already have software in place, but it does not fit the way they really work. We customize those apps to improve process flow, usability, and business performance.",
    heroHeadline: "Tailored app experiences that fit the way your team actually works.",
    heroSupport:
      "We adjust the features, workflows, permissions, and integrations of existing applications so they support business operations instead of creating friction.",
    outcomes: [
      "Better fit between software and team process",
      "Fewer workarounds and disconnected manual steps",
      "More value from the tools you already have",
    ],
    offerings: [
      { title: "Workflow customization", description: "Update process flows so the app aligns to your real operational steps." },
      { title: "Module & feature enhancement", description: "Add the capabilities your business needs without replacing the system." },
      { title: "User role & permission tuning", description: "Improve access control and team-specific workflows." },
      { title: "Report & dashboard customization", description: "Create views that answer operational questions more clearly." },
      { title: "Integration upgrades", description: "Connect the app to CRM, payments, communication, and internal services." },
      { title: "UX & interface adjustments", description: "Improve usability for teams, customers, and administrators." },
    ],
    faqs: [
      { q: "Can we customize apps without a full rebuild?", a: "Yes. In many cases, targeted customization gives better ROI than replacing a working system." },
    ],
    related: ["app-development", "software-development", "management-systems"],
  },
  {
    slug: "ai-automation",
    name: "AI & Intelligent Automation",
    navGroup: "build",
    summary: "Practical AI for support, qualification, documents, workflows, and product features.",
    description:
      "We apply AI where it improves a real process — chat, classification, document handling, assistants, and workflow decisions — with human oversight where it matters.",
    heroHeadline: "Intelligent automation that is useful, governed, and expandable.",
    heroSupport:
      "UHM Tech designs AI into support, sales, operations, and products — from chatbots and assistants to document processing and workflow intelligence.",
    outcomes: [
      "Faster handling of repetitive customer and internal requests",
      "AI features connected to CRM and operational systems",
      "A structure that can add new AI use cases later",
    ],
    offerings: [
      { title: "AI automation", description: "Decision and routing support inside existing workflows." },
      { title: "AI chatbots & customer support", description: "Assisted conversations with escalation to people." },
      { title: "AI lead qualification", description: "Structured intake and scoring support for sales teams." },
      { title: "AI-powered workflows", description: "Summaries, classification, and next-best-action inside processes." },
      { title: "AI integrations", description: "Connect models and tools to CRM, tickets, and products." },
      { title: "AI business assistants", description: "Internal assistants grounded in approved knowledge and data." },
      { title: "AI document & data processing", description: "Extract, classify, and route information from files and messages." },
      { title: "AI-powered SaaS products", description: "Product features that use AI as part of the customer value." },
    ],
    faqs: [
      { q: "Will AI replace our support team?", a: "That is not the default goal. Most programs use AI to handle repetitive work and give people better context." },
    ],
    related: ["chat-support", "business-automation", "saas-development"],
  },
  {
    slug: "call-center-services",
    name: "Call Center Services",
    seoTitle: "Call Center & Customer Support Services",
    seoDescription:
      "Inbound and outbound call support, appointment setting, quality monitoring, and CRM-connected customer service for growing teams.",
    navGroup: "experience",
    summary:
      "Deliver reliable customer support and sales operations through professional call center solutions.",
    description:
      "We help companies run inbound and outbound calling with process, quality, and reporting — connected to CRM so conversations become usable business records.",
    heroHeadline: "Customer conversations that are structured, measurable, and connected.",
    heroSupport:
      "From inbound support to outbound qualification and appointment setting, we design call operations with monitoring, analytics, and CRM integration.",
    outcomes: [
      "Clear handling of inbound and outbound call types",
      "Quality monitoring and call analytics",
      "CRM records that reflect what happened on the call",
    ],
    offerings: [
      { title: "Customer Support", description: "Responsive support for customer questions, requests, and issue resolution." },
      { title: "Technical Support", description: "Troubleshooting and guided assistance for product, service, and system-related issues." },
      { title: "Live Chat Support", description: "Real-time chat support that improves response time and customer experience." },
      { title: "AI + Human Chat Support", description: "A blended support model that combines automation with live agent escalation when needed." },
      { title: "Appointment Setting", description: "Scheduling and follow-up support that helps convert interest into confirmed meetings." },
      { title: "Email Outreach", description: "Proactive customer communication and follow-up through structured, high-converting email campaigns." },
      { title: "Lead Generation & Sales", description: "Outbound sales support focused on qualified leads, conversions, and pipeline growth." },
    ],
    faqs: [
      { q: "Can calling be combined with chat and email?", a: "Yes. Many clients run a blended customer experience with shared CRM context." },
    ],
    related: ["chat-support", "email-services", "crm-solutions"],
  },
  {
    slug: "chat-support",
    name: "Chat & Live Support",
    navGroup: "experience",
    summary: "Live chat, website chat, sales chat, and AI-assisted conversations for customer engagement.",
    description:
      "We implement chat as a channel with routing, quality, and CRM connection — including live agents, chatbots, and hybrid models.",
    heroHeadline: "Chat that qualifies, supports, and hands off cleanly.",
    heroSupport:
      "Website chat, technical chat, sales chat, and 24/7 coverage models — with optional AI and full CRM visibility.",
    outcomes: [
      "Faster first response on high-intent website visits",
      "Qualified conversations passed to the right team",
      "Chat history available in CRM and support systems",
    ],
    offerings: [
      { title: "Live & website chat support", description: "On-site conversations with routing and business hours rules." },
      { title: "Customer & technical chat", description: "Support conversations with escalation and knowledge." },
      { title: "Sales chat & lead qualification", description: "Capture intent and book next steps." },
      { title: "24/7 chat support models", description: "Coverage design based on volume and language needs." },
      { title: "Chatbot & AI chat solutions", description: "Assisted automation with human takeover." },
      { title: "Customer engagement", description: "Proactive chat based on page, campaign, or customer stage." },
    ],
    faqs: [
      { q: "Do we need a chatbot on day one?", a: "Not necessarily. Many teams start with live chat and add AI once the conversation patterns are clear." },
    ],
    related: ["ai-automation", "call-center-services", "crm-solutions"],
  },
  {
    slug: "email-services",
    name: "Email Services",
    navGroup: "experience",
    summary: "Support inboxes, email automation, campaigns, and CRM-connected customer communication.",
    description:
      "Email remains a core business channel. We help you run support mailboxes, lifecycle messaging, and campaign operations with automation and clean CRM records.",
    heroHeadline: "Email operations that stay organized, timely, and connected to CRM.",
    heroSupport:
      "From customer support inboxes to transactional mail, campaigns, and automated follow-up, we design email as part of the customer system — not a separate pile of messages.",
    outcomes: [
      "Shared inboxes with ownership and SLAs",
      "Automated follow-up that still feels relevant",
      "Campaign and transactional email connected to customer records",
    ],
    offerings: [
      { title: "Customer support email", description: "Shared mailbox operations, routing, and response standards." },
      { title: "Email management", description: "Queues, tags, and handover between teams." },
      { title: "Email automation", description: "Triggers for onboarding, reminders, and lifecycle events." },
      { title: "Transactional emails", description: "Operational messages from products and systems." },
      { title: "Marketing emails & campaigns", description: "Campaign operations with list hygiene and CRM sync." },
      { title: "Lead follow-up emails", description: "Sequences aligned to qualification stages." },
      { title: "CRM email automation", description: "Messages driven by pipeline, tickets, and customer data." },
      { title: "Email integration", description: "Connect inboxes, ESP tools, and CRM platforms." },
    ],
    faqs: [
      { q: "Can you connect email to Zoho, HubSpot, or Salesforce?", a: "Yes. Email-CRM connection is a standard part of our customer operations work." },
    ],
    related: ["crm-solutions", "business-automation", "chat-support"],
  },
  {
    slug: "api-integrations",
    name: "API & Integrations",
    navGroup: "build",
    summary: "Connect CRM, payments, messaging, telephony, commerce, and internal systems through APIs and webhooks.",
    description:
      "Integrations fail when they are treated as one-off scripts. We design synchronization, error handling, and ownership so data stays trustworthy.",
    heroHeadline: "Systems that share data without manual re-entry.",
    heroSupport:
      "REST APIs, webhooks, custom APIs, and third-party connections — including CRM, payments, email, SMS, WhatsApp, telephony, accounting, and ecommerce.",
    outcomes: [
      "A single source of truth for key customer and order data",
      "Event-driven updates instead of delayed exports",
      "Documented integrations that can be maintained",
    ],
    offerings: [
      { title: "REST API integration", description: "Secure connections between platforms and internal services." },
      { title: "CRM integrations", description: "Keep customer records aligned across tools." },
      { title: "Payment gateway integration", description: "Checkout and billing events into operations and CRM." },
      { title: "Email, SMS & WhatsApp", description: "Messaging channels connected to customer context." },
      { title: "Telephony integration", description: "Call events and recordings linked to records." },
      { title: "Accounting & ecommerce integrations", description: "Orders, invoices, and inventory moving together." },
      { title: "Webhooks & data synchronization", description: "Near real-time updates with retry and logging." },
      { title: "Custom API development", description: "APIs for products, partners, and internal systems." },
    ],
    faqs: [
      { q: "What if a vendor has no public API?", a: "We look at official connectors, export/import, middleware, or a custom service layer depending on stability and risk." },
    ],
    related: ["business-automation", "software-development", "crm-solutions"],
  },
  {
    slug: "management-systems",
    name: "Business Management Systems",
    navGroup: "build",
    summary: "CRM, ERP, HR, inventory, ticketing, booking, and workflow systems — custom or platform-based.",
    description:
      "We build and implement management systems as examples of what operations need, not as a fixed catalog. If your process is not listed, we can still design it.",
    heroHeadline: "Management systems that follow your operating model.",
    heroSupport:
      "From CRM and ERP to industry-specific systems, we design the modules, roles, workflows, and reporting your teams need — then keep the architecture open for the next process.",
    outcomes: [
      "One operational system instead of disconnected files",
      "Role-based access and audit-friendly records",
      "Room to add modules as the business grows",
    ],
    offerings: [
      { title: "CRM & customer management", description: "Accounts, interactions, and commercial process." },
      { title: "ERP & financial management", description: "Operational and financial workflows in one design." },
      { title: "HR management systems", description: "People processes, records, and approvals." },
      { title: "School & hospital management examples", description: "Industry-specific records, scheduling, and compliance-aware workflows." },
      { title: "Inventory & project management", description: "Stock, delivery, and work tracking." },
      { title: "Complaint, ticketing & booking systems", description: "Request handling with SLAs and calendars." },
      { title: "Document & workflow management", description: "Approvals, versions, and process visibility." },
    ],
    faqs: [
      { q: "Is this a product you sell off the shelf?", a: "These are capabilities and example system types. We implement or build what your operation requires." },
    ],
    related: ["software-development", "odoo", "saas-development"],
  },
  {
    slug: "business-process-audit",
    name: "Business Process Audit",
    navGroup: "partner",
    seoTitle: "Business Process Audit & Automation Assessment",
    seoDescription:
      "Review business processes to find bottlenecks, repetitive manual work, and practical opportunities for digitization and automation.",
    summary:
      "Understand how work moves through your business and identify where clearer processes or automation can help.",
    description:
      "UHM Tech reviews selected business processes with the people who use them, maps the steps and handoffs, and identifies delays, repeated work, data gaps, and improvement opportunities. The result is a practical view of what to address first, based on how the business operates today.",
    heroHeadline: "Understand your process before you automate it.",
    heroSupport:
      "We assess the way work moves across your teams, then recommend realistic improvements to the process, tools, or automation around it.",
    capabilities: [
      "Process mapping and handoff review",
      "Manual and repetitive work analysis",
      "Bottlenecks and data gaps",
      "Automation and digitization opportunities",
      "Prioritized improvement roadmap",
    ],
    problem:
      "As businesses grow, processes often spread across conversations, spreadsheets, forms, and software. People create workarounds, but managers may not have a clear picture of where delays or repeated tasks come from.",
    solution:
      "We document the selected process as it works today, identify friction with the people involved, and provide practical recommendations. The assessment can inform future automation, software changes, or simpler process updates.",
    workflow: ["Select a process", "Map current steps", "Find friction", "Prioritize improvements"],
    offerings: [
      { title: "Process mapping", description: "Document the steps, roles, decisions, and handoffs in a selected workflow." },
      { title: "Manual work review", description: "Find repeated entry, follow-ups, approvals, and tasks that rely on memory." },
      { title: "Lead and customer journeys", description: "Review how inquiries, customer records, and service requests move between teams." },
      { title: "Employee workflows", description: "Understand internal requests, onboarding, approvals, and team coordination." },
      { title: "Data and reporting gaps", description: "Identify missing information, duplicate records, and reporting steps that consume time." },
      { title: "Improvement roadmap", description: "Prioritize process changes, digitization, integrations, or automation by practical impact." },
    ],
    deliverables: [
      "Current process maps for agreed workflows",
      "Bottlenecks and manual work findings",
      "Digitization and automation opportunities",
      "Prioritized recommendations and next steps",
    ],
    benefits: [
      "A shared understanding of how work currently gets done",
      "A clearer basis for choosing what to improve first",
      "Recommendations grounded in existing teams and tools",
    ],
    outcomes: [
      "Clear view of the selected processes and their handoffs",
      "Identified sources of delay, duplication, and avoidable manual work",
      "Practical options for improving processes before investing in automation",
    ],
    engagement: [
      { title: "Scope", text: "Choose the process, teams, and questions for the assessment." },
      { title: "Understand", text: "Talk with the people involved and map the current workflow." },
      { title: "Recommend", text: "Review bottlenecks and agree on practical improvement priorities." },
    ],
    ctaLabel: "Request a Business Process Assessment",
    faqs: [
      { q: "Do you automate the process as part of the audit?", a: "The audit first documents and assesses the process. Implementation can be scoped separately once priorities are clear." },
      { q: "Do we need to prepare documentation?", a: "Existing process notes are useful but not required. We can map the workflow through discussions with the people who carry it out." },
    ],
    related: ["business-automation", "digital-operations-optimization", "technology-health-check"],
  },
  {
    slug: "business-process-consulting",
    name: "Business Process & Platform Consulting",
    navGroup: "partner",
    seoTitle: "Business Process, Software & Platform Consulting",
    seoDescription:
      "Get practical advice on business processes, software platforms, and digital forms that fit the way your teams work.",
    summary:
      "Get guidance on improving a business process and choosing the right platforms, forms, and tools to support it.",
    description:
      "UHM Tech helps businesses think through how a process should work, what information it needs, and which existing or new platforms can support it. Advice can cover digital forms, CRM and operations tools, integrations, and practical rollout steps without assuming that one platform fits every business.",
    heroHeadline: "Choose processes and platforms that work together.",
    heroSupport:
      "Get practical guidance on process design, digital forms, and business software before committing to a new tool or implementation.",
    capabilities: [
      "Business process improvement advice",
      "Platform and software fit assessment",
      "Digital form and data capture planning",
      "Integration and workflow considerations",
      "Implementation and rollout recommendations",
    ],
    problem:
      "Choosing a platform before understanding the process can lead to poor fit, unnecessary features, and forms that collect information teams cannot use. Businesses need a clear link between the work, the data, and the software.",
    solution:
      "We clarify the process and its requirements, compare suitable platform approaches, and outline how forms, records, integrations, and user roles should support the work. Recommendations account for tools already in use and can be implemented in phases.",
    workflow: ["Describe the goal", "Clarify process needs", "Review platform options", "Plan a practical next step"],
    offerings: [
      { title: "Process consultation", description: "Discuss process rules, roles, handoffs, exceptions, and opportunities to simplify work." },
      { title: "Platform selection guidance", description: "Compare suitable CRM, workflow, forms, and business software approaches against your requirements." },
      { title: "Digital forms", description: "Plan forms for inquiries, internal requests, approvals, onboarding, and data collection." },
      { title: "Data and workflow design", description: "Decide what information to collect, where it should go, and who needs to act on it." },
      { title: "Integration planning", description: "Identify how selected platforms should connect to existing systems and reporting." },
      { title: "Implementation roadmap", description: "Break recommendations into manageable setup, migration, training, and rollout steps." },
    ],
    deliverables: [
      "Documented process and platform requirements",
      "Platform fit and options summary",
      "Digital form and data flow recommendations",
      "Suggested implementation sequence",
    ],
    benefits: [
      "Better alignment between business needs and software choices",
      "Forms designed around useful data and clear next steps",
      "A practical plan that can build on existing tools",
    ],
    outcomes: [
      "A clearer view of what the process and its users require",
      "Guidance on platforms and digital forms that fit those requirements",
      "A staged path from recommendation to implementation",
    ],
    engagement: [
      { title: "Discuss", text: "Share the business goal, current process, and tools already in use." },
      { title: "Assess", text: "Clarify requirements, users, data, forms, and integration needs." },
      { title: "Advise", text: "Receive options and a recommended next step based on fit and scope." },
    ],
    ctaLabel: "Discuss Your Process and Platforms",
    faqs: [
      { q: "Do you only recommend platforms you implement?", a: "Recommendations focus on fit with your requirements and current systems. If implementation is needed, we can discuss the available options and scope." },
      { q: "Can you help us improve a process without changing platforms?", a: "Yes. Advice may lead to process changes, better use of existing tools, digital forms, integrations, or a platform change where needed." },
    ],
    related: ["business-process-audit", "business-system-integration", "technology-health-check"],
  },
  {
    slug: "technology-health-check",
    name: "Technology Health Check",
    navGroup: "partner",
    seoTitle: "Technology Health Check & Business Technology Audit",
    seoDescription:
      "UHM Tech reviews your website, CRM, software, integrations, and workflows, then delivers a Technology Health Report with risks and recommended next steps.",
    summary:
      "We analyze your existing technology ecosystem to identify what's working, what's slowing your business down, and what can be improved.",
    description:
      "Most companies accumulate a website, CRM, spreadsheets, accounting tools, and messaging apps over time. A Technology Health Check is a structured review of that stack — not a sales pitch to replace everything.",
    heroHeadline: "Is Your Technology Helping Your Business — or Slowing It Down?",
    heroSupport:
      "UHM Tech reviews the systems you already run and produces a Technology Health Report: what works, what needs improvement, what can be upgraded, and the next steps worth taking.",
    capabilities: [
      "Website, CRM, and software review",
      "Data flow and integration gaps",
      "Workflow and automation opportunities",
      "Basic security and performance notes",
      "Prioritized Technology Health Report",
    ],
    problem:
      "Businesses often have websites, CRMs, spreadsheets, accounting systems, messaging tools, and internal software that were added over time but don't work together efficiently. Teams fill the gaps with copy-paste, extra apps, and tribal knowledge.",
    solution:
      "UHM Tech reviews the existing technology ecosystem and provides a structured Technology Health Report. The aim is a clear picture of the current state — not a catalogue of tools you must buy.",
    workflow: ["Current systems", "Technology audit", "Problems identified", "Recommendations", "Improved technology"],
    offerings: [
      { title: "Website", description: "How the site captures, routes, and represents the business — including forms and follow-up." },
      { title: "CRM", description: "Whether customer records, pipelines, and handoffs match the way teams actually sell and serve." },
      { title: "Business software", description: "The operational tools in daily use, including spreadsheets standing in for systems." },
      { title: "Data flow", description: "Where information is entered more than once, delayed, or lost between teams." },
      { title: "Integrations", description: "Which tools already talk to each other, and where people are still the integration layer." },
      { title: "Employee workflows", description: "How work actually moves, compared with what the software assumes." },
      { title: "Automation opportunities", description: "Repeatable steps that can be connected without disrupting the process." },
      { title: "System performance", description: "Friction, bottlenecks, and reliability issues that slow the business down." },
      { title: "Basic security practices", description: "Access, sharing, and obvious risk areas — not a substitute for a specialist security audit." },
      { title: "Technology gaps", description: "Missing capabilities that matter for the next stage of the business." },
    ],
    deliverables: [
      "Current technology assessment",
      "Workflow analysis",
      "Integration review",
      "Basic security review",
      "Identified bottlenecks",
      "Improvement opportunities",
      "Upgrade recommendations",
      "Prioritized next steps",
    ],
    benefits: [
      "A shared view of the stack for owners and managers",
      "Decisions based on the current system, not a generic tool list",
      "A practical sequence of work instead of a full rebuild",
    ],
    outcomes: [
      "A Technology Health Report covering what works, what needs improvement, and what can be upgraded",
      "Potential risks called out in plain language",
      "Recommended next steps you can take with UHM Tech or internally",
    ],
    engagement: [
      { title: "Scope", text: "We agree which systems, teams, and processes are in the review." },
      { title: "Review", text: "We inspect tools, data flow, and how people actually work." },
      { title: "Report", text: "You receive a Technology Health Report with findings and options." },
      { title: "Decide", text: "You choose what to improve next — integration, tools, dashboards, or support." },
    ],
    faqs: [
      { q: "Is this a full security audit?", a: "No. We note basic security practices and obvious risks. A specialist security assessment is a different engagement if you need one." },
      { q: "Do we have to replace our software afterwards?", a: "Not necessarily. Many reviews conclude that the existing tools can work better once they are connected, cleaned up, or used more consistently." },
      { q: "How do we start?", a: "Request a Technology Health Check and tell us which systems you already use. We will confirm scope before the review begins." },
    ],
    ctaLabel: "Request a Technology Health Check",
    related: ["business-system-integration", "digital-operations-optimization", "managed-technology-support"],
  },
  {
    slug: "business-system-integration",
    name: "Business System Integration",
    navGroup: "partner",
    seoTitle: "CRM, Website & Business System Integration",
    seoDescription:
      "Connect CRM, website forms, email, WhatsApp, payments, accounting, and dashboards so your existing software can share data without repetitive work.",
    summary: "Connect the tools a business already uses so information moves once — instead of adding more software.",
    description:
      "Businesses often don't need more software; they need their existing software to communicate properly. We connect CRM, websites, forms, messaging, payments, accounting, and internal applications so people stop re-entering the same record.",
    heroHeadline: "Connect your systems. Eliminate repetitive work. Keep your business data moving.",
    heroSupport:
      "UHM Tech designs integrations around the workflow you already have — for example website to CRM to email or WhatsApp to a spreadsheet or dashboard — with ownership and error handling, not one-off scripts.",
    capabilities: [
      "CRM, website, and form connections",
      "Email, WhatsApp, and messaging",
      "Payments and accounting",
      "Sheets, APIs, and internal apps",
      "A path data can actually follow",
    ],
    problem:
      "Sales lives in the CRM, support lives in inboxes, finance lives in accounting software, and operations live in spreadsheets. Each tool works, but the business still copies data by hand.",
    solution:
      "We map the real handoff — who needs which record, and when — then connect the systems you already pay for. New software is only recommended when a gap cannot be closed by integration.",
    workflow: ["Website", "CRM", "Email / WhatsApp", "Accounting", "Dashboard"],
    offerings: [
      { title: "CRM", description: "Keep customer and deal records aligned with the rest of the stack." },
      { title: "Website & forms", description: "Inquiries land in the right system with the fields teams actually use." },
      { title: "Email & WhatsApp", description: "Conversations stay attached to the customer record instead of living only in a personal inbox." },
      { title: "Payment systems", description: "Successful payments create or update operational records." },
      { title: "Accounting software", description: "Invoices and customer data stay consistent with sales and delivery." },
      { title: "Google Sheets", description: "Spreadsheets can remain in the loop where they are still the working view — without being the only copy of the truth." },
      { title: "Business dashboards", description: "Connected sources feed a single operating picture." },
      { title: "APIs & internal applications", description: "Custom and third-party systems join the same flow." },
    ],
    deliverables: [
      "Integration map of current tools",
      "Connected workflow for the agreed process",
      "Documented field mapping and ownership",
      "Error handling and a way to see failed updates",
    ],
    benefits: [
      "Less duplicate entry between teams",
      "Customer and operational data that can be trusted",
      "Room to add another system later without starting over",
    ],
    outcomes: [
      "A defined path for a customer or order record across tools",
      "Fewer spreadsheet workarounds for the connected process",
      "Integrations that can be maintained after launch",
    ],
    engagement: [
      { title: "Map", text: "We document the current tools and the process that should move between them." },
      { title: "Design", text: "We agree the system of record, events, and what happens when a step fails." },
      { title: "Connect", text: "We implement APIs, webhooks, or platform connectors as the process requires." },
      { title: "Handover", text: "You get a working flow and notes your team can operate." },
    ],
    faqs: [
      { q: "What if a tool has no public API?", a: "We look at official connectors, exports, middleware, or a small custom service — and we will say when an integration is too fragile to be worth it." },
      { q: "Will you force us onto one platform?", a: "No. The point of this service is to connect what you already use, then change tools only where they block the process." },
    ],
    ctaLabel: "Connect My Systems",
    related: ["api-integrations", "business-intelligence-dashboards", "technology-health-check"],
  },
  {
    slug: "custom-internal-tools",
    name: "Custom Internal Tools",
    navGroup: "partner",
    seoTitle: "Custom Internal Tools & Business Workflow Software",
    seoDescription:
      "Purpose-built internal software for employee portals, admin dashboards, inventory, appointments, approvals, and reporting — fitted to how your business already works.",
    summary: "Purpose-built tools for the way your business actually works — not generic SaaS you have to squeeze into.",
    description:
      "UHM Tech can build lightweight internal software around a company's real workflow: employee portals, admin views, inventory, appointments, customer portals, expenses, tasks, documents, approvals, and internal reporting. These are systems for your process, not a product catalogue.",
    heroHeadline: "Purpose-built tools for the way your business actually works.",
    heroSupport:
      "When spreadsheets and borrowed SaaS cannot represent the process, we build focused internal applications with modern web technologies and connect them to the software you already run.",
    capabilities: [
      "Employee and customer portals",
      "Admin and reporting views",
      "Inventory and appointments",
      "Approvals and document flow",
      "Tied into existing software",
    ],
    problem:
      "Teams stretch a CRM, a spreadsheet, or a consumer app into an operating system. The process still lives in people's heads, and every exception becomes a workaround.",
    solution:
      "We design a small, specific application for the workflow that is actually blocking you — then integrate it with CRM, accounting, or other systems so it does not become another silo.",
    workflow: ["Workflow", "Lightweight tool", "Existing software", "Daily operations"],
    offerings: [
      { title: "Employee portal", description: "A place for staff records, requests, and internal processes." },
      { title: "Admin dashboard", description: "Operational control for the people who run the business day to day." },
      { title: "Inventory management", description: "Stock and movements that match how you actually fulfil work." },
      { title: "Appointment management", description: "Booking and reminders connected to customers and staff." },
      { title: "Customer portal", description: "A limited view for clients, vendors, or partners." },
      { title: "Expense tracker", description: "Capture and approval of spend without a separate paper trail." },
      { title: "Task management", description: "Work queues that follow your stages, not a generic board." },
      { title: "Document management", description: "Files and versions attached to the records that need them." },
      { title: "Approval systems", description: "Clear owners, statuses, and an audit-friendly history." },
      { title: "Internal reporting tools", description: "Views built from your data model, not a canned report pack." },
    ],
    deliverables: [
      "Process and role definition",
      "A working internal application scoped to the agreed workflow",
      "Integration with existing business software where it is needed",
      "Handover so your team can use and extend it",
    ],
    benefits: [
      "Software that follows the business instead of the other way around",
      "Less time spent maintaining parallel spreadsheets",
      "A foundation you can grow without buying an unrelated platform",
    ],
    outcomes: [
      "An internal tool that matches the real process",
      "Roles and permissions that fit the team",
      "Connection to CRM or other systems where records must stay in sync",
    ],
    engagement: [
      { title: "Define", text: "We pick one workflow that is worth a dedicated tool." },
      { title: "Design", text: "Data model, screens, and integrations are agreed before build." },
      { title: "Build", text: "We deliver a focused first version with modern web technologies." },
      { title: "Connect", text: "The tool talks to existing software where that avoids duplicate entry." },
    ],
    faqs: [
      { q: "Is this a product you sell off the shelf?", a: "No. Examples such as portals or inventory tools show the kinds of systems we build. Each one is designed around your process." },
      { q: "Can this replace our CRM?", a: "Usually not. Internal tools sit beside CRM and operations systems. We integrate rather than duplicate customer records without a reason." },
    ],
    ctaLabel: "Build My Internal Tool",
    related: ["software-development", "management-systems", "business-intelligence-dashboards"],
  },
  {
    slug: "business-intelligence-dashboards",
    name: "Business Intelligence & Dashboards",
    navGroup: "partner",
    seoTitle: "Business Intelligence & Management Dashboards",
    seoDescription:
      "Connect sales, CRM, operations, and finance data into simple management dashboards so owners and managers can see what is happening in the business.",
    summary: "Bring scattered business information into one place so owners and managers can see operations clearly.",
    description:
      "UHM Tech connects different data sources and creates straightforward management dashboards — sales, leads, customers, employees, revenue, tasks, and operations — so leadership is not reconstructing the week from five exports.",
    heroHeadline: "Know what is happening in your business right now.",
    heroSupport:
      "We build dashboards from the systems you already have. The goal is a usable operating picture, not a decorative wall of charts.",
    capabilities: [
      "Sales, leads, and CRM views",
      "Operations and delivery",
      "People and task tracking",
      "Financial overviews",
      "Connected source data",
    ],
    problem:
      "Numbers live in CRM, accounting, spreadsheets, and chat. By the time someone compiles a report, the question has already changed.",
    solution:
      "We agree the questions that matter, connect the sources that hold those answers, and design dashboards for the people who will actually use them.",
    workflow: ["Multiple data sources", "Data integration", "Centralized dashboard", "Business insights"],
    offerings: [
      { title: "Sales dashboard", description: "Pipeline and activity in a form sales and leadership can read." },
      { title: "CRM dashboard", description: "Customer and deal health from the CRM, not a parallel spreadsheet." },
      { title: "Operations dashboard", description: "Work in progress, bottlenecks, and throughput." },
      { title: "Employee performance dashboard", description: "Team views based on agreed operational measures — not surveillance theatre." },
      { title: "Financial overview", description: "A management view of revenue and related figures from connected sources." },
      { title: "Lead conversion dashboard", description: "How inquiries move from first contact to a qualified next step." },
      { title: "Project dashboard", description: "Delivery status for the work that is actually in flight." },
      { title: "Executive dashboard", description: "A short list of measures owners and managers check regularly." },
    ],
    deliverables: [
      "Agreed metrics and definitions",
      "Connected data sources",
      "Dashboard views for the intended roles",
      "Notes on how to keep the numbers trustworthy",
    ],
    benefits: [
      "Less time assembling status by hand",
      "A shared definition of the numbers that matter",
      "A view that can grow as more systems are connected",
    ],
    outcomes: [
      "Dashboards tied to real source systems",
      "Clearer visibility of sales, operations, or delivery — depending on scope",
      "Fewer conflicting versions of the same report",
    ],
    engagement: [
      { title: "Questions", text: "We start with the decisions the dashboard should support." },
      { title: "Sources", text: "We connect CRM, operations, finance, or sheets as available." },
      { title: "Views", text: "We design the screens for owners, managers, or teams." },
      { title: "Review", text: "We check the numbers against how the business actually works." },
    ],
    faqs: [
      { q: "Do you need a data warehouse first?", a: "Not always. Many teams start with direct connections to CRM and operations tools. We recommend more infrastructure only when the volume or complexity requires it." },
      { q: "Will this work if our data is messy?", a: "Dashboards inherit the quality of the source. We will say when the first step is cleaning CRM or process data rather than adding charts." },
    ],
    ctaLabel: "Build My Business Dashboard",
    related: ["business-system-integration", "custom-internal-tools", "digital-operations-optimization"],
  },
  {
    slug: "managed-technology-support",
    name: "Managed Technology Support",
    navGroup: "partner",
    seoTitle: "Managed Technology Support & System Maintenance",
    seoDescription:
      "Ongoing technical support after launch: website and CRM maintenance, automation changes, bug fixes, monitoring, and consultation — without inventing a price list.",
    summary: "Your technology should keep working after launch. We stay with you on a recurring support engagement.",
    description:
      "Managed Technology Support is an ongoing monthly relationship after a project is live. It can include technical support, website and CRM maintenance, automation changes, bug fixes, small improvements, reports, monitoring, integration care, workflow tweaks, and consultation. Scope is agreed; it is not a promise that every request is included.",
    heroHeadline: "Your technology should keep working after launch. We stay with you.",
    heroSupport:
      "Once a site, CRM, integration, or internal tool is in production, UHM Tech can remain the technical partner for maintenance and measured change — with a clear monthly scope rather than an open-ended promise.",
    capabilities: [
      "Technical support after launch",
      "Website and CRM maintenance",
      "Automation and integration care",
      "Small improvements and fixes",
      "Monitoring and consultation",
    ],
    problem:
      "Projects end and the system is left with whoever is nearest. Small breaks pile up, automations drift, and nobody owns the next improvement.",
    solution:
      "We agree a recurring support model: what is included, how requests are raised, and how larger work is scoped separately. The relationship is practical, not a guarantee of unlimited delivery.",
    workflow: ["Live system", "Support requests", "Fixes & maintenance", "Measured improvements"],
    offerings: [
      { title: "Technical support", description: "A known place to raise issues with the systems we help you run." },
      { title: "Website maintenance", description: "Updates and fixes so the public site stays usable." },
      { title: "CRM updates", description: "Fields, workflows, and user changes that keep the CRM aligned to the process." },
      { title: "Automation changes", description: "Adjustments when the business process moves." },
      { title: "Bug fixes", description: "Repair of defects in the software and integrations we maintain." },
      { title: "Small feature improvements", description: "Limited enhancements that fit the agreed monthly capacity." },
      { title: "Reports", description: "Help keeping operational reports accurate as data changes." },
      { title: "System monitoring", description: "Watching the parts of the stack we have agreed to observe." },
      { title: "Integration maintenance", description: "Keeping connected tools working when vendors or processes change." },
      { title: "Workflow improvements", description: "Small process changes in the live system." },
      { title: "Technical consultation", description: "Advice on what to change next — and what to leave alone." },
    ],
    deliverables: [
      "Agreed support scope and request path",
      "Ongoing maintenance of the included systems",
      "A record of work done in the period",
      "Separate estimates when a request is larger than the retainer",
    ],
    benefits: [
      "Continuity after launch",
      "Smaller issues handled before they become rebuilds",
      "A partner who already knows the system",
    ],
    outcomes: [
      "A named support relationship instead of ad-hoc emergency work",
      "Maintenance and small changes inside an agreed capacity",
      "Clearer handling of work that needs a new project",
    ],
    engagement: [
      { title: "Agree", text: "We define systems, hours or request types, and response expectations." },
      { title: "Support", text: "Your team raises work through the path we set up." },
      { title: "Maintain", text: "We fix, update, and monitor within the retainer." },
      { title: "Review", text: "We look at what should stay in support and what should become a project." },
    ],
    faqs: [
      { q: "Is everything included in the monthly fee?", a: "No. We agree what the retainer covers. Larger features, new integrations, or new products are scoped separately." },
      { q: "Do you publish a price list?", a: "Support is scoped to the systems and capacity you need. We discuss that directly rather than posting a generic package price." },
    ],
    ctaLabel: "Talk About Ongoing Support",
    related: ["technology-health-check", "digital-operations-optimization", "business-automation"],
  },
  {
    slug: "digital-operations-optimization",
    name: "Digital Operations Optimization",
    navGroup: "partner",
    seoTitle: "Digital Operations Optimization & Workflow Improvement",
    seoDescription:
      "Improve how technology supports daily operations: workflow and CRM optimization, automation, data organization, integrations, reporting, and operational visibility.",
    summary: "Make your technology work better for your business by improving workflows, data, and the way systems support daily operations.",
    description:
      "Digital Operations Optimization pulls the other partnership services together: workflow and CRM improvement, automation, cleaner data, fewer redundant tools, better integrations, clearer reporting, and visibility for the people running the company.",
    heroHeadline: "Make your technology work better for your business.",
    heroSupport:
      "This is for teams that already have software in place and need it to support operations more cleanly — not a greenfield rebuild unless that is genuinely required.",
    capabilities: [
      "Workflow and CRM optimization",
      "Process automation",
      "Data and software consolidation",
      "Integration improvements",
      "Reporting and visibility",
    ],
    problem:
      "The tools exist, but operations still feel heavy: extra steps, duplicate records, reports nobody trusts, and employees working around the system.",
    solution:
      "We look at how technology supports the day-to-day process, then improve the parts that matter — process, data, integrations, and reporting — using Health Check, integration, internal tools, dashboards, or support as needed.",
    workflow: ["Current operations", "Bottlenecks", "Process & systems changes", "Clearer day-to-day work"],
    offerings: [
      { title: "Workflow optimization", description: "Remove steps that exist only because the tools don't line up." },
      { title: "Process automation", description: "Automate the repeatable parts once the process is clear." },
      { title: "CRM optimization", description: "Pipelines, fields, and adoption so the CRM matches real work." },
      { title: "Data organization", description: "Cleaner records and less conflicting information." },
      { title: "Software consolidation", description: "Retire overlap where two tools do the same job poorly." },
      { title: "Integration improvements", description: "Tighten the connections that operations already depend on." },
      { title: "Employee workflow improvements", description: "Change the system so people spend less time on workarounds." },
      { title: "Reporting", description: "Operational numbers that follow from cleaner process and data." },
      { title: "Operational visibility", description: "A clearer picture of work in motion for managers." },
    ],
    deliverables: [
      "A picture of current operations and friction",
      "A sequenced set of improvements",
      "Implementation of the agreed first changes",
      "A way to see whether the process actually got easier",
    ],
    benefits: [
      "Technology that supports the working day instead of interrupting it",
      "Less tool sprawl",
      "A path that can include audit, integration, tools, dashboards, or support",
    ],
    outcomes: [
      "Fewer manual patches in the target process",
      "Clearer ownership of systems and data",
      "A practical improvement sequence rather than a wholesale replacement",
    ],
    engagement: [
      { title: "Observe", text: "We look at the operating process and the tools around it." },
      { title: "Prioritize", text: "We pick changes that reduce friction without boiling the ocean." },
      { title: "Improve", text: "We implement process, CRM, integration, or reporting changes as agreed." },
      { title: "Steady", text: "We leave you with a cleaner baseline — and support if you want it to continue." },
    ],
    faqs: [
      { q: "How is this different from a Health Check?", a: "A Health Check produces a report. Optimization is the work of changing operations afterwards — or a combined path if you already know the pain." },
      { q: "Do we have to buy new software?", a: "Often the first wins come from using and connecting what you already have. New software is only in scope when the current stack cannot support the process." },
    ],
    ctaLabel: "Optimize My Operations",
    related: ["technology-health-check", "business-system-integration", "managed-technology-support"],
  },
];

export const primaryServiceSlugs = [
  "business-automation",
  "crm-solutions",
  "software-development",
  "app-development",
  "apps-customization",
  "saas-development",
  "call-center-services",
  "chat-support",
  "email-services",
  "ai-automation",
  "api-integrations",
  "management-systems",
] as const;

export const partnerServiceSlugs = [
  "business-process-audit",
  "business-process-consulting",
  "technology-health-check",
  "business-system-integration",
  "custom-internal-tools",
  "business-intelligence-dashboards",
  "managed-technology-support",
  "digital-operations-optimization",
] as const;

const navServiceGroups = [
  {
    title: "Core Services",
    slugs: primaryServiceSlugs,
  },
  {
    title: "Specialist Services",
    slugs: partnerServiceSlugs,
  },
] as const;

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getPrimaryServices() {
  return primaryServiceSlugs
    .map((slug) => getService(slug))
    .filter((s): s is ServiceItem => Boolean(s));
}

export function getPartnerServices() {
  return partnerServiceSlugs
    .map((slug) => getService(slug))
    .filter((s): s is ServiceItem => Boolean(s));
}

export function getNavServices() {
  return getPrimaryServices();
}

export function getNavServiceGroups() {
  return navServiceGroups.map(({ title, slugs }) => ({
    title,
    links: slugs
      .map((slug) => getService(slug))
      .filter((service): service is ServiceItem => Boolean(service))
      .map((service) => ({
        href: `/services/${service.slug}`,
        label:
          service.slug === "call-center-services"
            ? "Call Center Services"
            : service.shortName ?? service.name,
      })),
  }));
}
