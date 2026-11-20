# Diruaren truke balioa (VFM)

Diruaren truke balioa Erresuma Batuko sektore publikoaren proba formala da, gastuak kostuaren eta onuraren arteko oreka onena lortzen duen ala ez jakiteko. HM Treasury-ren Green Book-ak hiru "E"-ren bidez planteatzen du (economy, efficiency eta effectiveness: ekonomia, eraginkortasun operatiboa eta eraginkortasuna), ekitatea gero eta gehiago laugarren eztabaidagarri gisa argudiatuz. Azterketa gainditzen duen sektore publikoko negozio-kasu orok hirurei esplizituki erantzun behar die, ez soilik gastua "merezi duela" aldarrikatu.

## Zergatik den garrantzitsua

VFM ez da "merkea"ren sinonimo. Green Book-ak (HM Treasury, 2022ko edizioa) esplizituki dio kostu baxueneko aukera erostea (ekonomia) aurreikusitako emaitzak sortzen dituen egiaztatu gabe (eraginkortasuna) akats arrunt eta garestia dela: unitate-kostuan % 10 aurrezten duen baina % 40 eragin gutxiago entregatzen duen erosketa balio okerragoa da, ez hobea. Hiru E-en esparruak negozio-kasu bat benetan desberdinak diren hiru porrot-moduak bereizten behartzen du: sarreretarako gehiegi ordaintzea, sarrerak irteera bihurtzean xahutzea, eta inork nahi izan ez dituen emaitzetara itzultzen ez diren irteerak sortzea. Erresuma Batuko gobernuaren gastu-kontrolak (Treasury-ren onarpen-puntuak, National Audit Office-ren (NAO) diruaren truke balioaren azterlanak eta sailen kontu-emaile agenteen ebaluazioak) hiru zatiko proba honen inguruan eraikita daude, beraz kostua (ekonomia) bakarrik jorratzen duen ingeniaritza-negozio-kasu batek azterketa ez du gaindituko teknologia sendoa izan arren.

"Laugarren E-a", ekitatea, hain zuzen eztabaidatua da beste hiruekin gatazkan egon daitekeelako: zerbitzu bat nazio-mailan entregatzeko modurik eraginkorrena gutxitan da ekitatiboena, entrega herritarrengana iristeko merkeena den tokian kontzentratzeak askotan iristeko zailenak gutxi zerbitzatzea esan nahi baitu. Green Book-aren 2020ko berrikuspenak kritikari erantzun zion (2020ko Treasury Select Committee-tik eta IPPR North-etik barne), kostu-onura ratio hutsek sistematikoki dagoeneko oparoak diren eskualdeei mesede egiten zietela esanez, eta balioespenek banaketa-eragina esplizituki jorratzea eskatuz; ikus [banaketa-haztapena](../banaketa-haztapena/).

## Matematika

VFM ez da ratio bakar bat, hiru zatiko (edo lau zatiko) diagnostiko bat baizik, segidan aplikatua:

```
Ekonomia:        Sarrerak eskatutako kalitaterako kostu arrazoizko baxuenean erosten al dira?
                 (£ sarrera-unitateko)

Eraginkortasun
operatiboa:      Zein ondo bihurtzen dira sarrerak irteera?
                 (irteerak / sarrerak, adib. kasu prozesatuak kasu-langile-orduko)

Eraginkortasuna: Irteerek benetan aurreikusitako emaitzak sortzen al dituzte?
                 (lortutako emaitzak / aurreikusitako emaitzak)

[Ekitatea]:      Kostuak eta onurak modu bidezkoan banatzen al dira
                 biztanleriaren artean, ala gutxien behar dutenengan kontzentratzen dira?
```

VFM porrota edozein fasetan gerta daiteke independenteki: erosketa ekonomikoa entrega ez-eraginkorrarekin; okerreko irteeraren entrega eraginkorra; emaitza eraginkorrak gehiegizko kostuan erosiak. Ikus [sektore publikoko KPI-ak](../sektore-publikoko-kpi-ak/) hauek adierazle neurgarri nola bihurtzen diren jakiteko, eta [kostu-eraginkortasunaren analisia gobernuan](../kostu-eraginkortasunaren-analisia-gobernuan/) alderaketa-metodo formalerako.

## Adibide landua

**Toki-agintaritzaren kontaktu-zentroa**: udal batek kasu-kudeaketa sistema berri baterako bi aukera alderatzen ditu.

- *A aukera*: £600.000ko lizentzia (eskuragarri merkeena), baina agenteek oraindik batez beste 22 minutu behar dituzte kasu bakoitzeko, lan-fluxuak sistemen artean eskuz birsartzea eskatzen duelako: eraginkortasun operatiboa eskasa da.
- *B aukera*: £900.000ko lizentzia, lan-fluxu integratua, agenteek batez beste 9 minutu kasu bakoitzeko.

