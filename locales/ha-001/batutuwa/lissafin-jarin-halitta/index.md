# Lissafin Jarin Halitta (Natural Capital Accounting)

Lissafin jarin halitta yana sanya muhalli a matsayi ɗaya da kowane ɗaya daga cikin kadarorin ƙasa ko na ƙungiya: yana auna ma'ajin albarkatun halitta (dazuka, ƙasa, koguna, fadama, yanayi) da kwararar hidimomin da suke samarwa (shan carbon, kariyar ambaliya, shakatawa, abinci), a zahiri da kuma a kuɗi, don lalacewar muhalli ta bayyana a yanke shawara kamar yadda ɓarnar jarin kuɗi za ta bayyana. Birtaniya na cikin gwamnatocin da suka fi ci gaba wajen yin haka bisa tsari, ta hanyar 25 Year Environment Plan (2018) da kuma aiwatarwa ta asusun UK Natural Capital na ONS da ƙarin jagorar Green Book na HM Treasury.

## Dalilin da ya sa yake da muhimmanci

Lissafin da aka saba — na kamfanoni da na gwamnati duka — yana ɗaukar daji a matsayin maras daraja har sai an sare shi an sayar a matsayin katako, a lokacin ne yake zama GDP. Lissafin jarin halitta ya wanzu don rufe wannan gibi: 25 Year Environment Plan na Birtaniya ya ɗauki alƙawarin gwamnati na saka tunanin jarin halitta a duk manufofi, yana bayyana buri na zama "tsarar farko da za ta bar muhalli a yanayi mafi kyau fiye da yadda muka same shi." Tun daga lokacin ONS ya wallafa asusun UK Natural Capital na shekara-shekara (<https://www.ons.gov.uk/economy/environmentalaccounts/bulletins/uknaturalcapitalaccounts/latest>) wanda ke ƙiyasta ƙimar kuɗi ta hidimomin muhalli — daga shakatawa a daji zuwa amfanin lafiya na koren wurare a birni zuwa ajiyar carbon a fadamar peat — ta amfani da tsarin National Accounts iri ɗaya da ake amfani da shi ga jarin da aka samar, don jarin halitta ya iya zama a ƙarshe a cikin takardar kadarori da hanyoyi, gine-gine, da kayan aiki. Jagorar Enabling a Natural Capital Approach (ENCA) ta HM Treasury, wadda ƙari ce ga Green Book (<https://www.gov.uk/government/publications/enabling-a-natural-capital-approach-enca-guidance>), tana bayyana yadda masu kimantawa ya kamata su ƙididdige kuɗaɗe da alfanun muhalli a cikin takardun shaidar kasuwanci, don a iya kwatanta aikin hanya da ke lalata tsohon daji ko aikin ambaliya da ke maido da fadama a kan sharuɗɗan kuɗi masu daidaito maimakon ɗaya ya sami lamba ɗayan kuma sakin layi na gargaɗi.

## Lissafi

```
Ecosystem service asset value = NPV of the flow of services the asset provides

Asset value = Σ (t = 1 to T) [annual service flow value_t / (1 + r)^t]

where:
  service flow value_t = quantity of service in year t × unit value
                          (e.g. recreational visits × value per visit;
                           tonnes of carbon sequestered × carbon price)
  r = discount rate (Green Book social discount rate — see
      [social discount rate](../kason-rangwame-na-zamantakewa/))
  T = time horizon over which the asset is expected to provide the service
```

Wannan tsarin ƙimar yanzu ne (net present value) iri ɗaya da ake amfani da shi don ƙididdige jarin da aka samar ko kimanta kowane zuba jari na jama'a ƙarƙashin [kimanta Green Book](../kimanta-shawarwari-ta-green-book/) — gudummawar lissafin jarin halitta ita ce samar da ingantattun adadi na zahiri da ƙimar naúra don hidimomin da a baya aka ba su farashin sifili.

## Misali aiki

**Dajin birni, ƙimar shakatawa**: daji mai hekta 50 yana samun ziyarar shakatawa da aka ƙiyasta 80,000 a shekara, kowacce an ƙididdige ta (ta hanyar kuɗin tafiya ko hanyar fifikon da aka bayyana — duba [ƙididdige ƙima ta fifikon da aka bayyana a aikace (revealed preference valuation)](../ƙididdige-ƙima-ta-fifikon-da-aka-bayyana-a-aikace/) da [ƙididdige ƙima ta fifikon da aka faɗa (stated preference valuation)](../ƙimantawa-ta-fifikon-da-aka-bayyana/)) a £3 ga kowace ziyara. Ana sa ran dajin zai ci gaba da bayar da wannan hidima na shekaru 50, an kimanta shi da ƙimar rage daraja (discount rate) 3.5%.

```
Annual recreational value = 80,000 × £3 = £240,000/year

NPV over 50 years at 3.5% ≈ £240,000 × annuity factor(3.5%, 50 years)
annuity factor(3.5%, 50) ≈ 21.4

Asset value ≈ £240,000 × 21.4 ≈ £5,136,000
```

**Ƙara ajiyar carbon**: dajin guda yana shan CO2 da aka ƙiyasta tan 400 a shekara, an ƙididdige shi a farashin carbon na gwamnati da ba na kasuwa ba na kusan £75/tan (na misali — a yi amfani da ƙimar carbon da BEIS/DESNZ suka wallafa na yanzu don kimantawa ta gaske).

```
Annual carbon value = 400 × £75 = £30,000/year
NPV over 50 years at 3.5% ≈ £30,000 × 21.4 ≈ £642,000

Total woodland asset value (recreation + carbon) ≈ £5,136,000 + £642,000
                                                   ≈ £5,778,000
```

Wannan kafin a ƙara hidimomin rage ambaliya, bambancin halittu, ko ingancin iska da jagorar ENCA ke kuma neman masu kimantawa su yi la'akari da su — jimillar an yi ta ne da gangan a matsayin ƙasa, ba rufi ba.

## Alaƙa da injiniyancin manhaja

- Tsarin kula da muhalli da kadarori na ƙananan hukumomi da hukumomi (wuraren shakatawa, manyan hanyoyi, jikunan ruwa) na iya haɗa rajistar jarin halitta tare da rajistar kadarorinsu na zahiri, ta amfani da tsari ɗaya na kwararar hidima ninka ƙimar naúra kamar kowane [ma'ajin bayanai na kuɗin naúra (unit cost database)](../rumbun-bayanan-kuɗin-rakaa/) da ƙungiyar ke kula da shi.
- Saboda NPV na jarin halitta yana jin sauyin ƙimar rage daraja (duba annuity factor a misalin aiki), duk wani kayan aiki da ke ƙididdige shi ya kamata ya bayyana ƙimar da tsawon lokaci a matsayin shigarwar da ake gani, ba ya ɓoye su ba — ƙa'idar bayyana gaskiya iri ɗaya da aka tattauna a ƙarƙashin [adalci tsakanin tsararraki da rage daraja mai dorewa (intergenerational equity and sustainability discounting)](../adalci-tsakanin-tsararraki-da-rangwamen-dorewa/).
- Asusun jarin halitta suna ƙara zama shigarwar da ake buƙata a sassan tasirin muhalli na takardar shaidar kasuwanci ta [kimanta Green Book (green-book-appraisal)](../kimanta-shawarwari-ta-green-book/); ƙungiyar isarwa da ke gina kayan aikin takardun shaidar kasuwanci ya kamata ta ɗauki asusun ONS da ƙimar naúra ta ENCA a matsayin bayanan tunani da za a haɗa, ba abin da masu kimantawa za su sake ƙididdigewa daga tushe kowane lokaci ba.

## Tarkuna

- **Ƙirga hidimomin muhalli da suka haɗu sau biyu** — ƙimar shakatawa da ta bambancin halittu na wuri ɗaya na iya raba bayanan niyyar biya na asali; jagorar ENCA tana gargaɗi a fili a kan haɗa ƙididdiga da aka samo daga kayan bincike da suka haɗu.
- **Ɗaukar ƙimar kadarar jarin halitta a matsayin mai tsayuwa** — kwararar hidima tana canzawa da yanayi, gudanarwa, da matsin amfani da ƙasa; ƙimar carbon da rage ambaliya na daji a wannan shekaru goma ba dukiya ce ta dindindin ta wurin ba.
- **Amfani da matsakaicin ƙimar naúra ta ƙasa ga shawara ta gida sosai** — hekta ɗaya na daji na birni mai sauƙin isa da hekta ɗaya na tsaunuka masu nisa suna da ƙimar shakatawa daban-daban sosai; jagorar ENCA tana ba da shawarar ƙimar gida ko ta wuri musamman inda ake da ita maimakon komawa kan matsakaicin ƙasa.

## Majiyoyi

- ONS. "UK natural capital accounts."
  <https://www.ons.gov.uk/economy/environmentalaccounts/bulletins/uknaturalcapitalaccounts/latest>
- HM Government. "A Green Future: Our 25 Year Plan to Improve the Environment." (2018)
- HM Treasury / Defra. "Enabling a Natural Capital Approach (ENCA): guidance."
  <https://www.gov.uk/government/publications/enabling-a-natural-capital-approach-enca-guidance>
