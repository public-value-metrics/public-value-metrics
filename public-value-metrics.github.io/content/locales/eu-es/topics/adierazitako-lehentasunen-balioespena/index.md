# Adierazitako lehentasunen balioespena

Adierazitako lehentasunen metodoek merkatuz kanpoko ondasun baten balioa estimatzen dute jendeari zuzenean galdetuz zenbat ordaintzeko prest egongo liratekeen horregatik, edo zenbateko konpentsazio onartuko luketen hura uzteko, normalean egoera hipotetiko bat deskribatzen duen inkesta egituratu baten bidez. Balioespen kontingentea da familiako teknika ezagunena.

## Zergatik den garrantzitsua

Green Book-aren 2. eranskinak (merkatuz kanpoko eraginak balioesteko gidaliburu osagarria) adierazitako lehentasunen metodoak onartzen ditu balioa ondorioztatzeko behatu daitekeen merkatu-transakziorik ez duten ondasunetarako: aire-kalitatea, biodibertsitatea, uholde-babesa, norbaitek inoiz bisitatuko ez duen paisaia baten existentzia-balioa
(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>).
Defra-k bere adierazitako lehentasunen gidaliburua argitaratu du ingurumen-balioespenerako, ingurumen-balioaren zati handi batek (habitaten kontserbazioa, uraren kalitatea) ez duelako proxy-merkaturik, adibidez zaratak ez bezala, zeina gutxienez etxebizitzen prezio behagarriekin lotzen den (ikus [agerian utzitako lehentasunen balioespena](../agerian-utzitako-lehentasunen-balioespena/)).

Adierazitako lehentasunen erakargarritasun nagusia (literalki edozer balioetsi dezake, inork inoiz transakzionatu ez dituen ondasunak barne) da, aldi berean, bere sinesgarritasun-arazoaren iturria. Inkestatuek benetan dirurik gastatzen ez dutenez, balioespen kontingenteko inkestak alborapen hipotetikoaren aurrean ahulak dira (jendeak ordaintzeko borondatea gainestimatzen du aurrekontu-murrizketa errealik ez dagoenean), txertatze-efektuen aurrean (ondasun bera modu desberdinean balioesten da inkestan beste zer dagoenaren arabera) eta eskaintza-jokoen diseinuetako abiapuntu-alborapenaren aurrean. Exxon Valdez-eko petrolio-isurketaren auzien ondoren bildutako 1993ko NOAA panelak balioespen kontingentearen diseinu-estandarrak ezarri zituen (eskaintza irekiaren ordez "£X ordainduko zenuke, bai/ez" erreferendum formatu bitarra, eta inkestatuaren benetako aurrekontu-murrizketaren gogorarazpen derrigorrezkoak), eta gaur egun ere defendagarriak diren inkesten erreferentzia-estandarra dira.

## Matematika

```
Balioespen kontingentea (erreferendum formatua):
  Aukera bitar bat aurkeztu: "ordainduko zenuke £X urtean Y emaitzarengatik? bai/ez"
  X inkestatuen artean ausaz aldatu.
  Ordaintzeko borondatea X bakoitzeko bai/ez erantzun-tasaren funtzio gisa doitu.

WTP batez bestekoa = estimatutako eskari-kurbaren azpiko area
Balio agregatua = WTP batez bestekoa × eragindako biztanleria

Aukera-esperimentuaren (aukera diskretuaren modelizazioa) aldaera:
  Inkestatuei atributu-sortei buruzko aukera errepikatuak aurkeztu
  (kostu-atributu bat barne), eta kostua ez diren atributu bakoitzaren
  prezio inplizitua estimatu inkestatuek agerian uzten dituzten
  trukeetatik.
```

Aukera-esperimentuaren aldaera hobetsi ohi da Erresuma Batuko egungo praktikan galdera bakarreko balioespen kontingentearen aurrean, inkestatuak hainbat atributu kostuaren aldean behin eta berriz trukatzera behartzeak barne-koherentzia handiagoko eta manipulatzeko zailagoak diren estimazioak sortzen dituelako, bai/ez galdera bakar batek baino.

## Adibide landua

**Gobernu nazionala**: Defra-k balioespen kontingenteko inkesta bat enkargatzen du ibai bateko uraren kalitatea hobetzeko programa bat balioesteko. 2.000 etxeko erreferendum formatuko inkesta batek aurkitzen du % 62k ordainduko lukeela £40/urte ur-fakturaren hipotetiko gehigarri baten bidez, eta estimatutako eskari-kurbak etxe bakoitzeko £28/urteko ordaintzeko borondate batez bestekoa ematen du.

