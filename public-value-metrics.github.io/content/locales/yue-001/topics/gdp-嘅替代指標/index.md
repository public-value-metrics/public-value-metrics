# GDP 嘅替代指標

GDP 替代指標，係為咗捕捉國內生產總值（GDP）結構上忽略嘅事物而設計：無償照顧工作、環境耗竭、收入分配，以及增長究竟有冇真正改善生活。最知名嘅係真實進步指標（Genuine Progress Indicator，GPI）同不丹嘅國民幸福總值（Gross National Happiness，GNH）指數；2009 年 Stiglitz-Sen-Fitoussi 委員會最具影響力地提出咗認真看待呢啲指標嘅理據。對於建立政府儀表板或 KPI 系統嘅工程師嚟講，「邊個數字算係進步」係一個設計決定，直接影響邊啲項目獲得資助。

## 點解重要

1930 年代建立美國國民賬戶嘅 Simon Kuznets，喺 1934 年向國會警告「單憑國民收入嘅量度，幾乎無法推斷一個國家嘅福祉」——呢個但書幾乎即刻就被該數字拋諸腦後。GDP 將漏油事故嘅清理算作增長，而將父母無償嘅育兒當作冇價值；佢冇區分建立持久福祉嘅開支，同只係彌補已造成傷害嘅開支。Stiglitz-Sen-Fitoussi 委員會由法國總統 Nicolas Sarkozy 召集，由 Joseph Stiglitz、Amartya Sen 同 Jean-Paul Fitoussi 擔任主席，並於 2009 年報告指出，統計系統應該「由量度經濟生產轉向量度人民嘅福祉」，而可持續性應該同當前福祉分開追蹤，而唔係揉合成一個數字。GDP 替代指標就係將呢項建議付諸實行。GPI 由智庫 Redefining Progress 於 1990 年代發展，建基於 William Nordhaus 同 James Tobin 1972 年嘅經濟福利量度（Measure of Economic Welfare），同 GDP 一樣由個人消費出發，然後加上 GDP 遺漏嘅非市場收益（家務勞動、義工服務），同時扣減 GDP 錯誤計作正數嘅防禦性同耗竭成本（罪案、污染、通勤、資源提取）。不丹嘅 GNH 指數由不丹 GNH 中心（GNH Centre Bhutan，<https://www.gnhcentre.bt/>）管理，走得更遠，取代增長成為該國憲法明訂嘅目標：佢將 9 個範疇共 33 項指標——心理福祉、健康、教育、時間運用、文化多樣性、管治、社區活力、生態多樣性同生活水平——合成一個基於充足度嘅單一分數，直接用嚟篩選政府政策建議。

## 數學原理

```
GPI = personal consumption expenditure
      + non-market benefits (household labour, volunteering, higher education)
      − defensive and social costs (crime, pollution, commuting, family breakdown)
      − depletion of natural and social capital (resource drawdown, farmland loss)

GNH sufficiency score, per domain:
  a person is "sufficient" in a domain once they clear its threshold on each indicator
  Happiness Index = (% of population sufficient in ≥ 6 of 9 domains)
                    + (weighted average shortfall of the "not-yet-happy" minority)
```

## 實例演算

**某地區，GPI**：個人消費係 $50bn。加上估計家務同義工勞動價值 $12bn（按替代成本工資率計算——見 [義工時間價值](../義工時間價值/)）。減去估計每年通勤擠塞成本（$3bn）、罪案（$4bn）同長期資源耗竭（$6bn）：

```
GPI = 50 + 12 − 3 − 4 − 6 = 49 ($bn)
```

如果當年 GDP 由 $50bn增長至 $55bn（+10%），但防禦性同耗竭成本增長快過消費，GPI 可以喺 GDP 上升嘅同時下跌——呢個就係 GPI 研究者就高收入經濟體所引用嘅「門檻假說」，大約自 1970 年代起，增長不斷攀升而 GPI 持平。

**某市民，GNH**：一位受訪者喺 9 個範疇中有 7 個達到充足度門檻（健康、教育、生活水平、社區活力、文化多樣性、生態多樣性、時間運用），但喺心理福祉同管治方面未達標。因為 7 ≥ 6，佢喺人頭統計中被計作「快樂」；指數另外追蹤佢兩項不足嘅深度，咁就唔會將險過同舒適過關混為一談。

## 與軟件工程嘅關係

- 只按吞吐量或開支（GDP 模式）建模嘅 KPI 儀表板，會有系統地漏掉為製造該吞吐量所造成嘅傷害——將支援工單數量當成「參與度」而非「用戶困擾」，就係軟件交付版本嘅「將漏油當成增長」。
- GPI 式核算係任何 [公共部門 KPI](../公營界別關鍵績效指標/) 套組嘅有用審計模式：對每個頭條產出指標，都要問佢悄悄招致乜嘢防禦性成本（返工、事故處理、過勞），並將之扣除，就好似 GPI 從消費入面扣除防禦性開支一樣。
- GNH 嘅範疇充足度方法——每個維度判定合格與否，再匯總——結構上同 [多準則決策分析](../多準則決策分析/) 係同一種技術，凡單一標量分數會掩蓋關鍵失敗維度嘅地方，都值得重用。

## 常見陷阱

- **將 GPI 當成精確嘅國民賬戶** ——同 GDP 唔同，GPI 冇單一標準化方法；唔同研究對通勤成本、義工時間或資源耗竭嘅加權各異，所以跨研究嘅 GPI 比較，遠不如跨國 GDP 比較可靠。
- **將 GNH 整套搬入唔同嘅政策文化** ——其範疇權重同充足度門檻係透過不丹嘅諮詢過程訂立；只抄數字而冇底層諮詢過程，會產生一個冇人信任嘅空洞指標。
- **以為 GDP 替代指標可以取代成本效益評估** ——呢啲係診斷性嘅全經濟指標，而唔係單一計劃嘅決策工具；喺嗰種情況應該用 [社會成本效益分析](../社會成本效益分析/)。

## 資料來源

- Stiglitz JE, Sen A, Fitoussi J-P. "Report by the Commission on the Measurement of Economic
  Performance and Social Progress." (2009) <https://ec.europa.eu/eurostat/documents/118025/118123/Fitoussi+Commission+report>
- GNH Centre Bhutan. <https://www.gnhcentre.bt/>
- Redefining Progress. "The Genuine Progress Indicator: A Tool for Sustainable Development."
- Nordhaus WD, Tobin J. "Is Growth Obsolete?" (1972), NBER.
