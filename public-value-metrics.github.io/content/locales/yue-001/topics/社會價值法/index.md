# 社會價值法

《Public Services (Social Value) Act 2012》(《2012 年公共服務(社會價值)法令》)係英國一項法定責任，要求英格蘭同威爾斯嘅公共機構，喺公共服務合約開始採購程序之前，考慮所採購嘅項目可以如何改善相關地區嘅經濟、社會同環境福祉，並考慮就此進行諮詢。呢項法令喺 2013 年 1 月生效，原本係相對寬鬆嘅「須予考慮」責任，其後被 2021 年 1 月嘅 Procurement Policy Note(採購政策指引，PPN)06/20 大幅加強，要求中央政府合約必須明確評估(而非只係考慮)社會價值，並喺評審準則中設最低權重。

## 點解重要

喺 PPN 06/20 之前，「考慮」社會價值，只要委託人記錄佢哋諗過就算履行，冇要求必須影響批授決定——呢項責任喺紙面上容易履行，實際上容易被忽視。PPN 06/20 為中央政府採購堵塞咗呢個缺口：規定社會價值必須喺投標評估中計分，並圍繞五個國家優先主題——COVID-19 復甦、處理經濟不平等、對抗氣候變化、平等機會同福祉——而且通常用 Social Value Portal 維護嘅 National TOMs(Themes, Outcomes, Measures)框架量度。對於為公共部門開發採購、合約管理或者投標支援工具嘅軟件工程師嚟講，呢個係客戶被要求遵守嘅法律基礎，而唔係可有可無嘅附加項目。

## 數學原理

社會價值屬於框架型課題；佢嘅「數學」係大部分機構採用嘅評分結構：

```
Total tender score = Price/cost weighting + Quality weighting + Social value weighting

PPN 06/20 (central government): social value weighting ≥ 10% of total score

Social value themes (PPN 06/20):
 1. COVID-19 recovery
 2. Tackling economic inequality
 3. Fighting climate change
 4. Equal opportunity
 5. Wellbeing
```

投標人通常用[單位成本數據庫](../單位成本數據庫/)，將佢哋喺呢啲主題下嘅承諾貨幣化，而[社會投資回報](../社會投資回報/)所用嘅同一貨幣化邏輯亦適用：承諾應該有證據、可歸因於合約，並且唔好同其他資金重複計算。

## 實例演算

**地方政府資訊科技合約**：一份價值 £2 million、為期 3 年嘅合約，評分比重為質素 60%、價格 30%、社會價值 10%。投標人 A 承諾提供 2 個學徒職位、£150,000 本地分包開支，以及為本地學校提供 200 小時免費數碼技能培訓，用單位成本數據庫嘅替代值貨幣化，合共 £90,000 額外社會價值。投標人 B 承諾一個較細嘅方案，貨幣化為 £40,000。如果機構按最強投標嘅比例為社會價值評分，投標人 A 得到滿分 10 分；投標人 B 得到 10 × (£40,000 ÷ £90,000) = 4.4 分——5.6 分嘅差距，即使質素同價格相近，都可以決定合約誰屬。

**志願界別投標人**：一間細型 VCSE(志願、社區同社會企業)競投綠化維護合約，對手係商業公司，單靠單價無法競爭，但用 Global Value Exchange 嘅替代值，將現有嘅社區就業同義工承諾貨幣化，建立一個有證據支持、值得同價格同質素一齊計分嘅社會價值論據。

## 與軟件工程嘅關係

以貨幣化社會價值承諾贏得投標，會產生責任，要透過合約管理證明承諾已履行——用工具記錄學徒開始日期、本地開支同培訓時數，對照投標時計分嘅具體承諾，並納入合約檢討會議，而唔係合約簽署後就被遺忘。G-Cloud 同 Digital Marketplace 嘅上架，愈來愈要求喺上架時提交社會價值聲明。承諾背後嘅估值方法，見[社會投資回報](../社會投資回報/)；投標人採用嘅替代值，見[單位成本數據庫](../單位成本數據庫/)；確保所履行嘅承諾係成果而唔只係活動數量，見[成果與產出](../成果與產出/)。

## 常見陷阱

- **為投標披上社會價值外衣。** 含糊嘅承諾(「我哋支持本地社區」)喺合約管理期間無法量度或者追究，計分好但冇可核實嘅交付。
- **將社會價值當作決勝因素。** PPN 06/20 要求社會價值必須喺授標準則內明確評估，而唔係非正式地用嚟打破其他方面相等嘅投標之間嘅平局。
- **冇合約管理跟進。** 投標時計分嘅承諾，經常喺交付期間從未被追蹤——見[效益實現](../效益實現/)。
- **各合約之間嘅量度框架不一致。** 對不同合約中類似嘅承諾使用不同嘅替代值來源，令組合層面嘅比較變得毫無意義，呢個正係 National TOMs 同共用單位成本數據庫等通用框架存在嘅原因。

## 資料來源

- Public Services (Social Value) Act 2012. <https://www.legislation.gov.uk/ukpga/2012/3/contents>
- Cabinet Office, Procurement Policy Note 06/20, "Taking Account of Social Value in the Award of
  Central Government Contracts." <https://www.gov.uk/government/publications/procurement-policy-note-0620-taking-account-of-social-value-in-the-award-of-central-government-contracts>
- Social Value Portal, National TOMs Framework. <https://socialvalueportal.com/national-toms/>
