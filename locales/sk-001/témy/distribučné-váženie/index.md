# Distribučné váženie

Distribučné váženie upravuje peňažnú hodnotu nákladu alebo prínosu podľa toho, kto ho dostáva, na základe princípu, že jedna libra navyše má pre chudobnú domácnosť väčšiu hodnotu než pre bohatú. Green Book britského ministerstva financií (HM Treasury) poskytuje explicitnú metódu takého váženia, postavenú na klesajúcom medznom úžitku príjmu, aby hodnotenia nepovažovali potichu libru získanú najbohatším decilom za rovnako hodnotnú ako libru získanú najchudobnejším.

## Prečo na tom záleží

Štandardná analýza nákladov a prínosov sčítava libry bez toho, aby sa pýtala, čie to sú libry, čím implicitne predpokladá, že libra má pre každého rovnakú hodnotu, čo ekonómovia dávno vedia, že je nepravdivé. Domácnosť s príjmom £15 000 ročne vníma zisk £1 000 úplne inak ako domácnosť s príjmom £150 000 ročne, pretože medzný úžitok príjmu s rastúcim príjmom klesá. Bez váženia štandardné hodnotenie systematicky uprednostňuje intervencie, ktoré prospievajú bohatším, už aj tak zvýhodneným skupinám, lebo ich vyššia kúpna sila nafukuje peňažné ocenenie prínosov, ktoré k nim prúdia (modernizácia parku pri drahom bývaní „ukáže“ väčší prínos v hodnote nehnuteľností než rovnaká modernizácia pri lacnom bývaní, a to čisto preto, že ceny sú vyššie, nie preto, že by bol prírastok blahobytu väčší).

Doplnkové usmernenie Green Book k distribučnej analýze, posilnené po preskúmaní ministerstva financií z roku 2020, ktoré reagovalo na kritiku, že metodika hodnotenia systematicky zvýhodňovala Londýn a juhovýchod, stanovuje formálny prístup k váženiu založený na predpokladanej elasticite medzného úžitku príjmu okolo 1,3, čo znamená, že zdvojnásobenie príjmu zhruba prepolí (presnejšie 2^-1,3 ≈ 0,41-násobok) medznú hodnotu jednej ďalšej libry. Nejde o kozmetickú úpravu: jej uplatnenie môže zmeniť, ktorý z dvoch konkurenčných programov vykáže vyššiu čistú súčasnú hodnotu, najmä pri porovnávaní intervencie sústredenej v znevýhodnenej oblasti s intervenciou rozloženou na celú populáciu.

## Matematika

Distribučná váha Green Book pre libru prínosu, ktorá pripadne domácnosti s úrovňou príjmu y, vzhľadom na libru pri národnom priemernom príjme ȳ:

```
Váha(y) = (ȳ / y)^e

kde:
  y  = príjem domácnosti (alebo príjem dotknutej skupiny)
  ȳ  = priemerný (referenčný) príjem domácnosti
  e  = elasticita medzného úžitku príjmu (Green Book: približne 1,3)
```

Uplatnenie váh na čisté prínosy:

```
Vážený prínos = Σ [nevážený prínos skupiny i × Váha(y_i)]
```

Skupina s polovičným národným priemerom (y = 0,5ȳ) dostane váhu (1/0,5)^1,3 = 2^1,3 ≈ 2,46: každá libra prínosu pre túto skupinu sa počíta ako zhruba 2,46-násobok libry pre domácnosť s priemerným príjmom.

## Vypracovaný príklad

**Dva konkurenčné miestne programy**, každý s neváženým čistým prínosom £2 milióny ročne, súťažiace o ten istý regionálny rozvojový fond:

- *Program A*: schéma podpory podnikov v prosperujúcom meste, priemerný príjem domácnosti £45 000 (zhruba 1,3-násobok predpokladaného národného priemeru £35 000).
- *Program B*: program zručností v znevýhodnenom obvode, priemerný príjem domácnosti £18 000 (zhruba 0,51-násobok národného priemeru).

