# 陳述偏好估值

陳述偏好方法透過直接問人，佢哋願意為某樣非市場貨品支付幾多，或者願意接受幾多補償去放棄佢，嚟估算呢樣貨品嘅價值，通常係透過描述一個假設情境嘅結構化問卷進行。條件估值法(contingent valuation)係呢個家族中最著名嘅技術。

## 點解重要

Green Book Annex 2(關於非市場影響估值嘅補充指引)認可用陳述偏好方法，處理完全冇可觀察市場交易可以推斷價值嘅貨品——空氣質素、生物多樣性、防洪，以及某個人可能永遠唔會去嘅景觀嘅存在價值(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>)。Defra(英國環境、食品及鄉郊事務部)專門為環境評估發表咗自己嘅陳述偏好指引，因為好多環境價值(棲息地保育、水質)完全冇替代市場，不同於例如噪音，噪音至少同可觀察嘅樓價相關(見[顯示偏好估值](../顯示偏好估值/))。

陳述偏好嘅核心吸引力——佢可以為任何東西估值，包括從未有人交易過嘅貨品——亦係佢可信度問題嘅來源。因為受訪者並非真正花錢，條件估值問卷容易受到假設性偏差(冇真實預算限制時，人哋會高估支付意願)、嵌入效應(同一貨品嘅估值取決於問卷中仲有咩其他項目)，以及競價遊戲設計中嘅起點偏差影響。1993 年因 Exxon Valdez 漏油訴訟而召開嘅 NOAA 條件估值專家小組，訂立咗設計標準——採用二元「你會唔會付 £X，係／唔係」嘅公投式格式，而唔係開放式競價，並強制提醒受訪者嘅實際預算限制——至今仍然係可辯護問卷嘅參考標準。

## 數學原理

```
Contingent valuation (referendum format):
  Present a binary choice: "would you pay £X per year for outcome Y? yes/no"
  Vary X randomly across respondents.
  Fit willingness-to-pay as a function of the yes/no response rate at each X.

Mean WTP = area under the estimated demand curve
Aggregate value = Mean WTP × affected population

Choice experiment (discrete choice modelling) variant:
  Present respondents with repeated choices between bundles of attributes
  (including a cost attribute), estimate implicit prices for each
  non-cost attribute from the trade-offs respondents reveal.
```

喺英國現行做法中，選擇實驗變體普遍比單一問題嘅條件估值更受青睞，因為迫使受訪者反覆將幾個屬性同成本權衡，比單一「係／唔係」問題，產生內部更一致、更難操控嘅估算。

## 實例演算

**中央政府**：Defra 委託進行條件估值問卷，為一項河流水質改善計劃估值。一項針對 2,000 個住戶嘅公投式問卷發現，62% 願意透過假設嘅水費附加費每年支付 £40，估算嘅需求曲線得出每戶平均支付意願為每年 £28。

```
Mean WTP = £28/household/year
Households in catchment = 340,000
Aggregate annual value = £28 × 340,000 = £9.52m/year

Over a 20-year appraisal period at 3.5% discount rate (annuity factor ≈ 14.2):
PV(benefit) ≈ £9.52m × 14.2 ≈ £135m
```

之後會將呢個總計數字同計劃嘅[社會成本效益分析](../社會成本效益分析/)成本一方比較。Green Book 要求呢類陳述偏好證據，必須連同信賴區間同問卷方法一齊報告，而唔係單一點估算，正正因為底層數字比市場價格更脆弱。

**慈善機構**：一個文物信託向訪客同非訪客調查，詢問佢哋願意為阻止一幢歷史建築物關閉支付幾多(兩個群體未必會到訪)，即係佢嘅存在價值。因為永遠唔會睇到該建築物嘅非訪客，仍然報告正嘅支付意願，問卷捕捉到存在價值同遺贈價值，而單純計算訪客入場費收入(顯示偏好替代指標)完全會漏掉——顯示咗喺冇任何市場交易可以揭示價值嘅情況下，陳述偏好嘅真正優勢。

## 與軟件工程嘅關係

陳述偏好方法好少直接應用於軟件工程工作，但開發市民諮詢平台、預算參與工具或者公眾問卷基礎設施嘅工程師，往往正係喺建構經濟學所倚賴嘅工具。做好問卷設計細節——隨機化出價金額、二元公投式框架優於開放式問題、明確提醒預算限制——並唔係 UX 上嘅小講究，而係令所得估值經得起審視嘅關鍵；一份設計欠佳嘅應用內問卷，可以令之後數月嘅經濟分析失效。有關取得具分析份量嘅民意數據嘅更一般紀律，見[市民滿意度指標](../市民滿意度指標/)。

## 常見陷阱

- **開放式「你願意付幾多？」問題。** 呢類問題比二元公投式框架更容易出現策略性同錨定偏差；NOAA 專家小組建議採用公投式格式，正正因為開放式引導表現欠佳。
- **冇提醒受訪者嘅實際預算限制。** 缺乏提醒，陳述嘅支付意願經常超過同一批人喺真實預算取捨下會支付嘅金額——即假設性偏差。
- **忽視嵌入效應。** 同一貨品單獨估值對比作為更大組合一部分估值，會產生不同嘅支付意願估算；應該報告問卷框架中仲有咩其他項目(如有)。
- **將單一問卷嘅點估算視為定論。** Green Book 做法預期提供一個範圍同對已知偏差嘅討論，而唔係一個赤裸裸嘅數字，好似市場價格咁帶入成本效益表。

## 資料來源

- HM Treasury. "The Green Book," Annex 2: valuing non-market impacts.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Defra. "Valuing environmental impacts: practical guidelines" (contingent valuation and choice
  experiment guidance). <https://www.gov.uk/government/collections/valuing-environmental-impacts>
- Arrow K, et al. "Report of the NOAA Panel on Contingent Valuation." Federal Register, 1993.
- Mitchell RC, Carson RT. "Using Surveys to Value Public Goods: The Contingent Valuation Method."
  Resources for the Future, 1989.
