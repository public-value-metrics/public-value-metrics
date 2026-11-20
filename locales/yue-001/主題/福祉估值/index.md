# 福祉估值(WELLBY)

福祉估值直接以生活滿意度嚟為政策效果定價，用 WELLBY(福祉調整生命年)作單位——一個 WELLBY 等於 0–10 生活滿意度量表上一分嘅變化，維持一年。佢係 HM Treasury(英國財政部)正式認可嘅替代方法，用嚟取代透過支付意願將每項效益貨幣化。

## 點解重要

HM Treasury 嘅《Wellbeing guidance for appraisal: supplementary Green Book guidance》(2021，<https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>)正式將主觀福祉數據引入中央政府評估，令分析人員有途徑為社交聯繫、心理健康、安全、公民參與等成果估值——呢啲成果係[陳述偏好](../陳述偏好估值/)同[顯示偏好](../顯示偏好估值/)方法難以令人信服地定價，因為人哋往往唔善於預測某樣貨品實際上會幾大程度影響佢哋嘅生活滿意度。該指引同 What Works Centre for Wellbeing 共同制訂，建議每個 WELLBY 嘅貨幣價值為 £13,000(2021 年價格，定期修訂)，由大型福祉調查(主要係 ONS 嘅 Annual Population Survey，自 2011 年起已經詢問 ONS4 四條福祉問題)中觀察到嘅收入同生活滿意度關係推導，令分析人員需要同其他 Green Book 評估作貨幣化比較時，有一個轉換回英鎊嘅比率。

呢個方法之所以重要，係因為佢顛倒咗慣常嘅估值邏輯：唔係問人哋願意為某個成果支付幾多(陳述偏好)，或者由相關市場交易推斷價值(顯示偏好)，而係直接量度成果對所報告生活滿意度嘅影響，繞過人哋所講想要嘅同真正令佢哋過得更好嘅之間嘅差距。呢點亦係佢嘅核心局限——自行匯報嘅生活滿意度會受適應同框架效應影響，謹慎嘅從業員必須加以控制。

## 數學原理

```
WELLBY = 1 life-satisfaction point (0-10 scale) sustained for 1 person for 1 year

Total WELLBYs from a policy =
  Σ (change in life satisfaction score) × (number of people affected)
    × (duration in years, discounted at the social discount rate)

Monetized value = Total WELLBYs × value per WELLBY
  (HM Treasury recommended value: £13,000 per WELLBY, 2021 prices,
   subject to periodic revision — check current guidance before use)
```

呢個同健康經濟學嘅[福祉調整生命年](../福祉調整生命年/)有別，後者通常錨定於同健康相關嘅生活質素量表(EQ-5D 同類似量表)，而唔係一般生活滿意度；兩者相關但唔可以互換，Green Book 評估應該明確說明所報告 WELLBY 數字背後採用嘅係邊個量表同引導方法。

## 實例演算

**地方政府**：一個市議會為孤立長者推行社區探訪友伴計劃，服務 400 人。以 ONS4 生活滿意度問題進行嘅前後福祉調查顯示，參加者平均分數由 5.8 升到 6.5——增加 0.7 分——喺計劃 2 年資助期內維持。

```
WELLBYs generated = 400 people × 0.7 points × 2 years = 560 WELLBYs
Monetized value = 560 × £13,000 = £7.28m
Programme cost = £450,000 over 2 years

Benefit-cost ratio ≈ £7.28m / £0.45m ≈ 16:1
```

咁高嘅比率應該引起審視而唔係慶祝——Green Book 福祉指引明確警告，唔好喺未檢查選擇效應(係咪只有最善於交際、最有可能改善嘅居民參加咗計劃？)同冇對照組嘅情況下，照單全收細樣本嘅自行匯報增幅；設計良好嘅評估會扣減喺非參加者身上觀察到嘅反事實變化，見[反事實分析](../反事實分析/)。

**中央政府**：用 WELLBY 而唔係單靠收入比較兩個就業計劃，可以捕捉失業除咗收入損失之外嘅福祉成本——英國福祉研究一致發現，失業令生活滿意度下降嘅幅度，大過單從收入損失預期嘅幅度，原因係失去生活規律、目標同社交接觸嘅非金錢影響。一個只按收入增幅評估嘅計劃，相比額外按 WELLBY 評估嘅計劃，會低估自身價值。

## 與軟件工程嘅關係

福祉估值好少直接去到工程團隊，但佢塑造社會界別同公共服務產品嘅「成功」被界定為咩——數碼探訪友伴平台、心理健康分流工具，或者為孤立居民而設嘅社區平台，應該預期其影響最終會用呢種方式量度，意味產品分析需要記錄邊個被接觸到同持續幾耐，而唔只係使用量。應該由一開始就將福祉調查工具(ONS4 或者經驗證嘅等同工具)建入服務評估，而唔係事後補加；服務推出之後才補建福祉基線，會完全失去前後比較。見[成果與產出](../成果與產出/)同[影響評估方法](../影響評價方法/)。

## 常見陷阱

- **冇反事實或者對照組。** 冇控制「就算冇計劃都會發生嘅事」嘅前後福祉增幅，會誇大計劃嘅效果；見[反事實分析](../反事實分析/)同[額外性與死重效應](../額外性同死重效應/)。
- **細小、自我選擇嘅樣本。** 對自願參加嘅計劃參加者進行福祉調查，容易有選擇偏差——加入並留低嘅人，好可能本身已經呈上升趨勢。
- **將每個 WELLBY 嘅英鎊轉換視為精確。** 貨幣價值係源自收入與福祉迴歸嘅政策慣例，而唔係市場價格；用佢喺各 Green Book 評估之間作比較，而唔係聲稱福祉「值幾多錢」。
- **將 WELLBY 同健康相關嘅 QALY 混為一談。** 兩者喺唔同量表上量度唔同嘅概念；健康經濟學嘅變體見[福祉調整生命年](../福祉調整生命年/)，唔好將兩者平均埋一齊。

## 資料來源

- HM Treasury. "Wellbeing guidance for appraisal: supplementary Green Book guidance." 2021.
  <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>
- What Works Centre for Wellbeing. <https://whatworkswellbeing.org/>
- Office for National Statistics. "Personal well-being in the UK" (ONS4 measures).
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing>
- Fujiwara D, et al. "Wellbeing Valuation: A Nascent Field?" LSE / Simetrica research summaries.
