# Kanālu pārslēgšanas ietaupījumi

Kanālu pārslēgšanas ietaupījumi (angl. channel shift savings) ir prognozētais izmaksu samazinājums, pārvietojot darījumu apjomu no dārgiem kanāliem — tālruņa, klātienes lodziņiem, papīra pasta — uz lētu digitālo pašapkalpošanos. Tā ir finansiālā dzinējspēka daļa „digitālajam pēc noklusējuma", un arī biznesa gadījuma pozīcija, kas visticamāk ir kļūdaina, jo pieņēmums, uz kura tā balstās — ka bezsaistes kanāli sarūk, augot digitālajai izmantošanai —, ir patiess tikai dažkārt.

## Kāpēc tas ir svarīgi

Aritmētika izskatās neapstrīdama, izmantojot [izmaksas uz darījumu](../izmaksas-uz-darījumu/) skaitļus no Digital Efficiency Report: pārvietojot miljonu darījumu no £8,62 klātienes apmeklējuma uz £0,15 digitālo, ietaupījums pārsniedz £8 miljonus. Taču ietaupījums kļūst par pārdalāmu naudu tikai tad, ja sarūkošā kanāla *fiksētā jauda* tiešām tiek likvidēta — zvanu centra vietas, lodziņa darbinieki, tālruņa līguma minūtes —, un pašvaldību digitālās programmas atkārtoti konstatējušas, ka kopējais kontaktu apjoms nesamazinās proporcionāli digitālās izmantošanas pieaugumam. Pašvaldību digitālās transformācijas programmu pētījumi un tādas institūcijas kā Socitm un Local Government Association ir dokumentējušas atkārtotu shēmu: digitālie kanāli piesaista patiesi jaunus kontaktus (iedzīvotāji, kas nebūtu zvanījuši vai apmeklējuši, tagad to dara, jo tas ir vieglāk), un ievērojama daļa „digitālo" darījumu pusceļā neizdodas un tik un tā rada tālruņa zvanu — tāpēc zvanu apjoms samazinās daudz mazāk, nekā liecinātu digitālās izmantošanas procents, dažkārt absolūtos skaitļos nemaz nesamazinās, pat ja tā *īpatsvars* kopējā kontaktu apjomā krīt.

## Matemātika

```
Bruto kanālu pārslēgšanas ietaupījums = pārslēgtais apjoms × (izmaksas_vecais_kanāls − izmaksas_digitālais)

Neto (realizētais) ietaupījums = bruto ietaupījums
                       − jaunais/ēnu pieprasījums, ko rada vieglākais kanāls
                       − kļūmju pieprasījuma izmaksas (digitālās kļūmes,
                         kas tik un tā rada tālruņa zvanu vai lodziņa apmeklējumu)
                       − neatbrīvotās fiksētās jaudas izmaksas (zvanu
                         centrs var samazināt darbiniekus tikai diskrētās vienībās;
                         15 % apjoma kritums reti ļauj samazināt 15 %
                         štata)

Realizācijas slieksnis: ietaupījumus var ieskaitīt tikai tad, kad apjoms
nokrītas zem līmeņa, ko vecais kanāls var nodrošināt ar nākamo mazāko diskrēto
jaudas soli (piem., zaudējot vienu pilnu maiņu, vienu pilnu darba vietu,
vienu līgumā noteiktu štata grupu)
```

## Aprēķina piemērs

**Apgabala padomes invalīdu stāvvietas karšu (blue badge) atjaunošanas pakalpojums**: 60 000 atjaunošanu gadā, iepriekš 100 % pa tālruni/papīrā par £6,40 uz darījumu. Tiek palaists jauns digitālais pakalpojums, kas gada laikā sasniedz 65 % digitālo izmantošanu par £0,30 uz digitālo darījumu.

