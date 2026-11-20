# Zodpovednosť založená na výsledkoch (OBA)

Zodpovednosť založená na výsledkoch (Outcomes-Based Accountability, OBA), nazývaná aj Results-Based
Accountability (RBA), je rámec Marka Friedmana, ktorý oddeľuje dve otázky, ktoré verejný sektor vo
vykazovaní zvykne miešať: „darí sa populácii dobre?“ (zodpovednosť za populáciu) a „darí sa dobre
tomuto konkrétnemu programu?“ (zodpovednosť za výkonnosť). Ich zamieňanie je podľa Friedmana
jediným najčastejším dôvodom, prečo sa dobre riadené programy obviňujú z populačných trendov, ktoré
nikdy nemali moc zmeniť.

## Prečo na tom záleží

Friedman rámec vyložil v knihe *Trying Hard Is Not Good Enough* (2005) a tvrdil, že väčšina
verejného vykazovania buď zahlcuje rozhodovateľov populačnými štatistikami, ktoré nekontroluje žiadna
jediná agentúra (miera tehotenstiev tínedžeriek, miera nezamestnanosti, dĺžka života), alebo ich
zahlcuje počtami aktivít na úrovni programu (obslúžení klienti, uskutočnené odporúčania), ktoré nič
nehovoria o tom, či sa niekomu zlepšil život. Prínosom RBA je malá, disciplinovaná slovná zásoba,
ktorá ich drží oddelene: populačné výsledky (podmienky blahobytu celej populácie, napríklad „deti sa
rodia zdravé“) nepatria žiadnej jedinej agentúre a vyžadujú, aby sa spoločne pohybovalo mnoho
partnerov; miery výkonnosti (nakoľko dobre konkrétny program obsluhuje svojich konkrétnych klientov)
patria jednej agentúre a majú sa posudzovať len podľa toho, čo daná agentúra skutočne môže ovplyvniť.
Friedmanove „tri otázky o výkonnosti“ (koľko sme urobili, nakoľko dobre sme to urobili a je niekomu
lepšie?) sú dnes zabudované v zmluvách o ľudských službách v amerických štátoch a okresoch a
prostredníctvom poradenskej spoločnosti a súpravy nástrojov Clear Impact, zosúladenej s RBA, sa
široko používajú pri objednávaní služieb miestnymi samosprávami v Spojenom kráľovstve a krajinách
Commonwealthu. Praktické dôsledky sú zmluvné: program bývania by nemal prísť o financovanie preto,
že miera bezdomovectva v meste vzrástla z makroekonomických príčin mimo jeho dosahu, ale určite by o
financovanie prísť mal, ak jeho vlastní klienti nie sú ubytovaní.

## Matematika

```
Zodpovednosť za populáciu („veľký obraz“, ktorý zdieľa komunita, región alebo národ):
  Výsledok       — podmienka blahobytu (napr. „obyvatelia sú ekonomicky zabezpečení“)
  Ukazovateľ(e)  — miera tejto podmienky (napr. miera nezamestnanosti, medián príjmu domácností)
  → ukazovateľ nevlastní žiadny jediný program; pohyb vyžaduje mnoho prispievateľov

Zodpovednosť za výkonnosť (za čo zodpovedá jeden program):
  Koľko sme urobili?       — objem aktivity (obslúžení klienti, dodané jednotky)
  Nakoľko dobre sme to urobili? — kvalita/efektívnosť (% dokončenia programu, náklady na klienta)
  Je niekomu lepšie?       — výsledok, na ktorom záleží (% zamestnaných 6 mesiacov po
                              programe, pred/po alebo oproti porovnávacej skupine)

Program sa posudzuje podľa tretej otázky o výkonnosti, nikdy priamo podľa populačného
ukazovateľa, pokiaľ jeho rozsah a návrh nemôžu odôvodnene hýbať ním samy.
```

## Vypracovaný príklad

**Mestom financovaný program podpory zamestnanosti**, 500 účastníkov ročne, objednaný miestnou
samosprávou v rámci výkonnostného rámca v štýle RBA:

