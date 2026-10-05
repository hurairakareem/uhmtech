# SEO implementation notes

**Website:** https://uhmtech.com/  
**Updated:** 5 October 2026

## Keyword focus

These are topic and intent targets selected from UHM Tech's actual services and stated Lahore base. They are not represented as search-volume or ranking data; confirm priority and wording with Search Console and Google's Keyword Planner after the property is verified.

| Page group | Primary search intent | Supporting topics |
| --- | --- | --- |
| Homepage | CRM, automation, and software development in Lahore | business systems integration; technology company in Pakistan |
| Business automation | business process automation in Pakistan | workflow automation; CRM automation; sales follow-up automation |
| CRM | CRM implementation and consulting in Pakistan | CRM setup, migration, customization, integration |
| Zoho | Zoho CRM implementation in Pakistan | Zoho CRM setup, Zoho apps, automation, migration |
| HubSpot | HubSpot CRM implementation in Pakistan | Sales Hub, Marketing Hub, Service Hub, lifecycle stages |
| Salesforce | Salesforce CRM consulting in Pakistan | Salesforce customization, automation, reporting |
| Odoo | Odoo ERP and CRM implementation in Pakistan | Odoo sales, accounting, inventory, operations |
| Software development | custom software development in Lahore | web applications; internal tools; business software |
| SaaS | SaaS product development in Pakistan | SaaS MVP; product engineering; multi-tenant architecture |
| Contact | CRM and software company in Lahore | automation, integration, and SaaS project inquiries |

Use one primary intent per page. Keep the copy specific to what UHM Tech actually delivers; do not add unsupported claims, service areas, certifications, client results, or keyword lists to page copy.

## Changes made

- Updated homepage title, description, visible hero copy, and homepage section headings to identify CRM implementation, business automation, custom software, and the Lahore/Pakistan location while retaining existing components and page structure.
- Rewrote key service, about, contact, and solution metadata around distinct commercial search intent. Added specific metadata for CRM, Zoho, HubSpot, Salesforce, Odoo, custom software, SaaS, and call center service pages.
- Corrected the call center service's visible name from the generic “Services Provider” to “Call Center Services.”
- Added blog index and individual blog posts to the sitemap. Blog URLs use their publication/update date for `lastModified`; other URLs no longer claim they were modified at the time the sitemap was generated.
- Removed placeholder product listings and illustrative case studies from the sitemap and marked those routes `noindex` while their products are not available and their project profiles are explicitly illustrative. Their existing site pages remain accessible to visitors.
- Corrected Organization structured data to represent the configured city as `addressLocality`, rather than labeling “Lahore, Pakistan” as a street address. A configured business phone is included when available.
- Normalized canonical, Open Graph, sitemap, and Organization/WebSite URLs through the production-origin helper. The first build inspection caught `http://localhost:3000` in the generated homepage canonical when local environment config supplied localhost; this is now emitted as `https://uhmtech.com`.
- Removed FAQPage markup. Google announced the FAQ rich result feature was no longer shown starting 7 May 2026; the site's visible FAQ content remains available to visitors.
- Removed the `keywords` metadata field, which is not a substitute for clear, useful page content.

## Search and local visibility notes

- A general web search for `site:uhmtech.com` during this review did not return the site's pages. This is an observation from the search results available here, not a definitive index coverage report. Search Console's Page indexing and URL Inspection reports are the sources to use for confirmed indexing status.
- The repository contains a Google site-verification HTML file, but no Search Console account/report access was available. Once the changes are deployed, verify the domain property, inspect the homepage and key service URLs, submit `https://uhmtech.com/sitemap.xml`, then check indexing and sitemap processing in Search Console.
- A Google Business Profile is appropriate only if the business makes in-person contact with customers at a location or serves customers in person as a service-area business. Use the true business name, phone, hours, and eligible location/service area; do not publish a virtual office as a storefront. Keep the same real business details on the site and legitimate directories.
- The current site describes itself as Lahore-based. The structured data uses the configured city-level location only; no street address or storefront claim has been invented.
- No search-volume figures, backlink scores, or ranking promises are included. Those require account-level tools and/or independent measurement. Build authority through real client-approved case studies, useful expert material, partner/vendor listings that are genuine, and relevant local business citations; do not buy or fabricate links or reviews.

## Implementation checks

- `npm.cmd run build` completed successfully, including TypeScript and static page generation.
- Inspected generated homepage metadata: the title and description are present, and the canonical URL is `https://uhmtech.com/` even though the local build environment uses localhost.
- Inspected generated pages: unavailable product pages and illustrative case studies emit `noindex`; blog articles remain indexable and have production-domain canonicals. The generated sitemap contains blog pages and excludes product/case-study placeholder routes.
- `npm.cmd run lint` could not complete because the existing ESLint flat-config compatibility setup throws a circular-structure error while loading `next/core-web-vitals`; this occurs before file-level lint results are produced.
- `git diff --check` completed without whitespace errors.

## External references

- Google recommends descriptive, useful page titles and people-first content in its [SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide).
- Google's [sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap) says a sitemap is a discovery hint, not a guarantee of crawling or indexing, and should list canonical URLs intended for Search.
- Google Search Central's [June 2026 documentation updates](https://developers.google.com/search/updates) record that FAQ rich results were removed from Search in May 2026.
- Google's [Business Profile guidance for service businesses](https://support.google.com/business/answer/10514743) explains service-area and hybrid businesses; [eligibility rules](https://support.google.com/business/answer/13763036) require in-person customer contact.

## Not completed from this repository

Search Console submission, indexing requests, Business Profile verification, backlink outreach, and production crawl/Core Web Vitals review require live Google/property or website access. The public site was not reachable from the audit environment, so production HTTP status, rendered page titles, mobile behavior, and Core Web Vitals still need an external check after deploy.
