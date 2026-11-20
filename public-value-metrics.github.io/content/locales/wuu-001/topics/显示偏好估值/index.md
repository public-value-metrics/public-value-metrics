# 显示偏好估值

显示偏好方法是根据相关市场里厢看得见个行为，来推断非市场物品个价值，而勿是直接问人。特征价格法（hedonic pricing）搭旅行成本法是两种主力技术：两种才是从一笔真实个交易出发，倒推出一样从来呒没被直接出售过个东西个隐含价格。

## 为啥重要

[陈述偏好](../陈述偏好估值/)方法问个是一个假设个问题，显示偏好方法则观察人实际付过钞票买个东西；《Green Book》认为，勒其他条件相同个情况下，搿种证据一般更可信，因为伊勿受假设性偏差个影响——特征价格研究里厢个房屋买家，真个付过正勒测量个溢价或者折价
（<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>，
Annex 2）。特征价格法拿一个市场价格——通常是房价——分解成物品每项属性个隐含价格，让分析人员可以分离出，比如家庭为了住勒更安静、或者空气质量更好个地方实际付出个价格溢价，并且勒统计上控制其他一切也影响房价个属性（面积、地段、学区）。旅行成本法对勿收门票个休闲场所做个是类似个事体：人去搿个地方路上花个辰光搭钞票，揭示搿个地方对伊拉个价值个下限，因为呒没人会付出超过搿趟访问对自己价值个成本。

两种方法有一个共同个结构性限制：伊拉只能给已经嵌勒现有市场交易里厢个东西估价。跑道附近个噪音会反映勒房价里厢，因为在意噪音个人会分流到更安静个住宅；一个呒没人访问、也呒没人住勒附近个物种个存在价值，勿会出现勒任何交易里厢，搿恰恰是[陈述偏好](../陈述偏好估值/)方法要填补个缺口。

## 数学

```
Hedonic pricing:
  House price = f(structural attributes, location attributes,
                   environmental attribute of interest, ...)
  Estimate via regression; the coefficient on the environmental
  attribute (holding all else constant) is its implicit price.

  Implicit price of attribute X = ∂(House price) / ∂X

Travel-cost method:
  Visit rate (visits per capita from zone i) = f(travel cost from zone i,
                   substitute sites, socioeconomic controls)
  Estimate a demand curve for visits as a function of travel cost.
  Consumer surplus = area under the estimated demand curve
                    = value of the site to visitors
```

两种方法才需要统计上站得住个控制变量集——漏脱一个混杂属性（特征价格法）或者附近一个替代场所（旅行成本法），会使隐含价格往一个事先勿一定看得出来个方向偏，所以《Green Book》Annex 2 要求汇报回归设定搭控制变量，而勿单单是标题系数。

## 实例演算

**中央政府**：《Green Book》自家个碳影子价格方法，部分借鉴了特征价格个证据，但是更简单个示意案例是飞机噪音。一项特征价格研究，拿航线区域个房屋成交价格，对按距离加权个噪音暴露做回归，控制面积、房龄搭学区，发现平均噪音暴露每增加 1 分贝，房价下降 0.5%。对受影响地区一套典型个 £280,000 个房子：

```
Implicit price per decibel = £280,000 × 0.5% = £1,400 per household
Households affected by a 3dB increase from a new runway = 18,000
Aggregate implied cost of the noise increase = £1,400 × 3 × 18,000 = £75.6m
```

搿是一次性资本化个成本（已经嵌勒房价里厢），评估时要当心，勿要搭另外估算出来个每年噪音烦扰成本流重复计算。

**慈善机构**：一家环保慈善机构用旅行成本法给一个免费进入个自然保护区估价。访客邮编个调查数据给出每趟往返平均旅行成本（辰光按《Green Book》推荐个非工作辰光价值计，加上油费）£14，每年 40,000 人次访问。估计出来个需求曲线——旅行成本随区域上升，访问率下降——隐含着每趟访问超过实际花脱 £14 之外个消费者剩余大约 £9。

```
Total annual value = 40,000 visits × (£14 spent + £9 consumer surplus)
                    = 40,000 × £23 ≈ £920,000/year
```

搿个数字比保护区零门票收入大得多，也给慈善机构个受托人勒向出资方申请个辰光，提供了一个站得住脚个场地休闲价值数字。

## 搭软件工程个关联

显示偏好个思路出现勒公共部门个产品分析里厢，比从业者意识到个更加频繁：一项免费政府数字服务个使用数据，本身就是价值个显示偏好证据（频率、会话长度，以及——最能说明问题个——重复使用对一次性使用个模式，分析办法搭旅行成本模型拿访问频率对距离个办法一样）。一项服务假使有真正个替代渠道（纸质渠道、电话热线），市民改用数字渠道所付出个“成本”（辰光、流量、设备）可以估出来，搭使用量比较，直接呼应旅行成本个逻辑。参见[数字服务标准](../数字服务标准/)搭[开放数据个价值](../开放数据个价值/)，后者面对个就是一模一样个估值问题：一样呒没直接市场价格个物品。

## 容易踏个坑

- **特征价格模型里厢个遗漏变量偏差。** 漏脱一个相关属性（学校质量既搭房价相关，又搭关心个环境变量相关），会使隐含价格估计有偏；要汇报搭审视设定，而勿单单是结果。
- **旅行成本研究里厢忽视替代场所。** 倘使有更近个替代场所而勿曾控制，一个访客对一个场所个显示价值就被低估——伊可能主要因为免费而来，勿是因为搿搭独一无二有价值。
- **拿显示偏好用勒完全呒没市场回响个物品上。** 存在价值、选择价值搭遗赠价值勿出现勒任何交易里厢，特征价格法或者旅行成本法恢复勿出来——搿个缺口属于[陈述偏好估值](../陈述偏好估值/)。
- **拿资本化（一次性）价值搭年度流量混为一谈。** 特征价格个房价效应通常是一次性个资本化价值；拿伊当年度效益流，会拿评估吹大。

## 资料来源

- HM Treasury. "The Green Book," Annex 2: valuing non-market impacts.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Department for Transport / Civil Aviation Authority. Aircraft noise valuation studies used in
  airport appraisal. <https://www.gov.uk/guidance/aviation-noise>
- Rosen S. "Hedonic Prices and Implicit Markets: Product Differentiation in Pure Competition."
  Journal of Political Economy, 1974.
- Clawson M, Knetsch JL. "Economics of Outdoor Recreation." Johns Hopkins University Press, 1966
  (origin of the travel-cost method).
