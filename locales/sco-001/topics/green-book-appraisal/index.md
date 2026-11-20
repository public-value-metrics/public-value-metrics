# Green Book Appraisal (Five-Case Model) (Green Book appraisal an the five-case model)

The Green Book is HM Treasury's mandatory guidance for appraisin an evaluatin UK government spendin proposals. Its central tool, the five-case model, forces a business case tae answer five separate questions — is it a guid idea, daes it deliver value, can it be procurit, can it be affordit, an can it be deliverit — raither nor collapsin iverything intae a single nummer a minister can wave throu.

## Why it maitters

Ilka UK central government spendin proposal abune departmental delegatit limits maun gang throu Green Book appraisal afore fundin is released, an HM Treasury's Green Book Review 2020 (published efter criticism that the process wis biased agin puirer regions, see <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>) tichtened the requirement that options be compared agin a genuine "do minimum" baseline an that strategic fit be demonstratit afore value for siller is even assessed. The five-case model itsel predates the Green Book — it originatit wi the Office of Government Commerce as the staundart business case structure — but the 2022 Green Book edition embeds it as the mandatory shape for onie business case seekin Treasury approval: <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>.

The pynt o splittin the case five weys is that a proposal can fail on onie ae dimension regardless o the ithers. A strategically soond, cost-effective IT replatform can still fail the commercial case if anely ae supplier can deliver it (creatin single-tender risk), or fail the management case if the department haes nae track record o deliverin programmes o that size. A single "value for siller" score hides exactly this kind o failure mode.

## The maths

The five-case model is a structure, no a formula, but ilka case haes its ain quantitative or evidential test:

```
1. Strategic case
   Evidence of a spending objective linked to organisational strategy.
   Test: is there a case for change at all? ("do nothing" is always an option.)

2. Economic case
   Options appraisal against a "do minimum" baseline, using
   social cost-benefit analysis or cost-effectiveness analysis.
   Test: which option maximizes net public value?
   See ../social-cost-benefit-analysis/ and ../cost-effectiveness-analysis-in-government/

3. Commercial case
   Market engagement, procurement route, risk allocation between
   buyer and supplier.
   Test: is the preferred option procurable on acceptable terms?

4. Financial case
   Affordability within departmental budget limits, funding source,
   balance sheet treatment.
   Test: can we afford it, this year and every year after?

5. Management case
   Governance, project plan, benefits realization plan, risk register.
   Test: can this organization actually deliver it?
   See ../benefits-realization/
```

The economic case is whaur the quantitative appraisal lives: options are compared on a [social discoont rate](../social-discoont-rate/)-adjustit net present value basis, uisin the [social cost-benefit analysis](../social-cost-benefit-analysis/) method, or, whaur benefits cannae be honestly monetized, via [cost-effectiveness analysis](../cost-effectiveness-analysis-in-government/) or [multi-criteria decision analysis](../multi-criteria-decision-analysis/).

## Wrocht example

**Local authority**: a cooncil appraisin a £12 million housin repairs IT system runs the five cases as follaes. Strategic case: repairs backlog breaches statutory decent-homes staundart athin 18 months athoot intervention. Economic case: three options costit ower a 10-year appraisal period at a 3.5% discoont rate (per the 2022 Green Book's staundart social time preference rate) — "do minimum" (patch the legacy system, NPV −£4.1m), "buy" (COTS platform, NPV +£2.3m), "build" (bespoke platform, NPV +£0.6m aince optimism bias o 40% for saftware development is applied agin the undiscoontit capital cost, per Green Book Annex A). Buy wins the economic case. Commercial case: twa viable suppliers exist, competitive tender is feasible — passes. Financial case: capital available frae the Public Works Loan Board, revenue costs fit athin the medium-term financial plan — passes. Management case: cooncil haes deliverit twa comparable systems in the last five year — passes. The proposal proceeds wi "buy."

**Central government department**: a proposal wi a strong economic case (NPV +£40m) but whaur anely ae supplier haulds the relevant accreditation fails the commercial case test for competitive tension, forcin either a single-tender waiver (wi its ain scrutiny burden) or a redesign o the specification tae open the market — the economic case alane wad never hae surfaced this.

## Link tae saftware ingineerin

Ingineerin teams inside government or grant-fundit organizations usually anely iver see the economic case, acause that is the pairt product an ingineerin leadership are spiered tae justify ("whit's the ROI o this migration?"). But a business case that clears Treasury or a grant committee needs aw five, an ingineers are aften the best-placed fowk tae answer the commercial case (can this actually be procurit, or daes it lock us intae ae vendor's proprietary format?) an the management case (hae we the delivery capability, or daes this depend on three specific fowk no leavin?). Treat a request for "juist the business case nummers" as a request for ae fift o the actual decision. See [value for siller](../value-for-siller/) for hoo the economic case's ootput is usually summarizit, an [total cost o ownership](../total-cost-o-ownership-in-government-it/) for the financial case's usual quantitative core.

## Pitfaws

- **Writin the economic case first an the strategic case tae match it.** The Green Book Review 2020 foond this exact failure mode drivin appraisal bias towards places an sectors that were awready weel-evidenced, entrenchin regional inequality; the strategic case shuid establish the objective afore options are compared.
- **Treatin "do minimum" as "do nothing."** The correct baseline is the lowest-cost option that still meets minimum legal or safety obligations, no a fantasy o zero spend — comparin agin literal zero inflates ilka option's apparent value.
- **Skippin the commercial an management cases acause the economic case is strong.** A heich-NPV proposal that cannae be procurit competitively or deliverit by the sponsorin organization isnae a fundable proposal; Treasury reviewers routinely reject on thae grunds even wi a compellin economic case.
- **Applyin the five-case model aince, at the stert.** The Green Book requires the case tae be revisitit at ilka subsequent approval yett (strategic outline case, outline business case, full business case) as costs an evidence firm up — a case frozen at the outline stage misses cost escalation that a later yett wad hae caught.

## Sources

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury. "Green Book Review 2020: findings and response." 2020.
  <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>
- HM Treasury / Infrastructure and Projects Authority. "Guide to developing the project business
  case." <https://www.gov.uk/government/publications/project-business-case-guide>
