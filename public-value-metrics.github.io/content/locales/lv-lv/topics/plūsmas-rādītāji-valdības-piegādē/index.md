# Plūsmas rādītāji valdības piegādē

Plūsmas rādītāji — Litla likums, nepabeigtā darba (WIP) ierobežojumi un plūsmas efektivitāte — apraksta, cik ātri darbs virzās cauri sistēmai ar ierobežotu jaudu. Sprinta tāfele ir viena no šādām sistēmām; pabalstu pieprasījumu rinda, plānošanas atļauju reģistrs vai vīzu lietu uzkrājums ir tā pati matemātika citā formastērpā.

## Kāpēc tas ir svarīgi

Valdības lietu slodzes ir rindu sistēmas, un rindu sistēmas pakļaujas rindu likumiem, vai nu kāds tās mēra, vai nē. Likumā noteiktie lēmuma pieņemšanas termiņi to dara skaidru: saskaņā ar Town and Country Planning režīmu lielākajai daļai nelielo plānošanas pieteikumu ir 8 nedēļu likumā noteikts lēmuma pieņemšanas mērķis, bet lielajiem pieteikumiem — 13 nedēļas — cikla laika saistība, kas iebūvēta tieši likumā. Home Office patvēruma lietu uzkrājums, ko vairākkārt pārbaudījuši National Audit Office un Home Affairs Select Committee, ir labi dokumentēts piemērs publiskai sistēmai, kurā nepabeigtais darbs ilgstoši auga ātrāk nekā caurlaidspēja, novedot cikla laikus tālu pāri jebkurām likumā noteiktām vai pakalpojuma gaidām. Plūsmas rādītāji dod gan inženieriem, gan lietu pārvaldības vadītājiem kopīgu, kvantitatīvu vārdnīcu tieši šim kļūmes režīmam, nevis atstāj to kā kvalitatīvu “uzkrājuma problēmu”.

## Matemātika

```
Litla likums:  WIP = Caurlaidspēja × Cikla laiks
           →   Cikla laiks = WIP / Caurlaidspēja

Plūsmas efektivitāte = aktīvais (darba) laiks / kopējais cikla laiks   (Vacanti)

WIP ierobežojuma efekts: pie nemainīgas caurlaidspējas WIP samazināšana uz pusi
aptuveni uz pusi samazina vidējo cikla laiku (Litla likums pārkārtots) —
svira, kas pieejama bez darbinieku skaita palielināšanas.
```

Ekvivalento matemātiku, kas pielietota programmatūras izvietošanas konveijeriem, nevis lietu pārvaldībai, skatiet [DORA rādītājos publiskajai vērtībai](../dora-rādītāji-publiskās-vērtības-nodrošināšanai/).

## Aprēķina piemērs

**Pašvaldības plānošanas nodaļa**: jebkurā brīdī atvērti 400 pieteikumi (WIP), komanda izskata 50 pieteikumus nedēļā (caurlaidspēja).

```
Cikla laiks = WIP / Caurlaidspēja = 400 / 50 = 8 nedēļas
```

Tas precīzi sakrīt ar likumā noteikto 8 nedēļu mērķi nelieliem pieteikumiem — bez rezerves, kas nozīmē, ka jebkura ienākošā pieprasījuma svārstība vai konsultējamo iestāžu atbildes laika svārstība pārsniegs likumisko termiņu.

**Plūsmas efektivitāte**: no šīm 8 nedēļām (56 kalendārās dienas) pieteikumam parasti ir ap 6 stundām faktiskā lietas apstrādātāja darba laika.

```
Plūsmas efektivitāte = 6 stundas / (56 dienas × 8 darba stundas/dienā)
                     = 6 / 448 ≈ 1,3 %
```

