# Irizpide anitzeko erabakien analisia (MCDA)

MCDA-k aukerak hainbat irizpide bereizi eta haztatuen aurrean aldi berean puntuatu eta pisatzen
ditu, eta sailkatutako konparazio bat ematen du, irizpide guztiak diru-eskala edo unitate natural
bakar batera behartu gabe. Garrantzia duten emaitzak zenbaki bakar batera murriztu ezin direneko
erabakietarako ebaluazio-metodoa da.

## Zergatik den garrantzitsua

Green Book-ak esplizituki onartzen du MCDA (bere 2. koadroko kasu-azterketen eranskinak eta A
eranskinak zuzenean aipatzen dute) onurak "benetan neurrigaitzak" direneko appraisal-etarako:
hau da, dena diru bihurtzeak [gizarte-kostu-onura analisiaren](../gizarte-kostu-onura-analisia/)
bidez, edo emaitza bakar batera murrizteak
[kostu-eraginkortasunaren analisiaren](../kostu-eraginkortasunaren-analisia-gobernuan/) bidez,
erabakia argitu beharrean desitxuratuko lukeen kasuetan
(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>).
Kartzela berri baterako kokalekua aukeratzeak, adibidez, kapital-kostua, komunitatean duen eragina,
garraio-konektibitatea, ingurumen-eragina eta langileak kontratatzeko erraztasuna elkarren
aurka jartzen ditu: unitate komunik ez duten irizpideak, eta unitate partekatu bat (normalean dirua)
behartzeak, ingurumen-eraginaren eta kostuaren garrantzi erlatiboaren inguruko balio-judizio bat
sartuko luke, aritmetika objektibo gisa mozorrotuta.

MCDA-ren zintzotasuna da, aldi berean, bere ahulgune nagusia: pisuak appraisal-a egiten duenak (edo
panel batek) esleitzen dituenez, metodoa pisatzeko prozesua bezain legitimoa da. Green Book-aren
gidak esplizituki dio irizpideak eta pisuak aukerak puntuatu *aurretik* adostu eta argitaratu behar
direla, hain zuzen berrikuslea nahi duen aukeratik hori justifikatzen duten pisuetara atzeraka
lan egin ez dezan.

## Matematika

```
i aukera eta j irizpide bakoitzeko:
  Puntuazioa_ij = aukerak irizpide horren aurrean duen errendimendua (maiz 0-100
                  edo 1-10, ebidentziatik, aditu-iritzitik edo
                  interesdunen puntuaziotik)
  Pisua_j       = j irizpidearen garrantzi erlatiboa, pisuen batura 1 (edo 100) da

i aukeraren puntuazio haztatua = Σ_j (Puntuazioa_ij × Pisua_j)

Prozedura:
1. Irizpide-multzoa eta pisuak adostu edozein aukera puntuatu AURRETIK
   (swing-pisaketa edo bikoteen konparazioa, adib. AHP, dira
   erabilitako lorpen-metodo arruntak).
2. Aukera guztiak irizpide guztien aurrean puntuatu eskala komun batean,
   ahal bada ebidentziatik.
3. Guztizko haztatuak kalkulatu; aukerak sailkatu.
4. Pisuen sentikortasun-proba egin: sailkapenak irizpide bakoitzaren
   garrantziari buruzko desadostasun sinesgarria jasaten al du?
```

MCDA-k ez du SCBA-ren egungo balio garbiak bezalako balio absolutu defendagarririk sortzen: adostutako
pisuen mende dagoen sailkapena baino ez du ematen. Hori ezaugarri bat da erabakia benetan ondasun
neurrigaitzen arteko konpentsazioari buruzkoa denean, eta ahulezia bat monetizazioaren lan zailagoa
saihesteko erabiltzen bada, monetizazioa benetan posible zen kasuetan.

## Adibide landua

**Tokiko erakundea**: udal batek etxeko hondakinak birziklatzeko zentro berri baterako kokalekua
hautatzen du, hiru gune lau irizpideren aurrean puntuatuz, sail arteko panel batek gune bat bisitatu
aurretik pisatuta:

