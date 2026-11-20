# 捐款人投資回報

捐款人投資回報（donor return on investment）係指某位捐款人嘅一鎊實際換到幾多成果——唔係慈善機構嘅營運比率，亦唔係慈善機構就其總預算計算嘅回報。佢將投資回報由機構角度（我哋營運效率幾高）轉移到捐款人角度（我嘅邊際捐助改變咗啲乜），而呢兩個數字經常被錯誤咁當成同一樣嘢。

## 點解重要

慈善機構自己所講嘅「投資回報」（如果真係會用呢個詞），通常指嘅係 [每名受益人成本](../每名受益人成本/) 或 [慈善機構行政開支比率](../慈善機構行政開支比率/) 呢類——機構效率量度。捐款人嘅投資回報係完全唔同嘅問題：既然呢間慈善機構本身已有其他收入，*呢位*捐款人嘅錢喺邊際上增添咗乜？如果某機構無論有冇某筆 £10,000 捐款都會推行同一個計劃——因為佢儲備充裕，或者另一個資助者會填補缺口——咁無論該機構整體行政開支比率或每項成果成本睇落幾好，嗰筆捐款嘅捐款人投資回報都接近零。

呢個同英國公共開支嘅 [物有所值](../物有所值/) 評估，以及計劃評價中嘅 [額外性與死重](../額外性同死重效應/) 背後係同一條額外性問題：所創造嘅價值，只有喺本來唔會發生嘅情況下，先可以記喺資助者名下。主要嘅捐款人建議基金平台同有效捐獻組織（Giving What We Can、GiveWell）都明確圍繞呢個區別建立佢哋嘅推薦，問嘅唔係「呢間係咪好慈善機構」，而係「呢間慈善機構有冇未填補嘅資金空間，令我嘅捐款具額外性」。

## 數學原理

```
Donor ROI ≠ Charity's operating efficiency

Donor ROI  ≈  (Outcome achieved with the gift) − (Outcome that would have
               occurred without it, i.e. the counterfactual)
             ─────────────────────────────────────────────────
                              Size of the gift

Key inputs:
  - Room for more funding (is the charity funding-constrained at the margin?)
  - Funging (would another donor have filled the gap?)
  - Marginal cost-effectiveness at the specific funding level (costs often
    rise as an intervention scales past its easiest-to-reach population)
```

GiveWell 點樣將「更多資金空間」問題操作化，可參閱 [有效利他主義成本效益](../有效利他主義嘅成本效益/)；一般方法則見 [反事實分析](../反事實分析/)。

## 實例演算

一位捐款人要喺兩筆 £5,000 捐款之間揀選：

- **慈善機構 C**：核心計劃資金充足，儲備有 £2 million，仲有一列等候資助嘅資助者；多出嘅 £5,000 好可能只會加入儲備或者投放喺優先次序較低嘅活動。估計捐款人帶來嘅額外成果：微乎其微——筆錢明顯冇改變到發生嘅事。
- **慈善機構 D**：一個細型、有實證支持嘅計劃，已公開表示如果冇額外 £50,000，下季要拒絕 200 人，而佢已經籌到其中 £42,000。多出嘅 £5,000 好大機會資助真正額外嘅服務——例如多服務 20 人，按該機構自己公布嘅每名受益人成本 £250 計算。

捐款額相同、捐款人相同，捐款人投資回報卻有天壤之別——唔係因為慈善機構 C 係較差嘅機構（佢整體每項成果成本可能更優），而係因為佢嘅邊際資金缺口已經填滿。

## 與軟件工程嘅關係

捐款平台同捐款推薦工具往往只展示機構層面嘅效率指標（行政開支比率、每名受益人成本），因為呢啲係慈善機構喺年報公布、亦最容易放入比較表嘅數據。要正確呈現捐款人投資回報，就需要另一個更難取得嘅數據點：慈善機構聲明嘅當前資金缺口或「更多資金空間」，而呢個數字全年都會變動，亦好少係結構化數據。想支持真正捐款人投資回報推理嘅平台，要麼直接接入資金缺口披露嘅數據饋送（正如 GiveWell 為其推薦慈善機構人手維護嘅做法），要麼明確聲明比較表展示嘅係機構效率，而非捐款人額外性。捐款人投資回報最常被錯誤混淆嘅指標，可參閱 [慈善機構行政開支比率](../慈善機構行政開支比率/)。

## 常見陷阱

- **將慈善機構效率同捐款人額外性混為一談。** 一間營運良好、行政開支低嘅慈善機構，如果冇資金短缺，邊際捐款人投資回報仍然可以接近零。
- **忽略資金互相取代（funging）。** 如果大型機構資助者無論如何都會填補缺口，個別捐款人嘅捐款只係取代咗該資助者嘅資金，而唔係增加新嘅服務。
- **假設規模擴大後成本效益保持線性。** 最易接觸嘅受益人往往最先得到服務；計劃擴張時，每項成果嘅邊際成本通常上升，所以下一鎊嘅回報同已花費嘅平均每一鎊嘅回報並不相同。
- **冇列明資金缺口。** 無法說出下一個 £X 會資助乜嘢嘅慈善機構或平台，只可以支持平均成本嘅說法，而唔能支持真正嘅捐款人投資回報主張。

## 資料來源

- Giving What We Can, on funding gaps and cost-effectiveness in donation decisions. <https://www.givingwhatwecan.org/>
- GiveWell, "Our criteria" (room for more funding as an explicit criterion). <https://www.givewell.org/how-we-work/our-criteria>
- HM Treasury, the Green Book: appraisal and evaluation in central government. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-governent>
