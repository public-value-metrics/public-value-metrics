# Flow Metrics in Government Delivery (Flow-meisures in government delivery)

Flow metrics — Little's Law, work-in-progress (WIP) limits, an flow efficiency — describe hoo quickly wark muives throu a system wi limitit capacity. A sprint board is ane sic system; a benefit-claims queue, a planning-application register, or a visa casewark backlog is exactly the same maths in a different uniform.

## Why it maitters

Government caseloads are queueing systems, an queueing systems obey queueing laws whether or no onybody meisures them. Statutory determination periods mak this explicit: unner the Town and Country Planning regime, maist minor planning applications cairry an 8-week statutory determination target an major applications 13 weeks — a cycle-time commitment biggit straucht intae law. The Home Office's asylum casewark backlog, scrutinizit again an again by the National Audit Office an the Home Affairs Select Committee, is a weel-documentit case o a public system whaur wark-in-progress grew faster nor throughput for a sustained period, drivin cycle times faur ayont onie statutory or service expectation. Flow metrics gie ingineers an casewarkin managers alike a shared, quantitative vocabulary for exactly this failure mode, raither nor leavin it as a qualitative "backlog problem".

## The maths

```
Little's Law:  WIP = Throughput × Cycle Time
           →   Cycle Time = WIP / Throughput

Flow efficiency = active (touch) time / total cycle time   (Vacanti)

WIP limit effect: for fixed throughput, halving WIP roughly halves
average cycle time (Little's Law rearranged) — the lever available
without adding headcount.
```

See [DORA metrics for public value](../dora-metrics-for-public-value/) for the equivalent maths applied tae saftware deployment pipelines raither nor casewark.

## Wrocht example

**Local authority planning department**: 400 applications open at onie time (WIP), the team resolves 50 applications/week (throughput).

```
Cycle time = WIP / Throughput = 400 / 50 = 8 weeks
```

That lands exactly at the statutory 8-week target for minor applications — wi nae slack, meanin onie variability in incomin demand or consultee response time pushes determinations ower the legal deadline.

**Flow efficiency**: o thae 8 weeks (56 calendar days), an application typically haes aboot 6 oors o actual caseworker processin time.

```
Flow efficiency = 6 hours / (56 days × 8 working hours/day)
                = 6 / 448 ≈ 1.3%
```

Vacanti's benchmark for saftware teams pits typical flow efficiency at 15–20%; government casewark, wi multiple statutory consultee handoffs an public consultation windaes, aften runs an order o magnitude laicher. The 98.7% o "wait" time is whaur the eicht weeks actually gangs — no in caseworker capacity.

**WIP-limit intervention**: cappin open applications per caseworker at 15 insteid o an unboundit 25 (haudin throughput constant) shifts WIP frae 400 tae roughly 240 athort a 16-person team:

```
New cycle time = 240 / 50 = 4.8 weeks
```

A near-halvin o cycle time frae a policy chynge, no a staffin increase — the same lever DORA-style delivery teams pull whan they cap sprint WIP.

## Link tae saftware ingineerin

Flow metrics are the shared leid atween a delivery team's Kanban board an the casewark flair it is biggin saftware for: a caseworker's queue an a pull-request queue are baith governed by Little's Law, an baith blaw their cycle-time targets the same wey — ower muckle WIP relative tae throughput. This maitters straucht for [cost o delay in public programmes](../cost-o-delay-in-public-programmes/): cycle time × CoD is the pounds sittin in the queue at onie moment, an it maitters for [service standards an transaction metrics](../service-staundards-and-transaction-metrics/), whaur a published turnaroond target is a cycle-time commitment that anely flow metrics can diagnose whan it is missed. A casewark system's saftware shuid expose WIP an cycle time as first-class operational metrics, no bury them inside a case-management system naebody queries.

## Pitfaws

- **Addin WIP limits athoot fixin the real bottleneck**: if the constraint is an external statutory consultee's response time, cappin caseworker WIP juist muives the queue upstream raither nor shortenin it.
- **Treatin flow efficiency as a target tae gemm**: rushin the 1.3% o active time hardly muives cycle time; the leverage is near aye in the wait states, which usually means process redesign, no caseworker speed.
- **Ignorin variability**: Little's Law describes averages; a caseload wi heich demand variance needs buffer capacity, no juist a tichter WIP limit, or statutory deadlines will still be missed on the volatile tail even as the average improves.
- **Meisurin WIP inconsistently**: a case "open" in the system o record but actually stallit waitin on a third pairty is still WIP; excludin it flatters the nummers athoot chyngin citizen-facin reality.

## Sources

- Vacanti D, *Actionable Agile Metrics for Predictability: An Introduction*, Actionable Agile Press, 2015.
- Reinertsen DG, *The Principles of Product Development Flow*, Celeritas Publishing, 2009.
- Ministry of Housing, Communities and Local Government, planning application statutory timescales. <https://www.gov.uk/guidance/making-an-application>
- National Audit Office, reports on Home Office asylum casework and accommodation. <https://www.nao.org.uk/>
