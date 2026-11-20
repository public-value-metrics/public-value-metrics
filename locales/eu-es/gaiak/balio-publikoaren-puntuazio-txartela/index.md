# Balio publikoaren puntuazio-txartela

Balio publikoaren puntuazio-txartelak Robert Kaplan-en eta David Norton-en 1992ko balanced scorecard
egokitzen du —irabazia finantza-, bezero-, barne-prozesu- eta ikaskuntza-eta-hazkunde-ikuspegien
bidez optimizatzen duten enpresentzat eraikia— helburu-lerro bat marjina bat ez baina misio bat duten
erakundeentzat. Erakunde publikoa errendimendua hainbat dimentsio murriztezinetan aldi berean
jakinaraztera behartzen du, kontrajarritako balioak ezkutatzen dituen zenbaki bakar batean dena
tolestu beharrean.

## Zergatik den garrantzitsua

Kaplan eta Norton-en jatorrizko argudioa, Harvard Business Review-n, finantza-metrika bakar bat
adierazle atzeratua dela zen, hurrengo hiruhilekoan errendimendua *zergatik* aldatuko den ezer
esaten ez duena. Sektore pribatuan konponbidea lau ikuspegi lotu ziren. Gobernuan, Mark Moore-ren
"triangelu estrategikoak" (*Creating Public Value*, 1995) egitura baliokidea ematen du: zerbitzu batek aldi
berean **balio publikoa** entregatu behar du (misioaren emaitza), **legitimitatea eta babesa** mantendu
(babes politikoa eta publikoa) eta **operatiboki bideragarria** izan (benetan eskuragarri dauden
baliabideekin eta gaitasunarekin entregagarria). Paul Niven-en *Balanced Scorecard: Step-by-Step for
Government and Nonprofit Agencies* (2003) Kaplan eta Norton-en lau koadroak triangelu honetara itzultzeko
profesionalen eskuliburua da — normalean "finantza" "baliabideen kudeaketa" gisa berrizendatuz,
"misioa" goian jarriz "akziodunaren balioa" behean ordez, eta bezero- eta interesdun-ikuspegiak
berdin garrantzitsutzat tratatuz irabaziaren menpekoak izan beharrean. Hau entrega-talde batentzat
garrantzitsua da finantza- edo eraginkortasun-metrika baten arabera bakarrik epaitutako zerbitzu digital
publiko batek (adib. transakzio bakoitzeko kostua) sistematikoki gutxiegi inbertituko duelako finantza-metrikak
ikusi ezin dituen legitimitate- eta emaitza-dimentsioetan.

## Matematika

Balio publikoaren puntuazio-txartela esparru bat da, ez formula bat, baina bere egitura finkoa da eta
zehatz-mehatz erreproduzitzea merezi du:

```
Ikuspegia            Sektore publikoko galdera                  Adierazle-adibidea
--------------------------------------------------------------------------------
Misioa / emaitzak     Sortzeko dagoen balio publikoa lortzen     Biztanleria-mailako emaitza-neurria
                       ari al gara?                               (ikus outcomes-vs-outputs)
Baliabideen            Dirua publikoa eraginkortasunez eta        Emaitza bakoitzeko kostua,
 kudeaketa             baimendutako mugen barruan erabiltzen      aurrekontu-desbideratzea
                       ari al gara?
Bezeroa / erabiltzailea Erabiltzaileek eta herritarrek zerbitzua   Amaitze-tasa, asebetetzea
                        eskuratu eta onura atera al dezakete?
Legitimitatea / babesa  Printzipal politikoek, gainbegiratze-      Konfiantza-metrikak, auditoria-
                        organoek eta publikoak oraindik            aurkikuntzak, onartutako kexak
                        babesten al gaituzte?
Barne-prozesua /        Hobetzen jarraitzeko gaitasuna eta         Langileen errotazioa, ziklo-denbora,
 ikaskuntza             prozesua al dugu?                          atzerapenaren antzinatasuna

Puntuazio-txartel defendagarri batek ikuspegi bakoitzeko 3-5 adierazle jakinarazten ditu,
ikuspegi bakar bat ere beste batean kaltea ikusgai izan gabe maniobratu ezin dadin
aukeratuak.
```

## Adibide landua

**Tokiko erakundeko helduen gizarte-arretako saila**: reablement-zerbitzu baten (ospitale-egonaldi
ondoren independentzia berreskuratzen laguntzeko epe laburreko laguntza) puntuazio-txartelak hau
jakinarazten du:

```
Misioa:        zerbitzu-erabiltzaileen % 68k ez dute arreta jarraiturik behar 6 astetara (helburua % 65)
Kudeaketa:     reablement-episodio osatu bakoitzeko kostua = 1.850 £ (aurrekontu-hipotesia 2.000 £)
Bezeroa:       erabiltzaileen asebetetzea % 82, zerbitzua hasteko batez besteko itxaronaldia 4,1 egun
Legitimitatea: 1.000 episodio bakoitzeko 3 kexa onartu; helduen babeserako batzordeak
               zerbitzua "ona" dela balioetsi du
Prozesua:      langileen bakante-tasa % 14, batez besteko kasu-kopurua 23 (kasu-kopuru segurua
               gehienez: 25)
```

Isolatuta irakurrita, misioaren eta kudeaketaren zenbakiak arrakasta-istorio zuzena dirudite:
aurrekontuaren azpitik eta emaitza-helburuaren gainetik. Prozesu-lerroarekin batera irakurrita, % 14ko
bakante-tasak eta 25eko kasu-kopuru-mugak erakusten dute emaitza ona langile-maila ez-seguru bati
hurbilduta funtzionatuz erosten ari dela — misio-zenbakiak bakarrik inoiz agerian utziko ez lukeen
abisua, eta hain zuzen ikuspegi bakarreko KPI batek (ikus [sektore publikoko KPI-ak](../sektore-publikoko-kpi-ak/))
gonbidatzen duen hutsegite-modua.

## Software ingeniaritzarekin lotura

Barne- edo publikoari zuzendutako aginte-panel bat eraikitzen duen talde batentzat, puntuazio-txartela
"osasun-puntuazio" widget bakar baten aurkako argudio zuzena da: eraiki panel bat ikuspegi bakoitzeko,
eta erresistitu produktu-presioari semaforo batean sintetizatzeko, sintesi-urratsa hain zuzen
kontrajarritako informazioa suntsitzen den lekua baita. Produktu-taldeen OKR egituretan ere garbi
mapatzen da: misio-OKR bat kudeaketa- edo prozesu-OKR parekaturik gabe Kaplan eta Norton-ek 1992an
kontra idazten zuten metrika bakarreko hutsegite-modua erreproduzitzen du. Ikus [balio publikoa](../balio-publikoa/)
Moore-ren teoriarako, "misioa" koadroak benetan zer eduki behar duen, eta
[trust-and-legitimacy-metrics](../konfiantza-eta-legitimitatearen-neurketak/) legitimitate-ikuspegia
adierazle erreal eta iturridunekin betetzeko, inork defenda ezin duen ordezkoarekin ordez.

## Tranpak

- **Puntuazio-txartela puntuazio bakarrean tolestea**: lau ikuspegien batez bestekoa zenbaki bakar
  batean egiteak puntuazio-txartelak saihestu nahi duen arazo zehatza berriz sartzen du — kudeaketa-puntuazio on
  batek ezkutatutako legitimitate-puntuazio txarra.
- **Sektore pribatuko "finantza" ikuspegia aldatu gabe kopiatzea**: erakunde publiko baten kudeaketa-ikuspegia
  baimendutako, maiz babestutako, aurrekontuen barruan egotea da, ez diru-sarrerak maximizatzea —
  Niven-en berrizendatzea ez da kosmetikoa.
- **Puntuazio-txartelaren jabea den taldeak bakarrik mugi ditzakeen adierazleak aukeratzea**: epaitzen
  duen talde beraren iturriko legitimitate-adierazle bat (adibidez, autojakinarazitako kexen kudeaketa)
  ez da ebidentzia independentea.
- **Puntuazio-txartela behin eraiki eta pisuak edo adierazleak inoiz ez berrikustea**: Kaplan-ek eta
  Norton-ek urteko estrategia-berrikuspena zuten buruan; urtez izoztutako puntuazio-txartel bat
  jarraitzeko eraiki zen misiotik aldentzen da.

## Iturriak

- Robert S. Kaplan and David P. Norton, "The Balanced Scorecard: Measures That Drive Performance,"
  *Harvard Business Review*, January–February 1992.
- Paul R. Niven, *Balanced Scorecard: Step-by-Step for Government and Nonprofit Agencies*, Wiley,
  2003.
- Mark H. Moore, *Creating Public Value: Strategic Management in Government*, Harvard University
  Press, 1995.
