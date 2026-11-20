# Kost Daladh yn Towlennow Poblek (CoD)

Kost Daladh yw an talvos poblek kellys rag pub unn termyn may *nyns* yw towlen, servis po chanj system hwath delivrys. Hi yw metrik pons-mestres an bagas ma a dhisplegyansow: hi a dreyl "an mos yn bew a slynkyas hwegh mis" dhe bunsow an seythun, po dhe WELLBYs an seythun, ma hyll daladh bos dadhlys yn an keth arghans avel an kas negys y honan.

## Perag y talvos

Rewl Reinertsen — "mar ny vynn kwantifya marnas unn tra, kwantifewgh Kost Daladh" — a dheu dhe'n gwarnans kehaval dhe dhihaval, drefen bos towlennow poblek pur dhiskudhys dhodho: kasow negys yw aprovys erbyn an rewlyans prow rakwelys, mes an rewlyans a dhalleth hepken orth mos yn bew, ha pub seythun a slynkyans yw seythun a dalvos gollys na brys den vyth war an rolla peryl. Skrutinyans arta an Swyddfa Awdyt Kenedhlek a gowlwiryans Universal Credit (gwelewgh y rapportow "Rolling Out Universal Credit", <https://www.nao.org.uk/>) a dhiskwedh an patron: slynkyans towlen o holys ha rapportys, mes kost pons-an-seythun a *nyns hwath* delivra an system dhasformys dhe'n nessa rann a hawlyoryon yw selyn leverys avel niver pennskoodh, kyn fo an niver a dalvia lywya prioritis ha eskerensya. Heb niver CoD, towlen daladhys a hevel dhe vos problem towlen rag bord delivrans; ganso, hi yw problem skarth-talvos rag an offiser kontya.

## An matematik

```
CoD = prow rag pub unn termyn gwithys dres hedna dhelivrys   (£/seythun po WELLBYs/seythun)

Kollans daladh hollek = CoD × hys an daladh

Rewlyansow prow dhe gyfrifa rag towlennow poblek:
  sawyansow arghans-dhyllys   (leha tebel/gwall, kostow dres-termyn skap)
+ kapasita ankudhys na-arghans (our oberyer/offiser × kost leun)
+ prow lowender           (WELLBYs × £13,000/WELLBY, gidyans lowender
                             yn Lyver Gwer HMT, prisyow 2019)
```

Rag servisow a fas dhe sitisenyon, displegewgh yn lowender ha ynwedh yn arghans — gwelewgh [bledhynyow bewnans alhwedhys-lowender](../bledhynyow-bewnans-amendys-dre-da-vos/) rag an unyans a-dhelergh, ha [kost chons gollys yn spenna poblek](../kost-chauns-yn-spenna-poblek/) rag an pyth a ylli an puns daladhys dhe arghansa.

## Ensampel oberys

**Auturyta leel**: nowydhheans system prow chi a dhre dhe leha gwall gorbayans dre £150/hawl/bledhen dres 20,000 hawl yn bew.

```
Prow bledhenyek = 150 × 20,000 = £3,000,000/bledhen
CoD = 3,000,000 / 52 ≈ £57,700/seythun
Daladh 12 mis a gesya gwallow evitadow a 52 × 57,700 ≈ £3,000,000.
```

**Asnans gwarnans kres**: servis dhiskwedhya prow ankapabilita, delivrys hwegh mis (26 seythun) a-dhelergh an towlen, a styr bos 200,000 hawlyer/bledhen ow kortos yn kres tri seythun hweth rag dewis. Pub seythun ynwedh a dhiskerdhek arghansek yw modelys avel effeyth −0.0018 WELLBY (poynt lowender bewnans):

```
Kollans WELLBY rag pub hawlyer = 3 × 0.0018 = 0.0054
Kollans WELLBY bledhenyek = 200,000 × 0.0054 = 1,080 WELLBY/bledhen
CoD_lowender = 1,080 / 52 ≈ 20.8 WELLBY/seythun
CoD_arghans = 20.8 × £13,000 ≈ £270,000/seythun a dhalvos lowender
```

Daladh a 26 seythun a "gost" ynwedh dre dro 540 WELLBY — gwordh dre dro £7 milyon orth prisyans lowender Lyver Gwer — ow dasfurvya dedh mos-yn-bew gwrys-kellys avel hwarvos a les sitisenyon, ha nyns nowedh a-dro dhe vaner towlen.

## Kevrenn gans ynjynnerieth medhelweyth

CoD yw an pyth a wra [metrikow DORA](../metryksow-dora-rag-talvos-poblek/) ha [metrikow fluss](../metryksow-ruth-yn-delivrans-an-governans/) bos redyadow yn arghans: termyn arwodhek y'n pipeline × CoD yw arghans (po lowender) leskys y'n renkow kyns dos dhe sitisen. Yn spesifek:

- **Prioritisya**: renkewgh backlog herwydh CoD ÷ hys, ha nyns herwydh uhelder an parti — kehaval ynjynnerieth medhelweyth dhe dhrehevyans Lyver Gwer dhe aprisya dewisow war dalvos, ha nyns war piw a wovyn.
- **Prenansow**: kylgh prenans framweyth a 12–18 mis a'n jeves CoD; y brisya a dreyl an kas urjyans rag fordhow skonnys, ha hi a dheu yn skon dhe dhewisow [byldya po prena](../byldya-po-prena-yn-gwarnans/) may fo termyn-dhe-dhalvos menystrys dewis.
- **Kas prow**: pub niver CoD dhywedhys orth aprovyans a dal dasvos orth [kowlwiryans prow](../kowlwiryans-prow/) — mar pe an kost daladh gwir, a dal an prow skonnys bos musurys wosa mos yn bew.

## Trapow

- **Tybya CoD linek**: nebes servisow poblek a'n jeves talvos furvys herwydh dedh-dewgh (dedh komplians statudel — CoD a lamma dhe nivelyow peryl gorfodya wosa an dedh, ogas dhe sifra kyns) ha nyns skeul seythun leven. Dosparthewgh an profil urjyans kyns multiplya.
- **CoD war askorrow na vynn den vyth**: daladh a'n jeves kost hepken mar teu talvos dhe'n tra na-delivrys; system na wra den vyth y devnydh a'n jeves CoD sifra, pynag mar hwath yw.
- **Kyfrifa dewblek daladh ha diskontya**: an [skeul diskont sokel](../skeul-diskont-sokel/) a bris kyn termyn war horisontow aprisyans multi-bledhen; CoD yw an version oberasyonel a-ji an horisont rag seythunyow ha mysyow. Devnydhewgh CoD rag slynkyans towlen, ha displasans NPV rag dasfasya multi-bledhen.

## Fentynyow

- Reinertsen DG, *The Principles of Product Development Flow*, Celeritas Publishing, 2009.
- HM Treasury, Green Book supplementary guidance: wellbeing. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>
- National Audit Office, reports on Universal Credit rollout. <https://www.nao.org.uk/>
