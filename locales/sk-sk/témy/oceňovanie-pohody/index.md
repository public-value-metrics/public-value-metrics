# Oceňovanie pohody (WELLBY)

Oceňovanie pohody oceňuje účinok politiky priamo v termínoch spokojnosti so životom a ako jednotku používa WELLBY (rok života upravený o pohodu) – jeden WELLBY zodpovedá zmene o jeden bod na 0 – 10 škále spokojnosti so životom, udržanej po dobu jedného roka. Je to oficiálne schválená alternatíva HM Treasury k oceňovaniu každého prínosu cez ochotu platiť.

## Prečo na tom záleží

Dokument HM Treasury „Wellbeing guidance for appraisal: supplementary Green Book guidance“ (2021,
<https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>)
formálne zaviedol údaje o subjektívnej pohode do hodnotenia ústrednej vlády a dal analytikom cestu, ako oceniť výsledky – sociálne väzby, duševné zdravie, bezpečnosť, občiansku participáciu –, ktoré metódy [deklarovaných preferencií](../oceňovanie-metódou-deklarovaných-preferencií/) a [odhalených preferencií](../oceňovanie-podľa-odhalených-preferencií/) len ťažko presvedčivo oceňujú, pretože ľudia sú často zlými predpovedateľmi toho, nakoľko statok skutočne ovplyvní ich spokojnosť so životom. Usmernenie, vypracované spoločne s What Works Centre for Wellbeing, stanovuje odporúčanú peňažnú hodnotu na WELLBY – £13 000 (ceny 2021, pravidelne revidované) – odvodenú zo vzťahu medzi príjmom a spokojnosťou so životom pozorovaného vo veľkých prieskumoch pohody (predovšetkým Annual Population Survey od ONS, ktorý od roku 2011 kladie štyri otázky o pohode ONS4), čím dáva analytikom prepočtový kurz späť na libry, keď je potrebné peňažné porovnanie s inými hodnoteniami podľa Green Book.

Metóda je dôležitá, pretože obracia obvyklú logiku oceňovania: namiesto otázky, koľko by ľudia za výsledok zaplatili (deklarované preferencie), alebo odvodzovania hodnoty zo súvisiacej trhovej transakcie (odhalené preferencie) meria priamo účinok výsledku na vykazovanú spokojnosť so životom, čím obchádza priepasť medzi tým, čo ľudia hovoria, že chcú, a tým, čo ich skutočne zlepšuje. To je zároveň jej hlavné obmedzenie – sebavykazovaná spokojnosť so životom je ovplyvnená adaptáciou a efektmi rámcovania, ktoré musí starostlivý praktik kontrolovať.

## Matematika

```
WELLBY = 1 bod spokojnosti so životom (škála 0-10) udržaný pre 1 osobu po dobu 1 roka

Celkové WELLBY z politiky =
  Σ (zmena skóre spokojnosti so životom) × (počet dotknutých ľudí)
    × (trvanie v rokoch, diskontované sociálnou diskontnou sadzbou)

Peňažná hodnota = celkové WELLBY × hodnota na WELLBY
  (odporúčaná hodnota HM Treasury: £13 000 na WELLBY, ceny 2021,
   podlieha pravidelnej revízii – pred použitím skontrolujte aktuálne usmernenie)
```

Líši sa od [roku života upraveného o pohodu](../roky-života-upravené-o-pohodu/) v zdravotnej ekonómii, ktorý je typicky ukotvený na škálach kvality života súvisiacej so zdravím (EQ-5D a podobné) a nie na všeobecnej spokojnosti so životom; obe sú príbuzné, ale nie zameniteľné, a hodnotenia podľa Green Book by mali výslovne uvádzať, ktorá škála a ktorá metóda zisťovania stojí za uvádzaným číslom WELLBY.

## Vypracovaný príklad

**Miestna samospráva**: obec prevádzkuje komunitný program priateľstva (befriending) pre izolovaných starších obyvateľov, ktorý obsluhuje 400 ľudí. Prieskum pohody pred/po s otázkou ONS4 o spokojnosti so životom ukazuje, že priemerné skóre účastníkov stúpne z 5,8 na 6,5 – zisk 0,7 bodu –, udržaný počas 2-ročného financovaného trvania programu.

