# Public value scorecard

The public value scorecard adapts Robert Kaplan and David Norton's 1992 balanced scorecard —
biggit for firms optimizin profit across financial, customer, internal-process, and
learnin-and-growth perspectives — tae organizations whase bottom line is a mission, nae a margin.
It forces a public body tae report performance across several irreducible dimensions at ance,
raither nor collapsin iverythin intae ae nummer that hides trade-offs.

## Why it maitters

Kaplan and Norton's original argument, in the Harvard Business Review, wis that a single financial
metric is a laggin indicator that tells ye naething aboot *why* performance will chynge next
quarter. In the private sector the fix wis fower linked perspectives. In government, Mark Moore's
"strategic triangle" (frae *Creating Public Value*, 1995) supplies the equivalent structure:
a service maun at the same time deliver **public value** (the mission ootcome), haud
**legitimacy and support** (political and public backin), and be **operationally feasible**
(deliverable wi the resources and capability actually available). Paul Niven's *Balanced
Scorecard: Step-by-Step for Government and Nonprofit Agencies* (2003) is the practitioner's manual
for translatin Kaplan and Norton's fower boxes intae this triangle — typically re-labellin
"financial" as "stewardship o resources," puttin "mission" at the tap insteid o "shareholder
value" at the fit, and treatin customer and stakeholder perspectives as co-equal raither nor
subordinate tae profit. The reason this maitters tae a delivery team is that a public digital service
judged only on a financial or efficiency metric (cost per transaction, say) will systematically
under-invest in the legitimacy and ootcome dimensions that the financial metric cannae see.

## The maths

The public value scorecard is a framework, nae a formula, but its structure is fixed and worth
reproducin exactly:

```
Perspective          Public-sector question                    Example indicator
--------------------------------------------------------------------------------
Mission / outcomes    Are we achieving the public value we      Population outcome measure
                       exist to create?                         (see outcomes-vs-outputs)
Stewardship of        Are we using public money efficiently     Cost per outcome, budget
  resources            and within authorized limits?             variance
Customer / user        Are users and citizens able to access    Completion rate, satisfaction
                        and benefit from the service?
Legitimacy / support    Do political principals, oversight       Trust metrics, audit findings,
                        bodies, and the public still back us?    complaints upheld
Internal process /      Do we have the capability and process   Staff turnover, cycle time,
  learning              to keep improving?                       backlog age

A defensible scorecard reports 3–5 indicators per perspective, chosen so that
no single perspective can be gamed without the damage showing up in another.
```

## Wrocht example

**Local authority adult social care department**: a scorecard for a reablement service (short-term
support tae help fowk regain independence efter a hospital stay) reports:

```
Mission:       68% of service users no longer need ongoing care after 6 weeks (target 65%)
Stewardship:   cost per completed reablement episode = £1,850 (budget assumption £2,000)
Customer:      user satisfaction 82%, average wait for service start 4.1 days
Legitimacy:    3 upheld complaints per 1,000 episodes; adult safeguarding board rates
               service "good"
Process:       staff vacancy rate 14%, average caseload 23 (safe caseload ceiling: 25)
```

Read in isolation, the mission and stewardship nummers look like a straichtforrit success story:
unner budget and abune the ootcome target. Read taegither wi the process row, the vacancy rate o
14% agin a caseload ceilin o 25 shaws the guid ootcome is bein bocht by rinnin close tae
unsafe staffin levels — a warnin the mission nummer alane wad never surface, and exactly the
failure mode a single-perspective KPI (see [public sector KPIs](../kpis-in-the-public-sector/)) invites.

## Link tae saftware ingineerin

For a team biggin an internal or public-facin dashboard, the scorecard is a direct argument
agin a single "health score" widget: big ae panel per perspective, and resist product
pressure tae synthesize them intae a traffic licht, because the synthesis step is exactly whaur the
trade-aff information gets destroyed. It an aw maps cleanly ontae product-team OKR structures: a
mission OKR wioot a paired stewardship or process OKR reproduces the single-metric failure mode
Kaplan and Norton were writin agin in 1992. See [public value](../public-value/) for Moore's
underlyin theory o whit the "mission" box sud actually contain, and
[trust-and-legitimacy-metrics](../metrics-for-trust-an-legitimacy/) for hou tae populate the
legitimacy perspective wi real, sourced indicators raither nor a proxy naebody can defend.

## Pitfaws

- **Collapsin the scorecard intae ae score**: averagin fower perspectives intae a single nummer
  reintroduces the exact problem — a bad legitimacy score masked by a guid stewardship score — that
  the scorecard exists tae prevent.
- **Copyin the private-sector "financial" perspective unchynged**: a public body's stewardship
  perspective is aboot stayin within authorized, aften ring-fenced, budgets, nae aboot maximizin
  revenue — Niven's relabellin isnae cosmetic.
- **Choosin indicators the team that awns the scorecard can unilaterally muive**: a legitimacy
  indicator sourced frae the same team it judges (self-reportit complaints handlin, for instance)
  isnae independent evidence.
- **Biggin the scorecard ance and never revisitin weights or indicators**: Kaplan and Norton
  intendit an annual strategy review; a scorecard frozen for years drifts frae the mission it wis
  biggit tae track.

## Sources

- Robert S. Kaplan and David P. Norton, "The Balanced Scorecard: Measures That Drive Performance,"
  *Harvard Business Review*, January–February 1992.
- Paul R. Niven, *Balanced Scorecard: Step-by-Step for Government and Nonprofit Agencies*, Wiley,
  2003.
- Mark H. Moore, *Creating Public Value: Strategic Management in Government*, Harvard University
  Press, 1995.
