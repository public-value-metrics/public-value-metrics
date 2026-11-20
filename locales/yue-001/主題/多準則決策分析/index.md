# 多準則決策分析

多準則決策分析(Multi-Criteria Decision Analysis，MCDA)會按多項各自加權嘅準則，同時為不同方案評分同比較，得出排名，而唔使將每項準則硬塞入同一個貨幣或者自然單位尺度。當真正重要嘅成果無法化約為單一數字時，MCDA 就係適用嘅評估方法。

## 點解重要

Green Book 明確認可 MCDA(其 Box 2 個案研究附錄同 Annex A 都有直接討論)，適用於效益「真正不可通約」(genuinely incommensurable)嘅評估——即係如果透過[社會成本效益分析](../社會成本效益分析/)將一切換算成金錢，或者透過[成本效益分析](../政府嘅成本效益分析/)換算成單一成果，只會扭曲決策而唔係令決策更清晰(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>)。例如為新監獄選址，就要喺資本成本、社區影響、交通連接、環境影響同員工招聘難易之間取捨——呢啲準則冇共同單位，如果硬要統一單位(通常係金錢)，就等於將「環境影響同成本邊樣更重要」呢類價值判斷，偷偷包裝成客觀算術。

MCDA 嘅坦白亦係佢最大嘅弱點：因為權重係由主持評估嘅人(或者一個小組)訂定，所以方法嘅公信力，全靠權重訂定過程。Green Book 指引清楚指出，準則同權重必須喺為方案評分*之前*協定並公佈，正正係為咗防止評審人員由心儀方案倒推出可以支持佢嘅權重。

## 數學原理

```
For each option i and criterion j:
  Score_ij   = the option's performance against that criterion (often 0-100
               or 1-10, from evidence, expert judgement, or stakeholder scoring)
  Weight_j   = relative importance of criterion j, weights sum to 1 (or 100)

Weighted score of option i = Σ_j (Score_ij × Weight_j)

Procedure:
1. Agree the criteria set and weights BEFORE scoring any option (swing
   weighting or pairwise comparison, e.g. AHP, are common elicitation methods).
2. Score every option against every criterion on a common scale, from
   evidence where possible.
3. Compute weighted totals; rank options.
4. Sensitivity-test the weights: does the ranking survive plausible
   disagreement about how much each criterion should matter?
```

MCDA 唔似 SCBA(社會成本效益分析)嘅淨現值，得出一個站得住腳嘅絕對價值——佢只會得出一個以協定權重為條件嘅排名。如果決策本質上係要喺不可通約嘅事物之間取捨，呢點係優點；但如果用嚟迴避其實可以做到嘅貨幣化工作，就變成缺點。

## 實例演算

**地方政府**：一個議會為新嘅家居廢物回收中心揀址，用四項準則為三個選址評分，權重喺任何實地視察之前，已經由跨部門小組訂定：

```
Criteria (weight):        Capital cost (30%)  Transport access (25%)
                           Community impact (25%)  Environmental impact (20%)

Site scores (0-100, higher = better):
Site A: cost 80, access 60, community 40, environment 70
Site B: cost 60, access 90, community 70, environment 50
Site C: cost 90, access 50, community 80, environment 60

Weighted totals:
Site A = 80(.30) + 60(.25) + 40(.25) + 70(.20) = 24+15+10+14 = 63
Site B = 60(.30) + 90(.25) + 70(.25) + 50(.20) = 18+22.5+17.5+10 = 68
Site C = 90(.30) + 50(.25) + 80(.25) + 60(.20) = 27+12.5+20+12 = 71.5
```

選址 C 排名最高。喺敏感度分析中，將社區影響嘅權重由 25% 提高到 35%(由資本成本拎走 10 個百分點)，選址 C 嘅總分變成 71.5 − 3 + 8 = 76.5，選址 B 變成 68 − 6 + 7 = 69——選址 C 依然領先，所以排名對於權重上合理嘅分歧具穩健性，而呢個正正係 Green Book 期望見到匯報嘅檢驗。

**慈善機構**：一個撥款基金會要喺債務諮詢服務、食物銀行網絡同理財教育計劃之間揀選資助對象，佢哋用 MCDA 而唔用 SROI(見[社會投資回報](../社會投資回報/))，正正因為受託人對於應該側重危機援助定預防，真誠地有分歧——MCDA 令佢哋可以就分歧嘅*形態*(一個權重範圍)達成共識，而唔使假裝單一個 SROI 比率就能解決問題。

## 與軟件工程嘅關係

當準則真正互相衝突時，MCDA 就係揀供應商同系統架構嘅天然工具——例如喺雲端託管同自建機房嘅個案管理系統之間揀選，要權衡成本、數據主權風險、無障礙程度同交付速度，呢啲唔可以化約為一個數字。工程主管應該堅持喺為方案評分之前先訂定權重，正如 Green Book 所要求，因為如果睇完候選名單先做加權，結果總會偏向房內本來已經屬意嘅方案。MCDA 嘅常見應用可參閱[政府自建與外購](../政府自行開發定外購/)；另一個相關、但係用於決策之後而非決策之前嘅結構化評分工具，可參閱[公共價值記分卡](../公共價值記分卡/)。

## 常見陷阱

- **睇完方案先訂權重。** 呢個係 MCDA 最常見被操弄嘅方式，不論係有意定無意；評分之前就要公佈權重，並記錄係邊個訂定。
- **將加權總分當作硬數字。** 71.5 對 68 嘅差距，除非敏感度分析確認排名穩定，否則在統計上並無意義；應該匯報範圍，而唔係假精確。
- **用 MCDA 逃避其實可行嘅貨幣化。** 如果大部分準則都可以可信地定價，卻預設用 MCDA 而唔用[SCBA](../社會成本效益分析/)，就浪費咗評估本可運用嘅資訊。
- **由單一強勢持份者獨自訂定所有權重。** Green Book 嘅良好做法，係由具代表性嘅小組去得出權重，而唔係由主辦總監一人說了算，否則評估只會重新推導出該人本來已經想要嘅結果。

## 資料來源

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Annex A
  (multi-criteria decision analysis) and Box 2 case studies.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Department for Communities and Local Government. "Multi-criteria analysis: a manual." 2009.
  <https://www.gov.uk/government/publications/multi-criteria-analysis-a-manual>
- Belton V, Stewart TJ. "Multiple Criteria Decision Analysis: An Integrated Approach." Kluwer,
  2002.
