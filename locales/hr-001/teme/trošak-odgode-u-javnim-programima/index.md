# Trošak odgode u javnim programima (CoD)

Trošak odgode (engl. Cost of Delay) jest javna vrijednost izgubljena po jedinici vremena u kojoj program, usluga ili promjena sustava još *nije* isporučena. To je glavna premosna metrika ove skupine tema: pretvara „puštanje u rad kasni šest mjeseci” u funte po tjednu ili u WELLBY-je po tjednu, tako da se o odgodi može raspravljati u istoj valuti kao i o samom poslovnom slučaju.

## Zašto je važno

Reinertsenovo pravilo, „ako kvantificirate samo jednu stvar, kvantificirajte trošak odgode”, u državnu se upravu prenosi gotovo nepromijenjeno, jer su javni programi neobično izloženi odgodi: poslovni slučajevi odobravaju se na temelju predviđenog toka koristi, ali tok počinje teći tek puštanjem u rad, a svaki tjedan kašnjenja jest tjedan izgubljene vrijednosti koju nitko ne iskazuje u registru rizika. Opetovano ispitivanje uvođenja Universal Credita od strane National Audit Office (vidi njegova izvješća „Rolling Out Universal Credit”, <https://www.nao.org.uk/>) ilustrira obrazac: kašnjenje rasporeda pratilo se i prijavljivalo, ali trošak u funtama po tjednu zbog *još neisporuke* reformiranog sustava sljedećoj skupini podnositelja rijetko je naveden kao naslovna brojka, iako je to broj koji je trebao voditi određivanje prioriteta i eskalaciju. Bez brojke CoD-a odgođeni program izgleda kao problem rasporeda za odbor za isporuku; s njom je to problem erozije vrijednosti za odgovornog službenika (accounting officer).

## Matematika

```
CoD = izgubljena korist po jedinici vremena dok nije isporučeno   (£/tjedan ili WELLBY/tjedan)

Ukupni gubitak zbog odgode = CoD × trajanje odgode

Tokovi koristi koje treba zbrojiti za javne programe:
  uštede koje oslobađaju gotovinu   (smanjenje prijevara/pogrešaka, izbjegnuti privremeni troškovi)
+ oslobođeni negotovinski kapacitet (sati referenata/službenika × puni trošak)
+ korist za dobrobit                (WELLBY-ji × 13.000 £/WELLBY, dopunske smjernice
                                     Green Booka HMT-a o dobrobiti, cijene iz 2019.)
```

Za usluge okrenute građanima iskazujte i dobrobit, a ne samo novac: vidi [godine života prilagođene dobrobiti](../godine-života-prilagođene-dobrobiti/) za temeljnu jedinicu i [oportunitetni trošak u javnoj potrošnji](../oportunitetni-trošak-u-javnoj-potrošnji/) za ono što je odgođena funta inače mogla financirati.

## Primjer iz prakse

**Lokalna vlast**: nadogradnja sustava stambenih naknada smanjuje pogrešku preplate za 150 £ po zahtjevu godišnje na 20.000 aktivnih zahtjeva.

```
Godišnja korist = 150 × 20.000 = 3.000.000 £/godišnje
CoD = 3.000.000 / 52 ≈ 57.700 £/tjedan
Odgoda uvođenja od 12 mjeseci košta 52 × 57.700 ≈ 3.000.000 £ izbjegive pogreške.
```

**Središnja državna agencija**: usluga procjene invalidskih naknada, isporučena šest mjeseci (26 tjedana) kasnije od plana, znači da 200.000 podnositelja godišnje čeka u prosjeku tri tjedna dulje na odluku. Svaki dodatni tjedan financijske neizvjesnosti modelira se kao učinak od −0,0018 WELLBY-ja (bod zadovoljstva životom):

```
Gubitak WELLBY-ja po podnositelju = 3 × 0,0018 = 0,0054
Godišnji gubitak WELLBY-ja = 200.000 × 0,0054 = 1.080 WELLBY-ja/godišnje
CoD_dobrobit = 1.080 / 52 ≈ 20,8 WELLBY-ja/tjedan
CoD_novac = 20,8 × 13.000 £ ≈ 270.000 £/tjedan vrijednosti dobrobiti
```

Odgoda od 26 tjedana stoga „košta” otprilike 540 WELLBY-ja, što vrijedi oko 7 milijuna £ prema Green Bookovu vrednovanju dobrobiti, čime se propušteni datum puštanja u rad preoblikuje u događaj koji se tiče dobrobiti građana, a ne fusnotu upravljanja projektom.

## Veza s programskim inženjerstvom

CoD je ono što [DORA metrike](../dora-metrike-za-javnu-vrijednost/) i [metrike toka](../metrike-toka-u-isporuci-državne-uprave/) čini financijski čitljivima: vrijeme isporuke u cjevovodu × CoD jest novac (ili dobrobit) spaljen u redovima čekanja prije nego što uopće stigne do građanina. Konkretno:

- **Određivanje prioriteta**: rangirajte zaostatak (backlog) prema CoD ÷ trajanje, a ne prema staležu dionika, što je softversko-inženjerski analogon Green Bookova zahtjeva da se opcije procjenjuju prema vrijednosti, a ne prema tome tko ih traži.
- **Nabava**: ciklus okvirne nabave od 12 do 18 mjeseci ima CoD; njegovo vrednovanje mijenja argument hitnosti za ubrzane puteve i izravno ulazi u odluke [izgraditi ili kupiti](../izgraditi-ili-kupiti-u-državnoj-upravi/) gdje je vrijeme do vrijednosti pokretač odluke.
- **Slučaj koristi**: svaka brojka CoD-a navedena pri odobrenju trebala bi se ponovno pojaviti pri [ostvarenju koristi](../ostvarenje-koristi/): ako je trošak odgode bio stvaran, ubrzana korist trebala bi biti mjerljiva nakon puštanja u rad.

## Zamke

- **Pretpostavka linearnog CoD-a**: neke javne usluge imaju vrijednost oblikovanu rokom (zakonski datum sukladnosti: CoD nakon tog datuma skače na razinu rizika izvršenja, a prije njega je blizu nule), a ne glatku tjednu stopu. Razvrstajte profil hitnosti prije množenja.
- **CoD na izlaznim rezultatima koji nikome ne trebaju**: odgoda ima trošak samo ako neisporučena stvar ima vrijednost; sustav koji nitko neće koristiti ima nula CoD-a bez obzira na to koliko kasni.
- **Dvostruko brojenje odgode i diskontiranja**: [društvena diskontna stopa](../društvena-diskontna-stopa/) već vrednuje vrijeme na višegodišnjim horizontima procjene; CoD je operativna inačica unutar horizonta za tjedne i mjesece. Koristite CoD za kašnjenje rasporeda, a pomak NPV-a za višegodišnje preraspodjele faza.

## Izvori

- Reinertsen DG, *The Principles of Product Development Flow*, Celeritas Publishing, 2009.
- HM Treasury, Green Book supplementary guidance: wellbeing. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>
- National Audit Office, reports on Universal Credit rollout. <https://www.nao.org.uk/>
