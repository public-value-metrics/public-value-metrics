# 公共服务生产率

公共服务生产率衡量公共开支拿投入（人手、资本、商品搭服务）转化成经过质量调整个产出个效率，针对个是卫生、教育、警务、社会照护搿种呒没市场价格、因而呒没收入数字可以拿来除成本个服务。英国国家统计局（ONS）从 2000 年代中期起一直发布搿个序列，伊是回答“政府拿钞票转化成公共服务个本事是变好还是变坏”搿个问题，方法上最成熟个国家级尝试。

## 为啥重要

勒市场里厢，生产率是（产出价值）/（投入成本），产出价值看得见，因为有人付钞票。一例髋关节置换、一个学位、一次警察巡逻呒没售价，所以天真个办法只能测量*投入*（花脱多少）——搿就诱使评论者拿公共开支上升自动看成坏事，因为投入增加而标题活动量勿变，看起来就像生产率下降。ONS 勒伊个公共服务生产率《Sources and Methods》出版物里厢规定个方法，解决办法是用活动量（做个手术、教个学生、侦查个案件）构造一个*产出*指数，再对搿个产出指数做*质量调整*——卫生方面纳入存活率搭候诊辰光；教育方面纳入学业成绩；警务方面纳入结案之类个成果——这样一项服务，做个手术数量一样，但是存活率更好，就记作更有生产率，而勿单单是更贵。ONS 历次发布反复出现个标题结论，对整个行业是发人深省个：英国公共服务生产率勒新冠疫情期间大幅下降，到 ONS 自己 2020 年代中期个发布，医疗等好几个细分行业还是勿曾恢复到 2019 年个水平，虽然开支勒上升——搿个缺口拿“更多经费”搭“更高生产率”重新定位成两个完全勿同个问题。

## 数学

```
Output index (volume) = Σ (activity_i × relative unit cost weight_i), base-year weighted
                          across all service activities (e.g. hip ops, cataract ops,
                          GP consultations), analogous to a Laspeyres/Paasche volume index

Quality adjustment    = output index × quality adjustment factor
                          (e.g. incorporating a change in survival rates, waiting times,
                          attainment, or reoffending as a multiplier on raw volume)

Input index           = Σ (labour hours × labour cost weight) + (goods/services cost,
                          deflated) + (capital consumption)

Total factor productivity growth = % change in quality-adjusted output index
                                    − % change in input index
```

## 实例演算

**示意性个 NHS 急症部门生产率计算**（结构依照 ONS 方法）：

```
Year 1: output volume index = 100.0 (base year), input index = 100.0
        → productivity index = 100.0

Year 2: activity volume rises 3.0% (more operations, more appointments)
        but average waiting time worsens, applying a quality-adjustment
        discount of −1.0%
        Quality-adjusted output index = 100 × 1.030 × 0.990 = 101.97

        Inputs rise: staff numbers +4.0%, other costs (deflated) +1.5%,
        weighted input index = 100 × 1.032 = 103.2

Productivity growth = (101.97 / 100 − 1) − (103.2 / 100 − 1)
                     = 1.97% − 3.2% = −1.23 percentage points

Interpretation: activity rose, but inputs rose faster and quality fell
slightly, so productivity — output per unit of input — declined even
though "more care was delivered."
```

搿恰恰就是 ONS 发布反复汇报个 NHS 部分领域疫情后个模式：一旦拿质量调整搭投入增长都算进去，开支上升、原始活动量上升，搭测得个生产率下降同时存在。

## 搭软件工程个关联

公共服务生产率是工程生产率争论（交付个故事点对[DORA 指标](../公共价值个-dora-指标/)对[流动指标](../政府交付里个流动指标/)）勒人口层面个对应物：呒没质量调整个原始吞吐量，勒医院里厢就像“交付个代码行数”勒软件团队里厢一样误导人。为各部门做绩效数据流水线个团队，应该拿质量调整当作一等公民、带版本个转换阶段，而勿是脚注——因为 ONS 自身个公信力，就建立勒搿个调整透明、可重现、随着更好个质量数据到来而修订上头（质量底层数据——比如存活率——定稿之后，ONS 会修订过去年份个生产率估计，所以任何消费搿些统计数字个下游系统，都要能处理追溯修订，而勿单单追加新个期间）。伊也直接搭[总拥有成本](../政府-it-里个总拥有成本/)搭[公共部门个 AI 生产率](../公共部门个-ai-生产力/)相交：一个系统倘使增加了原始活动量，却勿能改善或者维持质量，照 ONS 自家个定义，就勿算生产率提升。

## 容易踏个坑

- **拿投入增长当生产率增长**：更多开支资助更多人手，带来个是更多*活动*，而勿是更高*生产率*，除非单位投入个产出也上升——两者勒政治评论里常常被混为一谈。
- **完全忽视质量调整**：只由原始活动计数构成个产出指数，会因为多做价值更低或者质量更差个事体而显示“生产率增益”；ONS 个质量调整就是专门为了抓搿个。
- **勿匹配方法版本就跨细分行业比较生产率指数**：卫生、教育搭警务个生产率各自由勿同个活动搭质量数据来源、勿同个修订周期构建——天真地跨行业比较，比个是勿兼容个工具。
- **拿单一年份个生产率下降当成永久趋势**：疫情期间搭疫情后个生产率数字，因为质量数据（比如候诊名单、择期手术恢复）本身变化，显示出明显个逐年波动；ONS 一贯提醒勿要过度解读单年变化。

## 资料来源

- Office for National Statistics, "Public Service Productivity" series.
  <https://www.ons.gov.uk/economy/economicoutputandproductivity/publicservicesproductivity>
- Office for National Statistics, "Public Service Productivity: Total, UK — Sources and Methods."
  <https://www.ons.gov.uk/economy/economicoutputandproductivity/publicservicesproductivity>
