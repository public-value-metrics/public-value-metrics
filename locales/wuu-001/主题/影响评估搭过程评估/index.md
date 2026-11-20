# 影响评估搭过程评估

影响评估（impact evaluation）问个是：一个项目有呒没造成伊预期个成果。过程评估（process evaluation）问个是：项目实际上有呒没按设计交付——交付给啥人、剂量多少、一路上碰着啥障碍或者促进因素。搿是两个勿同个问题，需要勿同个方法，英国财政部个《Magenta Book》拿两样一道委托当成标准做法，因为一个微弱或者为零个影响结果，单独拿出来是没法解释个：伊讲勿清爽，到底是项目底层个理论错了，还是一个好理论根本呒没被好好交付。

## 为啥重要

政府个评估反复发现一个项目呒没可测量个效果，却又呒没过程评估来解释为啥——让委托方分勿清爽"搿个想法勿灵"（理论失败）搭"搿个想法根本呒没真正好好试过"（实施失败）。医学研究理事会（Medical Research Council）关于复杂干预个过程评估个指引，2015 年发表勒《BMJ》上，搭《Magenta Book》一道被广泛引用，正式拿保真度（fidelity）、剂量（dose）搭触达（reach）确定为过程评估必须测量个核心内容。只委托影响评估、勿做过程评估，有可能拿一个真正稳健个项目设计抛弃掉，只因为伊只交付给了一半个目标人群，强度只有预期个一小部分——搿种错误，做系统个人最有条件防止，因为交付保真度恰恰是运营数据系统能够近乎实时捕捉个东西。

## 数学

```
Process evaluation asks:
 - Was it delivered to the target population, at the planned dose/intensity?
 - Did delivery match the logic model / theory of change design?
 - What barriers or facilitators affected delivery?
 Methods: fidelity checks against pre-specified thresholds, case studies, interviews,
          administrative delivery data.

Impact evaluation asks:
 - What changed, and how much of that change is attributable to the programme?
 Methods: RCT, DiD, PSM, RDD — see impact-evaluation-methods — against a counterfactual.

Combined diagnosis:
 No effect  + high fidelity  → theory failure: the model itself did not produce the outcome
 No effect  + low fidelity   → implementation failure: the model was never properly tested
 Effect found + high fidelity → replicate with confidence
 Effect found + low fidelity  → investigate further: the effect may be fragile or site-specific
```

## 实例演算

**地方政府（育儿项目）**：用双重差分做个影响评估发现，儿童福祉指标有 +2 个百分点个变化——统计上勿显著。同步进行个过程评估发现，项目只触达了目标 500 户家庭里个 210 户（触达率 42%），其中只有 95 户达到了事先规定个 75% 以上出勤个保真度阈值——是原计划触达人数个 19%。结论：微弱个影响结果同实施失败是一致个，勿是项目模型勿灵个证据；恰当个回应是修好造成 58% 流失个转介路径，而勿是抛弃项目设计。

**慈善机构（数字素养项目）**：一项影响评估发现了强个效果（数字信心得分 +18 个百分点），同步个过程评估确认，勒全部 12 个交付点上对计划课程个保真度是 92%。合起来看，出资方就可以放心拿项目铺开，因为效果被证明是稳定地成立，而勿是某一个格外好个点个产物。

## 搭软件工程个关联

过程评估个数据，恰恰是交付系统最适合采集个：对照计划个出勤、课程剂量，以及转介或者登记漏斗每个阶段个流失——搿就是工程师早已勒产品功能上做个同样个漏斗分析，只是用到一个社会项目个交付管道上。拿保真度搭触达指标近乎实时地反馈给项目经理，而勿是等到资助结束后个评估，就可以让一条坏掉个转介路径勒项目进行当中修好，而勿是等资助期结束才发现。过程评估所搭配个因果设计，参见 [影响评估方法](../影响评估方法/)；过程评估检查保真度所对照个设计，参见 [变革理论](../变革理论/) 搭 [逻辑模型](../逻辑模型/)；把交付一路追踪到所承诺个成果，参见 [收益实现](../收益兑现/)。

## 容易踏个坑

- **只委托影响评估。** 一个为零或者微弱个结果，就没法解释成理论失败还是实施失败，而搿恰恰是决定下一步做啥个关键区分。
- **拿过程评估当成软性个附加项。** 伊需要搭影响设计一样个严谨度搭事先规定好个保真度标准，勿然结果出来个辰光伊就会塌成轶事。
- **拿"按时按预算"搭"按设计交付"混为一谈。** 过程评估检查个是对模型个保真度——剂量、目标群体、内容——勿是项目管理个红黄绿（RAG）状态。
- **勿事先登记保真度阈值。** 事后才决定啥算"足够个剂量"，会让对一个令人失望个影响结果个任何解释，看上去像是事后找借口。

## 资料来源

- HM Treasury, Magenta Book (2020). <https://www.gov.uk/government/publications/the-magenta-book>
- Moore G, et al., "Process evaluation of complex interventions: Medical Research Council
  guidance." BMJ 2015;350:h1258. <https://www.bmj.com/content/350/bmj.h1258>
- National Audit Office, programme evaluation reports. <https://www.nao.org.uk/>
