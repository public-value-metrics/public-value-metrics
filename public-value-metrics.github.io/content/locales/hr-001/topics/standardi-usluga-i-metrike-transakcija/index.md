# Standardi usluga i metrike transakcija

GOV.UK Service Standard kontrolni je popis od 14 točaka britanske vlade za izgradnju i pokretanje javne
digitalne usluge, a prate ga mali, obvezni skup kvantitativnih metrika transakcija (trošak po transakciji, stopa
dovršetka, digitalno korištenje i zadovoljstvo korisnika) koje timovi moraju objavljivati za svaku živu uslugu
središnje države. Standard i metrike zajedno su operativna, svakodnevna specijalizacija šireg okvira javne
vrijednosti i KPI-jeva u ovom repozitoriju, usmjerena izravno na timove za isporuku softvera.

## Zašto je važno

Service Standard, koji se održava u priručniku GOV.UK-a (service manual), traži da svaka procjena u određenoj
točki (alfa, beta, produkcija) državne digitalne usluge pokaže, među svojih 14 točaka, da tim razumije potrebe
korisnika, radi u multidisciplinarnom timu, često iterira i poboljšava te *vrednuje alate, sustave i načine
rada*. Povijesno je to stajalo uz javnu Performance Platform na kojoj je svaka živa usluga otvoreno objavljivala
svoje podatke o transakcijama; ta je platforma od tada ukinuta, ali obveza mjerenja i objave ovih četiriju
temeljnih metrika ostaje kroz smjernice priručnika o „mjerenju uspjeha”. Razlog zašto se to razlikuje od
generičke nadzorne ploče softverskih KPI-jeva jest što su te metrike izričito dizajnirane kao jedan povezan
ekonomski model, a ne četiri neovisna rezultata: cijeli argument o uštedama u digitalnoj državi (Digital
Efficiency Report Government Digital Servicea utvrdio je da su digitalne transakcije otprilike 20 puta jeftinije
od telefonskih i oko 50 puta jeftinije od osobnih za usporedive usluge lokalne uprave) ostvaruje se samo ako
stopa dovršetka ostane visoka, a digitalno korištenje doista raste, a ne samo ako se uz nepromijenjen skupi
kanal doda jeftin.

## Matematika

```
Trošak po transakciji   = ukupni trošak rada usluge / broj dovršenih transakcija
Stopa dovršetka         = dovršene transakcije / započete transakcije × 100
Digitalno korištenje    = transakcije digitalnim kanalom / transakcije svim kanalima × 100
Zadovoljstvo korisnika  = % zadovoljnih + vrlo zadovoljnih, u anketi unutar usluge s 5 stupnjeva

Ušteda prelaskom na drugi kanal = volumen transakcija × pomak korištenja × (trošak po transakciji
                                  na starom kanalu − trošak po transakciji digitalno)

Trošak neuspjele potražnje = (1 − stopa dovršetka) × transakcije pokušane digitalno ×
                             trošak rezervnog kanala koji ti korisnici zatim koriste umjesto toga
```

## Primjer iz prakse

**Ilustrativna usluga obnove dozvola središnje države**, 2 milijuna transakcija godišnje, trenutno 65 %
telefonom (3,00 £/transakcija) i 35 % digitalno (0,30 £/transakcija), stopa dovršetka 80 %. Redizajn prema
Service Standardu od 14 točaka podiže digitalno korištenje na 60 % i dovršetak na 92 %:

```
Ušteda od pomaka korištenja = 2.000.000 × 0,25 × (3,00 − 0,30) = 1.350.000 £/godišnje

Trošak neuspjele potražnje, prije:
  2.000.000 × 0,35 × (1 − 0,80) × 3,00 £ = 420.000 £/godišnje (odustali se vraćaju na telefon)

Trošak neuspjele potražnje, poslije:
  2.000.000 × 0,60 × (1 − 0,92) × 3,00 £ = 288.000 £/godišnje

Neto ušteda neuspjele potražnje = 420.000 £ − 288.000 £ = 132.000 £/godišnje

Ukupna godišnja ušteda ≈ 1.350.000 £ + 132.000 £ = 1.482.000 £/godišnje
```

Aritmetika čini izričitim zašto stopa dovršetka nije sporedna metrika: bez poboljšanja s 80 % na 92 %, uštedu od
pomaka korištenja djelomično bi pojela neuspjela potražnja koja frustrirane digitalne korisnike vraća ravno na
skupi telefonski kanal.

## Veza s programskim inženjerstvom

Ove četiri metrike radni su primjer nadzorne ploče troškova i posljedica: jedna metrika troška držana odvojeno
od tri metrike ishoda/kvalitete, namjerno nikad sažeta u jedan rezultat, što je ista disciplina koju zagovaraju
[KPI-jevi javnog sektora](../ključni-pokazatelji-uspješnosti-u-javnom-sektoru/). Za inženjere se to razlaže na konkretan posao s vlasnikom:
stopa dovršetka problem je instrumentiranja lijevka, a svaka točka odustajanja na putu u načelu se može
locirati i popraviti; trošak po transakciji traži pravo knjigovodstvo jediničnih troškova koje uključuje troškove
potpomognutog digitalnog i papirnatog kanala, a ne samo potrošnju na cloud hosting (vidi
[trošak po transakciji](../trošak-po-transakciji/) i
[ukupni trošak vlasništva u državnom IT-u](../ukupni-trošak-vlasništva-u-državnom-it-u/)); a digitalno korištenje
je metrika pravednosti u ruhu učinkovitosti: građani koji ne mogu ili neće promijeniti kanal nerazmjerno su
stariji, s invaliditetom ili digitalno isključeni, pa agresivno zatvaranje kanala „uštedu” pretvara u štetu za
pristup (vidi [digitalnu uključenost](../digitalna-uključenost/) i
[uštede prelaskom na druge kanale](../uštede-prelaskom-na-druge-kanale/)). Sam standard od 14 točaka procesna je specifikacija
iza tih brojeva: vidi [standard digitalnih usluga](../standard-digitalnih-usluga/) za cjelovit standard te
[metrike zadovoljstva građana](../metrike-zadovoljstva-građana/) za odnos ovdašnje brojke zadovoljstva prema
širem mjerenju povjerenja.

## Zamke

- **Korištenje stečeno zatvaranjem alternativnog kanala**: gašenje telefonske linije aritmetički podiže
  postotak digitalnog korištenja, a neuspjelu potražnju odlaže na kanal koji ostane (često skuplji potpomognuti
  digitalni ili osobni put); uvijek mjerite trošak cijelog sustava, a ne samo omjer.
- **Mjerenje stope dovršetka od drugog koraka lijevka**: započinjanje broja „započetih” nakon prve prave točke
  odustajanja laska stopi dovršetka i skriva najveći popravljivi gubitak.
- **Trošak po transakciji bez potpomognute digitalne podrške**: samo digitalni jedinični trošak koji zanemaruje
  vrijeme osoblja utrošeno na pomoć korisnicima koji ne mogu sami podcjenjuje pravi trošak kanala.
- **Objava metrika bez zajedničke definicije među uslugama**: „transakcija” i „dovršeno” znače različite stvari
  u različitim timovima usluga ako definicije nisu standardizirane i verzionirane, zbog čega je usporedba među
  uslugama nepouzdana.

## Izvori

- GOV.UK Service Manual, "The Service Standard." <https://www.gov.uk/service-manual/service-standard>
- GOV.UK Service Manual, "Measuring Success — Data You Must Publish."
  <https://www.gov.uk/service-manual/measuring-success/data-you-must-publish>
- GOV.UK, "Digital Efficiency Report."
  <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
