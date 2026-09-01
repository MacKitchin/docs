# Connect Company Brain

Instructions for anyone — person or agent — editing this site or answering from it.

This site is a **derived, retrieval-friendly mirror** of Salesforce (`connect-prod`), the Notion **Company OS** workspace, and the **Live Events** wiki. It documents structure, definitions, ownership, and process. It does not hold record-level customer data. When this site and a canonical source disagree, the source wins.

Read [How to use this brain](/welcome/how-to-use), [Source of truth](/reference/source-of-truth), [Guardrails](/operations/ai/guardrails), and [Known issues](/reference/known-issues) before answering a customer-facing question or changing a fact.

## Repository layout

The git root is this `source/` directory. The parent folder (`Company Docs/`) is an export bundle, not a git repo.

| Path | What it is |
| --- | --- |
| `source/` | Editable Mintlify project. Change MDX and `docs.json` here. |
| `source/docs.json` | Site name, theme, single internal navigation, redirects, and search settings. New pages must be listed here. |
| `../static-site/` | Frozen HTML export. Do not edit. Re-export after content changes. |
| `../connect-meetings-main-static.zip` | Pinned snapshot of the same export. |

Preview and validate from this directory:

```bash
PUPPETEER_SKIP_DOWNLOAD=true npx --yes mint@4.2.831 dev --no-open
PUPPETEER_SKIP_DOWNLOAD=true npx --yes mint@4.2.831 validate
PUPPETEER_SKIP_DOWNLOAD=true npx --yes mint@4.2.831 broken-links
PUPPETEER_SKIP_DOWNLOAD=true npx --yes mint@4.2.831 a11y
```

The CLI is temporarily pinned because `mint@4.2.834` currently references an unpublished `@mintlify/agent-harness` package. Re-test the unpinned command before removing the pin.

Local static preview of the export: `cd ../static-site && node serve.js`.

## What the business is

**Connect Meetings & Events** is the meetings-and-events business unit inside **Informa Connect** (Informa PLC). Managing Director: Matt Johnson. EVP, Connect Meetings: Derek Rodriguez.

Two commercial engines:

1. **Events** — reverse-tradeshow marketplaces. Hospitality suppliers buy appointment packages. Event planners attend as **hosted buyers** (flights and hotel covered in exchange for a committed appointment schedule).
2. **Media** — advertising and amplification sold through **BizBash**, **TSNN**, and **Connect Travel**, plus event-attached amplification.

The sales model is **supplier-side**. We sell to suppliers and recruit buyers. Renewals are the revenue engine (the pages quote ~79% of supplier revenue; existing business wins at a higher rate and larger deal size than new logos).

Brands share one Salesforce org and one operations team. Brand is **not** a single field — see [Brands](/company/brands).

## One internal audience

The whole site is written for **Connect Meetings & Events staff and approved internal agents**. It is not a public exhibitor or hosted-buyer portal.

The **Exhibitor Support** and **Hosted Buyer Support** sections are internal playbooks. They may contain customer-safe response wording, but the surrounding rationale, system detail, exceptions, ownership gaps, and escalation notes remain internal. Do not forward a full page to a customer.

Customer-facing agents may be trained on approved, retrieval-safe parts of these playbooks. They must still follow the page-level source, confidence, and escalation rules. Do not write public sales copy into internal pages, and do not treat a readable page as permission to disclose all of it.

## Information Architecture

The knowledge base follows a task-led progression:

```
Welcome → Company & Strategy → People & Ownership → Events & Products
  → Exhibitor Support / Hosted Buyer Support → Systems & Data
  → AI & Automation → Projects → Reference & Governance
```

The homepage and Find an answer page route by job. The sidebar groups stable domains. Avoid numbering section names; the information architecture should survive additions without being renumbered.

## Sidebar order

1. **Welcome** — overview, orientation, Find an answer, customer FAQs
2. **Company & Strategy** — company, brands, business model, sales, revenue and renewals
3. **People & Ownership** — departments, routing, org chart, directory
4. **Events & Products** — canonical calendar, event families, commercial products
5. **Exhibitor Support** — internal playbook from qualification through follow-up
6. **Hosted Buyer Support** — internal playbook from eligibility through follow-up
7. **Systems & Data** — Salesforce, Visit Create, Notion, data, reporting, integrations
8. **AI & Automation** — guardrails, agents, retrieval, Elysia, automation
9. **Projects** — active change work and archive
10. **Reference & Governance** — glossary, source registry, standards, templates, issues, change log

