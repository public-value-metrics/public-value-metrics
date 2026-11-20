# Gwerthya dre Preferrans Diskwedhys

Metodow preferrans diskwedhys a dhisplegh gwerth a dra nyns-marghas dhyworth omdhegh gwelys y'n
marghas kehevelys, na dre wovyn dhe dus yn ewn. Prisya hedonek ha metod kost-vyaj yw an dhew
dhyskans oberi: an dhew a dhallath dhyworth trensaksyon gwir hag a dhrehedh pris kuthys rag an
tra na veu gwerthys yn ewn.

## Perag y talvos

Le may fo metodow [preferrans derivys](../prisya-dre-dewis-deklarys/) a wovyn govyn hypothetek,
metodow preferrans diskwedhys a verk pyth a bayas an bobel yn gwir, ha'n Green Book a'n tret
avel dustuni moy kredus yn hollek, pup tra aral kehevel, drefen na vydh sujetys dhe gamm
hypothetek — an gorthebyoryon yn studh pris chi hedonek a bayas yn gwir an premium po an
dyskont a vydh messuryes
(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>,
Annex 2). Prisya hedonek a dhyberth pris marghas — yn fynsen prisys chiow — dhe brisys kuthys
rag pub nodwedh a'n tra, ow lowsel an apposyoryon dhe dhyberth, rag ensampel, an premium
pris a bay teyluyow yn gwir dhe vewa yn le moy kosel po gans ayr gwell, ow kontrollya yn
statystek rag pub nodwedh aral a dhefol pris chi (myns, le, kreslu skol). Metod kost-vyaj
a wra an keth tra rag lehow hamdhyans heb pris entrans: an termyn ha'n arghans a spenn an
bobel ow vyajya dhe'n le a dhiskwedh finn izella a'n pyth yw an le dhedhans, drefen na
dhefol den vyth kost a ugh a'n pyth yw an ymweles dhodho.

An dhew vetod a rann unn finn strethurek: ny yllons gwerthya marnas an pyth yw gorrys yn
trensaksyon marghas a-bervedh. Son ogas dhe fordh-ayr a dhiskwedh y'n prisys chi drefen an re
a vyn an son dhe sortya dhe chiow moy kosel; gwerth bos spesis na wrella den vyth
ymweles po bewa ogas dhodho nyns usedh y'n trensaksyon vyth, ha hedna yw an bwlch poran may
yw metodow [preferrans derivys](../prisya-dre-dewis-deklarys/) yn bos dhe leni.

## An matematik

```
Prisya hedonek:
  Pris chi = f(nodwedhow strethurek, nodwedhow le,
                nodwedh kerghynnedhek a les, ...)
  Gwerthya dre regressyon; koefysyent an nodwedh kerghynnedhek
  (ow terry pup tra aral kehevel) yw y bris kuthys.

  Pris kuthys a nodwedh X = ∂(Pris chi) / ∂X

Metod kost-vyaj:
  Rate ymweles (ymwelyow rag kabm dhyworth zon i) = f(kost vyaj dhyworth zon i,
                an lehow sodhys, kontrollys sokyo-arghansek)
  Gwerthya kromm goulenn rag ymwelyow avel gwarak a gost vyaj.
  Surplus kustomer = ardh dadn an kromm goulenn gwerthys
                    = gwerth an le dhe ymweleryon
```

An dhew vetod a wovyn set kontroll statystek da — gasa nodwedh kesgwrys (hedonek) po le
sodhys nes (kost-vyaj) a skew an pris kuthys yn tu na vydh pup prys splann a-varth — hag
yw an acheson prag y wovyn Annex 2 an Green Book bos desinyans an regressyon ha'n kontrollow
derivys, na hepken an koefysyent titel.

## Ensampel oberys

**Governans kenedhlek**: metodoleji pris karbon skwith an Green Book y honan a dhrehedh yn rann
dhyworth dustuni hedonek, mes kas skwith moy es yw son ayrlong. Studh hedonek ow regressya
prisys gwerth chiow yn ranndir fordh-nijans erbynn gwithyans son pwysys herwydh pellder,
ow kontrollya rag myns, oos, ha kreslu skol, a gaf bos pub unn desibel moy a withyans son kresek
kelmys dhe ledhans 0.5% y pris chi. Rag chi kresek £280,000 y'n ranndir tuchys:

