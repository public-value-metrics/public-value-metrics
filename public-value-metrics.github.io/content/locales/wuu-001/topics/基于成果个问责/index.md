# 基于成果个问责（OBA）

基于成果个问责（Outcomes-Based Accountability），也叫基于结果个问责（RBA），是 Mark Friedman 提出个框架，用来分开公共部门汇报里厢向来混勒一道个两个问题：“人口整体过得好伐？”（人口层面问责）搭“搿个具体项目做得好伐？”（绩效层面问责）。照 Friedman 个讲法，两个混为一谈，是管理良好个项目反而被怪罪于伊拉根本呒没能力推动个人口趋势个最常见原因。

## 为啥重要

Friedman 勒《Trying Hard Is Not Good Enough》（2005）里厢提出搿个框架，伊认为大多数公共汇报要么拿决策者淹没勒哪个机构都控制勿了个人口层面统计里厢（青少年怀孕率、失业率、预期寿命），要么拿伊拉淹没勒项目层面个活动计数里厢（接待个客户、做过个转介），而搿些数字根本讲勿出有呒没人个生活变好。RBA 个贡献是一套简洁而有纪律个词汇，拿两者分开：人口结果（一整个人口个福祉状况，比如“小囡出生个辰光是健康个”）勿属于任何一个机构，要许多伙伴一道发力；绩效指标（一个具体项目服务其具体客户服务得多好）属于一个机构，只应该拿伊真正能影响个范围来评判。Friedman 个“三个绩效问题”——我们做了多少、做得多好、有人变好了伐？——如今已经嵌入美国各州搭各县个人类服务合同，并且通过搭 RBA 一脉相承个咨询机构兼工具包 Clear Impact，勒英国搭英联邦国家个地方政府委托里厢广泛使用。实际个利害勒合同上：一个住房项目勿应该因为全市个无家可归率因为伊够勿着个宏观经济原因上升而被砍经费，但是倘使伊自己个客户勿曾被安置，伊就完全应该被砍。

## 数学

```
Population accountability (the "big picture" a community, region, or nation shares):
  Result       — a condition of wellbeing (e.g. "residents are economically secure")
  Indicator(s) — a measure of that condition (e.g. unemployment rate, median household income)
  → no single programme owns the indicator; movement requires many contributors

Performance accountability (what one programme is responsible for):
  How much did we do?      — activity volume (clients served, units delivered)
  How well did we do it?   — quality/efficiency (% completing programme, cost per client)
  Is anyone better off?    — the outcome that matters (% in employment 6 months after
                              programme, before/after or against a comparison group)

A programme is judged on the third performance question, never on the population
indicator directly, unless its scale and design could plausibly move it alone.
```

## 实例演算

**市政府出资个就业支持项目**，每年 500 名参与者，由地方政府勒 RBA 式个绩效框架下签约：

```
Population indicator (context, not the programme's scorecard):
  City unemployment rate: 6.2% (up from 5.8% the prior year, driven by a factory closure
  outside the programme's control)

Performance measures (the programme's actual accountability):
  How much:   500 participants enrolled (target 480) — met
  How well:   78% completion rate; cost per completer = £340,000 / 390 completers ≈ £872
  Better off: of 390 completers, 260 in sustained employment at 6 months = 66.7%
              versus a matched comparison group's 41% (see counterfactual-analysis)
```

照人口层面问责来读，搿个项目看上去勒失败——伊当班个辰光全市失业率涨了。照 RBA 个绩效层面问责来读，项目是成功个：伊达成了人数目标，质量保持稳定，产生个就业成果比匹配个对照组高 25.7 个百分点，而人口指标是因为完全勒项目控制之外个原因（一家工厂关闭）而变动个。

## 搭软件工程个关联

RBA 直接对应一个大家熟悉个 SRE 区分：人口指标就像业务层面个北极星指标，任何一个工程团队都勿能从头到尾拥有（公司收入、市场份额），而绩效指标就像团队自家个 SLO——团队个设计决策真个能推动个东西。一块仪表盘假使两样都报告，却勿标明哪个是哪个，就恰恰招来 RBA 要防止个错误归因：值班工程师为一个依赖团队控制个指标挨骂。委托或者开发成果合同个汇报工具个辰光，要拿“做了多少 / 做得多好 / 有无变好”三联做成一等公民、可以单独筛选个字段，而勿是一个混合个单一 KPI——搿搭[公共部门 KPI](../公共部门个关键绩效指标/)里厢分开领先指标搭滞后指标是同一个纪律。RBA 也是[按结果付费搭社会影响债券](../按结果付费搭社会影响债券/)底下个问责逻辑：PbR 合同只能公平地按“有无变好”个绩效指标付费，勿能按人口指标付费，除非干预真个是伊个主导驱动因素。

## 容易踏个坑

- **拿项目搭伊控制勿了个人口指标挂钩来奖惩**：搿是 RBA 就是为了防止个那个错误；对项目附加后果之前，一定要先搞清爽项目对人口结果是主要贡献还是次要贡献。
- **拿“做了多少”当作“有无变好”来汇报**：活动计数（接待个客户）是最容易收集、信息量最少个数据；一定要坚持用真正个成果数据回答“有人变好了伐”，最好搭反事实比较（参见[反事实分析](../反事实分析/)）。
- **以为 RBA 个指标一定之后就勿变**：Friedman 个方法明确是迭代个——“数据、故事、有效做法、行动计划”个循环——而勿是一次性个计分卡设计。
- **“有无变好”呒没对照组**：前后对比、呒没反事实，会拿项目效果搭人口本来就会呈现个趋势混勒一道。

## 资料来源

- Mark Friedman, *Trying Hard Is Not Good Enough: How to Produce Measurable Improvements for
  Customers and Communities*, Trafford Publishing, 2005.
- Clear Impact, "What is Results-Based Accountability?"
  <https://clearimpact.com/results-based-accountability/>