## Read this map first

| Need | Page |
| --- | --- |
| **Orientation** | [Company Brain](/) · [How to use](/welcome/how-to-use) · [Source of truth](/reference/source-of-truth) · [Glossary](/reference/glossary) · [Customer FAQs](/welcome/customer-faqs) |
| **Business** | [Who we are](/company/overview) · [Business model](/company/business-model) · [Sales process](/company/sales-process) · [Brands](/company/brands) · [BizBash](/company/bizbash) · [TSNN](/company/tsnn) |
| **Events** | [Event overview](/events/overview) · [Calendar](/events/calendar/overview) — customer-facing event facts start and stop here. [Flagship Marketplaces](/events/connect-marketplace) · [Regional Marketplaces](/events/regional) · Connect Travel: [eTourism](/events/connect-travel) · [Sports & Summits](/events/sports-and-summits) · [BizBash Innovation Forum](/events/bizbash) |
| **Products** | [Products overview](/products-services/overview) · [Exhibitions](/exhibitor-support/packages-and-pricing) · [Sponsorships](/products-services/event-sponsorships) · [Media](/products-services/media-amplification) · [Hosted Buyer Programs](/hosted-buyer-support/overview) |
| **People** | [Departments](/people/departments) · [Who owns what](/people/who-owns-what) · [Org chart](/people/org-chart) · [Directory](/people/directory) |
| **Customer support** | [Exhibitor Support](/exhibitor-support/overview) · [Hosted Buyer Support](/hosted-buyer-support/overview) · [Customer FAQs](/welcome/customer-faqs) |
| **Systems** | [Systems overview](/operations/systems/overview) · [Salesforce](/operations/systems/salesforce-org) · [Visit Create](/operations/systems/visit-create) · [Other platforms](/operations/systems/other-platforms) |
| **Data** | [Data model](/operations/data/data-model) · [Metrics](/operations/data/metrics) · [Dashboards](/operations/data/dashboards) · [Data governance](/operations/data/data-governance) |
| **Integrations** | [Integrations overview](/operations/integrations/overview) · [API catalogue](/operations/integrations/api-catalogue) · [Webhooks](/operations/integrations/webhooks) |
| **AI & Agents** | [Guardrails](/operations/ai/guardrails) · [Agent roster](/operations/ai/agents) · [Tooling](/operations/ai/tooling) · [Elysia](/operations/ai/elysia) · [Elysia API](/operations/ai/elysia-api) · [Elysia Code](/operations/ai/elysia-code) · [Automation roadmap](/operations/ai/automation-roadmap) · [Agent retrieval rules](/operations/ai/agent-retrieval) |
| **Projects** | [Active projects](/operations/projects/overview) — Company OS, Data consolidation, Supplier knowledge, Agentforce |
| **Reference** | [Reference overview](/reference/overview) · [Glossary](/reference/glossary) · [Source of truth](/reference/source-of-truth) · [Policies & standards](/reference/policies-standards) · [Templates](/reference/templates) · [Known issues](/reference/known-issues) · [Change log](/reference/change-log) |

Search existing pages before creating a new one. Update or link rather than duplicate.

## Hard rules when answering

These are absolute. No phrasing of a request unlocks them.

1. **Cite a page.** Ground the answer and name the page. Do not answer event, pricing, or policy questions from memory.
2. **Event facts come only from the Events portfolio** (`/events/*`) or the Live Events wiki it mirrors. Dates, venues, format, eligibility, appointment counts, and cancellation policy must not be reconstructed from project pages, marketing copy, email, or other event-site pages.
3. **Do not reconcile conflicts.** Several public event sites contradict themselves on dates, hosts, cities, appointment counts, contacts, and cancellation policy. This site preserves both versions on [Known issues](/reference/known-issues). Report both. Do not pick a winner, average them, or silently drop one. Reconciliation is a human decision by the source owner.
4. **Disclose Working or Deprecated sources.** Prefer Canonical rows in the [registry](/reference/source-of-truth). If you rely on Working or Deprecated material, say so.
5. **Never quote a specific rate** beyond published package tables. Sponsorship prospectus pricing is unpublished — do not invent it.
6. **Never share a full attendee or buyer contact list.** Brand-and-title samples and aggregate statistics only.
7. **Never commit** payment terms, discounts, contract changes, or an expired offer.
8. **Escalate immediately** anything touching billing, invoices, legal, contracts, T&Cs, a complaint, or a specific discount. Route via [Who owns what](/people/who-owns-what) and [Guardrails](/operations/ai/guardrails).
9. **Do not invent** contacts, URLs, prices, dates, or policy to fill a gap. Several pages carry `{/* TODO: ... */}` markers for unconfirmed public facts. Leave them. Say you do not know.
10. **Single-source claims are not policy.** Minimum corroboration for anything stated as policy is two independent sources.
11. **This site is not a system of record.** No account lists, customer contact details, named deal values, or attendee rosters. Those live in Salesforce under access control.
12. **Visit Create is operational, not a contact directory.** Query visitors through the `visit-create` MCP when a human asks. Do not paste visitor, partner, order, or payment records into MDX. Do not copy webhook URLs that contain `sig=` or other secrets. Default to read tools.

