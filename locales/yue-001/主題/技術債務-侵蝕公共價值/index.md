# 技術債務：侵蝕公共價值

技術債務係 Ward Cunningham 喺 1992 年提出嘅比喻，指過往為求方便而作出嘅編碼決定所隱含嘅未來成本：包括**本金**(所欠嘅補救工作)同**利息**(佢對交付持續造成嘅拖累)。喺政府遺留資訊科技系統中，呢啲利息直接由公共價值支付——法定變更交付更慢、面向市民服務嘅故障率更高，而能夠安全接觸系統嘅人手庫亦愈縮愈細。

## 點解重要

英國政府各部門嘅大型主機同 COBOL 時代系統——HMRC 同 DWP 係最常被引用嘅例子——帶有記錄充分而不斷升級嘅風險，National Audit Office(國家審計署)已多次提出警告，包括喺其報告《Digital Transformation in Government》(<https://www.nao.org.uk/>)中：老化平台更改成本高昂、愈來愈難以保障安全，並且依賴一批退休速度快過補充速度嘅專才。同私營部門嘅待辦事項積壓唔同，呢種債務直接橫亘於市民同佢哋嘅法定權益之間——一個無法安全修改嘅福利計算引擎，係政策交付嘅限制，而唔只係工程上嘅不便。2013 年 Universal Credit 資訊科技計劃重啟，當時 National Audit Office 發現原有建設唔會帶來物有所值，並且軟件資產中大部分要註銷，係未定價嘅技術債務追上一項運作中、受部長關注嘅公共計劃嘅典型例子。

## 數學原理

```
SQALE principal = Σ over violations (remediation time) × developer cost rate
Technical debt ratio (TDR) = remediation cost / redevelopment cost × 100
                    (SonarQube grades: A ≤5%, B ≤10%, C ≤20%, D ≤50%)

Interest (the number that justifies paydown):
  interest/year = Δ delivery velocity × value per unit velocity
                + Δ citizen-facing incident rate × cost per incident
                + specialist-skills premium × affected headcount
Paydown case = PV(interest avoided over horizon) − remediation cost
               (discounted at the Green Book social discount rate, see
               social-discount-rate.md)
```

本金陳述負債；利息先係向公共賬目委員會提出投資理據嘅關鍵。

## 實例演算

一個以舊式 4GL 編寫、250,000 行嘅申索處理引擎。使用 CAST Appmarq 基準，每行代碼約 $3.61 技術債務本金(以一般兌換率計約 £2.85)：

```
Principal ≈ 250,000 × £2.85 ≈ £712,500
TDR ≈ 16% (grade C)
```

量度所得嘅利息：由於內部技能流失，部門聘用三名專才承包商，日薪比標準資深工程師高 40%——六人團隊每年額外 £180,000。該系統亦每年造成四次重大處理中斷，每次暫停約 5,000 名申索人嘅決定，並將佢哋轉介到聯絡中心，每個電話大約 £25：

```
Interest ≈ £180,000 (skills premium)
         + 4 × 5,000 × £25 = £500,000 (redirected-contact cost)
         ≈ £680,000/year
```

針對表現最差嘅模組進行補救，成本 £1,200,000，模型預計可令利息減少 70%：

```
Interest reduction = 0.70 × 680,000 = £476,000/year
Payback ≈ 1,200,000 / 476,000 ≈ 2.5 years
```

針對性好重要：補救好少被改動嘅代碼毫無作用，因為利息集中喺改動頻率同債務密度都處於高峰嘅地方。

## 與軟件工程嘅關係

將技術債務個案由「代碼舊」提升至公共價值層面嘅框架：將遺留系統列為一份清單，列明損失嘅交付能力集中喺邊度，並明確連結到[總擁有成本](../政府資訊科技嘅總擁有成本/)，因為利息係營運成本，不論財務部有冇要求過，都屬於 TCO 項目。債務沉重嘅系統亦承受不成比例嘅[網絡安全](../公營界別網絡安全嘅價值/)風險，因為修補頻率同債務密度相關——一個無法修補嘅遺留系統，就係以事故風險而非英鎊支付利息嘅技術債務。而每一次補救對新功能嘅取捨，本身就係[延誤成本](../公共計劃嘅延誤成本/)嘅決定：償還債務會延遲下一項法定變更，而佢有自己嘅延誤成本，必須同所節省嘅利息權衡。

## 常見陷阱

- **只報告本金**：一個龐大而嚇人嘅補救估算，冇利息數字，向開支審批人證明唔到任何嘢。
- **字面照用工具產生嘅債務數字**：SQALE 式掃描器計算規則違反次數；佢哋會漏掉最昂貴嘅債務種類——架構決策同未記錄嘅遺留業務規則——卻標示瑣碎事項。
- **「重寫可以避免所有問題」**：替換計劃必須通過同任何其他商業論證一樣嘅紀律——反事實成本、成功概率同貼現——而唔係豁免，2013 年 Universal Credit 重啟已經證明咗呢點。
- **零債務烏托邦主義**：最佳債務水平唔係零；債務係換取更早交付嘅槓桿。真正嘅問題永遠係利率，而唔係債務到底存唔存在。

## 資料來源

- Cunningham W, "The WyCash Portfolio Management System", OOPSLA experience report, 1992.
- CAST, technical debt estimation (Appmarq benchmark). <https://www.castsoftware.com/glossary/technical-debt-estimation>
- National Audit Office, *Digital Transformation in Government* and reports on Universal Credit. <https://www.nao.org.uk/>
