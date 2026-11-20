# 數碼服務標準（Digital Service Standard）

GOV.UK 服務標準（Service Standard）係每個中央政府數碼服務正式上線前一定要過嘅關：共有 14 個公開要點，由獨立評審小組喺每個交付階段完結時評核。呢個機制將「起好公共服務」由口號變成有紀錄可查、非過即不通過嘅決定，亦係 2012 年《政府數碼策略》（Government Digital Strategy）「預設數碼」（digital by default）要求嘅直接承繼者。

## 點解重要

標準未出現之前，政府資訊科技項目失敗往往要到上線先睇得出，亦好少追溯到邊個決定要負責。2012 年《政府數碼策略》要求各部門將 25 項使用量最高、面向市民嘅交易服務重新設計成「預設數碼」，並配以合規機制：服務必須通過服務評審（service assessment），先可以喺 GOV.UK 上線。當時嘅標準有 26 點，2019 年合併成 18 點，而家生效嘅係 14 點，分三大類——了解用戶需要、提供好服務、使用適當技術。服務評審係一個真實嘅環節：由 GDS（Government Digital Service，政府數碼服務）或部門評審員組成小組審閱證據、質詢團隊，然後就每一點作出「達標」、「部分達標」或「未達標」嘅裁決，並公布喺該服務嘅評審頁面。評審唔通過，服務就唔可以由私人測試版（private beta）進入公開測試版（public beta），或者由測試版轉為正式上線——佢係真正嘅關卡，而唔係一般檢討。

## 數學原理

服務標準係一個框架而唔係公式，不過佢運作起上嚟係一個分階段把關嘅決策結構：

```
Discovery  → Alpha assessment  → Beta assessment  → Live assessment
             (not mandatory     (mandatory before   (mandatory before
              for all services,  public beta launch) removing "beta" tag
              but recommended)                       and closing old channel)

Each assessment: evidence + team interview → panel verdict per point
  Met / Partially met / Not met
Overall outcome: Pass / Pass with conditions / Fail (re-assessment required)

Cost of a fail ≈ cost of the next sprint cycle to remediate
              + delay to the [channel-shift-savings](../渠道轉移節省/)
                the service was funded to deliver
```

第 10 點（「界定成功係點樣，並公布表現數據」）正係 [每宗交易成本](../每宗交易成本/) 同 [服務標準與交易指標](../服務標準與交易指標/) 嘅數據來源——標準規定要量度，而唔單止係要提供服務。

## 實例演算

**地方政府房屋申請服務**：某議會團隊嘅服務去到測試版評審，14 點之中達標 11 點，但第 5 點（「確保人人都用得到服務」）未通過，因為冇為上唔到網嘅申請人設計輔助數碼途徑；第 9 點亦未通過，因為個人資料以明文記錄喺申請錯誤追蹤日誌入面。

```
Direct cost of the fail:
  Re-assessment slot: 6–8 week wait for the next available panel
  Remediation sprint: 2 developers × 3 weeks × £550/day ≈ £34,650
  Assisted-digital channel design: 1 researcher × 2 weeks ≈ £5,000

Delay cost: service was forecast to shift 40% of 18,000/year housing
enquiries from £8.50 phone calls to £0.20 digital transactions
  = 7,200 × (£8.50 − £0.20) = £59,760/year foregone, pro-rated for the
    ~2-month delay ≈ £9,960

Total cost of the failed assessment ≈ £49,610
```

計算嘅重點唔係數字有幾精確，而係評審不通過係有真實、可以計算嘅代價——呢點正正係個關卡有牙齒嘅原因。

## 與軟件工程嘅關係

對工程師嚟講，標準讀落去同一份政策文件一樣，亦係一份架構同交付清單：第 11 點（「揀啱工具同技術」）同第 12 點（「將新原始碼公開」）直接係工程決定，而第 14 點（「營運可靠嘅服務」）要求同任何生產系統一樣嘅 SLO 同事故處理流程。佢係呢組課題嘅統領框架——[渠道轉移節省](../渠道轉移節省/) 同 [每宗交易成本](../每宗交易成本/) 係標準想保障嘅財政利益，[數碼包容](../數碼包容/) 係第 5 點存在嘅目的，而 [政府即平台](../政府即平台/) 嘅組件（GOV.UK Notify、Pay、One Login）基本上自動滿足第 13 點（「使用並貢獻開放標準、通用組件同模式」）。至於「揀啱工具」呢點喺採購決定入面點體現，可參閱 [政府自建定外購](../政府自行開發定外購/)。

## 常見陷阱

- **將評審當成上線當日嘅合規剔格**：好多團隊喺測試版評審前一星期先第一次睇呢 14 點，結果可想而知會不通過；標準應該由探索階段（discovery）開始就影響決策，而唔係事後審計。
- **評審嘅係原型而唔係服務**：一個精美嘅示範可以通過審查，但包含輔助數碼包容同事故管理嘅真正上線版本可能就通唔過——評審員本應深究呢個落差，但自行認證嘅小型服務往往跳過呢步。
- **擴大規模前冇重新評審**：喺 5% 推出規模通過評審嘅服務，去到 100% 唔會自動仍然合規——負載、失敗需求（failure demand）同邊緣用戶都會改變。
- **將服務標準同設計系統混為一談**：GOV.UK 設計系統（Design System）嘅組件可以滿足部分要點（一致性、無障礙），但標準仲涵蓋團隊結構、敏捷實踐同數據倫理——一個外觀精美嘅服務依然可能喺第 2、6 或 9 點未通過。

## 資料來源

- GOV.UK Service Manual, Service Standard. <https://www.gov.uk/service-manual/service-standard>
- GOV.UK Service Manual, point 14: operate a reliable service. <https://www.gov.uk/service-manual/service-standard/point-14-operate-a-reliable-service>
- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
- GOV.UK Service Manual, service assessments. <https://www.gov.uk/service-manual/service-assessments>
