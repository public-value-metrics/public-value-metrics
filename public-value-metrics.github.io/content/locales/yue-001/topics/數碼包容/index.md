# 數碼包容

數碼包容(digital inclusion)係確保「數碼為先」唔會變成「只限數碼」嘅一套專業做法——即係以最平渠道為中心設計嘅公共服務，對於唔能夠或者唔願意無人協助下使用嘅市民，依然行得通。GDS 創造咗具體嘅交付機制「輔助數碼」(assisted digital)，並將其定為每項政府數碼服務嘅強制要求，而唔係可有可無嘅附加項目。

## 點解重要

2012 年嘅 Government Digital Strategy 清楚訂下抱負：數碼服務應該以數碼為先建構，但策略本身亦承認，英國大約 10% 嘅成年人，冇協助就無法使用，並承諾各部門提供輔助數碼支援——經電話、親身或透過中介嘅人手協助途徑——作為服務嘅一部分，而唔係事後再補嘅獨立後備方案。呢項承諾而家係[數碼服務標準](../數碼服務標準/)第 5 點：「確保每個人都可以使用服務」。持續被排除嘅規模，由 Lloyds Banking Group 每年嘅英國 Consumer Digital Index 追蹤：2024 年版發現，英國仍有大約 160 萬人處於離線狀態，而且呢個群體明顯偏向 70–79 歲人士、收入低於 £35,000 者，以及退休或失業人士——正正係最可能依賴被重新設計嘅公共服務嘅人群。同一份報告亦發現，只有 48% 嘅英國勞動人口，可以完成 Essential Digital Skills 框架所有 20 項任務，意味排除並非簡單嘅連線二分法，而係技能、信心同信任嘅連續光譜，單靠「有冇寬頻」呢種簡單指標完全捕捉唔到。

## 數學原理

數碼包容係一個框架同公平檢查，而非單一公式，但佢透過[分配加權](../分配權重/)，同量化價值評估結合：

```
Naive channel-shift value:
  value = volume shifted × (cost_old − cost_digital)     [see channel-shift-savings]

Inclusion-adjusted value:
  value = (volume shifted × unweighted saving)
        − (excluded users × cost of assisted-digital provision)
        − (distributional weight adjustment for harm to excluded
           groups who lose access or face degraded service quality)

Assisted digital is not the residual cost of failure — it is a
designed channel with its own [cost-per-transaction](../每宗交易成本/),
typically far higher per-transaction than self-service digital but
still usually cheaper than the legacy channel it partially replaces.
```

## 實例演算

**Universal Credit 式全國福利服務**：每年 250 萬宗申請，按 Government Digital Strategy 規劃假設，估計 10% 嘅申請人需要輔助數碼支援。

```
Excluded/assisted-digital cohort = 2,500,000 × 10% = 250,000 claims/year

Assisted-digital channel cost (phone + face-to-face support,
staffed to handle vulnerability and complexity) ≈ £9.50/claim
  = 250,000 × £9.50 = £2,375,000/year

Self-service digital cost for the other 90% ≈ £0.40/claim
  = 2,250,000 × £0.40 = £900,000/year

Blended cost per transaction = (2,375,000 + 900,000) / 2,500,000
  = £1.31/claim

A design that skips assisted digital to hit a lower headline
cost-per-transaction (e.g. £0.40 blended, ignoring the 250,000
excluded claimants) doesn't eliminate that £2.375m cost — it
converts it into unclaimed entitlements, appeals, and downstream
crisis-service demand that lands on a different budget entirely.
```

## 與軟件工程嘅關係

輔助數碼係一個經設計嘅渠道，即係同其他渠道一樣有介面、服務水平協議(SLA)同量度工具：電話個案主任工具、為 Citizens Advice 或地方政府而設嘅中介入口網站，或者親身自助終端流程。將佢視為事後補充——用小字印喺角落嘅一個電話號碼，而唔係由探索階段已經考慮嘅渠道——係服務喺評估時未能符合[數碼服務標準](../數碼服務標準/)第 5 點最常見嘅原因。數碼包容係呢組其他每個主題嘅公平視角：佢限制[渠道轉移節省](../渠道轉移節省/)可以多進取咁實現，係必須誠實計入[每宗交易成本](../每宗交易成本/)嘅一個項目，亦係[分配加權](../分配權重/)喺數碼服務情境中嘅直接應用——一項不成比例咁落喺本來已經被數碼同經濟排除嘅人身上嘅節省，應該被調低權重，而唔係視為同均勻分佈於全體人口嘅節省等價。

## 常見陷阱

- **將「數碼為先」解讀成「只限數碼」**：一旦數碼使用率越過門檻就關閉電話線或櫃位，卻冇核實剩餘群體有冇真正可用嘅替代方案。
- **以二元連線衡量包容度**：「有寬頻」或「擁有智能手機」，係衡量完成特定交易能力嘅劣質代理指標——Essential Digital Skills 差距(按 Lloyds 2024，只有 48% 英國勞動人口完成所有 20 項任務)顯示，技能同信心同接入一樣重要。
- **將輔助數碼成本當作四捨五入嘅誤差**：將佢編為細小嘅應急項目，而唔係一個有自己[每宗交易成本](../每宗交易成本/)嘅正式渠道，結果喺上線時資金不足同人手不足而感到意外。
- **只調查成功完成數碼流程嘅人**：完全喺服務內進行嘅滿意度同可用性研究，會漏掉從未行到嗰一步嘅人，而佢哋正正係數碼包容工作旨在保護嘅人群。

## 資料來源

- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
- GOV.UK Service Manual, service standard, point 5: make sure everyone can use the service. <https://www.gov.uk/service-manual/service-standard/point-5-make-sure-everyone-can-use-the-service>
- Lloyds Banking Group, Consumer Digital Index. <https://www.lloydsbank.com/banking-with-us/whats-happening/consumer-digital-index.html>
- Ofcom, digital exclusion review. <https://www.ofcom.org.uk/>
