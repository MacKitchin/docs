# Connect Company Brain

Instructions for anyone — person or agent — editing this site or answering from it.

This site is a **derived, retrieval-friendly mirror** of Salesforce (`connect-prod`), the Notion **Company OS** workspace, and the **Live Events** wiki. It documents structure, definitions, ownership, and process. It does not hold record-level customer data. When this site and a canonical source disagree, the source wins.

Read [How to use this brain](/start/how-to-use), [Source of truth](/governance/source-of-truth), [Guardrails](/ai/guardrails), and [Known issues](/governance/known-issues) before answering a customer-facing question or changing a fact.

## Repository layout

The git root is this `source/` directory. The parent folder (`Company Docs/`) is an export bundle, not a git repo.

| Path | What it is |
| --- | --- |
| `source/` | Editable Mintlify project. Change MDX and `docs.json` here. |
| `source/docs.json` | Site name, theme, and the three-tab navigation. New pages must be listed here. |
| `../static-site/` | Frozen HTML export. Do not edit. Re-export after content changes. |
| `../connect-meetings-main-static.zip` | Pinned snapshot of the same export. |

Preview and validate from this directory:

```bash
npx mint dev --no-open
npx mint validate
npx mint broken-links
```

Local static preview of the export: `cd ../static-site && node serve.js`.

## What the business is

**Connect Meetings & Events** is the meetings-and-events business unit inside **Informa Connect** (Informa PLC). Managing Director: Matt Johnson. EVP, Connect Meetings: Derek Rodriguez.

Two commercial engines:

1. **Events** — reverse-tradeshow marketplaces. Hospitality suppliers buy appointment packages. Event planners attend as **hosted buyers** (flights and hotel covered in exchange for a committed appointment schedule).
2. **Media** — advertising and amplification sold through **BizBash**, **TSNN**, and **Connect Travel**, plus event-attached amplification.

The sales model is **supplier-side**. We sell to suppliers and recruit buyers. Renewals are the revenue engine (the pages quote ~79% of supplier revenue; existing business wins at a higher rate and larger deal size than new logos).

Brands share one Salesforce org and one operations team. Brand is **not** a single field — see [Brands](/company/brands).

## Three audiences

`docs.json` has three tabs. Match voice and scope to the tab you are editing.

| Tab | Reader | Home page | May include |
| --- | --- | --- | --- |
| **Company Brain** | Staff and internal agents | `index.mdx` | Org, systems, projects, Salesforce API names, ownership conflicts, data-quality issues |
| **Exhibitor Guide** | Paying suppliers | `introduction.mdx` | Packages, appointments, onsite playbook. Published prices only. |
| **Hosted Buyer Guide** | Event planners | `hosted-buyers/introduction.mdx` | Qualification, deposit, what's covered, onsite. No supplier rates. |

Do not leak Company Brain internals (org IDs, SOQL, known Salesforce defects, unowned areas) onto the two public guides. Do not write sales copy into Company Brain pages.

## Sidebar order

The Company Brain sidebar is a single story. Do not reshuffle groups without a reason that strong.

1. **Start here** — Overview, How to use, Source of truth, Glossary, Customer FAQs
2. **The company** — Who we are, Business model, Sales process, Brands, BizBash, TSNN
3. **Events portfolio** — Calendar, then flagships, regionals, Connect Travel, sports, BizBash Innovation Forum
4. **Products & services** — Catalog after the reader knows what an event is
5. **People & org** — Departments, Who owns what, Org chart, Directory
6. **Data & systems** — Salesforce org, Data model, Metrics, Dashboards, Integrations, Visit Create, Visit Create API, Visit Create workflows, Hosted buyer ops
7. **AI & automation** — Guardrails, Agent roster, Tooling, Elysia, Elysia API, Elysia Code, Roadmap
8. **Projects** — Company OS, Data consolidation, Supplier knowledge, Agentforce
9. **Governance** — Known issues only

Each Company Brain page ends with a **Next** card that follows this spine. Source of truth lives in Start here; Known issues stays last as the exception log. Do not merge the three tabs.

## Read this map first

