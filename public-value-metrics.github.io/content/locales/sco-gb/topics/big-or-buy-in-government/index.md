# Big or Buy in Government

Big-or-buy is a structurit, risk-adjustit comparison o custom development against commercial or commodity acquisition, comparit on discountit [total cost of ownership](../total-cost-o-ownership-in-government-it/), time-tae-value, an risk. Government is structurally a buyin sector — the Technology Code of Practice sets a presumption tae commodity an cloud solutions — yet engineerin teams inside departments still default tae bigging, for the same reasons biggers aywhaur dae.

## Why it maitters

The Government Digital Service's Technology Code of Practice (<https://www.gov.uk/guidance/the-technology-code-of-practice>) an the accompanyin Service Manual guidance on decidin whether tae big or buy push departments tae justify bespoke development against a presumption that commodity capability shuid be bocht, no biggit, an that anely genuinely novel, mission-differentiatin capability warrants custom code. HM Treasury's optimism bias supplementary guidance tae the Green Book, drawn frae the 2002 Mott MacDonald review o lairge public procurements, gies IT projects the widest uplift range o onie category assessed — capital cost estimates recommendit for uplift by 10% at the laich end an by up tae 200% at the heich end afore they're uised in appraisal, reflectin hoo badly software biggs hae historically been unnerestimatit athort public procurement. Big-or-buy analysis exists precisely tae force that risk adjustment ontae the table afore approval, raither than lettin it surface as an in-year owerspend request.

## The maths

```
Compare ower the same 3–5 year horizon, discountit at the Green Book
social discount rate (see social-discount-rate.md):

NPV_option = PV(benefits, shiftit by time-tae-value) − PV(TCO)

Risk adjustments (Green Book optimism bias pattern):
  big cost × 1.1–3.0        (IT project uplift range, Mott MacDonald)
  big time-tae-value + 40–60% (deployment delay prior)
  buy: add integration reality-check an contract exit costs insteid

Decision drivers, in the order they usually decide:
  1. differentiation — is this capability the mission, or plumbin?
  2. time-tae-value × cost o delay (see cost-of-delay-in-public-programmes.md)
  3. risk-adjustit total cost o ownership
```

## Wrocht example

A local authority needs a case-management system for adult social care. Buy: SaaS at £180,000/year, live in 4 months. Big: estimatit £900,000 plus £150,000/year maintenance, live in 14 months.

```
Risk-adjustit big cost = 900,000 × 1.4 = £1,260,000
5-year TCO:
  buy  = 180,000 × 5 = £900,000
  big = 1,260,000 + 150,000 × 5 = £2,010,000

Delay term: the system avoids £40,000/month in duplicatit assessments;
big arrives 10 months later than buy.
CoD = 10 × 40,000 = £400,000

Effective comparison: £900,000 (buy) vs £2,010,000 + £400,000 = £2,410,000 (big)
```

Buy wins by roughly £1.5 million ower five year, an the lairgest single line efter the big estimate itsel is the delay cost that a pure capex comparison wad niver hae surfaced.

## Link tae saftware ingineerin

The disciplines that transfer straucht frae this analysis intae delivery practice: **prior-based risk adjustment** — the Mott MacDonald uplift is the software equivalent o Green Book optimism bias applied mechanically, sae teams shuid argue for exceptions tae it raither than assumin their estimate is the exception; **comparator honesty** — the alternative tae bigging is the best available buy option, no "naething", that ties straucht tae [opportunity cost in public spending](../opportunity-cost-in-public-spendin/); an **honest TCO comparison** — ilka big proposal shuid be comparit against a buy option's fu [total cost of ownership](../total-cost-o-ownership-in-government-it/), no its list price. Whaur big genuinely wins, the [cost of delay](../cost-o-delay-in-public-programmes/) o the additional big time shuid be priced explicitly in the business case, no left as an unstatit assumption that time disnae maitter.

## Pitfaws

- **Comparin vendor list price tae an un-risk-adjustit big estimate**: this flatters big twice ower, aince on cost an aince on schedule.
- **Zero-priced internal labour**: ceevil service engineerin time is treatit as "free" acause it's awready on the departmental headcount budget, which hides its true opportunity cost against ither wark that team could be daein.
- **Unpriced lock-in baith weys**: vendor exit an data-portability costs are real, but sae is a bespoke big's bus-factor an its dependency on keepin a wee, haurd-tae-replace in-hoose team ower its life.
- **Mission-differentiation claimit for plumbin**: "this is core tae us" assertit aboot integration middleware or a document store — test it against whether a citizen or caseworker wad iver notice whilk ane is runnin unnerneath.

## Sources

- Central Digital and Data Office, Technology Code of Practice. <https://www.gov.uk/guidance/the-technology-code-of-practice>
- GOV.UK Service Manual, deciding whether to build or buy technology. <https://www.gov.uk/service-manual>
- HM Treasury, Green Book supplementary guidance on optimism bias. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
