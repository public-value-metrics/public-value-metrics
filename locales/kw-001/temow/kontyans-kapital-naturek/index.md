# Kontyans Kapital Naturek

Kontyans kapital naturek a worr an kerghynnedh war an keth savla avel pub asset kenedhlek po
kuntellyans aral: hi a vesur an stok a ressowrsow naturek (koesow, pri, avonow, gwlyb, an
atmosfer) ha'n lanwes a wonisyow a dhefol (kemeres karbon, difres lymmyow, hamdhyans, boos), yn
termys fisyk ha mona, may fo dhiskwedhys dyfyk an kerghynnedh y'n dewisow haval orth
dyfyk kapital arghansek. An Pow Unys yw unn a'n governansow pellha yn gwil hedna yn
lel, drivys gans an 25 Year Environment Plan (2018) hag apliys dre gontys UK Natural
Capital an ONS ha dyskans ategol Green Book HM Treasury.

## Perag y talvos

Kontyans a'n teylu — kuntellyans ha governans haval — a dhesk koes avel heb dalvos bys pan yw
trohys ha gwerthys avel prenn, ha'n eur na ow tos dhe vos GDP. Kontyans kapital naturek a vydh
dhe serri an bwlch na: an 25 Year Environment Plan a ankoras an governans dhe settya
tybyans kapital naturek dres polici, ow lavarel yn splann an dhelit dhe vos "an kenerasyon
kynsa dhe asa an kerghynnedh yn savla wella es mayth o". An ONS a dhyllo wosa hedna
kontys bledhynnek UK Natural Capital
(<https://www.ons.gov.uk/economy/environmentalaccounts/bulletins/uknaturalcapitalaccounts/latest>)
a vesur gwerth mona a wonisyow ekosystem — dhyworth hamdhyans y'n koes bys dhe leshyow yeghes
a spasow gwyrdh trev bys dhe gadhya karbon an gwlyb-tir — dre usya an keth framweyth Kontys
Kenedhlek a vydh usys rag kapital gwrys, may hyllo kapital naturek wosa hedna esedha y'n keth
tablen keres avel fordhow, tyji ha daffar. Dyskans Enabling a Natural Capital Approach (ENCA)
HM Treasury, ategol dhe'n Green Book
(<https://www.gov.uk/government/publications/enabling-a-natural-capital-approach-enca-guidance>),
a styr fatell dal an apposyoryon gwerthya kostow ha budhow a'n kerghynnedh yn kessow
besnes, may hyllo towlen fordh a dhystrowa koes hen po towlen lymmyow a dhasdhewlel gwlyb-tir
bos kehevelys yn termys mona kesstrethys y le unn a'n jeves niver ha'n huvel paragraf
a dhelmya.

## An matematik

```
Gwerth asset a wonis ekosystem = NPV a lanwes an gonisyow a dhefol an asset

Gwerth asset = Σ (t = 1 dhe T) [gwerth lanwes gonis bledhynnek_t / (1 + r)^t]

mayth yw:
  gwerth lanwes gonis_t = kevatal a'n gonis y'n vledhen t × gwerth unita
                          (rag ensampel ymweleryon hamdhyans × gwerth rag ymweles;
                           tunnow a gemerys karbon × pris karbon)
  r = rate diskont (rate diskont sokyal an Green Book — mir orth
      [rate diskont sokyal](../skeul-diskont-sokel/))
  T = gorwel termyn may fo gwaytys an asset dhe dhefola an gonis
```

Hedna yw an keth framweyth gwerth present net usys rag gwerthya kapital gwrys po apposya pub
budhyans poblek lemmyn
[apposyans Green Book](../arvreythyans-green-book/) — kevres kontyans kapital naturek yw ri
kevatalow fisyk lel ha gwerthow unita rag gonisyow a veu prisys kens dhe nowydh.

## Ensampel oberys

**Koes trev, gwerth hamdhyans**: koes a 50 hektar a dhrehedh 80,000 ymweles hamdhyans
bledhynnek gwaytys, pub unn gwerthys (dre metod kost an vyaj po preferrans derivys — mir orth
[gwerthya dre preferrans diskwedhys](../gwerthya-dre-preferrans-diskwedhys/) ha
[gwerthya dre preferrans derivys](../prisya-dre-dewis-deklarys/)) dhe £3 rag ymweles. An koes a
wayt pesya dhe dhefola an gonis ma rag 50 bledhen, apposys orth rate diskont a 3.5%.

```
Gwerth hamdhyans bledhynnek = 80,000 × £3 = £240,000/bledhen

NPV dres 50 bledhen orth 3.5% ≈ £240,000 × fylkter annuita(3.5%, 50 bledhen)
fylkter annuita(3.5%, 50) ≈ 21.4

Gwerth asset ≈ £240,000 × 21.4 ≈ £5,136,000
```

**Ow tehe gwith karbon**: an keth koes a gemer 400 tunn a CO2 an bledhen gwaytys,
gwerthys orth pris karbon an governans nyns-gwerthys a-dro dhe £75/tunn (skwith — usya an
gwerthow karbon BEIS/DESNZ dyllys lemmyn rag apposyans bew).

```
Gwerth karbon bledhynnek = 400 × £75 = £30,000/bledhen
NPV dres 50 bledhen orth 3.5% ≈ £30,000 × 21.4 ≈ £642,000

Gwerth asset koes hollek (hamdhyans + karbon) ≈ £5,136,000 + £642,000
                                                   ≈ £5,778,000
```

Hedna yw kens ow tehe leshe lymmyow, bywvewnans po gwasonyow ayr a wovyn dyskans ENCA ynwedh
dhe'n apposyoryon kemeres yn kons — an kresen yw yn tyby leur, na'n nenvos.

## Kevrenn gans ynjynnerieth medhelweyth

- Systemyow kerghynnedhek ha jorna asset rag auturdodys leel hag asnedhyow (pargow, fordhow
  meur, dowrow) a yll staga rejistra kapital naturek ryb aga rejistra asset fisyk, ow
  usya an keth patron lanwes-gonis-times-gwerth-unita avel pub
  [kronnyow kost unita](../ostelyow-kost-an-unnenn/) a wra an kuntellyans gwitha.
- Drefen NPV kapital naturek bos sensitiv dhe'n rate diskont (mir orth fylkter annuita an
  ensampel), pub ostelwedh a'n kontya a dal diskwedhes an rate ha'n gorwel avel ynkorsow gwelys,
  na'ga hudha — an keth poynt a dhisplegys yn
  [kehevelder ynter kenerasyons ha diskonta a barhansek](../ekwita-ynter-henedhyow-ha-diskonting-sostalita/).
- Kontys kapital naturek yw yn fowr yn dhe vos ynkors res rag rannow efeyth kerghynnedhek
  kessow besnes [apposyans Green Book](../arvreythyans-green-book/); an pennskipa
  a wra byldya ostelow kessow besnes a dal tretya kontys an ONS ha gwerthow unita
  ENCA avel data dhe gevrena, na dra a dhasdhewlel an apposyoryon dhyworth an dallath
  pub prys.

## Trapow

- **Dyblyg-kontya gonisyow ekosystem a gesgwrans** — gwerth hamdhyans ha gwerth bywvewnans
  rag an keth le a yll kevrenna data pryn-ewl a'n gwaytys; dyskans ENCA a wardh yn splann
  erbynn kresen gwerthow dhyworth ostelow arhwith a gesgwrans.
- **Tretya gwerth asset kapital naturek avel stedhek** — lanwesow gonis a janj gans an klymat,
  gwithyans ha gwask usyans tir; gwerth karbon ha difres lymmyow koes yn an dekvledhen ma
  nyns yw perghenn pesys a'n le.
- **Usya gwerthow unita kresek kenedhlek rag dewis pur leel** — hektar a goes trev hedhadow ha
  hektar a ynys pell yn ughel a'n jeves gwerth hamdhyans pur dhyffrans; dyskans ENCA a
  gussul gwerthow leel po spesyfek dhe'n le mara ens kevys, na dewis kresen kenedhlek.

## Fentynyow

- ONS. "UK natural capital accounts."
  <https://www.ons.gov.uk/economy/environmentalaccounts/bulletins/uknaturalcapitalaccounts/latest>
- HM Government. "A Green Future: Our 25 Year Plan to Improve the Environment." (2018)
- HM Treasury / Defra. "Enabling a Natural Capital Approach (ENCA): guidance."
  <https://www.gov.uk/government/publications/enabling-a-natural-capital-approach-enca-guidance>
