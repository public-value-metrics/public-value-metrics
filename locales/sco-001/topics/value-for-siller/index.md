# Value for siller (VFM)

Value for siller is the UK public sector's formal test o whether spendin achieves the best
available balance o cost an benefit. HM Treasury's Green Book frames it throu three "E"s —
economy, efficiency, an effectiveness — wi equity increasingly argued as a contestit fowert. Ilka
public-sector business case that survives scrutiny haes tae answer aw three explicitly, nae
juist claim the spendin is "worth it".

## Why it maitters

VFM isnae a synonym for "cheap". The Green Book (HM Treasury, 2022 edition) is explicit that
buyin the laichest-cost option (economy) athoot checkin it produces the intendit ootcomes
(effectiveness) is a common an expensive mistak — a procurement that saves 10% on unit cost but
delivers 40% less impact is warse value, nae better. The three-E framewark forces a business case tae
separate three genuinely different failure modes: peyin ower muckle for inputs, wastin inputs in
conversion tae ootpits, an producin ootpits that dinnae translate intae ootcomes onybody wantit. UK
government spendin controls — Treasury approval pynts, National Audit Office (NAO) value-for-siller
studies, an depairtmental accoontin officer assessments — are biggit roond this three-pairt test, sae
an engineerin business case that ainly addresses cost (economy) will fail scrutiny even if the
technology is soond.

The "fowert E", equity, is contestit precisely acause it can conflict wi the ither three: the
maist efficient wey tae deliver a service nationally is seldom the maist equitable, sin concentratin
delivery whaur it is cheapest tae reach citizens aften means unner-servin the haurdest-tae-reach. The
Green Book's 2020 revision respondit tae criticism (includin frae the 2020 Treasury Select
Committee an IPPR North) that pure cost-benefit ratios systematically favourt aareadies-prosperous
regions, bi requirin appraisals tae address distributional impact explicitly — see
[distributional weichtin](../distributional-weighting/).

## The maths

VFM isnae a single ratio but a three-pairt (or fower-pairt) diagnostic, applied in sequence:

```
Economy:       Are inputs bocht at the laichest reasonable cost for the
               requirit quality?  (£ per unit o input)

Efficiency:    Hou weel are inputs convertit intae ootpits?
               (ootpits / inputs, e.g. cases processit per caseworker-oor)

Effectiveness: Dae the ootpits actually produce the intendit ootcomes?
               (ootcomes achieved / ootcomes intendit)

[Equity]:      Are costs an benefits distributit fairly athort the
               population, or concentratit on thae least in need?
```

A VFM failure can occur at ony stage independently: economical procurement wi inefficient
delivery; efficient delivery o the wrang ootpit; effective ootcomes bocht at excessive cost. See
[public-sector KPIs](../kpis-in-the-public-sector/) for hou thir translate intae meisurable indicators,
an [cost-effectiveness analysis in government](../cost-effectiveness-analysis-in-government/)
for the formal comparison method.

## Wrocht example

**Local authority contact centre**: a cooncil compares twa options for a new case-management system.

- *Option A*: £600,000 licence (cheapest available), but agents still average 22 meenits per case
  acause the workflow requires manual re-keyin atween systems — efficiency is puir.
- *Option B*: £900,000 licence, integratit workflow, agents average 9 meenits per case.

Economy its lane favours A (£300,000 cheaper). But at 40,000 cases/year, A costs 40,000 × 22/60 =
14,667 staff-oors; B costs 40,000 × 9/60 = 6,000 staff-oors. At a fully loadit staff cost o £28/oor,
A costs £410,667/year in staff time versus B's £168,000/year — a £242,667/year efficiency gap that
swamps the £300,000 up-front economy difference inside 14 months. VFM favours B yince efficiency is
coontit, nae A.

**Charity delivery grant**: a funder compares a £50,000 grant achievin 200 successful job placements
(£250/placement — apparently excellent economy) agin a £120,000 grant achievin 350 placements
that persist for ower 12 months versus the first grant's placements, hauf o that lapse inside
3 months. Effectiveness — durable ootcomes — reverses the apparent VFM rankin: the true cost per
*durable* placement is £250 ÷ 0.5 = £500 for the first grant, versus £120,000/350 ≈ £343 for the
second.

## Link tae saftware ingineerin

VFM gies engineerin teams a discipline for framin technology business cases the wey finance an
audit functions will actually read them:

- State economy, efficiency, an effectiveness as separate line items in a business case, nae yin
  blendit "value" nummer — a reviewer trained on the Green Book will ask for exactly this breakdoun.
- Beware optimisin procurement cost (economy) at the expense o integration an workflow efficiency,
  a unco common fause savin in government IT (see
  [total cost o ownership in government IT](../total-cost-o-ownership-in-government-it/) an
  [build vs buy in government](../big-or-buy-in-government/)).
- Effectiveness requires ootcome data, nae juist ootpit coonts — connect delivery metrics tae
  [ootcomes vs ootpits](../ootcomes-vs-ootputs/) an tae real evaluation via
  [coonterfactual analysis](../counterfactual-analysis/) raither nor assumin ootpits imply ootcomes.
- Whan a system serves unevenly athort regions or demographics, the equity question is a legitimate
  VFM objection, nae a separate "nice tae hae" — see [digital inclusion](../digital-inclusion/).

## Pitfaws

- **Equatin VFM wi laichest price.** Economy is yin-third (or yin-quarter) o the test; the Green
  Book explicitly warns agin "laichest cost" procurement rules that ignore efficiency an
  effectiveness.
- **Meisurin ootpits an cryin them ootcomes.** Case throuput (efficiency) isnae the same as
  cases resolvit weel (effectiveness); see [ootcomes vs ootpits](../ootcomes-vs-ootputs/).
- **Treatin equity as optional.** Sin the Green Book's 2020 update, distributional impact is
  meant tae be assessit alangside the traditional three Es, nae bolted on efter; retrofittin it
  efter a business case is approved is faur harder nor includin it frae the stairt.
- **Comparin options at different volumes athoot normalisin.** A per-unit VFM comparison athort
  options servin different populations maun control for scale, or the efficiency comparison is
  meaninless.

## Sources

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation" (2022
  edition). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- National Audit Office, "Framework to review programmes and projects" and VFM study methodology.
  <https://www.nao.org.uk/>
- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020).
  <https://www.gov.uk/government/publications/the-magenta-book>
- IPPR North, "Transport Infrastructure Investment: Determining Value for Money" (evidence to the
  Treasury Select Committee's 2020 review of the Green Book's regional bias).
