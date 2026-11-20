# Hodnota za peniaze (VFM)

Hodnota za peniaze je formálny test britského verejného sektora, či výdavky dosahujú najlepšiu dostupnú rovnováhu medzi nákladmi a prínosmi. Green Book od HM Treasury ju rámcuje cez tri „E“ – hospodárnosť (economy), efektívnosť (efficiency) a účinnosť (effectiveness) – pričom spravodlivosť (equity) sa čoraz častejšie presadzuje ako sporné štvrté. Každý obchodný prípad verejného sektora, ktorý obstojí pri kontrole, musí odpovedať na všetky tri výslovne, nie len tvrdiť, že výdavky „stoja za to“.

## Prečo na tom záleží

VFM nie je synonymum pre „lacné“. Green Book (HM Treasury, vydanie 2022) výslovne uvádza, že kúpa najlacnejšej možnosti (hospodárnosť) bez kontroly, či prináša zamýšľané výsledky (účinnosť), je častou a drahou chybou – obstaranie, ktoré ušetrí 10 % na jednotkových nákladoch, ale dodá o 40 % menší dopad, je horšia hodnota, nie lepšia. Rámec troch E núti obchodný prípad oddeliť tri skutočne odlišné spôsoby zlyhania: platenie priveľa za vstupy, plytvanie vstupmi pri premene na výstupy a vytváranie výstupov, ktoré sa nepremietnu do výsledkov, o ktoré niekto stál. Britské kontroly vládnych výdavkov – schvaľovacie body ministerstva financií, štúdie hodnoty za peniaze National Audit Office (NAO) a posúdenia účtovných zodpovedných osôb rezortov – sú postavené na tomto trojdielnom teste, takže inžiniersky obchodný prípad, ktorý rieši len náklady (hospodárnosť), neobstojí pri kontrole, aj keď je technológia v poriadku.

„Štvrté E“, spravodlivosť, je sporné práve preto, že môže byť v konflikte s ostatnými tromi: najefektívnejší spôsob poskytovania služby na národnej úrovni je len zriedka najspravodlivejší, pretože sústredenie dodávky tam, kde je najlacnejšie osloviť občanov, často znamená nedostatočné obslúženie tých, ku ktorým je najťažšie sa dostať. Revízia Green Book z roku 2020 reagovala na kritiku (vrátane Treasury Select Committee z roku 2020 a IPPR North), že čisté pomery nákladov a prínosov systematicky zvýhodňovali už prosperujúce regióny, požiadavkou, aby hodnotenia výslovne riešili distribučný dopad – pozri [distribučné váženie](../distribučné-váženie/).

## Matematika

VFM nie je jediný pomer, ale trojdielna (alebo štvordielna) diagnostika uplatňovaná v postupnosti:

```
Hospodárnosť:  Nakupujú sa vstupy za najnižšie primerané náklady pri
               požadovanej kvalite?  (£ na jednotku vstupu)

Efektívnosť:   Ako dobre sa vstupy premieňajú na výstupy?
               (výstupy / vstupy, napr. spracované prípady na hodinu pracovníka)

Účinnosť:      Prinášajú výstupy skutočne zamýšľané výsledky?
               (dosiahnuté výsledky / zamýšľané výsledky)

[Spravodlivosť]: Rozdeľujú sa náklady a prínosy spravodlivo naprieč
               populáciou, alebo sa koncentrujú u tých, ktorí ich najmenej potrebujú?
```

Zlyhanie VFM môže nastať v ktorejkoľvek fáze nezávisle: hospodárne obstaranie s neefektívnou dodávkou; efektívna dodávka nesprávneho výstupu; účinné výsledky kúpené za nadmerné náklady. Pozri [KPI verejného sektora](../kpi-verejného-sektora/) pre to, ako sa premietajú do merateľných ukazovateľov, a [analýzu nákladovej efektívnosti vo vláde](../analýza-nákladovej-efektívnosti-vo-verejnej-správe/) pre formálnu metódu porovnania.

## Vypracovaný príklad

**Kontaktné centrum miestnej samosprávy**: obec porovnáva dve možnosti nového systému na správu prípadov.

- *Možnosť A*: licencia £600 000 (najlacnejšia dostupná), ale agenti stále v priemere potrebujú 22 minút na prípad, pretože pracovný postup vyžaduje ručné prepisovanie medzi systémami – efektívnosť je slabá.
- *Možnosť B*: licencia £900 000, integrovaný pracovný postup, agenti v priemere potrebujú 9 minút na prípad.

