# 政府交付里个流动指标

流动指标（flow metrics）——利特尔法则（Little's Law）、在制品（work-in-progress，WIP）上限搭流动效率——描述个是工作勒容量有限个系统里流动得有多快。一块冲刺看板（sprint board）就是搿样一个系统；福利申领队列、规划申请登记册、或者签证个案积压，本质上是完全一样个数学，只是换了一身制服。

## 为啥重要

政府个案件量就是排队系统，而排队系统勿管有人测量呒没，侪服从排队规律。法定裁决期限拿搿一点讲得清清爽爽：勒《城乡规划》（Town and Country Planning）制度下，大部分小型规划申请有 8 个礼拜个法定裁决目标，大型申请是 13 个礼拜——一个直接写进法律里个周期时间承诺。内政部（Home Office）个庇护案件积压，被国家审计署（National Audit Office）搭下议院内政事务特别委员会反复审查，是一个有充分记录个公共系统案例：勒相当长一段辰光里，在制品增长得比吞吐量快，使周期时间远远超出任何法定或者服务预期。流动指标拿工程师搭案件管理者摆勒同一套量化语言里，描述个就是搿种失败模式，而勿是让伊停留勒定性个"积压问题"上。

## 数学

```
Little's Law:  WIP = Throughput × Cycle Time
           →   Cycle Time = WIP / Throughput

Flow efficiency = active (touch) time / total cycle time   (Vacanti)

WIP limit effect: for fixed throughput, halving WIP roughly halves
average cycle time (Little's Law rearranged) — the lever available
without adding headcount.
```

同样个数学用勒软件部署流水线、而勿是案件处理上，参见 [公共价值个 DORA 指标](../公共价值个-dora-指标/)。

## 实例演算

**地方政府规划部门**：任何辰光有 400 件申请开着（WIP），团队每礼拜办结 50 件（吞吐量）。

```
Cycle time = WIP / Throughput = 400 / 50 = 8 weeks
```

搿正好落勒小型申请个法定 8 礼拜目标上——一点余地也呒没，意思是进来个需求或者咨询对象个回复辰光稍微有点波动，裁决就会超出法定期限。

**流动效率**：勒搿 8 个礼拜（56 个日历日）里，一件申请通常大概只有 6 个钟头实际个案件工作者处理辰光。

```
Flow efficiency = 6 hours / (56 days × 8 working hours/day)
                = 6 / 448 ≈ 1.3%
```

Vacanti 对软件团队个基准是，典型个流动效率勒 15–20%；政府个案件处理有好几次法定咨询对象个交接搭公众咨询窗口，经常低一个数量级。那 98.7% 个"等待"辰光，才是八个礼拜真正花掉个地方——勿是案件工作者个产能问题。

**在制品上限干预**：拿每个案件工作者手里开着个申请，从勿设上限个 25 件封顶到 15 件（吞吐量勿变），16 个人个团队里 WIP 从 400 降到大概 240：

```
New cycle time = 240 / 50 = 4.8 weeks
```

一次政策改变，而勿是增加人手，就拿周期时间差勿多减半——搭 DORA 式交付团队给冲刺 WIP 封顶辰光拉个是同一根杠杆。

## 搭软件工程个关联

流动指标是交付团队个看板（Kanban board）搭伊拉为之做软件个案件处理一线之间个共同语言：案件工作者个队列搭拉取请求（pull request）队列，侪受利特尔法则支配，而且两个超出周期时间目标个方式一模一样——相对于吞吐量，在制品太多。搿对 [公共项目里个延误成本](../公共项目个延迟成本/) 直接有关：周期时间 × 延误成本，就是任何一刻困勒队列里个镑数；搿对 [服务标准搭交易指标](../服务标准搭交易指标/) 也有关，因为公布出来个周转目标就是一项周期时间承诺，错过个辰光，只有流动指标才能诊断。案件处理系统个软件应该拿 WIP 搭周期时间当成一等个运营指标暴露出来，而勿是埋勒一套呒没人去查询个案件管理系统里。

## 容易踏个坑

- **勿解决真正个瓶颈就加 WIP 上限**：假使约束是外部法定咨询对象个回复辰光，给案件工作者个 WIP 封顶只是拿队列往上游挪，而勿是缩短队列。
- **拿流动效率当成可以去操纵个目标**：催赶那 1.3% 个活跃辰光，几乎勿会改变周期时间；杠杆几乎总是勒等待状态里，意思就是要重新设计流程，而勿是让案件工作者做快点。
- **忽视波动性**：利特尔法则描述个是平均值；需求方差大个案件量，需要缓冲产能，而勿光是更紧个 WIP 上限，勿然就算平均值改善了，波动大个尾部照样会错过法定期限。
- **WIP 计量前后勿一致**：一件案件勒记录系统里"开着"、实际上是勒等第三方而停滞着，依旧算 WIP；拿伊排除掉会让数字好看，但是对市民看得到个现实呒没任何改变。

## 资料来源

- Vacanti D, *Actionable Agile Metrics for Predictability: An Introduction*, Actionable Agile Press, 2015.
- Reinertsen DG, *The Principles of Product Development Flow*, Celeritas Publishing, 2009.
- Ministry of Housing, Communities and Local Government, planning application statutory timescales. <https://www.gov.uk/guidance/making-an-application>
- National Audit Office, reports on Home Office asylum casework and accommodation. <https://www.nao.org.uk/>
