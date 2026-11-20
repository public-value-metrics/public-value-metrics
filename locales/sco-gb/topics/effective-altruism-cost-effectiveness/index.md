# Effective Altruism Cost-Effectiveness (Cost-effectiveness in effective altruism)

Effective altruism (EA) cost-effectiveness reasonin ranks charitable interventions by the amount o guid — maist aften expressit as lives saved, or health gained, per dollar spent — an directs siller towards whitever intervention buys the maist guid at the margin. GiveWell is the field's maist influential practitioner: it publishes explicit, updatit cost-per-life-saved an cost-per-ootcome estimates for a wee list o "top charities," an recommends that donors gie tae whitever currently haes room for mair fundin at the best rate.

## Why it maitters

GiveWell states cost-effectiveness as the leadin criterion in its published methodology: it looks for evidence-backit interventions, estimates their cost-effectiveness in a common unit, an ranks athort completely unrelatit causes — bednets agin malaria, vitamin A supplementation, cash transfers, vaccine incentive payments — on that single axis. This is a direct import o QALY/DALY-style reasonin frae health economics intae philanthropy: juist as a health system spiers "hoo mony QALYs per pound at the margin," GiveWell spiers "hoo mony lives, or life-years, per dollar at the margin," an treats causes as substitutable aince convertit intae that common unit. See [cost-effectiveness analysis in government](../cost-effectiveness-analysis-in-government/) for the public-sector cousin o this reasonin framework.

The maist citit GiveWell figure concerns the Against Malaria Foundation (AMF), which distributes insecticide-treatit bednets. In GiveWell's published wrocht example (drawn frae 2020 fundin data), roughly $4,500 fundit enough nets tae avert ae daith, efter accoontin for imperfect net uisage, baseline mortality athoot nets, an adjustment for funging — the possibility that AMF wad hae received some o that fundin frae ither donors regardless. GiveWell is explicit that this figure moves ower time an athort geographies as malaria prevalence, net costs, an fundin gaps chynge, an that the cost tae save a life is generally expectit tae rise ower time as the cheapest opportunities are taen up first; it is a wrocht illustration o the method, no a fixed price.

## The maths

```
Cost-effectiveness = Cost of intervention / Units of good produced
                    (e.g. $ per life saved, $ per DALY averted, $ per QALY)

GiveWell's chain for a bednet programme, illustratively:
  $ per net purchased and delivered
    ÷ share of nets actually used
    ÷ people protected per net
    × baseline annual mortality without nets
    × reduction in mortality attributable to net use (from RCT evidence)
    × years of protection per net
    ÷ adjustment for funging (money displacing other donors' funding)
  = $ per life saved (net of counterfactual funding effects)
```

This chain maitters acause ilka step is a place cost-effectiveness estimates commonly gang wrang — see the pitfaws ablow — an acause it maks explicit that "cost per life saved" is never a raw observed price; it is a modellit estimate biggit frae several separately uncertain inputs.

## Wrocht example

Twa hypothetical interventions, baith evidence-backit, competin for the same marginal £100,000:

- **Bednets (AMF-style)**: roughly $4,500 per life saved on GiveWell's published wrocht example drawn frae 2020 data, i.e. gey roughly 20 lives saved per £100,000 dependin on the exchange rate an year uised.
- **Deworming programme**: nae plausible mortality benefit ava, but strong evidence o lang-run income gains frae childhood deworming; GiveWell values it in income-gain terms, no lives saved, which maks it haurd tae compare straucht agin bednets athoot a shared unit. GiveWell uises an explicit "moral weights" framework tae convert baith intae ae internal unit for rankin.

The EA method's discipline is forcin this comparison intae the open raither nor fundin baith acause baith "sound guid." See [social return on investment](../social-return-on-investment/) for the equivalent forcin function uised by UK social enterprises an local commissioners, which spiers the same question — whit is the best return per pound — in a monetized-value idiom raither nor a lives/DALYs idiom.

## Link tae saftware ingineerin

Ingineers biggin donor platforms, grant-matchin tools, or impact dashboards for EA-aligned funders (Open Philanthropy, GiveWell itsel, effective givin platforms sic as Giving What We Can) need tae represent cost-effectiveness estimates as ranges wi statit assumptions, no single nummers — the underlyin model haes several multiplicative uncertain inputs, an collapsin that tae ae figure on a dashboard misrepresents the confidence GiveWell itsel states. Version ilka estimate by publication date; GiveWell revises its nummers, whiles substantially, as new RCT evidence or fundin-gap data arrives, an a platform that caches an auld figure quietly becomes wrang.

## Pitfaws

- **Treatin a cost-effectiveness estimate as a fixed price.** It is a model output wi several uncertain multiplicative inputs (usage rates, baseline mortality, funging adjustment); state the date an version.
- **Ignorin funging/displacement.** Fundin an organization that wad hae received the siller frae anither donor onyway buys less counterfactual guid nor the headline suggests — see [additionality an deadweight](../additionality-an-deadweight/) an [displacement an attribution](../displacement-an-attribution/).
- **Comparin athort incompatible units athoot conversion.** "Lives saved" an "income gained" arenae straucht comparable athoot an explicit moral-weights framework; presentin them side by side as if they were is a category error.
- **Cause-area tunnel vision.** Rankin anely athin a cause area (e.g. anely global health charities) an callin the winner "the maist cost-effective charity" owerstates the claim; GiveWell's cross-cause rankin is deliberately narrow (global health an wellbeing), no universal.

## Sources

- GiveWell, "Our criteria." <https://www.givewell.org/how-we-work/our-criteria>
- GiveWell, "How Much Does It Cost to Save a Life?" (February 2024 version). <https://www.givewell.org/how-much-does-it-cost-to-save-a-life/february-2024-version>
- GiveWell, Against Malaria Foundation review. <https://www.givewell.org/charities/amf>
- Giving What We Can, on cost-effectiveness across causes. <https://www.givingwhatwecan.org/>
