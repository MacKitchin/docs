# Handoff — Connect Company Brain

**Date:** 12 August 2026 (three passes in this workspace)
**Workspace:** `/Users/william.kitchin/repos/Company Docs`
**Git root:** `source/` (this directory). Parent folder is an export bundle, not a git repo.
**Branch:** `main`, tracking `origin/main`. Base commit of the original export: `d7ef1e449c2ed94bd0fc3b0e1bf97ce69f74f6c2`.
**Status:** All work below is **uncommitted**. Nothing has been pushed. `static-site/` has **not** been re-exported. `mint dev` is **not** running (Safari preview was opened, then the process was killed).

Read **`AGENTS.md`** before editing or answering from this site. That file is standing law. This file is session context: what changed, what is unfinished, and where to look.

---

## What this project is

Connect Company Brain is a Mintlify documentation site for **Connect Meetings & Events**, the meetings-and-events business inside **Informa Connect** (Informa PLC).

It is a **derived, retrieval-friendly mirror** of:

| System | What it owns |
| --- | --- |
| Salesforce `connect-prod` (org `00D30000001H2naEAC`) | Accounts, deals, registrations, revenue |
| Notion **Company OS** | Projects, people, SOPs, source-of-truth registry |
| Live Events wiki (Notion) | Canonical event facts |
| Visit Create (Create API v2) | Event registration capture. Salesforce is the record after the webhook lands |

This site documents structure, definitions, ownership, and process. It does **not** hold record-level customer data. When this site and a canonical source disagree, the source wins.

**Goal of the build:** a single place a new hire or an AI agent can read before answering anything. Three audiences, three tabs, one spine.

| Tab | Reader | Must not contain |
| --- | --- | --- |
| Company Brain | Staff and internal agents | Sales copy |
| Exhibitor Guide | Paying hospitality suppliers | Org IDs, SOQL, Salesforce defects |
| Hosted Buyer Guide | Event planners | Supplier rates, attendee lists |

The commercial model is **supplier-side reverse tradeshows**: suppliers buy appointment packages; planners attend as **hosted buyers**. Renewals are the revenue engine. Four brands share one org: **Connect**, **BizBash**, **TSNN**, **Connect Travel**.

---

## What the previous session did

Work ran 12 August 2026 in this workspace. Requests, in order.

### 1. Replaced the Mintlify starter `AGENTS.md`

`source/AGENTS.md` was still the generic Mintlify template. It is now project-specific: retrieval rules, terminology, Salesforce pitfalls, escalation table, sidebar contract.

A thin pointer also lives at `../AGENTS.md` so tools that open the parent folder still find the rules.

### 2. Reordered Company Brain for knowledge flow

The old sidebar was grouped by topic type and fought the reading path already written on How to use. Implemented:

- Events before products; products before people
- Systems and AI before projects
- Source of truth moved into **Start here**; Known issues stays last
- People: Departments → Who owns what → Org chart → Directory
- AI: Guardrails → roster → tooling → roadmap
- Projects follow their own dependency chain: Company OS → data consolidation → supplier knowledge → Agentforce
- How-to-use new-hire path now puts the calendar before the org chart
- Homepage Active work moved to the bottom; project table reordered
- Every Company Brain page except Known issues ends with a single **Next** card along that spine

### 3. Researched Events, Travel and Sports; added Connect Travel