```
Naivs (bruto) ietaupījuma aprēķins:
  39 000 pārslēgti × (£6,40 − £0,30) = £237 900 gadā

Kas patiesībā notika, pēc padomes kontaktu centra datiem:
  Zvanu apjoms samazinājās no 60 000 gadā uz 46 000 gadā (−23 %, nevis −65 %)
  tāpēc, ka: 9 000 digitālo ceļojumu neizdevās un radīja papildu zvanu
             (kļūmju pieprasījuma noplūde), un 4 000 cilvēku, kas iepriekš
             nemaz neatjaunoja, tagad atjauno, atraduši to vieglu tiešsaistē
             (ēnu pieprasījums — patiess piekļuves uzlabojums, bet ne ietaupījums)

  Zvanu kontaktu centrs ir nokomplektēts grupās pa 8 000 zvaniem/FTE;
  14 000 zvanu kritums (60 000 → 46 000) atbrīvo 1,75 FTE, kas praksē
  noapaļots uz leju līdz 1 FTE, kas faktiski pārcelts = £34 000 gadā

Realizētais ietaupījums = £34 000 gadā plus digitālā kanāla izveides/darbības
  izmaksas, kas novērstas 39 000 darījumiem ≈ £34 000 + (39 000 × £0,30
  digitālās izmaksas, kas jau uzskaitītas) — niecīga daļa no £237 900 virsraksta
  skaitļa, lai gan pakalpojums lietotājiem tik un tā nepārprotami labāks.
```

## Saikne ar programmatūras inženieriju

Inženieru mācība ir tāda, ka kanālu pārslēgšanas ietaupījumus realizē *operatīvi* lēmumi (maiņu plānošana, likvidēšana, līgumu pārrunas), nevis programmatūras izlaide — komanda var izpildīt katru [digital-service-standard](../digitālo-pakalpojumu-standarts/) punktu un tomēr sniegt nulles neto ietaupījumu, ja neviens nelikvidē vecā kanāla fiksēto jaudu. Kļūmju pieprasījuma instrumentēšana (kur digitālajā ceļojumā lietotāji pamet un ko dara tālāk) ir atrisināma piltuves analītikas problēma un vienīgā visaugstākās ietekmes lieta, ko inženieru komanda var darīt, lai aizsargātu ietaupījumu gadījumu; tā ir arī tiešā saite ar [izmaksām uz darījumu](../izmaksas-uz-darījumu/), ko kļūmju pieprasījums kluši uzpūš. Sk. [ieguvumu realizācija](../ieguvumu-realizācija/) par plašāku disciplīnu, kā pārbaudīt, vai biznesa gadījuma ietaupījumi patiešām iestājas, un [digitālā iekļaušana](../digitālā-iekļaušana/) par to, kāpēc bezsaistes kanālu parasti nevar un nevajag pilnībā likvidēt.

## Biežākās kļūdas

- **1:1 kanālu aizstāšanas pieņēmums**: digitālās izmantošanas modelēšana kā tieša atņemšana no tālruņa/lodziņa apjoma, ignorējot ēnu pieprasījumu un kļūmju pieprasījuma noplūdi, kas dokumentēta pašvaldību kanālu pārslēgšanas pētījumos.
- **Bruto ietaupījumu ieskaitīšana pirms likvidēšanas**: ietaupījuma uzskaite biznesa gadījumā gadā, kad izmantošana pieaug, nevis gadā (ja vispār), kad vecā kanāla jauda tiešām tiek samazināta.
- **Štata izmaksu pakāpjveida rakstura ignorēšana**: 20 % apjoma kritums reti pārvēršas 20 % izmaksu kritumā, jo kontaktu centri un lodziņi tiek nokomplektēti diskrētās grupās, nevis nepārtraukti.
- **Ēnu pieprasījuma uzskatīšana par izšķērdību**: jauni kontakti no iepriekš izslēgtiem vai atturētiem lietotājiem ir reāls [sabiedriskās vērtības](../sabiedriskā-vērtība/) pieaugums, nevis modelēšanas kļūda — tas jāuzrāda kā piekļuves iznākums, nevis jānovērš kā troksnis.

## Avoti

- Cabinet Office, Digital Efficiency Report (2012). <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- Local Government Association, digital transformation and channel shift resources. <https://www.local.gov.uk/our-support/efficiency-and-income-generation/digital-transformation>
- Socitm, local public services digital insight research. <https://www.socitm.net/>
