# Ekwità bejn il-Ġenerazzjonijiet u Skont għas-Sostenibbiltà

Li l-ispejjeż u l-benefiċċji futuri jiġu skontati lura għall-valur preżenti hija prattika standard fil-valutazzjoni pubblika — ara r-[rata ta' skont soċjali](../rata-soċjali-ta-skont/) — iżda kwalunkwe rata pożittiva ta' skont, magħquda fuq għexieren jew mijiet ta' snin, tnaqqas il-futur imbiegħed lejn iż-żero f'termini tal-lum. Għal deċiżjonijiet b'konsegwenzi ta' mitt sena jew aktar 'il quddiem — it-tibdil fil-klima, l-iskart nukleari, it-telf tal-bijodiversità, is-sostenibbiltà tal-pensjonijiet — dak il-fatt matematiku jsir wieħed etiku: l-iskont standard jista' jagħmel dannu katastrofiku lill-ġenerazzjonijiet futuri jidher, f'termini ta' valur preżenti, bilkemm jiswa li jiġi evitat.

## Għaliex hu importanti

L-ekwazzjoni ta' Ramsey, derivata minn Frank Ramsey fl-1928, tiddekomponi r-rata tal-iskont f'żewġ komponenti: il-preferenza pura fiż-żmien (δ, kemm sempliċement nippreferu llum milli aktar tard, indipendentement mill-ġid) u l-effett tat-tkabbir tal-ġid (η×g, kemm niskontaw għax il-ġenerazzjonijiet futuri huma mistennija jkunu aktar sinjuri, għalhekk lira żejda tgħodd inqas għalihom). Ir-rata standard fit-tul tal-Green Book tar-Renju Unit hija mibnija fuq din l-ekwazzjoni u ssegwi skeda *dejjem tonqos* minflok rata fissa — disinn li għandu l-għeruq tiegħu fix-xogħol ta' Martin Weitzman dwar l-"iskont gamma," li juri li meta r-rata futura tal-iskont innifsha hija inċerta, ir-rata ekwivalenti għaċ-ċertezza li għandek tapplika matematikament tonqos maż-żmien, għax is-xenarji b'rata baxxa jiddominaw aktar ma tħares 'il bogħod. L-Istern Review dwar l-Ekonomija tat-Tibdil fil-Klima (2006), immexxi minn Sir Nicholas Stern, ħa d-dibattitu etiku 'l quddiem: Stern argumenta li l-preferenza pura fiż-żmien għandha tiġi stabbilita qrib iż-żero (huwa uża δ ≈ 0,1%, li tirrifletti biss il-probabbiltà żgħira ta' katastrofi li tgħib liċ-ċivilizzazzjoni, mhux preferenza ġenwina għall-preżent fuq il-futur), u b'hekk pproduċa rata effettiva ta' skont ferm aktar baxxa mill-prattika konvenzjonali tal-Green Book u, b'mod korrispondenti, każ ferm akbar fil-preżent għall-azzjoni klimatika. Il-kritiċi (partikolarment William Nordhaus) argumentaw li r-rata qrib iż-żero ta' Stern kienet difendibbli etikament iżda inkonsistenti mal-imġiba osservata attwali tat-tfaddil u tal-investiment. Id-diżakkordju mhuwiex nota teknika f'qiegħ il-paġna — huwa r-raġuni l-aktar kbira għaliex żewġ ekonomisti daqstant rigorużi jistgħu jaslu għal konklużjonijiet differenti ħafna dwar kemm għandha tissagrifika l-ġenerazzjoni preżenti għall-futur, u huwa r-raġuni għaliex softwer li jappoġġja l-valutazzjoni tal-investiment pubbliku fuq orizzont twil għandu jesponi l-assunzjonijiet tal-iskont tiegħu minflok jidfinhom f'default ta' spreadsheet.

## Il-matematika

```
Ekwazzjoni ta' Ramsey:   r = δ + η × g

  r = rata ta' skont soċjali
  δ = preferenza pura fiż-żmien (rata ta' nuqqas ta' paċenzja, indipendenti mill-ġid)
  η = elastiċità tal-utilità marġinali tal-konsum (valur dejjem jonqos tal-konsum
      żejjed hekk kif in-nies isiru aktar sinjuri)
  g = rata mistennija ta' tkabbir tal-konsum per capita

Skeda dejjem tonqos fit-tul tal-Green Book (approssimattiva, il-bnadi ppubblikati kurrenti):
  Snin 0–30:     3,5%
  Snin 31–75:    3,0%
  Snin 76–125:   2,5%
  Snin 126–200:  2,0%
  Snin 201–300:  1,5%
  Snin 301+:     1,0%

Parametri tal-Istern Review: δ ≈ 0,1%, η = 1, g ≈ 1,3%  → r ≈ 1,4%
```

## Eżempju prattiku

**Valur illum ta' £1 ta' dannu evitat f'100 sena**, taħt tliet reġimi ta' skont:

```
Rata fissa fuq żmien qasir tal-Green Book (3,5%, miżmuma kostanti għal 100 sena):
  PV = 1 / (1,035)^100 ≈ 1 / 31,19 ≈ £0,032   (3,2 pence)

Skeda dejjem tonqos tal-Green Book (3,5% għas-snin 1–30, 3,0% għas-snin 31–75,
2,5% għas-snin 76–100):
  fattur(1–30)   = 1,035^30  ≈ 2,807
  fattur(31–75)  = 1,03^45   ≈ 3,782
  fattur(76–100) = 1,025^25  ≈ 1,854
  fattur totali ≈ 2,807 × 3,782 × 1,854 ≈ 19,68
  PV = 1 / 19,68 ≈ £0,051   (5,1 pence)

Preferenza pura fiż-żmien qrib iż-żero bi stil Stern (r ≈ 1,4% fissa):
  PV = 1 / (1,014)^100 ≈ 1 / 3,997 ≈ £0,250   (25,0 pence)
```

L-istess £1 ta' dannu evitat madwar seklu 'l quddiem jiswa 3,2p, 5,1p, jew 25p illum skont biss liema konvenzjoni ta' skont tintuża — firxa ta' kważi tmien darbiet li tiddetermina jekk proġett ta' mitigazzjoni klimatika b'spiża għolja bil-quddiem u qligħ seklu 'l quddiem jaqbiżx limitu pożittiv tal-NPV. Dan huwa l-mekkaniżmu wara t-twissija ċentrali tat-topiku: f'kwalunkwe rata fissa b'mod sinifikanti pożittiva, dannu futur biżżejjed imbiegħed jitħassar aritmetikament mill-valutazzjoni, irrispettivament mis-severità reali tiegħu.

## Rabta mal-inġinerija tas-software

- Kull għodda ta' valutazzjoni jew ta' każ ta' negozju fuq orizzont twil (infrastruttura, adattament għall-klima, immudellar tal-pensjonijiet) għandha timplimenta l-iskeda *dejjem tonqos* tal-Green Book, mhux rata fissa waħda — default b'rata fissa jinkorpora bil-kwiet preġudizzju kontra l-futur ferm aktar b'saħħtu minn dak li tispeċifika l-gwida attwali tal-gvern tar-Renju Unit.
- Ir-rata tal-iskont u l-orizzont għandhom dejjem jiġu esposti bħala parametri viżibbli u verifikabbli fis-softwer tal-valutazzjoni, bis-sensittività tal-kalkolu għalihom murija espliċitament (bħal fl-eżempju mfassal hawn fuq) — li tidfen ir-rata f'fajl tal-konfigurazzjoni jistieden eżattament l-"għażla etika moħbija" li d-dibattitu Stern-Nordhaus iwissi dwarha; dan jgħaqqad mal-punt tat-trasparenza magħmul fil-[kontabilità tal-kapital naturali](../kontabilità-tal-kapital-naturali/) u jinsab taħt it-topiku tar-[rata ta' skont soċjali](../rata-soċjali-ta-skont/) b'mod ġenerali.
- Fejn il-benefiċċji ta' programm huma espliċitament bejn il-ġenerazzjonijiet (difiża mill-għargħar, restawr tal-kapital naturali, infrastruttura diġitali fit-tul), [analiżi soċjali tal-kost-benefiċċju](../analiżi-soċjali-tal-ispejjeż-u-l-benefiċċji/) għandha tirrapporta r-riżultati taħt mill-inqas żewġ assunzjonijiet ta' skont (l-istandard tal-Green Book u każ ta' sensittività b'rata baxxa) minflok stima waħda, sabiex min jieħu d-deċiżjonijiet jara kif l-għażla tar-rata tal-iskont waħedha tbiddel it-tweġiba.

## Żbalji komuni

- **Jiġi ppreżentat NPV skontat wieħed mingħajr firxa ta' sensittività** — minħabba kemm ir-rata tal-iskont waħedha tbiddel it-tweġiba għal proġetti fuq orizzont twil, NPV b'rata waħda jżejjed materjalment il-preċiżjoni; irrapporta dejjem firxa li tkopri mill-inqas l-istandard tal-Green Book u xenarju b'rata baxxa.
- **Tiġi applikata r-rata fissa fuq żmien qasir (3,5%) għal valutazzjoni ta' diversi sekli** — il-gwida tal-Green Book stess tispeċifika l-iskeda dejjem tonqos preċiżament għax ir-rata fissa ġiet ikkunsidrata mhux xierqa lil hinn minn madwar 30 sena; l-użu tagħha xorta jissottovaluta l-ispejjeż fit-tul.
- **Jiġi ttrattat δ (preferenza pura fiż-żmien) bħala parametru purament tekniku** — il-valur qrib iż-żero ta' Stern u l-valur implikat ogħla tal-Green Book it-tnejn huma difendibbli biss bħala pożizzjonijiet etiċi dwar kemm piż jiddevi l-preżent lill-futur lill-futur, mhux numri empirikament "korretti" jew "żbaljati"; is-softwer għandu jagħmel l-assunzjoni viżibbli minflok jippreżenta ċifra waħda bħala oġġettivament korretta.

## Sorsi

- Stern N. "The Economics of Climate Change: The Stern Review." Cambridge University Press, 2006.
- Ramsey FP. "A Mathematical Theory of Saving." The Economic Journal, 1928.
- Weitzman ML. "Gamma Discounting." American Economic Review, 2001.
- HM Treasury. "The Green Book: Central Government Guidance on Appraisal and Evaluation" (Annex 6,
  discount rate schedule).
- Nordhaus WD. "A Review of the Stern Review on the Economics of Climate Change." Journal of
  Economic Literature, 2007.
