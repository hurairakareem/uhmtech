# UHM Technologies website

Production website for **UHM Technologies** — a technology and digital transformation company covering automation, CRM, software, SaaS, integrations, and customer experience operations.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS

Content lives in `src/content/`. Add a service, industry, product, case study, technology, testimonial, or blog post there; pages and navigation pick it up.

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL for SEO |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Public email |
| `NEXT_PUBLIC_CONTACT_PHONE` | Public phone (optional) |
| `NEXT_PUBLIC_CONTACT_ADDRESS` | Public address (optional) |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics (optional) |
| `CRM_WEBHOOK_URL` | Server-only CRM / form webhook |

Do not put API keys in client components.

## Scripts

- `npm run dev` — development
- `npm run build` — production build
- `npm run start` — run the production server
