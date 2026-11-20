# Ƙimantawa ta Fifikon da Aka Bayyana (Stated Preference)

Hanyoyin stated preference suna ƙiyasta ƙimar kayan da ba na kasuwa ba ta hanyar tambayar mutane kai tsaye nawa za su yarda su biya, ko su karɓa a matsayin diyya don su bar shi, yawanci ta hanyar bincike mai tsari da ke bayyana yanayi na hasashe. Contingent valuation ita ce fasahar da aka fi sani a wannan iyali.

## Dalilin da ya sa yake da muhimmanci

Annex 2 na Green Book (jagorar ƙari kan ƙimanta tasirin da ba na kasuwa ba) yana goyon bayan hanyoyin stated preference ga kayan da ba su da ma'amalar kasuwa da za a iya fahimtar ƙima daga cikinta kwata-kwata — ingancin iska, bambancin halittu, kariya daga ambaliya, ƙimar wanzuwar shimfiɗar ƙasa da wani ba zai taɓa ziyarta ba (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>). Defra ta wallafa nata jagorar stated-preference don tantance muhalli saboda yawancin ƙimar muhalli (kiyaye wuraren zama, ingancin ruwa) ba su da kasuwar wakili kwata-kwata, ba kamar, misali, hayaniya ba, wadda aƙalla tana da alaƙa da farashin gidaje da ake iya gani (duba [ƙimantawa ta fifikon da aka bayyana ta hali (revealed preference)](../ƙididdige-ƙima-ta-fifikon-da-aka-bayyana-a-aikace/)).

Babbar jan hankalin stated preference — yana iya ƙimanta kusan komai, har da kayan da ba wanda ya taɓa yin ciniki a kansu — shi ne kuma tushen matsalar sahihancinsa. Saboda masu amsa ba sa kashe kuɗi da gaske, binciken contingent valuation yana fuskantar son zuciya na hasashe (mutane suna ƙara girman yardar biya idan babu ainihin ƙuntatar kasafi), tasirin shigarwa (ana ƙimanta kaya ɗaya daban-daban gwargwadon abin da ke cikin binciken), da son zuciya na wurin farawa a tsarin wasan ba da tayi. Kwamitin NOAA na 1993 kan contingent valuation, wanda aka kira bayan shari'ar zubewar mai ta Exxon Valdez, ya shimfiɗa ƙa'idodin tsari — tsarin raba gardama na binary "za ka biya £X, e/a'a" maimakon ba da tayi mai buɗaɗɗen amsa, da tunatarwa wajibi na ainihin ƙuntatar kasafin mai amsa — waɗanda har yanzu su ne ma'aunin da za a iya kare bincike da shi.

## Lissafi

```
Contingent valuation (referendum format):
  Present a binary choice: "would you pay £X per year for outcome Y? yes/no"
  Vary X randomly across respondents.
  Fit willingness-to-pay as a function of the yes/no response rate at each X.

Mean WTP = area under the estimated demand curve
Aggregate value = Mean WTP × affected population

Choice experiment (discrete choice modelling) variant:
  Present respondents with repeated choices between bundles of attributes
  (including a cost attribute), estimate implicit prices for each
  non-cost attribute from the trade-offs respondents reveal.
```

Ana fi son bambancin choice-experiment a aikin Birtaniya na yanzu fiye da contingent valuation ta tambaya guda, domin tilasta masu amsa su yi musayar siffofi da dama a kan kuɗi akai-akai yana samar da ƙiyasi masu daidaito a ciki, masu wahalar yin wasa da su, fiye da tambayar e/a'a guda.

## Misali aiki

**Gwamnatin ƙasa**: Defra ta ba da umarnin binciken contingent valuation don ƙimanta shirin inganta ingancin ruwan kogi. Bincike na tsarin raba gardama na gidaje 2,000 ya gano 62% za su biya £40/shekara ta ƙarin kuɗin ruwa na hasashe, kuma lanƙwasar buƙata da aka ƙiyasta ta ba da matsakaicin yardar biya na £28/shekara ga kowane gida.

```
Mean WTP = £28/household/year
Households in catchment = 340,000
Aggregate annual value = £28 × 340,000 = £9.52m/year

Over a 20-year appraisal period at 3.5% discount rate (annuity factor ≈ 14.2):
PV(benefit) ≈ £9.52m × 14.2 ≈ £135m
```

