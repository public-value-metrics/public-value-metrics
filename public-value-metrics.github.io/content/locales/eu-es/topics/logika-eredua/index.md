# Logika-eredua

Logika-eredua programa baten sarrerak, jarduerak, irteerak, emaitzak eta eragina lotzen dituen
diagrama lineal bat da, ezkerretik eskuinera irakurtzen dena kontuak emateko kate gisa:
baliabideak sartzen dira, jarduerak gertatzen dira, irteerak sortzen dira, onuradunen egoera aldatzen
da (emaitzak) eta eragina denbora-eskala zabalago edo luzeago batean pilatzen da. Finantzatzaileek eta
auditoreek programa baten aurka txostenak egiteko espero duten egitura estandarra da, eta atzetik
aurrera eraikitako [aldaketaren teoriaren](../aldaketa-teoria/) aurrera begirako parekoa.

## Zergatik den garrantzitsua

HM Treasury-ren Magenta Book-ak logika-eredua programen ebaluazio-diseinuaren elementu beharrezko
gisa zehazten du, eta National Lottery Community Fund bezalako finantzatzaileek beren eskaera- eta
txosten-txantiloiak bost zutabeko kate horren inguruan eraikitzen dituzte. Bere balioa da programa
bati diagrama bakar batean zer gastatuko duen, horrekin zer egingo duen, zer sortuko duen eta
—funtsezkoena— horren ondorioz zer aldatu behar den esatera behartzen duela, prosazko paragrafo
batek ilun uzten duen zehaztasun-mailan. Sarrera- eta jarduera-zutabea beteta eta emaitza-zutabea
hutsik edo lausoa duen logika-eredu bat begirada batean antzematen da, eta horixe da, hain zuzen,
finantzatzaileek eredu bat eskatzen duten arrazoia.

## Matematika

Logika-eredua formula bat baino gehiago egitura-kate bat da:

```
Sarrerak        Jarduerak         Irteerak            Emaitzak              Eragina
(konprometitu-  (haiekin egiten   (produktu zuzenak   (onuradunen           (epe luzeko aldaketa,
 tako            dena)             eta zenbakarriak)   egoeran gertatzen     biztanleria-mailakoa
 baliabideak)                                          den aldaketa)         edo sistemikoa)
```

Zutabe bakoitzak aurrekoak baino zehatzagoa izan behar du: sarrerak gastatzen duzuna dira,
jarduerak egiten duzuna, irteerak ondorioa edozein dela ere entregatzen dena, emaitzak horren
ondorioz aldatzen dena —bereizketa hori osorik
[emaitzak eta irteerak](../emaitzak-eta-irteerak/) gaian azaltzen da— eta eragina epe luzeko aldaketa
iraunkorra da, askotan zati batean bakarrik egoztekoa.

## Adibide landua

**Tokiko erakundea (zorren aholkularitza digitalaren zerbitzua)**:

- Sarrerak: urteko 180.000 £-ko aurrekontua, 4,0 JTB aholkulari, kasuak kudeatzeko sistema bat.
- Jarduerak: sentsibilizazio-saioak, zorren aholkularitzako banakako hitzorduak.
- Irteerak: 900 hitzordu eman dira; 750 zor- eta prestazio-plan igorri dira.
- Emaitzak: 6 hilabeteko jarraipenera iritsi diren bezeroen artean, % 60k (750etik 450ek) ordaindu
  gabeko zorrak murriztu dituela adierazi du, bezeroko batez beste 1.200 £-ko murrizketarekin:
  guztira 540.000 £-ko zor-murrizketa.
- Eragina: zerbitzuaren bezeroen artean etxegabetasun-eskaeren jaitsiera neurgarria bi urtetan,
  beste esku-hartze batzuekin batera eta zati batean bakarrik zerbitzu honi egozgarria (ikus
  [analisi kontrafaktuala](../analisi-kontrafaktuala/)).

**Karitatea (elikagai-bankuaren bideratze-lankidetza)**:

- Sarrerak: 45.000 £, 1,5 JTB koordinatzaile, 12 bideratze-agentziarekin lankidetza-hitzarmenak.
- Jarduerak: bideratzeen lehen sailkapena, paketeak prestatu eta banatzea.
- Irteerak: 5.000 elikagai-pakete banatu dira 1.100 etxeri.
- Emaitzak: inkestatutako etxeen % 68k (1.100etik 748k) elikagai-segurtasuna hobetu dela adierazi du
  4 asteko jarraipen-deian.
- Eragina: tokiko krisi-zerbitzuen eskaria murrizten laguntzea, eremuko estatistika
  agregatuetan bakarrik frogatuta eta karitate honi bakarrik egozgarria ez dena.

## Software ingeniaritzarekin lotura

Logika-eredua emaitzen sistema baten datu-ereduaren ia hitzez hitzezko bertsioa da: sarrerak eta
jarduerak dagoeneko dituzun datu operatiboak dira (gastua, langileak, saioen erregistroak); irteerak
erraz instrumentatzen dira, entregatzeko unean zenbatzen direlako; emaitzek nahita diseinatutako
jarraipen-datuen bilketa behar dute (inkestak, datu administratiboen lotura), inork eraikitzen ez
badu existituko ez dena; eraginak, normalean, lotutako datu longitudinalak edo biztanleria-mailakoak
behar ditu, programa bakar baten sistemetatik haratago. Txostenak egiteko tresnak eraikitzen
dituzten ingeniariek komisionatzaileak bultzatu behar dituzte emaitza- eta eragin-adierazleak
diseinu-unean definitzera, transakzio-datuek dagoeneko onartzen dutena delako irteerak soilik
erakusten dituen aginte-panelera ez jotzeko. Ikus
[inbertsioaren itzulkin soziala](../gizarte-inbertsioaren-itzulkina/), emaitzen eta eraginaren zutabeak
bereziki balioesten dituen metodoa, eta [onuren gauzatzea](../onuren-gauzatzea/), eragin-zutabea
benetan lortu den jarraitzeko.

## Tranpak

- **Irteeretan gelditzea.** Entregatutako hitzorduak edo banatutako paketeak jakinarazten dituen eta
  onura iradokitzen duen aginte-panel batek jarduera jakinarazten du, ez emaitzak — ikus
  [emaitzak eta irteerak](../emaitzak-eta-irteerak/).
- **Zutabeen arteko kausa-lotura adierazi gabe.** Logika-ereduak katea adierazten du, baina ez zergatik
  sortu behar dituzten jarduerek irteerak eta irteerek emaitzak; arrazoibide hori
  [aldaketaren teoriari](../aldaketa-teoria/) dagokio, eta atzean halakorik ez duen logika-eredua
  probatu gabea da.
- **Eskaera-dokumentu puntual gisa tratatzea.** Finantzaketa-eskaera bat betetzeko bakarrik egin eta
  inoiz eguneratzen ez diren logika-ereduek programak benetan egiten duena islatzeari uzten diote.
- **Atribuzio-hazkundea eragin-zutabean.** Biztanleria-mailako aldaketa programa bakar batek soilik
  eragindakotzat jotzeak, kontrafaktualik gabe, ebidentziak onartzen duena gehiegi handitzen du.

## Iturriak

- HM Treasury, Magenta Book (2020), Chapter 3. <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, logic model guidance. <https://www.tnlcommunityfund.org.uk/>
- W.K. Kellogg Foundation, "Logic Model Development Guide" (2004). <https://www.wkkf.org/resource-directory/resources/2004/01/logic-model-development-guide>
