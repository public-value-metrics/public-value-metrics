# Platba za výsledky a sociálne dlhopisy (PbR/SIB)

Platba za výsledky (payment by results, PbR) odmeňuje poskytovateľa na základe overených dosiahnutých
výsledkov, nie vykonaných aktivít. Sociálny dlhopis (social impact bond, SIB) je špecifická
financovacia štruktúra PbR, v ktorej súkromní alebo filantropickí investori financujú poskytovanie
služby vopred a štátny objednávateľ im ich splatí, s výnosom, len ak nezávisle merané výsledky
dosiahnu dohodnuté prahy, čím sa riziko dodania presúva z daňového poplatníka na investora.

## Prečo na tom záleží

Prvý SIB na svete sa spustil vo väznici HMP Peterborough v septembri 2010: Social Finance získala
£5 miliónov od 17 investorov na financovanie „One Service“, ktorá pracovala s väzňami s krátkymi
trestami (do 12 mesiacov) na zníženie recidívy, pričom ministerstvo spravodlivosti (Ministry of
Justice) a Big Lottery Fund súhlasili s tým, že investorom splatia len vtedy, ak počet opakovaných
odsúdení klesne aspoň o 7,5 % oproti spárovanej celoštátnej porovnávacej kohorte. Posledná kohorta
pilotu v Peterborough zaznamenala 9,7 % zníženie opakovaných odsúdení, pohodlne nad prahom, a
investorom sa splatilo s výnosom. Mechanizmus mal význam, pretože riešil konkrétny problém
objednávania: vláda chcela platiť za výsledky a nie za vstupy, ale nemohla znášať finančné riziko
intervencie, ktorá nemusí fungovať, takže štruktúra SIB preniesla toto riziko na investorov ochotných
ho prevziať. Government Outcomes Lab (GO Lab) na Blavatnikovej škole správy vecí verejných v Oxforde
dnes vedie najúplnejšiu verejnú dôkaznú základňu o výkonnosti PbR a SIB na svete, sleduje výrazne
viac ako 200 dlhopisov dopadu na celom svete a zverejňuje výskum o tom, ktoré prvky návrhu korelujú
s úspechom alebo neúspechom. Poučenie, ku ktorému sa dôkazy opakovane vracajú, je, že *zvolená
metrika výsledku* a to, kto znáša riziko jej nedosiahnutia, určuje takmer všetko ostatné o tom, ako
sa zmluva PbR v praxi správa.

## Matematika

```
Platba PbR = základná platba (ak existuje) + Σ (dosiahnutý výsledok × jednotková cena za výsledok)

Výnos investora do sociálneho dlhopisu:
  Výdavok investora   = počiatočný kapitál financujúci poskytovanie služby
  Platba za výsledok  = objednávateľ platí, len ak výsledok ≥ prah, škálovaná podľa
                         toho, ako ďaleko nad prahom výkonnosť skončí
  Výnos investora     = prijaté platby za výsledky − výdavok investora
                         (miera výnosu, často s limitom, odrážajúca podstúpené riziko)

Kľúčové parametre návrhu, ktoré určujú správanie celej zmluvy:
  Metrika výsledku        — musí to byť výsledok, nie výstup (pozri outcomes-vs-outputs)
  Porovnanie/kontrafaktuál — zvyčajne spárovaná kohorta (pozri counterfactual-analysis)
  Prah platby              — minimálne zlepšenie pred spustením akejkoľvek platby
  Krivka platby            — lineárna, schodovitá alebo s limitom nad prahom
  Zľava za pripisovanie/mŕtvu váhu — pozri additionality-and-deadweight
```

## Vypracovaný príklad

**Peterborough One Service** (ilustratívne čísla z publikovaných hodnotení):

```
Získaný kapitál investorov:      £5 000 000
Kohorta:                         ~3 000 mužov s krátkymi trestami v dvoch kohortách
Prah:                            ≥7,5 % zníženie opakovaných odsúdení oproti spárovanej
                                  celoštátnej porovnávacej skupine, inak žiadna platba
Výsledok kohorty 1:              8,4 % zníženie – pod zmluvnou hranicou pre túto
                                  kohortu samostatne podľa pôvodných pravidiel
Kombinovaný/konečný výsledok:    9,7 % zníženie – nad prahom
Platba za výsledok:              vláda (Ministry of Justice / Big Lottery Fund)
                                  platí za percentuálny bod nad prahom a financuje
                                  tým splatenie investorov plus výnos
```

