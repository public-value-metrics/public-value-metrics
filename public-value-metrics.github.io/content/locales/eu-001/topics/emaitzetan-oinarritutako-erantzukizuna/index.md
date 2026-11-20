# Emaitzetan oinarritutako erantzukizuna (OBA)

Emaitzetan oinarritutako erantzukizuna (Outcomes-Based Accountability), Lorpenetan oinarritutako
erantzukizuna (Results-Based Accountability, RBA) ere deitua, Mark Friedman-en esparrua da, sektore
publikoko txostenek ohiko moduan nahasten dituzten bi galdera bereizteko: "biztanleria ondo al
dago?" (biztanleriaren erantzukizuna) eta "programa zehatz hau ondo al dabil?" (errendimenduaren
erantzukizuna). Friedman-en arabera, bien nahasketa da ondo kudeatutako programak ez zeukaten
biztanleria-joeren errua jasotzeko arrazoi ohikoena.

## Zergatik den garrantzitsua

Friedman-ek esparrua *Trying Hard Is Not Good Enough* (2005) lanean azaldu zuen, argudiatuz txosten
publiko gehienek erabakitzaileak bide batez itotzen dituztela erakunde bakar batek kontrolatzen ez
dituen biztanleria-mailako estatistikekin (nerabeen haurdunaldi-tasa, langabezia-tasa, bizi-itxaropena)
edo programa-mailako jarduera-zenbaketekin (artatutako bezeroak, egindako bideratzeak), inoren bizitza
hobetu den ala ez ezer esaten ez dutenekin. RBA-ren ekarpena bi horiek bereizten dituen hiztegi
txiki eta diziplinatu bat da: biztanleriaren lorpenak (populazio osoaren ongizate-baldintzak,
"haurrak osasuntsu jaiotzen dira" bezalakoak) ez dira erakunde bakar batenak eta bazkide askoren
mugimendu bateratua eskatzen dute; errendimendu-neurriak (programa zehatz batek bere bezero zehatzak
zein ondo zerbitzatzen dituen) erakunde bakar batenak dira eta erakunde horrek benetan eragin
dezakeenaren aurka bakarrik epaitu behar dira. Friedman-en "hiru errendimendu-galderak" — zenbat egin
dugu, zein ondo egin dugu eta norbait hobeto al dago? — AEBetako estatu eta konderrietako giza
zerbitzuen kontratazioan txertatuta daude orain, eta, RBA-rekin lerrokatutako aholkularitza eta
tresna-multzoa den Clear Impact-en bidez, Erresuma Batuko eta Commonwealth-eko tokiko gobernuen
komisioetan oso erabiliak dira. Interes praktikoa kontratuzkoa da: etxebizitza-programa bat ez da
finantzaketarik gabe utzi behar hiriko etxegabetasun-tasa bere eskumenetik kanpoko makroekonomia-arrazoiengatik
igo delako, baina erabat utzi behar da bere bezeroak etxebizitzan kokatzen ez baditu.

## Matematika

```
Biztanleriaren erantzukizuna (komunitate, eskualde edo nazio batek partekatzen duen "irudi handia"):
  Lorpena       — ongizate-baldintza bat (adib. "bizilagunak ekonomikoki seguru daude")
  Adierazlea(k) — baldintza horren neurri bat (adib. langabezia-tasa, etxeen mediana-errenta)
  → programa bakar batek ez du adierazlearen jabetzarik; mugimenduak ekarle asko behar ditu

Errendimenduaren erantzukizuna (programa batek zeren erantzule den):
  Zenbat egin dugu?        — jarduera-bolumena (artatutako bezeroak, entregatutako unitateak)
  Zein ondo egin dugu?     — kalitatea/eraginkortasuna (programa osatzen dutenen %, bezeroko kostua)
  Norbait hobeto al dago?  — garrantzia duen emaitza (programa ostean 6 hilabetera enplegatuen %,
                              aurretik/ondoren edo konparazio-talde baten aurka)

Programa hirugarren errendimendu-galderan epaitzen da, inoiz ez zuzenean
biztanleriaren adierazlean, bere eskala eta diseinuak bakarrik mugi lezakeela
sinesgarri ez bada.
```

## Adibide landua

**Hiriak finantzatutako enplegu-laguntzako programa**, urtean 500 parte-hartzaile, tokiko erakunde
batek RBA motako errendimendu-esparru baten pean kontratatua:

```
Biztanleriaren adierazlea (testuingurua, ez programaren puntuazio-txartela):
  Hiriko langabezia-tasa: % 6,2 (aurreko urtean % 5,8, programaren
  kontroletik kanpoko fabrika baten itxieragatik)

Errendimendu-neurriak (programaren benetako erantzukizuna):
  Zenbat:     500 parte-hartzaile matrikulatu dira (helburua 480) — lortu
  Zein ondo:  % 78ko amaitze-tasa; amaitzaile bakoitzeko kostua = 340.000 £ / 390 amaitzaile ≈ 872 £
  Hobeto:     390 amaitzaileetatik 260 enplegu iraunkorrean 6 hilabetetara = % 66,7
              konparazio-talde parekatu baten % 41en aurrean (ikus counterfactual-analysis)
```

Biztanleriaren erantzukizunaren irakurketaren arabera, programak huts egiten duela dirudi — hiriko
langabezia-tasa igo egin da haren esku. RBA-ren errendimendu-erantzukizunaren irakurketaren arabera,
programak arrakasta du: bolumen-helburua bete du, kalitatea egonkor mantendu du eta konparazio-talde
parekatuak baino 25,7 puntu portzentual gorago dagoen enplegu-emaitza lortu du, biztanleriaren
adierazlea programaren kontrolaz erabat kanpoko arrazoiengatik (fabrika baten itxiera) mugitu den
bitartean.

## Software ingeniaritzarekin lotura

RBA-k SRE-ko bereizketa ezagun batekin bat egiten du: biztanleriaren adierazleak ingeniaritza-talde
bakar batek hasieratik amaierara jabetzen ez dituen negozio-mailako North Star metrikak bezalakoak
dira (konpainiaren diru-sarrerak, merkatu-kuota), eta errendimendu-neurriak taldearen SLO propioen
antzekoak, talde horren diseinu-erabakiek benetan mugitzen dituzten gauzak. Biak bereizi gabe
jakinarazten dituen aginte-panel batek RBA saihesteko sortu zen atribuzio okerra eragiten du:
guardiako ingeniari bati mendekotasun-talde batek kontrolatzen duen metrika bat egoztea. Emaitzen
kontratuetarako txosten-tresnak komisionatzean edo eraikitzean, eraiki "zenbat / zein ondo / hobeto"
hirukoa lehen mailako eremu gisa, bereizita iragazgarriak, KPI nahasi bakar baten ordez — diziplina
bera da [sektore publikoko KPI-etan](../sektore-publikoko-kpi-ak/) adierazle aurreratuak eta atzeratuak
bereiztearena. RBA da, halaber, [emaitzen araberako ordainketa eta gizarte-inpaktuko bonoen](../emaitzen-araberako-ordainketa-eta-gizarte-inpaktuko-bonoak/)
azpiko erantzukizun-logika: PbR kontratu batek "hobeto" errendimendu-neurriaren arabera bakarrik ordain
dezake bidezkoki, inoiz ez biztanleriaren adierazlearen arabera, esku-hartzea haren eragile
nagusia ez bada.

## Tranpak

- **Programa bat kontrolatu ezin duen biztanleria-adierazle baten arabera ordaintzea edo zigortzea**:
  RBA-k saihestu nahi duen akats bakarra da; jarraitu beti programa biztanleriaren lorpenaren
  ekarle nagusia ala txikia den ondorioak lotu aurretik.
- **"Zenbat" jakinaraztea "hobeto" balitz bezala**: jarduera-zenbaketak (artatutako bezeroak) bildu
  beharreko daturik errazenak eta informazio gutxienekoak dira; exijitu "norbait hobeto al dago"
  galdera benetako emaitza-datuekin erantzutea, ahal bada kontrafaktual baten aurka (ikus
  [analisi kontrafaktuala](../analisi-kontrafaktuala/)).
- **RBA adierazleak betiko finkotzat hartzea**: Friedman-en metodoa esplizituki iteratiboa da —
  "datuak, istorioa, zerk funtzionatzen duen, ekintza-plana" zikloa— ez puntuazio-txartelaren diseinu-ariketa puntual bat.
- **"Hobeto" neurtzeko konparazio-talderik ez**: aurretik/ondoren aldaketa batek, kontrafaktualik
  gabe, programaren eragina eta biztanleriak hala ere erakutsiko lukeen joera nahasten ditu.

## Iturriak

- Mark Friedman, *Trying Hard Is Not Good Enough: How to Produce Measurable Improvements for
  Customers and Communities*, Trafford Publishing, 2005.
- Clear Impact, "What is Results-Based Accountability?"
  <https://clearimpact.com/results-based-accountability/>