Vacanti etalons programmatūras komandām nosaka tipisko plūsmas efektivitāti 15–20 %; valdības lietu apstrāde ar vairākām likumā noteiktām konsultējamo iestāžu nodošanām un sabiedriskās apspriešanas logiem bieži darbojas par kārtu zemāk. 98,7 % “gaidīšanas” laika ir tas, kur patiesībā paliek astoņas nedēļas — nevis lietas apstrādātāju jaudā.

**WIP ierobežojuma iejaukšanās**: atvērto pieteikumu ierobežošana līdz 15 uz vienu lietas apstrādātāju, nevis neierobežotiem 25 (caurlaidspēju saglabājot nemainīgu), samazina WIP no 400 līdz aptuveni 240 16 cilvēku komandā:

```
Jaunais cikla laiks = 240 / 50 = 4,8 nedēļas
```

Gandrīz uz pusi samazināts cikla laiks politikas izmaiņas dēļ, nevis personāla palielināšanas dēļ — tā pati svira, ko velk DORA tipa piegādes komandas, ierobežojot sprinta WIP.

## Saikne ar programmatūras inženieriju

Plūsmas rādītāji ir kopīga valoda starp piegādes komandas Kanban tāfeli un lietu apstrādes grīdu, kurai tā būvē programmatūru: lietas apstrādātāja rinda un pull request rinda abas pakļaujas Litla likumam un abas pārsniedz cikla laika mērķus vienādi — pārāk daudz WIP attiecībā pret caurlaidspēju. Tas tieši svarīgi [kavējuma izmaksām publiskajās programmās](../kavēšanās-izmaksas-publiskajās-programmās/): cikla laiks × CoD ir mārciņas, kas jebkurā brīdī stāv rindā, un [pakalpojumu standartiem un darījumu rādītājiem](../pakalpojumu-standarti-un-darījumu-rādītāji/), kur publicēts apstrādes laika mērķis ir cikla laika saistība, ko, to neizpildot, var diagnosticēt tikai plūsmas rādītāji. Lietu apstrādes sistēmas programmatūrai WIP un cikla laiks jāatklāj kā pirmšķirīgi darbības rādītāji, nevis jāaprok lietu pārvaldības sistēmā, ko neviens nepārmeklē.

## Biežākās kļūdas

- **WIP ierobežojumu pievienošana, nelabojot patieso šaurāko vietu**: ja ierobežojums ir ārējas likumā noteiktas konsultējamās iestādes atbildes laiks, lietas apstrādātāju WIP ierobežošana tikai pārvieto rindu augšup, nevis to saīsina.
- **Plūsmas efektivitātes uztvere kā mērķa, ko var manipulēt**: 1,3 % aktīvā laika steidzināšana cikla laiku gandrīz nemaina; svira gandrīz vienmēr ir gaidīšanas stāvokļos, kas parasti nozīmē procesa pārveidi, nevis lietas apstrādātāju ātrumu.
- **Mainīguma ignorēšana**: Litla likums apraksta vidējos lielumus; lietu slodzei ar augstu pieprasījuma dispersiju vajadzīga rezerves jauda, nevis tikai stingrāks WIP ierobežojums, citādi likumiskie termiņi joprojām tiks nokavēti nepastāvīgajā astē, pat ja vidējais uzlabojas.
- **Nekonsekventa WIP mērīšana**: lieta, kas ierakstu sistēmā ir “atvērta”, bet patiesībā iestrēgusi, gaidot trešo pusi, joprojām ir WIP; tās izslēgšana glaimo skaitļiem, nemainot iedzīvotājiem redzamo realitāti.

## Avoti

- Vacanti D, *Actionable Agile Metrics for Predictability: An Introduction*, Actionable Agile Press, 2015.
- Reinertsen DG, *The Principles of Product Development Flow*, Celeritas Publishing, 2009.
- Ministry of Housing, Communities and Local Government, planning application statutory timescales. <https://www.gov.uk/guidance/making-an-application>
- National Audit Office, reports on Home Office asylum casework and accommodation. <https://www.nao.org.uk/>
