# Úspory z presunu medzi kanálmi

Úspory z presunu medzi kanálmi (channel shift) sú projektované zníženie nákladov z presunu objemu transakcií z drahých kanálov (telefón, priame pulty, papierová pošta) do lacnej digitálnej samoobsluhy. Je to finančný motor „digital by default“ a zároveň položka obchodného prípadu, ktorá sa najpravdepodobnejšie mýli, pretože predpoklad, na ktorom stojí, že offline kanály sa zmenšujú, keď rastie digitálne využívanie, platí len niekedy.

## Prečo na tom záleží

Aritmetika vyzerá nespochybniteľne, ak použijeme čísla [nákladov na transakciu](../náklady-na-transakciu/) z Digital Efficiency Report: presuňte milión transakcií z osobnej návštevy za £8,62 na digitálnu za £0,15 a úspora presiahne 8 miliónov libier. Úspora sa ale stane hotovosťou uvoľnenou na prerozdelenie, len ak sa *fixná kapacita* zmenšujúceho sa kanála skutočne zruší: miesta v call centre, pracovníci pultov, minúty telefónnej zmluvy. Digitálne programy miestnych samospráv opakovane zistili, že celkový objem kontaktov neklesá úmerne digitálnemu využívaniu. Výskum z programov digitálnej transformácie samospráv a od orgánov ako Socitm a Local Government Association zdokumentoval opakujúci sa vzorec: digitálne kanály prilákajú skutočne nový kontakt (občania, ktorí by nevolali ani neprišli, to teraz robia, lebo je to jednoduchšie) a značný podiel „digitálnych“ transakcií zlyhá v polovici a aj tak vyvolá telefonát. Objem telefonátov preto klesá oveľa menej, než by naznačovalo percento digitálneho využívania, niekedy v absolútnom vyjadrení vôbec neklesá, hoci jeho *podiel* na celkovom kontakte klesá.

## Matematika

```
Hrubá úspora z presunu = presunutý objem × (náklady_starý_kanál − náklady_digitálne)

Čistá (zrealizovaná) úspora = hrubá úspora
                       − nový/tieňový dopyt vytvorený jednoduchším kanálom
                       − náklady dopytu zo zlyhania (digitálne zlyhania,
                         ktoré aj tak vyvolajú telefonát alebo návštevu pultu)
                       − náklady nezrušenej fixnej kapacity (call
                         centrum môže znížiť stav len v diskrétnych
                         jednotkách; 15 % pokles objemu len zriedka
                         dovolí znížiť stav o 15 %)

Prah realizácie: úspory sa dajú započítať, až keď objem klesne pod úroveň,
ktorú starý kanál vie obsadiť na nasledujúcom menšom diskrétnom
kapacitnom stupni (napr. strata jednej celej zmeny, jedného celého stola,
jedného zmluvného pásma stavu)
```

## Vypracovaný príklad

**Krajská rada, obnova parkovacieho preukazu pre zdravotne postihnutých (blue badge)**: 60 000 obnovení ročne, doteraz 100 % telefón/papier po £6,40 na transakciu. Spustí sa nová digitálna služba a do roka dosiahne 65 % digitálneho využívania pri £0,30 na digitálnu transakciu.

```
Naivný (hrubý) výpočet úspory:
  39 000 presunutých × (£6,40 − £0,30) = £237 900 ročne

Čo sa skutočne stalo podľa údajov kontaktného centra rady:
  Objem telefonátov klesol zo 60 000 ročne na 46 000 ročne (−23 %, nie −65 %)
  pretože: 9 000 digitálnych ciest zlyhalo a vyvolalo následný telefonát
           (únik z dopytu zo zlyhania) a 4 000 ľudí, ktorí predtým
           neobnovovali vôbec, teraz obnovuje, lebo to online našli ľahké
           (tieňový dopyt – skutočné zlepšenie prístupu, ale nie úspora)

  Telefónne kontaktné centrum je obsadzované v pásmach po 8 000 hovorov/FTE;
  pokles o 14 000 hovorov (60 000 → 46 000) uvoľní 1,75 FTE, v praxi
  zaokrúhlených nadol na 1 FTE skutočne preradený = £34 000 ročne

Zrealizovaná úspora = £34 000 ročne plus náklady na vybudovanie/prevádzku
  digitálneho kanála, ktorým sa predišlo pri 39 000 transakciách ≈ £34 000
  + (39 000 × £0,30 digitálnych nákladov, už započítaných) – zlomok
  hlavného čísla £237 900, hoci služba je pre používateľov jednoznačne lepšia.
```

## Súvislosť so softvérovým inžinierstvom

Inžinierske poučenie je, že úspory z presunu medzi kanálmi sa realizujú *prevádzkovými* rozhodnutiami (plánovanie zmien, rušenie, opätovné rokovanie o zmluvách), nie tým, že sa softvér dodá. Tím môže splniť každý bod [štandardu digitálnych služieb](../štandard-digitálnych-služieb/) a napriek tomu dodať nulovú čistú úsporu, ak nikto nezruší fixnú kapacitu starého kanála. Inštrumentácia dopytu zo zlyhania (kde v digitálnej ceste používatelia odpadnú a čo robia potom) je riešiteľný problém analýzy lievika a najúčinnejšia vec, ktorú môže inžiniersky tím urobiť na ochranu prípadu úspor. Je to aj priama väzba na [náklady na transakciu](../náklady-na-transakciu/), ktoré dopyt zo zlyhania potichu nafukuje. O širšej disciplíne kontroly, či úspory z obchodného prípadu skutočne pristanú, pozri [realizáciu prínosov](../realizácia-prínosov/), a o tom, prečo offline kanál zvyčajne nemožno a nemá sa úplne zrušiť, pozri [digitálne začlenenie](../digitálne-začlenenie/).

## Úskalia

- **Predpoklad substitúcie kanálov 1 : 1**: modelovanie digitálneho využívania ako priameho odpočtu z objemu telefónu/pultu, bez ohľadu na tieňový dopyt a únik z dopytu zo zlyhania zdokumentované vo výskume presunu kanálov v miestnej samospráve.
- **Zaúčtovanie hrubých úspor pred zrušením kapacity**: úspora sa započíta do obchodného prípadu v roku, keď sa využívanie zvýši, nie v roku (ak vôbec), keď sa kapacita starého kanála skutočne zruší.
- **Ignorovanie schodovitej povahy nákladov na obsadenie**: 20 % pokles objemu sa len zriedka premení na 20 % pokles nákladov, pretože kontaktné centrá a pulty sa obsadzujú v diskrétnych pásmach, nie plynulo.
- **Považovanie tieňového dopytu za odpad**: nový kontakt od predtým vylúčených alebo odradených používateľov je skutočným nárastom [verejnej hodnoty](../verejná-hodnota/), nie chybou modelu. Vykazuje sa ako výsledok prístupu, nie ako šum, ktorý sa odráta.

## Zdroje

- Cabinet Office, Digital Efficiency Report (2012). <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- Local Government Association, digital transformation and channel shift resources. <https://www.local.gov.uk/our-support/efficiency-and-income-generation/digital-transformation>
- Socitm, local public services digital insight research. <https://www.socitm.net/>
