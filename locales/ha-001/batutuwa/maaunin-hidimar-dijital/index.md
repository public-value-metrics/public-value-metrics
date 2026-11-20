# Ma'aunin Hidimar Dijital

Ma'aunin Hidimar GOV.UK (GOV.UK Service Standard) shi ne ƙofar da dole kowace hidimar dijital ta gwamnatin tsakiya ta shiga kafin ta fara aiki: ƙa'idodi 14 da aka wallafa, waɗanda wani kwamiti mai zaman kansa ke tantancewa a ƙarshen kowane mataki na aiwatarwa. Shi ne hanyar da ke mayar da "gina ingantattun hidimomin jama'a" daga taken baki zuwa hukunci na ci ko faɗi mai takardun shaida — kuma shi ne ɗan gadon kai tsaye na umarnin "dijital a matsayin tsoho" na Dabarar Dijital ta Gwamnati ta 2012.

## Dalilin da ya sa yake da muhimmanci

Kafin Ma'aunin Hidimar ya wanzu, gazawar fasahar sadarwa ta gwamnati ba ta cika bayyana ba sai bayan an ƙaddamar da hidima, kuma ba kasafai ake iya danganta ta da wani shawara da za a iya nuna ba. Dabarar Dijital ta Gwamnati ta 2012 ta yi wa ma'aikatu alƙawarin sake tsara hidimomin mu'amala 25 mafi yawan amfani da jama'a a matsayin "dijital a matsayin tsoho", sannan ta goyi bayan alƙawarin da hanyar tilasta bin ƙa'ida: ba za a iya ƙaddamar da hidima a GOV.UK ba sai ta wuce tantance hidima bisa abin da a lokacin ya kasance ma'auni mai ƙa'idodi 26 (an haɗa shi zuwa 18 a 2019, kuma yanzu ma'aunin ƙa'idodi 14 ne ke aiki, wanda ya ƙunshi rukuni uku — fahimtar buƙatun masu amfani, samar da kyakkyawar hidima, da amfani da fasahar da ta dace). Tantance hidima abu ne na gaske: kwamitin masu tantancewa daga GDS ko ma'aikatar da abin ya shafa yana nazarin shaidu, yana tambayar ƙungiyar, sannan ya bayar da hukunci na ci, faɗi ko "ba a cika ba" a kan kowace ƙa'ida, wanda ake wallafawa a shafin tantance hidimar. Faɗin tantancewa yana hana hidima ci gaba daga beta na sirri zuwa beta na jama'a, ko daga beta zuwa aiki kai tsaye (live) — ƙofa ce ta gaske, ba bita kawai ba.

## Lissafi

Ma'aunin Hidimar tsari ne, ba dabara ba, amma yana aiki a matsayin tsarin yanke shawara na matakai masu ƙofofi:

```
Discovery  → Alpha assessment  → Beta assessment  → Live assessment
             (not mandatory     (mandatory before   (mandatory before
              for all services,  public beta launch) removing "beta" tag
              but recommended)                       and closing old channel)

Each assessment: evidence + team interview → panel verdict per point
  Met / Partially met / Not met
Overall outcome: Pass / Pass with conditions / Fail (re-assessment required)

Cost of a fail ≈ cost of the next sprint cycle to remediate
              + delay to the [channel-shift-savings](../tanadin-sauya-hanyar-hidima/)
                the service was funded to deliver
```

