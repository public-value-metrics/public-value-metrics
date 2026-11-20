# Dirulaguntzen emaitzen txostenak (IRIS+)

Dirulaguntzen emaitzen txostenak dira dirulaguntza-hartzaileek finantzatzaileei emaitza-metrika estandarizatu eta alderagarriak jakinarazteko praktika, finantzatzaile bakoitzak bere txosten-txantiloi neurrikoa asmatu beharrean. IRIS+, Global Impact Investing Network-ek (GIIN) mantentzen duena, estandar horietatik zabalduena da: inpaktu-inbertitzaileek eta, gero eta gehiago, dirulaguntza-fundazioek hartzaileei erabiltzeko eskatu edo gomendatzen dizkieten errendimendu sozial, ingurumeneko eta finantzarioko metrika aurredefinituen katalogoa.

## Zergatik den garrantzitsua

Txosten estandarizatuak existitu aurretik, fundazio bakoitzak adierazle-multzo desberdin bat eskatzen zien hartzaileei formatu desberdin batean, eta hamar finantzatzaile dituen karitate ertain batek hamar txosten-prozesu paralelo izan zitzakeen gainjarritako lanerako; dirulaguntzen emaitzen estandarizazioak murriztu nahi duen txosten-zamaren eragile dokumentatua da hori. IRIS+-ek hiztegi partekatua ematen die finantzatzaileei eta hartzaileei: gai-multzoen arabera taldekatutako Core Metrics Sets (adibidez, etxebizitza merkea, energia garbirako sarbidea, inklusio finantzarioa), metrika bakoitza «sortutako lanpostuak» edo «zerbitzatutako etxeak» txostena nork egin ere esanahi bera izateko bezain zehatz definituta, eta NBEren Garapen Jasangarrirako Helburuekin (SDG) lerrokatuta, finantzatzaile batek hartzaile-mailako datuak portfolio-mailako SDG kontakizun batera bil ditzan. GIINek jakinarazi du IRIS metrikak inpaktu-inbertitzaileen erdiek inguruk eta arloan aktibo dauden fondo-kudeatzaile, banku eta garapen-finantzaketa erakundeen gehiengo handiak erabiltzen dituztela.

Estandarizazioak garrantzi handiena du [emaitzak vs produktuak](../emaitzak-eta-irteerak/) gaiarekin elkarreragiten duen lekuan: IRIS+-ek txostenak definitutako emaitza- eta inpaktu-metriketara bultzatzen ditu, hartzailearen kasu-kudeaketa sistemak erregistratzen duen edozeren ordez, hau da, [emaitza bakoitzeko kostuak](../emaitza-bakoitzeko-kostua/) eta [onuradun bakoitzeko kostuak](../onuradun-bakoitzeko-kostua/) deskribatzen duten hutsunea bera.

## Matematika

Dirulaguntzen emaitzen txostenak esparru eta prozesu bat dira, ez formula bat:

```
1. Finantzatzaileak dirulaguntzaren gaiari dagokion Core Metrics Set bat aukeratzen du
   (adib. IRIS+ «Inklusio Finantzarioa» edo «Nekazaritza Jasangarria»)
2. Metrika bakoitzak GIINek argitaratutako definizio, unitate eta kalkulu-metodo
   finkoa du, ez finantzatzaile bakoitzak asmatutakoa
3. Hartzaileak metrika-definizio berdinen aurka jakinarazten du estandar hori
   erabiltzen duten finantzatzaile guztientzat, txosten bikoiztuen ahalegina murriztuz
4. Finantzatzaileak hartzaile-mailako metrikak portfolio-mailako txostenean agregatzen ditu,
   urtez urte eta hartzaileen artean alderagarria, metrika bera erabiliz
```

Eraginkortasun-irabazia konbinatoria da: N finantzatzaile × M hartzaile hiztegi partekatu batera estandarizatzeak N×M neurrirako txosten-erlazio estandar baten aurkako N+M mapaketa inguru bihurtzen ditu.

## Adibide landua

