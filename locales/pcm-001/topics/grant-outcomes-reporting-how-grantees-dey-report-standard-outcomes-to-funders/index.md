# Grant Outcomes Reporting (IRIS+): How Grantees Dey Report Standard Outcomes to Funders

Grant outcomes reporting na di practice wey grantees dey report standardized, comparable outcome metrics go back to funders — instead of make each funder invent im own bespoke reporting template. IRIS+, wey di Global Impact Investing Network (GIIN) dey maintain, na di most widely adopted standard of dis kind: catalogue of pre-defined social, environmental, and financial performance metrics wey impact investors and, more and more, grant-making foundations dey require or recommend make grantees use.

## Wetin make am matter

Before standardized reporting, every foundation dey ask grantees for different set of indicators for different format, and mid-sized charity wey get ten funders fit dey run ten parallel reporting processes for overlapping work — well-documented driver of di reporting burden wey grant-outcomes standardization dey exist to reduce. IRIS+ address dis by giving funders and grantees shared vocabulary: Core Metrics Sets wey dem group by theme (e.g. affordable housing, clean energy access, financial inclusion), each metric dem define precisely enough so dat "jobs created" or "households served" mean di same thing no matter who report am, and dem align am to di UN Sustainable Development Goals so dat funder fit roll grantee-level data up to portfolio-level SDG narrative. GIIN report say roughly half of impact investors and di large majority of fund managers, banks, and development finance institutions wey dey active for di field dey use IRIS metrics.

Di standardization matter most where e interact with [outcomes vs outputs](../outcomes-and-outputs-di-difference-between-wetin-you-do-and-wetin-e-change/): IRIS+ dey push reporting toward defined outcome and impact metrics instead of whatever grantee existing case management system happen to log, wey na exactly di gap wey [cost per outcome](../cost-per-outcome-wetin-e-cost-to-really-change-person-life/) versus [cost per beneficiary](../cost-per-beneficiary-wetin-e-cost-to-reach-each-person/) describe.

## Di maths

Grant outcomes reporting na framework and process, no be formula:

```
1. Funder select Core Metrics Set wey relevant to di grant theme
   (e.g. IRIS+ "Financial Inclusion" or "Sustainable Agriculture")
2. Each metric get fixed definition, unit, and calculation method
   wey GIIN publish — dem no invent am per-funder
3. Grantee report against di same metric definitions across all
   im funders wey dey use dat standard, wey cut duplicate reporting effort
4. Funder aggregate grantee-level metrics into portfolio-level reporting,
   comparable year over year and across grantees wey dey use di same metric
```

Di efficiency gain na combinatorial: to standardize N funders × M grantees onto one shared vocabulary dey turn N×M bespoke reporting relationships into roughly N+M mappings against one standard.

## Example wey dem work out

**Grantee wey get three funders, before standardization**: e report "people served" to Funder 1 using headcount definition, "beneficiaries reached" to Funder 2 using household definition, and "individuals impacted" to Funder 3 using service-episode definition (so one person wey visit twice go count twice). Three reports, three numbers, none comparable, and none comparable to another grantee numbers even inside di same funder portfolio.

**Di same grantee under IRIS+**: e report against defined IRIS+ individuals-reached metric together with defined outcome metric from di relevant Core Metrics Set, using GIIN published calculation methodology for both. All three funders now receive di same number, wey dem calculate di same way, and dem fit compare dis grantee cost per IRIS+-defined unit against other grantees for dia portfolio wey dey use di identical metric — di equivalent, for reporting-infrastructure scale, of to get shared [unit cost database](../unit-cost-databases-library-of-ready-made-money-values-for-social-outcomes/).

## How e connect to software engineering

Grant management platforms suppose treat IRIS+ metric identifiers as foreign key, no be free text: to store di published metric code beside grantee reported value (instead of locally invented field wey dem name "beneficiaries") na wetin dey make cross-funder and cross-portfolio aggregation possible later without data-cleaning project. Where platform must support funders wey no adopt IRIS+, di pragmatic design na to let local metric map to di nearest IRIS+ definition instead of to force every funder onto di standard immediately — comparability dey improve incrementally as more of di graph map onto shared identifiers. See di sibling topic [cost per outcome](../cost-per-outcome-wetin-e-cost-to-really-change-person-life/) for wetin dem suppose use di reported numbers calculate once dem don collect am.

## Wahala dem wey you suppose avoid

- **To treat IRIS+ adoption as automatic comparability.** Two grantees fit both report against di same IRIS+ metric and still no go comparable if dia underlying data quality or counterfactual assumptions differ; di standard dey fix definitions, no be measurement rigour.
- **Funder-invented "IRIS-aligned" metrics.** Metric wey just dey inspired by IRIS+ language but no be di actual published definition dey reintroduce di fragmentation wey di standard dey exist to solve.
- **Reporting fatigue from over-selection.** To require grantee to report against entire Core Metrics Set wen only two or three metrics dey decision-relevant dey recreate di burden problem inside standardized wrapper.
- **No outcome metric at all.** IRIS+ include many pure output metrics (e.g. counts of people served); to select only dose ones, and none of di outcome-tier metrics, dey produce [cost-per-beneficiary](../cost-per-beneficiary-wetin-e-cost-to-reach-each-person/)-shaped reporting under outcomes-reporting label.

## Sources

- GIIN, IRIS+ system. <https://iris.thegiin.org/>
- GIIN, IRIS+ Catalog of Metrics. <https://iris.thegiin.org/metrics/>
- GIIN, About IRIS+. <https://iris.thegiin.org/about/>
