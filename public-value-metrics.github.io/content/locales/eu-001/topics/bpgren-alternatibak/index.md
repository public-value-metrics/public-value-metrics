# BPGren alternatibak

BPGren alternatibak Barne Produktu Gordinak egiturazko moduan alde batera uzten duena jasotzeko eraikitako metrikak dira: ordaindu gabeko zaintza-lana, ingurumenaren agortzea, errenten banaketa, eta hazkundeak benetan bizitzak hobetzen dituen ala ez. Ezagunenak Benetako Aurrerapen Adierazlea (Genuine Progress Indicator, GPI) eta Bhutango Zorion Nazional Gordina (Gross National Happiness, GNH) indizea dira; haiek serioski hartzearen aldeko argudioa eraginkorren 2009ko Stiglitz-Sen-Fitoussi Batzordeak egin zuen. Gobernu-panelak edo KPI sistemak eraikitzen dituzten ingeniarientzat, «zein zenbakik balio du aurrerapen gisa» diseinu-erabaki bat da, zer finantzatzen den erabakitzen duten ondorio errealekin.

## Zergatik den garrantzitsua

Simon Kuznetsek, 1930eko hamarkadan AEBetako kontu nazionalak eraiki zituenak, 1934an Kongresuari ohartarazi zion «nazio baten ongizatea ia ezin daitekeela ondorioztatu errenta nazionalaren neurketatik»; zifrak ia berehala gainditu zuen oharpen hori. BPGk petrolio-isurketa baten garbiketa hazkundetzat zenbatzen du, eta guraso baten ordaindu gabeko haurtzaindegia ezertzat; ez du bereizten ongizate iraunkorra eraikitzen duen gastua eta egindako kaltea konpentsatzen baino ez duen gastua. Nicolas Sarkozy Frantziako presidenteak deitutako eta Joseph Stiglitzek, Amartya Senek eta Jean-Paul Fitoussik buru zuten Stiglitz-Sen-Fitoussi Batzordeak 2009an jakinarazi zuen estatistika-sistemek garrantzia aldatu behar zutela «ekoizpen ekonomikoa neurtzetik pertsonen ongizatea neurtzera», eta jasangarritasuna uneko ongizatetik bereizita jarraitu behar dela, zenbaki batean tolestu beharrean. BPGren alternatibek gomendio hori operatibizatzen dute. GPIk, 1990eko hamarkadan Redefining Progress think tank-ak garatuak eta William Nordhaus eta James Tobin-en 1972ko Measure of Economic Welfare-n oinarrituak, kontsumo pertsonaletik abiatzen da (BPGk bezala) eta gero BPGk uzten dituen merkatuz kanpoko onurak gehitzen ditu (etxeko lana, boluntariotza), eta BPGk oker positibotzat zenbatzen dituen defentsa- eta agortze-kostuak kentzen ditu (krimena, kutsadura, lanerako joan-etorriak, baliabideen agortzea). Bhutango GNH indizeak, GNH Centre Bhutan-ek kudeatuak (<https://www.gnhcentre.bt/>), harago doa, hazkundea herrialdearen konstituzio-helburu gisa ordezkatuz: 9 domeinutan banatutako 33 adierazle bateratzen ditu —ongizate psikologikoa, osasuna, hezkuntza, denboraren erabilera, aniztasun kulturala, gobernantza, komunitatearen bizitasuna, aniztasun ekologikoa eta bizi-maila— sufizientzian oinarritutako puntuazio bakarrean, gobernuaren politika-proposamenak aztertzeko zuzenean erabiltzen dena.

## Matematika

```
GPI = kontsumo pertsonalaren gastua
      + merkatuz kanpoko onurak (etxeko lana, boluntariotza, goi-mailako hezkuntza)
      − defentsa- eta gizarte-kostuak (krimena, kutsadura, joan-etorriak, familia-haustura)
      − kapital natural eta sozialaren agortzea (baliabideen agortzea, nekazaritza-lurren galera)

GNH sufizientzia-puntuazioa, domeinu bakoitzeko:
  pertsona bat domeinu batean «nahikoa» da adierazle bakoitzean atalasea gainditzen duenean
  Zoriontasun Indizea = (domeinuen 9tik ≥ 6tan nahikoak diren biztanleen %)
                    + («oraindik zoriontsu ez den» gutxiengoaren hutsune haztatuaren batez bestekoa)
```

## Adibide landua

**Eskualdea, GPI**: kontsumo pertsonala $50bn da. Gehitu etxeko eta boluntarioen lanaren balio estimatua, $12bn (ordezkapen-kostuko soldata-tasak; ikus [boluntarioen denboraren balioa](../boluntarioen-denboraren-balioa/)). Kendu joan-etorrien pilaketaren (3bn $), krimenaren (4bn $) eta epe luzeko baliabideen agortzearen (6bn $) urteko kostu estimatuak:

```
GPI = 50 + 12 − 3 − 4 − 6 = 49 ($bn)
```

BPG urte horretan $50bn-tik $55bn-ra hazi bada (%10), baina defentsa- eta agortze-kostuak kontsumoa baino azkarrago hazi badira, GPI jaitsi daiteke BPG igotzen den bitartean: GPI ikertzaileek errenta handiko ekonomientzat 1970eko hamarkadatik gutxi gorabehera aipatzen duten «atalase-hipotesia», hazkundea igotzen jarraitu zuen bitartean GPI lautu zenean.

**Herritarra, GNH**: erantzule batek sufizientzia-atalasea gainditzen du 9 domeinutatik 7tan (osasuna, hezkuntza, bizi-maila, komunitatearen bizitasuna, aniztasun kulturala, aniztasun ekologikoa, denboraren erabilera), baina ez ongizate psikologikoan eta gobernantzan. 7 ≥ 6 denez, «zoriontsu» gisa zenbatzen da buru-zenbaketan; indizeak bereizita jarraitzen du bere bi hutsuneen sakonera, gainditze estu bat eta erosoa bereizezinak izan ez daitezen.

## Software ingeniaritzarekin lotura

- Throughput edo gastuan soilik oinarritutako KPI panelak (BPGren eredua) sistematikoki galduko du throughput hori sortzean eragindako kaltea: laguntza-txartelen bolumena «erabiltzailearen larritasuna» ordez «engagement» gisa tratatzea software-entregaren bertsioa da petrolio-isurketa hazkundetzat zenbatzearena.
- GPI motako kontabilitatea auditoretza-eredu erabilgarria da edozein [sektore publikoko KPI](../sektore-publikoko-kpi-ak/) multzorako: goiburuko irteera-metrika bakoitzerako, galdetu zer defentsa-kostu ari den isilean sortzen (berrlana, intzidentziei erantzuna, nekatze-sindromea) eta kendu garbi, GPIk defentsa-gastua kontsumotik kentzen duen bezala.
- GNHren domeinu-sufizientziaren metodoa —gainditu/ez gainditu dimentsio bakoitzeko, gero agregatu— egiturazko aldetik [irizpide anitzeko erabaki-analisiaren](../irizpide-anitzeko-erabakien-analisia/) teknika bera da, eta merezi du berrerabiltzea puntuazio eskalar bakarrak dimentsio kritiko batean huts egitea ezkutatuko lukeen edonon.

## Tranpak

- **GPI kontu nazional zehatz gisa tratatzea**: BPGk ez bezala, GPIk ez du metodologia estandarizatu bakarra; ikerketa desberdinek joan-etorrien kostuak, boluntarioen denbora edo baliabideen agortzea modu desberdinean haztatzen dituzte, beraz ikerketen arteko GPI alderaketak herrialdeen arteko BPG alderaketak baino askoz fidagarritasun txikiagokoak dira.
- **GNH osorik beste politika-kultura batera inportatzea**: bere domeinu-haztapenak eta sufizientzia-atalaseak Bhutango kontsulta bidez ezarri ziren; zenbakia azpiko kontsulta-prozesurik gabe kopiatzeak inork fidatzen ez den metrika hutsala sortzen du.
- **BPGren alternatiba bat kostu-onura ebaluazioaren ordezkoa dela uste izatea**: adierazle diagnostiko eta ekonomia osokoak dira, ez programa bakar baten erabaki-tresnak; horretarako erabili [gizarte-kostu-onura analisia](../gizarte-kostu-onura-analisia/).

## Iturriak

- Stiglitz JE, Sen A, Fitoussi J-P. "Report by the Commission on the Measurement of Economic
  Performance and Social Progress." (2009) <https://ec.europa.eu/eurostat/documents/118025/118123/Fitoussi+Commission+report>
- GNH Centre Bhutan. <https://www.gnhcentre.bt/>
- Redefining Progress. "The Genuine Progress Indicator: A Tool for Sustainable Development."
- Nordhaus WD, Tobin J. "Is Growth Obsolete?" (1972), NBER.
