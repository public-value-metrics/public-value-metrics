# Analýza nákladovej efektívnosti vo verejnej správe

Analýza nákladovej efektívnosti (CEA) porovnáva náklady alternatívnych spôsobov dosiahnutia *rovnakého* výsledku vyjadreného v prirodzených jednotkách (náklady na jedného ubytovaného bezdomovca spiaceho vonku, na žiaka vyvedeného na očakávanú úroveň, na tonu odvrátených emisií CO2), bez prepočtu samotného výsledku na peniaze.

## Prečo na tom záleží

Green Book považuje CEA za záložnú metódu, keď požiadavka [sociálnej analýzy nákladov a prínosov](../sociálna-analýza-nákladov-a-prínosov/) speňažiť každý prínos nie je len ťažká, ale nepoctivá: keď by vierohodné ocenenie výsledku vyžadovalo predpoklady, ktoré nikto skutočne nezastáva (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>, kapitola 5, o hodnotení možností, kde výsledky nie sú ľahko speňažiteľné). CEA je metóda prevzatá najpriamejšie zo zdravotníckej ekonómie: štrukturálne je totožná s tým, ako NICE porovnáva liečby podľa nákladov na rok života upravený o kvalitu (QALY), no aplikovaná na nezdravotné verejné programy: vzdelávacie intervencie na bod výsledku žiaka, bytové programy na domácnosť, ktorej sa predišlo bezdomovectvu, programy zamestnanosti na trvalý pracovný výsledok.

Dôvod, prečo si CEA zaslúži miesto popri SCBA a nie je ňou pohltená, je, že vnútenie peňažnej hodnoty niektorým výsledkom vytvorí číslo dosť presné na to, aby pôsobilo autoritatívne, a dosť sporné na to, aby bolo vo verejnej debate bezcenné. Ocenenie „dieťaťa čítajúceho na očakávanej úrovni“ priam vyzýva k takej výzve, ktorá obchodný prípad vykoleľuje na parlamentnom výbore. CEA sa tomu vyhýba tak, že túto debatu odmietne: zoraďuje možnosti podľa nákladov na jednotku *samotného výsledku* a samostatný politický úsudok o tom, či výsledok stojí za to sledovať, nechá strategickému prípadu.

## Matematika

```
Pomer nákladovej efektívnosti (priemerný) = Celkové náklady / Celkový počet dosiahnutých jednotiek výsledku

Prírastkový pomer nákladovej efektívnosti (ICER), porovnanie možnosti A s možnosťou B:
ICER = (Náklady_A − Náklady_B) / (Výsledok_A − Výsledok_B)

Postup:
1. Stanovte jednotku výsledku a spôsob merania rovnaký pre všetky porovnávané možnosti.
2. Ocente každú možnosť na rovnakom základe (pozri ../green-book-appraisal/, finančný prípad)
   za rovnaký časový horizont.
3. Vyraďte dominované možnosti: každá možnosť, ktorá stojí na jednotku viac než lacnejšia
   alternatíva dosahujúca rovnaký alebo lepší výsledok, sa vyradí.
4. Zoraďte zostávajúce možnosti podľa prírastkového, nie priemerného,
   pomeru nákladovej efektívnosti.
```

CEA sama osebe nevie povedať, či sa program oplatí vôbec financovať, len ktorý z viacerých prístupov k rovnakému cieľu je na jednotku najlacnejší. Rozhodnutie, či samotný cieľ stojí za výdavok, vyžaduje buď prevod späť na SCBA (ak existuje vierohodné ocenenie), alebo politický/strategický úsudok mimo matematiky. Kde sa výsledky skutočne nedajú zredukovať na jednu jednotku, pretože program vytvára viac výsledkov, ktoré záležia rôznymi spôsobmi, použite namiesto toho [multikriteriálnu rozhodovaciu analýzu](../viackriteriálna-analýza-rozhodovania/).

## Vypracovaný príklad

**Miestna samospráva**: rada porovnáva tri prístupy k zníženiu bezdomovectva spiaceho vonku, každý ocenený na jeden rok voči výsledku „jednotlivci presunutí do stabilného ubytovania na 6+ mesiacov“:

```
Možnosť                          Náklady    Dosiahnuté výsledky  Priem. CER
Housing First (intenzívna)       £900 000   60                   £15 000/výsledok
Ubytovňa + podpora pri odchode   £600 000   50                   £12 000/výsledok
Terénna práca + súkromný prenájom £350 000  20                   £17 500/výsledok

ICER, Ubytovňa oproti Terénnej práci:  (600 tis. − 350 tis.)/(50 − 20) = £8 333 na jeden ďalší výsledok
ICER, Housing First oproti Ubytovni: (900 tis. − 600 tis.)/(60 − 50) = £30 000 na jeden ďalší výsledok
```

