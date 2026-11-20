# Analisi kontrafaktuala

Kontrafaktuala esku-hartze baten faltan zer gertatuko zen jakiteko estimazio bat da. Hori gabe, programa bat abiarazi ondoren behatutako aldaketa bat ezin da bereizi nolanahi gertatuko zen aldaketa batetik — kontrafaktualik ez, efektuaren ebidentziarik ez, aurretik/ondoren zenbakiak zein erakargarri diruditen ere. HM Treasury-ren Magenta Book-ak kontrafaktual sinesgarri bat eraikitzea jotzen du inpaktu-ebaluazioaren zeregin metodologiko nagusitzat, diseinu-aukera bakar ororen gainetik.

## Zergatik den garrantzitsua

"Krimena %15 jaitsi zen programa ezarri ondorengo urtean" ez da programak funtzionatu zuenaren ebidentzia, harik eta programarik gabe krimenari zer gertatuko zitzaion jakin arte — krimena %20 jaitsi zitekeen nolanahi ere, erlazionatu gabeko joera ekonomiko edo demografikoengatik, eta horrek esan nahiko luke programak gauzak okerrago utzi zituela kontrafaktualarekin alderatuta, zenbaki gordina hobetu arren. Hau da sektore publikoko eta gizarte-sektoreko inpaktu-aldarrikapenetan akats analitiko ohikoena: aurretik/ondoren konparazio bat kausalitatearen ebidentziatzat hartzea. Magenta Book-ak esplizitua da inpaktu-ebaluazioa galdera kontrafaktual bati erantzuteko dagoela —"zer aldea egin zuen esku-hartze honek?"— eta hari erantzuteak gertatu ez zen mundua estimatzea eskatzen duela, ez deskribatzea bakarrik.

Metodo desberdinek kontrafaktuala konfiantza-maila desberdinekin eraikitzen dute, eta gobernuaren ebaluazio-gidek horren arabera sailkatzen dituzte. Saiakuntza kontrolatu aleatorizatuek (RCT), non pertsonak edo eremuak ausaz esleitzen diren esku-hartzea jasotzeko edo ez jasotzeko, kontrafaktual sendoena sortzen dute, aleatorizazioak ziurtatzen baitu tratamendu- eta kontrol-taldeak batez beste esku-hartzea jasotzean bakarrik desberdintzen direla. Cabinet Office-k eta What Works Network-ek RCT-ak sustatu dituzte Erresuma Batuko politika publikoan Behavioural Insights Team-en 2012ko "Test, Learn, Adapt" txostenetik, hain zuzen diseinu ahulagoak nahasketa-faktoreen aurrean ahulak direlako — behatutako aldea nork parte hartzea aukeratu zuenaren isla izan daiteke, ez programaren efektuarena. Aleatorizazioa praktikoa edo etikoa ez denean (sarritan gertatzen den bezala eskubide legala duten programetan edo biztanleria osoko politika-aldaketetan), Magenta Book-ak ahulagoak baina oraindik erabilgarriak diren alternatiben hierarkia esplizitu bat ezartzen du: erkaketa-talde parekatuak, differences-in-differences diseinuak, eskuragarritasun-atalaseen inguruko erregresio-etenak, eta, azken baliabide gisa, aurretik/ondoren konparazio sinplea — ebidentzia-forma ahulena dela argi markatuta, programaren efektua aldi berean aldatu zen gainerako guztiaren efektuarekin nahasteko joera duena.

## Matematika

Kontrafaktualaren esparrua, metodo guztietan aplikagarria:

```
Inpaktu estimatua = Emaitza(esku-hartzearekin) − Emaitza(kontrafaktuala: esku-hartzerik gabe)

EZ:
Inpaktu estimatua ≠ Emaitza(ondoren) − Emaitza(aurretik)   [denbora tratamenduarekin nahasten du]
```

Differences-in-differences (DiD), gobernuaren ebaluazioko diseinu kuasi-esperimental ohikoenetako bat, tratamendu-efektua isolatzen du erkaketa-taldearen aurretik/ondoren aldaketa bera kenduz:

```
DiD estimazioa = [Emaitza(tratatua, ondoren) − Emaitza(tratatua, aurretik)]
               − [Emaitza(erkaketa, ondoren) − Emaitza(erkaketa, aurretik)]
```

Honek bi taldeek partekatzen duten joera oro kentzen du (adib. guztiei eragiten dien aldaketa ekonomiko nazional bat), esku-hartzeari egotz dakiokeen aldaketa diferentziala bakarrik utziz.

## Adibide landua

**Enplegu-programa, aurretik/ondoren (diseinu ahula)**: lan-laguntzako eskema batek jakinarazten du parte-hartzaileen enplegua %40tik %55era igo zela urtebetean — "+15 ehuneko-puntu programagatik" ondorio inozoa.

**Programa bera, differences-in-differences (diseinu sendoagoa)**: tokiko lan-merkatu berekoak diren parte-hartzaile ez diren antzeko pertsonen erkaketa-talde parekatu batek erakusten du enplegua %38tik %47ra igo zela urte berean (suspertze ekonomiko nazional bat zegoen martxan).

```
Talde tratatuaren aldaketa:    %55 − %40 = +15 ehuneko-puntu
Erkaketa-taldearen aldaketa:   %47 − %38 = +9 ehuneko-puntu

DiD estimazioa (programaren benetako efektua) = 15 − 9 = +6 ehuneko-puntu
```

