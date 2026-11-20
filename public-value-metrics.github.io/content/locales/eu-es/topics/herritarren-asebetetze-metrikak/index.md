# Herritarren asebetetze-metrikak

Herritarren asebetetze-metrikek neurtzen dute jendeak zerbitzu publiko batekin duen esperientzia zuzena nola baloratzen duen —instituzioekiko konfiantza orokorretik bereizita, eta zerbitzuak emaitza ona lortu duen ala ez horretatik ere bereizita—. Zerbitzu bat gustukoa eta ez eraginkorra izan daiteke, edo eraginkorra eta gustukoa ez; bien arteko hutsunea bera da entrega-talde batek zaindu behar duen informazio diagnostikoa.

## Zergatik den garrantzitsua

Asebetetzea bi garaieratan neurtzen da, eta sarri nahasten dira. Zerbitzu mailan, Erresuma Batuko jada erretiratutako Performance Platform-ak eta gaur egungo GOV.UK service manual-ak zerbitzu bakoitzeko asebetetze-inkesta bat eskatzen dute (normalean bost puntuko eskala, "oso pozik"etik "oso etsita"ra, transakzioaren unean aplikatua), lau zerbitzu-KPI nahitaezkoetako bat bezala — ikus [zerbitzu-estandarrak eta transakzio-metrikak](../zerbitzu-estandarrak-eta-transakzio-metrikak/). Instituzio mailan, UK Civil Service People Survey-k urtero neurtzen ditu langileen konpromisoa eta esperientzia gobernu zentraleko sail guztietan, eta bereizita, OECD-ren "Trust in Government" programak gobernu nazionalarekiko konfiantza publikoa inkestatzen du kide-estatuetan, krisiek biziki moldatutako beheraldi- eta berreskurapen-eredu luze bat jarraituz (2008ko finantza-krisiak eta COVID-19 pandemiak mugimendu zorrotzak eta ikusgarriak sortu zituzten OECD-ren konfiantza-zifretan). Herritarrei begirako zerbitzuak eraikitzen dituzten ingeniariek asebetetzea eta emaitza bereizi behar dituzte zerbitzu-diseinuko hutsegite ezagun bat dela eta: prestazio-eskaera baterako inprimaki digital ederki diseinatu eta erabilerraz batek asebetetze oso altua lor dezake, azpiko politikak —baldintzak, prozesamendu-atzerapenak, sarien zenbatekoak— eskatzailea hobeto utzi gabe. Asebetetzeak interfazea neurtzen du; ez du haren atzean entregatutako balioa neurtzen.

## Matematika

```
Asebetetze garbia = % pozik (edo oso pozik) − % etsita (edo oso etsita)
                    (erantzun neutroak/iritzirik gabekoak bi terminoetatik kanpo,
                    baina erantzun-oinarrian kontatuak ehuneko bakoitza kalkulatzeko)

Asebetetze-emaitza hutsunea = asebetetze-puntuazioa − emaitza-lorpenaren puntuazioa
                    (biak 0–100era normalizatuak; hutsune positibo handi batek
                    "ondo sentiarazten duen" baina funtsean gutxiegi entregatzen duen
                    zerbitzua adierazten du)

Konfiantza-indizea (OECD estilokoa) = inkestatuen % zenbatek "bai" erantzuten
                    dioten "ba al duzu konfiantzarik [gobernu nazionalean]?"
                    galderari, denbora-serie gisa jarraitua, normalean
                    adinaren, diru-sarreren eta hezkuntzaren arabera desagregatua
```

## Adibide landua

**Udal-zergen e-fakturazio zerbitzua**: transakzio arrakastatsuaren unean egindako asebetetze-inkesta batek 2.400 erantzule erakusten ditu: 1.650 pozik/oso pozik, 250 etsita/oso etsita, 500 neutro.

```
Asebetetze garbia = (1.650/2.400 × 100) − (250/2.400 × 100)
                  = %68,75 − %10,42
                  = +58,3 asebetetze garbia
```

