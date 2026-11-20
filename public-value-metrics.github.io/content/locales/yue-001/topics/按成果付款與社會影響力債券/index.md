# 按成果付款與社會影響力債券

按成果付款(Payment by Results，PbR)係根據經核實已達成嘅成果，而非已執行嘅活動，向服務提供者付款。社會影響力債券(Social Impact Bond，SIB)係一種特定嘅 PbR 融資結構：私人或者慈善投資者預先為服務提供出資，只有當獨立量度嘅成果達到協定門檻，政府委託方先會償還款項並附帶回報，從而將交付風險由納稅人轉移到投資者身上。

## 點解重要

全球第一個 SIB 於 2010 年 9 月喺 HMP Peterborough 推出：Social Finance 向 17 名投資者籌集 £5 million，資助「One Service」，為刑期短(少於 12 個月)嘅囚犯提供服務以減少再犯；司法部(Ministry of Justice)同 Big Lottery Fund 同意，只有當再定罪事件相比配對嘅全國對照群組至少減少 7.5%，先會償還投資者。Peterborough 試點嘅最終群組錄得再定罪減少 9.7%，遠高於門檻，投資者獲得償還並有回報。呢個機制之所以重要，係因為佢解決咗一個特定嘅委託難題：政府想按成果而非投入付費，但又承受唔起一項可能無效嘅干預措施所帶來嘅財政風險，所以 SIB 結構將呢個風險轉移到願意承擔嘅投資者身上。牛津大學 Blavatnik School of Government 嘅 Government Outcomes Lab(GO Lab)，現時維護全球最完整嘅 PbR 同 SIB 成效公開證據庫，追蹤全球超過 200 個影響力債券，並發表有關邊啲設計特徵同成敗相關嘅研究。證據庫反覆得出嘅教訓係：*所揀選嘅成果指標*，以及邊個承擔未能達標嘅風險，幾乎決定咗 PbR 合約實際運作時嘅其他一切。

## 數學原理

```
PbR payment = base payment (if any) + Σ (outcome achieved × unit price per outcome)

Social impact bond investor return:
  Investor outlay   = upfront capital funding service delivery
  Outcome payment   = commissioner pays only if outcome ≥ threshold, scaled by
                       how far above threshold performance lands
  Investor return   = outcome payments received − investor outlay
                       (a rate of return, often capped, reflecting risk taken)

Key design parameters that determine the whole contract's behaviour:
  Outcome metric        — must be an outcome, not an output (see outcomes-vs-outputs)
  Comparison/counterfactual — usually a matched cohort (see counterfactual-analysis)
  Payment threshold      — minimum improvement before any payment triggers
  Payment curve           — linear, stepped, or capped above the threshold
  Attribution/deadweight discount — see additionality-and-deadweight
```

## 實例演算

**Peterborough One Service**(說明用數字，取材自已發表嘅評估)：

```
Investor capital raised:         £5,000,000
Cohort:                          ~3,000 short-sentence male prisoners over two cohorts
Threshold:                       ≥7.5% reduction in reconviction events vs matched
                                  national comparison group, or no payment
Cohort 1 result:                 8.4% reduction — below the contractual bar for that
                                  cohort alone under the original rules
Combined/final cohort result:    9.7% reduction — above threshold
Outcome payment:                 government (Ministry of Justice / Big Lottery Fund)
                                  pays per percentage point above threshold, funding
                                  investor repayment plus a return
```

**地方政府 PbR 合約(說明用)**：一項家庭介入服務，按每個轉介家庭 £4,000(活動付款)，另加每個結案後 12 個月內冇再被轉介兒童保護服務嘅家庭 £6,000(成果付款)委託。共轉介 200 個家庭、結案 150 宗、其中 96 宗喺 12 個月後仍冇再被轉介：

```
Activity payment  = 200 × £4,000 = £800,000
Outcome payment   = 96 × £6,000  = £576,000
Total contract cost = £1,376,000 for 96 confirmed sustained outcomes
Cost per confirmed outcome ≈ £14,333 (see cost-per-outcome)
```

## 與軟件工程嘅關係

按成果付款首先係激勵一致性問題，其次先係數據問題，而數據系統就係呢種一致性成立或者崩潰嘅地方。獨立、防篡改嘅成果核實就係成敗關鍵：委託方同服務提供者對於模稜兩可嘅個案點樣歸類，有相反嘅激勵，所以記錄成果嘅系統需要審計追蹤、同獨立核實方(通常係同服務提供者不同嘅機構，有時係同警方或者福利記錄配對嘅官方統計機構)簽訂數據共享協議，以及成果定義嘅不可變版本管理——呢個係[公營界別 KPI](../公營界別關鍵績效指標/)入面「重新定義指標」陷阱嘅 PbR 版本。歸因計算依賴[反事實分析](../反事實分析/)嘅配對群組方法，需要可重現、可審計嘅程式碼，而唔係一次性嘅試算表。而指標本身必須係真正嘅成果，而非代理活動——見[成果與產出](../成果與產出/)——因為按產出付款嘅 PbR 合約，只係將平常嘅資助換個名，仲要額外增加交易成本。當要前瞻性咁為 SIB 嘅社會回報建模時，評估通常直接借用[社會投資回報](../社會投資回報/)方法。

## 常見陷阱

- **為容易被操弄嘅代理成果付款**：「出席環節」係偽裝成成果嘅活動；要堅持用反映所尋求實際改變(再犯、就業、住屋穩定)嘅指標。
- **冇可信嘅反事實**：冇配對對照組，改善可能只係均值回歸或者更廣泛趨勢，而非計劃效果——見[反事實分析](../反事實分析/)同[額外性與死重效應](../額外性同死重效應/)。
- **低估交易同評估成本**：PbR／SIB 計劃嘅獨立核實、數據連結同合約管理，佔合約價值嘅比例經常達到雙位數——GO Lab 嘅證據庫記錄咗呢點係計劃中止嘅常見成因。
- **挑選客戶或者「擱置」**：按成果收費嘅服務提供者，有直接激勵優先處理本來就最有可能成功嘅客戶，而減低處理最困難個案嘅優先次序——要設計分層付款或者個案組合調整來對抗。

## 資料來源

- Government Outcomes Lab, University of Oxford, Blavatnik School of Government.
  <https://golab.bsg.ox.ac.uk/>
- Social Finance, "Peterborough Social Impact Bond" evaluation summaries.
  <https://golab.bsg.ox.ac.uk/case-studies/peterborough-social-impact-bond/>
- Ministry of Justice, "Peterborough Social Impact Bond HMP Doncaster: Final Reconviction Results
  for the Peterborough Social Impact Bond."
