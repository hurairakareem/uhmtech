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
| `GMAIL_IMAP_USER` / `GMAIL_IMAP_PASS` | Gmail inbox for `/admin-portal/inquiries` (`infouhmtech@gmail.com` + App Password) |
| `SMTP_HOST` / `SMTP_PORT` / `SMTP_USER` / `SMTP_PASS` | Gmail SMTP (`smtp.gmail.com` / `usamarayan80@gmail.com` / App Password) |
| `SMTP_FROM` | From header, e.g. `UHM Tech <usamarayan80@gmail.com>` |
| `SMTP_SECURE` | `true` for port 465, otherwise leave `false` and use 587 |
| `RESEND_API_KEY` | Optional alternative to SMTP (Resend) |
| `CRM_WEBHOOK_URL` | Optional extra CRM / form webhook |
| `ADMIN_USERNAME` / `ADMIN_PASSWORD` | Private console login (`/uhm-console`) |
| `ADMIN_SESSION_SECRET` | Long random string used to sign the admin session cookie |

Do not put API keys in client components.

## Deploy on Netlify

This is a Next.js app with a contact API and staff console. Do **not** drag-and-drop a folder. Use the GitHub repo [hurairakareem/uhmtech](https://github.com/hurairakareem/uhmtech).

### 1. Connect the repo

1. Open [https://app.netlify.com](https://app.netlify.com) and sign in.
2. **Add new site → Import an existing project → GitHub**.
3. Authorize Netlify, then choose **hurairakareem / uhmtech**, branch **main**.
4. Confirm:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node: `22` (set in `netlify.toml`)
5. Click **Deploy**. The first build may fail until environment variables are saved; that is expected.

If the site is already linked to this repo, skip to environment variables, then **Deploys → Trigger deploy**.

### 2. Add environment variables

Go to **Site configuration → Environment variables → Add a variable**.  
Scope: **All scopes**. Deploy contexts: **All**. Add each of these:

| Key | Value |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | `https://uhmtech.com` (or your `https://….netlify.app` URL until the domain is attached) |
| `NEXT_PUBLIC_CONTACT_EMAIL` | `info@uhmtech.com` |
| `NEXT_PUBLIC_CONTACT_PHONE` | `03080007173` |
| `NEXT_PUBLIC_CONTACT_ADDRESS` | `Lahore, Pakistan` |
| `CONTACT_TO_EMAIL` | `info@uhmtech.com` |
| `SMTP_HOST` | `smtp.gmail.com` |
| `SMTP_PORT` | `587` |
| `SMTP_SECURE` | `false` |
| `SMTP_USER` | `usamarayan80@gmail.com` |
| `SMTP_PASS` | Gmail App Password from local `.env.local` |
| `GMAIL_IMAP_USER` | `infouhmtech@gmail.com` |
| `GMAIL_IMAP_PASS` | Gmail App Password for that inbox |
| `ADMIN_USERNAME` | `uhmadmin` |
| `ADMIN_PASSWORD` | console password from `.env.local` |
| `ADMIN_SESSION_SECRET` | session secret from `.env.local` |

Do not commit `.env.local` to GitHub.

After saving, **Deploys → Trigger deploy → Deploy site**.

### 3. Domain

**Domain management → Add custom domain → `uhmtech.com`**, then add the DNS records Netlify shows.

Public site: `https://uhmtech.com`  
Staff console: `https://uhmtech.com/uhm-console`

Gmail SMTP sometimes fails from Netlify. If the form does not send, the site can still be live; sending can be switched to an HTTP email API.

## Scripts

- `npm run dev` — development
- `npm run build` — production build
- `npm run start` — run the production server
