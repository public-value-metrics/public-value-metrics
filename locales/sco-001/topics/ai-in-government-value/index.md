# AI in Government Value

AI in government value is the requirement that an AI system uised in a public service clear the same value-for-money an public-value bar as onie ither spendin decision — no a lawer ane acause it's new, an no a heicher ane acause it's feart. It is the question a delivery team maun be able tae answer afore, no efter, an AI feature ships: does this produce mair value than it costs, aince assurance, owersicht an risk are priced in honestly?

## Why it maitters

The UK Central Digital an Data Office (CDDO) publishit its Generative AI Framework for Government in 2024, biggin on earlier interim guidance frae June 2023, an structurit it roond ten principles cuverin whit generative AI is, its ethical implications, tool security, quality assurance controls, managin the fu generative AI lifecycle, identifyin genuine uise cases, cross-government collaboration, transparency, skills, an governance. The framework's insistence on "meaningful human control" an fu lifecycle management is there acause AI project business cases hae a particular failure mode ither IT spendin disnae: a pilot's headline productivity nummer is easy tae produce an easy tae owerstate, acause it's meisured afore the verification, correction an owersicht burden the tool creates is coontit in. Alangside the framework, the Algorithmic Transparency Recording Standard (ATRS) requires public bodies tae publish a staundartised record — purpose, data uised, performance, fairness testin, human owersicht arrangements — for algorithmic tools that hae a significant influence on decisions aboot individuals, which maks the assurance cost o an AI system a maitter o public record, no an internal estimate a team can quietly skip.

## The maths

AI adoption is assessed as an addition tae, no a replacement for, staundart [value-for-money](../value-for-siller/) appraisal, wi the AI-specific terms made explicit raither than faulded intae a single "productivity gain" nummer:

```
Net value o an AI system =
    productivity gain (time saved × loaded staff cost)
  − licence/compute cost
  − human verification an owersicht cost (checkin AI ootput afore
    it's acted on — this disnae shrink tae zero even for mature tools)
  − ATRS documentation an ongaun monitorin cost
  − risk-adjustit cost o hairm frae errors, bias, or hallucination,
    weighted by wha bears that hairm (distributional-weighting)

A pilot productivity figure that leaves oot the owersicht term isnae
comparable tae a business-as-usual cost baseline that awready includes
equivalent human review — see ai-productivity-in-the-public-sector
for the fuller productivity-meisurement discipline this borraes frae.
```

## Wrocht example

**Local authority uisin a generative AI tool tae draft first responses tae routine council tax enquiries**: 25,000 enquiries/year, afore this haundled wholly by caseworkers at an average 14 minutes/enquiry, loaded staff cost £34/hour.

```
Baseline (nae AI) cost:
  25,000 × (14/60) × £34 = £198,333/year

Pilot headline claim: AI drafts a response in 90 seconds,
caseworker "juist reviews an sends" — claimed new time is 3 minutes
  25,000 × (3/60) × £34 = £42,500/year
  → claimed saving £155,833/year (looks transformational)

Fully-loaded figure, meisured efter 3 months live raither than in the
pilot's haun-pickit test cases:
  Actual review + correction time per response: 6 minutes (drafts
  need real editin for complex or emotionally sensitive enquiries)
  25,000 × (6/60) × £34 = £85,000/year
  Licence/compute cost: £38,000/year
  ATRS documentation an quarterly bias/quality monitorin: £14,000/year
  Total cost = 85,000 + 38,000 + 14,000 = £137,000/year

Real saving = 198,333 − 137,000 = £61,333/year — genuine an worth
keepin, but weel unner hauf the pilot's headline claim, an it
needit an honest owersicht-time meisurement, no the pilot's
best-case ane, tae find.
```

## Link tae saftware ingineerin

This is whaur [ai-productivity-in-the-public-sector](../ai-productivity-in-the-public-sector/) an this topic meet: engineerin teams biggin AI features intae public services awn the instrumentation that maks the "real" figure in the wrocht example possible — loggin actual review time, edit distance atween draft an sent response, an escalation rate, raither than trustin the pilot's demo conditions. AI features shuid be assessed against [digital-service-standard](../digital-service-standard/) point 9 (secure service, user privacy) an cross-referencit wi [public-sector-cybersecurity-value](../value-o-cybersecurity-in-the-public-sector/) whaur the tool touches citizen data, an onie AI system wi a significant influence on decisions aboot individuals needs an ATRS record afore it can be coontit assessment-ready, in the same wey a service needs a passed [digital-service-standard](../digital-service-standard/) assessment afore gaun live.

## Pitfaws

- **AI-washin**: relabellin existin rules-based automation as "AI" tae get at funding or attention earmarkit for AI adoption, athoot the accuracy or bias risks that actually justify the framework's extra scrutiny.
- **Meisurin pilot productivity, no production productivity**: pilots run on curatit test cases wi engagit, attentive reviewers; production runs on the fu messy case mix wi reviewers wha, ower time, develop automation bias an unner-check ootputs — baith distort the honest owersicht-cost figure.
- **Skippin ATRS registration acause the tool "isnae really automatit decision-makin"**: the standard's threshold is significant influence on a decision aboot an individual, which maist citizen-facin AI draftin or triage tools meet even whaur a human technically signs aff.
- **Ignorin distributional impact o errors**: an AI system's error rate averagit athort aw users can hide a muckle heicher error or bias rate for particular groups; [distributional-weighting](../distributional-weighting/) shuid be applied tae the risk-adjustit hairm term, no juist the aggregate accuracy figure.

## Sources

- Central Digital and Data Office, Generative AI Framework for Government (2024). <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>
- Algorithmic Transparency Recording Standard. <https://www.gov.uk/government/collections/algorithmic-transparency-recording-standard-hub>
- HM Treasury, Green Book: central government guidance on appraisal and evaluation. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-governent>