Ana kwatanta wannan jimilla da ɓangaren kuɗi na [nazarin kuɗi da amfani na zamantakewa](../nazarin-kuɗi-da-amfani-na-zamantakewa/) na shirin. Green Book tana buƙatar a ba da rahoton irin wannan shaidar stated-preference tare da tazarar amincewarta da hanyar bincikenta, ba a matsayin ƙiyasi kaɗai ba, daidai saboda lambar da ke ƙarƙashinta ta fi rauni fiye da farashin kasuwa.

**Ƙungiyar agaji**: amanar kayan tarihi tana binciken baƙi da waɗanda ba baƙi ba game da yardar biya don hana rufe wani tsohon gini da kowane rukuni ba lallai ya ziyarta ba (ƙimar wanzuwarsa). Domin waɗanda ba baƙi ba, waɗanda ba za su taɓa ganin ginin ba, har yanzu suna ba da rahoton yardar biya mai kyau, binciken yana ɗaukar ƙimar wanzuwa da ta gado wanda ƙirga kuɗin shiga na baƙi (wakilin revealed-preference) zai rasa gaba ɗaya — yana nuna ainihin fa'idar stated preference inda babu ma'amalar kasuwa ta kowace iri da za ta bayyana ƙima.

## Alaƙa da injiniyancin manhaja

Hanyoyin stated preference da wuya su shafi aikin injiniyancin manhaja kai tsaye, amma injiniyoyin da ke gina dandamalin tuntuɓar 'yan ƙasa, kayan aikin shiga cikin kasafi, ko kayayyakin binciken jama'a sau da yawa suna gina kayan aikin da tattalin arzikin ke dogara da shi. Daidaita bayanan tsarin bincike — kuɗin tayi na bazuwar, tsarin raba gardama na binary maimakon tambayoyi masu buɗaɗɗen amsa, tunatarwar ƙuntatar kasafi a fili — ba ado na UX ba ne, shi ne abin da ke sa ƙimantawar da ta biyo baya ta zama mai kariya a bincike; binciken cikin manhaja da aka tsara da kyau zai iya ɓata watannin nazarin tattalin arziki na gaba. Duba [ma'aunin gamsuwar 'yan ƙasa](../maaunin-gamsuwar-ɗan-ƙasa/) don babban horon samun bayanan ra'ayin jama'a da za su ɗauki nauyin nazari.

## Tarkuna

- **Tambayoyin buɗaɗɗen amsa na "nawa za ka biya?".** Waɗannan sun fi fuskantar son zuciya na dabara da angaren farko fiye da tsarin raba gardama na binary; shawarar kwamitin NOAA ta amfani da tsarin raba gardama tana wanzuwa daidai saboda tambayar buɗaɗɗiyar amsa tana aiki mara kyau.
- **Rashin tunatarwa game da ainihin ƙuntatar kasafin mai amsa.** Ba tare da ita ba, yardar biya da aka bayyana tana wuce abin da waɗannan mutane za su biya idan ainihin musayar kasafi ta kasance — son zuciya na hasashe.
- **Watsi da tasirin shigarwa.** Kaya ɗaya da aka ƙimanta shi kaɗai da wanda aka ƙimanta a matsayin ɓangare na babban tsari yana samar da ƙiyasin yardar biya daban; a bayyana abin da ya kasance, idan akwai, a cikin tsarin binciken.
- **Ɗaukar ƙiyasin bincike guda a matsayin wanda aka kammala.** Aikin Green Book yana tsammanin kewaye da tattaunawar son zuciya da aka sani, ba lamba kaɗai da aka ɗauka zuwa teburin kuɗi da amfani kamar farashin kasuwa ba.

## Majiyoyi

- HM Treasury. "The Green Book," Annex 2: valuing non-market impacts.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Defra. "Valuing environmental impacts: practical guidelines" (contingent valuation and choice
  experiment guidance). <https://www.gov.uk/government/collections/valuing-environmental-impacts>
- Arrow K, et al. "Report of the NOAA Panel on Contingent Valuation." Federal Register, 1993.
- Mitchell RC, Carson RT. "Using Surveys to Value Public Goods: The Contingent Valuation Method."
  Resources for the Future, 1989.
