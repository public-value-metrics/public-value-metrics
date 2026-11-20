# Adimen artifizialaren balioa gobernuan

Adimen artifizialaren balioa gobernuan zera eskatzea da: zerbitzu publiko batean erabiltzen den AA sistema batek beste
edozein gastu-erabakik gainditu behar duen diruaren balioaren eta balio publikoaren langa bera gainditu behar duela
—ez baxuagoa berria delako, ez altuagoa beldurra eragiten duelako—. Entrega-talde batek AA funtzio bat
argitaratu aurretik, ez ondoren, erantzun ahal izan behar duen galdera da: kostatzen duena baino balio gehiago
sortzen al du, bermearen, gainbegiratzearen eta arriskuaren kostuak zintzotasunez barne hartuta?

## Zergatik den garrantzitsua

Erresuma Batuko Central Digital and Data Office-ak (CDDO) 2024an argitaratu zuen Generative AI Framework for
Government, 2023ko ekaineko behin-behineko gidan oinarrituta, eta hamar printzipiotan egituratu zuen: AA
sortzailea zer den, haren inplikazio etikoak, tresnen segurtasuna, kalitatea bermatzeko kontrolak, AA sortzailearen
bizi-ziklo osoa kudeatzea, benetako erabilera-kasuak identifikatzea, gobernu osoko lankidetza, gardentasuna,
trebakuntza eta gobernantza. Markoak "giza kontrol esanguratsua" eta bizi-ziklo osoko kudeaketa azpimarratzen ditu,
AA proiektuen negozio-kasuek beste IT gastuek ez duten hutsegite-modu berezi bat dutelako: pilotu baten
produktibitate-zifra nagusia errez sortzen eta errez puztzen da, tresnak sortzen duen egiaztapen-, zuzenketa- eta
gainbegiratze-zama kontuan hartu aurretik neurtzen delako. Markoarekin batera, Algorithmic Transparency Recording
Standard (ATRS) arauak eskatzen die erakunde publikoei erregistro estandarizatu bat argitaratzea —helburua,
erabilitako datuak, errendimendua, bidezkotasun-probak, giza gainbegiratze-antolamenduak— pertsonei buruzko
erabakietan eragin handia duten tresna algoritmikoentzat; horrek AA sistema baten bermearen kostua erregistro
publiko bihurtzen du, talde batek isilean saltatu dezakeen barne-estimazio bat izan beharrean.

## Matematika

AA hartzea [diruaren balioaren](../diruaren-truke-balioa/) ebaluazio estandarraren gehiketa gisa aztertzen da, ez haren
ordezko gisa, AA-ren berezko gaiak esplizitu eginda, "produktibitate-irabazi" zifra bakar batean nahastu gabe:

```
AA sistema baten balio garbia =
    produktibitate-irabazia (aurreztutako denbora × langile-kostu osoa)
  − lizentzia/konputazio kostua
  − giza egiaztapen- eta gainbegiratze-kostua (AA-ren irteera egiaztatzea
    horren arabera jarduteko aurretik — ez da zerora jaisten tresna helduetan ere)
  − ATRS dokumentazio-kostua eta etengabeko monitorizazio-kostua
  − akatsek, alborapenek edo haluzinazioek eragindako kaltearen arriskuaren
    arabera doitutako kostua, kalte hori nork jasaten duen kontuan hartuta
    (distributional-weighting)

Gainbegiratze-terminoa kanpo uzten duen pilotuko produktibitate-zifra ez da
alderagarria jada giza berrikuspen baliokidea barne hartzen duen eguneroko
kostu-oinarri batekin — ikus ai-productivity-in-the-public-sector, hark
ekartzen duen produktibitate-neurketaren diziplina zabalagoa jasotzeko.
```

## Adibide landua

**Tokiko erakunde bat AA sortzailea erabiltzen ari da udal-zergei buruzko ohiko kontsultei lehen erantzunak idazteko**: urtean 25.000 kontsulta, lehen osorik kasu-langileek kudeatzen zituzten, kontsulta bakoitzeko batez beste 14 minutu, langile-kostu osoa £34/ordu.

