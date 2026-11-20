# 額外性同死重效應

額外性要問嘅係：一項干預措施，有冇引致一個本來唔會發生嘅成果。死重效應(deadweight)正正係額外性嘅鏡像：即係某個成果之中，就算冇呢個計劃、資助或者補貼，都一樣會發生嘅部分。政府計劃或者慈善機構所講嘅成效，幾乎都會誇大，直至扣除死重效應為止；所以英國嘅評估指引，會將死重效應視為任何頭條數字最先、亦最重要嘅調整。

## 點解重要

「我哋支持咗 500 間企業增長」聽落好似好有成就，但如果當中有 300 間企業本身都會增長——因為本地經濟正喺度復甦、因為佢哋有其他資金來源、因為計劃開始之前佢哋已經行緊增長軌道——咁計劃真正嘅額外貢獻就係 200，而唔係 500。HM Treasury(英國財政部)嘅 Magenta Book，同埋歷史悠久嘅 HM Treasury/BIS「Additionality Guide」(最初為區域發展同重建計劃而編制，之後廣泛用於英國政府嘅評估工作)，都將死重效應定為標準淨影響計算次序嘅第一步調整：總效果減死重效應，減排擠效應，減外溢流失，再按乘數效應調整，就得出淨額外影響。跳過呢一步，係公共同社會界別嘅影響聲稱被誇大嘅最常見原因，不論係有意定無意——一個只量度參加者總成果、冇對照組嘅資助計劃，根本分唔出自己嘅效果同就算冇計劃都會發生嘅事。

死重效應唔係一個固定百分比；佢完全視乎特定人群同干預措施嘅反事實(counterfactual)(見[反事實分析](../反事實分析/))。以往區域發展局(Regional Development Agencies)時期，英格蘭嘅區域發展評估普遍發現，按企業支援類型，死重率大約喺 20–60% 之間；所以可信嘅計劃評估會報告一個經死重調整嘅範圍，而唔係單一嘅假設數字，亦因此 National Lottery Community Fund 同 Big Society Capital 等資助機構，要求受助者喺成果匯報入面明確處理死重效應，而唔係只匯報參加者總人數。

## 數學原理

英國評估指引(Magenta Book；HM Treasury/BIS Additionality Guide；ESIF 同結構基金評估指引)所列嘅標準淨影響調整次序：

```
Gross outcome (總成果)
  − Deadweight       (死重效應：就算冇干預都會發生嘅部分)
  − Displacement     (排擠效應：由其他地方轉移過嚟、而非新創造嘅活動/效益 — 見
                       displacement-and-attribution)
  − Leakage          (外溢流失：流向目標群組/地區以外嘅效益)
  × Multiplier        (乘數效應：額外嘅間接/誘發經濟活動，如屬正面)
  = Net additional impact (淨額外影響)
```

死重率(以比例表示)：

```
Deadweight rate = outcomes that would have occurred without the intervention
                   / total gross outcomes observed

Net additional outcomes = Gross outcomes × (1 − Deadweight rate)
```

## 實例演算

**企業支援資助計劃**：一個區域資助計劃匯報，500 間獲支援企業喺翌年增加咗就業，平均每間 3 個職位——總共聲稱創造 1,500 個職位。

一個配對對照組(由類似但冇獲支援嘅企業組成，見[反事實分析](../反事實分析/))顯示，根據配對組喺同一時期嘅表現，獲支援企業嘅就業增長中有 40% 本來都會發生。

```
Deadweight rate = 40%
Net additional jobs = 1,500 × (1 − 0.40) = 900 jobs
```

計劃可以老實匯報嘅成果係 900 個職位，而唔係 1,500 個——單單死重調整已經減咗 40%，仲未計排擠效應同外溢流失。

**慈善機構就業計劃**：一間慈善機構以 £600,000 嘅成本，幫 200 名長期失業人士就業(總計每個安置 £3,000)。全國勞動市場數據顯示，如果冇任何干預，一個可比較嘅長期失業群組，同一時期內大約有 15% 會透過勞動市場自然流動搵到工作。

```
Deadweight rate = 15%
Net additional placements = 200 × (1 − 0.15) = 170
True cost per additional placement = £600,000 / 170 ≈ £3,529
```

總成本計出嚟嘅每個安置成本(£3,000)，低估咗呢間慈善機構額外貢獻嘅真實成本大約 15%。

## 與軟件工程嘅關係

對於為公共或社會界別開發影響量度或者資助管理軟件嘅人，額外性同死重效應有直接關係：

- 成果匯報系統應該喺設計上就捕捉對照組或基線組，而唔只係參加者成果——系統上線後先補做反事實，遠比一開始就built in 困難(見[反事實分析](../反事實分析/))。
- 只匯報參加者總人數嘅儀表板，會有系統地向資助者同監督機構誇大影響；如果有死重估算(來自評估文獻或者對照組)，軟件應該將扣除死重後嘅數字同總數並列顯示，而唔係取代總數。
- 呢點同[社會投資回報](../社會投資回報/)直接相關：SROI 比率要先由總聲稱成果中扣除死重效應(同排擠效應)，先至可信——一個冇呢一步嘅 SROI 計算器，會得出膨脹咗、經唔起檢視嘅比率。

## 常見陷阱

- **將總成果當作全部都係額外成果匯報。** 呢個係資助同計劃匯報入面最常見嘅影響量度錯誤；公佈頭條數字之前，一定要問「冇呢個計劃都會發生嗎？」
- **以為單一死重百分比放諸四海皆準。** 死重效應因行業、人群同本地經濟狀況而相差好遠；應該用對照組或者針對該行業嘅證據，而唔係套用一個毫不相干嘅評估所得出嘅數字。
- **混淆死重效應同排擠效應。** 死重效應講嘅係同一批參加者嘅反事實成果；排擠效應講嘅係對其他人或者其他地方嘅影響——見[排擠效應與歸因](../挪移效應與歸因/)。兩者混淆，會令調整重複計算或者少計。
- **由參加者自我匯報死重效應。** 問受益人「冇我哋幫手，呢件事會唔會都發生？」，得出嘅死重估算會系統性偏低(參加者傾向將功勞歸畀計劃)；獨立對照組可靠得多。

## 資料來源

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020).
  <https://www.gov.uk/government/publications/the-magenta-book>
- HM Treasury / Department for Business, Innovation and Skills, "Additionality Guide: A Standard
  Approach to Assessing the Additional Impact of Interventions" (3rd edition), originally developed
  with English Partnerships and the Housing Corporation.
- European Commission, "Evalsed: The Resource for the Evaluation of Socio-Economic Development" —
  guidance on deadweight, displacement, and leakage in structural-funds evaluation.
- National Lottery Community Fund, "Guidance on Outcomes and Impact Reporting." <https://www.tnlcommunityfund.org.uk/>
