# 服务标准搭交易指标

GOV.UK 服务标准（Service Standard）是英国政府建设搭运营公共数字服务个 14 点检查清单，伊还配了一小套强制个定量交易指标——单笔交易成本、完成率、数字化使用率搭用户满意度——每项中央政府在线服务都必须公布。标准搭指标合起来，是本仓库里厢更宽泛个公共价值搭 KPI 框架个日常操作层面个专门化，直接瞄准软件交付团队。

## 为啥重要

服务标准由 GOV.UK 个服务手册（service manual）维护，要求对一项政府数字服务个每次阶段性评估（alpha、beta、live）都要证明——勒 14 点当中——团队了解用户需求、勒多学科团队里厢工作、频繁迭代改进，以及*评估工具、系统搭工作方式*。历史上，搿个搭一个公开个绩效平台（Performance Platform）并行，每项在线服务勒搿个平台上公开发布交易数据；平台后来已经下线，但是测量并公布搿四个核心指标个底层义务，通过服务手册“measuring success”个指引继续存在。搿个搭一般软件 KPI 仪表盘勿同个原因是，搿些指标是明确设计成一个相互关联个经济模型，而勿是四个独立个分数：数字政府整个节省个论证——政府数字服务（GDS）个《Digital Efficiency Report》发现，对可比个地方政府服务，数字交易大约比电话便宜 20 倍、比面对面便宜 50 倍左右——只有勒完成率保持高位、数字化使用率真个上升个前提下才会兑现，而勿是只勒原来昂贵个渠道旁边多加一个便宜个渠道。

## 数学

```
Cost per transaction = total service running cost / number of completed transactions
Completion rate       = transactions completed / transactions started × 100
Digital take-up       = digital-channel transactions / all-channel transactions × 100
User satisfaction     = % satisfied + very satisfied, in-service 5-point survey

Channel-shift saving = transaction volume × take-up shift × (cost per transaction on
                        the old channel − cost per transaction digitally)

Failure-demand cost = (1 − completion rate) × transactions attempted digitally ×
                        cost of the fallback channel those users then use instead
```

## 实例演算

**示意性个中央政府执照续期服务**，每年 200 万笔交易，目前 65% 走电话（£3.00/笔），35% 走数字渠道（£0.30/笔），完成率 80%。对照 14 点服务标准重新设计后，数字化使用率升到 60%，完成率升到 92%：

```
Take-up shift saving = 2,000,000 × 0.25 × (3.00 − 0.30) = £1,350,000/year

Failure-demand cost, before:
  2,000,000 × 0.35 × (1 − 0.80) × £3.00 = £420,000/year (abandoners fall back to phone)

Failure-demand cost, after:
  2,000,000 × 0.60 × (1 − 0.92) × £3.00 = £288,000/year

Net failure-demand saving = £420,000 − £288,000 = £132,000/year

Total annual saving ≈ £1,350,000 + £132,000 = £1,482,000/year
```

搿个算术清清爽爽地说明完成率为啥勿是次要指标：假使完成率勿从 80% 提高到 92%，使用率转移节省个一部分会被失败需求收回去，因为受挫个数字渠道用户直接被送回昂贵个电话渠道。

## 搭软件工程个关联

搿四个指标是成本-后果仪表盘个现成例子：一个成本指标搭三个成果/质量指标分开放，故意勿压成单一分数——搭[公共部门 KPI](../公共部门个关键绩效指标/)里厢主张个纪律一样。对工程师来讲，搿拆成具体个、有人负责个工作：完成率是漏斗埋点问题，旅程里厢每一个放弃点，原则上才定位得到、修得好；单笔交易成本需要真正个单位成本核算，包括人工协助搭纸质渠道个成本，而勿单单是云托管开支（参见[单笔交易成本](../每笔交易成本/)搭[政府 IT 个总拥有成本](../政府-it-里个总拥有成本/)）；而数字化使用率是穿了效率外衣个公平指标——勿能或者勿愿转换渠道个市民，偏向于老年人、残障人士或者数字排斥人群，所以激进地关闭渠道，会拿“节省”变成获取服务个损害（参见[数字包容](../数字包容/)搭[渠道转移节省](../渠道转移节省/)）。14 点标准本身是搿些数字背后个流程规范——完整标准参见[数字服务标准](../数字服务标准/)，搿里个满意度数字搭更广个信任测量有啥关系，参见[市民满意度指标](../市民满意度指标/)。

## 容易踏个坑

- **靠关闭替代渠道换来个使用率**：关掉一条电话热线，算术上会拉高数字化使用率个百分比，同时拿失败需求倒到剩下个渠道上（往往是更贵个协助数字或者面对面途径）；一定要测量全系统个成本，勿要单看比率。
- **从漏斗第二步开始测完成率**：拿“开始”个计数放勒第一个真正流失点之后，会美化完成率，藏起最大个可修复损失。
- **单笔交易成本勿含协助数字支持**：只算数字渠道、忽略帮助勿能自助个用户所花个人工辰光个单位成本，会低估搿个渠道个真实成本。
- **勿同服务之间勿共用定义就公布指标**：“交易”搭“完成”勒勿同服务团队里厢意思勿一样，除非定义标准化并且有版本管理，跨服务比较就勿可靠。

## 资料来源

- GOV.UK Service Manual, "The Service Standard." <https://www.gov.uk/service-manual/service-standard>
- GOV.UK Service Manual, "Measuring Success — Data You Must Publish."
  <https://www.gov.uk/service-manual/measuring-success/data-you-must-publish>
- GOV.UK, "Digital Efficiency Report."
  <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
