# Zerbitzu publikoen produktibitatea

Zerbitzu publikoen produktibitateak neurtzen du gastu publikoak sarrerak (langileak, kapitala, ondasunak
eta zerbitzuak) kalitatez doitutako irteeretan zein eraginkortasunez bihurtzen dituen, merkatu-prezio
bakarrik ez duten zerbitzuetan —osasuna, hezkuntza, polizia, gizarte-arreta— eta, beraz, kostuak zatitzeko
diru-sarreren zifrarik ez dutenetan. Erresuma Batuko Office for National Statistics-ek 2000ko hamarkadaren
erdialdetik argitaratzen du serie hau, eta "gobernua hobeto ala okerrago ari al da dirua zerbitzu
publiko bihurtzen?" galderari erantzuteko saiakera nazional metodologikoki garatuena izaten jarraitzen du.

## Zergatik den garrantzitsua

Merkatu batean produktibitatea (irteeraren balioa) / (sarreraren kostua) da, eta irteeraren balioa
behagarria da norbaitek ordaintzen duelako. Aldaka-ordezkapen batek, eskola-plaza batek eta polizia-patruila
batek ez dute salmenta-prezioa, beraz modu inozoan *sarrerak* (zenbat gastatu den) bakarrik neur
daitezke — eta horrek iruzurtzailea den komentarista batzuk gastu publikoaren igoera automatikoki txartzat
hartzera tentatzen ditu, jarduera orokorra aldatu gabe sarrera gehiago produktibitate-jaitsiera dirudielako.
ONS-ren metodologiak, bere zerbitzu publikoen produktibitateko "Sources and Methods" argitalpenetan
azaldua, hori konpontzen du jarduera-bolumenetatik *irteera*-indize bat eraikiz (egindako ebakuntzak,
irakatsitako ikasleak, ikertutako delituak) eta ondoren irteera-indize hori *kalitatez doituz* —
osasunean, biziraupen-tasak eta itxaron-denborak txertatuz; hezkuntzan, errendimendua; poliziaren kasuan,
kasuen ebazpena bezalako emaitzak— ebakuntza kopuru bera egiten duen baina biziraupen-tasa hobeak lortzen
dituen zerbitzu batek produktibitate handiagoa erregistratzeko, ez bakarrik garestiagoa. ONS-ren
argitalpenetan errepikatzen den goiburuko aurkikuntza sektorearentzat zorrotza da: Erresuma Batuko zerbitzu
publikoen produktibitatea nabarmen erori zen COVID-19 pandemian eta ONS-ren 2020ko hamarkadaren erdialdeko
argitalpenen arabera oraindik ez zen 2019ko mailetara itzuli azpisektore batzuetan, osasun-arretan barne,
gastua igo zen arren — "finantzaketa gehiago" eta "produktibitate gehiago" guztiz bereiziko bi galdera
direla berrikuspen horrek birformulatzen du.

## Matematika

```
Irteera-indizea (bolumena) = Σ (jarduera_i × unitate-kostuaren pisu erlatiboa_i), oinarri-urtean pisatua
                          zerbitzu-jarduera guztietan (adib. aldaka-ebakuntzak, kataratak,
                          medikuntza orokorreko kontsultak), Laspeyres/Paasche bolumen-indize baten antzekoa

Kalitate-doikuntza    = irteera-indizea × kalitate-doikuntzaren faktorea
                          (adib. biziraupen-tasen, itxaron-denboren, errendimenduaren edo
                          berrerrotzearen aldaketa bolumen gordinaren biderkatzaile gisa txertatuz)

Sarrera-indizea       = Σ (lan-orduak × lan-kostuaren pisua) + (ondasun/zerbitzuen kostua,
                          deflaktatua) + (kapitalaren kontsumoa)

Faktore guztien produktibitatearen hazkundea = kalitatez doitutako irteera-indizearen % aldaketa
                                                − sarrera-indizearen % aldaketa
```

## Adibide landua

**NHS sektore akutuaren produktibitate-kalkulu ilustragarria** (egitura ONS-ren metodologiari jarraitzen dio):

```
1. urtea: irteera-bolumenaren indizea = 100,0 (oinarri-urtea), sarrera-indizea = 100,0
         → produktibitate-indizea = 100,0

2. urtea: jarduera-bolumena % 3,0 igotzen da (ebakuntza gehiago, hitzordu gehiago)
         baina batez besteko itxaron-denbora okertzen da, % −1,0eko
         kalitate-doikuntzaren deskontua aplikatuz
         Kalitatez doitutako irteera-indizea = 100 × 1,030 × 0,990 = 101,97

         Sarrerak igotzen dira: langile-kopurua % +4,0, beste kostuak (deflaktatuak) % +1,5,
         sarrera-indize haztatua = 100 × 1,032 = 103,2

Produktibitatearen hazkundea = (101,97 / 100 − 1) − (103,2 / 100 − 1)
                              = % 1,97 − % 3,2 = −1,23 puntu portzentual

Interpretazioa: jarduera igo zen, baina sarrerak azkarrago igo ziren eta kalitatea
apur bat jaitsi zen, beraz produktibitatea —sarrera-unitate bakoitzeko irteera—
jaitsi zen "arreta gehiago eman zen" arren.
```