```
Irizpideak (pisua):       Kapital-kostua (% 30)  Garraio-sarbidea (% 25)
                          Komunitate-eragina (% 25)  Ingurumen-eragina (% 20)

Guneen puntuazioak (0-100, handiagoa = hobea):
A gunea: kostua 80, sarbidea 60, komunitatea 40, ingurumena 70
B gunea: kostua 60, sarbidea 90, komunitatea 70, ingurumena 50
C gunea: kostua 90, sarbidea 50, komunitatea 80, ingurumena 60

Guztizko haztatuak:
A gunea = 80(0,30) + 60(0,25) + 40(0,25) + 70(0,20) = 24+15+10+14 = 63
B gunea = 60(0,30) + 90(0,25) + 70(0,25) + 50(0,20) = 18+22,5+17,5+10 = 68
C gunea = 90(0,30) + 50(0,25) + 80(0,25) + 60(0,20) = 27+12,5+20+12 = 71,5
```

C gunea da sailkapenean lehena. Komunitate-eraginaren pisua % 25etik % 35era aldatzen duen
sentikortasun-probak (kapital-kostuari 10 puntu kenduta) C gunearen guztizkoa 71,5 − 3 + 8 = 76,5
bihurtzen du, eta B gunearena 68 − 6 + 7 = 69 — C gunea lider da oraindik, beraz sailkapena sendoa da
pisaketari buruzko desadostasun sinesgarri horren aurrean, hain zuzen Green Book-ak jakinarazita ikustea
espero duen egiaztapena.

**Karitatea**: zorren aholkularitza-zerbitzu bat, elikagai-bankuen sare bat eta finantza-alfabetatze
programa bat finantzatzearen artean aukeratzen duen fundazio emaile batek MCDA erabiltzen du SROI
ordez (ikus [inbertsioaren itzulkin soziala](../gizarte-inbertsioaren-itzulkina/)), hain zuzen
patronatuek, fede onez, ados ez daudelako krisi-arintzeak ala prebentzioak pisu handiagoa izan behar
duen — MCDA-k desadostasunaren *forma* (pisu-tarte bat) adosteko aukera ematen die, SROI ratio
bakar batek konpontzen duela itxuratu beharrean.

## Software ingeniaritzarekin lotura

MCDA da hornitzaile- eta arkitektura-hautaketarako tresna naturala irizpideak benetan gatazkan
daudenean — hodeian ostatatutako eta lokaleko kasu-kudeaketako sistema baten artean aukeratzeak
kostua, datuen subiranotasun-arriskua, irisgarritasuna eta entrega-abiadura elkarren aurka jartzen
ditu, zenbaki bakar batera murrizten ez diren moduan. Ingeniaritza-arduradunek exijitu behar dute
pisaketa aukerak puntuatu aurretik egitea, Green Book-ak eskatzen duen bezala, zerrenda laburra
ikusi ondoren egindako pisaketa-ariketa gelak lehendik nahiago zuen aukerarantz desbideratzen delako
beti. Ikus [gobernuan eraiki ala erosi](../eraiki-ala-erosi-gobernuan/), MCDA-ren aplikazio ohiko
bat, eta [balio publikoaren puntuazio-txartela](../balio-publikoaren-puntuazio-txartela/), erabakiaren aurretik
baino ondoren erabiltzen den puntuazio egituratuko tresna erlazionatu bat.

## Tranpak

- **Pisuak aukerak ikusi ondoren ezartzea.** MCDA maniobratzeko modurik ohikoena da, nahita edo ez;
  argitaratu pisuak puntuatu aurretik, eta erregistratu nork ezarri dituen.
- **Guztizko haztatua zenbaki zurruntzat hartzea.** 71,5 eta 68 arteko aldea ez da estatistikoki
  esanguratsua sentikortasun-analisiak sailkapena egonkorra dela berresten ez badu; jakinarazi
  tarteak, ez zehaztasun faltsua.
- **MCDA erabiltzea benetan bideragarria zen monetizazioa saihesteko.** Irizpide gehienak sinesgarri
  prezia zitezkeenean, [SCBA](../gizarte-kostu-onura-analisia/) ordez MCDA erabiltzeak appraisal-ak
  erabil zezakeen informazioa baztertzen du.
- **Interesdun nagusi bati pisu guztiak bakarrik ezartzen uztea.** Green Book-aren jardunbide onak
  espero du pisuak panel adierazgarri batengandik lortzea, ez zuzendari sustatzailearengandik,
  appraisal-ak pertsona horrek lehendik nahi zuena berriz ondorioztatu ez dezan.

## Iturriak

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Annex A
  (multi-criteria decision analysis) and Box 2 case studies.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Department for Communities and Local Government. "Multi-criteria analysis: a manual." 2009.
  <https://www.gov.uk/government/publications/multi-criteria-analysis-a-manual>
- Belton V, Stewart TJ. "Multiple Criteria Decision Analysis: An Integrated Approach." Kluwer,
  2002.
