# SEO implementation notes

**Website:** https://uhmtech.com/  
**Updated:** 10 October 2026

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

The homepage now expresses four connected pillars in its existing content slots: CRM and business automation, custom software and SaaS, AI and system integrations, and customer operations. The current Zoho CRM page already covers the app set UHM Tech lists; separate pages for every Zoho product would need genuinely distinct scope and useful content before they should be published.

## Changes made

- Updated homepage title, description, visible hero copy, and homepage section headings to identify CRM implementation, business automation, custom software, and the Lahore/Pakistan location while retaining existing components and page structure.
- Aligned the homepage's four existing service labels to the primary service pillars without changing its layout.
- Rewrote key service, about, contact, and solution metadata around distinct commercial search intent. Added specific metadata for CRM, Zoho, HubSpot, Salesforce, Odoo, custom software, SaaS, and call center service pages.
- Corrected the call center service's visible name from the generic “Services Provider” to “Call Center Services.”
- Refined CRM and Zoho CRM titles, page copy, and Zoho lead-assignment article content around implementation, consulting, customization, automation, and supported Zoho modules. Updated edited blog dates so sitemap `lastModified` remains accurate.
- Used the street address supplied in the live-review notes (`122 K Johar Town, Lahore, Pakistan`) as the content default and `.env.example` value. Organization schema now separates street, locality, and country when the full address is configured.
- Made homepage and case-study copy explicit that the current profiles are illustrative, not reported client work.
- Added blog index and individual blog posts to the sitemap. Blog URLs use their publication/update date for `lastModified`; other URLs no longer claim they were modified at the time the sitemap was generated.
- Removed placeholder product listings and illustrative case studies from the sitemap and marked those routes `noindex` while their products are not available and their project profiles are explicitly illustrative. Their existing site pages remain accessible to visitors.
- Corrected Organization structured data to represent the configured city as `addressLocality`, rather than labeling “Lahore, Pakistan” as a street address. A configured business phone is included when available.
- Normalized canonical, Open Graph, sitemap, and Organization/WebSite URLs through the production-origin helper. The first build inspection caught `http://localhost:3000` in the generated homepage canonical when local environment config supplied localhost; this is now emitted as `https://uhmtech.com`.
- Removed FAQPage markup. Google announced the FAQ rich result feature was no longer shown starting 7 May 2026; the site's visible FAQ content remains available to visitors.
- Removed the `keywords` metadata field, which is not a substitute for clear, useful page content.
- Removed the Insights/blog link from the desktop and mobile navigation. Kept the blog routes available for later configuration, but marked the listing and individual posts `noindex, follow` and removed them from the sitemap.
- Added a Google Analytics `generate_lead` event after a successful contact-form submission. It sends only the form name; it is emitted only when the optional GA tag is configured.
- Added unique search titles and descriptions to the remaining app, AI automation, chat, email, API integration, and management-system service pages, using the stated Lahore/Pakistan service area.
- Connected Organization, WebSite, and Service JSON-LD entities through a stable organization `@id`; service markup now identifies Lahore and Pakistan rather than claiming worldwide service coverage.

## Search and local visibility notes

- A general web search for `site:uhmtech.com` during this review did not return the site's pages. This is an observation from the search results available here, not a definitive index coverage report. Search Console's Page indexing and URL Inspection reports are the sources to use for confirmed indexing status.
- The repository contains a Google site-verification HTML file, but no Search Console account/report access was available. Once the changes are deployed, verify the domain property, inspect the homepage and key service URLs, submit `https://uhmtech.com/sitemap.xml`, then check indexing and sitemap processing in Search Console.
- A Google Business Profile is appropriate only if the business makes in-person contact with customers at a location or serves customers in person as a service-area business. Use the true business name, phone, hours, and eligible location/service area; do not publish a virtual office as a storefront. Keep the same real business details on the site and legitimate directories.
- The local street address above came from the user-supplied live review. The public website was reachable during the 10 October check, but that does not independently verify the address or the active Netlify environment setting. Confirm `NEXT_PUBLIC_CONTACT_ADDRESS` is the correct real address before deploying; the public contact block and schema read from this setting.
- No search-volume figures, backlink scores, or ranking promises are included. Those require account-level tools and/or independent measurement. Build authority through real client-approved case studies, useful expert material, partner/vendor listings that are genuine, and relevant local business citations; do not buy or fabricate links or reviews.