```
WTP batez bestekoa = £28/etxe/urte
Arroko etxeak = 340.000
Urteko balio agregatua = £28 × 340.000 = £9,52 milioi/urte

20 urteko balioespen-aldian % 3,5eko deskontu-tasarekin (anualitate-faktorea ≈ 14,2):
PV(onura) ≈ £9,52 milioi × 14,2 ≈ £135 milioi
```

Zifra agregatu hori programaren [gizarte-kostu-onura analisiaren](../gizarte-kostu-onura-analisia/) kostu-aldearekin alderatzen da. Green Book-ak eskatzen du adierazitako lehentasunen ebidentzia mota hau konfiantza-tartearekin eta inkestaren metodologiarekin batera jakinaraztea, ez puntuko estimazio huts gisa, azpiko zifra merkatu-prezio bat baino hauskorragoa delako hain zuzen.

**Karitatea**: ondare-fundazio batek bisitariei eta bisitari ez direnei galdetzen die eraikin historiko baten itxiera saihesteko ordaintzeko borondateari buruz, ez bi taldeek ezinbestean bisitatzen ez dutena (bere existentzia-balioa). Eraikina inoiz ikusiko ez duten bisitari ez direnek WTP positiboa jakinarazten dutenez, inkestak existentzia- eta ondare-balioa jasotzen du, bisitarien sarreren diru-sarreren kontaketa soil batek (agerian utzitako lehentasunen proxy bat) guztiz galduko lukeena; horrek adierazitako lehentasunen abantaila erreala erakusten du, balioa agerian utziko lukeen inolako merkatu-transakziorik ez dagoen tokian.

## Software ingeniaritzarekin lotura

Adierazitako lehentasunen metodoek gutxitan aplikatzen dira zuzenean software ingeniaritzako lanean, baina herritarren kontsulta-plataformak, aurrekontu-partaidetzako tresnak edo inkesta publikoetarako azpiegiturak eraikitzen dituzten ingeniariek askotan ekonomiak behar duen tresna bera eraikitzen dute. Inkestaren diseinuaren xehetasunak zuzen lortzea (eskaintza-zenbateko ausazkoak, erreferendum-enuntziatu bitarra galdera irekien aurrean, aurrekontu-murrizketaren gogorarazpen esplizituak) ez da UX-aren fintasun bat; hori da emaitzazko balioespena azterketaren aurrean defendagarri egiten duena, eta aplikazioaren barruko inkesta gaizki diseinatu batek hilabeteetako ondorengo analisi ekonomikoa baliogabetu dezake. Ikus [herritarren asebetetze-neurriak](../herritarren-asebetetze-metrikak/) analisi-pisua izango duten iritzi publikoko datuak lortzeko diziplina orokorragorako.

## Tranpak

- **"Zenbat ordainduko zenuke?" galdera irekiak.** Hauek erreferendum enuntziatu bitarrak baino askoz joera handiagoa dute alborapen estrategiko eta ainguratzearen aldera; NOAA panelaren erreferendum formatua erabiltzeko gomendioa hain zuzen existitzen da galdeketa irekiak gaizki funtzionatzen duelako.
- **Inkestatuaren benetako aurrekontu-murrizketaren gogorarazpenik ez egitea.** Hura gabe, adierazitako WTP-k ohikoki gainditzen du pertsona berberek benetako aurrekontu-trukaketa dagoenean ordainduko luketena: alborapen hipotetikoa.
- **Txertatze-efektuak alde batera uztea.** Ondasun bera bakarrik balioetsita edo sorta handiago baten zati gisa balioetsita WTP estimazio desberdinak sortzen ditu; jakinarazi inkestaren markoan beste zerbait zegoen, eta zer.
- **Inkesta bakar baten puntuko estimazioa behin betikotzat hartzea.** Green Book-aren praktikak tarte bat eta alborapen ezagunen eztabaida bat espero ditu, ez kostu-onura taulan merkatu-prezio bat balitz bezala eramandako zenbaki huts bat.

## Iturriak

- HM Treasury. "The Green Book," Annex 2: valuing non-market impacts.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Defra. "Valuing environmental impacts: practical guidelines" (contingent valuation and choice
  experiment guidance). <https://www.gov.uk/government/collections/valuing-environmental-impacts>
- Arrow K, et al. "Report of the NOAA Panel on Contingent Valuation." Federal Register, 1993.
- Mitchell RC, Carson RT. "Using Surveys to Value Public Goods: The Contingent Valuation Method."
  Resources for the Future, 1989.
