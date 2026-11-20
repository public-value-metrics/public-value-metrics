# Ostvarenje koristi

Upravljanje ostvarenjem koristi (engl. benefits realization management) disciplina je utvrđivanja, određivanja polazne vrijednosti, praćenja i *dokazivanja* da su se koristi obećane u poslovnom slučaju doista ostvarile nakon puštanja u rad. U britanskim javnim ulaganjima ona je dio Five Case Modela iz Green Booka britanskog Ministarstva financija (HM Treasury) i posebnih smjernica za upravljanje koristima Infrastructure and Projects Authority; bez nje tvrdnja „sustav je referentima uštedio trideset minuta po zahtjevu” zauvijek ostaje neprovjerena.

## Zašto je važno

Poslovni slučajevi su obećanja; ostvarenje koristi je revizija. Green Book zahtijeva da svaki slučaj potrošnje prođe pet testova: strateški, ekonomski, komercijalni, financijski i upravljački, a upravljački slučaj mora iznijeti kako će se koristi ostvariti *prije odobrenja*: imenovani nositelji, zabilježene polazne vrijednosti i utvrđeni datumi mjerenja. Vodič Infrastructure and Projects Authority (IPA), *Benefits Management: A Guide to Realizing Benefits for Government Major Projects* (<https://www.gov.uk/government/publications/benefits-management-a-guide-to-realizing-benefits-for-government-major-projects>), postoji jer je IPA-ino vlastito izvješćivanje o portfelju Government Major Projects Portfolio više puta utvrdilo da se pouzdanost isporuke i ostvarenje koristi navode kao ponavljajuće slabosti velikih programa. Projekt se može zatvoriti „na vrijeme i u okviru proračuna” prema isporučnim kamenima međašima, a da pritom ne ostvari koristi koje su na prvome mjestu opravdale trošenje novca; IPA-ine smjernice upravo tu razliku smatraju cijelom svrhom discipline.

## Matematika

```
Stopa ostvarenja = ostvarene koristi / predviđene koristi   (po koristi, po razdoblju)

Mehanizmi koji je čine izračunljivom:
  polazna vrijednost zabilježena PRIJE puštanja u rad (inače se razlika ne može izmjeriti)
  svaka korist: imenovani nositelj, metrika, izvor podataka, raspored mjerenja
  prognoza prilagođena za pristranost optimizma pri procjeni (obvezno prema Green Booku)
  koristi razvrstane na novčane / oslobođeni kapacitet / kvalitativne,
  praćene i iskazivane zasebno
```

## Primjer iz prakse

**Lokalna vlast**: poslovni slučaj digitalnog portala za zahtjeve za građevinske dozvole obećavao je godišnje: smanjenje troškova ispisa i poštarine od 300.000 £ (novčano), 4.500 oslobođenih sati referenata (kapacitet) i veće zadovoljstvo podnositelja (kvalitativno). Dvanaest mjeseci nakon puštanja u rad:

```
Korist            Predviđeno  Ostvareno  Stopa  Dokaz
Novčane uštede    300.000 £   210.000 £  70 %   financijska knjiga naspram polazne godine
Sati referenata   4.500       3.200      71 %   uzorak vremenskih mjerenja
Zadovoljstvo      +8 p.b.     +11 p.b.   138 %  podaci ankete podnositelja

Mjere iz preispitivanja (svrha ostvarenja koristi):
manjak novčanih ušteda pripisan dvama područjima usluge koja još iznimno
obrađuju papirnate zahtjeve → zatvoriti iznimni put;
korekcija pristranosti optimizma u idućem poslovnom slučaju podignuta
s 10 % na 25 % na temelju pogreške prognoze u ovom slučaju.
```

Stopa ostvarenja od 70 % nije neuspjeh, nego znanje koje omogućuje bolje kalibriranu iduću prognozu. Slučaj bez mjerenja zauvijek bi tvrdio 100 %, a financijski tim ne bi imao osnove da to ospori.

## Veza s programskim inženjerstvom

Inženjerske organizacije rutinski odobravaju ulaganja u platforme i alate na temelju predviđene koristi, a gotovo nikad ih poslije ne revidiraju, što je upravo patologija koju upravljanje ostvarenjem koristi ispravlja. Lagana inačica: svaki prijedlog iznad praga značajnosti imenuje nositelja koristi, polaznu metriku i fiksni datum preispitivanja (obično šest mjeseci nakon puštanja u rad), a stope ostvarenja iz prošlih prijedloga trebale bi umanjiti povjerenje organizacije u iduću prognozu tima ili dobavljača. Time se krug zatvara prema [procjeni prema Green Booku](../procjena-prema-green-booku/), koja postavlja prognozu koju ta disciplina revidira, a ista je logika iza široko zabilježenog nalaza da velika većina pilota generativne umjetne inteligencije ne pokazuje mjerljiv povrat, vidi [produktivnost umjetne inteligencije u javnom sektoru](../produktivnost-umjetne-inteligencije-u-javnom-sektoru/), jer su piloti koji su *doista* vratili vrijednost bili, gotovo bez iznimke, oni s imenovanom, mjerljivom stavkom koristi od početka. Ovisi i o razlikovanju onoga što je doista isporučeno od onoga što je doista ostvareno, vidi [ishode naspram izlaznih rezultata](../ishodi-naspram-izlaznih-rezultata/).

## Zamke

- **Nema polazne vrijednosti prije puštanja u rad**: kobni, neispravljivi propust; bez nje se stopa ostvarenja nikad ne može izračunati, samo tvrditi.
- **Siročad među koristima**: korist bez imenovanog nositelja nema nikoga tko prikuplja podatke, a svako preispitivanje portfelja po zadanome je izvješćuje kao „uglavnom prema planu”.
- **Dvostruko brojenje koristi u portfelju programa**: dva projekta tvrde isti oslobođeni kapacitet referenata kao svoju korist; vodite jedan registar koristi za cijeli portfelj kako biste to uhvatili.
- **Kazalište ostvarenja**: istaknuto mjerenje i izvješćivanje lakih kvalitativnih pobjeda dok novčane stavke i stavke kapaciteta ostaju tiho neispitane.
- **Brkanje isporuke s ostvarenjem**: projekt koji zatvara kamene međaše „na vrijeme i u okviru proračuna” ne govori ništa o tome je li se predviđena korist ikad dogodila; IPA-ine smjernice to smatraju dvama zasebnim pitanjima s dva zasebna traga dokaza.

## Izvori

- HM Treasury, Green Book and Five Case Model guidance. <https://www.gov.uk/government/collections/the-green-book-and-accompanying-guidance-and-documents>
- Infrastructure and Projects Authority, *Benefits Management: A Guide to Realizing Benefits for Government Major Projects*. <https://www.gov.uk/government/publications/benefits-management-a-guide-to-realizing-benefits-for-government-major-projects>
- Infrastructure and Projects Authority, Annual Report on the Government Major Projects Portfolio. <https://www.gov.uk/government/collections/infrastructure-and-projects-authority-annual-report>
