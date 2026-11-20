# Aukera-kostua gastu publikoan

Aukera-kostua erakunde publiko batek dirua, langileen denbora edo kapital politikoa aukera bati
beste baten ordez eskaintzen dionean uko egindako alternatiba onenaren balioa da. Aurrekontu finkoa
duen departamentu batean, programa batean gastatutako libra bakoitza hurrengo programa onenean
gastatu ezin den libra bat da — erabaki baten benetako kostua ez da zenbat gastatzen duen, zer
ordezkatzen duen baizik.

## Zergatik den garrantzitsua

Aurrekontu publikoak gastu-berrikuspen aldi baten barruan diru-mugatuak dira, beraz — enpresa pribatu
hazkor batek ez bezala — gobernu-departamentu batek ezin du ideia on baterako "dirua aurkitu"
besterik gabe; finantzatzeak beste zerbait finantzatzeari uztea esan nahi du. HM Treasury-ren Green
Book-ak funtsezkotzat jotzen du hau: balioespen guztiek esku-hartze bat "gutxieneko" oinarri-lerro
batekin konparatu behar dute *eta* baliabide beraren erabilera alternatibo errealistekin, hain zuzen
Treasury-ren gastu-taldeak sekula ez duelako galdetzen "hau ona al da?", baizik eta "hau dirua
horrekin erosi zitekeen beste edozer baino hobea al da?". Green Book-aren balioespen-printzipio
nagusia —baliabide publikoek libra bakoitzeko gizarte-balio garbirik altuena duen esku-hartzera joan
behar dutela— politika gisa adierazitako aukera-kostua da.

Esatea erraza eta aplikatzea zaila da, "hurrengo alternatiba onena" ia inoiz ez delako ikusgai
negozio-kasu bakar batean. Gazteen enplegurako 2 milioi £-ko diru-laguntza programa bat, negozio-kasuan,
ezer ez egitearekin konparatzen da — baina konparatzaile zintzoa gazteen enplegurako hurrengo
esku-hartze onena da, edo, are, 2 milioi £-ren hurrengo erabilera onena portfolioan edonon,
enplegukoak ez diren gastuak barne. Magenta Book-ak (HM Treasury, 2020) esplizituki ohartarazten du
"esku-hartzearekin" eta "esku-hartzerik gabe" konparatzen dituzten ebaluazioek esku-hartze batek gainditu
beharreko langa gutxiesten dutela, "esku-hartze hau gabe" ez baita "ezer ez" berdina — askatutako
diruak beste zerbait finantzatzen du.

## Matematika

```
A aukeratzearen aukera-kostua = uko egindako alternatiba onenaren (B) balioa

A-ren balio publiko garbia = balioa(A) − balioa(B), ez balioa(A) − 0
```

Ez dago formula unibertsalik, uko egindako alternatiba testuinguruaren araberakoa delako, baina
diziplina orokortu egiten da: identifikatu aurrekontu-lerro beraren hurrengo erabilera onena
errealista ("ezer ez egitea" idealizatu bat ez), balioetsi oinarri berean (ahal denean
monetizatuta, [gizarte-kostu-onura analisiaren](../gizarte-kostu-onura-analisia/) arabera) eta kendu.

## Adibide landua

**Departamentuaren aurrekontu-lerroa**: 5 milioi £-ko eraldaketa digitalerako funts batek
finantzatu dezake aurrekontu-urte honetan bi proposamenetako bat zehatz-mehatz.

- *A aukera*: kasuak kudeatzeko plataforma berri bat, onura monetizatua 7,2 milioi £ 5 urtetan
  (eraginkortasun-aurrezkiak eta kasuen ebazpen azkarragoa).
- *B aukera*: hiru departamentuen artean partekatutako identitate-egiaztapeneko zerbitzu bat,
  onura monetizatua 6,4 milioi £ 5 urtetan.

