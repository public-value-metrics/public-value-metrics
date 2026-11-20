# 代際公平與可持續性貼現

將未來成本同收益貼現返現值，係公共評估嘅標準做法——參閱 [社會貼現率](../社會貼現率/)——但任何正嘅貼現率，經過幾十年甚至幾百年複利計算，都會將遙遠嘅未來縮減至以今日計算接近零。對於後果延伸到一個世紀或以上嘅決定——氣候變化、核廢料、生物多樣性喪失、退休金可持續性——呢個數學事實就變成倫理問題：標準貼現可以令對後代嘅災難性傷害，以現值計睇落幾乎唔值得避免。

## 點解重要

Ramsey 方程由 Frank Ramsey 於 1928 年推導，將貼現率分解為兩個部分：純時間偏好（δ，我哋純粹偏好現在多過將來嘅程度，與財富無關），以及財富增長效應（η×g，因為預期後代更富有，多一鎊對佢哋嘅意義較細，所以要貼現嘅程度）。英國《Green Book》嘅標準長期貼現率建基於呢條方程，並跟隨一個*遞減*時間表而非固定利率——呢個設計源自 Martin Weitzman 對「伽瑪貼現」（gamma discounting）嘅研究，佢顯示當未來貼現率本身不確定時，你應該應用嘅確定性等價利率，在數學上會隨時間遞減，因為睇得越遠，低利率情景就越佔主導。由 Sir Nicholas Stern 領導嘅《氣候變化經濟學史登報告》（Stern Review on the Economics of Climate Change，2006）將倫理辯論推進一步：Stern 主張純時間偏好應該定喺接近零（佢用 δ ≈ 0.1%，只反映文明終結性災難嘅微小機率，而非真正偏好現在多過將來），產生遠低於傳統 Green Book 做法嘅有效貼現率，相應地令今日採取氣候行動嘅理據大得多。批評者（尤其係 William Nordhaus）認為 Stern 近乎零嘅利率喺倫理上站得住腳，但與實際觀察到嘅儲蓄同投資行為不一致。呢個分歧唔係技術註腳——佢係令兩位同樣嚴謹嘅經濟學家，就當代人應為未來犧牲幾多得出截然不同結論嘅最大單一原因，亦係支持長期公共投資評估嘅軟件必須公開其貼現假設，而唔係將佢埋喺試算表預設值入面嘅原因。

## 數學原理

```
Ramsey equation:   r = δ + η × g

  r = social discount rate
  δ = pure time preference (rate of impatience, independent of wealth)
  η = elasticity of marginal utility of consumption (diminishing value of
      extra consumption as people get richer)
  g = expected growth rate of per-capita consumption

Green Book declining long-term schedule (approximate, current published bands):
  Years 0–30:    3.5%
  Years 31–75:   3.0%
  Years 76–125:  2.5%
  Years 126–200: 2.0%
  Years 201–300: 1.5%
  Years 301+:    1.0%

Stern Review parameters: δ ≈ 0.1%, η = 1, g ≈ 1.3%  → r ≈ 1.4%
```

## 實例演算

**一個世紀後避免 £1 傷害嘅今日價值**，按三種貼現制度：

```
Flat Green Book short-term rate (3.5%, held constant for 100 years):
  PV = 1 / (1.035)^100 ≈ 1 / 31.19 ≈ £0.032   (3.2 pence)

Green Book declining schedule (3.5% for yrs 1–30, 3.0% for yrs 31–75,
2.5% for yrs 76–100):
  factor(1–30)  = 1.035^30  ≈ 2.807
  factor(31–75) = 1.03^45   ≈ 3.782
  factor(76–100)= 1.025^25  ≈ 1.854
  total factor ≈ 2.807 × 3.782 × 1.854 ≈ 19.68
  PV = 1 / 19.68 ≈ £0.051   (5.1 pence)

Stern-style near-zero pure time preference (r ≈ 1.4% flat):
  PV = 1 / (1.014)^100 ≈ 1 / 3.997 ≈ £0.250   (25.0 pence)
```

同一個一世紀之後避免嘅 £1 傷害，今日值 3.2 便士、5.1 便士定 25 便士，純粹取決於採用邊種貼現慣例——近乎八倍嘅範圍，決定咗一個前期成本高、回報要一個世紀後先出現嘅氣候減緩項目，究竟過唔過到正淨現值嘅門檻。呢個就係本課題核心警告背後嘅機制：喺任何有意義嘅正固定利率下，足夠遙遠嘅未來傷害，無論其實際嚴重程度如何，都會喺評估中被算術抹走。

## 與軟件工程嘅關係

- 任何長期評估或業務案例工具（基建、氣候適應、退休金建模）都應該實施《Green Book》嘅*遞減*時間表，而唔係單一固定利率——固定利率預設值會悄悄嵌入比現行英國政府指引所訂明更強嘅反未來偏見。
- 貼現率同期限應該永遠作為可見、可審計嘅參數喺評估軟件中公開，並明確展示計算對佢哋嘅敏感度（如上面實例所示）——將利率埋喺設定檔入面，正正招致 Stern-Nordhaus 辯論所警告嘅「隱藏倫理選擇」；呢點同 [自然資本核算](../自然資本核算/) 所強調嘅透明度配合，亦係 [社會貼現率](../社會貼現率/) 課題整體嘅基礎。
- 當計劃嘅效益明確屬於代際（防洪、自然資本修復、長期數碼基建），[社會成本效益分析](../社會成本效益分析/) 應該至少喺兩種貼現假設下匯報結果（Green Book 標準，以及低利率敏感度情景），而唔係單一點估計，令決策者睇到單單貼現率嘅選擇點樣改變答案。

## 常見陷阱

- **呈現單一貼現淨現值而冇敏感度範圍** ——鑑於貼現率本身對長期項目答案嘅影響之大，單一利率嘅淨現值會嚴重誇大精確度；務必匯報一個至少涵蓋《Green Book》標準同低利率情景嘅範圍。
- **將短期固定利率（3.5%）套用於跨越多個世紀嘅評估** ——《Green Book》本身嘅指引正正因為固定利率被判定在大約 30 年之後唔適用，先訂明遞減時間表；無視而照用，會低估長期成本。
- **將 δ（純時間偏好）當成純技術參數** ——Stern 近乎零嘅值同《Green Book》較高嘅隱含值，都只可以作為現在對未來應有幾大權重嘅倫理立場而站得住腳，而唔係實證上「正確」或「錯誤」嘅數字；軟件應該令假設可見，而唔係將某一個數字呈現為客觀正確。

## 資料來源

- Stern N. "The Economics of Climate Change: The Stern Review." Cambridge University Press, 2006.
- Ramsey FP. "A Mathematical Theory of Saving." The Economic Journal, 1928.
- Weitzman ML. "Gamma Discounting." American Economic Review, 2001.
- HM Treasury. "The Green Book: Central Government Guidance on Appraisal and Evaluation" (Annex 6,
  discount rate schedule).
- Nordhaus WD. "A Review of the Stern Review on the Economics of Climate Change." Journal of
  Economic Literature, 2007.
