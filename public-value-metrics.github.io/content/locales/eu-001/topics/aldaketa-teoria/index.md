# Aldaketa-teoria

Aldaketa-teoria epe luzeko helburu batetik hura lortzeko egon behar duten aurrebaldintza eta jardueretaranzko atzerantz mapatutako bide kausal esplizitu bat da, esteka bakoitza lotzen duten hipotesiekin batera. Nahi duzun emaitzatik abiatuta eraikitzen da, behin eta berriz galdetuz "zer izan behar da egia berehala aurretik, hau gerta dadin?", benetan entregatu ditzakezun jardueretara iritsi arte; hori [logika-eredu](../logika-eredua/) batena kontrako norabidea da, eta horregatik dira osagarriak, ez trukagarriak.

## Zergatik den garrantzitsua

Atzerako mapaketa-metodoa Center for Theory of Change-k eta ActKnowledge-k formalizatu zuten, Carol Weiss ebaluatzailearen lanean oinarrituta; lan horrek programa-hipotesiak esplizitu egiten zituen fedez hartu beharrean probatu ahal izateko. Erresuma Batuko diru-laguntzen ebaluazioak zuzenean barneratu du hau: HM Treasury-ren Magenta Book-ak aldaketa-teoria edozein ebaluazio-diseinuren abiapuntutzat hartzen du, eta National Lottery Community Fund bezalako finantzatzaileek eskatzaileek bat adieraz dezaten eskatzen dute proposamen bat finantzatu aurretik. Software-ingeniari batentzat garrantzitsua da, aldaketa-teoria zure sistemak zer neurtu behar duen zehaztu beharko lukeen dokumentua delako: kate kausalak "prestazioen erabilera erreklamatzaileek kalkulu pertsonalizatu bat jasotzearen mende dago" esaten badu, zure produktuak ebidentzia emateko edo gezurtatzeko tresnatu dezakeen baieztapen probagarri bat da.

## Matematika

Aldaketa-teoria egiturazkoa da, ez numerikoa. Esteka bakoitzak hipotesi bat eta hipotesia faltsua dela erakuts lezakeen adierazle bat eraman beharko lituzke:

```
Epe luzeko emaitza (helburua)
  ↑ aurrebaldintza + hipotesia + adierazlea
N. tarteko emaitza
  ↑ aurrebaldintza + hipotesia + adierazlea
  ...
1. tarteko emaitza
  ↑ aurrebaldintza + hipotesia + adierazlea
Jarduerak / esku-hartzeak
  ↑ konprometitutako baliabideak
Sarrerak
```

Egitura honek zuzenean elikatzen ditu [inpaktuaren ebaluazio-metodoak](../inpaktu-ebaluazioaren-metodoak/), esteka bakoitzeko hipotesiak benetan betetzen diren probatzeko existitzen direnak, eta [analisi kontrafaktuala](../analisi-kontrafaktuala/), epe luzeko emaitza nolanahi ere gertatuko zen ala ez probatzen duena.

## Adibide landua

**Toki-agintaritza (etxegabetzearen prebentzioa)**: epe luzeko emaitza etxegabetzeko arriskuan dauden etxeen 12 hilabeteko maizter-egonkortasuna da.

- Aurrebaldintza: etxeek atzerapenetarako ordainketa-plan errealista eta eskuragarria dute.
  Hipotesia: gizarte-langileak negoziatutako planak epaitegiak agindutakoak baino jasangarriagoak dira.
  Adierazlea: 6 hilabetetan oraindik aktibo dauden planen %.
- Aurrebaldintza: etxeek dagozkien prestazioak eskatzen dituzte.
  Hipotesia: prestazio-kalkulagailu digital batek erreklamazio zuzenak handitzen ditu paperezko inprimakiekin alderatuta.
  Adierazlea: erreklamazioen zehaztasun-tasa, tresna zabaldu aurretik/ondoren alderatuta.
- Jarduerak: gizarte-langileen triajea, prestazio-kalkulagailu digitala, atzerapenen negoziazioa.

120 etxeko kohorte pilotu batean, prestazio-kalkulagailuaren hipotesia 102 etxetan bete zen (% 85), zuzen eskatu zutenak, ondorengo prozesu-ebaluazio batek ebidentziatuta; horrek programa-taldeari esteka zehatz horretarako ebidentzia eman zion, etxegabetzea prebenitzeari buruzko amaieratik amaierarako aldarrikapen bakar baten ordez.

**Karitatea (gazteen mentoretza)**: epe luzeko emaitza eskolako kanporatzeak murriztea da. Atzerantz mapatutako aurrebaldintzak: emozio-erregulazio hobetua → mentore batekin bakarka konfiantzazko harremana → bi hiruhilekoz astero modu koherentean harremanetan egotea. Teoriak esplizituki adierazten du "astero harreman koherentea" aurrebaldintza betetzen ez bada (adibidez, mentoreen errotazioagatik), emaitza ez dela gertatuko, eta hori itxaropen bat baino aldarrikapen probagarri eta faltsugarria da.

## Software ingeniaritzarekin lotura

Aldaketa-teoriak produktu baten datu-eredua moldatu beharko luke aginte-panel bakar bat eraiki aurretik: identifikatu zein estekak behar duten adierazle bat, eta tresnatu haientzat zehazki, erregistratzeko errazena dena lehenesteko beharrean. Bide-orriko elkarrizketak ere diziplinatzen ditu: katearen inongo estekarekin lotzen ez den eginbide bat ez da nabarmen eraikitzea merezi duena. Ikus [logika-eredua](../logika-eredua/) teoria adostu ondoren eraikitako kontu-emateko kate aurrerakorrerako, [gizarte-inbertsioaren itzulkina](../gizarte-inbertsioaren-itzulkina/) zein emaitza balioetsi zehazteko aldaketa-teoria baten mende dagoen metodorako, eta [emaitzak vs. irteerak](../emaitzak-eta-irteerak/) tarteko emaitzen estekek menpe duten bereizketarako.

## Tranpak

- **Logika-eredu batekin nahastea.** Aldaketa-teoria kausala eta azalpenezkoa da (zergatik sinesten dugun honek funtzionatzen duela); logika-eredua sekuentziala eta deskribatzailea da (zer gertatzen den zer ordenatan). Bakarra sortzeak "zergatia" edo kontu-emateko arrastoa falta uzten du.
- **Hipotesiak inplizitu uztea.** Atzerako mapaketaren balio osoa hipotesi probagarriak azaleratzea da; kutxak eta geziak zerrendatzen dituen baina esteka bakoitza zerk egin dezakeen faltsu izendatzen ez duen aldaketa-teoria apaingarria da.
- **Behin eraiki eta apalean uztea.** Finantzaketa-eskaera baterako idatzitako eta inoiz berrikusten ez den aldaketa-teoria erabilgarria izateari uzten dio ebidentziak esteka bat gezurtatzen hasten den unean.
- **Alderdi interesdunen ekarpena saltatzea.** Komisionatzaileek soilik, lehen lerroko langileen edo onuradunen ekarpenik gabe, eraikitako aldaketa-teoriak zerbitzua entregatzen duen inork sinesten ez dituen hipotesiak kodetzeko joera du.

## Iturriak

- Center for Theory of Change. <https://www.theoryofchange.org/>
- ActKnowledge. <https://www.actknowledge.org/>
- HM Treasury, Magenta Book (2020), Chapter 3. <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, theory of change guidance. <https://www.tnlcommunityfund.org.uk/>
