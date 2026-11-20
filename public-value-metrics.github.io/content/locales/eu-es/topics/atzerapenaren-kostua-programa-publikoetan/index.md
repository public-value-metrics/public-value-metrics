# Atzerapenaren kostua programa publikoetan (CoD)

Atzerapenaren kostua (Cost of Delay) programa, zerbitzu edo sistema-aldaketa bat oraindik entregatu *gabe* dagoen denbora-unitate bakoitzeko galdutako balio publikoa da. Gai-multzo honetako zubi-metrika nagusia da: "go-live sei hilabete atzeratu da" libra astekoan edo WELLBY astekoan bihurtzen du, atzerapena negozio-kasuaren moneta berean eztabaidatu ahal izateko.

## Zergatik den garrantzitsua

Reinertsenen araua —"gauza bakarra kuantifikatzen baduzu, kuantifikatu Atzerapenaren Kostua"— ia aldatu gabe iristen da gobernura, programa publikoak bereziki jasota daudelako: negozio-kasuak aurreikusitako onura-korronte baten aurka onartzen dira, baina korrontea go-live-an hasten da isurtzen, eta atzerapen-aste bakoitza inork arrisku-erregistroan prezioztatzen ez duen galdutako balio-aste bat da. National Audit Office-k Universal Credit-en hedapenari egindako ikuskapen errepikatuek (ikus bere "Rolling Out Universal Credit" txostenak, <https://www.nao.org.uk/>) eredua erakusten dute: egutegi-atzerapena jarraitu eta jakinarazi zen, baina sistema erreformatua eskatzaileen hurrengo sorta bati *oraindik* ez entregatzearen libra-astekoko kostua gutxitan aipatu zen goiburuko zifra gisa, nahiz eta lehentasunak eta eskalatzea gidatu beharko lituzkeen zenbakia izan. CoD zifrarik gabe, atzeratutako programa bat entrega-batzordearentzako egutegi-arazo bat da; batekin, kontu-emaile ofizialarentzako balio-higaduraren arazo bat.

## Matematika

```
CoD = entregatu gabe dagoen bitartean galdutako denbora-unitateko onura   (£/aste edo WELLBY/aste)

Atzerapen-galera osoa = CoD × atzerapen-iraupena

Programa publikoetarako batu beharreko onura-korronteak:
  dirua askatzen duten aurrezpenak  (iruzur/akats murrizketa, saihestutako behin-behineko kostuak)
+ askatutako dirurik gabeko ahalmena (kasu-langile/funtzionario orduak × kostu osoa)
+ ongizate-onura                    (WELLBY × £13.000/WELLBY, HMT Green Book
                                      ongizatearen gida osagarria, 2019ko prezioak)
```

Herritarrei begirako zerbitzuetarako, adierazi ongizatetan ere dirutan ez ezik — ikus [ongizatearen arabera doitutako bizi-urteak](../ongizatera-egokitutako-bizi-urteak/) oinarrizko unitaterako, eta [gastu publikoaren aukera-kostua](../aukera-kostua-gastu-publikoan/) atzeratutako libra horrek bestela zer finantza zezakeen jakiteko.

## Adibide landua

**Tokiko erakundea**: etxebizitza-prestazioen sistemaren berritzeak gainordainketa-akatsa £150/eskaera/urte murrizten du 20.000 eskaera aktibotan.

```
Urteko onura = 150 × 20.000 = £3.000.000/urte
CoD = 3.000.000 / 52 ≈ £57.700/aste
12 hilabeteko ezarpen-atzerapenak 52 × 57.700 ≈ £3.000.000 kostatzen du saihestu zitekeen akatsean.
```

**Gobernu zentraleko agentzia**: desgaitasun-prestazioen ebaluazio-zerbitzu bat, planifikatutakoa baino sei hilabete (26 aste) beranduago entregatua, 200.000 eskatzailek urtean erabakia batez beste hiru aste gehiago itxaron behar izatea dakar. Ziurgabetasun finantzarioko aste gehigarri bakoitza −0,0018 WELLBY (bizitzaren asebetetze-puntua) efektu gisa modelatzen da:

```
Eskatzaile bakoitzeko WELLBY galera = 3 × 0,0018 = 0,0054
Urteko WELLBY galera = 200.000 × 0,0054 = 1.080 WELLBY/urte
CoD_ongizatea = 1.080 / 52 ≈ 20,8 WELLBY/aste
CoD_dirua = 20,8 × £13.000 ≈ £270.000/aste ongizate-balioan
```

26 asteko atzerapenak, beraz, gutxi gorabehera 540 WELLBY "kostatzen" ditu — Green Book-aren ongizate-balioztapenean £7 milioi inguru —, go-live data galdua herritarren ongizate-gertaera gisa birformulatuz, ez proiektu-kudeaketako oin-ohar gisa.

## Software ingeniaritzarekin lotura

CoD da [DORA metrikak](../dora-metrikak-balio-publikorako/) eta [fluxu-metrikak](../fluxu-metrikak-gobernuko-entregan/) finantzarioki ulergarri egiten dituena: pipelinean zeharreko lead time × CoD herritar batengana iritsi aurretik ilaretan erretako dirua (edo ongizatea) da. Zehazki:

- **Lehentasunak ezartzea**: sailkatu atzeragaia (backlog) CoD ÷ iraupenaren arabera, ez interesdunen antzinatasunaren arabera — Green Book-aren aukerak balioaren arabera ebaluatzeko eskakizunaren software-parekoa, ez nork eskatzen duenaren arabera.
- **Erosketa**: 12–18 hilabeteko marko-erosketa-zikloak CoD bat du; hori prezioztatzeak bide azeleratuen urgentzia-kasua aldatzen du, eta zuzenean elikatzen ditu [eraiki ala erosi](../eraiki-ala-erosi-gobernuan/) erabakiak, balioa lortzeko denbora erabaki-eragile denean.
- **Onuren kasua**: onarpenean aipatzen den CoD zifra orok [onuren gauzatzean](../onuren-gauzatzea/) berriz agertu behar du — atzerapenaren kostua benetakoa bazen, onura azeleratua go-live ondoren neurgarria izan behar da.

## Tranpak

- **CoD lineala suposatzea**: zerbitzu publiko batzuek epe-formako balioa dute (legezko betetze-data bat — CoD betearazte-arrisku mailara jauzi egiten du dataren ondoren, ia zero lehen) asteko tasa leun bat baino. Sailkatu urgentzia-profila biderkatu aurretik.
- **Inork behar ez dituen irteeretan CoD**: atzerapenak kostua du entregatu gabeko gauzak balioa duenean bakarrik; inork erabiliko ez duen sistema batek CoD zero du, zein berandu dagoen gorabehera.
- **Atzerapena eta deskontua bi aldiz kontatzea**: [gizarte-deskontu tasak](../gizarte-deskontu-tasa/) jada denbora prezioztatzen du urte anitzeko ebaluazio-horizonteetan; CoD horizonte barruko bertsio operatiboa da, asteetarako eta hilabeteetarako. Erabili CoD egutegi-atzerapenerako, NPV aldaketa urte anitzeko birfasaketarako.

## Iturriak

- Reinertsen DG, *The Principles of Product Development Flow*, Celeritas Publishing, 2009.
- HM Treasury, Green Book supplementary guidance: wellbeing. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>
- National Audit Office, reports on Universal Credit rollout. <https://www.nao.org.uk/>
