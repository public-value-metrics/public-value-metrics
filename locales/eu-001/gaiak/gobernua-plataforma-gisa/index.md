# Gobernua plataforma gisa (GaaP)

Gobernua plataforma gisa (Government as a Platform) osagai partekatu eta berrerabilgarriak —jakinarazpen-zerbitzu bat, ordainketa-zerbitzu bat, identitate-zerbitzu bat— behin bakarrik eta zentralki eraikitzeko estrategia da, ehunka gobernu-zerbitzuk bakoitzak berea eraiki beharrean horiek kontsumi ditzaten. Azpiegitura digital publikoa plataforma-ekonomiaren arazo gisa birformulatzen du: balioa ez dago integrazio bakar batean, hura hartuko duen *hurrengo* taldearen kostu marjinala zerorantz joatean baizik.

## Zergatik den garrantzitsua

GDSk estrategia formalki 2015eko «Government as a Platform» argitalpenean azaldu zuen, gobernuak gaitasun berak —ordainketak jasotzea, erabiltzaileei jakinaraztea, identitatea egiaztatzea, helbideak bilatzea— zerbitzu batean eta bestean bereizita eraikitzen ari zela argudiatuz, bakoitzak bere erosketa, segurtasun-ebaluazio eta etengabeko laguntza-zama zuela. Alternatiba plataforma partekatu gutxi batzuk ziren, behin maila altuan eraikiak eta nonahi berrerabiliak: GOV.UK Notify posta elektronikoak, testu-mezuak eta gutunak bidaltzeko, GOV.UK Pay lineako ordainketak jasotzeko, eta GOV.UK One Login (lehenagoko GOV.UK Verify identitate-programaren ondorengoa) identitatea egiaztatzeko. Plataforma hauek erdietsi duten eskalak estrategiak funtzionatu duela erakusten du argien: GOV.UK Pay-k £10.000 milioitik gora transakzio prozesatu ditu 1.800 zerbitzu inguruan —eta lehen £1.000 milioiak prozesatzeko lau urte inguru behar izan bazituen, orain kopuru bera bost hilabete inguruan prozesatzen du—, eta GOV.UK Notify-k 9.000 milioi mezu baino gehiago bidali ditu 1.500 gobernu-erakunde baino gehiagoren izenean. Zerbitzu hartzaile horietako bakoitzak bere ordainketa-pasabidea edo mezularitza-pipeline-a eraikitzea, babestea eta mantentzea saihestu zuen.

## Matematika

```
Eraikuntza-kostua zerbitzu bakoitzeko (plataformarik gabe) = N zerbitzu × ordainketa/jakinarazpen/identitate
  sistema bat eraikitzeko, segurtasun-ebaluatzeko eta ustiatzeko kostua

Plataformaren kostua = plataformaren eraikuntza-kostu finkoa
                     + kostu marjinala hartzaile-zerbitzu bakoitzeko (integrazioa,
                       konfigurazioa, plataforma-taldearen etengabeko laguntza)

Berrerabilera errentagarria da honakoan:
  plataformaren eraikuntza-kostua < N × (zerbitzu bakoitzeko eraikuntza-kostua − kostu
  marjinala integrazioa)

Plataforma helduan, hartzaile gehigarri bakoitzeko kostu marjinala
transakzio/mezu-tarifara soilik hurbiltzen da — kostu finkoa gobernu-egitura osoan
amortizatzen da, ez ministerio bakar baten aurrekontuan, eta horregatik
GaaP osagaiak zentralki finkatzen dira normalean, lehen hartzaileei kostua
osorik berreskuratzeko kobratu beharrean.
```

## Adibide landua

**Tokiko erakundea GOV.UK Pay hartzen ordainketa-pasabidea eraiki beharrean**:

