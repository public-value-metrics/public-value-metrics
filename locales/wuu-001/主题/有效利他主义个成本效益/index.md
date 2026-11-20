# 有效利他主义个成本效益

有效利他主义（effective altruism，EA）个成本效益推理，按做了多少善事来给慈善干预排名——最常见个表达是每花一美元救了几条命、或者增进了多少健康——然后拿钞票导向边际上买到最多善事个干预。GiveWell 是搿个领域最有影响力个实践者：伊公布一份短短个"顶级慈善机构"名单，附带明确、不断更新个每救一条命个成本搭单位成果成本估算，并且建议捐赠者捐给当下"还有更多资金空间"、而且比率最好个那一家。

## 为啥重要

GiveWell 勒伊公布个方法论里拿成本效益列为首要标准：伊寻找有证据支撑个干预，用统一个单位估算伊拉个成本效益，再勒搿一根轴上，对完全勿相干个领域排名——防蚊帐对疟疾、维生素 A 补充、现金转移、疫苗激励金。搿是直接拿卫生经济学里 QALY/DALY 式个推理搬进慈善领域：就像一个卫生系统会问"边际上每镑能得到几个 QALY"，GiveWell 问个是"边际上每美元能救几条命、或者几个生命年"，一旦换算成搿个统一单位，各个领域就可以互相替代。该推理框架勒公共部门里个近亲，参见 [政府里个成本效益分析](../政府个成本效益分析/)。

被引用得最多个 GiveWell 数字，涉及抗疟疾基金会（Against Malaria Foundation，AMF），伊分发经过杀虫剂处理个蚊帐。勒 GiveWell 公布个实例演算里（取自 2020 年个资金数据），大概 $4,500 个资助足以买够蚊帐避免一例死亡，已经考虑了蚊帐使用勿充分、没有蚊帐辰光个基线死亡率，以及对资金替代（funging）个调整——也就是 AMF 不管怎样，其中一部分资金本来也会从别个捐赠者那里拿到个可能性。GiveWell 明确讲，搿个数字会随辰光搭地域变化，因为疟疾流行程度、蚊帐成本搭资金缺口勒变，而且一般预期救一条命个成本会随辰光上升，因为最便宜个机会最先被用掉；搿是对方法个一次实例演示，勿是一个固定价格。

## 数学

```
Cost-effectiveness = Cost of intervention / Units of good produced
                    (e.g. $ per life saved, $ per DALY averted, $ per QALY)

GiveWell's chain for a bednet programme, illustratively:
  $ per net purchased and delivered
    ÷ share of nets actually used
    ÷ people protected per net
    × baseline annual mortality without nets
    × reduction in mortality attributable to net use (from RCT evidence)
    × years of protection per net
    ÷ adjustment for funging (money displacing other donors' funding)
  = $ per life saved (net of counterfactual funding effects)
```

搿根链条要紧，是因为每一步侪是成本效益估算常常出错个地方——见下面个坑——还因为伊讲明了"每救一条命个成本"从来勿是观察到个原始价格；伊是由几个各自勿确定个输入建模出来个估计值。

## 实例演算

两项假设个干预，侪有证据支撑，争取同一笔边际个 £100,000：

- **防蚊帐（AMF 式）**：按 GiveWell 公布、取自 2020 年数据个实例演算，大概每救一条命 $4,500，也就是根据所用个汇率搭年份，大概每 £100,000 救 20 条命。
- **驱虫项目**：完全呒没合理个死亡率收益，但是有强有力个证据显示童年驱虫带来长期个收入增益；GiveWell 用收入增益来给伊估值，勿是用救了几条命，搿样一来勿用共同个单位就难以直接搭防蚊帐比较。GiveWell 用一套明确个"道德权重"框架拿两者换算成一个内部单位来排名。

EA 方法个纪律，就是逼着拿搿种比较摆到台面上，而勿是因为两个侪"听上去蛮好"就两个侪资助。英国社会企业搭地方委托方用个同类倒逼机制，参见 [社会投资回报](../社会投资回报率/)，伊问个是同一个问题——每镑最好个回报是啥——只不过用个是货币化价值个语言，勿是生命/DALY 个语言。

## 搭软件工程个关联

为 EA 取向个出资方（Open Philanthropy、GiveWell 自家、Giving What We Can 之类个有效捐赠平台）做捐赠平台、资助匹配工具或者影响力仪表盘个工程师，需要拿成本效益估算表示成带明确假设个区间，勿是单一数字——底层模型有好几个相乘个勿确定输入，拿伊压成仪表盘上个一个数字，就歪曲了 GiveWell 自家声明个置信度。每个估算要按发布日期做版本管理；GiveWell 会随着新个随机对照试验证据或者资金缺口数据到来修订数字，有辰光改得交关大，一个缓存旧数字个平台会悄悄变成错个。

## 容易踏个坑

- **拿成本效益估算当成固定价格。** 伊是模型输出，带几个勿确定个相乘输入（使用率、基线死亡率、资金替代调整）；要讲明日期搭版本。
- **忽略资金替代/挤出效应。** 资助一个本来也会从别个捐赠者那里拿到钞票个机构，买到个反事实善事比标题数字讲个要少——参见 [额外性搭无谓效应](../额外性搭死重/) 搭 [挤出效应搭归因](../挤出效应搭归因/)。
- **勿经换算就跨勿兼容个单位比较。** "救了几条命"搭"增加了多少收入"，勿用明确个道德权重框架就勿能直接比较；拿伊拉并排摆出来好像可比，是范畴错误。
- **领域隧道视野。** 只勒一个领域里排名（比方只比全球卫生慈善机构），就拿赢家叫做"成本效益最高个慈善机构"，是夸大了宣称；GiveWell 个跨领域排名是有意收窄个（全球健康搭福祉），勿是通用个。

## 资料来源

- GiveWell, "Our criteria." <https://www.givewell.org/how-we-work/our-criteria>
- GiveWell, "How Much Does It Cost to Save a Life?" (February 2024 version). <https://www.givewell.org/how-much-does-it-cost-to-save-a-life/february-2024-version>
- GiveWell, Against Malaria Foundation review. <https://www.givewell.org/charities/amf>
- Giving What We Can, on cost-effectiveness across causes. <https://www.givingwhatwecan.org/>
