const LOGO_FILES: Record<string, string> = {
  zoho: "/tech/zoho.svg",
  hubspot: "/tech/hubspot.svg",
  salesforce: "/tech/salesforce.svg",
  odoo: "/tech/odoo.svg",
  react: "/tech/react.svg",
  nextjs: "/tech/nextjs.svg",
  javascript: "/tech/javascript.svg",
  typescript: "/tech/typescript.svg",
  nodejs: "/tech/nodejs.svg",
  express: "/tech/express.svg",
  python: "/tech/python.svg",
  "rest-apis": "/tech/rest-apis.svg",
  sql: "/tech/sql.svg",
  mongodb: "/tech/mongodb.svg",
  cloud: "/tech/cloud.svg",
  postgresql: "/tech/postgresql.svg",
  redis: "/tech/redis.svg",
  webhooks: "/tech/webhooks.svg",
  docker: "/tech/docker.svg",
  aws: "/tech/aws.svg",
  azure: "/tech/azure.svg",
  stripe: "/tech/stripe.svg",
  twilio: "/tech/twilio.svg",
  "whatsapp-api": "/tech/whatsapp-api.svg",
  "zoho-flow": "/tech/zoho-flow.svg",
  make: "/tech/make.svg",
  n8n: "/tech/n8n.svg",
};

export function TechLogo({
  slug,
  name,
  size = 40,
  compact = false,
}: {
  slug: string;
  name: string;
  size?: number;
  compact?: boolean;
}) {
  const src = LOGO_FILES[slug] ?? "/tech/cloud.svg";
  const invert = slug === "nextjs" || slug === "express";

  return (
    <span className={`tech-mark${compact ? " tech-mark-compact" : ""}${invert ? " tech-mark-invert" : ""}`}>
      <img src={src} alt={`${name} logo`} width={size} height={size} className="tech-mark-img" />
    </span>
  );
}
