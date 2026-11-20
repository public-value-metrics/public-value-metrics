# Charity Owerheid Ratio

The charity owerheid ratio is administrative an fundraisin expenditure expressit as a percentage o total spend. It is the single maist requestit nummer in charitable gieing — uised by donors, watchdogs, an even some funders as a proxy for efficiency — an it is an aw ane o the maist thoroughly discreditit efficiency metrics in the sector, wi the organizations that popularized it publicly disownin it in 2013.

## Why it maitters

On 17 June 2013, GuideStar, the BBB Wise Giving Alliance, an Charity Navigator — the three lairgest US nonprofit ratin an information bodies, whase ain historical ratings haed helpit entrench owerheid ratio as a shorthaun for charity quality — publishit a jynt apen letter tae American donors, "The Overhead Myth," statin explicitly that owerheid ratio is a puir meisure o a charity's performance an urgin donors tae look insteid at transparency, governance, an results. This wis a direct reversal by the very institutions that haed biggit donor culture roond the ratio for a decade.

The unnerlyin problem is structural, no juist aboot optics: a laich owerheid ratio can be achieved by unnerinvestin in exactly the things that mak a charity effective — a decent case management system, trained staff, monitorin an evaluation — acause thae aften get bookit as "admin" raither than "programme" cost. A charity that starves its back office tae report 5% owerheid may be less able tae deliver ootcomes than ane that spends 20% on a properly resourcit operation. In England an Wales, the Charity Commission's guidance tae trustees steers awa frae a single owerheid percentage as an efficiency test, askin trustees insteid tae report on whit the charity achieved against its objectives — see the SORP reportin requirements discussed in [cost per beneficiary](../cost-per-beneficiary/).

## The maths

```
Owerheid ratio = (Administrative cost + Fundraisin cost) / Total expenditure

Common variants:
  Programme ratio        = Programme (direct charitable) spend / Total expenditure
                          = 1 − owerheid ratio
  Fundraisin efficiency  = Fundraisin cost / Funds raisit
```

Nane o thir formulas contains onie information aboot ootcomes achieved. A charity can minimize ilka ane o them an still fail ilka beneficiary; see [cost per outcome](../cost-per-ootcome/) for the metric that actually engages wi whether the siller warked.

## Wrocht example

Twa charities, same total spend:

- **Charity A**: £1,000,000 total spend, £80,000 admin + fundraisin → owerheid ratio 8%. It haes nae monitorin an evaluation function, ae owerwarkit finance officer, an nae case management system; staff turnower is heich an ootcome data isnae collectit.
- **Charity B**: £1,000,000 total spend, £220,000 admin + fundraisin → owerheid ratio 22%. It funds a wee evaluation team, a case management system that captures ootcome follow-up, an proper safeguardin trainin.

A donor screenin purely on owerheid ratio pits A an rejects B — the opposite o whit [cost per outcome](../cost-per-ootcome/) evidence wad likely shaw, acause B is the anely ane o the twa positioned tae demonstrate, or improve, its actual results.

## Link tae saftware ingineerin

Finance an grant-reportin software for the sector aften haurd-codes the owerheid/programme split as a categorical field on ilka cost line, acause that's whit regulators an some funders still require in statutory returns. Engineers biggin thir systems shuid treat that requirement as a compliance obligation, no a design signal that owerheid ratio is the metric worth surfacin prominently on a dashboard; pair it, whaurever it's shawn, wi an ootcome-based metric sae a viewer cannae read owerheid ratio in isolation. See [donor return on investment](../donor-return-on-investment/) for the metric that shuid sit aside it, an [value for money](../value-for-siller/) for the public-sector equivalent argument against single-ratio efficiency proxies.

## Pitfaws

- **Uisin owerheid ratio as a screenin cut-aff.** Rejectin onie charity abune an arbitrary threshold (e.g. "nae mair than 15% owerheid") systematically penalizes properly resourcit, weel-evaluatit organizations an rewards unnerinvestment.
- **Miscategorizin direct-delivery cost as owerheid**, or vice versa — accountin conventions for whit coonts as "programme" versus "admin" vary enough atween charities that ratios are aften no even comparable at face value.
- **Assumin laich owerheid implies heich impact.** The twa are, at best, uncorrelatit; see the 2013 Overhead Myth letter's core claim.
- **Ignorin that some legitimate strategies require heicher near-term owerheid.** A capacity-biggin or organisational-development phase intentionally raises admin spend tae improve later delivery.

## Sources

- GuideStar, BBB Wise Giving Alliance, and Charity Navigator, "The Overhead Myth" open letter, 17 June 2013. <https://learn.guidestar.org/news/news-releases/2013/2013-06-17-overhead-myth>
- Charity Navigator, "Overhead Myth" campaign resources. <https://www.charitynavigator.org/>
- Charity Commission for England and Wales, guidance on charity reporting (SORP). <https://www.gov.uk/government/organizations/charity-commission>