Ƙa'ida ta 10 ("ayyana yadda nasara take, kuma ka wallafa bayanan aiki") ita ce ke ciyar da [kuɗin kowace mu'amala](../kuɗin-kowace-maamala/) da [ma'aunin hidima da ma'aunin mu'amala](../ƙaidodin-hidima-da-maaunan-muamala/) — Ma'aunin yana wajabta aunawa, ba hidimar kaɗai ba.

## Misali aiki

**Hidimar neman gidaje ta ƙaramar hukuma**: ƙungiyar majalisa ta isa tantancewar beta da hidima da ta cika ƙa'idodi 11 cikin 14, amma ta faɗi a ƙa'ida ta 5 ("tabbatar kowa zai iya amfani da hidimar") saboda babu hanyar taimakon dijital ga masu nema waɗanda ba su da intanet, kuma ta faɗi a ƙa'ida ta 9 saboda ana adana bayanan sirri a rubutun kuskuren aikace-aikace ba tare da ɓoyewa ba.

```
Direct cost of the fail:
  Re-assessment slot: 6–8 week wait for the next available panel
  Remediation sprint: 2 developers × 3 weeks × £550/day ≈ £34,650
  Assisted-digital channel design: 1 researcher × 2 weeks ≈ £5,000

Delay cost: service was forecast to shift 40% of 18,000/year housing
enquiries from £8.50 phone calls to £0.20 digital transactions
  = 7,200 × (£8.50 − £0.20) = £59,760/year foregone, pro-rated for the
    ~2-month delay ≈ £9,960

Total cost of the failed assessment ≈ £49,610
```

Manufar lissafin ba daidaito ba ne — shi ne cewa faɗin tantancewa yana da farashi na gaske da za a iya ƙididdigawa, kuma shi ya sa ƙofar take da haƙora.

## Alaƙa da injiniyancin manhaja

Ga injiniyoyi, Ma'aunin yana kama da jerin abubuwan da za a duba a fannin gine-gine da isarwa kamar yadda yake takarda ta manufofi: ƙa'ida ta 11 ("zaɓi kayan aiki da fasahar da suka dace") da ta 12 ("buɗe sabuwar lambar tushe") yanke shawara ne na injiniya kai tsaye, kuma ƙa'ida ta 14 ("gudanar da hidima mai tabbaci") tana buƙatar SLO da hanyoyin magance matsala irin waɗanda kowace tsarin samarwa ke buƙata. Shi ne tsarin rufi na wannan rukunin batutuwa — [kuɗin kowace mu'amala](../kuɗin-kowace-maamala/) da [tanadin sauya hanya](../tanadin-sauya-hanyar-hidima/) su ne abin da Ma'aunin ke ƙoƙarin kare wa daga fannin kuɗi, [haɗa kowa cikin dijital](../haɗa-kowa-da-dijital/) shi ne abin da ƙa'ida ta 5 ta wanzu don tabbatarwa, kuma abubuwan [gwamnati a matsayin dandamali](../gwamnati-a-matsayin-dandamali/) (GOV.UK Notify, Pay, One Login) suna cika ƙa'ida ta 13 ("yi amfani da kuma ba da gudummawa ga buɗaɗɗun ma'auni, abubuwan haɗin gwiwa da tsare-tsare") galibi ta atomatik. Duba kuma [gina ko saya a gwamnati](../gina-ko-saya-a-gwamnati/) don ganin yadda ƙa'idar "kayan aiki masu dacewa" ke bayyana a yanke shawarar sayayya.

## Tarkuna

- **Ɗaukar tantancewa a matsayin akwatin bin ƙa'ida na ranar ƙaddamarwa**: ƙungiyoyin da suka fara karanta ƙa'idodi 14 mako ɗaya kafin tantancewar betansu suna faɗi kamar yadda ake tsammani; ana nufin Ma'aunin ya tsara yanke shawara tun daga discovery, ba ya duba su a baya ba.
- **Tantance samfurin gwaji, ba hidimar ba**: kyakkyawan nuni na iya wuce bitar da sigar hidimar ta gaske — mai haɗa kowa ta dijital da taimako, mai kula da matsaloli — za ta faɗi; ana nufin masu tantancewa su bincika wannan gibi, amma ƙananan hidimomin da suka tabbatar da kansu galibi suna tsallake shi.
- **Rashin sake tantancewa kafin faɗaɗawa**: hidimar da aka tantance a 5% na yaɗuwarta ba ta ci gaba da cika ƙa'ida ta atomatik a 100% — nauyin aiki, buƙatar gazawa, da masu amfani da lamura na musamman duk suna canzawa.
- **Rikita Ma'aunin Hidima da tsarin ƙira**: abubuwan GOV.UK Design System suna cika wasu ƙa'idodi (daidaito, samun dama) amma Ma'aunin kuma yana ƙunshe da tsarin ƙungiya, aikin agile, da da'ar bayanai — hidima mai kyan gani na iya faɗi a ƙa'ida ta 2, 6 ko 9.

## Majiyoyi

- GOV.UK Service Manual, Service Standard. <https://www.gov.uk/service-manual/service-standard>
- GOV.UK Service Manual, point 14: operate a reliable service. <https://www.gov.uk/service-manual/service-standard/point-14-operate-a-reliable-service>
- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
- GOV.UK Service Manual, service assessments. <https://www.gov.uk/service-manual/service-assessments>
