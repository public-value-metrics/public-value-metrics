# ప్రభుత్వ రంగ సైబర్ భద్రత విలువ

ప్రభుత్వ రంగ సైబర్ భద్రత విలువ (public sector cybersecurity value) అంటే ప్రమాద తగ్గింపుకు ధర కట్టే క్రమశిక్షణ: పౌరుల డేటా ఉల్లంఘన సంభావ్యతను తగ్గించడం ఎంత విలువైనది? భద్రతా వ్యయం పనిచేసినప్పుడు కనిపించే ఉత్పాదన ఏదీ ఇవ్వదు, విఫలమైనప్పుడు చాలా కనిపించేది ఇస్తుంది. ప్రయోజన రికార్డులు, ఆరోగ్య డేటా లేదా పన్ను రికార్డులు ఉన్న సేవకు, ఈ "పనిచేస్తున్నప్పుడు కనిపించకపోవడం" లక్షణమే కేవలం నిబంధనల టిక్ కాకుండా స్పష్టమైన విలువ వాదన ఎందుకు కావాలో చెబుతుంది.

## ఇది ఎందుకు ముఖ్యం

UK National Cyber Security Centre Cyber Assessment Framework (CAF), భద్రతను చెక్‌లిస్టుగా కాకుండా మదింపు చేయగల, ఫలిత ఆధారిత క్రమశిక్షణగా మార్చడానికి ప్రభుత్వ రంగ సంస్థలకు నిర్మాణాత్మక మార్గాన్ని ఇస్తుంది. ఇది నాలుగు ఉన్నత స్థాయి లక్ష్యాలను (భద్రతా ప్రమాద నిర్వహణ, సైబర్ దాడి నుంచి రక్షణ, సైబర్ భద్రతా సంఘటనల గుర్తింపు, సంఘటనల ప్రభావ కనిష్ఠీకరణ) నిర్వచిస్తుంది. వ్యవస్థ యజమాని మదింపు చేయబడగల సహకార ఫలితాలుగా వాటిని విభజిస్తుంది. ఇది [డిజిటల్ సర్వీస్ స్టాండర్డ్](../డిజిటల్-సర్వీస్-స్టాండర్డ్/) పాయింట్ 9 ("వినియోగదారుల గోప్యతను కాపాడే సురక్షిత సేవను సృష్టించండి") స్ఫూర్తికి సరిపోతుంది. CAF మదింపు రక్షించే వాటికి నమోదైన ధర ఉంది: IBM Cost of a Data Breach Report రంగాల వారీగా సగటు ఉల్లంఘన వ్యయాన్ని ట్రాక్ చేస్తుంది. ఆర్థిక లేదా ఆరోగ్య రంగాలతో పోలిస్తే ప్రభుత్వ రంగం స్థిరంగా పరిధి దిగువ భాగంలో ఉందని అది కనుగొంది. ఇటీవలి ఎడిషన్లు ప్రభుత్వ రంగ సగటును ఒక్కో ఉల్లంఘనకు సుమారు $2.6–2.9 మిలియన్లుగా ఉంచాయి. కానీ "ఆర్థిక రంగం కంటే తక్కువ" అంటే "తక్కువ" అని కాదు. ప్రభుత్వ ఉల్లంఘనలకు నివేదిక సంఖ్యలు పూర్తిగా పట్టుకోని వ్యయాలు ఉంటాయి: డిజిటల్ మార్గాల్లో పౌరుల నమ్మకం కోల్పోవడం, ఇది ఛానెల్-మార్పు వ్యాపార కేసులు ఆధారపడే [డిజిటల్ వినియోగాన్ని](../ఛానల్-మార్పు-ఆదాలు/) తగ్గిస్తుంది, అలాగే ప్రభుత్వం పౌరులను బలవంతంగా ఇవ్వమన్న డేటాను బహిర్గతం చేయడంలోని రాజకీయ, చట్టపరమైన వ్యయం.

## గణితం

భద్రతా పెట్టుబడికి ఏ ప్రమాద-తగ్గింపు వ్యయానికైనా వేసినట్లే విలువ కడతారు: ప్రామాణిక ప్రమాద-నిర్వహణ సమీకరణాన్ని ఉపయోగించి, ఆశించిన నష్టం తగ్గింపుగా.

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

## ఉదాహరణ సహిత పరిష్కారం

**40,000 మంది నివాసితుల సామాజిక సంరక్షణ రికార్డులు ఉన్న కౌంటీ కౌన్సిల్ కేస్-మేనేజ్‌మెంట్ వ్యవస్థ**:

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

