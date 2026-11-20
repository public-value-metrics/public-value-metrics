# Náklady na transakciu

Náklady na transakciu (cost per transaction) sú hlavnou metrikou jednotkovej ekonomiky vládnej digitálnej služby: celkové náklady na poskytovanie kanála vydelené počtom transakcií dokončených cez neho. Bola vlajkovým číslom na starej Performance Platform GOV.UK a je číslom, ktoré financovalo desaťročie investícií „digital by default“, a práve preto je aj metrikou najviac náchylnou na manipuláciu.

## Prečo na tom záleží

Digital Efficiency Report Cabinet Office z roku 2012 uviedol porovnanie nákladov kanálov spôsobom, ktorý sa ujal: digitálne transakcie stáli približne 20-krát menej než telefonické a približne 50-krát menej než osobné, s ilustratívnymi údajmi z miestnej samosprávy zhruba £0,15 na webovú transakciu oproti £2,83 telefonicky a £8,62 osobne. Toto jediné porovnanie sa stalo zdôvodnením prepracovania 25 vzorových služieb pomenovaných v Government Digital Strategy a každého rezortného obchodného prípadu, ktorý odvtedy citoval úspory z presunu medzi kanálmi. Číslo je skutočne užitočné ako signál rádu veľkosti, ale pomer závisí výlučne od toho, čo sa na každej strane započíta: férové náklady telefonického kanála zahŕňajú personál call centra, telefónnu zmluvu, školenia a priestory. Férové digitálne náklady zahŕňajú hosting, priebežné platy produktového tímu, čas podpory pri zlyhaných cestách a asistovaný digitálny kanál, ktorý vyžaduje bod 5 [štandardu digitálnych služieb](../štandard-digitálnych-služieb/). Vyberte z digitálnej strany dosť položiek a každá služba vyzerá lacno.

## Matematika

```
Náklady na transakciu = celkové pridelené náklady kanála / dokončené transakcie

Celkové pridelené náklady kanála majú zahŕňať:
  + hosting a infraštruktúru
  + náklady produktového/inžinierskeho/podporného tímu (amortizované)
  + náklady na obsah a dizajn služby (amortizované)
  + náklady na asistovanú digitálnu podporu / podporu prístupnosti
  + náklady dopytu zo zlyhania (používatelia, ktorí zlyhajú digitálne
    a vrátia sa k telefónu)
  − jednorazové náklady na vybudovanie sa amortizujú počas očakávanej
    životnosti služby, nepremietajú sa celé do prvého roka

Bežný účtovný trik:
  „Medzné náklady na transakciu“ (len hosting, po vybudovaní) sa uvádzajú,
  akoby boli „priemernými nákladmi na transakciu“ (celkové náklady vrátane
  tímu, ktorý ju ďalej buduje a prevádzkuje). Tieto dve sa môžu pri službe
  s veľkým aktívnym dodávateľským tímom líšiť 10-násobne alebo viac.
```

## Vypracovaný príklad

**Služba obnovy dane z vozidla**: 4 milióny transakcií ročne.

```
Údaj len z medzných nákladov (trik):
  Len hosting + spracovanie platieb = £180 000 ročne
  Náklady na transakciu = 180 000 / 4 000 000 = £0,045
  → hlavné číslo uvedené v obchodnom prípade

Plne zaťažený údaj (poctivý):
  Hosting + platby                      £180 000
  Produktový/inžiniersky tím (8 FTE)    £720 000
  Podpora (zlyhané/sporné transakcie)   £310 000
  Asistovaná digitálna telefónna linka  £140 000
  Spolu                                 £1 350 000
  Náklady na transakciu = 1 350 000 / 4 000 000 = £0,3375

Plne zaťažený údaj je stále približne 8-krát lacnejší než telefonický
komparátor £2,83 z Digital Efficiency Report – skutočná a obhájiteľná
úspora – ale 7,5-krát vyšší než údaj len z medzných nákladov, uvedený
v skrátenej verzii. Obe čísla sú „pravdivé“, porovnateľné s nákladmi
telefonického kanála, s ktorým sa porovnávajú, je len jedno.
```

## Súvislosť so softvérovým inžinierstvom

Náklady na transakciu sú miestom, kde sa architektonické rozhodnutia stávajú finančným číslom: služba, ktorá sa čisto automaticky škáluje a vyžaduje málo manuálneho zásahu, tlačí toto číslo časom nadol. Služba, ktorá generuje vysoký objem tiketov podpory z mätúcich chybových stavov, ho tlačí nahor bez ohľadu na efektívnosť hostingu. Je to prirodzená sprievodná metrika k bodu 10 [štandardu digitálnych služieb](../štandard-digitálnych-služieb/) („definujte, ako vyzerá úspech, a zverejňujte údaje o výkonnosti“) a k [štandardom služieb a metrikám transakcií](../štandardy-služieb-a-metriky-transakcií/), ktoré stanovujú úplnejší súbor KPI, do ktorého toto číslo patrí. Vstupuje tiež priamo do výpočtov [úspor z presunu medzi kanálmi](../úspory-z-presunu-medzi-kanálmi/) a malo by sa zosúladiť s [celkovými nákladmi vlastníctva v IT verejnej správy](../celkové-náklady-vlastníctva-vo-vládnom-it/), aby sa režijné náklady platformy a zdieľaných služieb potichu nevynechali.

## Úskalia

- **Medzné náklady prezlečené za priemerné**: uvádzanie nákladov len na hosting po vybudovaní služby, vynechanie priebežného tímu, ktorý ju udržiava, iteruje a podporuje (pozri vypracovaný príklad vyššie).
- **Vylúčenie nákladov asistovaného digitálneho kanála**: kanál nie je v súlade s „digital by default“ a jeho skutočné náklady sa nezachytia, ak sa záložný telefón/papier vyžadovaný [digitálnym začlenením](../digitálne-začlenenie/) oceňuje osobitne alebo ignoruje.
- **Ignorovanie dopytu zo zlyhania**: transakcie, ktoré začnú digitálne a zlyhajú a aj tak vyvolajú telefonát alebo papierový formulár, sú nákladom digitálneho kanála, nie kanála, ktorý zlyhanie zachytí.
- **Porovnávanie transakcií rôznej zložitosti naprieč kanálmi**: telefonáty neprimerane vybavujú ťažké prípady (viacero závislých osôb, oprava chýb, zraniteľní žiadatelia). Porovnanie priemerných nákladov telefónu s priemernými digitálnymi nadsadzuje pomer, kým sa nezladí zloženie transakcií.

## Zdroje

- Cabinet Office, Digital Efficiency Report (2012). <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- GOV.UK Service Manual, service standard, point 10: define what success looks like. <https://www.gov.uk/service-manual/service-standard/point-10-define-success-publish-performance-data>
- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
