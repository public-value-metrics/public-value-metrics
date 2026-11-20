# Kostu-eraginkortasunaren analisia gobernuan

Kostu-eraginkortasunaren analisiak (CEA) emaitza *bera* lortzeko modu alternatiboen kostuak konparatzen ditu, unitate naturaletan adierazita —etxebizitza lortu duen kale-lo egiten duen pertsona bakoitzeko kostua, tokiko estandarrera iritsi den ikasle bakoitzeko kostua, murriztutako CO2 tona bakoitzeko kostua— emaitza bera dirutan bihurtu gabe.

## Zergatik den garrantzitsua

Green Book-ak CEA hartzen du [gizarte-kostu-onura analisiaren](../gizarte-kostu-onura-analisia/) onura guztiak monetizatzeko eskakizuna zaila ez ezik desonesta bihurtzen denerako ordezko metodo gisa — emaitzari prezio sinesgarri bat jartzeak inork benetan onartzen ez dituen hipotesiak eskatuko lituzkeen kasuetarako (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>, 5. kapitulua, emaitzak erraz monetizagarriak ez diren aukeren ebaluazioari buruz). CEA osasun-ekonomiatik zuzenen mailegatutako metodoa da —egituraz berdina da NICE-k tratamenduak Kalitatez Doitutako Bizi-Urteko kostuaren arabera nola konparatzen dituen— baina osasunekoak ez diren programa publikoetan aplikatuta: hezkuntza-esku-hartzeak ikasle-emaitza-puntuko, etxebizitza-programak etxegabetasunetik babestutako etxeko bakoitzeko, enplegu-programak iraunkorra den lanpostu-emaitza bakoitzeko.

CEA-k SCBA-ren ondoan lekua irabazten duen arrazoia da emaitza batzuei balio monetarioa behartzeak agintari itxura emateko adina zehatza eta eztabaida publikoan baliogabea izateko adina eztabaidagarria den zenbaki bat sortzen duela — "estandar espero den mailan irakurtzen duen haur bati" prezio bat jartzeak hain zuzen komiteko hautaketan negozio-kasu bat bidetik ateratzen duen erronka mota gonbidatzen du. CEA-k eztabaida saihesten du hartzeari uko eginez: aukerak *emaitzaren beraren* unitate bakoitzeko kostuaren arabera sailkatzen ditu, emaitza lortzea merezi duen ala ez erabaki politiko bereizia kasu estrategikoari utziz.

## Matematika

```
Kostu-eraginkortasun ratioa (batez bestekoa) = Kostu osoa / Lortutako emaitza-unitateak guztira

Kostu-eraginkortasun ratio inkrementala (ICER), A aukera B aukerarekin alderatuz:
ICER = (Kostua_A − Kostua_B) / (Emaitza_A − Emaitza_B)

Prozedura:
1. Finkatu emaitza-unitatea eta neurketa-metodoa alderatzen diren aukera guztietan.
2. Kostatu aukera guztiak oinarri berean (ikus ../green-book-appraisal/, kasu finantzarioa)
   denbora-horizonte berean.
3. Baztertu menderatutako aukerak: unitate bakoitzeko kostu handiagoa duen
   eta emaitza berdina edo hobea lortzen duen alternatiba merkeago baten aurrean
   dagoen edozein aukera baztertzen da.
4. Sailkatu gainerako aukerak ratio inkrementalaren arabera, ez batez bestekoaren arabera.
```

CEA-k ezin du, bere kasa, esan programa bat finantzatzea merezi duen ala ez — helburu beraren hainbat hurbilketatik zein den merkeena unitate bakoitzeko bakarrik. Helburua bera gastua merezi duen erabakitzeak SCBA-ra itzultzea eskatzen du (balioztatze sinesgarri bat badago) edo matematikatik kanpoko erabaki politiko/estrategiko bat. Emaitzak benetan unitate bakar batera murriztu ezin direnean —programa batek modu desberdinetan axola duten hainbat emaitza sortzen dituelako— erabili [irizpide anitzeko erabaki-analisia](../irizpide-anitzeko-erabakien-analisia/) horren ordez.

## Adibide landua

**Tokiko erakundea**: kontseilu batek kale-lo egitea murrizteko hiru hurbilketa alderatzen ditu, bakoitza urtebetez kostatuta "6+ hilabetez ostatu egonkorrean kokatutako pertsonak" emaitzaren aurka:

```
Aukera                           Kostua     Lortutako emaitzak   CER batezbestekoa
Housing First (intentsiboa)      £900.000   60                   £15.000/emaitza
Ostatua + aurrerabide-laguntza   £600.000   50                   £12.000/emaitza
Hurbilketa + alokairu pribatua   £350.000   20                   £17.500/emaitza

ICER, Ostatua vs Hurbilketa:  (600k−350k)/(50−20) = £8.333 emaitza gehigarri bakoitzeko
ICER, Housing First vs Ostatua: (900k−600k)/(60−50) = £30.000 emaitza gehigarri bakoitzeko
```

