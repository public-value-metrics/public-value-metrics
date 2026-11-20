# 影子價格

影子價格係指為某樣貨品、資源或者外部性所估算嘅價值，而呢樣嘢要麼冇可觀察到嘅市場價格，要麼市場價格受到扭曲，反映唔到佢真正嘅社會價值。政府嘅項目評估倚賴少數幾個官方影子價格，包括碳、非工作時間同失業勞動力，由中央統一公布，等每個部門都用同一個數字。

## 點解重要

影子價格之所以存在，係因為[社會成本效益分析](../社會成本效益分析/)必須為每項成本同效益提供貨幣價值，而最具影響力嘅幾項——排放一公噸碳、一位通勤者一個鐘嘅時間、一個鐘原本失業嘅勞動力——要麼完全冇市場價格，要麼市場價格錯誤反映咗佢哋真正嘅社會成本。HM Treasury(英國財政部)同 Department for Energy Security and Net Zero(英國能源安全及淨零部)聯合公布英國所有政府評估通用嘅碳影子價格(<https://www.gov.uk/government/publications/valuing-greenhouse-gas-emissions-in-policy-appraisal>)。呢個價格並非源自任何碳市場價格，而係採用「目標一致」嘅方法：碳價定於達成英國法定碳預算所需嘅邊際減排成本，同觀察碳喺歐盟或者英國排放交易計劃(Emissions Trading Scheme)實際成交價，邏輯根本不同。

勞動力方面嘅影子工資率，邏輯相似。僱用一個本來失業嘅人，對社會嚟講唔等於花費佢全部工資——當中一部分係來自原本領取嘅福利金同失去嘅閒暇／求職時間嘅轉移，而唔係淨增加社會資源嘅耗用——所以 Green Book 指引為從失業狀態招聘嘅勞動力，訂出低過市場工資嘅影子價格，反映呢啲勞動力真正嘅機會成本(見[公共開支嘅機會成本](../公共開支嘅機會成本/))，而唔係佢嘅市場價格。

## 數學原理

```
Shadow price of carbon (illustrative structure, current values from the
official BEIS/DESNZ carbon values tool — do not use stale figures):
  Traded sector value: informed by ETS allowance price trajectories
  Non-traded sector (target-consistent) value: set to the marginal cost
    of abatement needed to meet legislated carbon budgets, rising over
    time as easier abatement options are exhausted
  Applied as: £/tonne CO2e × tonnes emitted or abated by the option,
    discounted at the social discount rate for future years

Shadow wage rate (SWR):
  SWR = Market wage − (value of foregone leisure/search time saved
                        + value of welfare payments no longer paid)
  Typically expressed as a fraction of the market wage (e.g. SWR = 0.6
    × market wage in a high-unemployment area, per Green Book Annex A
    guidance on labour markets with spare capacity)
```

兩個數字都係中央訂立嘅政策慣例，而唔係實證嘅市場觀察結果——影子價格嘅全部意義，就係取代一個缺失或者被扭曲嘅市場，所以用到影子價格嘅評估，必須引用現行官方來源，而唔係自行推算數字，正正係為咗令每個部門嘅評估都可以互相比較。

## 實例演算

**中央政府**：一項防洪工程嘅評估，估計喺 30 年評估期內，每年可減少 400 公噸二氧化碳當量排放(透過減少緊急機械使用，同埋避免重建所減少嘅隱含碳)，對比「最低限度行動」(do minimum)基線。

```
Illustrative shadow price of carbon: £280/tonne CO2e (year 1, rising over
  the appraisal period per the official non-traded carbon values schedule)
Year 1 carbon benefit = 400 × £280 = £112,000
```

由於官方時間表顯示碳價喺評估期內*上升*(反映碳預算日趨收緊)，分析人員必須為 30 年效益流嘅每一年採用該年對應嘅數值，而唔係統一費率——如果全程都用第 1 年嘅數值，會低估後期嘅效益，亦會扭曲同其他碳排放特徵唔同嘅防洪設計方案之間嘅排名。

**地方政府**：一個市議會為長期失業居民推行嘅就業支援計劃，協助 150 人入職，時薪 £11。如果用全額市場工資估值，會將 £11 × 工作時數計為計劃嘅社會效益，但影子工資率嘅做法承認，呢啲人並非由其他工作抽調過嚟——佢哋喺計劃之前嘅勞動力真正機會成本好低。

```
Market wage: £11.00/hour
Shadow wage rate (illustrative, high local unemployment): 0.6 × market wage = £6.60/hour
Net social benefit attributable per hour worked ≈ £11.00 − £6.60 = £4.40/hour
  (the "extra" value created by moving genuinely idle labour into production,
   as distinct from the wage itself, which is largely a transfer)
```

呢個正正係點解高失業率地區嘅就業計劃評估，可以顯示正嘅淨社會價值；而同一個計劃喺全民就業嘅地區推行，被挪移嘅勞動力只會係由其他工作抽調過嚟，結果就唔會有淨價值。

## 與軟件工程嘅關係

影子價格好少直接牽涉軟件交付，但只要商業論證聲稱某項資訊科技改動帶嚟碳效益或者社會效益，就會用到——例如數據中心整合聲稱減少碳排放，或者無紙化服務聲稱避免印刷同郵遞碳排放，都必須採用現行官方碳影子價格，而唔係自創數字，亦必須按年採用正確時間表，而唔係統一費率，同其他 Green Book 評估輸入項嘅做法完全一樣。可參閱[政府資訊科技嘅總擁有成本](../政府資訊科技嘅總擁有成本/)同[公共部門網絡安全價值](../公營界別網絡安全嘅價值/)，兩者經常需要為難以貨幣化嘅輸入項(入侵風險、停機時間)訂定影子價格，同直接計算成本嘅項目並列。

## 常見陷阱

- **使用過時嘅碳價或者工資數字。** 兩個數值都會由中央指引定期修訂；以被取代嘅數字為基礎嘅評估，通不過財政部嘅審視。
- **喺跨越幾十年嘅評估中應用統一嘅碳影子價格。** 官方時間表隨時間上升；全程使用第 1 年嘅數值，會令效益或成本嘅分布失真。
- **混淆影子工資同工人實際薪酬嘅折讓。** 影子工資率調整嘅係*評估*對勞動力投入嘅估值，而唔係工人實際獲發嘅工資——將兩者混為一談，會(錯誤地)為低於市場水平嘅薪酬提供藉口。
- **自行推算專屬影子價格，而唔用官方數字。** 影子價格作為政策慣例，目的就係令各部門嘅評估可以互相比較；本地自創嘅數字，就算理據幾充分，都會破壞呢種可比性。

## 資料來源

- HM Treasury / Department for Energy Security and Net Zero. "Valuing greenhouse gas emissions in
  policy appraisal." <https://www.gov.uk/government/publications/valuing-greenhouse-gas-emissions-in-policy-appraisal>
- HM Treasury. "The Green Book: appraisal and evaluation in central government," Annex A (shadow
  price of labour, non-work time values).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Little IMD, Mirrlees JA. "Project Appraisal and Planning for Developing Countries." Heinemann,
  1974 (foundational shadow-pricing methodology).