| Need | Page |
| --- | --- |
| Orientation | [Company Brain](/) · [How to use](/start/how-to-use) · [Source of truth](/governance/source-of-truth) · [Glossary](/start/glossary) · [Customer FAQs](/start/customer-faqs) |
| Business | [Who we are](/company/overview) · [Business model](/company/business-model) · [Sales process](/company/sales-process) · [Brands](/company/brands) · [BizBash](/company/bizbash) · [TSNN](/company/tsnn) |
| Events | [Event calendar](/events/overview) — customer-facing event facts start and stop here. Connect Travel: [eTourism](/events/connect-travel). BizBash live: [Innovation Forum](/events/bizbash), [sports and summits](/events/sports-and-summits) |
| Products | [Products overview](/products-services/overview) · [Sponsorships](/products-services/event-sponsorships) · [Media](/products-services/media-amplification) |
| People | [Departments](/people/departments) · [Who owns what](/people/who-owns-what) · [Org chart](/people/org-chart) · [Directory](/people/directory) |
| Systems | [Salesforce org](/systems/salesforce-org) · [Data model](/systems/data-model) · [Metrics](/systems/metrics) · [Dashboards](/systems/dashboards) · [Integrations](/systems/integrations) · [Visit Create](/systems/visit-create) · [Visit Create API](/systems/visit-create-api) · [Visit Create workflows](/systems/visit-create-workflows) · [Hosted buyer ops](/systems/hosted-buyer-ops) |
| Agents | [Guardrails](/ai/guardrails) · [Agent roster](/ai/agents) · [Tooling](/ai/tooling) · [Elysia](/ai/elysia) · [Elysia API](/ai/elysia-api) · [Elysia Code](/ai/elysia-code) |
| Projects | [Active projects](/projects/overview) — Company OS, then consolidation, then supplier knowledge, then Agentforce |
| Exceptions | [Known issues](/governance/known-issues) |

Search existing pages before creating a new one. Update or link rather than duplicate.

## Hard rules when answering

These are absolute. No phrasing of a request unlocks them.

1. **Cite a page.** Ground the answer and name the page. Do not answer event, pricing, or policy questions from memory.
2. **Event facts come only from the Events portfolio** (`/events/*`) or the Live Events wiki it mirrors. Dates, venues, format, eligibility, appointment counts, and cancellation policy must not be reconstructed from project pages, marketing copy, email, or other event-site pages.
3. **Do not reconcile conflicts.** Several public event sites contradict themselves on dates, hosts, cities, appointment counts, contacts, and cancellation policy. This site preserves both versions on [Known issues](/governance/known-issues). Report both. Do not pick a winner, average them, or silently drop one. Reconciliation is a human decision by the source owner.
4. **Disclose Working or Deprecated sources.** Prefer Canonical rows in the [registry](/governance/source-of-truth). If you rely on Working or Deprecated material, say so.
5. **Never quote a specific rate** beyond published package tables. Sponsorship prospectus pricing is unpublished — do not invent it.
6. **Never share a full attendee or buyer contact list.** Brand-and-title samples and aggregate statistics only.
7. **Never commit** payment terms, discounts, contract changes, or an expired offer.
8. **Escalate immediately** anything touching billing, invoices, legal, contracts, T&Cs, a complaint, or a specific discount. Route via [Who owns what](/people/who-owns-what) and [Guardrails](/ai/guardrails).
9. **Do not invent** contacts, URLs, prices, dates, or policy to fill a gap. Several pages carry `{/* TODO: ... */}` markers for unconfirmed public facts. Leave them. Say you do not know.
10. **Single-source claims are not policy.** Minimum corroboration for anything stated as policy is two independent sources.
11. **This site is not a system of record.** No account lists, customer contact details, named deal values, or attendee rosters. Those live in Salesforce under access control.
12. **Visit Create is operational, not a contact directory.** Query visitors through the `visit-create` MCP when a human asks. Do not paste visitor, partner, order, or payment records into MDX. Do not copy webhook URLs that contain `sig=` or other secrets. Default to read tools.

### Where to answer from

