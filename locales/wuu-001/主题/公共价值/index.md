# 公共价值

公共价值是政府或者社会部门机构为市民集体创造个价值——勿单单是伊产出个东西或者花脱个钞票，而是社会有勿有因为搿个机构存在、因为伊搿样行动而变得更好。Mark Moore 1995 年个“战略三角”是标准检验：一项公共举措只有同时满足三个条件才站得住脚——*合法且有支持*、*实质有价值*、*运营上交付得了*。

## 为啥重要

私营部门个价值比较容易定价：收入减成本，由可以拍拍屁股走人个顾客裁决。公共价值呒没对应个市场信号。监狱服务、税务机关搭儿童保护团队，生产个才是市民勿能简单拒绝购买个东西，而“客户”（纳税人、罪犯、小囡）往往搭批准预算个政治委托人勿是同一个人。Moore 个《Creating Public Value: Strategic Management in Government》（哈佛大学出版社，1995）提供了缺失个纪律：一个管理者应该能讲清爽（1）伊个举措创造啥公共价值，（2）伊追求搿个价值个合法性搭经费来自哪里——部长、议会、授权、拨款——（3）伊个机构凭手头个人、技术搭流程，能勿能真正交付。一个项目只有三角里厢一条或者两条腿得分高，就还勿能算站得住脚，勿管用意多好。

搿个勒实践里厢要紧，因为大多数公共部门软件个失败勿是技术个失败。一个系统可以技术上优秀、运营上交付得了，却照样失败，因为合法化环境里厢个人——部长、监督委员会、公众——其实呒没人要伊所优化个东西。英国公共行政文献里厢，Universal Credit 数字服务搭 NHS National Programme for IT 才被当作案例，讲个是运营搭合法性两条腿同使命一条腿脱节。

## 数学

公共价值是个框架，勿是公式，但是伊拿原本模糊个投资论证整理成三个可检验个问题：

```
Strategic triangle test — proceed only if all three hold:

1. Legitimacy and support: Who has authorized this, and does the authorizing
   environment (legislature, minister, council, board, public opinion) still
   back it as resources are committed?

2. Public value: What specific, describable good does this produce for
   citizens or society — safety, health, opportunity, trust, fairness —
   and for whom?

3. Operational capacity: Can the organization actually deliver it with
   current staff, technology, partners, and legal authority — or a
   credible plan to acquire them?
```

一项薄弱个举措通常至少有一条腿站勿住：技术上交付得了但是呒没授权（一个呒没人签字个数据共享试点）；受欢迎但是交付勿了（承诺个数字服务呒没工程产能）；或者有授权、交付得了，但是价值空心（一块呒没人用个仪表盘）。

## 实例演算

**地方政府**：一个市议会数字团队提议做一个 AI 工具，给住房福利申请分诊。

- *合法性*：议会内阁已经批准了数字优先战略，但是负责社会保障个民选议员，并勿曾专门签批自动化决策——搿是缺口，勿是绿灯。
- *公共价值*：处理更快（声称个效益：10 天变 2 天）只有勒申请人勿被错误拒绝个前提下才是真个价值；价值主张必须包含准确率，勿单单是速度。
- *运营能力*：议会只有一个数据科学家，呒没模型监控流程，所以声称个 2 天周转，按所讲个错误率，目前交付勿了。

三条腿里厢两条站勿住。Moore 个框架讲：照原来个范围勿要推进——先拿到自动化决策个明确授权，建好监控能力，勿然商业方案里厢声称个“公共价值”就是虚构个。

**中央政府**：一个税务机关个在线申报服务，合法性强（法定授权），运营能力强（现有团队交付靠谱），但是假使因为数字排斥人群——参见[数字包容](../数字包容/)——被推到伊拉用勿了个渠道，导致使用率低，公共价值就弱。三角暴露了一块只管交付个仪表盘会藏起来个东西。

## 搭软件工程个关联

公共价值是整个仓库所属个统领概念：[物有所值](../物有所值/)给出经济性/效率/效果个检验，看资源有勿有用好；[公共开支里厢个机会成本](../公共开支里厢个机会成本/)给搿笔钞票本来还能做个其他事体定价；[增量搭无谓损失](../额外性搭死重/)、[替代效应搭归因](../挤出效应搭归因/)搭[反事实分析](../反事实分析/)一道检验声称个价值是真个，勿是假设出来个。对工程师来讲，战略三角是任何公共部门产品决策个有用个事前验尸：

- 界定一个功能个范围之前，问问是啥人授权个，搿个授权还有效伐——为一位后来已经调走个部长做个功能，可能已经悄悄丢脱了合法性一条腿。
- 拿“我们做得出来伐”搭“我们该勿该做”当作真正分开个两个问题；工程产能只回答三角里个第三条腿。
- 公共服务个产品需求文档应该明确写出公共价值主张，而勿单单是用户故事，因为用户价值搭公共价值并勿总归是一回事（参见[成果搭产出](../成果搭产出/)）。

## 容易踏个坑

- **拿运营能力当作足够个理由。** “我们做得出来”只回答三角个一条腿；交付能力强个团队，经常交付出呒没人授权要个、也呒没创造任何讲得出来个公共利益个东西。
- **拿合法性搭合法律混为一谈。** 一个项目可以是合法个，但是依然缺少撑过艰难交付阶段所需要个政治搭公众支持；法律上个掩护勿等于授权。
- **以为公共价值就是委托部门讲是啥就是啥。** Moore 个模型要求价值主张要能对照市民个实际利益来检验，而勿单单是出资方个断言——勿然框架就退化成自我认证。

## 资料来源

- Moore MH. *Creating Public Value: Strategic Management in Government*. Harvard University Press,
  1995.
- Moore MH. *Recognizing Public Value*. Harvard University Press, 2013.
- Benington J, Moore MH (eds). *Public Value: Theory and Practice*. Palgrave Macmillan, 2011.
- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation" (2022).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
