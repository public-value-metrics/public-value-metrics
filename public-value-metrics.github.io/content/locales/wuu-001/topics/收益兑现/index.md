# 收益兑现

收益兑现管理(benefits realization management),是一套识别、定基线、跟踪,并且*拿出证据*证明业务案例里承诺个收益勒上线以后真个实现仔个管理方法。勒英国公共投资里,伊嵌勒英国财政部《绿皮书》(Green Book)个五案例模型(Five Case Model)搭基础设施与项目管理局(Infrastructure and Projects Authority)专门个收益管理指南里向;无没伊,“系统帮个案工作人员每件案子节省三十分钟”就永远是一句无人审计个断言。

## 为啥重要

业务案例是承诺,收益兑现是审计。《绿皮书》要求每个支出案例通过五项检验——战略、经济、商业、财务搭管理——而管理案例必须勒*批准之前*就讲清楚收益哪能兑现:指定责任人、收集基线、确定测量日期。基础设施与项目管理局个指南《*Benefits Management: A Guide to Realizing Benefits for Government Major Projects*》(<https://www.gov.uk/government/publications/benefits-management-a-guide-to-realizing-benefits-for-government-major-projects>)之所以存在,是因为 IPA 自己对政府重大项目组合(Government Major Projects Portfolio)个组合报告,一再发现交付信心搭收益兑现是各大项目反复出现个薄弱环节。一个项目可以对照交付里程碑“准时勒预算内”收尾,但是照样勿能兑现当初值得花搿笔钱个收益——IPA 个指南认为搿个区别就是整套方法个全部意义。

## 数学

```
兑现率 = 已兑现收益 / 预测收益   (按每项收益、每个周期)

让伊可以计算个机制:
  基线要勒上线之前收集(否则差值量勿出来)
  每项收益:指定责任人、指标、数据来源、测量计划
  预测勒评估辰光要按乐观偏差调整(《绿皮书》强制要求)
  收益分成现金释放型/产能释放型/定性型,
  分开跟踪、分开报告
```

## 实例演算

**地方政府**:一个数字化规划申请门户个业务案例,承诺每年:减少印刷搭邮寄开支 £300,000(现金)、释放 4,500 个官员工时(产能),以及申请人满意度提升(定性)。上线 12 个月以后:

```
收益              预测       兑现       比率    证据
现金节省          £300,000   £210,000   70%     财务账目对基线年
官员工时          4,500      3,200      71%     辰光动作抽样
满意度            +8pp       +11pp      138%    申请人问卷数据

复盘得出个行动(收益兑现个意义就勒搿搭):
现金缺口追查到两个服务领域还勒例外处理纸质申请
→ 关脱搿条例外通道;
下一个业务案例个乐观偏差修正,根据搿个案例个预测误差,
从 10% 提高到 25%。
```

70% 个兑现率勿算失败——伊是一份知识,让下一次预测校准得更好。如果勿量,搿个案例会永远声称 100%,财务部门也无没依据去质疑。

## 搭软件工程个关联

工程组织经常根据预测收益批准平台搭工具投资,事后几乎勿审计——恰恰就是收益兑现管理要治个毛病。轻量个搬法是:超过重要性门槛个每一份提案,侪要指定收益责任人、基线指标搭固定个复盘日期(一般是上线后六个月),而且以往提案个兑现率,应该拿来打折扣,决定组织对某个团队或者供应商下一次预测信几成。搿样就搭[《绿皮书》评估](../green-book-评估/)接上仔——伊定下仔搿套方法要审计个预测;搿也是广泛报道个一个发现背后个同一个道理:大多数生成式 AI 试点侪无没可测量个回报——参见[公共部门个 AI 生产力](../公共部门个-ai-生产力/)——因为真个有价值回报个试点,几乎无一例外,是从一开始就有一条名字清爽、好跟踪个收益线个。搿还要靠分清楚实际交付个搭实际兑现个——参见[成果搭产出](../成果搭产出/)。

## 容易踏个坑

- **上线前无没基线**:致命、无法补救个遗漏——无没伊,兑现率永远算勿出来,只好断言。
- **收益变孤儿**:一项收益无没指定责任人,就呒没人收集数据,每次组合复盘侪默认报告成“大体正常”。
- **项目组合里重复计算收益**:两个项目侪拿同一批释放出来个个案工作人员产能算作自己个收益——整个组合要维持唯一个收益登记册,才捉得牢搿种事体。
- **兑现表演**:拿容易个定性成绩大张旗鼓地测量搭报告,而现金搭产能搿两条线悄悄勿检查。
- **拿交付当兑现**:项目“准时勒预算内”完成里程碑,讲勿出预测收益到底有无真个发生——IPA 个指南拿搿两样当作两个独立个问题,各有各个证据链。

## 资料来源

- HM Treasury, Green Book and Five Case Model guidance. <https://www.gov.uk/government/collections/the-green-book-and-accompanying-guidance-and-documents>
- Infrastructure and Projects Authority, *Benefits Management: A Guide to Realizing Benefits for Government Major Projects*. <https://www.gov.uk/government/publications/benefits-management-a-guide-to-realizing-benefits-for-government-major-projects>
- Infrastructure and Projects Authority, Annual Report on the Government Major Projects Portfolio. <https://www.gov.uk/government/collections/infrastructure-and-projects-authority-annual-report>
