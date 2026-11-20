# Technical debt as erosion o public value

Technical debt is Ward Cunningham's 1992 metaphor for the implied future cost o expedient past coding decisions: a **principal** (the remediation wark awed) an an **interest** (the ongauin drag it exerts on delivery). In a legacy government IT estate, that interest is peyed directly oot o public value — slawer statutory-chynge delivery, heicher failure rates on citizen-facin services, an a shrinkin pool o fowk wha can safely touch the system ava.

## Why it maitters

Legacy mainframe an COBOL-era systems athort UK government depairtments — HMRC an DWP amang the maist cited — cairry a weel-documentit an escalatin risk that the National Audit Office haes flaggit repeatedly, includin in its report *Digital Transformation in Government* (<https://www.nao.org.uk/>): ageing platforms that are expensive tae chynge, increasingly haurd tae secure, an dependent on a specialist workforce that is retirin faster nor it is bein replaced. Unlike a private-sector backlog, this debt sits directly atween citizens an their statutory entitlements — a benefit calculation engine that cannae be safely chynged is a policy-delivery constraint, nae juist an engineerin inconvenience. The 2013 restart o the Universal Credit IT programme, whan the National Audit Office foond the original build wadnae deliver value for siller an a substantial pairt o the saftware asset haed tae be written aff, is a canonical example o unpricit technical debt catchin up wi a leevin, ministerially visible public programme.

## The maths

```
SQALE principal = Σ ower violations (remediation time) × developer cost rate
Technical debt ratio (TDR) = remediation cost / redevelopment cost × 100
                    (SonarQube grades: A ≤5%, B ≤10%, C ≤20%, D ≤50%)

Interest (the nummer that justifies paydoun):
  interest/year = Δ delivery velocity × value per unit velocity
                + Δ citizen-facin incident rate × cost per incident
                + specialist-skills premium × affectit headcoont
Paydoun case = PV(interest avoidit ower horizon) − remediation cost
               (discoontit at the Green Book social discoont rate, see
               social-discount-rate.md)
```

Principal states the liability; interest is whit mak the investment case tae a public accoonts committee.

## Wrocht example

A 250,000-line claims-processin engine written in a legacy 4GL. Uisin the CAST Appmarq benchmark o roughly $3.61 o technical-debt principal per line o code (≈£2.85 at typical conversion):

```
Principal ≈ 250,000 × £2.85 ≈ £712,500
TDR ≈ 16% (grade C)
```

Meisurit interest: the depairtment retains three specialist contractors at a 40% day-rate premium ower staundard senior engineer rates acause in-hoose skills hae attritit — an extra £180,000/year on a sax-person team. The system an aw causes fower major processin ootages/year, ilka yin suspendin decisions for aboot 5,000 claimants an redirectin them tae the contact centre at roughly £25/call:

```
Interest ≈ £180,000 (skills premium)
         + 4 × 5,000 × £25 = £500,000 (redirectit-contact cost)
         ≈ £680,000/year
```

Targetit remediation o the warst-performin modules costs £1,200,000 an is modellit tae cut interest bi 70%:

```
Interest reduction = 0.70 × 680,000 = £476,000/year
Payback ≈ 1,200,000 / 476,000 ≈ 2.5 years
```

The targetin maitters: remediatin seldom-touched code buys naethin, acause interest concentrates whaur chynge frequency an debt density baith pynt heicht.

## Link tae saftware ingineerin

The public-value framin that upgrades a technical-debt case ayont "the code is auld": express the legacy estate as an inventory o whaur lost delivery capacity is concentratit, an connect it explicitly tae [total cost o ownership](../total-cost-o-ownership-in-government-it/), sin interest is an operatin cost that belangs in the TCO line whether or no finance haes ever askit for it. Debt-laden systems an aw cairry disproportionate [cybersecurity](../value-o-cybersecurity-in-the-public-sector/) exposure, acause patchin cadence an debt density are correlatit — an unpatchable legacy system is technical debt whase interest is peyed in incident risk raither nor punds. An ilka remediation-versus-feature trade-aff is itsel a [cost-o-delay](../cost-o-delay-in-public-programmes/) decision: peyin doun debt delays the neist statutory chynge, that haes its ain CoD that maun be weighed agin the interest savit.

## Pitfaws

- **Principal-only reportin**: a muckle, fear-gettin remediation estimate wi nae interest figure justifies naethin tae a spendin approver.
- **Tool-generatit debt figures taen literally**: SQALE-style scanners coont rule violations; they miss the expensive kind o debt — architectural decisions an undocumentit legacy business rules — while flaggin trivia.
- **"The rewrite avoids aw o it"**: replacement programmes maun clear the same discipline as ony ither business case — counterfactual cost, probability o success, an discoontin — nae an exemption frae it, as the 2013 Universal Credit restart shawed.
- **Debt-zero utopianism**: the optimal debt level isnae zero; debt is leverage that bocht earlier delivery. The leevin question is aye the interest rate, nae whether debt exists ava.

## Sources

- Cunningham W, "The WyCash Portfolio Management System", OOPSLA experience report, 1992.
- CAST, technical debt estimation (Appmarq benchmark). <https://www.castsoftware.com/glossary/technical-debt-estimation>
- National Audit Office, *Digital Transformation in Government* and reports on Universal Credit. <https://www.nao.org.uk/>
