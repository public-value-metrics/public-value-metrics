# 公共部門嘅 AI 生產力

AI 編程輔助對工程產出實際有咩影響——建議接受率、對照研究嘅提速、PR 吞吐量，以及代碼保留率——呢啲指標背後嘅證據，即使未計公共部門嘅限制，本身已經互相矛盾：數據分類會限制 AI 工具可以接觸舊系統嘅邊啲部分；採購週期令受評估嘅工具往往落後現時能力一代模型；而保安審查要求更管制邊個可以用嚟做邊啲工作。

## 點解重要

兩項最多人引用嘅對照研究，結論剛好相反。Peng 等人 2023 年嘅 GitHub Copilot 隨機對照試驗發現，開發人員用 Copilot 完成一項全新(greenfield)HTTP 伺服器任務快咗 55.8%(1 小時 11 分對 2 小時 41 分，n=95)。METR 2025 年嘅隨機對照試驗則發現，經驗豐富嘅開源開發人員喺*自己成熟嘅代碼庫*上用 2025 年初嘅 AI 工具，反而慢咗 19%，但佢哋自己以為快咗大約 20%。兩項研究都站得住腳；矛盾本身就係發現——全新任務上嘅效能，唔會轉移到成熟代碼庫上嘅成效，而政府工程好多都係成熟代碼庫嘅工作，系統比一般商業代碼庫更舊、更特殊。Central Digital and Data Office 嘅《Generative AI Framework for HMG》(2024，<https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>)訂立負責任採用嘅原則，正正因為呢啲證據唔可以直接由供應商示範搬過嚟用；各部門須要喺推出前，對照自己嘅數據處理同保安要求去評估工具。

## 數學原理

```
Acceptance rate  = accepted suggestions / shown suggestions
Retention rate   = AI code surviving to merge / accepted AI code
Speedup          = (t_control − t_AI) / t_control  (from controlled comparison ONLY)
Throughput delta = Δ merged PRs/dev/week

Public-sector coverage factor:
  eligible codebase share = LOC on systems where the classification
    (OFFICIAL, OFFICIAL-SENSITIVE, SECRET) permits the tool at all

Value model = devs × eligible-coverage × time saved × loaded rate × utilization
             — every term needs local measurement, and the coverage factor
             has no private-sector equivalent
```

## 實例演算

一個政府部門喺 300 名開發人員中試行 AI 編程助手，但只有分類為 OFFICIAL 嘅系統先可以用呢個工具——按人手分配計佔整體 70%，其餘 30%(較高分類嘅系統)完全排除。

```
Eligible developers = 300 × 0.70 = 210

Pilot result: self-reported time saved 40 min/day;
              measured task-level saving 12 min/day (0.2h)
              — the METR perception gap, reproduced in the wild

Value the MEASURED number:
  210 × 0.2h × 220 days × £55/hr loaded × 0.6 utilization
  = 210 × 44 hours × £55 × 0.6
  = 9,240 hours × £55 × 0.6 ≈ £304,920/year capacity

Cost: 210 licensed seats × £22/month × 12 ≈ £55,440/year

Net capacity ratio ≈ 304,920 / 55,440 ≈ 5.5:1
```

資助金額大約係自我匯報效益嘅三分之一，而且要先套用分類上限——如果憑自我匯報嘅數字，為全部 300 名開發人員購買授權，合資格人數同真實節省都會被高估。

## 與軟件工程嘅關係

可以直接沿用嘅做法：喺部門自己嘅代碼庫同真實工作單上進行**務實試驗**，而唔係供應商嘅示範任務，因為 METR 嘅結果特別係成熟代碼庫嘅發現；將**接受率視為代理指標，而非成果**——接受率高但保留率低，就係軟件版本嘅過度診斷；每個吞吐量聲稱都要配上**穩定性檢查**，因為 DORA 2025 年報告發現 AI 採用會提升吞吐量，但削弱變更穩定性，而呢個正正係[公共價值嘅 DORA 指標](../公共價值嘅-dora-指標/)設計用嚟進行嘅淨效益分析；同時要老實承認，喺[技術負債](../技術債務-侵蝕公共價值/)沉重嘅舊系統上，AI 工具可能擴闊而唔係收窄差距，因為訓練數據中 COBOL、4GL 同政府常見嘅訂製大型主機代碼佔比偏低，所以最需要幫助嘅系統，建議質素往往最差。呢個同更廣義嘅[政府運用 AI 嘅價值](../政府運用人工智能嘅價值/)問題並行，亦應該受同樣嘅[公共部門網絡安全價值](../公營界別網絡安全嘅價值/)限制所管轄，即係任何第三方工具可以喺邊度睇到代碼或數據。

## 常見陷阱

- **照搬供應商研究**：將全新任務隨機對照試驗嘅提速，套用喺舊系統整合工作上，正正係 METR 研究揭露嘅錯誤。
- **以自我匯報當量度**：感知同實測相差 20 個百分點，係呢批文獻中已知最大嘅偏差，令只靠開發人員問卷嘅業務個案被誇大。
- **忽略分類上限**：授權同價值模型按全部人手而非已通過分類審查嘅合資格子集計算，會系統性地高估成本效益同可達成嘅覆蓋範圍。
- **採購週期滯後**：按框架採購工具，可能令試點評估嘅係一個落後 12–18 個月嘅模型世代(相對全面推出時公開可用嘅版本)，令原業務個案嘅提速假設未上線已經過時。

## 資料來源

- Peng S, et al., "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot", 2023. <https://arxiv.org/abs/2302.06590>
- METR, "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity", 2025. <https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/>
- DORA, 2025 State of AI-assisted Software Development report. <https://dora.dev/dora-report-2025/>
- Central Digital and Data Office, Generative AI Framework for HMG, 2024. <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>
