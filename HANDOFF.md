# Company Brain handoff

**Updated:** 1 September 2026

**Working directory:** `/Users/william.kitchin/repos/Company Docs/source`

**State:** the 1 September information-architecture cleanup is committed. The 31 August static export remains the production deployment behind Cloudflare Access until a new export is requested.

**Release commit:** `71bc7d3615214bb431cbf6ebc94fb731d4d8f1f4`

**Production deployment:** `6df8c0d1-1ecb-44e6-bdb9-cd4ff55c75e2` at `https://company-brain-4cp.pages.dev`

## 1 September 2026 session — progressive-disclosure cleanup

The local source now presents a smaller set of choices while keeping the detailed material available through search and direct links:

- `index.mdx`: replaced the long orientation page with a concise task-led home for the six most common jobs, plus essential reference links.
- `welcome/how-to-use.mdx`: moved the detailed orientation guidance into a dedicated How to use page.
- `docs.json`: reduced the visible Welcome list, grouped secondary Company, Systems, AI, and Projects material, and made all nested groups collapsed by default.
- `expand-nav.js` and `styles/styles.css`: removed forced expansion and restored Mintlify's native disclosure controls. Top-level section icons remain the visual landmarks; nested items do not receive decorative icons.
- `header-logo.js` and `docs.json`: restored the native light/dark/system theme choice instead of forcing light mode.
- The task-routing pages omitted from the primary sidebar still exist and remain reachable through links and search. No business facts were changed.

Run the full validation suite and inspect the rendered desktop and mobile navigation before exporting. Do not refresh `../static-site/` or deploy unless the user explicitly asks.

## 1 September 2026 session — reading measure and table fixes

`styles/styles.css` gained a final section (dated 1 September 2026) that: widens `#content-area` from Maple's 576px cap to 46rem (49rem at 2xl); adds slightly more space between paragraphs; drops tables to `--type-small` with compact leading and tighter cell padding; lowers the five-plus-column cell floor to 110px; styles a visible thin scrollbar on scrollable tables; and on mobile replaces the min-width-0 / overflow-wrap-anywhere compression (which shredded columns to single characters) with a 6rem cell floor plus horizontal scroll. Verified against the static export at 1440/1280/390 widths. Exported and deployed 1 September 2026 to both company-brain-share (basic-auth _worker.js preserved) and company-brain production; this deploy also carries the 31 August navigation fixes.

## 31 August 2026 session — structural review fixes

A structural review of the deployed site led to these changes (content facts untouched):

- `docs.json`: moved `operations/systems/visit-create-workflows` from the Salesforce group to the Visit Create group, where it belongs.
- `docs.json`: removed the duplicate `exhibitor-support/packages-and-pricing` entry from Events & Products > Commercial products (its canonical home stays in Exhibitor Support > Commercial journey). A cross-link was added to `products-services/overview.mdx` instead.
- `docs.json`: moved the Find an answer group (at that point, the root plus six task pages) from Reference & Governance up into Welcome, next to the homepage that routes to it. `AGENTS.md` was updated to match. The 1 September cleanup subsequently removed the routing stubs from the visible sidebar while retaining the pages.
- Replaced the stale parent-level `../HANDOFF.md` (it still described the retired four-tab navigation) with a pointer to this file.

Notes for the next agent:

- The 14 group `root` pages (e.g. `operations/systems/salesforce-org`, `company/business-model`) are intentionally not listed as ordinary sidebar items — they are the clickable group headers. Do not "re-add" them to `pages`, and do not remove the `root` keys.
- The earlier claim in this file that every MDX page appears in `docs.json` holds only via those `root` keys; a naive nav-vs-disk diff will report 14 "orphans" that are not orphans.
- Deploy is still manual (validate, export, wrangler — see README/AGENTS). The 31 August nav fixes are awaiting export + deploy.
- Thin stub pages remain in nav (`operations/integrations/api-catalogue`, `operations/integrations/webhooks`, `operations/systems/other-platforms`, `operations/projects/archive`): fill from owning sources or fold into their group overview — do not invent content.

## Current product decision

The Company Brain has **one internal audience**: Connect Meetings & Events staff and approved internal agents.

Exhibitor Support and Hosted Buyer Support are internal playbooks. They may include approved customer-safe response wording, but full pages are not public handbooks and must not be sent externally. Internal rationale, source conflicts, system fields, defects, ownership gaps, and escalation notes remain internal.

## Current architecture

