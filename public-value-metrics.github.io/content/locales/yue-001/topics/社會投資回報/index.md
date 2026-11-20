# 社會投資回報(SROI)

社會投資回報係一個用嚟量度、貨幣化同核算廣義價值(社會、環境同經濟)嘅框架，並以相對於所投入資源嘅比率表達，例如「每投入 £1，產生 £1.44 嘅社會價值」。佢嘅設計目的，係將財務會計嘅邏輯延伸到市場冇定價嘅成果，同時保持會計嘅嚴謹：SROI 入面每個數字，都必須可以追溯到由持份者界定嘅成果、一個證據基礎，以及對「就算冇呢個計劃都會發生嘅事」嘅明確調整。

## 點解重要

SROI 由 Social Value UK 同 Social Value International 維護，兩者係 SROI Network 嘅繼任機構，而 SROI Network 嘅《A Guide to Social Return on Investment》(2012)至今仍然係參考方法論。該框架建基於七項原則——讓持份者參與、了解改變嘅內容、為重要嘅事物估值、只包括重大嘅項目、唔好過度聲稱、保持透明，以及核實結果——而大部分現實中嘅 SROI 報告，最常違反嘅就係第五項原則「唔好過度聲稱」。一個跳過死重效應同歸因調整而得出嘅比率，唔係 SROI；佢係穿上 SROI 外衣嘅宣傳數字。為慈善機構、社會企業或者委託機構開發報告工具嘅軟件工程師，需要明白當中分別，因為工具要麼強制執行呢種紀律，要麼令跳過紀律變得容易。

## 數學原理

SROI 依賴[變革理論](../變革理論/)去確定邊啲成果屬於範圍，並用同[邏輯模型](../邏輯模型/)一樣嘅問責鏈表達：

```
SROI ratio = Present value of outcomes / Value of inputs

Process:
 1. Establish scope and identify stakeholders whose outcomes will be measured
 2. Map outcomes (a theory of change, evidenced with stakeholders, not assumed)
 3. Evidence outcomes and give them a value using financial proxies
 4. Establish impact: gross value − deadweight − attribution − displacement, then apply drop-off
 5. Calculate the SROI: net present value of impact ÷ value of inputs
 6. Report, use, and embed — the ratio is a communication device, not the endpoint
```

死重效應、歸因同挪移效應喺[額外性與死重效應](../額外性同死重效應/)同[挪移效應與歸因](../挪移效應與歸因/)中有講解；三者嘅目的，都係由總成果中分離出真正嘅[反事實](../反事實分析/)影響。

## 實例演算

**地方政府就業計劃**：每年投入成本 £250,000。60 名參加者轉為穩定就業；該成果嘅財務替代值(福祉提升、減少倚賴福利同稅收合計)為第一年每人 £8,500——呢類替代值嘅來源，見[單位成本數據庫](../單位成本數據庫/)。

- 總成果價值：60 × £8,500 = £510,000
- 減死重效應(40% 就算冇計劃都好可能會搵到工作)：£510,000 × 0.60 = £306,000
- 減歸因(餘下變化中 30% 歸功於其他機構嘅支援)：£306,000 × 0.70 = £214,200
- 第 2 年成果按 30% 遞減：£214,200 × 0.70 = £149,940，按每年 3.5% 貼現(見[社會貼現率](../社會貼現率/))：£149,940 ÷ 1.035 = £144,870
- 影響嘅總現值：£214,200 + £144,870 = £359,070
- **SROI 比率：£359,070 ÷ £250,000 = 1.44**，報告為「每投入 £1，產生 £1.44 嘅社會價值」

**慈善機構**：一項 £60,000 嘅探訪友伴服務，令 80 位長者減少孤獨感，替代值為每人每年 £1,100。總價值 £88,000；扣除 35% 死重效應同 15% 歸因後，淨影響為 £88,000 × 0.65 × 0.85 = £48,620，SROI 比率為 0.81——低於損益平衡點，呢個係合理而有用嘅發現，而唔係報告寫唔落去嘅失敗。

## 與軟件工程嘅關係

一個讓用戶輸入成果數量同替代值，但冇必填欄位處理死重效應、歸因或者連結變革理論嘅 SROI 計算器，預設會產生膨脹嘅比率，因為省略調整係阻力最小嘅路徑。應該將紀律建入數據結構：每個成果行都應該引用一個持份者群組、一個有證據嘅數量、一個附帶來源嘅財務替代值，以及非可選嘅死重效應／歸因欄位。SROI 成果對應所依賴嘅區別，見[成果與產出](../成果與產出/)；工具喺數據模型中應該反映嘅鏈條，見[邏輯模型](../邏輯模型/)。

## 常見陷阱

- **跳過死重效應同歸因。** 冇呢啲調整嘅頭條比率係總數字，而唔係淨影響數字，而 Social Value UK 嘅原則明確要求兩者兼備。
- **跨機構比較比率。** SROI 比率取決於逐個個案作出嘅範圍同替代值選擇；將一份報告嘅 4:1 比率視為「優於」另一份報告嘅 2:1，忽略咗假設並唔似財務會計比率咁標準化。
- **重複計算重疊嘅替代值。** 對同一批受益人，同時疊加「減少孤獨」同「改善心理福祉」嘅替代值，可能會對同一個底層改變重複估值。
- **跳過持份者參與。** 第一項原則要求成果由經歷者共同界定，而唔係由建模嘅分析人員假設。

## 資料來源

- Social Value UK / Social Value International. <https://socialvalueuk.org/>
- The SROI Network, "A Guide to Social Return on Investment" (2012).
- Social Value International, "The Principles of Social Value." <https://www.socialvalueint.org/principles>
