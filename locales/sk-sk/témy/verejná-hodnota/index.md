# Verejná hodnota

Verejná hodnota je hodnota, ktorú vláda alebo organizácia sociálneho sektora vytvára pre občanov ako
celok: nie len výstupy, ktoré produkuje, alebo peniaze, ktoré minie, ale to, či je spoločnosť na tom
lepšie vďaka tomu, že organizácia existuje a konala tak, ako konala. „Strategický trojuholník“ Marka
Moora z roku 1995 je štandardný test: verejná iniciatíva je odôvodnená, len keď je *legitímna a
podporovaná*, *vecne hodnotná* a *prevádzkovo uskutočniteľná*, a to všetko naraz.

## Prečo na tom záleží

Hodnotu v súkromnom sektore je pomerne ľahké oceniť: tržby mínus náklady, o ktorých rozhodujú
zákazníci, ktorí môžu odísť. Verejná hodnota nemá ekvivalentný trhový signál. Väzenská služba, daňový
úrad a tím ochrany detí produkujú veci, ktoré občania nemôžu jednoducho odmietnuť kúpiť, a „zákazník“
(daňový poplatník, páchateľ, dieťa) často nie je tá istá osoba ako politický zadávateľ, ktorý
schvaľuje rozpočet. Moorova kniha *Creating Public Value: Strategic Management in Government*
(Harvard University Press, 1995) dodáva chýbajúcu disciplínu: manažér by mal vedieť uviesť (1), akú
verejnú hodnotu jeho iniciatíva vytvára, (2) odkiaľ pochádza jeho legitimita a financovanie na jej
sledovanie, teda minister, rada, mandát, grant, a (3) či ju jeho organizácia skutočne dokáže dodať s
dostupnými ľuďmi, technológiou a procesmi. Program, ktorý dopadne dobre len na jednom alebo dvoch
ramenách trojuholníka, ešte nie je odôvodnený, hoci je akokoľvek dobre mienený.

Prakticky na tom záleží, lebo väčšina zlyhaní softvéru vo verejnom sektore nie sú zlyhania
technológie. Systém môže byť technicky výborný a prevádzkovo uskutočniteľný a aj tak zlyhať, lebo
nikto v legitimizujúcom prostredí (ministri, dozorné výbory, verejnosť) v skutočnosti nechcel to, čo
optimalizuje. Digitálna služba Universal Credit a Národný program IT pre NHS (NHS National Programme
for IT) sa v britskej literatúre o verejnej správe uvádzajú ako prípady, kde prevádzkové a legitimizačné
rameno trojuholníka nezodpovedalo ramenu poslania.

## Matematika

Verejná hodnota je rámec, nie vzorec, ale štruktúruje inak vágne investičné prípady do troch
testovateľných otázok:

```
Test strategického trojuholníka — pokračujte, len ak platia všetky tri:

1. Legitimita a podpora: Kto to schválil a podporuje to schvaľujúce
   prostredie (zákonodarný zbor, minister, rada, predstavenstvo, verejná
   mienka) aj naďalej, keď sa zdroje viažu?

2. Verejná hodnota: Aké konkrétne, opísateľné dobro to vytvára pre
   občanov alebo spoločnosť — bezpečnosť, zdravie, príležitosť, dôveru,
   spravodlivosť — a pre koho?

3. Prevádzková kapacita: Dokáže to organizácia skutočne dodať s
   existujúcimi zamestnancami, technológiou, partnermi a právnou
   právomocou, alebo s dôveryhodným plánom na ich získanie?
```

Slabá iniciatíva zvyčajne zlyhá aspoň na jednom ramene: technicky dodateľná, ale bez mandátu (pilot
zdieľania údajov, ktorý nikto neschválil); populárna, ale nedodateľná (sľúbená digitálna služba bez
inžinierskej kapacity); alebo schválená a dodateľná, ale prázdna z hľadiska hodnoty (dashboard, ktorý
nikto nepoužíva).

## Vypracovaný príklad

**Miestna samospráva**: digitálny tím mestskej rady navrhuje nástroj AI na triáž žiadostí o dávku na
bývanie.

- *Legitimita*: kabinet rady schválil stratégiu „digitálne v prvom rade“, ale volení členovia
  zodpovední za sociálne zabezpečenie neschválili automatizované rozhodovanie konkrétne, čo je
  medzera, nie zelená.