A-ren negozio-kasu inozo batek 7,2 milioi £-ko onura 5 milioi £-ko kostuarekin konparatzen du eta
1,44:1 onura-kostu ratioa jakinarazten du — itxuraz sendoa. Baina A eta B 5 milioi £ beragatik
lehiatzen direnez, A aukeratzearen aukera-kostua B-ren uko egindako 6,4 milioi £-ko onura da. A-ren
kasu *garbia* alternatiba errealistaren aurrean 7,2 M£ − 6,4 M£ = 0,8 milioi £ baino ez da, ez
goiburuko 7,2 milioi £ osoak. Hirugarren aukera batek, C-k, 7,5 milioi £-ko onura eskainiko balu
5 milioi £ berarekin, A finantzatzeak C-ren aurrean 0,3 milioi £-ko balio publikoa suntsituko luke,
A-ren negozio-kasua bere kasa guztiz justifikatuta ageri bada ere.

**Tokiko erakundearen langileen denbora**: udal baten hiru pertsonako datu-taldeak etxebizitza-itxaron-zerrendaren
aginte-panel bat eraiki dezake (urtean 400 funtzionario-ordu aurreztuko lituzkeela estimatuta,
28 £/orduko balioarekin = 11.200 £/urte) edo prestazio-iruzurraren triajerako tresna bat (urtean
85.000 £-ko ordainketa okerrak saihestuko lituzkeela estimatuta). Aginte-panela eraikitzeak
85.000 £/urteko aukera-kostua du, ez datu-taldearen soldata-kostua bakarrik — barne-eraikuntza
"doakoaren" benetako kostua taldeak beste nonbait sor zezakeen onura askoz handiagoa da.

## Software ingeniaritzarekin lotura

Erakunde publiko baten barruko ingeniaritza-gaitasuna aurrekontu mugatu bat da berez — sprint-gaitasuna,
ez liberak — eta diziplina bera zuzenean aplikatzen da:

- Izendatu beti konparatzailea: funtzionalitate baten negozio-kasuak adierazi behar du talde-aste
  berberek zer beste entrega zezaketen, ez bere itzulkina bakarrik.
- Tratatu "ingeniaritza-gaitasun soberakina dugu" aukera-kostuaren analisiaren hasiera gisa, ez
  amaiera gisa — soberako gaitasunak ere erabilera alternatibo onena du, nahiz eta erabilera hori
  zor teknikoa ordaintzea izan (ikus
  [zor teknikoa balio publikoaren higadura gisa](../zor-teknikoa-balio-publikoaren-higadura-gisa/)).
- Lotu hau zuzenean [diruaren balioarekin](../diruaren-truke-balioa/): VFM-ren "ekonomia" probak ez du
  zentzurik aukera-kostuaren konparatzaile zintzorik gabe, eta
  [atzerapenaren kostuarekin programa publikoetan](../atzerapenaren-kostua-programa-publikoetan/), zeinak
  uko egindako alternatibaren logika beraren denbora-dimentsioa prezituko duen.

## Tranpak

- **"Ezer ez egitearekin" konparatzea hurrengo alternatiba onenaren ordez.** Green Book-ak "gutxieneko"
  oinarri-lerro bat eskatzen du hain zuzen benetako aukera-kostua ia inoiz ez delako zero; "ezer ez
  egitearen" langa soilik gainditzen duen negozio-kasu batek ez du frogatu alternatiba errealista
  gainditzen duenik.
- **Pote bererako departamentuen arteko lehia alde batera uztea.** Zuzendaritza batean babestuta
  diruditen aurrekontu-lerroak maiz maila altuago batean lehiatzen dira (gastu-berrikuspen bat,
  kapital-programa bat), eta han gauzatzen da benetako aukera-kostua.
- **Askatutako langileen denborak ez duela beste baliorik suposatzea.** "Aurrezten den" denborak
  balioa sortzen du baliotsua den zerbaitera birbideratzen bada soilik; alternatiba erabilerarik ez
  badago, aurrezkia nozionala da.

## Iturriak

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation" (2022).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020).
  <https://www.gov.uk/government/publications/the-magenta-book>
- Claxton K, et al. "Methods for the estimation of the NICE cost-effectiveness threshold." Health
  Technology Assessment, 2015;19(14) — aukera-kostua aurrekontu publiko finko batean muga lotesle gisa
  duen erakustaldi enpiriko kanonikoa. <https://www.journalslibrary.nihr.ac.uk/hta/hta19140/>