Hau da, hain zuzen, ONS-ren argitalpenek NHS-ren zati batzuetarako pandemiaren ostean behin eta berriz
jakinarazi duten eredua: gastu gorakorra eta jarduera gordin gorakorra produktibitate neurtu beherakorrarekin
elkarrekin bizi dira, kalitate-doikuntza eta sarreren hazkundea biak kontuan hartzen direnean.

## Software ingeniaritzarekin lotura

Zerbitzu publikoen produktibitatea ingeniaritza-produktibitateari buruzko eztabaiden biztanleria-mailako
parekoa da (bidalitako story point-ak vs [DORA metrikak](../dora-metrikak-balio-publikorako/) vs
[fluxu-metrikak](../fluxu-metrikak-gobernuko-entregan/)): kalitate-doikuntzarik gabeko throughput gordina
ospitale batean "bidalitako kode-lerroak" software-talde batean bezain engainagarria da. Departamentuentzat
errendimendu-datuen pipeline-ak eraikitzen dituzten taldeek kalitate-doikuntza lehen mailako eta
bertsionatutako eraldaketa-fase gisa tratatu behar dute, ez oin-ohar gisa — ONS-ren sinesgarritasunak
doikuntza hori gardena, errepikagarria eta kalitate-datu hobeak iristean berrikusia izatean oinarritzen
delako (ONS-k iraganeko urteen produktibitate-estimazioak berrikusten ditu azpiko kalitate-datuak —adib.
biziraupen-tasak— behin betikoak direnean, beraz estatistika horiek kontsumitzen dituen edozein
ondorengo sistemak atzeraeraginezko berrikuspenak kudeatu behar ditu, ez soilik aldi berriak erantsi). Halaber, zuzenean
gurutzatzen da [jabetza-kostu osoarekin](../jabetza-kostu-osoa-gobernuko-it-an/) eta
[sektore publikoko IA-ren produktibitatearekin](../adimen-artifizialaren-produktibitatea-sektore-publikoan/): kalitatea hobetu
edo mantendu gabe jarduera-bolumen gordina handitzen duen sistema ez da, ONS-ren definizio propioaren
arabera, produktibitate-hobekuntza.

## Tranpak

- **Sarreren hazkundea produktibitate-hazkundetzat hartzea**: langile gehiago finantzatzen dituen gastu
  handiagoak *jarduera* gehiago sortzen du, ez *produktibitate* gehiago, sarrera-unitate bakoitzeko
  irteera ere igotzen ez bada — bi horiek maiz nahasten dira iruzkin politikoetan.
- **Kalitate-doikuntza guztiz alde batera uztea**: jarduera-zenbaketa gordinekin bakarrik eraikitako irteera-indize
  batek balio edo kalitate txikiagoko zerbait gehiago egitetik "produktibitate-irabaziak" erakutsiko ditu;
  ONS-ren kalitate-doikuntza hori harrapatzeko dago zehazki.
- **Azpisektoreen arteko produktibitate-indizeak metodologiaren bertsio-adin parekaturik gabe konparatzea**:
  osasunaren, hezkuntzaren eta poliziaren produktibitatea berrikuspen-ziklo desberdinetan jarduera- eta
  kalitate-datu iturri desberdinetatik eraikita daude — sektore arteko konparazio inozo batek tresna
  bateraezinak konparatzen ditu.
- **Urte bakarreko produktibitate-jaitsiera joera iraunkortzat irakurtzea**: pandemia garaiko eta
  pandemia osteko produktibitate-zifrek urtez urteko aldakortasun handia erakutsi dute kalitate-datuak
  berak (adib. itxaron-zerrendak, aukerako ebakuntzen berreskurapena) aldatu direlako; ONS-k etengabe
  ohartarazten du urte bakarreko mugimenduak gehiegi ez interpretatzeko.

## Iturriak

- Office for National Statistics, "Public Service Productivity" series.
  <https://www.ons.gov.uk/economy/economicoutputandproductivity/publicservicesproductivity>
- Office for National Statistics, "Public Service Productivity: Total, UK — Sources and Methods."
  <https://www.ons.gov.uk/economy/economicoutputandproductivity/publicservicesproductivity>
