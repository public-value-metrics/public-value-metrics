# Zerbitzu-estandarrak eta transakzio-metrikak

GOV.UK Service Standard Erresuma Batuko gobernuaren 14 puntuko kontrol-zerrenda da zerbitzu digital
publiko bat eraiki eta ustiatzeko, eta transakzio-metrika kuantitatibo obligatorio multzo txiki batekin
datorrela: transakzio bakoitzeko kostua, amaitze-tasa, hartze digitala eta erabiltzaileen asebetetzea,
gobernu zentraleko zerbitzu bizi bakoitzerako talde guztiek argitaratu behar dituztenak. Elkarrekin,
estandarra eta metrikak biltegi honetako balio publikoaren eta KPI esparru zabalagoen egunerokoko
espezializazio operatiboa dira, software-entrega taldeei zuzenean zuzenduta.

## Zergatik den garrantzitsua

Service Standard-ak, GOV.UK-ren service manual-ean mantentzen dena, gobernu-zerbitzu digital baten une
bateko ebaluazio guztiek (alpha, beta, live) frogatzea eskatzen du —bere 14 puntuen artean— taldeak
erabiltzaileen beharrak ulertzen dituela, diziplina anitzeko talde batean lan egiten duela, maiz
iteratzen eta hobetzen duela eta *tresnak, sistemak eta lan-moduak ebaluatzen dituela*. Historikoki
horrekin batera Performance Platform publiko bat zegoen, non zerbitzu bizi bakoitzak bere transakzio-datuak
irekian argitaratzen zituen; plataforma hori ordutik erretiratu da, baina lau oinarrizko metrika horiek
neurtu eta argitaratzeko azpiko betebeharra service manual-aren "measuring success" gidaren bidez
jarraitzen du. Software KPI aginte-panel generiko batetik bereizten dena da metrika hauek berariaz
eredu ekonomiko lotu bakar gisa diseinatu zirela, lau puntuazio independente gisa ez: gobernu
digitalaren aurrezki-kasu osoa —Government Digital Service-ren Digital Efficiency Report-ak
tokiko gobernuko zerbitzu konparagarrietarako transakzio digitalak telefonoz baino gutxi gorabehera 20
aldiz merkeagoak eta aurrez aurre baino 50 aldiz merkeagoak aurkitu zituen— amaitze-tasa altua
mantentzen bada eta hartze digitala benetan igotzen bada bakarrik gauzatzen da, aldatu gabeko kanal
garesti baten ondoan kanal merke bat gehitzearekin ez.

## Matematika

```
Transakzio bakoitzeko kostua = zerbitzuaren ustiapen-kostu osoa / amaitutako transakzio-kopurua
Amaitze-tasa                  = amaitutako transakzioak / hasitako transakzioak × 100
Hartze digitala               = kanal digitaleko transakzioak / kanal guztietako transakzioak × 100
Erabiltzaileen asebetetzea    = % asebeteta + oso asebeteta, zerbitzuko 5 puntuko inkesta

Kanal-aldaketaren aurrezkia = transakzio-bolumena × hartze-aldaketa × (kanal zaharreko
                              transakzio bakoitzeko kostua − transakzio digitalaren kostua)

Hutsegite-eskariaren kostua = (1 − amaitze-tasa) × digitalki saiatutako transakzioak ×
                              erabiltzaile horiek ordez erabiltzen duten kanal ordezkoaren kostua
```

## Adibide landua

**Gobernu zentraleko lizentzia-berritzeko zerbitzu ilustragarria**, urtean 2 milioi transakzio, gaur egun
% 65 telefonoz (3,00 £/transakzio) eta % 35 digitalki (0,30 £/transakzio), amaitze-tasa % 80.
14 puntuko Service Standard-aren araberako birdiseinu batek hartze digitala % 60ra eta amaitzea % 92ra igotzen ditu:

```
Hartze-aldaketaren aurrezkia = 2.000.000 × 0,25 × (3,00 − 0,30) = 1.350.000 £/urte

Hutsegite-eskariaren kostua, aurretik:
  2.000.000 × 0,35 × (1 − 0,80) × 3,00 £ = 420.000 £/urte (abandonatzaileak telefonora itzultzen dira)

Hutsegite-eskariaren kostua, ondoren:
  2.000.000 × 0,60 × (1 − 0,92) × 3,00 £ = 288.000 £/urte

Hutsegite-eskariaren aurrezki garbia = 420.000 £ − 288.000 £ = 132.000 £/urte

Urteko aurrezki osoa ≈ 1.350.000 £ + 132.000 £ = 1.482.000 £/urte
```

