# 分配權重

分配權重（distributional weighting）按收益或成本由邊個承受，調整其貨幣價值，原則係多一鎊對窮困家庭嘅價值高過對富裕家庭。HM Treasury（英國財政部）嘅《Green Book》提供咗一個明確嘅應用方法，建基於收入邊際效用遞減，令評估唔會不知不覺咁將最富裕十分位組得到嘅一鎊，同最貧窮組得到嘅一鎊視為等值。

## 點解重要

標準成本效益分析將英鎊加埋計，卻唔問呢啲英鎊屬於邊個，暗中假設一鎊對所有人價值一樣——經濟學家早就知道呢個假設唔成立。年收入 £15,000 嘅家庭同年收入 £150,000 嘅家庭，對 £1,000 增益嘅感受大相逕庭，因為收入越高，收入嘅邊際效用越低。如果唔加權重，標準評估會有系統地偏向惠及較富裕、本身已經較好境況嘅群體，因為佢哋較高嘅購買力令流向佢哋嘅利益貨幣估值被推高（喺昂貴住宅區附近升級公園，會「顯示」比喺平價住宅區附近同樣嘅升級更大嘅物業價值收益，純粹因為樓價較高，而唔係福利增益更大）。

《Green Book》有關分配分析嘅補充指引，喺財政部 2020 年檢討回應「評估方法有系統地偏向倫敦同東南部」嘅批評後得到加強，訂立咗一個正式嘅加權方法，假設收入邊際效用彈性約為 1.3——意思係收入加倍，多一鎊嘅邊際價值大約減半（準確啲係 2^-1.3 ≈ 0.41 倍）。呢個唔係湊整嘅小調整：應用之後，兩個競爭計劃邊個淨現值（net present value）較高可能會倒轉，尤其係比較集中喺貧困地區嘅介入同遍及一般人口嘅介入。

## 數學原理

《Green Book》為收入水平 y 嘅家庭所得嘅一鎊收益，相對於全國平均收入水平 ȳ 嘅一鎊，訂定嘅分配權重：

```
Weight(y) = (ȳ / y)^e

where:
  y  = household income (or income of the affected group)
  ȳ  = average (reference) household income
  e  = elasticity of marginal utility of income (Green Book: approximately 1.3)
```

將權重應用於淨收益：

```
Weighted benefit = Σ [unweighted benefit to group i × Weight(y_i)]
```

收入只有全國平均一半（y = 0.5ȳ）嘅群體，權重為 (1/0.5)^1.3 = 2^1.3 ≈ 2.46——該群體每一鎊收益，價值大約相當於平均收入家庭嘅 2.46 鎊。

## 實例演算

**兩個競爭嘅地方計劃**，未加權淨收益都係每年 £2 million，爭取同一個區域增長基金：

- *計劃 A*：喺繁榮市鎮嘅企業支援計劃，家庭平均收入 £45,000（約為假設全國平均 £35,000 嘅 1.3 倍）。
- *計劃 B*：喺貧困選區嘅技能培訓計劃，家庭平均收入 £18,000（約為全國平均嘅 0.51 倍）。

```
Weight(A) = (35,000 / 45,000)^1.3 = (0.778)^1.3 ≈ 0.72
Weight(B) = (35,000 / 18,000)^1.3 = (1.944)^1.3 ≈ 2.53

Weighted benefit A = £2,000,000 × 0.72 = £1.44 million
Weighted benefit B = £2,000,000 × 2.53 = £5.06 million
```

未加權時，兩個計劃打成平手。計入分配影響之後，計劃 B 嘅收益超過三倍——結果令撥款建議倒轉，亦反映出《Green Book》要求展示加權結果、而非只係未加權成本效益比率嘅明確目的。

**慈善資助分配**：資助者比較兩筆 £500,000 嘅撥款，一筆惠及 1,000 個低收入家庭（權重約 2.0，加權價值相當於 £1 million），另一筆惠及 1,000 個中等收入家庭（權重約 1.0，加權價值相當於 £500,000），應該喺董事會文件入面明確展示分配方面嘅理據，而唔係留畀人自行推斷。

## 與軟件工程嘅關係

分配權重好少直接出現喺軟件交付指標入面，但佢應該影響工程同數據團隊點樣設計量度同目標設定：

- 建立影響力儀表板或收益計算器時，要展示受影響人群嘅收入或貧困狀況，而唔單止係收益總數——冇分配細分嘅總計數字，會隱藏上面所示嘅倒轉結果。
- 將服務設計入面嘅目標群體邏輯連結到《Green Book》所用嘅同一套貧困數據——參閱 [多重剝奪指數](../多重剝奪指數/)——咁就可以評估數碼服務嘅覆蓋面係咪公平，而不單止係咪有效率（即 [物有所值](../物有所值/) 入面備受爭議嘅第四個 E）。
- 當演算法分配稀缺資源（預約時段、個案工作員時間、補貼），未加權嘅「最大化總收益」目標函數，按其構造必然重現《Green Book》加權旨在糾正嘅同一種偏差——優化之前要向政策負責人明確指出呢點。

## 常見陷阱

- **喺一個組合內前後不一致地應用分配權重。** 只加權一個計劃嘅收益而唔加權其比較對象，會產生有偏差而非更公平嘅比較；《Green Book》要求同類處理。
- **未經調整就用物業或市場價值代替福利。** 市場價格本身已被現有收入不平等扭曲，而呢正係分配權重要糾正嘅問題——用未調整嘅市場價值可能令偏差重複計算。
- **忽略組內差異。** 按地區平均收入（例如多重剝奪指數十分位）加權，可能錯誤反映同所在地區平均唔相符嘅個人；應使用合理可得嘅最細緻收入數據。
- **將 1.3 彈性當成通用常數。** 《Green Book》本身指出呢個係有合理範圍嘅估計值；重大決策應該用其他彈性值做敏感度測試，而唔係將 1.3 當成精確值。

## 資料來源

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation", and
  supplementary guidance on distributional impacts (2022 edition).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury, "Green Book Review 2020: Findings and Response" (addressing regional-bias criticism).
  <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>
- Fujiwara D, Campbell R. "Valuation Techniques for Social Cost-Benefit Analysis." HM Treasury/DWP,
  2011 (background on marginal utility of income elasticity estimates).