Samotná hospodárnosť favorizuje A (o £300 000 lacnejšie). Ale pri 40 000 prípadoch ročne stojí A 40 000 × 22/60 = 14 667 pracovných hodín; B stojí 40 000 × 9/60 = 6 000 pracovných hodín. Pri plne zaťaženom náklade práce £28/hodinu stojí A £410 667 ročne na pracovnom čase oproti £168 000 ročne pri B – rozdiel v efektívnosti £242 667 ročne, ktorý v priebehu 14 mesiacov prevýši počiatočný rozdiel v hospodárnosti £300 000. VFM favorizuje B, keď sa započíta efektívnosť, nie A.

**Grant na poskytovanie služby od charity**: poskytovateľ financií porovnáva grant £50 000, ktorý dosiahne 200 úspešných umiestnení do práce (£250 na umiestnenie – zdanlivo vynikajúca hospodárnosť), s grantom £120 000, ktorý dosiahne 350 umiestnení trvajúcich viac než 12 mesiacov, kým pri prvom grante polovica umiestnení zanikne do 3 mesiacov. Účinnosť – trvalé výsledky – obracia zdanlivé poradie VFM: skutočné náklady na jedno *trvalé* umiestnenie sú £250 ÷ 0,5 = £500 pri prvom grante oproti £120 000/350 ≈ £343 pri druhom.

## Súvislosť so softvérovým inžinierstvom

VFM dáva inžinierskym tímom disciplínu pre rámcovanie technologických obchodných prípadov tak, ako ich skutočne budú čítať finančné a auditné útvary:

- Uvádzajte hospodárnosť, efektívnosť a účinnosť ako samostatné riadky obchodného prípadu, nie ako jediné zlúčené číslo „hodnoty“ – posudzovateľ vyškolený na Green Book bude žiadať práve toto rozdelenie.
- Pozor na optimalizáciu nákladov na obstaranie (hospodárnosť) na úkor integrácie a efektívnosti pracovného postupu, čo je veľmi častá falošná úspora vo vládnom IT (pozri
  [celkové náklady vlastníctva vo vládnom IT](../celkové-náklady-vlastníctva-vo-vládnom-it/) a
  [vlastný vývoj alebo nákup vo verejnej správe](../vlastný-vývoj-alebo-nákup-vo-verejnej-správe/)).
- Účinnosť vyžaduje údaje o výsledkoch, nielen počty výstupov – prepojte dodávkové metriky s [výsledkami vs. výstupmi](../výsledky-a-výstupy/) a so skutočným hodnotením prostredníctvom [kontrafaktuálnej analýzy](../kontrafaktuálna-analýza/), namiesto predpokladu, že výstupy implikujú výsledky.
- Keď systém obsluhuje nerovnomerne naprieč regiónmi alebo demografickými skupinami, otázka spravodlivosti je oprávnenou námietkou voči VFM, nie samostatným „príjemným doplnkom“ – pozri [digitálnu inklúziu](../digitálne-začlenenie/).

## Úskalia

- **Stotožnenie VFM s najnižšou cenou.** Hospodárnosť je jedna tretina (alebo štvrtina) testu; Green Book výslovne varuje pred pravidlami obstarávania „najnižších nákladov“, ktoré ignorujú efektívnosť a účinnosť.
- **Meranie výstupov a nazývanie ich výsledkami.** Priepustnosť prípadov (efektívnosť) nie je to isté ako dobre vyriešené prípady (účinnosť); pozri [výsledky vs. výstupy](../výsledky-a-výstupy/).
- **Považovanie spravodlivosti za voliteľnú.** Od aktualizácie Green Book z roku 2020 sa má distribučný dopad posudzovať popri tradičných troch E, nie dodatočne pripojiť; jeho dodatočné doplnenie po schválení obchodného prípadu je oveľa ťažšie než zahrnutie od začiatku.
- **Porovnávanie variantov s rôznymi objemami bez normalizácie.** Porovnanie VFM na jednotku naprieč variantmi obsluhujúcimi rôzne populácie musí zohľadniť rozsah, inak je porovnanie efektívnosti nezmyselné.

## Zdroje

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation" (2022
  edition). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- National Audit Office, "Framework to review programmes and projects" and VFM study methodology.
  <https://www.nao.org.uk/>
- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020).
  <https://www.gov.uk/government/publications/the-magenta-book>
- IPPR North, "Transport Infrastructure Investment: Determining Value for Money" (evidence to the
  Treasury Select Committee's 2020 review of the Green Book's regional bias).
