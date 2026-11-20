# Tieňové ceny

Tieňová cena je odhadnutá hodnota priradená statku, zdroju alebo externalite, ktoré nemajú pozorovateľnú trhovú cenu, alebo ktorých trhová cena je skreslená a neodráža ich skutočnú spoločenskú hodnotu. Vládne hodnotenie sa opiera o malú sadu oficiálnych tieňových cien – uhlíka, času mimo práce a nezamestnanej pracovnej sily –, ktoré sa zverejňujú centrálne, aby každé ministerstvo používalo rovnaké číslo.

## Prečo na tom záleží

Tieňové ceny existujú preto, že [sociálna analýza nákladov a prínosov](../sociálna-analýza-nákladov-a-prínosov/) nemôže fungovať bez peňažnej hodnoty každého nákladu a prínosu. Viaceré z tých najdôležitejších – tona vypusteného uhlíka, hodina času dochádzajúceho, hodina inak nezamestnanej pracovnej sily – nemajú trhovú cenu vôbec, alebo majú takú, ktorá skresľuje ich skutočné spoločenské náklady. HM Treasury a Department for Energy Security and Net Zero spoločne zverejňujú tieňovú cenu uhlíka, ktorá sa používa vo všetkých britských vládnych hodnoteniach
(<https://www.gov.uk/government/publications/valuing-greenhouse-gas-emissions-in-policy-appraisal>). Nevychádza z ceny na nijakom trhu s uhlíkom, ale z prístupu zosúladeného s cieľmi: hodnota uhlíka sa stanovuje na úrovni medzných nákladov na zníženie emisií, ktoré sú potrebné na dosiahnutie zákonom stanovených uhlíkových rozpočtov Spojeného kráľovstva. Je to zásadne iná logika než sledovanie toho, za čo sa uhlík skutočne obchoduje v rámci európskeho alebo britského systému obchodovania s emisiami (Emissions Trading Scheme).

Tieňová mzdová sadzba sleduje podobnú logiku na strane práce. Zamestnanie človeka, ktorý by inak bol nezamestnaný, nestojí spoločnosť jeho celú mzdu: časť tejto mzdy je transfer z nevyplatených dávok a zo straty voľného času a času na hľadanie práce, nie nové čisté čerpanie zdrojov spoločnosti. Preto usmernenie Green Book stanovuje pre prácu odvedenú z nezamestnanosti tieňovú cenu pod trhovou mzdou, ktorá odráža skutočné oportunitné náklady tejto práce (pozri [oportunitné náklady vo verejných výdavkoch](../oportunitné-náklady-vo-verejných-výdavkoch/)) namiesto jej trhovej ceny.

## Matematika

```
Tieňová cena uhlíka (ilustratívna štruktúra, aktuálne hodnoty z oficiálneho
nástroja BEIS/DESNZ na hodnoty uhlíka – nepoužívajte zastarané čísla):
  Hodnota pre obchodovaný sektor: vychádza z trajektórií cien povoleniek ETS
  Hodnota pre neobchodovaný sektor (zosúladená s cieľmi): stanovená na
    úrovni medzných nákladov na zníženie emisií potrebných na splnenie
    zákonných uhlíkových rozpočtov; v čase rastie, keďže sa vyčerpávajú
    jednoduchšie možnosti znižovania emisií
  Použitie: £/tonu CO2e × tony emisií vypustených alebo zabránených
    danou možnosťou, diskontované sociálnou diskontnou sadzbou pre budúce roky

Tieňová mzdová sadzba (SWR):
  SWR = trhová mzda − (hodnota ušetreného voľného času/času na hľadanie práce
                        + hodnota už nevyplácaných sociálnych dávok)
  Zvyčajne sa vyjadruje ako zlomok trhovej mzdy (napr. SWR = 0,6
    × trhová mzda v oblasti s vysokou nezamestnanosťou podľa usmernenia
    Green Book, príloha A, o trhoch práce s voľnou kapacitou)
```

Obe hodnoty sú politické konvencie stanovené centrálne, nie empirické pozorovania trhu. Celý zmysel tieňovej ceny je nahradiť chýbajúci alebo skreslený trh, a preto hodnotenie, ktoré ju používa, musí citovať aktuálny oficiálny zdroj a nesmie si odvodzovať vlastné číslo – práve aby boli hodnotenia všetkých ministerstiev porovnateľné.

## Vypracovaný príklad

**Národná vláda**: hodnotenie projektu protipovodňovej ochrany odhaduje, že ušetrí 400 ton CO2e emisií ročne (nižším používaním núdzovej techniky a nižším zabudovaným uhlíkom vďaka zabránenej rekonštrukcii) počas 30-ročného obdobia hodnotenia v porovnaní s výchiskovým scenárom „minimálnych zásahov“.

```
Ilustratívna tieňová cena uhlíka: £280/tonu CO2e (1. rok, rastúca počas
  obdobia hodnotenia podľa oficiálneho harmonogramu hodnôt pre neobchodovaný uhlík)
Uhlíkový prínos v 1. roku = 400 × £280 = £112 000
```

Keďže oficiálny harmonogram má hodnotu uhlíka počas obdobia hodnotenia *rastúcu* (odráža sprísňovanie uhlíkových rozpočtov), analytik musí pre každý rok 30-ročného toku použiť správnu hodnotu pre daný rok, nie paušálnu sadzbu. Použitie hodnoty z 1. roka počas celého obdobia by podhodnotilo prínosy neskorších rokov a skreslilo poradie oproti alternatívnym návrhom protipovodňovej ochrany s iným uhlíkovým profilom.

**Miestna samospráva**: program podpory zamestnanosti pre dlhodobo nezamestnaných obyvateľov umiestni 150 ľudí do práce so mzdou £11 za hodinu. Ocenenie plnou trhovou mzdou by programu pripísalo £11 × odpracované hodiny ako spoločenský prínos, ale prístup tieňovej mzdovej sadzby uznáva, že išlo o ľudí, ktorí neodišli z iných pracovných miest – skutočné oportunitné náklady ich práce pred programom boli nízke.

```
Trhová mzda: £11,00/hodinu
Tieňová mzdová sadzba (ilustratívna, vysoká miestna nezamestnanosť): 0,6 × trhová mzda = £6,60/hodinu
Čistý spoločenský prínos pripísateľný na odpracovanú hodinu ≈ £11,00 − £6,60 = £4,40/hodinu
  („navyše“ vytvorená hodnota z presunu skutočne nevyužitej práce do výroby,
   na rozdiel od samotnej mzdy, ktorá je z veľkej časti transfer)
```

Preto môžu hodnotenia programov zamestnanosti v oblastiach s vysokou nezamestnanosťou vykazovať kladnú čistú spoločenskú hodnotu, aj keď by ten istý program, realizovaný v oblasti s plnou zamestnanosťou, kde by sa vytesnená pracovná sila jednoducho odčerpala z iných pracovných miest, takú hodnotu nemal.

## Súvislosť so softvérovým inžinierstvom

Tieňové ceny sa dodávky softvéru dotýkajú len zriedka priamo, ale záleží na nich vždy, keď obchodný prípad tvrdí uhlíkový alebo sociálny prínos zmeny v IT – konsolidácia dátových centier, ktorá sľubuje úsporu uhlíka, alebo bezpapierová služba, ktorá sľubuje uhlík ušetrený na tlači a poštovnom. Treba v nich použiť aktuálnu oficiálnu tieňovú cenu uhlíka, nie vymyslené číslo, a uplatniť správny harmonogram po rokoch, nie paušálnu sadzbu, presne ako pri každom inom vstupe hodnotenia podľa Green Book. Pozri [celkové náklady vlastníctva vo vládnom IT](../celkové-náklady-vlastníctva-vo-vládnom-it/) a [hodnotu kybernetickej bezpečnosti verejného sektora](../hodnota-kybernetickej-bezpečnosti-vo-verejnom-sektore/); oba prípady často potrebujú popri priamo vyčíslených položkách aj tieňovú cenu pre ťažko oceniteľný vstup (riziko úniku údajov, výpadky).

## Úskalia

- **Použitie zastaranej hodnoty uhlíka alebo mzdy.** Obe hodnoty centrálne usmernenie pravidelne revidujú; hodnotenie postavené na prekonanom čísle neobstojí pred kontrolou ministerstva financií.
- **Uplatnenie paušálnej tieňovej ceny uhlíka počas viacdekádového hodnotenia.** Oficiálny harmonogram v čase rastie; použitie hodnoty z 1. roka počas celého obdobia skresľuje profil prínosov alebo nákladov.
- **Zámena tieňovej mzdy so zrážkou z reálnej mzdy pracovníka.** Tieňová mzdová sadzba upravuje ocenenie pracovného vstupu *v hodnotení*, nie mzdu, ktorú pracovník skutočne dostáva; zámena oboch by (nesprávne) ospravedlňovala platy pod trhovou úrovňou.
- **Odvodzovanie vlastnej tieňovej ceny namiesto oficiálnej.** Tieňové ceny sú politické konvencie práve preto, aby boli hodnotenia porovnateľné medzi ministerstvami; vlastné číslo, hoci dobre zdôvodnené, túto porovnateľnosť narúša.

## Zdroje

- HM Treasury / Department for Energy Security and Net Zero. "Valuing greenhouse gas emissions in
  policy appraisal." <https://www.gov.uk/government/publications/valuing-greenhouse-gas-emissions-in-policy-appraisal>
- HM Treasury. "The Green Book: appraisal and evaluation in central government," Annex A (shadow
  price of labour, non-work time values).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Little IMD, Mirrlees JA. "Project Appraisal and Planning for Developing Countries." Heinemann,
  1974 (základná metodika tieňových cien).
