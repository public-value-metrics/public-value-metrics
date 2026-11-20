# GDP 个替代指标

GDP 个替代指标，是为了捕捉国内生产总值（Gross Domestic Product）结构上忽略个东西而设计个指标：无偿照护劳动、环境耗竭、收入分配，以及增长是否真正改善了生活。最有名个是真实进步指标（Genuine Progress Indicator，GPI）搭不丹个国民幸福总值（Gross National Happiness，GNH）指数；最有影响力地论证应该认真对待伊拉个，是 2009 年个 Stiglitz-Sen-Fitoussi 委员会。对做政府仪表盘或者 KPI 系统个工程师来讲，"啥个数字算进步"是一个设计决策，对啥个会得到资助有真实个后果。

## 为啥重要

Simon Kuznets 勒 1930 年代搭建了美国个国民账户，伊勒 1934 年警告国会：国家个福利"几乎勿可能从国民收入个测量里推断出来"——搿个告诫，搿个数字几乎马上就抛勒脑后了。GDP 拿一次漏油个清理算成增长，拿父母无偿带小囡算成零；伊勿区分是建设持久福祉个开支，还是只不过抵消已经造成个伤害个开支。Stiglitz-Sen-Fitoussi 委员会由法国总统 Nicolas Sarkozy 召集，由 Joseph Stiglitz、Amartya Sen 搭 Jean-Paul Fitoussi 担任主席，伊勒 2009 年报告讲，统计系统应该拿重点"从测量经济产出，转到测量人民个福祉"，而且可持续性应该同当下福祉分开追踪，勿要折进一个数字里。GDP 替代指标就是拿搿个建议落到实处。GPI 由智库 Redefining Progress 勒 1990 年代开发，建立勒 William Nordhaus 搭 James Tobin 1972 年个经济福利测度（Measure of Economic Welfare）基础上，伊搭 GDP 一样从个人消费出发，然后加上 GDP 遗漏个非市场收益（家务劳动、志愿服务），同时减去 GDP 错误地算成正数个防御性成本搭耗竭成本（犯罪、污染、通勤、资源消耗）。不丹个 GNH 指数由不丹 GNH 中心（GNH Centre Bhutan，<https://www.gnhcentre.bt/>）管理，走得更远，已经取代增长成为该国宪法上明确个目标：伊拿 9 个领域里个 33 项指标——心理福祉、健康、教育、辰光使用、文化多样性、治理、社区活力、生态多样性搭生活水平——汇总成一个基于充足性个分数，直接用来筛选政府个政策提案。

## 数学

```
GPI = personal consumption expenditure
      + non-market benefits (household labour, volunteering, higher education)
      − defensive and social costs (crime, pollution, commuting, family breakdown)
      − depletion of natural and social capital (resource drawdown, farmland loss)

GNH sufficiency score, per domain:
  a person is "sufficient" in a domain once they clear its threshold on each indicator
  Happiness Index = (% of population sufficient in ≥ 6 of 9 domains)
                    + (weighted average shortfall of the "not-yet-happy" minority)
```

## 实例演算

**区域个 GPI**：个人消费是 $50bn。加上估算个家务搭志愿者劳动价值 $12bn（按替代成本个工资率——参见 [志愿者辰光价值](../志愿者辰光个价值/)）。减去估算个每年通勤拥堵成本（$3bn）、犯罪（$4bn）搭长期资源耗竭（$6bn）：

```
GPI = 50 + 12 − 3 − 4 − 6 = 49 ($bn)
```

假使搿一年 GDP 从 $50bn 增长到 $55bn（+10%），但是防御性成本搭耗竭成本个增长比消费快，GPI 可能一边 GDP 勒涨一边勒跌——搿就是 GPI 研究者讲高收入经济体自大概 1970 年代以来个"阈值假说"：增长一直勒爬升，GPI 却趋于平台期。

**市民个 GNH**：一位受访者勒 9 个领域里个 7 个（健康、教育、生活水平、社区活力、文化多样性、生态多样性、辰光使用）达到充足阈值，但是心理福祉搭治理两项勿达标。因为 7 ≥ 6，勒人头计数里伊算"幸福"；指数另外追踪伊两项缺口个深度，搿样勉强过关搭宽裕过关就勿会混为一谈。

## 搭软件工程个关联

- 一个只按吞吐量或者开支建模个 KPI 仪表盘（GDP 模式），会系统性地漏掉产生搿些吞吐量个过程中造成个伤害——拿支持工单量当成"参与度"，而勿是"用户个困扰"，就是软件交付版本个"拿漏油算成增长"。
- GPI 式个核算，对任何一套 [公共部门 KPI](../公共部门个关键绩效指标/) 来讲，是一个有用个审计模式：对每一项标题产出指标，问问伊悄悄带来了啥防御性成本（返工、事故响应、倦怠），然后拿伊扣掉，就像 GPI 从消费里扣掉防御性开支一样。
- GNH 个领域充足性办法——每个维度过关/勿过关，然后汇总——结构上搭 [多准则决策分析](../多准则决策分析/) 是同一种技术，凡是单一标量分数会遮掉一个关键失败维度个地方，侪值得重用。

## 容易踏个坑

- **拿 GPI 当成精确个国民账户**——搭 GDP 勿同，GPI 呒没统一个标准方法；勿同个研究对通勤成本、志愿者辰光或者资源耗竭个权重勿一样，所以跨研究个 GPI 比较远远没有跨国个 GDP 比较可靠。
- **拿 GNH 整套搬进勿同个政策文化**——伊个领域权重搭充足阈值是通过不丹个咨询定出来个；只抄数字、呒没底下个咨询过程，会得出一个空心个、呒没人信任个指标。
- **以为 GDP 替代指标可以取代成本收益评估**——搿些是诊断性个、全经济范围个指标，勿是针对单个项目个决策工具；单个项目请用 [社会成本收益分析](../社会成本效益分析/)。

## 资料来源

- Stiglitz JE, Sen A, Fitoussi J-P. "Report by the Commission on the Measurement of Economic
  Performance and Social Progress." (2009) <https://ec.europa.eu/eurostat/documents/118025/118123/Fitoussi+Commission+report>
- GNH Centre Bhutan. <https://www.gnhcentre.bt/>
- Redefining Progress. "The Genuine Progress Indicator: A Tool for Sustainable Development."
- Nordhaus WD, Tobin J. "Is Growth Obsolete?" (1972), NBER.
