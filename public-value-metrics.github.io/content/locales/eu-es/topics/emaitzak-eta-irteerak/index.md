# Emaitzak eta irteerak

Irteera jarduera baten produktu zuzena eta zenbakarria da — entrega gertatzen den momentuan
existitzen da, eraginak izan dezakeena edozein dela ere. Emaitza inplikatutako pertsonengan, tokian
edo sisteman ondoren gertatzen den aldaketa da. "500 pertsonak lan-bilaketako tailer batera
joan ziren" irteera bat da: egia da, baita inork lanik aurkitu ez badu ere. "500 pertsonen enplegu-aukerak
hobetu dira" emaitzaren aldarrikapen bat da, eta aldaketaren ebidentzia behar du, ez soilik
asistentziarena — sektoreko neurketa-akats gehienek baino diru-laguntzen txosten engainagarri gehiago
sortzen dituen nahasmena.

## Zergatik den garrantzitsua

HM Treasury-ren Magenta Book-ak eta National Lottery Community Fund bezalako finantzatzaileek
emaitzen txostena eskatzen dute hain zuzen programek lehenespenez irteerak jakinarazten dituztelako:
merke zenbatzen dira, beti eskuragarri daude eta beti positibo ageri dira. Irteera-zenbaketa ez da
inoiz jaitsiko programak huts egiteagatik — saio gehiago entregatzea beti "gehiago" da, baina emaitza
batek programak ez duela funtzionatzen agerian utz dezake. National Audit Office-ak behin eta berriz
kritikatu ditu jarduera-mailak arrakastaren ebidentzia balira bezala jakinarazten dituzten gobernu-programak;
irteerak jakinarazteko errazak bakarrik egiten dituen software-sistema batek hori indartzen du
lehenespenez, irteerek ez baitute jarraipen-datuen bilketarik behar eta emaitzek bai.

## Matematika

Ez dago formularik, baina metrika bat sailkatzeko proba fidagarria bada:

```
Irteeraren proba: entrega-unean zenbakarria al da, hartzailea eraginik gabe egonda ere egia?
Emaitzaren proba: aurretik/ondoren edo -rekin/gabe konparazioa behar al du esanguratsua izateko?

Zenbaki bat inorentzako onurarik gabe egia izan badaiteke, irteera da.
```

Hau [logika-ereduaren](../logika-eredua/) kate zabalagoaren barruan kokatzen da eta
[aldaketaren teorian](../aldaketa-teoria/) definitutako emaitza-loturen mende dago; emaitza bat
diru bihurtzeak [inbertsioaren itzulkin soziala](../gizarte-inbertsioaren-itzulkina/) gaiko metodoak
erabiltzen ditu.

## Adibide landua

**Tokiko erakundea (enplegu-laguntza)**: irteera — 500 pertsonak lan-bilaketako tailerretara joan ziren.
Emaitza — 12 hilabeteko jarraipenean, 500 horietatik 140 (% 28) enplegu iraunkorrean daude (6+
hilabete). Ezaugarri antzekoak baina programarik eskuratu ez duen konparazio-talde batek % 15eko oinarri-lerroko
enplegu-tasa du aldi berean. Emaitzaren hobekuntza garbia: % 28 − % 15 = 13 puntu portzentual, beraz
500 × 0,13 = 65 pertsona gehiago daude lanean bestela ez luketenak — emaitza egozgarria, ez 500eko
asistentzia-zifra ez 140ko enplegu-zenbaketa gordina.

**Karitatea (alfabetatze-karitatea)**: irteera — 300 haurrei 1.200 irakurketa-saio eman zaizkie.
Emaitza — batez besteko irakurketa-adina 8 hilabetez hobetu da 6 hilabeteko aldian, 6 hilabeteko
berezko aurrerapenaren oinarri-lerro baten aurka. Emaitzaren irabazi garbia: 8 − 6 = 2 hilabeteko
irakurketa-adinaren hobekuntza gehigarria haur bakoitzeko programari egozgarria, ez 8 hilabeteko
zifra osoa.

## Software ingeniaritzarekin lotura

Gertaera-erregistroek eta transakzio-sistemek irteerak ia automatikoki instrumentatzen dituzte —
orrialde-ikustaldiak, saioak, ixtutako txartelak, hitzorduak— sistemak bere lana egiteagatik sortzen
direlako. Emaitzek norbanako bera geroko une batean oinarri-lerro edo konparazio baten aurka
jasotzen duen datu-eredu bat behar dute, nahita diseinatu behar dena: jarraipen-inkestak, lotutako
erregistro administratiboak edo konparazio-kohorte bat. Lehenengoa bakarrik onartzen duen txosten-tresna
batek erakundea isilean irteera hutseko txostenetara bideratuko du, finantzatzaileak zer eskatu duen
kontuan hartu gabe. Ikus [logika-eredua](../logika-eredua/) emaitzak erantzukizun-katean non kokatzen
diren jakiteko, [emaitzako kostua](../emaitza-bakoitzeko-kostua/) bereizketa hau unitate-kostuko metrika
bihurtzeko, eta [sektore publikoko KPI-ak](../sektore-publikoko-kpi-ak/) metrikak hautatzeko eredu
zabalagoa ikusteko.

## Tranpak

- **Irteerak emaitzak balira bezala jakinaraztea.** "500 pertsona joan ziren" onura iradokitzen du
  frogatu gabe; etiketatu asistentzia esplizituki irteera gisa.
- **Oinarri-lerro edo konparazio-talderik ez.** Kontrafaktualik gabeko emaitza-zifra batek —ikus
  [analisi kontrafaktuala](../analisi-kontrafaktuala/)— ezin du programaren eragina hala ere
  gertatuko zenetik bereizi.
- **Finantzatutako metrikarako optimizatzea.** Finantzaketa irteera-bolumenari lotuta dagoenean,
  entrega-taldeek arrazionalki asistentzia maximizatzen dute aldaketa iraunkorraren aurretik,
  Goodhart-en legearen huts egiteko modu bat.
- **Emaitza-garbiketa.** Irteera-metrika bat emaitza dirudien hizkuntzaz berriz etiketatzea ("parte-hartze
  emaitzak: 500 bertaratu") atzean jarraipen-neurketarik gabe.

## Iturriak

- HM Treasury, Magenta Book (2020). <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, outcomes reporting guidance. <https://www.tnlcommunityfund.org.uk/>
- National Audit Office, value-for-money report methodology. <https://www.nao.org.uk/>
