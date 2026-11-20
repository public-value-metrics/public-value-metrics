# Sektore publikoko KPI-ak

Errendimenduaren funtsezko adierazlea (key performance indicator, KPI) zerbitzu publiko batek bere lana
ondo egiten ari den ala ez adierazten duen aukeratutako eta jarraitutako neurri bat da. Gobernuan KPI baten
aukeraketa ez da inoiz neutroa: KPI-ak aurrekontuei, sailkapen-taulei eta ibilbide profesionalei
lotzen zaizkienez, bat hautatzeak ondorengo guztien jokabidea moldatzen du, askotan zerbitzua
sortu zuen politikak baino gehiago.

## Zergatik den garrantzitsua

Charles Goodhart-ek 1975ean politika monetarioaz egindako behaketa —geroago Marilyn Strathern-ek
"neurri bat helburu bihurtzen denean, neurri on izateari uzten dio" gisa hedatua— sektore publikoko
errendimenduaren kudeaketan dagoen abisu-etiketa garrantzitsuena da. Sistema bat *deskribatzeko*
aukeratutako KPI batek sistema hori *desitxuratzen* hasten da baliabideak, ordainsariak edo
biziraupen politikoa harekin lotzen diren unean. Adibide kanonikoa NHS anbulantzien erantzun-denborak
dira: zortzi minutuko A kategoriako erantzun-helburua loteslea bihurtu zenean, zenbait trust-ek
anbulantziak erantzun-denboraren erlojutik kanpo "pilatu" zituztela edo deiak birsailkatu zituztela
frogatu zen, zifra lortzeko pazienteen emaitzak aldatu gabe. Erresuma Batuko National Audit Office-ak
errendimendu-adierazleak aukeratu eta erabiltzeko gidak —bere value-for-money txostenetan eta "Performance
Measurement by Regulators" eta "Choosing the Right FABRIC" esparruan zehaztuak (Fit for purpose,
Appropriate, Balanced, Robust, Integrated, Cost-effective)— hain zuzen departamentuek jakinarazteko
errazak ziren adierazleak aukeratzen jarraitzen zutelako daude, maniobratzeko zailak zirenen ordez.
Ministro edo zuzendari bat zeren aurka epaituko duen aginte-panela bidaltzen duen software-ingeniariak,
nahi duen ala ez, erakunde publiko baten pizgarri-egitura diseinatzen du.

## Matematika

KPI-en diseinua esparru-itxurako gaia da, baina KPI hautagai baten *ebaluazioa* kontrol-zerrenda
errepikagarri bat da, ez formula bat:

```
KPI hautagai bakoitzerako, puntuatu hauen aurka:
  Fit for purpose  — emaitza neurtzen al du, edo urrats batzuk urruntzen den ordezko bat?
  Appropriate      — benetan eragin diezaioketen pertsonena al da?
  Balanced         — maniobra harrapatzen duen kontra-metrika batekin parekatuta al dago?
  Robust           — auditoriari eutsi diezaioke, edo autojakinarazia eta egiaztaezina al da?
  Integrated       — multzo zabalagoan txertatzen al da, edo beste KPI baten aurka bultzatzen al du?
  Cost-effective   — biltzeak informatzen duen erabakiak baino gehiago kostatzen al du?

Aurreratu vs atzeratu banaketa:
  Adierazle aurreratua → etorkizuneko emaitza iragartzen du, baina askotan maniobragarria
                          (adib. 60 s baino gutxiagoan erantzundako deiak)
  Adierazle atzeratua  → emaitza gertatu dela berresten du, baina berandu iristen da
                          gidatzeko (adib. urteko asebetetze-inkesta)
  KPI multzo defendagarri batek helburu bakoitzeko bakoitzetik gutxienez bat parekatzen du.
```

## Adibide landua

**Anbulantzia-trusta**: trust batek A kategoriako (bizia arriskuan) erantzun-denboraren KPI bat
jakinarazten du: "deien % 75i 8 minututan erantzun zaie". Hiruhileko batean, A kategoriako 6.000
dei jasotzen dira; 4.500 8 minututan betetzen dira, % 75,0 emanez — itxuraz helburuan.

