# Karitate-erakundeen gastu orokorren ratioa

Karitate-erakundeen gastu orokorren ratioa (overhead ratio) administrazio- eta dirubilketa-gastuak gastu osoaren ehuneko gisa adierazita da. Karitate-emateetan gehien eskatzen den zenbakia da —emaileek, zaintza-erakundeek eta finantzatzaile batzuek ere eraginkortasunaren proxy gisa erabiltzen dute—, eta sektoreko eraginkortasun-metrika sakonen baztertuetako bat ere bada: hura ezagun egin zuten erakundeek berek publikoki uko egin zioten 2013an.

## Zergatik den garrantzitsua

2013ko ekainaren 17an, GuideStar, BBB Wise Giving Alliance eta Charity Navigator —AEBetako irabazi-asmorik gabeko erakundeen sailkapen- eta informazio-erakunde handienak hiru, eta haien sailkapen historikoek gastu orokorren ratioa karitate-kalitatearen laburpen gisa errotzen lagundu zutenak— emaile estatubatuarrei zuzendutako gutun ireki bateratu bat argitaratu zuten, "The Overhead Myth", esplizituki esanez gastu orokorren ratioa karitate-erakunde baten errendimenduaren neurri txarra dela eta emaileei gardentasunari, gobernantzari eta emaitzei begiratzeko eskatuz. Hamarkada batez emaileen kultura ratioaren inguruan eraiki zuten erakundeen buelta osoa izan zen.

Oinarrizko arazoa estrukturala da, ez irudiarena soilik: gastu orokorren ratio baxua lor daiteke karitate-erakundea eraginkor egiten duten gauzetan —kasu-kudeaketako sistema duina, langile trebatuak, jarraipena eta ebaluazioa— gutxiegi inbertituz, horiek sarritan "programa"-kostu gisa baino "administrazio" gisa kontabilizatzen direlako. Bere bulego-atzea goseteatzen duen karitate-erakunde batek, %5eko gastu orokorrak jakinarazteko, emaitzak lortzeko gaitasun txikiagoa izan dezake ondo hornitutako eragiketa batean %20 gastatzen duenak baino. Ingalaterran eta Galesen, Charity Commission-en patronatuentzako gidek ez dute gastu orokorren ehuneko bakarra eraginkortasun-proba gisa bultzatzen; patronatuei eskatzen diete karitate-erakundeak bere helburuen aurka zer lortu duen jakinarazteko — ikus [onuradun bakoitzeko kostuan](../onuradun-bakoitzeko-kostua/) aipatzen diren SORP txostenerako eskakizunak.

## Matematika

```
Gastu orokorren ratioa = (Administrazio-kostua + Dirubilketa-kostua) / Gastu osoa

Aldaera ohikoak:
  Programa-ratioa         = Programa (karitate-gastu zuzena) / Gastu osoa
                          = 1 − gastu orokorren ratioa
  Dirubilketaren eraginkortasuna = Dirubilketa-kostua / Bildutako funtsak
```

Formula hauetako batek ere ez du lortutako emaitzei buruzko informaziorik. Karitate-erakunde batek denak minimiza ditzake eta onuradun guztiei huts egin; ikus [emaitza bakoitzeko kostua](../emaitza-bakoitzeko-kostua/) diruak funtzionatu duen ala ez benetan jorratzen duen metrikarako.

## Adibide landua

Bi karitate-erakunde, gastu osoa berdina:

- **A karitate-erakundea**: £1.000.000 gastu osoa, £80.000 administrazio + dirubilketa → gastu orokorren ratioa %8. Ez du jarraipen- eta ebaluazio-funtziorik, finantza-arduradun bakar bat gainkargatua eta kasu-kudeaketako sistemarik ez; langileen errotazioa handia da eta emaitza-daturik ez da biltzen.
- **B karitate-erakundea**: £1.000.000 gastu osoa, £220.000 administrazio + dirubilketa → gastu orokorren ratioa %22. Ebaluazio-talde txiki bat, emaitzen jarraipena jasotzen duen kasu-kudeaketako sistema eta babes-prestakuntza egokia finantzatzen ditu.

Gastu orokorren ratioaren arabera soilik iragazten duen emaile batek A aukeratzen du eta B baztertzen du — [emaitza bakoitzeko kostuaren](../emaitza-bakoitzeko-kostua/) ebidentziak ziur aski erakutsiko lukeenaren aurkakoa, B delako bi horien artean bere benetako emaitzak frogatzeko edo hobetzeko moduan dagoen bakarra.

## Software ingeniaritzarekin lotura

Sektorerako finantza- eta diru-laguntza-txostenen softwareak askotan gastu orokorren/programaren banaketa kostu-lerro bakoitzean eremu kategoriko gisa hertsiki kodetzen du, arautzaileek eta finantzatzaile batzuek oraindik itzulera estatutarioetan hori eskatzen dutelako. Sistema hauek eraikitzen dituzten ingeniariek eskakizun hori betebehar gisa tratatu behar dute, ez gastu orokorren ratioa panel batean nabarmen bistaratzeko metrika dela dioen diseinu-seinale gisa; non eta bistaratzen den, lotu emaitzetan oinarritutako metrika batekin, ikusleak ratioa isolatuta irakur ez dezan. Ikus [emailearen inbertsio-itzulera](../emailearen-inbertsioaren-itzulera/) haren ondoan egon behar duen metrikarako, eta [diruaren balioa](../diruaren-truke-balioa/) sektore publikoko baliokide-argudiorako, ratio bakarreko eraginkortasun-proxyen aurka.

## Tranpak

- **Gastu orokorren ratioa iragazki-muga gisa erabiltzea.** Atalase arbitrario baten gainetik dagoen edozein karitate-erakunde baztertzeak (adib. "%15 baino gehiagorik ez gastu orokorretan") sistematikoki zigortzen ditu ondo hornitutako eta ondo ebaluatutako erakundeak, eta gutxiegi inbertitzea sari.
- **Zuzeneko entrega-kostua gastu orokor gisa sailkatzea**, edo alderantziz — zer den "programa" eta zer "administrazio" erabakitzeko kontabilitate-konbentzioak nahikoa aldatzen dira karitate-erakundeen artean, ratioak maiz ez direla ezta aurrez aurre alderagarriak ere.
- **Gastu orokor baxuak inpaktu altua dakarrela suposatzea.** Biak, onenean ere, korrelaziorik gabeak dira; ikus 2013ko Overhead Myth gutunaren funtsezko aldarrikapena.
- **Estrategia zilegi batzuek epe laburreko gastu orokor altuagoa behar dutela ahaztea.** Gaitasun-eraikuntzako edo erakunde-garapeneko fase batek nahita igotzen du administrazio-gastua geroko entrega hobetzeko.

## Iturriak

- GuideStar, BBB Wise Giving Alliance, and Charity Navigator, "The Overhead Myth" open letter, 17 June 2013. <https://learn.guidestar.org/news/news-releases/2013/2013-06-17-overhead-myth>
- Charity Navigator, "Overhead Myth" campaign resources. <https://www.charitynavigator.org/>
- Charity Commission for England and Wales, guidance on charity reporting (SORP). <https://www.gov.uk/government/organizations/charity-commission>
