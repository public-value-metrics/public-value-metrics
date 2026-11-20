# Produktivita Servyssow Poblek

Produktivita servyssow poblek a vesur fatell effeythus yw spenna poblek ow treylya mewnrosow
(staff, kapital, daffar ha servyssow) dhe ddyllyansow attylys herwydh kerensys, rag servyssow —
yeghes, deskans, poleys, kuntel kerghes — heb pris marghas ha ytho heb figur omsedhow dhe rannya
kostow ynna. An Office for National Statistics a dhyllo an rew ma dhyworth hanter kensa an 2000yow
ha hi yw an hwithrans kenedhlek moyha displegys yn metod dhe worthebi "a yw an governans
ow tos dhe vos gwell po gweth orth treylya arghans dhe wonisyow poblek?"

## Perag y talvos

Y'n marghas, produktivita yw (gwerth dyllyans) / (kost mewnros), ha gwerth dyllyans a yll bos gwelys
drefen nebonan a bay rag. Chanj lin, plas skol, ha ledh poleys nyns a gwerth pris, ytho yn
naiv ny yllir messurya marnas *mewnrosow* (pyth veu spennys) — a dhedh dhe'n kemeryoryon
konsel tretya spenna poblek owth ughella avel drog yn awtomatek, drefen moy mewnros gans
oberyans titel kehevel a hevel dhe vos produktivita ow koedha. Metodoleji an ONS, settys yn
y dyllansow "Sources and Methods" rag produktivita servyssow poblek, a wra solya hedna dre
vyldya menegva *dyllyans* dhyworth kevatalow oberyans (oberyansow gwrys, skolheigyon desys,
kesys krim hwithrys) ha wosa hedna *attyly herwydh kerensys* an menegva dyllyans — rag yeghes,
ow kemeres rate dhe vewnans ha termynow gortos; rag deskans, ow kemeres drehedhyans; rag
poleys, ow kemeres sewyansow haval orth settlyans kas — may fo servys a wra an keth niver
a oberyansow mes drehedh gwell rate bewnans rekordys avel moy produktiv, na hepken moy ker.
An hwithrans titel a dhasdheu dres dyllansow an ONS yw sad dhe'n sektor: produktivita
servyssow poblek an Pow Unys a goedhas yn kriv dres pandemik COVID-19 hag, herwydh dyllansow
a hanter an 2020yow an ONS y honan, nyns o hwath dasserghys dhe nivowyow 2019 yn lies
is-sektor yn mesk yeghes, kyn fo ughella spenna — bwlch a wra dhe "moy fundyans" ha
"moy produktivita" bos dew woveyn tien dyberth.

## An matematik

```
Menegva dyllyans (kevatal) = Σ (oberyans_i × pwys kost unita perthynek_i), pwysys orth
                          bledhen selys dres pub oberyans servys (rag ensampel oberyansow
                          lin, oberyansow lagas, kussulyansow GP), haval orth menegva
                          kevatal Laspeyres/Paasche

Attylyans kerensys    = menegva dyllyans × fylkter attylyans kerensys
                          (rag ensampel ow kemeres chanj yn rate bewnans, termynow gortos,
                          drehedhyans, po arta-offendya avel multiplyer war kevatal noeth)

Menegva mewnros       = Σ (oryow lavur × pwys kost lavur) + (kost daffar/servyssow,
                          deflatys) + (konsumyans kapital)

Kressyans produktivita ffaktor hollek = % chanj y menegva dyllyans attylys herwydh kerensys
                                        − % chanj y menegva mewnros
```

## Ensampel oberys

**Kowntyans produktivita skwith sektor akut an NHS** (strethur herwydh metodoleji an ONS):

```
Bledhen 1: menegva kevatal dyllyans = 100.0 (bledhen selys), menegva mewnros = 100.0
           → menegva produktivita = 100.0

Bledhen 2: kevatal oberyans a gressa 3.0% (moy oberyansow, moy metyansow)
           mes kresen termyn gortos a wetha, ow apliya dyskont attylyans
           kerensys a −1.0%
           Menegva dyllyans attylys herwydh kerensys = 100 × 1.030 × 0.990 = 101.97

           Mewnrosow a gressa: niver staff +4.0%, kostow erel (deflatys) +1.5%,
           menegva mewnros pwysys = 100 × 1.032 = 103.2

Kressyans produktivita = (101.97 / 100 − 1) − (103.2 / 100 − 1)
                        = 1.97% − 3.2% = −1.23 poynt skoreth

Styrans: oberyans a gressa, mes mewnrosow a gressa yn uskisa ha kerensys a goedhas
nebes, ytho produktivita — dyllyans rag unita mewnros — a lehas kyn
"y fia moy gwith dyllys."
```

