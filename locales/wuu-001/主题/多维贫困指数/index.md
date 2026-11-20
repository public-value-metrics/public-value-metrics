# 多维贫困指数（MPI）

MPI 拿贫困看作一个人同时碰着个几重叠加个匮乏——健康、教育搭生活水准——而勿是单单看收入有呒没落到一条线下头。伊是牛津贫困与人类发展倡议（OPHI）搭 Sabina Alkire、James Foster 一道发展出来个，2010 年起每一期《人类发展报告》里厢，才搭[人类发展指数](../人类发展指数/)一道，同联合国开发计划署（UNDP）联合发布。

## 为啥重要

收入贫困线会漏脱一批人：伊拉手里现金收入够用，但是呒没干净个水、呒没上学，或者碰着过小囡夭折；而且匮乏是扎堆个——一户人家呒没电，伊拉同时缺卫生设施、屋里厢有营养不良小囡个可能性明显要高。Alkire-Foster 方法是 MPI 个基础，伊拿每个人勒十个指标上个匮乏数出来，十个指标分勒三个权重相等个维度——健康、教育、生活水准——只有加权个匮乏得分过了一条固定门槛，才算“MPI 贫困”，搿样就抓住了一组各自独立个单指标统计抓勿住个重叠。OPHI 勒 <https://ophi.org.uk/multidimensional-poverty-index/> 公布完整方法搭各国数据；伊搭 UNDP 联合维护个全球 MPI 现在覆盖 110 多个国家。做反贫困项目个软件——现金转移、社会照护分诊、援助瞄准——MPI 个指标集常常是最接近一套标准化匮乏数据模式个东西，而且已经勒几十个国家统计局验证过。

## 数学

```
10 indicators, 3 dimensions, each dimension weighted 1/3:

Health (1/3):            nutrition (1/6), child mortality (1/6)
Education (1/3):         years of schooling (1/6), school attendance (1/6)
Living standards (1/3):  cooking fuel, sanitation, drinking water,
                          electricity, housing, assets (1/18 each)

deprivation score (c) = sum of weights of indicators a person is deprived in

person is "MPI poor" if c ≥ 1/3 (the poverty cut-off, k = 33%)

H (headcount ratio) = number of MPI poor / total population
A (intensity)        = average deprivation score among the MPI poor only

MPI = H × A
```

MPI 是拿贫困人口个*占比*乘上伊拉有*多穷*，所以两个地区贫困人头比率一样，倘使其中一个匮乏更严重，MPI 得分可能差得老远——搿搭 HDI 用几何平均个背后逻辑一样，就是各维度之间勿能相互替代。

## 实例演算

**1,000 人个全国调查**：350 人被认定为多维贫困（匮乏得分 ≥ 33%）。单单搿 350 个贫困个人里厢，平均匮乏得分是 45%。

```
H = 350 / 1000                = 0.350
A = 0.45
MPI = H × A = 0.350 × 0.45    = 0.1575
```

**比较两个人头比率一样个区**：A 区 H = 0.30，A = 0.40（穷个人多，但是匮乏程度中等）；B 区 H = 0.30，A = 0.60（穷个人数一样，但是匮乏更严重——同时缺电、缺卫生设施、缺上学）。

```
MPI_A = 0.30 × 0.40 = 0.120
MPI_B = 0.30 × 0.60 = 0.180
```

人头比率一样，B 区个 MPI 高出 50%——倘使光靠人头贫困来瞄准，两个区排得一模一样，就会漏脱 B 区需要更深入个干预。

## 搭软件工程个关联

- 社会项目个个案管理搭资格审核系统，往往已经勒各自个数据孤岛里存了十个指标里厢个几个（住房、上学、健康标记）；Alkire-Foster 计数法是一套现成个模式，可以拿伊拉合成一个匮乏得分，勿用从头做一个定制个打分模型。
- 人头比率搭强度分开（H × A）个做法，对任何同时汇报“多少人受影响”搭“受影响有多重”个仪表盘才有用——像原始患病率统计搿样拿两个压成一个数字，恰恰拿最需要资源个情形藏脱了。
- MPI 类个指标仪表盘搭反贫困项目个[人均受益成本](../每个受益人成本/)汇报天然配套：每降低一个 MPI 点个成本，是比较完全勿同干预（现金转移对卫生基础设施）个站得住脚个单位。

## 容易踏个坑

- **拿十个指标当成放之四海皆准** —— OPHI 个全球 MPI 指标是为了跨国可比而校准个；各国自己个 MPI（包括南亚搭非洲好几个国家勒内，好多国家有自己个版本）会根据本地情况调整指标搭权重，两者勿好直接比。
- **只汇报 H** —— 人头比率完全勿看强度；一定要同时汇报或者计算 A，或者 MPI 本身。
- **以为 MPI 贫困搭收入贫困是同一批人** —— OPHI 自己个国别简报通常显示两者只有部分重叠；只瞄准收入贫困个项目，会系统性地漏脱相当一部分多维贫困人口。

## 资料来源

- Oxford Poverty and Human Development Initiative. "Multidimensional Poverty Index."
  <https://ophi.org.uk/multidimensional-poverty-index/>
- Alkire S, Foster J. "Counting and Multidimensional Poverty Measurement." Journal of Public
  Economics, 2011.
- UNDP & OPHI. "Global Multidimensional Poverty Index" (annual report).
