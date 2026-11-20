# Gwerth Data Ygor

Gwerth data ygor yw an kudyn a wherthya pyth yw dalvedh data governans ha poblek pan nag eus pris dhodho:
ny vydh gwerthys, ytho nyns eus linenn omsedhow, mes y dhyllans (hanow gwydh, goleghyn treusporth,
fin kodys post, rejistrow kuntelles) a dhiskwedh bos ow tyllo oberyans arghansek ha sokyal
downstream. Y wherthya yn da a dal drefen "yw rydh dhe dhyllo" ha "nyns yw gwerth vyth" a vydh
an dhew kamm, ha jynnyor ow tewys a wrella ygeri API po set data a'n jeves othem a argument gwell es
unn a'n dhew.

## Perag y talvos

An mesuryans top-down moyha gwaytys a dheu a rapport 2013 an McKinsey Global Institute "Open data:
Unlocking innovation and performance with liquid information", a settyas gwerth bledhynnek
possybyl data ygor dres seyth dowys — deskans, treusporth, daffar devnydhyoryon, tan-gonis, ewl ha
gasen, yeghes, ha arghans devnydhyoryon — dhe $3 trillion bys $5 trillion an bledhen dres an
bys, dre fordhow haval orth moy a oblegh, keheveli ro ha goulenn yn moy gwiw, ha
gallos produsow ha gonisyow nowydh byldys war an data. An figur na yw mesuryans senaryo, na
dhyllas gwrys, hag yw dyskrifys yn fynsen yn kamm avel omsedhow a yll an governans kemeres yn
ewn, pan wra an gwerth moyha dos dhe dhedhek aral — besnesow, hwithrysogyon, sevysogyon — ow
usya an data, ha hedna yw an pwynt kens hy ygeri es hy gwerthya. An Open Data Institute a'n
Pow Unys, kesdhaskevys gans Sir Tim Berners-Lee ha Sir Nigel Shadbolt yn 2012, a wrug
byldya bagas a studhyow kas moy manyl, bottom-up — sektor orth sektor, set data orth set
data — a vydh pur dhalvosek moy rag kes besnes gwir es figur an titel McKinsey, drefen
y dhiskwedh an fordh a grys an gwerth, na'y ledanseth hepken.

## An matematik

Nyns eus pris marghas dhe ddata ygor, ytho metodow gwerthya a dhrehedh y le; tri dewis
a dheu arta, ha dyw anedha na dal dhe unn y honan:

```
1. Metod kost-ankwithys / kost-dhasdhewlel:
   gwerth ≈ an pyth a wrussa an devnydhyoryon pe dhe dhrehedh po dhe gwarans
   an data kehevel aga honan — finn izella, ankevi gwerth a grys
   dre devnydhyow na waytyas an produser kynsa

2. Metod marghas-kehevelyans / oberyans downstream:
   gwerth ≈ omsedhow po sparyans a dhrehedh besnesow/gonisyow
   byldys war an data (rag ensampel apps satnav byldys war data
   mappyow ha hynwyn ygor) — a gemer oberyans arghansek gwir mes yw
   kales dhe attributya yn glan dhe'n dyllans data y honan (mir orth
   additionality-and-deadweight)

3. Metod kontingent/preferrans derivys:
   gwerth ≈ an pyth a lever an devnydhyoryon a dalsa, po an prys
   a lever aga sparya — mir orth stated-preference-valuation rag an
   metod hollek ha'y gamow

Nyns eus unn a'n re ma a dhefol figur glan haval orth pris marghas;
kessow besnes data ygor lel a dhelmya dres dew po moy, hag yw
splann pyth fordh a wra an lavur.
```

## Ensampel oberys

