# Produktivnost javnih storitev

Produktivnost javnih storitev meri, kako učinkovito javna poraba pretvarja vložke (osebje, kapital, blago in storitve) v izložke, prilagojene kakovosti, za storitve – zdravstvo, izobraževanje, policija, socialna oskrba – ki nimajo tržne cene in zato nimajo številke prihodkov, s katero bi delili stroške. Britanski statistični urad (ONS) to vrsto objavlja od sredine 2000-ih in ostaja metodološko najbolj razvit nacionalni poskus odgovora na vprašanje: »ali država postaja boljša ali slabša v pretvarjanju denarja v javne storitve?«

## Zakaj je pomembno

Na trgu je produktivnost (vrednost izložka) / (strošek vložka), vrednost izložka pa je opazna, ker jo nekdo plača. Zamenjava kolka, šolsko mesto in policijska patrulja nimajo prodajne cene, zato lahko naivno merite le *vložke* (kar je bilo porabljeno) – kar komentatorje zvabi, da rast javne porabe obravnavajo kot samodejno slabo, saj več vložka ob nespremenjeni naslovni dejavnosti izgleda kot padanje produktivnosti. Metodologija ONS, opisana v publikacijah »Sources and Methods« za produktivnost javnih storitev, to rešuje z izgradnjo *indeksa izložkov* iz obsegov dejavnosti (opravljene operacije, poučeni učenci, preiskana kazniva dejanja) in nato *prilagoditvijo kakovosti* tega indeksa – pri zdravstvu z vključitvijo stopenj preživetja in čakalnih dob, pri izobraževanju z vključitvijo dosežkov, pri policiji z vključitvijo izidov, kot je reševanje primerov – tako da storitev, ki opravi enako število operacij, a doseže boljše stopnje preživetja, zabeleži kot bolj produktivno, ne le kot dražjo. Naslovna ugotovitev, ki se ponavlja v izdajah ONS, je za sektor streznitvena: produktivnost javnih služb v Združenem kraljestvu je med pandemijo covida-19 močno padla, do izdaj ONS iz sredine 2020-ih pa se v več podsektorjih, vključno z zdravstvom, ni vrnila na raven iz leta 2019, čeprav je poraba rasla – vrzel, ki »več financiranja« in »večjo produktivnost« preoblikuje v dve popolnoma ločeni vprašanji.

## Matematika

```
Indeks izložkov (obseg) = Σ (dejavnost_i × relativna utež enotnih stroškov_i), uteženo z baznim letom
                          po vseh dejavnostih storitve (npr. operacije kolka, operacije sive mrene,
                          posvetovanja pri splošnem zdravniku), analogno volumskemu indeksu Laspeyres/Paasche

Prilagoditev kakovosti  = indeks izložkov × faktor prilagoditve kakovosti
                          (npr. vključitev spremembe stopenj preživetja, čakalnih dob,
                          dosežkov ali ponovnih kaznivih dejanj kot množitelja surovega obsega)

Indeks vložkov          = Σ (delovne ure × utež stroška dela) + (strošek blaga/storitev,
                          deflacioniran) + (poraba kapitala)

Rast celotne faktorske produktivnosti = % sprememba indeksa izložkov, prilagojenega kakovosti
                                         − % sprememba indeksa vložkov
```

## Praktični primer

**Ilustrativni izračun produktivnosti akutnega sektorja NHS** (struktura sledi metodologiji ONS):

```
Leto 1: indeks obsega izložkov = 100,0 (bazno leto), indeks vložkov = 100,0
        → indeks produktivnosti = 100,0

Leto 2: obseg dejavnosti naraste za 3,0 % (več operacij, več pregledov),
        a povprečna čakalna doba se poslabša, kar uporabi popust
        prilagoditve kakovosti −1,0 %
        Indeks izložkov, prilagojen kakovosti = 100 × 1,030 × 0,990 = 101,97

        Vložki rastejo: število osebja +4,0 %, drugi stroški (deflacionirani) +1,5 %,
        utežen indeks vložkov = 100 × 1,032 = 103,2

Rast produktivnosti = (101,97 / 100 − 1) − (103,2 / 100 − 1)
                    = 1,97 % − 3,2 % = −1,23 odstotne točke

Razlaga: dejavnost je zrasla, a vložki so zrasli hitreje in kakovost
je rahlo padla, zato je produktivnost – izložek na enoto vložka – padla,
čeprav je bilo »dostavljene več oskrbe«.
```

