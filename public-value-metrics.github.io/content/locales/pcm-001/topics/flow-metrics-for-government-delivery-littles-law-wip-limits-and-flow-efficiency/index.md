# Flow Metrics for Government Delivery: Little's Law, WIP Limits and Flow Efficiency

Flow metrics — Little's Law, work-in-progress (WIP) limits, and flow efficiency — dey describe how quick work dey move through system wey get limited capacity. Sprint board na one such system; benefit-claims queue, planning-application register, or visa casework backlog na exactly di same mathematics wey wear different uniform.

## Wetin make am matter

Government caseloads na queueing systems, and queueing systems dey obey queueing laws whether anybody measure dem or no. Statutory determination periods make dis explicit: under di Town and Country Planning regime, most minor planning applications get 8-week statutory determination target and major applications 13 weeks — cycle-time commitment wey dem bake direct enter law. Di Home Office asylum casework backlog, wey di National Audit Office and di Home Affairs Select Committee don scrutinize many times, na well-documented case of public system wey work-in-progress grow faster than throughput for sustained period, wey push cycle times far pass any statutory or service expectation. Flow metrics give engineers and caseworking managers shared, quantitative vocabulary for exactly dis failure mode, instead of to leave am as qualitative "backlog problem".

## Di maths

```
Little's Law:  WIP = Throughput × Cycle Time
           →   Cycle Time = WIP / Throughput

Flow efficiency = active (touch) time / total cycle time   (Vacanti)

WIP limit effect: for fixed throughput, to cut WIP half go roughly cut
average cycle time half (Little's Law rearranged) — di lever wey dey available
without to add headcount.
```

See [DORA metrics for public value](../dora-metrics-for-public-value-how-fast-and-how-safe-public-value-dey-reach-citizen/) for di equivalent maths wey dem apply to software deployment pipelines instead of casework.

## Example wey dem work out

**Local authority planning department**: 400 applications dey open at any time (WIP), di team dey resolve 50 applications/week (throughput).

```
Cycle time = WIP / Throughput = 400 / 50 = 8 weeks
```

Dat one land exactly for di statutory 8-week target for minor applications — with no slack, wey mean say any variability for incoming demand or consultee response time go push determinations pass di legal deadline.

**Flow efficiency**: for dose 8 weeks (56 calendar days), application typically get around 6 hours of actual caseworker processing time.

```
Flow efficiency = 6 hours / (56 days × 8 working hours/day)
                = 6 / 448 ≈ 1.3%
```

Vacanti benchmark for software teams put typical flow efficiency at 15–20%; government casework, wey get multiple statutory consultee handoffs and public consultation windows, often dey run one order of magnitude lower. Di 98.7% of "wait" time na where di eight weeks really dey go — no be for caseworker capacity.

**WIP-limit intervention**: to cap open applications per caseworker at 15 instead of unbounded 25 (as dem hold throughput constant) dey shift WIP from 400 go roughly 240 across 16-person team:

```
New cycle time = 240 / 50 = 4.8 weeks
```

Cycle time near-halve from policy change, no be staffing increase — di same lever wey DORA-style delivery teams dey pull wen dem cap sprint WIP.

## How e connect to software engineering

Flow metrics na di shared language between delivery team Kanban board and di casework floor wey dem dey build software for: caseworker queue and pull-request queue both dey governed by Little's Law, and both dey blow dia cycle-time targets di same way — too much WIP relative to throughput. Dis matter direct for [cost of delay in public programmes](../cost-of-delay-for-public-programmes-wetin-delay-dey-cost/): cycle time × CoD na di pounds wey dey sit for di queue at any moment, and e matter for [service standards and transaction metrics](../service-standards-and-transaction-metrics-how-to-measure-public-digital-services/), wey published turnaround target na cycle-time commitment wey only flow metrics fit diagnose wen dem miss am. Casework system software suppose expose WIP and cycle time as first-class operational metrics, no bury dem inside case-management system wey nobody dey query.

## Wahala dem wey you suppose avoid

- **To add WIP limits without to fix di real bottleneck**: if di constraint na external statutory consultee response time, to cap caseworker WIP just dey move di queue upstream instead of to shorten am.
- **To treat flow efficiency as target to game**: to rush di 1.3% of active time hardly move cycle time; di leverage almost always dey for di wait states, wey usually mean process redesign, no be caseworker speed.
- **To ignore variability**: Little's Law dey describe averages; caseload wey get high demand variance need buffer capacity, no be only tighter WIP limit, or statutory deadlines go still dey miss for di volatile tail even as di average improve.
- **To measure WIP inconsistently**: case wey "open" for system of record but e really stall dey wait for third party still na WIP; to exclude am dey flatter di numbers without to change wetin citizen dey see.

## Sources

- Vacanti D, *Actionable Agile Metrics for Predictability: An Introduction*, Actionable Agile Press, 2015.
- Reinertsen DG, *The Principles of Product Development Flow*, Celeritas Publishing, 2009.
- Ministry of Housing, Communities and Local Government, planning application statutory timescales. <https://www.gov.uk/guidance/making-an-application>
- National Audit Office, reports on Home Office asylum casework and accommodation. <https://www.nao.org.uk/>
