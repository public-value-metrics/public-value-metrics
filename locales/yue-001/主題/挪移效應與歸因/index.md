# 挪移效應與歸因

挪移效應（displacement）係指一個計劃表面上嘅好處，其實係從別處搶走活動或利益而來，並非創造新嘅價值——你贏嘅，就係人哋輸嘅。歸因（attribution）係相關嘅另一個問題：當有其他參與者同因素都有貢獻時，你嘅介入措施可以合理地將幾多觀察到嘅成果記喺自己名下。呢兩項都係英國公共部門評價指引入面嘅標準調整項目，同死重（deadweight）、外溢（leakage）並列，但喺好多看落去成效驚人嘅影響力聲稱入面，往往被略過。

## 點解重要

一個地方政府嘅商業資助計劃幫 50 間舖頭搬入重建區，可以匯報「支持 50 間企業、創造 200 個職位」——但如果呢啲企業只係由隔離嘅高街搬過嚟而非擴充，咁啲職位係被挪移咗而非創造出嚟，全區（或者全地區）嘅淨效果可能接近零。HM Treasury（英國財政部）嘅《Magenta Book》同行之已久嘅《額外性指南》（Additionality Guide）都將挪移效應列為必須扣減嘅項目，正正因為即使冇為全國或地區帶來淨利益，地方成功故事仍然好常見——價值只係搬咗位，而且往往損害咗失去佢嘅地區或持份者。結構性基金評價指引（用於前歐盟區域發展基金計劃同其本國繼承者，例如英國共享繁榮基金）將呢點正式分成三個空間層次：地方挪移（鎮內）、區域挪移（地區內）同全國挪移（全英國），因為一項介入可以喺某個層次係額外嘅，但喺更闊嘅層次純屬挪移——一個從隔離市鎮吸引工人過嚟嘅就業計劃，即使睇落係地方成功，喺全國層面都係中性。

歸因係夥伴協作交付中嘅姊妹問題，而夥伴協作而家已成為社會服務同跨機構公共服務工作嘅常態。當三個機構聯合提供預防無家者服務，每個機構嘅年報都可能各自聲稱對露宿者減少負責——將各份報告加埋，聲稱嘅影響可以超出現實觀察到嘅變化，有時甚至高出好幾倍。《Magenta Book》有關貢獻分析（contribution analysis）嘅指引正正因為咁而存在：喺多機構交付入面，將成果隨機歸因俾單一參與者往往做唔到，誠實嘅答案經常係「我哋對呢個成果有貢獻」，而唔係「我哋造成咗呢個成果」。

## 數學原理

挪移效應係標準淨影響計算序列嘅一部分（完整鏈條見 [額外性與死重](../額外性同死重效應/)）：

```
Net additional impact = Gross outcome − Deadweight − Displacement − Leakage, × Multiplier

Displacement rate = benefit/activity diverted from elsewhere
                     / total gross benefit/activity observed
```

當多個參與者對同一成果有貢獻時，歸因通常以貢獻比例而非精確百分比表達，因為佢通常冇辦法好似挪移效應咁嚴謹地量度：

```
Attributable share ≈ f(strength of causal contribution, other actors' contributions,
                        external/contextual factors)

Claimed impact should never exceed:
  Σ (each partner's attributable share) ≤ 100% of the total observed outcome
```

## 實例演算

**重建資助**：某議會嘅高街資助計劃匯報喺受資助區域創造咗 200 個新零售職位。跟進調查發現，其中 60 個職位來自由同一行政區內相鄰、冇受資助嘅高街搬過嚟嘅企業，另外 30 個來自連鎖店開設嘅分店——即使冇呢筆資助，佢哋都會喺區內某處開設。

```
Gross jobs claimed = 200
Local displacement = 60 (moved within the borough)
Regional displacement = 30 (would have opened regionally anyway)

Net additional jobs (borough level) = 200 − 60 = 140
Net additional jobs (regional level) = 200 − 60 − 30 = 110
```

誠實嘅頭條數字取決於資助者關心嘅地理層次——喺全國或地區層面評估嘅財政部業務案例應該用 110，而唔係行政區層面嘅 140，更加唔應該用未經調整嘅 200。

**多機構無家者服務**：三個夥伴機構（一個議會、一個房屋慈善機構同一個健康信託）聯合提供減少露宿服務。該區全年露宿人數減少 30 人。每個機構各自嘅年報都聲稱「我哋令露宿者減少 30 人」——加埋三份報告就聲稱幫助咗 90 人，係實際減幅嘅三倍。如果採用貢獻分析，按有文件記錄嘅角色同獨立評估，為每個夥伴分配一個比例（例如議會 40%、慈善機構 35%、健康信託 25%），就會分別匯報 12、10.5 同 7.5，加起嚟正好等於觀察到嘅 30。

## 與軟件工程嘅關係

挪移效應同歸因會影響多地點或多夥伴交付嘅影響力追蹤同成果匯報系統應該點樣設計：

- 地理同組織範圍應該係任何影響力儀表板入面明確嘅一等欄位——同一個數字，講「全行政區」同講「全地區」係兩個唔同嘅數字，混淆兩者嘅系統會產生喺組合層面無法對賬嘅數字。
- 當多個夥伴聯合交付，成果系統應該記錄貢獻比例（至少標記為共同歸因），而唔係畀每個夥伴嘅匯報模組各自聲稱 100% 嘅共同成果——否則組合層面嘅匯總會高估總影響，有時差得好遠。
- 呢點同 [社會投資回報](../社會投資回報/) 同 [資助成果匯報](../資助成果匯報/) 有關：如果 SROI 或 IRIS+ 計算忽略挪移效應，或者過度歸因共同成果，就會得出一個膨脹嘅比率，經唔起審計或重複驗證。

## 常見陷阱

- **只匯報地方成功，冇檢查更廣層面嘅挪移。** 一個計劃喺最細嘅匯報層次可能睇落非常成功，但喺更闊層次係中性甚至負面；務必註明淨數字適用嘅地理層次。
- **容許聯合交付嘅每個夥伴聲稱全部功勞。** 除非貢獻比例已獲同意並有文件記錄，否則夥伴之間嘅匯總報告會高估總影響——要檢查各夥伴嘅聲稱加埋唔超過觀察到嘅總數。
- **將歸因當成精確百分比，其實係判斷。** 貢獻分析同隨機反事實唔同，產出嘅係站得住腳嘅估計而非量度出嚟嘅事實；應連同適當嘅不確定性一齊呈現，而唔係假裝精確。
- **喺面向市場嘅介入中忽略挪移效應。** 企業支援、就業計劃同地區重建係典型嘅高挪移類別；對呢類項目，挪移檢查應該係必須而非可選。

## 資料來源

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020), including
  guidance on contribution analysis. <https://www.gov.uk/government/publications/the-magenta-book>
- HM Treasury / Department for Business, Innovation and Skills, "Additionality Guide: A Standard
  Approach to Assessing the Additional Impact of Interventions" (3rd edition).
- European Commission, "Evalsed: The Resource for the Evaluation of Socio-Economic Development" —
  guidance on local, regional, and national displacement scales.
- Mayne J. "Contribution Analysis: An Approach to Exploring Cause and Effect." ILAC Brief No. 16,
  2008.
