# Tarpgeneracinis teisingumas ir tvarumo diskontavimas

Būsimų sąnaudų ir naudos diskontavimas iki dabartinės vertės yra standartinė viešojo vertinimo praktika (žr. [socialinė diskonto norma](../socialinė-diskonto-norma/)), tačiau bet kuri teigiama diskonto norma, sudėtinė per dešimtmečius ar šimtmečius, sumažina tolimą ateitį iki beveik nulio šiandienos terminais. Sprendimams, kurių pasekmės siekia šimtą ar daugiau metų (klimato kaita, branduolinės atliekos, biologinės įvairovės praradimas, pensijų tvarumas), šis matematinis faktas tampa etiniu: standartinis diskontavimas gali padaryti katastrofišką žalą būsimoms kartoms, dabartinės vertės terminais, vos verta išvengti.

## Kodėl tai svarbu

Ramsey lygtis, išvesta Frank Ramsey 1928 m., išskaido diskonto normą į dvi sudedamąsias dalis: grynąją laiko pirmenybę (δ, kiek mes tiesiog teikiame pirmenybę dabar prieš vėliau, nepriklausomai nuo turto) ir turto augimo efektą (η×g, kiek diskontuojame dėl to, kad būsimos kartos tikimasi bus turtingesnės, todėl papildomas svaras joms mažiau svarbus). JK Green Book standartinė ilgalaikė diskonto norma sukurta pagal šią lygtį ir seka *mažėjančią* schemą, o ne pastovią normą: dizainas, kilęs iš Martin Weitzman darbo apie „gama diskontavimą“, rodantį, kad kai pati būsima diskonto norma neapibrėžta, ekvivalentinė norma, kurią reikėtų taikyti, matematiškai laikui bėgant mažėja, nes žemos normos scenarijai pradeda dominuoti, kuo toliau žiūrima. Stern Review on the Economics of Climate Change (2006), vadovaujama Sir Nicholas Stern, etinę diskusiją nuvedė toliau: Stern teigė, kad grynoji laiko pirmenybė turėtų būti nustatyta artima nuliui (jis naudojo δ ≈ 0,1 %, atspindinčią tik mažą civilizaciją naikinančios katastrofos tikimybę, o ne tikrą pirmenybę dabarčiai prieš ateitį), o tai davė daug žemesnę efektyvią diskonto normą nei įprasta Green Book praktika ir atitinkamai daug didesnį dabartinį argumentą veiksmams dėl klimato. Kritikai (ypač William Nordhaus) teigė, kad Stern beveik nulinė norma etiškai apginama, bet nesuderinama su faktiškai stebimu taupymo ir investicijų elgesiu. Šis nesutarimas nėra techninė išnaša: tai vienintelė didžiausia priežastis, kodėl du vienodai griežti ekonomistai gali prieiti prie labai skirtingų išvadų, kiek dabartinė karta turėtų paaukoti ateičiai, ir tai priežastis, kodėl programinė įranga, palaikanti ilgo horizonto viešųjų investicijų vertinimą, turi atskleisti savo diskontavimo prielaidas, o ne paslėpti jas skaičiuoklės numatytuosiuose nustatymuose.

## Matematika

```
Ramsey equation:   r = δ + η × g

  r = social discount rate
  δ = pure time preference (rate of impatience, independent of wealth)
  η = elasticity of marginal utility of consumption (diminishing value of
      extra consumption as people get richer)
  g = expected growth rate of per-capita consumption

Green Book declining long-term schedule (approximate, current published bands):
  Years 0–30:    3,5%
  Years 31–75:   3,0%
  Years 76–125:  2,5%
  Years 126–200: 2,0%
  Years 201–300: 1,5%
  Years 301+:    1,0%

Stern Review parameters: δ ≈ 0,1%, η = 1, g ≈ 1,3%  → r ≈ 1,4%
```

## Pavyzdys su skaičiavimais

**Šiandieninė 1 £ išvengtos žalos po 100 metų vertė** pagal tris diskontavimo režimus:

```
Flat Green Book short-term rate (3,5%, held constant for 100 years):
  PV = 1 / (1,035)^100 ≈ 1 / 31,19 ≈ £0,032   (3,2 pence)

Green Book declining schedule (3,5% for yrs 1–30, 3,0% for yrs 31–75,
2,5% for yrs 76–100):
  factor(1–30)  = 1,035^30  ≈ 2,807
  factor(31–75) = 1,03^45   ≈ 3,782
  factor(76–100)= 1,025^25  ≈ 1,854
  total factor ≈ 2,807 × 3,782 × 1,854 ≈ 19,68
  PV = 1 / 19,68 ≈ £0,051   (5,1 pence)

Stern-style near-zero pure time preference (r ≈ 1,4% flat):
  PV = 1 / (1,014)^100 ≈ 1 / 3,997 ≈ £0,250   (25,0 pence)
```

