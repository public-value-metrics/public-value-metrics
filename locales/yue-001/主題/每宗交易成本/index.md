# 每宗交易成本

每宗交易成本係政府數碼服務嘅頭條單位經濟指標：某個渠道嘅總交付成本，除以經該渠道完成嘅交易數目。佢係舊 GOV.UK Performance Platform 嘅旗艦數字，亦係推動咗十年「數碼為先」投資嘅數字——正因如此，佢亦係最容易被操縱嘅指標。

## 點解重要

Cabinet Office 2012 年嘅《Digital Efficiency Report》，用令人印象深刻嘅方式比較渠道成本：發現數碼交易成本比電話大約平 20 倍，比面對面大約平 50 倍，地方政府嘅示意數字大約係每宗網上交易 £0.15，電話 £2.83，面對面 £8.62。呢個單一比較，成為重新設計 Government Digital Strategy 所點名嘅 25 項示範服務嘅理據，亦係之後每個引用渠道轉移節省嘅部門業務個案嘅理據。呢個數字作為數量級信號確實有用，但比率完全視乎每一邊計入咗乜：公平嘅電話渠道成本，包括電話中心員工、電話合約、培訓同場地；公平嘅數碼成本，包括託管、持續嘅產品團隊薪酬、處理失敗旅程嘅支援枱時間，以及[數碼服務標準](../數碼服務標準/)第 5 點要求嘅輔助數碼渠道。數碼一方剔走夠多項目，任何服務都會睇落好平。

## 數學原理

```
Cost per transaction = total allocated channel cost / completed transactions

Total allocated channel cost should include:
  + hosting and infrastructure
  + product/engineering/support team cost (amortized)
  + content and service design cost (amortized)
  + assisted-digital / accessibility support cost
  + failure-demand cost (users who fail digital and fall back to phone)
  − one-off build cost is amortized over expected service life, not
    expensed entirely into year one

The common accounting trick:
  "Marginal cost per transaction" (hosting only, once built) is quoted
  as if it were "average cost per transaction" (total cost including
  the team that keeps building and running it). The two can differ by
  10x or more for a service with a large, active delivery team.
```

## 實例演算

**車輛稅續期服務**：每年 400 萬宗交易。

```
Marginal-only figure (the trick):
  Hosting + payment processing only = £180,000/year
  Cost per transaction = 180,000 / 4,000,000 = £0.045
  → headline figure quoted in a business case

Fully-loaded figure (the honest one):
  Hosting + payment                    £180,000
  Product/engineering team (8 FTE)     £720,000
  Support desk (failed/queried txns)   £310,000
  Assisted-digital phone line          £140,000
  Total                                £1,350,000
  Cost per transaction = 1,350,000 / 4,000,000 = £0.3375

The fully-loaded figure is still roughly 8x cheaper than the £2.83
phone-channel comparator from the Digital Efficiency Report — a real
and defensible saving — but 7.5x higher than the marginal-only figure
quoted in the shortcut version. Both numbers are "true"; only one is
comparable to the phone-channel cost it's being set against.
```

## 與軟件工程嘅關係

每宗交易成本係架構決策變成財務數字嘅地方：一個可以順暢自動擴展、需要好少人手干預嘅服務，會隨時間拉低呢個數字；一個因為令人混淆嘅錯誤狀態而產生大量支援工單嘅服務，無論託管效率幾高，都會推高佢。佢係[數碼服務標準](../數碼服務標準/)第 10 點(「界定成功係點樣，並公佈表現數據」)，以及[服務標準與交易指標](../服務標準與交易指標/)嘅自然配套指標，後者列出呢個數字所屬嘅更完整 KPI 組合。佢亦直接餵入[渠道轉移節省](../渠道轉移節省/)嘅計算，並應該同[政府 IT 嘅總擁有成本](../政府資訊科技嘅總擁有成本/)核對，以免平台同共用服務嘅間接成本被靜靜雞漏掉。

## 常見陷阱

- **邊際成本扮成平均成本**：服務建成之後只引用託管成本，遺漏持續維護、迭代同支援嘅團隊——見上面嘅實例。
- **排除輔助數碼成本**：如果[數碼包容](../數碼包容/)所要求嘅電話/紙本後備渠道，被另外計算或者被忽略，渠道就唔算符合「數碼為先」，其真實成本亦冇被捕捉。
- **忽略失敗需求**：由數碼開始但失敗、結果仍然產生電話或紙本表格嘅交易，係數碼渠道嘅成本，而唔係接住失敗嘅渠道嘅成本。
- **跨渠道比較複雜程度不同嘅交易**：電話不成比例地處理困難個案(多名受養人、更正錯誤、弱勢申請人)；除非交易組合配對，將平均電話成本同平均數碼成本比較，會誇大比率。

## 資料來源

- Cabinet Office, Digital Efficiency Report (2012). <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- GOV.UK Service Manual, service standard, point 10: define what success looks like. <https://www.gov.uk/service-manual/service-standard/point-10-define-success-publish-performance-data>
- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
