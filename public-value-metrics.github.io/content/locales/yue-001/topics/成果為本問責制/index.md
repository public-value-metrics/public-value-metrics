# 成果為本問責制

成果為本問責制(Outcomes-Based Accountability，OBA)又稱結果為本問責制(Results-Based Accountability，RBA)，係 Mark Friedman 提出嘅框架，用嚟分開公營界別匯報慣常混為一談嘅兩個問題：「人口整體過得好唔好？」(人口問責)同「呢個特定計劃做得好唔好？」(成效問責)。按 Friedman 嘅講法，將兩者混淆，係管理良好嘅計劃要為自己從來冇能力改變嘅人口趨勢負責嘅最常見原因。

## 點解重要

Friedman 喺 *Trying Hard Is Not Good Enough*(2005)中提出呢個框架，指出大部分公共匯報，不是用沒有單一機構可以控制嘅人口層面統計(少女懷孕率、失業率、預期壽命)淹沒決策者，就係用計劃層面嘅活動點算(接見客戶數目、轉介數目)淹沒佢哋，而呢啲數字完全說明唔到有冇人嘅生活變好咗。RBA 嘅貢獻，係一套精簡而嚴謹嘅詞彙，將兩者分開：人口結果(整個人口嘅福祉狀況，例如「兒童出生時健康」)唔屬於任何單一機構，需要多個夥伴同步推進；成效指標(特定計劃為其特定客戶服務得幾好)則屬於單一機構，只應該根據該機構實際可以影響嘅範圍去評判。Friedman 嘅「三個成效問題」——我哋做咗幾多、做得幾好、有冇人過得更好？——現已融入美國各州同縣嘅人類服務合約，並透過與 RBA 一脈相承嘅顧問公司及工具包 Clear Impact，廣泛用於英國同英聯邦地方政府嘅委託工作。實際影響在於合約層面：房屋計劃唔應該因為城市嘅無家可歸率因為佢影響唔到嘅宏觀經濟原因上升而被削減資助，但如果佢自己嘅客戶冇獲得安置，就絕對應該削減。

## 數學原理

```
Population accountability (the "big picture" a community, region, or nation shares):
  Result       — a condition of wellbeing (e.g. "residents are economically secure")
  Indicator(s) — a measure of that condition (e.g. unemployment rate, median household income)
  → no single programme owns the indicator; movement requires many contributors

Performance accountability (what one programme is responsible for):
  How much did we do?      — activity volume (clients served, units delivered)
  How well did we do it?   — quality/efficiency (% completing programme, cost per client)
  Is anyone better off?    — the outcome that matters (% in employment 6 months after
                              programme, before/after or against a comparison group)

A programme is judged on the third performance question, never on the population
indicator directly, unless its scale and design could plausibly move it alone.
```

## 實例演算

**市政府資助嘅就業支援計劃**，每年 500 名參加者，由地方政府按 RBA 式成效框架簽約委託：

```
Population indicator (context, not the programme's scorecard):
  City unemployment rate: 6.2% (up from 5.8% the prior year, driven by a factory closure
  outside the programme's control)

Performance measures (the programme's actual accountability):
  How much:   500 participants enrolled (target 480) — met
  How well:   78% completion rate; cost per completer = £340,000 / 390 completers ≈ £872
  Better off: of 390 completers, 260 in sustained employment at 6 months = 66.7%
              versus a matched comparison group's 41% (see counterfactual-analysis)
```

如果按人口問責去睇，計劃似乎失敗——城市嘅失業率喺佢任內上升。但按 RBA 嘅成效問責去睇，計劃係成功嘅：達到人數目標、質素維持穩定，所產生嘅就業成果比配對對照組高 25.7 個百分點，而人口指標嘅變動，源於完全超出計劃控制範圍嘅原因(工廠關閉)。

## 與軟件工程嘅關係

RBA 可以直接對應 SRE 熟悉嘅區分：人口指標好似商業層面嘅北極星指標(North Star metrics)，冇任何單一工程團隊由頭到尾擁有(公司收入、市場佔有率)，而成效指標則好似團隊自己嘅 SLO——團隊設計決策真正可以推動嘅事物。一個同時匯報兩者、卻冇標明邊個係邊個嘅儀表板，正正招致 RBA 想預防嘅歸因錯誤：值班工程師因為依賴團隊控制嘅指標而被問責。為成果合約委託或者開發匯報工具時，應該將「做咗幾多／做得幾好／有冇人過得更好」三項設為一級、可獨立篩選嘅欄位，而唔係一個混合嘅 KPI——呢個同[公營界別 KPI](../公營界別關鍵績效指標/)中分開領先同滯後指標係同一種紀律。RBA 亦係[按成果付款及社會影響力債券](../按成果付款與社會影響力債券/)背後嘅問責邏輯：按成果付款合約，只可以公平咁按「有冇人過得更好」嘅成效指標付款，除非干預措施真係人口指標嘅主導因素，否則絕不可以按人口指標付款。

## 常見陷阱

- **按一個計劃控制唔到嘅人口指標，對佢作出獎賞或者懲罰**：呢個正正係 RBA 要防止嘅單一錯誤；將後果同人口結果掛鈎之前，一定要追查計劃對人口結果係主要定次要貢獻者。
- **將「做咗幾多」當成「有冇人過得更好」匯報**：活動點算(接見客戶數目)係最易收集、但資訊量最少嘅數據；要堅持用真實成果數據回答「有冇人過得更好」，最好對照反事實(見[反事實分析](../反事實分析/))。
- **將 RBA 指標視為永遠不變**：Friedman 嘅方法明確係迭代式——「數據、故事、有效做法、行動計劃」循環——而唔係一次性記分卡設計練習。
- **「有冇人過得更好」冇對照組**：冇反事實嘅前後變化，會將計劃效果同人口本來都會出現嘅趨勢混淆。

## 資料來源

- Mark Friedman, *Trying Hard Is Not Good Enough: How to Produce Measurable Improvements for
  Customers and Communities*, Trafford Publishing, 2005.
- Clear Impact, "What is Results-Based Accountability?"
  <https://clearimpact.com/results-based-accountability/>
