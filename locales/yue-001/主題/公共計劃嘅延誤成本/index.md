# 公共計劃嘅延誤成本

延誤成本(Cost of Delay，CoD)係指一個計劃、服務或者系統變更*尚未*交付期間，每單位時間損失嘅公共價值。佢係呢組主題之中嘅核心橋樑指標：將「上線延遲咗六個月」換算成每星期幾多鎊，或者每星期幾多個 WELLBY，令延誤可以用同業務個案本身一樣嘅貨幣去爭論。

## 點解重要

Reinertsen 嘅法則——「如果你只量化一樣嘢，就量化延誤成本」——幾乎原封不動咁應用到政府，因為公共計劃特別容易受延誤影響：業務個案係按預測嘅效益流批准，但效益流要到上線先開始流動，而每延誤一個星期，就係損失一個星期嘅價值，而風險登記冊上冇人為之定價。National Audit Office 對 Universal Credit(統一福利金)推出嘅反覆審查(見其「Rolling Out Universal Credit」報告，<https://www.nao.org.uk/>)正好說明呢種模式：進度延誤有被追蹤同匯報，但*尚未*向下一批申請人交付改革後系統嘅每星期成本，卻罕有被列為頭條數字，雖然呢個正係本應推動優先排序同升級處理嘅數字。冇 CoD 數字，延誤嘅計劃睇落只係交付委員會嘅進度問題；有咗，佢就係會計主任要面對嘅價值流失問題。

## 數學原理

```
CoD = benefit per unit time forgone while undelivered   (£/week or WELLBYs/week)

Total delay loss = CoD × delay duration

Benefit streams to sum for public programmes:
  cash-releasing savings   (fraud/error reduction, avoided temporary costs)
+ non-cash capacity freed  (caseworker/officer hours × loaded cost)
+ wellbeing benefit        (WELLBYs × £13,000/WELLBY, HMT Green Book
                             wellbeing supplementary guidance, 2019 prices)
```

對於面向市民嘅服務，除咗金錢之外，亦要以福祉計量——基礎單位見[福祉調整生命年](../福祉調整生命年/)，而被延誤嘅一鎊本來可以資助乜嘢，見[公共開支嘅機會成本](../公共開支嘅機會成本/)。

## 實例演算

**地方政府**：一個房屋福利系統升級，令 20,000 宗現行申請，每宗每年嘅多付錯誤減少 £150。

```
Annual benefit = 150 × 20,000 = £3,000,000/year
CoD = 3,000,000 / 52 ≈ £57,700/week
A 12-month implementation delay costs 52 × 57,700 ≈ £3,000,000 in avoidable error.
```

**中央政府機構**：一項殘疾福利評估服務，比原定計劃遲六個月(26 個星期)交付，意味每年 200,000 名申請人，平均要多等三個星期先獲得決定。每多一個星期嘅財務不確定性，模型化為 −0.0018 WELLBY(生活滿意度點數)嘅影響：

```
WELLBY loss per claimant = 3 × 0.0018 = 0.0054
Annual WELLBY loss = 200,000 × 0.0054 = 1,080 WELLBYs/year
CoD_wellbeing = 1,080 / 52 ≈ 20.8 WELLBYs/week
CoD_money = 20.8 × £13,000 ≈ £270,000/week of wellbeing value
```

因此，26 個星期嘅延誤「損失」大約 540 個 WELLBY——按 Green Book 嘅福祉估值，約值 700 萬鎊——將錯過上線日期，重新定性為市民福祉事件，而唔係項目管理上嘅註腳。

## 與軟件工程嘅關係

CoD 令 [DORA 指標](../公共價值嘅-dora-指標/)同[流動指標](../政府交付中嘅流動指標/)喺財務上變得易於理解：管道中嘅前置時間 × CoD，就係喺到達市民之前，已經喺隊列中燒咗嘅金錢(或者福祉)。具體而言：

- **優先排序**：按 CoD ÷ 持續時間，而唔係按持份者資歷，為待辦事項排序——呢個係 Green Book 要求按價值而非按邊個提出去評估方案嘅軟件工程版本。
- **採購**：12–18 個月嘅框架採購週期有 CoD；為佢定價會改變加速途徑嘅緊迫性論據，亦直接餵入[自行開發定外購](../政府自行開發定外購/)決定，當中見效時間係決策驅動因素之一。
- **效益個案**：批准時引用嘅每個 CoD 數字，都應該喺[效益實現](../效益實現/)階段重新出現——如果延誤成本真實存在，加快帶來嘅效益應該可以喺上線後量度。

## 常見陷阱

- **假設 CoD 係線性**：部分公共服務嘅價值係期限形狀(法定合規日期——日期之後 CoD 跳升至執法風險水平，之前接近零)，而唔係平滑嘅每週比率。相乘之前，先分類緊迫性輪廓。
- **對冇人需要嘅產出計 CoD**：延誤只有喺未交付嘅東西有價值時先有成本；一個冇人會用嘅系統，無論幾遲，CoD 都係零。
- **重複計算延誤同貼現**：[社會貼現率](../社會貼現率/)已經為多年評估期嘅時間定價；CoD 係範圍內、以星期同月份計嘅營運版本。進度延誤用 CoD，多年重新分期用 NPV 位移。

## 資料來源

- Reinertsen DG, *The Principles of Product Development Flow*, Celeritas Publishing, 2009.
- HM Treasury, Green Book supplementary guidance: wellbeing. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>
- National Audit Office, reports on Universal Credit rollout. <https://www.nao.org.uk/>
