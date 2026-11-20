# Social Value Act

The Public Services (Social Value) Act 2012 is a UK statutory duty requirin public authorities in
Ingland an Wales tae consider hou whit is bein procurit micht improve the economic, social, an
environmental wellbein o the relevant aurie, an tae consider consultin on this, afore startin a
procurement process for public services contracts. It cam intae force in January 2013 as a
relatively licht-touch "hae regaird tae" duty, an wis substantially strengthent bi Procurement
Policy Note (PPN) 06/20 in January 2021, that requires central government contracts tae explicitly
evaluate — nae juist consider — social value, wi a minimum weichtin in the awaird criteria.

## Why it maitters

Afore PPN 06/20, "considerin" social value could be satisfied bi a commissioner notin they haed
thocht aboot it, wi nae requirement that it affect the awaird decision — a duty easy tae discharge
on paper an ignore in practice. PPN 06/20 steekit that gap for central government procurement: it
mandates social value be scorit as pairt o the tender evaluation, organisit roond five national
priority themes — COVID-19 recovery, tacklin economic inequality, fechtin climate chynge, equal
opportunity, an wellbein — an commonly meisurit uisin the National TOMs (Themes, Outcomes,
Measures) framewark maintained bi the Social Value Portal. For a saftware engineer biggin
procurement, contract management, or bid-support tools for the public sector, this is the legal
basis yer client is requirit tae big agin, nae an optional nice-tae-hae.

## The maths

Social value is a framewark-shapit topic; its "maths" is the scorin structure maist authorities uise:

```
Total tender score = Price/cost weichtin + Quality weichtin + Social value weichtin

PPN 06/20 (central government): social value weichtin ≥ 10% o total score

Social value themes (PPN 06/20):
 1. COVID-19 recovery
 2. Tacklin economic inequality
 3. Fechtin climate chynge
 4. Equal opportunity
 5. Wellbein
```

Bidders typically monetise their commitments agin thir themes uisin
[unit cost databases](../unit-cost-databases/), an the same monetisation logic uised in
[social return on investment](../social-return-on-investment/) applies: a commitment shuid be
evidenced, attributable tae the contract, an nae double-coontit agin ither fundin.

## Wrocht example

**Local authority IT contract**: a £2 million, 3-year contract is scorit 60% quality, 30% price,
10% social value. Bidder A commits tae 2 apprenticeships, £150,000 o local subcontractin spend,
an 200 oors o pro bono digital-skills trainin for a local schuil, monetisit uisin proxies frae a
unit cost database at a combined £90,000 o additional social value. Bidder B commits tae a smawer
package monetisit at £40,000. If the authority scores social value proportionally agin the
strangest bid, Bidder A receives the full 10 pynts; Bidder B receives 10 × (£40,000 ÷ £90,000) =
4.4 pynts — a 5.6-pynt gap that can decide the contract even whaur quality an price are close.

**Voluntary sector bidder**: a wee VCSE (voluntary, community and social enterprise) biddin for a
grunds maintenance contract agin a commercial competitor cannae compete on unit price its lane, but
uises Global Value Exchange proxies tae monetise its existin community employment an volunteerin
commitments, makkin an evidenced social value case worth scorin alangside price an quality.

## Link tae saftware ingineerin

Winnin a bid wi monetisit social value commitments creates an obligation tae evidence delivery
agin them throu contract management — tools that log apprenticeship starts, local spend, an
trainin oors agin the specific commitments scorit at tender, feedin intae contract review
meetins raither nor bein forgotten yince the contract is signed. G-Cloud an Digital Marketplace
listins increasingly require social value statements at the pynt o listin. See
[social return on investment](../social-return-on-investment/) for the valuation method ahint the
commitments, [unit cost databases](../unit-cost-databases/) for the proxies bidders draw on, an
[ootcomes vs ootpits](../ootcomes-vs-ootputs/) for makkin shair delivered commitments are ootcomes,
nae juist activity coonts.

## Pitfaws

- **Social-washin bids.** Vague commitments ("we support the local community") that cannae be
  meisurit or held tae durin contract management score weel but deliver naethin verifiable.
- **Treatin social value as a tie-breaker.** PPN 06/20 requires social value tae be explicitly
  evaluatit inside the awaird criteria, nae uised informally tae brak a tie atween itherwise equal
  bids.
- **Nae contract management follow-throu.** Commitments scorit at tender are aften never
  trackit durin delivery — see [benefits realisation](../benefits-realization/).
- **Inconsistent meisurement framewarks athort contracts.** Uisin different proxy sources for
  likesome commitments on different contracts mak portfolio-level comparison meaninless, that is
  why common framewarks like National TOMs an shared unit cost databases exist.

## Sources

- Public Services (Social Value) Act 2012. <https://www.legislation.gov.uk/ukpga/2012/3/contents>
- Cabinet Office, Procurement Policy Note 06/20, "Taking Account of Social Value in the Award of
  Central Government Contracts." <https://www.gov.uk/government/publications/procurement-policy-note-0620-taking-account-of-social-value-in-the-award-of-central-government-contracts>
- Social Value Portal, National TOMs Framework. <https://socialvalueportal.com/national-toms/>