```
Norberak eraikitzeko estimazioa:
  PCI-DSS betetze-lana + integrazioa + etengabeko mantentzea
  ≈ £85.000 eraikuntza + £22.000/urte mantentzea

GOV.UK Pay hartzea:
  Integrazio-ahalegina ≈ £12.000 (garatzaileen denbora)
  Transakzio-tarifak: gobernutik herritarrera txartel-ordainketak normalean
  ehuneko txiki bat + transakzio bakoitzeko tarifa finko bat kobratzen dira, kontseiluak
  PCI-DSS zama bereizirik eraman gabe
  ≈ £12.000 behin, etengabeko kostua bolumenaren arabera aldakorra, ez finkoa

Lehen urteko aurrezkia ≈ £85.000 − £12.000 = £73.000, saihestutako
£22.000/urteko mantentzea eta txartel-datuak kontseilu-sistema batean
edukitzearen saihestutako betetze-arriskua kontatu gabe — bigarren kategoria hau
public-sector-cybersecurity-value gaian jorratutako segurtasun-balioa da.
```

£73.000 hori orain GOV.UK Pay erabiltzen duten 1.800 zerbitzu ingurura eskalatuz gero, gobernu osoan saihestutako eraikuntza-kostu agregatua ehunka milioitan dago: estrategiaren balioa benetan plataforma-ekonomian dago, ez integrazio bakar batean.

## Software ingeniaritzarekin lotura

Gobernua plataforma gisa [gobernuan eraiki ala erosi](../eraiki-ala-erosi-gobernuan/) gaiaren aldeko argudio zuzena da: osagai partekatu, ebaluatu eta ondo kudeatu bat existitzen denean, neurrira egindako baliokide bat eraikitzea oso gutxitan da [diruaren truke lortutako balio](../diruaren-truke-balioa/) aukera hobea, eta [zerbitzu digitalen estandarraren](../zerbitzu-digitalen-estandarra/) 13. puntuan («erabili eta lagundu estandar irekiei, osagai komunei eta ereduei») huts egiten du ia definizioz. [Jabetza-kostu osoaren](../jabetza-kostu-osoa-gobernuko-it-an/) forma ere aldatzen du: plataformaren hartzeak kapital- eta mantentze-lerro handi bat ordezkatzen du erabilerari lotutako ustiapen-kostu txikiago batekin, aurreikusten errazagoa eta zerbitzu bat desaktibatzen bada kentzen errazagoa. Osagaien berrerabilera irekiak lehengusu bat du [datu irekien balioan](../datu-irekien-balioa/): biak gobernuak behin sortzen duen zerbait ministerio-aktibo gisa baino azpiegitura partekatu gisa tratatzeko estrategiak dira.

## Tranpak

- **Itzaleko berreraikuntza**: taldeek isilean beren ordainketa- edo jakinarazpen-integrazioa eraikitzen dute plataformaren sarrera-prozesua beraiek egitea baino motelagoa delako; gobernantza-marruskadura arazoa da, ez teknologikoa, eta isilean higatzen du estrategia osoak oinarritzen duen berrerabileraren ekonomia.
- **Plataforma-taldea sortzen duen balioarekin alderatuta gutxiegi finantzatzea**: balioa kontsumitzen duten ministerioetan pilatzen da eta kostua plataforma-taldean, eta horrek azpiinbertsio kroniko bat sortzen du finantzaketa zentralizatu eta babestua ez bada; amankomuneko tragediaren bertsio bat.
- **Plataformaren arrakasta erabilera hutsarekin neurtzea**: hartze-zenbakiak (sartutako zerbitzuak, bidalitako mezuak) adierazle aurreratua dira, ez balioaren froga; benetako proba goiko saihestutako eraikuntza-kostuaren eta saihestutako arriskuaren aritmetika da.
- **«Plataforma» eta «monolito» sinonimotzat hartzea**: GaaP osagaiek arrakasta dute bakoitzak gauza bat ondo egiten duelako interfaze estu eta egonkor batekin; lotuta ez dauden gaitasunak «plataforma» bakar batean bilduz gero, neurrira eraikitzearen arazoa beste eskala batean birsortzen da.

## Iturriak

- Government Digital Service, Government as a Platform. <https://www.gov.uk/government/publications/government-as-a-platform>
- GOV.UK Notify. <https://www.notifications.service.gov.uk/>
- Government Digital Service blog, "GOV.UK Pay at 10: how it started and how it's going". <https://gds.blog.gov.uk/2026/09/02/gov-uk-pay-at-10-how-it-started-and-how-its-going/>