**Hiru finantzatzaile dituen hartzailea, estandarizatu aurretik**: «zerbitzatutako pertsonak» jakinarazten dizkio 1. finantzatzaileari buru-zenbaketaren definizioarekin, «iritsitako onuradunak» 2. finantzatzaileari etxe-definizioarekin, eta «eragindako pertsonak» 3. finantzatzaileari zerbitzu-pasarte definizioarekin (beraz, bi aldiz bisitatzen duen pertsona batek bi aldiz zenbatzen du). Hiru txosten, hiru zenbaki, bat ere alderagarria ez, eta ez beste hartzaile baten zenbakiekin alderagarria, ezta finantzatzaile beraren portfolioaren barruan ere.

**Hartzaile bera IRIS+-ekin**: IRIS+-eko definitutako iritsitako-pertsonen metrika bati buruz jakinarazten du, Core Metrics Set egokiko emaitza-metrika definitu batekin batera, biak GIINek argitaratutako kalkulu-metodologiarekin. Hiru finantzatzaileek orain zenbaki bera jasotzen dute, modu berean kalkulatua, eta hartzaile honen IRIS+-ek definitutako unitate bakoitzeko kostua beren portfolioko beste hartzaileekin alderatu dezakete metrika berdina erabiliz: txosten-azpiegituraren eskalan, [unitate-kostuen datu-base](../unitate-kostuen-datu-baseak/) partekatu bat edukitzearen baliokidea.

## Software ingeniaritzarekin lotura

Dirulaguntzak kudeatzeko plataformek IRIS+ metrika-identifikatzaileak kanpoko gako gisa tratatu behar dituzte, ez testu libre gisa: argitaratutako metrika-kodea hartzaileak jakinarazitako balioarekin batera gordetzea («onuradunak» izeneko tokiko eremu asmatu baten ordez) da geroago finantzatzaileen arteko eta portfolioen arteko agregazioa posible egiten duena, datuak garbitzeko proiekturik gabe. Plataformak IRIS+ hartu ez duten finantzatzaileak onartu behar dituenean, diseinu pragmatikoa da tokiko metrika bat IRIS+ definizio hurbilenera mapatzen uztea, finantzatzaile guztiak berehala estandarrera behartu beharrean: alderagarritasuna pixkanaka hobetzen da grafoaren zati handiagoa identifikatzaile partekatuetara mapatzen den heinean. Ikus [emaitza bakoitzeko kostua](../emaitza-bakoitzeko-kostua/) gai ahizpa, jakinarazitako zenbakiak bildu ondoren zer kalkulatzeko erabili behar diren jakiteko.

## Tranpak

- **IRIS+ hartzea alderagarritasun automatikotzat jotzea.** Bi hartzaile IRIS+ metrika berari buruz jakinarazi dezakete eta, hala ere, ez izan alderagarriak azpiko datuen kalitatea edo kontrafaktualaren hipotesiak desberdinak badira; estandarrak definizioak finkatzen ditu, ez neurketaren zorroztasuna.
- **Finantzatzaileek asmatutako «IRIS-ekin lerrokatutako» metrikak.** IRIS+-en hizkuntzak soilik inspiratutako baina argitaratutako benetako definizioa ez den metrika batek estandarrak konpontzeko dagoen zatiketa berriro ekartzen du.
- **Gehiegizko hautaketaren ondorioz txostenekiko nekea.** Hartzaileari Core Metrics Set osoaren aurka jakinarazteko eskatzeak, bi edo hiru metrika bakarrik erabakirako garrantzitsuak direnean, zama-arazoa estandarizatutako bilgarri batean birsortzen du.
- **Emaitza-metrikarik ez izatea.** IRIS+-ek irteera-metrika hutsak ditu asko (adibidez, zerbitzatutako pertsonen zenbaketak); horiek bakarrik hautatzeak, emaitza-mailako metrikarik gabe, [onuradun bakoitzeko kostu](../onuradun-bakoitzeko-kostua/) formako txostenak sortzen ditu emaitzen txosten etiketapean.

## Iturriak

- GIIN, IRIS+ system. <https://iris.thegiin.org/>
- GIIN, IRIS+ Catalog of Metrics. <https://iris.thegiin.org/metrics/>
- GIIN, About IRIS+. <https://iris.thegiin.org/about/>
