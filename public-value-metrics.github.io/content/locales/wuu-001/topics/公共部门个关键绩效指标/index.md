# 公共部门个关键绩效指标（KPI）

关键绩效指标（KPI）是一个选定、被跟踪个度量，用来代表一项公共服务有勿有做好伊个工作。勒政府里厢，KPI 个选择从来勿是中立个：因为 KPI 同预算、排行榜搭职业前途挂钩，选定一个 KPI 个动作，会塑造伊下游所有人个行为，往往比创设搿项服务个政策影响更大。

## 为啥重要

Charles Goodhart 1975 年对货币政策个观察——后来被 Marilyn Strathern 推广成“一个度量一旦变成目标，伊就勿再是好度量”——是公共部门绩效管理里厢顶要紧个一块警示牌。一个用来*描述*系统个 KPI，只要资源、薪酬或者政治生存同伊挂钩，就开始*扭曲*搿个系统。经典个例子是 NHS 救护车响应时间：八分钟个 Category A 响应目标变成硬指标之后，有些信托被发现，会拿救护车“堆”勒响应计时钟刚好之外个地方，或者拿呼叫重新分类，勿改变病人个结果就达到数字。英国国家审计署（NAO）关于选择搭使用绩效指标个指引——散见勒伊个物有所值报告，搭“Performance Measurement by Regulators”、“Choosing the Right FABRIC”框架（Fit for purpose、Appropriate、Balanced、Robust、Integrated、Cost-effective）里厢——正是因为各部门一直拣容易汇报个指标，而勿是难以被钻空子个指标。一个软件工程师，只要伊交付了部长或者司长要拿来被评判个仪表盘，勿管有意无意，就是勒设计一个公共机构个激励结构。

## 数学

KPI 设计是个框架型个主题，但是对候选 KPI 个*评估*是一份可以重复个检查清单，勿是公式：

```
For each candidate KPI, score against:
  Fit for purpose  — does it measure the outcome, or a proxy several steps removed?
  Appropriate      — does it belong to the people who can actually influence it?
  Balanced         — is it paired with a counter-metric that catches gaming?
  Robust           — can it survive audit, or is it self-reported and unverifiable?
  Integrated       — does it fit the wider set, or push against another KPI?
  Cost-effective   — does collecting it cost more than the decision it informs?

Leading vs lagging split:
  Leading indicator  → predicts future outcome, but often gameable (e.g. calls answered <60s)
  Lagging indicator  → confirms the outcome happened, but arrives too late to steer (e.g. annual
                        satisfaction survey)
  A defensible KPI set pairs at least one of each per objective.
```

## 实例演算

**救护车信托**：一家信托汇报 Category A（危及生命）响应时间 KPI：“75% 个呼叫勒 8 分钟内得到响应”。有一个季度，进来 6,000 个 Category A 呼叫；4,500 个勒 8 分钟内达成，得到 75.0%——表面上达标。

```
Headline KPI = 4,500 / 6,000 × 100 = 75.0%  (meets the 75% threshold)
```

但是一次古德哈特式审计加了一个对冲指标：最慢个 10% 呼叫个平均响应时间。

```
Slowest decile mean response = 34 minutes (up from 19 minutes two years earlier)
```

信托达到了目标，而尾部——分诊并勿完美个情况下，最可能真正危及生命个呼叫——变得糟糕得多，因为救护组被调去优先处理靠近 8 分钟悬崖边个呼叫，而勿是按临床紧急程度。单个 KPI 讲了一个假故事；配对个 KPI 讲出了真故事。

## 搭软件工程个关联

为政府做绩效仪表盘个工程师，实际上是勒设计机构个激励 API。实践上个含义：*分母*要像分子一样严格埋点（一个只报告光秃秃百分比个 KPI，招来分母造假——数字服务里厢同样个陷阱参见[单笔交易成本](../每笔交易成本/)）；拿对冲指标建进同一块仪表盘，而勿是放勒一份呒没人看个单独报告里，让造假勒决策个辰光看得见；KPI 定义要做版本管理，因为悄悄重新定义（改变啥算一个“呼叫”、一个“个案”、一次“完成”）实际上等于勿声勿响地改目标。[公共价值计分卡](../公共价值计分卡/)是防止单个 KPI 被孤立解读个一种结构化办法，[基于成果个问责](../基于成果个问责/)则是选择单个团队勿能单方面扭曲个人口层面 KPI 个学问。

## 容易踏个坑

- **拣容易收集个指标，勿拣有意义个指标**：呼叫接听辰光很容易记录；搿通电话有勿有解决市民个问题却勿容易——但是只有后者才是成果。勿要默认用系统本来就会输出个东西。
- **呒没对冲指标**：任何同钞票或者声誉挂钩个 KPI，勒边缘上总归会被钻空子；发布之前，配一个能抓住可能造假路径个配对指标。
- **重新定义指标，呒没变更日志**：拿“收到个呼叫”换成“接听个呼叫”来美化趋势，一旦被发现，时间序列个可信度就毁脱了——数字旁边一定要公布一份定义变更日志。
- **拿活动当结果**：数完成了多少次检查是产出；数有多少场所被带到合规，才更接近成果（参见[成果搭产出](../成果搭产出/)）。

## 资料来源

- National Audit Office, "Choosing the Right FABRIC: A Framework for Performance Information."
  <https://www.nao.org.uk/>
- Marilyn Strathern, "'Improving Ratings': Audit in the British University System," *Social
  Anthropology*, 1997 (formulation of Goodhart's law as commonly cited).
- National Audit Office, investigations into NHS ambulance service performance reporting.
  <https://www.nao.org.uk/>
