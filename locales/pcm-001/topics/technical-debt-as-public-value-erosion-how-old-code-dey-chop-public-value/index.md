# Technical Debt as Public Value Erosion: How Old Code Dey Chop Public Value

Technical debt na Ward Cunningham 1992 metaphor for di future cost wey dey hide inside quick coding decisions wey dem make for past: one **principal** (di remediation work wey dem owe) and one **interest** (di ongoing drag wey e dey put on delivery). For legacy government IT estate, dem dey pay dat interest directly from public value — slower delivery of statutory change, higher failure rates for services wey face citizens, and smaller pool of people wey fit safely touch di system at all.

## Wetin make am matter

Legacy mainframe and COBOL-era systems across UK government departments — HMRC and DWP dey among di ones wey dem cite most — carry risk wey well documented and dey escalate, wey di National Audit Office don flag many times, including for im report *Digital Transformation in Government* (<https://www.nao.org.uk/>): ageing platforms wey expensive to change, wey dey harder to secure, and wey depend on specialist workforce wey dey retire faster pass di speed wey dem dey replace dem. Different from private-sector backlog, dis debt dey sit directly between citizens and their statutory entitlements — benefit calculation engine wey dem no fit change safely na policy-delivery constraint, no be just engineering inconvenience. Di 2013 restart of di Universal Credit IT programme, when di National Audit Office find say di original build no go deliver value for money and substantial part of di software asset must dem write off, na canonical example of technical debt wey nobody price wey catch up with live public programme wey ministers dey see.

## Di maths

```
SQALE principal = Σ over violations (remediation time) × developer cost rate
Technical debt ratio (TDR) = remediation cost / redevelopment cost × 100
                    (SonarQube grades: A ≤5%, B ≤10%, C ≤20%, D ≤50%)

Interest (the number that justifies paydown):
  interest/year = Δ delivery velocity × value per unit velocity
                + Δ citizen-facing incident rate × cost per incident
                + specialist-skills premium × affected headcount
Paydown case = PV(interest avoided over horizon) − remediation cost
               (discounted at the Green Book social discount rate, see
               social-discount-rate.md)
```

Principal dey state di liability; interest na wetin dey make di investment case to public accounts committee.

## Example wey dem work out

250,000-line claims-processing engine wey dem write for legacy 4GL. If you use di CAST Appmarq benchmark of roughly $3.61 of technical-debt principal per line of code (≈£2.85 at typical conversion):

```
Principal ≈ 250,000 × £2.85 ≈ £712,500
TDR ≈ 16% (grade C)
```

Interest wey dem measure: di department dey keep three specialist contractors wey dey collect 40% day-rate premium over standard senior engineer rates because in-house skills don leave — extra £180,000/year for six-person team. Di system also dey cause four major processing outages/year, and each one dey suspend decisions for about 5,000 claimants and redirect dem go contact centre for roughly £25/call:

```
Interest ≈ £180,000 (skills premium)
         + 4 × 5,000 × £25 = £500,000 (redirected-contact cost)
         ≈ £680,000/year
```

Targeted remediation of di worst-performing modules cost £1,200,000 and dem model say e go cut interest by 70%:

```
Interest reduction = 0.70 × 680,000 = £476,000/year
Payback ≈ 1,200,000 / 476,000 ≈ 2.5 years
```

Di targeting matter: to remediate code wey dem rarely touch no buy anything, because interest dey concentrate where change frequency and debt density both dey peak.

## How e connect to software engineering

Di public-value framing wey dey upgrade technical-debt case pass "di code don old": express di legacy estate as inventory of where delivery capacity wey dem lose dey concentrate, and connect am clearly to [total cost of ownership](../total-cost-of-ownership-in-government-it-di-full-cost-of-system-from-buy-till-e-die/), since interest na operating cost wey belong for di TCO line whether finance ever ask for am or no. Systems wey get plenty debt also carry [cybersecurity](../cybersecurity-value-for-public-sector-how-to-put-price-on-risk-reduction/) exposure wey no proportionate, because patching cadence and debt density dey correlate — legacy system wey dem no fit patch na technical debt wey dem dey pay interest for with incident risk instead of pounds. And every trade-off between remediation and feature na [cost-of-delay](../cost-of-delay-for-public-programmes-wetin-delay-dey-cost/) decision itself: to pay down debt dey delay di next statutory change, and dat one get im own CoD wey dem must weigh against di interest wey dem save.

## Wahala dem wey you suppose avoid

- **To report principal only**: big, frightening remediation estimate without interest figure no dey justify anything to person wey dey approve spending.
- **To take debt figures from tools literally**: SQALE-style scanners dey count rule violations; dem dey miss di expensive kind of debt — architectural decisions and undocumented legacy business rules — while dem dey flag small small things.
- **"Di rewrite go avoid all of am"**: replacement programmes must pass di same discipline as any other business case — counterfactual cost, probability of success, and discounting — no be exemption from am, as di 2013 Universal Credit restart show.
- **Debt-zero utopianism**: di optimal debt level no be zero; debt na leverage wey buy earlier delivery. Di live question na always di interest rate, no be whether debt dey exist at all.

## Sources

- Cunningham W, "The WyCash Portfolio Management System", OOPSLA experience report, 1992.
- CAST, technical debt estimation (Appmarq benchmark). <https://www.castsoftware.com/glossary/technical-debt-estimation>
- National Audit Office, *Digital Transformation in Government* and reports on Universal Credit. <https://www.nao.org.uk/>
