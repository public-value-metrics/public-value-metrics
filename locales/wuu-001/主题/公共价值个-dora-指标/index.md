# 公共价值个 DORA 指标

DORA（DevOps Research and Assessment，DevOps 研究与评估）指标——部署频率、变更前置时间、变更失败率搭服务恢复时间，再加上可靠性作为第五项——是软件行业里验证得最充分个交付绩效基准。翻译成公共部门问责个语言，每一项侪是一个直接个替代指标，反映公共价值多快、多稳妥地送到市民手里。

## 为啥重要

DORA 十年个研究，每年以《Accelerate State of DevOps Report》（《加速：DevOps 现状报告》）个形式发布（方法论来自 Forsgren、Humble 搭 Kim，现在由 Google Cloud 运营），拿团队分成精英、高、中、低四档表现者。精英团队随需部署，从提交到上线勿到一日，大概 5% 个变更会失败，一个钟头里厢就恢复；低表现者一个月或者更久部署一趟，要花几个月，大概 40% 个变更失败，恢复要几个礼拜。勒政府里，搿些勿是工程师自说自话个面子指标：政府数字服务（Government Digital Service，GDS）个服务标准要求团队"频繁迭代改进"，并且能够快速响应用户需求，一个部门假使勿能够安全、频繁地部署，从结构上就达勿到搿个标准，伊个用户研究做得再好也呒没用。内阁办公室（Cabinet Office）自家个数字效率工作发现，拿市民从一次失败或者缓慢个数字交易推到电话或者纸质渠道，成本交关高——GDS 2012 年个《数字效率报告》（Digital Efficiency Report）估算，有些数字交易成本低到只要 20 便士，而电话或者当面接触个成本最高可达 £8.62——所以面向公众个服务里发生一次变更失败，勿光是耗掉工程个辰光，还会拿真金白银个镑数推到联络中心个预算上（参见 [渠道转移节省](../渠道转移节省/)）。

## 数学

```
Deployment frequency  = production deployments / time
Lead time for changes = t(deploy) − t(commit), median
Change failure rate   = failed changes / total changes × 100
Time to restore (MTTR) = t(restored) − t(failure), median
Reliability            = SLO attainment (availability, latency, correctness)
```

翻译成公共价值个说法：

```
Lead time      → weeks in the pipeline × CoD, see cost-of-delay-in-public-programmes
Failure rate   → citizen-facing incident rate: CFR × cost per redirected
                 contact-centre call (or per failed statutory transaction)
Recovery time  → service outage harm: MTTR × (claims/applications blocked
                 per hour) × downstream cost or wellbeing loss per unit
Reliability    → benefit discount: a service at 99% availability delivers
                 ≈ 0.99 of its modelled benefit — the delivery analogue
                 of take-up or compliance shortfall
```

## 实例演算

一个地方政府个福利申领门户团队，交付工程投入前后个对比：

```
                    Before      After
Deploys             monthly     weekly
Lead time           8 weeks     5 days
CFR                 30%         10%
MTTR                3 days      4 hours
```

团队一年大概上线 25 项改进，平均价值 £8,000/礼拜（[延误成本](../公共项目个延迟成本/)）。拿前置时间缩短大概 7.3 个礼拜，每项改进个收益流就提前了：25 × 7.3 × 8,000 ≈ **£1,460,000/年** 个价值被更早交付。讲到失败率：25 × (0.30 − 0.10) = 一年少 5 次失败变更；一个公共门户上每次失败变更，通常估计会拿 2,000 个市民转到电话渠道，每个 £8.62 对 20 便士，净成本大概 £8.42 × 2,000 ≈ 每次事故 £16,840，所以避免 5 次事故节省 ≈ **£84,200/年**。交付工程投入就搭其他任何公共价值案例一样，用同一种货币来估值。

## 实例演算续：可靠性

假使门户个可用性是 97%，而勿是目标个 99.5%，并且每一个百分点个停机被建模成 2% 个申领因为放弃而流失，那么搿个服务实际只交付了伊建模个每年 £2M 收益个大概 0.975——也就是每年 £50,000 个收益折损，光看正常运行时间个仪表盘是永远看勿出来个。

## 搭软件工程个关联

DORA 指标其实就是公共服务个运营指标换了件衣裳：前置时间对应 [服务标准搭交易指标](../服务标准搭交易指标/)；变更失败率对应返工率搭投诉率；MTTR 对应一项法定服务对申领人勿可用个辰光有多长。改进个技术可以双向借鉴，因为两边侪是受问责约束个排队系统——底层个排队数学参见 [政府交付里个流动指标](../政府交付里个流动指标/)。还要注意 DORA 2025 年个发现：采用 AI 同更高个吞吐量相关，但是稳定性*更差*——搿是一项既有功效又有副作用个干预，恰恰就是搿一组里 [AI 生产力](../公共部门个-ai-生产力/) 搿个主题要做个净收益分析。

## 容易踏个坑

- **指标造假**：用空操作发布来抬高部署次数，或者拿热修复排除勒变更失败计数之外。对事件个定义要像法定服务标准定义一次"成功交易"那样精确。
- **跨部门排行榜**：DORA 个分档比较个是交付实践，勿是风险特征各勿相同个服务；一个税款缴纳系统评为"高"，可能就是正确个姿态，因为鉴于保证要求，"精英"反而是鲁莽个。
- **只优化一个指标**：只要速度勿管变更失败率，就是典型个吞吐量与稳定性个取舍——四个指标要一道报告，勿要合成一个分数。

## 资料来源

- DORA research and the annual *Accelerate State of DevOps Report*. <https://dora.dev/>
- Forsgren N, Humble J, Kim G, *Accelerate: The Science of Lean Software and DevOps*, IT Revolution Press, 2018.
- Cabinet Office, Digital Efficiency Report, 2012.
- DORA, 2025 State of AI-assisted Software Development report. <https://dora.dev/dora-report-2025/>
