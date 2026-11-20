# Ƙididdige Ƙima Ta Fifikon da Aka Bayyana a Aikace (Revealed Preference Valuation)

Hanyoyin fifikon da aka bayyana a aikace (revealed preference) suna fahimtar ƙimar kayan da ba na kasuwa ba daga halayen da ake iya gani a kasuwa mai alaƙa, maimakon tambayar mutane kai tsaye. Ƙididdige farashi ta halaye (hedonic pricing) da hanyar kuɗin tafiya (travel-cost method) fasahohi biyu ne masu aiki sosai: duka biyu suna farawa daga ainihin mu'amala kuma suna fitar da farashi na ɓoye na abin da ba a taɓa sayar da shi kai tsaye ba.

## Dalilin da ya sa yake da muhimmanci

Inda hanyoyin [fifikon da aka faɗa (stated preference)](../ƙimantawa-ta-fifikon-da-aka-bayyana/) ke yin tambayar zato, hanyoyin fifikon da aka bayyana a aikace suna lura da abin da mutane suka biya da gaske, wanda Green Book ke ɗauka gabaɗaya a matsayin shaida mafi aminci, idan duk sauran abubuwa daidai suke, domin ba ya fuskantar ɓatar da zato — masu amsa a binciken farashin gidaje na hedonic sun biya ainihin ƙarin ko rangwamen da ake aunawa (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>, Annex 2). Hedonic pricing yana rushe farashin kasuwa — yawanci farashin gidaje — zuwa farashi na ɓoye ga kowane hali na kayan, yana ba masu nazari damar raba, misali, ƙarin farashin da gidaje ke biya da gaske don zama wuri mafi natsuwa ko mai ingantacciyar iska, tare da sarrafa a ƙididdiga kowane hali da ke shafar farashin gida (girma, wuri, yankin makaranta). Hanyar kuɗin tafiya tana yin irin wannan ga wuraren shakatawa marasa kuɗin shiga: lokaci da kuɗin da mutane ke kashewa wajen tafiya zuwa wuri yana bayyana ƙarancin abin da wurin ya cancanta a gare su, domin babu wanda ke kashe kuɗin da ya wuce ƙimar ziyarar a gare shi.

Hanyoyin biyu suna da iyakacin tsari ɗaya: suna iya ƙididdige abin da ke cikin mu'amalar kasuwa da ke wanzu kawai. Hayaniya kusa da titin jirgin sama tana bayyana a farashin gidaje domin mutanen da ke damuwa da hayaniya suna zuwa gidaje masu natsuwa; ƙimar wanzuwar wani nau'in halitta da babu wanda ke ziyarta ko zama kusa da shi ba ta bayyana a kowace mu'amala ba, kuma wannan ne daidai gibin da hanyoyin [fifikon da aka faɗa (stated preference)](../ƙimantawa-ta-fifikon-da-aka-bayyana/) suka wanzu don cikawa.

## Lissafi

```
Hedonic pricing:
  House price = f(structural attributes, location attributes,
                   environmental attribute of interest, ...)
  Estimate via regression; the coefficient on the environmental
  attribute (holding all else constant) is its implicit price.

  Implicit price of attribute X = ∂(House price) / ∂X

Travel-cost method:
  Visit rate (visits per capita from zone i) = f(travel cost from zone i,
                   substitute sites, socioeconomic controls)
  Estimate a demand curve for visits as a function of travel cost.
  Consumer surplus = area under the estimated demand curve
                    = value of the site to visitors
```

Hanyoyin biyu suna buƙatar saitin sarrafawa mai ƙarfi a ƙididdiga — barin hali mai rikitarwa (hedonic) ko wurin maye na kusa (kuɗin tafiya) yana karkatar da farashin ɓoye ta hanyar da ba koyaushe a bayyana a gaba ba, shi ya sa Green Book Annex 2 ke buƙatar a bayar da rahoton tsarin regression da sarrafawa, ba kawai ma'aunin kanun labarai ba.

## Misali aiki

**Gwamnatin ƙasa**: hanyar farashin inuwa na carbon ta Green Book kanta tana dogara a wani ɓangare da shaidar hedonic, amma wani misali mai sauƙi shi ne hayaniyar jirgin sama. Binciken hedonic da ke yin regression na farashin sayar da gidaje a yankin hanyar jirgi a kan fallasa hayaniya da aka auna da nisa, tare da sarrafa girma, shekaru, da yankin makaranta, ya gano cewa kowane ƙarin decibel 1 na matsakaicin fallasa hayaniya yana da alaƙa da raguwar farashin gida 0.5%. Ga gida na yau da kullun £280,000 a yankin da abin ya shafa:

```
Implicit price per decibel = £280,000 × 0.5% = £1,400 per household
Households affected by a 3dB increase from a new runway = 18,000
Aggregate implied cost of the noise increase = £1,400 × 3 × 18,000 = £75.6m
```