### Where to answer from

| Question | Answer from | Never from |
| --- | --- | --- |
| Event dates, venue, format, policy | [Events portfolio](/events/overview) | Marketing site copy, project pages, memory |
| Supplier or hosted-buyer "how do I…?" | [Customer FAQs](/welcome/customer-faqs), then the matching internal support playbook | Memory, email, or an FAQ pair marked When not to use |
| How a deal moves / stages / IO | [Sales process](/company/sales-process), [Data model](/operations/data/data-model) | Invented stage meaning |
| Package contents and published prices | [Packages](/exhibitor-support/packages-and-pricing), [Business model](/company/business-model) | Inferred or interpolated prices |
| Buyer or attendee composition | Aggregate stats and sample brand-and-title lists | Record-level exports |
| Metric definitions and SOQL | [Metrics](/operations/data/metrics) | A deck or a remembered number |
| Object and field meaning | [Data model](/operations/data/data-model) | Guessing from the label |
| Billing, invoices, terms | Nothing. Escalate | Anything |
| Internal process | Canonical Company OS sources | Deprecated material presented as settled |
| Visit expos, registration types, webhook pipelines | [Visit Create](/operations/systems/visit-create), [API](/operations/systems/visit-create-api), [workflows](/operations/systems/visit-create-workflows) | Visitor exports, webhook URLs with secrets |
| Elysia / Elysia Code / Informa AI gateway | [Elysia](/operations/ai/elysia), [Elysia API](/operations/ai/elysia-api), [Elysia Code](/operations/ai/elysia-code) | Credential files, Notion credential tables |

Customer-facing agents may ground on the Customer FAQs library, Knowledge Articles, and Live Events. They must not ground on raw email, project pages, marketing site copy, or Deprecated sources.

## Hard rules when editing

- **Do not invent facts** to close a TODO, complete a table, or make a page feel finished. Confirm against the owning system, or leave the TODO.
- **Do not paper over a conflict.** If two sources disagree, keep both and flag them on [Known issues](/reference/known-issues). Notes in square brackets are unresolved discrepancies carried from the source — leave them.
- **Do not add record-level data** (named customers, deal values, attendee rosters, personal contact details beyond the staff directory).
- **Do not treat this site as authoritative over Salesforce or Notion.** If you find drift, report it to the owner on the registry rather than "fixing" the source from here.
- **Do not edit `../static-site/`.** It is an export.
- **Do not introduce `mint.json`.** Config is `docs.json` only.
- Record new agents, prompts, and MCP tools in the AI & Agent Library **before** launch. Notion and Zapier automations are not yet documented — treat assumptions about them as unverified.

### Unowned or unverified — do not invent an owner

- Customer Success (area) and Finance (area) have no recorded owner.
- Operations owner conflicts: Team HQ says Rachel Piper; Areas database says Andrew Dysart. Both are logged.
- Reporting dashboards, company policies, and training materials are **Working**, not Canonical.
- Public exhibitor and hosted-buyer contacts/URLs are still TODO on several guide pages.

## Terminology

Full definitions: [Glossary](/reference/glossary). Use these terms as written.

