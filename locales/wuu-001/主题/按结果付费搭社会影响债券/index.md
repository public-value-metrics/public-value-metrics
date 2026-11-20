# 按结果付费搭社会影响债券（PbR/SIB）

按结果付费（payment by results，PbR）是根据经过核实个成果来付钞票给服务提供方，而勿是根据做过个活动。社会影响债券（social impact bond，SIB）是一种具体个 PbR 融资结构：私人或者慈善投资者先出钞票资助服务交付，只有勒独立测量出来个成果达到商定门槛个辰光，政府委托方才偿还——还要带回报——搿样交付风险就从纳税人转到投资者身上。

## 为啥重要

全世界第一个 SIB 2010 年 9 月勒 HMP Peterborough（彼得伯勒监狱）启动：Social Finance 从 17 个投资者手里厢筹到 500 万镑，资助“One Service”，对象是短刑期囚犯（12 个月以下），目标是降低再犯；司法部搭大彩票基金（Big Lottery Fund）约定，只有再定罪事件比匹配个全国对照队列至少少 7.5%，才偿还投资者。彼得伯勒试点个最终队列记录到再定罪减少 9.7%，稳稳高过门槛，投资者拿到偿还还有回报。搿个机制要紧，是因为伊解决了一个具体个委托难题：政府想为成果而勿是投入付钞票，但是承担勿起一项可能无效个干预个财务风险，所以 SIB 结构拿搿个风险转给愿意承保个投资者。牛津大学布拉瓦特尼克政府学院（Blavatnik School of Government）个政府成果实验室（Government Outcomes Lab，GO Lab），现在维护着全世界关于 PbR 搭 SIB 表现最完整个公开证据库，追踪全球两百多只影响债券，并且发表研究，讲啥设计特征搭成功或失败相关。证据库一再回到个教训是：*选定个成果指标*，搭哪个承担达勿到个风险，几乎决定了一份 PbR 合同实际运行起来个其他一切。

## 数学

```
PbR payment = base payment (if any) + Σ (outcome achieved × unit price per outcome)

Social impact bond investor return:
  Investor outlay   = upfront capital funding service delivery
  Outcome payment   = commissioner pays only if outcome ≥ threshold, scaled by
                       how far above threshold performance lands
  Investor return   = outcome payments received − investor outlay
                       (a rate of return, often capped, reflecting risk taken)

Key design parameters that determine the whole contract's behaviour:
  Outcome metric        — must be an outcome, not an output (see outcomes-vs-outputs)
  Comparison/counterfactual — usually a matched cohort (see counterfactual-analysis)
  Payment threshold      — minimum improvement before any payment triggers
  Payment curve           — linear, stepped, or capped above the threshold
  Attribution/deadweight discount — see additionality-and-deadweight
```

## 实例演算

**彼得伯勒 One Service**（示意数字，取自已发表个评估）：

```
Investor capital raised:         £5,000,000
Cohort:                          ~3,000 short-sentence male prisoners over two cohorts
Threshold:                       ≥7.5% reduction in reconviction events vs matched
                                  national comparison group, or no payment
Cohort 1 result:                 8.4% reduction — below the contractual bar for that
                                  cohort alone under the original rules
Combined/final cohort result:    9.7% reduction — above threshold
Outcome payment:                 government (Ministry of Justice / Big Lottery Fund)
                                  pays per percentage point above threshold, funding
                                  investor repayment plus a return
```

**地方政府 PbR 合同（示例）**：一项家庭干预服务个委托价格是每个转介家庭 £4,000（活动付款），外加每个结案 12 个月后再无儿童保护转介个家庭 £6,000（成果付款）。转介 200 个家庭，结案 150 个，96 个勒 12 个月辰光依然呒没再转介：

```
Activity payment  = 200 × £4,000 = £800,000
Outcome payment   = 96 × £6,000  = £576,000
Total contract cost = £1,376,000 for 96 confirmed sustained outcomes
Cost per confirmed outcome ≈ £14,333 (see cost-per-outcome)
```

## 搭软件工程个关联

按结果付费首先是一个激励对齐问题，其次才是数据问题，而数据系统是搿个对齐守得住还是破脱个地方。独立、防篡改个成果核实是整个游戏个关键：一桩模棱两可个个案怎样编码，委托方搭提供方个激励是对立个，所以记录成果个系统要有审计轨迹，要搭独立核实方（往往是搭提供方勿同个机构，有辰光是拿警方或者福利记录来匹配个官方统计机构）签数据共享协议，要对成果定义做勿可篡改个版本管理——搿就是[公共部门 KPI](../公共部门个关键绩效指标/)里“重新定义指标”陷阱勒 PbR 里厢个翻版。归因计算要靠[反事实分析](../反事实分析/)里厢个匹配队列方法，需要可重现、可审计个代码，而勿是一次性个电子表格。而且指标本身必须是真正个成果，勿是代理个活动——参见[成果搭产出](../成果搭产出/)——因为一份为产出付钞票个 PbR 合同，只是拿原本个日常经费换个名字，还多了交易成本。SIB 个社会回报倘使要前瞻性地建模，评估通常直接借用[社会投资回报率](../社会投资回报率/)个方法。

## 容易踏个坑

- **为容易被钻空子个代理成果付钞票**：“参加课程个次数”是装扮成成果个活动；要坚持用反映真正想要变化个指标（再犯、就业、住房稳定）。
- **呒没可信个反事实**：呒没匹配个对照组，改善可能只是回归均值或者更大个趋势，勿是项目个效果——参见[反事实分析](../反事实分析/)搭[增量搭无谓损失](../额外性搭死重/)。
- **低估交易成本搭评估成本**：PbR/SIB 方案个独立核实、数据关联搭合同管理，占合同价值个比例常常达到两位数——GO Lab 个证据库记录搿个是方案中止个反复出现个原因。
- **挑肥拣瘦或者“搁置”**：按成果拿钞票个提供方，有直接个激励优先服务本来就大概率成功个客户，把最难个个案放勒后头——要设计分档付款或者个案组合调整来对付搿个问题。

## 资料来源

- Government Outcomes Lab, University of Oxford, Blavatnik School of Government.
  <https://golab.bsg.ox.ac.uk/>
- Social Finance, "Peterborough Social Impact Bond" evaluation summaries.
  <https://golab.bsg.ox.ac.uk/case-studies/peterborough-social-impact-bond/>
- Ministry of Justice, "Peterborough Social Impact Bond HMP Doncaster: Final Reconviction Results
  for the Peterborough Social Impact Bond."