Isolatuta sendoa dirudi. Baina inkesta transakzioa *arrakastaz* osatzen duten erabiltzaileei bakarrik erakusten zaie — neurketa-alborapen ezaguna (ikus tranpak behean). [Zerbitzu-estandarrak eta transakzio-metrikak](../zerbitzu-estandarrak-eta-transakzio-metrikak/) gaiko osatze-tasaren metrikarekin parekatuta, osatzea %71 bakarrik dela ikusten da, hau da:

```
Benetako biztanleriaren asebetetzea neurtu gabe dago ibilbidea utzi zuten %29rentzat —
ziurrenik talde etsiena, uztea bera seinale negatibo indartsua delako,
inkestak inoiz jasotzen ez duena.
```

**Maila nazionaleko adibidea (OECD estiloko konfiantza-serie baten egitura)**: gobernu nazionalarekiko konfiantza %42koa 1. urtean, %34ra jaisten da 2. urtean (krisi-urtea) eta %39ra berreskuratzen da 3. urtean — OECD-k kide-estatuetan krisi handien ondoren dokumentatzen duen shock-eta-berreskurapen-partzial ereduaren ohiko ibilbidea.

## Software ingeniaritzarekin lotura

Instrumentatu asebetetze-inkestak erabiltzaile-ibilbidearen irteera esanguratsu guztietan, ez osatze arrakastatsuan bakarrik — arlo honetan ingeniaritza-akats ohikoena, eta isilean asebetetze-metrika bat bizirik-irauleen alborapenezko metrika hutsal bihurtzen duena. Ahal denean, lotu asebetetze-puntuazioa osatze- edo emaitza-metrika batekin panel berean, talde batek asebetetze gorakorra ospatu ez dezan osatzea isilean jaisten ari den bitartean (ikus [transakzio-bakoitzeko kostua](../transakzio-bakoitzeko-kostua/) eta [inklusio digitala](../inklusio-digitala/) asebetetze digitalaren laginketatik nor kanpoan uzten den jakiteko hasieratik — erabiltzaile ez-digitalak eta laguntza-digitaleko erabiltzaileak sistematikoki gutxiegi ordezkatuta daude zerbitzuko inkestetan). Asebetetze- eta konfiantza-datuek zuzenean elikatzen dute [Mooreren hiruki estrategikoaren](../balio-publikoa/) legitimitate-hanka, eta [balio publikoaren puntuazio-koadroko](../balio-publikoaren-puntuazio-txartela/) "bezero" eta "legitimitate" ikuspegietan sartzen dira — ikus [konfiantza- eta legitimitate-metrikak](../konfiantza-eta-legitimitatearen-neurketak/) zerbitzu-mailako metrika honen instituzio-mailako parekoa.

## Tranpak

- **Bizirik-irauleen alborapena osatze-unean egindako inkestetan**: ibilbidea uzten duten erabiltzaileek ez dute inoiz inkesta ikusten, beraz zerbitzuko asebetetze-puntuazio altua osatze-tasa baxuarekin eta osatu ez dutenen biztanleria ikusezin handi batekin bizi daiteke.
- **Asebetetzea emaitzaren proxy gisa tratatzea**: politika gaizki diseinatu baterako interfaze ondo diseinatu batek asebetetzean ondo eta emaitzan gaizki puntuatzen du — jakinarazi beti biak, inoiz ez bata bestearen ordez.
- **Lagin txiki eta ez-adierazgarriak zehaztasun faltsuarekin jakinaraztea**: norberak hautatutako ehunka erantzulek emandako asebetetze-puntuazio bat hamarren batera jakinarazteak laginaren tamainak sostengatu ezin duen konfiantza iradokitzen du.
- **Desagregazio demografikoa alde batera uztea**: adinaren, diru-sarreren, ezgaitasunaren edo sarbide digitalaren arabera banatzen ez diren konfiantza- eta asebetetze-zifra nazionalek taldeen arteko esperientzia oso desberdinak ezkuta ditzakete — OECD-ren beraren Trust in Government argitalpenek esplizituki desagregatzen duten eredua.

## Iturriak

- OECD, "Trust in Government." <https://www.oecd.org/en/topics/trust-in-government.html>
- UK Cabinet Office, "Civil Service People Survey" results.
  <https://www.gov.uk/government/collections/civil-service-people-survey-results>
- GOV.UK Service Manual, "Measuring Success." <https://www.gov.uk/service-manual/measuring-success>
