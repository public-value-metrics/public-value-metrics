# सरकार एक व्यासपीठ म्हणून (Government as a Platform)

सरकार एक व्यासपीठ म्हणून (Government as a Platform, GaaP) ही अशी रणनीती आहे ज्यात सामायिक, पुन्हा वापरता येणारे घटक — सूचना सेवा, देयक सेवा, ओळख सेवा — एकदाच, केंद्रीय पातळीवर बनवले जातात, जेणेकरून शेकडो वैयक्तिक सरकारी सेवा प्रत्येकी स्वतःचे बनवण्याऐवजी ते वापरतात. ही रणनीती सार्वजनिक डिजिटल पायाभूत सुविधांना व्यासपीठ-अर्थशास्त्राची समस्या म्हणून पुन्हा मांडते: मूल्य कोणत्याही एका एकात्मीकरणात नसते, ते *पुढच्या* चमूने ते स्वीकारण्याचा सीमांत खर्च शून्याकडे जाण्यात असते.

## हे का महत्त्वाचे आहे

GDS ने ही रणनीती आपल्या 2015 च्या "Government as a Platform" प्रकाशनात औपचारिकपणे मांडली, आणि असा युक्तिवाद केला की सरकार तीच क्षमता — देयक स्वीकारणे, वापरकर्त्यांना सूचना देणे, ओळख पडताळणी, पत्ता शोध — सेवेमागून सेवेत स्वतंत्रपणे बनवत होते, आणि प्रत्येकाच्या स्वतःच्या खरेदी, सुरक्षा मूल्यांकन आणि सततच्या सहाय्याचा भार होता. पर्याय म्हणजे थोडी सामायिक व्यासपीठे, जी एकदा उच्च दर्जाने बनवली जातात आणि सर्वत्र पुन्हा वापरली जातात: ईमेल, मजकूर संदेश आणि पत्रे पाठवण्यासाठी GOV.UK Notify, ऑनलाइन देयके घेण्यासाठी GOV.UK Pay, आणि ओळख पडताळणीसाठी GOV.UK One Login (पूर्वीच्या GOV.UK Verify ओळख कार्यक्रमाचा उत्तराधिकारी). या व्यासपीठांनी गाठलेला व्याप ही रणनीती यशस्वी झाल्याचा सर्वात स्पष्ट पुरावा आहे: GOV.UK Pay ने सुमारे 1,800 वैयक्तिक सेवांमध्ये £10 अब्जांपेक्षा जास्त व्यवहार प्रक्रिया केले आहेत — आणि पहिले £1 अब्ज प्रक्रिया करण्यास सुमारे चार वर्षे लागली, तेथे आता तेवढे सुमारे पाच महिन्यांत प्रक्रिया होतात — तर GOV.UK Notify ने 1,500 पेक्षा जास्त सरकारी संस्थांच्या वतीने 9 अब्जांपेक्षा जास्त संदेश पाठवले आहेत. ते स्वीकारणाऱ्या प्रत्येक सेवेने स्वतःचे देयक गेटवे किंवा संदेश पाइपलाइन बनवणे, सुरक्षित करणे आणि सांभाळणे टाळले.

## गणित

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

## सोडवलेले उदाहरण

**देयक गेटवे स्वतः बनवण्याऐवजी GOV.UK Pay स्वीकारणारे स्थानिक प्राधिकरण**:

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

हे £73,000 आता GOV.UK Pay वापरणाऱ्या सुमारे 1,800 सेवांवर गुणले, तर संपूर्ण सरकारातील टाळलेला निर्मिती-खर्च शेकडो दशलक्षांमध्ये जातो — रणनीतीचे मूल्य प्रत्यक्षात कोणत्याही एका एकात्मीकरणात नव्हे तर व्यासपीठ-अर्थशास्त्रात आहे.

## सॉफ्टवेअर अभियांत्रिकीशी संबंध

