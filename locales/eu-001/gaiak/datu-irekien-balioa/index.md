# Datu irekien balioa

Datu irekien balioa gobernuaren eta sektore publikoaren datuak prezio gabe zenbat balio duten
kalkulatzearen arazoa da: ez dira saltzen, beraz ez dago diru-sarrera-lerrorik, baina haiek
argitaratzeak (eguraldi-erregistroak, garraio-ordutegiak, posta-kodeen mugak, enpresa-erregistroak)
nabarmen sortzen du jarduera ekonomiko eta soziala ondoren. Ondo balioestea garrantzitsua da,
"argitaratzea doakoa da" eta "ez du baliorik" biak okerrak direlako, eta API bat edo datu-multzo bat
irekitzea erabakitzen duen software-ingeniariak horietako edozein baino argudio hobea behar duelako.

## Zergatik den garrantzitsua

Goitik beherako estimazio gehien aipatua McKinsey Global Institute-ren 2013ko "Open data: Unlocking
innovation and performance with liquid information" txostenekoa da, zeinak datu irekien urteko
balio potentziala zazpi eremutan —hezkuntza, garraioa, kontsumo-produktuak, elektrizitatea,
petrolioa eta gasa, osasuna eta kontsumo-finantzak— mundu osoan 3 bilioi eta 5 bilioi dolar artean
kokatu zuen urtean, gardentasun handiagoaren, eskaintza eta eskaria modu eraginkorragoan lotzearen eta
datuetan oinarritutako produktu eta zerbitzu berriak ahalbidetzearen bidez. Zifra hori eszenatoki
bateko estimazioa da, ez neurtutako emaitza, eta sarritan gobernuak zuzenean bereganatu ahal lituzkeen
diru-sarrera balira bezala gaizki aipatzen da, balioa gehienbat hirugarrenei egokitzen zaienean —
enpresei, ikertzaileei, herritarrei— datuak erabiltzen dituztenei, eta hori da hain zuzen datuak saldu
beharrean irekitzearen xedea. Erresuma Batuko Open Data Institute-k, Sir Tim Berners-Lee-k eta Sir
Nigel Shadbolt-ek 2012an sortuak, geroztik kasu-azterketa zehatzagoen multzo bat eraiki du, behetik
gorakoak —sektorez sektore, datu-multzoz datu-multzo—, benetako negozio-kasu baterako McKinsey-ren
goiburuko zifra baino askoz erabilgarriagoak, balio-sorkuntzaren mekanismoa erakusten dutelako, ez
bere tamaina agregatua bakarrik.

## Matematika

Datu irekiek ez dute merkatu-prezioa, beraz balioespen-metodoek ordezkatzen dute; hiru ikuspegi
errepikatzen dira, eta bakar bat ere ez da nahikoa bakarrik:

```
1. Saihestutako kostuaren / ordezkapen-kostuaren metodoa:
   balioa ≈ erabiltzaileek datu baliokideak beraiek ekoizteko edo
   lizentziatzeko ordainduko lukeena — beheko muga bat, jatorrizko
   ekoizleak inoiz aurreikusi ez zituen erabileren sortutako balioa
   alde batera uzten du

2. Merkatu-analogiaren / ondorengo jardueraren metodoa:
   balioa ≈ datuetan oinarritutako enpresek/zerbitzuek sortutako
   diru-sarrerak edo aurrezkiak (adib. datu irekietan oinarritutako
   mapa- eta trafiko-datuekin eraikitako nabigazio-aplikazioak) —
   benetako jarduera ekonomikoa jasotzen du baina zaila da datuen
   argitalpenari garbi egoztea (ikus additionality-and-deadweight)

3. Balioespen baldintzatuaren / adierazitako lehentasunen metodoa:
   balioa ≈ erabiltzaileek ordainduko luketela diotena, edo
   aurrezten diela diotena denbora — ikus stated-preference-valuation
   metodo orokorrerako eta bere alborapenetarako

Horietako bakar batek ere ez du merkatu-prezio bat bezain zifra garbirik
ematen; datu irekien negozio-kasu sinesgarriek bi edo gehiago
triangulatzen dituzte, eta esplizitu egiten dute zein mekanismok egiten
duen lana.
```

## Adibide landua

**Mapa/helbide nazionalen datuen argitalpen ilustragarria** (ODI motako kasu-azterketen ondorengo
metodologia, zifrak halako azterketek normalean aurkitzen duten eskalaren adibide):

