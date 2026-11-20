# 自然资本核算

自然资本核算拿环境搭其他任何国家或者机构个资产放勒同一个台面上：伊既计量自然资源个存量（林地、土壤、河流、湿地、大气），也计量伊拉产生个服务流量（固碳、防洪、休闲、食物），实物搭货币两种口径才有，让环境耗竭勒决策里厢看得见，就像耗用金融资本一样。英国是系统性做搿桩事体做得顶靠前个政府之一，由《25 年环境计划》（2018）推动，通过英国国家统计局（ONS）个英国自然资本核算搭英国财政部《Green Book》补充指引来落实。

## 为啥重要

传统会计——企业搭政府都一样——拿一片森林看作一钿勿值，直到伊被砍倒当木材卖脱，才变成 GDP。自然资本核算就是为了补搿个缺口：英国《25 年环境计划》承诺政府勒各项政策里厢融入自然资本思维，明确提出个愿望是做“第一代让环境比我们接手时更好个人”。ONS 之后每年发布英国自然资本核算（<https://www.ons.gov.uk/economy/environmentalaccounts/bulletins/uknaturalcapitalaccounts/latest>），估算生态系统服务个货币价值——从林地休闲到城市绿地个健康益处，再到泥炭地个碳储存——用个是搭生产性资本一样个国民账户框架，所以自然资本最终可以搭道路、房屋、设备摆勒同一张资产负债表里厢。英国财政部《Enabling a Natural Capital Approach》（ENCA）指引，是《Green Book》个补充
（<https://www.gov.uk/government/publications/enabling-a-natural-capital-approach-enca-guidance>），
规定评估人员勒商业方案里厢该怎样给环境成本搭效益估价，所以一条毁脱古老林地个公路方案，搭一个恢复湿地个防洪方案，可以放勒一致个货币口径上比较，而勿是一个有数字、另一个只有一段免责说明。

## 数学

```
Ecosystem service asset value = NPV of the flow of services the asset provides

Asset value = Σ (t = 1 to T) [annual service flow value_t / (1 + r)^t]

where:
  service flow value_t = quantity of service in year t × unit value
                          (e.g. recreational visits × value per visit;
                           tonnes of carbon sequestered × carbon price)
  r = discount rate (Green Book social discount rate — see
      [social discount rate](../社会贴现率/))
  T = time horizon over which the asset is expected to provide the service
```

搿个搭生产性资本估值、或者勒[Green Book 评估](../green-book-评估/)下评估任何公共投资用个净现值结构完全一样——自然资本核算个贡献，是为以前定价为零个服务提供可信个实物数量搭单位价值。

## 实例演算

**城市林地，休闲价值**：一块 50 公顷个林地，估计每年有 80,000 人次休闲访问，每次访问价值 £3（通过旅行成本法或者陈述偏好法估出来——参见[显示偏好估值](../显示偏好估值/)搭[陈述偏好估值](../陈述偏好估值/)）。预计林地可以继续提供搿个服务 50 年，用 3.5% 个贴现率评估。

```
Annual recreational value = 80,000 × £3 = £240,000/year

NPV over 50 years at 3.5% ≈ £240,000 × annuity factor(3.5%, 50 years)
annuity factor(3.5%, 50) ≈ 21.4

Asset value ≈ £240,000 × 21.4 ≈ £5,136,000
```

**加上碳储存**：同一块林地每年估计固碳 400 吨 CO2，按政府个非交易碳价大约 £75/吨估值（仅为示例——真正做评估要用 BEIS/DESNZ 当前公布个碳价值）。

```
Annual carbon value = 400 × £75 = £30,000/year
NPV over 50 years at 3.5% ≈ £30,000 × 21.4 ≈ £642,000

Total woodland asset value (recreation + carbon) ≈ £5,136,000 + £642,000
                                                   ≈ £5,778,000
```

搿还勿包括 ENCA 指引同样要求评估人员考虑个洪水缓冲、生物多样性搭空气质量服务——所以搿个总数特意是下限，勿是上限。

## 搭软件工程个关联

- 地方政府搭机构个环境搭资产管理系统（公园、公路、水体），可以勒实物资产登记册旁边加一份自然资本登记册，用搭机构维护个任何其他[单位成本数据库](../单位成本数据库/)一样个“服务流量乘单位价值”模式。
- 自然资本个净现值对贴现率敏感（看算例里厢个年金系数），所以任何计算伊个工具，都应该拿贴现率搭期限作为看得见个输入暴露出来，而勿是藏起来——搿个透明原则勒[代际公平搭可持续性贴现](../代际公平搭可持续性贴现/)里厢也讲过。
- 自然资本核算越来越成为[Green Book 评估](../green-book-评估/)商业方案环境影响部分个必备输入；做商业方案工具个交付团队应该拿 ONS 个核算搭 ENCA 个单位价值当参考数据集成进去，而勿是让评估人员每趟从头重算。

## 容易踏个坑

- **重复计算重叠个生态系统服务** —— 同一个地点个休闲价值搭生物多样性价值，可能共用同样个支付意愿底层数据；ENCA 指引明确警告，勿要拿来自重叠调查工具个估值加总。
- **拿自然资本个资产价值当作静态个** —— 服务流量会随气候、管理搭土地利用压力变化；一片林地搿十年个碳搭防洪价值，勿是搿块地永久个属性。
- **勒高度本地化个决策里厢用全国平均单位价值** —— 一公顷可以到达个城市林地搭一公顷偏远高地，休闲价值差得老远；ENCA 指引建议有本地或者具体地点个价值就用，勿要默认用全国平均值。

## 资料来源

- ONS. "UK natural capital accounts."
  <https://www.ons.gov.uk/economy/environmentalaccounts/bulletins/uknaturalcapitalaccounts/latest>
- HM Government. "A Green Future: Our 25 Year Plan to Improve the Environment." (2018)
- HM Treasury / Defra. "Enabling a Natural Capital Approach (ENCA): guidance."
  <https://www.gov.uk/government/publications/enabling-a-natural-capital-approach-enca-guidance>
