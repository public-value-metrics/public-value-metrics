# Byldya po Prena y'n Gwarnans

Byldya-po-prena yw keskomparyans strokturys, alhwedhys herwydh peryl, a dhisplegyans arbennik erbyn akwisyans kenwerthel po kenwerth kemmyn, keskomparys war [kost leun perghenogeth](../kost-perthyans-hollek-yn-tt-an-governans/) diskontys, termyn-dhe-dhalvos ha peryl. Yn strokturel yw an gwarnans sektor prenyer — Kodh Usadow Teknologi a worr presumpsyon a-dhesyr dhe solusyonow kenwerth ha kommol — mes bagasow ynjynnerieth a-ji an asrannansow a worra hweth dhe vyldya dre ankevi, rag an keth skilyow a'n jeves byldyoryon yn pub le.

## Perag y talvos

Kodh Usadow Teknologi an Government Digital Service (<https://www.gov.uk/guidance/the-technology-code-of-practice>) ha gidyans Lyver Gwoyth an Servis a-dro dhe dhewis byldya po prena a dhrias an asrannansow dhe justifya displegyans arbennik erbyn presumpsyon y tal galloes kenwerth bos prenys, ha nyns byldys, ha hepken galloes ynwir nowydh, a-dhyvers dhe'n porpos, a wra kodh arbennik dhegol. Gidyans Lyver Gwer HM Treasury war bias dhedhwyl, dhiworth dhisplegyans Mott MacDonald 2002 a brenansow poblek meur, a ro dhe dowlennow IT an skeul ystynnys uhella a bub kategori prisys — estymyansow kost kapital erghys dhe vos ughelhes dre 10% dhe'n isella ha bys dhe 200% dhe'n ughella kyns aga devnydh yn prisyans, a dhiskwedh fatel veu byldyansow medhelweyth dann-estymys yn tien dres prenansow poblek. Dhivyskans byldya-po-prena a vew dhe worra an alhwedh peryl ma war an bord kyns aprovyans, ha nyns dh'y asa dhe dhiskwedhes avel govyn gorspenna y'n bledhen.

## An matematik

```
Keswar dres an keth horisont 3–5 bledhen, diskontys orth skeul diskont sokel
Lyver Gwer (gwelewgh social-discount-rate.md):

NPV_dewis = PV(prow, displasys herwydh termyn-dhe-dhalvos) − PV(TCO)

Alhwedhow peryl (patron bias dhedhwyl Lyver Gwer):
  kost byldya × 1.1–3.0        (skeul ystynnys towlen IT, Mott MacDonald)
  byldya termyn-dhe-dhalvos + 40–60% (kynsa daladh devnydhya)
  prena: gwra ynwedh kwiryans kesunya ha kost diwedhva kuntrath

Menystrysyon dewis, y'n ordyr may fynnons gwitha:
  1. dyvyskans — yw an galloes ma an porpos, po peran?
  2. termyn-dhe-dhalvos × kost daladh (gwelewgh cost-of-delay-in-public-programmes.md)
  3. kost leun perghenogeth alhwedhys herwydh peryl
```

## Ensampel oberys

Auturyta leel a'n jeves edhom a system maner kas rag kovva sokel oll. Prena: SaaS dhe £180,000/bledhen, yn bew yn 4 mis. Byldya: estymys £900,000 ha £150,000/bledhen mentena, yn bew yn 14 mis.

```
Kost byldya alhwedhys herwydh peryl = 900,000 × 1.4 = £1,260,000
TCO 5 bledhen:
  prena  = 180,000 × 5 = £900,000
  byldya = 1,260,000 + 150,000 × 5 = £2,010,000

Ger daladh: an system a skap £40,000/mis yn aswonnys gwrys diwettha;
byldya a dheu 10 mis a-dhelergh prena.
CoD = 10 × 40,000 = £400,000

Keskomparyans effeythus: £900,000 (prena) erbyn £2,010,000 + £400,000 = £2,410,000 (byldya)
```

Prena a wayn dre dro dhe £1.5 million dres pymp bledhen, ha'n linenn unnik moyha wosa an estymyans byldya y honan yw kost an daladh, na wrussa keskomparyans capex pur dhiskwedhes bythkweth.

## Kevrenn gans ynjynnerieth medhelweyth

An dhisplinow a drehedh yn skon dhiworth an dhivyskans ma dhe wonis delivrans: **alhwedh peryl herwydh kynsa** — skeul Mott MacDonald yw kehaval medhelweyth bias dhedhwyl Lyver Gwer devnydhys yn mekanikel, ha rag henna a dal an bagasow dadhla rag eksepsyonow dhodho, ha nyns tybya bos aga estymyans an eksepsyon; **onester keskomparyans** — an dewis arall dhe vyldya yw an gwella dewis prena kevys, ha nyns "tra vyth", ha hemma a gesstrik yn skon orth [kost chons gollys yn spenna poblek](../kost-chauns-yn-spenna-poblek/); ha **keskomparyans TCO onest** — pub profyans byldya a dal bos keskomparys erbyn [kost leun perghenogeth](../kost-perthyans-hollek-yn-tt-an-governans/) leun dewis prena, ha nyns y brys rol. Le may wayn byldya yn gwir, [kost daladh](../kost-daladh-yn-towlennow-poblek/) an termyn byldya ystynnys a dal bos prisys yn splann y'n kas negys, ha nyns gasys avel tybyans anleverys na vern termyn.

## Trapow

- **Keskomparya pris rol an gwerther erbyn estymyans byldya heb alhwedh peryl**: hemma a ros dhe vyldya hweth dew wyth, unn wyth war gost hag unn wyth war dhedhyow.
- **Lavur ynwedhek a bris sifra**: termyn ynjynnerieth servis sivil yw trettys avel "rydh" drefen bos hi war budjet niver pennow an asrannans seulabrys, hag a gudh y gost chons gollys erbyn ober arall a ylli an bagas dhe wul.
- **Kloppa heb pris yn dhew dhirewal**: kost diwedhva gwerther ha portabilita data yw gwir, mes yw ynwedh bus-factor byldyans arbennik ha'y dhibyndans war witha bagas bian, kales dhe dhasettya, a-ji dres y vewnans.
- **Dyvyskans porpos hawlys rag peran**: "hemma yw kres dhyn" assertys a-dro dhe middleware kesunya po stor dokumentow — prevewgh erbyn mar teu sitisen po oberyer kas dhe wul notya pyw unn a ruth dhelergh.

## Fentynyow

- Central Digital and Data Office, Technology Code of Practice. <https://www.gov.uk/guidance/the-technology-code-of-practice>
- GOV.UK Service Manual, deciding whether to build or buy technology. <https://www.gov.uk/service-manual>
- HM Treasury, Green Book supplementary guidance on optimism bias. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
