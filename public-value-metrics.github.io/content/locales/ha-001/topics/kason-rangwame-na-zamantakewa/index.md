# Kason Rangwame na Zamantakewa (Social Discount Rate)

Kason rangwame na zamantakewa yana mayar da kuɗi da amfanin nan gaba zuwa ƙimar yau domin a iya kwatanta shirye-shiryen da amfaninsu ya bazu cikin shekaru da dama a kan tushe ɗaya. Green Book ta HM Treasury ta tilasta jadawali mai raguwa wanda ya fara daga 3.5% na shekaru 30 na farko, bisa tsarin Ramsey — takamaiman lamba da za a iya ambata wadda ta zama muhawarar siyasa da ɗa'a mai zafi a duk lokacin da aka yi amfani da ita ga alƙawura na dogon lokaci kamar manufar yanayi ko kayayyakin more rayuwa.

## Dalilin da ya sa yake da muhimmanci

Fam ɗaya na amfani da za a samu bayan shekaru 30 ba ya daidai da fam ɗaya na amfani da aka samu yau, saboda dalilai waɗanda wani ɓangare nasu game da fifikon lokaci ne (mutane da al'umma sun fi son abubuwa masu kyau da wuri) wani ɓangare kuma game da haɓaka ne (ana sa ran al'umma ta nan gaba za ta fi arziki, don haka fam ɗaya ba shi da muhimmanci sosai a gare ta a ƙarshe). Annex 6 na Green Book yana samo ƙa'idar kason rangwame na Birtaniya daga tsarin Ramsey, yana haɗa kason fifikon lokaci tsantsa da hasashen haɓakar amfani da kuma laushin amfanin ƙarshe na amfani, wanda ke samar da kason da aka wallafa na 3.5% a shekara don shekaru 0–30, yana raguwa a jadawalin da aka wallafa don shekaru 31 zuwa gaba (har zuwa 1% don shekaru 301+). Wannan jadawali yana wanzuwa daidai saboda 3.5% tsayayye da aka haɗa a tsawon ƙarni zai sa kusan kowane amfani na dogon lokaci — kariya daga ambaliya da ke ceton rayuka cikin shekaru 80, rage carbon da ke kauce wa cutarwa cikin shekaru 100 — ya zama ba shi da wani amfani a ƙimar yanzu, wanda Treasury ta ga ba daidai ba ne a ɗa'ance ga yanke shawara game da kayayyakin more rayuwa da muhalli masu dogon rai.

Ana jayayya a kan kason rangwame daidai saboda zaɓin ba ma'auni na fasaha maras ɓangare ba ne: yana ɗauke da hukunci game da nawa ya kamata al'umma ta sadaukar yau don mutanen da ba a haifa ba tukuna. Nazarin Stern kan Tattalin Arzikin Sauyin Yanayi (2006) ya yi amfani da kason rangwame kusa da sifili (fifikon lokaci tsantsa kusan 0.1%), yana jayayya cewa rage ƙimar jin daɗin tsararraki masu zuwa a kusan kason kasuwa ba abin kariya ba ne a ɗa'a idan cutarwar (sauyin yanayi mai bala'i) ba za a iya mayar da ita ba. Masu suka — musamman William Nordhaus — sun yi jayayya cewa kason Stern kusa da sifili ya ƙara girman shari'ar kashe kuɗi nan take kan yanayi ta hanyar sa kusan kowane kuɗi na yanzu ya zama mai gamsarwa idan aka kwatanta da amfani na gaba da ba a rage ƙimarsa ba kusan. Rashin jituwar ba ta lissafi ba ce; ta shafi ɗa'ar wa ya kamata ta ƙayyade kason, kuma ita ce misalin da aka saba da shi na dalilin da ya sa kason rangwame zaɓin manufa ne, ba shigarwar lissafin inshora kawai ba.

## Lissafi

Tsarin Ramsey da ke ƙarƙashin kason Green Book:

```
r = ρ + η·g

where:
  r = social discount rate
  ρ = rate of pure time preference (impatience + catastrophe risk)
  η = elasticity of marginal utility of consumption
  g = expected annual growth rate of per-capita consumption
```

Jadawalin Green Book mai raguwa (Annex 6, misali — a duba bugun yanzu don ainihin teburin da aka wallafa):

```
Years 0–30:    3.5%
Years 31–75:   3.0%
Years 76–125:  2.5%
Years 126–200: 2.0%
Years 201–300: 1.5%
Years 301+:    1.0%
```

Ƙimar yanzu ta adadin nan gaba:

```
PV = FV / (1 + r)^t
```

## Misali aiki

**Shirin kariya daga ambaliya**: aiki yana isar da £10 miliyan na lalacewar ambaliya da aka kauce wa a shekara ta 40.

Da amfani da kason 3.5% tsayayye: PV = 10,000,000 / (1.035)^40 ≈ £2.52 miliyan — amfanin yana kama da ƙarami.

Da amfani da jadawalin Green Book mai raguwa (3.5% don shekaru 0–30, 3.0% bayan haka), ana haɗa lissafin a 3.5% na shekaru 30 na farko da 3.0% na shekaru 31–40:

```
PV = 10,000,000 / [(1.035)^30 × (1.03)^10]
   = 10,000,000 / [2.807 × 1.344]
   ≈ 10,000,000 / 3.773
   ≈ £2.65 million
```