Ekonomiak bakarrik A hobesten du (£300.000 merkeagoa). Baina urtean 40.000 kasuan, A-k 40.000 × 22/60 = 14.667 langile-ordu kostatzen ditu; B-k 40.000 × 9/60 = 6.000 langile-ordu. Langile-kostu osoa £28/ordu izanik, A-k £410.667/urte kostatzen du langileen denboran, B-ren £168.000/urteren aldean: £242.667/urteko eraginkortasun-aldea, 14 hilabetetan £300.000ko aldez aurreko ekonomia-aldea gainditzen duena. VFMk B hobesten du eraginkortasun operatiboa kontuan hartzen denean, ez A.

**Karitatearen entrega-diru-laguntza**: finantzatzaile batek £50.000ko diru-laguntza bat (200 lanpostu-kokapen arrakastatsu, £250/kokapen: itxuraz ekonomia bikaina) alderatzen du £120.000ko beste batekin (350 kokapen, 12 hilabete baino gehiagoz irauten dutenak), lehen diru-laguntzaren kokapenen erdiak 3 hilabetetan amaitzen direla kontuan hartuta. Eraginkortasunak (emaitza iraunkorrak) itxurazko VFM sailkapena irauli egiten du: *kokapen iraunkor* bakoitzaren benetako kostua lehen diru-laguntzarentzat £250 ÷ 0,5 = £500 da, bigarrenarentzat £120.000/350 ≈ £343-ren aldean.

## Software ingeniaritzarekin lotura

VFMk ingeniaritza-taldeei teknologia-negozio-kasuak finantza- eta auditoretza-funtzioek benetan irakurriko dituzten moduan planteatzeko diziplina ematen die:

- Adierazi ekonomia, eraginkortasun operatiboa eta eraginkortasuna negozio-kasu bateko lerro bereizi gisa, ez "balio" zenbaki nahaste bakar bat; Green Book-ean trebatutako berrikusle batek hain zuzen banaketa hori eskatuko du.
- Kontuz erosketa-kostua (ekonomia) optimizatzearekin integrazioaren eta lan-fluxuaren eraginkortasunaren kaltetan; oso ohikoa den aurrezki faltsua da gobernuko IT-an (ikus [jabetza-kostu osoa gobernuko IT-an](../jabetza-kostu-osoa-gobernuko-it-an/) eta [eraiki vs. erosi gobernuan](../eraiki-ala-erosi-gobernuan/)).
- Eraginkortasunak emaitza-datuak behar ditu, ez irteera-kopuruak bakarrik; lotu entrega-neurriak [emaitzak vs. irteerak](../emaitzak-eta-irteerak/) gaiarekin eta ebaluazio errealarekin [analisi kontrafaktualaren](../analisi-kontrafaktuala/) bidez, irteerek emaitzak dakartzatela suposatu beharrean.
- Sistema batek eskualde edo talde demografikoen artean modu irregularrean zerbitzatzen duenean, ekitate-galdera VFM aurkaritza zilegi bat da, ez "polita izango litzateke" bereizi bat; ikus [inklusio digitala](../inklusio-digitala/).

## Tranpak

- **VFM prezio baxuenarekin berdintzea.** Ekonomia probaren herena (edo laurdena) da; Green Book-ak esplizituki ohartarazten du eraginkortasun operatiboa eta eraginkortasuna alde batera uzten dituzten "kostu baxuenaren" erosketa-arauen aurka.
- **Irteerak neurtu eta emaitzak deitzea.** Kasu-errendimendua (eraginkortasun operatiboa) ez da kasu ondo ebatziak (eraginkortasuna) bezala; ikus [emaitzak vs. irteerak](../emaitzak-eta-irteerak/).
- **Ekitatea aukerazkotzat hartzea.** Green Book-aren 2020ko eguneraketatik, banaketa-eragina hiru E tradizionalen ondoan ebaluatu behar da, ez geroago gehitu; negozio-kasu bat onartu ondoren atzera sartzea hasieratik sartzea baino askoz zailagoa da.
- **Bolumen desberdineko aukerak normalizatu gabe alderatzea.** Biztanleria desberdinak zerbitzatzen dituzten aukeren arteko unitate-bakoitzeko VFM alderaketak eskala kontrolatu behar du, edo eraginkortasun-alderaketak ez du zentzurik.

## Iturriak

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation" (2022
  edition). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- National Audit Office, "Framework to review programmes and projects" and VFM study methodology.
  <https://www.nao.org.uk/>
- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020).
  <https://www.gov.uk/government/publications/the-magenta-book>
- IPPR North, "Transport Infrastructure Investment: Determining Value for Money" (evidence to the
  Treasury Select Committee's 2020 review of the Green Book's regional bias).
