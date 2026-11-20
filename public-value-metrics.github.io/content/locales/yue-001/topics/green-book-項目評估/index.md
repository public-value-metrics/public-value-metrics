# Green Book 項目評估（五案模型）

《Green Book》係 HM Treasury（英國財政部）用嚟評估英國政府開支建議嘅強制性指引。佢嘅核心工具——五案模型（five-case model）——迫使業務案例回答五條獨立嘅問題：係咪好主意、有冇交付價值、可唔可以採購、負唔負擔得起、做唔做得到——而唔係將所有嘢壓縮成一個大臣可以隨手放行嘅數字。

## 點解重要

凡超出部門授權限額嘅英國中央政府開支建議，都必須先通過 Green Book 評估，先會批出資金；而 HM Treasury 嘅《Green Book Review 2020》（喺有人批評該流程對較貧窮地區存在偏見後發表，見 <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>）收緊咗要求，規定各選項要同真正嘅「最低限度行動」（do minimum）基線比較，並且要先證明策略契合，先評估物有所值。五案模型本身早於 Green Book 出現——佢源自政府商務辦公室（Office of Government Commerce），係標準業務案例結構——但 2022 年版《Green Book》將其納入，成為任何尋求財政部批准嘅業務案例必須採用嘅形式：<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>。

將個案分成五方面嘅意義，在於一個建議可以喺任何一個維度失敗，而與其他維度無關。一個策略上合理、具成本效益嘅 IT 平台遷移，如果只有一個供應商做得到（造成單一招標風險），仍然可以喺商業案例失敗；或者如果部門冇交付同等規模計劃嘅往績，亦可以喺管理案例失敗。單一嘅「物有所值」分數，正正會隱藏呢類失效模式。

## 數學原理

五案模型係一個結構而非公式，不過每個案例都有其量化或證據測試：

```
1. Strategic case
   Evidence of a spending objective linked to organisational strategy.
   Test: is there a case for change at all? ("do nothing" is always an option.)

2. Economic case
   Options appraisal against a "do minimum" baseline, using
   social cost-benefit analysis or cost-effectiveness analysis.
   Test: which option maximizes net public value?
   See ../social-cost-benefit-analysis/ and ../cost-effectiveness-analysis-in-government/

3. Commercial case
   Market engagement, procurement route, risk allocation between
   buyer and supplier.
   Test: is the preferred option procurable on acceptable terms?

4. Financial case
   Affordability within departmental budget limits, funding source,
   balance sheet treatment.
   Test: can we afford it, this year and every year after?

5. Management case
   Governance, project plan, benefits realization plan, risk register.
   Test: can this organization actually deliver it?
   See ../benefits-realization/
```

量化評估集中喺經濟案例：各選項按經 [社會貼現率](../社會貼現率/) 調整嘅淨現值比較，採用 [社會成本效益分析](../社會成本效益分析/) 方法；如果效益無法誠實地貨幣化，則改用 [成本效益分析](../政府嘅成本效益分析/) 或 [多準則決策分析](../多準則決策分析/)。

## 實例演算

**地方政府**：某議會評估一個 £12 million嘅房屋維修 IT 系統，五個案例如下。策略案例：如果唔介入，維修積壓將於 18 個月內違反法定宜居房屋標準。經濟案例：三個選項按 10 年評估期、3.5% 貼現率（依 2022 年《Green Book》嘅標準社會時間偏好率）計算成本——「最低限度行動」（修補舊系統，淨現值 −£4.1m）、「購買」（現成商用軟件平台，淨現值 +£2.3m）、「自建」（定制平台，按《Green Book》附件 A，對未貼現資本成本套用軟件開發 40% 嘅樂觀偏差後，淨現值 +£0.6m）。「購買」勝出經濟案例。商業案例：有兩個可行供應商，可以競爭性招標——通過。財務案例：資本可從公共工程貸款委員會（Public Works Loan Board）取得，收入成本符合中期財務計劃——通過。管理案例：議會過去五年已交付兩個同類系統——通過。建議以「購買」方案推進。

**中央政府部門**：一個經濟案例強勁（淨現值 +£40m）嘅建議，但只有一個供應商持有相關認證，喺商業案例就因欠缺競爭張力而不通過，迫使部門要麼申請單一招標豁免（帶來自己嘅審查負擔），要麼重新設計規格以開放市場——單靠經濟案例，永遠發現唔到呢個問題。

## 與軟件工程嘅關係

政府內部或受資助機構嘅工程團隊，通常只會見到經濟案例，因為產品同工程領導層被要求論證嘅正係呢部分（「呢次遷移嘅投資回報係幾多？」）。但一個要通過財政部或資助委員會嘅業務案例，五個都需要，而工程師往往係回答商業案例（呢個真係採購得到嗎？定係會將我哋鎖死喺某個供應商嘅專有格式？）同管理案例（我哋有冇交付能力？定係依賴三個特定人士唔離職？）嘅最佳人選。如果有人要求「只要業務案例嘅數字」，要當佢係只要求實際決策嘅五分之一。經濟案例嘅輸出通常點樣總結，可參閱 [物有所值](../物有所值/)；財務案例通常嘅量化核心，則見 [總擁有成本](../政府資訊科技嘅總擁有成本/)。

## 常見陷阱

- **先寫經濟案例，再將策略案例寫到配合佢。** Green Book Review 2020 發現，正正係呢種失效模式令評估偏向本身已有充分證據嘅地方同行業，加深區域不平等；策略案例應該喺比較選項之前確立目標。
- **將「最低限度行動」當成「乜都唔做」。** 正確嘅基線係仍然符合最低法律或安全責任嘅最低成本選項，而唔係零開支嘅幻想——同字面意義上嘅零比較，會令每個選項嘅表面價值虛高。
- **因為經濟案例強勁，就略過商業同管理案例。** 一個淨現值高、卻無法競爭性採購或由發起機構交付嘅建議，並非可資助嘅建議；財政部審查人員即使面對有力嘅經濟案例，亦經常基於呢啲理由否決。
- **只喺開始時應用一次五案模型。** 《Green Book》要求隨成本同證據逐步確定，喺之後每個批准關口（策略大綱案例、大綱業務案例、完整業務案例）重新審視個案——凍結喺大綱階段嘅案例，會漏掉較後關口本應發現嘅成本上升。

## 資料來源

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury. "Green Book Review 2020: findings and response." 2020.
  <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>
- HM Treasury / Infrastructure and Projects Authority. "Guide to developing the project business
  case." <https://www.gov.uk/government/publications/project-business-case-guide>
