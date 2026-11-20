# Banaketa-haztapena

Banaketa-haztapenak kostu edo onura baten balio monetarioa doitzen du nork jasotzen duen kontuan hartuta, printzipio honen arabera: libra gehigarri bat balio handiagokoa da etxe pobre batentzat aberats batentzat baino. HM Treasury-ren Green Book-ak haztapen hori aplikatzeko metodo esplizitu bat ematen du, errentaren utilitate marjinal beherakorrean oinarrituta, ebaluazioek isilean ez dezaten tratatu dezilarik aberatsenak irabazitako libra eta pobreenak irabazitakoa balio berekotzat.

## Zergatik den garrantzitsua

Kostu-onura analisi estandarrak liberak batu egiten ditu, norenak diren galdetu gabe, eta horrek inplizituki suposatzen du libra batek denentzat balio bera duela; ekonomialariek aspaldi dakite hori faltsua dela. Urtean £15.000 irabazten dituen etxe batek £1.000-ko irabazia oso modu desberdinean bizi du urtean £150.000 irabazten dituenak baino, errentaren utilitate marjinala errenta handitu ahala jaisten delako. Haztatu gabe, ebaluazio estandarrak sistematikoki alde egiten die talde aberatsagoei, jada ondo bizi direnei, haien erosteko ahalmen handiagoak haiengana iristen diren onuren balio monetarioa puzten baitu (aberatsen etxebizitzen ondoko parke-hobekuntzak jabetza-balioaren onura handiagoa «erakusten du» etxebizitza merkeen ondokoak baino, prezioak altuagoak direlako soilik, ongizate-irabazia handiagoa delako ez).

Green Book-aren banaketa-analisiari buruzko gida osagarriak, Treasury-ren 2020ko berrikuspenak indartuak (ebaluazio-metodologiak Londres eta hego-ekialdea sistematikoki lehenesten zituela zioen kritikari erantzunez), errentaren utilitate marjinalaren elastikotasun suposatu batean oinarritutako haztapen formala ezartzen du, 1,3 ingurukoa; hau da, errenta bikoiztuz gero, libra gehigarri baten balio marjinala gutxi gorabehera erdira jaisten da (zehazki, 2^-1,3 ≈ 0,41 aldiz). Hau ez da biribilketa-doikuntza: aplikatzeak alda dezake lehiakide diren bi programatatik zeinek duen egungo balio garbi handiagoa, bereziki eremu behartsu batean kontzentratutako esku-hartzea biztanleria orokorrean sakabanatutako batekin alderatzen denean.

## Matematika

Green Book-aren banaketa-haztapena, y errenta-mailako etxe bati dagokion onura-libra bakoitzarentzat, batez besteko errenta nazionalaren (ȳ) libra baten aldean:

```
Haztapena(y) = (ȳ / y)^e

non:
  y  = etxearen errenta (edo ukitutako taldearen errenta)
  ȳ  = etxeen batez besteko (erreferentziazko) errenta
  e  = errentaren utilitate marjinalaren elastikotasuna (Green Book: gutxi gorabehera 1,3)
```

Haztapenak onura garbiei aplikatuta:

```
Onura haztatua = Σ [i taldearentzako onura haztatu gabea × Haztapena(y_i)]
```

Batez besteko nazionalaren erdia irabazten duen taldeak (y = 0,5ȳ) (1/0,5)^1,3 = 2^1,3 ≈ 2,46 haztapena jasotzen du: talde horrentzako onura-libra bakoitzak batez besteko errentako etxe baten libra baten balioa baino gutxi gorabehera 2,46 aldiz gehiago balio du.

## Adibide landua

**Bi tokiko programa lehiakide**, bakoitza urteko £2 milioiko onura garbi haztatu gabearekin, eskualde-hazkuntzako funts berdinaren bila:

- *A programa*: herri oparo bateko enpresa-laguntza eskema, etxeen batez besteko errenta £45.000 (suposatutako batez besteko nazionalaren, £35.000-ren, gutxi gorabehera 1,3 aldiz).
- *B programa*: ward behartsu bateko trebakuntza-programa, etxeen batez besteko errenta £18.000 (batez besteko nazionalaren gutxi gorabehera 0,51 aldiz).