Terénna práca je v priemerných nákladoch dominovaná Ubytovňou, ale *prírastkový* krok z Terénnej práce na Ubytovňu stojí len £8 333 na jednu ďalšiu ubytovanú osobu, čo je lacné oproti kroku k Housing First, ktorý stojí £30 000 za každú ďalšiu osobu nad rámec toho, čo dosiahne Ubytovňa. Samospráva s obmedzeným rozpočtom, ktorá rozširuje služby, by mala uprednostniť rozšírenie Ubytovne pred Housing First, hoci Housing First vyzerá lepšie podľa vlastného priemerného pomeru.

**Národná vláda**: program doháňania gramotnosti sa porovnáva medzi tromi modelmi poskytovania podľa „nákladov na žiaka dosahujúceho vekovo očakávanú úroveň čítania“: doučovanie jeden na jedného (£1 800/žiak), doučovanie v malej skupine (£700/žiak) a čisto digitálna intervencia (£150/žiak, ale len 40 % miery výsledku doučovania v malej skupine na zapísaného žiaka po úprave o odpad zapojenia). Po úprave o skutočné dokončenie stojí čisto digitálna intervencia £375 na žiaka dosahujúceho úroveň, stále najlacnejšia, ale CEA nevie povedať, či je menší absolútny počet žiakov, ktorým čisto digitálna intervencia pomohla, ak sa poskytuje za rovnaký rozpočet ako malá skupina, prijateľnou výmenou za oslovenie menšieho počtu žiakov do väčšej hĺbky. To je distribučný úsudok, ktorý CEA vracia rozhodovateľom.

## Súvislosť so softvérovým inžinierstvom

CEA je správny rámec vždy, keď inžinierske tímy hodnotia prístupy k poskytovaniu pre *rovnaký* výsledok služby: náklady na úspešne overenú identitu u troch dodávateľov overovania identity, náklady na správne roztriedený prípad pri dvoch návrhoch automatizácie spisovej agendy, náklady na vyriešenú chybu prístupnosti pri vlastnej oproti zmluvnej náprave. Disciplína, ktorú priamo prináša: definujte jednotku výsledku pred porovnaním nákladov (nie „uzavreté tikety“, čo je výstup, ale „skutočne vyriešená potreba používateľa“) a vždy počítajte prírastkový pomer medzi prevádzkovaným systémom a navrhovanou náhradou, nie priemerné náklady každého systému izolovane. Pozri [výsledky a výstupy](../výsledky-a-výstupy/) a [náklady na výsledok](../náklady-na-výsledok/).

## Úskalia

- **Porovnávanie priemerných, nie prírastkových pomerov pri rozhodovaní o rozšírení.** Ako ukazuje príklad bezdomovectva, možnosť s najlepším priemerným pomerom nie je vždy najlacnejšou ďalšou jednotkou výsledku, ktorú možno kúpiť.
- **Výber jednotky výsledku, ktorá je v skutočnosti výstupom.** „Uskutočnené odporúčania“ alebo „poskytnuté sedenia“ merajú aktivitu, nie výsledok, ktorý má program vytvárať. CEA na výstupoch vytvorí sebavedomo vyzerajúce číslo, ktoré odpovedá na zlú otázku.
- **Porovnávanie naprieč skutočne odlišnými výsledkami.** CEA je platná, len ak každá možnosť cieli na rovnaký výsledok merať rovnakým spôsobom. Porovnanie „nákladov na ubytovaného bezdomovca spiaceho vonku“ s „nákladmi na mladého po opustení starostlivosti v stabilnom nájme“ si vyžaduje všeobecnú mieru výsledku alebo [multikriteriálnu rozhodovaciu analýzu](../viackriteriálna-analýza-rozhodovania/), nie CEA.
- **Ignorovanie trvanlivosti výsledku.** Lacnejšia možnosť, ktorá vytvára nepretrvávajúce výsledky (žiak, ktorý po skončení intervencie regreduje), nie je skutočne nákladovo efektívnejšia, keď sa meria na porovnateľnom horizonte. Zosúlaďte obdobie sledovania naprieč porovnávanými možnosťami.

## Zdroje

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Chapter 5.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- National Institute for Health and Care Excellence. "Developing NICE guidelines: the manual" —
  metóda nákladovej efektívnosti, z ktorej táto vládna adaptácia vychádza.
  <https://www.nice.org.uk/process/pmg20>
- What Works Centre for Homelessness Impact. Cost-effectiveness evidence on homelessness
  interventions. <https://whatworks-homelessness.org.uk/>