```
Saihestutako kostuaren estimazioa:
  Bestela helbide-parekatzeko datu baliokideak merkataritza-lizentziaz
  hartuko lituzketen enpresak, batez besteko lizentzia-kostua urtean
  4.000 £ dela estimatuta, datu-multzo ireki doakoa orain erabiltzen
  duten 15.000 ETE-tan
  = 15.000 × 4.000 £ = 60.000.000 £/urte lizentzia-kostu saihestuan bakarrik

Ondorengo jardueraren estimazioa (espekulatiboagoa, kontrafaktuala behar du):
  Datu irekietan oinarritutako banaketa-bideratze eta logistika-produktu
  berriak, hori gabe existituko ez liratekeenak edo nabarmen okerragoak
  izango liratekeenak — datuak itxita edo merkataritza-lizentziapean
  geratuko liratekeen kontrafaktualarekin konparatzea eskatzen du
  (counterfactual-analysis), jarduera horren zati bat hala ere gertatuko
  litzatekeelako ordaindutako datuekin prezio altuagoan, eta hori
  "irekitzeak sortutako balioa" zentzuan pisu hila (deadweight) da

Negozio-kasu defendagarri batek saihestutako kostuaren zifra beheko muga
sendo gisa jakinarazten du, eta ondorengo jardueraren zifra goiko mugako
eszenatoki gisa tratatzen du, ez egitate gisa.
```

## Software ingeniaritzarekin lotura

Ingeniarientzat, datu irekien balioaren galdera praktikoa normalean goiburuko zifra nazionalak baino
estuagoa da: API zehatz hau edo datu-multzo hau irekitzeak (partner-hitzarmen baten atzean
mantentzearen ordez) berrerabilera nahikoa handitzen al du interfaze publiko gisa dokumentatzeko,
bertsionatzeko eta mantentzeko etengabeko kostua justifikatzeko? Mantentze-kostu hori erreala da eta
[gobernua plataforma gisa](../gobernua-plataforma-gisa/) delakoaren behin-eraiki-askotan-berrerabili
ekonomiaren parekoa da — bi gaiak lehengusu hurbilak dira, bata kode eta azpiegitura partekatuei
buruzkoa, bestea datu partekatuei buruzkoa. Datu irekien balioari buruzko edozein baieztapen
[gehigarritasuna eta pisu hila](../gehigarritasuna-eta-pisu-hila/) gaiaren aurka egiaztatu behar da
negozio-kasu batean sartu aurretik: hala ere gertatuko zen jarduera, merkataritza-lizentziadun
datuekin, ez da *irekitzeak* sortutako balioa.

## Tranpak

- **McKinsey-ren 3-5 bilioi dolarreko zifra Erresuma Batuari berariazkotzat edo datu-multzo honen
  zatitzat aipatzea**: 2013ko zazpi sektoreko eszenatoki-estimazio globala da — datu-multzo nazional
  bakar baterako biderkatzaile zehatz gisa erabiltzeak zenbakiaren izaera desitxuratzen du.
- **Kontrafaktualik ez**: datu irekietan oinarritutako ondorengo jarduera ekonomiko guztiaren meritua
  aldarrikatzea, horren zenbat gertatuko zatekeen hala ere ordaindutako edo lizentziadun datuekin
  prezio altuagoan galdetu gabe (ikus [gehigarritasuna eta pisu hila](../gehigarritasuna-eta-pisu-hila/)
  eta [analisi kontrafaktuala](../analisi-kontrafaktuala/)).
- **Ekoizpen-kostua eta sortutako balioa nahastea**: biltzeko garestia izan zen datu-multzo bat ez da
  automatikoki baliotsua argitaratzeko, eta merkea zena ez da automatikoki balio gutxikoa — balioak
  ondorengo erabilera jarraitzen du, ez goranzko kostua.
- **"Irekiaren" etengabeko mantentze-kostua alde batera uztea**: CSV erauzketa puntual bat
  argitaratzea ez da API ireki dokumentatu, bertsionatu eta lagundu bat ustiatzearen konpromiso bera —
  azken hori lantzeko finantzaketa urritzea, abian jartzearen iragarpenaren ondoren, hutsegite ohikoa da.

## Iturriak

- McKinsey Global Institute, "Open data: Unlocking innovation and performance with liquid information" (2013). <https://www.mckinsey.com/business-functions/mckinsey-digital/our-insights/open-data-unlocking-innovation-and-performance-with-liquid-information>
- Open Data Institute. <https://theodi.org/>
