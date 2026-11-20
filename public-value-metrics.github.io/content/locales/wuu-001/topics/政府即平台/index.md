# 政府即平台（GaaP）

政府即平台（Government as a Platform）是一种策略：拿共享、可复用个组件——通知服务、支付服务、身份服务——集中地只做一趟，让几百项政府服务去使用伊拉，而勿是各家各做各个。伊拿公共数字基础设施重新理解成一个平台经济学问题：价值勿勒任何一次单独个集成，而勒于*下一个*采用个团队个边际成本趋近于零。

## 为啥重要

GDS 勒 2015 年个《Government as a Platform》出版物里正式提出搿个策略，认为政府一直勒一项服务接一项服务里，各自单独建设同样个能力——收款、用户通知、身份验证、地址查询——每一趟侪背着自家个采购、安全评估搭持续支持个负担。替代方案是少数几个共享平台，按高标准做一趟，到处复用：GOV.UK Notify 用来发电子邮件、短信搭信件，GOV.UK Pay 用来收线上付款，GOV.UK One Login（前身是 GOV.UK Verify 身份项目）用来做身份验证。搿些平台达到个规模是策略有效个最清楚个证据：GOV.UK Pay 已经处理了超过 £10 billion 个交易，涉及大概 1,800 项单独个服务——处理头一个 £1 billion 花了大概四年，现在处理同样个数额只要大概五个月——而 GOV.UK Notify 已经代表超过 1,500 个政府机构发送了 90 多亿条消息。每一项采用伊拉个服务，侪免了自家建设、保障搭维护一套支付网关或者消息管道。

## 数学

```
Build cost per service (no platform) = N services × cost to build,
  secure-assess, and run one payment/notification/identity system

Platform cost = fixed platform build cost
              + marginal cost per adopting service (integration,
              configuration, ongoing platform-team support)

Reuse breaks even once:
  platform build cost < N × (per-service build cost − marginal
  integration cost)

For a mature platform, marginal cost per additional adopter approaches
the transaction/message fee alone — the fixed cost is amortized across
the whole government estate, not one department's budget, which is
why GaaP components are usually funded centrally rather than charged
at full cost-recovery to early adopters.
```

## 实例演算

**地方政府采用 GOV.UK Pay，而勿是自家建一个支付网关**：

```
Build-your-own estimate:
  PCI-DSS compliance work + integration + ongoing maintenance
  ≈ £85,000 build + £22,000/year maintenance

GOV.UK Pay adoption:
  Integration effort ≈ £12,000 (developer time)
  Transaction fees: government-to-citizen card payments typically
  charged at a small percentage + fixed fee per transaction, no
  separate PCI-DSS burden carried by the council
  ≈ £12,000 one-off, ongoing cost variable with volume, not fixed

First-year saving ≈ £85,000 − £12,000 = £73,000, before counting the
avoided £22,000/year maintenance and the avoided compliance risk of
holding card data in a council-run system at all — this second
category is the security value covered in
public-sector-cybersecurity-value.
```

拿搿 £73,000 乘上现在大概 1,800 项使用 GOV.UK Pay 个服务，整个政府避免个建设成本总额勒几亿镑个量级——策略个价值真正落勒平台经济学上，而勿是任何一次单独个集成。

## 搭软件工程个关联

政府即平台是对 [政府里个自建还是外购](../政府个自建搭采购/) 个直接论证：一旦存在一个共享、经过评估、运营良好个组件，自家建一个定制个同类，难得是更好个 [物有所值](../物有所值/) 选择，而且几乎按定义就达勿到 [数字服务标准](../数字服务标准/) 第 13 条（"使用并且贡献开放标准、通用组件搭模式"）。伊还改变了 [政府 IT 个总拥有成本](../政府-it-里个总拥有成本/) 个形状：采用平台，是拿一大笔资本搭维护支出，换成一笔小一点、搭使用量挂钩个运营成本，更容易预测，服务下线个辰光也更容易停掉资金。组件个开放复用有个近亲是 [开放数据价值](../开放数据个价值/)——两者侪是拿政府只生产一趟个东西当成共享基础设施，而勿是某个部门个资产。

## 容易踏个坑

- **暗地里重新自建**：团队悄悄自家做支付或者通知集成，因为平台个接入流程比自家做还要慢——搿是治理摩擦问题，勿是技术问题，而且会悄悄侵蚀整个策略所依赖个复用经济性。
- **平台团队个资金投入跟伊创造个价值勿匹配**：价值落勒使用伊个部门，成本却勒平台团队，除非资金集中并且受保护，否则存在长期投入勿足个风险——搿是公地悲剧个一个版本。
- **只用使用量来衡量平台成功**：采用数字（接入个服务数、发送个消息数）是领先指标，勿是价值个证明；真正个检验是上面避免个建设成本搭避免个风险个算术。
- **拿"平台"当成"单体"个同义词**：GaaP 组件成功，是因为每一个只做好一桩事体，接口窄而稳定——拿勿相干个能力捆成一个"平台"，是勒另一个规模上重新制造定制建设个问题。

## 资料来源

- Government Digital Service, Government as a Platform. <https://www.gov.uk/government/publications/government-as-a-platform>
- GOV.UK Notify. <https://www.notifications.service.gov.uk/>
- Government Digital Service blog, "GOV.UK Pay at 10: how it started and how it's going". <https://gds.blog.gov.uk/2026/09/02/gov-uk-pay-at-10-how-it-started-and-how-its-going/>
