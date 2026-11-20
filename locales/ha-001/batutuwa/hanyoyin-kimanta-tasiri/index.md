# Hanyoyin Kimanta Tasiri

Hanyoyin kimanta tasiri su ne tsare-tsaren ƙididdiga da gwaji da ake amfani da su don ƙiyasta abin da manufa ko shiri ya haifar a zahiri, sabanin abin da da ma zai faru ko ta yaya — gwajin bazuwar mai sarrafawa (RCT), bambanci-cikin-bambance-bambance (difference-in-differences), daidaita maki na yiwuwa (propensity score matching), da tsarin katsewar koma baya (regression discontinuity design) su ne huɗu da aka fi amfani da su a manufofin jama'a na Burtaniya. Sun wanzu saboda yawancin shiga tsakani na gwamnati ba za a iya gwada su a dakin gwaji ba: ba za ka iya raba bazuwar wane gari zai sami sabuwar hanyar bas ba kamar yadda za ka iya raba bazuwar wane majiyyaci zai sami magani, don haka waɗannan hanyoyi suna aro dabarar dalili iri ɗaya ba tare da buƙatar rabon bazuwar kullum ba.

## Dalilin da ya sa yake da muhimmanci

Magenta Book na HM Treasury, Annex A kan hanyoyin kusan-gwaji, shi ne jagorar da aka sani ta gwamnatin Burtaniya don zaɓi tsakanin waɗannan tsare-tsare, kuma ƙungiyoyi kamar Education Endowment Foundation da What Works Centre for Local Economic Growth suna kafa matsayin shaida da ya ginu a kansu — RCTs inda bazuwar zai yiwu kuma ya dace da ɗabi'a, tsare-tsaren kusan-gwaji inda ba haka ba. Zaɓin hanya ba abin da za a yi daga baya na fasaha ba ne: yana ƙayyade ko kimantawa za ta iya amsa "shin shirin ne ya haifar da wannan?" ko kawai "shin wannan ya faru bayan shirin ya fara?", wanda shi ne tambaya ɗaya da [nazarin yanayin da ba a samu shiga ba](../nazarin-counterfactual/) aka gina don tilasta masu aiki su yi kafin a ba da umarnin kowace kimantawa.

## Lissafi

```
RCT:
  Impact = mean(outcome | treatment group) − mean(outcome | control group)
  (valid because assignment to treatment is random)

Difference-in-differences (DiD):
  Impact = [outcome_after(treated) − outcome_before(treated)]
         − [outcome_after(control) − outcome_before(control)]
  (requires a "parallel trends" assumption: treated and control would have moved together
   absent the intervention)

Propensity score matching (PSM):
  1. Estimate P(treatment = 1 | covariates X) for every unit → propensity score
  2. Match treated units to untreated units with similar propensity scores
  3. Impact = mean(outcome | treated) − mean(outcome | matched control)

Regression discontinuity design (RDD):
  Impact = jump in outcome observed at the eligibility threshold,
           comparing units just above vs just below the cutoff
```

## Misali aiki

**Ƙaramar hukuma (bambanci-cikin-bambance-bambance don shirin iyalai masu matsala)**: sakamakon shi ne halartar makaranta. Yankin da aka yi wa shiri yana motsawa daga 84% zuwa 89% na halarta (+maki 5 na kashi) a tsawon lokacin shirin; yanki mai kama amma da ba a yi wa shiri ba yana motsawa daga 85% zuwa 87% (+maki 2 na kashi) a lokaci ɗaya. Ƙiyasin tasirin DiD: 5 − 2 = +maki 3 na kashi da aka danganta ga shirin. Idan aka yi amfani da shi ga ƙungiyar ɗalibai 2,000 a yankin da aka yi wa shiri, wannan ya yi daidai da kusan ɗalibai 60 ƙari (3% × 2,000) da suka isa rukunin halarta mafi girma, ƙarin bayani da ya kamata a ruwaito shi tare da gargaɗin daidaiton hanyoyi (parallel trends), ba a matsayin ƙidayar kai daidai ba.

**Ƙungiyar agaji (daidaita maki na yiwuwa don ƙungiyar agajin ƙwarewar aiki)**: masu shiga shirin 300 an daidaita su da mutane 300 daga babban bayanan gudanarwa ta amfani da maki na yiwuwa da aka gina daga shekaru, tarihin aikin da ya gabata, da matakin cancanta. Adadin ɗaukar aiki na wata 12: ƙungiyar da aka yi wa shiri da aka daidaita 46%, ƙungiyar kwatance da aka daidaita 33%. Ƙiyasin tasirin PSM: 46% − 33% = +maki 13 na kashi da aka danganta ga shirin, bisa sharaɗin babu wani abin da ba a lura da shi (kamar kuzari) da ke tura shiga da sakamako duka.

## Alaƙa da injiniyancin manhaja

Ko ɗayan waɗannan tsare-tsare yana yiwuwa daga baya ya dogara sosai da shawarwarin injiniyancin bayanai da aka yanke da wuri. RDD yana buƙatar madaidaicin canji mai gudana da aka rubuta da tsabtataccen ƙofar cancanta; DiD yana buƙatar bayanan panel masu kwatantuwa a tsawon lokaci ga yankunan da aka yi wa shiri da na kwatance duka, wanda ke nufin haɗin kai daidai tsakanin tsarori da shekaru; PSM yana buƙatar bayanai masu wadatar abubuwan tushe da aka ɗauka kafin shiri, ba waɗanda aka sake gina su daga baya ba. Tsarin bayanai da aka ƙera tare da [ka'idar canji](../kaidar-sauyi/) da [tsarin dabaru](../samfurin-dabaru-na-shiri/) tun daga farko — yana ɗaukar abubuwan tushe, kwanaki, da bayanan da suka cancanci ƙungiyar kwatance — shi ne ke sa kimantawar tasiri mai tsauri ta yiwu daga baya, maimakon gaggawar tsada ta bayan-lamari. Duba [kimanta tasiri da kimanta tsari](../kimanta-tasiri-da-kimanta-tsari/) don tambayar da ke cike gurbi wadda waɗannan hanyoyi ba sa amsawa su kaɗai.

## Tarkuna

- **Tilasta RCT inda ba zai yiwu ba ko ba ya dace da ɗabi'a**, ko akasin haka ba taɓa la'akari da tsarin kusan-gwaji ba lokacin da ainihin dama gare shi — ƙofar manufa, ƙaddamarwa a matakai — ta kasance kuma ba a yi amfani da ita ba.
- **Watsi da zaton daidaiton hanyoyi a DiD.** Idan yankin kwatance ya riga ya rabu da yankin da aka yi wa shiri kafin shiga tsakani, kwatancen maki biyu ya gurɓace; duba hanyoyin da suka gabata, ba kawai kafin/bayan ba.
- **Daidaitawa kan abubuwan da aka lura kawai a PSM.** Zaɓe da ba a lura da shi ba, kamar kuzarin mai shiga, na iya ɓata ƙiyasi ko da abubuwan da aka lura sun daidaita sosai.
- **Murɗa canji mai gudana a RDD.** Idan mutane za su iya tasiri maki nasu su faɗi daidai cikin ƙofar cancanta, katsewar ba ta ƙara ware tasirin dalili ba.

## Majiyoyi

- HM Treasury, Magenta Book (2020), Annex A: Quasi-Experimental Methods. <https://www.gov.uk/government/publications/the-magenta-book>
- What Works Centre for Local Economic Growth, evidence review methodology. <https://whatworksgrowth.org/>
- Education Endowment Foundation, evaluation guidance. <https://educationendowmentfoundation.org.uk/>
