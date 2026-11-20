# 政府嘅成本效益分析(成本效能分析)

成本效能分析(cost-effectiveness analysis，CEA)比較達致*同一*成果嘅各種方法嘅成本，成果以自然單位表示——每個露宿者獲安置嘅成本、每名學生達到預期水平嘅成本、每減排一公噸二氧化碳嘅成本——而唔將成果本身換算成金錢。

## 點解重要

當[社會成本效益分析](../社會成本效益分析/)要求將每項效益貨幣化，變得唔只困難而且失實——即係要為成果定一個可信價格，需要冇人真正持有嘅假設——Green Book 就將 CEA 視為後備方法(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>，第 5 章，關於成果難以貨幣化嘅方案評估)。CEA 係最直接借鑑自衛生經濟學嘅方法——結構上同 NICE 用每個質素調整生命年(QALY)成本比較治療方法完全一樣——只不過應用於非衛生類公共計劃：每個學生成果分數嘅教育干預、每個避免露宿家庭嘅房屋計劃、每個持續就業成果嘅就業計劃。

CEA 能夠同 SCBA 並存而唔被取代，原因在於，強行為某啲成果加上貨幣價值，會產生一個精確到好似有權威、但又富爭議到喺公眾辯論中毫無價值嘅數字——為「一名兒童達到預期閱讀水平」定價，正正會招來喺專責委員會令業務個案脫軌嘅挑戰。CEA 靠拒絕呢場爭論嚟避開佢：佢按*成果本身*每單位嘅成本去排序方案，而成果值唔值得追求呢個獨立嘅政治判斷，就留畀策略個案處理。

## 數學原理

```
Cost-effectiveness ratio (average) = Total cost / Total outcome units achieved

Incremental cost-effectiveness ratio (ICER), comparing option A to option B:
ICER = (Cost_A − Cost_B) / (Outcome_A − Outcome_B)

Procedure:
1. Fix the outcome unit and measurement method across all options being compared.
2. Cost every option on the same basis (see ../green-book-appraisal/, financial case)
   over the same time horizon.
3. Discard dominated options: any option costing more per unit than a cheaper
   alternative achieving the same or better outcome is dropped.
4. Rank remaining options by incremental, not average, cost-effectiveness ratio.
```

CEA 本身並唔能夠說明一個計劃究竟值唔值得資助——只能說明達致同一目標嘅幾種方法之中，邊個每單位最平。要決定目標本身值唔值得花費，要麼轉回 SCBA(如果有可信嘅估值)，要麼需要數學之外嘅政治/策略判斷。如果成果真係無法歸約成單一單位——因為一個計劃產生數個以不同方式重要嘅成果——就改用[多準則決策分析](../多準則決策分析/)。

## 實例演算

**地方政府**：一個議會比較三種減少露宿嘅方法，每種按一年成本計算，成果為「個人遷入穩定住所達 6 個月或以上」：

```
Option                          Cost       Outcomes achieved   Avg CER
Housing First (intensive)       £900,000   60                  £15,000/outcome
Hostel + move-on support        £600,000   50                  £12,000/outcome
Outreach + private rented sector £350,000  20                  £17,500/outcome

ICER, Hostel vs Outreach:  (600k−350k)/(50−20) = £8,333 per additional outcome
ICER, Housing First vs Hostel: (900k−600k)/(60−50) = £30,000 per additional outcome
```

按平均成本計，外展方案被宿舍方案支配(dominated)，但由外展升級到宿舍嘅*增量*一步，每多安置一人只需 £8,333——相對於 Housing First 嗰一步(喺宿舍所達成嘅人數之上，每多一人要 £30,000)，算係便宜。預算有限嘅議會擴大規模時，應該先擴充宿舍而非 Housing First，儘管 Housing First 按自身嘅平均比率睇似乎更好。

**中央政府**：一個識字補底計劃，按「每名達到符合年齡閱讀水平嘅學生成本」比較三種交付模式：一對一輔導(每名學生 £1,800)、小組輔導(每名學生 £700)，以及純數碼干預(每名學生 £150，但經調整參與流失之後，每名登記學生達致成果嘅比率只有小組輔導嘅 40%)。按實際完成情況調整後，純數碼干預每名達標學生成本 £375——仍然係最平，但 CEA 無法說明，若純數碼干預同小組輔導預算相同，所幫助嘅學生絕對人數較少，同以更深程度惠及較少學生相比，究竟係咪可以接受嘅取捨；呢個係 CEA 交返畀決策者嘅分配判斷。

## 與軟件工程嘅關係

每當工程團隊為*同一*服務成果評估交付方案時，CEA 就係合適嘅框架——三個身份核實供應商之間每個成功核實身份嘅成本、兩種個案處理自動化設計之間每個正確分流個案嘅成本、內部對外判補救之間每個已解決無障礙缺陷嘅成本。佢直接引入嘅做法係：比較成本之前先界定成果單位(唔係「已結案工單」——呢個係產出——而係「用戶需要真正得到解決」)，並且永遠計算現行系統同建議替代系統之間嘅增量比率，而唔係孤立咁睇每個系統嘅平均成本。見[成果與產出](../成果與產出/)同[每個成果成本](../每個成果成本/)。

## 常見陷阱

- **決定是否擴張時，比較平均比率而非增量比率。** 正如露宿例子所示，平均比率最佳嘅方案，唔一定係下一個單位成果最平嘅購買選擇。
- **選擇一個實際上係產出嘅成果單位。** 「已作轉介」或「已提供課節」量度嘅係活動，而非計劃旨在產生嘅成果；基於產出嘅 CEA 會產生一個睇落有信心嘅數字，但答錯咗問題。
- **跨越真正唔同嘅成果作比較。** 只有當每個方案針對同一成果、以同樣方式量度時，CEA 先有效；將「每名獲安置露宿者成本」同「每名離院青年穩定租住成本」作比較，需要通用成果量度或者[多準則決策分析](../多準則決策分析/)，而非 CEA。
- **忽略成果持久性。** 一個較平但成果唔持久嘅方案(干預結束後學生退步)，喺可比較嘅時間範圍內量度，其實並唔更具成本效能；被比較嘅各方案，跟進期要一致。

## 資料來源

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Chapter 5.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- National Institute for Health and Care Excellence. "Developing NICE guidelines: the manual" —
  the cost-effectiveness method this government adaptation borrows from.
  <https://www.nice.org.uk/process/pmg20>
- What Works Centre for Homelessness Impact. Cost-effectiveness evidence on homelessness
  interventions. <https://whatworks-homelessness.org.uk/>