```
Vytvorené WELLBY = 400 ľudí × 0,7 bodu × 2 roky = 560 WELLBY
Peňažná hodnota = 560 × £13 000 = £7,28 mil.
Náklady programu = £450 000 za 2 roky

Pomer prínosov a nákladov ≈ £7,28 mil. / £0,45 mil. ≈ 16 : 1
```

Takto vysoký pomer by mal vyvolať skúmanie, nie oslavy – usmernenie Green Book k pohode výslovne varuje pred prijímaním malých vzoriek so sebavykazovanými ziskami za čistú mincu bez kontroly efektov výberu (pripojili sa k programu len najspoločenskejší obyvatelia, ktorí sa s najväčšou pravdepodobnosťou zlepšia?) a bez porovnávacej skupiny; dobre navrhnuté hodnotenie by odpočítalo kontrafaktuálnu zmenu pozorovanú u neúčastníkov, pozri [kontrafaktuálnu analýzu](../kontrafaktuálna-analýza/).

**Národná vláda**: porovnanie dvoch programov zamestnanosti pomocou WELLBY namiesto samotných príjmov zachytáva, že nezamestnanosť prináša náklady na pohodu nad rámec straty príjmu – britský výskum pohody dôsledne zisťuje, že nezamestnanosť znižuje spokojnosť so životom viac, než by predpovedala samotná strata príjmu, pre nepeňažné účinky straty štruktúry, zmyslu a sociálneho kontaktu. Program hodnotený len podľa nárastu príjmov by podhodnotil svoju hodnotu v porovnaní s programom hodnoteným dodatočne aj podľa WELLBY.

## Súvislosť so softvérovým inžinierstvom

Oceňovanie pohody sa k inžinierskym tímom dostáva zriedka priamo, ale formuje, čo sa definuje ako „úspech“ pre produkty sociálneho sektora a verejných služieb – digitálna platforma priateľstva, nástroj triáže duševného zdravia alebo komunitná platforma pre izolovaných obyvateľov by mala očakávať, že jej dopad sa nakoniec bude merať takto, čo znamená, že produktová analytika musí zachytávať, *kto* je oslovený a *ako dlho*, nielen počty použití. Prieskumovú inštrumentáciu pohody (ONS4 alebo overené ekvivalenty) zabudujte do hodnotenia služby od začiatku, namiesto dodatočného pripojenia; dodatočné doplnenie východiskového stavu pohody po spustení služby úplne stratí porovnanie pred/po. Pozri [výsledky vs. výstupy](../výsledky-a-výstupy/) a [metódy hodnotenia dopadu](../metódy-hodnotenia-dopadu/).

## Úskalia

- **Žiadny kontrafaktuál ani porovnávacia skupina.** Zisk pohody pred/po bez kontroly toho, čo by sa stalo aj tak, nadsadzuje účinok programu; pozri [kontrafaktuálnu analýzu](../kontrafaktuálna-analýza/) a [adicionalitu a mŕtvu váhu](../adicionalita-a-mŕtva-váha/).
- **Malé, samovýberové vzorky.** Prieskumy pohody účastníkov programu, ktorí sa prihlásili sami, sú náchylné na skreslenie výberu – ľudia, ktorí sa pripojili a zostali, mali pravdepodobne už predtým stúpajúci trend.
- **Považovanie prepočtu £ na WELLBY za presný.** Peňažná hodnota je politická konvencia odvodená z regresií príjmu a pohody, nie trhová cena; používajte ju na porovnateľnosť naprieč hodnoteniami podľa Green Book, nie ako tvrdenie o tom, „koľko pohoda stojí“.
- **Zámena WELLBY so zdravotnými QALY.** Obe merajú odlišné konštrukty na odlišných škálach; pozri [roky života upravené o pohodu](../roky-života-upravené-o-pohodu/) pre zdravotnoekonomický variant a oba nepriemerujte dohromady.

## Zdroje

- HM Treasury. "Wellbeing guidance for appraisal: supplementary Green Book guidance." 2021.
  <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>
- What Works Centre for Wellbeing. <https://whatworkswellbeing.org/>
- Office for National Statistics. "Personal well-being in the UK" (ONS4 measures).
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing>
- Fujiwara D, et al. "Wellbeing Valuation: A Nascent Field?" LSE / Simetrica research summaries.
