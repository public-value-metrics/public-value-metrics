# 福祉調整生命年(WELLBY)

一個 WELLBY 係指一個人喺一年內，喺標準 0–10 福祉量表上多一分生活滿意度。佢係健康經濟學所用 QALY 嘅結構性對應物——一個可以用嚟比較成果之間毫無共通點嘅干預措施嘅單一單位——但建基於主觀福祉而非臨床健康狀態，並載於 HM Treasury(英國財政部)嘅《Wellbeing guidance for appraisal: supplementary Green Book guidance》(2021)。

## 點解重要

成本效益評估需要一個共同單位，去比較青年會資助、道路安全計劃同心理健康服務，而三者冇共用嘅成果量度。健康經濟學用 QALY 為臨床干預解決咗呢個問題：經質素調整嘅生命年，由 0(死亡)到 1(完全健康)加權。HM Treasury 嘅福祉指引將同一邏輯延伸到非健康公共開支，用 ONS 統一嘅生活滿意度問題(「Overall, how satisfied are you with your life nowadays?」，以 0–10 作答)作為成果階梯，取代健康狀態指數。一個 WELLBY 為 1，意指一個人嘅生活滿意度上升一整分，維持一年(或者同等地，十個人嘅滿意度各上升 0.1 分，維持一年——WELLBY 可以像 QALY 咁喺人口層面加總)。HM Treasury 嘅指引訂出每個 WELLBY 嘅示意貨幣價值(約 £13,000，2019/20 價格)，透過調和主觀福祉數據同其他生命年價值方法推導，令評估人員可以將孤獨感減少、社區凝聚力、綠色空間使用等成果貨幣化——呢啲成果以往用[福祉估值](../福祉估值/)技術只能描述，無法同健康或者安全開支喺共同基礎上比較。

## 數學原理

```
WELLBY = Δ life satisfaction (0–10 scale) × number of years the change persists
        (summed across all people affected)

Monetized wellbeing benefit = WELLBYs generated × value per WELLBY (HMT reference value)

cf. QALY = Δ health-state utility (0–1 scale) × years lived in that state
```

0–10 滿意度量表同 0–1 QALY 效用量表，冇轉換步驟就唔可以互換；HM Treasury 嘅指引討論兩者嘅調和，令例如以 QALY 評估嘅健康干預同以 WELLBY 評估嘅社會干預，喺同一個 [Green Book 評估](../green-book-項目評估/)內，唔會被悄悄重複計算或者無法比較。

## 實例演算

**地方政府孤獨感服務**：一個探訪友伴計劃服務 400 位孤立長者。跟進調查顯示平均生活滿意度由 5.2 升到 6.0(增加 0.8 分)，估計影響持續 2 年後逐漸消退。

```
WELLBYs = 400 people × 0.8 points × 2 years = 640 WELLBYs

Monetized value = 640 × £13,000 = £8,320,000
```

對比每年 £300,000 嘅計劃成本(2 年共 £600,000)，效益成本比約為 8,320,000 / 600,000 ≈ **13.9:1**——呢個數字而家可以同健康計劃嘅每避免一個 QALY 成本，或者交通計劃嘅行程時間節省，並列喺同一個評估表入面。

**慈善機構，較小規模**：一個社區藝術計劃接觸 50 名參加者，量度到 0.3 分嘅滿意度增幅，持續 1 年。

```
WELLBYs = 50 × 0.3 × 1 = 15 WELLBYs
Monetized value = 15 × £13,000 = £195,000
```

## 與軟件工程嘅關係

- 任何已經收集生活滿意度或福祉調查項目嘅面向市民服務(好多地方政府同健康及護理平台都有，跟隨 ONS 四條標準福祉問題)，可以直接由現有數據管道計算 WELLBY，而唔使為每次服務改動委託專門經濟評估。
- WELLBY 為開發[社會價值法](../社會價值法/)報告或[社會投資回報](../社會投資回報/)工具嘅工程團隊，提供一個全國標準化、獲 HM Treasury 認可嘅分母，避免出現無法跨合約或供應商比較嘅專屬「影響評分」大量湧現。
- 因為 WELLBY 可以跨人口同時間加總，佢哋可以順暢地組合成[成果導向問責](../成果為本問責制/)系統所用嘅人口層面成果追蹤——服務儀表板可以報告每季累計產生嘅 WELLBY，就好似健康系統報告所獲得嘅 QALY 咁。

## 常見陷阱

- **假設自行匯報嘅滿意度增幅完全歸功於干預**——冇反事實(對照組或者設有控制嘅前後比較設計)，你就無法將 WELLBY 增幅同整體趨勢分開；見[反事實分析](../反事實分析/)。
- **未經調和就將 WELLBY 同 QALY 混合成單一總數**——HM Treasury 嘅指引明確指出，兩者使用唔同量表同唔同底層價值理論；天真地加總會重複計算重疊嘅福利。
- **不加批判地使用參考貨幣價值**——每個 WELLBY 嘅英鎊數字係全國平均估算，帶有真實嘅不確定範圍；HM Treasury 指引建議進行敏感度分析，而唔係將佢視為固定匯率。

## 資料來源

- HM Treasury. "Wellbeing guidance for appraisal: supplementary Green Book guidance." (2021)
  <https://www.gov.uk/government/publications/wellbeing-guidance-for-appraisal-supplementary-green-book-guidance>
- ONS. "Personal well-being user guidance" (the four standard wellbeing questions).
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing>
- HM Treasury. "The Green Book: Central Government Guidance on Appraisal and Evaluation."
