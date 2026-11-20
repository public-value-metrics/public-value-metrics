# Itzal-prezioak

Itzal-prezioa merkatuko prezio behagarririk ez duen ondasun, baliabide edo kanpo-efektu bati esleitutako balio estimatua da, edo merkatuko prezioa distortsionatuta dagoenean eta benetako gizarte-balioa islatzen ez duenean. Gobernuaren balioespenak itzal-prezio ofizial gutxi batzuetan oinarritzen dira (karbonoarena, lanaz kanpoko denborarena, langabeen lan-denborarena), eta zentralki argitaratzen dira, saileko guztiek zenbaki bera erabil dezaten.

## Zergatik den garrantzitsua

Itzal-prezioak badaude [gizarte-kostu-onura analisiak](../gizarte-kostu-onura-analisia/) ezin duelako funtzionatu kostu eta onura bakoitzari diru-balio bat esleitu gabe, eta garrantzitsuenetako batzuek (isuritako karbono-tona batek, bidaiari baten ordubeteko denborak, bestela langabezian egongo litzatekeen langile baten ordubeteko lanak) ez dute merkatu-prezio bat ere, edo duten merkatu-prezioak gizarte-kostu erreala desitxuratzen du. HM Treasury-k eta Department for Energy Security and Net Zero-k elkarrekin argitaratzen dute Erresuma Batuko gobernuaren balioespen guztietan erabiltzen den karbonoaren itzal-prezioa
(<https://www.gov.uk/government/publications/valuing-greenhouse-gas-emissions-in-policy-appraisal>). Hori ez da karbono-merkatu bateko prezioaren arabera ezartzen, helburuarekin bat datorren ikuspegi batetik baizik: karbonoaren balioa Erresuma Batuko lege-karbono aurrekontuak betetzeko behar den murrizketa-kostu marjinalean finkatzen da. Logika hori guztiz bestelakoa da EBko edo Erresuma Batuko Isurketen Salerosketa Sistemako (ETS) karbonoaren benetako prezioa behatzean oinarritzen denaren aldean.

Itzal-soldata-tasak antzeko logika jarraitzen du lan-munduan. Bestela langabezian egongo litzatekeen norbait enplegatzeak ez dio gizarteari soldata osoa kostatzen: soldataren zati bat ordaindu gabe geratzen diren prestazioen eta galdutako aisialdi- edo bilaketa-denboraren transferentzia da, gizartearen baliabideen gaineko erabilera berri garbi bat izan beharrean. Horregatik, Green Book-aren gidaliburuak langabeziatik ateratako lanerako merkatuko soldata baino itzal-prezio baxuagoa ezartzen du, lan horren benetako aukera-kostua islatzeko (ikus [aukera-kostua gastu publikoan](../aukera-kostua-gastu-publikoan/)) eta ez merkatu-prezioa.

## Matematika

```
Karbonoaren itzal-prezioa (egitura ilustratiboa; egungo balioak BEIS/DESNZ
karbono-balioen tresna ofizialetik hartu behar dira — ez erabili zaharkitutako zifrak):
  Sektore trukagarriaren balioa: ETS baimenen prezio-ibilbideetan oinarritua
  Sektore ez-trukagarriaren (helburuarekin bat datorren) balioa: lege-karbono
    aurrekontuak betetzeko behar den murrizketa-kostu marjinalean finkatua,
    murrizketa-aukera errazagoak agortu ahala denboran zehar igotzen dena
  Aplikazioa: £/tona CO2e × aukerak isuritako edo saihestutako tonak,
    etorkizuneko urteetarako gizarte-deskontu tasaz deskontatuta

Itzal-soldata-tasa (SWR):
  SWR = Merkatuko soldata − (aurreztutako aisialdi/bilaketa-denboraren balioa
                              + ordaintzen ez diren prestazioen balioa)
  Normalean merkatuko soldataren zatiki gisa adierazten da (adib. SWR = 0,6
    × merkatuko soldata langabezia handiko eremu batean, Green Book-aren A
    eranskineko gidaliburuaren arabera, kapazitate soberakina duten lan-merkatuetarako)
```

Bi zifrak politika-konbentzioak dira, zentralki ezarriak, ez merkatuko behaketa enpirikoak. Itzal-prezio baten helburu osoa falta den edo distortsionatuta dagoen merkatu bat ordezkatzea da; beraz, hura erabiltzen duen balioespen batek iturri ofizial eguneratua aipatu behar du, eta ez bere zifra propioa asmatu, saileko guztien balioespenak konparagarriak izan daitezen.

## Adibide landua

**Gobernu nazionala**: uholdeen aurkako babes-eskema baten balioespenak kalkulatzen du urtean 400 tona CO2e isurketa saihesten dituela (larrialdi-makineria gutxiago erabiltzeagatik eta berreraikuntza saihestuagatik sortutako karbono txertatu gutxiagorekin), 30 urteko balioespen-bizitzan zehar, "gutxieneko ekintza" oinarri-lerro baten aldean.

```
Karbonoaren itzal-prezio ilustratiboa: £280/tona CO2e (1. urtea, balioespen-
  aldian zehar igotzen doana, karbono-balio ez-trukagarrien egutegi ofizialaren arabera)
1. urteko karbono-onura = 400 × £280 = £112.000
```

Egutegi ofizialak karbonoaren balioa balioespen-aldian zehar *igotzen* duenez (karbono aurrekontuen estutzea islatuz), analistak 30 urteko fluxuaren urte bakoitzari dagokion balioa aplikatu behar dio, ez tasa lau bat. 1. urteko balioa denboran zehar erabiltzeak geroko urteetako onurak gutxietsiko lituzke, eta karbono-profil desberdinak dituzten uholde-babesaren beste diseinuekin egindako sailkapena distortsionatuko luke.

**Toki-agintaritza**: udal baten enplegu-laguntzako programak epe luzeko langabetuak diren 150 lagun kokatzen ditu orduko £11 ordaintzen duten lanpostuetan. Merkatuko soldata osoarekin balioetsiz gero, programari £11 × lan-orduak gizarte-onura gisa onartuko litzaizkioke; baina itzal-soldata-tasaren ikuspegiak aitortzen du langile horiek ez zirela beste lanpostu batzuetatik ateratakoak: programaren aurretik haien lanaren benetako aukera-kostua baxua zen.

```
Merkatuko soldata: £11,00/ordu
Itzal-soldata-tasa (ilustratiboa, tokiko langabezia handia): 0,6 × merkatuko soldata = £6,60/ordu
Lan-ordu bakoitzari egotz dakiokeen gizarte-onura garbia ≈ £11,00 − £6,60 = £4,40/ordu
  ("gehigarria" den balioa: benetan geldirik zegoen lan-indarra ekoizpenera pasatzeagatik
   sortua, soldatatik bereizita, hori neurri handi batean transferentzia baita)
```

Horregatik, langabezia handiko eremuetako enplegu-programen balioespenek gizarte-balio garbi positiboa erakutsi dezakete, nahiz eta programa bera enplegu osoko eremu batean exekutatuta ez lukeen erakutsiko, han desplazatutako lan-indarra beste lanpostu batzuetatik ateratakoa izango litzatekeelako.

## Software ingeniaritzarekin lotura

Itzal-prezioek gutxitan ukitzen dute softwarearen entrega zuzenean, baina garrantzitsuak dira negozio-kasu batek IT aldaketa batetik karbono- edo gizarte-onura bat aldarrikatzen duen bakoitzean. Datu-zentroen bateratzeak karbono-aurrezkia aldarrikatzen badu, edo zerbitzu paperik gabeak inprimatze eta posta-bidalketa saihestuen karbonoa, karbonoaren egungo itzal-prezio ofiziala erabili behar da, ez asmatutako zifra bat, eta urtez urteko egutegia aplikatu behar da, ez tasa lau bat, Green Book-aren beste edozein balioespen-sarreratan bezala. Ikus [jabetza-kostu osoa gobernuaren IT-an](../jabetza-kostu-osoa-gobernuko-it-an/) eta [sektore publikoko zibersegurtasunaren balioa](../sektore-publikoko-ziberseguritatearen-balioa/); bietan askotan behar da itzal-prezio bat diruz neurtzen zaila den sarrera baterako (urraketa-arriskua, geldialdia), zuzenean kostuztatutako elementuekin batera.

## Tranpak

- **Zaharkitutako karbono- edo soldata-zifra erabiltzea.** Bi balioak aldizka berrikusten dira gidaliburu zentralean; zifra ordezkatu batean oinarritutako balioespenak ez du Treasury-ren azterketa gaindituko.
- **Itzal-prezio lau bat hamarkada askoko balioespen batean aplikatzea.** Egutegi ofizialak denboran zehar gora egiten du; 1. urteko balioa denboran zehar erabiltzeak onuren edo kostuen profila gaizki adierazten du.
- **Itzal-soldata langilearen benetako ordainsariaren deskontu batekin nahastea.** Itzal-soldata-tasak *balioespenak* lan-sarrerari ematen dion balioa doitzen du, ez langileak benetan jasotzen duen soldata; biak nahasteak (oker) merkatuko soldata baino baxuagoko ordainsaria justifikatzeko atea irekitzen du.
- **Itzal-prezio propioa eratortzea ofiziala erabili ordez.** Itzal-prezioak politika-konbentzioak dira, hain zuzen ere balioespenak sailen artean konparagarriak izan daitezen; tokian asmatutako zifra batek, ongi arrazoitua izanda ere, konparagarritasun hori hausten du.

## Iturriak

- HM Treasury / Department for Energy Security and Net Zero. "Valuing greenhouse gas emissions in
  policy appraisal." <https://www.gov.uk/government/publications/valuing-greenhouse-gas-emissions-in-policy-appraisal>
- HM Treasury. "The Green Book: appraisal and evaluation in central government," Annex A (shadow
  price of labour, non-work time values).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Little IMD, Mirrlees JA. "Project Appraisal and Planning for Developing Countries." Heinemann,
  1974 (foundational shadow-pricing methodology).
