# Government as a Platform (GaaP) (Government as a platform)

Government as a Platform is the strategy o biggin shared, re-uisable components — a notifications service, a payments service, an identity service — aince, centrally, sae that hunders o individual government services consume them raither nor ilka ane biggin their ain. It reframes public digital infrastructure as a platform economics problem: the value isnae in onie ae integration, it's in the marginal cost o the *next* team that adopts it approachin zero.

## Why it maitters

GDS set oot the strategy formally in its 2015 "Government as a Platform" publication, arguin that government haed been biggin the same capabilities — payment takin, user notification, identity verification, address lookup — separately in service efter service, ilka ane cairryin its ain procurement, security assessment, an ongaun support burden. The alternative wis a wee nummer o shared platforms, biggit tae a heich staundart aince an re-uised iverywhaur: GOV.UK Notify for sendin emails, text messages an letters, GOV.UK Pay for takin online payments, an GOV.UK One Login (successor tae the earlier GOV.UK Verify identity programme) for identity verification. The scale thae platforms hae reached is the clearest evidence the strategy warked: GOV.UK Pay haes processed ower £10 billion in transactions athort aboot 1,800 individual services — an whaur it took roughly fower year tae process its first £1 billion, it nou processes that muckle in aboot five months — while GOV.UK Notify haes sent mair nor 9 billion messages on behauf o ower 1,500 government organizations. Ilka ane o thae adoptin services avoidit biggin, securin an maintainin its ain payment gateway or messagin pipeline.

## The maths

```
Build cost per service (no platform) = N services × cost to build,
  secure-assess, and run one payment/notification/identity system

Platform cost = fixed platform build cost
              + marginal cost per adopting service (integration,
                configuration, ongoing platform-team support)

Reuse breaks even once:
  platform build cost < N × (per-service build cost − marginal
  integration cost)

For a mature platform, marginal cost per additional adopter approaches
the transaction/message fee alone — the fixed cost is amortized across
the whole government estate, not one department's budget, which is
why GaaP components are usually funded centrally rather than charged
at full cost-recovery to early adopters.
```

## Wrocht example

**Local authority adoptin GOV.UK Pay insteid o biggin a payment gateway**:

```
Build-your-own estimate:
  PCI-DSS compliance work + integration + ongoing maintenance
  ≈ £85,000 build + £22,000/year maintenance

GOV.UK Pay adoption:
  Integration effort ≈ £12,000 (developer time)
  Transaction fees: government-to-citizen card payments typically
  charged at a small percentage + fixed fee per transaction, no
  separate PCI-DSS burden carried by the council
  ≈ £12,000 one-off, ongoing cost variable with volume, not fixed

First-year saving ≈ £85,000 − £12,000 = £73,000, before counting the
avoided £22,000/year maintenance and the avoided compliance risk of
holding card data in a council-run system at all — this second
category is the security value covered in
public-sector-cybersecurity-value.
```

Scale that £73,000 athort the roughly 1,800 services nou uisin GOV.UK Pay an the aggregate avoidit-build cost athort government is in the hunders o millions — the platform economics, no onie single integration, is whaur the strategy's value actually sits.

## Link tae saftware ingineerin

Government as a Platform is a direct argument for [build-vs-buy-in-government](../big-or-buy-in-government/): whan a shared, assessed, weel-run component exists, biggin a bespoke equivalent is gey seldom the better [value-for-money](../value-for-siller/) choice, an it fails [digital-service-standard](../digital-service-standard/) pynt 13 ("use and contribute to open standards, common components and patterns") near by definition. It an aw chynges the shape o [total-cost-of-ownership-in-government-it](../total-cost-o-ownership-in-government-it/): platform adoption trades a muckle capital an maintenance line for a smaaer, uisage-linkit operatin cost, which is easier tae forecast an easier tae defund if a service is decommissionit. Open re-uise o components haes a cousin in [open-data-value](../value-o-open-data/) — baith are strategies for treatin somethin government produces aince as shared infrastructure raither nor a departmental asset.

## Pitfaws

- **Shadow rebiggin**: teams quietly big their ain payment or notification integration acause the platform's onboardin process is slawer nor daein it themsels — a governance friction problem, no a technology ane, an it quietly erodes the re-uise economics the hail strategy depends on.
- **Underfundin the platform team relative tae the value it creates**: value accrues tae consumin departments while cost sits wi the platform team, creatin a chronic underinvestment risk unless fundin is centralized an protectit — a version o the tragedy o the commons.
- **Meisurin platform success by uisage alane**: adoption nummers (services onboardit, messages sent) are a leadin indicator, no proof o value; the real test is the avoidit-build-cost an avoidit-risk arithmetic abune.
- **Treatin "platform" as synonymous wi "monolith"**: GaaP components succeed acause ilka ane daes ae thing weel wi a narrow, stable interface — bundlin unrelatit capabilities intae ae "platform" recreates the bespoke-build problem at a different scale.

## Sources

- Government Digital Service, Government as a Platform. <https://www.gov.uk/government/publications/government-as-a-platform>
- GOV.UK Notify. <https://www.notifications.service.gov.uk/>
- Government Digital Service blog, "GOV.UK Pay at 10: how it started and how it's going". <https://gds.blog.gov.uk/2026/09/02/gov-uk-pay-at-10-how-it-started-and-how-its-going/>
