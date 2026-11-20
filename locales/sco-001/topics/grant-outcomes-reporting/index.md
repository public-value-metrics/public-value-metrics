# Grant Outcomes Reporting (IRIS+) (Reportin o grant ootcomes)

Grant ootcomes reportin is the practice o grantees reportin staundardizit, comparable ootcome metrics back tae funders — as opposed tae ilka funder inventin its ain bespoke reportin template. IRIS+, maintained by the Global Impact Investing Network (GIIN), is the maist widely adoptit sic staundart: a catalogue o pre-defined social, environmental, an financial performance metrics that impact investors an, mair an mair, grant-makin foundations require or recommend that grantees uise.

## Why it maitters

Afore staundardizit reportin, ilka foundation spiered grantees for a different set o indicators in a different format, an a middlin-sized charity wi ten funders cud be runnin ten parallel reportin processes for owerlappin wark — a weel-documentit driver o the reportin burden that grant-ootcomes staundardization exists tae reduce. IRIS+ addresses this by givin funders an grantees a shared vocabulary: Core Metrics Sets groupit by theme (e.g. affordable housin, clean energy access, financial inclusion), ilka metric defined precisely enough that "jobs created" or "households served" means the same thing whaever reports it, an alignit tae the UN Sustainable Development Goals sae a funder can roll grantee-level data up tae a portfolio-level SDG narrative. GIIN reports that IRIS metrics are uised by roughly hauf o impact investors an the lairge majority o fund managers, banks, an development finance institutions active in the field.

The staundardization maitters maist whaur it interacts wi [ootcomes vs ootputs](../ootcomes-vs-ootputs/): IRIS+ pushes reportin towards defined ootcome an impact metrics raither nor whitever a grantee's existin case management system happens tae log, which is exactly the gap [cost per ootcome](../cost-per-ootcome/) versus [cost per beneficiary](../cost-per-beneficiary/) describes.

## The maths

Grant ootcomes reportin is a framework an process, no a formula:

```
1. Funder selects a Core Metrics Set relevant to the grant's theme
   (e.g. IRIS+ "Financial Inclusion" or "Sustainable Agriculture")
2. Each metric has a fixed definition, unit, and calculation method
   published by GIIN — not invented per-funder
3. Grantee reports against the same metric definitions across all
   its funders using that standard, cutting duplicate reporting effort
4. Funder aggregates grantee-level metrics into portfolio-level reporting,
   comparable year over year and across grantees using the same metric
```

The efficiency gain is combinatorial: staundardizin N funders × M grantees ontae ae shared vocabulary turns N×M bespoke reportin relationships intae roughly N+M mappings agin ae staundart.

## Wrocht example

**A grantee wi three funders, afore staundardization**: reports "people served" tae Funder 1 uisin a headcoont definition, "beneficiaries reached" tae Funder 2 uisin a hoosehauld definition, an "individuals impacted" tae Funder 3 uisin a service-episode definition (sae ae person veesitin twice coonts twice). Three reports, three nummers, nane comparable, an nane comparable tae anither grantee's nummers even athin the same funder's portfolio.

**The same grantee unner IRIS+**: reports agin a defined IRIS+ individuals-reached metric alangside a defined ootcome metric frae the relevant Core Metrics Set, uisin GIIN's published calculation methodology for baith. Aw three funders nou receive the same nummer, calculatit the same wey, an can compare this grantee's cost per IRIS+-defined unit agin ither grantees in their portfolio uisin the identical metric — the equivalent, at reportin-infrastructure scale, o haein a shared [unit cost database](../unit-cost-databases/).

## Link tae saftware ingineerin

Grant management platforms shuid treat IRIS+ metric identifiers as a foreign key, no free text: storin the published metric code alangside a grantee's reportit value (raither nor a locally inventit field cried "beneficiaries") is whit maks cross-funder an cross-portfolio aggregation possible later athoot a data-cleanin project. Whaur a platform maun support funders wha hinnae adoptit IRIS+, the pragmatic design is tae let a local metric be mappit tae the nearest IRIS+ definition raither nor forcin ilka funder ontae the staundart straucht awa — comparability improves incrementally as mair o the graph maps ontae shared identifiers. See the sibling topic [cost per ootcome](../cost-per-ootcome/) for whit the reportit nummers shuid be uised tae calculate aince collectit.

## Pitfaws

- **Treatin IRIS+ adoption as automatic comparability.** Twa grantees can baith report agin the same IRIS+ metric an still no be comparable if their underlyin data quality or counterfactual assumptions differ; the staundart fixes definitions, no meisurement rigour.
- **Funder-inventit "IRIS-alignit" metrics.** A metric that is merely inspired by IRIS+ language but no the actual published definition reintroduces the fragmentation the staundart exists tae solve.
- **Reportin fatigue frae ower-selection.** Requirin a grantee tae report agin an entire Core Metrics Set whan anely twa or three metrics are decision-relevant recreates the burden problem in a staundardizit wrapper.
- **Nae ootcome metric ava.** IRIS+ includes mony pure ootput metrics (e.g. coonts o fowk served); selectin anely thae, an nane o the ootcome-tier metrics, produces [cost-per-beneficiary](../cost-per-beneficiary/)-shapit reportin unner an ootcomes-reportin label.

## Sources

- GIIN, IRIS+ system. <https://iris.thegiin.org/>
- GIIN, IRIS+ Catalog of Metrics. <https://iris.thegiin.org/metrics/>
- GIIN, About IRIS+. <https://iris.thegiin.org/about/>
