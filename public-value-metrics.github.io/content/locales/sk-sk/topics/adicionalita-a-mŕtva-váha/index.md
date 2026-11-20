# Adicionalita a mŕtva váha

Adicionalita sa pýta, či intervencia spôsobila výsledok, ktorý by inak nenastal. Mŕtva váha (deadweight) je jej zrkadlovým obrazom: podiel výsledku, ktorý by nastal aj tak, aj bez programu, grantu či dotácie. Takmer každé tvrdenie vlády alebo charity o dopade nadsadzuje účinok, kým sa neodpočíta mŕtva váha. Preto ju britské hodnotiace usmernenia považujú za prvú a najdôležitejšiu úpravu každého uvádzaného čísla.

## Prečo na tom záleží

„Podporili sme rast 500 podnikov“ znie ako úspech. Ak by ale 300 z nich vyrástlo aj tak, lebo sa miestna ekonomika zotavovala, lebo mali iné zdroje financovania alebo lebo už pred začiatkom programu smerovali k rastu, skutočný prínos programu je 200, nie 500. Magenta Book britského ministerstva financií (HM Treasury) a dlhoroční „Additionality Guide“ od HM Treasury a BIS (pôvodne vypracovaný pre programy regionálneho rozvoja a regenerácie a odvtedy široko používaný v britskom vládnom hodnotení) formalizujú mŕtvu váhu ako úvodnú úpravu v štandardnej postupnosti čistého dopadu: hrubý účinok mínus mŕtva váha, mínus vytesnenie, mínus únik, upravené o multiplikačné efekty, sa rovná čistému adicionálnemu dopadu. Vynechanie tohto kroku je najčastejší spôsob, ako sa v tvrdeniach o dopade verejného a sociálneho sektora zveličuje, úmyselne aj neúmyselne. Grantový program, ktorý meria len hrubé výsledky účastníkov bez porovnávacej skupiny, nedokáže odlíšiť vlastný účinok od toho, čo by nastalo aj bez neho.

Mŕtva váha nie je pevné percento. Závisí výlučne od kontrafaktuálu pre konkrétnu populáciu a intervenciu (pozri [kontrafaktuálnu analýzu](../kontrafaktuálna-analýza/)). Hodnotenia regionálneho rozvoja v Anglicku za čias bývalých regionálnych rozvojových agentúr (Regional Development Agencies) bežne zisťovali mieru mŕtvej váhy v rozmedzí 20 – 60 % podľa typu podpory podnikania. Dôveryhodné hodnotenia programov preto uvádzajú rozpätie upravené o mŕtvu váhu, nie jedno predpokladané číslo. Preto tiež poskytovatelia financií, ako National Lottery Community Fund a Big Society Capital, vyžadujú od prijímateľov, aby sa mŕtvej váhe v správach o výsledkoch výslovne venovali, namiesto uvádzania hrubých počtov účastníkov.

## Matematika

Štandardná postupnosť úprav čistého dopadu, ako ju uvádzajú britské hodnotiace usmernenia (Magenta Book; HM Treasury/BIS Additionality Guide; hodnotiace usmernenia ESIF a štrukturálnych fondov):

```
Hrubý výsledok
  − Mŕtva váha       (čo by nastalo aj tak)
  − Vytesnenie       (aktivita/prínos presunutý odinakiaľ, nie vytvorený – pozri
                       displacement-and-attribution)
  − Únik             (prínos, ktorý pripadne mimo cieľovej skupiny/oblasti)
  × Multiplikátor    (dodatočná nepriama/indukovaná ekonomická aktivita, ak je kladná)
  = Čistý adicionálny dopad
```

Miera mŕtvej váhy ako podiel:

```
Miera mŕtvej váhy = výsledky, ktoré by nastali bez intervencie
                     / celkové pozorované hrubé výsledky

Čisté adicionálne výsledky = Hrubé výsledky × (1 − miera mŕtvej váhy)
```

## Vypracovaný príklad

**Grantový program podpory podnikania**: regionálna grantová schéma uvádza, že 500 podporených podnikov zvýšilo v nasledujúcom roku zamestnanosť, v priemere o 3 pracovné miesta každý, teda hrubé tvrdenie o 1 500 pracovných miestach.

Porovnávacia skupina podobných nepodporených podnikov (pozri [kontrafaktuálnu analýzu](../kontrafaktuálna-analýza/)) ukazuje, že 40 % rastu zamestnanosti podporených podnikov by nastalo aj tak, a to na základe toho, ako si v rovnakom období viedla priradená skupina.

```
Miera mŕtvej váhy = 40 %
Čisté adicionálne pracovné miesta = 1 500 × (1 − 0,40) = 900 pracovných miest
```