```
Váha(A) = (35 000 / 45 000)^1,3 = (0,778)^1,3 ≈ 0,72
Váha(B) = (35 000 / 18 000)^1,3 = (1,944)^1,3 ≈ 2,53

Vážený prínos A = £2 000 000 × 0,72 = £1,44 milióna
Vážený prínos B = £2 000 000 × 2,53 = £5,06 milióna
```

Bez váženia sú programy zhodné. Po vážení podľa distribučného dopadu je prínos programu B viac než trojnásobný, čo obracia odporúčanie o financovaní a odráža výslovný účel Green Book, ktorý vyžaduje zobrazenie váženia, nielen neváženého pomeru prínosov a nákladov.

**Alokácia grantov charity**: poskytovateľ, ktorý porovnáva grant £500 000 pre 1 000 domácností s nízkym príjmom (váha ≈ 2,0, vážená hodnota ekvivalent £1 milióna) s rovnakým grantom £500 000 pre 1 000 domácností so stredným príjmom (váha ≈ 1,0, vážená hodnota ekvivalent £500 000), má distribučný argument uviesť výslovne vo svojom materiáli pre radu, nie nechať ho na domyslenie.

## Súvislosť so softvérovým inžinierstvom

Distribučné váženie sa v metrikách dodávky softvéru objavuje zriedka priamo, no malo by ovplyvniť, ako inžinierske a dátové tímy navrhujú meranie a cielenie:

- Pri budovaní dashboardu dopadu alebo kalkulačky prínosov zobrazte príjmový alebo deprivačný profil dotknutých ľudí, nielen súhrnný prínos: agregované čísla bez distribučného rozpisu skrývajú práve ten zvrat, aký je ukázaný vyššie.
- Prepojte logiku cielenia pri návrhu služby s tými istými údajmi o deprivácii, aké používa Green Book (pozri [Index viacnásobnej deprivácie](../index-viacnásobnej-deprivácie/)), aby sa dosah digitálnej služby dal posúdiť z hľadiska spravodlivosti, nie len efektívnosti (sporné štvrté E v [hodnote za peniaze](../hodnota-za-peniaze/)).
- Keď algoritmus prideľuje vzácny zdroj (termíny, čas prípadového pracovníka, dotáciu), nevážená účelová funkcia „maximalizuj celkový prínos“ bude zo svojej podstaty reprodukovať rovnaké skreslenie, aké má váženie Green Book korigovať; pred optimalizáciou na to výslovne upozornite vlastníkov politiky.

## Úskalia

- **Nekonzistentné uplatňovanie distribučných váh v rámci portfólia.** Vážiť prínosy jedného programu, ale nie jeho komparátora, vytvára skreslené, nie spravodlivejšie porovnanie; Green Book vyžaduje rovnaké zaobchádzanie.
- **Používanie hodnôt nehnuteľností alebo trhových hodnôt ako náhrady blahobytu bez úpravy.** Trhové ceny sú samy skreslené existujúcou príjmovou nerovnosťou, čo je presne to, čo má distribučné váženie korigovať; použitie neupravených trhových hodnôt môže skreslenie započítať dvakrát.
- **Ignorovanie variability v rámci skupiny.** Váženie podľa priemerného príjmu oblasti (napr. decilu Indexu viacnásobnej deprivácie) môže skresliť obraz jednotlivcov, ktorí sa priemeru svojej oblasti nepodobajú; používajte najjemnejšie údaje o príjmoch, aké sú rozumne dostupné.
- **Považovanie elasticity 1,3 za univerzálnu konštantu.** Samotný Green Book uvádza, že ide o odhad s hodnoverným rozpätím; významné rozhodnutia testujte citlivostnou analýzou voči alternatívnym elasticitám namiesto toho, aby sa 1,3 považovalo za presné.

## Zdroje

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation", and
  supplementary guidance on distributional impacts (2022 edition).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury, "Green Book Review 2020: Findings and Response" (addressing regional-bias criticism).
  <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>
- Fujiwara D, Campbell R. "Valuation Techniques for Social Cost-Benefit Analysis." HM Treasury/DWP,
  2011 (background on marginal utility of income elasticity estimates).
