# Fluxu-metrikak gobernuko entregan

Fluxu-metrikek —Little-en legea, bitarteko lanaren (WIP) mugak eta fluxu-eraginkortasuna— deskribatzen dute zein azkar mugitzen den lana ahalmen mugatuko sistema batean. Sprint-taula bat horrelako sistema bat da; prestazio-eskaeren ilara bat, planifikazio-eskaeren erregistro bat edo bisa-kasuen atzerapena matematika berbera da, uniforme desberdinarekin.

## Zergatik den garrantzitsua

Gobernuko kasu-kopuruak ilara-sistemak dira, eta ilara-sistemek ilara-legeak betetzen dituzte inork neurtzen duen ala ez. Erabaki-epe legalek esplizitu egiten dute: Town and Country Planning araubidean, eskaera txiki gehienek 8 asteko erabaki-helburu legala dute eta eskaera handiek 13 astekoa; zikloaren denborarako konpromisoa zuzenean legean txertatuta. Home Office-ren asilo-kasuen atzerapena, National Audit Office-k eta Home Affairs Select Committee-k behin eta berriz aztertua, sistema publiko batean bitarteko lana throughput baino azkarrago hazi den kasu dokumentatu ona da, denbora luzez, eta zikloaren denborak lege- edo zerbitzu-itxaropen oro urrun gainditzera eraman ditu. Fluxu-metrikek ingeniariei eta kasu-kudeatzaileei hiztegi kuantitatibo partekatua ematen diete hutsegite-modu hori adierazteko, «atzerapen-arazo» kualitatibo gisa uzteko ordez.

## Matematika

```
Little-en legea:  WIP = Throughput × Zikloaren denbora
              →   Zikloaren denbora = WIP / Throughput

Fluxu-eraginkortasuna = denbora aktiboa (ukipena) / zikloaren denbora osoa   (Vacanti)

WIP-mugaren eragina: throughput finkoarekin, WIP erdira jaisteak batez besteko
zikloaren denbora gutxi gorabehera erdira jaisten du (Little-en legea
berrantolatuta) — langile gehiago gehitu gabe eskuragarri dagoen palanka.
```

Ikus [DORA metrikak balio publikorako](../dora-metrikak-balio-publikorako/) kasuen ordez software-hedapeneko pipeline-ei aplikatutako matematika baliokiderako.

## Adibide landua

**Tokiko erakundeko planifikazio-saila**: 400 eskaera irekita une oro (WIP), taldeak astean 50 eskaera ebazten ditu (throughput).

```
Zikloaren denbora = WIP / Throughput = 400 / 50 = 8 aste
```

Hori eskaera txikien 8 asteko helburu legalean ateratzen da, tarterik gabe: sarrerako eskaeraren edo kontsulta-hartzaileen erantzun-denboraren edozein aldakortasunek erabakiak epe legaletik kanpora bultzatzen ditu.

**Fluxu-eraginkortasuna**: 8 aste horietatik (56 egun naturaleko), eskaera batek, normalean, 6 ordu inguru izaten ditu kasu-langilearen benetako prozesatze-denboran.

```
Fluxu-eraginkortasuna = 6 ordu / (56 egun × 8 lan-ordu/egun)
                      = 6 / 448 ≈ %1,3
```

Vacanti-ren erreferentziak software-taldeentzat fluxu-eraginkortasun tipikoa %15–20 jartzen du; gobernuko kasu-lanak, lege-kontsulta-hartzaileen esku-hartze anitzekin eta kontsulta publikoko epeekin, sarritan magnitude-ordena bat baxuagoa da. «Itxaronaldiaren» %98,7 da zortzi asteak benetan joaten diren lekua, ez kasu-langileen ahalmenean.

**WIP-mugaren esku-hartzea**: kasu-langile bakoitzeko eskaera irekiak 15era mugatzeak, mugarik gabeko 25en ordez (throughput konstante mantenduta), WIP 400etik 240 ingurura jaisten du 16 pertsonako talde batean:

```
Zikloaren denbora berria = 240 / 50 = 4,8 aste
```

Zikloaren denbora ia erdira jaistea politika-aldaketa batekin, ez langile-gehikuntzarekin: DORA motako entrega-taldeek sprint-WIP mugatzean erabiltzen duten palanka bera.

## Software ingeniaritzarekin lotura

Fluxu-metrikak dira entrega-talde baten Kanban taularen eta software hori eraikitzen den kasu-lanaren arteko hizkuntza partekatua: kasu-langile baten ilara eta pull-request ilara bat Little-en legeak gobernatzen ditu, eta biek zikloaren denborako helburuak modu berean hausten dituzte: WIP gehiegi throughput-aren aldean. Honek zuzenean axola du [atzerapenaren kostuarentzat programa publikoetan](../atzerapenaren-kostua-programa-publikoetan/): zikloaren denbora × CoD une oro ilaran dauden liberak dira; eta [zerbitzu-estandarrentzat eta transakzio-metrikentzat](../zerbitzu-estandarrak-eta-transakzio-metrikak/), argitaratutako erantzun-denborako helburu bat zikloaren denborarako konpromisoa baita, huts egitean fluxu-metrikek bakarrik diagnostika dezaketena. Kasu-lanen sistema baten softwareak WIP eta zikloaren denbora funtzionamendu-metrika lehen mailako gisa erakutsi behar ditu, inork kontsultatzen ez duen kasu-kudeaketa sistema baten barruan ezkutatu beharrean.

## Tranpak

- **WIP-mugak gehitzea benetako botila-lepoa konpondu gabe**: murrizketa kanpoko lege-kontsulta-hartzaile baten erantzun-denbora bada, kasu-langilearen WIP mugatzeak ilara gorantz mugitzen du baino ez, ez du laburtzen.
- **Fluxu-eraginkortasuna manipulatzeko helburu gisa tratatzea**: denbora aktiboaren %1,3 azkartzeak ia ez du zikloaren denbora mugitzen; palanka ia beti itxaron-egoeretan dago, eta horrek prozesua berriz diseinatzea esan nahi du, ez kasu-langileen abiadura.
- **Aldakortasuna alde batera uztea**: Little-en legeak batez bestekoak deskribatzen ditu; eskaera-bariantza handiko kasu-kopuruak buffer-ahalmena behar du, ez WIP-muga estuagoa bakarrik, bestela lege-epeak huts egingo dute isats hegazkorrean batez bestekoa hobetzen den bitartean.
- **WIP inkoherenteki neurtzea**: erregistro-sisteman «irekita» dagoen baina hirugarren baten zain geldituta dagoen kasua oraindik WIP da; kanpoan uzteak zenbakiak laudatzen ditu herritarrek ikusten duten errealitatea aldatu gabe.

## Iturriak

- Vacanti D, *Actionable Agile Metrics for Predictability: An Introduction*, Actionable Agile Press, 2015.
- Reinertsen DG, *The Principles of Product Development Flow*, Celeritas Publishing, 2009.
- Ministry of Housing, Communities and Local Government, planning application statutory timescales. <https://www.gov.uk/guidance/making-an-application>
- National Audit Office, reports on Home Office asylum casework and accommodation. <https://www.nao.org.uk/>
