# Social return on investment (SROI)

Social return on investment is a framewark for meisurin, monetisin, an accoontin for a braid
concept o value — social, environmental, an economic — an expressin it as a ratio agin the
resources investit, for example "£1.44 o social value for ilka £1 investit". It wis designit tae
extend financial accoontin logic tae ootcomes that merkits dinnae price, athoot loosin accoontin's
discipline: ilka nummer in an SROI maun be traceable tae a stakeholder-definit ootcome, an evidence
base, an an explicit adjustment for whit wad hae happent onywey.

## Why it maitters

SROI is maintained bi Social Value UK an Social Value International, successor bodies tae the SROI
Netwark, whase "A Guide to Social Return on Investment" (2012) is still the reference methodology.
The framewark rests on seiven principles — involve stakeholders, unnerstaund whit chynges, value the
things that maitter, only include whit is material, dinnae owerclaim, be transparent, an verify
the result — an it's principle five, "dinnae owerclaim", that maist SROI reports in the wild
fail. A ratio produced bi skippin deidweicht an attribution adjustments isnae an SROI; it's a
marketin nummer wearin an SROI's claes. Saftware engineers biggin reportin tools for
charities, social enterprises, or commissioners need tae ken the difference, acause the tool will
either enforce the discipline or mak it easy tae skip.

## The maths

SROI depends on a [theory of change](../theory-o-chynge/) tae identify whilk ootcomes are in
scope, an expresses them uisin the same accoontability chain as a [logic model](../logic-model/):

```
SROI ratio = Present value o ootcomes / Value o inputs

Process:
 1. Establish scope an identify stakeholders whase ootcomes will be meisurit
 2. Map ootcomes (a theory o chynge, evidenced wi stakeholders, nae assumed)
 3. Evidence ootcomes an gie them a value uisin financial proxies
 4. Establish impact: gross value − deidweicht − attribution − displacement, then apply drop-aff
 5. Calculate the SROI: net present value o impact ÷ value o inputs
 6. Report, uise, an embed — the ratio is a communication device, nae the endpynt
```

Deidweicht, attribution, an displacement are coverit in
[additionality an deidweicht](../additionality-an-deadweight/) an
[displacement an attribution](../displacement-an-attribution/); aw three exist tae isolate the
genuine [coonterfactual](../counterfactual-analysis/) impact frae the gross ootcome.

## Wrocht example

**Local authority employment programme**: annual input cost £250,000. Saxty participants muive intae
sustained employment; a financial proxy for that ootcome (wellbein uplift, reducit benefit
reliance, an tax revenue combined) is £8,500 per person for the first year — see
[unit cost databases](../unit-cost-databases/) for whaur sic proxies come frae.

- Gross ootcome value: 60 × £8,500 = £510,000
- Less deidweicht (40% wad likely hae foond wark athoot the programme): £510,000 × 0.60 = £306,000
- Less attribution (30% o the remainin chynge is doon tae ither agencies' support): £306,000 × 0.70 = £214,200
- Year 2 ootcome at 30% drop-aff: £214,200 × 0.70 = £149,940, discoontit at 3.5%/year (see
  [social discoont rate](../social-discoont-rate/)): £149,940 ÷ 1.035 = £144,870
- Total present value o impact: £214,200 + £144,870 = £359,070
- **SROI ratio: £359,070 ÷ £250,000 = 1.44**, reportit as "£1.44 o social value for ilka £1 investit"

**Charity**: a £60,000 befriendin service reduces lonelieness for 80 aulder fowk, valued at a
proxy o £1,100/person/year. Gross value £88,000; efter 35% deidweicht an 15% attribution,
net impact is £88,000 × 0.65 × 0.85 = £48,620, an SROI ratio o 0.81 — ablow break-even, that is a
legitimate an uisefu finding, nae a failure tae write up.

## Link tae saftware ingineerin

An SROI calculator that lets a uiser enter ootcome coonts an proxy values but haes nae required
field for deidweicht, attribution, or a linkit theory o chynge will produce inflatit ratios bi
default, acause omittin adjustments is the path o least resistance. Big the discipline intae
the schema: ilka ootcome row shuid reference a stakeholder group, an evidenced quantity, a
financial proxy wi its source, an non-optional deidweicht/attribution fields. See
[ootcomes vs ootpits](../ootcomes-vs-ootputs/) for the distinction SROI ootcome-mappin depends on,
an [logic model](../logic-model/) for the chain the tool shuid mirror in its data model.

## Pitfaws

- **Skippin deidweicht an attribution.** The headline ratio athoot thir adjustments is a gross
  figure, nae a net impact figure, an Social Value UK's principles explicitly require baith.
- **Comparin ratios athort organisations.** An SROI ratio depends on scope an proxy choices made
  case bi case; treatin a 4:1 ratio frae yin report as "better" nor a 2:1 ratio frae anither
  ignores that the assumptions arenae staundardised like a financial accoontin ratio.
- **Double coontin owerlappin proxies.** Stackin a "reducit lonelieness" proxy wi an
  "improvit mental wellbein" proxy for the same beneficiaries can double-value yin underlyin
  chynge.
- **Skippin stakeholder engagement.** Principle yin requires ootcomes tae be definit wi the
  fowk experiencin them, nae assumed bi the analyst biggin the model.

## Sources

- Social Value UK / Social Value International. <https://socialvalueuk.org/>
- The SROI Network, "A Guide to Social Return on Investment" (2012).
- Social Value International, "The Principles of Social Value." <https://www.socialvalueint.org/principles>
