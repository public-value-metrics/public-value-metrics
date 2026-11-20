# 公營界別關鍵績效指標

關鍵績效指標(KPI)係一項經挑選、持續追蹤嘅量度，用嚟代表公共服務有冇做好本分。喺政府內，KPI 嘅選擇從來唔係中立：因為 KPI 同預算、排行榜同職業生涯掛鈎，選擇某個 KPI 嘅行為，會塑造下游每個人嘅行為，往往比創建該服務嘅政策影響更大。

## 點解重要

Charles Goodhart 於 1975 年對貨幣政策嘅觀察——後來由 Marilyn Strathern 推廣為「當一項量度變成目標，就唔再係好嘅量度」——係公營界別績效管理最重要嘅警告標籤。一個為咗*描述*系統而揀選嘅 KPI，一旦資源、薪酬或者政治生存同佢掛鈎，就開始*扭曲*該系統。經典例子係 NHS 救護車回應時間：當八分鐘嘅 Category A 回應目標變成硬性要求，有啲信託被揭發將救護車「堆疊」喺回應時間計時之外，或者重新分類召喚，以達到數字，卻唔改變病人嘅成果。英國 National Audit Office 有關揀選同使用績效指標嘅指引——載於其物有所值報告，以及「Performance Measurement by Regulators」同「Choosing the Right FABRIC」框架(Fit for purpose、Appropriate、Balanced、Robust、Integrated、Cost-effective)——正正因為各部門不斷揀選易於匯報、而非難以操弄嘅指標而存在。一個交付部長或者總監將被評價嘅儀表板嘅軟件工程師，不論有意無意，都係喺設計公共機構嘅激勵結構。

## 數學原理

KPI 設計係框架型課題，但評估候選 KPI 係一份可重複使用嘅核對清單，而唔係公式：

```
For each candidate KPI, score against:
  Fit for purpose  — does it measure the outcome, or a proxy several steps removed?
  Appropriate      — does it belong to the people who can actually influence it?
  Balanced         — is it paired with a counter-metric that catches gaming?
  Robust           — can it survive audit, or is it self-reported and unverifiable?
  Integrated       — does it fit the wider set, or push against another KPI?
  Cost-effective   — does collecting it cost more than the decision it informs?

Leading vs lagging split:
  Leading indicator  → predicts future outcome, but often gameable (e.g. calls answered <60s)
  Lagging indicator  → confirms the outcome happened, but arrives too late to steer (e.g. annual
                        satisfaction survey)
  A defensible KPI set pairs at least one of each per objective.
```

## 實例演算

**救護車信託**：一個信託匯報 Category A(危及生命)回應時間 KPI 為「75% 召喚喺 8 分鐘內回應」。某季度收到 6,000 個 Category A 召喚；4,500 個喺 8 分鐘內達標，即 75.0%——表面上達標。

```
Headline KPI = 4,500 / 6,000 × 100 = 75.0%  (meets the 75% threshold)
```

但 Goodhart 審計加入一個反制指標：最慢 10% 召喚嘅平均回應時間。

```
Slowest decile mean response = 34 minutes (up from 19 minutes two years earlier)
```

信託達到目標，但尾部——當分流並不完美時，最有可能真正危及生命嘅召喚——卻惡化咗好多，因為救護人員被優先調配去接近 8 分鐘懸崖邊緣嘅召喚，而唔係按臨床緊急程度。單一 KPI 講咗個假故事；配對嘅 KPI 講出真相。

## 與軟件工程嘅關係

為政府開發績效儀表板嘅工程師，功能上就係喺設計機構嘅激勵 API。實際意義：要像對待分子一樣嚴謹咁為*分母*埋點(以單純百分比匯報嘅 KPI 會招致分母操弄——數碼服務中同一陷阱見[每宗交易成本](../每宗交易成本/))；將反制指標放入同一個儀表板，而唔係冇人睇嘅獨立報告，令操弄行為喺決策點即可見；同埋為 KPI 定義做版本管理，因為悄悄重新定義(改變乜嘢算係「召喚」、「個案」或者「完成」)，功能上等同不作公佈就更改目標。[公共價值記分卡](../公共價值記分卡/)係阻止單一 KPI 被孤立解讀嘅一種結構化方式，而[成果為本問責制](../成果為本問責制/)則係挑選單一團隊無法單方面扭曲嘅人口層面 KPI 嘅學問。

## 常見陷阱

- **揀易收集嘅指標而唔揀有意義嘅**：記錄接聽時間輕而易舉；召喚有冇解決市民問題就唔係——但只有後者先係成果。要抗拒預設採用系統已經輸出嘅數據。
- **冇反制指標**：任何同金錢或者聲譽掛鈎嘅 KPI，邊緣上都會被操弄；發佈之前，要配對一個可以捕捉可能操弄途徑嘅指標。
- **重新定義指標而冇變更日誌**：將「接獲召喚」換成「已接聽召喚」以美化趨勢，一經發現就摧毀時間序列嘅公信力——數字旁邊一定要公佈定義變更日誌。
- **混淆活動同結果**：點算已完成嘅巡查係產出；點算已達合規嘅處所就更接近成果(見[成果與產出](../成果與產出/))。

## 資料來源

- National Audit Office, "Choosing the Right FABRIC: A Framework for Performance Information."
  <https://www.nao.org.uk/>
- Marilyn Strathern, "'Improving Ratings': Audit in the British University System," *Social
  Anthropology*, 1997 (formulation of Goodhart's law as commonly cited).
- National Audit Office, investigations into NHS ambulance service performance reporting.
  <https://www.nao.org.uk/>
