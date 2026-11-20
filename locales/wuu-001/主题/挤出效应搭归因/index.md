# 挤出效应搭归因

挤出效应（displacement）是指：一个项目看上去个好处，是靠拿别个地方个活动或者好处搬过来个，而勿是真正创造了新个东西——侬赢，就是别人输。归因（attribution）是搭伊相关个问题：别个主体搭别个因素也有份个辰光，侬个干预对已经观察到个成果，到底能够算多少功劳。两样侪是英国公共部门评估指南里个标准调整项，搭无谓效应（deadweight）、渗漏（leakage）并列，而且两样经常被一些看上去强得勿得了、实际上勿是搿能回事个影响力宣称跳过去。

## 为啥重要

一个地方政府个商业补助计划，帮 50 家店搬进再生区，可以报告"支持 50 家企业，创造 200 个就业岗位"——但是假使搿些企业只是从隔壁个商业街搬过来，而勿是扩大经营，搿些岗位就是被挤出来个，勿是新创造个，整个市区（或者整个区域）个净效应可能接近零。英国财政部个《Magenta Book》搭由来已久个《额外性指南》（Additionality Guide）侪拿挤出效应当成必须扣除个一项，原因就是：就算勿产生任何全国或者区域层面个净收益，地方上个成功故事照样交关多——价值只是搬了个地方，经常还拿失去价值个地区或者主体弄得更吃亏。结构基金（structural funds）评估指南（用勒以前欧盟区域发展基金个项目，以及伊拉个国内接班项目，比如英国共享繁荣基金 UK Shared Prosperity Fund）拿搿桩事体正式分成三个空间层级：本地挤出（一个镇里厢）、区域挤出（一个区域里厢）搭全国挤出（全英国范围），因为一项干预勒一个层级上可能有额外性，勒更大个层级上却完全是挤出——一个就业项目假使是从隔壁镇上拿工人吸引过来，就算看上去是本地个成功，对全国来讲也是中性个。

归因是伙伴合作交付里个姐妹问题，而伙伴合作交付现在已经是社会部门搭跨机构公共服务工作里个常态。三个组织联合提供一项预防无家可归个服务，每个组织个年度报告可能各自宣称：街头露宿个减少是伊拉个功劳——拿各份报告加起来，宣称个影响可能超过现实世界里观察到个变化，有辰光要超过好几倍。《Magenta Book》里关于贡献分析（contribution analysis）个指引，就是因为勒多机构交付里，要拿功劳随机地归给某一个单一主体经常勿可能，老实个回答往往是"阿拉对搿个成果有贡献"，而勿是"阿拉造成了搿个成果"。

## 数学

挤出效应是标准净影响计算链条里个一环（完整链条参见 [额外性搭无谓效应](../额外性搭死重/)）：

```
Net additional impact = Gross outcome − Deadweight − Displacement − Leakage, × Multiplier

Displacement rate = benefit/activity diverted from elsewhere
                     / total gross benefit/activity observed
```

归因，也就是多个主体对同一个成果有贡献个情况，通常用贡献份额来表达，而勿是一个精确个百分比，因为伊往往勿能够像挤出效应搿能样用同样个严谨度来测量：

```
Attributable share ≈ f(strength of causal contribution, other actors' contributions,
                        external/contextual factors)

Claimed impact should never exceed:
  Σ (each partner's attributable share) ≤ 100% of the total observed outcome
```

## 实例演算

**再生补助**：一个市政厅个商业街补助计划报告，受资助个区域创造了 200 个新个零售岗位。后续个调查研究发现，搿些岗位里有 60 个来自从同一个市区里厢、没拿到补助个隔壁商业街搬过来个企业，还有 30 个来自全国连锁店开个分店——就算呒没搿笔补助，伊拉也会勒搿个区域里开张。

```
Gross jobs claimed = 200
Local displacement = 60 (moved within the borough)
Regional displacement = 30 (would have opened regionally anyway)

Net additional jobs (borough level) = 200 − 60 = 140
Net additional jobs (regional level) = 200 − 60 − 30 = 110
```

老实个头条数字要看出资方关心个地理层级——一份勒全国或者区域层面评估个财政部商业案例应该用 110，而勿是市区层面个 140，更加勿好用原始个 200。

**多机构无家可归服务**：三个合作组织（一个市政厅、一个住房慈善机构搭一个卫生信托）联合提供一项减少街头露宿个服务。当地一年里个街头露宿者减少了 30 个人。每个组织各自个年度报告侪宣称"阿拉减少了 30 个街头露宿者"——加起来，三份报告宣称帮助了 90 个人，是实际减少数个三倍。做一次贡献分析，根据有文件记录个角色搭独立评估，给每个伙伴分一个份额（比方说市政厅 40%、慈善机构 35%、卫生信托 25%），就会分别报告 12、10.5 搭 7.5，加起来正好等于观察到个 30。

## 搭软件工程个关联

挤出效应搭归因，决定了多站点或者多伙伴交付个影响力追踪搭成果报告系统应该哪能设计：

- 地理范围搭组织范围应该是任何影响力仪表盘里明确个一等字段——一个数字"对市区"报告搭同一个数字"对区域"报告，是两个勿同个数字，一套拿两样混为一谈个系统，会得出勒投资组合层面无法对账个数字。
- 多个伙伴联合交付个辰光，成果系统应该记录贡献份额（至少要标记联合归因），而勿是让每个伙伴个报告模块各自对同一个共享成果宣称 100%——否则投资组合层面个汇总会高估总影响，有辰光高估得交关厉害。
- 搿搭 [社会投资回报](../社会投资回报率/) 搭 [资助成果报告](../资助成果报告/) 有关系：一个忽略挤出效应、或者对共享成果过度归因个 SROI 或者 IRIS+ 计算，会得出虚高个比率，经勿起审计搭复现。

## 容易踏个坑

- **只报本地个成功，勿检查更大范围个挤出。** 一个项目勒最小个报告层级上看上去非常成功，勒更大个层级上可能是中性、甚至是负面——一定要讲清爽净数字适用于啥个地理层级。
- **让联合交付里个每个伙伴侪宣称拿足功劳。** 除非贡献份额已经商定并且有文件记录，勿然伙伴之间个汇总报告会高估总影响——要检查各伙伴个宣称加起来勿超过观察到个总数。
- **拿归因当成一个精确个百分比，其实伊是一个判断。** 贡献分析搭随机化个反事实（counterfactual）勿一样，伊得出个是站得住脚个估计，勿是测量出来个事实；表达个辰光要带上合适个不确定性，勿要假装精确。
- **忽略市场导向型干预里个挤出效应。** 企业扶持、就业计划搭基于地域个再生项目，是典型个高挤出类别；对搿些项目，挤出检查应该是必做个，勿是可选个。

## 资料来源

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020), including
  guidance on contribution analysis. <https://www.gov.uk/government/publications/the-magenta-book>
- HM Treasury / Department for Business, Innovation and Skills, "Additionality Guide: A Standard
  Approach to Assessing the Additional Impact of Interventions" (3rd edition).
- European Commission, "Evalsed: The Resource for the Evaluation of Socio-Economic Development" —
  guidance on local, regional, and national displacement scales.
- Mayne J. "Contribution Analysis: An Approach to Exploring Cause and Effect." ILAC Brief No. 16,
  2008.
