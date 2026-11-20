# Technický dlh ako erózia verejnej hodnoty

Technický dlh je metafora Warda Cunninghama z roku 1992 pre implicitné budúce náklady unáhlených minulých programátorských rozhodnutí: **istina** (nesplatená práca na náprave) a **úrok** (priebežná záťaž, ktorú dlh kladie na dodávku). V zastaranej vládnej IT infraštruktúre sa tento úrok platí priamo z verejnej hodnoty – pomalšia dodávka zákonných zmien, vyššia miera zlyhaní občianskych služieb a zmenšujúci sa okruh ľudí, ktorí sa systému vôbec môžu bezpečne dotknúť.

## Prečo na tom záleží

Staré mainframové systémy a systémy z éry COBOLu naprieč britskými vládnymi rezortmi – HMRC a DWP patria k najčastejšie uvádzaným – nesú dobre zdokumentované a rastúce riziko, na ktoré opakovane upozorňuje National Audit Office, okrem iného aj v správe *Digital Transformation in Government* (<https://www.nao.org.uk/>): starnúce platformy, ktoré sa draho menia, čoraz ťažšie sa zabezpečujú a závisia od špecializovanej pracovnej sily, ktorá odchádza do dôchodku rýchlejšie, než sa nahrádza. Na rozdiel od nevybavených úloh v súkromnom sektore tento dlh stojí priamo medzi občanmi a ich zákonnými nárokmi – výpočtový nástroj dávok, ktorý sa nedá bezpečne meniť, je obmedzením realizácie politiky, nie len inžinierskou nepríjemnosťou. Reštart IT programu Universal Credit v roku 2013, keď National Audit Office zistil, že pôvodná zákazka nepriniesla hodnotu za peniaze a významnú časť softvérového majetku bolo treba odpísať, je učebnicovým príkladom toho, ako sa neocenený technický dlh vráti k živému, ministerstvom viditeľnému verejnému programu.

## Matematika

```
Istina SQALE = Σ cez porušenia (čas nápravy) × nákladová sadzba vývojára
Pomer technického dlhu (TDR) = náklady nápravy / náklady na opätovný vývoj × 100
                    (stupne SonarQube: A ≤5 %, B ≤10 %, C ≤20 %, D ≤50 %)

Úrok (číslo, ktoré odôvodňuje splácanie):
  úrok/rok = Δ rýchlosti dodávky × hodnota na jednotku rýchlosti
           + Δ miery incidentov dotýkajúcich sa občanov × náklad na incident
           + prirážka za špecialistické zručnosti × počet dotknutých ľudí
Prípad splatenia = PV(ušetrený úrok počas horizontu) − náklady nápravy
               (diskontované sociálnou diskontnou sadzbou Green Book, pozri
               social-discount-rate.md)
```

Istina vyjadruje záväzok; úrok je to, čo vytvára investičný prípad pre parlamentný výbor pre verejné účty.

## Vypracovaný príklad

Systém na spracovanie nárokov s 250 000 riadkami kódu napísaný v zastaranom 4GL. Pri použití referenčnej hodnoty CAST Appmarq približne $3,61 istiny technického dlhu na riadok kódu (≈£2,85 pri bežnom prepočte):

```
Istina ≈ 250 000 × £2,85 ≈ £712 500
TDR ≈ 16 % (stupeň C)
```

Nameraný úrok: rezort si udržiava troch špecializovaných dodávateľov s 40 % prirážkou k dennej sadzbe oproti bežným sadzbám senior inžinierov, pretože interné zručnosti odišli – o £180 000 ročne viac pre šesťčlenný tím. Systém tiež spôsobuje štyri veľké výpadky spracovania ročne, z ktorých každý pozastaví rozhodnutia pre približne 5 000 žiadateľov a presmeruje ich do kontaktného centra za približne £25 na hovor:

```
Úrok ≈ £180 000 (prirážka za zručnosti)
     + 4 × 5 000 × £25 = £500 000 (náklady na presmerované kontakty)
     ≈ £680 000/rok
```

Cielená náprava najhoršie fungujúcich modulov stojí £1 200 000 a modelovo znižuje úrok o 70 %:

```
Zníženie úroku = 0,70 × 680 000 = £476 000/rok
Návratnosť ≈ 1 200 000 / 476 000 ≈ 2,5 roka
```

Cielenie je dôležité: náprava zriedka upravovaného kódu nepriniesie nič, pretože úrok sa koncentruje tam, kde sa stretáva vysoká frekvencia zmien aj hustota dlhu.

## Súvislosť so softvérovým inžinierstvom

Rámcovanie cez verejnú hodnotu povyšuje prípad technického dlhu nad „kód je starý“: vyjadrite zastaranú infraštruktúru ako inventár miest, kde sa koncentruje stratená dodávateľská kapacita, a výslovne ju prepojte s [celkovými nákladmi vlastníctva](../celkové-náklady-vlastníctva-vo-vládnom-it/), keďže úrok je prevádzkový náklad, ktorý patrí do riadku TCO bez ohľadu na to, či sa na to financie niekedy pýtali. Systémy zaťažené dlhom majú tiež neprimerane vysokú expozíciu voči [kybernetickým rizikám](../hodnota-kybernetickej-bezpečnosti-vo-verejnom-sektore/), pretože frekvencia záplat a hustota dlhu spolu korelujú – nezáplatovateľný zastaraný systém je technický dlh, ktorého úrok sa platí rizikom incidentov, nie librami. A každý kompromis medzi nápravou a novou funkciou je sám rozhodnutím o [nákladoch oneskorenia](../náklady-oneskorenia-vo-verejných-programoch/): splácanie dlhu odďaľuje ďalšiu zákonnú zmenu, ktorá má vlastné náklady oneskorenia, a tie treba zvážiť proti ušetrenému úroku.

## Úskalia

- **Vykazovanie len istiny**: veľký, desivý odhad nápravy bez čísla o úroku nič neodôvodňuje pred schvaľovateľom výdavkov.
- **Doslovné prijímanie čísel dlhu vygenerovaných nástrojmi**: skenery v štýle SQALE počítajú porušenia pravidiel; míňajú drahý druh dlhu – architektonické rozhodnutia a nezdokumentované obchodné pravidlá zastaraných systémov – a označujú maličkosti.
- **„Prepísanie sa všetkého zbaví“**: programy výmeny musia obstáť v rovnakej disciplíne ako každý iný obchodný prípad – kontrafaktuálne náklady, pravdepodobnosť úspechu a diskontovanie –, nie byť z nej vyňaté, ako ukázal reštart Universal Credit v roku 2013.
- **Utopizmus nulového dlhu**: optimálna úroveň dlhu nie je nula; dlh je páka, ktorá kúpila skoršiu dodávku. Živou otázkou je vždy úroková sadzba, nie to, či dlh vôbec existuje.

## Zdroje

- Cunningham W, "The WyCash Portfolio Management System", OOPSLA experience report, 1992.
- CAST, technical debt estimation (Appmarq benchmark). <https://www.castsoftware.com/glossary/technical-debt-estimation>
- National Audit Office, *Digital Transformation in Government* and reports on Universal Credit. <https://www.nao.org.uk/>
