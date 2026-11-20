# 多重剝奪指數（Index of Multiple Deprivation，IMD）

IMD 係英格蘭小區相對剝奪程度嘅官方量度，將全國 32,844 個下層超級輸出區（Lower-layer Super Output Areas，LSOA，每區約 1,500 名居民）由 1（最被剝奪）至 32,844（最少被剝奪）排名。佢由現時嘅房屋、社區及地方政府部（Ministry of Housing, Communities and Local Government，MHCLG，前稱 MHCLG/DCLG）公布，最近一次係《English Indices of Deprivation 2019》，並直接影響中央政府撥款、公共衞生優先次序，以及數十個地方計劃嘅資格。

## 點解重要

剝奪唔係單一回事——一個社區可以收入貧困但治安良好，或者收入足夠卻健康狀況差、居住環境惡劣。IMD 嘅前身指數（可追溯至 1970 年代環境部嘅剝奪指標）演變成今日嘅七範疇模型，正正因為單一指標定位（例如單看失業率）經常漏掉其他方面被剝奪嘅地區。IMD 2019 將收入、就業、教育、健康、罪案、房屋及服務障礙同生活環境，合成每個 LSOA 嘅單一綜合排名，每個範疇由自己嘅一籃子指標組成，並按 MHCLG 嘅方法加權。由於佢以小區（LSOA）而非地方政府層面運作，所以可以揭露隱藏喺其他方面富裕地區入面嘅剝奪角落——呢個正係 NHS England、教育部嘅學生補助金（pupil premium）同數十個地方政府撥款公式實際參照 IMD 十分位或排名、而非地方政府平均收入嘅原因。喺英格蘭負責判定資格、安排外展優先次序或按地區匯報影響嘅軟件，應該將 IMD 十分位或排名視為一等輸入，而唔係事後補加——而當計劃刻意針對最被剝奪嘅地區，其評估應該套用與該目標一致嘅 [分配權重](../分配權重/)，而唔係無論去到邊度，一鎊收益都估值一樣。

## 數學原理

```
7 domains, weighted:
  Income                              22.5%
  Employment                          22.5%
  Education, Skills and Training      13.5%
  Health Deprivation and Disability   13.5%
  Crime                                9.3%
  Barriers to Housing and Services     9.3%
  Living Environment                   9.3%

Each domain score: indicators standardized (ranked, then transformed
towards a normal distribution) and combined by exponential transformation
so that high deprivation on any one indicator cannot be fully cancelled
out by low deprivation on others within that domain.

IMD composite score (LSOA) = Σ (domain score × domain weight)
Rank LSOAs by composite score → 1 (most deprived) to 32,844 (least deprived)
Deciles: rank ÷ 3,284 (approx.), decile 1 = most deprived 10% of LSOAs
```

## 實例演算

**LSOA 綜合分數**，用示例性嘅標準化範疇分數（0 = 冇剝奪信號，數值越高越被剝奪）：

```
Income               0.35 × 0.225 = 0.07875
Employment           0.30 × 0.225 = 0.06750
Education            0.20 × 0.135 = 0.02700
Health               0.15 × 0.135 = 0.02025
Crime                0.10 × 0.093 = 0.00930
Barriers to Housing  0.05 × 0.093 = 0.00465
Living Environment   0.08 × 0.093 = 0.00744

Composite score = 0.07875 + 0.06750 + 0.02700 + 0.02025
                + 0.00930 + 0.00465 + 0.00744  = 0.21489
```

之後將呢個綜合分數同全部 32,844 個 LSOA 嘅分數排名比較。如果佢將該 LSOA 排喺第 2,950 位，就屬於十分位 1（2,950 ÷ 3,284 ≈ 0.9，即屬於英格蘭最被剝奪嘅 10% 社區之列）——對好多撥款公式嚟講，呢個係解鎖資格嘅門檻，無論周邊地方政府平均得分如何。

## 與軟件工程嘅關係

- 任何將用戶地理編碼到郵政編碼或 LSOA 嘅服務，都可以連接已公布嘅 IMD 查找表（MHCLG 提供嘅免費、有版本嘅 CSV），加入剝奪十分位作為協變量——用於定位外展對象、安排個案量優先次序，或者按剝奪級別匯報成果，而無需收集新嘅個人數據。
- IMD 十分位係公共數碼服務標準嘅公平檢查：按 IMD 十分位交叉統計服務使用率、流失或滿意度，可以揭示總體指標所隱藏嘅使用差距——參閱 [數碼包容](../數碼包容/) 同 [市民滿意度指標](../市民滿意度指標/)。
- 由於 IMD 排名係相對嘅（佢永遠係全英格蘭一組固定排名），所以無法顯示全國剝奪程度隨時間上升定下降——只可以顯示喺該版本入面，各地區相對彼此嘅排位；唔好單憑原始 IMD 排名建立絕對趨勢儀表板。

## 常見陷阱

- **將不同版本（2015 對 2019）嘅 IMD 排名當成時間趨勢比較** ——各版本之間嘅底層指標、地理區劃同方法論全部改變；MHCLG 明確建議唔好將排名變化用作某地區變得更加或更少被剝奪嘅證據。
- **將 LSOA 層面嘅 IMD 套用於個人** ——十分位 1 嘅 LSOA 內仍有不被剝奪嘅家庭，而十分位 10 嘅 LSOA 內仍有被剝奪嘅家庭；IMD 描述嘅係地區而非個人，用作個人資格代理，兩個方向都會錯誤分類。
- **只睇綜合排名而忽略範疇層面嘅細節** ——兩個綜合分數相同嘅 LSOA，範疇概況可以完全唔同（一個健康被剝奪，一個罪案被剝奪）；針對某一問題嘅定位方案，應該用相關範疇分數，而唔係混合嘅綜合分數。

## 資料來源

- Ministry of Housing, Communities and Local Government. "English Indices of Deprivation 2019."
  <https://www.gov.uk/government/statistics/english-indices-of-deprivation-2019>
- MHCLG. "The English Indices of Deprivation 2019: Technical Report."
