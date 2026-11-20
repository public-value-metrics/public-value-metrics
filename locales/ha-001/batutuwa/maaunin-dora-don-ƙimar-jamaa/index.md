# Ma'aunin DORA don Ƙimar Jama'a

Ma'aunin DORA (DevOps Research and Assessment) — yawan ƙaddamarwa, lokacin jagoranci na sauye-sauye, ƙimar gazawar sauyi, da lokacin dawo da hidima, tare da tabbaci (reliability) a matsayin na biyar — su ne ma'aunin kwatanta aikin isarwa mafi tabbatuwa a masana'antar manhaja. Idan aka fassara su zuwa harshen lissafin alhaki na gwamnati, kowanne wakili ne kai tsaye na yadda ƙimar jama'a ke isa ga ɗan ƙasa da sauri, kuma cikin aminci.

## Dalilin da ya sa yake da muhimmanci

Binciken DORA na shekaru goma, wanda ake wallafawa kowace shekara a matsayin *Accelerate State of DevOps Report* (hanyar Forsgren, Humble da Kim, wanda Google Cloud ke gudanarwa yanzu), yana rarraba ƙungiyoyi zuwa masu aiki na koli (elite), mai kyau, matsakaici da maras kyau. Ƙungiyoyin koli suna ƙaddamarwa a duk lokacin da ake buƙata, suna ɗaukar ƙasa da rana daga commit zuwa samarwa, suna faɗi a kusan 5% na sauye-sauye, kuma suna murmurewa cikin ƙasa da awa ɗaya; masu aiki marasa kyau suna ƙaddamarwa sau ɗaya a wata ko ƙasa da haka, suna ɗaukar watanni, suna faɗi a kusan 40% na sauye-sauye, kuma suna murmurewa cikin makonni. A gwamnati waɗannan ba ma'aunin fahariya na injiniya ba ne: Ma'aunin Hidima na Government Digital Service yana buƙatar ƙungiyoyi su "maimaita kuma su inganta akai-akai" kuma su iya amsa buƙatar mai amfani da sauri, kuma ma'aikatun da ba za su iya ƙaddamarwa cikin aminci da akai-akai ba ba za su iya cika wannan ma'auni ba ta tsari, ko menene binciken masu amfaninsu ya ce. Aikin ingancin dijital na Cabinet Office da kansa ya gano cewa tura ɗan ƙasa daga mu'amalar dijital da ta faɗi ko ta yi jinkiri zuwa tashar waya ko takarda yana da tsada — Rahoton Ingancin Dijital na GDS na 2012 ya ƙiyasta cewa wasu mu'amaloli na dijital suna kashe ƙasa da 20p idan aka kwatanta da hulɗar waya ko fuska-da-fuska da ke kashe har £8.62 — don haka gazawar sauyi a hidimar da ke fuskantar jama'a ba lokacin injiniya kawai take kashewa ba, tana tura ainihin fam zuwa kasafin cibiyar kiran waya (duba [tanadin sauya hanya](../tanadin-sauya-hanyar-hidima/)).

## Lissafi

```
Deployment frequency  = production deployments / time
Lead time for changes = t(deploy) − t(commit), median
Change failure rate   = failed changes / total changes × 100
Time to restore (MTTR) = t(restored) − t(failure), median
Reliability            = SLO attainment (availability, latency, correctness)
```

Fassarori zuwa ƙimar jama'a:

```
Lead time      → weeks in the pipeline × CoD, see cost-of-delay-in-public-programmes
Failure rate   → citizen-facing incident rate: CFR × cost per redirected
                 contact-centre call (or per failed statutory transaction)
Recovery time  → service outage harm: MTTR × (claims/applications blocked
                 per hour) × downstream cost or wellbeing loss per unit
Reliability    → benefit discount: a service at 99% availability delivers
                 ≈ 0.99 of its modelled benefit — the delivery analogue
                 of take-up or compliance shortfall
```

## Misali aiki

Ƙungiyar portal ɗin neman fa'idodi ta ƙaramar hukuma, kafin da bayan zuba jari a injiniyancin isarwa:

```
                    Before      After
Deploys             monthly     weekly
Lead time           8 weeks     5 days
CFR                 30%         10%
MTTR                3 days      4 hours
```

