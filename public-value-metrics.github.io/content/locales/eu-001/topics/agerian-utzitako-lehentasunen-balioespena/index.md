# Agerian utzitako lehentasunen balioespena

Agerian utzitako lehentasunen metodoek merkatuz kanpoko ondasun baten balioa erlazionatutako merkatu
bateko jokabide behagarritik ondorioztatzen dute, jendeari zuzenean galdetu beharrean. Prezio hedonikoak
eta bidaia-kostuaren metodoa dira bi lan-tresna nagusiak: biak benetako transakzio batetik hasten dira
eta inoiz zuzenean saldu ez den horretarako prezio inplizitu bat ateratzen dute.

## Zergatik den garrantzitsua

[Adierazitako lehentasunen](../adierazitako-lehentasunen-balioespena/) metodoek galdera hipotetiko bat egiten duten
bitartean, agerian utzitako lehentasunen metodoek jendeak benetan zer ordaindu zuen behatzen dute, eta
Green Book-ak, gainerakoa berdin izanik, orokorrean ebidentzia sinesgarriagotzat jotzen du, alborapen
hipotetikoari ez baitago lotuta — etxebizitza-prezioen azterketa hedoniko bateko inkestatuek benetan
ordaindu zuten neurtzen ari den prima edo deskontua
(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>,
2. eranskina). Prezio hedonikoak merkatu-prezioa —normalean etxebizitza-prezioak— ondasunaren atributu
bakoitzaren prezio inplizituetan deskonposatzen du, analistei, adibidez, familiek leku isilagoan edo airearen
kalitate hobean bizitzeko benetan ordaintzen duten prima isolatzen uzten die, etxebizitza-prezioari
eragiten dioten gainerako atributu guztiak estatistikoki kontrolatuz (tamaina, kokapena, eskola-eremua).
Bidaia-kostuaren metodoak gauza bera egiten du sarrera-tasarik gabeko aisialdi-guneetarako: gune batera
joateko erabilitako denborak eta diruak jendearentzat gunearen balioaren beheko muga bat agerian uzten
du, inork ez baitu bisitak berarentzat balio duena baino kostu handiagoa jasaten.

Bi metodoek egiturazko muga bat partekatzen dute: lehendik dagoen merkatu-transakzio batean txertatuta
dagoena bakarrik balioetsi dezakete. Pistaren ondoko zarata etxebizitza-prezioetan agertzen da zarataz
axolatzen diren pertsonak etxebizitza isilagoetara sailkatzen direlako; inork bisitatzen edo ondoan
bizi ez den espezie baten existentzia-balioa ez da transakzio batean ere agertzen, eta hori da hain zuzen
[adierazitako lehentasunen](../adierazitako-lehentasunen-balioespena/) metodoek betetzen duten hutsunea.

## Matematika

```
Prezio hedonikoa:
  Etxebizitzaren prezioa = f(egiturazko atributuak, kokapen-atributuak,
                   interesatzen zaigun ingurumen-atributua, ...)
  Erregresioaren bidez estimatu; ingurumen-atributuaren koefizientea
  (gainerako guztia konstante mantenduta) bere prezio inplizitua da.

  X atributuaren prezio inplizitua = ∂(Etxebizitzaren prezioa) / ∂X

Bidaia-kostuaren metodoa:
  Bisita-tasa (i eskualdeko biztanleko bisitak) = f(i eskualdetik bidaia-kostua,
                   ordezko guneak, kontrol sozioekonomikoak)
  Bisiten eskari-kurba bat estimatu bidaia-kostuaren funtzio gisa.
  Kontsumitzailearen soberakina = estimatutako eskari-kurbaren azpiko area
                                = guneak bisitariengan duen balioa
```

Bi metodoek kontrol-multzo estatistikoki sendoa behar dute — nahasle den atributu bat (hedonikoan) edo
inguruko gune ordezko bat (bidaia-kostuan) kanpoan uzteak prezio inplizitua aurrez beti agerikoa ez den
norabide batean alborapenatzen du, horregatik eskatzen du Green Book-aren 2. eranskinak erregresio-espezifikazioa
eta kontrolak jakinaraztea, ez goiburuko koefizientea bakarrik.

## Adibide landua

**Gobernu nazionala**: Green Book-aren karbonoaren itzal-prezioaren metodologiak zati batean ebidentzia
hedonikoa erabiltzen du, baina kasu ilustragarri sinpleagoa hegazkinen zarata da. Hegaldi-bidearen eremuko
etxeen salmenta-prezioak distantziaz pisatutako zarata-esposizioaren aurka, tamaina, antzinatasuna eta
eskola-eremua kontrolatuz, erregresioan jartzen dituen azterketa hedoniko batek aurkitzen du batez besteko
zarata-esposizioaren 1 deziberioko igoera bakoitza etxebizitza-prezioaren % 0,5eko murrizketarekin lotuta dagoela.
Eragindako eremuko 280.000 £-ko etxe tipiko batentzat:

