# Build or Buy for Government: How to Choose

Build-vs-buy na structured, risk-adjusted comparison of custom development against commercial or commodity acquisition, wey dem compare on discounted [total cost of ownership](../total-cost-of-ownership-in-government-it-di-full-cost-of-system-from-buy-till-e-die/), time-to-value, and risk. Government na structurally buying sector — di Technology Code of Practice set presumption toward commodity and cloud solutions — but engineering teams inside departments still dey default to build, for di same reasons wey builders everywhere dey build.

## Wetin make am matter

Di Government Digital Service Technology Code of Practice (<https://www.gov.uk/guidance/the-technology-code-of-practice>) and di accompanying Service Manual guidance on how to decide whether to build or buy dey push departments to justify bespoke development against presumption say dem suppose buy commodity capability, no be build am, and say only genuinely novel, mission-differentiating capability deserve custom code. HM Treasury optimism bias supplementary guidance to di Green Book, wey dem draw from di 2002 Mott MacDonald review of large public procurements, give IT projects di widest uplift range of any category wey dem assess — dem recommend make capital cost estimates go up by 10% at di low end and by up to 200% at di high end before dem use dem for appraisal, wey show how badly dem don historically underestimate software builds across public procurement. Build-vs-buy analysis exist exactly to force dis risk adjustment onto di table before approval, instead of to let am show up later as in-year overspend request.

## Di maths

```
Compare over di same 3–5 year horizon, discounted at di Green Book
social discount rate (see social-discount-rate.md):

NPV_option = PV(benefits, shifted by time-to-value) − PV(TCO)

Risk adjustments (Green Book optimism bias pattern):
  build cost × 1.1–3.0        (IT project uplift range, Mott MacDonald)
  build time-to-value + 40–60% (deployment delay prior)
  buy: add integration reality-check and contract exit costs instead

Decision drivers, for di order wey dem usually decide:
  1. differentiation — dis capability na di mission, or na plumbing?
  2. time-to-value × cost of delay (see cost-of-delay-in-public-programmes.md)
  3. risk-adjusted total cost of ownership
```

## Example wey dem work out

One local authority need case-management system for adult social care. Buy: SaaS at £180,000/year, live in 4 months. Build: estimated £900,000 plus £150,000/year maintenance, live in 14 months.

```
Risk-adjusted build cost = 900,000 × 1.4 = £1,260,000
5-year TCO:
  buy  = 180,000 × 5 = £900,000
  build = 1,260,000 + 150,000 × 5 = £2,010,000

Delay term: di system dey avoid £40,000/month for duplicated assessments;
build arrive 10 months later than buy.
CoD = 10 × 40,000 = £400,000

Effective comparison: £900,000 (buy) vs £2,010,000 + £400,000 = £2,410,000 (build)
```

Buy win by around £1.5 million over five years, and di largest single line after di build estimate itself na di delay cost wey pure capex comparison no for ever show.

## How e connect to software engineering

Di disciplines wey transfer directly from dis analysis go into delivery practice: **prior-based risk adjustment** — di Mott MacDonald uplift na di software equivalent of Green Book optimism bias wey dem apply mechanically, so teams suppose argue for exceptions to am instead of to assume say dia own estimate na di exception; **comparator honesty** — di alternative to build na di best available buy option, no be "nothing", wey connect directly to [opportunity cost in public spending](../opportunity-cost-for-public-spending-wetin-you-lose-when-you-choose-one-option/); and **honest TCO comparison** — every build proposal suppose compare against full [total cost of ownership](../total-cost-of-ownership-in-government-it-di-full-cost-of-system-from-buy-till-e-die/) of buy option, no be im list price. Where build genuinely win, dem suppose price di [cost of delay](../cost-of-delay-for-public-programmes-wetin-delay-dey-cost/) of di additional build time clearly for di business case, no be to leave am as unstated assumption say time no matter.

## Wahala dem wey you suppose avoid

- **To compare vendor list price to build estimate wey no get risk adjustment**: dis one dey flatter build two times, once on cost and once on schedule.
- **Internal labour wey dem price as zero**: dem dey treat civil service engineering time as "free" because e dey already inside di departmental headcount budget, and dis one hide im true opportunity cost against other work wey dat team for fit do.
- **Lock-in wey dem no price for both directions**: vendor exit and data-portability costs real, but di bus-factor of bespoke build real too, and di way e depend on to keep small, hard-to-replace in-house team for im whole life.
- **Mission-differentiation wey dem claim for plumbing**: "dis one core to us" wey dem assert about integration middleware or document store — test am against whether citizen or caseworker go ever notice which one dey run underneath.

## Sources

- Central Digital and Data Office, Technology Code of Practice. <https://www.gov.uk/guidance/the-technology-code-of-practice>
- GOV.UK Service Manual, deciding whether to build or buy technology. <https://www.gov.uk/service-manual>
- HM Treasury, Green Book supplementary guidance on optimism bias. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
