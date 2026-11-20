# Government as a Platform (GaaP): Shared Components Wey Many Services Fit Use

Government as a Platform na di strategy to build shared, reusable components — notifications service, payments service, identity service — once, centrally, so dat hundreds of individual government services go consume dem instead of each one to build dia own. E reframe public digital infrastructure as platform economics problem: di value no dey for any one integration, e dey for di marginal cost of di *next* team wey adopt am as e dey approach zero.

## Wetin make am matter

GDS set out di strategy formally for im 2015 "Government as a Platform" publication, wey argue say government don dey build di same capabilities — payment taking, user notification, identity verification, address lookup — separately for service after service, each one carry im own procurement, security assessment, and ongoing support burden. Di alternative na small number of shared platforms, wey dem build to high standard once and reuse everywhere: GOV.UK Notify for to send emails, text messages and letters, GOV.UK Pay for to take online payments, and GOV.UK One Login (successor to di earlier GOV.UK Verify identity programme) for identity verification. Di scale wey dis platforms don reach na di clearest evidence say di strategy work: GOV.UK Pay don process over £10 billion in transactions across around 1,800 individual services — and where e take roughly four years to process im first £1 billion, e now dey process dat much for around five months — while GOV.UK Notify don send more than 9 billion messages for behalf of over 1,500 government organizations. Every one of dose adopting services avoid to build, secure and maintain im own payment gateway or messaging pipeline.

## Di maths

```
Build cost per service (no platform) = N services × cost to build,
  secure-assess, and run one payment/notification/identity system

Platform cost = fixed platform build cost
              + marginal cost per adopting service (integration,
                configuration, ongoing platform-team support)

Reuse break even once:
  platform build cost < N × (per-service build cost − marginal
  integration cost)

For mature platform, marginal cost per additional adopter dey approach
di transaction/message fee alone — di fixed cost dem amortize am across
di whole government estate, no be one department budget, wey be
why dem usually fund GaaP components centrally instead of to charge
full cost-recovery to early adopters.
```

## Example wey dem work out

**Local authority wey adopt GOV.UK Pay instead of to build payment gateway**:

```
Build-your-own estimate:
  PCI-DSS compliance work + integration + ongoing maintenance
  ≈ £85,000 build + £22,000/year maintenance

GOV.UK Pay adoption:
  Integration effort ≈ £12,000 (developer time)
  Transaction fees: government-to-citizen card payments typically
  dem charge small percentage + fixed fee per transaction, no
  separate PCI-DSS burden wey council go carry
  ≈ £12,000 one-off, ongoing cost dey vary with volume, e no fixed

First-year saving ≈ £85,000 − £12,000 = £73,000, before we count di
avoided £22,000/year maintenance and di avoided compliance risk of
to hold card data for council-run system at all — dis second
category na di security value wey public-sector-cybersecurity-value cover.
```

If you scale dat £73,000 across di roughly 1,800 services wey now dey use GOV.UK Pay, di aggregate avoided-build cost across government dey for hundreds of millions — di platform economics, no be any single integration, na where di strategy value really dey.

## How e connect to software engineering

Government as a Platform na direct argument for [build-vs-buy-in-government](../build-or-buy-for-government-how-to-choose/): wen shared, assessed, well-run component exist, to build bespoke equivalent very rarely be di better [value-for-money](../value-for-money-di-test-whether-public-spending-dey-worth-am/) choice, and e fail [digital-service-standard](../digital-service-standard-di-rules-wey-digital-public-service-must-pass/) point 13 ("use and contribute to open standards, common components and patterns") almost by definition. E also change di shape of [total-cost-of-ownership-in-government-it](../total-cost-of-ownership-in-government-it-di-full-cost-of-system-from-buy-till-e-die/): platform adoption dey trade large capital and maintenance line for smaller, usage-linked operating cost, wey easier to forecast and easier to defund if dem decommission service. Open reuse of components get cousin for [open-data-value](../open-data-value-how-to-value-public-data-wey-no-get-price/) — both na strategies for to treat something wey government produce once as shared infrastructure instead of departmental asset.

## Wahala dem wey you suppose avoid

- **Shadow rebuilding**: teams dey quietly build dia own payment or notification integration because di platform onboarding process slower than to do am by demself — na governance friction problem, no be technology one, and e dey quietly erode di reuse economics wey di whole strategy depend on.
- **To underfund di platform team relative to di value wey e create**: value dey accrue to consuming departments while cost sit with di platform team, wey create chronic underinvestment risk unless dem centralize and protect di funding — version of di tragedy of the commons.
- **To measure platform success by usage alone**: adoption numbers (services wey dem onboard, messages wey dem send) na leading indicator, no be proof of value; di real test na di avoided-build-cost and avoided-risk arithmetic above.
- **To treat "platform" as synonymous with "monolith"**: GaaP components dey succeed because each one dey do one thing well with narrow, stable interface — to bundle unrelated capabilities enter one "platform" dey recreate di bespoke-build problem for different scale.

## Sources

- Government Digital Service, Government as a Platform. <https://www.gov.uk/government/publications/government-as-a-platform>
- GOV.UK Notify. <https://www.notifications.service.gov.uk/>
- Government Digital Service blog, "GOV.UK Pay at 10: how it started and how it's going". <https://gds.blog.gov.uk/2026/09/02/gov-uk-pay-at-10-how-it-started-and-how-its-going/>
