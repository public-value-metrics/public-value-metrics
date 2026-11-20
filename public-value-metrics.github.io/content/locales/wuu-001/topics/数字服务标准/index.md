# 数字服务标准

GOV.UK 服务标准（Service Standard）是中央政府每一项数字服务上线前一定要过个关：一共公布 14 条，每个交付阶段结束辰光，由独立个评审小组来评估。有了搿个机制，"造好个公共服务"就勿再是一句口号，而是变成一个有书面记录个"过"或者"勿过"个决定。搿个标准是 2012 年《政府数字战略》（Government Digital Strategy）里"数字优先"（digital by default）要求个直系后代。

## 为啥重要

服务标准还呒没个辰光，政府 IT 项目失败，往往要等到上线才看得出来，而且难得有人讲得清楚到底是啥人拍个啥板才造成个。2012 年《政府数字战略》要求各部门，拿访问量最大个 25 项面向公众个事务性服务重新设计成"数字优先"，还配了一套合规机制：服务假使勿通过对照服务标准个评估，就勿能够勒 GOV.UK 上线。当时个标准是 26 条，2019 年合并成 18 条，现在生效个是 14 条，分三组——了解用户需求、提供好个服务、用对技术。服务评估是一场实打实个活动：GDS（政府数字服务）或者部门个评估员组成小组，审查证据，向团队提问，然后逐条给出"达标"、"勿达标"之类个结论，公布勒该服务个评估页面上。评估勿过，服务就勿能够从私测（private beta）进入公测（public beta），也勿能够从 beta 阶段转正式上线——搿是真正个关卡，勿是走过场个评审。

## 数学

服务标准是一个框架，勿是公式，但是伊起个作用是一套分阶段把关个决策结构：

```
Discovery  → Alpha assessment  → Beta assessment  → Live assessment
             (not mandatory     (mandatory before   (mandatory before
              for all services,  public beta launch) removing "beta" tag
              but recommended)                       and closing old channel)

Each assessment: evidence + team interview → panel verdict per point
  Met / Partially met / Not met
Overall outcome: Pass / Pass with conditions / Fail (re-assessment required)

Cost of a fail ≈ cost of the next sprint cycle to remediate
              + delay to the [channel-shift-savings](../渠道转移节省/)
                the service was funded to deliver
```

第 10 条（"定义成功个样子，并且公布绩效数据"）就是 [单笔交易成本](../每笔交易成本/) 搭 [服务标准与交易指标](../服务标准搭交易指标/) 个数据来源——标准强制要求个是度量，勿光是服务本身。

## 实例演算

**地方政府个住房申请服务**：一个市政厅团队去做 beta 评估，服务达到 14 条里个 11 条，但是第 5 条（"确保人人都能用搿个服务"）勿达标，因为呒没为上勿了网个申请人设计辅助数字渠道；第 9 条也勿达标，因为个人数据以明文记录勒应用个错误追踪日志里。

```
Direct cost of the fail:
  Re-assessment slot: 6–8 week wait for the next available panel
  Remediation sprint: 2 developers × 3 weeks × £550/day ≈ £34,650
  Assisted-digital channel design: 1 researcher × 2 weeks ≈ £5,000

Delay cost: service was forecast to shift 40% of 18,000/year housing
enquiries from £8.50 phone calls to £0.20 digital transactions
  = 7,200 × (£8.50 − £0.20) = £59,760/year foregone, pro-rated for the
    ~2-month delay ≈ £9,960

Total cost of the failed assessment ≈ £49,610
```

搿套算术个重点勿勒精确度，而勒于：评估勿过是有一个实实在在、算得出来个代价，搿就是为啥搿道关卡有"牙齿"个原因。

## 搭软件工程个关联

对工程师来讲，搿个标准读起来搭政策文件比，更像一份架构搭交付个检查清单：第 11 条（"选对工具搭技术"）搭第 12 条（"新写个源代码要开放"）直接就是工程决策，第 14 条（"运营可靠个服务"）要求个 SLO 搭事故处理流程，搭任何生产系统要个一模一样。伊是搿一组主题个总纲——[单笔交易成本](../每笔交易成本/) 搭 [渠道转移节省](../渠道转移节省/) 是标准想勒财务上保护个东西，[数字包容](../数字包容/) 是第 5 条要保证个东西，[政府即平台](../政府即平台/) 个组件（GOV.UK Notify、Pay、One Login）基本上默认就满足了第 13 条（"使用并且贡献开放标准、通用组件搭模式"）。"选对工具"搿一条勒采购决策里是哪能落实个，也可以参考 [政府里个自建还是外购](../政府个自建搭采购/)。

## 容易踏个坑

- **拿评估当成上线当日个合规打钩**：有些团队勒 beta 评估前一个礼拜才第一趟读搿 14 条，肯定过勿了关；标准本来是要从 discovery 阶段起就影响决策，而勿是事后拿来审计。
- **评估个是原型，勿是服务**：一个漂亮个演示可以过得了评审，但是真正上线、带辅助数字渠道、有事故管理个版本可能就过勿了——评估员本来应该去探搿个落差，但是自我认证个小服务经常跳过搿一步。
- **扩大规模前呒没重新评估**：勒 5% 铺开阶段通过评估个服务，到 100% 辰光未必依旧合规——负载、失败需求（failure demand）搭边缘用户侪会变。
- **拿服务标准搭设计系统搞混淆**：GOV.UK 设计系统个组件能满足部分条款（一致性、无障碍），但是标准还管团队结构、敏捷实践搭数据伦理——一个样式漂亮个服务，照样可能勒第 2、6、9 条上翻车。

## 资料来源

- GOV.UK Service Manual, Service Standard. <https://www.gov.uk/service-manual/service-standard>
- GOV.UK Service Manual, point 14: operate a reliable service. <https://www.gov.uk/service-manual/service-standard/point-14-operate-a-reliable-service>
- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
- GOV.UK Service Manual, service assessments. <https://www.gov.uk/service-manual/service-assessments>
