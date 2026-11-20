# Metódy hodnotenia dopadu

Metódy hodnotenia dopadu sú štatistické a experimentálne návrhy používané na odhad toho, čo politika alebo program skutočne spôsobili, na rozdiel od toho, čo by sa stalo tak či tak: randomizované kontrolované štúdie (RCT), rozdiel rozdielov (difference-in-differences), párovanie podľa skóre náklonnosti (propensity score matching) a návrh regresnej diskontinuity sú štyri najčastejšie používané vo verejnej politike Spojeného kráľovstva. Existujú preto, že väčšinu vládnych intervencií nemožno testovať v laboratóriu: nemôžete náhodne rozhodnúť, ktoré mesto dostane novú autobusovú linku, tak ako môžete náhodne rozhodnúť, ktorý pacient dostane liek, a tieto metódy preto preberajú tú istú kauzálnu logiku bez toho, aby vždy vyžadovali náhodné priradenie.

## Prečo na tom záleží

Magenta Book ministerstva financií (HM Treasury), príloha A o kvázi-experimentálnych metódach, je kanonickým usmernením britskej vlády na výber medzi týmito návrhmi a orgány ako Education Endowment Foundation a What Works Centre for Local Economic Growth inštitucionalizujú hierarchiu dôkazov, ktorá sa na nich zakladá: RCT tam, kde je randomizácia uskutočniteľná a etická, kvázi-experimentálne návrhy tam, kde nie je. Voľba metódy nie je technický dodatok: určuje, či hodnotenie dokáže odpovedať na otázku „spôsobil to program?“, alebo len „stalo sa to po začatí programu?“, čo je tá istá otázka, ktorú má [kontrafaktuálna analýza](../kontrafaktuálna-analýza/) prinútiť odborníkov položiť pred zadaním akéhokoľvek hodnotenia.

## Matematika

```
RCT:
  Dopad = priemer(výsledok | skupina s intervenciou) − priemer(výsledok | kontrolná skupina)
  (platné, pretože priradenie k intervencii je náhodné)

Rozdiel rozdielov (DiD):
  Dopad = [výsledok_po(intervenčná) − výsledok_pred(intervenčná)]
        − [výsledok_po(kontrolná) − výsledok_pred(kontrolná)]
  (vyžaduje predpoklad „paralelných trendov“: intervenčná a kontrolná skupina by sa
   bez intervencie vyvíjali spoločne)

Párovanie podľa skóre náklonnosti (PSM):
  1. Odhadnúť P(intervencia = 1 | kovariáty X) pre každú jednotku → skóre náklonnosti
  2. Spárovať intervenčné jednotky s neintervenčnými s podobným skóre náklonnosti
  3. Dopad = priemer(výsledok | intervenčné) − priemer(výsledok | spárovaná kontrola)

Návrh regresnej diskontinuity (RDD):
  Dopad = skok vo výsledku pozorovaný na prahu oprávnenosti,
          pri porovnaní jednotiek tesne nad hranicou a tesne pod ňou
```

## Vypracovaný príklad

**Miestny úrad (rozdiel rozdielov pre program pre problémové rodiny)**: výsledkom je školská dochádzka. Intervenčná oblasť sa za obdobie programu posunie z 84 % na 89 % dochádzky (+5 percentuálnych bodov); porovnateľná, ale neintervenčná oblasť sa za rovnaké obdobie posunie z 85 % na 87 % (+2 percentuálne body). Odhad dopadu DiD: 5 − 2 = +3 percentuálne body pripísateľné programu. Aplikované na kohortu 2 000 žiakov v intervenčnej oblasti to zodpovedá zhruba 60 ďalším žiakom (3 % × 2 000), ktorí dosiahnu vyššiu kategóriu dochádzky; ide o extrapoláciu, ktorú treba vykázať s výhradou paralelných trendov, nie ako presný počet osôb.

**Charita (párovanie podľa skóre náklonnosti pre charitu zameranú na zamestnateľnosť)**: 300 účastníkov programu sa spáruje s 300 jednotlivcami z väčšieho administratívneho súboru údajov pomocou skóre náklonnosti zostaveného z veku, predchádzajúcej histórie zamestnania a úrovne kvalifikácie. Miera zamestnanosti po dvanástich mesiacoch: spárovaná intervenčná skupina 46 %, spárovaná porovnávacia skupina 33 %. Odhad dopadu PSM: 46 % − 33 % = +13 percentuálnych bodov pripísateľných programu, za predpokladu, že žiadny nepozorovaný zmätočný faktor (napríklad motivácia) neovplyvňuje súčasne účasť aj výsledok.

## Súvislosť so softvérovým inžinierstvom

To, či je neskôr ktorýkoľvek z týchto návrhov uskutočniteľný, silne závisí od rozhodnutí v dátovom inžinierstve prijatých včas. RDD potrebuje presne zaznamenanú bežiacu premennú a skutočne čistý prah oprávnenosti; DiD potrebuje porovnateľné panelové dáta v čase pre intervenčné aj porovnávacie oblasti, čo znamená konzistentné spájanie naprieč systémami a rokmi; PSM potrebuje bohaté základné kovariátne údaje zachytené pred intervenciou, nie rekonštruované po nej. Dátový model navrhnutý od začiatku spolu s [teóriou zmeny](../teória-zmeny/) a [logickým modelom](../logický-model/), ktorý zachytáva základné kovariáty, dátumy a záznamy oprávnené pre porovnávaciu skupinu, je to, čo neskôr umožní rigorózne hodnotenie dopadu namiesto nákladného dodatočného naháňania údajov. Pozri [hodnotenie dopadu vs. hodnotenie procesu](../hodnotenie-dopadu-vs-hodnotenie-procesu/), kde je doplnková otázka, na ktorú tieto metódy samy neodpovedajú.

## Úskalia

- **Vynucovanie RCT tam, kde je neuskutočniteľné alebo neetické**, alebo naopak nikdy neuvažovanie o kvázi-experimentálnom návrhu, keď bola k dispozícii skutočná príležitosť (politický prah, postupné zavádzanie), ktorá zostala nevyužitá.
- **Ignorovanie predpokladu paralelných trendov v DiD.** Ak sa porovnávacia oblasť už pred intervenciou rozchádzala s intervenčnou, dvojbodové porovnanie je kontaminované; kontrolujte trendy pred intervenciou, nielen pred/po.
- **Párovanie len podľa pozorovaných kovariátov v PSM.** Nepozorovaný výber, ako je motivácia účastníkov, môže odhad skresliť, aj keď sú pozorované kovariáty dobre vyvážené.
- **Manipulácia bežiacej premennej v RDD.** Ak ľudia dokážu ovplyvniť svoje skóre tak, aby spadli tesne dovnútra prahu oprávnenosti, diskontinuita už neizoluje kauzálny efekt.

## Zdroje

- HM Treasury, Magenta Book (2020), Annex A: Quasi-Experimental Methods. <https://www.gov.uk/government/publications/the-magenta-book>
- What Works Centre for Local Economic Growth, evidence review methodology. <https://whatworksgrowth.org/>
- Education Endowment Foundation, evaluation guidance. <https://educationendowmentfoundation.org.uk/>