1. Welcome
2. Company
3. People
4. Events
5. Exhibitors
6. Hosted buyers
7. Systems
8. AI
9. Projects
10. Reference

Section numbers are not shown in the interface. The left sidebar is a single API-docs-style list: section labels, then pages, with nested folders collapsed by default. The homepage and Find an answer page route staff by task rather than by organisational jargon.

## What changed in this refactor

- Rebuilt `docs.json` around the ten internal sections, clickable section roots, collapsed detail, search boosts, breadcrumbs, a task-led navbar, and a clear internal-use banner.
- Added permanent redirects for the retired `start/`, `customers/`, `systems/`, `ai/`, `projects/`, and `governance/` routes.
- Recovered content-rich AI, project, system, integration, and customer pages that had been deleted during the initial cleanup. The content was moved into the new structure rather than recreated from memory.
- Reframed exhibitor and hosted-buyer content as staff playbooks, including qualification, commercial or application journeys, registration, event preparation, onsite support, follow-up, response routing, and escalation boundaries.
- Restored the substantive twelve-event calendar and made `events/calendar/overview.mdx` the controlled route for time-sensitive event facts.
- Added landing and missing-context pages for company history, operating proposition, company structure, Connect, Connect Travel, revenue and renewals, people, systems, AI, integrations, reference, archive, and governance.
- Replaced placeholder integration, policy, and template pages with usable internal documentation.
- Reworked the homepage and orientation around common jobs: answer an exhibitor, answer a hosted buyer, check an event fact, find an owner, work with systems/data, and use AI safely.
- Tightened responsive styling, keyboard focus, reduced-motion behaviour, dark-mode text, accessible orange contrast, and dense-table handling on mobile.
- Added `noindex, nofollow` metadata, a non-redirecting internal 404 message, a reduced contextual-copy menu, and a complete product brief at `.mintlify/product-brief.md`.

## Source and evidence boundary

This pass changed information architecture, framing, navigation, and usability. It did **not** refresh the underlying business facts from Salesforce, Notion, or live event sources.

- Existing event facts retain their 12 August 2026 capture date and documented discrepancies.
- Salesforce figures and schema claims retain their existing point-in-time context.
- TODO markers remain where an application URL, contact, platform, deposit mechanism, deadline, or other fact is not confirmed.
- The site remains a derived mirror. Salesforce (`connect-prod`), Notion Company OS, and the Live Events wiki remain the owning sources described in `reference/source-of-truth.mdx`.

## Verification completed

All checks were run from `source/` against the final local state:

- Mintlify build validation: passed
- Mintlify broken-link scan: passed, no broken links
- Mintlify accessibility scan: passed for all 90 MDX pages and all media alt attributes
- Independent route scan: every root-relative link resolves to a page, asset, or declared redirect
- Navigation audit: every MDX page is listed in `docs.json`; every configured page exists
- Browser review: desktop light mode, desktop dark mode, mobile homepage, mobile navigation, internal support landing page, dense event table, and a legacy customer redirect
- Browser console on the final reviewed support page: zero errors

The Mintlify CLI is temporarily pinned to `mint@4.2.831`. The current `mint@4.2.834` package references an unpublished `@mintlify/agent-harness` dependency. Use the commands in `README.md` or `AGENTS.md` until that upstream package is repaired.

## Important remaining boundary

`robots: noindex, nofollow` discourages search-engine discovery; it is **not access control**. Cloudflare Access was verified on the current production deployment on 31 August 2026. Treat that as a release gate: every later deployment must be checked from an unauthenticated session to confirm the Access challenge still appears before the site is considered staff-only.

## Release follow-up

1. Run the pinned Mintlify validation, broken-link, and accessibility checks from `source/`.
2. Inspect the homepage, expanded and collapsed navigation, search, and mobile menu in a rendered preview.
3. Commit and push only after reviewing the diff and preserving unrelated local work.
4. Export and deploy only when explicitly requested.
5. After deployment, confirm an unauthenticated request receives an Access challenge, then recheck the homepage, both support landing pages, the event calendar, Source of truth, and one retired route as an approved staff user.

## Do not do

- Do not edit `../static-site/`; it is a frozen export.
- Do not infer missing event, pricing, eligibility, travel, or cancellation facts.
- Do not reconcile conflicting sources without an owner decision.
- Do not add customer records, attendee lists, credentials, secrets, or unpublished rates.
- Do not turn the support playbooks back into public-facing guides.