Ta pati 1 £ po šimtmečio išvengtos žalos šiandien verta 3,2 p, 5,1 p arba 25 p, priklausomai vien nuo naudojamos diskontavimo konvencijos: beveik aštuonkartis intervalas, nuo kurio priklauso, ar klimato švelninimo projektas su dideliais pradiniais kaštais ir atsipirkimu po šimtmečio apskritai pasiekia teigiamo NPV ribą. Tai šios temos pagrindinio įspėjimo mechanizmas: esant bet kuriai reikšmingai teigiamai pastoviai normai, pakankamai tolima būsima žala aritmetiškai ištrinama iš vertinimo, nepaisant jos tikro sunkumo.

## Ryšys su programine inžinerija

- Bet kuris ilgo horizonto vertinimo ar verslo atvejo įrankis (infrastruktūra, prisitaikymas prie klimato, pensijų modeliavimas) turėtų įgyvendinti Green Book *mažėjančią* schemą, o ne vieną pastovią normą: pastovios normos numatytoji reikšmė tyliai įterpia daug stipresnį prieš ateitį nukreiptą šališkumą, nei nurodo dabartinės JK vyriausybės gairės.
- Diskonto norma ir horizontas visada turėtų būti pateikiami kaip matomi, auditoruojami parametrai vertinimo programinėje įrangoje, aiškiai parodant skaičiavimo jautrumą jiems (kaip skaičiavimo pavyzdyje aukščiau): normos paslėpimas konfigūracijos faile kviečia būtent tą „paslėptą etinį pasirinkimą“, apie kurį perspėja Stern-Nordhaus diskusija; tai papildo skaidrumo punktą, pateiktą [gamtos kapitalo apskaitoje](../gamtos-kapitalo-apskaita/), ir bendrai grindžia [socialinės diskonto normos](../socialinė-diskonto-norma/) temą.
- Kai programos nauda yra aiškiai tarpgeneracinė (potvynių apsauga, gamtos kapitalo atkūrimas, ilgalaikė skaitmeninė infrastruktūra), [socialinė sąnaudų ir naudos analizė](../socialinė-kaštų-ir-naudos-analizė/) turėtų pateikti rezultatus pagal bent dvi diskontavimo prielaidas (Green Book standartą ir žemos normos jautrumo atvejį), o ne vieną taškinį įvertį, kad sprendimų priėmėjai matytų, kaip vien diskonto normos pasirinkimas keičia atsakymą.

## Dažniausios klaidos

- **Vienos diskontuotos NPV pateikimas be jautrumo intervalo**: turint omenyje, kiek vien diskonto norma keičia atsakymą ilgo horizonto projektams, vienos normos NPV iš esmės pervertina tikslumą; visada pateikite intervalą, apimantį bent Green Book standartą ir žemos normos scenarijų.
- **Trumpalaikės pastovios normos (3,5 %) taikymas kelių šimtmečių vertinimui**: pačios Green Book gairės nurodo mažėjančią schemą būtent todėl, kad pastovi norma buvo laikoma netinkama už maždaug 30 metų ribų; vis tiek ją naudojant nuvertinamos ilgalaikės sąnaudos.
- **δ (grynosios laiko pirmenybės) traktavimas kaip vien techninio parametro**: Stern beveik nulinė reikšmė ir didesnė Green Book numanoma reikšmė yra apginamos tik kaip etinės pozicijos apie tai, kiek svorio dabartis skolinga ateičiai, o ne empiriškai „teisingi“ ar „neteisingi“ skaičiai; programinė įranga turėtų padaryti prielaidą matomą, o ne pateikti vieną skaičių kaip objektyviai teisingą.

## Šaltiniai

- Stern N. "The Economics of Climate Change: The Stern Review." Cambridge University Press, 2006.
- Ramsey FP. "A Mathematical Theory of Saving." The Economic Journal, 1928.
- Weitzman ML. "Gamma Discounting." American Economic Review, 2001.
- HM Treasury. "The Green Book: Central Government Guidance on Appraisal and Evaluation" (Annex 6,
  discount rate schedule).
- Nordhaus WD. "A Review of the Stern Review on the Economics of Climate Change." Journal of
  Economic Literature, 2007.
