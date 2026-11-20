# Konfiantza eta legitimitatearen neurketak

Legitimitatea eta babesa Mark Moore-ren "triangelu estrategikoaren" hiru hanketako bat da, *Creating Public Value* (1995) lanean, balio publikoarekin eta gaitasun operatiboarekin batera, eta hanka hori da gehien neurtu gabe uzten dena, aurrekontu batek edo irteera-kopuru batek ez bezala, legitimitateak ez baitu zenbaki bakar ageririk. Konfiantza eta legitimitatearen neurketak gobernuek hutsune hori betetzeko erabiltzen dituzten proxy-neurrien familia dira: erakundeekiko konfiantzaren inkestak, gainbegiratze-erakundeen konfiantza-balorazioak, kexa eta apelazio-datuak, eta babes politiko/legegilearen adierazleak.

## Zergatik den garrantzitsua

Moore-ren argudioa da balio erreala entregatzen duen baina legitimitate politikoa eta publikoa galtzen duen kudeatzaile publiko batek, azkenean, entregatzen jarraitzeko behar duen baimen-ingurunea galduko duela: finantzaketa murrizten da, aginduak estutzen dira eta zerbitzua gosez geratzen da, emaitzak zein onak diren kontuan hartu gabe. Beraz, legitimitatea ez da entrega-puntuazio-txartel bati gehitutako harreman publikoen pentsamendu berantiarra; misioak jarraitu ahal izateko erabateko sarrera bat da, eta horregatik dago [balio publikoaren puntuazio-txartelean](../balio-publikoaren-puntuazio-txartela/) ikuspegi berdinkide gisa, ez oin-ohar gisa. OECD-ren "Trust in Government" inkesta-programa da hau kuantifikatzeko nazioarteko ahalegin nagusia: OECDko kide-estatuetan beren gobernu nazionalarengan konfiantza dutela dioten herritarren partea jarraitzen du, eta bere epe luzeko datuek erakusten dute konfiantza oso sentikorra dela shock-en aurrean: 2008ko krisi finantzarioak zein COVID-19 pandemiak nazio-mailako gorabehera zorrotzak sortu zituzten, askotan berreskuratze partzial batekin, eta OECDren analisiak etengabe aurkitzen du hautemandako *gaitasuna* (gobernuak esaten duena entregatzen al du) eta hautemandako *justizia/osotasuna* (gobernua ustelkeriarik edo faboritismorik gabe jokatzen dela ikusten al da) direla konfiantza-zifraren bi eragile indartsuenak, transakzio bakar batekiko asebetetzetik bereiziak. Gobernuek legitimitatea maila xehatuagoan operatibo bihurtzen ere saiatzen dira gero eta gehiago: Erresuma Batuko erregulatzaile eta ikuskatzaile independenteak (National Audit Office, Parliamentary and Health Service Ombudsman, Ofsted eta Care Quality Commission bezalako sektore-erregulatzaileak) legitimitate-egiaztapen instituzionalizatu gisa jarduten dute, "jendeak oraindik zerbitzu honetan konfiantza al du" galdera balorazio auditagarri bihurtuz.

## Matematika

Konfiantza eta legitimitatea esparru-formako gaia da, eta haren proxy kuantitatibo erabilgarriak hauek dira:

```
Erakundeekiko konfiantza-indizea (OECD erakoa)
  = gobernuarekiko konfiantzari buruzko galdera bati "bai" erantzuten dioten inkestatuen %,
    denboran jarraitua, talde demografikoen arabera desagregatua

Legitimitate-proxyen multzoa (ez dago zenbaki bakarrik eraikuntza ordezkatzen duenik):
  - Zerbitzu-erabiltzaile 1.000 bakoitzeko onartutako kexak (ombudsman edo barne kexa-datuak)
  - Erakundearen erabakien aurkako berrikuspen judizial / apelazioen arrakasta-tasa
  - Erregulatzaile/ikuskaritza independentearen balorazioa (adib. "bikaina" tik "desegokia" ra bandak)
  - Legegintza-/gainbegiratze-batzordeen konfiantza-bozketak edo txosten kritikoen maiztasuna
  - Informazio-eskaeren bolumena eta zabaltze/ukatze-tasa, hautemandako
    gardentasunaren proxy gisa

Legitimitatea egiaztatzen da, ez kalkulatzen: legitimitate-ebaluazio defendagarri batek
goiko hainbat triangulatzen ditu, proxy bakar batean oinarritu beharrean.
```

## Adibide landua

**Zerga-agintaritza nazionala**: legitimitate-triangulazioa urteko balio publikoaren txosten baterako.

