# Logic model

A logic model is a linear diagram that links inputs, activities, ootputs, ootcomes and impact for
a programme, read frae left tae richt as a chain o accoontability: resources gae in, activities
tak place, ootputs get produced, ootcomes chynge for the beneficiaries, and impact builds up ower a
wider or langer timescale. It is the staundard structure that funders and auditors expect a
programme tae be reportable agin, and the forrit-lookin coonterpairt o a backward-mapped
[theory o chynge](../theory-o-chynge/).

## Why it maitters

HM Treasury's Magenta Book (the Treasury's guide tae evaluation) lays doun the logic model as a requirt pairt o programme evaluation
design, and funders sic as the National Lottery Community Fund big their application and
reportin templates roond exactly this five-column chain. Its value is that it forces a programme
tae state, in ae diagram, whit it will spend, whit it will dae wi it, whit it will produce, and —
cruicially — whit sud chynge as a result, at a level o detail that a paragraph o prose
tends tae hide. A logic model wi a filled-in inputs and activities column but an tuim or vague
ootcomes column can be diagnosed at a glance, which is juist why funders ask for ane.

## The maths

The logic model is a structural chain raither nor a formula:

```
Inputs          Activities        Outputs             Outcomes              Impact
(resources      (what is done     (direct, countable   (change for           (long-term,
 committed)      with them)        products)            beneficiaries)        population-level
                                                                               or systemic change)
```

Ilka column sud be mair specific nor the last: inputs are whit ye spend, activities are whit
ye dae, ootputs are whit gets delivert nae maitter the effect, ootcomes are whit chynges as a
result — the distinction covert in fu in
[ootcomes vs ootputs](../ootcomes-vs-ootputs/) — and impact is the lastin, aften only-pairtly-
attributable, lang-run chynge.

## Wrocht example

**Local authority (digital debt advice service)**:

- Inputs: £180,000 annual budget, 4.0 FTE advisers, a case management system.
- Activities: ootreach sessions, one-tae-one debt advice appointments.
- Ootputs: 900 appointments delivert; 750 debt and benefit plans issued.
- Ootcomes: o clients reachin a 6-month follow-up, 60% (450 o 750) report reduced arrears,
  averagin a £1,200 reduction per client — £540,000 in aggregate arrears reduction.
- Impact: a measurable faa in homelessness applications frae the service's client base ower twa
  year, only pairtly attributable tae this service alangside ither interventions (see
  [coonterfactual analysis](../counterfactual-analysis/)).

**Charity (food bank referral partnership)**:

- Inputs: £45,000, 1.5 FTE coordinator, pairtnership agreements wi 12 referral agencies.
- Activities: referral triage, parcel packin and distribution.
- Ootputs: 5,000 food parcels distributit tae 1,100 households.
- Ootcomes: 68% o surveyed households (748 o 1,100) report improved food security at a 4-week
  follow-up call.
- Impact: contribution tae reduced local crisis-service demand, evidenced only in aggregate area
  statistics, nae attributable tae this charity alane.

## Link tae saftware ingineerin

The logic model is gey near a literal data model for an ootcomes system: inputs and activities are
operational data ye already hae (spend, staffin, session logs); ootputs are easy tae instrument
because they are coontit at the pynt o delivery; ootcomes need follow-up
data collection (surveys, admin data linkage) that has been deliberately designed and that winna exist unless somebody biggs it;
impact usually needs linked, langitudinal, or population-level data ayont ony ae programme's systems.
Ingineers biggin reportin tools sud push commissioners tae define ootcome and impact
indicators at design time, raither nor defaultin tae an ootputs-only dashboard juist because that is whit
the transactional data already supports. See
[social return on investment](../social-return-on-investment/) for a method that values the
ootcomes and impact columns specifically, and
[benefits realization](../benefits-realization/) for trackin whether the impact column wis
actually delivert.

## Pitfaws

- **Stoppin at ootputs.** A dashboard that reports appointments delivert or parcels distributit
  and implies benefit is reportin activity, nae results — see
  [ootcomes vs ootputs](../ootcomes-vs-ootputs/).
- **Nae stated causal link atween columns.** A logic model states the chain but nae why activities
  sud produce ootputs that sud produce ootcomes; that reasonin belangs in a
  [theory o chynge](../theory-o-chynge/), and a logic model wi nane ahint it is untestit.
- **Treatin it as a yin-aff bid document.** Logic models made juist tae satisfy a fundin
  application and never updatit stop reflectin whit the programme actually does.
- **Attribution creep at the impact column.** Claimin population-level chynge as caused solely by
  ae programme, wioot a coonterfactual, owerstates whit the evidence supports.

## Sources

- HM Treasury, Magenta Book (2020), Chapter 3. <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, logic model guidance. <https://www.tnlcommunityfund.org.uk/>
- W.K. Kellogg Foundation, "Logic Model Development Guide" (2004). <https://www.wkkf.org/resource-directory/resources/2004/01/logic-model-development-guide>
