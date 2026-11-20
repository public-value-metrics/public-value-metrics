# Gabezia Anitzeko Indizea (IMD)

IMD Ingalaterrako eremu txikien gabezia erlatiboaren neurri ofiziala da: herrialdeko 32.844 Lower-layer Super Output Area (LSOA, bakoitzak 1.500 bizilagun inguru) guztiak sailkatzen ditu, 1etik (gabezia handienekoa) 32.844ra (gabezia txikienekoa). Gaur egungo Ministry of Housing, Communities and Local Government-ek (MHCLG, lehen MHCLG/DCLG) argitaratzen du, azkena English Indices of Deprivation 2019 gisa, eta zuzenean bideratzen ditu gobernu zentraleko finantzaketa, osasun publikoaren lehentasunak eta tokiko dozenaka eskemaren elegibilitatea.

## Zergatik den garrantzitsua

Gabezia ez da gauza bakarra: auzo bat errentari dagokionez pobrea baina segurua izan daiteke, edo errenta egokikoa baina osasun-emaitza txarrekin eta etxebizitza txarrarekin. IMDren aurreko indizeak (1970eko hamarkadako Department of the Environment-eko gabezia-adierazleetaraino doazenak) gaur egungo zazpi domeinuko eredu bihurtu ziren hain zuzen adierazle bakarreko helburu-ezarpenak (langabezia-tasa bakarrik, esaterako) sarritan beste modu batzuetan behartsu ziren eremuak galtzen zituelako. IMD 2019k errenta, enplegua, hezkuntza, osasuna, krimena, etxebizitzarako eta zerbitzuetarako oztopoak eta bizi-ingurunea batzen ditu LSOA bakoitzeko sailkapen konposatu batean, domeinu bakoitza bere adierazle-saskiarekin eraikita eta MHCLGren metodologiaren arabera haztatuta. Tokiko erakunde mailan beharrean eremu txikiaren (LSOA) mailan funtzionatzen duenez, bestela oparoa den barrutiaren barruan ezkutatutako gabezia-poltsak agerian uzten ditu; horregatik IMD da, ez tokiko erakundeen batez besteko errenta, NHS England, Department for Education-en pupil premium eta tokiko erakundeen dozenaka finantzaketa-formulak benetan oinarritzen direna. Ingalaterran elegibilitatea zehazten duen, hedapena lehenesten duen edo inpaktua eremuka jakinarazten duen softwareak IMD dezila edo sailkapena lehen mailako sarrera gisa tratatu behar du, ez geroko pentsamendu gisa; eta programa batek nahita gabezia handieneko eremuak helburu dituenean, bere ebaluazioak helburu-ezarpen horrekin bat datorren [banaketa-haztapena](../banaketa-haztapena/) aplikatu behar du, onura-libra bat non erortzen den kontuan hartu gabe berdin baloratu beharrean.

## Matematika

```
7 domeinu, haztatuak:
  Errenta                                  %22,5
  Enplegua                                 %22,5
  Hezkuntza, trebetasunak eta trebakuntza  %13,5
  Osasun-gabezia eta desgaitasuna          %13,5
  Krimena                                   %9,3
  Etxebizitzarako eta zerbitzuetarako oztopoak %9,3
  Bizi-ingurunea                            %9,3

Domeinu bakoitzaren puntuazioa: adierazleak estandarizatzen dira (sailkatu, gero
banaketa normalerantz eraldatu) eta eraldaketa esponentzialez konbinatzen dira,
adierazle bakar batean gabezia handiak ezin duela guztiz ezeztatu domeinu horretako
beste adierazleetako gabezia txikiak.

IMD puntuazio konposatua (LSOA) = Σ (domeinuaren puntuazioa × domeinuaren haztapena)
Sailkatu LSOAk puntuazio konposatuaren arabera → 1 (gabezia handiena) 32.844ra (gabezia txikiena)
Dezilak: sailkapena ÷ 3.284 (gutxi gorabehera), 1. dezila = LSOAen gabezia handieneko %10
```

## Adibide landua

