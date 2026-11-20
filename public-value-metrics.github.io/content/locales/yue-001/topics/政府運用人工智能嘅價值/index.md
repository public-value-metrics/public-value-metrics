# 政府運用人工智能嘅價值

政府運用人工智能嘅價值，係指公共服務所用嘅 AI 系統，必須達到同其他開支決定一樣嘅物有所值同公共價值標準——唔因為新穎而放寬，亦唔因為令人憂慮而加碼。呢個係交付團隊喺 AI 功能推出之前(而唔係之後)必須答到嘅問題：當保證、監督同風險都如實計入成本之後，呢個系統帶嚟嘅價值，係咪多過佢嘅成本？

## 點解重要

英國 Central Digital and Data Office (CDDO，中央數碼及數據辦公室)喺 2024 年發佈咗《Generative AI Framework for Government》，建基於 2023 年 6 月嘅臨時指引，圍繞十項原則編排：包括生成式 AI 係乜、倫理影響、工具安全、質素保證控制、管理生成式 AI 嘅完整生命週期、識別真正嘅使用情境、跨政府協作、透明度、技能同管治。框架強調「有意義嘅人為控制」同完整生命週期管理，係因為 AI 項目嘅業務個案有一種其他 IT 開支冇嘅特有失敗模式：試點嘅頭條生產力數字好易做出嚟，亦好易誇大，因為佢係喺未計入工具所帶來嘅核實、更正同監督負擔之前量度嘅。除咗框架，Algorithmic Transparency Recording Standard (ATRS，演算法透明度記錄標準)要求公共機構，就對個人決定有重大影響嘅演算法工具，公佈標準化記錄——目的、所用數據、表現、公平性測試、人為監督安排——令 AI 系統嘅保證成本成為公開紀錄，而唔係團隊可以靜靜雞略過嘅內部估算。

## 數學原理

AI 嘅採用係喺標準[物有所值](../物有所值/)評估之上額外作評估，而唔係取代佢，並且將 AI 特有嘅項目清楚列明，而唔係併入單一個「生產力增益」數字：

```
Net value of an AI system =
    productivity gain (time saved × loaded staff cost)
  − licence/compute cost
  − human verification and oversight cost (checking AI output before
    it's acted on — this does not shrink to zero even for mature tools)
  − ATRS documentation and ongoing monitoring cost
  − risk-adjusted cost of harm from errors, bias, or hallucination,
    weighted by who bears that harm (distributional-weighting)

A pilot productivity figure that omits the oversight term is not
comparable to a business-as-usual cost baseline that already includes
equivalent human review — see ai-productivity-in-the-public-sector
for the fuller productivity-measurement discipline this borrows from.
```

## 實例演算

**地方政府用生成式 AI 工具草擬市政稅(council tax)日常查詢嘅首次回覆**：每年 25,000 宗查詢，以往全部由個案主任處理，平均每宗 14 分鐘，員工全包成本每小時 £34。

```
Baseline (no AI) cost:
  25,000 × (14/60) × £34 = £198,333/year

Pilot headline claim: AI drafts a response in 90 seconds,
caseworker "just reviews and sends" — claimed new time is 3 minutes
  25,000 × (3/60) × £34 = £42,500/year
  → claimed saving £155,833/year (looks transformational)

Fully-loaded figure, measured after 3 months live rather than in the
pilot's hand-picked test cases:
  Actual review + correction time per response: 6 minutes (drafts
  need real editing for complex or emotionally sensitive enquiries)
  25,000 × (6/60) × £34 = £85,000/year
  Licence/compute cost: £38,000/year
  ATRS documentation and quarterly bias/quality monitoring: £14,000/year
  Total cost = 85,000 + 38,000 + 14,000 = £137,000/year

Real saving = 198,333 − 137,000 = £61,333/year — genuine and worth
keeping, but well under half the pilot's headline claim, and it
required an honest oversight-time measurement, not the pilot's
best-case one, to find.
```

## 與軟件工程嘅關係

呢度就係[公共部門嘅 AI 生產力](../公共部門嘅-ai-生產力/)同本主題交匯之處：為公共服務加入 AI 功能嘅工程團隊，掌握住令實例入面「真實」數字成為可能嘅量度工具——記錄實際審閱時間、草稿同已發送回覆之間嘅編輯距離，以及升級處理率，而唔係相信試點嘅示範條件。AI 功能應該對照[數碼服務標準](../數碼服務標準/)第 9 點(安全嘅服務、用戶私隱)作評估，而當工具接觸市民數據時，亦要同[公共部門網絡安全嘅價值](../公營界別網絡安全嘅價值/)互相參照；任何對個人決定有重大影響嘅 AI 系統，都需要先有 ATRS 記錄，先至算準備好接受評估，就好似一項服務要先通過[數碼服務標準](../數碼服務標準/)評估先至可以上線一樣。

## 常見陷阱

- **AI 洗白(AI-washing)**：將現有嘅規則式自動化重新包裝成「AI」，去攞為 AI 採用預留嘅資金或者關注，但又冇真正令框架需要額外審視嘅準確度或者偏見風險。
- **量度試點生產力，而唔係正式運作嘅生產力**：試點用精挑細選嘅測試個案、專注投入嘅審閱人員；正式運作面對嘅係完整雜亂嘅個案組合，而審閱人員日子久咗會養成自動化偏見(automation bias)，核對得愈嚟愈鬆——兩者都會扭曲真實嘅監督成本數字。
- **因為工具「其實唔算自動化決策」而略過 ATRS 登記**：標準嘅門檻係對個人決定有重大影響，大部分面向市民嘅 AI 草擬或者分流工具都符合，就算技術上有人類簽核都一樣。
- **忽略錯誤嘅分配影響**：AI 系統喺所有用戶平均計算嘅錯誤率，可以掩蓋特定群體高好多嘅錯誤或者偏見率；[分配加權](../分配權重/)應該用喺經風險調整嘅損害項目上，而唔只係整體準確度數字。

## 資料來源

- Central Digital and Data Office, Generative AI Framework for Government (2024). <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>
- Algorithmic Transparency Recording Standard. <https://www.gov.uk/government/collections/algorithmic-transparency-recording-standard-hub>
- HM Treasury, Green Book: central government guidance on appraisal and evaluation. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-governent>
