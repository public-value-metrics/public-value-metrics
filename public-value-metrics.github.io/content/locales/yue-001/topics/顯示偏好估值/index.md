# 顯示偏好估值

顯示偏好(revealed preference)方法，係由相關市場中可觀察到嘅行為，推斷非市場物品嘅價值，而唔係直接問人。特徵價格法(hedonic pricing)同旅行成本法係兩種主力技術：兩者都由真實交易出發，反推出從未直接出售嘅事物嘅隱含價格。

## 點解重要

[陳述偏好](../陳述偏好估值/)方法詢問假設性問題，顯示偏好方法則觀察人哋實際付出咗乜，Green Book 認為，在其他條件相同下，呢種證據普遍更可信，因為佢唔受假設性偏差影響——特徵價格法樓價研究中嘅受訪者，真係付出咗被量度嘅溢價或者折讓(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>，Annex 2)。特徵價格法將市場價格——通常係樓價——分解為物品各項屬性嘅隱含價格，令分析人員可以分離出，例如住戶為咗住喺較寧靜或者空氣質素較佳嘅地方實際願意付出嘅溢價，並以統計方式控制其他同樣影響樓價嘅屬性(面積、位置、學區)。旅行成本法則為冇入場費嘅康樂地點做類似嘅事：人們前往該地點所花費嘅時間同金錢，揭示佢對佢哋而言價值嘅下限，因為冇人會招致高過該次到訪價值嘅成本。

兩種方法有共同嘅結構性限制：佢哋只可以為已嵌入現有市場交易嘅事物估值。跑道附近嘅噪音反映喺樓價上，因為在意噪音嘅人會揀較寧靜嘅住屋；一個冇人探訪或者居住附近嘅物種嘅存在價值，就完全唔會出現喺任何交易之中，而呢個正正係[陳述偏好](../陳述偏好估值/)方法存在要填補嘅缺口。

## 數學原理

```
Hedonic pricing:
  House price = f(structural attributes, location attributes,
                   environmental attribute of interest, ...)
  Estimate via regression; the coefficient on the environmental
  attribute (holding all else constant) is its implicit price.

  Implicit price of attribute X = ∂(House price) / ∂X

Travel-cost method:
  Visit rate (visits per capita from zone i) = f(travel cost from zone i,
                   substitute sites, socioeconomic controls)
  Estimate a demand curve for visits as a function of travel cost.
  Consumer surplus = area under the estimated demand curve
                    = value of the site to visitors
```

兩種方法都需要統計上穩健嘅控制變數組——遺漏混淆屬性(特徵價格法)或者附近替代地點(旅行成本法)，會令隱含價格向事前未必明顯嘅方向偏離，所以 Green Book Annex 2 要求匯報迴歸設定同控制變數，而唔只係頭條係數。

## 實例演算

**中央政府**：Green Book 自己嘅碳影子價格方法，部分借鑑特徵價格證據，但較簡單嘅說明個案係飛機噪音。一項特徵價格研究，將航道區域嘅樓宇成交價，對距離加權嘅噪音暴露作迴歸，並控制面積、樓齡同學區，發現平均噪音暴露每增加 1 分貝，樓價降低 0.5%。對於受影響地區一間典型 £280,000 嘅房屋：

```
Implicit price per decibel = £280,000 × 0.5% = £1,400 per household
Households affected by a 3dB increase from a new runway = 18,000
Aggregate implied cost of the noise increase = £1,400 × 3 × 18,000 = £75.6m
```

呢個係一次性資本化成本(已嵌入樓價)，評估時必須小心，唔好同另外估算嘅每年噪音滋擾成本流重複計算。

**慈善機構**：一間環境慈善機構用旅行成本法為一個免費入場嘅自然保護區估值。訪客郵編問卷數據顯示，平均往返旅行成本(時間按 Green Book 建議嘅非工作時間價值計，加燃料)為每次到訪 £14，每年 40,000 人次。估計出嘅需求曲線——旅行成本隨區域上升，到訪率下降——意味每次到訪嘅消費者剩餘，高於實際花費嘅 £14，約為 £9。

```
Total annual value = 40,000 visits × (£14 spent + £9 consumer surplus)
                    = 40,000 × £23 ≈ £920,000/year
```

呢個數字遠超保護區零入場費收入，亦為慈善機構受託人向資助者陳述時，提供一個站得住腳嘅地點康樂價值數字。

## 與軟件工程嘅關係

顯示偏好思維喺公營界別產品分析中出現得比從業者意識到嘅更頻繁：免費政府數碼服務嘅使用數據，本身就係價值嘅顯示偏好證據(使用頻率、環節長度，以及最能說明問題嘅——重複與一次性使用模式——都可以用旅行成本模型處理到訪頻率對距離嘅相同方式分析)。如果服務有真正替代方案(紙本渠道、電話熱線)，市民改用數碼渠道所招致嘅「成本」(時間、數據、裝置)可以估算，並與使用情況比較，直接呼應旅行成本邏輯。請參閱[數碼服務標準](../數碼服務標準/)同[開放數據嘅價值](../開放數據嘅價值/)，後者正正面對同一個為冇直接市場價格嘅物品估值嘅問題。

## 常見陷阱

- **特徵價格模型中嘅遺漏變數偏差。** 遺漏一個相關屬性(學校質素同時同樓價及目標環境變數相關)，會令隱含價格估算出現偏差；要匯報同審視設定，而唔只係結果。
- **旅行成本研究中忽略替代地點。** 如果存在更近嘅替代地點而未加控制，訪客對該地點嘅顯示價值會被低估——佢哋到訪可能主要因為免費，而唔係因為獨一無二嘅價值。
- **將顯示偏好應用於完全冇市場回響嘅物品。** 存在價值、選擇價值同遺贈價值唔會出現喺任何交易之中，特徵價格法或者旅行成本法都無法復原——呢個缺口屬於[陳述偏好估值](../陳述偏好估值/)。
- **混淆資本化(一次性)價值同年度流量。** 特徵價格法嘅樓價效應通常係一次性資本化價值；將佢當作年度效益流，會令評估膨脹。

## 資料來源

- HM Treasury. "The Green Book," Annex 2: valuing non-market impacts.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Department for Transport / Civil Aviation Authority. Aircraft noise valuation studies used in
  airport appraisal. <https://www.gov.uk/guidance/aviation-noise>
- Rosen S. "Hedonic Prices and Implicit Markets: Product Differentiation in Pure Competition."
  Journal of Political Economy, 1974.
- Clawson M, Knetsch JL. "Economics of Outdoor Recreation." Johns Hopkins University Press, 1966
  (origin of the travel-cost method).
