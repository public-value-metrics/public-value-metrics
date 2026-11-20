# Green Book 评估（五案例模型）

Green Book（《绿皮书》）是英国财政部（HM Treasury）为评估搭评价英国政府支出提案而制定个强制性指引。伊个核心工具——五案例模型（five-case model）——强迫一份商业案例回答五个各自独立个问题：是勿是一个好主意、能勿能带来价值、能勿能采购、负担得起勿、能勿能交付，而勿是拿所有东西压成一个数字，让部长一挥手就放行。

## 为啥重要

英国中央政府每一项超出部门授权限额个支出提案，勒资金放出之前，侪必须经过 Green Book 评估；2020 年财政部个《Green Book Review 2020》（勒有人批评搿套流程对较穷个地区有偏见之后发布，参见 <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>）收紧了两项要求：各个方案要搭一个真正个"最低限度行动"（do minimum）基线相比较；以及勒评估物有所值之前，就要先证明战略契合。五案例模型本身早于 Green Book——伊起源于政府商务办公室（Office of Government Commerce），作为标准个商业案例结构——但是 2022 年版个 Green Book 拿伊定为任何寻求财政部批准个商业案例个强制形式：<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>。

拿案例分成五块个意义勒于：一份提案可以勒任何一个维度上失败，而勿管其他维度如何。一个战略上站得住、成本效益也好个 IT 平台迁移，假使只有一家供应商能够交付（带来单一招标个风险），照样会勒商务案例上失败；假使部门呒没交付搿种规模项目个履历，也会勒管理案例上失败。一个单一个"物有所值"分数，恰恰会遮掉搿种失败模式。

## 数学

五案例模型是一个结构，勿是公式，但是每个案例有伊自家个定量或者证据检验：

```
1. Strategic case
   Evidence of a spending objective linked to organisational strategy.
   Test: is there a case for change at all? ("do nothing" is always an option.)

2. Economic case
   Options appraisal against a "do minimum" baseline, using
   social cost-benefit analysis or cost-effectiveness analysis.
   Test: which option maximizes net public value?
   See ../social-cost-benefit-analysis/ and ../cost-effectiveness-analysis-in-government/

3. Commercial case
   Market engagement, procurement route, risk allocation between
   buyer and supplier.
   Test: is the preferred option procurable on acceptable terms?

4. Financial case
   Affordability within departmental budget limits, funding source,
   balance sheet treatment.
   Test: can we afford it, this year and every year after?

5. Management case
   Governance, project plan, benefits realization plan, risk register.
   Test: can this organization actually deliver it?
   See ../benefits-realization/
```

定量评估住勒经济案例里：各个方案按经 [社会贴现率](../社会贴现率/) 调整个净现值来比较，用 [社会成本收益分析](../社会成本效益分析/) 个方法；或者勒收益无法老老实实货币化个辰光，用 [成本效益分析](../政府个成本效益分析/) 或者 [多准则决策分析](../多准则决策分析/)。

## 实例演算

**地方政府**：一个市政厅评估一套 £12 million 个住房维修 IT 系统，五个案例个做法如下。战略案例：勿干预个话，维修积压勒 18 个月内就会违反法定个体面住房标准。经济案例：三个方案按 10 年评估期、3.5% 个贴现率核算成本（按 2022 年 Green Book 个标准社会时间偏好率）——"最低限度行动"（给老系统打补丁，净现值 −£4.1m）、"外购"（商用现成平台 COTS，净现值 +£2.3m）、"自建"（定制平台，勒对未贴现资本成本应用软件开发 40% 个乐观偏差（optimism bias）之后，净现值 +£0.6m，依据 Green Book 附件 A）。外购勒经济案例里胜出。商务案例：存在两家可行个供应商，可以做竞争性招标——通过。财务案例：资本可以从公共工程贷款委员会（Public Works Loan Board）拿到，收入侧成本放得进中期财务计划——通过。管理案例：市政厅过去五年里交付过两套类似个系统——通过。提案以"外购"往前推进。

**中央政府部门**：一份经济案例强劲（净现值 +£40m）个提案，但是只有一家供应商有相关个资质认证，勒竞争张力个商务案例检验上过勿了关，要么只好申请单一招标豁免（自带审查负担），要么重新设计规格，打开市场——光看经济案例，永远发现勿了搿个问题。

## 搭软件工程个关联

政府内部或者受资助机构里个工程团队，通常只看得到经济案例，因为产品搭工程负责人被要求论证个就是搿一块（"搿次迁移个 ROI 是多少？"）。但是一份要通过财政部或者资助委员会个商业案例，五个案例侪要有，而工程师往往是回答商务案例（搿个到底采购得了勿，还是会拿阿拉锁勒一家供应商个专有格式里？）搭管理案例（阿拉有呒没交付能力，还是依赖三个具体个人勿走？）最合适个人。拿"只要商业案例个数字"个要求，当成只要真正决策个五分之一。经济案例个产出通常哪能总结，参见 [物有所值](../物有所值/)；财务案例通常个定量核心，参见 [总拥有成本](../政府-it-里个总拥有成本/)。

## 容易踏个坑

- **先写经济案例，再让战略案例去迁就伊。** Green Book Review 2020 发现，正是搿种失败模式，让评估偏向本来证据就充分个地方搭行业，固化了区域不平等；应该勒比较各方案之前，由战略案例确立目标。
- **拿"最低限度行动"当成"啥也勿做"。** 正确个基线是仍旧满足最低法律或者安全义务个成本最低个方案，而勿是零开支个幻想——搭字面上个零相比，会抬高每个方案个表观价值。
- **因为经济案例强，就跳过商务案例搭管理案例。** 一份净现值高、但是无法竞争性采购、或者发起机构无法交付个提案，勿是一份可以资助个提案；就算经济案例有说服力，财政部个评审人员也经常因为搿些理由驳回。
- **五案例模型只应用一趟，只勒开头。** Green Book 要求随着成本搭证据逐渐落实，勒后面每个批准关口（战略大纲案例、大纲商业案例、完整商业案例）重新审视案例——冻结勒大纲阶段个案例，会错过后面关口本来能抓到个成本攀升。

## 资料来源

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury. "Green Book Review 2020: findings and response." 2020.
  <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>
- HM Treasury / Infrastructure and Projects Authority. "Guide to developing the project business
  case." <https://www.gov.uk/government/publications/project-business-case-guide>
