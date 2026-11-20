# 政府交付中嘅流動指標

流動指標（flow metrics）——利特爾法則（Little's Law）、在製品（work-in-progress，WIP）上限同流動效率——描述工作喺容量有限嘅系統入面流動得幾快。衝刺看板（sprint board）係其中一個此類系統；福利申索輪候隊伍、規劃申請登記冊或簽證個案積壓，都係完全一樣嘅數學，只不過換咗件制服。

## 點解重要

政府嘅個案量係排隊系統，而排隊系統無論有冇人量度，都遵守排隊定律。法定裁決期限令呢點更加明顯：喺《城鄉規劃》（Town and Country Planning）制度下，大部分小型規劃申請設有 8 個星期嘅法定裁決目標，大型申請則為 13 個星期——週期時間承諾直接寫入法律。Home Office（內政部）嘅庇護個案積壓，經國家審計署（National Audit Office）同內政事務專責委員會（Home Affairs Select Committee）多次審查，係公共系統入面在製品長期增長快過吞吐量、令週期時間遠超任何法定或服務預期嘅有據可查個案。流動指標為工程師同個案管理人員提供共同嘅量化語言去描述呢種失效模式，而唔係留喺定性嘅「積壓問題」。

## 數學原理

```
Little's Law:  WIP = Throughput × Cycle Time
           →   Cycle Time = WIP / Throughput

Flow efficiency = active (touch) time / total cycle time   (Vacanti)

WIP limit effect: for fixed throughput, halving WIP roughly halves
average cycle time (Little's Law rearranged) — the lever available
without adding headcount.
```

同一套數學應用於軟件部署管線而非個案處理，見 [公共價值嘅 DORA 指標](../公共價值嘅-dora-指標/)。

## 實例演算

**地方政府規劃部門**：任何時候有 400 宗申請處於開放狀態（WIP），團隊每星期處理 50 宗申請（吞吐量）。

```
Cycle time = WIP / Throughput = 400 / 50 = 8 weeks
```

剛好落在小型申請 8 個星期嘅法定目標——完全冇緩衝，意味住只要來件需求或諮詢對象回覆時間有任何波動，就會令裁決超出法定期限。

**流動效率**：喺呢 8 個星期（56 個曆日）入面，一宗申請通常只有約 6 個鐘頭嘅實際個案工作員處理時間。

```
Flow efficiency = 6 hours / (56 days × 8 working hours/day)
                = 6 / 448 ≈ 1.3%
```

Vacanti 為軟件團隊訂立嘅基準，典型流動效率係 15–20%；政府個案處理由於有多個法定諮詢對象交接同公眾諮詢期，往往低一個數量級。98.7% 嘅「等候」時間先係呢八個星期真正嘅去向——而唔係個案工作員嘅能力。

**WIP 上限介入**：將每名個案工作員嘅開放申請上限定為 15 宗，而非無上限嘅 25 宗（吞吐量不變），16 人團隊嘅 WIP 由 400 降至約 240：

```
New cycle time = 240 / 50 = 4.8 weeks
```

靠政策改變而非增加人手，就令週期時間近乎減半——同 DORA 式交付團隊限制衝刺 WIP 時用嘅係同一個槓桿。

## 與軟件工程嘅關係

流動指標係交付團隊嘅看板（Kanban board）同佢哋為其開發軟件嘅個案處理前線之間嘅共同語言：個案工作員嘅隊列同 pull request 隊列都受利特爾法則支配，而且都係用同一種方式爆破週期時間目標——相對於吞吐量嘅 WIP 太多。呢點直接關乎 [公共計劃嘅延誤成本](../公共計劃嘅延誤成本/)：週期時間 × 延誤成本就係任何時刻積壓喺隊列入面嘅英鎊；亦關乎 [服務標準與交易指標](../服務標準與交易指標/)，因為公布嘅處理時限係一項週期時間承諾，一旦未達標，只有流動指標先診斷得出原因。個案處理系統嘅軟件應該將 WIP 同週期時間公開為一等營運指標，而唔係埋藏喺冇人查詢嘅個案管理系統入面。

## 常見陷阱

- **未解決真正瓶頸就加 WIP 上限**：如果制約係外部法定諮詢對象嘅回覆時間，限制個案工作員 WIP 只會將隊列推向上游，而唔會縮短佢。
- **將流動效率當成可以操縱嘅目標**：趕工嗰 1.3% 嘅活躍時間幾乎唔會改變週期時間；槓桿幾乎總係喺等候狀態入面，通常意味住要重新設計流程，而唔係個案工作員加速。
- **忽略變異性**：利特爾法則描述嘅係平均數；需求變異大嘅個案量需要緩衝容量，而不單止係收緊 WIP 上限，否則即使平均值改善，波動嘅尾部仍然會錯過法定期限。
- **前後不一致咁量度 WIP**：一宗喺記錄系統入面「開放」、實際上卻停頓等待第三方嘅個案仍然係 WIP；剔除佢只會令數字好睇啲，卻冇改變市民面對嘅現實。

## 資料來源

- Vacanti D, *Actionable Agile Metrics for Predictability: An Introduction*, Actionable Agile Press, 2015.
- Reinertsen DG, *The Principles of Product Development Flow*, Celeritas Publishing, 2009.
- Ministry of Housing, Communities and Local Government, planning application statutory timescales. <https://www.gov.uk/guidance/making-an-application>
- National Audit Office, reports on Home Office asylum casework and accommodation. <https://www.nao.org.uk/>
