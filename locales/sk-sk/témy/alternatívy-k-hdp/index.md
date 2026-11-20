# Alternatívy k HDP

Alternatívy k HDP sú metriky vytvorené na zachytenie toho, čo hrubý domáci produkt (HDP) štrukturálne ignoruje: neplatenú starostlivosť, vyčerpávanie životného prostredia, rozdelenie príjmov a to, či rast skutočne zlepšuje životy. Najznámejšie sú Genuine Progress Indicator (GPI, ukazovateľ skutočného pokroku) a Index hrubého národného šťastia (GNH) Bhutánu; argumenty za ich vážne zváženie najvplyvnejšie predložila Stiglitzova-Senova-Fitoussiho komisia v roku 2009. Pre inžinierov, ktorí budujú vládne dashboardy alebo systémy KPI, je otázka „ktoré číslo sa počíta ako pokrok“ návrhovým rozhodnutím so skutočnými dôsledkami pre to, čo sa financuje.

## Prečo na tom záleží

Simon Kuznets, ktorý v 30. rokoch 20. storočia vybudoval národné účty USA, v roku 1934 varoval Kongres, že „blahobyt národa sotva možno odvodiť z merania národného dôchodku“, pričom toto upozornenie ukazovateľ takmer okamžite prerástol. HDP počíta upratovanie po úniku ropy ako rast a neplatenú starostlivosť rodiča o dieťa ako nič; nerozlišuje výdavky, ktoré budujú trvácny blahobyt, od výdavkov, ktoré len vyrovnávajú už spôsobenú škodu. Stiglitzova-Senova-Fitoussiho komisia, zvolaná francúzskym prezidentom Nicolasom Sarkozym a vedená Josephom Stiglitzom, Amartyom Senom a Jean-Paulom Fitoussim, v roku 2009 konštatovala, že štatistické systémy by mali presunúť dôraz „z merania ekonomickej produkcie na meranie blahobytu ľudí“ a že udržateľnosť by sa mala sledovať osobitne od súčasného blahobytu, nie zlúčená do jedného čísla. Alternatívy k HDP toto odporúčanie operacionalizujú. GPI, ktorý v 90. rokoch vyvinul think-tank Redefining Progress a ktorý nadväzuje na Measure of Economic Welfare Williama Nordhausa a Jamesa Tobina z roku 1972, vychádza z osobnej spotreby (ako HDP) a potom pridáva netrhové prínosy, ktoré HDP vynecháva (práca v domácnosti, dobrovoľníctvo), a odpočítava obranné náklady a náklady vyčerpania (kriminalita, znečistenie, dochádzanie, čerpanie zdrojov), ktoré HDP chybne počíta ako kladné. Index GNH Bhutánu, ktorý spravuje GNH Centre Bhutan (<https://www.gnhcentre.bt/>), ide ešte ďalej a nahrádza rast ako deklarovaný ústavný cieľ krajiny: agreguje 33 ukazovateľov v 9 oblastiach (psychická pohoda, zdravie, vzdelanie, využitie času, kultúrna rozmanitosť, vládnutie, vitalita komunity, ekologická rozmanitosť a životná úroveň) do jedného skóre založeného na dostatočnosti, ktoré sa priamo používa na preosievanie návrhov vládnych politík.

## Matematika

```
GPI = výdavky na osobnú spotrebu
      + netrhové prínosy (práca v domácnosti, dobrovoľníctvo, vysokoškolské vzdelanie)
      − obranné a sociálne náklady (kriminalita, znečistenie, dochádzanie, rozpad rodiny)
      − vyčerpanie prírodného a sociálneho kapitálu (čerpanie zdrojov, strata poľnohospodárskej pôdy)

Skóre dostatočnosti GNH, pre každú oblasť:
  osoba je v oblasti „dostatočná“, keď prekročí prah pri každom ukazovateli oblasti
  Index šťastia = (% populácie dostatočnej v ≥ 6 z 9 oblastí)
                  + (vážený priemerný deficit menšiny „ešte nie šťastných“)
```

## Vypracovaný príklad

**Región, GPI**: osobná spotreba je $50 mld. Pripočítame odhadnutú hodnotu práce v domácnosti a dobrovoľníckej práce $12 mld. (mzdové sadzby podľa nákladov na náhradu; pozri [hodnotu času dobrovoľníkov](../hodnota-dobrovoľníckeho-času/)). Odpočítame odhadnuté ročné náklady dopravných zápch pri dochádzaní ($3 mld.), kriminality ($4 mld.) a dlhodobého vyčerpávania zdrojov ($6 mld.):

```
GPI = 50 + 12 − 3 − 4 − 6 = 49 ($ mld.)
```

Ak HDP v tom roku vzrástlo z $50 mld. na $55 mld. (+10 %), ale obranné náklady a náklady vyčerpania rástli rýchlejšie než spotreba, GPI môže klesnúť, aj keď HDP rastie: „prahová hypotéza“, na ktorú sa výskumníci GPI odvolávajú pri ekonomikách s vysokým príjmom zhruba od 70. rokov, keď rast naďalej stúpal, no GPI stagnoval.

**Občan, GNH**: respondent prekročí prah dostatočnosti v 7 z 9 oblastí (zdravie, vzdelanie, životná úroveň, vitalita komunity, kultúrna rozmanitosť, ekologická rozmanitosť, využitie času), ale zaostáva v psychickej pohode a vládnutí. Keďže 7 ≥ 6, v hlavnom počte sa započíta ako „šťastný“; index osobitne sleduje hĺbku jeho dvoch deficitov, aby tesné prekročenie nebolo nerozoznateľné od pohodlného.

## Súvislosť so softvérovým inžinierstvom

- Dashboard KPI modelovaný len na priepustnosti alebo výdavkoch (vzor HDP) bude systematicky prehliadať škodu spôsobenú pri vytváraní tej priepustnosti: objem tiketov podpory považovaný za „angažovanosť“ namiesto „núdze používateľa“ je softvérovo-dodávková verzia započítania úniku ropy ako rastu.
- Účtovníctvo v štýle GPI je užitočný audítorský vzor pre každú sadu [KPI verejného sektora](../kpi-verejného-sektora/): pri každej hlavnej výstupnej metrike sa spýtajte, aké obranné náklady potichu vzniká (prepracovanie, riešenie incidentov, vyhorenie), a odpočítajte ich, tak ako GPI odpočítava obranné výdavky zo spotreby.
- Metóda dostatočnosti oblastí GNH (vyhovel/nevyhovel v každej dimenzii, potom agregácia) je štrukturálne rovnaká technika ako [viackriteriálna analýza rozhodovania](../viackriteriálna-analýza-rozhodovania/) a oplatí sa ju využiť všade tam, kde by jediné skalárne skóre skrylo kritické zlyhanie v niektorej dimenzii.

## Úskalia

- **Považovanie GPI za presný národný účet**: na rozdiel od HDP nemá GPI jedinú štandardizovanú metodiku; rôzne štúdie rôzne vážia náklady dochádzania, čas dobrovoľníkov či vyčerpanie zdrojov, takže porovnania GPI medzi štúdiami sú oveľa menej spoľahlivé než porovnania HDP medzi krajinami.
- **Prenášanie GNH ako celku do inej politickej kultúry**: jeho váhy oblastí a prahy dostatočnosti vznikli v bhutánskych konzultáciách; skopírovanie čísla bez podkladového konzultačného procesu vytvorí prázdnu metriku, ktorej nikto neverí.
- **Predpoklad, že alternatíva k HDP nahrádza hodnotenie nákladov a prínosov**: sú to diagnostické, celoekonomické ukazovatele, nie rozhodovacie nástroje pre jednotlivý program; na to použite [sociálnu analýzu nákladov a prínosov](../sociálna-analýza-nákladov-a-prínosov/).

## Zdroje

- Stiglitz JE, Sen A, Fitoussi J-P. "Report by the Commission on the Measurement of Economic
  Performance and Social Progress." (2009) <https://ec.europa.eu/eurostat/documents/118025/118123/Fitoussi+Commission+report>
- GNH Centre Bhutan. <https://www.gnhcentre.bt/>
- Redefining Progress. "The Genuine Progress Indicator: A Tool for Sustainable Development."
- Nordhaus WD, Tobin J. "Is Growth Obsolete?" (1972), NBER.