Čestne vykázateľný úspech programu je 900 pracovných miest, nie 1 500. Ide o zníženie o 40 % výlučne vďaka úprave o mŕtvu váhu, ešte pred zohľadnením vytesnenia alebo úniku.

**Charitatívny program zamestnávania**: charita umiestnila 200 dlhodobo nezamestnaných ľudí do práce za £600 000 (hrubo £3 000 na jedno umiestnenie). Celoštátne údaje o trhu práce ukazujú, že bez akejkoľvek intervencie nájde za rovnaké obdobie prácu približne 15 % porovnateľnej kohorty dlhodobo nezamestnaných prirodzenou fluktuáciou na trhu práce.

```
Miera mŕtvej váhy = 15 %
Čisté adicionálne umiestnenia = 200 × (1 − 0,15) = 170
Skutočné náklady na jedno adicionálne umiestnenie = £600 000 / 170 ≈ £3 529
```

Hrubý údaj o nákladoch na umiestnenie (£3 000) podhodnocuje skutočné náklady adicionálneho prínosu charity približne o 15 %.

## Súvislosť so softvérovým inžinierstvom

Adicionalita a mŕtva váha sa priamo týkajú každého, kto vyvíja softvér na meranie dopadu alebo správu grantov pre verejný či sociálny sektor:

- Systémy na vykazovanie výsledkov by mali už v návrhu zachytávať porovnávaciu alebo základnú skupinu, nielen výsledky účastníkov. Dodatočné doplnenie kontrafaktuálu po spustení systému, ktorý ho nemal, je oveľa ťažšie než jeho zabudovanie od začiatku (pozri [kontrafaktuálnu analýzu](../kontrafaktuálna-analýza/)).
- Dashboardy, ktoré uvádzajú len hrubé počty účastníkov, budú systematicky nadsadzovať dopad voči poskytovateľom financií a dozorným orgánom. Ak existujú odhady mŕtvej váhy (z hodnotiacej literatúry alebo porovnávacej skupiny), softvér by mal zobraziť údaj očistený o mŕtvu váhu popri hrubom, nie namiesto neho.
- Táto téma priamo nadväzuje na [sociálnu návratnosť investícií](../sociálna-návratnosť-investície/). Jej pomer SROI je dôveryhodný, až keď sa od hrubých uvádzaných výsledkov odpočíta mŕtva váha (a vytesnenie). Kalkulačka SROI, ktorá tento krok vynecháva, vytvorí nafúknuté pomery, ktoré neobstoja pri kontrole.

## Úskalia

- **Vykazovanie hrubých výsledkov, ako by všetky boli adicionálne.** Je to najčastejšia chyba pri meraní dopadu v správach o grantoch a programoch. Pred zverejnením hlavného čísla sa vždy opýtajte: „Nastalo by to aj tak?“
- **Predpoklad, že jedno percento mŕtvej váhy platí všade.** Mŕtva váha sa veľmi líši podľa odvetvia, populácie a miestnych ekonomických podmienok. Použite porovnávaciu skupinu alebo dôkazy špecifické pre odvetvie, nie číslo prevzaté z nesúvisiaceho hodnotenia.
- **Zámena mŕtvej váhy a vytesnenia.** Mŕtva váha sa týka kontrafaktuálnych výsledkov tých istých účastníkov, vytesnenie sa týka účinkov na iných ľudí či miesta (pozri [vytesnenie a pripisovanie](../vytesnenie-a-atribúcia/)). Ich zámena vedie k dvojitému alebo nedostatočnému započítaniu úpravy.
- **Mŕtva váha, ktorú uvádzajú sami účastníci.** Keď sa prijímateľov opýtame „Nastalo by to bez našej pomoci?“, dostaneme systematicky nízke odhady mŕtvej váhy (účastníci majú sklon pripisovať zásluhy programu). Nezávislá porovnávacia skupina je omnoho spoľahlivejšia.

## Zdroje

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020).
  <https://www.gov.uk/government/publications/the-magenta-book>
- HM Treasury / Department for Business, Innovation and Skills, "Additionality Guide: A Standard
  Approach to Assessing the Additional Impact of Interventions" (3rd edition), originally developed
  with English Partnerships and the Housing Corporation.
- European Commission, "Evalsed: The Resource for the Evaluation of Socio-Economic Development" —
  usmernenia k mŕtvej váhe, vytesneniu a úniku pri hodnotení štrukturálnych fondov.
- National Lottery Community Fund, "Guidance on Outcomes and Impact Reporting." <https://www.tnlcommunityfund.org.uk/>
