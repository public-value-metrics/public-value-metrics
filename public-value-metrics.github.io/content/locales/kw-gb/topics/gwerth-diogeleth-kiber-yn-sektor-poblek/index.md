# Gwerth Diogeleth Kiber y'n Sektor Poblek

Gwerth diogeleth kiber y'n sektor poblek yw an dysgyblyn a brisa dishwithra peryl: pyth yw an dalvedh dhe
wil terri data an sevysogyon dhe vos le possybyl, ow kemeres bos spenna diogeleth heb dyllyans
gwelys pan wra oberi ha unn pur welys pan wra fyllel? Rag servys ow kwitha rekordys budhyow,
data yeghes, po rekordys tyli, an perghenn "anwelys pan wra oberi" yw poran an acheson ma res
dhodho argument gwerth splann, na hepken tik komplians.

## Perag y talvos

Cyber Assessment Framework (CAF) an National Cyber Security Centre a ri dhe'n
kuntellyansow sektor poblek fordh strethys dhe wil diogeleth dysgyblyn a yll bos apposys, selys
war sewyansow, na rol-lyvrow: hi a styr peswar amkan ughel (rewlya peryl diogeleth, gwitha
erbynn omsettyans kiber, kavos hwarvosow diogeleth kiber, ha leshe efeyth hwarvosow) terrys dhe
sewyansow kevrennys may hyllir system-perghen dhe vos apposys erbynn, y'n keth spyrys avel
poynt 9 an [digital-service-standard](../savonek-servis-didhital/) ("gwruthyl servys diogel a
witha privedhieth an usyoryon"). An pyth a witha apposyans CAF yw erbynn a'n jeves pris
skrifys: Report IBM Cost of a Data Breach a ros kost kresek terri herwydh sektor, ha'n sektor
poblek a gafas pup prys war dhiwedh izella an ystynn keheveli gans arghans po yeghes —
dyllansow nowydh a settya kresen sektor poblek a-dro dhe $2.6–2.9 milyon rag pub terri — mes
"izella es arghans" nyns yw "izella", ha terrow governans a'n jeves kostow na gemer figurow an report
yn leun: kolli fydh sevysogyon yn kanalow didjital, hag a dhisklyvya an
[kemeres didjital](../sawyansow-treylyans-kanel/) may fia kessow besnes treusfera kanal, ha'n
kost politek ha lagha a dhiskwedhes data a wrug an stat konstrynya sevysogyon dhe dhe ri.

## An matematik

Budhyans diogeleth a vydh gwerthys haval orth pub spenna dishwithra peryl: avel leshe kolli
gwaytys, dre usya an identita rewlya peryl klassek.

```
Kolli Gwaytys Bledhynnek (ALE) = Kolli Gwaytys Unn (SLE)
                                × Rate Hwarvos Bledhynnek (ARO)

Gwerth kontroll diogeleth =
  ALE_kens_kontroll − ALE_wosa_kontroll − kost bledhynnek an kontroll

Kontroll a dal bos fundys pan:
  (ALE_kens − ALE_wosa) > kost bledhynnek an kontroll

Apposyans CAF na dhefol ARO yn ewn, mes profil sewyans CAF servys
(pyth sewyans kevrennys yw "drehedhys", "drehedhys yn rann", po
"nyns yw drehedhys") yw ynkors proksi rasnadow dhe vesurya ARO —
system gans kevewnans privilejys heb rewl po heb towlen
gorthyp hwarvos previs a'n jeves ARO gwir pur vrassa es unn gans an dhew.
```

## Ensampel oberys

**System rewl kas konsel konteth ow kwitha rekordys keredh sokyal rag 40,000 preswylyer**:

```
Kolli Gwaytys Unn (kost terri), ow usya kresen sektor poblek
dhyworth report IBM Cost of a Data Breach diwettha ≈ £2.1m
(treylys, figur urdhyn vrassa — dasdherivi pup prys dhyworth an
edycyon diwettha kens dasusya niver stedhek)

ARO lemmyn (kevewnans privilejys heb rewl, heb towlen
gorthyp previs, herwydh omapposyans CAF ynwedh ow diskwedhes lies
sewyans "nyns yw drehedhys") ≈ 8% an bledhen gwaytys
  ALE_kens = £2.1m × 0.08 = £168,000/bledhen

Kontroll profys: rewl kevewnans privilejys + towlen gorthyp
previs, ow symudya an sewyansow CAF dhe "drehedhys",
gwaytys lehe ARO dhe 3%/bledhen
  ALE_wosa = £2.1m × 0.03 = £63,000/bledhen

Kost bledhynnek an kontroll (ostelow + argerdh + previ) = £45,000

Gwerth an kontroll = (168,000 − 63,000) − 45,000 = £60,000/bledhen
  net pozitiv — fundya. An aritmetik a dhiskwedh ynwedh bos an
  kontroll hwath gwiw dhe fundya orth ogas dhe dri-fold an kost,
  hag yw an stil previ sensitivita a dal dhe gowethyas pub figur ALE
  byldys war probabiliti gwaytys.
```

## Kevrenn gans ynjynnerieth medhelweyth

Jynnyoryon a bew an moyha a'n levrow yn lyveryans ALE: desinyans kevewnans kontrol, hygiene a
dhependansow ha patchys, kovera logya ha kavos, hag ostelow gorthyp hwarvos — pub unn
a symud an term ARO yn ewn, ha hedna yw an acheson may whilas apposyans CAF haval orth dyski
arkitektur teknikal kemmys avel awdyt polici. Hemma yw
[dyvynn teknikal avel dismeghi gwerth poblek](../dyvas-teknegel-avel-dhirywyans-talvedh-poblek/) yn y
furv moyha kri — systemyow heb patch, heb monitoryn, gans kontrol kevewnans gwann yw dyvynn
may fo an dalvedh interest peryl lost, na tir stedhek — ha dal bos kesstrethys gans
[total-cost-of-ownership-in-government-it](../kost-perthyans-hollek-yn-tt-an-governans/) may
na vo spenna diogeleth tretys avel dyberth dhyworth gwir kost lenwi an system. Yw ynwedh
ynkors ewn dhe apposyansow [gwerth rag arghans](../talvedh-rag-arghans/) yn-dadn an Green Book:
kost rag peryl-attylys yw rann a'n tu "kost" a bub apposyans dewisow, na dra ow tevi orth an diwedh.

## Trapow

- **Tretya omapposyans CAF avel diogeleth y honan**: apposyans kowlwrys a dhyskriv savla
  diogeleth; na wra hi — an gwerth yw yn sewyansow drehedhys, na'n skrif.
- **Usya kost terri kresen bys-tir avel mesuryans leel heb kesedhes**: figurow IBM yw kresennow
  dres sampyllow brassa, lies; Kolli Gwaytys Unn gwir a dhirvedhieth leel byghan nyns yw
  pur vynsh an keth avel a dhirvedhieth governans kenedhlek.
- **Ankevi syns peryl lost yn dewisow budhyans**: probabiliti bledhynnek izel a wra spenna
  diogeleth es dhe dhelayans heb dyweth, bys y'n bledhen na — previ sensitivita an kowntyans
  ALE erbynn ystynn ARO, avel y'n ensampel gwrys, a'n gwith.
- **Hepken konta kost terri stil-IBM, na kost fydh**: terri a dhisklyv bodh sevysogyon dhe
  usya kanalow didjital a ry dismeghi dhe kes [channel-shift-savings](../sawyansow-treylyans-kanel/)
  rag bledhynyow wosa, kost pur dhyvarow y'n mesuryansow kost terri.

## Fentynyow

- National Cyber Security Centre, Cyber Assessment Framework. <https://www.ncsc.gov.uk/collection/caf>
- IBM, Cost of a Data Breach Report. <https://www.ibm.com/reports/data-breach>
- GOV.UK Service Manual, service standard, point 9: create a secure service which protects users' privacy. <https://www.gov.uk/service-manual/service-standard/point-9-create-a-secure-service>
