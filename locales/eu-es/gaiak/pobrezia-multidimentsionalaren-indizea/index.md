# Pobrezia Multidimentsionalaren Indizea (MPI)

MPI-k pobrezia pertsona batek aldi berean bizi dituen gabezia gainjarrien gisa neurtzen du —
osasunean, hezkuntzan eta bizi-mailan— errenta bakarrik lerro baten azpitik egotea gisa neurtu
beharrean. Oxford Poverty and Human Development Initiative-k (OPHI) garatu zuen, Sabina Alkire eta
James Fosterrekin, eta 2010etik UNDP-rekin batera argitaratzen da Giza Garapenaren Txosten
guztietan, [Giza Garapenaren Indizearekin](../giza-garapenaren-indizea/) batera.

## Zergatik den garrantzitsua

Errenta-pobreziaren lerroek ez dituzte antzematen diru-errenta nahikoa dutenak baina ur garbirik,
eskolatzerik edo haur baten heriotzatik babesik ez dutenak — eta ez dute ikusten gabeziak multzoka
agertzen direla: elektrizitaterik gabeko etxe batek neurriz kanpoko probabilitatea du saneamendurik
ere ez izateko eta haur desnutritu bat izateko. MPI oinarritzen duen Alkire-Foster metodoak
pertsona bakoitzaren gabeziak zenbatzen ditu hamar adierazletan, berdin pisatutako hiru dimentsiotan
multzokatuta —osasuna, hezkuntza, bizi-maila— eta norbait "MPI pobre" gisa sailkatzen du soilik bere
gabezia-puntuazio haztatuak muga finko bat gainditzen badu, adierazle bakarreko estatistika bereizien
multzo batek harrapatu ezin duen gainjartzea jasoz. OPHI-k metodologia osoa eta herrialdeen datuak
argitaratzen ditu hemen: <https://ophi.org.uk/multidimensional-poverty-index/>; UNDP-rekin batera
mantentzen duen MPI globalak 110 herrialde baino gehiago biltzen ditu orain. Pobreziaren aurkako
programetarako softwarearentzat —diru-transferentziak, gizarte-arretaren triajea, laguntzen
bideratzea— MPI-ren adierazle-multzoa estatistika-bulego nazional hamarnaren artean dagoeneko
baliozkotutako gabezia-eskema estandarizatuaren hurbilena izan ohi da.

## Matematika

```
10 adierazle, 3 dimentsio, dimentsio bakoitza 1/3 pisatuta:

Osasuna (1/3):            nutrizioa (1/6), haurren heriotza-tasa (1/6)
Hezkuntza (1/3):          eskolatze-urteak (1/6), eskola-asistentzia (1/6)
Bizi-maila (1/3):         sukaldaritza-erregaia, saneamendua, edateko ura,
                          elektrizitatea, etxebizitza, ondasunak (1/18 bakoitza)

gabezia-puntuazioa (c) = pertsonak gabezia duen adierazleen pisuen batura

pertsona "MPI pobrea" da c ≥ 1/3 bada (pobrezia-muga, k = % 33)

H (biztanle-ratioa)  = MPI pobreen kopurua / biztanleria osoa
A (intentsitatea)    = gabezia-puntuazio medioa MPI pobreen artean bakarrik

MPI = H × A
```

MPI-k pobreak diren pertsonen *kopurua* eta zein *pobre* diren biderkatzen dituenez, biztanle-ratio
bera duten bi eskualdek MPI-puntuazio oso desberdinak izan ditzakete gabeziak larriagoak badira
batean — HDI-ren batez besteko geometrikoaren atzean dagoen "dimentsioen arteko ordezkapenik ez"
logika bera.

## Adibide landua

**1.000 pertsonako inkesta nazionala**: 350 pertsona multidimentsionalki pobre gisa identifikatzen
dira (gabezia-puntuazioa ≥ % 33). 350 pertsona pobre horien artean bakarrik, gabezia-puntuazio
medioa % 45 da.

```
H = 350 / 1.000               = 0,350
A = 0,45
MPI = H × A = 0,350 × 0,45    = 0,1575
```

**Biztanle-ratio bera duten bi barrutiren konparazioa**: A barrutiak H = 0,30 eta A = 0,40 ditu
(pobre asko, gabezia moderatuarekin); B barrutiak H = 0,30 eta A = 0,60 (pobre kopuru bera, baina
gabezia larriagoarekin — elektrizitaterik, saneamendurik *eta* eskola-asistentziarik gabe aldi
berean).

```
MPI_A = 0,30 × 0,40 = 0,120
MPI_B = 0,30 × 0,60 = 0,180
```

Biztanle-ratio bera, B barrutian % 50 MPI handiagoa — biztanle-pobreziaren kopuruan bakarrik oinarritutako
bideratze-sistema batek bi barrutiak berdin sailkatuko lituzke eta B barrutiak esku-hartze sakonagoa
behar duela galduko luke.

## Software ingeniaritzarekin lotura

- Gizarte-programetarako kasu-kudeaketa eta bidezkotasun-sistemek maiz dagoeneko gordetzen dituzte
  hamar adierazleetako batzuk (etxebizitza, eskola-asistentzia, osasun-adierazleak) siloetan
  bereizita; Alkire-Foster zenbaketa-metodoa gabezia-puntuazio bakarrean konbinatzeko eskema
  prest bat da, puntuazio-eredu propioa hutsetik eraikitzeko beharrik gabe.
- Biztanle-ratioaren/intentsitatearen banaketa (H × A) eredu orokorrean erabilgarria da "zenbat
  daude kaltetuta" eta "zenbateraino" batera jakinarazten duen edozein aginte-panelentzat — biak
  zenbaki bakarrean tolestea, prebalentzia gordinaren estatistikek egiten duten bezala, baliabide
  gehien behar duen kasua ezkutatzen du.
- MPI motako adierazle-aginte-panelak naturalki uztartzen dira pobreziaren aurkako programen
  [onuradun bakoitzeko kostuaren](../onuradun-bakoitzeko-kostua/) txostenekin: MPI-ren puntu bat
  murrizteko kostua unitate defendagarria da esku-hartze oso desberdinak konparatzeko
  (diru-transferentzia vs. saneamendu-azpiegitura).

## Tranpak

- **Hamar adierazleak unibertsaltzat hartzea** — OPHI-ren MPI globalaren adierazleak herrialdeen
  arteko konparagarritasunerako kalibratuta daude; MPI nazionalek (herrialde askok, Asia hegoaldeko
  eta Afrikako batzuk barne, berea argitaratzen dute) adierazleak eta pisuak tokiko testuingurura
  egokitzen dituzte, eta bi motak ez dira zuzenean konparagarriak.
- **H bakarrik jakinaraztea** — biztanle-ratioak intentsitatea guztiz ahazten du; jakinarazi edo
  kalkulatu beti A harekin batera, edo MPI bera.
- **MPI pobreak eta errenta-pobreak populazio bera direla suposatzea** — OPHI-ren herrialde-txostenek
  normalean bien arteko gainjartze partziala besterik ez dute erakusten; errenta-pobreak soilik
  hartzen dituen programa batek sistematikoki galduko du pobre multidimentsionalen zati esanguratsu bat.

## Iturriak

- Oxford Poverty and Human Development Initiative. "Multidimensional Poverty Index."
  <https://ophi.org.uk/multidimensional-poverty-index/>
- Alkire S, Foster J. "Counting and Multidimensional Poverty Measurement." Journal of Public
  Economics, 2011.
- UNDP & OPHI. "Global Multidimensional Poverty Index" (annual report).
