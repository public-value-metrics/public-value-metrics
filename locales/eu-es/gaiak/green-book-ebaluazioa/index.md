# Green Book ebaluazioa (bost kasuen eredua)

Green Book HM Treasury-ren gida derrigorrezkoa da Erresuma Batuko gobernuaren gastu-proposamenak ebaluatzeko. Bere tresna nagusiak, bost kasuen ereduak, negozio-kasu bat bost galdera bereizi erantzutera behartzen du —ideia ona al da, balioa ematen al du, eros al daiteke, ordain al daiteke, eta eman al daiteke— ministro batek onartzeko zenbaki bakar batean dena tolestu beharrean.

## Zergatik den garrantzitsua

Ministerioen eskuordetutako mugak gainditzen dituen Erresuma Batuko gobernu zentraleko gastu-proposamen orok Green Book ebaluazioa gainditu behar du finantzaketa askatu aurretik, eta HM Treasury-ren Green Book Review 2020-k (prozesua eskualde pobreen aurka alboratua zela kritikatu ondoren argitaratua, ikus <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>) zorroztu zuen aukerak benetako «gutxieneko» (do minimum) oinarrizko egoerarekin alderatzeko eskakizuna eta diruaren truke lortutako balioa ebaluatu aurretik egokitasun estrategikoa frogatzea. Bost kasuen eredua bera Green Book baino zaharragoa da —Office of Government Commerce-n sortu zen negozio-kasuaren egitura estandar gisa—, baina 2022ko Green Book edizioak derrigorrezko forma gisa txertatzen du Treasury-ren onespena bilatzen duen edozein negozio-kasutarako: <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>.

Kasua bost zatitan banatzearen helburua da proposamen batek dimentsio bakar batean huts egin dezakeela besteak edozein direla ere. IT birplataforma estrategikoki sendoak eta kostu-eraginkorrak huts egin dezake kasu komertzialean hornitzaile bakar batek bakarrik eman badezake (eskaintza bakarreko arriskua sortuz), edo kudeaketa-kasuan ministerioak tamaina horretako programak emateko aurrekaririk ez badu. «Diruaren truke lortutako balio» puntuazio bakar batek hutsegite-modu hori ezkutatzen du hain zuzen.

## Matematika

Bost kasuen eredua egitura bat da, ez formula bat, baina kasu bakoitzak bere proba kuantitatibo edo ebidentzialak ditu:

```
1. Kasu estrategikoa
   Erakundearen estrategiari lotutako gastu-helburuaren frogak.
   Proba: aldaketarako kasurik badago? («ez ezer egin» beti da aukera.)

2. Kasu ekonomikoa
   Aukeren ebaluazioa «gutxieneko» oinarri baten aurka, gizarte-kostu-onura
   analisia edo kostu-eraginkortasunaren analisia erabiliz.
   Proba: zein aukerak maximizatzen du balio publiko garbia?
   Ikus ../social-cost-benefit-analysis/ eta ../cost-effectiveness-analysis-in-government/

3. Kasu komertziala
   Merkatu-konpromisoa, erosketa-bidea, erosle eta hornitzailearen arteko arriskuen esleipena.
   Proba: aukera hobetsia baldintza onargarrietan eros al daiteke?

4. Kasu finantzarioa
   Ministerioaren aurrekontu-mugen barruko ordaingarritasuna, finantzaketa-iturria,
   balantzearen tratamendua.
   Proba: ordain dezakegu, aurten eta ondorengo urte guztietan?

5. Kudeaketa-kasua
   Gobernantza, proiektu-plana, onuren gauzatze-plana, arrisku-erregistroa.
   Proba: erakunde honek benetan eman al dezake?
   Ikus ../benefits-realization/
```

Kasu ekonomikoan bizi da ebaluazio kuantitatiboa: aukerak [gizarte-deskontu-tasaren](../gizarte-deskontu-tasa/) arabera doitutako egungo balio garbiaren oinarrian alderatzen dira, [gizarte-kostu-onura analisiaren](../gizarte-kostu-onura-analisia/) metodoa erabiliz, edo, onurak zintzotasunez monetizatu ezin direnean, [kostu-eraginkortasunaren analisiaren](../kostu-eraginkortasunaren-analisia-gobernuan/) edo [irizpide anitzeko erabaki-analisiaren](../irizpide-anitzeko-erabakien-analisia/) bidez.

## Adibide landua