Aritmetikak esplizitu egiten du zergatik amaitze-tasa ez den bigarren mailako metrika: % 80tik % 92rako
hobekuntzarik gabe, hartze-aldaketaren aurrezkia zati batean berreskuratuko lukete hutsegite-eskariak,
erabiltzaile digital frustratuak zuzenean telefono-kanal garestira itzuliz.

## Software ingeniaritzarekin lotura

Lau metrika hauek kostu-ondorioen aginte-panelaren adibide funtzionala dira: kostu-metrika bat hiru
emaitza/kalitate-metrikatik bereizita, nahita inoiz puntuazio bakarrean tolestu gabe —
[sektore publikoko KPI-etan](../sektore-publikoko-kpi-ak/) defendatutako diziplina bera. Ingeniarientzat, lan
konkretu eta jabedun bihurtzen da: amaitze-tasa embudo-instrumentazioaren arazo bat da, eta ibilbideko
abandonu-puntu bakoitza, printzipioz, lokalizagarria eta konponduko da; transakzio bakoitzeko kostuak
benetako unitate-kostuen kontabilitatea behar du, langileek lagundutako eta paperezko kanalen kostuak
barne, ez hodeiko ostatatze-gastua bakarrik (ikus [transakzio bakoitzeko kostua](../transakzio-bakoitzeko-kostua/)
eta [jabetza-kostu osoa gobernuko IT-an](../jabetza-kostu-osoa-gobernuko-it-an/)); eta hartze
digitala eraginkortasun-mozorroa daraman ekitate-metrika da — kanala aldatu ezin duten edo nahi ez duten
herritarrak neurriz kanpo adinekoak, desgaituak edo kanpo digitalekoak dira, beraz kanal-itxiera
oldarkorrak "aurrezkia" sarbide-kalte bihurtzen du (ikus
[inklusio digitala](../inklusio-digitala/) eta [kanal-aldaketaren aurrezkiak](../kanal-aldaketaren-aurrezpenak/)).
14 puntuko estandarra bera zenbaki hauen atzean dagoen prozesu-espezifikazioa da — ikus
[zerbitzu digitalaren estandarra](../zerbitzu-digitalen-estandarra/) estandarra osorik ikusteko, eta
[herritarren asebetetze-metrikak](../herritarren-asebetetze-metrikak/) hemengo asebetetze-zifrak
konfiantza-neurketa zabalagoarekin duen harremana ikusteko.

## Tranpak

- **Beste kanala itxiz lortutako hartzea**: telefono-linea bat ixteak hartze digitalaren ehunekoa
  aritmetikoki igotzen du hutsegite-eskaria geratzen den kanalera (askotan lagundutako-digital edo aurrez
  aurreko bide garestiago batera) botatzen duen bitartean; neurtu beti sistema osoaren kostua, ez ratioa bakarrik.
- **Amaitze-tasa embudoaren bigarren urratsetik neurtzea**: "hasitakoen" zenbaketa lehen benetako
  abandonu-puntuaren ondoren hasteak amaitze-tasa lausengatzen du eta konpon daitekeen galerarik handiena
  ezkutatzen du.
- **Transakzio bakoitzeko kostua lagundutako-digitaleko laguntza kanpo utziz**: autozerbitzatu ezin duten
  erabiltzaileei laguntzeko erabilitako langileen denbora alde batera uzten duen unitate-kostu soil
  digital batek kanalaren benetako kostua gutxiesten du.
- **Metrikak zerbitzuen arteko definizio partekaturik gabe argitaratzea**: "transakzio" eta "amaituta"
  gauza desberdinak esan nahi dute zerbitzu-talde desberdinetan definizioak estandarizatu eta
  bertsionatzen ez badira, zerbitzuen arteko konparazioa fidagarri ez eginez.

## Iturriak

- GOV.UK Service Manual, "The Service Standard." <https://www.gov.uk/service-manual/service-standard>
- GOV.UK Service Manual, "Measuring Success — Data You Must Publish."
  <https://www.gov.uk/service-manual/measuring-success/data-you-must-publish>
- GOV.UK, "Digital Efficiency Report."
  <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