```
OECD erako konfiantza-proxya (sailaren konfiantza-inkesta espezifikoa):
  Inkestatuen % 58k diote agintaritzak "zuzen tratatuko nauela" fidatzen direla
  (duela bi urte % 64tik jaitsita)

Kexen datuak:
  Onartutako kexak: 4,2 zergadun-elkarrekintza 1.000 bakoitzeko (3,1 1.000 bakoitzetik gora)

Ombudsman-aren bideratzeak:
  Adjudicator's Office independentera bideratzeak: 1.850 urtean, horietatik
  % 61 osorik edo zati batean onartuak agintaritzaren aurka (aurreko urtean % 48tik gora)

Hiruak batera irakurrita: konfiantza jaisten ari da, onartutako kexak igotzen ari dira, eta
ombudsman independentearen aurkikuntzak gero eta gehiago agintaritzaren aurka jartzen dira:
hiru seinale independente norabide berean bat egiten, eta horrek egiten du legitimitate-aurkikuntza
sinesgarri bat, serie bakar bateko zaratatik bereizita.
```

Zifra horietako bakar bat mugitzea ebidentzia ahula litzateke; hiru neurri independente aldi berean mugitzea da legitimitate-aldarrikapena defendagarri egiten duen eredua.

## Software ingeniaritzarekin lotura

Legitimitate-neurriak gutxitan sortzen ditu talde bakar baten aginte-panelak, eta hori da diseinu-lezioa bera: eraiki txosten-kanalizazioak kanpoko iturri independenteetako datuak (ombudsman-aren kasu-sistemak, erregulatzaileen balorazio-jarioak, inkesta-hornitzaileak) txertatu eta adiskidetu ditzaketenak, legitimitatearen txostena barne-neurri hutsa gisa arkitekturatu beharrean, barne iturritako legitimitate-aldarrikapenek ("geure burua fidagarritzat baloratzen dugu") ebidentzia-pisu txikia dutelako; balio publikoaren [puntuazio-txarteleko](../balio-publikoaren-puntuazio-txartela/) legitimitate-ikuspegirako adierazitako independentzia-arazo bera. Kexa eta apelazio-datuen kanalizazioek [emaitzen araberako ordainketa](../emaitzen-araberako-ordainketa-eta-gizarte-inpaktuko-bonoak/) kontratuak elikatzen dituen edozein emaitza-kanalizazioren datu-kalitateko zorroztasun bera merezi dute, gutxi jakinarazitako edo gaizki kategorizatutako kexa-datu-multzo batek legitimitate-arazo bat isilean gutxiesten baitu urtebete geroago konfiantza-inkesta batean ikusgai bihurtu aurretik. Ikus [herritarren asebetetze-neurriak](../herritarren-asebetetze-metrikak/) erakunde-mailako neurri honen transakzio-mailako kidea ezagutzeko, eta [balio publikoa](../balio-publikoa/) hanka hau barne hartzen duen Moore-ren triangelu estrategikoaren esparru osorako.

## Tranpak

- **Asebetetzea legitimitatearen proxy gisa hartzea**: herritar bat transakzio bakar baten interfazearekin asebetetzea eta erakundearekin gutxi fidatzea izan daiteke (edo alderantziz); ikus [herritarren asebetetze-neurriak](../herritarren-asebetetze-metrikak/) bi neurriak zergatik bereizita jakinarazi behar diren jakiteko.
- **Auto-jakinarazitako neurri bakarrean oinarritzea**: independenteki egiaztatu gabeko (ombudsman-aren datuak, erregulatzaileen balorazioak) barne konfiantza-inkesta bat auto-zuzenketa gisa baztertzea erraza da; triangulatu.
- **Desagregazio demografikoa alde batera uztea**: nazio-mailako konfiantza-zifra agregatuek talde zehatzen arteko legitimitate zorrotz dibergentea ezkuta dezakete (adinaren, etnia, diru-sarreren edo eskualdearen arabera); OECDren Trust in Government argitalpenek horregatik desagregatzen dute.
- **Shock batek eragindako beherakada bakar bat joera iraunkor gisa irakurtzea**: konfiantza-zifrak bortizki mugitzen dira krisien (kolapso finantzarioak, pandemiak, eskandalu ezagunak) inguruan eta partzialki berreskuratzen dira; shock ondorengo datu-puntu bakar bat ez litzateke epe luzeko beheranzko joera gisa estrapolatu behar datu gehiagorik gabe.

## Iturriak

- Mark H. Moore, *Creating Public Value: Strategic Management in Government*, Harvard University
  Press, 1995.
- OECD, "Trust in Government." <https://www.oecd.org/en/topics/trust-in-government.html>
- Parliamentary and Health Service Ombudsman, annual casework statistics.
  <https://www.ombudsman.org.uk/>
