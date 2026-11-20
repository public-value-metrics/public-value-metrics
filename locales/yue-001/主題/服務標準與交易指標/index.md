# 服務標準與交易指標

GOV.UK Service Standard(服務標準)係英國政府為建立同營運公共數碼服務而設嘅 14 點核對清單，並配有一組細小、強制性嘅量化交易指標——每宗交易成本、完成率、數碼採用率同用戶滿意度——每項中央政府運作中服務嘅團隊都必須公佈。標準同指標合起來，係本知識庫中更廣泛嘅公共價值同 KPI 框架喺營運層面、日常運作上嘅專門化，直接針對軟件交付團隊。

## 點解重要

服務標準由 GOV.UK 服務手冊維護，要求政府數碼服務嘅每次階段評估(alpha、beta、live)，須喺其 14 點之中證明：團隊明白用戶需要、以跨專業團隊運作、經常迭代改善，以及*評估工具、系統同工作方式*。歷史上，呢個同公開嘅 Performance Platform 並行，每項運作中嘅服務喺嗰度公開發佈交易數據；該平台其後已經停用，但量度同發佈呢四項核心指標嘅基本責任，仍透過服務手冊「measuring success」指引延續。呢個同一般軟件 KPI 儀表板不同，原因在於呢啲指標係明確設計成一個互相連繫嘅經濟模型，而唔係四個獨立分數：數碼政府嘅整個節省理據——Government Digital Service 嘅 Digital Efficiency Report 發現，對於可比嘅地方政府服務，數碼交易成本約為電話嘅二十分之一，約為面對面嘅五十分之一——只有喺完成率維持高企、數碼採用率真正上升嘅情況下先會實現，而唔係只係喺不變嘅昂貴渠道旁邊，多加一個廉價渠道。

## 數學原理

```
Cost per transaction = total service running cost / number of completed transactions
Completion rate       = transactions completed / transactions started × 100
Digital take-up       = digital-channel transactions / all-channel transactions × 100
User satisfaction     = % satisfied + very satisfied, in-service 5-point survey

Channel-shift saving = transaction volume × take-up shift × (cost per transaction on
                        the old channel − cost per transaction digitally)

Failure-demand cost = (1 − completion rate) × transactions attempted digitally ×
                        cost of the fallback channel those users then use instead
```

## 實例演算

**中央政府牌照續期服務(說明用)**，每年 200 萬宗交易，現時 65% 經電話(每宗 £3.00)、35% 經數碼(每宗 £0.30)，完成率 80%。按 14 點服務標準重新設計後，數碼採用率升至 60%，完成率升至 92%：

```
Take-up shift saving = 2,000,000 × 0.25 × (3.00 − 0.30) = £1,350,000/year

Failure-demand cost, before:
  2,000,000 × 0.35 × (1 − 0.80) × £3.00 = £420,000/year (abandoners fall back to phone)

Failure-demand cost, after:
  2,000,000 × 0.60 × (1 − 0.92) × £3.00 = £288,000/year

Net failure-demand saving = £420,000 − £288,000 = £132,000/year

Total annual saving ≈ £1,350,000 + £132,000 = £1,482,000/year
```

呢個算術清楚說明點解完成率唔係次要指標：如果冇由 80% 提升至 92%，採用率轉移所帶來嘅節省，會有一部分被失敗需求(failure demand)抵銷，將受挫嘅數碼用戶直接推返去昂貴嘅電話渠道。

## 與軟件工程嘅關係

呢四項指標係成本後果儀表板嘅實例：一項成本指標同三項成果／質素指標分開擺放，刻意從不壓縮成單一分數——同[公營界別 KPI](../公營界別關鍵績效指標/)所主張嘅紀律一致。對工程師嚟講，呢點分拆為具體、可負責嘅工作：完成率係漏斗埋點問題，旅程中每個放棄位置原則上都可以定位同修復；每宗交易成本需要真正嘅單位成本核算，包括員工協助同紙本渠道成本，而唔只係雲端託管開支(見[每宗交易成本](../每宗交易成本/)同[政府資訊科技總擁有成本](../政府資訊科技嘅總擁有成本/))；數碼採用率則係披住效率外衣嘅公平指標——無法或者唔願意轉換渠道嘅市民，不成比例地係長者、殘疾人士或者數碼排斥人士，所以積極關閉渠道，會將「節省」變成使用權益受損(見[數碼共融](../數碼包容/)同[渠道轉移節省](../渠道轉移節省/))。14 點標準本身就係呢啲數字背後嘅流程規範——標準全文請見[數碼服務標準](../數碼服務標準/)，而此處嘅滿意度數字同更廣泛信任量度嘅關係，請見[市民滿意度指標](../市民滿意度指標/)。

## 常見陷阱

- **靠關閉替代渠道換取採用率**：結束電話熱線會喺算術上提升數碼採用率百分比，同時將失敗需求拋給剩餘嘅渠道(往往係成本更高嘅協助數碼或者面對面途徑)；一定要量度整個系統嘅總成本，而唔只係比率。
- **由漏斗第二步先開始量度完成率**：將「已開始」點算起點定喺第一個真正流失點之後，會美化完成率，並隱藏最大嘅可修復損失。
- **每宗交易成本不計協助數碼支援**：只計數碼單位成本、忽略協助無法自助用戶嘅員工時間，會低估該渠道嘅真實成本。
- **發佈指標但各服務並無共同定義**：「交易」同「已完成」喺唔同服務團隊嘅意思各異，除非定義標準化並有版本管理，否則跨服務比較並不可靠。

## 資料來源

- GOV.UK Service Manual, "The Service Standard." <https://www.gov.uk/service-manual/service-standard>
- GOV.UK Service Manual, "Measuring Success — Data You Must Publish."
  <https://www.gov.uk/service-manual/measuring-success/data-you-must-publish>
- GOV.UK, "Digital Efficiency Report."
  <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
