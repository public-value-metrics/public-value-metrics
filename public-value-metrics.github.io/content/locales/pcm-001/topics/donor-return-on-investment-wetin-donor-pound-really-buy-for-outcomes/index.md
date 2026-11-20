# Donor Return on Investment: Wetin Donor Pound Really Buy for Outcomes

Donor return on investment na wetin one specific donor pound really buy for outcomes — no be di charity operating ratios, and no be di charity own return on im total budget. E dey change ROI from di organization perspective (how efficiently we dey run) to di donor perspective (wetin my marginal contribution dey change), and pipo dey commonly, and wrongly, treat di two numbers as di same thing.

## Wetin make am matter

Charity own "ROI," as far as dem dey use di phrase at all, usually dey describe something like [cost per beneficiary](../cost-per-beneficiary-wetin-e-cost-to-reach-each-person/) or [charity overhead ratio](../charity-overhead-ratio-why-e-no-be-good-measure-of-efficiency/) — organisational efficiency measures. Donor ROI na totally different question: as dis charity already get other income, wetin *dis* donor money add for di margin? If charity go deliver di same programme with or without one particular £10,000 gift — because e get plenty reserves, or because another funder go fill di gap — di donor ROI of dat gift near zero, no matter how good di charity overall overhead ratio or cost per outcome look.

Na di same additionality question wey dey under [value for money](../value-for-money-di-test-whether-public-spending-dey-worth-am/) assessment for UK public spending and [additionality and deadweight](../additionality-and-deadweight-wetin-programme-really-cause/) for programme evaluation: value wey dem create fit only count for funder to di extent say e no go happen anyway. Major donor-advised platforms and effective-giving organizations (Giving What We Can, GiveWell) build dia recommendations explicitly around dis distinction, dem no dey ask "na good charity be dis" but "dis charity get unfilled room for more funding so dat my gift go be additional."

## Di maths

```
Donor ROI ≠ Charity's operating efficiency

Donor ROI  ≈  (Outcome wey dem achieve with di gift) − (Outcome wey go
               don happen without am, i.e. di counterfactual)
             ─────────────────────────────────────────────────
                              Size of di gift

Key inputs:
  - Room for more funding (di charity dey funding-constrained for di margin?)
  - Funging (another donor go don fill di gap?)
  - Marginal cost-effectiveness for di specific funding level (costs often
    dey rise as intervention scale pass di population wey easiest to reach)
```

See [effective altruism cost-effectiveness](../effective-altruism-cost-effectiveness-how-to-rank-charity-by-di-good-wey-each-dollar-do/) to know how GiveWell dey operationalize di "room for more funding" question, and [counterfactual analysis](../counterfactual-analysis-wetin-for-happen-without-di-intervention/) for di general method.

## Example wey dem work out

Donor dey choose between two £5,000 gifts:

- **Charity C**: get fully funded core programme with £2 million for reserves and waiting list of funders; di marginal £5,000 go likely enter reserves or lower-priority activity. Estimated donor-additional outcome: minimal — di money no clearly dey change wetin go happen.
- **Charity D**: small, evidence-backed programme wey don publicly state say e go need turn away 200 people next quarter without additional £50,000, and don raise £42,000 of am. Di marginal £5,000 very likely go fund real additional delivery — say, 20 additional people wey dem serve, at di charity own stated cost per beneficiary of £250.

Di same gift size, di same donor, radically different donor ROI — no be because Charity C na worse organization (e fit get better cost-per-outcome figure overall) but because im marginal funding gap don already close.

## How e connect to software engineering

Donor platforms and giving-recommendation tools too often dey show only organization-level efficiency metrics (overhead ratio, cost per beneficiary) because na wetin charities dey publish for annual reports and na wetin easiest to pull enter comparison table. To represent donor ROI properly need different data point wey harder to source: charity stated current funding gap or "room for more funding," wey dey change throughout di year and e rarely be structured data. Platforms wey wan support genuine donor-ROI reasoning need either direct feed from funding-gap disclosures (as GiveWell dey maintain manually for im recommended charities) or explicit disclaimer say comparison table dey show organisational efficiency, no be donor additionality. See [charity overhead ratio](../charity-overhead-ratio-why-e-no-be-good-measure-of-efficiency/) for di metric wey pipo dey most often, and wrongly, confuse donor ROI with.

## Wahala dem wey you suppose avoid

- **To confuse charity efficiency with donor additionality.** Well-run, low-overhead charity fit still get near-zero marginal donor ROI if e no dey funding-constrained.
- **To ignore funging.** If big institutional funder go don cover di gap anyway, individual donor gift go displace dat funder money instead of to add new delivery.
- **To assume say cost-effectiveness dey linear at scale.** Dem often dey serve di beneficiaries wey cheapest to reach first; marginal cost per outcome dey frequently rise as programme expand, so di ROI on di next pound no be di same as di ROI on di average pound wey dem don already spend.
- **No stated funding gap.** Charity or platform wey no fit talk wetin di next £X go fund no fit support genuine donor-ROI claim, only average-cost one.

## Sources

- Giving What We Can, on funding gaps and cost-effectiveness in donation decisions. <https://www.givingwhatwecan.org/>
- GiveWell, "Our criteria" (room for more funding as an explicit criterion). <https://www.givewell.org/how-we-work/our-criteria>
- HM Treasury, the Green Book: appraisal and evaluation in central government. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-governent>