**Dyllans skwith a ddata mappya/chyow kenedhlek** (metodoleji warlergh studhyow stil ODI, figurow
skwith a'n skeul a gaf studhyow haval yn hollek):

```
Mesuryans kost-ankwithys:
  Besnesow a wrella dhe'n pris aral gwarans data kehevel a-dro
  chyow yn kommersyel, orth kost gwarans kresek gwaytys a £4,000/
  bledhen, dres 15,000 SME gwaytys a usya lemmyn an set data ygor
  = 15,000 × £4,000 = £60,000,000/bledhen yn kost gwarans ankwithys hepken

Mesuryans oberyans downstream (moy dhelwes, a vynn kontrefaktual):
  Produsow nowydh a hynwyn-hendra ha logistik byldys war an data ygor
  na vensa y'n bys, po a vensa yn fowr gweth, hebdhodho —
  a vynn keheveli erbynn an kontrefaktual a'n data ow pesya degys po
  gwarantys yn kommersyel (counterfactual-analysis), drefen
  nebes a'n oberyans na a wrella hwarvos hwath war data pagys orth
  pris uhella, hag hedna yw pwys marow yn skila "gwerth krys dre y ygeri"

Kes besnes defendys a dheriv an figur kost-ankwithys avel finn izella
solyd, ha tretya an figur oberyans downstream avel senaryo finn
ughella, na ffaktys.
```

## Kevrenn gans ynjynnerieth medhelweyth

Rag jynnyoryon, an kwestyon praktyk a werth data ygor yw pur vynsh moy ankombres es figurow
titel kenedhlek: a wra ygeri an API po set data ma (y le y witha ahes a'n ambos kowethyans) kressya
an dasdevnydh lowr dhe justyfia kost pesya a dhyllo, versiona ha skoodhya avel
kesyodh poblek? An kost gwitha na yw gwir ha yw an parneres dhe'n sparyans byldya-unn-treveth-
dasdevnydh-pur-vynsh a [governans avel platform](../governans-avel-platform/) — an dew dowys yw
kehedhwesow, unn adro dhe gode ha kenstrukteryn kevrennys, an aral adro dhe ddata kevrennys.
Pub gwiryonedh a werth data ygor a dal bos previs erbynn
[additionality-and-deadweight](../additivans-ha-pols-marow/) kens mos y'n kes besnes:
oberyans a vensa hwarvos poran, war ddata gwarantys yn kommersyel, nyns yw gwerth a
grysa an *ygeri*.

## Trapow

- **Dyskwedhes figur McKinsey $3–5 trillion avel spesyfek dhe'n Pow Unys po avel rann an set data ma**:
  yw mesuryans senaryo bys-tir, seyth sektor a 2013 — y usya avel multiplyer poran rag set data
  kenedhlek unn a wrella mis-dherivas an pyth yw an niver.
- **Heb kontrefaktual**: ow kleimyas an kredyt rag pub oberyans arghansek downstream byldys war
  ddata ygor, heb govyn pygemmys anodho a vensa hwarvos poran war ddata pagys po gwarantys
  orth pris uhella (mir orth [additionality-and-deadweight](../additivans-ha-pols-marow/) ha
  [counterfactual-analysis](../dhivyskans-konterfaktek/)).
- **Kemmysga kost a dhrehedh gans gwerth krys**: set data ker dhe gevra nyns yw gwerth dhe
  dhyllo yn hweth, ha unn hweg nyns yw gwerth izel yn hweth — an gwerth a holya devnydh downstream,
  na kost upstream.
- **Ankevi kost gwitha pesys "ygor"**: dyllo skrifen CSV unn-prys nyns yw an keth ankorsow
  avel jorna API ygor skriffys, versionys, skoodhys — a dhasfundya
  an dewdhek wosa an gerdhyans dyllans yw fyll kemmyn.

## Fentynyow

- McKinsey Global Institute, "Open data: Unlocking innovation and performance with liquid information" (2013). <https://www.mckinsey.com/business-functions/mckinsey-digital/our-insights/open-data-unlocking-innovation-and-performance-with-liquid-information>
- Open Data Institute. <https://theodi.org/>
