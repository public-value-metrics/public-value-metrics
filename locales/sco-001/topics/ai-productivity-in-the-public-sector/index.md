# AI Productivity in the Public Sector

Metrics for whit AI coding assistance actually does tae engineerin ootput — suggestion acceptance rates, controlled-study speedups, PR throughput, an code retention — cairry a genuinely contradictory evidence base even afore public-sector constraints are addit: data classification limits whilk pairts o a legacy estate an AI tool may touch ava, procurement cycles mean the tool unner evaluation is aften a model generation ahint current capability, an security clearance requirements govern wha may uise it on whit.

## Why it maitters

The twa maist-citit controlled studies pynt in opposite directions. Peng et al.'s 2023 GitHub Copilot RCT fund developers completit a greenfield HTTP-server task 55.8% fester wi Copilot (1h11m vs 2h41m, n=95). METR's 2025 RCT fund experienced open-source developers wirkin on *their ain mature repositories* were 19% slawer wi early-2025 AI tools, while believin they were aboot 20% fester. Baith studies are sound; the contradiction is the finding — greenfield-task efficacy disnae transfer tae mature-codebase effectiveness, an muckle o government engineerin is mature-codebase wark on estates that are aulder an mair idiosyncratic than the median commercial repository. The Central Digital an Data Office's Generative AI Framework for HMG (2024, <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>) sets oot principles for responsible adoption precisely acause this evidence base cannae juist be importit frae vendor demonstrations; departments are expectit tae evaluate tools against their ain data-haundlin an security requirements afore rollout.

## The maths

```
Acceptance rate  = accepted suggestions / shown suggestions
Retention rate   = AI code survivin tae merge / accepted AI code
Speedup          = (t_control − t_AI) / t_control  (frae controlled comparison ANELY)
Throughput delta = Δ merged PRs/dev/week

Public-sector coverage factor:
  eligible codebase share = LOC on systems whaur the classification
    (OFFICIAL, OFFICIAL-SENSITIVE, SECRET) permits the tool ava

Value model = devs × eligible-coverage × time saved × loaded rate × utilization
             — ilka term needs local meisurement, an the coverage factor
             haes nae private-sector equivalent
```

## Wrocht example

A government department pilots an AI coding assistant athort 300 developers, but anely systems classified OFFICIAL are eligible for tool uise — 70% o the estate by headcount allocation, wi the remainin 30% (heicher-classification systems) excludit athegither.

```
Eligible developers = 300 × 0.70 = 210

Pilot result: self-reportit time saved 40 min/day;
              meisured task-level saving 12 min/day (0.2h)
              — the METR perception gap, reproducit in the wild

Value the MEISURED nummer:
  210 × 0.2h × 220 days × £55/hr loaded × 0.6 utilization
  = 210 × 44 hours × £55 × 0.6
  = 9,240 hours × £55 × 0.6 ≈ £304,920/year capacity

Cost: 210 licensed seats × £22/month × 12 ≈ £55,440/year

Net capacity ratio ≈ 304,920 / 55,440 ≈ 5.5:1
```

Fundable at roughly a third o the self-reportit benefit, an anely efter the classification ceilin is applied — licensin aw 300 developers on the strength o the self-reportit figure wad hae owerstatit baith the eligible population an the true saving.

## Link tae saftware ingineerin

The disciplines that cairry athort straucht awa: run **pragmatic trials** on the department's ain codebase an real tickets, no vendor demonstration tasks, acause the METR result is specifically a mature-codebase finding; treat **acceptance rate as a proxy, no an ootcome** — high acceptance wi laich retention is the software equivalent o owerdiagnosis; pair ilka throughput claim wi a **stability check**, syne DORA's 2025 report fund AI adoption lifts throughput but degrades chynge stability, which is exactly the net-benefit analysis [DORA metrics for public value](../dora-metrics-for-public-value/) is biggit tae run; an be honest that AI tooling can widen, no narrae, the gap on [technical debt](../technical-debt-as-erosion-o-public-value/)-heavy legacy estates, acause trainin data unner-represents the COBOL, 4GL, an bespoke mainframe code common in government, sae suggestion quality on exactly the systems that maist need help is aften the weakest. This sits alangside the braider [AI in government value](../ai-in-government-value/) question an shuid be governed by the same [public-sector cybersecurity value](../value-o-cybersecurity-in-the-public-sector/) constraints that limit whaur onie third-pairty tool may see code or data ava.

## Pitfaws

- **Vendor-study transplantation**: applyin greenfield RCT speedups tae legacy-integration wark is precisely the mistak the METR study exposed.
- **Self-report as meisurement**: a 20-percentage-pynt perception-versus-meisured gap is the lairgest kent bias in this literature, an it inflates business cases that rely on developer surveys alane.
- **Ignorin the classification ceilin**: licensin an value models biggit on total headcount raither than the eligible, classification-cleared subset systematically owerstate baith cost-effectiveness an achievable coverage.
- **Procurement-cycle lag**: framework-based tool procurement can mean a pilot evaluates a model generation that is 12–18 months ahint whit's publicly available by the time o fu rollout, makkin the original business case's speedup assumption stale afore go-live.

## Sources

- Peng S, et al., "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot", 2023. <https://arxiv.org/abs/2302.06590>
- METR, "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity", 2025. <https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/>
- DORA, 2025 State of AI-assisted Software Development report. <https://dora.dev/dora-report-2025/>
- Central Digital and Data Office, Generative AI Framework for HMG, 2024. <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>
