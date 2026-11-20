# Ma'aunin Talauci Mai Fuskoki Da Dama na Ingila (IMD)

IMD shi ne ma'aunin hukuma na talauci na dangi ga ƙananan yankuna a Ingila, yana jera kowane ɗaya daga cikin Lower-layer Super Output Areas (LSOAs) 32,844 na ƙasar (kowanne yana da kusan mazauna 1,500) daga 1 (mafi talauci) zuwa 32,844 (mafi ƙarancin talauci). Ma'aikatar da yanzu ake kira Ministry of Housing, Communities and Local Government (MHCLG, a da MHCLG/DCLG) ce ke wallafa shi, na baya-bayan nan a matsayin English Indices of Deprivation 2019, kuma yana tura kuɗin gwamnatin tsakiya, fifikon lafiyar jama'a, da cancanta ga dubban tsare-tsare na gida kai tsaye.

## Dalilin da ya sa yake da muhimmanci

Talauci ba abu ɗaya ba ne — unguwa na iya zama talaka a kuɗin shiga amma lafiya, ko kuma isasshen kuɗin shiga amma tana shan wahala daga sakamakon lafiya mara kyau da gidaje marasa kyau. Ma'aunan da suka riga IMD (tun daga alamomin talauci na Department of the Environment na shekarun 1970) sun haɓaka zuwa tsarin fannoni bakwai na yau daidai saboda zaɓar masu amfana da alama ɗaya kawai (misali adadin rashin aikin yi shi kaɗai) akai-akai yana rasa yankunan da ke da talauci ta wasu hanyoyi. IMD 2019 yana haɗa kuɗin shiga, aikin yi, ilimi, lafiya, laifi, cikas ga gidaje da hidimomi, da muhallin rayuwa zuwa mataki ɗaya na haɗaka ga kowane LSOA, kowane fanni an gina shi daga tarin alamominsa kuma an auna shi bisa hanyar MHCLG. Saboda yana aiki a matakin ƙaramin yanki (LSOA) maimakon matakin ƙaramar hukuma, yana bayyana aljihun talauci da aka ɓoye a cikin gundumomi masu wadata — dalilin da ya sa IMD, ba matsakaicin kuɗin shigar ƙaramar hukuma ba, shi ne abin da NHS England, kuɗin ƙarin ɗalibi na Department for Education, da dubban dabarun kuɗin ƙananan hukumomi ke dogara da shi a zahiri. Manhajar da ke ƙayyade cancanta, ke fifita isa ga mutane, ko ke ruwaito tasiri bisa yanki a Ingila ya kamata ta ɗauki decile ko mataki na IMD a matsayin abin shigarwa na farko, ba tunanin bayan lamari ba — kuma inda shiri da gangan yake nufin yankunan da suka fi talauci, ya kamata kimantawarsa ta yi amfani da [auna rabon fa'ida bisa matsayin mutane](../auna-rabon-faida-bisa-matsayin-mutane/) daidai da wannan zaɓi, maimakon ƙimanta fam ɗaya na fa'ida iri ɗaya ko'ina da ya sauka.

## Lissafi

```
7 domains, weighted:
  Income                              22.5%
  Employment                          22.5%
  Education, Skills and Training      13.5%
  Health Deprivation and Disability   13.5%
  Crime                                9.3%
  Barriers to Housing and Services     9.3%
  Living Environment                   9.3%

Each domain score: indicators standardized (ranked, then transformed
towards a normal distribution) and combined by exponential transformation
so that high deprivation on any one indicator cannot be fully cancelled
out by low deprivation on others within that domain.

IMD composite score (LSOA) = Σ (domain score × domain weight)
Rank LSOAs by composite score → 1 (most deprived) to 32,844 (least deprived)
Deciles: rank ÷ 3,284 (approx.), decile 1 = most deprived 10% of LSOAs
```

## Misali aiki

**Maki na haɗaka na LSOA**, ta amfani da makin fannoni na misali da aka daidaita (0 = babu alamar talauci, mafi girma = mafi talauci):

