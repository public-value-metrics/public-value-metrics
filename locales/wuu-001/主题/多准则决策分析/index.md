# 多准则决策分析（MCDA）

MCDA 拿几个各自独立、各有权重个准则同时对各个备选方案打分、加权，得出一个排名比较，而勿需要硬拿每个准则塞进同一把货币尺子或者自然单位里。碰着真正要紧个结果勿好压缩成单单一个数字个决策，就用搿个评估方法。

## 为啥重要

《Green Book》（英国政府评估指南）明确认可 MCDA（伊个 Box 2 案例附录搭 Annex A 才直接讨论过），适用勒效益“真正勿可通约”个评估：假使拿一切通过[社会成本效益分析](../社会成本效益分析/)折成钞票，或者通过[成本效果分析](../政府个成本效益分析/)折成一个成果，只会歪曲决策，而勿是拿决策讲清爽
（<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>）。
举个例子，新监狱选址，要权衡建设成本、社区影响、交通连通、环境影响，搭员工招聘难易——搿些准则呒没共同单位，硬套一个共同单位（一般是钞票）就等于偷偷夹带一个价值判断，比方讲环境影响搭成本哪个更要紧，还要装扮成客观个算术。

MCDA 个诚实也是伊最大个软肋：权重是做评估个人（或者一个小组）定个，所以搿个方法个正当性完全看权重确定过程。《Green Book》指引明确讲，准则搭权重必须勒备选方案打分*之前*就商定并公布，就是为了防止评审人从自家中意个方案倒推出能证明伊正确个权重。

## 数学

```
For each option i and criterion j:
  Score_ij   = the option's performance against that criterion (often 0-100
               or 1-10, from evidence, expert judgement, or stakeholder scoring)
  Weight_j   = relative importance of criterion j, weights sum to 1 (or 100)

Weighted score of option i = Σ_j (Score_ij × Weight_j)

Procedure:
1. Agree the criteria set and weights BEFORE scoring any option (swing
   weighting or pairwise comparison, e.g. AHP, are common elicitation methods).
2. Score every option against every criterion on a common scale, from
   evidence where possible.
3. Compute weighted totals; rank options.
4. Sensitivity-test the weights: does the ranking survive plausible
   disagreement about how much each criterion should matter?
```

MCDA 勿像 SCBA 个净现值搿能给出站得住个绝对价值——伊只能给出一个以商定权重为前提个排名。倘使决策本来就是要权衡勿可通约个好处，搿是伊个优点；倘使本来可以货币化，却用伊来逃避更难个货币化工作，搿就是伊个缺陷。

## 实例演算

**地方政府**：一个市议会要为新个家庭生活垃圾回收中心选址，拿三个地点对四个准则打分，权重是勒实地考察之前由跨部门小组定好个：

```
Criteria (weight):        Capital cost (30%)  Transport access (25%)
                           Community impact (25%)  Environmental impact (20%)

Site scores (0-100, higher = better):
Site A: cost 80, access 60, community 40, environment 70
Site B: cost 60, access 90, community 70, environment 50
Site C: cost 90, access 50, community 80, environment 60

Weighted totals:
Site A = 80(.30) + 60(.25) + 40(.25) + 70(.20) = 24+15+10+14 = 63
Site B = 60(.30) + 90(.25) + 70(.25) + 50(.20) = 18+22.5+17.5+10 = 68
Site C = 90(.30) + 50(.25) + 80(.25) + 60(.20) = 27+12.5+20+12 = 71.5
```

地点 C 排第一。做一轮敏感性分析，拿社区影响个权重从 25% 提到 35%（从资本成本里厢拿走 10 个点），地点 C 个总分变成 71.5 − 3 + 8 = 76.5，地点 B 变成 68 − 6 + 7 = 69——地点 C 还是领先，所以搿个排名对权重上个合理分歧是稳健个，搿正是《Green Book》期望看到汇报个检验。

**慈善机构**：一家资助型基金会要勒债务咨询服务、食物银行网络搭金融素养项目当中选择资助对象，伊用 MCDA 而勿用 SROI（参见[社会投资回报率](../社会投资回报率/)），原因就是受托人真诚地有分歧：危机救济搭预防，到底哪个应该更重。MCDA 让伊拉可以商定分歧个*形状*（一个权重区间），而勿是假装一个 SROI 比率就能解决分歧。

## 搭软件工程个关联

准则真正冲突个辰光，供应商搭架构选型最适合用 MCDA——比方云托管搭本地部署个案管理系统二选一，要权衡成本、数据主权风险、无障碍、交付速度，搿些勿可能压成一个数字。工程负责人应该坚持先定权重再打分，正如《Green Book》要求个，因为看过候选名单再来做权重，总归会往房间里厢大家本来就偏爱个方案漂过去。[政府里个自建搭外购](../政府个自建搭采购/)是 MCDA 个常见应用，[公共价值计分卡](../公共价值计分卡/)则是相关个结构化打分工具，用勒决策之后而勿是决策之前。

## 容易踏个坑

- **看过备选方案再定权重。** 搿是 MCDA 顶常见个作弊办法，无意还是有意；打分之前就公布权重，并且记录是啥人定个。
- **拿加权总分当硬数字。** 71.5 对 68，除非敏感性分析证实排名稳定，勿然勿是统计意义上个差距；要汇报区间，勿要摆出虚假个精确。
- **用 MCDA 回避本来可以做个货币化。** 假使大部分准则都能可信地定价，默认用 MCDA 而勿用 [SCBA](../社会成本效益分析/)，就拿评估本来用得着个信息扔脱了。
- **让一个强势个利益相关方独自定所有权重。** 《Green Book》个好做法是向有代表性个小组征集权重，而勿是由出资个主管来定，免得评估变成重新推出搿个人本来就想要个结果。

## 资料来源

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Annex A
  (multi-criteria decision analysis) and Box 2 case studies.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Department for Communities and Local Government. "Multi-criteria analysis: a manual." 2009.
  <https://www.gov.uk/government/publications/multi-criteria-analysis-a-manual>
- Belton V, Stewart TJ. "Multiple Criteria Decision Analysis: An Integrated Approach." Kluwer,
  2002.
