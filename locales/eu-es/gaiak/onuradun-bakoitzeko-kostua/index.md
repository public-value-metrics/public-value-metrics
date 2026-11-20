# Onuradun bakoitzeko kostua

Onuradun bakoitzeko kostua programaren kostu osoa zerbitzu bat jaso duten pertsona bakarren kopuruaz zatituta da — ukitutako edonor, haien egoera benetan aldatu den ala ez kontuan hartu gabe. Erakunde batek ekoitz dezakeen eraginkortasun-zenbaki azkarrena da, "nori eman diogu zerbitzua" ia beti kasu-kudeaketako sisteman baitago jada, eta "nori lagundu zaio" normalean ez.

## Zergatik den garrantzitsua

Finantzatzaileek etengabe eskatzen dute onuradun bakoitzeko kostua, arrazoi justifikagarriengatik: berehala eskuragarri dago, oso programa desberdinen portfolio batean alderagarria da, eta irismenari buruz zintzoa da, emaitza-aldarrikapenak —egiaztatzeko denbora gehiago behar dutenak eta errazago puztzen direnak— ez diren moduan. UK Charities SORP-ak (Statement of Recommended Practice), karitate-erakundeek FRS 102 arabera nola jakinarazten duten arautzen duenak, patronatuen urteko txostenek helburuen aurkako lorpenak deskriba ditzatela eskatzen du, baina karitate-erakunde txikien kudeaketa-kontu gehienek oraindik irismenean oinarritutako unitate-kostuetara jotzen dute lehenespenez, ekoizteko merkeak eta auditoretzarako errazak direlako.

Arriskua da onuradun bakoitzeko kostua erantzun ezin duen galderari erantzuten diola bezala tratatzea: diruak funtzionatu duen ala ez. Ikus [emaitza bakoitzeko kostua](../emaitza-bakoitzeko-kostua/) horri benetan erantzuten dion metrikarako, eta [emaitzak vs irteerak](../emaitzak-eta-irteerak/) azpiko bereizketarako. Onuradun bakoitzeko kostua sailkapen- eta irismen-metrika zilegia da —finantzatzaile bati dirua zenbat luzatzen den esaten dio—, baina onuradun bakoitzeko kostu baxuak eraginkortasun benetakoa esan nahi dezake edo ezer aldatzen ez duen zerbitzu mehe bat.

## Matematika

```
Onuradun bakoitzeko kostua = Programaren kostu osoa / Zerbitzatutako pertsona bakar kopurua

Kontrastea:
Emaitza bakoitzeko kostua = Programaren kostu osoa / Definitutako emaitza lortzen duten pertsona kopurua

Onuradun bakoitzeko kostua beti da ≤ emaitza bakoitzeko kostua, emaitza-biztanleria
onuradun-biztanleriaren azpimultzoa (sarritan txikia) delako.
```

## Adibide landua

**Elikagai-bankua, emaitza bakoitzeko kostuaren adibideko urte bera**:

- Programaren kostu osoa: £450.000
- Zerbitzatutako etxe bakarrak (hiru pakete edo gehiago): 1.800

```
Onuradun bakoitzeko kostua = £450.000 / 1.800 = £250 zerbitzatutako etxe bakoitzeko
```

Alderatu bi metrikak elkarren ondoan:

| Metrika | Izendatzailea | Emaitza |
|---|---|---|
| Onuradun bakoitzeko kostua | 1.800 etxe zerbitzatu | £250 |
| Emaitza bakoitzeko kostua | 630 etxek elikadura-segurtasuna lortzen dute | £714 |

£250 bakarrik ikusten duen finantzatzaile batek ondorioztatu dezake karitate-erakunde oso eraginkorra dela. Bi zenbakiak ikusten dituen batek galdera erabilgarriagoa egin dezake: irismenaren (1.800) eta emaitzaren (630) arteko hutsunea datu-bilketa-hutsunea al da, diseinu-hutsunea, edo elikadura-segurtasuna janari-laguntzarekin bakarrik lortzea zein zaila den islatzen duen isla zintzoa?

**Lan-prestakuntzako karitate-erakundea, adibide ilustratiboa**: onuradun bakoitzeko kostua (matrikulatua) = £2.000; emaitza bakoitzeko kostua (6 hilabetera enplegu iraunkorra) = £11.000, matrikulatuen %18k bakarrik osatzen baitu programa eta lan iraunkorra aurkitzen baitu. Bi zenbakiek faktore bost batez aldentzea ohikoa da osatze- edo iraunkortasun-tasak baxuak diren guztietan — prestakuntza-karitatea eta elikagai-bankua egituraz berdinak dira hemen.

## Software ingeniaritzarekin lotura

Onuradun bakoitzeko kostua irabazi-asmorik gabeko softwareko lehenespeneko metrika da, onuradun-erregistro batetik beste lanik gabe ateratzen den metrika delako: sortu kasu bat, erregistratu zerbitzu bat, zenbatu errenkadak. Emaitza bakoitzeko kostua ere onartzen duen sistema bat eraikitzeak esan nahi du nahita bigarren lehen mailako entitate bat gehitzea —emaitza-gertaera bat, zerbitzu-entregatik independenteki datatua eta definitua— eta "kasua itxita" "emaitza lortuta" ordezkatzeko tentazioari aurre egitea. Diru-laguntzen kudeaketa- edo CRM plataforma bat mugatzean, galdetu zein metrika erakusten ari den panel bakoitzak, eta etiketatu horren arabera; bi metrikak "inpaktu" lauki bakar batean nahastea da beheko tranpen software-mailako kausa ohikoenetako bat. Ikus [unitate-kostuen datu-baseak](../unitate-kostuen-datu-baseak/) edozein metrika behar bezala etiketatuta dagoenean erreferentzia-konparaziorako.

## Tranpak

- **Onuradun bakoitzeko kostua inpaktu gisa aurkeztea.** Irismena neurtzen du, ez aldaketa. Etiketatu panelak eta txostenak "zerbitzatutako pertsona bakoitzeko kostua", ez "lagundutako pertsona bakoitzeko kostua".
- **Programen artean bi aldiz kontatzea.** Karitate-erakunde beretik janari-paketeak eta zor-aholkularitza jasotzen dituen pertsona bat onuradun bat da, ez bi, izendatzailea irismen bakarra deskribatzeko bada; erabaki eta dokumentatu zein konbentzio erabiltzen den.
- **Zenbaki baxuagoa beti hobea dela tratatzea.** Bazkaltzeko gune irekiak beti irabaziko dio kasu-kudeaketa intentsiboko zerbitzu bati onuradun bakoitzeko kostuan, norbait arin ukitzea merkeagoa delako. Horrek ez du ezer esaten libra bakoitzeko aldaketa iraunkorragoa zeinek sortzen duen.
- **Izendatzaileak txostenen artean isilean aldatzea.** Urteko txosten batean "matrikulatuen" aurka eta hurrengoan "osatuen" aurka aipatutako onuradun bakoitzeko kostu bat ez da urtetik urtera alderagarria; adierazi izendatzailea aldi oro.

## Iturriak

- Charity Commission for England and Wales, guidance on charity reporting. <https://www.gov.uk/government/organizations/charity-commission>
- Charities SORP (FRS 102). <https://www.charitysorp.org/>
- New Philanthropy Capital (NPC), "Four Pillar Approach." <https://www.thinknpc.org/resource-hub/four-pillar-approach/>