```
Income               0.35 × 0.225 = 0.07875
Employment           0.30 × 0.225 = 0.06750
Education            0.20 × 0.135 = 0.02700
Health               0.15 × 0.135 = 0.02025
Crime                0.10 × 0.093 = 0.00930
Barriers to Housing  0.05 × 0.093 = 0.00465
Living Environment   0.08 × 0.093 = 0.00744

Composite score = 0.07875 + 0.06750 + 0.02700 + 0.02025
                + 0.00930 + 0.00465 + 0.00744  = 0.21489
```

Sannan ana jera wannan maki na haɗaka da makin dukan LSOAs 32,844. Idan ya sanya LSOA a mataki na 2,950, yana faɗa cikin decile 1 (2,950 ÷ 3,284 ≈ 0.9, wato cikin mafi talaucin kashi 10% na unguwanni a Ingila) — wanda ga dabarun kuɗi da yawa shi ne ƙofar da ke buɗe cancanta, ko ta yaya matsakaicin ƙaramar hukumar da ke kewaye ke samun maki.

## Alaƙa da injiniyancin manhaja

- Duk wata hidima da ke tantance wurin masu amfani zuwa lambar gidan waya ko LSOA za ta iya haɗa teburin neman IMD da aka wallafa (CSV kyauta, mai sigar, daga MHCLG) don ƙara decile na talauci a matsayin canji mai taimako — don zaɓar isa ga mutane, fifita yawan shari'a, ko ruwaito sakamako bisa rukunin talauci ba tare da tattara sabbin bayanan sirri ba.
- Decile na IMD daidaitaccen duba adalci ne na hidimomin dijital na jama'a: giciya-giciya na karɓar hidima, faɗuwa, ko gamsuwa bisa decile na IMD yana bayyana gibin samun dama da jimillar ma'auni ke ɓoyewa — duba [haɗa kowa cikin dijital](../haɗa-kowa-da-dijital/) da [ma'aunin gamsuwar 'yan ƙasa](../maaunin-gamsuwar-ɗan-ƙasa/).
- Saboda matakin IMD na dangi ne (koyaushe yana jimillar tsayayyun matakai a faɗin Ingila), ba zai iya nuna ko talauci a ƙasa yana ƙaruwa ko raguwa a tsawon lokaci ba — kawai wane yanki ne yake a ina dangane da juna a wannan bugu; kada ka gina allon yanayin cikakkiyar ƙima a kan ɗanyen matakin IMD kaɗai.

## Tarkuna

- **Kwatanta matakan IMD tsakanin bugu (2015 da 2019) a matsayin yanayin lokaci** — alamomin da ke ƙarƙashi, yankuna, da hanya duka suna canzawa tsakanin bugu; MHCLG a bayyane yana shawartar kada a yi amfani da sauyin mataki a matsayin shaidar cewa yanki ya ƙara ko rage talauci.
- **Amfani da IMD na matakin LSOA ga mutane** — LSOA a decile 1 har yanzu yana ƙunshe da gidaje marasa talauci, kuma LSOA a decile 10 har yanzu yana ƙunshe da masu talauci; IMD yana bayyana yankuna, ba mutane ba, kuma amfani da shi a matsayin wakilin cancantar mutum yana kuskuren rarraba a bangarori biyu.
- **Watsi da cikakken bayanin matakin fanni don neman matakin haɗaka** — LSOAs biyu masu maki na haɗaka iri ɗaya na iya samun bayanan fannoni daban gabaɗaya (ɗaya mai talaucin lafiya, ɗaya mai talaucin laifi); tsarin da aka nufa ga matsala ɗaya ya kamata ya yi amfani da makin fannin da ya dace, ba haɗakar gauraye ba.

## Majiyoyi

- Ministry of Housing, Communities and Local Government. "English Indices of Deprivation 2019."
  <https://www.gov.uk/government/statistics/english-indices-of-deprivation-2019>
- MHCLG. "The English Indices of Deprivation 2019: Technical Report."
