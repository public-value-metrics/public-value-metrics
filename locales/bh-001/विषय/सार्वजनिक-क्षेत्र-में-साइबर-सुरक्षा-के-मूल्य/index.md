# सार्वजनिक क्षेत्र में साइबर सुरक्षा के मूल्य

सार्वजनिक क्षेत्र में साइबर सुरक्षा के मूल्य जोखिम घटावे के दाम लगावे के अनुशासन ह: नागरिकन के डेटा में सेंध के संभावना कम कइला के केतना मोल बा, ई जानत कि सुरक्षा पर खरचा जब काम करेला त कवनो साफ-साफ आउटपुट ना देखावेला आ जब असफल होला त बहुत साफ देखाला? लाभ के रिकॉर्ड, सेहत के डेटा, या कर के रिकॉर्ड रखे वाली सेवा खातिर "काम करत घरी अदृश्य" होखे वाला ई गुन ठीक एहसे जरूरी बनावेला कि एकरा खातिर साफ-साफ मूल्य के तर्क चाहीं, खाली अनुपालन के टिक ना।

## काहें जरूरी बा

यूके के National Cyber Security Centre के Cyber Assessment Framework (CAF) सार्वजनिक क्षेत्र के संस्थान के सुरक्षा के जँचे लायक, परिणाम-आधारित अनुशासन बनावे के संरचित तरीका देला, चेकलिस्ट के बदले: ई चार गो उच्च-स्तर के उद्देश्य तय करेला (सुरक्षा-जोखिम के प्रबंधन, साइबर हमला से बचाव, साइबर सुरक्षा के घटना के पहचान, आ घटना के असर कम करे) जे योगदान करे वाला परिणामन में बँटल बा, जिनके आधार पर प्रणाली के मालिक के जाँचल जा सकेला, ओही भावना में जइसे [digital-service-standard](../डिजिटल-सर्विस-स्टैंडर्ड/) के बिंदु 9 ("अइसन सुरक्षित सेवा बनाईं जे उपयोगकर्ता के निजता के रक्षा करे") बा। CAF के जाँच जवना से बचावेला ओकर दस्तावेज वाला दाम बा: IBM के Cost of a Data Breach Report क्षेत्र के हिसाब से सेंध के औसत लागत के पीछा करेला, आ लगातार पावल बा कि सार्वजनिक क्षेत्र वित्त या स्वास्थ्य सेवा के मुकाबले दायरा के निचला छोर के ओर बा — हाल के संस्करण सार्वजनिक क्षेत्र के औसत लगभग $2.6–2.9 मिलियन प्रति सेंध बतावेलें — बाकिर "वित्त से कम" के मतलब "कम" ना ह, आ सरकारी सेंध के अइसन लागत होला जे रिपोर्ट के आँकड़ा पूरा नइखे पकड़ पावत: डिजिटल माध्यमन में नागरिकन के भरोसा के नुकसान, जे [डिजिटल अपनावल](../चैनल-शिफ्ट-से-बचत/) के घटावेला जेकरा पर माध्यम-बदलाव के बिजनेस केस टिकल बा, आ ओह डेटा के उजागर होखे के राजनीतिक आ कानूनी लागत जवन राज्य नागरिकन से जबरदस्ती सौंपवले रहे।

## गणित

सुरक्षा-निवेश के मोल ओइसहीं आँकल जाला जइसे जोखिम घटावे वाला कवनो खरचा के: अपेक्षित नुकसान में कमी के रूप में, पुरान जोखिम-प्रबंधन पहचान के प्रयोग से।

```
Annualized Loss Expectancy (ALE) = Single Loss Expectancy (SLE)
                                  × Annualized Rate of Occurrence (ARO)

Value of a security control =
  ALE_before_control − ALE_after_control − annual cost of the control

A control is worth funding when:
  (ALE_before − ALE_after) > annual cost of the control

CAF assessment doesn't directly output a probability, but a service's
CAF outcome profile (which contributing outcomes are "achieved",
"partially achieved", or "not achieved") is a reasonable proxy input
to estimate ARO — a system with unmanaged privileged access or no
tested incident response plan has a materially higher realistic ARO
than one with both in place.
```

## हल कइल उदाहरण

**40,000 निवासियन के सामाजिक देखभाल के रिकॉर्ड रखे वाली काउंटी परिषद के केस-प्रबंधन प्रणाली**:

