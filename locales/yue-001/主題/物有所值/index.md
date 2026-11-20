# 物有所值(VFM)

物有所值係英國公共部門嘅正式測試，用嚟判斷開支有冇喺成本同效益之間取得最佳可得嘅平衡。HM Treasury(英國財政部)嘅 Green Book 用三個「E」去框架——經濟(economy)、效率(efficiency)同效能(effectiveness)——而公平(equity)則愈來愈多人主張係有爭議嘅第四個 E。每一份經得起審視嘅公共部門商業論證，都必須明確回答全部三項，而唔只係聲稱開支「值得」。

## 點解重要

物有所值唔係「平」嘅同義詞。Green Book(HM Treasury，2022 年版)明確指出，揀最低成本嘅方案(經濟)，而冇確認佢產生預期成果(效能)，係常見而昂貴嘅錯誤——一項採購節省 10% 單位成本，卻少交付 40% 影響，係更差而唔係更好嘅物有所值。三個 E 框架迫使商業論證分開三種真正唔同嘅失敗模式：為投入支付過高、投入轉化成產出時浪費，以及產出冇轉化成任何人想要嘅成果。英國政府嘅開支管控——財政部審批節點、National Audit Office(國家審計署，NAO)嘅物有所值研究，以及各部門會計主任嘅評估——都圍繞呢個三部分測試建構，所以一份只處理成本(經濟)嘅工程商業論證，就算技術健全，都會通不過審視。

「第四個 E」公平之所以有爭議，正正因為佢可能同其他三項衝突：喺全國範圍提供服務最有效率嘅方式，好少係最公平嘅，因為將交付集中喺最便宜接觸市民嘅地方，往往意味住最難接觸嘅群體得到較少服務。Green Book 2020 年修訂版回應咗批評(包括 2020 年 Treasury Select Committee 同 IPPR North)，即純粹嘅成本效益比率有系統地偏袒本身已經繁榮嘅地區，要求評估必須明確處理分配影響——見[分配權重](../分配權重/)。

## 數學原理

物有所值唔係單一比率，而係按次序應用嘅三部分(或者四部分)診斷：

```
Economy:       Are inputs purchased at the lowest reasonable cost for the
               required quality?  (£ per unit of input)

Efficiency:    How well are inputs converted into outputs?
               (outputs / inputs, e.g. cases processed per caseworker-hour)

Effectiveness: Do the outputs actually produce the intended outcomes?
               (outcomes achieved / outcomes intended)

[Equity]:      Are costs and benefits distributed fairly across the
               population, or concentrated on those least in need?
```

物有所值嘅失敗可以喺任何階段獨立出現：經濟嘅採購配上低效率嘅交付；高效率地交付錯誤嘅產出；以過高成本購入有效嘅成果。呢啲點樣轉化成可量度指標，見[公共部門 KPI](../公營界別關鍵績效指標/)；正式嘅比較方法，見[政府成本效能分析](../政府嘅成本效益分析/)。

## 實例演算

**地方政府聯絡中心**：一個市議會比較兩個新個案管理系統方案。

- *方案 A*：£600,000 牌照(最平)，但因為工作流程需要喺系統之間人手重新輸入，客服平均每個個案仍然用 22 分鐘——效率欠佳。
- *方案 B*：£900,000 牌照，整合工作流程，客服平均每個個案用 9 分鐘。

單睇經濟，A 較優(平 £300,000)。但按每年 40,000 個個案，A 需要 40,000 × 22/60 = 14,667 工時；B 需要 40,000 × 9/60 = 6,000 工時。以全包員工成本每小時 £28 計算，A 每年員工時間成本 £410,667，B 則係每年 £168,000——每年 £242,667 嘅效率差距，喺 14 個月內就抵銷咗 £300,000 嘅前期經濟差異。計入效率後，物有所值偏向 B 而唔係 A。

**慈善機構交付資助**：一個資助者比較一項 £50,000 嘅資助達成 200 個成功就業安排(每個安排 £250——表面上經濟極佳)，同一項 £120,000 嘅資助達成 350 個維持超過 12 個月嘅安排，而第一項資助嘅安排有一半喺 3 個月內中斷。效能——持久嘅成果——逆轉咗表面上嘅物有所值排名：第一項資助每個*持久*安排嘅真正成本係 £250 ÷ 0.5 = £500，而第二項係 £120,000/350 ≈ £343。

## 與軟件工程嘅關係

物有所值為工程團隊提供一種紀律，以財務同審計部門實際會閱讀嘅方式，框架科技商業論證：

- 喺商業論證中，將經濟、效率同效能列為獨立項目，而唔係一個混合嘅「價值」數字——受過 Green Book 訓練嘅審閱人員，會要求正正呢種細分。
- 小心為咗優化採購成本(經濟)，而犧牲整合同工作流程效率，呢個係政府資訊科技中好常見嘅假節省(見[政府資訊科技嘅總擁有成本](../政府資訊科技嘅總擁有成本/)同[政府自行開發定外購](../政府自行開發定外購/))。
- 效能需要成果數據，而唔只係產出數量——將交付指標連結到[成果與產出](../成果與產出/)，並透過[反事實分析](../反事實分析/)進行真正評估，而唔係假設產出必然帶來成果。
- 當系統喺各地區或人口群組之間服務不均，公平問題係合理嘅物有所值反對意見，而唔係獨立嘅「錦上添花」——見[數碼包容](../數碼包容/)。

## 常見陷阱

- **將物有所值等同最低價格。** 經濟只係測試嘅三分之一(或者四分之一)；Green Book 明確警告唔好採用忽視效率同效能嘅「最低成本」採購規則。
- **量度產出卻稱之為成果。** 個案處理量(效率)唔等於個案妥善解決(效能)；見[成果與產出](../成果與產出/)。
- **視公平為可選。** 自 Green Book 2020 年更新後，分配影響應該同傳統三個 E 一齊評估，而唔係事後加上；喺商業論證獲批之後補做，比一開始就包括喺內困難得多。
- **比較唔同規模嘅方案而唔標準化。** 跨越服務唔同人口嘅方案作單位物有所值比較，必須控制規模，否則效率比較毫無意義。

## 資料來源

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation" (2022
  edition). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- National Audit Office, "Framework to review programmes and projects" and VFM study methodology.
  <https://www.nao.org.uk/>
- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020).
  <https://www.gov.uk/government/publications/the-magenta-book>
- IPPR North, "Transport Infrastructure Investment: Determining Value for Money" (evidence to the
  Treasury Select Committee's 2020 review of the Green Book's regional bias).
