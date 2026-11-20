# Nazarin Counterfactual (Yanayin Rashin Shiga Tsakani)

Counterfactual ƙiyasi ne na abin da zai faru in da babu shiga tsakani. Ba tare da shi ba, canjin da aka lura bayan ƙaddamar da shiri ba za a iya bambanta shi da canjin da zai faru ko ta yaya ba — babu counterfactual, babu shaidar tasiri, ko da yaya lambobin kafin-da-bayan suka yi burgewa. Magenta Book na HM Treasury yana ɗaukar gina ingantaccen counterfactual a matsayin babban aikin hanyar tantance tasiri, wanda ya fi muhimmanci fiye da kowane zaɓin ƙira guda ɗaya.

## Dalilin da ya sa yake da muhimmanci

"Laifuka sun ragu 15% a shekarar da ta biyo bayan gabatar da shirin" ba shaida ba ne cewa shirin ya yi aiki sai dai idan an san abin da zai faru ga laifuka ba tare da shi ba — laifuka za su iya raguwa 20% ko ta yaya saboda yanayin tattalin arziki ko yawan jama'a da ba su da alaƙa, ma'ana shirin ya ƙara muni a zahiri idan aka kwatanta da counterfactual, duk da lambar ɗanyar ta inganta. Wannan shi ne kuskuren bincike mafi yawa a iƙirarin tasirin fannin gwamnati da zamantakewa: ɗaukar kwatancen kafin/bayan a matsayin shaidar dalili. Magenta Book a fili yake cewa tantance tasiri yana wanzuwa don amsa tambayar counterfactual — "wane bambanci wannan shiga tsakani ya yi?" — kuma cewa amsa ta yana buƙatar ƙiyasta, ba kawai bayyana ba, duniyar da ba ta faru ba.

Hanyoyi daban-daban suna gina counterfactual da matakai daban-daban na kwarin gwiwa, kuma jagororin tantancewa na gwamnati suna jera su daidai da haka. Gwaje-gwajen da aka sarrafa bisa bazuwar (RCT), inda ake ba mutane ko yankuna damar karɓar shiga tsakani ko a'a bisa bazuwar, suna samar da mafi ƙarfin counterfactual domin bazuwar tana tabbatar da cewa ƙungiyar magani da ta sarrafawa sun bambanta, a matsakaici, kawai ta karɓar shiga tsakanin. Cabinet Office da What Works Network sun tallata RCT a duk manufofin jama'a na Birtaniya tun rahoton "Test, Learn, Adapt" na 2012 na Behavioural Insights Team, daidai saboda ƙananan ƙira suna da rauni ga rikitarwa (confounding) — bambancin da aka lura na iya nuna wanda ya zaɓi shiga, ba tasirin shirin ba. A inda bazuwar ba ta yiwuwa ko ba ta da da'a (kamar yadda yake sau da yawa ga shirye-shiryen da ke da haƙƙin doka, ko sauye-sauyen manufa na dukan jama'a), Magenta Book yana tsara tsarin matsayi a fili na madadin da suka fi rauni amma har yanzu masu amfani: ƙungiyoyin kwatantawa da aka daidaita, ƙirar difference-in-differences, regression discontinuity a kewayen iyakokin cancanta, kuma, a matsayin makoma ta ƙarshe, kwatancen kafin/bayan mai sauƙi — wanda aka sanya masa alama a fili a matsayin mafi raunin nau'in shaida, mai saurin rikita tasirin shirin da tasirin duk wani abu da ya canja a lokaci ɗaya.

## Lissafi

Tsarin counterfactual, wanda ya shafi duk hanyoyi:

```
Ƙiyasin tasiri = Sakamako(da shiga tsakani) − Sakamako(counterfactual: ba tare da shiga tsakani ba)

BA:
Ƙiyasin tasiri ≠ Sakamako(bayan) − Sakamako(kafin)   [yana rikita lokaci da magani]
```

Difference-in-differences, ɗaya daga cikin ƙirar quasi-experimental mafi yawa a tantancewar gwamnati, yana keɓe tasirin magani ta hanyar cire canjin kafin/bayan na ƙungiyar kwatantawa kanta:

```
Ƙiyasin DiD = [Sakamako(an yi wa magani, bayan) − Sakamako(an yi wa magani, kafin)]
            − [Sakamako(kwatantawa, bayan) − Sakamako(kwatantawa, kafin)]
```

Wannan yana cire duk wani yanayi na gama-gari ga ƙungiyoyin biyu (misali sauyin tattalin arziki na ƙasa da ya shafi kowa), yana barin canjin bambanci da za a iya danganta ga shiga tsakanin kawai.

## Misali aiki

**Shirin aiki, kafin/bayan (ƙira mai rauni)**: wani tsarin tallafin aiki ya ba da rahoton cewa aikin mahalarta ya tashi daga 40% zuwa 55% a cikin shekara — ƙarshen da ba a yi tunani sosai ba na "+maki 15 na kashi saboda shirin."

**Shirin ɗaya, difference-in-differences (ƙira mafi ƙarfi)**: ƙungiyar kwatantawa da aka daidaita ta makamantan waɗanda ba su shiga ba, daga kasuwar ƙwadago ta gida ɗaya, tana nuna aiki yana tashi daga 38% zuwa 47% a shekara ɗaya (farfaɗowar tattalin arzikin ƙasa tana gudana).

