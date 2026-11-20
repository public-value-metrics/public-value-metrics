# Kost Perthyans Hollek yn TT an Governans (TCO)

Kost perthyans hollek yw kost leun bewnans system — kemeres hag oll bledhen a'y rynya — diskontys dhe unn dhedh kebmyn. Yn TT an governans, an fyll rakleverel an moyha fydhys yw keshes kevarwodhoryon po dewisyow orth pris kemeres hepken, pan vo oberyans ha mentenans dre vras ynter hanter ha peswar-pymp rann a'n bil bewnans.

## Perag y talvos

Lyver Gwyrdh HM Treasury a erghys dhe'n kas arghansek yn pub kas negys Model Pymp Kas hweri kostow bewnans leun, nyns kostow kapital hepken — hwath an National Audit Office re gavas lies gweyth rannow ow kemeres ynworrans TT erbyn rakleverel kost-redyans anleun po fydhek, ha dyskudha kost oberyans ynwir pan vo an system bew ha'n linenn budjet kapital degeys. Kod Praktis Teknologieth an Government Digital Service ha'n Central Digital and Data Office (<https://www.gov.uk/guidance/the-technology-code-of-practice>) a dhre rannow dhe gloud ha hostya kebmyn yn rann drefen y wra kost pesyek gwelys ha keshes, yn le bos kudhys a-ji unn niver kemeres kapital a dheg isel orth kemeres hag a wra kamm-ddrog tri bledhen wosa.

## An matematik

```
TCO = Kost kemeres + Σ(t=1..N) Kost oberyans bledhenek_t / (1+r)^t
      − talvedh gwrians (diskontys)

r = skeul diskont sokel standard an Lyver Gwyrdh HM Treasury, 3.5%/bledhen
    (towlen skeul ow tiskynna rag orizonow a-ugh 30 bledhen)

Kefrannow kost oberyans: hostya/lysensya, skoodhyans ha mentenans,
patchya kevarwodhder ha selvyans, termyn staff, daspenna/dreshanjya towlys
```

Gwelewgh [skeul diskont sokel](../skeul-diskont-sokel/) rag an perag y vern an fattor diskont dres bewnans system 5–10 bledhen usus, ha [drehevel erbyn prena yn governans](../byldya-po-prena-yn-gwarnans/) rag fatel borth TCO dhe dhewis drehevel/prena.

## Ensampel oberys

Rann a gesskes dew system dyghtya kasow war orizon 5 bledhen orth skeul diskont 3.5% an Lyver Gwyrdh.

```
System A: capex £3,500,000, opex £250,000/bledhen
System B: capex £1,800,000 (a wra gwelys kosstow le), opex £650,000/bledhen
          (skoodhyans gwerther trom ha charj kesplegya)

Keshes ankevrewys war capex hepken: B a wayn, £1.8M < £3.5M.

Sommen fattor diskont, 5 bledhen orth 3.5%: 0.966+0.934+0.902+0.871+0.842 ≈ 4.515

TCO_A = 3,500,000 + 250,000 × 4.515 = 3,500,000 + 1,128,750 = £4,628,750
TCO_B = 1,800,000 + 650,000 × 4.515 = 1,800,000 + 2,934,750 = £4,734,750
```

TCO a dro an dewis ankevrewys war-dhelergh: System B yw nebes kostusach dres pymp bledhen wosa diskonta ha sommya kost oberyans, drefen bos y rann opex a gost bewnans 62% (2,934,750 / 4,734,750) erbyn 24% rag System A — ensampel kowrek a'n kefyr "mentenans yw an brassa rann a'n bil", kudhys yn tien dre geshes prisyow arwodh.

## Kevrenn gans ynjynnerieth medhelweyth

TCO yw an niver a dal gul dyssiplin dhe bub dewis [drehevel erbyn prena](../byldya-po-prena-yn-gwarnans/) ha pub kas paydhya [dyvas teknegel](../dyvas-teknegel-avel-dhirywyans-talvedh-poblek/), drefen bos usyans dyvas ha mentenans dhewlys dhew linenn kost oberyans a dal bos y'n keth sommen diskontys, pe a vo gwithys anedha po na. Ynjynnoryon ow profya platform po dewis gwerther a dal diskwedhes an tabel TCO leun, ha nyns pris kemeres, drefen bos pris kemeres an pyth ynwir may feu kas arghansek an Lyver Gwyrdh dhelinys dhe hedhi rannow dhe worthya dhodho hepken. TCO yw ynwedh an dhe-ranner onest rag breusyow [talvedh rag arghans](../talvedh-rag-arghans/) — VFM a gesskes prow ha kost, ha linenn kost gwerthys le a dhiskwedh pub skeul VFM y'n kas negys.

## Trapow

- **Keshes capex hepken**: an fyll kemeres moyha kemmyn — keshes prisyow rol gwerther heb rakleveryans kost oberyans a-gevrys rag pub dewis.
- **Gasa kostow kenmysk ha dreshanjya a-ves**: dyllo data orth diwedh kevambos, daspletformya, ha pennansow lock-in gwerther yw linenow TCO real hag a dheg dhe'n kas negys kynsa.
- **Gasa kost kevarwodhder ha selvyans a-ves**: ledyans patchya, daspeynya akkrediteta, ha kost awdyt a skeulya gans oos ha kesplegyans an system — gwelewgh [talvedh kevarwodhder poblek](../gwerth-diogeleth-kiber-yn-sektor-poblek/) — hag yw leverys a-ves yn fenowgh a'n rakleveryans opex.
- **Keshes heb diskonta dres dewisyow gans profilys kost dihaval**: keshes dewis capex-trom gans unn opex-trom heb diskonta a vydh yn kosyth an dewis a dhestro moy kost dhe vledhynyow diwettha.

## Fentynyow

- HM Treasury, *The Green Book: Central Government Guidance on Appraisal and Evaluation*, 2022. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
- Central Digital and Data Office, Technology Code of Practice. <https://www.gov.uk/guidance/the-technology-code-of-practice>
- National Audit Office, *Digital Transformation in Government*. <https://www.nao.org.uk/>
