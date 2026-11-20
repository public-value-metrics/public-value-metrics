# Cost per Beneficiary

Cost per beneficiary is total programme cost dividit by the nummer o unique fowk wha received a service — onybody touched, regairdless o whether their circumstances actually chynged. It is the fastest efficiency nummer an organization can produce, acause "wha did we serve" is near aye awready in the case management system, while "wha wis helpit" usually isnae.

## Why it maitters

Funders spier for cost per beneficiary aw the time, an for defensible reasons: it's available immediately, it's comparable athort a portfolio o gey different programmes, an it's honest aboot reach in a wey that ootcome claims — that tak langer tae verify an are easier tae owerstate — arenae. The UK Charities SORP (Statement of Recommended Practice), that governs hoo charities report unner FRS 102, requires trustees' annual reports tae describe achievements against objectives, but maist smaller charities' management accoonts still default tae reach-based unit costs acause they're cheap tae produce an audit-freendly.

The danger is treatin cost per beneficiary as if it answered the question it cannae answer: whether the siller warked. See [cost per outcome](../cost-per-ootcome/) for the metric that actually answers that, an [outcomes vs outputs](../ootcomes-vs-ootputs/) for the unnerlyin distinction. Cost per beneficiary is a legitimate triage an reach metric — it tells a funder hoo faur siller stretches — but a laich cost per beneficiary can mean either genuine efficiency or a service sae thin it chynges naething.

## The maths

```
Cost per beneficiary = Total programme cost / Nummer o unique fowk served

Contrast:
Cost per ootcome      = Total programme cost / Nummer o fowk achievin the definit ootcome

Cost per beneficiary is aye ≤ cost per ootcome, acause the ootcome population is a subset
(aften a wee ane) o the beneficiary population.
```

## Wrocht example

**Food bank, same year as the cost-per-ootcome example**:

- Total programme cost: £450,000
- Unique hoosehauds served (three-plus parcels): 1,800

```
Cost per beneficiary = £450,000 / 1,800 = £250 per hoosehaud served
```

Compare the twa metrics side by side:

| Metric | Denominator | Result |
|---|---|---|
| Cost per beneficiary | 1,800 hoosehauds served | £250 |
| Cost per ootcome | 630 hoosehauds achievin food security | £714 |

A funder wha anely sees £250 micht conclude this is a gey efficient charity. A funder wha sees baith nummers can spier the mair uisefu question: is the gap atween reach (1,800) an ootcome (630) a data-collection gap, a design gap, or an honest reflection o hoo haurd food security is tae achieve wi food aid alane?

**Job-trainin charity, illustrative**: cost per beneficiary (enrollit) = £2,000; cost per ootcome (sustained employment at 6 months) = £11,000, acause anely 18% o enrolees complete the programme an find sustained wark. The twa nummers divergin by a factor o five is common whaurever completion or durability rates are laich — a trainin charity an a food bank are structurally identical here.

## Link tae saftware ingineerin

Cost per beneficiary is the default metric in nonprofit software acause it's the metric that fa's oot o a beneficiary record wi nae further wark: creatin a case, loggin a service, coontin rows. Biggin a system that an aw supports cost per ootcome means deliberately addin a second first-class entity — an ootcome event, datit an definit independently o service delivery — an resistin the temptation tae lat "case shut" staund in for "ootcome achieved." Whan scopin a grant management or CRM platform, spier whilk o the twa metrics ilka dashboard is actually shawin, an label it accordinly; mixin them in a single "impact" tile is ane o the commonest software-level causes o the pitfaws ablow. See [unit cost databases](../unit-cost-databases/) for benchmarkin either metric aince it's correctly labellit.

## Pitfaws

- **Presentin cost per beneficiary as impact.** It meisures reach, no chynge. Label dashboards an reports "cost per person served," no "cost per person helpit."
- **Double coontin athort programmes.** A person receivin baith food parcels an debt advice frae the same charity is ae beneficiary, no twa, if the denominator is meant tae describe unique reach; decide an document whilk convention is uised.
- **Treatin a lawer nummer as aye better.** A drap-in lunch club will aye beat an intensive case-management service on cost per beneficiary, acause it costs less tae touch somebody lichtly. That says naething aboot whilk produces mair durable chynge per pound.
- **Silently swappin denominators atween reports.** A cost-per-beneficiary figure quotit in ae annual report against "enrollit" an in the next against "completit" isnae comparable year on year; state the denominator ilka time.

## Sources

- Charity Commission for England and Wales, guidance on charity reporting. <https://www.gov.uk/government/organizations/charity-commission>
- Charities SORP (FRS 102). <https://www.charitysorp.org/>
- New Philanthropy Capital (NPC), "Four Pillar Approach." <https://www.thinknpc.org/resource-hub/four-pillar-approach/>