```
Goiburuko KPI = 4.500 / 6.000 × 100 = % 75,0  (% 75eko langa betetzen du)
```

Baina Goodhart-en auditoria batek kontra-metrika bat gehitzen du: deien % 10 motelenen batez besteko
erantzun-denbora.

```
Dezil motelenaren batez besteko erantzuna = 34 minutu (bi urte lehenago 19 minutu)
```

Trusta helburua betetzen ari da, eta isatsa —triajea inperfektua denean benetan bizia arriskuan
egoteko probabilitate handiena duten deiak— asko okerrago joan da, ekipoak 8 minutuko haitzuloaren
ertzetik hurbileko deietara lehenesten ari direlako, urgentzia klinikoaren ordez. KPI bakarrak
istorio faltsua kontatu zuen; KPI parekatuak egiazkoa.

## Software ingeniaritzarekin lotura

Gobernuarentzat errendimendu-aginte-panelak eraikitzen dituzten ingeniariek, funtzionalki,
erakundearen pizgarri-API-a diseinatzen dute. Ondorio praktikoak: instrumentatu *izendatzailea*
zenbakitzailea bezain zorrotz (ehuneko hutsa bezala jakinarazitako KPI batek izendatzailearen
maniobra gonbidatzen du — ikus [transakzio bakoitzeko kostua](../transakzio-bakoitzeko-kostua/) tranpa bera
zerbitzu digitaletan); eraiki kontra-metrikak aginte-panel berean, inork irakurtzen ez duen txosten
bereizi batean ordez, maniobra erabaki-unean ikusgai izan dadin; eta bertsionatu KPI-aren definizioa,
isilpeko birdefinizio batek ("dei", "kasu" edo "amaiera" gisa zer zenbatzen den aldatzeak)
funtzionalki helburua iragarri gabe aldatzea baliokidea baita.
[Balio publikoaren puntuazio-txartela](../balio-publikoaren-puntuazio-txartela/) KPI bakar bat isolatuta irakurtzea
saihesteko modu egituratu bat da, eta [emaitzetan oinarritutako erantzukizuna](../emaitzetan-oinarritutako-erantzukizuna/)
talde bakar batek bakarrik desitxuratu ezin dituen biztanleria-mailako KPI-ak aukeratzeko diziplina da.

## Tranpak

- **Biltzeko errazena den metrika aukeratzea esanguratsuaren ordez**: deiaren erantzun-denbora
  erregistratzea hutsala da; deiak herritarraren arazoa konpondu zuen ala ez ez da — baina bigarrena
  bakarrik da emaitza. Eutsi sistemak dagoeneko igortzen duenera jotzeari.
- **Kontra-metrikarik ez**: dirura edo ospera lotutako edozein KPI marjinan maniobratuko da;
  argitaratu aurretik, maniobra-bektore probableena harrapatzen duen metrika parekatu batekin bidali.
- **Metrika aldaketa-erregistrorik gabe birdefinitzea**: "jasotako deiak" "erantzundako deiengatik"
  aldatzea joera lausengatzeko, aurkitzen den unean denbora-seriearen sinesgarritasuna suntsitzen du —
  argitaratu beti definizioen aldaketa-erregistro bat zenbakiekin batera.
- **Jarduera eta emaitza nahastea**: burututako ikuskapenak zenbatzea irteera da; betetzera ekarritako
  lokalak zenbatzea emaitzatik hurbilago dago (ikus [emaitzak eta irteerak](../emaitzak-eta-irteerak/)).

## Iturriak

- National Audit Office, "Choosing the Right FABRIC: A Framework for Performance Information."
  <https://www.nao.org.uk/>
- Marilyn Strathern, "'Improving Ratings': Audit in the British University System," *Social
  Anthropology*, 1997 (formulation of Goodhart's law as commonly cited).
- National Audit Office, investigations into NHS ambulance service performance reporting.
  <https://www.nao.org.uk/>
