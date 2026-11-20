# 政府自行開發定外購

自行開發定外購(build-vs-buy)係一個結構化、經風險調整嘅比較，將度身訂造開發同商業或標準化採購，按貼現後嘅[總擁有成本](../政府資訊科技嘅總擁有成本/)、見效時間同風險作比較。政府結構上係一個以購買為主嘅界別——Technology Code of Practice(科技實務守則)預設傾向標準化同雲端方案——但各部門內部嘅工程團隊，仍然同其他地方嘅開發者一樣，出於同樣原因，預設選擇自行開發。

## 點解重要

Government Digital Service(政府數碼服務)嘅 Technology Code of Practice(<https://www.gov.uk/guidance/the-technology-code-of-practice>)，同配套嘅 Service Manual 內關於決定自行開發定外購嘅指引，要求各部門就訂製開發提出理據，預設標準化能力應該購買而非自行開發，只有真正新穎、能夠令使命脫穎而出嘅能力，先值得寫訂製代碼。HM Treasury 就 Green Book 嘅樂觀偏差(optimism bias)補充指引，源自 2002 年 Mott MacDonald 對大型公共採購嘅檢討，為 IT 項目訂出所有評估類別中最闊嘅上調幅度——資本成本估算在用於評估之前，建議低端上調 10%，高端上調多達 200%，反映過往公共採購中軟件開發被低估得幾嚴重。自行開發定外購分析正正係要喺批准之前，就將呢項風險調整攤上枱面，而唔係等佢以年內超支申請嘅形式浮現。

## 數學原理

```
Compare over the same 3–5 year horizon, discounted at the Green Book
social discount rate (see social-discount-rate.md):

NPV_option = PV(benefits, shifted by time-to-value) − PV(TCO)

Risk adjustments (Green Book optimism bias pattern):
  build cost × 1.1–3.0        (IT project uplift range, Mott MacDonald)
  build time-to-value + 40–60% (deployment delay prior)
  buy: add integration reality-check and contract exit costs instead

Decision drivers, in the order they usually decide:
  1. differentiation — is this capability the mission, or plumbing?
  2. time-to-value × cost of delay (see cost-of-delay-in-public-programmes.md)
  3. risk-adjusted total cost of ownership
```

## 實例演算

一個地方政府需要為成人社會護理設立個案管理系統。外購：SaaS 每年 £180,000，4 個月後上線。自行開發：估算 £900,000，加每年 £150,000 維護費，14 個月後上線。

```
Risk-adjusted build cost = 900,000 × 1.4 = £1,260,000
5-year TCO:
  buy  = 180,000 × 5 = £900,000
  build = 1,260,000 + 150,000 × 5 = £2,010,000

Delay term: the system avoids £40,000/month in duplicated assessments;
build arrives 10 months later than buy.
CoD = 10 × 40,000 = £400,000

Effective comparison: £900,000 (buy) vs £2,010,000 + £400,000 = £2,410,000 (build)
```

五年下嚟，外購勝出大約 150 萬鎊，而除咗開發估算本身之外，最大嘅單一項目就係延遲成本——純粹比較資本開支嘅話，呢項成本永遠唔會浮現。

## 與軟件工程嘅關係

可以由呢個分析直接轉移到交付實務嘅做法：**按先驗作風險調整**——Mott MacDonald 嘅上調幅度，係 Green Book 樂觀偏差嘅軟件版本，機械式套用，所以團隊應該為豁免提出理據，而唔係假設自己嘅估算就係例外；**比較對象要誠實**——自行開發嘅替代方案係可得嘅最佳外購選項，而唔係「乜都唔做」，呢點同[公共開支嘅機會成本](../公共開支嘅機會成本/)直接相連；以及**誠實嘅總擁有成本比較**——每個自行開發建議，都應該對照外購選項嘅完整[總擁有成本](../政府資訊科技嘅總擁有成本/)，而唔係標價。如果自行開發真正勝出，額外開發時間嘅[延誤成本](../公共計劃嘅延誤成本/)應該喺業務個案中明確定價，而唔係留下一個「時間唔重要」嘅隱含假設。

## 常見陷阱

- **將供應商標價同未經風險調整嘅自行開發估算比較**：咁樣令自行開發喺成本同時間表兩方面都雙重受惠。
- **內部人力按零成本計算**：公務員工程師嘅時間被視為「免費」，因為已經計入部門編制預算，掩蓋咗佢對照該團隊本可做嘅其他工作嘅真實機會成本。
- **雙向都冇定價嘅鎖定風險**：供應商退出同數據可攜性成本係真實存在，但訂製開發嘅「巴士因素」，以及全程依賴一個細小、難以替代嘅內部團隊，同樣真實。
- **將管道工程當作使命差異化**：就整合中介軟件或文件儲存庫聲稱「呢個係我哋嘅核心」——要測試一個市民或個案主任，會唔會留意到底層運行緊邊一個。

## 資料來源

- Central Digital and Data Office, Technology Code of Practice. <https://www.gov.uk/guidance/the-technology-code-of-practice>
- GOV.UK Service Manual, deciding whether to build or buy technology. <https://www.gov.uk/service-manual>
- HM Treasury, Green Book supplementary guidance on optimism bias. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
