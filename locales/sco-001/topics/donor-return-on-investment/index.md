# Donor Return on Investment (Return on investment for donors)

Donor return on investment is whit a specific donor's pound actually buys in ootcomes — no the charity's operatin ratios, an no the charity's ain return on its total budget. It reframes ROI frae the organization's perspective (hoo efficiently dae we rin) tae the donor's perspective (whit disnae my marginal contribution chynge), an the twa nummers are routinely, an wrangly, treatit as the same thing.

## Why it maitters

A charity's ain "ROI," tae the extent the phrase is uised ava, usually describes somethin like [cost per beneficiary](../cost-per-beneficiary/) or [charity overhead ratio](../charity-owerheid-ratio/) — organisational efficiency meisures. A donor's ROI is a different question athegither: gien that this charity awready haes ither income, whit disnae *this* donor's siller add at the margin? If a charity wad deliver the same programme wi or athoot a particular £10,000 gift — acause it haes ample reserves, or acause anither funder wad hae fillit the gap — that gift's donor ROI is near zero, hoo guid soever the charity's owerall overhead ratio or cost per ootcome looks.

This is the same additionality question that underpins [value for siller](../value-for-siller/) assessment in UK public spendin an [additionality an deadweight](../additionality-an-deadweight/) in programme evaluation: value creatit is anely creditable tae a funder tae the extent it wadnae hae happened onyway. Major donor-advised platforms an effective-givin organizations (Giving What We Can, GiveWell) big their recommendations explicitly roond this distinction, spierin no "is this a guid charity" but "haes this charity unfillit room for mair fundin sae that my gift is additional."

## The maths

```
Donor ROI ≠ Charity's operating efficiency

Donor ROI  ≈  (Outcome achieved with the gift) − (Outcome that would have
               occurred without it, i.e. the counterfactual)
             ─────────────────────────────────────────────────
                              Size of the gift

Key inputs:
  - Room for more funding (is the charity funding-constrained at the margin?)
  - Funging (would another donor have filled the gap?)
  - Marginal cost-effectiveness at the specific funding level (costs often
    rise as an intervention scales past its easiest-to-reach population)
```

See [effective altruism cost-effectiveness](../effective-altruism-cost-effectiveness/) for hoo GiveWell operationalizes the "room for mair fundin" question, an [counterfactual analysis](../counterfactual-analysis/) for the general method.

## Wrocht example

A donor is choosin atween twa £5,000 gifts:

- **Charity C**: haes a fully fundit core programme wi £2 million in reserves an a waitin list o funders; the marginal £5,000 likely gets addit tae reserves or a laicher-priority activity. Estimatit donor-additional ootcome: minimal — the siller isnae obviously chyngin whit happens.
- **Charity D**: a wee, evidence-backit programme that haes publicly statit it will hae tae turn awa 200 fowk next quarter athoot an additional £50,000, an haes raised £42,000 o it. The marginal £5,000 is gey likely tae fund real additional delivery — say, 20 additional fowk served, at the charity's ain statit cost per beneficiary o £250.

Same gift size, same donor, radically different donor ROI — no acause Charity C is a worse organization (it micht hae a better cost-per-ootcome figure owerall) but acause its marginal fundin gap is awready closed.

## Link tae saftware ingineerin

Donor platforms an givin-recommendation tools ower aften surface anely organization-level efficiency metrics (overhead ratio, cost per beneficiary) acause thae are whit charities publish in annual reports an whit's easiest tae pull intae a comparison table. Representin donor ROI properly requires a different, harder-tae-source data pynt: a charity's statit current fundin gap or "room for mair fundin," which chynges throughoot the year an is seldom structured data. Platforms that wad support genuine donor-ROI reasonin need either a direct feed frae fundin-gap disclosures (as GiveWell maintains manually for its recommendit charities) or an explicit disclaimer that a comparison table is shawin organisational efficiency, no donor additionality. See [charity overhead ratio](../charity-owerheid-ratio/) for the metric donor ROI is maist aften, an wrangly, conflatit wi.

## Pitfaws

- **Conflatin charity efficiency wi donor additionality.** A weel-run, laich-overhead charity can still hae a near-zero marginal donor ROI if it isnae fundin-constrained.
- **Ignorin funging.** If a muckle institutional funder wad hae coverit the gap regardless, an individual donor's gift displaces that funder's siller raither nor addin new delivery.
- **Assumin linear cost-effectiveness at scale.** The cheapest-tae-reach beneficiaries are aften served first; marginal cost per ootcome frequently rises as a programme expands, sae the ROI on the next pound isnae the same as the ROI on the average pound awready spent.
- **Nae statit fundin gap.** A charity or platform that cannae say whit the next £X wad fund cannae support a genuine donor-ROI claim, anely an average-cost ane.

## Sources

- Giving What We Can, on funding gaps and cost-effectiveness in donation decisions. <https://www.givingwhatwecan.org/>
- GiveWell, "Our criteria" (room for more funding as an explicit criterion). <https://www.givewell.org/how-we-work/our-criteria>
- HM Treasury, the Green Book: appraisal and evaluation in central government. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-governent>
