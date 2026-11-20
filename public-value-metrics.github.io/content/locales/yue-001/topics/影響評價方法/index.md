# 影響評價方法

影響評價方法係用嚟估計政策或計劃實際造成咗乜嘢嘅統計同實驗設計，有別於無論如何都會發生嘅嘢——隨機對照試驗（RCT）、雙重差分（difference-in-differences）、傾向得分配對（propensity score matching）同斷點回歸設計（regression discontinuity design），係英國公共政策中最常用嘅四種。佢哋之所以存在，係因為大部分政府介入都無法喺實驗室測試：你唔可以好似隨機分配邊個病人用藥咁，隨機決定邊個市鎮得到新巴士路線，所以呢啲方法借用同樣嘅因果邏輯，而唔一定要求隨機分配。

## 點解重要

HM Treasury（英國財政部）《Magenta Book》嘅附件 A（準實驗方法）係英國政府揀選呢啲設計嘅權威指引，而教育捐贈基金會（Education Endowment Foundation）同地方經濟增長實證中心（What Works Centre for Local Economic Growth）等機構，圍繞佢哋建立咗證據層級——可行且合乎倫理嘅情況用 RCT，否則用準實驗設計。方法嘅選擇唔係技術上嘅事後考慮：佢決定一項評價可以回答「計劃有冇造成呢個結果？」，定係只可以回答「呢件事係喺計劃開始之後發生」，而呢條問題正係 [反事實分析](../反事實分析/) 旨在迫使從業者喺委託任何評價之前先問嘅。

## 數學原理

```
RCT:
  Impact = mean(outcome | treatment group) − mean(outcome | control group)
  (valid because assignment to treatment is random)

Difference-in-differences (DiD):
  Impact = [outcome_after(treated) − outcome_before(treated)]
         − [outcome_after(control) − outcome_before(control)]
  (requires a "parallel trends" assumption: treated and control would have moved together
   absent the intervention)

Propensity score matching (PSM):
  1. Estimate P(treatment = 1 | covariates X) for every unit → propensity score
  2. Match treated units to untreated units with similar propensity scores
  3. Impact = mean(outcome | treated) − mean(outcome | matched control)

Regression discontinuity design (RDD):
  Impact = jump in outcome observed at the eligibility threshold,
           comparing units just above vs just below the cutoff
```

## 實例演算

**地方政府（針對問題家庭計劃嘅雙重差分）**：成果指標係學生出席率。受助地區喺計劃期間由 84% 升至 89%（+5 個百分點）；同期，一個可比較但冇受助嘅地區由 85% 升至 87%（+2 個百分點）。雙重差分嘅影響估計：5 − 2 = +3 個百分點歸因於計劃。套用於受助地區 2,000 名學生嘅群組，大約相當於額外 60 名學生（3% × 2,000）達到較高出席類別，呢個推算應連同其平行趨勢嘅保留一齊匯報，而唔係當成精確人數。

**慈善機構（為就業能力慈善機構做傾向得分配對）**：300 名計劃參與者，利用由年齡、過往就業經歷同資歷水平建立嘅傾向得分，同一個較大行政數據集內嘅 300 名個人配對。十二個月就業率：配對後嘅受助組 46%，配對後嘅比較組 33%。傾向得分配對嘅影響估計：46% − 33% = +13 個百分點歸因於計劃，前提係冇未觀察到嘅混雜因素（例如動機）同時驅動參與同結果。

## 與軟件工程嘅關係

呢啲設計日後係咪可行，好大程度取決於早期嘅數據工程決定。斷點回歸設計需要準確記錄嘅運行變量同真正乾淨嘅資格界線；雙重差分需要受助同比較地區隨時間可比較嘅面板數據，即係跨系統同跨年份一致嘅連接；傾向得分配對需要喺介入前已採集、而非事後重建嘅豐富基線協變量數據。一個由開始就與 [變革理論](../變革理論/) 同 [邏輯模型](../邏輯模型/) 一齊設計嘅數據模型——採集基線協變量、日期，以及符合比較組資格嘅記錄——先可以令日後嚴謹嘅影響評價成為可能，而唔係昂貴嘅事後補救。呢啲方法本身無法回答嘅互補問題，可參閱 [影響評價與過程評價](../影響評價與過程評價/)。

## 常見陷阱

- **喺不可行或不合倫理嘅情況下硬做 RCT**，或者相反，明明有政策界線、分階段推行等真正機會，卻從來冇考慮準實驗設計而白白浪費。
- **忽略雙重差分嘅平行趨勢假設。** 如果比較地區喺介入前已經同受助地區分歧，兩點比較就受到污染；要檢查介入前趨勢，而唔單止係前後對比。
- **傾向得分配對只按已觀察到嘅協變量配對。** 即使已觀察協變量平衡良好，未觀察到嘅選擇（例如參與者動機）仍然可以令估計出現偏差。
- **斷點回歸設計中嘅運行變量操縱。** 如果人們可以影響自己嘅分數，令其剛好落在資格界線內，斷點就無法再分離出因果效應。

## 資料來源

- HM Treasury, Magenta Book (2020), Annex A: Quasi-Experimental Methods. <https://www.gov.uk/government/publications/the-magenta-book>
- What Works Centre for Local Economic Growth, evidence review methodology. <https://whatworksgrowth.org/>
- Education Endowment Foundation, evaluation guidance. <https://educationendowmentfoundation.org.uk/>