```
Haztapena(A) = (35.000 / 45.000)^1,3 = (0,778)^1,3 ≈ 0,72
Haztapena(B) = (35.000 / 18.000)^1,3 = (1,944)^1,3 ≈ 2,53

A onura haztatua = £2.000.000 × 0,72 = £1,44 milioi
B onura haztatua = £2.000.000 × 2,53 = £5,06 milioi
```

Haztatu gabe, bi programak berdinduta daude. Banaketa-inpaktuagatik haztatuta, B programaren onura hiru aldiz baino handiagoa da, finantzaketa-gomendioa irauli egiten duen emaitza, eta Green Book-ak haztapena erakustea eskatzearen xedea islatzen du, ez onura-kostu ratio haztatu gabea bakarrik.

**Karitate-dirulaguntzaren esleipena**: £500.000-ko dirulaguntza errenta baxuko 1.000 etxetara iristen dela (haztapena ≈ 2,0, balio haztatua £1 milioiren baliokidea) eta £500.000 horiek berak errenta ertaineko 1.000 etxetara iristen direla (haztapena ≈ 1,0, balio haztatua £500.000-ren baliokidea) alderatzen dituen finantzatzaileak banaketa-argudioa esplizituki erakutsi behar du bere batzordearen dokumentuan, ez ondorioztatzeko utzi.

## Software ingeniaritzarekin lotura

Banaketa-haztapena oso gutxitan agertzen da zuzenean software-entregaren metriketan, baina neurketa eta helburu-ezarpena nola diseinatzen duten moldatu behar du ingeniaritza- eta datu-taldeen:

- Inpaktu-panela edo onura-kalkulagailua eraikitzean, erakutsi nork duen eragina errenta- edo gabezia-profilaren arabera, ez onura-guztizko agregatua bakarrik: banaketa-banakapenik gabeko zifra agregatuek hain zuzen goian erakutsitako iraulia ezkutatzen dute.
- Lotu zerbitzu-diseinuko helburu-ezarpenaren logika Green Book-ak erabiltzen dituen gabezia-datuekin (ikus [Gabezia Anitzeko Indizea](../gabezia-anitzeko-indizea/)), zerbitzu digital baten irismena ekitateari dagokionez ebalua dadin, ez eraginkortasunari bakarrik ([diruaren truke lortutako balioaren](../diruaren-truke-balioa/) laugarren E eztabaidatua).
- Algoritmo batek baliabide urri bat esleitzen duenean (hitzorduak, kasu-langilearen denbora, diru-laguntza), «maximizatu onura osoa» helburu-funtzio haztatu gabeak, eraikuntzaz, Green Book-aren haztapenak zuzentzeko dagoen alborapen bera erreproduzituko du; adierazi hori esplizituki politika-arduradunei optimizatu aurretik.

## Tranpak

- **Banaketa-haztapenak portfolio osoan modu inkoherentean aplikatzea.** Programa baten onurak haztatu eta bere konparatzailearenak ez haztatzeak alborapena sortzen du, ez konparazio bidezkoagoa; Green Book-ak tratamendu parekidea eskatzen du.
- **Jabetza- edo merkatu-balioak ongizatearen ordezko gisa erabiltzea doitu gabe.** Merkatu-prezioak ere lehendik dagoen errenta-desberdintasunak distortsionatzen ditu, eta hori da hain zuzen banaketa-haztapenak zuzendu nahi duena; doitu gabeko merkatu-balioak erabiltzeak alborapena bi aldiz zenbatu dezake.
- **Taldearen barneko aldakortasuna alde batera uztea.** Eremuaren batez besteko errentaren arabera haztatzeak (adibidez, Gabezia Anitzeko Indizearen dezila batek) bere eremuaren batez bestekoarekin bat ez datozen banakoak gaizki irudika ditzake; erabili arrazoiz eskuragarri dagoen errenta-datu xehetuena.
- **1,3ko elastikotasuna konstante unibertsal gisa tratatzea.** Green Book-ak berak dio estimazio bat dela, tarte sinesgarri batekin; egin sentikortasun-proba erabaki handiekin elastikotasun alternatiboen aurka, 1,3 zehatz gisa hartu beharrean.

## Iturriak

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation", and
  supplementary guidance on distributional impacts (2022 edition).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury, "Green Book Review 2020: Findings and Response" (addressing regional-bias criticism).
  <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>
- Fujiwara D, Campbell R. "Valuation Techniques for Social Cost-Benefit Analysis." HM Treasury/DWP,
  2011 (background on marginal utility of income elasticity estimates).
