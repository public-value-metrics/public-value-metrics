# AI Productivity for Public Sector Engineering Teams

Metrics for wetin AI coding assistance really do to engineering output — suggestion acceptance rates, controlled-study speedups, PR throughput, and code retention — get evidence base wey contradict itself well well, even before dem add public-sector constraints: data classification limit which parts of legacy estate AI tool fit touch at all, procurement cycles mean say di tool wey dem dey evaluate dey often one model generation behind current capability, and security clearance requirements dey control who fit use am for wetin.

## Wetin make am matter

Di two controlled studies wey people cite pass dey point opposite directions. Peng et al. 2023 GitHub Copilot RCT find say developers finish greenfield HTTP-server task 55.8% faster with Copilot (1h11m vs 2h41m, n=95). METR 2025 RCT find say experienced open-source developers wey dey work on *dia own mature repositories* slow by 19% with early-2025 AI tools, while dem believe say dem dey about 20% faster. Both studies sound; di contradiction na di finding — how tool dey work for greenfield task no transfer to how e dey work for mature codebase, and plenty government engineering na mature-codebase work on estates wey old pass and dey more idiosyncratic pass di median commercial repository. Di Central Digital and Data Office Generative AI Framework for HMG (2024, <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>) set out principles for responsible adoption exactly because dem no fit just import dis evidence base from vendor demonstrations; dem expect departments to evaluate tools against dia own data-handling and security requirements before rollout.

## Di maths

```
Acceptance rate  = accepted suggestions / shown suggestions
Retention rate   = AI code wey survive reach merge / accepted AI code
Speedup          = (t_control − t_AI) / t_control  (from controlled comparison ONLY)
Throughput delta = Δ merged PRs/dev/week

Public-sector coverage factor:
  eligible codebase share = LOC on systems where di classification
    (OFFICIAL, OFFICIAL-SENSITIVE, SECRET) allow di tool at all

Value model = devs × eligible-coverage × time saved × loaded rate × utilization
             — every term need local measurement, and di coverage factor
             no get private-sector equivalent
```

## Example wey dem work out

One government department pilot AI coding assistant across 300 developers, but only systems wey dem classify as OFFICIAL fit use di tool — 70% of di estate by headcount allocation, and di remaining 30% (higher-classification systems) dem exclude am completely.

```
Eligible developers = 300 × 0.70 = 210

Pilot result: self-reported time saved 40 min/day;
              measured task-level saving 12 min/day (0.2h)
              — di METR perception gap, reproduced for real life

Value di MEASURED number:
  210 × 0.2h × 220 days × £55/hr loaded × 0.6 utilization
  = 210 × 44 hours × £55 × 0.6
  = 9,240 hours × £55 × 0.6 ≈ £304,920/year capacity

Cost: 210 licensed seats × £22/month × 12 ≈ £55,440/year

Net capacity ratio ≈ 304,920 / 55,440 ≈ 5.5:1
```

Dem fit fund am at around one-third of di self-reported benefit, and only after dem apply di classification ceiling — if dem license all 300 developers because of di self-reported figure, dem for overstate both di eligible population and di true saving.

## How e connect to software engineering

Di disciplines wey carry across directly: run **pragmatic trials** on di department own codebase and real tickets, no be vendor demonstration tasks, because di METR result na mature-codebase finding specifically; treat **acceptance rate as proxy, no be outcome** — high acceptance with low retention na di software version of overdiagnosis; pair every throughput claim with **stability check**, since DORA 2025 report find say AI adoption lift throughput but e dey spoil change stability, and na exactly dis net-benefit analysis [DORA metrics for public value](../dora-metrics-for-public-value-how-fast-and-how-safe-public-value-dey-reach-citizen/) dem build to run; and be honest say AI tooling fit widen di gap, no be narrow am, for legacy estates wey get plenty [technical debt](../technical-debt-as-public-value-erosion-how-old-code-dey-chop-public-value/), because training data no get enough COBOL, 4GL, and bespoke mainframe code wey common for government, so suggestion quality on exactly di systems wey need help pass dey often weakest. Dis one stand beside di broader [AI in government value](../di-value-of-ai-for-government/) question and dem suppose govern am with di same [public-sector cybersecurity value](../cybersecurity-value-for-public-sector-how-to-put-price-on-risk-reduction/) constraints wey limit where any third-party tool fit see code or data at all.

## Wahala dem wey you suppose avoid

- **To transplant vendor study**: to apply greenfield RCT speedups to legacy-integration work na exactly di error wey di METR study expose.
- **Self-report as measurement**: 20-percentage-point gap between perception and measured result na di biggest bias wey dem know for dis literature, and e dey inflate business cases wey dey rely on developer surveys alone.
- **To ignore di classification ceiling**: licensing and value models wey dem build on total headcount instead of di eligible, classification-cleared subset dey always overstate both cost-effectiveness and di coverage wey dem fit achieve.
- **Procurement-cycle lag**: framework-based tool procurement fit mean say pilot evaluate model generation wey dey 12–18 months behind wetin dey publicly available by di time of full rollout, so di speedup assumption for di original business case don stale before go-live.

## Sources

- Peng S, et al., "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot", 2023. <https://arxiv.org/abs/2302.06590>
- METR, "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity", 2025. <https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/>
- DORA, 2025 State of AI-assisted Software Development report. <https://dora.dev/dora-report-2025/>
- Central Digital and Data Office, Generative AI Framework for HMG, 2024. <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>
