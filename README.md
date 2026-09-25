# UHM Tech website

Production website for **UHM Tech** — a technology and digital transformation company covering automation, CRM, software, SaaS, integrations, and customer experience operations.

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
| `CONTACT_TO_EMAIL` | Inbox that receives form submissions (`info@uhmtech.com`) |
| `SMTP_HOST` / `SMTP_PORT` / `SMTP_USER` / `SMTP_PASS` | Gmail SMTP (`smtp.gmail.com` / `usamarayan80@gmail.com` / App Password) |
| `SMTP_FROM` | From header, e.g. `UHM Tech <usamarayan80@gmail.com>` |
| `SMTP_SECURE` | `true` for port 465, otherwise leave `false` and use 587 |
| `RESEND_API_KEY` | Optional alternative to SMTP (Resend) |
| `CRM_WEBHOOK_URL` | Optional extra CRM / form webhook |
| `ADMIN_USERNAME` / `ADMIN_PASSWORD` | Private console login (`/uhm-console`) |
| `ADMIN_SESSION_SECRET` | Long random string used to sign the admin session cookie |

Do not put API keys in client components.

## Scripts

- `npm run dev` — development
- `npm run build` — production build
- `npm run start` — run the production server
