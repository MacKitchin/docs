# Connect Company Brain

This directory is the editable Mintlify source for the internal Connect Meetings & Events knowledge base.

The site is written for staff and approved internal agents. The Exhibitor Support and Hosted Buyer Support sections are internal playbooks, not public customer guides.

## Work in the right directory

- Edit MDX, assets, and `docs.json` here in `source/`.
- Read `AGENTS.md` before changing a fact or answering from the site.
- Do not edit `../static-site/`; it is a frozen export.
- Use `.mintlify/product-brief.md` for the audience, jobs-to-be-done, and architecture decisions behind the site.

## Preview and verify

Run these commands from this directory:

```bash
PUPPETEER_SKIP_DOWNLOAD=true npx --yes mint@4.2.831 dev --no-open
PUPPETEER_SKIP_DOWNLOAD=true npx --yes mint@4.2.831 validate
PUPPETEER_SKIP_DOWNLOAD=true npx --yes mint@4.2.831 broken-links
PUPPETEER_SKIP_DOWNLOAD=true npx --yes mint@4.2.831 a11y
```

The preview normally opens at `http://localhost:3000`.

The CLI is temporarily pinned because `mint@4.2.834` currently references an unpublished package. Re-test the current release before removing the pin.

## Information architecture

The sidebar has ten stable sections:

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

The homepage and Find an answer page route by staff task. Nested sidebar groups organise detail without making every page visible at once.

## Source boundaries

- Event dates, venues, formats, eligibility, appointment counts, and cancellation information come from `events/` or the Live Events wiki mirrored there.
- Salesforce, Notion Company OS, and the Live Events wiki remain the owning sources; this site is a derived reference layer.
- Preserve conflicts and source dates. Do not infer a missing fact or fill a TODO.
- Do not add record-level customer data, credentials, secrets, unpublished rates, or attendee contact lists.
- Full support pages stay internal. Only approved response wording and verified customer-safe facts should be adapted into replies.

## Publishing

Local validation does not publish the site. Deployment is handled separately from this working directory and should only be run when explicitly requested.