Egotz daitekeen efektu zintzoa 6 ehuneko-puntu da, ez 15 — aurretik/ondoren itxurazko hobekuntzaren erdia baino gehiago programarik gabe ere gertatuko zen, erkaketa-taldea ere igo zuen suspertze ekonomiko berak eraginda.

**Erregresio-etena, eskuragarritasun-atalasea**: diru-laguntza eskema bat 50 langile baino gutxiagoko enpresentzat bakarrik dago eskuragarri. Atalasearen azpian dauden enpresen (45–49 langile, eskuragarriak) emaitzak gainean daudenekin (50–54 langile, ez eskuragarriak) alderatzeak kontrafaktual sinesgarri bat ematen du, ebaketa administratibo arbitrario baten bi aldeetako enpresak bestela antzekoak direlako — atalasea da, ez azpiko enpresa-ezaugarriren bat, eskuragarritasuna zehazten duena. Atalasean bakarrik behatutako £2.000ko batez besteko emaitza-aldea bi taldeen artean diru-laguntzari askoz konfiantza handiagoz egotz dakioke eskuragarri dauden enpresa guztiak ez-eskuragarri guztiekin alderatzen duen konparazio sinple batek baino (tamainan sistematikoki desberdintzen direnak).

## Software ingeniaritzarekin lotura

Pentsamendu kontrafaktualak gobernu- eta gizarte-sektoreko softwarerako inpaktu-jarraipeneko sistemak eta ebaluazio-pipelineak nola diseinatzen diren moldatu behar luke:

- Eraiki erkaketa-taldearen harrapaketa sistemara hasieratik — nor zen eskuragarri baina ez zen matrikulatu, edo parte-hartzaile ez den koorte parekatu bat erregistratzea — programa jada exekutatu denean eta aurretik/ondoren datuak bakarrik daudenean atzeraeraginez gehitu beharrean.
- Aleatorizazioa bideragarria denean (hedapen faseatu bat, erabiltzaile batzuentzat besteen aurretik gaitutako zerbitzu digital bat), instrumentatu sistema ausazko esleipena kontsulta daitekeen eremu gisa gordetzeko; hedapen faseatu batek bere ebaluazio-balioa ustekabean suntsitzen du esleipen-ordena erregistratzen ez bada.
- Hau da [inpaktu-ebaluazioaren metodoen](../inpaktu-ebaluazioaren-metodoak/) oinarrizko metodoa, eta bereizten du [inpaktu-ebaluazioa vs prozesu-ebaluazioa](../inpaktu-ebaluazioa-eta-prozesu-ebaluazioa/) gaitik, azken honek programa asmatu bezala entregatu den galdetzen duelako, efektu bat eragin duen ez.
- [Gehigarritasuna eta pisu hila](../gehigarritasuna-eta-pisu-hila/) eta [desplazamendua eta atribuzioa](../desplazamendua-eta-atribuzioa/) biak funtsean galdera kontrafaktualak dira — pisu hila "emaitza zehatz hau esku-hartzerik gabe zein izango zen" da, ebaluazio-diseinu osoaren mailan baino doikuntza mailan aplikatua.

## Tranpak

- **Aurretik/ondoren kausalitatearen ebidentziatzat hartzea.** Hau da inpaktu-jakinarazpen publiko eta sozialeko akats ohikoena eta ondorio handienekoa; aurretik/ondoren aldaketa batek programaren efektua aldi berean aldatu zen beste guztiarekin nahasten du.
- **Talde tratatuarengandik sistematikoki desberdintzen den erkaketa-talde bat erabiltzea.** Erkaketa-talde parekatu batek benetan antzekoa izan behar du ezaugarri garrantzitsuetan (ikus [analisi kontrafaktuala](../analisi-kontrafaktuala/) Magenta Book-eko metodoen hierarkia); programako parte-hartzaileak (izena eman dutenak, eta sarritan motibatuagoak) parte hartu ez dutenekin alderatzeak hautaketa-alborapena programaren efektu gisa mozorrotzeko arriskua du.
- **Aleatorizazio-aukerak suntsitzea entrega-diseinu eskasaren bidez.** Hedapen faseatu edo aleatorizatu batek ebaluazio-balioa gordetzen du esleipena benetan ausazkoa eta erregistratua bada bakarrik — tokiko kudeatzaileei nor lehenengo joango den aukeratzen uzteak xedea hutsaltzen du.
- **Diseinu ahul batetik zehaztasuna gehiegi aldarrikatzea.** Aurretik/ondoren estimazio bat orientagarri gisa aurkeztu behar da, ez efektu-tamaina neurtu gisa; Magenta Book-eko ebidentzia-hierarkia dago aldarrikapen baten indarra hura sortu duen diseinuaren indarrarekin bat etor dadin.

## Iturriak

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020), and its
  supplementary guide on quasi-experimental methods.
  <https://www.gov.uk/government/publications/the-magenta-book>
- Cabinet Office / Behavioural Insights Team, "Test, Learn, Adapt: Developing Public Policy with
  Randomized Controlled Trials" (2012).
- What Works Network, standards of evidence guidance. <https://www.gov.uk/guidance/what-works-network>
- Angrist JD, Pischke J-S. *Mostly Harmless Econometrics: An Empiricist's Companion*. Princeton
  University Press, 2009 (standard reference for difference-in-differences and regression
  discontinuity methods).
