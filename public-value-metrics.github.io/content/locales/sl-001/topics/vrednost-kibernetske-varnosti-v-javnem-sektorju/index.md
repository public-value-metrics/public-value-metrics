# Vrednost kibernetske varnosti v javnem sektorju

Vrednost kibernetske varnosti v javnem sektorju je disciplina vrednotenja zmanjšanja tveganja: koliko je vredno, da je kršitev podatkov državljanov manj verjetna, glede na to, da poraba za varnost, ko deluje, ne ustvari nobenega vidnega izložka, ko odpove, pa zelo viden? Za storitev, ki hrani evidence o prejemkih, zdravstvene podatke ali davčne evidence, je ta lastnost »nevidna, ko deluje« natanko razlog, zakaj potrebuje izrecen argument vrednosti, ne le kljukice za skladnost.

## Zakaj je pomembno

Cyber Assessment Framework (CAF) britanskega Nacionalnega centra za kibernetsko varnost (NCSC) daje organizacijam javnega sektorja strukturiran način, da varnost postane ocenljiva disciplina, temelječa na izidih, in ne kontrolni seznam: opredeljuje štiri splošne cilje (upravljanje varnostnega tveganja, zaščita pred kibernetskimi napadi, odkrivanje kibernetskih varnostnih dogodkov in zmanjševanje posledic incidentov), razdeljene na prispevajoče izide, po katerih je mogoče oceniti lastnika sistema, v istem duhu kot točka 9 [standarda digitalnih storitev](../standard-digitalnih-storitev/) (»ustvarite varno storitev, ki ščiti zasebnost uporabnikov«). To, pred čimer CAF ocena ščiti, ima dokumentirano ceno: poročilo IBM Cost of a Data Breach spremlja povprečni strošek kršitve po sektorjih in dosledno ugotavlja, da je javni sektor v primerjavi s financami ali zdravstvom na nižjem koncu razpona – nedavne izdaje navajajo povprečje javnega sektorja okoli 2,6–2,9 milijona dolarjev na kršitev – vendar »nižje kot pri financah« ni »nizko«, vladne kršitve pa nosijo stroške, ki jih številke poročila ne zajamejo v celoti: izguba zaupanja državljanov v digitalne kanale, kar znižuje [digitalno sprejetost](../prihranki-zaradi-preusmeritve-kanalov/), od katere so odvisni poslovni primeri prehoda na druge kanale, ter politični in pravni strošek izpostavitve podatkov, ki jih je država državljane prisilila predati.

## Matematika

Naložba v varnost se vrednoti tako kot vsaka poraba za zmanjšanje tveganja: kot zmanjšanje pričakovane izgube, z uporabo klasične identitete upravljanja tveganj.

```
Letno pričakovana izguba (Annualized Loss Expectancy, ALE) = pričakovana izguba na dogodek (SLE)
                                                              × letna stopnja pojavljanja (ARO)

Vrednost varnostnega nadzora =
  ALE_pred_nadzorom − ALE_po_nadzoru − letni strošek nadzora

Nadzor je vreden financiranja, kadar:
  (ALE_pred − ALE_po) > letni strošek nadzora

Ocena CAF neposredno ne izpiše verjetnosti, vendar je profil izidov CAF
storitve (kateri prispevajoči izidi so »doseženi«, »delno doseženi« ali
»niso doseženi«) razumen nadomestni vložek za oceno ARO – sistem z
neupravljanim privilegiranim dostopom ali brez preizkušenega načrta
odziva na incidente ima bistveno višji realističen ARO kot sistem z obojim.
```

## Praktični primer

**Sistem za vodenje primerov grofijskega sveta, ki hrani evidence socialne oskrbe za 40.000 prebivalcev**:

```
Pričakovana izguba na dogodek (strošek kršitve), z uporabo povprečja
javnega sektorja iz nedavnega poročila IBM Cost of a Data Breach ≈ £2,1 mio
(pretvorjeno, številka velikostnega reda – vedno jo znova izpeljite iz
aktualne izdaje poročila, namesto da ponovno uporabite fiksno številko)

Trenutni ARO (neupravljan privilegiran dostop, brez preizkušenega odziva
na incidente, po notranji samooceni CAF z več »nedoseženimi« izidi) ≈ ocenjeno 8 % letno
  ALE_pred = £2,1 mio × 0,08 = £168.000/leto

Predlagani nadzor: upravljanje privilegiranega dostopa + preizkušen načrt
odziva na incidente, ki ustrezne izide CAF premakneta na »doseženo«,
ocenjeno zniža ARO na 3 %/leto
  ALE_po = £2,1 mio × 0,03 = £63.000/leto

Letni strošek nadzora (orodja + proces + testiranje) = £45.000

Vrednost nadzora = (168.000 − 63.000) − 45.000 = £60.000/leto
  neto pozitivno – financirajte. Izračun tudi pokaže, da bi bil nadzor
  še vedno vreden financiranja pri skoraj trikratnih stroških, kar je
  vrsta preverjanja občutljivosti, ki bi morala spremljati vsako številko
  ALE, zgrajeno na ocenjenih verjetnostih.
```

## Povezava s programskim inženirstvom

Inženirji obvladujejo večino vzvodov v enačbi ALE: zasnova nadzora dostopa, higiena odvisnosti in popravkov, pokritost beleženja in odkrivanja ter orodja za odziv na incidente neposredno premikajo člen ARO, zato se ocena CAF bere kot pregled tehnične arhitekture prav tako kot revizija politik. To je [tehnični dolg kot erozija javne vrednosti](../tehnični-dolg-kot-erozija-javne-vrednosti/) v svoji najakutnejši obliki – nezakrpani, nespremljani, slabo nadzorovani sistemi so dolg, katerega obresti so repno tveganje in ne enakomerna obremenitev – in ga je treba uskladiti s [skupnimi stroški lastništva pri državni IT](../skupni-stroški-lastništva-pri-vladni-informacijski-tehnologiji/), da poraba za varnost ni obravnavana ločeno od resničnih stroškov delovanja sistema. Je tudi neposreden vložek v ocene [vrednosti za denar](../vrednost-za-denar/) po Green Booku: tveganju prilagojeni strošek je del »stroškovne« strani vsakega vrednotenja možnosti, ne naknadna dodelava na koncu.

## Pasti

- **Obravnava samoocene CAF kot same varnosti**: dokončana ocena opisuje varnostno držo, je ne ustvari – vrednost je v doseženih izidih, ne v dokumentu.
- **Uporaba globalnih povprečnih stroškov kršitve kot lokalne ocene brez prilagoditve**: številke IBM so povprečja velikih, raznolikih vzorcev; realistična pričakovana izguba majhne lokalne oblasti redko enaka kot pri nacionalnem vladnem ministrstvu.
- **Zanemarjanje psihologije repnega tveganja pri odločitvah o naložbah**: nizka letna verjetnost omogoča, da se poraba za varnost neomejeno odlaša, vse do leta, ko se zgodi – preizkus občutljivosti izračuna ALE na razpon vrednosti ARO, kot v izdelanem primeru, to preprečuje.
- **Štetje samo stroška kršitve v slogu IBM, ne pa stroška zaupanja**: kršitev, ki zmanjša pripravljenost državljanov za uporabo digitalnih kanalov, še leta kasneje spodkopava primer [prihrankov zaradi prehoda na druge kanale](../prihranki-zaradi-preusmeritve-kanalov/), strošek, ki je le redko vključen v ocene stroškov kršitev.

## Viri

- National Cyber Security Centre, Cyber Assessment Framework. <https://www.ncsc.gov.uk/collection/caf>
- IBM, Cost of a Data Breach Report. <https://www.ibm.com/reports/data-breach>
- GOV.UK Service Manual, service standard, point 9: create a secure service which protects users' privacy. <https://www.gov.uk/service-manual/service-standard/point-9-create-a-secure-service>
