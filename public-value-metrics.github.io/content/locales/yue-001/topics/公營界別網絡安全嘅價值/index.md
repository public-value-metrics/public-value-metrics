# 公營界別網絡安全嘅價值

公營界別網絡安全價值，係為風險降低定價嘅學問：令市民數據外洩嘅可能性降低，值幾多錢？因為安全開支喺運作良好時冇可見產出，一旦失敗卻極之顯眼。對於持有福利記錄、健康數據或者稅務記錄嘅服務嚟講，「運作時隱形」呢個特性，正正係佢需要明確價值論證、而唔只係合規剔格嘅原因。

## 點解重要

英國 National Cyber Security Centre 嘅 Cyber Assessment Framework(CAF，網絡評估框架)，為公營機構提供結構化方式，令安全成為可評估、以成果為本嘅工作，而唔係核對清單：佢界定四大目標(管理安全風險、防禦網絡攻擊、偵測網絡安全事件、將事故影響減至最低)，再細分為系統負責人可被評估嘅貢獻成果，精神上同[數碼服務標準](../數碼服務標準/)第 9 點(「建立保障用戶私隱嘅安全服務」)一致。CAF 評估所防範嘅事情，有文獻記載嘅價碼：IBM 嘅《Cost of a Data Breach Report》追蹤各行業嘅平均外洩成本，一直發現公營界別相比金融或者醫療處於較低水平——近年版本顯示公營界別平均每次外洩大約 $2.6–2.9 million——但「低過金融」唔等於「低」，而且政府外洩帶來嘅代價，報告數字並未完全涵蓋：市民對數碼渠道嘅信任流失，會壓低渠道轉移商業個案所依賴嘅[數碼採用率](../渠道轉移節省/)，以及外洩原本由國家強制市民提交嘅數據所帶來嘅政治同法律代價。

## 數學原理

安全投資嘅估值方式，同任何降低風險嘅開支一樣：以預期損失減少計算，運用經典風險管理恆等式。

```
Annualized Loss Expectancy (ALE) = Single Loss Expectancy (SLE)
                                  × Annualized Rate of Occurrence (ARO)

Value of a security control =
  ALE_before_control − ALE_after_control − annual cost of the control

A control is worth funding when:
  (ALE_before − ALE_after) > annual cost of the control

CAF assessment doesn't directly output a probability, but a service's
CAF outcome profile (which contributing outcomes are "achieved",
"partially achieved", or "not achieved") is a reasonable proxy input
to estimate ARO — a system with unmanaged privileged access or no
tested incident response plan has a materially higher realistic ARO
than one with both in place.
```

## 實例演算

**郡議會持有 40,000 名居民社會護理記錄嘅個案管理系統**：

```
Single Loss Expectancy (breach cost), using a public-sector-sector
average from a recent IBM Cost of a Data Breach Report ≈ £2.1m
(converted, order-of-magnitude figure — always re-derive from the
current report edition rather than reusing a fixed number)

Current ARO (unmanaged privileged access, no tested incident
response, per an internal CAF self-assessment showing multiple
"not achieved" outcomes) ≈ estimated 8% per year
  ALE_before = £2.1m × 0.08 = £168,000/year

Proposed control: privileged access management + tested incident
response plan, moving the relevant CAF outcomes to "achieved",
estimated to cut ARO to 3%/year
  ALE_after = £2.1m × 0.03 = £63,000/year

Annual cost of the control (tooling + process + testing) = £45,000

Value of the control = (168,000 − 63,000) − 45,000 = £60,000/year
  net positive — fund it. The arithmetic also shows the control
  would still be worth funding at nearly triple the cost, which is
  the kind of sensitivity check that should accompany any ALE figure
  built on estimated probabilities.
```

## 與軟件工程嘅關係

ALE 公式入面大部分槓桿都喺工程師手上：存取控制設計、依賴項同修補衛生、日誌同偵測覆蓋、事故回應工具，全部都直接影響 ARO 項，所以 CAF 評估讀落同政策審計一樣似技術架構審查。呢個就係最嚴重形式嘅[技術債作為公共價值嘅侵蝕](../技術債務-侵蝕公共價值/)——未修補、未監控、存取控制欠佳嘅系統，係利息為尾部風險、而非穩定拖累嘅債務——並應該同[政府資訊科技總擁有成本](../政府資訊科技嘅總擁有成本/)對賬，令安全開支唔會被視為同系統實際運作成本分開。佢亦直接輸入 Green Book 下嘅[物有所值](../物有所值/)評估：經風險調整嘅成本，係任何方案評估「成本」一方嘅一部分，而唔係最後先補上嘅事後之想。

## 常見陷阱

- **將 CAF 自我評估當作安全本身**：完成嘅評估描述咗安全狀況，但並唔創造安全——價值在於所達成嘅成果，而唔係文件。
- **未經調整就將全球平均外洩成本當作本地估算**：IBM 嘅數字係大型、多樣樣本嘅平均值；小型地方政府現實嘅單次損失預期，好少同國家級政府部門相同。
- **忽略投資決策中嘅尾部風險心理**：年度機率低，令安全開支容易無止境咁押後，直至出事嗰一年——好似實例演算咁，對一系列 ARO 做 ALE 計算敏感度測試，可以對抗呢種傾向。
- **只計 IBM 式外洩成本，不計信任成本**：令市民唔願意使用數碼渠道嘅外洩事件，會令[渠道轉移節省](../渠道轉移節省/)個案喺其後多年受損，呢項成本好少計入外洩成本估算。

## 資料來源

- National Cyber Security Centre, Cyber Assessment Framework. <https://www.ncsc.gov.uk/collection/caf>
- IBM, Cost of a Data Breach Report. <https://www.ibm.com/reports/data-breach>
- GOV.UK Service Manual, service standard, point 9: create a secure service which protects users' privacy. <https://www.gov.uk/service-manual/service-standard/point-9-create-a-secure-service>
