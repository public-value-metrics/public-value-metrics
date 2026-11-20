# Natura-kapitalaren kontabilitatea

Natura-kapitalaren kontabilitateak ingurumena beste edozein aktibo nazional edo erakundeen maila
berean jartzen du: baliabide naturalen stocka (basoak, lurzoruak, ibaiak, hezeguneak, atmosfera) eta
horiek sortzen dituzten zerbitzuen fluxua (karbono-harrapaketa, uholdeen aurkako babesa, aisialdia,
elikagaiak) neurtzen ditu, termino fisikoetan zein monetarioetan, ingurumenaren agortzea erabakiak
hartzean ikusgai izan dadin, kapital finantzarioa kontsumitzea ikusgai litzatekeen moduan. Erresuma
Batua sistematikoki hori egiten gobernu aurreratuenetako bat da, 25 Year Environment Plan-ak (2018)
bultzatuta, eta ONS-ren UK Natural Capital kontuen eta HM Treasury-ren Green Book-aren gida
osagarriaren bidez ezarria.

## Zergatik den garrantzitsua

Kontabilitate konbentzionalak —korporatiboak eta gubernamentalak— baso bat balio gabetzat jotzen du
moztu eta egur gisa saldu arte, orduan BPG bihurtzen da. Natura-kapitalaren kontabilitatea hutsune
hori ixteko dago: Erresuma Batuko 25 Year Environment Plan-ak gobernua natura-kapitalaren
pentsamoldea politika guztietan txertatzera konprometitu zuen, esplizituki "ingurumena aurkitu
genuena baino egoera hobean utziko duen lehen belaunaldia" izateko asmoa adieraziz. ONS-k urtero
UK Natural Capital kontuak argitaratzen ditu geroztik
(<https://www.ons.gov.uk/economy/environmentalaccounts/bulletins/uknaturalcapitalaccounts/latest>),
ekosistema-zerbitzuen balio monetarioa kalkulatuz —basoetako aisialditik hiri-berdeguneen osasun-onuretara
eta zohikaztegien karbono-biltegiratzera— kapital ekoiztuarentzat erabiltzen den Kontu Nazionalen
esparru berean, natura-kapitala noizbait errepideekin, eraikinekin eta ekipamenduarekin balantze berean
egon dadin. HM Treasury-ren Enabling a Natural Capital Approach (ENCA) gidak, Green Book-aren
osagarriak
(<https://www.gov.uk/government/publications/enabling-a-natural-capital-approach-enca-guidance>),
balioesleek ingurumen-kostuak eta -onurak negozio-kasuetan nola balioetsi behar dituzten zehazten du,
baso zahar bat suntsitzen duen errepide-proiektu bat eta hezegune bat leheneratzen duen uholde-proiektu
bat termino monetario koherenteetan konparatu ahal izateko, bati zenbaki bat eta besteari kontuz
ibiltzeko paragrafo bat egokitu beharrean.

## Matematika

```
Ekosistema-zerbitzuen aktiboaren balioa = aktiboak ematen dituen zerbitzu-fluxuaren egungo balio garbia

Aktiboaren balioa = Σ (t = 1 .. T) [urteko zerbitzu-fluxuaren balioa_t / (1 + r)^t]

non:
  zerbitzu-fluxuaren balioa_t = zerbitzuaren kantitatea t urtean × unitate-balioa
                          (adib. aisialdiko bisitak × bisita bakoitzaren balioa;
                           harrapatutako karbono-tonak × karbonoaren prezioa)
  r = deskontu-tasa (Green Book-aren gizarte-deskontu-tasa — ikus
      [gizarte-deskontu-tasa](../gizarte-deskontu-tasa/))
  T = aktiboak zerbitzua emango duela espero den denbora-horizontea
```

Egungo balio garbiaren egitura bera da kapital ekoiztua balioesteko edo edozein inbertsio publiko
[Green Book-aren balioespenaren](../green-book-ebaluazioa/) arabera ebaluatzeko erabiltzen dena —
natura-kapitalaren kontabilitatearen ekarpena da lehen zerotzat prezituta zeuden zerbitzuentzat
kantitate fisiko eta unitate-balio sinesgarriak ematea.

## Adibide landua

**Hiri-basoa, aisialdiaren balioa**: 50 hektareako baso batek urtean 80.000 aisialdi-bisita jasotzen
ditu, bakoitza (bidaia-kostuaren edo adierazitako lehentasunen metodoaren bidez — ikus
[agerian utzitako lehentasunen balioespena](../agerian-utzitako-lehentasunen-balioespena/) eta
[adierazitako lehentasunen balioespena](../adierazitako-lehentasunen-balioespena/)) 3 £-tan balioetsita.
Basoak 50 urtez zerbitzu hori ematen jarraituko duela espero da, % 3,5eko deskontu-tasarekin
balioetsita.

```
Aisialdiaren urteko balioa = 80.000 × 3 £ = 240.000 £/urte

EGBG 50 urtean % 3,5ean ≈ 240.000 £ × errenta-faktorea(% 3,5, 50 urte)
errenta-faktorea(% 3,5, 50) ≈ 21,4

Aktiboaren balioa ≈ 240.000 £ × 21,4 ≈ 5.136.000 £
```

**Karbono-biltegiratzea gehituz**: baso beraren harrapaketa urtean 400 tona CO2 dela kalkulatzen da,
gobernuaren merkaturatu gabeko karbono-prezioan, gutxi gorabehera 75 £/tona (adibide gisa — balioespen
erreal baterako erabili BEIS/DESNZ-k argitaratutako egungo karbono-balioak).

```
Karbonoaren urteko balioa = 400 × 75 £ = 30.000 £/urte
EGBG 50 urtean % 3,5ean ≈ 30.000 £ × 21,4 ≈ 642.000 £

Basoaren aktiboaren guztizko balioa (aisialdia + karbonoa) ≈ 5.136.000 £ + 642.000 £
                                                            ≈ 5.778.000 £
```

Hau da ENCA gidak balioesleei kontuan hartzeko eskatzen dien uholde-moteltzea, biodibertsitatea edo
airearen kalitatearen zerbitzuak gehitu aurretik — guztizkoa nahita lur-zoru bat da, ez sabai bat.

## Software ingeniaritzarekin lotura

- Tokiko erakundeen eta agentzien ingurumen- eta aktibo-kudeaketako sistemek (parkeak, errepideak,
  ur-masak) natura-kapitalaren erregistro bat erants dezakete beren aktibo fisikoen erregistroaren
  ondoan, erakundeak mantentzen duen beste edozein
  [unitate-kostuen datu-basearen](../unitate-kostuen-datu-baseak/) zerbitzu-fluxua-bider-unitate-balioa eredu
  berarekin.
- Natura-kapitalaren egungo balio garbia deskontu-tasarekiko sentikorra denez (ikus adibide landuko
  errenta-faktorea), hori kalkulatzen duen edozein tresnak tasa eta horizontea sarrera ikusgai gisa
  erakutsi behar ditu, ez ezkutatu — [belaunaldien arteko ekitateari eta jasangarritasun-deskontuari](../belaunaldien-arteko-ekitatea-eta-jasangarritasunaren-deskontua/)
  buruzko gaian jorratutako gardentasun-printzipio bera.
- Natura-kapitalaren kontuak gero eta gehiago dira [green-book-appraisal](../green-book-ebaluazioa/)
  negozio-kasu baten ingurumen-ataletarako beharrezko sarrera; negozio-kasuen tresnak eraikitzen
  dituen entrega-talde batek ONS-ren kontuak eta ENCA-ren unitate-balioak txertatu beharreko
  erreferentzia-datu gisa tratatu behar ditu, balioesleek bakoitzean hutsetik berriz kalkulatzen
  duten zerbait gisa ez.

## Tranpak

- **Gainjartzen diren ekosistema-zerbitzuak bi aldiz zenbatzea** — gune bereko aisialdiaren balioak
  eta biodibertsitatearen balioak oinarrizko ordaintzeko borondatearen datuak parteka ditzakete;
  ENCA gidak esplizituki ohartarazten du gainjartzen diren inkesta-tresnetatik eratorritako
  balioespenak ez batzeko.
- **Natura-kapitalaren aktiboaren balioa estatikotzat hartzea** — zerbitzu-fluxuak klimarekin,
  kudeaketarekin eta lurzoru-erabileraren presioarekin aldatzen dira; baso baten karbono- eta
  uholde-moteltze-balioa hamarkada honetan ez da gunearen betiko propietatea.
- **Batez besteko balio nazionalak erabaki oso lokal baterako erabiltzea** — hektarea bat hiri-baso
  irisgarri eta hektarea bat mendi urrun oso aisialdi-balio desberdinekoak dira; ENCA gidak tokiko
  edo gune-balio espezifikoak gomendatzen ditu eskuragarri daudenean, batez besteko nazionaletara
  jo beharrean.

## Iturriak

- ONS. "UK natural capital accounts."
  <https://www.ons.gov.uk/economy/environmentalaccounts/bulletins/uknaturalcapitalaccounts/latest>
- HM Government. "A Green Future: Our 25 Year Plan to Improve the Environment." (2018)
- HM Treasury / Defra. "Enabling a Natural Capital Approach (ENCA): guidance."
  <https://www.gov.uk/government/publications/enabling-a-natural-capital-approach-enca-guidance>