Source hub: [informaconnect.com/events-travel-sports](https://informaconnect.com/events-travel-sports/). It is a **four-vertical portal**, not a calendar.

| Vertical | Status |
| --- | --- |
| Meetings, Events & Tradeshows | Already on this site |
| Sports Tourism | Already on Sports and summits |
| Destination Marketing & Strategy | **Was missing** — eTourism Marketplace + eTourism Summit |
| Travel & International Tourism | Only listed Connect Marketplace and Spring Marketplace |

New page: `events/connect-travel.mdx`. Capture date **12 August 2026**.

| Event | Published facts | Overlap |
| --- | --- | --- |
| eTourism Marketplace | 18–20 Nov, Hilton West Palm Beach. Year not on hero. Hosted DMO (travel + hotel, up to 35 meetings). Supplier **\$6,250**. | Same dates as Winter Marketplace. Hotel-block URL is `connect-winter-supplier`. |
| eTourism Summit 2027 | 21–23 Apr 2027, Wynn Las Vegas. Paid conference: marketers \$1,600 / \$1,895, suppliers \$3,100 / \$3,495. | Same dates and hotel as Spring Marketplace. Badge includes the Spring Marketplace tradeshow floor. |

Different product from a Connect regional: hosted audience is **DMO marketers**, not event planners.

### 4. Researched bizbash.com; added brand + Innovation Forum

BizBash was a one-liner plus the 2025 media kit. The site is a full media product.

New pages:

- `company/bizbash.mdx` — editorial verticals, print, lists, awards, webinars, directory, team mismatches
- `events/bizbash.mdx` — **BizBash Innovation Forum, 23–25 August 2026, Tampa Convention Center**, the day before Connect Marketplace in the same building. Application-only. No public prices.

Did **not** create a page per editorial vertical, a second media-kit page, or directory listings.

### 5. Customer FAQ extract, sales process, TSNN, hosted-buyer ops, dashboard index

Second session, still 12 August 2026. Wrote the five pages recommended after the first handoff.

| Page | Source | Notes |
| --- | --- | --- |
| `start/customer-faqs.mdx` | Notion Customer FAQs `collection://7c6fd142-8b3f-4f6a-91d3-93674d7fc0ff` | **29** rows, all status In progress, last validated 26 June 2026. Registry still says ~31. Short answers extracted, not rewritten. Sensitive When-not-to-use rows kept. Did not paste Salesforce Task IDs or named customers from evidence summaries. |
| `company/sales-process.mdx` | Record Types & Business Processes (live SF KB) + data model | Canonical Business Processes database (`collection://e0f76bcb-3487-444c-bd3f-dc7966acedba`) returned **zero rows**. Page discloses that. |
| `company/tsnn.mdx` | tsnn.com 12 August 2026 | About / Advertise / Contact / Awards / Top 250 / calendar. No Fifty Over 50 explainer on the site. |
| `systems/hosted-buyer-ops.mdx` | Visit Create API + VisitRegistrationProcessor + FAQ + public qualification | Internal only. Deposit versions left unreconciled. |
| `systems/dashboards.mdx` | SOQL on `Dashboard` | 200+ records. Indexed recently modified company/public/HBX/travel/ops dashboards only. No live figures. |

### 6. Visit Create pages (product, API, workflows)

Third pass. User asked for dedicated Visit Create documentation and pointed at [create-v2.json](https://api.visitcloud.com/create/docs/specs/create-v2.json). Grounded on that spec, the live `visit-create` MCP, `sf-visit-webhook`, `Visit-Create-MCP`, and the sanitised template `visit-to-salesforce-webhooks-automation-workflows`. There is **no standalone `visit` CLI** on this machine.

| Page | Role |
| --- | --- |
| `systems/visit-create.mdx` | What Visit is for Connect; six type IDs we actually sync; 29 live expos from `visit_list_expos` |
| `systems/visit-create-api.mdx` | Create v2 resources, auth, paging, rate limit, webhook contract, MCP tools, plugin skill |
| `systems/visit-create-workflows.mdx` | Five Apex pipelines, Site paths, match/dedup, email-once, recovery |

Connect is not one hosted-buyer webhook. Five isolated receivers:

| Pipeline | Site path | Type IDs | Writes to |
| --- | --- | --- | --- |
| Hosted Buyer | `/visit/webhook/*` | `1ze3uz619` | `Registration__c` |
| Connect Supplier | `/visit/supplier/*` | `1ze7qthhh`, `1zenu5xxe` | `Supplier_Registration__c` |
| eTourism Destination Marketer | `/visit/etourism/*` | `1zhfq3ufw` | `Registration__c` |
| Brand Experience Pass | `/visit/brand-experience/*` | `1zhfq3ug0` | `Registration__c` |
| Industry Supplier Pass | `/visit/industry-supplier/*` | `1zhfq3ug1` | `Registration__c` |

Marketplace 2026 (`3512dko89j55x`) had live visitor webhooks to `/visit/webhook` (`2hbdc022kyqqu`) and `/visit/supplier` (`3lythtvqv0sqv`), `state=wait`, last send 12 August 2026.

**Did not** paste visitor/partner/order records, API keys, or webhook URLs containing `sig=` (a disabled Power Automate webhook on Marketplace 2026 has a secret in the query string).

### 7. Safari preview

User asked to launch the updated site. `npx mint dev --no-open --port 3000` must be run **from `source/`** (running from the parent folder fails: "must be run in a directory where a docs.json file exists"). Preview started; Safari opened home plus Visit Create, Customer FAQs, and TSNN. The mint process was later killed. It is not running now.

### 8. Elysia pages

User asked to search local disks for Elysia / elysia-code / elysia-api and create dedicated pages. Found console, Web App, `~/Elysia API Docs`, `Dev/elysia-code-latest` (0.3.0), Notion Code + Guidebook. **Did not** copy `Elysia Credentials.txt` or the Notion workspace/config/user/API key table.

| Page | Role |
| --- | --- |
| `ai/elysia.mdx` | Platform, Community vs Professional, local inventory |
| `ai/elysia-api.mdx` | Stage/dev hosts, OAuth, chat stream, agents/content |
| `ai/elysia-code.mdx` | CLI 0.3.0, compression, models, slash commands |

Prod API host remains **unconfirmed**. Chat path conflict (`/v1/ai/chat/stream/completion` vs documented v2/v3) left unreconciled.

---

## Current sidebar (do not reshuffle lightly)

```
Start here          Overview → How to use → Source of truth → Glossary → Customer FAQs
The company         Who we are → Business model → Sales process → Brands → BizBash → TSNN
Events portfolio    Calendar → Flagships → Regionals → Connect Travel → Sports → Innovation Forum
Products & services Overview → Sponsorships → Media
People & org        Departments → Who owns what → Org chart → Directory
Data & systems      Salesforce → Data model → Metrics → Dashboards → Integrations → Visit Create → API → Workflows → Hosted buyer ops
AI & automation     Guardrails → Agents → Tooling → Elysia → API → Code → Roadmap
Projects            Overview → Company OS → Data consolidation → Supplier knowledge → Agentforce
Governance          Known issues
```

Config: `docs.json`. New pages **must** be added there or they stay hidden.

---

## Files created this session

| Path | Role |
| --- | --- |
| `AGENTS.md` | Standing editing and retrieval rules (replaced starter) |
| `HANDOFF.md` | This file |
| `company/bizbash.mdx` | BizBash brand |
| `events/connect-travel.mdx` | eTourism Marketplace + Summit |
| `events/bizbash.mdx` | Innovation Forum |
| `start/customer-faqs.mdx` | Customer FAQ extract |
| `company/sales-process.mdx` | Opportunity lifecycle |
| `company/tsnn.mdx` | TSNN brand |
| `systems/hosted-buyer-ops.mdx` | Internal hosted-buyer path |
| `systems/dashboards.mdx` | Salesforce dashboard index |
| `systems/visit-create.mdx` | Visit Create product + live expos |
| `systems/visit-create-api.mdx` | Create v2 spec, MCP, plugin |
| `systems/visit-create-workflows.mdx` | Five Salesforce webhook pipelines |
| `ai/elysia.mdx` | Elysia platform + local inventory |
| `ai/elysia-api.mdx` | HTTP API, auth, chat stream |
| `ai/elysia-code.mdx` | CLI 0.3.0 / Claude Code gateway |

Plus a large set of edits to existing MDX (Next cards, calendar counts, known issues, glossary, brands, regional enrichments, Spring/Winter co-location notes).

Untracked vs `origin/main` (13 files):

- `HANDOFF.md`
- `company/bizbash.mdx`, `company/sales-process.mdx`, `company/tsnn.mdx`
- `events/bizbash.mdx`, `events/connect-travel.mdx`
- `start/customer-faqs.mdx`
- `systems/dashboards.mdx`, `systems/hosted-buyer-ops.mdx`
- `systems/visit-create.mdx`, `systems/visit-create-api.mdx`, `systems/visit-create-workflows.mdx`
- `ai/elysia.mdx`, `ai/elysia-api.mdx`, `ai/elysia-code.mdx`

Everything else listed in `git status` is **modified**. Parent folder has `../AGENTS.md` and `../HANDOFF.md` (pointers only).

---

## Calendar now (12 events)

Was 9. Now 12. Exhibitor and Hosted Buyer guides still say **nine** on purpose — those guides are for Connect marketplace planners and hospitality suppliers, not DMO marketers or BizBash conference attendees. Do not "fix" that unless the user wants those audiences to see Travel/BizBash events.

| Event | Dates | Page |
| --- | --- | --- |
| BizBash Innovation Forum | 23–25 Aug 2026 | `/events/bizbash` |
| Connect Marketplace | 24–26 Aug 2026 | `/events/connect-marketplace` |
| Women's Summit | 27–28 Oct 2026 | `/events/sports-and-summits` |
| Connect Texas + Medical | 28–29 Oct 2026 | `/events/regional` |
| Sports Innovation Forum | 28–30 Oct 2026 | `/events/sports-and-summits` |
| Connect West | 4–5 Nov 2026 | `/events/regional` |
| Connect South + Faith | 9–10 Nov 2026 | `/events/regional` |
| Connect Winter Marketplace | 18–20 Nov 2026 | `/events/regional` |
| eTourism Marketplace | 18–20 Nov (year not on hero) | `/events/connect-travel` |
| Connect North | 22–24 Feb 2027 | `/events/regional` |
| Spring Marketplace | 21–23 Apr 2027 | `/events/connect-marketplace` |
| eTourism Summit | 21–23 Apr 2027 | `/events/connect-travel` |

---

## Conflicts found this session (already logged)

All live on source sites as of 12 August 2026. **Do not reconcile.** See `governance/known-issues.mdx`.

- Winter Marketplace body copy still says "nation's capital" while the venue is Palm Beach. Hero still says Winter Marketplace **2027** against **2026** dates.
- eTourism Marketplace meta/contact still say **Washington, D.C.** Hero is Palm Beach. DMO count is **50** on How to Attend and **75** on Who Attends. Recruiting widget still lists 21–23 Oct 2024.
- eTourism Summit hero is Wynn Las Vegas 2027; meta and Destination Marketing hub still say **Louisville**. FAQ dates and leftover Belize Wi-Fi. Who Attends page is Marketplace copy.
- BizBash About Us: **500,000** monthly readership vs 2025 kit **107K uniques / 231K views**.
- Innovation Forum hero: Tampa 23–25 Aug. Speakers meta: **Miami, 25–27 Aug**. Attend/visit meta still say sports marketing.
- Sarah Kloepple: About Us **Deputy Editor**; bylines and our directory **Editorial Director**.
- John D'Adamo and Jami Laub appear on bizbash.com/about-us and **not** in Master People / `people/directory.mdx`. They also last-modified Salesforce dashboards in 2025.
- TSNN About vs Advertise vs 2025 kit audience figures (160k/140k vs 53K/42.9K vs per-newsletter 10K/12K/8K/25K).
- TSNN About (Norcross + John Rice) vs Contact (Chicago + Chris Conwell). John Rice is Contractor in Master People; Advertise calls him VP of Sales. Michele Lautik vs Laufik.
- `Marketplace__c.Visit_Expo_Id__c` returned **null** on all 50 Marketplace rows via the Salesforce MCP user. `sf-visit-webhook` still documents expo-to-Marketplace pairs and Marketplace 2026 webhooks were firing. Treat as FLS until a human confirms.
- `sf-visit-webhook` README still says Winter Marketplace 2026 has no Visit expo. Live API has `14d0ea7t27s15`. eTourism Marketplace 2026 (`3ifgqc5icj4qz`) is also live and absent from that README table.
- eTourism Summit pipeline filters on `1zhfq3ufw`. Marketplace 2026 type list also returns `1zigwlgvs` / `1zigwlgvt` as eTourism Destination Marketer / Travel Industry Supplier. Do not assume those IDs are interchangeable.
- Visit Texas dates 27–28 Oct 2026 vs public site 28–29 Oct. Visit South + Faith 9–11 Nov vs public 9–10. Event facts still come from `/events/*`, not from Visit.

Older conflicts (North dates, West Tahoe sponsors, Texas Frisco copy, South Fort Worth copy, cancellation-policy split, contact-page split) were already on Known issues. They are still valid.

---

## What is not done

### Must do before calling the site published

1. **Commit** the `source/` changes (user did not ask to commit).
2. **Re-export `static-site/`** if anyone still publishes from the ZIP/export. The export is still the pre-session snapshot (47 pages). New pages will not appear there until `mint export` (or the equivalent used to produce this bundle) is run.
3. **Human review** of the new pages in a live `mint dev` preview. A preview was opened in Safari at `http://localhost:3000` (home, Visit Create, Customer FAQs, TSNN) and later killed; it is not running now.

### Research gaps (do not invent)

- **TSNN** brand page now exists. Remaining: 2026 media kit (site still offers 2025), Fifty Over 50 explainer not found on tsnn.com, Corporate Event News still has no page.
- **Corporate Event News** is named as a media partner; no dedicated page.
- **2026 BizBash media kit** is offered behind a form on [Build Your Brand](https://www.bizbash.com/build-your-brand-with-bizbash). We only have the 2025 kit on this site.
- Event Experience Awards **key-dates** and **new-categories** URLs 404'd on 12 August 2026. Entries are open; an article said submit by 1 October.
- Innovation Forum **speakers** page rendered empty; **no public pass prices**.
- eTourism Marketplace **year** is not printed on the hero. We inferred 2026 from branding, the 27 Oct block, and the Winter supplier hotel URL. Do not state the year as independently published.
- Connect North **venue** is still blank (city only).
- **Erden Mohl** is published on the eTourism Marketplace contact page and is not in the directory.
- **Winter Marketplace 2026** and **eTourism Marketplace 2026** Visit expos exist; webhook wiring for those two is not in the `sf-visit-webhook` README active-events table. Do not invent webhook IDs.
- **eTourism type ID** `1zhfq3ufw` vs live list `1zigwlgvs` — confirm with Mac before changing a filter.

### Pre-existing `{/* TODO */}` markers

These were already in the Exhibitor and Hosted Buyer guides. Leave them unless you have a verified public source.

- Public exhibitor sales contact and phone
- Hosted buyer application URL and HBX team inbox
- Regional higher package tiers
- Per-event sponsorship contacts
- Appointment-request window and which matching platform (Map Your Show / MatchPoint / custom)
- Airfare class, window, cap, travel agent
- Deposit-return timing and mechanism
- Post-event survey vendor/URL
- Club Connect event list
- Independent / third-party / DMC planner treatment
- Onsite concierge location/hours
- Supplier ROI benchmarks

### Tooling notes

- `npx mint validate` **crashed** on Node v26.7.0 (`is-online` / `p-cancelable`: "onCancel handler was attached after the promise settled"). `npx mint dev --no-open --port 3000` **did** start and served the updated site.
- If validate fails again, check `docs.json` parses and that every Next `href` has a matching `.mdx` file. Do not treat a Node 26 CLI crash as a content error.
- Do not edit `../static-site/` by hand.
- Mintlify config is `docs.json` only. Never introduce `mint.json`.

---

## How to work

```bash
cd "/Users/william.kitchin/repos/Company Docs/source"
npx mint dev --no-open --port 3000
# then: open -a Safari "http://localhost:3000"

npx mint validate      # may crash on Node 26
npx mint broken-links
```

Stale export preview (does **not** include this session):

```bash
cd "/Users/william.kitchin/repos/Company Docs/static-site"
node serve.js
```

**Edit MDX in British English.** Sentence-case headings. Second person on the two public guides. Cite the page. Internal links: root-relative, no extension (`/events/overview`). Unverified facts: `{/* TODO: confirm X. Do not fabricate. */}`.

**Hard limits** (full text in `AGENTS.md` and `ai/guardrails.mdx`):

- Event facts only from `/events/*` or the Live Events wiki
- Never quote unpublished rates or share attendee contact lists
- Never commit payment, contract, or discount terms
- Never invent to close a TODO
- Never add named customers, deal values, or attendee rosters
- Premier-tier "attendee list" on Innovation Forum is a sold sponsorship deliverable — agents still must not quote or invent one
- Visit Create is operational, not a contact directory. Do not paste visitor/partner/order/payment records into MDX. Do not copy webhook URLs that contain `sig=`. Default the `visit-create` MCP to **read** tools.

---

## Suggested next work (priority order)

1. Get a human to walk the new sidebar in `mint dev`, especially Visit Create, Customer FAQs, Sales process, TSNN, dashboards, and hosted-buyer ops.
2. Commit `source/` once they are happy.
3. Confirm `Visit_Expo_Id__c` FLS vs empty field, then wire Winter Marketplace 2026 (`14d0ea7t27s15`) and eTourism Marketplace 2026 (`3ifgqc5icj4qz`) webhooks if they should sync.
4. File or extract the **2026 BizBash media kit** (and a TSNN kit newer than 2025) and mark the 2025 kit as superseded where rates changed.
5. Populate the Salesforce **Business Processes** catalogue in Notion — the Canonical register points at an empty database.
6. Confirm Connect North venue and eTourism Marketplace year with Events / Ashleigh Trout; still do not invent.
7. Re-export `static-site/` only if this bundle is still the publish path.
8. Optionally add John D'Adamo and Jami Laub to the directory **after** Master People is updated — not from About Us alone.

---

## Resources

### This repo

| Resource | Path |
| --- | --- |
| Standing agent rules | `AGENTS.md` |
| Navigation | `docs.json` |
| Source-of-truth registry | `governance/source-of-truth.mdx` |
| Conflict log | `governance/known-issues.mdx` |
| Retrieval / new-hire path | `start/how-to-use.mdx` |
| Guardrails | `ai/guardrails.mdx` |
| Metric definitions / SOQL | `systems/metrics.mdx` |
| Data model | `systems/data-model.mdx` |
| 2025 media kit (source-dated) | `products-services/media-amplification.mdx` |
| Visit Create (product / expos) | `systems/visit-create.mdx` |
| Visit Create API | `systems/visit-create-api.mdx` |
| Visit Create workflows | `systems/visit-create-workflows.mdx` |
| Customer FAQ extract | `start/customer-faqs.mdx` |
| Mintlify skill (if installed) | `npx skills add https://mintlify.com/docs` |

### Live sites used this session

Capture date for all of these: **12 August 2026**. Recapture before restating dates, prices, or venues.

| URL | Used for |
| --- | --- |
| https://informaconnect.com/events-travel-sports/ | Hub / four verticals |
| https://informaconnect.com/meetings-events-tradeshows/events/ | Connect event index |
| https://informaconnect.com/destination-marketing-strategy/events/ | Linked eTourism Summit + Marketplace |
| https://informaconnect.com/etourism-marketplace/ and `/how-to-attend/`, `/who-attends/`, `/dmo-leaders/`, `/contact/` | eTourism Marketplace |
| https://informaconnect.com/etourism-summit/ and `/how-to-attend/`, `/who-attends/`, `/know-before-you-go/`, `/sponsors/` | eTourism Summit |
| https://informaconnect.com/connect-texas/ · `/connect-west/` · `/connect-south/` · `/connect-north/` · `/connect-winter-marketplace/` · `/connect-spring-marketplace/` | Regional / flagship refresh |
| https://informaconnect.com/bizbash-innovation-forum/ and `/how-to-attend/`, `/speakers/`, `/plan-your-visit/` | Innovation Forum |
| https://informaconnect.com/bizbash-event-experience-awards/ | 14th EEAs |
| https://www.bizbash.com · `/about-us` · `/publications` · `/events` · `/webinars` · `/on-demand` · `/build-your-brand-with-bizbash` · `/get-featured` · `/program/bizbash-lists` | BizBash brand |
| https://www.tsnn.com · `/about-us` · `/contact` · `/advertise-and-editorial-calendar` · `/trade-shows-conferences/tsnn-top-trade-show-list` · `/people-career-development/tsnn-opens-nominations-for-its-16th-annual-awards` · `/trade-show-calendar` | TSNN brand |
| https://directory.bizbash.com/ | Directory (JS-heavy; little extracted) |
| https://create.visitcloud.com/login | Visit Create admin login |
| https://connect.visitcloud.com/login | Visit Connect (exhibitor) login |
| https://api.visitcloud.com/create/docs/ | Interactive Create v2 console |
| https://api.visitcloud.com/create/docs/specs/create-v2.json | Visit Create API v2 OpenAPI spec |
| https://help.visitcloud.com/create/ | Create knowledgebase |
| https://help.visitcloud.com/create/wp-content/uploads/sites/2/2023/03/JSON_API_V2.pdf | JSON API v2 PDF (March 2023) |
| https://visitcloud.com/ | Vendor platform home |

### Internal systems (do not dump record data into MDX)

| System | Notes |
| --- | --- |
| `connect-prod` | Query for contents; this site documents structure only |
| Notion Company OS | Master Projects, Master People, Live Events, AI & Agent Library |
| Salesforce Knowledge Base | Schema, automation catalogue |
| Customer FAQs library | Registry says ~31; extract found **29** pairs, all In progress, last validated 26 June 2026. Agents cite `start/customer-faqs.mdx` |
| Visit Create | Registration capture. Query via `visit-create` MCP. Named Credential `Visit_API`. Do not dump visitor records into MDX |

### Local Visit / webhook repos (outside this workspace)

| Repo | Role |
| --- | --- |
| `/Users/william.kitchin/repos/sf-visit-webhook` | Production Apex: five pipelines, README active-events table, plugin skill |
| `/Users/william.kitchin/repos/Visit-Create-MCP` | MCP server (`visit-create`), 50+ tools |
| `/Users/william.kitchin/repos/visit-to-salesforce-webhooks-automation-workflows` | Sanitised template (no real expo/webhook IDs) |
| `sf-visit-webhook/plugins/visit-create-api/` | Bundled OpenAPI + `visit-create-api` skill |

There is **no** `visit` CLI on PATH.

### People to route to

| Topic | Owner |
| --- | --- |
| This site, Company OS, Salesforce schema, agents | Mac Kitchin |
| Event calendar / Live Events wiki | Mac Kitchin |
| Event delivery | Tinsley Conway |
| Hosted buyers | Rachel Piper |
| Connect marketplace sales | Suzi Schnell |
| BizBash sales / Innovation Forum premium passes | Michela Giovannotto · `bizbash.sales@informa.com` |
| Media and travel / eTourism | Andrew Dysart / Ashleigh Trout (`ashleigh.trout@informa.com`) |
| Client and account data | Andrew Dysart |
| Hosted buyer datasets | Bill Mathis |
| Visit Create / webhook pipelines / `Visit_API` | Mac Kitchin |

---

## Preview URLs (when `mint dev` is running)

- Home: http://localhost:3000
- Customer FAQs: http://localhost:3000/start/customer-faqs
- Sales process: http://localhost:3000/company/sales-process
- BizBash brand: http://localhost:3000/company/bizbash
- TSNN brand: http://localhost:3000/company/tsnn
- Innovation Forum: http://localhost:3000/events/bizbash
- Connect Travel: http://localhost:3000/events/connect-travel
- Calendar: http://localhost:3000/events/overview
- Dashboards: http://localhost:3000/systems/dashboards
- Visit Create: http://localhost:3000/systems/visit-create
- Visit Create API: http://localhost:3000/systems/visit-create-api
- Visit Create workflows: http://localhost:3000/systems/visit-create-workflows
- Hosted buyer ops: http://localhost:3000/systems/hosted-buyer-ops
- Known issues: http://localhost:3000/governance/known-issues
