# Unit Cost Databases: Library of Ready-Made Money Values for Social Outcomes

Unit cost database na library of financial proxies wey dem don research well and wey get evidence for social outcomes — di value of to move from unemployment go employment, of less loneliness, of stable tenancy — wey let practitioner monetize outcome without to commission bespoke valuation research every time. Dem dey exist so dat small charity wey dey write funding bid fit apply di same rigour as consultancy wey get plenty resources, by to reuse proxy wey another person don already derive and publish.

## Wetin make am matter

HACT UK Social Value Bank, wey dem develop with economist Daniel Fujiwara using wellbeing valuation methods, and Global Value Exchange, wey be open, crowdsourced database of financial proxies, na di two wey UK third and public sectors dey use pass. Both dey exist because di valuation work wey dey underneath — [wellbeing valuation](../wellbeing-valuation-how-to-price-policy-effect-for-people-life-satisfaction/) and [stated preference valuation](../stated-preference-valuation-to-ask-people-wetin-dem-go-pay-for-something/) — expensive, hard methodologically, and slow to run from scratch for every project. Shared, published proxy library dey change wetin for be research exercise of many months into lookup, and na exactly why dem matter for both [social return on investment](../social-return-on-investment-how-to-show-social-value-against-money-wey-dem-spend/) calculations and [Social Value Act](../social-value-act-di-law-wey-make-public-buyers-think-about-community-benefit/) bid evaluations: without dem, only organizations wey big enough to commission their own studies go fit afford rigorous monetization.

## Di maths

Unit cost database no dey compute anything by itself; e dey supply one input to calculation wey dem do for another place:

```
Financial proxy value = market price, OR shadow price, OR wellbeing valuation,
                         OR stated-preference value
                         for a defined unit of outcome change
                         (e.g. "per person moving from unemployment to employment, per year")

Applied value = number of outcomes achieved × unit proxy value
```

See [shadow pricing](../shadow-pricing-how-to-put-price-on-things-wey-market-no-dey-price/) for how dem dey construct proxy when no market price dey, and [social return on investment](../social-return-on-investment-how-to-show-social-value-against-money-wey-dem-spend/) for how di applied value dey then feed into ratio after deadweight and attribution adjustments.

## Example wey dem work out

**Charity (befriending service SROI)**: unit cost database entry for "reduction in loneliness" give illustrative proxy of £1,100 per person per year. If you apply am to 80 beneficiaries: 80 × £1,100 = £88,000 gross value. If di same database also get proxy for "improved mental wellbeing" wey draw from wellbeing survey item wey overlap, to stack both proxies for di same 80 people go double count part of di same underlying change — di database dey supply di number, but to avoid dis overlap na di analyst responsibility.

**Local authority (job club SROI)**: dem apply unit cost database entry for "moving from unemployment into sustained employment" to 45 participants at illustrative proxy of £8,500 per person per year: 45 × £8,500 = £382,500 gross value, before di deadweight and attribution adjustments wey dem show for [social return on investment](../social-return-on-investment-how-to-show-social-value-against-money-wey-dem-spend/).

## How e connect to software engineering

Teams wey dey build reporting tools for charities or commissioners go benefit from internal "outcome catalogue" — table wey map each outcome wey product or service fit plausibly claim to one named proxy, im source database, im publication date, and version identifier — so dat different teams for one organization no go each pick values wey small small different for di same outcome. To wrap Global Value Exchange open data behind lookup service, with di source and date always dey show beside di figure, dey keep di proxy auditable instead of magic number wey dem bury inside spreadsheet. See [social return on investment](../social-return-on-investment-how-to-show-social-value-against-money-wey-dem-spend/) and [social value act](../social-value-act-di-law-wey-make-public-buyers-think-about-community-benefit/) for di two main places where dem dey consume dis proxies.

## Wahala dem wey you suppose avoid

- **To treat proxies as precise.** Most published proxies na modelled averages from wellbeing valuation studies wey get wide confidence intervals; to quote one to di pound dey overstate di precision wey di research underneath fit support.
- **To double count proxies wey overlap.** To combine proxies (e.g. "reduced loneliness" and "improved mental wellbeing") wey dem derive from survey constructs wey overlap dey value di same underlying change two times.
- **To use proxy wey no fit context without adjustment.** Proxy wey dem calibrate for one national population and year, if dem apply am for another place without inflation or context adjustment, e go quietly mis-state value.
- **To no check provenance.** Global Value Exchange open and crowdsourced, so quality of entry dey vary by contributor; check di source underneath before you cite figure for funding bid or procurement submission.

## Sources

- HACT, "UK Social Value Bank." <https://hact.org.uk/tools-and-services/uk-social-value-bank/>
- Global Value Exchange. <https://www.globalvaluexchange.org/>
- Fujiwara D., "The Social Impact of Housing Providers" (HACT, 2013) — methodological basis of the
  UK Social Value Bank.
- Social Value UK, "A Guide to Social Return on Investment," section on financial proxies.
