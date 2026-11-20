# 政府資訊科技嘅總擁有成本(TCO)

總擁有成本係一個系統嘅完整生命週期成本——採購成本加上每年營運成本——貼現至同一日期。喺政府資訊科技方面，最穩定出現嘅預測錯誤，就係只按採購價格比較供應商或者方案，而營運同維護通常佔終身總賬單嘅一半至五分之四。

## 點解重要

HM Treasury(英國財政部)嘅 Green Book 要求任何五案模型商業論證嘅財務案，必須涵蓋整個生命週期成本，而唔只係資本開支——但 National Audit Office(國家審計署)一再發現，各部門批准資訊科技投資時，所依據嘅營運成本預測並不完整或者過於樂觀，直到系統上線、資本預算項目已經關閉，先發現真正嘅營運成本。Government Digital Service 同 Central Digital and Data Office 嘅 Technology Code of Practice(<https://www.gov.uk/guidance/the-technology-code-of-practice>)推動各部門採用雲端同商品化託管，部分原因係令持續成本變得可見同可比較，而唔係埋藏喺一個單一資本採購數字入面——嗰個數字批准時睇落低得吸引，三年後卻昂貴地錯誤。

## 數學原理

```
TCO = Acquisition cost + Σ(t=1..N) Annual operating cost_t / (1+r)^t
      − residual value (discounted)

r = HM Treasury Green Book standard social discount rate, 3.5%/year
    (declining rate schedule for horizons beyond 30 years)

Operating cost components: hosting/licensing, support and maintenance,
security patching and compliance, staff time, planned refresh/migration
```

為何貼現因子喺典型 5–10 年系統壽命內重要，見[社會貼現率](../社會貼現率/)；TCO 如何輸入自建對外購決定，見[政府自行開發定外購](../政府自行開發定外購/)。

## 實例演算

一個部門按 Green Book 3.5% 貼現率，以 5 年期比較兩個個案管理系統。

```
System A: capex £3,500,000, opex £250,000/year
System B: capex £1,800,000 (looks cheaper), opex £650,000/year
          (heavier vendor support and integration burden)

Naive comparison on capex alone: B wins, £1.8M < £3.5M.

Discount factor sum, 5 years at 3.5%: 0.966+0.934+0.902+0.871+0.842 ≈ 4.515

TCO_A = 3,500,000 + 250,000 × 4.515 = 3,500,000 + 1,128,750 = £4,628,750
TCO_B = 1,800,000 + 650,000 × 4.515 = 1,800,000 + 2,934,750 = £4,734,750
```

TCO 令天真嘅決定逆轉：將營運成本貼現同加總後，系統 B 五年內稍為貴啲，因為佢嘅營運開支佔終身成本 62%(2,934,750 / 4,734,750)，而系統 A 只佔 24%——正正係「維護佔賬單大部分」呢個發現嘅具體例子，單靠比較標價就完全隱藏咗。

## 與軟件工程嘅關係

TCO 係應該約束每個[自行開發定外購](../政府自行開發定外購/)決定同每個[技術債務](../技術債務-侵蝕公共價值/)償還個案嘅數字，因為債務利息同遞延維護都係營運成本項目，應該屬於同一個貼現總額，不論有冇人追蹤過佢哋。提議平台或者供應商選擇嘅工程師，應該呈現完整 TCO 表，而唔係採購價格，因為採購價格正正係 Green Book 財務案設計用嚟阻止各部門單靠倚賴嘅數字。TCO 亦係[物有所值](../物有所值/)判斷嘅誠實分母——物有所值係比較效益同成本，而成本項目被低估，會膨脹商業論證中每個物有所值比率。

## 常見陷阱

- **只比較資本開支**：最常見嘅採購錯誤——比較供應商標價，卻冇為每個方案配對嘅營運成本預測。
- **排除退出同遷移成本**：合約終結時嘅數據提取、重新建置平台，以及供應商鎖定罰款，都係真實嘅 TCO 項目，卻好少出現喺原本嘅商業論證入面。
- **排除安全同合規成本**：修補頻率、認證續期同審計成本，隨系統年齡同複雜度增加——見[公共部門網絡安全價值](../公營界別網絡安全嘅價值/)——卻經常被遺漏出營運開支預測。
- **對成本結構不同嘅方案作未貼現比較**：將資本開支為主嘅方案同營運開支為主嘅方案比較而唔貼現，會有系統地偏向剛好將更多成本推遲到後期年份嘅方案。

## 資料來源

- HM Treasury, *The Green Book: Central Government Guidance on Appraisal and Evaluation*, 2022. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
- Central Digital and Data Office, Technology Code of Practice. <https://www.gov.uk/guidance/the-technology-code-of-practice>
- National Audit Office, *Digital Transformation in Government*. <https://www.nao.org.uk/>
