# 公共價值記分卡

公共價值記分卡改編自 Robert Kaplan 同 David Norton 於 1992 年提出嘅平衡計分卡——該計分卡係為從財務、客戶、內部流程同學習與成長四個角度優化利潤嘅企業而設——用於底線係使命而非利潤嘅機構。佢迫使公營機構同時喺多個不可化約嘅維度匯報績效，而唔係將一切壓縮成單一數字，掩蓋取捨。

## 點解重要

Kaplan 同 Norton 喺 Harvard Business Review 嘅原本論點係：單一財務指標係滯後指標，完全講唔出下一季績效*點解*會改變。私營界別嘅解決方法係四個互相連繫嘅角度。喺政府，Mark Moore 嘅「策略三角」(出自 *Creating Public Value*，1995)提供相應結構：一項服務必須同時交付**公共價值**(使命成果)、維持**合法性及支持**(政治同公眾支持)，以及**營運可行**(可用現有資源同能力交付)。Paul Niven 嘅 *Balanced Scorecard: Step-by-Step for Government and Nonprofit Agencies*(2003)係將 Kaplan 同 Norton 四個格轉化為呢個三角嘅實務手冊——通常將「財務」改稱為「資源管理」，將「使命」放喺頂部而非將「股東價值」放喺底部，並將客戶同持份者角度視為同等重要，而非從屬於利潤。對交付團隊嚟講，重點在於：一個只按財務或者效率指標(例如每宗交易成本)去評價嘅公共數碼服務，會系統性咁對財務指標睇唔到嘅合法性同成果維度投資不足。

## 數學原理

公共價值記分卡係框架而唔係公式，但佢嘅結構固定，值得原樣照錄：

```
Perspective          Public-sector question                    Example indicator
--------------------------------------------------------------------------------
Mission / outcomes    Are we achieving the public value we      Population outcome measure
                       exist to create?                         (see outcomes-vs-outputs)
Stewardship of        Are we using public money efficiently     Cost per outcome, budget
  resources            and within authorized limits?             variance
Customer / user        Are users and citizens able to access    Completion rate, satisfaction
                        and benefit from the service?
Legitimacy / support    Do political principals, oversight       Trust metrics, audit findings,
                        bodies, and the public still back us?    complaints upheld
Internal process /      Do we have the capability and process   Staff turnover, cycle time,
  learning              to keep improving?                       backlog age

A defensible scorecard reports 3–5 indicators per perspective, chosen so that
no single perspective can be gamed without the damage showing up in another.
```

## 實例演算

**地方政府成人社會護理部門**：一項復康支援服務(短期支援，協助人士出院後重拾自理能力)嘅記分卡匯報如下：

```
Mission:       68% of service users no longer need ongoing care after 6 weeks (target 65%)
Stewardship:   cost per completed reablement episode = £1,850 (budget assumption £2,000)
Customer:      user satisfaction 82%, average wait for service start 4.1 days
Legitimacy:    3 upheld complaints per 1,000 episodes; adult safeguarding board rates
               service "good"
Process:       staff vacancy rate 14%, average caseload 23 (safe caseload ceiling: 25)
```

單獨睇，使命同資源管理嘅數字好似一個直截了當嘅成功故事：低於預算、高於成果目標。但同流程一行一齊睇，14% 嘅空缺率對上 25 嘅個案量上限，顯示良好成果係靠接近不安全嘅人手水平換來——單憑使命數字永遠睇唔到呢個警號，亦正正係單一角度 KPI(見[公營界別 KPI](../公營界別關鍵績效指標/))所招致嘅失效模式。

## 與軟件工程嘅關係

對於開發內部或者面向公眾儀表板嘅團隊，記分卡直接反對單一「健康分數」小工具：每個角度做一個面板，並抵制產品壓力將佢哋合成一個交通燈，因為合成呢一步，正正係取捨資訊被摧毀嘅地方。佢亦可以乾淨利落咁對應產品團隊嘅 OKR 結構：一個冇配對資源管理或者流程 OKR 嘅使命 OKR，會重現 Kaplan 同 Norton 於 1992 年所針對嘅單一指標失效模式。Moore 關於「使命」格應該包含乜嘢嘅基礎理論，請見[公共價值](../公共價值/)；如何以真實、有來源嘅指標而非無人能夠辯護嘅代理指標，填充合法性角度，請見[信任與合法性指標](../信任與合法性指標/)。

## 常見陷阱

- **將記分卡壓縮成單一分數**：將四個角度平均成一個數字，會重新引入記分卡本來要防止嘅問題——良好嘅資源管理分數掩蓋差劣嘅合法性分數。
- **原封不動照搬私營界別嘅「財務」角度**：公營機構嘅資源管理角度，係關於維持喺獲授權、往往專款專用嘅預算之內，而非將收入最大化——Niven 嘅改稱並非表面功夫。
- **揀選擁有記分卡嘅團隊可以單方面移動嘅指標**：來自被評價團隊自己嘅合法性指標(例如自行匯報嘅投訴處理)，並非獨立證據。
- **記分卡建立後從不重新檢視權重或者指標**：Kaplan 同 Norton 原意係每年策略檢討；凍結多年嘅記分卡，會偏離佢本來要追蹤嘅使命。

## 資料來源

- Robert S. Kaplan and David P. Norton, "The Balanced Scorecard: Measures That Drive Performance,"
  *Harvard Business Review*, January–February 1992.
- Paul R. Niven, *Balanced Scorecard: Step-by-Step for Government and Nonprofit Agencies*, Wiley,
  2003.
- Mark H. Moore, *Creating Public Value: Strategic Management in Government*, Harvard University
  Press, 1995.
