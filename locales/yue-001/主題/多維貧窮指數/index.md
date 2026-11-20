# 多維貧窮指數

多維貧窮指數(Multidimensional Poverty Index，MPI)將貧窮量度為一個人同時經歷嘅多重剝奪——涵蓋健康、教育同生活水平——而唔係單單睇收入有冇低過貧窮線。佢由牛津貧窮與人類發展倡議(Oxford Poverty and Human Development Initiative，OPHI)連同 Sabina Alkire 同 James Foster 研發，自 2010 年起，每份《人類發展報告》都同 UNDP(聯合國開發計劃署)聯合發表，並與[人類發展指數](../人類發展指數/)並列。

## 點解重要

收入貧窮線會漏咗一啲現金收入足夠、但冇潔淨食水、冇機會上學，或者經歷過孩子夭折嘅人——亦會漏咗剝奪往往集中出現嘅事實：冇電力供應嘅家庭，同時冇衛生設施、又有營養不良兒童嘅機會，明顯偏高。MPI 所依據嘅 Alkire-Foster 方法，會喺十項指標上點算每個人嘅剝奪情況，並將指標分成三個權重相等嘅維度——健康、教育、生活水平——只有當加權剝奪分數越過固定門檻，先會將某人歸類為「MPI 貧窮」，從而捕捉到一組各自獨立嘅單一指標統計無法反映嘅重疊情況。OPHI 喺 <https://ophi.org.uk/multidimensional-poverty-index/> 公佈完整方法論同各國數據；佢同 UNDP 聯合維護嘅全球 MPI，現時涵蓋超過 110 個國家。對於為扶貧計劃——現金轉移、社會護理分流、援助對象篩選——而開發嘅軟件嚟講，MPI 嘅指標集往往係最接近一套標準化剝奪綱要嘅選擇，並已經獲幾十個國家統計機構驗證過。

## 數學原理

```
10 indicators, 3 dimensions, each dimension weighted 1/3:

Health (1/3):            nutrition (1/6), child mortality (1/6)
Education (1/3):         years of schooling (1/6), school attendance (1/6)
Living standards (1/3):  cooking fuel, sanitation, drinking water,
                          electricity, housing, assets (1/18 each)

deprivation score (c) = sum of weights of indicators a person is deprived in

person is "MPI poor" if c ≥ 1/3 (the poverty cut-off, k = 33%)

H (headcount ratio) = number of MPI poor / total population
A (intensity)        = average deprivation score among the MPI poor only

MPI = H × A
```

由於 MPI 係將貧窮者嘅*比例*乘以佢哋有*幾貧窮*，兩個人頭比率相同嘅地區，如果其中一個嘅剝奪更嚴重，MPI 分數就可以相差好遠——呢個同 HDI(人類發展指數)用幾何平均數背後「各維度之間唔可互相替代」嘅邏輯一脈相承。

## 實例演算

**1,000 人嘅全國調查**：350 人被識別為多維貧窮(剝奪分數 ≥ 33%)。單睇呢 350 名貧窮人士，平均剝奪分數係 45%。

```
H = 350 / 1000                = 0.350
A = 0.45
MPI = H × A = 0.350 × 0.45    = 0.1575
```

**比較兩個人頭比率相同嘅地區**：A 區 H = 0.30、A = 0.40(貧窮人數多，但剝奪程度中等)；B 區 H = 0.30、A = 0.60(貧窮人數相同，但剝奪更嚴重——同時缺乏電力、衛生設施*同*上學機會)。

```
MPI_A = 0.30 × 0.40 = 0.120
MPI_B = 0.30 × 0.60 = 0.180
```

人頭比率相同，B 區嘅 MPI 卻高出 50%——一個單靠人頭貧窮率嘅對象篩選系統，會將兩區排成一樣，從而忽略 B 區需要更深入嘅介入。

## 與軟件工程嘅關係

- 社會計劃嘅個案管理同資格審核系統，往往已經將十項指標之中嘅幾項(住屋、上學出席率、健康指標)分別儲存喺唔同嘅孤島入面；Alkire-Foster 點算法可以直接當作現成綱要，將佢哋合併成一個剝奪分數，毋須由零開始自建評分模型。
- 人頭／強度分拆(H × A)係一個普遍適用嘅模式，適合任何同時匯報「幾多人受影響」同「受影響幾嚴重」嘅儀表板——好似原始患病率統計咁將兩者壓成一個數字，會正正隱藏咗最需要資源嘅個案。
- MPI 式指標儀表板，同扶貧計劃嘅[每名受益人成本](../每名受益人成本/)匯報好自然咁配合：每降低一點 MPI 嘅成本，係比較截然不同干預措施(現金轉移對衛生基建)時站得住腳嘅單位。

## 常見陷阱

- **當十項指標放諸四海皆準**——OPHI 嘅全球 MPI 指標係為跨國可比性而校準；各國自家嘅 MPI(包括南亞同非洲好幾個國家在內，不少國家都有自己嘅版本)會按本地情況調整指標同權重，兩者並唔可以直接比較。
- **只匯報 H**——人頭比率完全忽略強度；一定要同時匯報或者計算 A，或者直接用 MPI。
- **以為 MPI 貧窮同收入貧窮係同一批人**——OPHI 自己嘅國家簡報通常顯示兩者只係部分重疊；一個只針對收入貧窮人士嘅計劃，會系統性咁漏掉相當比例嘅多維貧窮人口。

## 資料來源

- Oxford Poverty and Human Development Initiative. "Multidimensional Poverty Index."
  <https://ophi.org.uk/multidimensional-poverty-index/>
- Alkire S, Foster J. "Counting and Multidimensional Poverty Measurement." Journal of Public
  Economics, 2011.
- UNDP & OPHI. "Global Multidimensional Poverty Index" (annual report).
