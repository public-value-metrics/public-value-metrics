# Sociálna diskontná sadzba

Sociálna diskontná sadzba premieňa budúce náklady a prínosy na hodnoty v dnešných cenách, aby sa programy s výnosmi rozloženými na desaťročia dali porovnávať na spoločnom základe. Green Book od HM Treasury predpisuje klesajúci harmonogram ukotvený na 3,5 % počas prvých 30 rokov, založený na Ramseyho vzorci – konkrétne, citovateľné číslo, ktoré sa stalo predmetom živého politického a etického sporu vždy, keď sa uplatňuje na dlhodobé záväzky, ako sú klimatická politika alebo infraštruktúra.

## Prečo na tom záleží

Libra prínosu, ktorú získame o 30 rokov, nemá rovnakú hodnotu ako libra prínosu získaná dnes, a to čiastočne z dôvodu čistej časovej preferencie (ľudia a spoločnosti uprednostňujú dobré veci skôr) a čiastočne kvôli rastu (od budúcej spoločnosti sa očakáva, že bude bohatšia, takže libra pre ňu znamená na okraji menej). Príloha 6 Green Book odvodzuje britskú štandardnú diskontnú sadzbu z Ramseyho vzorca, ktorý kombinuje mieru čistej časovej preferencie s očakávaným tempom rastu spotreby a elasticitou medznej užitočnosti spotreby, a dáva zverejnenú sadzbu 3,5 % ročne pre roky 0 – 30, ktorá v zverejnenom harmonograme klesá pre roky 31 a ďalej (až na 1 % pre roky 301+). Tento harmonogram existuje práve preto, že konštantná sadzba 3,5 % zložená počas storočia by spôsobila, že prakticky každý dlhodobý prínos – protipovodňová ochrana zachraňujúca životy o 80 rokov, zníženie uhlíka, ktoré o 100 rokov odvráti škody – by sa v súčasnej hodnote javil ako zanedbateľný, čo ministerstvo financií označilo za neuveriteľný etický záver pre skutočne dlhodobú infraštruktúru a environmentálne rozhodnutia.

Diskontná sadzba je sporná práve preto, že jej voľba nie je neutrálny technický parameter: kóduje úsudok o tom, koľko by mala spoločnosť obetovať dnes pre ľudí, ktorí sa ešte nenarodili. Stern Review o ekonomike zmeny klímy (2006) použil diskontnú sadzbu blízku nule (čistá časová preferencia okolo 0,1 %) s tým, že diskontovať blahobyt budúcich generácií čímkoľvek podobným trhovým sadzbám je eticky neobhájiteľné, keď je škoda (katastrofická zmena klímy) nezvratná. Kritici – predovšetkým William Nordhaus – tvrdili, že Sternova takmer nulová sadzba nadsadzuje argumenty za okamžité výdavky na klímu, pretože takmer akýkoľvek súčasný náklad sa voči sotva diskontovanému budúcemu prínosu javí ako opodstatnený. Spor nebol o matematike; bol o tom, čí etický rámec má sadzbu určovať, a zostáva štandardnou ilustráciou toho, prečo je diskontná sadzba politickou voľbou, nie len poistno-matematickým vstupom.

## Matematika

Ramseyho vzorec, na ktorom stojí sadzba Green Book:

```
r = ρ + η·g

kde:
  r = sociálna diskontná sadzba
  ρ = miera čistej časovej preferencie (netrpezlivosť + riziko katastrofy)
  η = elasticita medznej užitočnosti spotreby
  g = očakávané ročné tempo rastu spotreby na obyvateľa
```

Klesajúci harmonogram Green Book (príloha 6, ilustratívne – presnú zverejnenú tabuľku skontrolujte v aktuálnom vydaní):

```
Roky 0–30:     3,5 %
Roky 31–75:    3,0 %
Roky 76–125:   2,5 %
Roky 126–200:  2,0 %
Roky 201–300:  1,5 %
Roky 301+:     1,0 %
```

Súčasná hodnota budúcej sumy:

```
PV = FV / (1 + r)^t
```

## Vypracovaný príklad

**Projekt protipovodňovej ochrany**: projekt prinesie £10 miliónov odvrátených povodňových škôd v roku 40.

Pri paušálnej sadzbe 3,5 %: PV = 10 000 000 / (1,035)^40 ≈ £2,52 milióna – prínos sa javí ako malý.

Pri klesajúcom harmonograme Green Book (3,5 % pre roky 0 – 30, 3,0 % potom) sa výpočet skladá sadzbou 3,5 % počas prvých 30 rokov a 3,0 % počas rokov 31 – 40:

