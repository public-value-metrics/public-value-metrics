# 影響評價與過程評價

影響評價（impact evaluation）問嘅係計劃有冇造成預期成果。過程評價（process evaluation）問嘅係計劃有冇真係按設計交付——交付畀邊個、劑量幾多，以及沿途有乜嘢障礙或促進因素。呢兩者係唔同嘅問題，需要唔同嘅方法，而 HM Treasury（英國財政部）嘅《Magenta Book》將兩者一併委託視為標準做法，因為薄弱或無效嘅影響結果，單靠自己無法解讀：佢無法話你知計劃背後嘅理論係咪錯咗，定係一個好理論根本從來冇被妥善交付。

## 點解重要

政府評價一再發現某計劃冇可量度嘅效果，卻冇過程評價去解釋原因——令委託者無法區分「呢個想法行唔通」（理論失敗）同「呢個想法從來冇被好好試過」（實施失敗）。英國醫學研究委員會（Medical Research Council）有關複雜介入過程評價嘅指引，於 2015 年喺《英國醫學期刊》（BMJ）發表，並與《Magenta Book》一併被廣泛引用，將忠實度（fidelity）、劑量（dose）同覆蓋面（reach）正式確立為過程評價必須量度嘅核心內容。只委託影響評價而冇過程評價，有風險會放棄一個本身完全合理嘅計劃設計，只因為佢只交付畀一半預期人口，而強度只有預期嘅一小部分——系統建設者好適合預防呢種錯誤，因為交付忠實度正正係營運數據系統可以近乎實時捕捉嘅。

## 數學原理

```
Process evaluation asks:
 - Was it delivered to the target population, at the planned dose/intensity?
 - Did delivery match the logic model / theory of change design?
 - What barriers or facilitators affected delivery?
 Methods: fidelity checks against pre-specified thresholds, case studies, interviews,
          administrative delivery data.

Impact evaluation asks:
 - What changed, and how much of that change is attributable to the programme?
 Methods: RCT, DiD, PSM, RDD — see impact-evaluation-methods — against a counterfactual.

Combined diagnosis:
 No effect  + high fidelity  → theory failure: the model itself did not produce the outcome
 No effect  + low fidelity   → implementation failure: the model was never properly tested
 Effect found + high fidelity → replicate with confidence
 Effect found + low fidelity  → investigate further: the effect may be fragile or site-specific
```

## 實例演算

**地方政府（育兒計劃）**：一項採用雙重差分嘅影響評價發現，兒童福祉量度有 +2 個百分點嘅變化——統計上不顯著。同步進行嘅過程評價發現，計劃只接觸到 500 個目標家庭中嘅 210 個（接觸率 42%），而當中只有 95 個達到預先訂明嘅 75% 以上課節出席率忠實度門檻——相當於原定覆蓋人數嘅 19%。結論：薄弱嘅影響結果同實施失敗一致，而唔係計劃模式行唔通嘅證據；適當嘅回應係修補導致 58% 流失嘅轉介途徑，而唔係放棄計劃設計。

**慈善機構（數碼素養計劃）**：一項影響評價發現強勁效果（數碼信心分數 +18 個百分點），而同步嘅過程評價確認全部 12 個交付地點對原定課程嘅忠實度達 92%。兩者結合，資助者可以有信心地擴大計劃，因為已證明效果持續成立，而唔係單一個特別好嘅地點嘅產物。

## 與軟件工程嘅關係

過程評價數據正正係交付系統最擅長捕捉嘅：實際出席對比計劃、課節劑量，以及轉介或報名漏斗每一階段嘅流失——同工程師已經為產品功能建立嘅漏斗分析一樣，只不過應用喺社會計劃嘅交付管線上。將忠實度同覆蓋面指標近乎實時地提供畀計劃經理，而唔係等到資助期結束嘅評價，可以令壞咗嘅轉介途徑喺計劃進行中就修正，而唔係資助期結束後先發現。過程評價所配對嘅因果設計，可參閱 [影響評價方法](../影響評價方法/)；過程評價用嚟核對忠實度嘅設計，則見 [變革理論](../變革理論/) 同 [邏輯模型](../邏輯模型/)；而追蹤交付直至承諾成果，請參閱 [效益實現](../效益實現/)。

## 常見陷阱

- **只委託影響評價。** 咁樣一個無效或薄弱嘅結果，就無法解讀為理論失敗定實施失敗，而呢個區別正正係決定下一步點做嘅關鍵。
- **將過程評價當成軟性附加項目。** 佢需要同影響設計一樣嘅嚴謹度同預先訂明嘅忠實度標準，否則結果出嚟時就會淪為軼事。
- **將「準時同符合預算」同「按設計交付」混為一談。** 過程評價檢查嘅係對模式嘅忠實度——劑量、目標群體、內容——而唔係項目管理嘅 RAG 狀態。
- **冇預先登記忠實度門檻。** 事後先決定乜嘢先算「足夠劑量」，會令任何對失望影響結果嘅解釋，睇落像事後找藉口。

## 資料來源

- HM Treasury, Magenta Book (2020). <https://www.gov.uk/government/publications/the-magenta-book>
- Moore G, et al., "Process evaluation of complex interventions: Medical Research Council
  guidance." BMJ 2015;350:h1258. <https://www.bmj.com/content/350/bmj.h1258>
- National Audit Office, programme evaluation reports. <https://www.nao.org.uk/>