Jadawali mai raguwa yana ɗan ƙara ƙimar yanzu ta amfanin dogon lokaci idan aka kwatanta da kason tsayayye mai tsawo — ainihin manufar jadawalin, domin 3.5% tsayayye na ƙarni zai rage amfanin £100 miliyan a shekara ta 100 zuwa ƙasa da £3.3 miliyan.

**Kayayyakin dijital**: ƙaura zuwa cloud na gwamnati da ke kashe £4 miliyan yanzu ana sa ran zai kauce wa £500,000/shekara na kuɗin kula da tsoffin tsare-tsare har tsawon shekaru 15. A 3.5%, ƙimar yanzu ta wannan jerin biyan kuɗi kusan £500,000 × 11.52 (ma'aunin annuity na shekaru 15 a 3.5%) ≈ £5.76 miliyan — ya fi £4 miliyan na kuɗin a sauƙaƙe, shari'a ce ta ingantacciyar ƙimar yanzu wadda za ta yi rauni sosai a kason da aka zaɓa mafi girma ba tare da tunani ba (a 7%, ma'aunin annuity ɗaya yana sauka zuwa kusan 9.11, yana ba da £4.56 miliyan, har yanzu mai riba amma da ƙaramin gefe).

## Alaƙa da injiniyancin manhaja

Yawancin shirye-shiryen kasuwancin manhaja suna gudana na shekaru 3–5, a cikin kewayen 3.5% tsayayye, don haka jadawali mai raguwa da wuya ya yi tasiri kai tsaye — amma horon da ke ƙarƙashinsa yana da muhimmanci ga kowane zuba jari a fasahar gwamnati mai tsawon rayuwar kadara (dandamalin ƙasa, shirin kayayyakin bayanai, kwangila ta shekaru da dama):

- A yi amfani da kason Green Book da aka wallafa maimakon "hurdle rate" na cikin gida da aka aro daga kuɗin kamfanoni; masu bincike da masu duba na Treasury za su yi tsammanin jadawalin daidaitacce.
- Ga amfanin da za a samu bayan shekaru da yawa (tanadin kula da dandamali na dogon lokaci, ƙimar bayanai a buɗe da ke ƙaruwa — duba [ƙimar buɗaɗɗen bayanai](../ƙimar-buɗaɗɗen-bayanai/)), zaɓin rangwame zai iya juya shirin kasuwanci daga mai riba zuwa mai asara; a mayar da kason da lokacin ƙididdiga zato a fili, ba tsoffin ƙimomi da aka ɓoye ba.
- Wannan yana shiga kai tsaye cikin [tantancewar Green Book](../kimanta-shawarwari-ta-green-book/), tsarin shari'o'i biyar wanda a hukumance yake buƙatar kwararar kuɗi da aka rage ƙimarta, da kuma [ƙimantawar jin daɗin rayuwa](../ƙimantawar-jin-daɗin-rayuwa/), inda tambayar rangwame ɗaya ke tasowa ga amfanin jin daɗi marar kuɗi.
- Duba kuma [adalcin tsararraki da rangwamen dorewa](../adalci-tsakanin-tsararraki-da-rangwamen-dorewa/) don muhawarar Stern da Nordhaus da aka yi amfani da ita musamman ga zuba jari a fasahar muhalli da yanayi.

## Tarkuna

- **Amfani da kason tsayayye don dogon lokaci mai yawa.** Jadawalin Green Book mai raguwa yana wanzuwa musamman saboda kason tsayayye yana ƙasƙantar da amfanin da ke daɗe da gaske; a duba wane kewaye ya dace maimakon komawa 3.5% a duk lokaci.
- **Ɗaukar kason rangwame a matsayin maras ɓangare a ɗa'a.** Jayayyar Stern da Nordhaus ta nuna kason yana ɗauke da hukuncin ƙima game da tsararraki masu zuwa; sauya shi yana sauya wane shiri ya zama mai gamsarwa, don haka ya kamata a bayyana shi a kuma kare shi, ba a ɓoye a cikin ƙimar spreadsheet ta asali ba.
- **Rikita kason rangwame na zamantakewa da kuɗin jari na kamfani.** Kuɗin ranta na gwamnati da hurdle rate na ɓangaren kamfanoni ra'ayoyi ne daban da kason zamantakewa da aka samo daga Ramsey, kuma maye gurbin ɗaya da ɗayan a tantancewar jama'a yawanci yana karkatar da sakamako zuwa fifita riba ta ɗan gajeren lokaci.
- **Rage ƙimar kwararar kuɗi na gaske da na suna ba tare da daidaito ba.** Kason Green Book kason gaske ne (an daidaita shi da hauhawar farashi); rage ƙimar kwararar kuɗi na suna da shi yana ƙasƙantar da ƙimomin yanzu sosai.

## Majiyoyi

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation", Annex 6
  (2022). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Stern N. "The Economics of Climate Change: The Stern Review." HM Treasury, 2006.
- Nordhaus WD. "A Review of the Stern Review on the Economics of Climate Change." Journal of
  Economic Literature, 2007;45(3):686–702.
- Ramsey FP. "A Mathematical Theory of Saving." Economic Journal, 1928;38(152):543–559.