```
Dezibelioko prezio inplizitua = 280.000 £ × % 0,5 = 1.400 £ familia bakoitzeko
Pista berri batek eragindako 3 dB-ko igoerak eragindako familiak = 18.000
Zarata-igoeraren kostu inplizitu agregatua = 1.400 £ × 3 × 18.000 = 75,6 M£
```

Hau behin-betiko kapitalizatutako kostu bat da (etxebizitza-prezioan txertatua), eta balioespenak kontuz
ibili behar du bereizita estimatutako urteko zarata-eragozpenaren kostu-fluxuaren aurka bi aldiz ez
zenbatzeko.

**Karitatea**: ingurumen-karitate batek bidaia-kostuaren metodoa erabiltzen du sarrera doako natura-erreserba
bat balioesteko. Bisitarien posta-kodeei buruzko inkesta-datuek bisita bakoitzeko batez besteko joan-etorriko
bidaia-kostua ematen dute (denbora Green Book-ak gomendatutako lanez kanpoko denboraren balioarekin balioetsita,
gehi erregaia) 14 £, urtean 40.000 bisitarekin. Estimatutako eskari-kurbak —bisita-tasak eskualde bateko
bidaia-kostua igotzean jaisten direla— bisita bakoitzeko kontsumitzailearen soberakin bat dakar,
benetan gastatutako 14 £-ren gainetik, 9 £ ingurukoa.

```
Urteko balio osoa = 40.000 bisita × (14 £ gastatuta + 9 £ kontsumitzailearen soberakina)
                  = 40.000 × 23 £ ≈ 920.000 £/urte
```

Honek erreserbaren sarrera-tasa nuluko diru-sarrera gainditzen du eta karitatearen patronatuei
gunearen aisialdi-balioaren zifra defendagarria ematen die finantzatzaileei kasua aurkezteko.

## Software ingeniaritzarekin lotura

Agerian utzitako lehentasunen pentsamoldea sektore publikoko produktu-analitikan profesionalek uste
baino maizago agertzen da: gobernuko zerbitzu digital doako baten erabilera-datuak berak balioaren
agerian utzitako lehentasunen ebidentzia dira (maiztasuna, saioaren iraupena eta —adierazgarriena—
errepikatutako eta puntuala erabilera-ereduak bidaia-kostuaren eredu batek bisita-maiztasuna distantziaren
aurka tratatzen duen modu berean azter daitezke). Zerbitzu batek benetako ordezkoak dituenean (paperezko
kanala, telefono-linea), herritarrek kanal digitala erabiltzeko jasaten duten "kostua" (denbora, datuak,
gailu bat) estima eta erabilerarekin konpara daiteke, bidaia-kostuaren logika zuzenean oihartzun eginez.
Ikus [zerbitzu digitalaren estandarra](../zerbitzu-digitalen-estandarra/) eta
[datu irekien balioa](../datu-irekien-balioa/), merkatu-prezio zuzenik gabeko ondasun baterako balioespen-arazo
berari aurre egiten diona.

## Tranpak

- **Aldagai-omisioaren alborapena eredu hedonikoetan.** Atributu korrelatu bat kanpoan uzteak
  (eskolaren kalitatea, etxebizitza-prezioarekin eta interesatzen zaigun ingurumen-aldagaiarekin
  korrelazionatuta) prezio inplizituaren estimazioa alborapenatzen du; espezifikazioa jakinarazi eta
  aztertu behar da, ez emaitza bakarrik.
- **Bidaia-kostuko azterketetan ordezko guneak alde batera uztea.** Bisitari baten gune batentzako agerian
  utzitako balioa gutxietsita dago gertuagoko ordezko bat badago eta kontrolatzen ez bada — agian
  doakoa delako bisitatzen du batez ere, ez bereziki baliotsua delako.
- **Agerian utzitako lehentasunak merkatu-oihartzunik gabeko ondasun bati aplikatzea.** Existentzia-balioak,
  aukera-balioak eta ondare-balioak ez dira transakzio batean agertzen eta ezin dira metodo hedonikoen edo
  bidaia-kostuaren bidez berreskuratu — hutsune hori [adierazitako lehentasunen balioespenari](../adierazitako-lehentasunen-balioespena/) dagokio.
- **Kapitalizatutako (puntuala) balioa urteko fluxuarekin nahastea.** Etxebizitza-prezioen efektu hedonikoak
  normalean kapitalizatutako balio puntualak dira; urteko onura-fluxu gisa tratatzeak balioespena puztu egiten du.

## Iturriak

- HM Treasury. "The Green Book," Annex 2: valuing non-market impacts.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Department for Transport / Civil Aviation Authority. Aircraft noise valuation studies used in
  airport appraisal. <https://www.gov.uk/guidance/aviation-noise>
- Rosen S. "Hedonic Prices and Implicit Markets: Product Differentiation in Pure Competition."
  Journal of Political Economy, 1974.
- Clawson M, Knetsch JL. "Economics of Outdoor Recreation." Johns Hopkins University Press, 1966
  (origin of the travel-cost method).