To je natanko vzorec, o katerem so izdaje ONS večkrat poročale za dele NHS po pandemiji: rastoča poraba in rastoča surova dejavnost, ki sobivata s padajočo izmerjeno produktivnostjo, ko sta upoštevani prilagoditev kakovosti in rast vložkov.

## Povezava s programskim inženirstvom

Produktivnost javnih storitev je populacijski analog razprav o inženirski produktivnosti (dostavljene točke zgodb v primerjavi z [metrikami DORA](../metrike-dora-za-javno-vrednost/) in [metrikami toka](../pretočne-metrike-pri-vladni-izvedbi/)): surova prepustnost brez prilagoditve kakovosti je v bolnišnici enako zavajajoča kot »dostavljene vrstice kode« v programski ekipi. Ekipe, ki gradijo podatkovne cevovode uspešnosti za ministrstva, naj prilagoditev kakovosti obravnavajo kot polnovredno, verzionirano fazo transformacije, ne kot opombo – ker verodostojnost ONS sloni na tem, da je ta prilagoditev pregledna, ponovljiva in popravljena, ko pridejo boljši podatki o kakovosti (ONS popravlja ocene produktivnosti preteklih let, ko so osnovni podatki o kakovosti – npr. stopnje preživetja – dokončani, zato mora vsak nadaljnji sistem, ki te statistike uporablja, obvladati nazaj datirane popravke, ne le dodajati nova obdobja). Neposredno se prekriva tudi s [skupnimi stroški lastništva](../skupni-stroški-lastništva-pri-vladni-informacijski-tehnologiji/) in [produktivnostjo umetne inteligence v javnem sektorju](../produktivnost-umetne-inteligence-v-javnem-sektorju/): sistem, ki poveča surov obseg dejavnosti, ne da bi izboljšal ali ohranil kakovost, po lastni opredelitvi ONS ni izboljšanje produktivnosti.

## Pasti

- **Obravnava rasti vložkov kot rasti produktivnosti**: več porabe, ki financira več osebja, ustvari več *dejavnosti*, ne več *produktivnosti*, razen če narašča tudi izložek na enoto vložka – v političnih komentarjih se obe nenehno mešata.
- **Popolno zanemarjanje prilagoditve kakovosti**: indeks izložkov, zgrajen samo iz surovih števil dejavnosti, bo kazal »povečanje produktivnosti« zaradi opravljanja več nečesa manj vrednega ali nižje kakovosti; prilagoditev kakovosti ONS obstaja prav zato, da to ujame.
- **Primerjava indeksov produktivnosti med podsektorji brez usklajene vintage metodologije**: produktivnost zdravstva, izobraževanja in policije je zgrajena iz različnih virov podatkov o dejavnosti in kakovosti z različnimi cikli popravkov – naivna primerjava med sektorji primerja nezdružljive instrumente.
- **Branje enoletnega padca produktivnosti kot trajnega trenda**: podatki o produktivnosti iz časa pandemije in po njej so pokazali znatno medletno nestanovitnost, ker so se spreminjali tudi podatki o kakovosti (npr. čakalni seznami, okrevanje elektivne oskrbe); ONS dosledno svari pred pretirano razlago enoletnih premikov.

## Viri

- Office for National Statistics, "Public Service Productivity" series.
  <https://www.ons.gov.uk/economy/economicoutputandproductivity/publicservicesproductivity>
- Office for National Statistics, "Public Service Productivity: Total, UK — Sources and Methods."
  <https://www.ons.gov.uk/economy/economicoutputandproductivity/publicservicesproductivity>