```
Populačný ukazovateľ (kontext, nie hodnotiaca karta programu):
  Miera nezamestnanosti v meste: 6,2 % (oproti 5,8 % v predchádzajúcom roku, v dôsledku
  zatvorenia továrne mimo kontroly programu)

Miery výkonnosti (skutočná zodpovednosť programu):
  Koľko:         500 zapísaných účastníkov (cieľ 480) – splnené
  Nakoľko dobre: 78 % miera dokončenia; náklady na absolventa = £340 000 / 390 absolventov ≈ £872
  Je lepšie:     z 390 absolventov 260 v trvalom zamestnaní po 6 mesiacoch = 66,7 %
                 oproti 41 % u spárovanej porovnávacej skupiny (pozri counterfactual-analysis)
```

Pri čítaní podľa zodpovednosti za populáciu sa program javí ako neúspešný, lebo miera
nezamestnanosti v meste počas jeho pôsobenia vzrástla. Pri čítaní podľa zodpovednosti za výkonnosť
v RBA program uspel: splnil objemový cieľ, udržal stabilnú kvalitu a dosiahol výsledok v zamestnanosti
o 25,7 percentuálneho bodu vyšší než spárovaná porovnávacia skupina, zatiaľ čo populačný ukazovateľ
sa pohol z dôvodov (zatvorenie továrne) úplne mimo kontroly programu.

## Súvislosť so softvérovým inžinierstvom

RBA sa priamo premieta do známeho rozlíšenia v SRE: populačné ukazovatele sú ako obchodné metriky
typu North Star, ktoré nevlastní od začiatku do konca žiadny jeden inžiniersky tím (tržby firmy,
trhový podiel), zatiaľ čo miery výkonnosti sú ako vlastné SLO tímu, teda veci, ktoré skutočne
posúvajú dizajnové rozhodnutia daného tímu. Dashboard, ktorý vykazuje obe bez označenia, čo je čo,
pozýva presne k nesprávnemu pripisovaniu, pre ktoré bol RBA vytvorený: inžinier v pohotovosti, ktorý
je obviňovaný z metriky, ktorú riadi závislý tím. Pri objednávaní alebo tvorbe nástrojov na
vykazovanie pre zmluvy o výsledkoch vybudujte triádu „koľko / nakoľko dobre / je lepšie“ ako
plnohodnotné, samostatne filtrovateľné polia namiesto jediného zmiešaného KPI. Je to rovnaká
disciplína ako oddelenie predstihových a oneskorených ukazovateľov v téme
[KPI verejného sektora](../kpi-verejného-sektora/). RBA je tiež logika zodpovednosti, ktorá stojí za
[platbou za výsledky a sociálnymi dlhopismi](../platba-za-výsledky-a-sociálne-dlhopisy/): zmluva
o platbe za výsledky môže spravodlivo platiť len za mieru výkonnosti „je lepšie“, nikdy za populačný
ukazovateľ, pokiaľ intervencia nie je jeho skutočne dominantným hnacím faktorom.

## Úskalia

- **Odmeňovanie alebo penalizovanie programu podľa populačného ukazovateľa, ktorý nekontroluje**:
  je to jediná chyba, ktorej má RBA zabrániť; vždy zistite, či je program väčším alebo menším
  prispievateľom k populačnému výsledku, skôr než k nemu pripojíte dôsledky.
- **Vykazovanie „koľko“, akoby to bolo „je lepšie“**: počty aktivít (obslúžení klienti) sú
  najľahšie zbierateľné a najmenej výpovedné údaje; trvajte na tom, aby sa na otázku „je niekomu
  lepšie“ odpovedalo skutočnými údajmi o výsledkoch, ideálne oproti kontrafaktuálu (pozri
  [kontrafaktuálnu analýzu](../kontrafaktuálna-analýza/)).
- **Chápanie ukazovateľov RBA ako navždy pevných**: Friedmanova metóda je výslovne iteratívna,
  cyklus „údaje, príbeh, čo funguje, akčný plán“, nie jednorazové cvičenie návrhu hodnotiacej karty.
- **Žiadna porovnávacia skupina pre „je lepšie“**: zmena pred/po bez kontrafaktuálu zamieňa účinok
  programu s trendom, ktorý by populácia vykázala aj tak.

## Zdroje

- Mark Friedman, *Trying Hard Is Not Good Enough: How to Produce Measurable Improvements for
  Customers and Communities*, Trafford Publishing, 2005.
- Clear Impact, "What is Results-Based Accountability?"
  <https://clearimpact.com/results-based-accountability/>
