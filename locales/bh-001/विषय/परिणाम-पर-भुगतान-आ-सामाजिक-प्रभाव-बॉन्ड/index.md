# परिणाम-पर-भुगतान आ सामाजिक प्रभाव बॉन्ड (PbR/SIB)

परिणाम-पर-भुगतान (Payment by results, PbR) में सेवा-प्रदाता के भुगतान जँचल गइल हासिल परिणाम पर होला, कइल गइल गतिविधि पर ना। सामाजिक प्रभाव बॉन्ड (social impact bond, SIB) PbR के एगो खास वित्तपोषण ढाँचा ह जेकरा में निजी या परमार्थी निवेशक सेवा के पइसा पहिलहीं लगा देलें आ सरकारी कमीशनर उनके — मुनाफा के साथ — तबे लौटावेला जब स्वतंत्र रूप से नापल परिणाम तय सीमा पर पहुँचे, जवना से सेवा पहुँचावे के जोखिम करदाता से निवेशक पर चल जाला।

## काहें जरूरी बा

दुनिया के पहिला SIB सितंबर 2010 में HMP Peterborough में शुरू भइल: Social Finance 17 निवेशकन से £5 मिलियन जुटवलस "One Service" चलावे खातिर, जे छोट सजा (12 महीना से कम) वाला कैदियन के साथे दोबारा अपराध घटावे के काम करत रहे, आ Ministry of Justice आ Big Lottery Fund तय कइलें कि निवेशकन के तबे चुकावल जाई जब राष्ट्रीय मिलान कइल तुलना-समूह के मुकाबले दोबारा-सजा वाली घटना कम से कम 7.5% घटें। Peterborough पायलट के अंतिम समूह में दोबारा-सजा में 9.7% के कमी दर्ज भइल, जवन सीमा से ठीक-ठाक ऊपर रहे, आ निवेशकन के मुनाफा के साथे चुकता कइल गइल। ई ढाँचा एहसे मायने रखलस कि ई कमीशनिंग के एगो खास समस्या सुलझवलस: सरकार इनपुट के बदले परिणाम पर भुगतान चाहत रहे, बाकिर अइसन हस्तक्षेप के वित्तीय जोखिम ना उठा सकत रहे जे शायद काम ना करे, एहसे SIB के ढाँचा ऊ जोखिम ओह निवेशकन पर डाल दिहलस जे ओकरा उठावे खातिर तइयार रहलें। Oxford के Blavatnik School of Government के Government Outcomes Lab (GO Lab) अब दुनिया भर में PbR आ SIB के प्रदर्शन के सबसे पूरा सार्वजनिक सबूत-आधार रखेला, दुनिया में 200 से बेसी प्रभाव बॉन्ड के पीछा करत आ ई शोध छापत कि डिजाइन के कवन गुन सफलता या विफलता से जुड़ल बा। सबूत-आधार बार-बार इहे सीख पर लौटेला कि *चुनल गइल परिणाम-माप*, आ ओकरा छूटे के जोखिम केकर बा, इहे तय करेला कि PbR ठेका असल में कइसे चली।

## गणित

```
PbR payment = base payment (if any) + Σ (outcome achieved × unit price per outcome)

Social impact bond investor return:
  Investor outlay   = upfront capital funding service delivery
  Outcome payment   = commissioner pays only if outcome ≥ threshold, scaled by
                       how far above threshold performance lands
  Investor return   = outcome payments received − investor outlay
                       (a rate of return, often capped, reflecting risk taken)

Key design parameters that determine the whole contract's behaviour:
  Outcome metric        — must be an outcome, not an output (see outcomes-vs-outputs)
  Comparison/counterfactual — usually a matched cohort (see counterfactual-analysis)
  Payment threshold      — minimum improvement before any payment triggers
  Payment curve           — linear, stepped, or capped above the threshold
  Attribution/deadweight discount — see additionality-and-deadweight
```

## हल कइल उदाहरण

**Peterborough One Service** (छपल मूल्यांकनन से लिहल उदाहरण-आँकड़ा):

```
Investor capital raised:         £5,000,000
Cohort:                          ~3,000 short-sentence male prisoners over two cohorts
Threshold:                       ≥7.5% reduction in reconviction events vs matched
                                  national comparison group, or no payment
Cohort 1 result:                 8.4% reduction — below the contractual bar for that
                                  cohort alone under the original rules
Combined/final cohort result:    9.7% reduction — above threshold
Outcome payment:                 government (Ministry of Justice / Big Lottery Fund)
                                  pays per percentage point above threshold, funding
                                  investor repayment plus a return
```

**स्थानीय प्राधिकरण के PbR ठेका (उदाहरण)**: एगो परिवार-हस्तक्षेप सेवा के कमीशन कइल गइल बा £4,000 प्रति रेफर कइल परिवार (गतिविधि-भुगतान) आ £6,000 प्रति ऊ परिवार जेकर मामला बंद भइला के 12 महीना बाद कवनो बाल-सुरक्षा रेफरल ना भइल (परिणाम-भुगतान)। 200 परिवार रेफर भइलें, 150 मामला बंद भइल, 96 गो 12 महीना पर रेफरल-मुक्त रहलें:

```
Activity payment  = 200 × £4,000 = £800,000
Outcome payment   = 96 × £6,000  = £576,000
Total contract cost = £1,376,000 for 96 confirmed sustained outcomes
Cost per confirmed outcome ≈ £14,333 (see cost-per-outcome)
```

## सॉफ्टवेयर इंजीनियरिंग से जुड़ाव

परिणाम-पर-भुगतान डेटा के समस्या से पहिले प्रोत्साहन के मेल के समस्या ह, आ डेटा-प्रणाली ऊ जगह ह जहाँ ओह मेल के टिकल या टूटल तय होला। स्वतंत्र, छेड़छाड़ पकड़े लायक परिणाम-सत्यापन पूरा खेल ह: कवनो अस्पष्ट मामिला के कोड कइसे कइल जाय एकरा पर कमीशनर आ प्रदाता के उल्टा प्रोत्साहन होला, एहसे परिणाम दर्ज करे वाली प्रणाली के ऑडिट-ट्रेल चाहीं, स्वतंत्र सत्यापक (अक्सर प्रदाता से अलग कवनो संस्था, कबो-कबो कवनो आधिकारिक आँकड़ा संस्था जे पुलिस या लाभ के रिकॉर्ड से मिलान करेले) के साथे डेटा-साझा के समझौता चाहीं, आ परिणाम के परिभाषा के अपरिवर्तनीय संस्करण चाहीं — ई [सार्वजनिक क्षेत्र के KPI](../सार्वजनिक-क्षेत्र-के-प्रदर्शन-संकेतक/) के "माप के फेर से परिभाषित कइल" वाली गलती के PbR वाला रूप ह। श्रेय-निर्धारण के गणना [counterfactual-analysis](../काउंटरफैक्चुअल-विश्लेषण/) के मिलान-समूह वाला तरीकन पर टिकल बा, जिनके दोहरा सके वाला, जाँचे लायक कोड चाहीं, एक बेर के स्प्रेडशीट ना। आ माप खुद सच्चा परिणाम होखे के चाहीं, कवनो प्रॉक्सी गतिविधि ना — देखीं [परिणाम बनाम आउटपुट](../परिणाम-बनाम-आउटपुट-का-भइल-आ-का-बदलल/) — काहेकि आउटपुट पर भुगतान करे वाला PbR ठेका रोज के फंडिंग के नाम बदल के ऊपर से लेन-देन के अउरी लागत जोड़ देला। जब SIB के सामाजिक प्रतिफल के आगे के मॉडल बनावल जाय त ई मूल्यांकन आमतौर पर सीधे [सामाजिक निवेश पर प्रतिफल](../सामाजिक-निवेश-पर-प्रतिफल/) के कार्यप्रणाली से उधार लेला।

## आम गलतियाँ

- **आसानी से खेल लेवे लायक प्रॉक्सी परिणाम पर भुगतान**: "सत्रन में हाजिरी" परिणाम के भेस में गतिविधि ह; अइसन माप पर जोर दीं जे चाहल असल बदलाव (दोबारा अपराध, रोजगार, आवास के स्थिरता) के झलकावे।
- **भरोसेमंद प्रतितथ्य ना होखल**: मिलान कइल तुलना-समूह बिना सुधार औसत में वापसी या कवनो बड़ रुझान हो सकेला, कार्यक्रम के असर ना — देखीं [counterfactual-analysis](../काउंटरफैक्चुअल-विश्लेषण/) आ [additionality-and-deadweight](../अतिरिक्तता-आ-डेडवेट/)।
- **लेन-देन आ मूल्यांकन के लागत के कम आँकल**: PbR/SIB योजनन खातिर स्वतंत्र सत्यापन, डेटा जोड़ल, आ ठेका के प्रशासन के खरचा नियमित रूप से ठेका-मूल्य के दहाई प्रतिशत में चल जाला — GO Lab के सबूत-आधार एकरा के योजना बंद होखे के बार-बार आवे वाला कारन के रूप में दर्ज करेला।
- **चुन-चुन के लेवल या "पार्क" कर दिहल**: प्रति परिणाम भुगतान पाए वाला प्रदाता के सीधा प्रोत्साहन होला कि ऊ ओह ग्राहकन के प्राथमिकता देवो जे वैसहूँ सफल होखतें आ सबसे कठिन मामिला के पीछे कर दीहें — एकरा के काटे खातिर भुगतान-स्तर या मामिला-मिश्रण समायोजन डिजाइन करीं।

## स्रोत

- Government Outcomes Lab, University of Oxford, Blavatnik School of Government.
  <https://golab.bsg.ox.ac.uk/>
- Social Finance, "Peterborough Social Impact Bond" evaluation summaries.
  <https://golab.bsg.ox.ac.uk/case-studies/peterborough-social-impact-bond/>
- Ministry of Justice, "Peterborough Social Impact Bond HMP Doncaster: Final Reconviction Results
  for the Peterborough Social Impact Bond."
