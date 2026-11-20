# Green Book Appraisal (Five-Case Model): How UK Government Dey Judge Spending Proposals

Di Green Book na HM Treasury mandatory guidance for how to appraise and evaluate UK government spending proposals. Im central tool, di five-case model, dey force business case to answer five separate questions — na good idea be dis, e deliver value, dem fit procure am, dem fit afford am, and dem fit deliver am — instead of to collapse everything into single number wey minister fit just wave through.

## Wetin make am matter

Every UK central government spending proposal wey pass departmental delegated limits must go through Green Book appraisal before dem release funding, and HM Treasury Green Book Review 2020 (wey dem publish after criticism say di process bias against poorer regions, see <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>) tighten di requirement say dem must compare options against genuine "do minimum" baseline and say dem must demonstrate strategic fit before dem even assess value for money. Di five-case model itself dey older than di Green Book — e originate with di Office of Government Commerce as di standard business case structure — but di 2022 Green Book edition embed am as di mandatory shape for any business case wey dey seek Treasury approval: <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>.

Di point of to split di case five ways na say proposal fit fail for any one dimension no matter di others. Strategically sound, cost-effective IT replatform fit still fail di commercial case if only one supplier fit deliver am (wey create single-tender risk), or fail di management case if di department no get track record of to deliver programmes of dat size. Single "value for money" score dey hide exactly dis kind of failure mode.

## Di maths

Di five-case model na structure, no be formula, but each case get im own quantitative or evidential test:

```
1. Strategic case
   Evidence of spending objective wey link to organisational strategy.
   Test: case for change dey at all? ("do nothing" na always option.)

2. Economic case
   Options appraisal against "do minimum" baseline, using
   social cost-benefit analysis or cost-effectiveness analysis.
   Test: which option maximize net public value?
   See ../social-cost-benefit-analysis/ and ../cost-effectiveness-analysis-in-government/

3. Commercial case
   Market engagement, procurement route, risk allocation between
   buyer and supplier.
   Test: dem fit procure di preferred option for acceptable terms?

4. Financial case
   Affordability inside departmental budget limits, funding source,
   balance sheet treatment.
   Test: we fit afford am, dis year and every year after?

5. Management case
   Governance, project plan, benefits realization plan, risk register.
   Test: dis organization fit really deliver am?
   See ../benefits-realization/
```

Di economic case na where di quantitative appraisal dey: dem dey compare options on [social discount rate](../social-discount-rate-how-government-dey-price-benefits-wey-go-come-later/)-adjusted net present value basis, using di [social cost-benefit analysis](../social-cost-benefit-analysis-how-to-weigh-every-cost-and-benefit-to-society/) method, or, where dem no fit honestly monetize benefits, through [cost-effectiveness analysis](../cost-effectiveness-analysis-for-government-decisions/) or [multi-criteria decision analysis](../multi-criteria-decision-analysis-how-to-weigh-options-wey-no-fit-share-one-unit/).

## Example wey dem work out

**Local authority**: council wey dey appraise £12 million housing repairs IT system dey run di five cases like dis. Strategic case: repairs backlog go breach statutory decent-homes standard inside 18 months without intervention. Economic case: three options wey dem cost over 10-year appraisal period at 3.5% discount rate (per di 2022 Green Book standard social time preference rate) — "do minimum" (patch di legacy system, NPV −£4.1m), "buy" (COTS platform, NPV +£2.3m), "build" (bespoke platform, NPV +£0.6m once dem apply optimism bias of 40% for software development against di undiscounted capital cost, per Green Book Annex A). Buy win di economic case. Commercial case: two viable suppliers dey, competitive tender possible — e pass. Financial case: capital dey available from di Public Works Loan Board, revenue costs fit inside di medium-term financial plan — e pass. Management case: council don deliver two comparable systems for di last five years — e pass. Di proposal go ahead with "buy."

**Central government department**: proposal wey get strong economic case (NPV +£40m) but where only one supplier hold di relevant accreditation fail di commercial case test for competitive tension, wey force either single-tender waiver (wey get im own scrutiny burden) or redesign of di specification to open di market — di economic case alone no for ever show dis.

## How e connect to software engineering

Engineering teams inside government or grant-funded organizations usually only dey see di economic case, because na dat part product and engineering leadership dey get ask to justify ("what's the ROI of this migration?"). But business case wey go clear Treasury or grant committee need all five, and engineers often be di best-placed people to answer di commercial case (dem fit really procure dis, or e go lock us into one vendor proprietary format?) and di management case (we get di delivery capability, or e depend on three specific people no to leave?). Treat request for "just the business case numbers" as request for one fifth of di actual decision. See [value for money](../value-for-money-di-test-whether-public-spending-dey-worth-am/) for how dem usually summarize di economic case output, and [total cost of ownership](../total-cost-of-ownership-in-government-it-di-full-cost-of-system-from-buy-till-e-die/) for di financial case usual quantitative core.

## Wahala dem wey you suppose avoid

- **To write di economic case first and di strategic case to match am.** Di Green Book Review 2020 find dis exact failure mode as wetin dey drive appraisal bias toward places and sectors wey already well-evidenced, wey entrench regional inequality; di strategic case suppose establish di objective before dem compare options.
- **To treat "do minimum" as "do nothing."** Di correct baseline na di lowest-cost option wey still meet minimum legal or safety obligations, no be fantasy of zero spend — to compare against literal zero dey inflate every option apparent value.
- **To skip di commercial and management cases because di economic case strong.** High-NPV proposal wey dem no fit procure competitively or wey di sponsoring organization no fit deliver no be fundable proposal; Treasury reviewers dey routinely reject for dis grounds even with compelling economic case.
- **To apply di five-case model once, for di start.** Di Green Book require make dem revisit di case for each subsequent approval gate (strategic outline case, outline business case, full business case) as costs and evidence firm up — case wey dem freeze for outline stage go miss cost escalation wey later gate for catch.

## Sources

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury. "Green Book Review 2020: findings and response." 2020.
  <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>
- HM Treasury / Infrastructure and Projects Authority. "Guide to developing the project business
  case." <https://www.gov.uk/government/publications/project-business-case-guide>
