# Sektore publikoko ziberseguritatearen balioa

Sektore publikoko ziberseguritatearen balioa arriskuaren murrizketa prezituaren diziplina da: zenbat
balio du herritarren datuen urraketa gutxiago probableagoa egiteak, segurtasun-gastuak funtzionatzen
duenean irteera ikusgairik sortzen ez duela eta huts egiten duenean oso ikusgarria dena sortzen duela
kontuan hartuta? Prestazio-erregistroak, osasun-datuak edo zerga-erregistroak gordetzen dituen
zerbitzu batentzat, "funtzionatzen duenean ikusezina" ezaugarri hori da, hain zuzen, balio-argudio
esplizitua behar duen arrazoia, ez betetze-ikuskapen bat bakarrik.

## Zergatik den garrantzitsua

Erresuma Batuko National Cyber Security Centre-ren Cyber Assessment Framework-ak (CAF) sektore publikoko
erakundeei segurtasuna egiaztagarri eta emaitzetan oinarritutako diziplina bihurtzeko modu egituratua
ematen die, kontrol-zerrenda baten ordez: lau helburu goi-mailako definitzen ditu (segurtasun-arriskua
kudeatzea, zibererasoetatik babestea, ziberseguritate-gertaerak detektatzea eta intzidenteen eragina
minimizatzea), sistemaren jabe batek bere aurka ebalua daitezkeen ekarpen-emaitzetan banatuta,
[digital-service-standard](../zerbitzu-digitalen-estandarra/) delakoaren 9. puntuaren espirituan
("sortu erabiltzaileen pribatutasuna babesten duen zerbitzu segurua"). CAF ebaluazioak zeren aurka
babesten duen prezio dokumentatu bat du: IBM-ren Cost of a Data Breach Report-ak urraketaren batez
besteko kostua sektoreka jarraitzen du, eta sektore publikoa finantza edo osasunarekin alderatuta
barrutiaren behealdean aurkitu du etengabe — azken edizioek urraketa bakoitzeko 2,6–2,9 milioi
dolar inguruko sektore publikoko batez bestekoa ematen dute — baina "finantzak baino txikiagoa"
ez da "txikia", eta gobernuko urraketek txostenaren zifrek guztiz biltzen ez dituzten kostuak dituzte:
herritarren konfiantzaren galera kanal digitaletan, [digitalizazio-hartzea](../kanal-aldaketaren-aurrezpenak/)
beheratzen duena (kanal-aldaketaren negozio-kasuek horren mende daude), eta Estatuak herritarrei
entregatzera behartu zien datuak agerian uzteko kostu politiko eta juridikoa.

## Matematika

Segurtasun-inbertsioa arrisku-murrizketako edozein gastu balioesten den moduan balioesten da:
galera esperoaren murrizketa gisa, arriskuen kudeaketako identitate klasikoa erabiliz.

```
Urteko galera esperoa (ALE) = Galera bakar esperoa (SLE)
                              × Gertatze-tasa urtekoa (ARO)

Segurtasun-kontrol baten balioa =
  ALE_kontrolaren_aurretik − ALE_kontrolaren_ondoren − kontrolaren urteko kostua

Kontrol bat finantzatzea merezi du hau denean:
  (ALE_aurretik − ALE_ondoren) > kontrolaren urteko kostua

CAF ebaluazioak ez du probabilitaterik zuzenean ematen, baina zerbitzu
baten CAF emaitza-profila (zein ekarpen-emaitza dauden "lortuta",
"zati batean lortuta" edo "lortu gabe") ARO estimatzeko sarrera-proxy
arrazoizkoa da — kudeatu gabeko sarbide pribilegiatua edo probatutako
intzidenteei erantzuteko planik ez duen sistemak bi horiek dituenak
baino ARO errealista nabarmen handiagoa du.
```

## Adibide landua

**40.000 bizilagunen gizarte-arretako erregistroak gordetzen dituen konderriko kontseiluaren
kasu-kudeaketako sistema**:

