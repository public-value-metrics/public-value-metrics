# Vykazovanie výsledkov grantov (IRIS+)

Vykazovanie výsledkov grantov je prax, pri ktorej príjemcovia grantov poskytovateľom vykazujú štandardizované, porovnateľné metriky výsledkov, na rozdiel od toho, aby si každý poskytovateľ vymýšľal vlastnú šablónu vykazovania. IRIS+, ktorý spravuje Global Impact Investing Network (GIIN), je najrozšírenejším takým štandardom: katalóg vopred definovaných sociálnych, environmentálnych a finančných metrík výkonnosti, ktoré impact investori a čoraz viac aj grantové nadácie vyžadujú alebo odporúčajú príjemcom používať.

## Prečo na tom záleží

Pred štandardizovaným vykazovaním žiadala každá nadácia od príjemcov inú sadu ukazovateľov v inom formáte a stredne veľká charita s desiatimi poskytovateľmi mohla viesť desať paralelných procesov vykazovania prekrývajúcej sa práce, čo je dobre zdokumentovaný zdroj záťaže vykazovaním, ktorú má štandardizácia výsledkov grantov znižovať. IRIS+ to rieši tým, že dáva poskytovateľom aj príjemcom spoločnú slovnú zásobu: základné sady metrík (Core Metrics Sets) zoskupené podľa tém (napr. dostupné bývanie, prístup k čistej energii, finančná inklúzia), pričom každá metrika je definovaná dostatočne presne, aby „vytvorené pracovné miesta“ alebo „obslúžené domácnosti“ znamenalo to isté bez ohľadu na to, kto ich vykazuje, a zosúladené s Cieľmi udržateľného rozvoja OSN (SDG), aby poskytovateľ mohol dáta na úrovni príjemcov agregovať do naratívu SDG na úrovni portfólia. GIIN uvádza, že metriky IRIS používa zhruba polovica impact investorov a veľká väčšina správcov fondov, bánk a rozvojových finančných inštitúcií pôsobiacich v tejto oblasti.

Štandardizácia je najdôležitejšia tam, kde sa stretáva s [výsledkami vs. výstupmi](../výsledky-a-výstupy/): IRIS+ tlačí vykazovanie k definovaným metrikám výsledkov a dopadu, namiesto toho, čo náhodou eviduje existujúci systém správy prípadov príjemcu, a to je presne tá medzera, ktorú opisuje [cena za výsledok](../náklady-na-výsledok/) oproti [nákladom na prijímateľa](../náklady-na-prijímateľa/).

## Matematika

Vykazovanie výsledkov grantov je rámec a proces, nie vzorec:

```
1. Poskytovateľ vyberie základnú sadu metrík (Core Metrics Set) relevantnú pre tému grantu
   (napr. IRIS+ „Finančná inklúzia“ alebo „Udržateľné poľnohospodárstvo“)
2. Každá metrika má pevnú definíciu, jednotku a metódu výpočtu
   zverejnenú GIIN, nie vymyslenú pre každého poskytovateľa osobitne
3. Príjemca vykazuje voči rovnakým definíciám metrík všetkým svojim
   poskytovateľom, ktorí tento štandard používajú, čím sa znižuje duplicitné úsilie
4. Poskytovateľ agreguje metriky na úrovni príjemcov do vykazovania na úrovni
   portfólia, porovnateľného rok po roku a medzi príjemcami pri rovnakej metrike
```

Zisk z efektívnosti je kombinatorický: štandardizácia N poskytovateľov × M príjemcov na jednu spoločnú slovnú zásobu mení N×M individuálnych vzťahov vykazovania na zhruba N+M mapovaní voči jednému štandardu.

## Vypracovaný príklad

**Príjemca s tromi poskytovateľmi pred štandardizáciou**: vykazuje „obslúžených ľudí“ poskytovateľovi 1 podľa definície počtu osôb, „dosiahnutých prijímateľov“ poskytovateľovi 2 podľa definície domácností a „ovplyvnených jednotlivcov“ poskytovateľovi 3 podľa definície epizód služby (takže jeden človek, ktorý prišiel dvakrát, sa počíta dvakrát). Tri správy, tri čísla, žiadne nie je porovnateľné, a ani s číslami iného príjemcu v rámci portfólia toho istého poskytovateľa.

**Ten istý príjemca pod IRIS+**: vykazuje voči definovanej metrike IRIS+ pre počet dosiahnutých jednotlivcov spolu s definovanou metrikou výsledku z príslušnej základnej sady metrík, a to podľa zverejnenej výpočtovej metodiky GIIN pre obe. Všetci traja poskytovatelia teraz dostávajú to isté číslo vypočítané rovnakým spôsobom a môžu porovnať náklady na jednotku definovanú v IRIS+ u tohto príjemcu s ostatnými príjemcami vo svojom portfóliu pri použití identickej metriky; je to ekvivalent spoločnej [databázy jednotkových nákladov](../databázy-jednotkových-nákladov/) v mierke infraštruktúry vykazovania.

## Súvislosť so softvérovým inžinierstvom

Platformy na správu grantov by mali zaobchádzať s identifikátormi metrík IRIS+ ako s cudzím kľúčom, nie voľným textom: uloženie zverejneného kódu metriky vedľa hodnoty, ktorú príjemca vykázal (namiesto lokálne vymysleného poľa s názvom „beneficiaries“), umožní neskôr agregáciu naprieč poskytovateľmi a portfóliami bez projektu čistenia dát. Tam, kde platforma musí podporovať poskytovateľov, ktorí IRIS+ neprijali, je pragmatickým návrhom umožniť namapovať lokálnu metriku na najbližšiu definíciu IRIS+ namiesto toho, aby sa všetci poskytovatelia hneď nútili na štandard: porovnateľnosť sa zlepšuje postupne, ako sa na zdieľané identifikátory namapuje väčšia časť grafu. Pozri súrodeneckú tému [cena za výsledok](../náklady-na-výsledok/), ktorá hovorí, na čo majú slúžiť nahlásené čísla po ich zozbieraní.

## Úskalia

- **Považovanie prijatia IRIS+ za automatickú porovnateľnosť.** Dvaja príjemcovia môžu vykazovať voči tej istej metrike IRIS+ a stále byť neporovnateľní, ak sa líši kvalita ich podkladových dát alebo kontrafaktuálne predpoklady; štandard fixuje definície, nie rigoróznosť merania.
- **Metriky „zosúladené s IRIS“ vymyslené poskytovateľom.** Metrika, ktorá je len inšpirovaná jazykom IRIS+, ale nie skutočnou zverejnenou definíciou, opätovne zavádza fragmentáciu, ktorú má štandard riešiť.
- **Únava z vykazovania pri nadmernom výbere.** Požadovať od príjemcu vykazovanie voči celej základnej sade metrík, keď sú pre rozhodnutie relevantné len dve-tri metriky, znovu vytvára problém záťaže v štandardizovanom obale.
- **Žiadna metrika výsledku.** IRIS+ obsahuje mnoho čisto výstupných metrík (napr. počty obslúžených ľudí); výber len týchto a žiadnej z metrík na úrovni výsledkov vytvára vykazovanie v tvare [nákladov na prijímateľa](../náklady-na-prijímateľa/) pod označením vykazovania výsledkov.

## Zdroje

- GIIN, IRIS+ system. <https://iris.thegiin.org/>
- GIIN, IRIS+ Catalog of Metrics. <https://iris.thegiin.org/metrics/>
- GIIN, About IRIS+. <https://iris.thegiin.org/about/>
