# Emaitza bakoitzeko kostua

Emaitza bakoitzeko kostua programaren gastu osoa da zatituta beren egoeran aldaketa definitu eta esanguratsu bat lortzen duten pertsonen kopuruaz — ez zerbitzu bat jaso besterik ez duten pertsonen kopuruaz. Finantzatzaile edo entrega-talde batek erabil dezakeen eraginkortasun-metrikarik zorrotzena da, karitate-erakunde gehienek saihesten duten aurretiko galdera bat behartzen duelako: zehazki, zer da arrakasta?

## Zergatik den garrantzitsua

Elikagai-banku batek urte bereko kontuetatik bi zenbaki oso desberdin jakinaraz ditzake. Banatutako janari-pakete bakoitzeko kostua £15 izan daiteke. Elikadura-segurtasuna lortzen duen etxe bakoitzeko kostua —larrialdiko janari-laguntza behar ez duena, jarraipen-puntu batean egiaztatuta— £340 izan daiteke. Biak egia dira. Bakarrak esaten dio finantzatzaileari ea dirua funtzionatzen ari den. Haien arteko hutsunea irteera baten eta emaitza baten arteko hutsunea da: entregatutako pakete bat irteera da; krisian jada ez dagoen etxe bat emaitza. Ikus [emaitzak vs irteerak](../emaitzak-eta-irteerak/).

Erresuma Batuko hirugarren sektoreak bi hamarkada eman ditu bereizketa hori behartzeko azpiegitura eraikitzen. New Philanthropy Capital-en karitate-eraginkortasunerako "lau zutabeen hurbilketak" esplizituki eskatzen die erakundeei beren emaitzak irteerak baino lehen adierazteko, eta Inspiring Impact-ek —Erresuma Batuko finantzatzaileek babestutako inpaktu-neurketako lankidetza— diru-laguntza-eskaera askok orain karitate-erakundeei betetzeko eskatzen dieten Outcomes Matrix bat argitaratzen du. Trussell Trust-aren urteko "State of Hunger" ikerketa-programak, Heriot-Watt University-rekin batera egina, hain zuzen existitzen da pakete-zenbaketek bakarrik ezer esaten ez dutelako jendea elikadura-ziurgabetasunetik ihes egiten ari den ala ez.

Emaitza bakoitzeko kostuak zentzua du bakarrik kontrafaktuala finkatuta dagoenean: "nolanahi" lortutako emaitza ez da programak erosi duen emaitza. Ikus [analisi kontrafaktuala](../analisi-kontrafaktuala/) eta [desplazamendua eta atribuzioa](../desplazamendua-eta-atribuzioa/).

## Matematika

```
Emaitza bakoitzeko kostua = Programaren kostu osoa / Definitutako emaitza lortzen duten onuradunen kopurua

non:
  Programaren kostu osoa = entrega-kostu zuzena + gastu orokorren zati bidezkoa
  Definitutako emaitza   = aldez aurretik zehaztutako egoera-aldaketa neurgarria
                            (adib. "elikadura-segurtasuna 6 hilabeteko jarraipenean",
                            ez "janari-pakete bat jaso du")
```

Alderatu [unitate-kostuen datu-baseekin](../unitate-kostuen-datu-baseak/) (adib. sektore-berezko unitate-kostuen erreferentziak) emaitza bakoitzeko kostu jakin bat ona, ertaina edo eskasa den epaitzeko esku-hartze konparagarrien aldean.

## Adibide landua

**Elikagai-bankua, urtebete**:

- Programaren kostu osoa: £450.000
- Banatutako paketeak: 30.000
- Pakete bakoitzeko kostua (irteera-metrika): £450.000 / 30.000 = **£15**

Karitate-erakundeak sei hilabeteko jarraipen-inkesta ere egiten du etxeen lagin batekin, aurkituz hiru pakete edo gehiago jaso zituzten etxeen %35ek jakinarazten dutela jada ez dutela larrialdiko janari-laguntzarik behar eta elikadura-segurtasunaren atalasearen gainetik puntuatzen dutela elikadura-segurtasuneko inkesta-modulu estandar batean. Urte horretan hiru pakete edo gehiago jaso zituzten 1.800 etxeetatik 630ek lortzen dute emaitza hori.

