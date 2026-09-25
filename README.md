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

## Deploy on Netlify

This is a Next.js app with a contact API and staff console, so do **not** upload a static folder. Connect the GitHub repo and let Netlify run the build.

1. Push this project to GitHub.
2. In [Netlify](https://app.netlify.com), **Add new site → Import an existing project** and select the repo.
3. Build settings (also in `netlify.toml`):
   - Build command: `npm run build`
   - Publish directory: `.next`
4. In **Site configuration → Environment variables**, add the same keys as `.env.local`, including:
   - `NEXT_PUBLIC_SITE_URL` (use `https://uhmtech.com` or your `*.netlify.app` URL)
   - `NEXT_PUBLIC_CONTACT_EMAIL`
   - `CONTACT_TO_EMAIL`
   - `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM`
   - `ADMIN_USERNAME`, `ADMIN_PASSWORD`, `ADMIN_SESSION_SECRET`
5. Deploy, then attach the **uhmtech.com** domain under **Domain management**.

The contact form still emails **info@uhmtech.com**. The staff inbox file is not a durable database on Netlify, so treat email as the source of truth until a database is added.

## Scripts

- `npm run dev` — development
- `npm run build` — production build
- `npm run start` — run the production server