Ƙungiyar tana fitar da kusan ingantawa 25 a shekara, matsakaicin ƙimar £8,000/mako ([kuɗin jinkiri](../kuɗin-jinkiri-a-shirye-shiryen-jamaa/)). Rage lokacin jagoranci da kusan makonni 7.3 yana kawo gaba kwararar fa'idar kowace ingantawa: 25 × 7.3 × 8,000 ≈ **£1,460,000/shekara** na ƙimar da aka isar da wuri. Kan ƙimar gazawa: 25 × (0.30 − 0.10) = ƙarancin sauye-sauye 5 da suka faɗi a shekara; kowane sauyin da ya faɗi a portal na jama'a yawanci yana tura ƙiyasin ƴan ƙasa 2,000 zuwa tashar waya a £8.62 da 20p, ribar kuɗi ta kusan £8.42 × 2,000 ≈ £16,840 ga kowane lamari, don haka guje wa lamura 5 yana tanadin ≈ **£84,200/shekara**. Ana ƙimanta zuba jari a injiniyancin isarwa da kuɗi iri ɗaya da kowace shari'ar ƙimar jama'a.

## Misali da aka warware, ci gaba: tabbaci

Idan portal yana aiki a 97% samuwa maimakon manufa ta 99.5%, kuma kowane kaso na rashin aiki an yi ƙirar sa a matsayin 2% na da'awar da aka rasa saboda watsi, hidimar tana isar da kusan 0.975 na fa'idarta ta £2M/shekara da aka ƙiyasta — rangwamen fa'ida na £50,000/shekara wanda allon lokacin aiki kaɗai ba ya nuna shi ba.

## Alaƙa da injiniyancin manhaja

Ma'aunin DORA ma'aunin aikin hidimar jama'a ne sanye da wasu tufafi: lokacin jagoranci yana kwatanta [ma'aunin hidima da ma'aunin mu'amala](../ƙaidodin-hidima-da-maaunan-muamala/); ƙimar gazawar sauyi tana kwatanta ƙimar sake aiki da gunaguni; MTTR yana kwatanta tsawon lokacin da hidimar doka ba ta samuwa ga masu nema. Dabarun ingantawa suna ƙaura ta bangarori biyu domin dukansu tsarin layi ne ƙarƙashin ƙuntatawar alhaki — duba [ma'aunin kwarara a isar da gwamnati](../maaunin-kwarara-a-isar-da-aikin-gwamnati/) don lissafin layi da ke ƙarƙashinsu. Lura kuma da binciken DORA na 2025 cewa amfani da AI yana da alaƙa da mafi girman fitarwa amma *muni* a kwanciyar hankali — shiga tsakani da ke da inganci da illolin gefe, wanda shi ne daidai nazarin ribar-ƙarshe da batun [yawan aikin AI](../ƙaruwar-aiki-ta-ai-a-fannin-gwamnati/) na wannan rukuni ke aiwatarwa.

## Tarkuna

- **Wasa da ma'auni**: ƙara yawan ƙaddamarwa da sakewa marasa komai, ko cire gyaran gaggawa daga ƙidayar gazawar sauyi. Ayyana abubuwan da suka faru daidai kamar yadda ma'aunin hidimar doka ke ayyana "mu'amala mai nasara".
- **Teburin gasa tsakanin ma'aikatu**: rukunonin DORA suna kwatanta hanyoyin isarwa, ba hidimomi masu bambancin haɗari ba; tsarin biyan haraji da aka kimanta "mai kyau" na iya zama daidai matsayin da "koli" zai zama rashin tunani idan aka yi la'akari da buƙatun tabbatarwa.
- **Inganta ma'auni ɗaya kaɗai**: sauri ba tare da ƙimar gazawar sauyi ba shi ne ciniki na yau da kullum tsakanin fitarwa da rashin kwanciyar hankali — ruwaito dukan huɗun tare, ba a matsayin maki ɗaya ba.

## Majiyoyi

- DORA research and the annual *Accelerate State of DevOps Report*. <https://dora.dev/>
- Forsgren N, Humble J, Kim G, *Accelerate: The Science of Lean Software and DevOps*, IT Revolution Press, 2018.
- Cabinet Office, Digital Efficiency Report, 2012.
- DORA, 2025 State of AI-assisted Software Development report. <https://dora.dev/dora-report-2025/>