```
Emaitza bakoitzeko kostua = £450.000 / 630 = £714 elikadura-segurtasuna lortzen duen etxe bakoitzeko
```

£714 zifra hori da karitate-erakunde hau diru-transferentzia pilotu batekin edo zor-aholkularitzako zerbitzu batekin alderatzen duen finantzatzaileak erabili behar duena — ez £15. Eskualde bereko diru-transferentzia programa konparagarri batek elikadura-segurtasuna etxe bakoitzeko £500etan lortzen badu, elikagai-bankua ez da nabarmen emaitza bera lortzeko bide eraginkorragoa, pakete bakoitzeko kostua merkea dirudien arren.

## Software ingeniaritzarekin lotura

Kasu-kudeaketako sistema gehienak irteerak erregistratzeko eraikita daude, irteerak transakzioaren barruan gertatzen direlako (pakete bat entregatzen da, inprimaki bat bidaltzen da). Emaitzak normalean geroago gertatzen dira, sarritan sistemaren ohiko harrapaketa-leihotik kanpo, eta diseinu-erabaki berariazko bat eskatzen dute: eraiki jarraipen-mekanismo bat (inkesta-abiarazlea, birkontaktatze-lan-fluxua, datu-lotura ariketa) lehen mailako funtzionalitate gisa, ez urteko txosten baterako gehitutako atzerapen gisa. Sektorerako diru-laguntzen edo kasuen kudeaketa-plataformak eraikitzen dituzten ingeniariek "zein da emaitza-gertaera, eta nola behatzen dugu" eskakizun-galdera gisa tratatu behar dute datu-eredua finkatu baino lehen — askoz zailagoa da emaitza-eremu bat atzerantzean gehitzea irteera-kontagailu bat baino. Ikus [emaitzak vs irteerak](../emaitzak-eta-irteerak/) eta [logika-eredua](../logika-eredua/) eskakizun-elkarrizketa hori nola egituratu, eta [onuradun bakoitzeko kostua](../onuradun-bakoitzeko-kostua/) emaitzen jarraipena oraindik eraiki ez denean taldeek hartzen duten metrika azkarrago eta lausoagoa.

## Tranpak

- **Emaitza gisa jantzitako irteerak jakinaraztea.** "Iritsitako jendea" ez da "lagundutako jendea". Metrika sistema-erregistro batek ekoitz badezake jarraipen-kontakturik gabe, ia ziur irteera bat da.
- **Izendatzailearekin tranpa egitea.** Emaitza-biztanleria "programa osatu dutenetara" mugatzeak isilean uzten ditu baztertuta uzten dutenak —sarritan kasu zailenak— eta tasa itxurazkoa puztzen du. Adierazi izendatzailea hasi zuten guztiak gisa, ez amaitu zutenak.
- **Kontrafaktualik ez.** Emaitza lortu zuen edonor kontatzea, bestela ere lortuko zutenak barne, programak erosi duena gehiegi kalkulatzea da. Ikus [analisi kontrafaktuala](../analisi-kontrafaktuala/).
- **Bateraezinak diren emaitza-definizioen artean alderatzea.** Inkesta-modulu baliozkotu batekin neurtutako "elikadura-seguru" ez da alderagarria asebetetze-inprimaki batean norberak jakinarazitako "elikadura-seguru"rekin; emaitza bakoitzeko kostuaren sailkapen-taula bat zintzoa da bakarrik emaitza-definizioak bat datozenean.

## Iturriak

- New Philanthropy Capital (NPC), "Four Pillar Approach" to charity effectiveness. <https://www.thinknpc.org/resource-hub/four-pillar-approach/>
- Inspiring Impact, Outcomes Matrix and impact measurement resources. <https://inspiringimpact.org/>
- Trussell Trust and Heriot-Watt University, "State of Hunger" research programme. <https://www.trusselltrust.org/state-of-hunger/>
- GiveWell, "Our criteria" (cost-effectiveness as the leading criterion for charity recommendation). <https://www.givewell.org/how-we-work/our-criteria>