```
Canjin ƙungiyar magani:       55% − 40% = +maki 15 na kashi
Canjin ƙungiyar kwatantawa:   47% − 38% = +maki 9 na kashi

Ƙiyasin DiD (ainihin tasirin shirin) = 15 − 9 = +maki 6 na kashi
```

Ainihin tasirin da za a iya danganta shi shi ne maki 6 na kashi, ba 15 ba — fiye da rabin ingantuwar da ake gani ta kafin/bayan zai faru ko da babu shirin, wanda farfaɗowar tattalin arziki iri ɗaya ta tura ƙungiyar kwatantawa sama.

**Regression discontinuity, iyakar cancanta**: ana samun tsarin tallafi ga kasuwancin da ke da ma'aikata ƙasa da 50 kawai. Kwatanta sakamakon kasuwancin da ke ƙasa da iyaka kaɗan (ma'aikata 45–49, sun cancanta) da waɗanda ke sama da ita kaɗan (ma'aikata 50–54, ba su cancanta ba) yana ba da counterfactual mai ƙarfi domin kasuwancin da ke ɓangarorin biyu na iyakar gudanarwa ta son rai suna kama da juna a sauran lamura — iyakar, ba wata sifar kasuwanci ta ƙasa ba, ce ke ƙayyade cancanta. Bambancin sakamako na matsakaici £2,000 tsakanin ƙungiyoyin biyu, da aka lura a iyakar kawai, ana iya danganta shi ga tallafin da ƙarin kwarin gwiwa fiye da kwatancen mai sauƙi na duk masu cancanta da duk marasa cancanta (waɗanda suka bambanta bisa girma a tsari).

## Alaƙa da injiniyancin manhaja

Tunanin counterfactual ya kamata ya tsara yadda ake ƙirƙirar tsarin bin diddigin tasiri da bututun tantancewa na manhajar gwamnati da fannin zamantakewa:

- A gina kama ƙungiyar kwatantawa cikin tsarin tun farko — rubuta wanda ya cancanta amma ba a yi masa rajista ba, ko ƙungiyar mahalarta marasa shiga da aka daidaita — maimakon ƙara ta bayan shiri ya riga ya gudana kuma kafin/bayan kaɗai ne ake da su.
- A inda bazuwar ta yiwu (yaɗawa a matakai, hidimar dijital da aka kunna wa wasu masu amfani kafin wasu), a sanya kayan auna a tsarin don adana ba da bazuwar a matsayin filin da za a iya tambaya; yaɗawa a matakai yana lalata ƙimar tantancewarsa da kansa idan ba a rubuta tsarin aiki ba.
- Wannan ita ce hanyar tushe a bayan [hanyoyin tantance tasiri](../hanyoyin-kimanta-tasiri/) kuma ita ce ke raba shi da [tantance tasiri da tantance tsari](../kimanta-tasiri-da-kimanta-tsari/), na biyun yana tambaya ko an isar da shiri kamar yadda aka nufa ba ko ya haifar da tasiri ba.
- [Ƙarin tasiri da deadweight](../ƙarin-tasiri-da-deadweight/) da [displacement da attribution](../ƙauratarwa-da-danganta-tasiri/) duka, a tushe, tambayoyin counterfactual ne — deadweight shi ne "menene wannan takamaiman sakamako zai kasance ba tare da shiga tsakani ba", an yi amfani da shi a matakin gyara ba cikakken ƙirar tantancewa ba.

## Tarkuna

- **Ɗaukar kafin/bayan a matsayin shaidar dalili.** Wannan shi ne kuskuren da ya fi yawa kuma mafi tasiri a rahoton tasirin gwamnati da zamantakewa; canjin kafin/bayan yana rikita tasirin shirin da kowane abu da ya canja a lokaci ɗaya.
- **Amfani da ƙungiyar kwatantawa da ta bambanta a tsari da ƙungiyar magani.** Ƙungiyar kwatantawa da aka daidaita dole ta zama kamar gaske a halaye masu dacewa (duba matsayin hanyoyin a [nazarin counterfactual](../nazarin-counterfactual/) a Magenta Book); kwatanta mahalarta shirin (waɗanda suka zaɓi shiga, kuma galibi sun fi himma) da waɗanda ba su shiga ba yana haɗarin son zuciya na zaɓi (selection bias) da ke kama da tasirin shirin.
- **Lalata damar bazuwar ta ƙirar isarwa mara kyau.** Yaɗawa a matakai ko bazuwar yana adana ƙimar tantancewarsa ne kawai idan aiki ya zama bazuwar da gaske kuma an rubuta shi — barin manajojin gida su zaɓi wanda zai fara ya kayar da manufar.
- **Ƙara iƙirarin daidaito daga ƙira mai rauni.** Ya kamata a gabatar da ƙiyasin kafin/bayan a matsayin alama, ba girman tasiri da aka auna ba; matsayin shaida na Magenta Book yana wanzuwa don ƙarfin iƙirari ya dace da ƙarfin ƙirar da ta samar da shi.

## Majiyoyi

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020), and its
  supplementary guide on quasi-experimental methods.
  <https://www.gov.uk/government/publications/the-magenta-book>
- Cabinet Office / Behavioural Insights Team, "Test, Learn, Adapt: Developing Public Policy with
  Randomized Controlled Trials" (2012).
- What Works Network, standards of evidence guidance. <https://www.gov.uk/guidance/what-works-network>
- Angrist JD, Pischke J-S. *Mostly Harmless Econometrics: An Empiricist's Companion*. Princeton
  University Press, 2009 (standard reference for difference-in-differences and regression
  discontinuity methods).
