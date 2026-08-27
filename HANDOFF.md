# Company Brain handoff

**Updated:** 27 August 2026

**Working directory:** `/Users/william.kitchin/repos/Company Docs/source`

**State:** source committed and pushed; 91-page static export generated and deployed to Cloudflare Pages; Cloudflare Access initialization awaiting an authenticated dashboard session

**Release commit:** `71bc7d3615214bb431cbf6ebc94fb731d4d8f1f4`

**Production deployment:** `6df8c0d1-1ecb-44e6-bdb9-cd4ff55c75e2` at `https://company-brain-4cp.pages.dev`

## Current product decision

The Company Brain has **one internal audience**: Connect Meetings & Events staff and approved internal agents.

Exhibitor Support and Hosted Buyer Support are internal playbooks. They may include approved customer-safe response wording, but full pages are not public handbooks and must not be sent externally. Internal rationale, source conflicts, system fields, defects, ownership gaps, and escalation notes remain internal.

## Current architecture

1. Welcome
2. Company & Strategy
3. People & Ownership
4. Events & Products
5. Exhibitor Support
6. Hosted Buyer Support
7. Systems & Data
8. AI & Automation
9. Projects
10. Reference & Governance

Section numbers are not shown in the interface. Top-level groups have landing pages; detailed groups are collapsed by default. The homepage and Find an answer page route staff by task rather than by organisational jargon.

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

`robots: noindex, nofollow` discourages search-engine discovery; it is **not access control**. The Pages deployment is currently public while Cloudflare Access is initialized. The Cloudflare account currently has no Access application, policy, or identity provider, and the deployment OAuth grant cannot create those resources. Complete the authenticated dashboard setup before treating the site as staff-only.

## Release follow-up

1. Sign in to the Cloudflare dashboard for account `b1681b984a74d7961e225e7dcfb49945`.
2. Initialize Cloudflare Access for `company-brain-4cp.pages.dev` and attach a staff-only allow policy.
3. Confirm an unauthenticated request receives an Access challenge instead of site content.
4. Confirm an approved staff identity can authenticate and open the homepage.
5. Recheck the homepage, both support landing pages, the event calendar, Source of truth, and one retired route after Access is active.

## Do not do

- Do not edit `../static-site/`; it is a frozen export.
- Do not infer missing event, pricing, eligibility, travel, or cancellation facts.
- Do not reconcile conflicting sources without an owner decision.
- Do not add customer records, attendee lists, credentials, secrets, or unpublished rates.
- Do not turn the support playbooks back into public-facing guides.
