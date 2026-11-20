# Ongizatera egokitutako bizi-urteak (WELLBY)

WELLBY bat bizitzarekiko asebetetze-puntu gehigarri bat da, 0-10 ongizate-eskala estandarrean, pertsona batentzat urte batez. Osasunaren ekonomian erabiltzen den QALY-aren baliokide egiturazkoa da (elkarren artean beste ezer komunean ez duten esku-hartzeen emaitzak alderatzeko aukera ematen duen unitate bakarra), baina osasun-egoera klinikoetan oinarritu beharrean ongizate subjektiboan oinarritua, eta HM Treasury-ren "Wellbeing guidance for appraisal: supplementary Green Book guidance" (2021) dokumentuan jasoa.

## Zergatik den garrantzitsua

Kostu-onura balioespenak unitate komun bat behar du gazte-kluba baterako diru-laguntza, errepide-segurtasuneko eskema bat eta buruko osasun-zerbitzu bat alderatzeko, eta hiruek ez dute emaitza-neurri komunik. Osasunaren ekonomiak hori konpondu zuen esku-hartze klinikoetarako QALY-arekin: kalitatearen arabera doitutako bizi-urte bat, 0tik (hilda) 1era (osasun osoa) haztatua. HM Treasury-ren ongizate-gidaliburuak logika bera osasunaz kanpoko gastu publikora hedatzen du, ONSen bizitzarekiko asebetetzearen galdera harmonizatua ("Oro har, zein asebeteta zaude zure bizitzarekin gaur egun?", 0-10 erantzuna) emaitza-eskailera gisa erabiliz, osasun-egoeren indize baten ordez. 1eko WELLBY batek esan nahi du pertsona baten bizitzarekiko asebetetzea puntu oso batean igotzen dela urte batez (edo, baliokide gisa, hamar pertsonen asebetetzea 0,1 puntuan igotzen dela urte batez; WELLBY-ak biztanleria osoan batzen dira QALY-ak bezala). HM Treasury-ren gidaliburuak WELLBY bakoitzeko diru-balio ilustratibo bat ezartzen du (£13.000 inguru, 2019/20ko prezioak), ongizate subjektiboaren datuak bizi-urte baten balioaren beste ikuspegi batzuekin adiskidetuz eratorria, balioespen-egileei emaitzak diruztatzeko modu bat emanez (bakardadearen murrizketa, komunitatearen kohesioa, gune berdeetarako sarbidea), [ongizatearen balioespenaren](../ongizatearen-balioespena/) teknikek lehen deskribatu bakarrik egin zezaketenak, osasun- edo segurtasun-gastuarekin oinarri komunean alderatu gabe.

## Matematika

```
WELLBY = Δ bizitzarekiko asebetetzea (0–10 eskala) × aldaketak irauten duen urte-kopurua
         (eragindako pertsona guztien artean batuta)

Ongizate-onura diruztatua = sortutako WELLBY-ak × WELLBY bakoitzeko balioa (HMTren erreferentzia-balioa)

cf. QALY = Δ osasun-egoeraren erabilgarritasuna (0–1 eskala) × egoera horretan bizitako urteak
```

0-10 asebetetze-eskala eta 0-1 QALY erabilgarritasun-eskala ez dira trukagarriak bihurketa-urrats bat gabe; HM Treasury-ren gidaliburuak biak adiskidetzea eztabaidatzen du, adibidez QALY-etan balioetsitako osasun-esku-hartze bat eta WELLBY-etan balioetsitako gizarte-esku-hartze bat isilean bikoiztuta edo konparaezin utzi gabe [Green Book-aren balioespen](../green-book-ebaluazioa/) berean.

## Adibide landua

**Toki-agintaritzaren bakardade-zerbitzua**: adiskidetze-eskema batek 400 adineko egoiliar isolatu zerbitzatzen ditu. Jarraipen-inkestek erakusten dute bizitzarekiko asebetetzearen batez bestekoa 5,2tik 6,0ra igotzen dela (0,8 puntuko irabazia), eta efektuak 2 urtez irauten duela estimatzen da itzali aurretik.

