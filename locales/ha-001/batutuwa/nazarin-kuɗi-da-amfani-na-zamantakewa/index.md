# Nazarin Kuɗi da Amfani na Zamantakewa (SCBA)

Nazarin kuɗi da amfani na zamantakewa (social cost-benefit analysis) yana mayar da kowane kuɗin da aka kashe da kowane amfani na manufa ko shiri — na kasuwa da wanda ba na kasuwa ba — zuwa ma'aunin kuɗi ɗaya, yana rage ƙimar kwararar nan gaba zuwa ƙimar yanzu (discounting), sannan yana cire su daga juna don samar da lamba ɗaya: shin wannan shawara tana sa al'umma ta fi kyau, kuma da nawa?

## Dalilin da ya sa yake da muhimmanci

SCBA shi ne tsohon salon ƙididdiga a cikin shari'ar tattalin arziki ta [tantancewar Green Book](../kimanta-shawarwari-ta-green-book/): jagorar HM Treasury tana buƙatar shawarwari su nuna ingantacciyar ƙimar zamantakewa ta yanzu (NPSV) a duk inda za a iya ƙimanta amfanin cikin sahihanci, tare da amfani da yardar biya (willingness-to-pay) a matsayin ainihin ƙa'idar ƙimantawa ga kayan da ba na kasuwa ba (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>, Chapter 5). Horon da yake tilastawa shi ne cewa nazarin kuɗi da amfani na "zamantakewa" ba daidai yake da tantance zuba jari na kamfani mai zaman kansa ba: dole ne ya haɗa da kuɗi da amfani da ke faɗawa kan wasu ɓangarori na uku da ba su cikin ciniki (externalities), dole ne ya yi amfani da [kason rangwame na zamantakewa](../kason-rangwame-na-zamantakewa/) maimakon kuɗin jari na kasuwanci, kuma ya kamata ya yi amfani da [ɗora nauyi bisa rabon amfani](../auna-rabon-faida-bisa-matsayin-mutane/) inda fam ɗaya ke da muhimmanci ga gida mai talauci fiye da mai arziki.

SCBA yana gazawa daidai inda masu sukarsa ke tsammani: kayan da ba su da makamancinsu a kasuwa — tsabtataccen iska, haɗin kan al'umma, ƙimar ran da aka ceto — dole a ƙimanta su ta hanyar [stated preference](../ƙimantawa-ta-fifikon-da-aka-bayyana/) ko [revealed preference](../ƙididdige-ƙima-ta-fifikon-da-aka-bayyana-a-aikace/), ko kuma a ƙirƙiri [farashin inuwa](../farashin-inuwa/). Idan ƙimantawar abin jayayya ce ba wahala kawai ba, Green Book kanta tana ba da shawarar komawa ga [nazarin ingancin kuɗi (cost-effectiveness)](../nazarin-ingancin-kuɗi-a-gwamnati/) ko [nazarin yanke shawara bisa ma'auni da yawa](../nazarin-yanke-shawara-bisa-maauni-da-yawa/) maimakon tilasta lamba da babu wanda ya yarda da ita.

## Lissafi

```
NPSV = Σ [t=0 to T] (Benefit_t − Cost_t) / (1 + r)^t

where:
  Benefit_t = all monetized benefits in year t, including non-market
              goods valued via stated/revealed preference or shadow price
  Cost_t    = all monetized costs in year t, including opportunity cost
              of resources (see ../opportunity-cost-in-public-spending/)
  r         = social discount rate (HM Treasury sets 3.5% declining to
              lower rates beyond year 30, per Green Book Annex A)
  T         = appraisal period

Benefit-cost ratio (BCR) = Σ PV(Benefits) / Σ PV(Costs)
```

BCR sama da 1 (ko NPSV sama da sifili) yana nuna ƙimar zamantakewa ta riba. Rukunan ƙimar da aka samu daidai da kuɗi (value for money) na Green Book (kamar yadda ake amfani da su a tantance sufuri da kayayyakin more rayuwa) suna yiwa kewayen BCR lakabi: ƙasa da 1.0 ƙimar da aka samu daidai da kuɗi marar kyau ce, 1.0–1.5 ƙasa ce, 1.5–2.0 matsakaiciya ce, 2.0–4.0 babba ce, kuma sama da 4.0 babba ce ƙwarai. Nazarin ji-ji-da-hankali (sensitivity analysis) — sake gudanar da NPSV a ƙarƙashin zato na rashin kyakkyawan fata da na kyakkyawan fata — wajibi ne, ba zaɓi ba, domin amfanin da ba na kasuwa ba da aka ƙimanta yana da faffadan kewayen rashin tabbas.

## Misali aiki

**Ƙaramar hukuma**: wata majalisa tana tantance zuba jari na £3m a sabuwar hanyar kekuna da tafiya a ƙafa a tsawon shekaru 20 na tantancewa a kason rangwame na 3.5%.

