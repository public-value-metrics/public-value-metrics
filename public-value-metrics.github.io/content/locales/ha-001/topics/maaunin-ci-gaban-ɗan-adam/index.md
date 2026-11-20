# Ma'aunin Ci Gaban Ɗan Adam (HDI)

HDI shi ne babban madadin MDD ga jera ƙasashe bisa kuɗin shiga kaɗai: yana haɗa tsawon rayuwa, ilimi, da kuɗin shiga zuwa lamba ɗaya tsakanin 0 da 1, bisa hujjar — wadda masanin tattalin arziki Amartya Sen ya gabatar kuma Mahbub ul Haq ya haɓaka wa MDD — cewa ci gaba game da faɗaɗa abin da mutane za su iya yi da zama ne, ba kawai abin da suke samu ba. Ana wallafa shi kowace shekara a cikin Human Development Report na Shirin Ci Gaba na MDD (UNDP) tun 1990.

## Dalilin da ya sa yake da muhimmanci

Kafin HDI, ana auna "ci gaba" kusan gaba ɗaya da GNP ga kowane mutum, wanda ba ya faɗin ko ci gaba yana isa ga lafiyar ko ilimin talakawa. Tsarin iyawa (capability approach) na Sen ya sake fassara ci gaba a matsayin faɗaɗa 'yanci na gaske, kuma ul Haq ya mayar da hakan zuwa ma'auni da za a iya wallafawa wanda UNDP zai iya jera kowace ƙasa da shi, yana tilasta gwamnatocin da suka arzuta da kuɗin shiga kaɗai amma suka yi watsi da lafiya ko makaranta su fuskanci mataki mafi muni fiye da yadda GDPnsu ke nunawa (ƙasashen mai na Gulf da wasu tattalin arziki masu hakar albarkatu su ne misalan da aka saba). Tsarin sassa uku na HDI kuma shi ne kakan hanya kai tsaye na [Ma'aunin Talauci Mai Fuskoki Da Dama](../maaunin-talauci-mai-fuskoki-da-yawa/): duka suna ƙin barin fanni ɗaya ya sayi gazawar wani, ta amfani da matsakaicin geometric maimakon na lissafi. UNDP yana wallafa cikakkun bayanan fasaha da ainihin bayanan kowane bugu (<https://hdr.undp.org/data-center/human-development-index>), wanda shi ne madogarar da aka sani ga duk wanda ke ginawa a kan ma'aunin maimakon sake lissafa shi.

## Lissafi

```
Life Expectancy Index (LEI)     = (LE − 20) / (85 − 20)

Mean Years Schooling Index      = mean years of schooling / 15
Expected Years Schooling Index  = expected years of schooling / 18
Education Index (EI)            = (Mean Years Index + Expected Years Index) / 2

Income Index (II)               = (ln(GNI per capita) − ln(100)) / (ln(75000) − ln(100))

HDI = (LEI × EI × II) ^ (1/3)     [geometric mean of the three sub-indices]
```

Matsakaicin geometric da gangan ne: domin yana ninkawa maimakon ƙididdige matsakaici, maki mai girma sosai a fanni ɗaya ba zai iya rama maki mai ƙasa sosai a wani gabaɗaya ba — ƙira da UNDP ya karɓa a 2010 musamman don hukunta rashin daidaito, yana maye gurbin tsohuwar dabarar matsakaicin lissafi.

## Misali aiki

**Ƙasa mai matsakaicin kuɗin shiga**: tsawon rayuwa shekaru 72, matsakaicin shekarun karatu 8, shekarun karatu da ake tsammani 13, GNI ga kowane mutum $12,000.

```
LEI = (72 − 20) / (85 − 20)              = 52 / 65   = 0.800
MYSI = 8 / 15                                        = 0.533
EYSI = 13 / 18                                       = 0.722
EI = (0.533 + 0.722) / 2                             = 0.628
II = (ln(12000) − ln(100)) / (ln(75000) − ln(100))
   = (9.393 − 4.605) / (11.225 − 4.605)
   = 4.788 / 6.620                                   = 0.723

HDI = (0.800 × 0.628 × 0.723) ^ (1/3)
    = (0.363) ^ (1/3)                                ≈ 0.713
```

HDI na 0.713 yana cikin rukunin "babban ci gaban ɗan adam" na UNDP (0.700–0.799); "mai girma sosai" yana farawa a 0.800. Lura da yadda sakamakon yake da hankali ga mafi raunin ƙaramin ma'auni: idan matsakaicin shekarun karatu ya zama 4 maimakon 8 (MYSI = 0.267, EI = 0.494), HDI yana faɗuwa zuwa (0.800 × 0.494 × 0.723)^(1/3) ≈ 0.639 — yana saukowa rukuni gaba ɗaya — ko da babu wani abu da ya canza.

## Alaƙa da injiniyancin manhaja

- Tsarin matsakaicin geometric za a iya sake amfani da shi kai tsaye ga kowane maki na haɗaka na hidima ko samfur da ba ka son fanni ɗaya mai ƙarfi ya rufe wani mai rauni mai muhimmanci — misali haɗa makin samun dama, aiki, da tabbaci na hidimar dijital ta jama'a ta hanyar ninkawa maimakon matsakaicin da aka auna, domin hidima mai sauri amma ba ta samun dama ba za ta iya samun maki "mai kyau" ba.
- Juyawar log na kuɗin shiga na HDI (raguwar ƙimar ƙarshe ta ƙarin fam) iri ɗaya ce da dabarar [auna rabon fa'ida bisa matsayin mutane](../auna-rabon-faida-bisa-matsayin-mutane/) a kimantawa: ƙarin $1,000 yana da ma'ana fiye da yawa ga gidan talaka fiye da mawadaci, kuma ɗaukar duka biyu a layi yana kuskuren farashin tasiri.
- Duk wani allo da ke ruwaito maki ɗaya na haɗaka na "haɗa kowa cikin dijital" ko "sakamakon 'yan ƙasa" ya kamata ya rubuta dabarar tarawarsa a bayyane kamar yadda bayanan fasaha na UNDP suke yi — duba [KPI na gwamnati](../manyan-alamomin-aiki-na-ɓangaren-jamaa/) da [katin maki na ƙimar jama'a](../katin-kimanta-ƙimar-jamaa/).

## Tarkuna

- **Ƙididdige matsakaici maimakon amfani da matsakaicin geometric** — matsakaicin lissafi yana barin kuɗin shiga mai yawa ya rufe rashin lafiya ko ilimi gabaɗaya; ainihin manufar canjin hanya na 2010 ita ce dakatar da wannan musanyawa.
- **Kwatanta HDI shekara-da-shekara kamar GDP da aka daidaita da hauhawar farashi** — UNDP yana sake kafa ma'aunin lokaci-lokaci (sabbin iyakokin mafi ƙaranci/mafi girma, gyararrun iyakokin karatu), don haka canjin mataki na iya nuna sabunta hanya, ba ainihin sauyi ba; koyaushe ka duba daga wane bugun HDR lamba ta fito.
- **Ɗaukar HDI a matsayin ma'aunin talauci** — matsakaicin ƙasa ne kuma ba ya faɗin komai game da rabo a cikin ƙasa; don haka, yi amfani da [Ma'aunin Talauci Mai Fuskoki Da Dama](../maaunin-talauci-mai-fuskoki-da-yawa/) ko HDI mai daidaita rashin daidaito na UNDP dabam.

## Majiyoyi

- UNDP. "Human Development Index (HDI)" technical notes and data.
  <https://hdr.undp.org/data-center/human-development-index>
- UNDP. Human Development Report 1990 (the index's introduction).
- Sen A. "Development as Freedom." Oxford University Press, 1999.