```
WELLBY-ak = 400 pertsona × 0,8 puntu × 2 urte = 640 WELLBY

Balio diruztatua = 640 × £13.000 = £8.320.000
```

Programaren urteko £300.000ko kostuaren aldean (£600.000 2 urtetan), onura-kostu ratioa 8.320.000 / 600.000 ≈ **13,9:1** da inguru: orain osasun-eskema baten saihestutako QALY-ko kostuaren edo garraio-eskema baten bidaia-denboraren aurrezkien taula berean egon daitekeen zifra bat.

**Karitatea, eskala txikiagoan**: komunitate-arte programa batek 50 parte-hartzaile ditu, 0,3 puntuko asebetetze-irabazi neurtuarekin, urte batez irauten duena.

```
WELLBY-ak = 50 × 0,3 × 1 = 15 WELLBY
Balio diruztatua = 15 × £13.000 = £195.000
```

## Software ingeniaritzarekin lotura

- Bizitzarekiko asebetetze- edo ongizate-inkesta-elementu bat dagoeneko biltzen duen herritarrei begirako edozein zerbitzuk (tokiko agintaritzako eta osasun-eta-gizarte-zaintzako plataforma askok egiten dute, ONSen lau ongizate-galdera estandarren ondoren) WELLBY-ak zuzenean kalkula ditzake lehendik dauden datu-kanalizazioetatik, zerbitzu-aldaketa bakoitzerako neurrira egindako ebaluazio ekonomikoa enkargatu beharrean.
- WELLBY-ek [Gizarte Balioaren Legea](../gizarte-balioaren-legea/) txostenetarako edo [gizarte-inbertsioaren itzulkinerako](../gizarte-inbertsioaren-itzulkina/) eraikitzen duten ingeniaritza-taldeei nazio-mailan estandarizatutako eta HM Treasury-k onartutako izendatzaile bat ematen die, kontratu edo hornitzaileen artean alderatu ezin diren neurrira egindako "inpaktu-puntuazioen" ugalketa saihestuz.
- WELLBY-ak pertsonen eta denboraren artean gehigarriak direnez, garbi osatzen dira [emaitzen araberako kontu-emateko](../emaitzetan-oinarritutako-erantzukizuna/) sistemetan erabilitako biztanleria-mailako emaitzen jarraipenean: zerbitzu-aginte-panel batek hiruhileko bakoitzean sortutako WELLBY metatuak jakinaraz ditzake, osasun-sistema batek lortutako QALY-ak jakinarazten dituen bezala.

## Tranpak

- **Auto-jakinarazitako asebetetze-irabaziak osorik esku-hartzeari egotzi dakizkiokeela suposatzea**: kontrafaktualik gabe (konparazio-taldea edo kontrolekin aurretik/ondoren diseinua), ezin da WELLBY-irabazia joera orokorretatik bereizi; ikus [analisi kontrafaktuala](../analisi-kontrafaktuala/).
- **WELLBY-ak eta QALY-ak adiskidetu gabe guztizko batean nahastea**: HM Treasury-ren gidaliburuak esplizituki dio biek eskala desberdinak eta azpiko balio-teoria desberdinak erabiltzen dituztela; modu inozoan batzeak gainjarritako ongizatea bikoizten du.
- **Erreferentziako diru-balioa kritikarik gabe erabiltzea**: £/WELLBY zifra ziurgabetasun-tarte errealak dituen batez besteko nazionaleko estimazio bat da; HM Treasury-ren gidaliburuak sentsibilitate-analisia gomendatzen du, ez truke-tasa finko gisa tratatzea.

## Iturriak

- HM Treasury. "Wellbeing guidance for appraisal: supplementary Green Book guidance." (2021)
  <https://www.gov.uk/government/publications/wellbeing-guidance-for-appraisal-supplementary-green-book-guidance>
- ONS. "Personal well-being user guidance" (the four standard wellbeing questions).
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing>
- HM Treasury. "The Green Book: Central Government Guidance on Appraisal and Evaluation."
