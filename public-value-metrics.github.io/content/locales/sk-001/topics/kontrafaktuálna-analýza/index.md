# Kontrafaktuálna analýza

Kontrafaktuál je odhad toho, čo by sa stalo bez intervencie. Bez neho sa pozorovaná zmena po spustení programu nedá odlíšiť od zmeny, ktorá by nastala aj tak: žiadny kontrafaktuál, žiadny dôkaz účinku, nech čísla pred a po vyzerajú akokoľvek presvedčivo. Magenta Book ministerstva financií (HM Treasury) považuje zostrojenie vierohodného kontrafaktuálu za ústrednú metodologickú úlohu hodnotenia dopadu, dôležitejšiu než ktorékoľvek iné jednotlivé rozhodnutie o návrhu.

## Prečo na tom záleží

„Kriminalita klesla o 15 % v roku po zavedení programu“ nie je dôkazom, že program zafungoval, pokiaľ nevieme, čo by sa s kriminalitou stalo bez neho. Mohla by klesnúť aj o 20 % vplyvom nesúvisiacich ekonomických alebo demografických trendov, čo by znamenalo, že program zhoršil situáciu voči kontrafaktuálu, hoci surové číslo sa zlepšilo. Je to najčastejšia analytická chyba v tvrdeniach o dopade verejného a sociálneho sektora: zámena porovnania pred/po za dôkaz kauzality. Magenta Book je výslovný, že hodnotenie dopadu existuje na zodpovedanie kontrafaktuálnej otázky, „aký rozdiel táto intervencia urobila?“, a že jej zodpovedanie vyžaduje odhadnúť, nielen opísať, svet, ktorý nenastal.

Rôzne metódy konštruujú kontrafaktuál s rôznym stupňom istoty a vládne hodnotiace usmernenia ich podľa toho radia. Randomizované kontrolované štúdie (RCT), kde sa jednotlivci alebo oblasti náhodne priradia na prijatie intervencie alebo nie, vytvárajú najsilnejší kontrafaktuál, pretože randomizácia zaručuje, že sa liečená a kontrolná skupina v priemere líšia len tým, že intervenciu dostali. Cabinet Office a What Works Network presadzujú RCT v britskej verejnej politike od správy „Test, Learn, Adapt“ od Behavioural Insights Team z roku 2012, práve preto, že slabšie návrhy sú zraniteľné voči zahmlievaniu: pozorovaný rozdiel môže odrážať to, kto sa rozhodol zúčastniť, nie účinok programu. Tam, kde je randomizácia nepraktická alebo neetická (ako často pri programoch so zákonným nárokom alebo pri zmenách politiky pre celú populáciu), Magenta Book stanovuje výslovnú hierarchiu slabších, ale stále užitočných alternatív: priradené porovnávacie skupiny, návrhy rozdielu v rozdieloch, regresnú diskontinuitu okolo prahov oprávnenosti a ako poslednú možnosť jednoduché porovnanie pred/po, jasne označené za najslabšiu formu dôkazu, náchylnú na zámenu účinku programu s účinkom všetkého ostatného, čo sa v rovnakom čase zmenilo.

## Matematika

Kontrafaktuálny rámec, platný pre všetky metódy:

```
Odhadnutý dopad = Výsledok(s intervenciou) − Výsledok(kontrafaktuál: bez intervencie)

NIE:
Odhadnutý dopad ≠ Výsledok(po) − Výsledok(pred)   [zamieňa čas s liečbou]
```

Rozdiel v rozdieloch (difference-in-differences), jeden z najbežnejších kvázi-experimentálnych návrhov vo vládnom hodnotení, izoluje účinok liečby odpočítaním vlastnej zmeny pred/po porovnávacej skupiny:

```
Odhad DiD = [Výsledok(liečená, po) − Výsledok(liečená, pred)]
          − [Výsledok(porovnávacia, po) − Výsledok(porovnávacia, pred)]
```

Tým sa odstráni každý trend spoločný oboma skupinám (napr. národný ekonomický posun ovplyvňujúci všetkých) a zostane len diferenciálna zmena pripísateľná intervencii.

## Vypracovaný príklad

**Program zamestnanosti, pred/po (slabý návrh)**: schéma podpory zamestnávania hlási, že zamestnanosť účastníkov vzrástla za rok zo 40 % na 55 %, čo je naivný záver „+15 percentuálnych bodov vďaka programu“.

**Ten istý program, rozdiel v rozdieloch (silnejší návrh)**: priradená porovnávacia skupina podobných neúčastníkov z rovnakého miestneho trhu práce ukazuje rast zamestnanosti z 38 % na 47 % za ten istý rok (prebiehalo národné ekonomické zotavenie).

```
Zmena liečenej skupiny:       55 % − 40 % = +15 percentuálnych bodov
Zmena porovnávacej skupiny:   47 % − 38 % = +9 percentuálnych bodov

Odhad DiD (skutočný účinok programu) = 15 − 9 = +6 percentuálnych bodov
```

