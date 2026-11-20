# 自然資本核算

自然資本核算將環境放喺同任何國家或者機構資產一樣嘅地位：佢以實物同貨幣兩種方式，量度自然資源(林地、土壤、河流、濕地、大氣)嘅存量，以及佢哋所產生嘅服務(固碳、防洪、康樂、糧食)嘅流量，令環境耗損可以好似財務資本被消耗一樣，喺決策中顯現出嚟。英國係系統性咁做呢件事方面最先進嘅政府之一，由《25 年環境計劃》(25 Year Environment Plan，2018)推動，並透過 ONS 嘅英國自然資本帳目同 HM Treasury 嘅 Green Book 補充指引落實。

## 點解重要

傳統會計——不論企業定政府——都將一片森林視為毫無價值，直至佢被砍伐、作為木材出售，到時先變成 GDP。自然資本核算就係為咗填補呢個缺口：英國《25 年環境計劃》承諾政府將自然資本思維納入各項政策，並明確提出抱負，要成為「第一代將環境留得比我哋接手時更好嘅一代」。ONS 其後每年發表英國自然資本帳目(<https://www.ons.gov.uk/economy/environmentalaccounts/bulletins/uknaturalcapitalaccounts/latest>)，用於估算生態系統服務嘅貨幣價值——由林地康樂、城市綠化空間嘅健康效益，到泥炭地嘅碳儲存——所採用嘅，同生產性資本一樣係國民帳目框架，令自然資本最終可以同道路、建築物同設備一樣，列入同一張資產負債表。HM Treasury 嘅「促成自然資本方法」(Enabling a Natural Capital Approach，ENCA)指引，係 Green Book 嘅補充(<https://www.gov.uk/government/publications/enabling-a-natural-capital-approach-enca-guidance>)，列明評估人員應該點樣喺商業個案中為環境成本同效益估值，咁一個破壞古老林地嘅道路工程，同一個修復濕地嘅防洪工程，就可以喺一致嘅貨幣基礎上比較，而唔係其中一個有數字、另一個只有一段附帶免責嘅文字。

## 數學原理

```
Ecosystem service asset value = NPV of the flow of services the asset provides

Asset value = Σ (t = 1 to T) [annual service flow value_t / (1 + r)^t]

where:
  service flow value_t = quantity of service in year t × unit value
                          (e.g. recreational visits × value per visit;
                           tonnes of carbon sequestered × carbon price)
  r = discount rate (Green Book social discount rate — see
      [social discount rate](../社會貼現率/))
  T = time horizon over which the asset is expected to provide the service
```

呢個同用嚟為生產性資本估值，或者按 [Green Book 評估](../green-book-項目評估/)評估任何公共投資所用嘅淨現值結構完全一樣——自然資本核算嘅貢獻，在於為以往被定價為零嘅服務，提供可信嘅實物數量同單位價值。

## 實例演算

**城市林地嘅康樂價值**：一片 50 公頃嘅林地，估計每年有 80,000 人次到訪康樂，每次到訪嘅價值(透過旅行成本法或者陳述偏好法——見[顯示偏好估值](../顯示偏好估值/)同[陳述偏好估值](../陳述偏好估值/))為 £3。呢片林地預計可以繼續提供呢項服務 50 年，按 3.5% 貼現率評估。

```
Annual recreational value = 80,000 × £3 = £240,000/year

NPV over 50 years at 3.5% ≈ £240,000 × annuity factor(3.5%, 50 years)
annuity factor(3.5%, 50) ≈ 21.4

Asset value ≈ £240,000 × 21.4 ≈ £5,136,000
```

**加入碳儲存**：同一片林地估計每年固存 400 公噸二氧化碳，按政府非交易碳價大約 £75／公噸估值(僅作說明——實際評估請用 BEIS／DESNZ 公佈嘅最新碳價值)。

```
Annual carbon value = 400 × £75 = £30,000/year
NPV over 50 years at 3.5% ≈ £30,000 × 21.4 ≈ £642,000

Total woodland asset value (recreation + carbon) ≈ £5,136,000 + £642,000
                                                   ≈ £5,778,000
```

呢個數字仲未加入 ENCA 指引同樣要求評估人員考慮嘅洪水緩減、生物多樣性或者空氣質素服務——總數刻意當作下限，而唔係上限。

## 與軟件工程嘅關係

- 地方政府同機構嘅環境同資產管理系統(公園、公路、水體)，可以喺實物資產登記冊旁邊，加設一份自然資本登記冊，所用嘅「服務流量乘以單位價值」模式，同機構維護嘅任何其他[單位成本資料庫](../單位成本數據庫/)一樣。
- 因為自然資本淨現值對貼現率敏感(見實例演算入面嘅年金因子)，任何計算佢嘅工具，都應該將貼現率同時間範圍列為可見輸入，而唔係埋藏起嚟——同[跨代公平與可持續性貼現](../代際公平與可持續性貼現/)所講嘅透明度原則一致。
- 自然資本帳目越來越成為 [Green Book 評估](../green-book-項目評估/)商業個案入面環境影響部分嘅必需輸入；開發商業個案工具嘅交付團隊，應該將 ONS 帳目同 ENCA 單位價值視為要整合嘅參考數據，而唔係令評估人員每次都由零重新計算。

## 常見陷阱

- **重複計算重疊嘅生態系統服務**——同一地點嘅康樂價值同生物多樣性價值，可能共用相同嘅支付意願數據；ENCA 指引明確警告，唔好將源自重疊問卷工具嘅估值加埋一齊。
- **將自然資本資產價值視為靜態**——服務流量會隨氣候、管理同土地用途壓力而改變；一片林地於今個十年嘅碳同防洪價值，並唔係該地點嘅永久屬性。
- **將全國平均單位價值用於高度本地化嘅決策**——一公頃可達性高嘅城市林地，同一公頃偏遠高地，康樂價值相差好遠；ENCA 指引建議如有本地或者特定地點嘅價值，就應該採用，而唔好預設用全國平均值。

## 資料來源

- ONS. "UK natural capital accounts."
  <https://www.ons.gov.uk/economy/environmentalaccounts/bulletins/uknaturalcapitalaccounts/latest>
- HM Government. "A Green Future: Our 25 Year Plan to Improve the Environment." (2018)
- HM Treasury / Defra. "Enabling a Natural Capital Approach (ENCA): guidance."
  <https://www.gov.uk/government/publications/enabling-a-natural-capital-approach-enca-guidance>
