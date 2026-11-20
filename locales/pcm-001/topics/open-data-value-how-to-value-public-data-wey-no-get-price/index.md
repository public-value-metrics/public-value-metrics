# Open Data Value: How to Value Public Data wey No Get Price

Open data value na di problem of how to estimate wetin government and public data worth when e no get price: dem no dey sell am, so no revenue line dey, but still, when dem release am (weather records, transport timetables, postcode boundaries, company registers), e dey clearly generate economic and social activity downstream. E important to value am well because "e free to release" and "e no worth anything" both wrong, and software engineer wey dey decide whether to open API or dataset need better argument than either one.

## Wetin make am matter

Di most-cited top-down estimate come from McKinsey Global Institute 2013 report "Open data: Unlocking innovation and performance with liquid information", wey put di potential annual value of open data across seven domains — education, transportation, consumer products, electricity, oil and gas, healthcare, and consumer finance — at $3 trillion to $5 trillion a year globally, through mechanisms wey include more transparency, to match supply to demand more efficiently, and to enable new products and services wey dem build on di data. Dat figure na scenario estimate, no be outturn wey dem measure, and people dey quote am wrong all di time as if na revenue wey government fit capture directly, when di value mostly dey go to third parties — businesses, researchers, citizens — wey dey use di data, and na exactly di point of to open am instead of to sell am. UK Open Data Institute, wey Sir Tim Berners-Lee and Sir Nigel Shadbolt co-found for 2012, don since build body of more granular, bottom-up case studies — sector by sector, dataset by dataset — wey far more useful for real business case pass di McKinsey headline number, because dem show di mechanism of how value dey create, no be only di aggregate size.

## Di maths

Open data no get market price, so valuation methods dey take im place; three approaches dey repeat, and none of dem sufficient alone:

```
1. Cost-avoided / replacement-cost method:
   value ≈ wetin users for pay to produce or licence di equivalent
   data demsef — na lower bound, e no count value wey uses create
   wey di original producer no expect

2. Market-analogue / downstream-activity method:
   value ≈ revenue or savings wey businesses/services wey dem build
   on di data generate (e.g. satnav apps wey dem build on open mapping
   and traffic data) — e capture real economic activity but e hard to
   attribute am cleanly to di data release itself (see
   additionality-and-deadweight)

3. Contingent/stated-preference method:
   value ≈ wetin users talk say dem go pay, or di time wey dem talk say
   e save dem — see stated-preference-valuation for di general
   method and im biases

None of dem dey produce figure as clean as market price; credible
open data business cases dey triangulate across two or more, and dem
dey clear about which mechanism dey do di work.
```

## Example wey dem work out

**Illustrative national mapping/address data release** (methodology follow ODI-style case studies, figures na illustration of di scale wey such studies usually find):

```
Cost-avoided estimate:
  Businesses wey for otherwise licence equivalent address-matching
  data commercially, at estimated average licence cost of £4,000/
  year, across estimated 15,000 SMEs wey now dey use di free open dataset
  = 15,000 × £4,000 = £60,000,000/year for avoided licensing cost alone

Downstream-activity estimate (more speculative, need counterfactual):
  New delivery-routing and logistics products wey dem build on di open data
  wey no go exist, or go dey materially worse, without am —
  e need comparison against di counterfactual say di data stay
  closed or commercially licensed (counterfactual-analysis), because
  some of dat activity for happen anyway on paid data at higher
  price, and dat one na deadweight for di sense of "value wey opening am create"

Defensible business case go report di cost-avoided figure as di
solid lower bound, and treat di downstream-activity figure as
upper-bound scenario, no be fact.
```

## How e connect to software engineering

For engineers, di practical open-data-value question usually narrower pass di national headline figures: if we open dis specific API or dataset (instead of to keep am behind partner agreement), reuse go increase enough to justify di ongoing cost of to document am, version am and support am as public interface? Dat maintenance cost real and na di counterpart to di build-once-reuse-often economics of [government-as-a-platform](../government-as-a-platform-shared-components-wey-many-services-fit-use/) — di two topics close cousins, one na about shared code and infrastructure, di other na about shared data. Any open data value claim suppose pass check against [additionality-and-deadweight](../additionality-and-deadweight-wetin-programme-really-cause/) before e enter business case: activity wey for happen anyway, on commercially licensed data, no be value wey di *opening* create.

## Wahala dem wey you suppose avoid

- **To quote di McKinsey $3–5 trillion figure as if na UK-specific or as dis dataset share**: na global, seven-sector scenario estimate from 2013 — to use am as precise multiplier for one national dataset dey misrepresent wetin di number be.
- **No counterfactual**: to claim credit for all di downstream economic activity wey dem build on open data, without to ask how much of am for happen anyway on paid or licensed data at higher price (see [additionality-and-deadweight](../additionality-and-deadweight-wetin-programme-really-cause/) and [counterfactual-analysis](../counterfactual-analysis-wetin-for-happen-without-di-intervention/)).
- **To confuse cost of production with value wey dem create**: dataset wey cost plenty to collect no automatically valuable to release, and cheap one no automatically low-value — value dey follow downstream use, no be upstream cost.
- **To ignore di ongoing maintenance cost of "open"**: to publish one-off CSV extract no be di same commitment as to run documented, versioned, supported open API — to underfund di latter after di launch announcement na common way e dey fail.

## Sources

- McKinsey Global Institute, "Open data: Unlocking innovation and performance with liquid information" (2013). <https://www.mckinsey.com/business-functions/mckinsey-digital/our-insights/open-data-unlocking-innovation-and-performance-with-liquid-information>
- Open Data Institute. <https://theodi.org/>