- *Verejná hodnota*: rýchlejšie spracovanie (deklarovaný prínos: z 10 dní na 2 dni) je skutočná
  hodnota, len ak žiadatelia nie sú neprávom zamietnutí; tvrdenie o hodnote musí zahŕňať presnosť, nie
  len rýchlosť.
- *Prevádzková kapacita*: rada má jedného dátového vedca a žiadny proces monitorovania modelu, takže
  deklarovaná 2-dňová doba spracovania nie je pri uvedenej miere chýb momentálne dodateľná.

Dve z troch ramien zlyhávajú. Moorov rámec hovorí: nepokračujte v pôvodnom rozsahu; najprv získajte
výslovné schválenie automatizovaných rozhodnutí a vybudujte kapacitu na monitorovanie, inak je
„verejná hodnota“ uvádzaná v podnikateľskom prípade fiktívna.

**Ústredná vláda**: online služba daňového úradu na podávanie priznaní má silnú legitimitu
(zákonný mandát) a silnú prevádzkovú kapacitu (existujúci tím dodáva spoľahlivo), ale slabú verejnú
hodnotu, ak je využívanie nízke, pretože digitálne vylúčení (pozri
[digitálnu inklúziu](../digitálne-začlenenie/)) sú tlačení do kanála, ktorý nemôžu používať. Trojuholník
odhalí to, čo by dashboard zameraný len na dodávku skryl.

## Súvislosť so softvérovým inžinierstvom

Verejná hodnota je zastrešujúci pojem, pod ktorý patrí celý tento repozitár:
[hodnota za peniaze](../hodnota-za-peniaze/) dáva test hospodárnosti, efektívnosti a účinnosti pre to,
či sa zdroje využili dobre; [oportunitné náklady vo verejných výdavkoch](../oportunitné-náklady-vo-verejných-výdavkoch/)
oceňujú, čo iné mohli peniaze dokázať; a [adicionalita a mŕtva váha](../adicionalita-a-mŕtva-váha/),
[vytesnenie a pripisovanie](../vytesnenie-a-atribúcia/) a
[kontrafaktuálna analýza](../kontrafaktuálna-analýza/) spoločne testujú, či je deklarovaná hodnota
skutočná, a nie len predpokladaná. Pre inžinierov je strategický trojuholník užitočná analýza
„pre-mortem“ pre každé rozhodnutie o produkte verejného sektora:

- Pred určením rozsahu funkcie sa opýtajte, kto ju schválil a či schválenie stále platí; funkcia
  vytvorená pre ministra, ktorý medzitým odišiel, mohla potichu stratiť rameno legitimity.
- Berte „vieme to postaviť“ a „mali by sme to postaviť“ ako skutočne samostatné otázky; inžinierska
  kapacita odpovedá len na tretie rameno trojuholníka.
- Dokumenty požiadaviek na produkt pre verejné služby by mali výslovne uvádzať tvrdenie o verejnej
  hodnote, nielen používateľský príbeh, pretože hodnota pre používateľa a verejná hodnota nie sú vždy
  to isté (pozri [výsledky a výstupy](../výsledky-a-výstupy/)).

## Úskalia

- **Považovanie prevádzkovej kapacity za dostatočné zdôvodnenie.** „Vieme to postaviť“ odpovedá len
  na jedno rameno trojuholníka; tímy so silnou dodávacou schopnosťou bežne dodajú veci, ktoré nikto
  nechcel schváliť a ktoré nevytvárajú žiadne opísateľné verejné dobro.
- **Zamieňanie legitimity so zákonnosťou.** Program môže byť zákonný a stále mu chýba politická a
  verejná podpora potrebná na jeho udržanie počas náročnej fázy dodávky; právne krytie nie je to isté
  ako mandát.
- **Predpoklad, že verejná hodnota je to, čo povie objednávajúci rezort.** Moorov model vyžaduje, aby
  tvrdenie o hodnote bolo testovateľné voči skutočným záujmom občanov, nie len tvrdené poskytovateľom
  financií, inak sa rámec zrúti na sebacertifikáciu.

## Zdroje

- Moore MH. *Creating Public Value: Strategic Management in Government*. Harvard University Press,
  1995.
- Moore MH. *Recognizing Public Value*. Harvard University Press, 2013.
- Benington J, Moore MH (eds). *Public Value: Theory and Practice*. Palgrave Macmillan, 2011.
- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation" (2022).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