**Tokiko erakundea**: £12 milioiko etxebizitza-konponketen IT sistema ebaluatzen ari den kontseilu batek bost kasuak honela egiten ditu. Kasu estrategikoa: konponketen atzerapenak etxebizitza duinen lege-estandarra hausten du esku-hartzerik gabe 18 hilabetean. Kasu ekonomikoa: hiru aukera kostatuak 10 urteko ebaluazio-aldian %3,5eko deskontu-tasarekin (2022ko Green Book-aren gizarte-denbora-lehentasun tasa estandarraren arabera): «gutxienekoa» (legacy sistema adabaki, EGBG −£4,1m), «erosi» (COTS plataforma, EGBG +£2,3m), «eraiki» (neurrira plataforma, EGBG +£0,6m softwarea garatzeko %40ko baikortasun-alborapena deskontatu gabeko kapital-kostuari aplikatuta, Green Book-eko A eranskinaren arabera). Erostea irabazten du kasu ekonomikoan. Kasu komertziala: bi hornitzaile bideragarri daude, lehiaketa publikoa bideragarria da: gainditzen du. Kasu finantzarioa: kapitala Public Works Loan Board-etik eskuragarri, diru-sarrera-kostuak epe ertaineko finantza-planean sartzen dira: gainditzen du. Kudeaketa-kasua: kontseiluak azken bost urteetan antzeko bi sistema eman ditu: gainditzen du. Proposamenak «erosi» aukerarekin aurrera egiten du.

**Gobernu zentraleko ministerioa**: kasu ekonomiko sendoa duen proposamenak (EGBG +£40m), baina akreditazio garrantzitsua duen hornitzaile bakarra egonda, kasu komertzialean huts egiten du lehia-tentsioaren probarako; eskaintza bakarreko salbuespena (bere ikuskapen-zamarekin) edo espezifikazioaren birdiseinua behartzen ditu merkatua irekitzeko; kasu ekonomikoak bakarrik ez zuen inoiz hori azaleratuko.

## Software ingeniaritzarekin lotura

Gobernuko edo dirulaguntzaz finantzatutako erakundeetako ingeniaritza-taldeek kasu ekonomikoa bakarrik ikusi ohi dute, produktu- eta ingeniaritza-zuzendaritzei justifikatzeko eskatzen zaien zatia delako («zein da migrazio honen ROI?»). Baina Treasury-ren edo dirulaguntza-batzorde baten iragazkia gainditzen duen negozio-kasu batek bost behar ditu, eta ingeniariak sarritan dira kasu komertziala (benetan eros al daiteke, edo hornitzaile baten formatu jabedunean blokeatzen gaitu?) eta kudeaketa-kasua (entrega-gaitasuna al dugu, edo hiru pertsona zehatzek alde ez egitearen mende dago?) erantzuteko pertsona onenak. Tratatu «negozio-kasuko zenbakiak bakarrik» eskaera benetako erabakiaren bosten bati buruzko eskaera gisa. Ikus [diruaren truke lortutako balioa](../diruaren-truke-balioa/) kasu ekonomikoaren irteera nola laburtzen den jakiteko, eta [jabetza-kostu osoa](../jabetza-kostu-osoa-gobernuko-it-an/) kasu finantzarioaren ohiko muin kuantitatiborako.

## Tranpak

- **Kasu ekonomikoa lehenik idaztea eta kasu estrategikoa harekin bat etortzeko moldatzea.** Green Book Review 2020-k hutsegite-modu hori aurkitu zuen ebaluazioaren alborapena dagoeneko ondo frogatutako leku eta sektoreetara bultzatzen, eskualde-desberdintasuna sendotuz; kasu estrategikoak helburua ezarri behar du aukerak alderatu aurretik.
- **«Gutxienekoa» «ezer ez egitea» bezala tratatzea.** Oinarri egokia lege- edo segurtasun-betebehar minimoak oraindik betetzen dituen kostu txikieneko aukera da, ez zero gastuaren fantasia; zero literalaren aurka alderatzeak aukera guztien itxurazko balioa puztzen du.
- **Kasu komertziala eta kudeaketa-kasua saltatzea kasu ekonomikoa sendoa delako.** EGBG handiko proposamen bat, lehiakortasunez erosi ezin dena edo babesle-erakundeak eman ezin duena, ez da finantza daitekeen proposamena; Treasury-ren berrikusleek ohiko moduan baztertzen dute arrazoi horiengatik, kasu ekonomiko konbentzigarria izan arren.
- **Bost kasuen eredua behin bakarrik aplikatzea, hasieran.** Green Book-ak eskatzen du kasua ondorengo onarpen-ate bakoitzean (kasu estrategiko-eskema, negozio-kasuaren eskema, negozio-kasu osoa) berrikustea kostuak eta frogak finkatu ahala; eskema-fasean izoztutako kasuak geroko ate batek harrapatuko lukeen kostu-eskalada galtzen du.

## Iturriak

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury. "Green Book Review 2020: findings and response." 2020.
  <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>
- HM Treasury / Infrastructure and Projects Authority. "Guide to developing the project business
  case." <https://www.gov.uk/government/publications/project-business-case-guide>
