# Inpaktu-ebaluazioaren metodoak

Inpaktu-ebaluazioaren metodoak dira politika edo programa batek benetan zer eragin duen estimatzeko erabiltzen diren diseinu estatistiko eta esperimentalak, nolanahi ere gertatuko zatekeenetik bereizita: saiakuntza kontrolatu aleatorioak (RCT), diferentzien diferentzia, joera-puntuazioaren parekatzea eta erregresio-etenaren diseinua dira Erresuma Batuko politika publikoan gehien erabiltzen diren lauak. Existitzen dira gobernuaren esku-hartze gehienak ezin direlako laborategian probatu: ezin duzu ausaz erabaki zein herrik izango duen autobus-linea berria, paziente bati sendagaia ausaz ematen zaion moduan, eta, beraz, metodo hauek logika kausal bera maileguan hartzen dute esleipen aleatoriorik behar izan gabe beti.

## Zergatik den garrantzitsua

HM Treasury-ren Magenta Book-a, A eranskina (metodo kasi-esperimentalak), diseinu hauen artean aukeratzeko Erresuma Batuko gobernuaren gida kanonikoa da, eta Education Endowment Foundation eta What Works Centre for Local Economic Growth bezalako erakundeek haien inguruan eraikitako ebidentzia-hierarkia instituzionalizatzen dute: RCTak ausazkotzea bideragarria eta etikoa denean, diseinu kasi-esperimentalak ez denean. Metodoaren aukera ez da atzeratutako xehetasun tekniko bat: ebaluazio batek «programak eragin al du hau?» ala «hau programa hasi ondoren gertatu al da?» erantzun dezakeen zehazten du, hau da, [analisi kontrafaktualak](../analisi-kontrafaktuala/) profesionalei ebaluazioa enkargatu aurretik galdetzera behartzeko eraikitako galdera bera.

## Matematika

```
RCT:
  Inpaktua = batez bestekoa(emaitza | tratamendu-taldea) − batez bestekoa(emaitza | kontrol-taldea)
  (baliozkoa da tratamenduaren esleipena aleatorioa delako)

Diferentzien diferentzia (DiD):
  Inpaktua = [emaitza_ondoren(tratatua) − emaitza_aurretik(tratatua)]
           − [emaitza_ondoren(kontrola) − emaitza_aurretik(kontrola)]
  («joera paraleloen» hipotesia behar du: tratatua eta kontrola elkarrekin mugituko ziren
   esku-hartzerik gabe)

Joera-puntuazioaren parekatzea (PSM):
  1. Estimatu P(tratamendua = 1 | kobariableak X) unitate bakoitzerako → joera-puntuazioa
  2. Parekatu unitate tratatuak joera-puntuazio antzekoko unitate tratatu gabeekin
  3. Inpaktua = batez bestekoa(emaitza | tratatua) − batez bestekoa(emaitza | kontrol parekatua)

Erregresio-etenaren diseinua (RDD):
  Inpaktua = elegibilitate-atalasean behatutako emaitzaren jauzia,
             mugaren gainetik eta azpitik pixka batera dauden unitateak alderatuz
```

## Adibide landua

**Tokiko erakundea (diferentzien diferentzia familia arazotsuen programa baterako)**: emaitza eskola-asistentzia da. Eremu tratatuak %84tik %89ra egiten du asistentzian (+5 ehuneko-puntu) programaren aldian; eremu alderagarri baina tratatu gabe batek %85etik %87ra (+2 ehuneko-puntu) aldi berean. DiD inpaktu-estimazioa: 5 − 2 = +3 ehuneko-puntu programari egotzi dakizkiokeenak. Eremu tratatuko 2.000 ikasleko kohorte bati aplikatuta, honek gutxi gorabehera 60 ikasle gehiago (%3 × 2.000) asistentzia-kategoria altuagora iristearekin bat dator; estrapolazio hori joera paraleloen oharrarekin jakinarazi behar da, ez buru-zenbaketa zehatz gisa.

**Karitatea (joera-puntuazioaren parekatzea enplegagarritasun-karitate baterako)**: 300 programa-parte-hartzaile administrazio-datu-multzo handiago bateko 300 pertsonarekin parekatzen dira, adinetik, aurreko enplegu-historiatik eta kualifikazio-mailatik eraikitako joera-puntuazioak erabiliz. Hamabi hilabeteko enplegu-tasa: talde tratatu parekatua %46, konparazio-talde parekatua %33. PSM inpaktu-estimazioa: %46 − %33 = +13 ehuneko-puntu programari egotzi dakizkiokeenak, parte-hartzea eta emaitza biak eragiten dituen behatu gabeko nahasgarririk (motibazioa, adibidez) ez dagoela suposatuta.

## Software ingeniaritzarekin lotura

Diseinu hauetako edozein geroago bideragarria izatea datu-ingeniaritzako goiz hartutako erabakien mende dago neurri handian. RDDk behar du zehatz erregistratutako aldagai korrikalaria eta benetan garbia den elegibilitate-muga; DiDk denboran zehar tratatutako eta konparazio-eremuen panel-datu alderagarriak behar ditu, hau da, sistemen eta urteen arteko join koherenteak; PSMk tratamendua baino lehen bildutako oinarrizko kobariable-datu aberatsak behar ditu, ez gero berreraikitakoak. Hasieratik [aldaketaren teoriarekin](../aldaketa-teoria/) eta [eredu logikoarekin](../logika-eredua/) batera diseinatutako datu-ereduak —oinarrizko kobariableak, datak eta konparazio-taldean sartzeko modukoak diren erregistroak jasoz— egiten du posible geroko inpaktu-ebaluazio zorrotza, post-hoc lasterketa garesti baten ordez. Ikus [inpaktu-ebaluazioa vs prozesu-ebaluazioa](../inpaktu-ebaluazioa-eta-prozesu-ebaluazioa/) metodo hauek bakar-bakarrik erantzuten ez duten galdera osagarrirako.

## Tranpak

- **RCT bat bideraezina edo ez-etikoa denean behartzea**, edo, alderantziz, diseinu kasi-esperimental bat inoiz ez kontuan hartzea haren benetako aukera bat —politika-muga bat, zabaltze etapakatu bat— eskuragarri eta erabili gabe zegoenean.
- **DiDko joera paraleloen hipotesia alde batera uztea.** Konparazio-eremua esku-hartzea baino lehen eremu tratatutik dagoeneko aldentzen ari bazen, bi puntuko konparazioa kutsatuta dago; egiaztatu aurretiko joerak, ez aurretik/ondoren bakarrik.
- **PSMn behatutako kobariableetan bakarrik parekatzea.** Behatu gabeko hautaketak, parte-hartzaileen motibazioak esaterako, estimazioa alboratu dezake behatutako kobariableak ondo orekatuta egon arren.
- **RDDn aldagai korrikalariaren manipulazioa.** Jendeak bere puntuazioa elegibilitate-atalasearen barruan erortzeko eragin badezake, etenak ez du jada efektu kausala isolatzen.

## Iturriak

- HM Treasury, Magenta Book (2020), Annex A: Quasi-Experimental Methods. <https://www.gov.uk/government/publications/the-magenta-book>
- What Works Centre for Local Economic Growth, evidence review methodology. <https://whatworksgrowth.org/>
- Education Endowment Foundation, evaluation guidance. <https://educationendowmentfoundation.org.uk/>