Poctivý pripísateľný účinok je 6 percentuálnych bodov, nie 15. Viac než polovica zdanlivého zlepšenia pred/po by nastala bez ohľadu na program, hnaná tým istým ekonomickým zotavením, ktoré zdvihlo porovnávaciu skupinu.

**Regresná diskontinuita, prah oprávnenosti**: grantová schéma je dostupná len podnikom s menej než 50 zamestnancami. Porovnanie výsledkov podnikov tesne pod prahom (45 – 49 zamestnancov, oprávnené) s podnikmi tesne nad ním (50 – 54 zamestnancov, neoprávnené) poskytuje vierohodný kontrafaktuál, pretože podniky na oboch stranách ľubovoľnej administratívnej hranice sú inak podobné: oprávnenosť určuje prah, nie nejaká podkladová charakteristika podniku. Priemerný rozdiel výsledkov £2 000 medzi týmito dvoma skupinami, pozorovaný len na prahu, možno pripísať grantu s omnoho väčšou istotou než jednoduché porovnanie všetkých oprávnených s všetkými neoprávnenými podnikmi (ktoré sa systematicky líšia veľkosťou).

## Súvislosť so softvérovým inžinierstvom

Kontrafaktuálne myslenie by malo formovať návrh systémov sledovania dopadu a hodnotiacich pipeline pre softvér vo verejnej správe a sociálnom sektore:

- Zachytávanie porovnávacej skupiny zabudujte do systému od začiatku, zaznamenávajte, kto bol oprávnený, ale nezapísaný, alebo priradenú kohortu neúčastníkov, namiesto dodatočného dopĺňania po tom, čo program už bežal a existujú len údaje pred/po.
- Tam, kde je randomizácia možná (postupné zavádzanie, digitálna služba zapnutá niektorým používateľom skôr než iným), inštrumentujte systém tak, aby zachoval náhodné priradenie ako dopytovateľné pole. Postupné zavádzanie náhodou zničí vlastnú hodnotiacu hodnotu, ak sa poradie priradenia nezaznamená.
- Toto je základná metóda za [metódami hodnotenia dopadu](../metódy-hodnotenia-dopadu/) a odlišuje ju od [hodnotenia dopadu a hodnotenia procesu](../hodnotenie-dopadu-vs-hodnotenie-procesu/), pričom druhé sa pýta, či bol program dodaný tak, ako sa zamýšľalo, nie či spôsobil účinok.
- [Adicionalita a mŕtva váha](../adicionalita-a-mŕtva-váha/) aj [vytesnenie a pripisovanie](../vytesnenie-a-atribúcia/) sú v jadre kontrafaktuálne otázky: mŕtva váha je „aký by bol tento konkrétny výsledok bez intervencie“, uplatnená na úrovni úpravy, nie úplného návrhu hodnotenia.

## Úskalia

- **Považovanie pred/po za dôkaz kauzality.** Je to najčastejšia a najdôsledkovejšia chyba vo vykazovaní dopadu verejného a sociálneho sektora: zmena pred/po zamieňa účinok programu so všetkým ostatným, čo sa za rovnaké obdobie zmenilo.
- **Použitie porovnávacej skupiny, ktorá sa systematicky líši od liečenej.** Priradená porovnávacia skupina musí byť skutočne podobná v relevantných charakteristikách (pozri hierarchiu metód v Magenta Book k [kontrafaktuálnej analýze](../kontrafaktuálna-analýza/)). Porovnanie účastníkov programu (ktorí sa prihlásili a sú často motivovanejší) s neúčastníkmi (ktorí nie) riskuje, že sa skreslenie výberu vydáva za účinok programu.
- **Ničenie príležitostí na randomizáciu zlým návrhom poskytovania.** Postupné alebo randomizované zavádzanie si zachová hodnotiacu hodnotu, len ak je priradenie skutočne náhodné a zaznamenané. Ak lokálni manažéri vyberajú, kto ide prvý, účel sa stráca.
- **Nadsadzovanie presnosti zo slabého návrhu.** Odhad pred/po sa má prezentovať ako orientačný, nie ako zmeraná veľkosť účinku. Hierarchia dôkazov v Magenta Book existuje preto, aby sila tvrdenia zodpovedala sile návrhu, ktorý ho vytvoril.

## Zdroje

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020), and its
  supplementary guide on quasi-experimental methods.
  <https://www.gov.uk/government/publications/the-magenta-book>
- Cabinet Office / Behavioural Insights Team, "Test, Learn, Adapt: Developing Public Policy with
  Randomized Controlled Trials" (2012).
- What Works Network, standards of evidence guidance. <https://www.gov.uk/guidance/what-works-network>
- Angrist JD, Pischke J-S. *Mostly Harmless Econometrics: An Empiricist's Companion*. Princeton
  University Press, 2009 (štandardná referencia pre metódy rozdielu v rozdieloch a regresnej
  diskontinuity).