Wannan kuɗi ne na sau ɗaya da aka tara (wanda ke cikin farashin gida), wanda dole ne kimantawa ta yi hankali kada ta ƙirga sau biyu a gaban kuɗin damuwar hayaniya na shekara da aka ƙiyasta dabam.

**Ƙungiyar agaji**: ƙungiyar muhalli tana amfani da hanyar kuɗin tafiya don ƙididdige wurin ajiyar yanayi mara kuɗin shiga. Bayanan bincike kan lambobin wasiƙa na baƙi suna ba da matsakaicin kuɗin tafiya tafi-da-dawo (lokaci da aka ƙididdige a ƙimar lokacin ba aiki da Green Book ya ba da shawara, tare da mai) na £14 ga kowace ziyara, tare da ziyara 40,000 a shekara. Lanƙwasar buƙata da aka ƙiyasta — yawan ziyara na raguwa yayin da kuɗin tafiya daga wani yanki ke ƙaruwa — tana nuna ribar mabukaci ga kowace ziyara, sama da £14 da aka kashe da gaske, na kusan £9.

```
Total annual value = 40,000 visits × (£14 spent + £9 consumer surplus)
                    = 40,000 × £23 ≈ £920,000/year
```

Wannan ya fi kuɗin shiga na sifili na wurin ajiyar girma kuma yana ba amintattun ƙungiyar agaji adadi mai kariya na ƙimar shakatawa na wurin lokacin da suke gabatar da hujja ga masu ba da kuɗi.

## Alaƙa da injiniyancin manhaja

Tunanin fifikon da aka bayyana a aikace yana bayyana a nazarin samfurin ɓangaren jama'a fiye da yadda ma'aikata ke tsammani: bayanan amfani daga hidimar dijital ta gwamnati kyauta shaida ce ta fifikon da aka bayyana a aikace ta ƙima (yawan amfani, tsawon zama, kuma — mafi bayyanawa — tsarin amfani akai-akai a gaban na sau ɗaya za a iya nazarin su kamar yadda samfurin kuɗin tafiya ke ɗaukar yawan ziyara a gaban nisa). Inda hidima ke da maye na gaske (hanyar takarda, layin waya), "kuɗin" da 'yan ƙasa ke ɗauka don amfani da hanyar dijital maimakon (lokaci, bayanai, na'ura) za a iya ƙiyasta shi da kwatanta da amfani, yana maimaita dabarar kuɗin tafiya kai tsaye. Duba [ma'aunin hidimar dijital (digital service standard)](../maaunin-hidimar-dijital/) da [ƙimar buɗaɗɗen bayanai (open data value)](../ƙimar-buɗaɗɗen-bayanai/), wanda ke fuskantar daidai wannan matsalar ƙididdige ƙima ga kayan da babu farashin kasuwa kai tsaye.

## Tarkuna

- **Karkatar da canjin da aka bari a samfuran hedonic.** Barin hali mai alaƙa (ingancin makaranta da ke da alaƙa da farashin gida da canjin muhalli da ake nema duka) yana karkatar da ƙiyasin farashin ɓoye; dole a bayar da rahoton tsari kuma a bincika shi, ba kawai sakamakon ba.
- **Watsi da wuraren maye a nazarin kuɗin tafiya.** Ƙimar da baƙo ya bayyana ga wuri ana rage ta idan maye na kusa yana wanzu kuma ba a sarrafa shi ba — yana iya ziyarta saboda kyauta ne, ba don yana da daraja ta musamman ba.
- **Amfani da fifikon da aka bayyana a aikace ga kayan da ba su da amsar kasuwa kwata-kwata.** Ƙimar wanzuwa, ƙimar zaɓi, da ƙimar gado ba sa bayyana a kowace mu'amala kuma ba za a iya dawo da su ta hanyoyin hedonic ko kuɗin tafiya ba — wannan gibi na [ƙididdige ƙima ta fifikon da aka faɗa (stated preference valuation)](../ƙimantawa-ta-fifikon-da-aka-bayyana/) ne.
- **Rikita ƙimar da aka tara (ta sau ɗaya) da kwararar shekara.** Tasirin farashin gida na hedonic yawanci ƙimar da aka tara ce ta sau ɗaya; ɗaukar su a matsayin kwararar alfanu ta shekara yana kumbura kimantawa.

## Majiyoyi

- HM Treasury. "The Green Book," Annex 2: valuing non-market impacts.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Department for Transport / Civil Aviation Authority. Aircraft noise valuation studies used in
  airport appraisal. <https://www.gov.uk/guidance/aviation-noise>
- Rosen S. "Hedonic Prices and Implicit Markets: Product Differentiation in Pure Competition."
  Journal of Political Economy, 1974.
- Clawson M, Knetsch JL. "Economics of Outdoor Recreation." Johns Hopkins University Press, 1966
  (origin of the travel-cost method).