**LSOA puntuazio konposatua**, domeinu-puntuazio estandarizatu ilustratiboak erabiliz (0 = gabezia-seinalerik ez, handiagoa = gabezia handiagoa):

```
Errenta                    0,35 × 0,225 = 0,07875
Enplegua                   0,30 × 0,225 = 0,06750
Hezkuntza                  0,20 × 0,135 = 0,02700
Osasuna                    0,15 × 0,135 = 0,02025
Krimena                    0,10 × 0,093 = 0,00930
Etxebizitza-oztopoak       0,05 × 0,093 = 0,00465
Bizi-ingurunea             0,08 × 0,093 = 0,00744

Puntuazio konposatua = 0,07875 + 0,06750 + 0,02700 + 0,02025
                     + 0,00930 + 0,00465 + 0,00744  = 0,21489
```

Puntuazio konposatu hori gero 32.844 LSOA guztien puntuazioen aurka sailkatzen da. LSOA 2.950. postuan jartzen badu, 1. dezilan dago (2.950 ÷ 3.284 ≈ 0,9, hau da, Ingalaterrako auzoen gabezia handieneko %10aren barruan), eta finantzaketa-formula askotarako hori da elegibilitatea irekitzen duen atalasea, inguruko tokiko erakundeak batez beste zer puntuazio duen kontuan hartu gabe.

## Software ingeniaritzarekin lotura

- Erabiltzaileak posta-kodera edo LSOAra geokodetzen dituen edozein zerbitzuk MHCLGren IMD bilaketa-taula argitaratua (CSV doakoa eta bertsionatua) lot dezake gabezia-dezila kobariable gisa gehitzeko: hedapena helburutzeko, kasu-karga lehenesteko edo emaitzak gabezia-bandaren arabera jakinarazteko, datu pertsonal berririk bildu gabe.
- IMD dezila zerbitzu digital publikoetarako ekitate-egiaztapen estandarra da: zerbitzuaren erabilera, uztea edo asebetetzea IMD dezilaren arabera gurutzatzeak agregatuzko metrika batek ezkutatzen dituen sarbide-hutsuneak azaleratzen ditu; ikus [inklusio digitala](../inklusio-digitala/) eta [herritarren asebetetze-metrikak](../herritarren-asebetetze-metrikak/).
- IMD sailkapena erlatiboa denez (beti Ingalaterra osoko sailkapen-multzo finko batera batzen da), ezin du erakutsi gabezia nazionala denboran igotzen edo jaisten ari den ala ez, edizio horretan eremuek elkarren aldean non sailkatzen diren bakarrik; ez eraiki joera absolutuko panelik IMD sailkapen gordinean bakarrik oinarrituta.

## Tranpak

- **IMD sailkapenak edizioen artean (2015 vs. 2019) denbora-joera gisa alderatzea**: azpiko adierazleak, geografiak eta metodologia guztiak aldatzen dira edizioen artean; MHCLGk esplizituki aholkatzen du sailkapen-aldaketak ez erabiltzea eremu bat gabezia handiagoa edo txikiagoa izan denaren froga gisa.
- **LSOA mailako IMD banakoei aplikatzea**: 1. dezilako LSOA batek ere gabezia ez duten etxeak ditu, eta 10. dezilako LSOA batek ere behartsuak; IMDk eremuak deskribatzen ditu, ez pertsonak, eta banakoen elegibilitate-ordezko gisa erabiltzeak bi norabideetan sailkatzen du gaizki.
- **Domeinu-mailako xehetasuna alde batera uztea sailkapen konposatuaren mesedetan**: puntuazio konposatu bera duten bi LSOAk domeinu-profil guztiz desberdinak izan ditzakete (bat osasun-gabeziakoa, bestea krimen-gabeziakoa); arazo bati zuzendutako helburu-eskemak domeinu-puntuazio garrantzitsua erabili behar du, ez konposatu nahasia.

## Iturriak

- Ministry of Housing, Communities and Local Government. "English Indices of Deprivation 2019."
  <https://www.gov.uk/government/statistics/english-indices-of-deprivation-2019>
- MHCLG. "The English Indices of Deprivation 2019: Technical Report."
