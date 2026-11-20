# Displacement an Attribution

Displacement happens whan a programme's apparent benefit is gotten by takin activity or benefit awa frae somewhaur else, raither nor creatin somethin new — your win is somebody else's loss. Attribution is the related question o hoo muckle o an observed ootcome your intervention can genuinely claim credit for, whan ither actors an factors contributit an aw. Baith are staundart adjustments in UK public-sector evaluation guidance, alangside deadweight an leakage, an baith are routinely skippit by impact claims that look faur stronger nor they are.

## Why it maitters

A local authority's business-grant scheme that helps 50 shops relocate intae a regeneration zone can report "50 businesses supportit, 200 jobs creatit" — but if thae businesses juist muived frae a neibourin heich street raither nor expandin, the jobs were displaced, no creatit, an the borough-wide (or region-wide) net effect cud be near zero. HM Treasury's Magenta Book an the lang-staundin Additionality Guide treat displacement as a required deduction precisely acause local success stories are common even whan they produce nae net national or regional benefit — value haes juist muived, aften tae the disadvantage o the area or actors that lost it. Structural-funds evaluation guidance (uised for former EU Regional Development Fund programmes an their domestic successors, sic as the UK Shared Prosperity Fund) formalizes this at three spatial scales: local displacement (athin a toun), regional displacement (athin a region), an national displacement (athort the UK), acause an intervention can be additional at ae scale while bein pure displacement at a wider ane — a jobs programme that draws workers frae a neibourin toun is nationally neutral even if it looks like a local success.

Attribution is the sibling problem in partnership-heavy delivery, which is nou the norm in social-sector an cross-agency public service wark. Whan three organizations jointly deliver a homelessness-prevention service, ilka organization's annual report micht independently claim credit for the same reduction in rough sleepin — summed athort reports, the claimed impact can exceed the observed real-warld chynge, whiles by several multiples. The Magenta Book's guidance on contribution analysis exists specifically acause randomized attribution tae a single actor is aften impossible in multi-agency delivery, an the honest answer is frequently "we contributit tae this ootcome" raither nor "we caused this ootcome."

## The maths

Displacement as pairt o the staundart net-impact sequence (see
[additionality an deadweight](../additionality-an-deadweight/) for the fu chain):

```
Net additional impact = Gross outcome − Deadweight − Displacement − Leakage, × Multiplier

Displacement rate = benefit/activity diverted from elsewhere
                     / total gross benefit/activity observed
```

Attribution, whaur multiple actors contribute tae ae ootcome, is typically expressit as a contribution share raither nor a precise percentage, acause it cannae usually be meisured wi the same rigour as displacement:

```
Attributable share ≈ f(strength of causal contribution, other actors' contributions,
                        external/contextual factors)

Claimed impact should never exceed:
  Σ (each partner's attributable share) ≤ 100% of the total observed outcome
```

## Wrocht example

**Regeneration grant**: a cooncil's heich-street grant scheme reports 200 new retail jobs creatit in the fundit zone. Follow-up survey research finds that 60 o thae jobs cam frae businesses relocatin frae a neibourin, unfundit heich street athin the same borough, an a further 30 cam frae national chains openin branches that wad hae opened somewhaur in the region regardless o the grant.

```
Gross jobs claimed = 200
Local displacement = 60 (moved within the borough)
Regional displacement = 30 (would have opened regionally anyway)

Net additional jobs (borough level) = 200 − 60 = 140
Net additional jobs (regional level) = 200 − 60 − 30 = 110
```

The honest headline depends on the geographic scale the funder cares aboot — a Treasury business case evaluatit at national or regional level shuid uise 110, no the borough-level 140, an certainly no the raw 200.

**Multi-agency homelessness service**: three partner organizations (a cooncil, a housin charity, an a health trust) jointly deliver a rough-sleepin reduction service. Rough sleepin in the area fell by 30 fowk ower the year. Ilka organization's individual annual report claims "we reduced rough sleeping by 30" — summed, the three reports claim 90 fowk helpit, three times the actual reduction. A contribution analysis assignin ilka partner a share (say, 40% cooncil, 35% charity, 25% health trust, based on documentit role an independent assessment) wad report 12, 10.5, an 7.5 respectively, summin correctly tae the observed 30.

## Link tae saftware ingineerin

Displacement an attribution shape hoo impact-trackin an ootcomes-reportin systems shuid be designed for multi-site or multi-partner delivery:

- Geographic an organizational scope shuid be explicit, first-class fields in onie impact dashboard — a figure reportit "for the borough" an the same figure reportit "for the region" are different nummers, an a system that conflates them will produce nummers that cannae be reconciled at portfolio level.
- Whaur multiple partners deliver jointly, an ootcomes system shuid record contribution shares (or at minimum flag joint attribution) raither nor lettin ilka partner's reportin module independently claim 100% o a shared ootcome — itherwise portfolio-level roll-ups will owerstate total impact, whiles badly.
- This connects tae [social return on investment](../social-return-on-investment/) an [grant ootcomes reportin](../grant-outcomes-reporting/): an SROI or IRIS+ calculation that ignores displacement or owerattributes shared ootcomes will produce an inflatit ratio that disnae survive audit or replication.

## Pitfaws

- **Reportin local success athoot checkin wider displacement.** A programme can look gey successful at the smaaest reportin scale while bein neutral or even negative at a wider ane; aye state the geographic scale the net figure applies tae.
- **Lettin ilka partner in a joint delivery claim fu credit.** Unless contribution shares are agreed an documentit, roll-up reportin athort partners will owerstate total impact — check that partner-level claims sum tae nae mair nor the observed total.
- **Treatin attribution as a precise percentage whan it is really a judgement.** Contribution analysis, unlike a randomized counterfactual, produces a defensible estimate, no a meisured fact; present it wi appropriate uncertainty raither nor fause precision.
- **Ignorin displacement in market-facin interventions.** Business support, employment schemes, an place-based regeneration are the classic heich-displacement categories; treat displacement checks as mandatory for thae, no optional.

## Sources

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020), including
  guidance on contribution analysis. <https://www.gov.uk/government/publications/the-magenta-book>
- HM Treasury / Department for Business, Innovation and Skills, "Additionality Guide: A Standard
  Approach to Assessing the Additional Impact of Interventions" (3rd edition).
- European Commission, "Evalsed: The Resource for the Evaluation of Socio-Economic Development" —
  guidance on local, regional, and national displacement scales.
- Mayne J. "Contribution Analysis: An Approach to Exploring Cause and Effect." ILAC Brief No. 16,
  2008.
