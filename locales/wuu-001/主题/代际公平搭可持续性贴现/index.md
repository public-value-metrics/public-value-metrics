# 代际公平搭可持续性贴现

拿未来个成本搭收益贴现回现值，是公共评估里个标准做法——参见 [社会贴现率](../社会贴现率/)——但是任何一个正个贴现率，复利滚上几十年甚至几百年，就会拿遥远个未来勒今朝个价值里压缩到趋近于零。对后果要到一个世纪或者更久以后才显现个决策——气候变化、核废料、生物多样性丧失、养老金可持续性——搿个数学事实就变成了一个伦理问题：标准个贴现，会让对后代个灾难性伤害，用现值来衡量，看上去几乎勿值得去避免。

## 为啥重要

Ramsey 方程由 Frank Ramsey 勒 1928 年推导出来，拿贴现率分解成两个部分：纯时间偏好（δ，勿管财富多少，阿拉单纯偏好现勒胜过将来个程度）搭财富增长效应（η×g，因为预期后代更富裕，多一镑对伊拉没那么要紧，所以要贴现）。英国 Green Book 个标准长期贴现率就是建立勒搿个方程之上，并且遵循一个*递减*个时间表，而勿是一个固定个比率——搿个设计根源于 Martin Weitzman 关于"伽马贴现"（gamma discounting）个研究，伊表明：当未来个贴现率本身勿确定个辰光，应该应用个确定性等价利率，从数学上讲会随辰光递减，因为往越远处看，低利率情形就越占主导。Nicholas Stern 爵士领导个《气候变化经济学斯特恩报告》（Stern Review，2006）拿搿场伦理辩论又往前推了一步：Stern 认为纯时间偏好应该设勒接近零（伊用个是 δ ≈ 0.1%，只反映文明终结式灾难个极小概率，勿是真正偏好现勒胜过将来），得出个有效贴现率远低于传统 Green Book 个做法，相应地，今朝采取气候行动个理由也大得多。批评者（尤其是 William Nordhaus）认为，Stern 个近零利率伦理上讲得通，但是同实际观察到个储蓄搭投资行为勿一致。搿场分歧勿是技术上个脚注——伊是两位同样严谨个经济学家，对于当代人应该为将来牺牲多少，会得出天差地别个结论个单一最大原因，也是为啥支持长期公共投资评估个软件，必须拿伊个贴现假设暴露出来，而勿是埋勒电子表格个默认值里。

## 数学

```
Ramsey equation:   r = δ + η × g

  r = social discount rate
  δ = pure time preference (rate of impatience, independent of wealth)
  η = elasticity of marginal utility of consumption (diminishing value of
      extra consumption as people get richer)
  g = expected growth rate of per-capita consumption

Green Book declining long-term schedule (approximate, current published bands):
  Years 0–30:    3.5%
  Years 31–75:   3.0%
  Years 76–125:  2.5%
  Years 126–200: 2.0%
  Years 201–300: 1.5%
  Years 301+:    1.0%

Stern Review parameters: δ ≈ 0.1%, η = 1, g ≈ 1.3%  → r ≈ 1.4%
```

## 实例演算

**一个世纪以后避免个 £1 伤害，今朝个价值**，三种贴现制度下：

```
Flat Green Book short-term rate (3.5%, held constant for 100 years):
  PV = 1 / (1.035)^100 ≈ 1 / 31.19 ≈ £0.032   (3.2 pence)

Green Book declining schedule (3.5% for yrs 1–30, 3.0% for yrs 31–75,
2.5% for yrs 76–100):
  factor(1–30)  = 1.035^30  ≈ 2.807
  factor(31–75) = 1.03^45   ≈ 3.782
  factor(76–100)= 1.025^25  ≈ 1.854
  total factor ≈ 2.807 × 3.782 × 1.854 ≈ 19.68
  PV = 1 / 19.68 ≈ £0.051   (5.1 pence)

Stern-style near-zero pure time preference (r ≈ 1.4% flat):
  PV = 1 / (1.014)^100 ≈ 1 / 3.997 ≈ £0.250   (25.0 pence)
```

同样一百年以后避免个 £1 伤害，今朝个价值是 3.2 便士、5.1 便士还是 25 便士，纯粹看用啥个贴现惯例——差勿多八倍个区间，决定一个前期成本高、回报要等一个世纪以后个气候减缓项目，到底能勿能过净现值为正个门槛。搿就是本主题核心警告个机理：勒任何有意义个正个固定利率下，足够遥远个未来伤害，勒算术上就被评估抹掉了，勿管伊实际有多严重。

## 搭软件工程个关联

- 任何长期评估或者商业案例工具（基础设施、气候适应、养老金建模），侪应该实现 Green Book 个*递减*时间表，而勿是单一个固定利率——固定利率个默认值，会悄悄埋进一个比英国政府现行指引强烈得多个反未来偏见。
- 评估软件里，贴现率搭时间跨度应该永远是可见、可审计个参数，并且明确展示计算结果对伊拉个敏感性（就像上面个实例演算那样）——拿利率埋勒配置文件里，恰恰招致 Stern-Nordhaus 辩论所警告个"隐藏个伦理选择"；搿搭 [自然资本核算](../自然资本核算/) 里提出个透明度要点是一对，也是 [社会贴现率](../社会贴现率/) 主题个底层逻辑。
- 项目个收益明确是代际个（防洪、自然资本修复、长期数字基础设施）个辰光，[社会成本收益分析](../社会成本效益分析/) 应该勒至少两种贴现假设下（Green Book 标准，加一个低利率敏感性情形）报告结果，而勿是单一个点估计，让决策者看到光是贴现率个选择就会让答案变动多少。

## 容易踏个坑

- **只给出单一个贴现净现值，勿带敏感性区间**——鉴于对长期项目来讲，光是贴现率就会大幅改变答案，单一利率个净现值会实质性地夸大精确度；一定要报告一个至少涵盖 Green Book 标准搭一个低利率情形个区间。
- **拿短期固定利率（3.5%）用到跨越几个世纪个评估上**——Green Book 自家个指引规定了递减个时间表，恰恰是因为固定利率被判定勿适合超过大概 30 年个辰光；照样用，会低估长期成本。
- **拿 δ（纯时间偏好）当成纯粹个技术参数**——Stern 个近零值搭 Green Book 较高个隐含值，侪只能作为关于现勒应该对将来负多少分量个伦理立场来辩护，勿是实证上"正确"或者"错误"个数字；软件应该拿搿个假设摆出来让人看到，而勿是拿一个数字当成客观上正确个。

## 资料来源

- Stern N. "The Economics of Climate Change: The Stern Review." Cambridge University Press, 2006.
- Ramsey FP. "A Mathematical Theory of Saving." The Economic Journal, 1928.
- Weitzman ML. "Gamma Discounting." American Economic Review, 2001.
- HM Treasury. "The Green Book: Central Government Guidance on Appraisal and Evaluation" (Annex 6,
  discount rate schedule).
- Nordhaus WD. "A Review of the Stern Review on the Economics of Climate Change." Journal of
  Economic Literature, 2007.
