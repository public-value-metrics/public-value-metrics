# 公共價值嘅 DORA 指標

DORA（DevOps Research and Assessment，DevOps 研究與評估）指標——部署頻率、變更前置時間、變更失敗率同服務恢復時間，再加上可靠性作為第五項——係軟件業界驗證得最充分嘅交付表現基準。轉譯到公共部門問責嘅語境，每一項都直接反映公共價值去到市民手上有幾快、有幾穩妥。

## 點解重要

DORA 十年嘅研究每年以《Accelerate State of DevOps Report》發表（沿用 Forsgren、Humble 同 Kim 嘅方法，而家由 Google Cloud 主持），將團隊分為頂尖、高、中、低表現四組。頂尖團隊按需要部署，由提交到上線少過一日，大約 5% 嘅變更失敗，一個鐘內恢復；低表現團隊每月或更疏先部署一次，需時數月，大約 40% 嘅變更失敗，要幾個星期先恢復。喺政府入面，呢啲並唔係工程師自我感覺良好嘅虛榮指標：政府數碼服務（GDS）嘅服務標準要求團隊「經常迭代同改善」，並能夠快速回應用戶需要，而無法安全又頻繁部署嘅部門，無論用戶研究點講，結構上都達唔到呢個標準。Cabinet Office（內閣辦公室）自己嘅數碼效率工作發現，將市民由失敗或緩慢嘅數碼交易推去電話或紙本渠道成本高昂——GDS 2012 年《數碼效率報告》（Digital Efficiency Report）估計，部分數碼交易成本低至 20 便士，而電話或面對面接觸最高可達 £8.62——所以面向公眾嘅服務出現變更失敗，成本唔單止係工程時間，更會將真金白銀轉嫁到客戶服務中心預算（見 [渠道轉移節省](../渠道轉移節省/)）。

## 數學原理

```
Deployment frequency  = production deployments / time
Lead time for changes = t(deploy) − t(commit), median
Change failure rate   = failed changes / total changes × 100
Time to restore (MTTR) = t(restored) − t(failure), median
Reliability            = SLO attainment (availability, latency, correctness)
```

轉譯為公共價值：

```
Lead time      → weeks in the pipeline × CoD, see cost-of-delay-in-public-programmes
Failure rate   → citizen-facing incident rate: CFR × cost per redirected
                 contact-centre call (or per failed statutory transaction)
Recovery time  → service outage harm: MTTR × (claims/applications blocked
                 per hour) × downstream cost or wellbeing loss per unit
Reliability    → benefit discount: a service at 99% availability delivers
                 ≈ 0.99 of its modelled benefit — the delivery analogue
                 of take-up or compliance shortfall
```

## 實例演算

某地方政府福利申索入口網站團隊，喺投資交付工程前後嘅對比：

```
                    Before      After
Deploys             monthly     weekly
Lead time           8 weeks     5 days
CFR                 30%         10%
MTTR                3 days      4 hours
```

團隊每年推出約 25 項改進，平均價值每星期 £8,000（[延誤成本](../公共計劃嘅延誤成本/)）。將前置時間縮短約 7.3 個星期，等於將每項改進嘅收益流提前：25 × 7.3 × 8,000 ≈ **每年 £1,460,000** 提早實現嘅價值。失敗率方面：25 × (0.30 − 0.10) = 每年少 5 次失敗變更；公眾入口網站每次變更失敗，通常估計會令 2,000 位市民轉去電話渠道，成本 £8.62 對比 20 便士，淨成本約 £8.42 × 2,000 ≈ 每次事故 £16,840，所以避免 5 次事故可節省約 **每年 £84,200**。交付工程投資就可以同任何其他公共價值案例一樣，用同一種貨幣衡量。

## 實例演算（續）：可靠性

如果入口網站嘅可用性係 97% 而非目標 99.5%，而每一個百分點嘅停機時間被建模為 2% 嘅申索因放棄而流失，咁服務只係交付到其建模每年 £2M收益嘅約 0.975 倍——每年有 £50,000 嘅收益折減，純粹睇正常運行時間嘅儀表板永遠睇唔到呢個數。

## 與軟件工程嘅關係

DORA 指標其實係換咗件衫嘅公共服務營運指標：前置時間對應 [服務標準與交易指標](../服務標準與交易指標/)；變更失敗率對應返工率同投訴率；MTTR 對應法定服務有幾耐無法提供畀申索人使用。改進技術可以雙向轉移，因為兩者都係受問責約束嘅排隊系統——底層嘅排隊數學見 [政府交付中嘅流動指標](../政府交付中嘅流動指標/)。另外要留意 DORA 2025 年嘅發現：採用 AI 同較高吞吐量相關，但穩定性*更差*——呢種介入既有成效又有副作用，正正係呢組課題入面 [AI 喺公共部門嘅生產力](../公共部門嘅-ai-生產力/) 一篇所處理嘅淨收益分析。

## 常見陷阱

- **指標操縱**：用冇實際內容嘅發布去灌高部署次數，或者將緊急修補從變更失敗計數入面剔走。要像法定服務標準界定「成功交易」咁精確咁界定每個事件。
- **跨部門排行榜**：DORA 分組比較嘅係交付實踐，而唔係風險狀況唔同嘅服務；鑑於保證要求，稅款繳付系統被評為「高」可能已經係適當嘅取態，而評為「頂尖」反而可能魯莽。
- **只優化單一指標**：只顧速度而唔睇變更失敗率，係典型嘅吞吐量與不穩定性取捨——四項指標要一齊匯報，而唔係合成單一分數。

## 資料來源

- DORA research and the annual *Accelerate State of DevOps Report*. <https://dora.dev/>
- Forsgren N, Humble J, Kim G, *Accelerate: The Science of Lean Software and DevOps*, IT Revolution Press, 2018.
- Cabinet Office, Digital Efficiency Report, 2012.
- DORA, 2025 State of AI-assisted Software Development report. <https://dora.dev/dora-report-2025/>
