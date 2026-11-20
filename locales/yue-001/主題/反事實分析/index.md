# 反事實分析

反事實(counterfactual)係對「如果冇干預，會發生乜事」嘅估計。冇反事實，一個計劃推出後所觀察到嘅變化，就同本來都會發生嘅變化分唔開——冇反事實，就冇效果嘅證據，無論前後對比嘅數字幾有說服力。HM Treasury 嘅 Magenta Book 將建構一個可信嘅反事實，視為影響評估最核心嘅方法學任務，比任何單一設計選擇都更重要。

## 點解重要

「推出計劃後嗰年，罪案下降咗 15%」，並唔係計劃有效嘅證據，除非你知道冇計劃嘅話罪案會點——罪案可能因為無關嘅經濟或人口趨勢，本來都會跌 20%，意味住儘管原始數字有改善，計劃相對於反事實，其實令情況更差。呢個係公共同社會界別影響聲稱中最常見嘅單一分析錯誤：將前後對比誤當成因果證據。Magenta Book 明確指出，影響評估旨在回答一個反事實問題——「呢項干預帶來咗乜差別？」——而回答佢需要估計，而不止係描述，一個冇發生過嘅世界。

唔同方法建構反事實嘅信心程度唔同，政府評估指引亦據此排序。隨機對照試驗(RCT)將個人或地區隨機分配接受或唔接受干預，產生最強嘅反事實，因為隨機化確保處理組同對照組平均而言，只喺有冇接受干預方面有差別。自 Behavioural Insights Team 2012 年嘅《Test, Learn, Adapt》報告以來，Cabinet Office 同 What Works Network 一直喺英國公共政策中推廣 RCT，正正因為較弱嘅設計容易受混雜因素影響——所觀察到嘅差異，可能反映嘅係邊個選擇參與，而唔係計劃嘅效果。如果隨機化不切實際或者不合倫理(對於有法定權利嘅計劃，或者全民政策改變，往往如此)，Magenta Book 列出一個明確嘅層級，包括較弱但仍然有用嘅替代方案：配對對照組、雙重差分(difference-in-differences)設計、圍繞資格門檻嘅斷點迴歸，以及作為最後手段嘅簡單前後對比——明確標示為最弱嘅證據形式，容易將計劃嘅效果同同期所有其他變化嘅效果混淆。

## 數學原理

適用於所有方法嘅反事實框架：

```
Estimated impact = Outcome(with intervention) − Outcome(counterfactual: without intervention)

NOT:
Estimated impact ≠ Outcome(after) − Outcome(before)   [confounds time with treatment]
```

雙重差分係政府評估中最常見嘅準實驗設計之一，透過減去對照組本身嘅前後變化，分離出處理效果：

```
DiD estimate = [Outcome(treated, after) − Outcome(treated, before)]
             − [Outcome(comparison, after) − Outcome(comparison, before)]
```

咁樣可以去除兩組共有嘅任何趨勢(例如影響所有人嘅全國經濟轉變)，只剩低可歸因於干預嘅差別變化。

## 實例演算

**就業計劃，前後對比(較弱設計)**：一個求職支援計劃匯報，參加者嘅就業率喺一年內由 40% 升至 55%——天真嘅結論係「計劃帶來 +15 個百分點」。

**同一計劃，雙重差分(較強設計)**：一個配對對照組，由同一地方勞動市場類似嘅非參加者組成，顯示同一年內就業率由 38% 升至 47%(全國經濟正在復甦)。

```
Treated group change:    55% − 40% = +15 percentage points
Comparison group change: 47% − 38% = +9 percentage points

DiD estimate (true programme effect) = 15 − 9 = +6 percentage points
```

可誠實歸因嘅效果係 6 個百分點，而唔係 15——表面前後改善之中，超過一半無論有冇計劃都會發生，係同一輪經濟復甦同時提升對照組所致。

**斷點迴歸，資格門檻**：一個資助計劃只開放畀僱員少於 50 人嘅企業。比較剛低於門檻(45–49 名僱員，合資格)同剛高於門檻(50–54 名僱員，不合資格)嘅企業成果，可以提供可信嘅反事實，因為處於任意行政分界兩邊嘅企業，在其他方面相似——決定資格嘅係門檻，而非任何潛在企業特徵。只喺門檻處觀察到、兩組之間平均 £2,000 嘅成果差異，歸因於資助嘅信心，遠高於簡單比較所有合資格同所有不合資格企業(兩者規模有系統性差異)。

## 與軟件工程嘅關係

反事實思維應該影響政府同社會界別軟件嘅影響追蹤系統同評估管道嘅設計：

- 由一開始就將對照組捕捉建入系統——記錄邊個合資格但冇登記，或者配對嘅非參加者群組——而唔係喺計劃已經運行、只剩前後數據之後先補做。
- 如果可以隨機化(分階段推出、某啲用戶比其他用戶先啟用嘅數碼服務)，就要為系統加入工具，將隨機分配保留為可查詢嘅欄位；分階段推出如果冇記錄分配次序，會無意中破壞自己嘅評估價值。
- 呢個係[影響評估方法](../影響評價方法/)背後嘅基礎方法，亦係佢同[影響評估與過程評估](../影響評價與過程評價/)嘅分別所在——後者問嘅係計劃有冇按原意交付，而唔係佢有冇引致效果。
- [額外性同死重效應](../額外性同死重效應/)同[排擠效應與歸因](../挪移效應與歸因/)，歸根結底都係反事實問題——死重效應係「如果冇干預，呢個特定成果會係點」，應用喺調整層面，而非完整評估設計。

## 常見陷阱

- **將前後對比視為因果證據。** 呢個係公共同社會界別影響匯報中最常見、後果最嚴重嘅錯誤；前後變化將計劃效果同同期所有其他變化混淆。
- **使用同處理組有系統性差異嘅對照組。** 配對對照組必須喺相關特徵上真正相似(見 Magenta Book 嘅[反事實分析](../反事實分析/)方法層級)；將計劃參加者(自行選擇加入、往往動機更強)同非參加者(冇加入)作比較，會令選擇偏差偽裝成計劃效果。
- **因交付設計欠佳而破壞隨機化機會。** 分階段或隨機化推出，只有在分配真正隨機並已記錄時，先保留到評估價值——讓地方經理揀邊個先行，就違背咗目的。
- **由較弱設計過度聲稱精確度。** 前後對比估計應該呈現為指示性，而唔係已量度嘅效果大小；Magenta Book 嘅證據層級，正正係為咗令聲稱嘅強度同產生佢嘅設計強度相稱。

## 資料來源

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020), and its
  supplementary guide on quasi-experimental methods.
  <https://www.gov.uk/government/publications/the-magenta-book>
- Cabinet Office / Behavioural Insights Team, "Test, Learn, Adapt: Developing Public Policy with
  Randomized Controlled Trials" (2012).
- What Works Network, standards of evidence guidance. <https://www.gov.uk/guidance/what-works-network>
- Angrist JD, Pischke J-S. *Mostly Harmless Econometrics: An Empiricist's Companion*. Princeton
  University Press, 2009 (standard reference for difference-in-differences and regression
  discontinuity methods).
