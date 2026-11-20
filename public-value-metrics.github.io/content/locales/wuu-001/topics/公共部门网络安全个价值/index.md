# 公共部门网络安全个价值

公共部门网络安全个价值，是给风险降低定价个学问：让市民数据个泄露变得更勿容易发生，值多少钞票？安全开支做得好个辰光呒没任何看得见个产出，一旦失败就非常显眼。一项掌握福利记录、健康数据或者税务记录个服务，搿种“起作用个辰光看勿见”个特点，正是伊需要一份明确个价值论证，而勿单是合规打勾个原因。

## 为啥重要

英国国家网络安全中心（NCSC）个《网络评估框架》（Cyber Assessment Framework，CAF），为公共部门机构提供了一种结构化个办法，拿安全变成一门可评估、基于成果个学问，而勿是一张检查清单：伊定义了四个高层目标（管理安全风险、防范网络攻击、检测网络安全事件、尽量减少事件个影响），再分解成系统所有者可以拿来评估个贡献性成果，精神搭[数字服务标准](../数字服务标准/)个第 9 条（“创建一个保护用户隐私个安全服务”）一致。CAF 评估所防范个东西，有一个有据可查个价码：IBM 个《Cost of a Data Breach Report》按行业追踪泄露个平均成本，一直发现公共部门搭金融或者医疗相比处勒区间偏低个一端——近年版本里厢，公共部门平均大约每次泄露 260 万到 290 万美元——但是“比金融低”勿等于“低”，而且政府个泄露带来个成本，报告个数字勿能完全捕捉：市民对数字渠道个信任流失，会压低[渠道转移](../渠道转移节省/)商业方案所依靠个数字化使用率，还有暴露国家本来强制市民交出来个数据所带来个政治搭法律成本。

## 数学

安全投资个估值办法搭任何风险降低开支一样：作为预期损失个降低，用经典个风险管理恒等式。

```
Annualized Loss Expectancy (ALE) = Single Loss Expectancy (SLE)
                                  × Annualized Rate of Occurrence (ARO)

Value of a security control =
  ALE_before_control − ALE_after_control − annual cost of the control

A control is worth funding when:
  (ALE_before − ALE_after) > annual cost of the control

CAF assessment doesn't directly output a probability, but a service's
CAF outcome profile (which contributing outcomes are "achieved",
"partially achieved", or "not achieved") is a reasonable proxy input
to estimate ARO — a system with unmanaged privileged access or no
tested incident response plan has a materially higher realistic ARO
than one with both in place.
```

## 实例演算

**某郡议会个个案管理系统，存着 40,000 名居民个社会照护记录**：

```
Single Loss Expectancy (breach cost), using a public-sector-sector
average from a recent IBM Cost of a Data Breach Report ≈ £2.1m
(converted, order-of-magnitude figure — always re-derive from the
current report edition rather than reusing a fixed number)

Current ARO (unmanaged privileged access, no tested incident
response, per an internal CAF self-assessment showing multiple
"not achieved" outcomes) ≈ estimated 8% per year
  ALE_before = £2.1m × 0.08 = £168,000/year

Proposed control: privileged access management + tested incident
response plan, moving the relevant CAF outcomes to "achieved",
estimated to cut ARO to 3%/year
  ALE_after = £2.1m × 0.03 = £63,000/year

Annual cost of the control (tooling + process + testing) = £45,000

Value of the control = (168,000 − 63,000) − 45,000 = £60,000/year
  net positive — fund it. The arithmetic also shows the control
  would still be worth funding at nearly triple the cost, which is
  the kind of sensitivity check that should accompany any ALE figure
  built on estimated probabilities.
```

## 搭软件工程个关联

ALE 公式里厢大部分杠杆握勒工程师手里：访问控制设计、依赖搭补丁卫生、日志搭检测覆盖、事件响应工具，才直接拨动 ARO 一项，所以 CAF 评估读起来既像政策审计，也像技术架构评审。搿就是最尖锐个[技术债是公共价值个侵蚀](../技术债务是公共价值个侵蚀/)——勿打补丁、勿监控、访问控制差个系统是债务，伊个利息是尾部风险，而勿是稳定个拖累——而且应该搭[政府 IT 个总拥有成本](../政府-it-里个总拥有成本/)对账，免得安全开支被当作搭系统真实运行成本分开个东西。伊也直接输入《Green Book》下个[物有所值](../物有所值/)评估：风险调整后个成本是任何方案评估“成本”一边个一部分，勿是最后补上去个事后想法。

## 容易踏个坑

- **拿 CAF 自评当成安全本身**：做完个评估描述个是安全态势，勿会创造出一个安全态势——价值勒达成个成果里厢，勿勒文件里厢。
- **勿作调整就拿全球平均泄露成本当本地估算**：IBM 个数字是大而杂个样本个平均值；一个小地方政府现实个单次损失预期，难得搭一个国家级政府部门一样。
- **勒投资决策里厢忽视尾部风险个心理**：年概率低，安全开支就容易无限期拖下去，一直拖到出事个搿一年——像算例里厢搿样，拿 ALE 计算对一个范围个 ARO 做敏感性测试，可以对付搿个问题。
- **只算 IBM 式个泄露成本，勿算信任成本**：一次泄露压低了市民使用数字渠道个意愿，会拿[渠道转移节省](../渠道转移节省/)个论证侵蚀好几年，搿笔成本难得被计入泄露成本估算。

## 资料来源

- National Cyber Security Centre, Cyber Assessment Framework. <https://www.ncsc.gov.uk/collection/caf>
- IBM, Cost of a Data Breach Report. <https://www.ibm.com/reports/data-breach>
- GOV.UK Service Manual, service standard, point 9: create a secure service which protects users' privacy. <https://www.gov.uk/service-manual/service-standard/point-9-create-a-secure-service>
