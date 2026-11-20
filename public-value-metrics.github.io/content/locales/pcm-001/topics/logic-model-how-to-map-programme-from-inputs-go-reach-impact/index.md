# Logic Model: How to Map Programme from Inputs go reach Impact

Logic model na straight diagram wey dey connect inputs, activities, outputs, outcomes and impact of one programme. Una dey read am from left go right as accountability chain: resources enter, activities happen, outputs come out, outcomes change for beneficiaries, and impact build up for wider or longer time. Na di standard structure wey funders and auditors dey expect make dem fit report programme against, and na di forward-facing partner of [theory of change](../theory-of-change-how-to-map-di-road-from-activities-go-long-term-goal/) wey dem map from back.

## Wetin make am matter

HM Treasury Magenta Book talk say logic model na must-have part of how dem suppose design programme evaluation, and funders like National Lottery Community Fund build dia application and reporting templates round exactly dis five-column chain. Di value na say e dey force programme to talk, inside one diagram, wetin e go spend, wetin e go do with am, wetin e go produce, and — na dis one pass — wetin suppose change as result, with level of detail wey paragraph of prose dey usually hide. If logic model get inputs and activities column wey full but di outcomes column empty or no clear, you fit see am at once, and na exactly why funders dey ask for am.

## Di maths

Logic model na structural chain, no be formula:

```
Inputs          Activities        Outputs             Outcomes              Impact
(resources      (wetin dem do     (direct products    (change for           (long-term,
 wey dem         with dem)         wey dem fit count)  beneficiaries)        population-level
 commit)                                                                     or systemic change)
```

Each column suppose pass di one before am for how e specific: inputs na wetin you spend, activities na wetin you do, outputs na wetin dem deliver no matter di effect, outcomes na wetin change as result — di difference wey we explain well inside [outcomes vs outputs](../outcomes-and-outputs-di-difference-between-wetin-you-do-and-wetin-e-change/) — and impact na di change wey go last, wey many times only partly fit be attributable, for long run.

## Example wey dem work out

**Local authority (digital debt advice service)**:

- Inputs: £180,000 annual budget, 4.0 FTE advisers, one case management system.
- Activities: outreach sessions, one-to-one debt advice appointments.
- Outputs: 900 appointments dem deliver; 750 debt and benefit plans dem issue.
- Outcomes: among di clients wey reach 6-month follow-up, 60% (450 out of 750) report say dia arrears reduce, with average of £1,200 reduction per client — £540,000 total arrears reduction.
- Impact: measurable fall for homelessness applications from di service client base over two years, wey only partly dey attributable to dis service because other interventions dey too (see [counterfactual analysis](../counterfactual-analysis-wetin-for-happen-without-di-intervention/)).

**Charity (food bank referral partnership)**:

- Inputs: £45,000, 1.5 FTE coordinator, partnership agreements with 12 referral agencies.
- Activities: referral triage, to pack parcel and to distribute am.
- Outputs: 5,000 food parcels dem distribute to 1,100 households.
- Outcomes: 68% of di households wey dem survey (748 out of 1,100) report say dia food security improve for 4-week follow-up call.
- Impact: contribution to reduced demand for local crisis services, wey only show for aggregate area statistics, and no be only dis charity cause am.

## How e connect to software engineering

Logic model almost be literal data model for outcomes system: inputs and activities na operational data wey you don already get (spend, staffing, session logs); outputs easy to instrument because dem dey count dem for di point of delivery; outcomes need follow-up data collection wey dem design on purpose (surveys, admin data linkage) wey no go exist unless somebody build am; impact usually need linked, longitudinal, or population-level data wey pass any one programme system. Engineers wey dey build reporting tools suppose push commissioners make dem define outcome and impact indicators for design time, no be to default to outputs-only dashboard just because na wetin transactional data already support. See [social return on investment](../social-return-on-investment-how-to-show-social-value-against-money-wey-dem-spend/) for method wey dey put value on outcomes and impact columns specifically, and [benefits realization](../benefits-realization-to-show-say-di-promised-benefits-really-happen/) for how to track whether dem really deliver di impact column.

## Wahala dem wey you suppose avoid

- **To stop for outputs.** Dashboard wey report appointments wey dem deliver or parcels wey dem distribute and imply say benefit dey, dey report activity, no be results — see [outcomes vs outputs](../outcomes-and-outputs-di-difference-between-wetin-you-do-and-wetin-e-change/).
- **No stated causal link between columns.** Logic model dey state di chain but e no dey explain why activities suppose produce outputs wey suppose produce outcomes; dat reasoning belong for [theory of change](../theory-of-change-how-to-map-di-road-from-activities-go-long-term-goal/), and logic model wey no get one behind am never dey tested.
- **To treat am as one-off bid document.** Logic models wey dem produce only to satisfy funding application and nobody update again no dey reflect wetin programme really dey do.
- **Attribution creep for di impact column.** To claim population-level change as if only one programme cause am, without counterfactual, na to overstate wetin di evidence fit support.

## Sources

- HM Treasury, Magenta Book (2020), Chapter 3. <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, logic model guidance. <https://www.tnlcommunityfund.org.uk/>
- W.K. Kellogg Foundation, "Logic Model Development Guide" (2004). <https://www.wkkf.org/resource-directory/resources/2004/01/logic-model-development-guide>