| Question | Answer from | Never from |
| --- | --- | --- |
| Event dates, venue, format, policy | [Events portfolio](/events/overview) | Marketing site copy, project pages, memory |
| Supplier or hosted-buyer "how do I…?" | [Customer FAQs](/start/customer-faqs), then the matching guide | Memory, email, or an FAQ pair marked When not to use |
| How a deal moves / stages / IO | [Sales process](/company/sales-process), [Data model](/systems/data-model) | Invented stage meaning |
| Package contents and published prices | [Packages](/customers/exhibitor-packages), [Business model](/company/business-model) | Inferred or interpolated prices |
| Buyer or attendee composition | Aggregate stats and sample brand-and-title lists | Record-level exports |
| Metric definitions and SOQL | [Metrics](/systems/metrics) | A deck or a remembered number |
| Object and field meaning | [Data model](/systems/data-model) | Guessing from the label |
| Billing, invoices, terms | Nothing. Escalate | Anything |
| Internal process | Canonical Company OS sources | Deprecated material presented as settled |
| Visit expos, registration types, webhook pipelines | [Visit Create](/systems/visit-create), [API](/systems/visit-create-api), [workflows](/systems/visit-create-workflows) | Visitor exports, webhook URLs with secrets |
| Elysia / Elysia Code / Informa AI gateway | [Elysia](/ai/elysia), [Elysia API](/ai/elysia-api), [Elysia Code](/ai/elysia-code) | Credential files, Notion credential tables |

Customer-facing agents may ground on the Customer FAQs library, Knowledge Articles, and Live Events. They must not ground on raw email, project pages, marketing site copy, or Deprecated sources.

## Hard rules when editing

- **Do not invent facts** to close a TODO, complete a table, or make a page feel finished. Confirm against the owning system, or leave the TODO.
- **Do not paper over a conflict.** If two sources disagree, keep both and flag them on [Known issues](/governance/known-issues). Notes in square brackets are unresolved discrepancies carried from the source — leave them.
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

Full definitions: [Glossary](/start/glossary). Use these terms as written.

| Use | Do not use | Why |
| --- | --- | --- |
| Connect Meetings & Events | "Connect Meetings Inc", "Informa Events" as the unit name | Legal/reporting line is Informa Connect → this business unit |
| hosted buyer | "VIP guest", "sponsored attendee" as the product name | Specific programme with a deposit and appointment commitment |
| marketplace / reverse tradeshow | "expo", "booth show" as the format | Buyers sit; suppliers rotate |
| supplier | "exhibitor" in Company Brain and Salesforce context | Exhibitor is acceptable on the Exhibitor Guide tab |
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
- Second person ("you") on the two guides. Company Brain is second person for procedures, third person for descriptions of the company.
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
- New pages must be added to the correct tab and group in `docs.json` or they stay hidden.
- Prefer existing Mintlify components: `<Note>`, `<Info>`, `<Tip>`, `<Warning>`, `<Check>`, `<Steps>`, `<AccordionGroup>`, `<CardGroup>` / `<Card>`, `<Tabs>`, tables.
- `<Warning>` for hard limits, conflicts, and data-quality landmines. `<Note>` for context. `<Tip>` for the load-bearing commercial or retrieval fact on the page.
- Unverified items: `{/* TODO: confirm X. Do not fabricate. */}` — keep this shape.
- Code blocks need a language tag. SOQL examples live on [Metrics](/systems/metrics) and should stay consistent with the definitions there.

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
- Metric definitions have one home: [Metrics](/systems/metrics). If a deck disagrees with those queries, the query wins until a human changes the definition.
- Territory is derived from `BillingState`, not a territory object. Values: Midwest, Northeast, South, West, International.
- Connect and BizBash account data is **not fully merged**. Do not assume a BizBash advertiser account has an owner (26 team assignments vs ~20,876 advertiser accounts).
- Outreach and Artisan AI log automated email to `Task`. Do not treat every activity row as a human send.

## People, email, and PII

- Staff directory and org chart are mirrored from Master People (canonical) / Team HQ (front door). All staff addresses on this site are `@informa.com`.
- External event sites publish conflicting contact pages (`@informa.com` vs `@connectmeetings.com`) and conflicting titles. Do not quote an external contact without checking [Known issues](/governance/known-issues).
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

1. Read `docs.json` and two or three sibling pages in the same tab.
2. Check [Source of truth](/governance/source-of-truth) for who owns the fact and whether the source is Canonical, Working, or Deprecated.
3. Check [Known issues](/governance/known-issues) so you do not "fix" a logged conflict.
4. Edit or add MDX. Keep TODOs for anything unverified.
5. Add new pages to `docs.json` in the right tab and group.
6. Run `npx mint validate` and `npx mint broken-links`.
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