## సాఫ్ట్‌వేర్ ఇంజనీరింగ్‌తో సంబంధం

ALE సమీకరణంలోని చాలా లివర్లు ఇంజనీర్ల చేతుల్లోనే ఉంటాయి: యాక్సెస్ నియంత్రణ రూపకల్పన, డిపెండెన్సీ, ప్యాచ్ పరిశుభ్రత, లాగింగ్, గుర్తింపు కవరేజ్, సంఘటన ప్రతిస్పందన సాధనాలు ARO పదాన్ని నేరుగా కదిలిస్తాయి. అందుకే CAF మదింపు విధాన ఆడిట్ లాగే సాంకేతిక ఆర్కిటెక్చర్ సమీక్షలా చదివిస్తుంది. ఇది [ప్రజా విలువ క్షీణతగా సాంకేతిక రుణం](../ప్రజా-విలువ-క్షీణతగా-సాంకేతిక-రుణం/) అత్యంత తీవ్రరూపంలో: ప్యాచ్ చేయని, పర్యవేక్షించని, యాక్సెస్ నియంత్రణ సరిగా లేని వ్యవస్థలు అంటే వడ్డీ చెల్లింపు స్థిరమైన భారం కాకుండా టెయిల్ రిస్క్ అయిన రుణం. భద్రతా వ్యయాన్ని వ్యవస్థ అసలు నిర్వహణ వ్యయం నుంచి వేరుగా చూడకుండా [ప్రభుత్వ ITలో మొత్తం యాజమాన్య వ్యయం](../ప్రభుత్వ-it-లో-మొత్తం-యాజమాన్య-వ్యయం/)తో సరిచూడాలి. Green Book కింద [ఖర్చుకు తగిన విలువ](../డబ్బుకు-తగిన-విలువ/) మదింపులకు ఇది నేరుగా ఇన్‌పుట్ కూడా: ప్రమాదం-సర్దుబాటు వ్యయం ఏ ఎంపికల మదింపులోనైనా "వ్యయం" వైపు భాగం, చివరిలో తగిలించే తదుపరి ఆలోచన కాదు.

## సాధారణ లోపాలు

- **CAF స్వీయ-మదింపును భద్రతగానే చూడటం**: పూర్తి చేసిన మదింపు ఒక భద్రతా స్థితిని వివరిస్తుంది; దాన్ని సృష్టించదు. విలువ పత్రంలో కాదు, సాధించిన ఫలితాల్లో ఉంది.
- **ప్రపంచ సగటు ఉల్లంఘన వ్యయాలను సర్దుబాటు లేకుండా స్థానిక అంచనాగా వాడటం**: IBM సంఖ్యలు పెద్ద, వైవిధ్యభరిత నమూనాల సగటులు. చిన్న స్థానిక అధికార సంస్థ వాస్తవిక Single Loss Expectancy, జాతీయ ప్రభుత్వ విభాగం దానితో అరుదుగా ఒకటే.
- **పెట్టుబడి నిర్ణయాల్లో టెయిల్-రిస్క్ మనస్తత్వాన్ని విస్మరించడం**: తక్కువ వార్షిక సంభావ్యత భద్రతా వ్యయాన్ని నిరవధికంగా వాయిదా వేయడాన్ని సులభం చేస్తుంది, ఉల్లంఘన జరిగే సంవత్సరం వచ్చే వరకు. ఉదాహరణలోలా ALE లెక్కను AROల శ్రేణికి వ్యతిరేకంగా సున్నితత్వ పరీక్ష చేయడం దీన్ని ఎదుర్కొంటుంది.
- **IBM తరహా ఉల్లంఘన వ్యయాన్ని మాత్రమే లెక్కించి, నమ్మక వ్యయాన్ని వదిలేయడం**: డిజిటల్ మార్గాలు వాడటానికి పౌరుల సుముఖతను తగ్గించే ఉల్లంఘన, [ఛానెల్-మార్పు పొదుపుల](../ఛానల్-మార్పు-ఆదాలు/) కేసును ఏళ్ల తరబడి దెబ్బతీస్తుంది. ఉల్లంఘన-వ్యయ అంచనాల్లో ఈ వ్యయం అరుదుగా చేర్చబడుతుంది.

## ఆధారాలు

- National Cyber Security Centre, Cyber Assessment Framework. <https://www.ncsc.gov.uk/collection/caf>
- IBM, Cost of a Data Breach Report. <https://www.ibm.com/reports/data-breach>
- GOV.UK Service Manual, service standard, point 9: create a secure service which protects users' privacy. <https://www.gov.uk/service-manual/service-standard/point-9-create-a-secure-service>
