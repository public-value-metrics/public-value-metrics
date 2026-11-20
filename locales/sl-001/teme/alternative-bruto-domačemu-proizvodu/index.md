# Alternative bruto domačemu proizvodu

Alternative BDP so metrike, zasnovane za zajem tistega, kar bruto domači proizvod (BDP) strukturno prezre: neplačano oskrbo, izčrpavanje okolja, porazdelitev dohodka in ali rast dejansko izboljša življenja. Najbolj znana sta kazalnik pravega napredka (Genuine Progress Indicator, GPI) in butanski indeks bruto nacionalne sreče (Gross National Happiness, GNH); argumente za njuno resno obravnavo je najvplivneje podala Komisija Stiglitz-Sen-Fitoussi iz leta 2009. Za inženirje, ki gradijo vladne nadzorne plošče ali sisteme KPI, je »katera številka šteje za napredek« oblikovalska odločitev z resnimi posledicami za to, kaj se financira.

## Zakaj je pomembno

Simon Kuznets, ki je v tridesetih letih zgradil ameriške nacionalne račune, je leta 1934 pred kongresom opozoril, da se »blaginje naroda komaj da sklepati iz meritve nacionalnega dohodka« – opozorilo, ki ga je številka skoraj takoj prerasla. BDP šteje čiščenje po razlitju nafte kot rast, neplačano varstvo otrok pri staršu pa kot nič; ne loči porabe, ki gradi trajno blaginjo, od porabe, ki zgolj izravnava že povzročeno škodo. Komisija Stiglitz-Sen-Fitoussi, ki jo je sklical francoski predsednik Nicolas Sarkozy in so jo vodili Joseph Stiglitz, Amartya Sen in Jean-Paul Fitoussi, je leta 2009 poročala, da bi morali statistični sistemi težišče premakniti »z merjenja gospodarske proizvodnje na merjenje blaginje ljudi« in da bi bilo treba trajnost spremljati ločeno od sedanje blaginje, ne pa je strniti v eno številko. Alternative BDP to priporočilo udejanjajo. GPI, ki ga je v devetdesetih razvil možganski trust Redefining Progress in gradi na Meri ekonomske blaginje (Measure of Economic Welfare) Williama Nordhausa in Jamesa Tobina iz leta 1972, izhaja iz osebne potrošnje (kot BDP) in nato doda netržne koristi, ki jih BDP izpusti (gospodinjsko delo, prostovoljstvo), odšteje pa obrambne stroške in stroške izčrpavanja (kriminal, onesnaževanje, vožnja na delo, črpanje virov), ki jih BDP napačno šteje kot pozitivne. Butanski indeks GNH, ki ga upravlja GNH Centre Bhutan (<https://www.gnhcentre.bt/>), gre še dlje in kot izrecni ustavni cilj države nadomesti rast: združuje 33 kazalnikov v 9 domenah – psihološka blaginja, zdravje, izobrazba, raba časa, kulturna raznolikost, upravljanje, vitalnost skupnosti, ekološka raznolikost in življenjski standard – v eno oceno, ki temelji na zadostnosti in se neposredno uporablja za presejanje vladnih predlogov politik.

## Matematika

```
GPI = osebna potrošnja
      + netržne koristi (gospodinjsko delo, prostovoljstvo, visokošolsko izobraževanje)
      − obrambni in družbeni stroški (kriminal, onesnaževanje, vožnja na delo, razpad družin)
      − izčrpavanje naravnega in družbenega kapitala (črpanje virov, izguba kmetijskih zemljišč)

Ocena zadostnosti GNH, po domenah:
  oseba je v domeni »zadostna«, ko preseže prag pri vsakem kazalniku
  Indeks sreče = (% prebivalstva, zadostnega v ≥ 6 od 9 domen)
                 + (utežena povprečna primanjkljaj »še ne srečne« manjšine)
```

## Praktični primer

**Regija, GPI**: osebna potrošnja je $50 mrd. Dodamo ocenjeno vrednost gospodinjskega in prostovoljnega dela $12 mrd (urne postavke po stroških nadomestitve – glej [vrednost prostovoljnega časa](../vrednost-prostovoljskega-časa/)). Odštejemo ocenjene letne stroške prometnih zastojev ($3 mrd), kriminala ($4 mrd) in dolgoročnega izčrpavanja virov ($6 mrd):

```
GPI = 50 + 12 − 3 − 4 − 6 = 49 ($ mrd)
```

Če je BDP tisto leto zrasel s $50 mrd na $55 mrd (+10 %), obrambni stroški in stroški izčrpavanja pa so rasli hitreje od potrošnje, lahko GPI pade, čeprav BDP raste – »hipoteza praga«, ki jo raziskovalci GPI navajajo za visokodohodkovna gospodarstva od približno sedemdesetih let, ko je rast še naprej naraščala, GPI pa se je ustalil.

**Državljan, GNH**: anketiranec preseže prag zadostnosti v 7 od 9 domen (zdravje, izobrazba, življenjski standard, vitalnost skupnosti, kulturna raznolikost, ekološka raznolikost, raba časa), a zaostaja pri psihološki blaginji in upravljanju. Ker je 7 ≥ 6, se v številu šteje kot »srečen«; indeks ločeno spremlja globino njegovih dveh primanjkljajev, tako da tesna prepustnica ni nerazločljiva od udobne.

## Povezava s programskim inženirstvom

- Nadzorna plošča KPI, zgrajena samo na prepustnosti ali porabi (vzorec BDP), bo sistematično zgrešila škodo, povzročeno pri ustvarjanju te prepustnosti – obseg zahtevkov za podporo, obravnavan kot »angažiranost« namesto »stiska uporabnikov«, je različica štetja razlitja nafte kot rasti v izvedbi programske opreme.
- Računovodstvo v slogu GPI je uporaben revizijski vzorec za vsak niz [KPI javnega sektorja](../ključni-kazalniki-uspešnosti-v-javnem-sektorju/): za vsako vodilno izhodno metriko vprašajte, kakšen obrambni strošek tiho povzroča (popravki, odziv na incidente, izgorelost), in ga odštejte, kakor GPI odšteje obrambno porabo od potrošnje.
- Metoda zadostnosti po domenah v GNH – opravil/ni opravil po razsežnosti, nato združitev – je strukturno ista tehnika kot [večkriterijska analiza odločanja](../večkriterijska-odločitvena-analiza/) in jo je vredno ponovno uporabiti povsod, kjer bi ena skalarna ocena skrila kritično spodletelo razsežnost.

## Pasti

- **Obravnavanje GPI kot natančnega nacionalnega računa** – za razliko od BDP GPI nima ene standardizirane metodologije; različne študije različno ponderirajo stroške vožnje na delo, prostovoljni čas ali izčrpavanje virov, zato so primerjave GPI med študijami veliko manj zanesljive od primerjav BDP med državami.
- **Prevzem GNH v celoti v drugo politično kulturo** – njegove uteži domen in pragovi zadostnosti so bili določeni z butanskim posvetovanjem; kopiranje številke brez osnovnega procesa posvetovanja ustvari votlo metriko, ki ji nihče ne zaupa.
- **Predpostavka, da alternativa BDP nadomešča oceno stroškov in koristi** – to so diagnostični, gospodarstvo-široki kazalniki, ne orodja odločanja za posamezen program; za to uporabite [družbeno analizo stroškov in koristi](../družbena-analiza-stroškov-in-koristi/).

## Viri

- Stiglitz JE, Sen A, Fitoussi J-P. "Report by the Commission on the Measurement of Economic
  Performance and Social Progress." (2009) <https://ec.europa.eu/eurostat/documents/118025/118123/Fitoussi+Commission+report>
- GNH Centre Bhutan. <https://www.gnhcentre.bt/>
- Redefining Progress. "The Genuine Progress Indicator: A Tool for Sustainable Development."
- Nordhaus WD, Tobin J. "Is Growth Obsolete?" (1972), NBER.
