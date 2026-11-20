# Oceňovanie podľa odhalených preferencií

Metódy odhalených preferencií odvodzujú hodnotu netrhového statku z pozorovateľného správania na
súvisiacom trhu namiesto toho, aby sa ľudí pýtali priamo. Hedonické oceňovanie a metóda cestovných
nákladov sú dve základné techniky: obe vychádzajú zo skutočnej transakcie a z nej spätne odvodzujú
implicitnú cenu veci, ktorá sa nikdy priamo nepredávala.

## Prečo na tom záleží

Kým metódy [deklarovaných preferencií](../oceňovanie-metódou-deklarovaných-preferencií/) kladú hypotetickú otázku,
metódy odhalených preferencií pozorujú, za čo ľudia skutočne zaplatili, čo Green Book považuje pri
inak rovnakých podmienkach vo všeobecnosti za dôveryhodnejší dôkaz, pretože nepodlieha hypotetickému
skresleniu: respondenti v hedonickej štúdii cien domov skutočne zaplatili príplatok alebo zľavu, ktorá
sa meria
(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>,
Annex 2). Hedonické oceňovanie rozkladá trhovú cenu (zvyčajne cenu domov) na implicitné ceny každého
atribútu statku, čo umožňuje analytikom izolovať napríklad cenový príplatok, ktorý domácnosti
skutočne platia za bývanie v tichšom prostredí alebo s lepšou kvalitou ovzdušia, pri štatistickej
kontrole všetkých ostatných atribútov, ktoré ovplyvňujú cenu domu (veľkosť, poloha, školský obvod).
Metóda cestovných nákladov robí analogickú vec pre rekreačné lokality bez vstupného: čas a peniaze,
ktoré ľudia vynaložia na cestu do lokality, odhaľujú dolnú hranicu toho, čo pre nich lokalita znamená,
pretože nikto nevynaloží náklad vyšší než hodnota návštevy.

Obe metódy majú rovnaké štrukturálne obmedzenie: dokážu oceniť len to, čo je zabudované do existujúcej
trhovej transakcie. Hluk v blízkosti dráhy sa prejaví v cenách domov, pretože ľudia, ktorým hluk
prekáža, sa presúvajú do tichšieho bývania; existenčná hodnota druhu, ktorý nikto nenavštevuje a
pri ktorom nikto nebýva, sa neprejaví v žiadnej transakcii, a práve túto medzeru majú vyplniť metódy
[deklarovaných preferencií](../oceňovanie-metódou-deklarovaných-preferencií/).

## Matematika

```
Hedonické oceňovanie:
  Cena domu = f(štrukturálne atribúty, atribúty polohy,
                 sledovaný environmentálny atribút, ...)
  Odhad regresiou; koeficient pri environmentálnom atribúte
  (pri ostatných nezmenených) je jeho implicitná cena.

  Implicitná cena atribútu X = ∂(cena domu) / ∂X

Metóda cestovných nákladov:
  Miera návštevnosti (návštevy na obyvateľa zo zóny i) = f(cestovné náklady zo zóny i,
                 substitučné lokality, socioekonomické kontroly)
  Odhadnite krivku dopytu po návštevách ako funkciu cestovných nákladov.
  Prebytok spotrebiteľa = plocha pod odhadnutou krivkou dopytu
                         = hodnota lokality pre návštevníkov
```

Obe metódy vyžadujú štatisticky správny súbor kontrol: vynechanie zavádzajúceho atribútu (hedonické)
alebo blízkej substitučnej lokality (cestovné náklady) skresľuje implicitnú cenu smerom, ktorý nie je
vždy vopred zrejmý, a preto Annex 2 Green Book vyžaduje, aby sa vykazovala špecifikácia regresie a
kontroly, nie len titulkový koeficient.

## Vypracovaný príklad

**Ústredná vláda**: metodika tieňovej ceny uhlíka v Green Book čiastočne čerpá z hedonických dôkazov,
ale jednoduchším ilustratívnym prípadom je hluk lietadiel. Hedonická štúdia, ktorá regresuje predajné
ceny domov v oblasti pod letovou dráhou voči expozícii hluku váženej vzdialenosťou hluku, pri kontrole
veľkosti, veku a školského obvodu, zistí, že každé zvýšenie priemernej expozície hluku o 1 decibel je
spojené s poklesom ceny domu o 0,5 %. Pre typický dom za £280 000 v dotknutej oblasti:

```
Implicitná cena na decibel = £280 000 × 0,5 % = £1 400 na domácnosť
Domácnosti dotknuté zvýšením o 3 dB z novej dráhy = 18 000
Súhrnné implikované náklady zvýšenia hluku = £1 400 × 3 × 18 000 = £75,6 mil.
```

Ide o jednorazový kapitalizovaný náklad (zabudovaný do ceny domu), pri ktorom si posudzovanie musí
dávať pozor, aby ho nezapočítalo dvakrát voči samostatne odhadnutému ročnému toku nákladov z
obťažovania hlukom.

**Charita**: environmentálna charita použije metódu cestovných nákladov na ocenenie prírodnej
rezervácie s voľným vstupom. Prieskumné údaje o smerovacích číslach návštevníkov dávajú priemerné
náklady na cestu tam a späť (čas ocenený odporúčanou hodnotou času mimo práce podľa Green Book plus
palivo) £14 na návštevu pri 40 000 návštevách ročne. Odhadnutá krivka dopytu (miera návštevnosti
klesá, keď rastú cestovné náklady zo zóny) implikuje prebytok spotrebiteľa na návštevu, nad
skutočne vynaložených £14, približne £9.

```
Celková ročná hodnota = 40 000 návštev × (£14 vynaložených + £9 prebytok spotrebiteľa)
                      = 40 000 × £23 ≈ £920 000/rok
```

To zatieňuje nulové tržby rezervácie zo vstupného a dáva správcom charity obhájiteľné číslo pre
rekreačnú hodnotu lokality, keď argumentujú pred poskytovateľmi financií.

## Súvislosť so softvérovým inžinierstvom

Myslenie v kategóriách odhalených preferencií sa v produktovej analytike verejného sektora objavuje
častejšie, než si odborníci uvedomujú: údaje o používaní bezplatnej vládnej digitálnej služby sú
samy osebe dôkazom hodnoty z odhalených preferencií (frekvenciu, dĺžku relácie a najmä vzory
opakovaného oproti jednorazovému používaniu možno analyzovať rovnako, ako model cestovných nákladov
berie frekvenciu návštev voči vzdialenosti). Ak má služba skutočné substitúty (papierový kanál,
telefónna linka), „náklad“, ktorý občania vynakladajú na používanie digitálneho kanála namiesto toho
(čas, dáta, zariadenie), sa dá odhadnúť a porovnať s využívaním, čo priamo kopíruje logiku cestovných
nákladov. Pozri [štandard digitálnej služby](../štandard-digitálnych-služieb/) a
[hodnotu otvorených dát](../hodnota-otvorených-dát/), ktorá čelí presne tomuto problému oceňovania statku bez
priamej trhovej ceny.

## Úskalia

- **Skreslenie vynechanou premennou v hedonických modeloch.** Vynechanie korelovaného atribútu
  (kvalita škôl koreluje s cenou domu aj so sledovanou environmentálnou premennou) skresľuje odhad
  implicitnej ceny; treba vykazovať a skúmať špecifikáciu, nie len výsledok.
- **Ignorovanie substitučných lokalít v štúdiách cestovných nákladov.** Odhalená hodnota lokality
  pre návštevníka je podhodnotená, ak existuje bližší substitút a nekontroluje sa; návštevník ju môže
  navštevovať najmä preto, že je zadarmo, nie preto, že je jedinečne hodnotná.
- **Uplatnenie odhalených preferencií na statok bez akejkoľvek trhovej ozveny.** Existenčná hodnota,
  hodnota možnosti a odkazová hodnota sa neprejavujú v žiadnej transakcii a nemožno ich získať
  hedonickými ani cestovnými metódami; táto medzera patrí
  [oceňovaniu podľa deklarovaných preferencií](../oceňovanie-metódou-deklarovaných-preferencií/).
- **Zámena kapitalizovanej (jednorazovej) hodnoty s ročným tokom.** Hedonické účinky na ceny domov
  sú zvyčajne jednorazové kapitalizované hodnoty; ich považovanie za tok ročných prínosov nafukuje
  posudzovanie.

## Zdroje

- HM Treasury. "The Green Book," Annex 2: valuing non-market impacts.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Department for Transport / Civil Aviation Authority. Aircraft noise valuation studies used in
  airport appraisal. <https://www.gov.uk/guidance/aviation-noise>
- Rosen S. "Hedonic Prices and Implicit Markets: Product Differentiation in Pure Competition."
  Journal of Political Economy, 1974.
- Clawson M, Knetsch JL. "Economics of Outdoor Recreation." Johns Hopkins University Press, 1966
  (origin of the travel-cost method).