```
Pris kuthys rag desibel = £280,000 × 0.5% = £1,400 rag teylu
Teyluyow tuchys gans ughellheans 3dB dhyworth fordh nowydh = 18,000
Kost kuthys kesunys a ughellheans an son = £1,400 × 3 × 18,000 = £75.6m
```

Hemma yw kost kapitalyzys unn-tro (gorrys y'n pris chi), ha dh'an apposyans y dal bos
war-wardh rag na dhyblyg-kontya erbynn kost kwynans-son bledhynnek dyvers.

**Charita**: charita kerghynnedhek a wra usya an metod kost-vyaj rag gwerthya reserv natur
rydh dhe entra. Data arhwith war kodow-post ymweleryon a ri kost vyaj kresek ha-dhe-dre
(termyn gwerthys orth gwerth termyn nag-oberi dyskwedhys gans an Green Book, ha tanwedh)
a £14 rag ymweles, gans 40,000 ymweles an bledhen. An kromm goulenn gwerthys — rate ymweles ow
koedha pan wrella kost vyaj dhyworth zon ughella — a styr surplus kustomer rag ymweles, a-ugh an
£14 spennys yn gwir, a-dro dhe £9.

```
Gwerth bledhynnek hollek = 40,000 ymweles × (£14 spennys + £9 surplus kustomer)
                          = 40,000 × £23 ≈ £920,000/bledhen
```

Hemma a hevel bos brassa es omsedhow entrans nul an reserv hag a ri dhe drustiys an charita
figur defendys rag gwerth hamdhyans an le, pan wrella an kes dhe arghansoryon.

## Kevrenn gans ynjynnerieth medhelweyth

Tybyans preferrans diskwedhys a dheu y analytys produs sektor poblek moy es a wodhvyth an
practitioners: data usyans dhyworth servys didjital governans rydh yw y honan dustuni
preferrans diskwedhys a wherth (frekwensi, hys sessyon, ha — moyha dyskwedhek — patronow
usyans dasgwrys erbynn unn-tro a yll bos analysys haval orth fatell wra model kost-vyaj
tretya frekwensi ymweles erbynn pellder). Le may fo dhe'n servys sodhyow gwir (kanal paper,
linenn pellgows), an "kost" a drehedh sevysogyon dhe usya an kanal didjital y'n le (termyn,
data, devis) a yll bos gwerthys ha kehevelys gans usyans, ow dasgan lojik kost-vyaj yn ewn.
Mir orth [standard servys didjital](../savonek-servis-didhital/) ha
[gwerth data ygor](../gwerth-data-ygor/), a wra fronti poran an kudyn gwerthya ma rag tra heb
pris marghas ewn.

## Trapow

- **Bias variabl gesys y'n modellow hedonek.** Gasa nodwedh kesgwrys yn mes (kerensys skol
  a gesgwra gans pris chi ha'n variabl kerghynnedhek) a skew an mesuryans pris kuthys;
  y dal desinyans bos derivys ha skrutinys, na hepken an sewyans.
- **Ankevi lehow sodhys yn studhyow kost-vyaj.** Gwerth diskwedhys ymweler rag le yw dhe-isel-
  messuryes mara ma le sodhys nes ha na vo kontrollys — a yll ymweles yn kynsa drefen yw
  rydh, na drefen y vos spesyal gwerthek.
- **Apliya preferrans diskwedhys dhe dra heb dasson marghas vyth.** Gwerth bosva, gwerth dewis,
  ha gwerth gada na dhiskwedh yn trensaksyon vyth ha na yll bos dasgevys dre vetodow hedonek po
  kost-vyaj — an bwlch na a bew dhe [wherthya dre preferrans derivys](../prisya-dre-dewis-deklarys/).
- **Kemmysga gwerth kapitalyzys (unn-tro) gans lanwes bledhynnek.** Effeythyow pris chi hedonek
  yw yn fynsen gwerthow kapitalyzys unn-tro; ow tretya y avel lanwes budhi bledhynnek a ughell an
  apposyans.

## Fentynyow

- HM Treasury. "The Green Book," Annex 2: valuing non-market impacts.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Department for Transport / Civil Aviation Authority. Aircraft noise valuation studies used in
  airport appraisal. <https://www.gov.uk/guidance/aviation-noise>
- Rosen S. "Hedonic Prices and Implicit Markets: Product Differentiation in Pure Competition."
  Journal of Political Economy, 1974.
- Clawson M, Knetsch JL. "Economics of Outdoor Recreation." Johns Hopkins University Press, 1966
  (origin of the travel-cost method).
