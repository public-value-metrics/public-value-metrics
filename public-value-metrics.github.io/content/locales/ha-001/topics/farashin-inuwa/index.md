# Farashin Inuwa (Shadow Pricing)

Farashin inuwa (shadow price) ƙiyasin ƙima ne da ake bai wa kaya, albarkatu, ko tasirin waje (externality) wanda ba shi da farashi a kasuwa da ake iya gani, ko kuma farashinsa na kasuwa ya karkace bai nuna ainihin ƙimarsa ga al'umma ba. Tantance ayyuka a gwamnati yana dogara ne da ƙaramin tsarin farashin inuwa na hukuma — carbon, lokacin da ba na aiki ba, da kuma ma'aikata marasa aikin yi — waɗanda ake wallafawa a tsakiya domin kowace ma'aikata ta yi amfani da lamba ɗaya.

## Dalilin da ya sa yake da muhimmanci

Farashin inuwa yana wanzuwa ne saboda [nazarin kuɗi da amfani na zamantakewa](../nazarin-kuɗi-da-amfani-na-zamantakewa/) ba zai iya aiki ba sai kowane kuɗin da aka kashe da kowane amfani an ba shi ƙimar kuɗi, kuma da yawa daga cikin mafi muhimmanci — tan ɗaya na carbon da aka fitar, awa ɗaya na lokacin mai tafiya aiki, awa ɗaya na aikin wanda da ba shi da aikin yi — ba su da farashin kasuwa kwata-kwata, ko kuma farashinsu na kasuwa yana bayyana ainihin kuɗin da suke yi wa al'umma ta hanyar da ba ta dace ba. HM Treasury (Ma'aikatar Kuɗi ta Birtaniya) da Department for Energy Security and Net Zero suna haɗin gwiwar wallafa farashin inuwa na carbon da ake amfani da shi a duk tantance ayyukan gwamnatin Birtaniya (<https://www.gov.uk/government/publications/valuing-greenhouse-gas-emissions-in-policy-appraisal>). Ba a samo shi daga wani farashin kasuwar carbon ba, sai dai ta hanyar da ta dace da manufa: ana ƙayyade ƙimar carbon bisa kuɗin rage fitar da hayaƙi na ƙarshe (marginal abatement cost) da ake buƙata don cimma kasafin carbon da doka ta tanada ga Birtaniya, wanda tunani ne daban gaba ɗaya da lura da abin da ake sayar da carbon a kasuwar EU ko ta Birtaniya (Emissions Trading Scheme).

Kuɗin aiki na inuwa (shadow wage rate) yana bin irin wannan tunani a ɓangaren ma'aikata. Ɗaukar wanda da ba shi da aikin yi ba ya kashe al'umma cikakken albashinsa — wani ɓangare na albashin canja wuri ne daga kuɗaɗen tallafi da aka daina biya da kuma lokacin hutu/neman aiki da aka rasa, ba sabon ɗaukar albarkatun al'umma ba — don haka jagorar Green Book ta ƙayyade farashin inuwa da bai kai albashin kasuwa ba ga ma'aikatan da aka ɗauko daga rashin aikin yi, domin ya nuna ainihin kuɗin damar da aka rasa (opportunity cost) na wannan aiki (duba [kuɗin damar da aka rasa a kashe kuɗin jama'a](../kuɗin-damar-da-aka-rasa-a-kashe-kuɗin-jamaa/)), ba farashinsa na kasuwa ba.

## Lissafi

```
Shadow price of carbon (illustrative structure, current values from the
official BEIS/DESNZ carbon values tool — do not use stale figures):
  Traded sector value: informed by ETS allowance price trajectories
  Non-traded sector (target-consistent) value: set to the marginal cost
    of abatement needed to meet legislated carbon budgets, rising over
    time as easier abatement options are exhausted
  Applied as: £/tonne CO2e × tonnes emitted or abated by the option,
    discounted at the social discount rate for future years

Shadow wage rate (SWR):
  SWR = Market wage − (value of foregone leisure/search time saved
                        + value of welfare payments no longer paid)
  Typically expressed as a fraction of the market wage (e.g. SWR = 0.6
    × market wage in a high-unemployment area, per Green Book Annex A
    guidance on labour markets with spare capacity)
```

Duka waɗannan lambobi ƙa'idodi ne na manufa da ake ƙayyadewa a tsakiya, ba abubuwan da aka lura a kasuwa ba — ainihin manufar farashin inuwa ita ce maye gurbin kasuwa da ba ta nan ko ta karkace, don haka tantancewar da ke amfani da shi dole ta ambaci majiyar hukuma ta yanzu maimakon ta ƙirƙiri lambarta, domin tantance-tantancen kowace ma'aikata su kasance masu iya kwatantuwa.

## Misali aiki

**Gwamnatin ƙasa**: tantance wani shirin kariya daga ambaliya ya ƙiyasta cewa yana kauce wa tan 400 na CO2e a kowace shekara (ta rage amfani da kayan aikin gaggawa da rage carbon da ke cikin sake gini da aka kauce wa) a tsawon shekaru 30 na rayuwar tantancewar, idan aka kwatanta da yanayin "do minimum" (mafi ƙarancin aiki).

```
Illustrative shadow price of carbon: £280/tonne CO2e (year 1, rising over
  the appraisal period per the official non-traded carbon values schedule)
Year 1 carbon benefit = 400 × £280 = £112,000
```

Saboda jadawalin hukuma ya sa ƙimar carbon ta *tashi* a tsawon lokacin tantancewar (don nuna tsaurara kasafin carbon), dole mai nazari ya yi amfani da ƙimar da ta dace da kowace shekara a cikin rafin shekaru 30, ba farashi mai tsayayye ba — yin amfani da ƙimar shekara ta 1 a duk lokaci zai rage ƙimar amfanin shekarun baya kuma ya karkatar da jerin fifiko idan aka kwatanta da wasu tsare-tsaren kariya daga ambaliya masu bambancin carbon.

**Ƙaramar hukuma**: shirin tallafin samun aiki na wata majalisa ga mazauna da suka daɗe ba su da aiki ya sa mutane 150 a ayyukan da ke biyan £11/awa. Ƙimanta wannan da cikakken albashin kasuwa zai bai wa shirin £11 × awannin aiki a matsayin amfanin zamantakewa, amma tsarin kuɗin aiki na inuwa ya gane cewa waɗannan ba ma'aikata ne da aka ɗauko daga wasu ayyuka ba — ainihin kuɗin damar da aka rasa na aikinsu kafin shirin ƙarami ne.

```
Market wage: £11.00/hour
Shadow wage rate (illustrative, high local unemployment): 0.6 × market wage = £6.60/hour
Net social benefit attributable per hour worked ≈ £11.00 − £6.60 = £4.40/hour
  (the "extra" value created by moving genuinely idle labour into production,
   as distinct from the wage itself, which is largely a transfer)
```

Shi ya sa tantance shirye-shiryen samar da aiki a yankunan da rashin aikin yi ya yi yawa zai iya nuna ƙimar zamantakewa mai kyau, ko da irin shirin da aka yi a yankin da kowa yana da aiki — inda ma'aikatan da aka karkatar za a ɗauko su ne kawai daga wasu ayyuka — ba zai nuna haka ba.

## Alaƙa da injiniyancin manhaja

Farashin inuwa da wuya ya taɓa isar da manhaja kai tsaye, amma yana da muhimmanci a duk lokacin da shirin kasuwanci ya yi iƙirarin amfanin carbon ko na zamantakewa daga sauyin IT — haɗa cibiyoyin bayanai da ke iƙirarin ceton carbon, ko sabis marar takarda da ke iƙirarin kauce wa carbon na bugu da aika wasiƙa, dole ne ya yi amfani da farashin inuwa na carbon na hukuma na yanzu maimakon lambar da aka ƙirƙira, kuma dole ne ya yi amfani da jadawalin kowace shekara ba farashi mai tsayayye ba, daidai yadda ake yi da kowane abin da ake shigarwa a tantancewar Green Book. Duba [jimillar kuɗin mallaka a IT na gwamnati](../jimillar-kuɗin-mallaka-a-it-na-gwamnati/) da [ƙimar tsaron intanet a ɓangaren jama'a](../ƙimar-tsaron-yanar-gizo-a-ɓangaren-jamaa/), waɗanda sau da yawa suna buƙatar farashin inuwa don abin da ke da wuyar ƙimantawa (haɗarin keta tsaro, tsayawar aiki) tare da abubuwan da aka ƙididdige kuɗinsu kai tsaye.

## Tarkuna

- **Amfani da tsohuwar lambar carbon ko ta albashi.** Ana sabunta duka ƙimomin lokaci-lokaci ta jagorar tsakiya; tantancewar da aka gina a kan lambar da aka soke ba za ta tsira daga bincike na Treasury ba.
- **Amfani da farashin inuwa na carbon tsayayye a tantancewar shekaru da yawa.** Jadawalin hukuma yana tashi a tsawon lokaci; amfani da ƙimar shekara ta 1 a duk lokaci yana karkatar da yanayin amfani ko kuɗi.
- **Rikita kuɗin aiki na inuwa da rage albashin ma'aikaci na gaske.** Kuɗin aiki na inuwa yana gyara yadda *tantancewar* ke ƙimanta aikin da aka shigar, ba albashin da ake biyan ma'aikacin ba — haɗa su yana gayyatar (a kuskure) tabbatar da biyan ƙasa da na kasuwa.
- **Ƙirƙirar farashin inuwa na kai maimakon amfani da na hukuma.** Farashin inuwa ƙa'idodin manufa ne domin tantance-tantance su kasance masu iya kwatantuwa tsakanin ma'aikatu; lambar da aka ƙirƙira a gida, duk yadda aka yi tunani a kanta, tana karya wannan kwatantuwa.

## Majiyoyi

- HM Treasury / Department for Energy Security and Net Zero. "Valuing greenhouse gas emissions in
  policy appraisal." <https://www.gov.uk/government/publications/valuing-greenhouse-gas-emissions-in-policy-appraisal>
- HM Treasury. "The Green Book: appraisal and evaluation in central government," Annex A (shadow
  price of labour, non-work time values).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Little IMD, Mirrlees JA. "Project Appraisal and Planning for Developing Countries." Heinemann,
  1974 (foundational shadow-pricing methodology).
