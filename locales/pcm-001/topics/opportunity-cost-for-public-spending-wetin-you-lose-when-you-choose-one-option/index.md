# Opportunity Cost for Public Spending: Wetin You Lose When You Choose One Option

Opportunity cost na di value of di best alternative wey dem forgo when public body commit money, staff time, or political capital to one option instead of another. For department wey get fixed budget, every pound wey dem spend on one programme na pound wey no fit spend again on di next-best programme — di true cost of decision no be wetin e spend, na wetin e displace.

## Wetin make am matter

Public budgets dey cash-limited inside one spending review period, so — no be like growing private firm — government department no fit just "find more money" for good idea; to fund am mean say dem must stop to fund something else. HM Treasury Green Book treat dis one as foundation: every appraisal must compare intervention against "do minimum" baseline *and* against realistic alternative uses of di same resource, exactly because di real question wey Treasury spending team dey ask no be "dis one good?" but "dis one better pass wetin dis money fit buy elsewhere?" Di Green Book core appraisal principle — say public resources suppose flow go di intervention wey get di highest net social value per pound — na opportunity cost wey dem write as policy.

E easy to talk but e hard to apply because di "next-best alternative" hardly dey show for one business case. £2 million grant programme for youth employment dey compare, inside di business case, against to do nothing — but di honest comparator na di next-best youth employment intervention, or even di next-best use of £2 million anywhere for di portfolio, including non-employment spending. Di Magenta Book (HM Treasury, 2020) warn clear say evaluations wey compare "with intervention" to "without intervention" dey understate di bar wey intervention must clear, because "without dis intervention" no be di same as "with nothing at all" — di money wey dem release go fund something else.

## Di maths

```
Opportunity cost of to choose A = value of di best alternative B wey dem forgo

Net public value of A = value(A) − value(B), no be value(A) − 0
```

No universal formula dey because di alternative wey dem forgo depend on context, but di discipline fit apply generally: identify di realistic next-best use of di same budget line (no be idealized "do nothing"), value am on di same basis (monetized where e possible, per [social cost-benefit analysis](../social-cost-benefit-analysis-how-to-weigh-every-cost-and-benefit-to-society/)), and subtract.

## Example wey dem work out

**Department budget line**: £5 million digital-transformation fund fit finance exactly one of two proposals dis financial year.

- *Option A*: new case-management platform, monetized benefit £7.2 million over 5 years (efficiency savings plus faster case resolution).
- *Option B*: identity-verification service wey three departments go share, monetized benefit £6.4 million over 5 years.

Naïve business case for A dey compare £7.2 million of benefit against £5 million of cost and report 1.44:1 benefit-cost ratio — wey look strong. But because A and B dey compete for di same £5 million, di opportunity cost of to choose A na B £6.4 million benefit wey dem forgo. Di *net* case for A over di realistic alternative na only £7.2m − £6.4m = £0.8 million, no be di full £7.2 million headline. If third option, C, offer £7.5 million of benefit for di same £5 million, to fund A over C go destroy £0.3 million of public value even though A own business case look fully justified when you look am alone.

**Local authority staff time**: one council three-person data team fit build either housing-waitlist dashboard (dem estimate say e go save 400 officer-hours/year, valued at £28/hour = £11,200/year) or benefits-fraud triage tool (dem estimate say e go prevent £85,000/year for incorrect payments). To build di dashboard get opportunity cost of £85,000/year wey dem forgo, no be only di salary cost of di data team — di real cost of di "free" internal build na di far bigger benefit wey di team for produce elsewhere.

## How e connect to software engineering

Engineering capacity inside public body na constrained budget itself — sprint capacity, no be pounds — and di same discipline apply directly:

- Always name di comparator: feature business case suppose state wetin else di same team-weeks fit deliver, no be only im own return.
- Treat "we get engineering capacity wey dey spare" as di start of opportunity-cost analysis, no be di end — spare capacity still get best alternative use, even if dat use na to pay down technical debt (see [technical debt as public value erosion](../technical-debt-as-public-value-erosion-how-old-code-dey-chop-public-value/)).
- Connect dis one directly to [value for money](../value-for-money-di-test-whether-public-spending-dey-worth-am/): VFM "economy" test no mean anything without honest opportunity-cost comparator, and to [cost of delay in public programmes](../cost-of-delay-for-public-programmes-wetin-delay-dey-cost/), wey dey price di time dimension of di same forgone-alternative logic.

## Wahala dem wey you suppose avoid

- **To compare against "do nothing" instead of di next-best alternative.** Green Book require "do minimum" baseline exactly because true opportunity cost hardly dey zero; business case wey only clear di "do nothing" bar never show say e beat di realistic alternative.
- **To ignore cross-departmental competition for di same pot.** Budget lines wey look ring-fenced inside one directorate dey often compete for higher level (spending review, capital programme) where di real opportunity cost dey realise.
- **To assume say staff time wey dem release no get further value.** Time wey dem "save" only create value if dem redeploy am to something valuable; if di alternative use no exist, di saving na notional.

## Sources

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation" (2022).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020).
  <https://www.gov.uk/government/publications/the-magenta-book>
- Claxton K, et al. "Methods for the estimation of the NICE cost-effectiveness threshold." Health
  Technology Assessment, 2015;19(14) — the canonical empirical demonstration of opportunity cost as
  a binding constraint in a fixed public budget. <https://www.journalslibrary.nihr.ac.uk/hta/hta19140/>
