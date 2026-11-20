# Tehniskais parāds kā sabiedriskās vērtības erozija

Tehniskais parāds ir Varda Kaningema (Ward Cunningham) 1992. gada metafora par netiešajām nākotnes izmaksām, ko rada iepriekšējie ātrie programmēšanas lēmumi: **pamatsumma** (parādā esošais sakārtošanas darbs) un **procenti** (pastāvīgā bremze piegādei). Mantotā valsts IT vidē šie procenti tiek maksāti tieši no sabiedriskās vērtības — lēnāka likumisko izmaiņu piegāde, augstāks kļūmju līmenis pilsoņiem paredzētos pakalpojumos un sarūkošs cilvēku skaits, kas vispār var droši pieskarties sistēmai.

## Kāpēc tas ir svarīgi

Mantotās lielmašīnu un COBOL laikmeta sistēmas Apvienotās Karalistes valdības departamentos — visbiežāk min HMRC un DWP — nes labi dokumentētu un pieaugošu risku, ko Nacionālais revīzijas birojs (National Audit Office) ir vairākkārt norādījis, tostarp ziņojumā *Digital Transformation in Government* (<https://www.nao.org.uk/>): novecojušas platformas, kuras dārgi mainīt, arvien grūtāk aizsargāt un kuras ir atkarīgas no speciālistu darbaspēka, kas aiziet pensijā ātrāk, nekā tiek aizstāts. Atšķirībā no privātā sektora atlikuma tas parāds atrodas tieši starp pilsoņiem un viņu likumiskajām tiesībām — pabalstu aprēķināšanas dzinējs, ko nevar droši mainīt, ir politikas īstenošanas ierobežojums, nevis tikai inženiertehnisks neērtums. 2013. gada Universal Credit IT programmas pārstartēšana, kad Nacionālais revīzijas birojs konstatēja, ka sākotnējais izstrādājums nenodrošinās vērtību par naudu un ievērojama programmatūras aktīva daļa bija jānoraksta, ir kanonisks piemērs tam, kā neizcenots tehniskais parāds panāk dzīvu, ministriem redzamu publisku programmu.

## Matemātika

```
SQALE pamatsumma = Σ pār pārkāpumiem (sakārtošanas laiks) × izstrādātāja izmaksu likme
Tehniskā parāda attiecība (TDR) = sakārtošanas izmaksas / pārveidošanas izmaksas × 100
                    (SonarQube vērtējumi: A ≤5 %, B ≤10 %, C ≤20 %, D ≤50 %)

Procenti (skaitlis, kas attaisno atmaksāšanu):
  procenti/gadā = Δ piegādes ātrums × vērtība uz ātruma vienību
                + Δ pilsoņiem redzamo incidentu biežums × izmaksas uz incidentu
                + speciālistu prasmju piemaksa × skartais darbinieku skaits
Atmaksāšanas pamatojums = PV(procenti, kas novērsti horizontā) − sakārtošanas izmaksas
               (diskontēts ar Green Book sociālo diskonta likmi, skatiet
               social-discount-rate.md)
```

Pamatsumma norāda saistību; procenti ir tas, kas veido ieguldījuma pamatojumu publisko kontu komitejai.

## Aprēķina piemērs

Pieprasījumu apstrādes dzinējs ar 250 000 koda rindām, rakstīts mantotā 4GL valodā. Izmantojot CAST Appmarq etalonu — aptuveni $3,61 tehniskā parāda pamatsummas uz koda rindu (≈£2,85 pie tipiskā pārrēķina):

```
Pamatsumma ≈ 250 000 × £2,85 ≈ £712 500
TDR ≈ 16 % (vērtējums C)
```

Izmērītie procenti: departaments patur trīs speciālistu darbuzņēmējus ar 40 % dienas likmes piemaksu pret standarta vecāko inženieru likmēm, jo iekšējās prasmes ir izzudušas — papildu £180 000 gadā sešu cilvēku komandai. Sistēma arī rada četras lielas apstrādes pārtraukumus gadā, katra laikā tiek apturēti lēmumi aptuveni 5000 pieprasītājiem, kas tiek novirzīti uz kontaktu centru par aptuveni £25 par zvanu:

```
Procenti ≈ £180 000 (prasmju piemaksa)
         + 4 × 5000 × £25 = £500 000 (novirzītā kontakta izmaksas)
         ≈ £680 000/gadā
```

Mērķtiecīga vissliktāk funkcionējošo moduļu sakārtošana maksā £1 200 000, un modelēts, ka tā samazina procentus par 70 %:

```
Procentu samazinājums = 0,70 × 680 000 = £476 000/gadā
Atmaksāšanās ≈ 1 200 000 / 476 000 ≈ 2,5 gadi
```

Mērķtiecība ir būtiska: reti skarta koda sakārtošana neko nedod, jo procenti koncentrējas tur, kur sakrīt izmaiņu biežuma un parāda blīvuma maksimumi.

## Saikne ar programmatūras inženieriju

Sabiedriskās vērtības ietvars, kas tehniskā parāda pamatojumu paceļ pāri „kods ir vecs": izteikt mantoto vidi kā inventāru tam, kur koncentrējas zaudētā piegādes spēja, un skaidri savienot to ar [kopējām piederības izmaksām](../kopējās-piederības-izmaksas-valsts-it/), jo procenti ir ekspluatācijas izmaksas, kam jābūt TCO rindā neatkarīgi no tā, vai finanšu daļa to kādreiz ir prasījusi. Parādu pārpilnas sistēmas nes arī nesamērīgu [kiberdrošības](../publiskā-sektora-kiberdrošības-vērtība/) risku, jo ielāpu biežums un parāda blīvums korelē — nelāpāma mantota sistēma ir tehniskais parāds, kura procenti tiek maksāti incidentu riskā, nevis mārciņās. Un katrs kompromiss starp sakārtošanu un jaunām iespējām pats ir [kavēšanās izmaksu](../kavēšanās-izmaksas-publiskajās-programmās/) lēmums: parāda atmaksāšana aizkavē nākamo likumisko izmaiņu, kam ir sava kavēšanās izmaksa, kas jāsver pret ietaupītajiem procentiem.

## Biežākās kļūdas

- **Ziņošana tikai par pamatsummu**: liels, biedējošs sakārtošanas novērtējums bez procentu skaitļa neattaisno neko tēriņu apstiprinātājam.
- **Rīku ģenerētu parāda skaitļu uztvere burtiski**: SQALE tipa skeneri skaita noteikumu pārkāpumus; tie palaiž garām dārgo parāda veidu — arhitektūras lēmumus un nedokumentētus mantotos biznesa noteikumus —, vienlaikus atzīmējot sīkumus.
- **„Pārrakstīšana novērš visu to"**: aizstāšanas programmām jāizturēt tā pati disciplīna kā jebkuram citam biznesa gadījumam — kontrfaktiskās izmaksas, veiksmes varbūtība un diskontēšana —, nevis jābūt izņēmumam, kā parādīja 2013. gada Universal Credit pārstartēšana.
- **Nulles parāda utopisms**: optimālais parāda līmenis nav nulle; parāds ir sviras efekts, kas nopirka agrāku piegādi. Dzīvais jautājums vienmēr ir procentu likme, nevis tas, vai parāds vispār pastāv.

## Avoti

- Cunningham W, "The WyCash Portfolio Management System", OOPSLA experience report, 1992.
- CAST, technical debt estimation (Appmarq benchmark). <https://www.castsoftware.com/glossary/technical-debt-estimation>
- National Audit Office, *Digital Transformation in Government* and reports on Universal Credit. <https://www.nao.org.uk/>
