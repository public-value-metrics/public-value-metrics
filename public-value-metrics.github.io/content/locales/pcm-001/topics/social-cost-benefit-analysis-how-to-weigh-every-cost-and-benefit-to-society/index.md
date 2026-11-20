# Social Cost-Benefit Analysis: How to Weigh Every Cost and Benefit to Society

Social cost-benefit analysis dey change every cost and benefit of policy or programme — market and non-market — into one common money unit, dey discount future flows to present value, and dey net dem off to produce one single number: dis proposal make society better off or no, and by how much?

## Wetin make am matter

SCBA na di default quantitative method for di economic case of [Green Book appraisal](../green-book-appraisal-how-uk-government-dey-judge-spending-proposals/): HM Treasury guidance require proposals to show positive net present social value (NPSV) anywhere wey dem fit credibly monetize benefits, and dem use willingness-to-pay as di basic valuation principle for non-market goods (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>, Chapter 5). Di discipline wey e enforce be say "social" cost-benefit analysis no be di same exercise as private-sector investment appraisal: e must include costs and benefits wey fall on third parties wey no be part of di transaction (externalities), e must use di [social discount rate](../social-discount-rate-how-government-dey-price-benefits-wey-go-come-later/) instead of commercial cost of capital, and e suppose apply [distributional weighting](../distributional-weighting-to-give-different-value-to-pound-based-on-who-receive-am/) where one pound matter pass for poorer household than richer one.

SCBA dey break down exactly where im critics expect: goods wey no get market analogue — clean air, social cohesion, di value of one life wey dem save — must dem monetize with [stated preference](../stated-preference-valuation-to-ask-people-wetin-dem-go-pay-for-something/) or [revealed preference](../revealed-preference-valuation-how-to-value-wetin-no-get-market-price-from-wetin-people-really-do/) methods, or dem must construct [shadow price](../shadow-pricing-how-to-put-price-on-things-wey-market-no-dey-price/). When monetization dey contested, no be just difficult, di Green Book itself recommend say make dem fall back to [cost-effectiveness analysis](../cost-effectiveness-analysis-for-government-decisions/) or [multi-criteria decision analysis](../multi-criteria-decision-analysis-how-to-weigh-options-wey-no-fit-share-one-unit/) instead of to force number wey nobody believe.

## Di maths

```
NPSV = Σ [t=0 to T] (Benefit_t − Cost_t) / (1 + r)^t

where:
  Benefit_t = all monetized benefits in year t, including non-market
              goods valued via stated/revealed preference or shadow price
  Cost_t    = all monetized costs in year t, including opportunity cost
              of resources (see ../opportunity-cost-in-public-spending/)
  r         = social discount rate (HM Treasury sets 3.5% declining to
              lower rates beyond year 30, per Green Book Annex A)
  T         = appraisal period

Benefit-cost ratio (BCR) = Σ PV(Benefits) / Σ PV(Costs)
```

BCR wey pass 1 (or NPSV wey pass zero) mean say net social value dey. Di Green Book value-for-money categories (as dem dey use for transport and infrastructure appraisal) label BCR ranges: below 1.0 na poor value for money, 1.0–1.5 na low, 1.5–2.0 na medium, 2.0–4.0 na high, and above 4.0 na very high. Sensitivity analysis — to run di NPSV again under pessimistic and optimistic assumptions — na must, no be option, because monetized non-market benefits get wide uncertainty bands.

## Example wey dem work out

**Local authority**: one council appraise £3m investment for new cycling and walking network for 20-year appraisal period at 3.5% discount rate.

```
Costs: £3m capital in year 0, £50,000/year maintenance (years 1-20)
PV(maintenance) ≈ £50,000 × 14.2 (20-year annuity factor at 3.5%) ≈ £710,000
Total PV(costs) ≈ £3.71m

Benefits (all monetized via published DfT/WHO valuation tools):
  Health benefit from increased physical activity: £180,000/year
  Absenteeism reduction: £40,000/year
  Decongestion (fewer car trips): £60,000/year
  Total benefit stream: £280,000/year
PV(benefits) ≈ £280,000 × 14.2 ≈ £3.98m

NPSV = £3.98m − £3.71m = +£0.27m
BCR = 3.98 / 3.71 = 1.07 → "low" value for money
```

Di scheme pass di bar but just small; sensitivity run wey use 20% lower health-benefit estimate (wey show di real uncertainty for how dem value physical activity) push di BCR below 1.0, and na exactly why di Green Book require make dem publish di sensitivity table beside di headline number, no be only di central estimate.

**Charity**: dem evaluate infant-mortality prevention programme wey cost £500,000/year with di value of statistical life (VSL) — na shadow price, no be market price wey dem observe — of about £2.1m (HM Treasury 2023-updated figure, wey itself come from stated-preference studies). To avert one infant death every year against £500,000 cost give BCR of 4.2, wey be "very high" value for money with plenty room — but di whole result dey rest on di VSL figure, and na why any SCBA wey use VSL must disclose am as assumption, no be fact.

## How e connect to software engineering

SCBA na di natural frame for platform and infrastructure investment decisions for government software — if you wan compare shared identity platform with departmental point solutions, for example, you must monetize benefits like less duplicate onboarding cost, less fraud, and faster time-to-service wey no get market price by themselves. Engineers wey dey build di service underneath suppose expect say programme leads go ask dem for inputs to dis analysis: unit costs of transactions (see [cost per transaction](../cost-per-transaction-wetin-e-really-cost-to-run-government-digital-service/)), expected volumes, and degradation/downtime costs. Di discipline wey matter pass to import: discount future benefits, name di counterfactual baseline clearly (see [counterfactual analysis](../counterfactual-analysis-wetin-for-happen-without-di-intervention/)), and never present single point estimate without im sensitivity range.

## Wahala dem wey you suppose avoid

- **To count benefits two times.** If you count "time saved" and "productivity gained from dat time" as separate benefit lines, you go overstate di case; time saved na di benefit, how dem use am after no be additional benefit unless dem get independent evidence.
- **To forget displaced costs.** Scheme wey move congestion from one road go another road, or move fraud from one channel go another, no create di net benefit wey im headline NPSV suggest — see [displacement and attribution](../displacement-and-attribution-how-to-know-who-take-wetin-and-who-fit-claim-credit/).
- **To use private discount rate.** If you apply commercial cost of capital (say 8–10%) instead of di social discount rate, you go always undervalue long-horizon public benefits like health and environmental gains — see [social discount rate](../social-discount-rate-how-government-dey-price-benefits-wey-go-come-later/).
- **To monetize wetin nobody dispute and to wave hand for wetin dem dispute.** If two-thirds of proposal benefit na efficiency saving wey dem monetize with confidence and one-third na wellbeing gain wey dem monetize shakily, di headline NPSV go quietly mix hard number with soft one; report dem separately.

## Sources

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Chapter 5.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury. "Green Book supplementary guidance: value of a statistical life." 2023.
  <https://www.gov.uk/government/publications/green-book-supplementary-guidance-value-of-a-statistical-life>
- Department for Transport. "TAG unit A1.1: cost-benefit analysis." Transport Analysis Guidance.
  <https://www.gov.uk/guidance/transport-analysis-guidance-tag>
