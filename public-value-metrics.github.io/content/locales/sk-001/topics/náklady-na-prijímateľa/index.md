# Náklady na prijímateľa

Náklady na prijímateľa (cost per beneficiary) sú celkové náklady programu vydelené počtom jedinečných ľudí, ktorí dostali službu, teda každého, koho sa program dotkol, bez ohľadu na to, či sa jeho okolnosti skutočne zmenili. Je to najrýchlejšie číslo o efektívnosti, aké môže organizácia vytvoriť, pretože odpoveď na „komu sme slúžili“ je takmer vždy už v systéme správy prípadov, kým odpoveď na „komu sa pomohlo“ zvyčajne nie.

## Prečo na tom záleží

Poskytovatelia financií žiadajú náklady na prijímateľa neustále a z oprávnených dôvodov: sú dostupné okamžite, porovnateľné naprieč portfóliom veľmi rôznych programov a sú poctivé o dosahu spôsobom, akým tvrdenia o výsledkoch, ktoré si overenie vyžaduje dlhšie a ľahšie sa nadsadzujú, nie sú. Britský Charities SORP (Statement of Recommended Practice), ktorý upravuje, ako charity vykazujú podľa FRS 102, vyžaduje, aby výročné správy správcov opisovali dosiahnuté výsledky voči cieľom, no manažérske účtovníctvo väčšiny menších charít stále štandardne používa jednotkové náklady založené na dosahu, pretože sa lacno vyrábajú a vyhovujú auditu.

Nebezpečenstvom je zaobchádzať s nákladmi na prijímateľa, akoby odpovedali na otázku, na ktorú odpovedať nemôžu: či peniaze zabrali. Metriku, ktorá na ňu skutočne odpovedá, ukazujú [náklady na výsledok](../náklady-na-výsledok/) a podkladové rozlíšenie [výsledky a výstupy](../výsledky-a-výstupy/). Náklady na prijímateľa sú legitímnou triážovou metrikou a metrikou dosahu (hovoria poskytovateľovi, ako ďaleko peniaze siahnu), no nízke náklady na prijímateľa môžu znamenať buď skutočnú efektívnosť, alebo službu natoľko plytkú, že nič nemení.

## Matematika

```
Náklady na prijímateľa = Celkové náklady programu / Počet jedinečných obslúžených ľudí

Kontrast:
Náklady na výsledok     = Celkové náklady programu / Počet ľudí dosahujúcich definovaný výsledok

Náklady na prijímateľa sú vždy ≤ náklady na výsledok, pretože populácia s výsledkom je podmnožinou
(často malou) populácie prijímateľov.
```

## Vypracovaný príklad

**Potravinová banka, rovnaký rok ako v príklade nákladov na výsledok**:

- Celkové náklady programu: £450 000
- Jedinečné obslúžené domácnosti (tri a viac balíkov): 1 800

```
Náklady na prijímateľa = £450 000 / 1 800 = £250 na obslúženú domácnosť
```

Porovnajte obe metriky vedľa seba:

| Metrika | Menovateľ | Výsledok |
|---|---|---|
| Náklady na prijímateľa | 1 800 obslúžených domácností | £250 |
| Náklady na výsledok | 630 domácností dosahujúcich potravinovú bezpečnosť | £714 |

Poskytovateľ financií, ktorý vidí len £250, môže usúdiť, že ide o vysoko efektívnu charitu. Ten, kto vidí obe čísla, sa môže opýtať užitočnejšiu otázku: je rozdiel medzi dosahom (1 800) a výsledkom (630) medzerou v zbere údajov, medzerou v návrhu, alebo poctivým odrazom toho, aké ťažké je dosiahnuť potravinovú bezpečnosť samotnou potravinovou pomocou?

**Charita pre školenie na zamestnanie, ilustračne**: náklady na prijímateľa (zapísaného) = £2 000, náklady na výsledok (trvalé zamestnanie po 6 mesiacoch) = £11 000, pretože len 18 % zapísaných program dokončí a nájde trvalú prácu. Rozchod týchto dvoch čísel päťnásobne je bežný všade, kde je miera dokončenia alebo trvácnosti nízka. Školiaca charita a potravinová banka sú tu štrukturálne rovnaké.

## Súvislosť so softvérovým inžinierstvom

Náklady na prijímateľa sú štandardnou metrikou v softvéri pre neziskový sektor, pretože je to metrika, ktorá vypadne zo záznamu o prijímateľovi bez ďalšej práce: vytvor prípad, zaznamenaj službu, spočítaj riadky. Vybudovať systém, ktorý podporuje aj náklady na výsledok, znamená zámerne pridať druhú plnohodnotnú entitu, udalosť výsledku, datovanú a definovanú nezávisle od poskytnutia služby, a odolať pokušeniu nechať „prípad uzavretý“ stáť za „výsledok dosiahnutý“. Pri vymedzovaní platformy na správu grantov alebo CRM sa pýtajte, ktorú z dvoch metrík každý dashboard skutočne zobrazuje, a podľa toho ju označte. Ich zámena v jedinej dlaždici „dopad“ je jednou z najčastejších softvérových príčin úskalí nižšie. O porovnávaní oboch metrík po správnom označení pozri [databázy jednotkových nákladov](../databázy-jednotkových-nákladov/).

## Úskalia

- **Prezentovanie nákladov na prijímateľa ako dopadu.** Merajú dosah, nie zmenu. Dashboardy a správy označujte „náklady na obslúženého človeka“, nie „náklady na človeka, ktorému sa pomohlo“.
- **Dvojité započítanie naprieč programami.** Osoba, ktorá dostane od tej istej charity potravinové balíky aj radu pri dlhoch, je jeden prijímateľ, nie dvaja, ak má menovateľ opisovať jedinečný dosah. Rozhodnite a zdokumentujte, ktorá konvencia sa používa.
- **Považovanie nižšieho čísla vždy za lepšie.** Obedový klub pre všetkých vždy porazí intenzívnu službu správy prípadov v nákladoch na prijímateľa, pretože sa lacnejšie dotknúť niekoho zľahka. To nehovorí nič o tom, ktorá vytvára trvácnejšiu zmenu na libru.
- **Potichu meniť menovateľa medzi správami.** Údaj o nákladoch na prijímateľa uvedený v jednej výročnej správe voči „zapísaným“ a v ďalšej voči „dokončeným“ nie je medziročne porovnateľný. Menovateľa uveďte vždy.

## Zdroje

- Charity Commission for England and Wales, guidance on charity reporting. <https://www.gov.uk/government/organizations/charity-commission>
- Charities SORP (FRS 102). <https://www.charitysorp.org/>
- New Philanthropy Capital (NPC), "Four Pillar Approach." <https://www.thinknpc.org/resource-hub/four-pillar-approach/>
