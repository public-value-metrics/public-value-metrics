# Effective Altruism Cost-Effectiveness: How to Rank Charity by Di Good Wey Each Dollar Do

Effective altruism (EA) cost-effectiveness reasoning dey rank charitable interventions by di amount of good — wey dem most often express as lives saved, or health gained, per dollar wey dem spend — and e dey direct money go di intervention wey buy di most good for di margin. GiveWell na di field most influential practitioner: e dey publish explicit, updated cost-per-life-saved and cost-per-outcome estimates for small list of "top charities," and e dey recommend make donors give to whichever one currently get room for more funding at di best rate.

## Wetin make am matter

GiveWell state cost-effectiveness as di leading criterion for im published methodology: e dey look for evidence-backed interventions, estimate dia cost-effectiveness for common unit, and rank across completely unrelated causes — bednets against malaria, vitamin A supplementation, cash transfers, vaccine incentive payments — for dat single axis. Dis na direct import of QALY/DALY-style reasoning from health economics enter philanthropy: just as health system dey ask "how many QALYs per pound for di margin," GiveWell dey ask "how many lives, or life-years, per dollar for di margin," and e dey treat causes as substitutable once dem don convert dem to dat common unit. See [cost-effectiveness analysis in government](../cost-effectiveness-analysis-for-government-decisions/) for di public-sector cousin of dis reasoning framework.

Di most cited GiveWell figure concern di Against Malaria Foundation (AMF), wey dey distribute insecticide-treated bednets. For GiveWell published worked example (wey dem draw from 2020 funding data), roughly $4,500 fund enough nets to avert one death, after dem account for imperfect net usage, baseline mortality without nets, and adjustment for funging — di possibility say AMF go don receive some of dat funding from other donors anyway. GiveWell make am clear say dis figure dey move over time and across geographies as malaria prevalence, net costs, and funding gaps dey change, and say dem generally expect di cost to save life to rise over time as di cheapest opportunities dey get taken up first; na worked illustration of di method, no be fixed price.

## Di maths

```
Cost-effectiveness = Cost of intervention / Units of good wey dem produce
                    (e.g. $ per life saved, $ per DALY averted, $ per QALY)

GiveWell chain for bednet programme, illustratively:
  $ per net wey dem purchase and deliver
    ÷ share of nets wey dem really use
    ÷ people wey net protect per net
    × baseline annual mortality without nets
    × reduction in mortality wey dem attribute to net use (from RCT evidence)
    × years of protection per net
    ÷ adjustment for funging (money wey dey displace other donors' funding)
  = $ per life saved (net of counterfactual funding effects)
```

Dis chain matter because each step na place wey cost-effectiveness estimates commonly dey go wrong — see di pitfalls below — and because e make am clear say "cost per life saved" no be raw observed price; na modelled estimate wey dem build from several separately uncertain inputs.

## Example wey dem work out

Two hypothetical interventions, both evidence-backed, dey compete for di same marginal £100,000:

- **Bednets (AMF-style)**: roughly $4,500 per life saved for GiveWell published worked example wey dem draw from 2020 data, i.e. very roughly 20 lives saved per £100,000 depending on di exchange rate and year wey dem use.
- **Deworming programme**: no plausible mortality benefit at all, but strong evidence of long-run income gains from childhood deworming; GiveWell dey value am for income-gain terms, no be lives saved, wey make am hard to compare directly against bednets without shared unit. GiveWell dey use explicit "moral weights" framework to convert both enter one internal unit for ranking.

Di EA method discipline na to force dis comparison come out for open instead of to fund both because both "sound good." See [social return on investment](../social-return-on-investment-how-to-show-social-value-against-money-wey-dem-spend/) for di equivalent forcing function wey UK social enterprises and local commissioners dey use, wey dey ask di same question — wetin be di best return per pound — for monetized-value idiom instead of lives/DALYs idiom.

## How e connect to software engineering

Engineers wey dey build donor platforms, grant-matching tools, or impact dashboards for EA-aligned funders (Open Philanthropy, GiveWell itself, effective giving platforms like Giving What We Can) need to represent cost-effectiveness estimates as ranges with stated assumptions, no be single numbers — di underlying model get several multiplicative uncertain inputs, and to collapse dat one come one figure for dashboard dey misrepresent di confidence wey GiveWell itself state. Version each estimate by publication date; GiveWell dey revise im numbers, sometimes substantially, as new RCT evidence or funding-gap data arrive, and platform wey cache old figure go quietly become wrong.

## Wahala dem wey you suppose avoid

- **To treat cost-effectiveness estimate as fixed price.** Na model output wey get several uncertain multiplicative inputs (usage rates, baseline mortality, funging adjustment); state di date and version.
- **To ignore funging/displacement.** To fund organization wey for receive di money from another donor anyway dey buy less counterfactual good than di headline suggest — see [additionality and deadweight](../additionality-and-deadweight-wetin-programme-really-cause/) and [displacement and attribution](../displacement-and-attribution-how-to-know-who-take-wetin-and-who-fit-claim-credit/).
- **To compare across incompatible units without conversion.** "Lives saved" and "income gained" no dey directly comparable without explicit moral-weights framework; to present dem side by side as if dem comparable na category error.
- **Cause-area tunnel vision.** To rank only inside one cause area (e.g. only global health charities) and call di winner "the most cost-effective charity" dey overstate di claim; GiveWell cross-cause ranking dey deliberately narrow (global health and wellbeing), no be universal.

## Sources

- GiveWell, "Our criteria." <https://www.givewell.org/how-we-work/our-criteria>
- GiveWell, "How Much Does It Cost to Save a Life?" (February 2024 version). <https://www.givewell.org/how-much-does-it-cost-to-save-a-life/february-2024-version>
- GiveWell, Against Malaria Foundation review. <https://www.givewell.org/charities/amf>
- Giving What We Can, on cost-effectiveness across causes. <https://www.givingwhatwecan.org/>