सरकार एक व्यासपीठ म्हणून हा [सरकारमधील बनवा की खरेदी करा](../सरकारमध्ये-स्वतः-बनवावे-की-विकत-घ्यावे/) साठी थेट युक्तिवाद आहे: जेव्हा सामायिक, मूल्यांकित, उत्तम चालणारा घटक अस्तित्वात असतो, तेव्हा त्याचे स्वतंत्र समतुल्य बनवणे क्वचितच अधिक चांगली [पैशाचे मूल्य](../पैशाचे-मूल्य/) निवड असते, आणि ते जवळजवळ व्याख्येनुसारच [डिजिटल सेवा मानक](../डिजिटल-सेवा-मानक/) मुद्दा 13 ("खुली मानके, सामायिक घटक आणि नमुने वापरा व त्यात योगदान द्या") मध्ये अनुत्तीर्ण ठरते. ते [सरकारी आयटीमधील एकूण मालकी खर्च](../सरकारी-it-मधील-मालकीची-एकूण-किंमत/) चा आकारही बदलते: व्यासपीठ स्वीकारल्याने मोठी भांडवली आणि देखभालीची रेषा लहान, वापराशी जोडलेल्या कार्यचालन खर्चाशी बदलली जाते, जो अंदाजणे सोपे असते आणि सेवा बंद केल्यास निधी काढणेही सोपे असते. घटकांच्या खुल्या पुनर्वापराचे चुलत भावंड [खुल्या डेटाचे मूल्य](../खुल्या-डेटाचे-मूल्य/) आहे — सरकार एकदा निर्माण करते ते विभागीय मालमत्ता न मानता सामायिक पायाभूत सुविधा म्हणून हाताळण्याच्या दोन्ही रणनीती आहेत.

## सामान्य चुका

- **छुपे पुनर्निर्माण**: व्यासपीठाची सुरुवात-प्रक्रिया स्वतः करण्यापेक्षा संथ असल्यामुळे चमू मूकपणे स्वतःचे देयक किंवा सूचना एकात्मीकरण बनवतात — हे प्रशासकीय घर्षणाचे प्रश्न आहे, तंत्रज्ञानाचे नव्हे, आणि संपूर्ण रणनीती ज्यावर अवलंबून आहे त्या पुनर्वापराच्या अर्थशास्त्राला ते मूकपणे खचवते.
- **व्यासपीठ चमूला त्याच्या निर्मित मूल्याच्या तुलनेत कमी निधी देणे**: मूल्य वापरणाऱ्या विभागांकडे जमा होते तर खर्च व्यासपीठ चमूकडे राहतो, ज्यामुळे निधी केंद्रीकृत आणि संरक्षित नसल्यास दीर्घकालीन कमी-गुंतवणुकीचा धोका निर्माण होतो — सामायिक संसाधनांच्या शोकांतिकेचेच (tragedy of the commons) एक रूप.
- **व्यासपीठाचे यश केवळ वापरावरून मोजणे**: स्वीकार संख्या (सामील झालेल्या सेवा, पाठवलेले संदेश) ही आघाडीचा निर्देशक आहे, मूल्याचा पुरावा नव्हे; खरी कसोटी वरील टाळलेला निर्मिती-खर्च आणि टाळलेली जोखीम यांचे गणित आहे.
- **"व्यासपीठ" आणि "एकसंध मोठी रचना (monolith)" यांना समानार्थी मानणे**: GaaP घटक यशस्वी होतात कारण प्रत्येक एकच गोष्ट अरुंद, स्थिर इंटरफेससह उत्तम करतो — असंबंधित क्षमता एका "व्यासपीठात" एकत्र केल्याने स्वतंत्र-निर्मितीची समस्या वेगळ्या प्रमाणावर पुन्हा निर्माण होते.

## स्रोत

- Government Digital Service, Government as a Platform. <https://www.gov.uk/government/publications/government-as-a-platform>
- GOV.UK Notify. <https://www.notifications.service.gov.uk/>
- Government Digital Service blog, "GOV.UK Pay at 10: how it started and how it's going". <https://gds.blog.gov.uk/2026/09/02/gov-uk-pay-at-10-how-it-started-and-how-its-going/>
