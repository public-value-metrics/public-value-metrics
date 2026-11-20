# 每個成果成本

每個成果成本，係計劃總開支除以達到一個已界定、有意義嘅處境改變嘅人數——而唔係單純接受過服務嘅人數。佢係資助者或交付團隊可以使用嘅最鋒利效率指標，因為佢逼出一個大部分慈善機構都迴避嘅先決問題：究竟乜嘢先算成功？

## 點解重要

一間食物銀行可以由同一年嘅賬目，匯報兩個截然不同嘅數字。每派發一個食物包嘅成本可能係 £15。每個之後達到糧食安全嘅住戶——不再需要緊急食物援助，並喺跟進時點經核實——成本可能係 £340。兩個都係真。只有一個可以話畀資助者知，資金有冇發揮作用。兩者之間嘅差距，就係產出同成果之間嘅差距：派出一個食物包係產出；一個唔再處於危機嘅住戶係成果。見[成果與產出](../成果與產出/)。

英國第三部門用咗二十年時間建立基礎設施，逼出呢個區分。New Philanthropy Capital 嘅慈善有效性「四支柱方法」，明確要求機構先講成果，後講產出；Inspiring Impact——英國由資助者支持嘅影響力量度合作組織——發佈咗一份 Outcomes Matrix，而家好多資助申請都要求慈善機構填寫。Trussell Trust 與 Heriot-Watt University 合作每年進行嘅「State of Hunger」研究計劃，正正係因為單靠食物包數量，根本說明唔到人們有冇擺脫糧食不安全。

每個成果成本，要先固定好反事實先有意義：「無論如何都會」達成嘅成果，並唔係計劃所購買嘅成果。見[反事實分析](../反事實分析/)同[排擠效應與歸因](../挪移效應與歸因/)。

## 數學原理

```
Cost per outcome = Total programme cost / Number of beneficiaries achieving the defined outcome

where:
  Total programme cost   = direct delivery cost + fair share of overhead
  Defined outcome        = a pre-specified, measurable state change
                            (e.g. "food secure at 6-month follow-up",
                            not "received a food parcel")
```

可以對照[單位成本數據庫](../單位成本數據庫/)(例如特定行業嘅單位成本基準)，判斷某個每個成果成本相對可比較嘅干預，係好、一般定差。

## 實例演算

**食物銀行，一年**：

- 計劃總成本：£450,000
- 派發食物包：30,000
- 每個食物包成本(產出指標)：£450,000 / 30,000 = **£15**

慈善機構亦對抽樣住戶進行六個月跟進調查，發現收到三個或以上食物包嘅住戶中，35% 報告唔再需要緊急食物援助，並且喺標準糧食安全調查模組中，得分高於糧食安全門檻。當年 1,800 個收到三個或以上食物包嘅住戶之中，有 630 個達到呢個成果。

```
Cost per outcome = £450,000 / 630 = £714 per household achieving food security
```

當資助者拎呢間慈善機構同現金轉移試驗計劃或者債務諮詢服務比較時，應該用 £714 呢個數字——而唔係 £15。如果同區一個可比較嘅現金轉移計劃，以每戶 £500 達到糧食安全，食物銀行並非明顯係達致同一成果更高效嘅途徑，雖然佢每個食物包成本睇落好平。

## 與軟件工程嘅關係

大部分個案管理系統都係為記錄產出而建，因為產出就係交易內部發生嘅事(派出食物包、提交表格)。成果通常發生得較遲，往往喺系統正常捕捉窗口之外，需要刻意嘅設計決定：將跟進機制(問卷觸發、重新聯絡工作流程、數據連結作業)作為一等功能去建構，而唔係為年報而事後加上嘅補充。為業界開發資助管理或個案管理平台嘅工程師，應該將「成果事件係乜、我哋點觀察到佢」視為喺數據模型定案之前就要問嘅需求問題——補做成果欄位，遠比加產出計數器困難。關於如何建構呢場需求對話，見[成果與產出](../成果與產出/)同[邏輯模型](../邏輯模型/)；而當成果追蹤尚未建好時，團隊會用嘅更快但較粗略嘅指標，見[每名受益人成本](../每名受益人成本/)。

## 常見陷阱

- **將產出扮成成果匯報。** 「接觸到嘅人數」唔係「得到幫助嘅人數」。如果指標可以由系統日誌產生、毋須跟進聯絡，佢幾乎肯定係產出。
- **玩弄分母。** 將成果人群收窄至「完成計劃嘅人」，會靜靜雞排除咗退出者——往往係最困難嘅個案——並誇大表面比率。分母應該列為所有開始嘅人，而唔係所有完成嘅人。
- **冇反事實。** 計入所有達到成果嘅人，包括無論如何都會達到嘅人，會誇大計劃所購買嘅成果。見[反事實分析](../反事實分析/)。
- **喺不相容嘅成果定義之間作比較。** 以驗證過嘅調查模組量度嘅「糧食安全」，同喺滿意度表格中自我匯報嘅「糧食安全」不可比較；只有成果定義一致，每個成果成本排行榜先算誠實。

## 資料來源

- New Philanthropy Capital (NPC), "Four Pillar Approach" to charity effectiveness. <https://www.thinknpc.org/resource-hub/four-pillar-approach/>
- Inspiring Impact, Outcomes Matrix and impact measurement resources. <https://inspiringimpact.org/>
- Trussell Trust and Heriot-Watt University, "State of Hunger" research programme. <https://www.trusselltrust.org/state-of-hunger/>
- GiveWell, "Our criteria" (cost-effectiveness as the leading criterion for charity recommendation). <https://www.givewell.org/how-we-work/our-criteria>