**Zmluva PbR miestnej samosprávy (ilustratívna)**: služba rodinnej intervencie sa objednáva za
£4 000 za odporúčanú rodinu (platba za aktivitu) plus £6 000 za rodinu bez ďalšieho odporúčania na
ochranu detí 12 mesiacov po ukončení (platba za výsledok). Odporúčaných bolo 200 rodín, 150
prípadov sa uzavrelo, 96 zostáva bez odporúčania po 12 mesiacoch:

```
Platba za aktivitu  = 200 × £4 000 = £800 000
Platba za výsledok  = 96 × £6 000  = £576 000
Celkové náklady zmluvy = £1 376 000 za 96 potvrdených trvalých výsledkov
Náklady na potvrdený výsledok ≈ £14 333 (pozri cost-per-outcome)
```

## Súvislosť so softvérovým inžinierstvom

Platba za výsledky je skôr problém zosúladenia stimulov než problém s dátami a dátový systém je
miesto, kde sa toto zosúladenie buď udrží, alebo zlomí. Nezávislé, proti manipulácii odolné overenie
výsledkov je celá hra: objednávateľ a poskytovateľ majú protichodné stimuly v tom, ako sa
nejednoznačný prípad zakóduje, takže systém zaznamenávajúci výsledky potrebuje auditnú stopu, dohodu
o zdieľaní údajov s nezávislým overovateľom (často iným orgánom než poskytovateľ, niekedy úradom
oficiálnej štatistiky, ktorý porovnáva údaje s policajnými alebo dávkovými záznamami) a nemenné
verzovanie definície výsledku, teda PbR ekvivalent úskalia „predefinovanie metriky“ v téme
[KPI verejného sektora](../kpi-verejného-sektora/). Výpočty pripisovania závisia od metód spárovanej
kohorty z [kontrafaktuálnej analýzy](../kontrafaktuálna-analýza/), ktoré potrebujú reprodukovateľný,
auditovateľný kód, nie jednorazovú tabuľku. A samotná metrika musí byť skutočný výsledok, nie
zástupná aktivita (pozri [výsledky a výstupy](../výsledky-a-výstupy/)), pretože zmluva PbR platiaca
za výstup len premenuje bežné financovanie na „business as usual“ s dodatočnými transakčnými
nákladmi. Keď sa sociálna návratnosť SIB modeluje prospektívne, takéto posudzovanie zvyčajne
priamo preberá metodiku [sociálnej návratnosti investícií](../sociálna-návratnosť-investície/).

## Úskalia

- **Platenie za ľahko zneužiteľný zástupný výsledok**: „účasť na stretnutiach“ je aktivita
  prezlečená za výsledok; trvajte na miere, ktorá odráža skutočnú požadovanú zmenu (recidíva,
  zamestnanosť, stabilita bývania).
- **Žiadny dôveryhodný kontrafaktuál**: bez spárovanej porovnávacej skupiny môže byť zlepšenie
  regresiou k priemeru alebo širším trendom, nie účinkom programu; pozri
  [kontrafaktuálnu analýzu](../kontrafaktuálna-analýza/) a
  [adicionalitu a mŕtvu váhu](../adicionalita-a-mŕtva-váha/).
- **Podceňovanie transakčných a hodnotiacich nákladov**: nezávislé overovanie, prepájanie údajov a
  správa zmlúv pri schémach PbR/SIB bežne dosahujú dvojciferné percentá hodnoty zmluvy; dôkazová
  základňa GO Lab to dokumentuje ako opakujúci sa dôvod ukončenia schém.
- **Vyberanie najlepších alebo „parkovanie“**: poskytovatelia platení za výsledok majú priamy stimul
  uprednostniť klientov, ktorí by uspeli aj tak, a odsunúť najťažšie prípady; navrhnite platobné
  stupne alebo úpravu podľa zloženia prípadov, aby sa tomu zabránilo.

## Zdroje

- Government Outcomes Lab, University of Oxford, Blavatnik School of Government.
  <https://golab.bsg.ox.ac.uk/>
- Social Finance, "Peterborough Social Impact Bond" evaluation summaries.
  <https://golab.bsg.ox.ac.uk/case-studies/peterborough-social-impact-bond/>
- Ministry of Justice, "Peterborough Social Impact Bond HMP Doncaster: Final Reconviction Results
  for the Peterborough Social Impact Bond."
