# Ƙa'idodin Hidima da Ma'aunan Mu'amala (Service Standards and Transaction Metrics)

GOV.UK Service Standard shi ne jerin dubawa na maki 14 na gwamnatin Birtaniya don ginawa da tafiyar da hidimar dijital ta jama'a, kuma yana tare da ƙaramin saitin ma'aunan mu'amala na ƙima da dole ne — kuɗi ga kowace mu'amala, yawan kammalawa, karɓar dijital, da gamsuwar mai amfani — wanda dole ne ƙungiyoyi su wallafa ga kowace hidimar gwamnatin tsakiya da ke aiki. Tare, ma'auni da ma'aunan su ne ƙwararriyar aiki ta yau da kullun ta manyan tsare-tsaren ƙimar jama'a da KPI a wannan ma'ajiya, wadda aka nufa kai tsaye ga ƙungiyoyin isarwa na software.

## Dalilin da ya sa yake da muhimmanci

Service Standard, wanda GOV.UK service manual ke kula da shi, yana buƙatar kowane kimantawa na lokaci-ɗaya (alpha, beta, live) na hidimar dijital ta gwamnati ya nuna — daga cikin maki 14 — cewa ƙungiyar ta fahimci buƙatun masu amfani, tana aiki a ƙungiya mai fannoni da yawa, tana maimaitawa da ingantawa akai-akai, kuma *tana kimanta kayan aiki, tsare-tsare, da hanyoyin aiki*. A tarihi wannan yana tare da Performance Platform na jama'a inda kowace hidima mai aiki ke wallafa bayanan mu'amalarta a buɗe; an yi ritayar wannan dandamali tun daga lokacin, amma ainihin wajibcin aunawa da wallafa waɗannan ma'auni huɗu na tsakiya yana ci gaba ta hanyar jagorar "measuring success" ta service manual. Dalilin da wannan ya bambanta da allon bayanai na KPI na software na yau da kullun shi ne cewa an tsara waɗannan ma'auni a fili a matsayin samfurin tattalin arziki ɗaya da aka haɗa, ba maki huɗu masu zaman kansu ba: dukkan shari'ar tanadi ga gwamnatin dijital — rahoton Digital Efficiency Report na Government Digital Service ya gano mu'amalolin dijital kusan sau 20 sun fi arha fiye da waya kuma kusan sau 50 sun fi arha fiye da fuska-da-fuska ga hidimomin ƙaramar hukuma masu kama — yana bayyana ne kawai idan yawan kammalawa ya kasance mai yawa kuma karɓar dijital ya ƙaru da gaske, maimakon kawai ƙara hanya mai arha tare da mai tsada da ba ta canza ba.

## Lissafi

```
Cost per transaction = total service running cost / number of completed transactions
Completion rate       = transactions completed / transactions started × 100
Digital take-up       = digital-channel transactions / all-channel transactions × 100
User satisfaction     = % satisfied + very satisfied, in-service 5-point survey

Channel-shift saving = transaction volume × take-up shift × (cost per transaction on
                        the old channel − cost per transaction digitally)

Failure-demand cost = (1 − completion rate) × transactions attempted digitally ×
                        cost of the fallback channel those users then use instead
```

## Misali aiki