```
Single Loss Expectancy (breach cost), using a public-sector-sector
average from a recent IBM Cost of a Data Breach Report ≈ £2.1m
(converted, order-of-magnitude figure — always re-derive from the
current report edition rather than reusing a fixed number)

Current ARO (unmanaged privileged access, no tested incident
response, per an internal CAF self-assessment showing multiple
"not achieved" outcomes) ≈ estimated 8% per year
  ALE_before = £2.1m × 0.08 = £168,000/year

Proposed control: privileged access management + tested incident
response plan, moving the relevant CAF outcomes to "achieved",
estimated to cut ARO to 3%/year
  ALE_after = £2.1m × 0.03 = £63,000/year

Annual cost of the control (tooling + process + testing) = £45,000

Value of the control = (168,000 − 63,000) − 45,000 = £60,000/year
  net positive — fund it. The arithmetic also shows the control
  would still be worth funding at nearly triple the cost, which is
  the kind of sensitivity check that should accompany any ALE figure
  built on estimated probabilities.
```

## सॉफ्टवेयर इंजीनियरिंग से जुड़ाव

ALE के समीकरण के जादातर लीवर इंजीनियरन के हाथ में बाड़ें: एक्सेस-कंट्रोल के डिजाइन, निर्भरता आ पैच के सफाई, लॉगिंग आ पहचान के दायरा, आ घटना-प्रतिक्रिया के औजार सब ARO वाला पद के सीधे हिलावेले, एहसे CAF के जाँच नीति-ऑडिट जेतना ही तकनीकी आर्किटेक्चर के समीक्षा लागेला। ई [technical-debt-as-public-value-erosion](../तकनीकी-कर्ज-सार्वजनिक-मूल्य-के-क्षरण-के-रूप-में/) के सबसे तीव्र रूप ह — बिना पैच, बिना निगरानी, खराब एक्सेस-कंट्रोल वाली प्रणाली अइसन कर्ज ह जेकर ब्याज के भुगतान स्थिर घसीटन ना, पूँछ-जोखिम ह — आ एकर मिलान [total-cost-of-ownership-in-government-it](../सरकारी-आईटी-में-स्वामित्व-के-कुल-लागत/) से होखे के चाहीं ताकि सुरक्षा के खरचा के प्रणाली के असल चलावे के लागत से अलग ना मानल जाय। ई Green Book के तहत [value-for-money](../पइसा-के-बदले-मूल्य/) जाँचन में भी सीधा इनपुट ह: जोखिम-समायोजित लागत कवनो विकल्प-मूल्यांकन के "लागत" वाला पक्ष के हिस्सा ह, अंत में चिपकावल बाद के सोच ना।

## आम गलतियाँ

- **CAF के स्व-मूल्यांकन के सुरक्षा के बराबर मानल**: पूरा भइल मूल्यांकन सुरक्षा के स्थिति के वर्णन करेला; ऊ ओकरा के बनावेला ना — मूल्य हासिल कइल परिणामन में बा, दस्तावेज में ना।
- **वैश्विक औसत सेंध-लागत के बिना समायोजन के स्थानीय अनुमान के रूप में लगावल**: IBM के आँकड़ा बड़, तरह-तरह के नमूनन के औसत बाड़ें; कवनो छोट स्थानीय प्राधिकरण के असली सिंगल लॉस एक्सपेक्टेंसी शायदे राष्ट्रीय सरकारी विभाग के बराबर होला।
- **निवेश के फैसलन में पूँछ-जोखिम के मनोविज्ञान के अनदेखी**: कम सालाना संभावना सुरक्षा के खरचा के अनिश्चित काल तक टारल आसान बना देला, ठीक ओह बरिस तक जब ऊ ना टरेला — ALE के गणना के ARO के दायरा के मुकाबले संवेदनशीलता-जाँच, जइसन हल कइल उदाहरण में बा, एकरा के काटेला।
- **खाली IBM-शैली के सेंध-लागत गिनल, भरोसा के लागत ना**: जवन सेंध नागरिकन के डिजिटल माध्यम इस्तेमाल करे के इच्छा घटावेले, ऊ [channel-shift-savings](../चैनल-शिफ्ट-से-बचत/) के पक्ष के बरिसन तक खोखला करेले — ई लागत सेंध-लागत के अनुमान में कमे शामिल होला।

## स्रोत

- National Cyber Security Centre, Cyber Assessment Framework. <https://www.ncsc.gov.uk/collection/caf>
- IBM, Cost of a Data Breach Report. <https://www.ibm.com/reports/data-breach>
- GOV.UK Service Manual, service standard, point 9: create a secure service which protects users' privacy. <https://www.gov.uk/service-manual/service-standard/point-9-create-a-secure-service>