Hemma yw an poran patron a dhyllansow ONS re dherivas lies treveth rag rannow a'n NHS wosa an
pandemik: spenna ow tevi ha oberyans noeth ow tevi gans produktivita messuryes ow koedha
pan yw an attylyans kerensys ha kressyans mewnros kowntys an dhew.

## Kevrenn gans ynjynnerieth medhelweyth

Produktivita servyssow poblek yw haval nivel pobel a dhadhelyow produktivita jynnyrieth
(pointys stori dyllys erbynn [metrikow DORA](../metryksow-dora-rag-talvos-poblek/) erbynn
[metrikow lanwes](../metryksow-ruth-yn-delivrans-an-governans/)): trowrdh noeth heb attylyans kerensys
yw kamdhyrivys yn klavjy avel "linennow kodh dyllys" yw war skipa medhelweyth. Skipasow ow byldya
pibennow data performans rag dirvedhow a dal tretya attylyans kerensys avel gradh trevnedh kynsa-
klass, versionys, na noten diwedh — drefen kredyans an ONS y honan a esedh war an attylyans bos
splann, dasprevadow, ha dasvyrtyes mara teu data kerensys gwell (an ONS a asdhasvyrt
amkanyow produktivita bledhynyow tremenys pan vo data kerensys a-dhelergh — rag ensampel
rate bewnans — kowlhes, ytho pub system downstream a dhefol an statystygyon ma a dal dhe
handla dasvyrtyansow dhe-wartha, na hepken ynnya termynow nowydh). Yw ynwedh kessydhys yn ewn
gans [kost hollek perghennogeth](../kost-perthyans-hollek-yn-tt-an-governans/) ha
[produktivita AI y'n sektor poblek](../produktivita-ai-yn-rann-poblek/): system a gressa
kevatal oberyans noeth heb gwellhe po gwitha kerensys nyns yw, herwydh diskrifans an ONS y honan,
gwellheans produktivita.

## Trapow

- **Tretya kressyans mewnros avel kressyans produktivita**: moy spenna ow fundya moy staff a
  dhefol moy *oberyans*, na moy *produktivita*, marnas y fo dyllyans rag unita mewnros ynwedh
  ow tevi — an dhew a vydh kemmyskys yn usadow yn glyn politek.
- **Ankevi attylyans kerensys yn tien**: menegva dyllyans byldys hepken dhyworth konta oberyans
  noeth a dhiskwedh "kewar produktivita" dhyworth gwil moy a nampyth gwerth izella po kerensys
  izella; attylyans kerensys an ONS yw yn spesyfek dhe'n kavos.
- **Keheveli menegvaow produktivita dres is-sektorow heb keheveli oos metodoleji**:
  produktivita yeghes, deskans, ha poleys yw pub unn byldys dhyworth fentynnow data oberyans ha
  kerensys dyffrans war kylghyow dasvyrtya dyffrans — keheveli dres sektorow naiv a gehevel
  daffar anghevannadh.
- **Redya koedhans produktivita unn bledhen avel tuedh pesys**: figurow produktivita pandemik ha
  wosa-pandemik a dhiskwedhas heglewder bledhen-orth-bledhen bras ha data kerensys (rag
  ensampel rolyow gortos, dasserghyans dewisek) y honan a symudyas; an ONS a wardh pup prys
  erbynn gorresna symudyansow unn bledhen.

## Fentynyow

- Office for National Statistics, "Public Service Productivity" series.
  <https://www.ons.gov.uk/economy/economicoutputandproductivity/publicservicesproductivity>
- Office for National Statistics, "Public Service Productivity: Total, UK — Sources and Methods."
  <https://www.ons.gov.uk/economy/economicoutputandproductivity/publicservicesproductivity>
