# Displacement and Attribution: How to Know Who Take Wetin and Who Fit Claim Credit

Displacement dey happen wen programme benefit wey you see na because dem carry activity or benefit comot from another place, no be say dem create something new — your win na another person loss. Attribution na di related question of how much of outcome wey you observe your intervention fit really claim credit for, as other actors and factors contribute too. Both na standard adjustments for UK public-sector evaluation guidance, together with deadweight and leakage, and both dey commonly skipped by impact claims wey look far stronger than dem be.

## Wetin make am matter

Local authority business-grant scheme wey help 50 shops relocate enter regeneration zone fit report "50 businesses supported, 200 jobs created" — but if those businesses just move from neighbouring high street instead of to expand, dem displace di jobs, dem no create am, and di net effect for di whole borough (or region) fit near zero. HM Treasury Magenta Book and di long-standing Additionality Guide treat displacement as required deduction exactly because local success stories dey plenty even wen dem no produce net national or regional benefit — value just move, often to di disadvantage of di area or actors wey lose am. Structural-funds evaluation guidance (wey dem use for former EU Regional Development Fund programmes and dia domestic successors, like di UK Shared Prosperity Fund) formalise dis for three spatial scales: local displacement (inside one town), regional displacement (inside one region), and national displacement (across di UK), because intervention fit be additional for one scale and still be pure displacement for wider one — jobs programme wey draw workers from neighbouring town no change anything nationally even if e look like local success.

Attribution na di sibling problem for partnership-heavy delivery, wey don become normal for social-sector and cross-agency public service work. Wen three organizations jointly deliver homelessness-prevention service, each organization annual report fit independently claim credit for di same reduction for rough sleeping — if you add dem across reports, di impact wey dem claim fit pass di real-world change wey dem observe, sometimes by several multiples. Magenta Book guidance on contribution analysis dey exist specially because randomized attribution to one single actor often no possible for multi-agency delivery, and di honest answer na often "we contribute to dis outcome" instead of "we cause dis outcome."

## Di maths

Displacement as part of di standard net-impact sequence (see
[additionality and deadweight](../additionality-and-deadweight-wetin-programme-really-cause/) for di full chain):

```
Net additional impact = Gross outcome − Deadweight − Displacement − Leakage, × Multiplier

Displacement rate = benefit/activity wey dem divert from elsewhere
                     / total gross benefit/activity wey dem observe
```

Attribution, wey multiple actors contribute to one outcome, dem usually express am as contribution share instead of precise percentage, because dem no fit usually measure am with di same rigour as displacement:

```
Attributable share ≈ f(strength of causal contribution, other actors' contributions,
                        external/contextual factors)

Claimed impact must never pass:
  Σ (each partner's attributable share) ≤ 100% of di total observed outcome
```

## Example wey dem work out

**Regeneration grant**: council high-street grant scheme report say dem create 200 new retail jobs for di funded zone. Follow-up survey research find say 60 of those jobs come from businesses wey relocate from neighbouring high street wey no get funding inside di same borough, and another 30 come from national chains wey open branches wey go don open somewhere for di region anyway, even without di grant.

```
Gross jobs claimed = 200
Local displacement = 60 (dem move inside di borough)
Regional displacement = 30 (dem for don open for region anyway)

Net additional jobs (borough level) = 200 − 60 = 140
Net additional jobs (regional level) = 200 − 60 − 30 = 110
```

Di honest headline depend on di geographic scale wey di funder care about — Treasury business case wey dem evaluate for national or regional level suppose use 110, no be di borough-level 140, and e certainly no suppose use di raw 200.

**Multi-agency homelessness service**: three partner organizations (one council, one housing charity, and one health trust) jointly deliver rough-sleeping reduction service. Rough sleeping for di area fall by 30 people for di year. Each organization individual annual report claim "we reduced rough sleeping by 30" — if you add dem, di three reports claim say dem help 90 people, three times di real reduction. Contribution analysis wey give each partner one share (say, 40% council, 35% charity, 25% health trust, based on documented role and independent assessment) go report 12, 10.5, and 7.5 respectively, wey add up correct to di 30 wey dem observe.

## How e connect to software engineering

Displacement and attribution dey shape how dem suppose design impact-tracking and outcomes-reporting systems for multi-site or multi-partner delivery:

- Geographic and organizational scope suppose be explicit, first-class fields for any impact dashboard — figure wey dem report "for the borough" and di same figure wey dem report "for the region" na different numbers, and system wey mix dem together go produce numbers wey no fit reconcile for portfolio level.
- Wen multiple partners deliver jointly, outcomes system suppose record contribution shares (or at minimum flag joint attribution) instead of to allow each partner reporting module independently claim 100% of shared outcome — otherwise portfolio-level roll-ups go overstate total impact, sometimes badly.
- Dis connect to [social return on investment](../social-return-on-investment-how-to-show-social-value-against-money-wey-dem-spend/) and [grant outcomes reporting](../grant-outcomes-reporting-how-grantees-dey-report-standard-outcomes-to-funders/): SROI or IRIS+ calculation wey ignore displacement or over-attribute shared outcomes go produce inflated ratio wey no go survive audit or replication.

## Wahala dem wey you suppose avoid

- **To report local success without to check wider displacement.** Programme fit look very successful for di smallest reporting scale while e neutral or even negative for wider one; always state di geographic scale wey di net figure apply to.
- **To allow every partner for joint delivery claim full credit.** Unless dem agree and document contribution shares, roll-up reporting across partners go overstate total impact — check say partner-level claims add up to no more than di observed total.
- **To treat attribution as precise percentage wen e really na judgement.** Contribution analysis, unlike randomized counterfactual, produce defensible estimate, no be measured fact; present am with correct uncertainty instead of false precision.
- **To ignore displacement for market-facing interventions.** Business support, employment schemes, and place-based regeneration na di classic high-displacement categories; treat displacement checks as mandatory for dem, no be optional.

## Sources

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020), including
  guidance on contribution analysis. <https://www.gov.uk/government/publications/the-magenta-book>
- HM Treasury / Department for Business, Innovation and Skills, "Additionality Guide: A Standard
  Approach to Assessing the Additional Impact of Interventions" (3rd edition).
- European Commission, "Evalsed: The Resource for the Evaluation of Socio-Economic Development" —
  guidance on local, regional, and national displacement scales.
- Mayne J. "Contribution Analysis: An Approach to Exploring Cause and Effect." ILAC Brief No. 16,
  2008.
