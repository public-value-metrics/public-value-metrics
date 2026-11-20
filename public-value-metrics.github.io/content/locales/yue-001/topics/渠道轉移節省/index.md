# 渠道轉移節省

渠道轉移節省(channel shift savings)係指將交易量由昂貴渠道——電話、面對面櫃位、紙本郵寄——轉移到廉價嘅數碼自助服務，所預計減少嘅成本。佢係「數碼為先」背後嘅財務引擎，同時亦係業務個案中最容易出錯嘅項目，因為佢所依賴嘅假設——數碼使用率上升，線下渠道就會萎縮——只係間中成立。

## 點解重要

按《Digital Efficiency Report》嘅[每宗交易成本](../每宗交易成本/)數字，計算好似無可爭辯：將一百萬宗交易由每次 £8.62 嘅面對面到訪，轉移到每次 £0.15 嘅數碼交易，節省超過 800 萬鎊。但節省要變成可重新調配嘅現金，前提係萎縮渠道嘅*固定產能*真正被撤減——電話中心座位、櫃位職員、電話合約分鐘數——而地方政府嘅數碼計劃一再發現，總接觸量並唔會隨數碼使用率同步下降。地方政府數碼轉型計劃，以及 Socitm 同 Local Government Association 等機構嘅研究，記錄咗一個反覆出現嘅模式：數碼渠道會吸引真正新增嘅接觸(原本唔會打電話或者到訪嘅市民，因為變得容易而而家會做)，而且相當一部分「數碼」交易喺中途失敗，仍然會產生一個電話——所以電話量嘅跌幅遠低於數碼使用率百分比所暗示嘅程度，有時即使佢佔總接觸量嘅*比例*下降，絕對數字都冇跌。

## 數學原理

```
Gross channel-shift saving = shifted volume × (cost_old_channel − cost_digital)

Net (realized) saving = gross saving
                       − new/shadow demand created by the easier channel
                       − failure-demand cost (digital failures that
                         still generate a phone call or counter visit)
                       − cost of unretired fixed capacity (a call
                         centre can only shed staff in discrete units;
                         a 15% volume drop rarely lets you cut 15% of
                         headcount)

Realization threshold: savings are only bankable once volume drops
below the level the old channel can staff at its next-smaller discrete
capacity step (e.g. losing one full shift, one full desk, one
contracted headcount band)
```

## 實例演算

**郡議會藍徽章(blue badge)續期服務**：每年 60,000 宗續期，以往 100% 經電話或紙本，每宗 £6.40。新數碼服務推出，一年內達到 65% 數碼使用率，每宗數碼交易 £0.30。

```
Naive (gross) saving calculation:
  39,000 shifted × (£6.40 − £0.30) = £237,900/year

What actually happened, per the council's contact-centre data:
  Phone volume fell from 60,000/year to 46,000/year (−23%, not −65%)
  because: 9,000 digital journeys failed and generated a follow-up call
           (failure-demand leakage), and 4,000 people who previously
           didn't renew at all now do, having found it easy online
           (shadow demand — a genuine access improvement, but not a
           saving)

  Phone contact centre is staffed in bands of 8,000 calls/FTE;
  a 14,000-call drop (60,000 → 46,000) releases 1.75 FTE, rounded
  down in practice to 1 FTE actually redeployed = £34,000/year

Realized saving = £34,000/year plus the digital-channel build/run
  cost avoided on 39,000 transactions ≈ £34,000 + (39,000 × £0.30
  digital cost already counted) — a fraction of the £237,900 headline,
  though the service is still unambiguously better for users.
```

## 與軟件工程嘅關係

工程方面嘅教訓係：渠道轉移節省要靠*營運*決定(排班、撤減、合約重新談判)先實現，而唔係軟件推出就有——一個團隊可以達到[數碼服務標準](../數碼服務標準/)每一點，但如果冇人撤減舊渠道嘅固定產能，淨節省仍然係零。量度失敗需求(用戶喺數碼旅程嘅邊個位置放棄、之後做咩)係一個可以解決嘅漏斗分析問題，亦係工程團隊保護節省個案最高槓桿嘅單一工作；同時亦直接連繫到[每宗交易成本](../每宗交易成本/)，因為失敗需求會靜靜雞推高佢。關於檢查業務個案節省有冇真正落實嘅更廣泛做法，見[效益實現](../效益實現/)；而點解線下渠道通常唔可以、亦唔應該完全撤走，見[數碼包容](../數碼包容/)。

## 常見陷阱

- **假設渠道一對一取代**：將數碼使用率模擬成由電話/櫃位量直接扣減，忽略地方政府渠道轉移研究中記錄嘅潛在需求同失敗需求外溢。
- **撤減之前就入賬總節省**：喺使用率上升嗰年已經將節省計入業務個案，而唔係喺舊渠道產能真正被削減嗰年(如果有嘅話)。
- **忽略人手成本嘅階梯函數特性**：20% 量跌幅好少會轉化為 20% 成本跌幅，因為聯絡中心同櫃位係按固定檔次配置人手，而唔係連續調整。
- **將潛在需求視為浪費**：來自以往被排除或被勸退用戶嘅新接觸，係[公共價值](../公共價值/)嘅真實增加，並非模型錯誤——應該作為可及性成果匯報，而唔係當雜訊抵銷。

## 資料來源

- Cabinet Office, Digital Efficiency Report (2012). <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- Local Government Association, digital transformation and channel shift resources. <https://www.local.gov.uk/our-support/efficiency-and-income-generation/digital-transformation>
- Socitm, local public services digital insight research. <https://www.socitm.net/>
