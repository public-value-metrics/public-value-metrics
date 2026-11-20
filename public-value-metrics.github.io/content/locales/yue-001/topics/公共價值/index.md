# 公共價值

公共價值係政府或者社會界別機構為市民整體創造嘅價值——唔只係佢產出嘅東西，或者花費嘅金錢，而係社會有冇因為該機構存在、並按所做嘅方式行事而變得更好。Mark Moore 於 1995 年提出嘅「策略三角」係標準測試：一項公共措施，只有同時*具合法性及獲支持*、*具實質價值*同*具營運可行性*，三者齊備，先算有充分理據。

## 點解重要

私營界別嘅價值相對容易定價：收入減成本，由可以隨時走人嘅客戶裁決。公共價值冇相應嘅市場信號。監獄服務、稅務機關同兒童保護團隊所產出嘅，市民根本唔可以揀唔買，而「客戶」(納稅人、犯人、兒童)往往同批准預算嘅政治委託人並非同一個人。Moore 嘅 *Creating Public Value: Strategic Management in Government*(Harvard University Press，1995)補上咗缺失嘅紀律：管理者應該可以講清楚 (1) 佢嘅措施創造咩公共價值；(2) 佢推行嘅合法性同資金來自邊度——部長、議會、授權、資助；以及 (3) 佢嘅機構憑手上嘅人員、技術同流程，能否真正交付。一個只喺三角中一條或兩條邊得分嘅計劃，就算出發點幾好，都仍未有充分理據。

呢點在實務上好重要，因為大部分公營界別軟件失敗並非技術失敗。一個系統可以技術上出色、營運上可行，卻仍然失敗，因為授權環境中——部長、監督委員會、公眾——根本冇人想要佢所優化嘅目標。Universal Credit 數碼服務同 NHS National Programme for IT，喺英國公共行政文獻中都被引為營運同合法性呢兩條邊，同使命嗰條邊脫節嘅案例。

## 數學原理

公共價值係框架而唔係公式，但佢將原本含糊嘅投資個案，結構化為三個可檢驗嘅問題：

```
Strategic triangle test — proceed only if all three hold:

1. Legitimacy and support: Who has authorized this, and does the authorizing
   environment (legislature, minister, council, board, public opinion) still
   back it as resources are committed?

2. Public value: What specific, describable good does this produce for
   citizens or society — safety, health, opportunity, trust, fairness —
   and for whom?

3. Operational capacity: Can the organization actually deliver it with
   current staff, technology, partners, and legal authority — or a
   credible plan to acquire them?
```

薄弱嘅措施通常至少喺一條邊失敗：技術上可交付但冇授權(冇人批准嘅數據共享試點)；受歡迎但無法交付(承諾咗數碼服務卻冇工程能力)；又或者有授權、可交付但冇價值(冇人用嘅儀表板)。

## 實例演算

**地方政府**：議會數碼團隊建議為房屋福利申請引入 AI 分流工具。

- *合法性*：議會內閣已批准數碼優先策略，但負責社會保障嘅民選議員並未特別批准自動化決策——呢個係缺口，而非綠燈。
- *公共價值*：處理速度加快(聲稱效益：10 日縮短至 2 日)，只有申請人冇被錯誤拒絕，先算真正價值；價值聲稱必須包括準確度，而唔只係速度。
- *營運能力*：議會只有一名數據科學家，亦冇模型監控流程，所以聲稱嘅 2 日周轉期，喺所述錯誤率下，目前並非可交付。

三條邊失敗兩條。Moore 嘅框架指出：唔好按原定範圍推行——先取得自動化決策嘅明確授權同建立監控能力，否則商業個案所聲稱嘅「公共價值」純屬虛構。

**中央政府**：稅務機關嘅網上報稅服務，合法性強(法定授權)、營運能力強(現有團隊交付可靠)，但如果因為數碼排斥人士——見[數碼共融](../數碼包容/)——被推入佢哋用唔到嘅渠道，令使用率偏低，公共價值就薄弱。三角揭示咗一個純交付儀表板會隱藏嘅問題。

## 與軟件工程嘅關係

公共價值係整個知識庫所屬嘅統攝概念：[物有所值](../物有所值/)提供經濟／效率／效益測試，檢視資源有冇善用；[公共開支嘅機會成本](../公共開支嘅機會成本/)為同一筆錢本可以做嘅其他事情定價；而[額外性與死重效應](../額外性同死重效應/)、[排擠效應與歸因](../挪移效應與歸因/)同[反事實分析](../反事實分析/)則一齊檢驗所聲稱嘅價值係真實、而非假設。對工程師嚟講，策略三角係任何公營界別產品決策嘅有用事前檢討(pre-mortem)：

- 界定功能範圍之前，問清楚邊個授權、授權是否依然有效——為一位後來已調職嘅部長而建嘅功能，其合法性可能已悄悄流失。
- 將「我哋建唔建得到」同「我哋應唔應該建」視為真正獨立嘅問題；工程能力只回答三角中第三條邊。
- 公共服務嘅產品需求文件，應該明確寫出公共價值聲稱，而唔只係用戶故事，因為用戶價值同公共價值並非永遠一樣(見[成果與產出](../成果與產出/))。

## 常見陷阱

- **將營運能力當作充分理據。** 「我哋建得到」只回答三角中一條邊；交付能力強嘅團隊，經常交付冇人授權想要、又創造唔到可描述公共利益嘅東西。
- **混淆合法性同合法律性。** 一個計劃可以合法，卻缺乏撐過艱難交付階段所需嘅政治同公眾支持；法律保障唔等於授權。
- **假設公共價值就係委託部門所講嘅嘢。** Moore 嘅模型要求價值聲稱可以對照市民實際利益檢驗，而非單靠資助者斷言——否則框架就淪為自我認證。

## 資料來源

- Moore MH. *Creating Public Value: Strategic Management in Government*. Harvard University Press,
  1995.
- Moore MH. *Recognizing Public Value*. Harvard University Press, 2013.
- Benington J, Moore MH (eds). *Public Value: Theory and Practice*. Palgrave Macmillan, 2011.
- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation" (2022).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
