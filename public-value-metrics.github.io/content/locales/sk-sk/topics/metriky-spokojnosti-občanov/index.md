# Metriky spokojnosti občanov

Metriky spokojnosti občanov merajú, ako ľudia hodnotia svoju priamu skúsenosť s verejnou službou. Líši sa to od dôvery v inštitúcie všeobecne a od toho, či služba skutočne dosiahla dobrý výsledok. Služba môže byť obľúbená a neúčinná, alebo účinná a neobľúbená. Rozdiel medzi nimi je sám osebe diagnostickou informáciou, ktorú má dodávateľský tím sledovať.

## Prečo na tom záleží

Spokojnosť sa meria na dvoch rôznych úrovniach, ktoré sa bežne zamieňajú. Na úrovni služby vyžaduje už zrušená britská Performance Platform a dnešná príručka služieb GOV.UK (service manual) prieskum spokojnosti pre každú službu (typicky päťbodová škála od „veľmi spokojný“ po „veľmi nespokojný“, zadávaná v okamihu transakcie) ako jeden zo štyroch povinných KPI služby, pozri [štandardy služieb a metriky transakcií](../štandardy-služieb-a-metriky-transakcií/). Na inštitucionálnej úrovni meria britský Civil Service People Survey zapojenie a skúsenosť zamestnancov v každom ústrednom rezorte každoročne a osobitne program OECD „Trust in Government“ zisťuje verejnú dôveru v národnú vládu naprieč členskými štátmi a sleduje dlhodobý vzorec poklesu a zotavenia, ktorý výrazne formujú krízy (finančná kríza 2008 aj pandémia COVID-19 priniesli ostré, viditeľné pohyby v údajoch OECD o dôvere). Dôvod, prečo musia inžinieri budujúci služby pre občanov držať spokojnosť a výsledok oddelene, je známy spôsob zlyhania v návrhu služieb: krásne navrhnutý, ľahko použiteľný digitálny formulár na žiadosť o dávku môže dosiahnuť veľmi vysokú spokojnosť, kým podkladová politika (pravidlá nároku, nevybavené žiadosti, výška dávok) nepomôže žiadateľovi. Spokojnosť meria rozhranie, nie hodnotu dodanú za ním.

## Matematika

```
Čistá spokojnosť = % spokojných (alebo veľmi spokojných) − % nespokojných (alebo veľmi nespokojných)
                    (neutrálne odpovede/bez názoru sa vylúčia z oboch členov, ale započítajú
                    sa do základne odpovedí pri výpočte každého percenta)

Rozdiel spokojnosť–výsledok = skóre spokojnosti − skóre dosiahnutia výsledku
                    (obe normalizované 0 – 100; veľký kladný rozdiel signalizuje službu,
                    ktorá „pôsobí dobre“, ale vecne dodáva menej)

Index dôvery (v štýle OECD) = % respondentov odpovedajúcich „áno“ na
                    „máte dôveru v [národnú vládu]?“
                    sledovaný ako časový rad, typicky rozčlenený podľa
                    veku, príjmu a vzdelania
```

## Vypracovaný príklad

**Služba elektronického zasielania výmerov dane z nehnuteľností v samospráve**: prieskum spokojnosti v okamihu úspešnej transakcie ukazuje 2 400 respondentov: 1 650 spokojných/veľmi spokojných, 250 nespokojných/veľmi nespokojných, 500 neutrálnych.

```
Čistá spokojnosť = (1 650/2 400 × 100) − (250/2 400 × 100)
                  = 68,75 % − 10,42 %
                  = +58,3 čistej spokojnosti
```

Samo osebe to vyzerá silne. Prieskum sa však zobrazuje len používateľom, ktorí transakciu *úspešne* dokončia, čo je známe skreslenie merania (pozri úskalia nižšie). Spárovanie s metrikou miery dokončenia zo [štandardov služieb a metrík transakcií](../štandardy-služieb-a-metriky-transakcií/) ukazuje, že dokončenie je len 71 %, čo znamená:

```
Skutočná spokojnosť populácie je nezmeraná pre 29 %, ktorí cestu opustili –
pravdepodobne najnespokojnejšia skupina, keďže opustenie je samo osebe silným
negatívnym signálom, ktorý prieskum nikdy nezachytí.
```

**Ilustrácia na národnej úrovni (štruktúra radu dôvery v štýle OECD)**: dôvera v národnú vládu hlásená na úrovni 42 % v 1. roku, klesajúca na 34 % v 2. roku (krízový rok) a zotavujúca sa na 39 % v 3. roku, čo je trajektória typická pre vzorec šoku a čiastočného zotavenia, ktorý OECD dokumentuje v členských štátoch po veľkých krízach.

## Súvislosť so softvérovým inžinierstvom

Prieskumy spokojnosti inštrumentujte v každom zmysluplnom bode ukončenia cesty používateľa, nielen pri úspešnom dokončení. Je to najčastejšia inžinierska chyba v tejto oblasti a potichu premení metriku spokojnosti na márnivú metriku skreslenú prežitím. Kde je to možné, spárujte skóre spokojnosti s metrikou dokončenia alebo výsledku na rovnakom dashboarde, aby tím nemohol oslavovať rastúcu spokojnosť, kým dokončenie potichu klesá (pozri [náklady na transakciu](../náklady-na-transakciu/) a [digitálne začlenenie](../digitálne-začlenenie/) o tom, kto je z vzorkovania digitálnej spokojnosti vylúčený hneď na začiatku: nedigitálni a asistovaní digitálni používatelia sú v prieskumoch priamo v službe systematicky podreprezentovaní). Údaje o spokojnosti a dôvere tiež priamo napájajú legitimitnú vetvu [Mooreovho strategického trojuholníka](../verejná-hodnota/) a patria do perspektív „zákazník“ a „legitimita“ [skórekarty verejnej hodnoty](../hodnotiaca-karta-verejnej-hodnoty/). Inštitucionálnu obdobu tejto metriky na úrovni služby nájdete v [metrikách dôvery a legitimity](../metriky-dôvery-a-legitimity/).

## Úskalia

- **Skreslenie prežitím v prieskumoch pri dokončení**: používatelia, ktorí cestu opustia, prieskum nikdy nevidia, takže vysoké skóre spokojnosti v službe môže koexistovať s nízkou mierou dokončenia a veľkou neviditeľnou populáciou nespokojných nedokončiteľov.
- **Považovanie spokojnosti za zástupný ukazovateľ výsledku**: dobre navrhnuté rozhranie pre zle navrhnutú politiku dosahuje dobré skóre spokojnosti a zlé skóre výsledku. Vykazujte vždy obe a nikdy jedno ako náhradu za druhé.
- **Malé, nereprezentatívne vzorky vykazované s falošnou presnosťou**: skóre spokojnosti od niekoľkých stoviek samovýberových respondentov uvedené na jedno desatinné miesto naznačuje istotu, ktorú veľkosť vzorky nepodporuje.
- **Ignorovanie demografického členenia**: národné údaje o dôvere a spokojnosti, ktoré nie sú rozčlenené podľa veku, príjmu, zdravotného postihnutia alebo digitálneho prístupu, môžu zakrývať prudko sa rozchádzajúce skúsenosti rôznych skupín. Vzorec, ktorý vlastné publikácie OECD o dôvere vo vládu výslovne členia.

## Zdroje

- OECD, "Trust in Government." <https://www.oecd.org/en/topics/trust-in-government.html>
- UK Cabinet Office, "Civil Service People Survey" results.
  <https://www.gov.uk/government/collections/civil-service-people-survey-results>
- GOV.UK Service Manual, "Measuring Success." <https://www.gov.uk/service-manual/measuring-success>
