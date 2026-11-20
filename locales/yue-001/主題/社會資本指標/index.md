# 社會資本指標

社會資本指標係用嚟量化網絡、信任同公民參與嘅指標，呢啲嘢令社區同機構可以有效運作——係一種「連結組織」，喺任何資產負債表上都冇一行，但存在時明顯降低成本同摩擦，缺乏時又明顯增加成本同摩擦。現代嘅框架源自 Robert Putnam 嘅《Bowling Alone》(2000)，佢將結合型資本(bonding capital，相似群體內部嘅聯繫)同橋接型資本(bridging capital，不同群體之間嘅聯繫)區分開；英國 Office for National Statistics(國家統計局，ONS)其後建立咗一套常設指標，喺全國層面追蹤社會資本。

## 點解重要

Putnam 嘅核心實證論點——透過二十世紀後期美國公民團體會員人數、教會出席率同工會參與率嘅下降所記錄——係社會資本可以預測傳統經濟學難以解釋嘅成果：較低嘅罪案率、較好嘅兒童福祉、更有效嘅地方政府，以及衝擊後更快嘅經濟復甦。結合型資本(緊密群體內嘅強聯繫)有利互相支持，但可能僵化成封閉排外；橋接型資本(不同群體之間較弱嘅聯繫)通常同獲取機會、資訊流通同機構信任相關。ONS 認真對待呢個課題，建立咗全國指標框架——「Social Capital in the UK」系列(<https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing/bulletins/socialcapitalintheuk/latest>)追蹤四大支柱：個人關係、社交網絡支持、公民參與，以及信任同合作規範，每項都以既定嘅調查問題(Community Life Survey、Understanding Society)建構。對公共部門數碼服務嚟講，社會資本有雙重相關性：佢既係部分計劃(社區韌性資助、社會處方)試圖建立嘅成果，亦係決定服務實際採用程度嘅輸入——一項推廣到高信任、網絡緊密社區嘅服務，會透過口耳相傳擴散，但同一項服務喺低信任地區就唔會。

## 數學原理

```
ONS four-pillar framework (indicators, illustrative):

Personal relationships:      % with someone to rely on in a crisis
Social network support:      % who could borrow money from friends/family if needed
Civic engagement:            % who volunteered or took civic action in past 12 months
Trust and cooperative norms: % agreeing "most people can be trusted"

No single ONS composite score is published — the pillars are reported
separately, deliberately, because aggregating them into one index would
hide which specific pillar is weak.

Putnam's bonding/bridging split (framework, not a formula):
  bonding capital ≈ density of ties within a homogeneous group
  bridging capital ≈ frequency/strength of ties across distinct groups
```

## 實例演算

**社區社會資本概況**：一項 Community Life Survey 式嘅地區民意調查發現，78% 有人喺危急時可以依靠(個人關係)，61% 需要時可以借錢(網絡支持)，24% 喺過去一年做過義工(公民參與)，41% 同意「大部分人都可以信任」(信任同規範)——全國平均大約分別係 85%、70%、30% 同 45%(示意數字，應按現行 ONS 公報校準)。該地區喺每個支柱都低於平均，但信任方面(41% 對全國 45%，差 4 個百分點)同公民參與方面(24% 對 30%，差 6 個百分點)差距最明顯——顯示公民參與而非信任，先係值得針對性投資嘅最大相對缺口(例如社區資助計劃)，而唔係一個籠統嘅「建立信任」措施。

**結合型對橋接型，服務設計**：一個喺緊密社區推行嘅就業計劃發現，轉介喺社區內傳播好快(結合型資本高：幾日內就傳開)，但計劃好難接觸到呢個網絡以外嘅居民(橋接型資本低：數月後核心社區以外嘅參加率近乎零)。由此引申嘅解決方法唔係「多啲宣傳」，而係刻意建立橋接聯繫——同位於現有網絡*以外*嘅機構合作，因為單靠結合型資本，解決唔到橋接型資本嘅問題。

## 與軟件工程嘅關係

- 轉介互助、義工服務或者社區資助嘅數碼平台(例如「本地連結者」服務)，字面上就係喺建設橋接型資本嘅基礎設施；佢哋嘅成功指標應該係所建立聯繫嘅網絡多樣性，而唔只係交易數量——有關由其他人喺其上創造價值嘅基礎設施嘅更廣泛模式，見[政府作為平台](../政府即平台/)。
- 當計劃嘅變革理論明確以社會資本作為成果(社區韌性基金、社會處方服務)，其[變革理論](../變革理論/)同[邏輯模型](../邏輯模型/)應該指明預期推動嘅具體支柱(信任、公民參與、網絡支持)，而唔係一個籠統嘅「建設社區」成果，因為咁樣冇辦法對照 ONS 基線去量度。
- 社會資本指標係一個有用嘅公平視角，可以同[多重剝奪指數](../多重剝奪指數/)並用：一個地區可以收入貧乏但社會資本豐富，亦可以反過來，兩者指向截然不同嘅干預措施。

## 常見陷阱

- **將 ONS 四大支柱合併成單一綜合分數**——ONS 刻意唔咁做；單一數字會隱藏邊個具體支柱拉低咗讀數，而平均值亦會掩蓋「高信任但公民參與低」同「剛好相反」嘅社區之間嘅分別。
- **假設社會資本一定係好**——封閉群體內嘅高密度結合型資本，可以積極抗拒外來機構(包括政府服務)；Putnam 本人嘅分析，亦將結合型同橋接型視為不同嘅好處，效果各異，有時甚至互相衝突。
- **將基於調查嘅社會資本量度當作即時營運指標**——底層調查(Community Life Survey、Understanding Society)每年或者更低頻率進行；應該將社會資本數據視為變化緩慢嘅背景指標，而唔係服務儀表板可以每星期更新嘅嘢。

## 資料來源

- Putnam RD. "Bowling Alone: The Collapse and Revival of American Community." Simon & Schuster,
  2000.
- ONS. "Social capital in the UK: bulletins."
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing/bulletins/socialcapitalintheuk/latest>
- Department for Digital, Culture, Media & Sport. "Community Life Survey" (annual).
