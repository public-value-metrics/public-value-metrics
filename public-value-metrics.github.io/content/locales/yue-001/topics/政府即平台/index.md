# 政府即平台（Government as a Platform，GaaP）

政府即平台係一種策略：將通知服務、付款服務、身份服務等共用、可重用嘅組件，集中起一次，令數以百計嘅政府服務直接使用，而唔係各自重複建設。佢將公共數碼基建重新界定為平台經濟學問題：價值唔在於任何一次整合，而在於*下一個*採用嘅團隊嘅邊際成本趨近於零。

## 點解重要

GDS 喺 2015 年嘅《Government as a Platform》出版物入面正式提出呢個策略，指出政府一直喺一個又一個服務入面各自建設相同嘅能力——收款、用戶通知、身份核實、地址查詢——每個都背負自己嘅採購、保安評估同持續支援負擔。替代方案係少數幾個共用平台，一次過按高標準建成，然後到處重用：用嚟發送電郵、短訊同信件嘅 GOV.UK Notify，處理網上付款嘅 GOV.UK Pay，同用嚟核實身份嘅 GOV.UK One Login（早期 GOV.UK Verify 身份計劃嘅繼任者）。呢啲平台達到嘅規模，係策略成功最清楚嘅證據：GOV.UK Pay 已為約 1,800 個獨立服務處理超過 £10 billion嘅交易——最初大約用咗四年先處理到第一個 £1 billion，而家大約五個月就處理到同樣金額——而 GOV.UK Notify 已代表超過 1,500 個政府機構發出超過 9 billion 則訊息。每一個採用嘅服務都避免咗自己建設、保障同維護付款閘道或訊息管線。

## 數學原理

```
Build cost per service (no platform) = N services × cost to build,
  secure-assess, and run one payment/notification/identity system

Platform cost = fixed platform build cost
              + marginal cost per adopting service (integration,
                configuration, ongoing platform-team support)

Reuse breaks even once:
  platform build cost < N × (per-service build cost − marginal
  integration cost)

For a mature platform, marginal cost per additional adopter approaches
the transaction/message fee alone — the fixed cost is amortized across
the whole government estate, not one department's budget, which is
why GaaP components are usually funded centrally rather than charged
at full cost-recovery to early adopters.
```

## 實例演算

**地方政府採用 GOV.UK Pay 而非自建付款閘道**：

```
Build-your-own estimate:
  PCI-DSS compliance work + integration + ongoing maintenance
  ≈ £85,000 build + £22,000/year maintenance

GOV.UK Pay adoption:
  Integration effort ≈ £12,000 (developer time)
  Transaction fees: government-to-citizen card payments typically
  charged at a small percentage + fixed fee per transaction, no
  separate PCI-DSS burden carried by the council
  ≈ £12,000 one-off, ongoing cost variable with volume, not fixed

First-year saving ≈ £85,000 − £12,000 = £73,000, before counting the
avoided £22,000/year maintenance and the avoided compliance risk of
holding card data in a council-run system at all — this second
category is the security value covered in
public-sector-cybersecurity-value.
```

將呢個 £73,000 乘以現時使用 GOV.UK Pay 嘅約 1,800 個服務，全政府避免嘅建設成本合計達數以億計英鎊——策略嘅價值真正所在，係平台經濟學，而唔係任何單一整合。

## 與軟件工程嘅關係

政府即平台係支持 [政府自建定外購](../政府自行開發定外購/) 嘅直接論據：當有共用、經評審、運作良好嘅組件存在時，自建一個定制版本好少會係更好嘅 [物有所值](../物有所值/) 選擇，而且幾乎必然違反 [數碼服務標準](../數碼服務標準/) 第 13 點（「使用並貢獻開放標準、通用組件同模式」）。佢亦改變 [政府資訊科技總擁有成本](../政府資訊科技嘅總擁有成本/) 嘅形態：採用平台，係用較細、同使用量掛鉤嘅營運成本，換走龐大嘅資本同維護項目，前者更易預測，服務停用時亦更易削減資金。組件嘅開放重用同 [開放數據價值](../開放數據嘅價值/) 係近親——兩者都係將政府一次性產生嘅嘢視為共用基建，而非部門資產嘅策略。

## 常見陷阱

- **暗地重建**：團隊因為平台嘅接入流程慢過自己做，就暗中自建付款或通知整合——呢個係管治摩擦問題而非技術問題，並默默侵蝕整個策略所倚賴嘅重用經濟效益。
- **平台團隊資金同佢創造嘅價值不成比例**：價值流向使用嘅部門，成本卻由平台團隊承擔，除非資金集中同受保護，否則會造成長期投資不足風險——係公地悲劇嘅一個版本。
- **只用使用量衡量平台成功**：採用數字（已接入嘅服務、已發送嘅訊息）係領先指標，而非價值嘅證明；真正嘅考驗係上面嘅避免建設成本同避免風險計算。
- **將「平台」同「巨石系統（monolith）」混為一談**：GaaP 組件之所以成功，係因為每個都以窄而穩定嘅介面做好一件事——將無關嘅能力捆綁入同一個「平台」，會喺另一個規模重現定制建設嘅問題。

## 資料來源

- Government Digital Service, Government as a Platform. <https://www.gov.uk/government/publications/government-as-a-platform>
- GOV.UK Notify. <https://www.notifications.service.gov.uk/>
- Government Digital Service blog, "GOV.UK Pay at 10: how it started and how it's going". <https://gds.blog.gov.uk/2026/09/02/gov-uk-pay-at-10-how-it-started-and-how-its-going/>
