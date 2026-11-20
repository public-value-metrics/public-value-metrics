# Návratnosť investície darcu

Návratnosť investície darcu (donor return on investment) je to, čo konkrétna libra konkrétneho darcu skutočne kúpi vo výsledkoch, nie prevádzkové pomery charity a nie vlastná návratnosť charity z jej celkového rozpočtu. Presúva ROI z pohľadu organizácie (ako efektívne fungujeme) na pohľad darcu (čo mení môj marginálny príspevok), pričom tieto dve čísla sa bežne a mylne považujú za to isté.

## Prečo na tom záleží

Vlastné „ROI“ charity, pokiaľ sa tento výraz vôbec používa, zvyčajne opisuje niečo ako [náklady na prijímateľa](../náklady-na-prijímateľa/) alebo [pomer režijných nákladov charity](../pomer-režijných-nákladov-charity/), teda miery organizačnej efektívnosti. ROI darcu je úplne iná otázka: keďže táto charita už má iné príjmy, čo pridajú peniaze *tohto* darcu na okraji? Ak by charita dodala ten istý program s konkrétnym darom £10 000 aj bez neho, pretože má dostatok rezerv alebo by medzeru zaplnil iný poskytovateľ, ROI tohto daru pre darcu je blízke nule, bez ohľadu na to, aký dobrý je celkový pomer režijných nákladov alebo cena za výsledok.

Je to tá istá otázka dodatočnosti, ktorá je základom hodnotenia [hodnoty za peniaze](../hodnota-za-peniaze/) vo verejných výdavkoch Spojeného kráľovstva a [dodatočnosti a mŕtvej váhy](../adicionalita-a-mŕtva-váha/) pri hodnotení programov: vytvorená hodnota sa dá pripísať financujúcemu len v miere, v akej by sa inak nestala. Významné platformy darcovských fondov a organizácie efektívneho darovania (Giving What We Can, GiveWell) stavajú svoje odporúčania výslovne na tomto rozlíšení a nepýtajú sa „je to dobrá charita?“, ale „má táto charita nevyužitý priestor pre ďalšie financovanie, takže môj dar je dodatočný?“.

## Matematika

```
ROI darcu ≠ prevádzková efektívnosť charity

ROI darcu ≈ (Výsledok dosiahnutý s darom) − (Výsledok, ktorý by nastal
             bez neho, t. j. kontrafaktuál)
           ─────────────────────────────────────────────────
                              Veľkosť daru

Kľúčové vstupy:
  - Priestor pre ďalšie financovanie (je charita na okraji obmedzená financiami?)
  - Funging (zaplnil by medzeru iný darca?)
  - Medzná nákladová efektívnosť pri konkrétnej úrovni financovania (náklady
    často rastú, keď sa intervencia rozšíri za svoju najľahšie dosiahnuteľnú populáciu)
```

Pozri [nákladovú efektívnosť v efektívnom altruizme](../nákladová-efektívnosť-v-efektívnom-altruizme/), kde je vysvetlené, ako GiveWell operacionalizuje otázku „priestoru pre ďalšie financovanie“, a [kontrafaktuálnu analýzu](../kontrafaktuálna-analýza/) pre všeobecnú metódu.

## Vypracovaný príklad

Darca si vyberá medzi dvoma darmi po £5 000:

- **Charita C**: má plne financovaný základný program s rezervami £2 milióny a čakacou listinou poskytovateľov; marginálnych £5 000 sa pravdepodobne pripíše do rezerv alebo na menej prioritnú činnosť. Odhadovaný výsledok dodatočný vďaka darcovi: minimálny, peniaze zjavne nemenia to, čo sa stane.
- **Charita D**: malý program podložený dôkazmi, ktorý verejne uviedol, že bez ďalších £50 000 bude musieť budúci štvrťrok odmietnuť 200 ľudí, a už zozbieral £42 000. Marginálnych £5 000 s veľkou pravdepodobnosťou zafinancuje skutočnú dodatočnú dodávku, povedzme 20 ďalších obslúžených ľudí pri vlastných uvádzaných nákladoch charity £250 na prijímateľa.

Rovnako veľký dar, ten istý darca, radikálne odlišné ROI darcu, a to nie preto, že by bola charita C horšou organizáciou (celkovo môže mať lepšiu cenu za výsledok), ale preto, že jej marginálna medzera vo financovaní je už uzavretá.

## Súvislosť so softvérovým inžinierstvom

Darcovské platformy a nástroje na odporúčanie darov príliš často zobrazujú iba metriky efektívnosti na úrovni organizácie (pomer režijných nákladov, náklady na prijímateľa), pretože tie charity zverejňujú vo výročných správach a najľahšie sa dajú vložiť do porovnávacej tabuľky. Správne zobraziť ROI darcu vyžaduje iný, ťažšie získateľný údaj: uvádzanú aktuálnu medzeru vo financovaní charity alebo „priestor pre ďalšie financovanie“, ktorý sa počas roka mení a len zriedka existuje ako štruktúrované dáta. Platformy, ktoré chcú podporiť skutočnú úvahu o ROI darcu, potrebujú buď priamy feed zo zverejnení medzier vo financovaní (ako ho GiveWell vedie ručne pre svoje odporúčané charity), alebo výslovné upozornenie, že porovnávacia tabuľka ukazuje organizačnú efektívnosť, nie dodatočnosť darcu. Pozri [pomer režijných nákladov charity](../pomer-režijných-nákladov-charity/), metriku, s ktorou sa ROI darcu najčastejšie, a mylne, zamieňa.

## Úskalia

- **Zamieňanie efektívnosti charity s dodatočnosťou darcu.** Dobre vedená charita s nízkymi režijnými nákladmi môže mať takmer nulové marginálne ROI darcu, ak nie je obmedzená financiami.
- **Ignorovanie fungingu.** Ak by veľký inštitucionálny poskytovateľ medzeru pokryl tak či tak, dar jednotlivca vytesňuje peniaze tohto poskytovateľa, namiesto toho, aby pridal novú dodávku.
- **Predpoklad lineárnej nákladovej efektívnosti pri škálovaní.** Najlacnejšie dosiahnuteľní prijímatelia sa obsluhujú ako prví; marginálne náklady na výsledok často rastú, keď sa program rozširuje, takže ROI ďalšej libry nie je rovnaké ako ROI priemernej už vynaloženej libry.
- **Žiadna uvedená medzera vo financovaní.** Charita alebo platforma, ktorá nevie povedať, čo by zafinancovalo ďalších £X, nemôže podložiť skutočné tvrdenie o ROI darcu, iba tvrdenie o priemerných nákladoch.

## Zdroje

- Giving What We Can, on funding gaps and cost-effectiveness in donation decisions. <https://www.givingwhatwecan.org/>
- GiveWell, "Our criteria" (room for more funding as an explicit criterion). <https://www.givewell.org/how-we-work/our-criteria>
- HM Treasury, the Green Book: appraisal and evaluation in central government. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-governent>
