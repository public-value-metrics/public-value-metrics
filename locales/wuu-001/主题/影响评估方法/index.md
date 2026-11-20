# 影响评估方法

影响评估方法（impact evaluation methods）是用来估算一项政策或者项目到底造成了啥、而勿是本来就会发生啥个统计搭实验设计——随机对照试验（RCT）、双重差分（difference-in-differences）、倾向得分匹配（propensity score matching）搭断点回归设计（regression discontinuity design），是英国公共政策里最常用个四种。伊拉存在，是因为大部分政府干预勿能勒实验室里检验：侬勿能够像随机决定啥个病人用药那样，随机决定啥个镇上有一条新个公交线路，所以搿些方法借用同样个因果逻辑，但是勿一定要求随机分配。

## 为啥重要

英国财政部《Magenta Book》个附件 A（准实验方法）是英国政府勒搿几种设计之间做选择个权威指引，教育捐赠基金会（Education Endowment Foundation）搭地方经济增长有效措施中心（What Works Centre for Local Economic Growth）之类个机构，围绕伊拉建立了证据层级——随机化可行而且合乎伦理个辰光用 RCT，勿可行个辰光用准实验设计。方法个选择勿是技术上个事后考虑：伊决定一项评估能够回答"是勿是项目造成了搿个结果？"，还是只能回答"搿个是勿是项目开始之后发生个？"，而搿恰恰就是 [反事实分析](../反事实分析/) 要逼从业者勒委托任何评估之前先问个问题。

## 数学

```
RCT:
  Impact = mean(outcome | treatment group) − mean(outcome | control group)
  (valid because assignment to treatment is random)

Difference-in-differences (DiD):
  Impact = [outcome_after(treated) − outcome_before(treated)]
         − [outcome_after(control) − outcome_before(control)]
  (requires a "parallel trends" assumption: treated and control would have moved together
   absent the intervention)

Propensity score matching (PSM):
  1. Estimate P(treatment = 1 | covariates X) for every unit → propensity score
  2. Match treated units to untreated units with similar propensity scores
  3. Impact = mean(outcome | treated) − mean(outcome | matched control)

Regression discontinuity design (RDD):
  Impact = jump in outcome observed at the eligibility threshold,
           comparing units just above vs just below the cutoff
```

## 实例演算

**地方政府（困境家庭项目个双重差分）**：成果是学校出勤率。接受干预个地区勒项目期间出勤率从 84% 升到 89%（+5 个百分点）；一个可比较但是未受干预个地区勒同一辰光从 85% 升到 87%（+2 个百分点）。DiD 个影响估计：5 − 2 = 归因于项目个 +3 个百分点。用到受干预地区个 2,000 个学生身上，搿个结果同大概 60 个额外学生（3% × 2,000）进入更高出勤类别是一致个，搿是一个外推，报告个辰光应该带上平行趋势个保留说明，勿好当成精确个人头数。

**慈善机构（就业能力慈善机构个倾向得分匹配）**：300 个项目参与者，用年龄、之前个就业经历搭资格水平构建个倾向得分，同一个更大个行政数据集里个 300 个个体做匹配。十二个月个就业率：匹配后个受干预组 46%，匹配后个对照组 33%。PSM 个影响估计：46% − 33% = 归因于项目个 +13 个百分点，前提是呒没同时驱动参与搭成果个未观察到个混杂因素（比方动机）。

## 搭软件工程个关联

搿几种设计以后可勿可行，很大程度上取决于前期做出个数据工程决策。RDD 需要精确记录个运行变量（running variable）搭一个真正清爽个资格截断点；DiD 需要受干预搭对照地区随辰光个可比较面板数据，意思是跨系统、跨年份个一致关联；PSM 需要勒干预之前就采集好个丰富基线协变量数据，勿是事后重建。一套从一开始就搭 [变革理论](../变革理论/) 搭 [逻辑模型](../逻辑模型/) 一道设计个数据模型——采集基线协变量、日期搭符合对照组资格个记录——才能让以后严谨个影响评估成为可能，而勿是一场昂贵个事后手忙脚乱。搿些方法本身回答勿了个互补问题，参见 [影响评估搭过程评估](../影响评估搭过程评估/)。

## 容易踏个坑

- **勒勿可行或者勿合伦理个地方硬上 RCT**，或者相反，明明有一个真正个机会可以做准实验设计——一个政策截断点、一次分阶段铺开——却从来勿考虑、白白浪费掉。
- **忽视 DiD 个平行趋势假设。** 假使对照地区勒干预之前就已经同受干预地区渐行渐远，两点比较就被污染了；要检查干预前个趋势，勿能只看前后。
- **PSM 里只按观察到个协变量匹配。** 未观察到个选择，比方参与者个动机，即使观察到个协变量平衡得再好，也会使估计有偏。
- **RDD 里运行变量被操纵。** 假使人们能够影响自家个分数，让伊刚好落勒资格门槛之内，断点就勿再能隔离出因果效应。

## 资料来源

- HM Treasury, Magenta Book (2020), Annex A: Quasi-Experimental Methods. <https://www.gov.uk/government/publications/the-magenta-book>
- What Works Centre for Local Economic Growth, evidence review methodology. <https://whatworksgrowth.org/>
- Education Endowment Foundation, evaluation guidance. <https://educationendowmentfoundation.org.uk/>