```
PV = 10 000 000 / [(1,035)^30 × (1,03)^10]
   = 10 000 000 / [2,807 × 1,344]
   ≈ 10 000 000 / 3,773
   ≈ £2,65 milióna
```

Klesajúci harmonogram mierne zvyšuje súčasnú hodnotu dlhodobých prínosov oproti paušálnej vysokej sadzbe – to je výslovný účel harmonogramu, keďže paušálna sadzba 3,5 % by prínos £100 miliónov v roku 100 zdiskontovala na menej než £3,3 milióna.

**Digitálna infraštruktúra**: vládna migrácia do cloudu s nákladmi £4 milióny teraz má podľa očakávaní ušetriť £500 000 ročne na údržbe zastaranej infraštruktúry počas 15 rokov. Pri 3,5 % je súčasná hodnota tejto anuity približne £500 000 × 11,52 (15-ročný anuitný faktor pri 3,5 %) ≈ £5,76 milióna – s rezervou nad nákladmi £4 milióny, teda prípad s kladnou čistou súčasnou hodnotou, ktorý by pri naivne zvolenej vyššej sadzbe vyzeral citeľne slabšie (pri 7 % klesne ten istý anuitný faktor na približne 9,11, čo dáva £4,56 milióna, stále kladné, ale s oveľa tenšou rezervou).

## Súvislosť so softvérovým inžinierstvom

Väčšina softvérových obchodných prípadov beží 3 – 5 rokov, teda hlboko v pásme paušálnych 3,5 %, takže klesajúci harmonogram sa zriedka uplatní priamo – ale základná disciplína je dôležitá pre každú vládnu technologickú investíciu s dlhou životnosťou aktíva (národná platforma, program dátovej infraštruktúry, desaťročná zmluva):

- Používajte zverejnenú sadzbu z Green Book, nie interné „prahové sadzby“ požičané zo súkromných financií; audítori a posudzovatelia ministerstva financií očakávajú štandardný harmonogram.
- Pri prínosoch realizovaných o mnoho rokov (dlhodobé úspory údržby platformy, kumulatívna hodnota ekosystému otvorených dát – pozri [hodnotu otvorených dát](../hodnota-otvorených-dát/)) môže voľba diskontovania zmeniť obchodný prípad z kladného na záporný; sadzbu a horizont uvádzajte ako výslovné predpoklady, nie ako ukryté predvolené hodnoty.
- Toto priamo vstupuje do [hodnotenia podľa Green Book](../hodnotenie-podľa-green-book/), päťprípadového modelu, ktorý formálne vyžaduje diskontovaný peňažný tok, a do [oceňovania pohody a dobrého života](../oceňovanie-pohody/), kde sa tá istá otázka diskontovania objavuje pri nepeňažných prínosoch pre wellbeing.
- Pozri aj [medzigeneračnú spravodlivosť a diskontovanie udržateľnosti](../medzigeneračná-spravodlivosť-a-diskontovanie-udržateľnosti/) pre spor Stern – Nordhaus aplikovaný konkrétne na environmentálne a klimatické technologické investície.

## Úskalia

- **Použitie paušálnej sadzby pre veľmi dlhé horizonty.** Klesajúci harmonogram Green Book existuje práve preto, že konštantná sadzba podhodnocuje skutočne dlhodobé prínosy; zistite, ktoré pásmo platí, namiesto predvoleného použitia 3,5 % po celý čas.
- **Chápanie diskontnej sadzby ako eticky neutrálnej.** Spor Stern – Nordhaus ukazuje, že sadzba kóduje hodnotový úsudok o budúcich generáciách; jej zmena mení, ktoré programy sa javia ako opodstatnené, preto ju treba uviesť a obhájiť, nie skryť v predvolenej hodnote tabuľky.
- **Zámena sociálnej diskontnej sadzby so súkromnými nákladmi kapitálu.** Náklady vlády na požičiavanie a prahové sadzby súkromného sektora sú iné pojmy než sociálna sadzba odvodená z Ramseyho vzorca a ich zámena vo verejnom hodnotení zvyčajne skresľuje výsledok v prospech krátkodobých výnosov.
- **Nekonzistentné diskontovanie reálnych a nominálnych peňažných tokov.** Sadzba Green Book je reálna (očistená o infláciu); diskontovanie nominálnych tokov touto sadzbou podstatne podhodnocuje súčasné hodnoty.

## Zdroje

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation", Annex 6
  (2022). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Stern N. "The Economics of Climate Change: The Stern Review." HM Treasury, 2006.
- Nordhaus WD. "A Review of the Stern Review on the Economics of Climate Change." Journal of
  Economic Literature, 2007;45(3):686–702.
- Ramsey FP. "A Mathematical Theory of Saving." Economic Journal, 1928;38(152):543–559.