```
Oinarri-kostua (AA gabe):
  25.000 × (14/60) × £34 = £198.333/urte

Pilotuaren aldarrikapen nagusia: AA-k erantzun bat idazten du 90 segundotan,
kasu-langileak "berrikusi eta bidali besterik ez du egiten" — aldarrikatutako denbora berria 3 minutu
  25.000 × (3/60) × £34 = £42.500/urte
  → aldarrikatutako aurrezpena £155.833/urte (eraldatzailea dirudi)

Kostu osoko zifra, 3 hilabete martxan egon ondoren neurtua, pilotuaren
eskuz aukeratutako proba-kasuetan ez:
  Erantzun bakoitzeko benetako berrikuspen + zuzenketa denbora: 6 minutu
  (zirriborroak benetan editatu behar dira kontsulta konplexuetan edo
  sentikorretan)
  25.000 × (6/60) × £34 = £85.000/urte
  Lizentzia/konputazio kostua: £38.000/urte
  ATRS dokumentazioa eta hiruhileko alborapen/kalitate monitorizazioa: £14.000/urte
  Kostu osoa = 85.000 + 38.000 + 14.000 = £137.000/urte

Benetako aurrezpena = 198.333 − 137.000 = £61.333/urte — benetakoa eta
mantentzea merezi duena, baina pilotuaren zifra nagusiaren erdia baino
dezente gutxiago, eta aurkitzeko gainbegiratze-denboraren neurketa zintzo bat
behar izan zen, ez pilotuaren kasurik onenekoa.
```

## Software ingeniaritzarekin lotura

Hemen elkartzen dira [ai-productivity-in-the-public-sector](../adimen-artifizialaren-produktibitatea-sektore-publikoan/) eta gai hau: zerbitzu publikoetan AA funtzioak eraikitzen dituzten ingeniaritza-taldeek dute adibide landuko zifra "erreala" posible egiten duen instrumentazioa —benetako berrikuspen-denbora, zirriborroaren eta bidalitako erantzunaren arteko edizio-distantzia eta eskalatze-tasa erregistratzea—, pilotuaren demo-baldintzetan fidatu beharrean. AA funtzioak [digital-service-standard](../zerbitzu-digitalen-estandarra/) arauaren 9. puntuaren (zerbitzu segurua, erabiltzailearen pribatutasuna) aurka ebaluatu behar dira, eta [public-sector-cybersecurity-value](../sektore-publikoko-ziberseguritatearen-balioa/) gaiarekin gurutzatu tresnak herritarren datuak ukitzen dituenean; eta pertsonei buruzko erabakietan eragin handia duen edozein AA sistemak ATRS erregistroa behar du ebaluaziorako prest dagoela jotzeko, zerbitzu batek [digital-service-standard](../zerbitzu-digitalen-estandarra/) ebaluazioa gainditu behar duen modu berean martxan jarri aurretik.

## Tranpak

- **AA-garbiketa (AI-washing)**: lehendik dagoen arau-oinarritutako automatizazioa "AA" gisa berrizendatzea AA hartzeko xedatutako finantzaketa edo arreta lortzeko, markoaren ikuskapen gehigarria justifikatzen duten zehaztasun- edo alborapen-arriskurik gabe.
- **Pilotuko produktibitatea neurtzea, ez produkzioko produktibitatea**: pilotuak proba-kasu aukeratuekin eta berrikusle konprometituekin eta adi dabiltzanekin egiten dira; produkzioak kasu-nahasketa osoarekin, eta denborarekin automatizazio-alborapena garatzen duten eta irteerak gutxiegi egiaztatzen dituzten berrikusleekin — biek desitxuratzen dute gainbegiratze-kostuaren zifra zintzoa.
- **ATRS erregistroa saltatzea tresna "ez delako benetan erabaki automatizatua"**: arauaren atalasea pertsona bati buruzko erabakian eragin handia izatea da, eta herritarrei begirako AA zirriborratze- edo sailkatze-tresna gehienek betetzen dute, gizakiak teknikoki sinatzen duenean ere.
- **Akatsen eragin banatzailea ahaztea**: AA sistema baten akats-tasa erabiltzaile guztien artean batez bestekotuta, talde jakin batzuentzako akats- edo alborapen-tasa askoz altuagoa ezkuta daiteke; [distributional-weighting](../banaketa-haztapena/) arriskuaren arabera doitutako kalte-terminoari aplikatu behar zaio, ez zehaztasun-zifra agregatuari bakarrik.

## Iturriak

- Central Digital and Data Office, Generative AI Framework for Government (2024). <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>
- Algorithmic Transparency Recording Standard. <https://www.gov.uk/government/collections/algorithmic-transparency-recording-standard-hub>
- HM Treasury, Green Book: central government guidance on appraisal and evaluation. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-governent>