```
Galera bakar esperoa (urraketaren kostua), IBM Cost of a Data Breach
Report baten azken edizioko sektore publikoko batez bestekoa erabiliz ≈ 2,1 M£
(bihurtua, magnitude-ordenako zifra — eratorri beti berriz uneko txostenaren
edizioaren arabera, zifra finko bat berrerabili beharrean)

Uneko ARO (kudeatu gabeko sarbide pribilegiatua, probatutako intzidenteei
erantzunik gabe, barne CAF autoebaluazio baten arabera "lortu gabe" emaitza
anitzekin) ≈ urtean % 8 estimatuta
  ALE_aurretik = 2,1 M£ × 0,08 = 168.000 £/urte

Proposatutako kontrola: sarbide pribilegiatuen kudeaketa + probatutako intzidenteei
erantzuteko plana, CAF emaitza garrantzitsuak "lortuta" egoerara eramanez,
ARO urtean % 3ra murrizten duela estimatuta
  ALE_ondoren = 2,1 M£ × 0,03 = 63.000 £/urte

Kontrolaren urteko kostua (tresnak + prozesua + probak) = 45.000 £

Kontrolaren balioa = (168.000 − 63.000) − 45.000 = 60.000 £/urte
  positibo garbia — finantzatu. Aritmetikak, gainera, erakusten du kontrola
  hala ere finantzatzea merezi lukeela kostua ia hiru halakoa balitz, hau da,
  probabilitate estimatuetan oinarritutako edozein ALE zifrarekin batera
  joan behar duen sentikortasun-egiaztapena.
```

## Software ingeniaritzarekin lotura

Ingeniariek ALE ekuazioko palanka gehienen jabe dira: sarbide-kontrolaren diseinua, mendekotasun eta
adabaki-higienea, erregistro- eta detekzio-estaldura, eta intzidenteei erantzuteko tresnek ARO terminoa
zuzenean mugitzen dute, horregatik CAF ebaluazioa politika-auditoria bat bezainbeste arkitektura
teknikoaren berrikuspena irakurtzen den. Hau [zor teknikoa balio publikoaren higadura gisa](../zor-teknikoa-balio-publikoaren-higadura-gisa/)
da bere forma zorrotzenean — adabakirik gabeko, monitorizatu gabeko, sarbide-kontrol eskasa duten
sistemak interes-ordainketa muturreko arriskua duten zorra dira, ez arrastaka etengabea — eta
[jabetza-kostu osoarekin gobernuko IT-an](../jabetza-kostu-osoa-gobernuko-it-an/) bateratu behar
da, segurtasun-gastua sistemaren benetako ustiapen-kostutik bereizita ez trata dadin. Halaber,
Green Book-aren pean [diruaren balioaren](../diruaren-truke-balioa/) ebaluazioetarako sarrera zuzena da:
arriskuz doitutako kostua aukeren balioespen guztien "kostu" aldearen parte da, ez amaieran
erantsitako gogoeta bat.

## Tranpak

- **CAF autoebaluazioa segurtasuna bera dela uste izatea**: amaitutako ebaluazio batek segurtasun-jarrera bat
  deskribatzen du; ez du sortzen — balioa lortutako emaitzetan dago, ez dokumentuan.
- **Urraketaren batez besteko kostu globalak tokiko estimazio gisa doitu gabe erabiltzea**: IBM-ren zifrak
  lagin handi eta anitzen batez bestekoak dira; tokiko erakunde txiki baten galera bakar espero errealista
  gutxitan da gobernu-departamentu nazional batena bezalakoa.
- **Muturreko arriskuaren psikologia inbertsio-erabakietan alde batera uztea**: urteko probabilitate
  baxuak segurtasun-gastua etengabe atzeratzea errazten du, egin ez den urtera arte —
  ALE kalkulua ARO sorta baten aurka sentikortasun-probatzeak, adibide landuan bezala, hori
  neutralizatzen du.
- **IBM motako urraketa-kostua bakarrik zenbatzea, konfiantzaren kostua ez**: herritarrek kanal digitalak
  erabiltzeko borondatea beheratzen duen urraketak [channel-shift-savings](../kanal-aldaketaren-aurrezpenak/)
  kasua higatzen du urte askotan zehar, urraketa-kostuen estimazioetan gutxitan sartzen den kostua.

## Iturriak

- National Cyber Security Centre, Cyber Assessment Framework. <https://www.ncsc.gov.uk/collection/caf>
- IBM, Cost of a Data Breach Report. <https://www.ibm.com/reports/data-breach>
- GOV.UK Service Manual, service standard, point 9: create a secure service which protects users' privacy. <https://www.gov.uk/service-manual/service-standard/point-9-create-a-secure-service>
