# Hodnota kybernetickej bezpečnosti vo verejnom sektore

Hodnota kybernetickej bezpečnosti vo verejnom sektore je disciplína oceňovania zníženia rizika: koľko stojí zníženie pravdepodobnosti úniku občianskych údajov, keď výdavky na bezpečnosť nevytvárajú žiadny viditeľný výstup, keď fungujú, a veľmi viditeľný, keď zlyhajú? Pri službe, ktorá uchováva záznamy o dávkach, zdravotné údaje alebo daňové záznamy, je práve vlastnosť „neviditeľná, keď funguje“ dôvodom, prečo potrebuje výslovný argument o hodnote, a nie len odškrtnutie zhody s predpismi.

## Prečo na tom záleží

Cyber Assessment Framework (CAF) britského Národného centra kybernetickej bezpečnosti (NCSC) dáva organizáciám verejného sektora štruktúrovaný spôsob, ako urobiť z bezpečnosti posudzovateľnú disciplínu založenú na výsledkoch namiesto kontrolného zoznamu: definuje štyri vysokoúrovňové ciele (riadenie bezpečnostných rizík, ochrana pred kybernetickým útokom, detekcia kybernetických bezpečnostných udalostí a minimalizácia dopadu incidentov) rozdelené na prispievajúce výsledky, voči ktorým možno posúdiť vlastníka systému, v rovnakom duchu ako bod 9 [štandardu digitálnej služby](../štandard-digitálnych-služieb/) („vytvorte bezpečnú službu, ktorá chráni súkromie používateľov“). To, pred čím posudzovanie CAF chráni, má zdokumentovanú cenu: správa IBM Cost of a Data Breach Report sleduje priemerné náklady na únik podľa sektora a dôsledne zisťuje, že verejný sektor je oproti financiám alebo zdravotníctvu skôr v nižšej časti rozpätia (nedávne vydania uvádzajú priemer vo verejnom sektore okolo 2,6 – 2,9 milióna dolárov na únik), ale „nižšie než financie“ neznamená „nízke“ a úniky vo verejnej správe majú náklady, ktoré čísla správy plne nezachytávajú: strata dôvery občanov v digitálne kanály, ktorá znižuje [digitálne využívanie](../úspory-z-presunu-medzi-kanálmi/), od ktorého závisia podnikateľské prípady presunu kanálov, a politické a právne náklady odhalenia údajov, ktoré štát od občanov vynútil.

## Matematika

Investícia do bezpečnosti sa oceňuje tak ako akýkoľvek výdavok na zníženie rizika: ako zníženie očakávanej straty pomocou klasickej identity riadenia rizík.

```
Ročná očakávaná strata (ALE) = Očakávaná strata z jednej udalosti (SLE)
                              × Ročná miera výskytu (ARO)

Hodnota bezpečnostnej kontroly =
  ALE_pred_kontrolou − ALE_po_kontrole − ročné náklady kontroly

Kontrola sa oplatí financovať, keď:
  (ALE_pred − ALE_po) > ročné náklady kontroly

Posudzovanie CAF priamo nedáva pravdepodobnosť, ale profil výsledkov CAF
služby (ktoré prispievajúce výsledky sú „dosiahnuté“, „čiastočne dosiahnuté“
alebo „nedosiahnuté“) je rozumný zástupný vstup na odhad ARO – systém s
nespravovaným privilegovaným prístupom alebo bez otestovaného plánu reakcie
na incidenty má podstatne vyššie reálne ARO než ten, ktorý má oboje zavedené.
```

## Vypracovaný príklad

**Systém správy prípadov grófskej rady uchovávajúci záznamy sociálnej starostlivosti o 40 000 obyvateľov**:

```
Očakávaná strata z jednej udalosti (náklady na únik), s použitím priemeru
verejného sektora z nedávnej správy IBM Cost of a Data Breach Report ≈ £2,1 mil.
(prevedené, údaj rádovej veľkosti – vždy ho znova odvoďte z aktuálneho
vydania správy namiesto použitia pevného čísla)

Súčasné ARO (nespravovaný privilegovaný prístup, žiadna otestovaná reakcia
na incidenty, podľa interného sebahodnotenia CAF s viacerými „nedosiahnutými“
výsledkami) ≈ odhadované 8 % ročne
  ALE_pred = £2,1 mil. × 0,08 = £168 000/rok

Navrhovaná kontrola: správa privilegovaného prístupu + otestovaný plán
reakcie na incidenty, ktoré posunú príslušné výsledky CAF na „dosiahnuté“,
odhadované zníženie ARO na 3 %/rok
  ALE_po = £2,1 mil. × 0,03 = £63 000/rok

Ročné náklady kontroly (nástroje + procesy + testovanie) = £45 000

Hodnota kontroly = (168 000 − 63 000) − 45 000 = £60 000/rok
  čisto kladná – financovať. Aritmetika tiež ukazuje, že kontrola by sa
  oplatila financovať aj pri takmer trojnásobných nákladoch, čo je druh
  kontroly citlivosti, ktorý by mal sprevádzať každý údaj ALE postavený
  na odhadovaných pravdepodobnostiach.
```

## Súvislosť so softvérovým inžinierstvom

Inžinieri vlastnia väčšinu pák v rovnici ALE: návrh riadenia prístupu, hygiena závislostí a záplat, pokrytie logovaním a detekciou a nástroje na reakciu na incidenty priamo hýbu členom ARO, a preto sa posudzovanie CAF číta ako technický architektonický prehľad rovnako ako politický audit. Je to [technický dlh ako erózia verejnej hodnoty](../technický-dlh-ako-erózia-verejnej-hodnoty/) v najakútnejšej podobe: nezáplatované, nemonitorované a zle riadené systémy sú dlh, ktorého úrokom je riziko ďaleko v chvoste rozdelenia, nie stály odtok, a malo by sa zosúladiť s [celkovými nákladmi vlastníctva vo vládnom IT](../celkové-náklady-vlastníctva-vo-vládnom-it/), aby sa výdavky na bezpečnosť nepovažovali za oddelené od skutočných prevádzkových nákladov systému. Je to tiež priamy vstup do posudzovania [hodnoty za peniaze](../hodnota-za-peniaze/) podľa Green Book: náklady upravené o riziko sú súčasťou strany „nákladov“ každého posudzovania variantov, nie dodatok pripojený na koniec.

## Úskalia

- **Považovanie sebahodnotenia CAF za samotnú bezpečnosť**: dokončené posudzovanie popisuje bezpečnostnú pozíciu, nevytvára ju; hodnota je v dosiahnutých výsledkoch, nie v dokumente.
- **Použitie globálnych priemerných nákladov na únik ako miestneho odhadu bez úpravy**: čísla IBM sú priemery z veľkých, rôznorodých vzoriek; reálna očakávaná strata malej miestnej samosprávy sa zriedka rovná strate celoštátneho rezortu.
- **Ignorovanie psychológie rizika v chvoste pri investičných rozhodnutiach**: nízka ročná pravdepodobnosť robí výdavky na bezpečnosť ľahko odložiteľné na neurčito, až do roku, keď sa to nepodarí; testovanie citlivosti výpočtu ALE voči rozpätiu hodnôt ARO, ako vo vypracovanom príklade, tomu čelí.
- **Započítanie len nákladov na únik v štýle IBM, nie nákladov na dôveru**: únik, ktorý znižuje ochotu občanov používať digitálne kanály, narúša prípad [úspor z presunu kanálov](../úspory-z-presunu-medzi-kanálmi/) ešte roky, náklad, ktorý odhady nákladov na únik zriedka zahŕňajú.

## Zdroje

- National Cyber Security Centre, Cyber Assessment Framework. <https://www.ncsc.gov.uk/collection/caf>
- IBM, Cost of a Data Breach Report. <https://www.ibm.com/reports/data-breach>
- GOV.UK Service Manual, service standard, point 9: create a secure service which protects users' privacy. <https://www.gov.uk/service-manual/service-standard/point-9-create-a-secure-service>
