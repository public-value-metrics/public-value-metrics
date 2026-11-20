# 義工時間價值

義工時間價值係賦予無償勞動嘅貨幣估算，最常用嚟說明一間慈善機構真正嘅經濟足跡——即其賬目加上佢無需支付嘅勞動——或者論證某項干預比單看現金預算更具成本效益。兩套全國性方法論佔主導：美國嘅 Independent Sector 估算，同英國嘅 Office for National Statistics(國家統計局)／NCVO 方法，而兩者對同一小時勞動嘅定價相差好遠。

## 點解重要

每年，Independent Sector 同 University of Maryland 嘅 Do Good Institute 合作，發布全國義工時間每小時價值，基於 Bureau of Labor Statistics 嘅工資數據——具體係私營非農業薪酬名冊上生產同非主管工人嘅平均時薪，加上附帶福利調整——並按美國各州細分。最近一次發布將 2025 年價值定為**每小時 $36.14**，比上一年上升 3.9%，各州數值由華盛頓特區超過 $50，到波多黎各低於 $20 不等。喺英國，Office for National Statistics 另行估算正式義務工作嘅重置成本為**每小時 £14.43**(2017 年估算)，而 NCVO 嘅 UK Civil Society Almanac 2024 用義務工作參與數據——2021–22 年約 1,420 萬人正式從事義務工作——估算該界別總義務工作貢獻約為 **£18 billion**，約佔英國 GDP 嘅 0.8%。

呢點嘅重要性超越會計上嘅包裝：一個大量倚賴義工勞動嘅計劃，以純現金[每項成果成本](../每個成果成本/)計算，可以顯得比倚賴有薪員工嘅計劃平得多，即使真正資源成本——取代呢啲勞動需要幾多錢——相近或者更高。忽視義工時間價值嘅資助者同評估者，會有系統地低估倚重義工嘅交付模式嘅真正成本，扭曲同交付相同成果嘅有薪員工模式之間嘅效率比較。

## 數學原理

```
Value of volunteer time = Volunteer hours contributed × hourly rate

Rate choice matters and changes the answer:
  - Replacement cost approach: the wage of a paid worker who would do the
    same task (e.g. a replacement-cost rate for a qualified youth worker,
    not a generic average wage) — most defensible for task-specific valuation
  - Opportunity cost approach: the volunteer's own forgone wage — most
    defensible for valuing what the volunteer gave up
  - National average approach: Independent Sector's or ONS's single
    blended rate — most defensible for headline, cross-sector comparability
```

同一個鐘，三種方法可以相差好多倍(一位擔任董事會受託人嘅律師，機會成本比率同全國平均比率相差好遠)，所以任何報告嘅數字，都需要說明係用邊種方法得出。

## 實例演算

**英國慈善機構，全國平均法**：一年 5,000 義工小時，按 £14.43／小時(ONS 重置成本估算)估值：

```
Value = 5,000 × £14.43 = £72,150
```

如果該慈善機構當年現金支出係 £300,000，其真正資源成本——現金加義工勞動——係 £372,150，比單睇現金數字高約 24%。只用 £300,000 現金數字計算嘅每項成果成本，以同樣幅度低估真正成本。

**美國慈善機構，全國平均法**：2,000 義工小時，按 $36.14／小時(Independent Sector，2025 年發布)估值：

```
Value = 2,000 × $36.14 = $72,280
```

**同一間美國慈善機構，機會成本法**：如果義工當中退休專業人士比例偏高，佢哋以往平均收入係 $60／小時，機會成本估值就係 $120,000——比全國平均數字高三分之二，說明點解必須註明方法。

## 與軟件工程嘅關係

記錄義工時數嘅系統(排班工具、義工管理平台)，應該以任務或角色層面記錄時數，而唔只係總數，咁就可以按角色套用重置成本比率，而唔係對混合義工隊伍套用一個統一嘅全國平均比率(受託人嘅一個鐘同招待員嘅一個鐘，經濟上並不等同)。將所用比率同方法連同計算所得價值一齊儲存——而唔只係最後貨幣數字——令下游報告(年度賬目、[社會投資回報](../社會投資回報/)計算、資助者報告)日後可以重現或者質疑該數字，而唔係將佢視為不透明嘅常數。點解忽略義工時間價值會有系統地低估真正交付成本，見[每項成果成本](../每個成果成本/)。

## 常見陷阱

- **對結構上唔同嘅角色使用單一統一比率。** 將全國平均工資比率套用於專業義務時數(法律、財務、臨床)，會嚴重低估佢；凡係技術性任務，應該將比率配對被取代嘅角色。
- **同有薪員工成本重複計算。** 如果義工取代原本需要付薪嘅工作，要確保估值係現金開支之外嘅附加，而唔係疊加喺已經膨脹嘅人手估算之上。
- **引用過時比率而冇註明日期。** Independent Sector 同 ONS 嘅比率每年更改(或者 ONS 方面只係定期重新估算)；報告中冇日期嘅義工時間數字，幾乎冇比較價值。
- **將義工時間價值視為籌款資產。** 佢係用嚟理解真正資源成本嘅成本會計調整，而唔係慈善機構可以使用嘅新資金；將兩者混淆，會誤導閱讀賬目嘅董事會。

## 資料來源

- Independent Sector and the Do Good Institute (University of Maryland), "Value of Volunteer Time." <https://www.independentsector.org/value-of-volunteer-time/>
- Independent Sector, Value of Volunteer Time methodology. <https://independentsector.org/research/value-of-volunteer-time-methodology/>
- NCVO, UK Civil Society Almanac 2024. <https://www.ncvo.org.uk/news-and-insights/news-index/uk-civil-society-almanac-2024/>
- Office for National Statistics, volunteering valuation estimate, as cited in NCVO analysis. <https://www.ncvo.org.uk/>