```
Costs: £3m capital in year 0, £50,000/year maintenance (years 1-20)
PV(maintenance) ≈ £50,000 × 14.2 (20-year annuity factor at 3.5%) ≈ £710,000
Total PV(costs) ≈ £3.71m

Benefits (all monetized via published DfT/WHO valuation tools):
  Health benefit from increased physical activity: £180,000/year
  Absenteeism reduction: £40,000/year
  Decongestion (fewer car trips): £60,000/year
  Total benefit stream: £280,000/year
PV(benefits) ≈ £280,000 × 14.2 ≈ £3.98m

NPSV = £3.98m − £3.71m = +£0.27m
BCR = 3.98 / 3.71 = 1.07 → "low" value for money
```

Shirin ya cika sharaɗi amma da ƙyar; gudanar da nazarin ji-ji-da-hankali da ƙiyasin amfanin lafiya ƙasa da 20% (don nuna ainihin rashin tabbas a ƙimanta motsa jiki) yana saukar da BCR ƙasa da 1.0, kuma shi ne daidai dalilin da Green Book ke buƙatar a wallafa teburin ji-ji-da-hankali tare da babbar lambar, ba ƙiyasin tsakiya kaɗai ba.

**Ƙungiyar agaji**: shirin hana mutuwar jarirai da ke kashe £500,000/shekara ana tantance shi ta amfani da ƙimar ran ƙididdiga (value of a statistical life, VSL) — farashin inuwa, ba farashin kasuwa da aka lura ba — na kusan £2.1m (lambar HM Treasury da aka sabunta a 2023, wadda ita kanta aka samo daga binciken stated-preference). Hana mutuwar jariri ɗaya a kowace shekara a kan kuɗin £500,000 yana ba da BCR na 4.2, wato ƙimar da aka samu daidai da kuɗi "babba ƙwarai" a sauƙaƙe — amma duk sakamakon yana dogara ne da lambar VSL, shi ya sa kowane SCBA da ke amfani da VSL dole ne ya bayyana ta a matsayin zato, ba hujja ba.

## Alaƙa da injiniyancin manhaja

SCBA shi ne ainihin tsari don yanke shawarar zuba jari a dandamali da kayayyakin more rayuwa na manhajar gwamnati — kwatanta dandamalin shaida na bai-ɗaya da mafita ta kowace ma'aikata, misali, yana buƙatar ƙimanta amfani kamar rage kuɗin shigar da maimaici, rage zamba, da saurin isar da sabis wanda babu farashin kasuwa a kansu. Injiniyoyin da ke gina sabis ɗin su yi tsammanin shugabannin shirye-shirye za su nemi shigarwa ga wannan nazari: kuɗin kowace mu'amala (duba [kuɗi a kowace mu'amala](../kuɗin-kowace-maamala/)), adadin da ake sa ran, da kuɗin lalacewa/tsayawar aiki. Horon da ya fi muhimmanci a shigo da shi: a rage ƙimar amfanin nan gaba, a ambaci tushen kwatance na yanayin da ba tare da shiri ba a fili (duba [nazarin yanayin da ba tare da shiri ba (counterfactual)](../nazarin-counterfactual/)), kuma kar a gabatar da ƙiyasi ɗaya ba tare da kewayen ji-ji-da-hankalinsa ba.

## Tarkuna

- **Ƙirga amfani sau biyu.** Ƙirga "lokacin da aka ceto" da "ƙaruwar aiki daga wannan lokaci" a matsayin layukan amfani daban yana ƙara girman shari'ar; lokacin da aka ceto shi ne amfanin, amfani da shi daga baya ba ƙarin amfani ba ne sai an tabbatar da shi daban.
- **Mantawa da kuɗin da aka karkatar.** Shirin da ke mayar da cunkoso daga hanya ɗaya zuwa wata, ko zamba daga hanya ɗaya zuwa wata, bai ƙirƙiri amfanin ƙarshe da NPSV ɗinsa ke nunawa ba — duba [karkatar da tasiri da danganta shi (displacement and attribution)](../ƙauratarwa-da-danganta-tasiri/).
- **Amfani da kason rangwame na kamfani.** Amfani da kuɗin jari na kasuwanci (misali 8–10%) maimakon kason rangwame na zamantakewa yana ƙasƙantar da amfanin jama'a na dogon lokaci kamar lafiya da muhalli — duba [kason rangwame na zamantakewa](../kason-rangwame-na-zamantakewa/).
- **Ƙimanta abin da ba a jayayya a kai da kauce wa wanda ake jayayya.** Idan kashi biyu bisa uku na amfanin shawara tanadin inganci ne da aka ƙimanta da tabbaci, kuma kashi ɗaya bisa uku riba ce ta jin daɗi da aka ƙimanta ba da ƙarfi ba, babbar NPSV tana haɗa lamba mai ƙarfi da mara ƙarfi a asirce; a ba da rahoton su daban.

## Majiyoyi

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Chapter 5.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury. "Green Book supplementary guidance: value of a statistical life." 2023.
  <https://www.gov.uk/government/publications/green-book-supplementary-guidance-value-of-a-statistical-life>
- Department for Transport. "TAG unit A1.1: cost-benefit analysis." Transport Analysis Guidance.
  <https://www.gov.uk/guidance/transport-analysis-guidance-tag>