**Hidimar sabunta lasisi ta gwamnatin tsakiya ta misali**, mu'amala miliyan 2 a shekara, a yanzu 65% ta waya (£3.00 ga kowace mu'amala) da 35% ta dijital (£0.30 ga kowace mu'amala), yawan kammalawa 80%. Sake tsarawa bisa Service Standard na maki 14 yana ɗaga karɓar dijital zuwa 60% da kammalawa zuwa 92%:

```
Take-up shift saving = 2,000,000 × 0.25 × (3.00 − 0.30) = £1,350,000/year

Failure-demand cost, before:
  2,000,000 × 0.35 × (1 − 0.80) × £3.00 = £420,000/year (abandoners fall back to phone)

Failure-demand cost, after:
  2,000,000 × 0.60 × (1 − 0.92) × £3.00 = £288,000/year

Net failure-demand saving = £420,000 − £288,000 = £132,000/year

Total annual saving ≈ £1,350,000 + £132,000 = £1,482,000/year
```

Lissafin yana bayyana a fili dalilin da yawan kammalawa ba ma'auni na biyu ba ne: ba tare da ingantuwa daga 80% zuwa 92% ba, tanadin sauyin karɓa za a karɓe shi wani ɓangare ta hanyar buƙatar gazawa da ke mayar da masu amfani da dijital da suka ji haushi kai tsaye zuwa tsadar hanyar waya.

## Alaƙa da injiniyancin manhaja

Waɗannan ma'auni huɗu misali ne mai aiki na allon bayanai na kuɗi-da-sakamako: ma'aunin kuɗi ɗaya da aka ware daga ma'aunan sakamako/inganci uku, da gangan ba a taɓa rushe su zuwa maki ɗaya ba — ƙa'ida ɗaya da aka yi jayayya a kai a [KPI na ɓangaren jama'a (public sector KPIs)](../manyan-alamomin-aiki-na-ɓangaren-jamaa/). Ga injiniyoyi wannan yana rabuwa zuwa aiki na zahiri da za a iya mallaka: yawan kammalawa matsala ce ta auna rafi, kuma kowane wurin watsi a cikin tafiya, a ƙa'ida, ana iya gano shi da gyara shi; kuɗi ga kowace mu'amala yana buƙatar lissafin kuɗin naúra na gaske har da kuɗin taimakon ma'aikata da hanyar takarda, ba kawai kashe kuɗin ɗaukar bayanai a gajimare ba (duba [kuɗi ga kowace mu'amala (cost per transaction)](../kuɗin-kowace-maamala/) da [jimillar kuɗin mallaka a IT na gwamnati (total cost of ownership in government IT)](../jimillar-kuɗin-mallaka-a-it-na-gwamnati/)); kuma karɓar dijital ma'aunin adalci ne sanye da rigar inganci — 'yan ƙasar da ba za su iya ko ba za su so su sauya hanya ba sun fi yawa tsofaffi, nakasassu, ko waɗanda aka bari a baya a dijital, don haka rufe hanya da tsanani yana mayar da "tanadi" cutar samun dama (duba [haɗa kai da dijital (digital inclusion)](../haɗa-kowa-da-dijital/) da [tanadin sauya hanya (channel shift savings)](../tanadin-sauya-hanyar-hidima/)). Maki 14 kansa shi ne ƙayyadaddun tsarin da ke bayan waɗannan lambobi — duba [ma'aunin hidimar dijital (digital service standard)](../maaunin-hidimar-dijital/) don cikakken ma'aunin, da [ma'aunan gamsuwar 'yan ƙasa (citizen satisfaction metrics)](../maaunin-gamsuwar-ɗan-ƙasa/) don yadda adadin gamsuwa a nan ke da alaƙa da faɗin auna amana.

## Tarkuna

- **Karɓar da aka samu ta rufe hanyar maye**: rufe layin waya yana ɗaga kashi na karɓar dijital a lissafi yayin da yake watsa buƙatar gazawa ga duk hanyar da ta rage (sau da yawa hanya mai tsada ta dijital mai taimako ko fuska-da-fuska); a koyaushe a auna jimillar kuɗin tsarin, ba ma'aunin kaɗai ba.
- **Auna yawan kammalawa daga mataki na biyu na rafi**: fara ƙidayar "an fara" bayan wurin watsi na farko na gaske yana yabon yawan kammalawa kuma yana ɓoye mafi girman asarar da za a iya gyarawa.
- **Kuɗi ga kowace mu'amala banda taimakon dijital mai taimako**: kuɗin naúra na dijital kawai da ke watsi da lokacin ma'aikata da ake kashewa wajen taimaka wa masu amfani da ba za su iya yin kansu ba yana rage ainihin kuɗin hanyar.
- **Wallafa ma'auni ba tare da ma'ana ɗaya tsakanin hidimomi ba**: "mu'amala" da "an kammala" suna nufin abubuwa daban-daban a ƙungiyoyin hidima daban-daban sai dai idan an daidaita ma'anoni kuma an ba su juzu'i, wanda ke sa kwatancen tsakanin hidimomi ya zama marar aminci.

## Majiyoyi

- GOV.UK Service Manual, "The Service Standard." <https://www.gov.uk/service-manual/service-standard>
- GOV.UK Service Manual, "Measuring Success — Data You Must Publish."
  <https://www.gov.uk/service-manual/measuring-success/data-you-must-publish>
- GOV.UK, "Digital Efficiency Report."
  <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
