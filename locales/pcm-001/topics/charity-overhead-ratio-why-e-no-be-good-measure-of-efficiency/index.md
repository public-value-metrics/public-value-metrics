# Charity Overhead Ratio: Why E No Be Good Measure of Efficiency

Di charity overhead ratio na administrative and fundraising expenditure wey dem express as percentage of total spend. Na di single number wey people ask for pass for charitable giving — donors, watchdogs, and even some funders dey use am as proxy for efficiency — and na also one of di efficiency metrics wey dem don discredit pass for di sector, as di organizations wey make am popular publicly disown am for 2013.

## Wetin make am matter

On 17 June 2013, GuideStar, di BBB Wise Giving Alliance, and Charity Navigator — di three largest US nonprofit rating and information bodies, wey dia own past ratings help make overhead ratio become shorthand for charity quality — publish joint open letter to American donors, "The Overhead Myth," wey state clearly say overhead ratio na poor measure of charity performance and urge donors to look at transparency, governance, and results instead. Na direct reversal by di same institutions wey build donor culture around di ratio for one decade.

Di underlying problem na structural, no be only about optics: dem fit achieve low overhead ratio by to underinvest for exactly di things wey make charity effective — decent case management system, trained staff, monitoring and evaluation — because dem often book those things as "admin" instead of "programme" cost. Charity wey starve im back office to report 5% overhead fit less capable to deliver outcomes pass one wey spend 20% on properly resourced operation. For England and Wales, di Charity Commission guidance to trustees dey steer away from single overhead percentage as efficiency test, and instead ask trustees to report on wetin di charity achieve against im objectives — see di SORP reporting requirements wey dem discuss for [cost per beneficiary](../cost-per-beneficiary-wetin-e-cost-to-reach-each-person/).

## Di maths

```
Overhead ratio = (Administrative cost + Fundraising cost) / Total expenditure

Common variants:
  Programme ratio        = Programme (direct charitable) spend / Total expenditure
                          = 1 − overhead ratio
  Fundraising efficiency  = Fundraising cost / Funds raised
```

None of dis formulas get any information about outcomes wey dem achieve. Charity fit minimize every one of dem and still fail every beneficiary; see [cost per outcome](../cost-per-outcome-wetin-e-cost-to-really-change-person-life/) for di metric wey really engage with whether di money work.

## Example wey dem work out

Two charities, same total spend:

- **Charity A**: £1,000,000 total spend, £80,000 admin + fundraising → overhead ratio 8%. E no get monitoring and evaluation function, e get one overworked finance officer, and no case management system; staff turnover high and dem no collect outcome data.
- **Charity B**: £1,000,000 total spend, £220,000 admin + fundraising → overhead ratio 22%. E fund small evaluation team, case management system wey capture outcome follow-up, and proper safeguarding training.

Donor wey screen purely on overhead ratio go pick A and reject B — di opposite of wetin [cost per outcome](../cost-per-outcome-wetin-e-cost-to-really-change-person-life/) evidence go likely show, because B na di only one of di two wey dey position to demonstrate, or improve, im actual results.

## How e connect to software engineering

Finance and grant-reporting software for di sector often hard-code di overhead/programme split as categorical field on every cost line, because na wetin regulators and some funders still require for statutory returns. Engineers wey dey build dis systems suppose treat dat requirement as compliance obligation, no be design signal say overhead ratio na di metric wey worth to show prominently for dashboard; pair am, anywhere dem show am, with outcome-based metric so viewer no go fit read overhead ratio alone. See [donor return on investment](../donor-return-on-investment-wetin-donor-pound-really-buy-for-outcomes/) for di metric wey suppose sit beside am, and [value for money](../value-for-money-di-test-whether-public-spending-dey-worth-am/) for di public-sector equivalent argument against single-ratio efficiency proxies.

## Wahala dem wey you suppose avoid

- **To use overhead ratio as screening cut-off.** To reject any charity wey pass arbitrary threshold (e.g. "no more than 15% overhead") dey systematically punish properly resourced, well-evaluated organizations and e dey reward underinvestment.
- **To put direct-delivery cost for wrong category as overhead**, or di other way round — accounting conventions for wetin count as "programme" versus "admin" dey vary enough between charities, so ratios often no even comparable as dem be.
- **To assume say low overhead mean high impact.** At best, di two no get correlation; see di core claim of di 2013 Overhead Myth letter.
- **To ignore say some legitimate strategies require higher near-term overhead.** Capacity-building or organisational-development phase dey intentionally raise admin spend to improve later delivery.

## Sources

- GuideStar, BBB Wise Giving Alliance, and Charity Navigator, "The Overhead Myth" open letter, 17 June 2013. <https://learn.guidestar.org/news/news-releases/2013/2013-06-17-overhead-myth>
- Charity Navigator, "Overhead Myth" campaign resources. <https://www.charitynavigator.org/>
- Charity Commission for England and Wales, guidance on charity reporting (SORP). <https://www.gov.uk/government/organizations/charity-commission>
