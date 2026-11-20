# 多重剥夺指数（IMD）

IMD 是英格兰小区域相对剥夺程度个官方衡量指标，拿全国 32,844 个下层超级输出区（Lower-layer Super Output Areas，LSOA，每个大概 1,500 个居民）从 1（最被剥夺）排到 32,844（最勿被剥夺）。伊由现在个住房、社区及地方政府部（Ministry of Housing, Communities and Local Government，MHCLG，以前是 MHCLG/DCLG）发布，最近一版是《English Indices of Deprivation 2019》，伊直接决定中央政府个资金流向、公共卫生个优先顺序，以及几十项地方计划个资格。

## 为啥重要

剥夺勿是单一个东西——一个街坊可能收入贫困但是治安良好，也可能收入够用却健康结果差、住房糟糕。IMD 个前身指数（可以追溯到 1970 年代环境部个剥夺指标）演变成今朝个七领域模型，正是因为单一指标个定向（比方只看失业率）经常漏掉其他方面被剥夺个区域。IMD 2019 拿收入、就业、教育、健康、犯罪、住房搭服务障碍、居住环境合并成每个 LSOA 一个综合排名，每个领域由伊自家一篮子指标构建，并按 MHCLG 个方法论加权。因为伊勒小区域（LSOA）层面、而勿是地方政府层面运作，所以伊暴露出藏勒本来富裕个行政区里个贫困角落——搿就是为啥 NHS England、教育部个学生溢价（pupil premium）以及几十个地方政府资金公式，实际依据个是 IMD，而勿是地方政府个平均收入。勒英格兰判定资格、安排外展优先顺序、或者按区域报告影响个软件，应该拿 IMD 十分位或者排名当成一等输入，而勿是事后想起来个东西——而且假使一个项目有意瞄准最被剥夺个地区，伊个评估应该应用同搿种定向一致个 [分配权重](../分配权重/)，而勿是勿管落勒啥地方，一镑收益侪按同样个价值来算。

## 数学

```
7 domains, weighted:
  Income                              22.5%
  Employment                          22.5%
  Education, Skills and Training      13.5%
  Health Deprivation and Disability   13.5%
  Crime                                9.3%
  Barriers to Housing and Services     9.3%
  Living Environment                   9.3%

Each domain score: indicators standardized (ranked, then transformed
towards a normal distribution) and combined by exponential transformation
so that high deprivation on any one indicator cannot be fully cancelled
out by low deprivation on others within that domain.

IMD composite score (LSOA) = Σ (domain score × domain weight)
Rank LSOAs by composite score → 1 (most deprived) to 32,844 (least deprived)
Deciles: rank ÷ 3,284 (approx.), decile 1 = most deprived 10% of LSOAs
```

## 实例演算

**LSOA 个综合得分**，用示意性个标准化领域得分（0 = 呒没剥夺信号，越高越被剥夺）：

```
Income               0.35 × 0.225 = 0.07875
Employment           0.30 × 0.225 = 0.06750
Education            0.20 × 0.135 = 0.02700
Health               0.15 × 0.135 = 0.02025
Crime                0.10 × 0.093 = 0.00930
Barriers to Housing  0.05 × 0.093 = 0.00465
Living Environment   0.08 × 0.093 = 0.00744

Composite score = 0.07875 + 0.06750 + 0.02700 + 0.02025
                + 0.00930 + 0.00465 + 0.00744  = 0.21489
```

搿个综合得分接着同全部 32,844 个 LSOA 个得分比较排名。假使伊拿搿个 LSOA 排勒第 2,950 名，伊就落勒第 1 个十分位（2,950 ÷ 3,284 ≈ 0.9，也就是英格兰最被剥夺个 10% 街坊之内）——对交关资金公式来讲，搿就是解锁资格个门槛，勿管周围个地方政府平均得分如何。

## 搭软件工程个关联

- 任何拿用户地理编码到邮编或者 LSOA 个服务，侪可以关联已发布个 IMD 查找表（MHCLG 提供个免费、带版本个 CSV），拿剥夺十分位当成协变量加进去——用来定向外展、安排案件量优先顺序、或者按剥夺档次报告成果，勿需要采集新个个人数据。
- IMD 十分位是公共数字服务个标准公平性检查：拿服务使用量、流失或者满意度按 IMD 十分位交叉列表，会显示出汇总指标遮掉个使用差距——参见 [数字包容](../数字包容/) 搭 [市民满意度指标](../市民满意度指标/)。
- 因为 IMD 排名是相对个（伊永远是英格兰一套固定个名次），伊勿能显示全国个剥夺程度随辰光是上升还是下降——只能显示勒该版本里各个区域相互之间个相对排位；勿要光靠原始 IMD 排名去搭绝对趋势仪表盘。

## 容易踏个坑

- **拿勿同版本（2015 搭 2019）个 IMD 排名当成辰光趋势来比较**——底层指标、地理划分搭方法论勒版本之间侪会变；MHCLG 明确劝告，勿要拿排名变化当作一个地区变得更被剥夺或者更勿被剥夺个证据。
- **拿 LSOA 层面个 IMD 用到个人身上**——第 1 个十分位个 LSOA 里依旧有勿被剥夺个家庭，第 10 个十分位个 LSOA 里也依旧有被剥夺个；IMD 描述个是区域，勿是人，拿伊当作个人资格个替代指标，两个方向侪会分错类。
- **只看综合排名，忽视领域层面个细节**——两个综合得分完全一样个 LSOA，领域画像可能完全勿同（一个是健康被剥夺，一个是犯罪被剥夺）；针对某一个问题个定向方案，应该用相关个领域得分，而勿是混合个综合得分。

## 资料来源

- Ministry of Housing, Communities and Local Government. "English Indices of Deprivation 2019."
  <https://www.gov.uk/government/statistics/english-indices-of-deprivation-2019>
- MHCLG. "The English Indices of Deprivation 2019: Technical Report."
