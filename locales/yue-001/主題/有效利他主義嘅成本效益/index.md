# 有效利他主義嘅成本效益

有效利他主義（effective altruism，EA）嘅成本效益推理，按每花一美元所帶來嘅善益——最常以拯救生命或健康增益表示——為慈善介入排序，並將資金導向邊際上買到最多善益嘅介入。GiveWell 係呢個領域最具影響力嘅實踐者：佢針對一份細短嘅「頂尖慈善機構」名單，公布明確並持續更新嘅每拯救一命成本同每項成果成本估算，並建議捐款人捐畀目前仍有更多資金空間、回報率最好嘅機構。

## 點解重要

GiveWell 喺佢公布嘅方法論入面，將成本效益列為首要準則：佢尋找有實證支持嘅介入，用共同單位估算其成本效益，然後喺完全無關嘅範疇之間——蚊帳防瘧疾、補充維他命 A、現金轉移、疫苗接種誘因付款——按呢條單一軸線排序。呢個係將健康經濟學入面 QALY/DALY 式推理直接引入慈善界：正如醫療系統問「邊際上每鎊可得幾多 QALY」，GiveWell 問「邊際上每美元可救幾多生命或生命年」，並將各範疇換算成共同單位後視為可互相替代。公共部門版本嘅類似推理框架，可參閱 [政府成本效益分析](../政府嘅成本效益分析/)。

最常被引用嘅 GiveWell 數字，涉及分發殺蟲劑處理蚊帳嘅 Against Malaria Foundation（AMF）。喺 GiveWell 公布嘅示範計算入面（取自 2020 年資助數據），大約 $4,500 可資助足夠蚊帳避免一宗死亡，已經計入蚊帳使用唔完美、冇蚊帳時嘅基線死亡率，以及資金互相取代（funging）嘅調整——即 AMF 無論如何都可能從其他捐款人嗰度得到部分資金。GiveWell 明確指出，呢個數字會隨瘧疾流行程度、蚊帳成本同資金缺口變化而隨時間同地域轉變，而且一般預期救一條命嘅成本會隨時間上升，因為最便宜嘅機會會最先被用盡；佢係方法嘅示範說明，而非固定價格。

## 數學原理

```
Cost-effectiveness = Cost of intervention / Units of good produced
                    (e.g. $ per life saved, $ per DALY averted, $ per QALY)

GiveWell's chain for a bednet programme, illustratively:
  $ per net purchased and delivered
    ÷ share of nets actually used
    ÷ people protected per net
    × baseline annual mortality without nets
    × reduction in mortality attributable to net use (from RCT evidence)
    × years of protection per net
    ÷ adjustment for funging (money displacing other donors' funding)
  = $ per life saved (net of counterfactual funding effects)
```

呢條鏈好重要，因為每一步都係成本效益估算常見出錯嘅位置——見下面嘅常見陷阱——亦因為佢清楚表明「每救一命成本」從來唔係直接觀察到嘅價格；佢係由若干個各自不確定嘅輸入建模出嚟嘅估計值。

## 實例演算

兩個假設嘅介入，都有實證支持，爭奪同一筆邊際 £100,000：

- **蚊帳（AMF 式）**：按 GiveWell 公布、取自 2020 年數據嘅示範計算，每救一命約 $4,500，即視乎所用匯率同年份，每 £100,000 大約救 20 條命。
- **驅蟲計劃**：完全冇合理嘅死亡率收益，但有強而有力嘅證據顯示童年驅蟲帶來長遠收入增長；GiveWell 以收入增益而非救命來估值，所以如果冇共同單位就好難同蚊帳直接比較。GiveWell 使用明確嘅「道德權重」（moral weights）框架，將兩者換算成一個內部單位用嚟排序。

EA 方法嘅紀律，在於迫使呢種比較攤開嚟，而唔係因為兩者都「聽落唔錯」就兩樣都資助。英國社會企業同地方委託機構所用嘅同類強制機制，可參閱 [社會投資回報](../社會投資回報/)，佢問嘅係同一條問題——每鎊最好嘅回報係幾多——只不過用貨幣化價值嘅語言，而非生命/DALY 嘅語言。

## 與軟件工程嘅關係

為 EA 取向資助者（Open Philanthropy、GiveWell 本身、Giving What We Can 等有效捐獻平台）建立捐款平台、資助配對工具或影響力儀表板嘅工程師，需要將成本效益估算表示為附帶明確假設嘅範圍，而唔係單一數字——底層模型有多個相乘嘅不確定輸入，喺儀表板上壓縮成一個數字，會歪曲 GiveWell 自己所述嘅信心程度。每個估算都要按發布日期標注版本；GiveWell 隨住新嘅隨機對照試驗證據或資金缺口數據出現，會修訂佢嘅數字，有時幅度不細，而緩存舊數字嘅平台會不知不覺變成錯誤。

## 常見陷阱

- **將成本效益估算當成固定價格。** 佢係模型輸出，包含多個不確定相乘輸入（使用率、基線死亡率、資金互相取代調整）；要註明日期同版本。
- **忽略資金互相取代/挪移效應。** 資助一個無論如何都會從另一位捐款人得到款項嘅機構，所買到嘅反事實善益會少過標題所示——見 [額外性與死重](../額外性同死重效應/) 同 [挪移效應與歸因](../挪移效應與歸因/)。
- **未經換算就比較不兼容嘅單位。** 「拯救生命」同「收入增加」冇明確嘅道德權重框架就無法直接比較；將佢哋並排呈現，好似可以比較咁，係範疇錯誤。
- **範疇偏狹。** 只係喺單一範疇（例如只限全球健康慈善機構）入面排序，然後將優勝者稱為「最具成本效益嘅慈善機構」，係過度宣稱；GiveWell 嘅跨範疇排序有意收窄（全球健康與福祉），而非通用。

## 資料來源

- GiveWell, "Our criteria." <https://www.givewell.org/how-we-work/our-criteria>
- GiveWell, "How Much Does It Cost to Save a Life?" (February 2024 version). <https://www.givewell.org/how-much-does-it-cost-to-save-a-life/february-2024-version>
- GiveWell, Against Malaria Foundation review. <https://www.givewell.org/charities/amf>
- Giving What We Can, on cost-effectiveness across causes. <https://www.givingwhatwecan.org/>
