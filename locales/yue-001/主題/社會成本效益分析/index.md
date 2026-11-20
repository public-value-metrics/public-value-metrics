# 社會成本效益分析(SCBA)

社會成本效益分析將一項政策或計劃嘅所有成本同效益——不論有冇市場——轉換成共同嘅貨幣單位，將未來現金流貼現到現值，再互相抵銷，得出一個單一數字：呢項建議令社會變得更好嗎？好咗幾多？

## 點解重要

SCBA 係 [Green Book 評估](../green-book-項目評估/)經濟論證部分嘅預設定量方法：HM Treasury(英國財政部)嘅指引要求，只要效益可以可信地貨幣化，建議就必須顯示正嘅淨現值社會價值(net present social value，NPSV)，並以支付意願(willingness-to-pay)作為非市場貨品嘅基本估值原則(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>，Chapter 5)。佢強制執行嘅紀律係：「社會」成本效益分析同私營部門投資評估並唔係同一回事——必須包括落喺並非交易一方嘅第三方身上嘅成本同效益(外部性)，必須使用[社會貼現率](../社會貼現率/)而唔係商業資金成本，並且喺一磅對較貧窮家庭比對較富裕家庭更重要嘅情況下，應用[分配權重](../分配權重/)。

SCBA 嘅弱點正正喺批評者預期嘅地方：冇市場對應物嘅貨品——乾淨空氣、社會凝聚力、挽救一條生命嘅價值——必須用[陳述偏好](../陳述偏好估值/)或者[顯示偏好](../顯示偏好估值/)方法貨幣化，或者要建構[影子價格](../影子價格/)。當貨幣化係有爭議而唔只係困難，Green Book 本身建議退而採用[成本效能分析](../政府嘅成本效益分析/)或者[多準則決策分析](../多準則決策分析/)，而唔係硬擠出一個冇人相信嘅數字。

## 數學原理

```
NPSV = Σ [t=0 to T] (Benefit_t − Cost_t) / (1 + r)^t

where:
  Benefit_t = all monetized benefits in year t, including non-market
              goods valued via stated/revealed preference or shadow price
  Cost_t    = all monetized costs in year t, including opportunity cost
              of resources (see ../opportunity-cost-in-public-spending/)
  r         = social discount rate (HM Treasury sets 3.5% declining to
              lower rates beyond year 30, per Green Book Annex A)
  T         = appraisal period

Benefit-cost ratio (BCR) = Σ PV(Benefits) / Σ PV(Costs)
```

BCR 高於 1(或者 NPSV 高於零)代表有淨社會價值。Green Book 嘅物有所值分類(用於交通同基建評估)為 BCR 範圍訂定標籤：低於 1.0 係低劣物有所值，1.0–1.5 係低，1.5–2.0 係中，2.0–4.0 係高，高於 4.0 係非常高。敏感度分析——喺悲觀同樂觀假設下重新計算 NPSV——係強制性而非可選，因為貨幣化嘅非市場效益帶有好闊嘅不確定範圍。

## 實例演算

**地方政府**：一個市議會評估一項 £3m 嘅新單車同行人網絡投資，評估期 20 年，貼現率 3.5%。

```
Costs: £3m capital in year 0, £50,000/year maintenance (years 1-20)
PV(maintenance) ≈ £50,000 × 14.2 (20-year annuity factor at 3.5%) ≈ £710,000
Total PV(costs) ≈ £3.71m

Benefits (all monetized via published DfT/WHO valuation tools):
  Health benefit from increased physical activity: £180,000/year
  Absenteeism reduction: £40,000/year
  Decongestion (fewer car trips): £60,000/year
  Total benefit stream: £280,000/year
PV(benefits) ≈ £280,000 × 14.2 ≈ £3.98m

NPSV = £3.98m − £3.71m = +£0.27m
BCR = 3.98 / 3.71 = 1.07 → "low" value for money
```

呢個計劃剛剛過關；如果將健康效益估算降低 20%(反映體能活動估值嘅真實不確定性)做敏感度測試，BCR 就會跌到 1.0 以下，所以 Green Book 要求敏感度表要同頭條數字一齊公布，而唔係只公布中位估算。

**慈善機構**：一個每年成本 £500,000 嘅嬰兒死亡預防計劃，用統計生命價值(value of a statistical life，VSL)評估——VSL 係影子價格，而非可觀察嘅市場價格——大約 £2.1m(HM Treasury 2023 年更新嘅數字，本身源自陳述偏好研究)。每年避免一宗嬰兒死亡，對比 £500,000 成本，BCR 為 4.2，輕易屬於「非常高」物有所值——但整個結果都建基於 VSL 數字，所以任何使用 VSL 嘅 SCBA，都必須將佢作為假設而非事實披露。

## 與軟件工程嘅關係

SCBA 係政府軟件平台同基礎設施投資決策嘅自然框架——例如比較共用身份平台同各部門自行開發嘅單點方案，就需要將減少重複註冊成本、減少欺詐同更快提供服務等效益貨幣化，而呢啲效益本身冇市場價格。建設底層服務嘅工程師，應該預期計劃主管會要求提供呢項分析嘅輸入：交易單位成本(見[每宗交易成本](../每宗交易成本/))、預期交易量，以及服務降級／停機成本。最值得引入嘅紀律係：將未來效益貼現，明確指出反事實基線(見[反事實分析](../反事實分析/))，並且永遠唔好只提供單一點估算而唔附上敏感度範圍。

## 常見陷阱

- **重複計算效益。** 將「節省時間」同「由該段時間所帶來嘅生產力」計作獨立效益項目，會誇大論證；節省時間本身就係效益，除非有獨立證據，否則其後嘅用途唔係額外效益。
- **遺漏被挪移嘅成本。** 將擠塞由一條路轉移到另一條路，或者將欺詐由一個渠道轉移到另一個渠道嘅計劃，並未創造頭條 NPSV 所暗示嘅淨效益——見[挪移效應與歸因](../挪移效應與歸因/)。
- **使用私人貼現率。** 用商業資金成本(例如 8–10%)而唔係社會貼現率，會有系統地低估健康同環境收益等長遠公共效益——見[社會貼現率](../社會貼現率/)。
- **將無爭議嘅部分貨幣化，卻對有爭議嘅部分敷衍了事。** 如果一項建議嘅三分之二效益係有信心貨幣化嘅效率節省，三分之一係估值不穩嘅福祉收益，頭條 NPSV 就悄悄將硬數字同軟數字混合；應該分開報告。

## 資料來源

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Chapter 5.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury. "Green Book supplementary guidance: value of a statistical life." 2023.
  <https://www.gov.uk/government/publications/green-book-supplementary-guidance-value-of-a-statistical-life>
- Department for Transport. "TAG unit A1.1: cost-benefit analysis." Transport Analysis Guidance.
  <https://www.gov.uk/guidance/transport-analysis-guidance-tag>