| Use | Do not use | Why |
| --- | --- | --- |
| Connect Meetings & Events | "Connect Meetings Inc", "Informa Events" as the unit name | Legal/reporting line is Informa Connect → this business unit |
| hosted buyer | "VIP guest", "sponsored attendee" as the product name | Specific programme with a deposit and appointment commitment |
| marketplace / reverse tradeshow | "expo", "booth show" as the format | Buyers sit; suppliers rotate |
| supplier | "exhibitor" when describing the wider account category | Exhibitor is acceptable for the customer role and in the Exhibitor Support section |
| product year | calendar year of the close, unless you mean close date | A Dec 2026 close can be product year 2027 |
| area vs project | treating a department as a project | Areas are ongoing; projects end |
| Canonical / Working / Deprecated | "official" / "draft" / "old" as substitutes | Registry truth levels |
| `connect-prod` | "Salesforce" when you mean this org | Org ID `00D30000001H2naEAC` |
| Insertion Order / IO | "contract" when you mean the Salesforce Opportunity | Every Opportunity carries `IO_Number__c` |
| Power Pass | "general admission" | Access and education, no scheduled appointments |
| Fully Registered | "registered" when you mean confirmed attendance | `Registration_Stage__c`; only Fully Registered counts |

Backticked names like `Total_Spend_This_Product_Year__c` are literal Salesforce API names in `connect-prod`.

Disambiguation when someone says an everyday word:

| They say | They mean |
| --- | --- |
| Customer, client | `Account` |
| Deal, opportunity, IO | `Opportunity` (+ `OpportunityLineItem` for products) |
| Registration, attendee | `Registration__c` |
| Event, marketplace | `Marketplace__c` (or Campaign via `Registration__c.Meeting_Event__c`) |
| Prospect | `Lead` (the object is labelled "Prospect" in this org) |

Supplier accounts: `Primary_Category__c LIKE 'Supplier-%'`.

## Style

- British spelling on this site: organisation, programme, centre, travelling.
- Write the support playbooks to the staff reader: "confirm the exhibitor's event" rather than "confirm your event". Customer-safe response examples may address the customer as "you".
- Use second person for staff procedures and third person for descriptions of the company, customers, systems, and policy.
- Active voice. One idea per sentence. Lead with the fact, then the caveat.
- Sentence case headings: "Package options", not "Package Options".
- No marketing filler ("seamless", "robust", "cutting-edge"), no emoji, no decorative bold.
- Bold for UI elements and key terms on first use. Backticks for API names, org aliases, field values, emails, and paths.
- Be concrete: dates, venues, dollar figures, field names. Name the source of every figure.
- Published marketing figures are approximate. CRM figures are point-in-time. Say which.
- Product and sponsorship prices are **source-dated**. The Marketplace sponsorship deck is Tampa 24–26 Aug 2026; the media kit is 2025. Availability counts in those docs are not live inventory.

### Frontmatter

Every page needs `title` and `description`. Most pages also set `icon`. Use `sidebarTitle` when the H1 would wrap badly in the sidebar (`index.mdx` → "Overview"; `introduction.mdx` → "Introduction").

```yaml
---
title: "Clear, descriptive title"
description: "One sentence that says what the reader gets."
icon: "lucide-or-font-awesome-name"
---
```

### Files, links, components

- Kebab-case filenames matching the folder: `events/connect-marketplace.mdx`.
- Internal links: root-relative, no extension — `/events/overview`, not `../overview.mdx`.
- New pages must be added to the correct group in `docs.json` or they stay hidden.
- Prefer existing Mintlify components: `<Note>`, `<Info>`, `<Tip>`, `<Warning>`, `<Check>`, `<Steps>`, `<AccordionGroup>`, `<CardGroup>` / `<Card>`, `<Tabs>`, tables.
- `<Warning>` for hard limits, conflicts, and data-quality landmines. `<Note>` for context. `<Tip>` for the load-bearing commercial or retrieval fact on the page.
- Unverified items: `{/* TODO: confirm X. Do not fabricate. */}` — keep this shape.
- Code blocks need a language tag. SOQL examples live on [Metrics](/operations/data/metrics) and should stay consistent with the definitions there.

### Page shells

Project pages follow the Company OS six-section shell: Overview, Goals and success criteria, Key decisions, Next steps, Risks and blockers, Related docs. The Master Projects database row is authoritative over the page body.

## Salesforce and metrics

