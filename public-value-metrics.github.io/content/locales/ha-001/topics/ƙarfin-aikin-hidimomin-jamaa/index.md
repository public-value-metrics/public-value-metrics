# Ƙarfin Aikin Hidimomin Jama'a (Public Service Productivity)

Ƙarfin aikin hidimomin jama'a yana auna yadda kashe kuɗin jama'a ke mayar da shigarwa (ma'aikata, jari, kaya da hidimomi) zuwa fitarwa da aka daidaita ta inganci, ga hidimomi — lafiya, ilimi, 'yan sanda, kulawar zamantakewa — da ba su da farashin kasuwa don haka babu adadin kuɗin shiga da za a raba kuɗin a kai. Ofishin Ƙididdiga na Ƙasa na Birtaniya (ONS) yana wallafa wannan jerin tun tsakiyar shekarun 2000 kuma shi ne ƙoƙarin ƙasa mafi ci gaba a hanyar aiki na amsa tambayar "shin gwamnati tana ƙara kyau ko ƙara muni wajen mayar da kuɗi zuwa hidimomin jama'a?"

## Dalilin da ya sa yake da muhimmanci

A kasuwa, ƙarfin aiki shi ne (ƙimar fitarwa) / (kuɗin shigarwa), kuma ana ganin ƙimar fitarwa domin wani yana biyan ta. Sauyin kugu (hip replacement), wurin makaranta, da sintirin 'yan sanda ba su da farashin sayarwa, don haka a sauƙaƙe za ku iya auna *shigarwa* kawai (abin da aka kashe) — wanda ke jarabtar masu sharhi su ɗauki ƙaruwar kashe kuɗin jama'a a matsayin mara kyau kai tsaye, domin ƙarin shigarwa tare da ayyukan kanun labarai marasa canji yana kama da faɗuwar ƙarfin aiki. Hanyar aikin ONS, da aka bayyana a wallafe-wallafen "Sources and Methods" ta ƙarfin aikin hidimomin jama'a, tana warware wannan ta hanyar gina ma'aunin *fitarwa* daga yawan ayyuka (tiyatar da aka yi, ɗaliban da aka koyar, laifukan da aka bincika) sannan *daidaita inganci* na wannan ma'auni — a lafiya, ta haɗa da ƙimar tsira da lokutan jira; a ilimi, ta haɗa da nasarar karatu; a aikin 'yan sanda, ta haɗa da sakamako kamar warware shari'a — don hidimar da ke yin adadin tiyata iri ɗaya amma tana samun ƙimar tsira mafi kyau ta bayyana a matsayin mafi ƙarfin aiki, ba kawai mafi tsada ba. Babban binciken da ke maimaituwa a wallafe-wallafen ONS yana ba da damuwa ga fannin: ƙarfin aikin hidimomin jama'a na Birtaniya ya faɗi sosai a lokacin annobar COVID-19 kuma a wallafe-wallafen ONS na tsakiyar shekarun 2020 bai dawo matakin 2019 ba a ƙananan fannoni da dama ciki har da kiwon lafiya, ko da yake kashe kuɗi ya ƙaru — gibin da ke mayar da "ƙarin kuɗi" da "ƙarin ƙarfin aiki" tambayoyi biyu dabam gaba ɗaya.

## Lissafi

```
Output index (volume) = Σ (activity_i × relative unit cost weight_i), base-year weighted
                          across all service activities (e.g. hip ops, cataract ops,
                          GP consultations), analogous to a Laspeyres/Paasche volume index

Quality adjustment    = output index × quality adjustment factor
                          (e.g. incorporating a change in survival rates, waiting times,
                          attainment, or reoffending as a multiplier on raw volume)

Input index           = Σ (labour hours × labour cost weight) + (goods/services cost,
                          deflated) + (capital consumption)

Total factor productivity growth = % change in quality-adjusted output index
                                    − % change in input index
```

## Misali aiki

**Lissafin ƙarfin aikin fannin NHS na gaggawa na misali** (tsarin yana bin hanyar aikin ONS):

```
Year 1: output volume index = 100.0 (base year), input index = 100.0
        → productivity index = 100.0

Year 2: activity volume rises 3.0% (more operations, more appointments)
        but average waiting time worsens, applying a quality-adjustment
        discount of −1.0%
        Quality-adjusted output index = 100 × 1.030 × 0.990 = 101.97

        Inputs rise: staff numbers +4.0%, other costs (deflated) +1.5%,
        weighted input index = 100 × 1.032 = 103.2

Productivity growth = (101.97 / 100 − 1) − (103.2 / 100 − 1)
                     = 1.97% − 3.2% = −1.23 percentage points

Interpretation: activity rose, but inputs rose faster and quality fell
slightly, so productivity — output per unit of input — declined even
though "more care was delivered."
```

Wannan shi ne ainihin tsarin da wallafe-wallafen ONS suka yi rahoto akai-akai ga sassan NHS bayan annoba: ƙaruwar kashe kuɗi da ƙaruwar ayyuka na ɗanye suna zaune tare da faɗuwar ƙarfin aiki da aka auna idan aka yi la'akari da daidaita inganci da ƙaruwar shigarwa duka.

## Alaƙa da injiniyancin manhaja

Ƙarfin aikin hidimomin jama'a shi ne abokin matakin al'umma na muhawarar ƙarfin aikin injiniya (maki na labari da aka kai a gaban [ma'aunan DORA (DORA metrics)](../maaunin-dora-don-ƙimar-jamaa/) a gaban [ma'aunan kwarara (flow metrics)](../maaunin-kwarara-a-isar-da-aikin-gwamnati/)): adadin aiki na ɗanye ba tare da daidaita inganci ba yana ɓatarwa daidai a asibiti kamar yadda "layukan lamba da aka kai" yake a ƙungiyar software. Ya kamata ƙungiyoyin da ke gina bututun bayanan aiki ga ma'aikatu su ɗauki daidaita inganci a matsayin mataki na sauya bayanai na farko mai juzu'i, ba ƙaramar bayani ba — domin amincin ONS da kansa yana dogara ne a kan wannan daidaitawa kasancewa a bayyane, mai maimaituwa, kuma ana sake duba shi yayin da ingantattun bayanan inganci ke zuwa (ONS yana sake duba ƙiyasin ƙarfin aikin shekarun baya yayin da bayanan inganci na tushe — misali ƙimar tsira — ke kammaluwa, don haka duk wani tsarin ƙasa da ke cin waɗannan alƙaluma dole ne ya iya sarrafa gyare-gyaren da suka koma baya, ba kawai ƙara sabbin lokuta ba). Yana kuma haɗuwa kai tsaye da [jimillar kuɗin mallaka (total cost of ownership)](../jimillar-kuɗin-mallaka-a-it-na-gwamnati/) da [ƙarfin aikin AI a ɓangaren jama'a (AI productivity in the public sector)](../ƙaruwar-aiki-ta-ai-a-fannin-gwamnati/): tsarin da ke ƙara yawan ayyuka na ɗanye ba tare da inganta ko riƙe inganci ba, bisa ma'anar ONS da kansa, ba ingantuwar ƙarfin aiki ba ne.

## Tarkuna

- **Ɗaukar ƙaruwar shigarwa a matsayin ƙaruwar ƙarfin aiki**: ƙarin kashe kuɗi da ke ba da kuɗin ƙarin ma'aikata yana samar da ƙarin *ayyuka*, ba ƙarin *ƙarfin aiki* ba, sai dai idan fitarwa ga kowace naúrar shigarwa ma ta ƙaru — ana rikita su akai-akai a sharhin siyasa.
- **Watsi da daidaita inganci gaba ɗaya**: ma'aunin fitarwa da aka gina daga ƙidayar ayyuka na ɗanye kawai zai nuna "ribar ƙarfin aiki" daga yin ƙarin wani abu mai ƙarancin daraja ko inganci; daidaita ingancin ONS ya wanzu musamman don kama wannan.
- **Kwatanta ma'aunan ƙarfin aiki tsakanin ƙananan fannoni ba tare da daidaita zamanin hanyar aiki ba**: ƙarfin aikin lafiya, ilimi, da 'yan sanda kowanne an gina shi daga tushen bayanan ayyuka da inganci daban-daban a zagayen gyara daban-daban — kwatancen fannoni mara zurfi yana kwatanta kayan aiki marasa jituwa.
- **Karanta faɗuwar ƙarfin aiki ta shekara ɗaya a matsayin yanayi na dindindin**: alƙaluman ƙarfin aiki na lokacin annoba da bayan annoba sun nuna sauye-sauye masu yawa daga shekara zuwa shekara yayin da bayanan inganci (misali jerin jira, dawo da tiyata ta zaɓi) kansu suka canza; ONS yana yin gargaɗi akai-akai a kan wuce gona da iri wajen fassara motsi na shekara ɗaya.

## Majiyoyi

- Office for National Statistics, "Public Service Productivity" series.
  <https://www.ons.gov.uk/economy/economicoutputandproductivity/publicservicesproductivity>
- Office for National Statistics, "Public Service Productivity: Total, UK — Sources and Methods."
  <https://www.ons.gov.uk/economy/economicoutputandproductivity/publicservicesproductivity>
