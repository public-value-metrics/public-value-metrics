# 效益實現

效益實現管理，係指識別、訂立基線、追蹤，並*提出證據*證明業務個案所承諾嘅效益，喺上線之後真正出現嘅一套專業做法。喺英國公共投資中，佢屬於 HM Treasury 嘅 Green Book 五個案例模型(Five Case Model)，以及 Infrastructure and Projects Authority(基建及項目管理局)專門嘅效益管理指引；冇佢，「系統為個案主任每宗申請慳返三十分鐘」呢句嘢，就永遠只係一個未經審核嘅斷言。

## 點解重要

業務個案係承諾，效益實現就係審核。Green Book 要求每個開支個案通過五項測試——策略、經濟、商業、財務同管理——而管理個案必須*喺批准之前*，列明效益如何實現：指定負責人、捕捉基線、定好量度日期。Infrastructure and Projects Authority 嘅指引《Benefits Management: A Guide to Realizing Benefits for Government Major Projects》(<https://www.gov.uk/government/publications/benefits-management-a-guide-to-realizing-benefits-for-government-major-projects>)之所以存在，係因為 IPA 就 Government Major Projects Portfolio 嘅組合匯報，一再發現交付信心同效益實現，係各大型計劃反覆出現嘅弱點。一個項目可以按交付里程碑「準時、喺預算內」完成，但仍然冇實現當初令人批准撥款嘅效益——IPA 嘅指引視呢個分別為整套做法嘅重點所在。

## 數學原理

```
Realization rate = benefits realized / benefits forecast   (per benefit, per period)

Mechanics that make it computable:
  baseline captured BEFORE go-live (else the delta is unmeasurable)
  each benefit: named owner, metric, data source, measurement schedule
  forecast adjusted for optimism bias at appraisal (Green Book mandate)
  benefits classed cash-releasing / capacity-freed / qualitative,
  tracked and reported separately
```

## 實例演算

**地方政府**：一個數碼規劃申請入口網站嘅業務個案，承諾每年可以達到：減少印刷同郵寄開支 £300,000(現金)、釋放 4,500 個官員工時(產能)，以及提升申請人滿意度(質性)。上線十二個月後：

```
Benefit           Forecast   Realized   Rate   Evidence
Cash savings      £300,000   £210,000   70%    finance ledger vs baseline year
Officer hours     4,500      3,200      71%    time-motion sample
Satisfaction      +8pp       +11pp      138%   applicant survey data

Actions from the review (the point of benefits realization):
cash shortfall traced to two service areas still processing paper
applications by exception → close the exception route;
next business case's optimism-bias correction raised from 10% to 25%
based on this case's forecasting error.
```

70% 嘅實現率並非失敗——而係令下一次預測可以校準得更準確嘅知識。一個冇量度嘅個案，會永遠聲稱達成 100%，而財務部門亦冇基礎去質疑。

## 與軟件工程嘅關係

工程機構經常憑預測效益批准平台同工具投資，之後幾乎從不審核——正正係效益實現管理要解決嘅毛病。輕量嘅做法係：每項超過重要性門檻嘅建議，都要指定效益負責人、基線指標同固定嘅檢討日期(通常係上線後六個月)，而過往建議嘅實現率，應該拉低機構對某個團隊或供應商下一次預測嘅信任度。咁就同[Green Book 評估](../green-book-項目評估/)連成閉環，因為呢套做法審核嘅預測，正正係由 Green Book 訂立；同時亦係廣泛報道嘅發現背後嘅同一邏輯——大部分生成式 AI 試點都冇可量度嘅回報(見[公共部門嘅 AI 生產力](../公共部門嘅-ai-生產力/))——因為真正帶嚟價值嘅試點，幾乎無一例外，都係由一開始就有指定、可追蹤效益項目嘅。呢套做法亦要求區分實際交付咗乜同實際實現咗乜——見[成果與產出](../成果與產出/)。

## 常見陷阱

- **冇上線前基線**：致命而無法補救嘅遺漏——冇基線，就永遠計唔出實現率，只可以斷言。
- **效益孤兒**：冇指定負責人嘅效益，冇人收集數據，每次組合檢討都預設報告為「大致上按計劃進行」。
- **計劃組合內效益重複計算**：兩個項目都聲稱同一批被釋放嘅個案主任產能係自己嘅效益——要為整個組合設立單一效益登記冊，先至捉到呢種情況。
- **實現表演**：高調量度同匯報容易嘅質性成果，而現金同產能項目就靜靜雞無人審視。
- **混淆交付同實現**：項目「準時、喺預算內」完成里程碑，完全唔能夠說明預測效益有冇真正出現——IPA 嘅指引視之為兩個獨立問題，各有各嘅證據軌跡。

## 資料來源

- HM Treasury, Green Book and Five Case Model guidance. <https://www.gov.uk/government/collections/the-green-book-and-accompanying-guidance-and-documents>
- Infrastructure and Projects Authority, *Benefits Management: A Guide to Realizing Benefits for Government Major Projects*. <https://www.gov.uk/government/publications/benefits-management-a-guide-to-realizing-benefits-for-government-major-projects>
- Infrastructure and Projects Authority, Annual Report on the Government Major Projects Portfolio. <https://www.gov.uk/government/collections/infrastructure-and-projects-authority-annual-report>