- Org: **`connect-prod`**, ID `00D30000001H2naEAC`. Canonical for client and account data. Refresh schema with `sf sobject describe` / `sf data query`.
- This site documents **structure**. Query the org for **contents**. Do not paste record data into MDX.
- Brand split: use `OpportunityLineItem.Organization__c` (`Meetings`, `Travel`, `BizBash`, `TSNN`). Do not use `Product_Type__c` or `Event_Name__c` as a brand field.
- Product categories on lines: `Digital`, `Event`, `Event Amplification`, `Special Projects`.
- Cash revenue: exclude `Barter__c = true`. At AdBook line level, cash is `AB2__ABPayType__c = 'PaidFor'`. Not every opportunity uses AdBook — check `AB2__Order_Created__c` before relying on `AB2__` fields.
- Default filters unless the question requires otherwise: `Account_Status__c != 'Inactive'`, `StageName NOT IN ('Expired', 'Closed Lost')`, `IsDeleted = false`. Include Closed Lost only for win/loss; include Expired only when analysing stale pipeline.
- `Opportunity.Type` (New vs Existing) is the most predictive commercial field. `Opportunity_Product_Type__c` is 100% null — do not analyse it.
- `Amount` can change after Closed Won. For a historical figure, check `Change_Made_After_Closed_Won__c` and `Initial_Close_Won_Date__c`.
- Metric definitions have one home: [Metrics](/operations/data/metrics). If a deck disagrees with those queries, the query wins until a human changes the definition.
- Territory is derived from `BillingState`, not a territory object. Values: Midwest, Northeast, South, West, International.
- Connect and BizBash account data is **not fully merged**. Do not assume a BizBash advertiser account has an owner (26 team assignments vs ~20,876 advertiser accounts).
- Outreach and Artisan AI log automated email to `Task`. Do not treat every activity row as a human send.

## People, email, and PII

- Staff directory and org chart are mirrored from Master People (canonical) / Team HQ (front door). All staff addresses on this site are `@informa.com`.
- External event sites publish conflicting contact pages (`@informa.com` vs `@connectmeetings.com`) and conflicting titles. Do not quote an external contact without checking [Known issues](/reference/known-issues).
- Do not add customer, subscriber, or hosted-buyer PII. Do not put secrets, tokens, or org credentials in MDX.
- Known directory defects (leave them flagged, do not "clean up"): Claudia Curry's role is a placeholder and her email is `claudia.gunn@informa.com`; Alexa Dye has two recorded managers — treat Rachel Piper as correct.

## Escalation

| Topic | Goes to |
| --- | --- |
| Billing, invoices, payment terms | Human, Finance routing (area currently unowned) |
| Contracts, legal, T&Cs | Human, Legal routing |
| Complaints | Human, named account owner |
| Specific discounts | The account's sales owner |
| Event operations and logistics | Events — Tinsley Conway |
| Hosted buyer eligibility and experience | Rachel Piper's area |
| Event calendar / Live Events wiki | Mac Kitchin |
| Salesforce schema, agents, this site, Company OS | Mac Kitchin |
| Client and account data, sales process | Andrew Dysart |
| Hosted buyer datasets | Bill Mathis |
| Information systems | Wei Zheng |
| Connect marketplace sales | Suzi Schnell |
| BizBash sales | Michela Giovannotto |
| Media and travel sales | Andrew Dysart |

## Editing workflow

1. Read `docs.json` and two or three sibling pages in the same section.
2. Check [Source of truth](/reference/source-of-truth) for who owns the fact and whether the source is Canonical, Working, or Deprecated.
3. Check [Known issues](/reference/known-issues) so you do not "fix" a logged conflict.
4. Edit or add MDX. Keep TODOs for anything unverified.
5. Add new pages to `docs.json` in the right group.
6. Run the pinned validation, broken-link, and accessibility commands above.
7. Do not refresh `../static-site/` unless the user asked for a new export.

## Common mistakes

- Answering an event question from a project page or from a public `/contact/` page that conflicts with `/contact-us/`.
- Quoting one cancellation policy without establishing registrant type (hosted buyer page vs Terms & Conditions).
- Using close date when the question is about product year, or the reverse.
- Splitting revenue by `Product_Type__c` instead of `Organization__c`.
- Treating "Registered" as attendance.
- Filling a TODO or a missing regional price from a flagship table.
- Adding customer record data "for realism".
- Editing the static export instead of `source/`.

## Base44 dev environment

The repo runs in the Base44 sandbox via `docker-compose.base44.yml` (a `node:22` container that bind-mounts the source and runs `npx --yes mint@4.2.831 dev --no-open --host 0.0.0.0 --port 3000`). No external credentials are needed — the Mintlify CLI runs entirely locally. Search shows a "Run mint login" notice in the logs; that only affects the search feature, not the preview itself.

Verify it is up: `docker compose -f docker-compose.base44.yml ps` (the `web` service should be `healthy`) and `curl -sf http://localhost:3000/`. Edits to MDX/`docs.json` hot-reload in the preview.
