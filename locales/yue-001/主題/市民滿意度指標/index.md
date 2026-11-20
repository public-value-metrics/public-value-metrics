# 市民滿意度指標

市民滿意度指標，量度人們對自己直接使用公共服務嘅體驗評價——有別於對機構整體嘅信任，亦有別於服務實際上有冇達到良好成果。一項服務可以好受歡迎但冇效，亦可以有效但唔受歡迎；兩者之間嘅落差，本身就係交付團隊應該留意嘅診斷資訊。

## 點解重要

滿意度會喺兩個唔同層次量度，而兩者經常被混為一談。喺服務層面，英國而家已經停用嘅 Performance Platform，同今日 GOV.UK 嘅服務手冊，都要求每項服務進行滿意度調查(通常係五點量表，由「非常滿意」到「非常不滿意」，喺交易時點進行)，作為四項強制服務 KPI 之一——見[服務標準與交易指標](../服務標準與交易指標/)。喺機構層面，英國 Civil Service People Survey 每年量度每個中央政府部門嘅僱員投入度同體驗；另外，OECD 嘅「Trust in Government」計劃調查成員國市民對國家政府嘅信任，追蹤長期下跌同回升嘅模式，而呢個模式深受危機影響(2008 年金融危機同 COVID-19 疫情，都令 OECD 嘅信任數字出現明顯而劇烈嘅變動)。開發面向市民服務嘅工程師，需要將滿意度同成果分開嘅原因，係服務設計中一個已知嘅失敗模式：一份設計精美、容易使用嘅福利申請數碼表格，可以取得極高嘅滿意度，但背後嘅政策——資格規則、處理積壓、發放金額——卻令申請人冇得到任何改善。滿意度量度嘅係介面；佢唔量度喺介面背後所交付嘅價值。

## 數學原理

```
Net satisfaction = % satisfied (or very satisfied) − % dissatisfied (or very dissatisfied)
                    (neutral/no-opinion responses excluded from both terms, but counted
                    in the response base for calculating each percentage)

Satisfaction-to-outcome gap = satisfaction score − outcome achievement score
                    (both normalized 0–100; a large positive gap signals a service
                    that "feels good" but under-delivers on substance)

Trust index (OECD-style) = % of survey respondents answering "yes" to
                    "do you have confidence in [national government]?"
                    tracked as a time series, typically disaggregated by
                    age, income, and education
```

## 實例演算

**地方政府市政稅電子賬單服務**：喺交易成功時點進行嘅滿意度調查，有 2,400 名受訪者：1,650 人滿意/非常滿意，250 人不滿意/非常不滿意，500 人中立。

```
Net satisfaction = (1,650/2,400 × 100) − (250/2,400 × 100)
                  = 68.75% − 10.42%
                  = +58.3 net satisfaction
```

單獨睇呢個數字好強勁。但調查只會顯示畀*成功*完成交易嘅用戶——呢個係已知嘅量度偏差(見下面嘅陷阱)。同[服務標準與交易指標](../服務標準與交易指標/)入面嘅完成率指標配合睇，會發現完成率只有 71%，意味住：

```
True population satisfaction is unmeasured for the 29% who abandoned the journey —
plausibly the most dissatisfied cohort, since abandonment is itself a strong negative
signal the survey never captures.
```

**國家層面例子(OECD 式信任序列嘅結構)**：國家政府信任度第 1 年報告為 42%，第 2 年(危機年)跌至 34%，第 3 年回升至 39%——呢個軌跡係 OECD 記錄各成員國喺重大危機之後，衝擊同部分回復模式嘅典型。

## 與軟件工程嘅關係

要喺用戶旅程每個有意義嘅離開點進行滿意度調查，而唔只係成功完成之時——呢個係此領域最常見嘅工程錯誤，亦悄悄將滿意度指標變成帶有倖存者偏差嘅虛榮指標。如有可能，將滿意度分數同完成率或成果指標放喺同一個儀表板，令團隊唔可以一面慶祝滿意度上升，一面完成率靜靜雞下跌(關於邊啲人從一開始就被排除喺數碼滿意度抽樣之外——非數碼同輔助數碼用戶喺服務內調查中系統性地代表不足——見[每宗交易成本](../每宗交易成本/)同[數碼包容](../數碼包容/))。滿意度同信任數據亦直接餵入[Moore 戰略三角](../公共價值/)嘅合法性一環，並屬於[公共價值計分卡](../公共價值記分卡/)嘅「客戶」同「合法性」視角——關於呢個服務層面指標嘅機構層面對應，見[信任與合法性指標](../信任與合法性指標/)。

## 常見陷阱

- **完成時點調查嘅倖存者偏差**：放棄旅程嘅用戶永遠睇唔到調查，所以服務內嘅高滿意度，可以同低完成率，以及一大批隱形嘅不滿意未完成者並存。
- **將滿意度視為成果嘅代理指標**：為設計欠佳嘅政策而設嘅良好介面，滿意度高但成果差——兩者都要匯報，唔好用其中一個代替另一個。
- **用虛假精確度匯報細小、缺乏代表性嘅樣本**：幾百名自行選擇參與嘅受訪者所得嘅滿意度分數，匯報到小數點後一位，暗示咗樣本量支撐唔到嘅信心。
- **忽略人口分組拆分**：國家信任同滿意度數字，如果冇按年齡、收入、殘疾或者數碼接入情況拆分，會掩蓋各群體之間差異極大嘅體驗——OECD 自己嘅 Trust in Government 發佈，就明確作出咗呢種拆分。

## 資料來源

- OECD, "Trust in Government." <https://www.oecd.org/en/topics/trust-in-government.html>
- UK Cabinet Office, "Civil Service People Survey" results.
  <https://www.gov.uk/government/collections/civil-service-people-survey-results>
- GOV.UK Service Manual, "Measuring Success." <https://www.gov.uk/service-manual/measuring-success>