## Actions requiring the site owner's accounts or evidence

1. In Netlify, set `NEXT_PUBLIC_CONTACT_ADDRESS` to the exact public address you want shown (`122 K Johar Town, Lahore, Pakistan` if this is correct), then deploy. Check both the contact page and footer after deployment.
2. In Google Search Console, inspect the home page and priority service URLs, review the Page indexing reasons in the supplied audit, and submit the sitemap again after deployment. A `noindex` exclusion for Products, Case Studies, and the unconfigured blog is expected for now.
3. Confirm Search Console reports the canonical host as `https://uhmtech.com`, and check whether any redirects, robots blocks, server errors, or duplicate canonicals explain the missing site results. Search operators are not a substitute for the Pages report.
4. Create/claim a Google Business Profile only if UHM Tech meets Google's in-person eligibility rules. If this is a service-area business, configure it as such and hide an address where customers are not received; do not use a virtual office.
5. To turn case studies into indexable SEO pages, provide verified project facts, client permission, before/after context, actual implementation details, and publishable results/screenshots. Then remove `noindex` and add the approved URLs to the sitemap.
6. For additional authority signals, provide real staff/author names, credentials, official partner/certification proof, and approved client testimonials. None have been invented or added.

## Implementation checks

- `npm.cmd run build` completed successfully, including TypeScript and static page generation.
- Inspected generated homepage metadata: the title and description are present, and the canonical URL is `https://uhmtech.com/` even though the local build environment uses localhost.
- Inspected generated Organization data: the supplied address renders as street `122 K Johar Town`, locality `Lahore`, country `PK`.
- Inspected generated pages: unavailable product pages, illustrative case studies, and blog pages emit `noindex`; the sitemap excludes product/case-study placeholders and blog URLs.
- `npm.cmd run lint` could not complete because the existing ESLint flat-config compatibility setup throws a circular-structure error while loading `next/core-web-vitals`; this occurs before file-level lint results are produced.
- `git diff --check` completed without whitespace errors.
- On 10 October 2026, the live `robots.txt` and `sitemap.xml` returned HTTP 200. The then-deployed sitemap still listed the blog, so deploy these changes and resubmit the updated sitemap in Search Console.
- Live browser checks at 390 × 844 found no horizontal overflow on the homepage or contact page. The homepage's navigation exposed the Insights link, which this change removes. One homepage load reported DOMContentLoaded at about 1.69 seconds and the load event at about 2.02 seconds; these single-run timings are not Core Web Vitals measurements or a performance score.
- No Google Analytics tag was present on the live homepage during the check. Configure `NEXT_PUBLIC_GA_MEASUREMENT_ID` in the deployment environment to collect pageviews and the new successful-lead event.
- Service-page metadata and structured-data changes were checked in the production build; verify final rendered output with Search Console URL Inspection and a structured-data validator after deployment.

## External references

- Google recommends descriptive, useful page titles and people-first content in its [SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide).
- Google's [sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap) says a sitemap is a discovery hint, not a guarantee of crawling or indexing, and should list canonical URLs intended for Search.
- Google's [SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) explicitly states there is no automatic change that guarantees a first-place ranking; content usefulness, crawlability, and earned discovery all matter.
- Google Search Central's [June 2026 documentation updates](https://developers.google.com/search/updates) record that FAQ rich results were removed from Search in May 2026.
- Google's [Business Profile guidance for service businesses](https://support.google.com/business/answer/10514743) explains service-area and hybrid businesses; [eligibility rules](https://support.google.com/business/answer/13763036) require in-person customer contact.

## Not completed from this repository

Search Console submission, indexing requests, Business Profile verification, backlink outreach, and field Core Web Vitals review require live Google/property access or a post-deployment measurement. The live site is reachable and its crawler files and mobile layout were checked, but Search Console index coverage and Core Web Vitals have not been verified.
