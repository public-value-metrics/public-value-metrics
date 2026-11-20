# 公共服務生產力

公共服務生產力量度公共開支將投入(員工、資本、貨品同服務)轉化為經質素調整嘅產出嘅效率，適用於醫療、教育、警務、社會護理等冇市場價格、因而冇收入數字可以用嚟除成本嘅服務。英國 Office for National Statistics(ONS，國家統計局)自 2000 年代中期起發表呢個系列，仍然係回答「政府將金錢轉化為公共服務嘅能力係變好定變差？」最成熟嘅全國性嘗試。

## 點解重要

喺市場上，生產力係(產出價值)／(投入成本)，而產出價值睇得見，因為有人付錢。換髖關節手術、一個學位、一次警察巡邏都冇售價，所以天真嘅做法只可以量度*投入*(花咗幾多)——令評論者傾向將公共開支上升視為自動係壞事，因為投入增加而整體活動持平，睇落就似生產力下降。ONS 喺其公共服務生產力「Sources and Methods」刊物中列出嘅方法，解決咗呢個問題：由活動量(進行嘅手術、教導嘅學生、調查嘅罪案)建構*產出*指數，再對該產出指數作*質素調整*——醫療方面納入存活率同輪候時間；教育方面納入學業成績；警務方面納入個案偵破等成果——令一項做相同手術數量、但存活率更高嘅服務，登記為生產力更高，而唔只係更昂貴。多份 ONS 報告反覆出現嘅頭條發現，對業界嚟講令人警醒：英國公共服務生產力喺 COVID-19 疫情期間急劇下降，到 ONS 自己 2020 年代中期嘅報告，包括醫療在內嘅若干分行業仍未恢復至 2019 年水平，即使開支上升——呢個差距令「更多資金」同「更高生產力」成為兩個完全獨立嘅問題。

## 數學原理

```
Output index (volume) = Σ (activity_i × relative unit cost weight_i), base-year weighted
                          across all service activities (e.g. hip ops, cataract ops,
                          GP consultations), analogous to a Laspeyres/Paasche volume index

Quality adjustment    = output index × quality adjustment factor
                          (e.g. incorporating a change in survival rates, waiting times,
                          attainment, or reoffending as a multiplier on raw volume)

Input index           = Σ (labour hours × labour cost weight) + (goods/services cost,
                          deflated) + (capital consumption)

Total factor productivity growth = % change in quality-adjusted output index
                                    − % change in input index
```

## 實例演算

**NHS 急症界別生產力計算(說明用)**(結構依照 ONS 方法)：

```
Year 1: output volume index = 100.0 (base year), input index = 100.0
        → productivity index = 100.0

Year 2: activity volume rises 3.0% (more operations, more appointments)
        but average waiting time worsens, applying a quality-adjustment
        discount of −1.0%
        Quality-adjusted output index = 100 × 1.030 × 0.990 = 101.97

        Inputs rise: staff numbers +4.0%, other costs (deflated) +1.5%,
        weighted input index = 100 × 1.032 = 103.2

Productivity growth = (101.97 / 100 − 1) − (103.2 / 100 − 1)
                     = 1.97% − 3.2% = −1.23 percentage points

Interpretation: activity rose, but inputs rose faster and quality fell
slightly, so productivity — output per unit of input — declined even
though "more care was delivered."
```

呢個正正係 ONS 報告多次就疫情後 NHS 部分範疇所匯報嘅模式：喺同時計及質素調整同投入增長之後，開支上升同原始活動上升，同量度所得嘅生產力下降並存。

## 與軟件工程嘅關係

公共服務生產力係工程生產力爭論(交付嘅故事點數對比 [DORA 指標](../公共價值嘅-dora-指標/)對比[流動指標](../政府交付中嘅流動指標/))喺人口層面嘅對應：冇質素調整嘅原始吞吐量，喺醫院入面具誤導性，就如同「交付嘅程式碼行數」喺軟件團隊一樣。為部門開發績效數據管道嘅團隊，應該將質素調整視為一級、有版本管理嘅轉換階段，而唔係註腳——因為 ONS 自身嘅公信力，建基於該調整透明、可重現，並隨更佳質素數據出現而修訂(ONS 會隨住底層質素數據——例如存活率——定稿而修訂過往年度嘅生產力估算，所以任何消費呢啲統計嘅下游系統，都必須處理追溯修訂，而唔只係附加新時期)。佢亦直接同[總擁有成本](../政府資訊科技嘅總擁有成本/)同[公營界別 AI 生產力](../公共部門嘅-ai-生產力/)相交：一個增加原始活動量、卻冇改善或者維持質素嘅系統，按 ONS 自己嘅定義，並非生產力提升。

## 常見陷阱

- **將投入增長當作生產力增長**：更多開支資助更多員工，只會帶來更多*活動*，而唔係更高*生產力*，除非每單位投入嘅產出亦上升——兩者喺政治評論中經常被混為一談。
- **完全忽略質素調整**：只由原始活動點算建構嘅產出指數，會因為做更多價值較低或者質素較低嘅事而顯示「生產力提升」；ONS 嘅質素調整正正係為咗捕捉呢種情況。
- **喺唔同分行業間比較生產力指數，卻冇配合方法論版本**：醫療、教育同警務生產力，各自由唔同嘅活動同質素數據來源、按唔同修訂週期建構——天真嘅跨界別比較，係喺比較互不相容嘅工具。
- **將單一年度嘅生產力下跌當作永久趨勢**：疫情期間同疫情後嘅生產力數字，隨住質素數據(例如輪候名單、擇期手術復原)本身變動，已顯示出顯著嘅按年波動；ONS 一貫提醒唔好過度解讀單一年度嘅變動。

## 資料來源

- Office for National Statistics, "Public Service Productivity" series.
  <https://www.ons.gov.uk/economy/economicoutputandproductivity/publicservicesproductivity>
- Office for National Statistics, "Public Service Productivity: Total, UK — Sources and Methods."
  <https://www.ons.gov.uk/economy/economicoutputandproductivity/publicservicesproductivity>