Hurbilketa menderatuta dago batez besteko kostuan Ostatuaren aldean, baina Hurbilketatik Ostatura pausoak *inkrementalki* £8.333 bakarrik kostatzen du etxebizitza lortzen duen pertsona gehigarri bakoitzeko — merkea Housing First pausoaren aldean, Ostatuak lortzen duenaz gain pertsona gehigarri bakoitzeko £30.000 kostatzen duena. Aurrekontu-mugatutako erakunde batek eskala handitzean Ostatua zabaltzea hobetsi beharko luke Housing First baino lehen, Housing First-ek bere batez besteko ratioan hobeto dirudien arren.

**Gobernu nazionala**: irakurketa-hezkuntzako berreskurapen-programa bat hiru entrega-ereduren artean konparatzen da "adinari dagokion irakurketa-estandarra lortzen duen ikasle bakoitzeko kostua" gainean: banakako tutoretza (£1.800/ikasle), talde txikiko tutoretza (£700/ikasle) eta soilik digitala den esku-hartzea (£150/ikasle, baina talde txikiko tutoretzaren emaitza-tasaren %40 bakarrik matrikulatutako ikasle bakoitzeko, uztearen eraginez doituta). Benetako osatzearen arabera doituta, soilik digitalak £375 kostatzen ditu estandarra lortzen duen ikasle bakoitzeko — oraindik merkeena, baina CEA-k ezin du esan soilik digitalak lagundutako ikasle kopuru absolutu txikiagoa, talde txikiaren aurrekontu berarekin emandakoan, onargarria den sakonera handiagoz ikasle gutxiago iristearen aldean; hori CEA-k erabaki-hartzaileei itzultzen dien banaketa-erabakia da.

## Software ingeniaritzarekin lotura

CEA marko egokia da ingeniaritza-taldeek zerbitzu-emaitza *bera* lortzeko entrega-hurbilketak ebaluatzen dituztenean — identitate-egiaztapen arrakastatsu bakoitzeko kostua hiru identitate-egiaztapen saltzaileren artean, behar bezala sailkatutako kasu bakoitzeko kostua bi kasu-automatizazio diseinuren artean, konponitako irisgarritasun-akats bakoitzeko kostua etxeko eta kontratatutako konponketaren artean. Zuzenean inportatzen duen diziplina: definitu emaitza-unitatea kostuak alderatu aurretik (ez "itxitako tiketak" — irteera bat — baizik eta "benetan konponitako erabiltzaile-beharra"), eta kalkulatu beti sistema aktiboaren eta proposatutako ordezkoaren arteko ratio inkrementala, ez sistema bakoitzaren batez besteko kostua isolatuta. Ikus [emaitzak vs irteerak](../emaitzak-eta-irteerak/) eta [emaitza bakoitzeko kostua](../emaitza-bakoitzeko-kostua/).

## Tranpak

- **Batez besteko ratioak alderatzea, ez inkrementalak, zabalkuntza erabakitzean.** Kale-lo egitearen adibideak erakusten duenez, batez besteko ratiorik onena duen aukera ez da beti erosi beharreko hurrengo emaitza-unitate merkeena.
- **Benetan irteera bat den emaitza-unitatea aukeratzea.** "Egindako bideraketak" edo "emandako saioak" jarduera neurtzen dute, ez programak sortzeko dagoen emaitza; irteeretan egindako CEA-k seguru dirudien zenbaki bat sortzen du, galdera okerrari erantzuten diona.
- **Benetan emaitza desberdinen artean konparatzea.** CEA baliozkoa da aukera guztiek emaitza bera helburu dutenean eta modu berean neurtuta; "etxegabetu bakoitzeko kostua" "egonkortasunez alokairuan dagoen zaintza-utzi gazte bakoitzeko kostua"rekin alderatzeak emaitza-neurri generiko bat edo [irizpide anitzeko erabaki-analisia](../irizpide-anitzeko-erabakien-analisia/) behar du, ez CEA.
- **Emaitzaren iraunkortasuna alde batera uztea.** Iraungo ez duten emaitzak sortzen dituen aukera merkeago bat (esku-hartzea amaitu ondoren atzera egiten duen ikasle bat) ez da benetan kostu-eraginkorragoa horizonte konparagarri batean neurtzen denean; parekatu jarraipen-aldia alderatzen diren aukeretan.

## Iturriak

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Chapter 5.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- National Institute for Health and Care Excellence. "Developing NICE guidelines: the manual" —
  the cost-effectiveness method this government adaptation borrows from.
  <https://www.nice.org.uk/process/pmg20>
- What Works Centre for Homelessness Impact. Cost-effectiveness evidence on homelessness
  interventions. <https://whatworks-homelessness.org.uk/>
