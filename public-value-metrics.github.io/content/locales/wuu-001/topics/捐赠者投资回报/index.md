# 捐赠者投资回报

捐赠者投资回报（donor return on investment），讲个是某一位捐赠者个一镑钞票实际上买到了多少成果——勿是慈善机构个运营比率，也勿是慈善机构对伊总预算个回报。伊拿 ROI 从机构个角度（阿拉运营得有多高效）换成捐赠者个角度（阿拉边际上多捐一笔，会改变啥），而搿两个数字经常被错误地当成一桩事体。

## 为啥重要

一家慈善机构自家讲个"ROI"，假使真有人用搿个词个话，通常指个是类似 [单个受益人成本](../每个受益人成本/) 或者 [慈善机构管理费用比率](../慈善机构管理费用比率/) 个东西——机构效率指标。捐赠者个 ROI 是完全勿同个问题：既然搿家慈善机构已经有别个收入，*搿位*捐赠者个钞票勒边际上增加了啥？假使一家慈善机构不管有呒没某笔 £10,000 个捐款，侪会提供同样个项目——因为伊储备充足，或者别个出资方会补上缺口——那么搿笔捐款个捐赠者 ROI 就接近零，哪怕伊总体个管理费用比率或者单位成果成本看上去交关漂亮。

搿搭英国公共开支里 [物有所值](../物有所值/) 评估所依据个额外性问题，以及项目评估里个 [额外性搭无谓效应](../额外性搭死重/) 是同一个问题：创造出来个价值，只有勒"就算呒没搿笔资助也勿会发生"个范围内，才好算勒出资方头上。大型个捐赠者建议基金平台搭有效捐赠组织（Giving What We Can、GiveWell）个推荐，明确是围绕搿个区分建立个，伊拉问个勿是"搿是勿是一家好慈善机构"，而是"搿家慈善机构有呒没还未被填满个资金空间，使得我个捐款是额外个"。

## 数学

```
Donor ROI ≠ Charity's operating efficiency

Donor ROI  ≈  (Outcome achieved with the gift) − (Outcome that would have
               occurred without it, i.e. the counterfactual)
             ─────────────────────────────────────────────────
                              Size of the gift

Key inputs:
  - Room for more funding (is the charity funding-constrained at the margin?)
  - Funging (would another donor have filled the gap?)
  - Marginal cost-effectiveness at the specific funding level (costs often
    rise as an intervention scales past its easiest-to-reach population)
```

GiveWell 哪能落实"更多资金空间"搿个问题，参见 [有效利他主义个成本效益](../有效利他主义个成本效益/)；通用办法参见 [反事实分析](../反事实分析/)。

## 实例演算

一位捐赠者勒两笔 £5,000 个捐款之间做选择：

- **慈善机构 C**：核心项目资金已经充足，有 £2 million 个储备，还有一长排等着出资个资助方；多出来个 £5,000 大概率会被加进储备，或者用勒优先级较低个活动上。估计个捐赠者额外成果：微乎其微——搿笔钞票显然勿会改变实际发生个事体。
- **慈善机构 D**：一个小型、有证据支撑个项目，已经公开讲明：假使呒没额外 £50,000，下个季度要拒绝 200 个人，伊已经筹到其中个 £42,000。多出来个 £5,000 非常可能资助真正额外个交付——比方讲多服务 20 个人，按伊自家公布个单个受益人成本 £250 来算。

同样大小个捐款，同一位捐赠者，捐赠者 ROI 却天差地别——勿是因为慈善机构 C 是一个更差个机构（伊总体个单位成果成本可能更好），而是因为伊边际上个资金缺口已经堵上了。

## 搭软件工程个关联

捐赠平台搭捐赠推荐工具，常常只呈现机构层面个效率指标（管理费用比率、单个受益人成本），因为搿些是慈善机构勒年报里公布、也最容易拉进对比表格个数据。要正确表达捐赠者 ROI，需要另一种更难获取个数据点：慈善机构公布个当前资金缺口，或者"更多资金空间"，搿个数据一年里会变，而且难得是结构化数据。想要支持真正个捐赠者 ROI 推理个平台，要么需要资金缺口披露个直接数据源（就像 GiveWell 对伊推荐个慈善机构手工维护个那样），要么要明确声明：对比表格展示个是机构效率，勿是捐赠者额外性。捐赠者 ROI 最经常、而且错误地被混为一谈个指标是 [慈善机构管理费用比率](../慈善机构管理费用比率/)，请参见该主题。

## 容易踏个坑

- **拿慈善机构效率搭捐赠者额外性混为一谈。** 一家运营良好、管理费用低个慈善机构，只要伊勿受资金约束，边际捐赠者 ROI 照样可能接近零。
- **忽略资金替代（funging）。** 假使一个大型机构出资方无论如何会补上缺口，个人捐赠者个捐款就只是挤走了搿位出资方个钞票，而勿是增加了新个交付。
- **假设规模扩大后成本效益保持线性。** 最容易触达个受益人常常最先被服务到；项目扩张个辰光，边际单位成果成本经常上升，所以下一镑个 ROI 搭已经花掉个平均一镑个 ROI 勿一样。
- **呒没说明资金缺口。** 一家慈善机构或者平台假使讲勿出下一笔 £X 会资助啥，就支撑勿了真正个捐赠者 ROI 个宣称，只能支撑平均成本个宣称。

## 资料来源

- Giving What We Can, on funding gaps and cost-effectiveness in donation decisions. <https://www.givingwhatwecan.org/>
- GiveWell, "Our criteria" (room for more funding as an explicit criterion). <https://www.givewell.org/how-we-work/our-criteria>
- HM Treasury, the Green Book: appraisal and evaluation in central government. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-governent>
