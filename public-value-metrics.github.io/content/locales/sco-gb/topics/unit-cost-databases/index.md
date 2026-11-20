# Unit cost databases

A unit cost database is a library o pre-researched, evidence-based financial proxies for social
ootcomes — the value o muivin frae unemployment intae employment, o reducit lonelieness, o a stable
tenancy — that let a practitioner monetise an ootcome athoot commissionin bespoke valuation
research ilka time. They exist sae a wee charity writin a fundin bid can apply the same
rigour as a weel-resourcit consultancy, bi reuisin a proxy somebody else haes already derived an
publisht.

## Why it maitters

HACT's UK Social Value Bank, developit wi economist Daniel Fujiwara uisin wellbein valuation
methods, an Global Value Exchange, an open, crowdsourced database o financial proxies, are the twa
maist widely uised in the UK third an public sectors. Baith exist acause the underlyin valuation
wark — [wellbein valuation](../wellbein-valuation/) an
[stated preference valuation](../valuation-bi-stated-preference/) — is expensive, methodologically
demandin, an slaw tae rin frae scratch for ilka project. A shared, publisht proxy library turns
whit wad be a multi-month research exercise intae a lookup, that is precisely why they maitter for
baith [social return on investment](../social-return-on-investment/) calculations an
[Social Value Act](../social-value-act/) bid evaluations: athoot them, rigorous monetisation wad
be affordable ainly tae organisations lairge eneuch tae commission their ain studies.

## The maths

A unit cost database daesnae compute onythin itsel; it supplies yin input tae a calculation duin
elsewhaur:

```
Financial proxy value = merkit price, OR shadae price, OR wellbein valuation,
                         OR stated-preference value
                         for a definit unit o ootcome chynge
                         (e.g. "per person muivin frae unemployment tae employment, per year")

Applied value = nummer o ootcomes achieved × unit proxy value
```

See [shadae pricin](../shadae-pricin/) for hou a proxy is constructit whan nae merkit price
exists, an [social return on investment](../social-return-on-investment/) for hou the applied
value then feeds intae a ratio efter deidweicht an attribution adjustments.

## Wrocht example

**Charity (befriendin service SROI)**: a unit cost database entry for "reduction in lonelieness"
gies an illustrative proxy o £1,100 per person per year. Applied tae 80 beneficiaries: 80 ×
£1,100 = £88,000 gross value. If the same database an aw haes a proxy for "improvit mental
wellbein" that draws on an owerlappin wellbein survey item, stackin baith proxies for the same
80 fowk wad double coont pairt o the same underlyin chynge — the database supplies the nummer,
but avoidin this owerlap is the analyst's responsibility.

**Local authority (job club SROI)**: a unit cost database entry for "muivin frae unemployment intae
sustained employment" is applied tae 45 participants at an illustrative proxy o £8,500 per person
per year: 45 × £8,500 = £382,500 gross value, afore the deidweicht an attribution adjustments
shawn in [social return on investment](../social-return-on-investment/).

## Link tae saftware ingineerin

Teams biggin reportin tools for charities or commissioners benefit frae an internal "ootcome
catalogue" — a table mappin ilka ootcome a product or service can plausibly claim tae a named proxy,
its source database, its publication date, an a version identifier — sae that different teams
athort an organisation dinnae each pick slichtly different values for the same ootcome. Wrappin
Global Value Exchange's open data ahint a lookup service, wi the source an date aye
displayed alangside the figure, keeps the proxy auditable raither nor a magic nummer buried in a
spreadsheet. See [social return on investment](../social-return-on-investment/) an
[social value act](../social-value-act/) for the twa main places thir proxies get consumit.

## Pitfaws

- **Treatin proxies as precise.** Maist publisht proxies are modellit averages frae wellbein
  valuation studies wi wide confidence intervals; quotin yin tae the pund owerstates the
  precision the underlyin research supports.
- **Double coontin owerlappin proxies.** Combinin proxies (e.g. "reducit lonelieness" an
  "improvit mental wellbein") that are derived frae owerlappin survey constructs values the same
  underlyin chynge twice.
- **Uisin an oot-o-context proxy unadjustit.** A proxy calibratit on yin national population an
  year, applied elsewhaur athoot inflation or context adjustment, quietly mis-states value.
- **Nae checkin provenance.** Global Value Exchange is open an crowdsourced, sae entry quality
  varies bi contributor; check the underlyin source afore citin a figure in a fundin bid or
  procurement submission.

## Sources

- HACT, "UK Social Value Bank." <https://hact.org.uk/tools-and-services/uk-social-value-bank/>
- Global Value Exchange. <https://www.globalvaluexchange.org/>
- Fujiwara D., "The Social Impact of Housing Providers" (HACT, 2013) — methodological basis of the
  UK Social Value Bank.
- Social Value UK, "A Guide to Social Return on Investment," section on financial proxies.
