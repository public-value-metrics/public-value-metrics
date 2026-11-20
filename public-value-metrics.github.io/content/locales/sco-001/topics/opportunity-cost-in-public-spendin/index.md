# Opportunity cost in public spendin

Opportunity cost is the value o the best alternative forgone whan a public body commits siller,
staff time, or political capital tae ae option insteid o anither. In a department wi a fixed
budget, ilka pund spent on ae programme is a pund that cannae be spent on the next-best
programme — the true cost o a decision isnae whit it spends, but whit it displaces.

## Why it maitters

Public budgets are cash-limitit within a spendin review period, sae — unlike a growin private firm
— a government department cannae juist "find mair siller" for a guid idea; fundin it means
un-fundin somethin else. HM Treasury's Green Book (the Treasury's appraisal guidance) treats this as foundational: ilka appraisal is
requirt tae compare an intervention agin a "do minimum" baseline *and* agin realistic
alternative uises o the same resource, juist because the real question a Treasury spendin team
asks is never "is this guid?" but "is this better nor whit else this siller could buy?" The Green
Book's core appraisal principle — that public resources sud flow tae the intervention wi the
heichest net social value per pund — is opportunity cost stated as policy.

This is easy tae state and hard tae apply because the "next-best alternative" is raurly veisible in a
single business case. A £2 million grant programme for youth employment is compared, in the business
case, agin daein naething — but the honest comparator is the next-best youth employment
intervention, or indeed the next-best uise o £2 million onywhaur in the portfolio, includin
non-employment spendin. The Magenta Book (HM Treasury, 2020) warns explicitly that evaluations
comparin "with intervention" tae "without intervention" understate the bar an intervention maun
clear, because "without this intervention" isnae the same as "with naething at aw" — siller released
funds somethin else.

## The maths

```
Opportunity cost of choosing A = value of the best forgone alternative B

Net public value of A = value(A) − value(B), not value(A) − 0
```

There is nae universal formula because the forgone alternative is context-specific, but the
discipline generalizes: identify the realistic next-best uise o the same budget line (nae an
idealized "dae naething"), value it on the same basis (monetized whaur possible, per
[social cost-benefit analysis](../social-cost-benefit-analysis/)), and subtract.

## Wrocht example

**Department budget line**: a £5 million digital-transformation fund can finance exactly ane o twa
proposals this financial year.

- *Option A*: a new case-management platform, monetized benefit £7.2 million ower 5 year
  (efficiency savings plus faster case resolution).
- *Option B*: an identity-verification service shared across three departments, monetized benefit
  £6.4 million ower 5 year.

A naïve business case for A compares £7.2 million o benefit agin £5 million o cost and reports
a 1.44:1 benefit-cost ratio — apparently strong. But because A and B compete for the same £5 million,
the opportunity cost o choosin A is B's £6.4 million forgone benefit. The *net* case for A ower the
realistic alternative is only £7.2m − £6.4m = £0.8 million, nae the fu £7.2 million headline. If a
third option, C, offered £7.5 million o benefit for the same £5 million, fundin A ower C wad
destroy £0.3 million o public value even though A's ain business case looks fully justified in
isolation.

**Local authority staff time**: a cooncil's three-person data team can big either a housin-waitlist
dashboard (estimatit tae save 400 officer-hours/year, valued at £28/hour = £11,200/year) or a
benefits-fraud triage tool (estimatit tae prevent £85,000/year in incorrect payments). Biggin the
dashboard has an opportunity cost o £85,000/year forgone, nae merely the salary cost o the data
team — the real cost o the "free" internal build is the faur larger benefit the team could hae
produced elsewhaur.

## Link tae saftware ingineerin

Ingineerin capacity inside a public body is itsel a constrained budget — sprint capacity, nae
punds — and the same discipline applies directly:

- Aye name the comparator: a feature's business case sud state whit else the same team-weeks
  could deliver, nae juist its ain return.
- Treat "we hae ingineerin capacity spare" as the stairt o an opportunity-cost analysis, nae the
  end — spare capacity still has a best alternative uise, even if that uise is technical-debt paydoun
  (see [technical debt as public value erosion](../technical-debt-as-erosion-o-public-value/)).
- Connect this directly tae [value for siller](../value-for-siller/): VFM's "economy" test is
  meaninless wioot an honest opportunity-cost comparator, and tae
  [cost o delay in public programmes](../cost-o-delay-in-public-programmes/), which prices the
  time dimension o the same forgone-alternative logic.

## Pitfaws

- **Comparin agin "dae naething" insteid o the next-best alternative.** The Green Book requires a
  "do minimum" baseline juist because true opportunity cost is raurly zero; a business case that
  only clears the "dae naething" bar has nae shown it beats the realistic alternative.
- **Ignorin cross-departmental competition for the same pot.** Budget lines that look ring-fenced
  within ae directorate aften compete at a heicher level (a spendin review, a capital programme)
  whaur the real opportunity cost is realized.
- **Assumin staff time released has nae further value.** Time "saved" only creates value if
  redeployed tae somethin valuable; if the alternative uise disnae exist, the savin is notional.

## Sources

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation" (2022).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020).
  <https://www.gov.uk/government/publications/the-magenta-book>
- Claxton K, et al. "Methods for the estimation of the NICE cost-effectiveness threshold." Health
  Technology Assessment, 2015;19(14) — the canonical empirical demonstration of opportunity cost as
  a binding constraint in a fixed public budget. <https://www.journalslibrary.nihr.ac.uk/hta/hta19140/>
