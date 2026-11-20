# 信任與合法性指標

合法性同支持，係 Mark Moore 喺《Creating Public Value》(1995)中「策略三角」嘅三條支柱之一——另外兩條係公共價值本身同營運能力——亦係最常冇被量度嘅一條，因為同預算或者產出數量唔同，合法性冇一個明顯嘅單一數字。信任同合法性指標係政府用嚟填補呢個缺口嘅一系列替代量度：機構信任調查、監督機構信心評級、投訴同上訴數據，以及政治／立法支持指標。

## 點解重要

Moore 嘅論點係，一個交付真正價值、卻失去政治同公眾合法性嘅公共管理者，最終會失去繼續交付所需嘅授權環境——資金被削減、授權範圍被收窄，服務無論成果幾好都會被餓死。因此，合法性唔係附加喺交付計分卡上嘅公關後記；佢係使命能否持續嘅承重輸入，所以先會喺[公共價值計分卡](../公共價值記分卡/)中成為同等地位嘅視角，而唔係一個註腳。OECD 嘅「Trust in Government」調查計劃係量化呢個概念最領先嘅跨國嘗試：佢追蹤 OECD 成員國中表示信任本國政府嘅市民比例，長期數據顯示信任對衝擊高度敏感——2008 年金融危機同 COVID-19 疫情都引發全國層面嘅急劇波動，其後往往只係部分恢復，OECD 嘅分析一致發現，被認為嘅*能力*(政府有冇做到所講)同被認為嘅*公平／誠信*(政府係咪被視為冇貪腐或者偏袒)，係信任數字嘅兩大最強驅動因素，有別於對任何單一交易嘅滿意程度。各國政府亦愈來愈嘗試喺更細緻嘅層面將合法性操作化——英國嘅獨立監管機構同視察機構(National Audit Office、Parliamentary and Health Service Ombudsman，以及 Ofsted 同 Care Quality Commission 等界別監管機構)，擔當制度化嘅合法性檢查，將「公眾仲信唔信呢項服務」轉化為可審計嘅評級。

## 數學原理

信任同合法性屬於框架型課題，其可用嘅量化替代指標如下：

```
Institutional trust index (OECD-style)
  = % of survey respondents answering "yes" to a confidence-in-government question,
    tracked over time, disaggregated by demographic group

Legitimacy proxy set (no single number substitutes for the construct):
  - Upheld complaints per 1,000 service users (ombudsman or internal complaints data)
  - Judicial review / appeals success rate against the body's decisions
  - Independent regulator/inspectorate rating (e.g. "outstanding" to "inadequate" bands)
  - Legislative/oversight committee confidence votes or critical report frequency
  - Freedom of information request volume and disclosure/refusal rate, as a proxy
    for perceived transparency

Legitimacy is corroborated, not calculated: a defensible legitimacy assessment
triangulates several of the above rather than relying on any single proxy.
```

## 實例演算

**國家稅務機關**：為年度公共價值報告進行合法性三角驗證。

```
OECD-style trust proxy (department-specific confidence survey):
  58% of respondents say they trust the authority to "treat me fairly" (down from
  64% two years prior)

Complaints data:
  Upheld complaints: 4.2 per 1,000 taxpayer interactions (up from 3.1 per 1,000)

Ombudsman referrals:
  Referrals to the independent Adjudicator's Office: 1,850 in the year, of which
  61% upheld in full or part against the authority (up from 48% the prior year)

Reading across all three: trust is falling, upheld complaints are rising, and
independent ombudsman findings are increasingly siding against the authority —
three independent signals converging on the same direction, which is what makes
this a credible legitimacy finding rather than noise in any one series.
```

單一個數字變動只係薄弱證據；三個獨立量度喺同一時期一齊變動，先係令合法性判斷站得住腳嘅模式。

## 與軟件工程嘅關係

合法性指標好少由單一團隊嘅儀表板產生，而呢點本身就係設計啟示：應該建立可以攝取同核對獨立外部來源數據(申訴專員個案系統、監管機構評級饋送、問卷供應商)嘅報告管道，而唔係將合法性報告設計成純內部指標，因為內部來源嘅合法性聲稱(「我哋自評值得信任」)證據份量極低——同[公共價值計分卡](../公共價值記分卡/)中合法性視角所指出嘅獨立性問題一樣。投訴同上訴數據管道，值得享有同任何為[按成果付費](../按成果付款與社會影響力債券/)合約提供數據嘅成果管道一樣嘅數據質素嚴謹度，因為一份漏報或者分類不佳嘅投訴數據集，會喺一年後信任調查中問題變得明顯之前，悄悄低估合法性問題。同呢項機構層面量度對應嘅交易層面量度，見[市民滿意度指標](../市民滿意度指標/)；呢條支柱所屬嘅 Moore 完整策略三角框架，見[公共價值](../公共價值/)。

## 常見陷阱

- **將滿意度當作合法性嘅替代指標**：市民可以滿意單一交易嘅界面，同時不信任整個機構(或者相反)——兩者必須分開報告嘅原因，見[市民滿意度指標](../市民滿意度指標/)。
- **倚賴單一自行匯報嘅指標**：內部進行、冇獨立佐證(申訴專員數據、監管機構評級)嘅信任調查，好容易被視為自己打分而被忽略；應該三角驗證。
- **忽略人口群組細分**：全國總信任數字可以掩蓋特定群體(按年齡、種族、收入或地區)之間急劇分歧嘅合法性——OECD 自己嘅 Trust in Government 發布正正因為呢個原因作出細分。
- **將單一衝擊導致嘅下跌讀作永久趨勢**：信任數字喺危機(金融崩潰、疫情、轟動醜聞)前後急劇波動，並部分恢復；單一嘅衝擊後數據點，唔應該喺冇更多數據下推斷為長期下降。

## 資料來源

- Mark H. Moore, *Creating Public Value: Strategic Management in Government*, Harvard University
  Press, 1995.
- OECD, "Trust in Government." <https://www.oecd.org/en/topics/trust-in-government.html>
- Parliamentary and Health Service Ombudsman, annual casework statistics.
  <https://www.ombudsman.org.uk/>
