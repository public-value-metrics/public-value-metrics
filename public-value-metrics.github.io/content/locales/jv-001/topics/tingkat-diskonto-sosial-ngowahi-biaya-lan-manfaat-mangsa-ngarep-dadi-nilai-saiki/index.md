# Tingkat Diskonto Sosial: Ngowahi Biaya lan Manfaat Mangsa Ngarep dadi Nilai Saiki

Tingkat diskonto sosial ngowahi biaya lan manfaat ing mangsa ngarep dadi nilai saiki supaya program sing hasilé kasebar nganti pirang-pirang dasawarsa bisa dibandhingaké ing dhasar sing padha. Green Book HM Treasury mrèntahaké jadwal sing saya mudhun, sing dijangkarake ing 3,5% kanggo 30 taun kapisan, adhedhasar rumus Ramsey — angka tartamtu sing bisa dikutip sing wis dadi pasulayan politik lan etis sing urip saben-saben ditrapaké ing komitmen horizon dawa kaya kabijakan iklim utawa infrastruktur.

## Kenapa penting

Sapoundhi manfaat sing ditompo 30 taun maneh ora padha karo sapoundhi manfaat sing ditompo saiki, amarga sebagéan alesané yaiku preferensi wektu murni (wong lan masyarakat luwih seneng barang apik luwih cepet) lan sebagéan liyané yaiku pertumbuhan (masyarakat ing mangsa ngarep dikira luwih sugih, mula sapoundhi kurang pentinge ing margin). Annex 6 Green Book njupuk tingkat diskonto standar Britania Raya saka rumus Ramsey, nggabungaké tingkat preferensi wektu murni karo tingkat pertumbuhan konsumsi sing diprakirakaké lan elastisitas utilitas marjinal konsumsi, ngasilaké tingkat sing diterbitaké 3,5% saben taun kanggo taun 0–30, mudhun miturut jadwal sing diterbitaké kanggo taun 31 lan sakbanjuré (nganti 1% kanggo taun 301+). Jadwal iki ana persis amarga 3,5% konstan sing dimajemukaké sajrone abad bakal nggawé meh kabèh manfaat horizon dawa — pertahanan banjir sing nylametaké nyawa 80 taun maneh, pangurangan karbon sing ngindhari mudharat 100 taun maneh — katon ora ana artiné ing nilai saiki, sing dinilai Treasury minangka kesimpulan etis sing ora mumpuni kanggo kaputusan infrastruktur lan lingkungan sing bener-bener awet.

Tingkat diskonto dipasulayaké persis amarga pilihané dudu parameter teknis netral: iku nyandi pangadilan babagan sepiro akèh masyarakat kudu ngorbanaké saiki kanggo wong sing durung lair. Stern Review on the Economics of Climate Change (2006) nganggo tingkat diskonto sing cedhak nol (preferensi wektu murni cedhak 0,1%), kanthi alesan yèn ndiskonto kesejahteraan generasi mangsa ngarep ing tingkat apa waé sing meh padha karo tingkat pasar ora bisa dibelani sacara etis nalika mudharaté (owah-owahan iklim katastrofik) ora bisa dibalèkaké. Para kritikus — utamané William Nordhaus — mbantah yèn tingkat meh-nol Stern nggedhèkaké kasus kanggo belanja iklim langsung kanthi nggawé meh saben biaya saiki katon pantes mungsuh manfaat mangsa ngarep sing meh ora didiskonto. Pasulayané dudu babagan matématika; iku babagan kerangka etis sapa sing kudu nemtokaké tingkat, lan isih dadi conto standar kenapa tingkat diskonto iku pilihan kabijakan, dudu mung input aktuaria.

## Petungan

Rumus Ramsey sing dadi dhasar tingkat Green Book:

```
r = ρ + η·g

ing ngendi:
  r = tingkat diskonto sosial
  ρ = tingkat preferensi wektu murni (ora sabar + risiko katastrofe)
  η = elastisitas utilitas marjinal konsumsi
  g = tingkat pertumbuhan konsumsi per kapita saben taun sing diprakirakaké
```

Jadwal mudhun Green Book (Annex 6, ilustratif — priksa édisi pungkasan kanggo tabel resmi sing pas):

```
Taun 0–30:     3,5%
Taun 31–75:    3,0%
Taun 76–125:   2,5%
Taun 126–200:  2,0%
Taun 201–300:  1,5%
Taun 301+:     1,0%
```

Nilai saiki saka jumlah ing mangsa ngarep:

```
PV = FV / (1 + r)^t
```

## Conto petungan

**Skéma pertahanan banjir**: proyek ngasilaké £10 yuta kerusakan banjir sing dihindari ing taun 40.

Nganggo tingkat rata 3,5%: PV = 10.000.000 / (1,035)^40 ≈ £2,52 yuta — manfaat katon cilik.

Nganggo jadwal mudhun Green Book (3,5% kanggo taun 0–30, 3,0% sakwisé iku), petungan dimajemukaké ing 3,5% kanggo 30 taun kapisan lan 3,0% kanggo taun 31–40:

```
PV = 10.000.000 / [(1,035)^30 × (1,03)^10]
   = 10.000.000 / [2,807 × 1,344]
   ≈ 10.000.000 / 3,773
   ≈ £2,65 yuta
```

Jadwal mudhun kuwi rada munggahaké nilai saiki manfaat horizon dawa dibandhingaké tingkat dhuwur sing rata — pancèn tujuan jadwal kuwi, amarga 3,5% rata sajrone abad bakal ndiskonto manfaat £100 yuta ing taun 100 dadi kurang saka £3,3 yuta.

**Infrastruktur digital**: migrasi cloud pamaréntah sing biayané £4 yuta saiki dikira bakal ngindhari £500.000/taun biaya pangopènan legacy sajrone 15 taun. Ing 3,5%, nilai saiki anuitas kuwi kira-kira £500.000 × 11,52 (faktor anuitas 15 taun ing 3,5%) ≈ £5,76 yuta — jelas ngluwihi biaya £4 yuta, kasus nilai saiki net positif sing bakal katon luwih lemah yèn nganggo tingkat sing luwih dhuwur sing dipilih sembrono (ing 7%, faktor anuitas sing padha mudhun dadi kira-kira 9,11, ngasilaké £4,56 yuta, isih positif nanging margine luwih tipis).

## Gegayutan karo rekayasa piranti lunak

Umumé business case piranti lunak mlaku 3–5 taun, ing njero pita 3,5% rata, mula jadwal mudhun jarang langsung ngaruhi — nanging disiplin sing dadi dhasaré penting kanggo investasi teknologi pamaréntah apa waé sing umur asetté dawa (platform nasional, program infrastruktur data, kontrak pirang-pirang dasawarsa):

- Nganggoa tingkat sing diterbitaké Green Book tinimbang "hurdle rate" internal sing dijupuk saka keuangan swasta; auditor lan pamriksa Treasury bakal ngarep-arep jadwal standar.
- Kanggo manfaat sing diwujudaké pirang-pirang taun maneh (penghematan pangopènan jangka dawa platform, nilai majemuk ékosistem open data — deleng [nilai open data](../nilai-data-terbuka/)), pilihan diskonto bisa mbalik business case saka positif dadi negatif; jadikna tingkat lan horizon minangka asumsi sing gamblang, dudu standar sing kekubur.
- Iki langsung nyambung menyang [appraisal Green Book](../appraisal-green-book/), model limang kasus sing sacara resmi mbutuhaké arus kas terdiskonto, lan menyang [penilaian kesejahteraan](../penilaian-kesejahteraan-ngregani-kabijakan-langsung-ing-satuan-kepuasan-urip/), sing ana pitakonan diskonto sing padha kanggo manfaat kesejahteraan non-moneter.
- Deleng uga [kesetaraan antargenerasi lan diskonto kelestarian](../ekuitas-antar-generasi-lan-diskonto-keberlanjutan/) kanggo debat Stern-lawan-Nordhaus sing ditrapaké khusus ing investasi teknologi lingkungan lan iklim.

## Jebakan

- **Nganggo tingkat rata kanggo horizon dawa banget.** Jadwal mudhun Green Book ana khusus amarga tingkat konstan nyepelekaké manfaat sing awet banget; priksa pita endi sing ditrapaké, dudu otomatis 3,5% terus.
- **Nganggep tingkat diskonto netral sacara etis.** Pasulayan Stern-Nordhaus nuduhaké yèn tingkat iku nyandi pangadilan nilai babagan generasi mangsa ngarep; ngowahi iku ngowahi program endi sing katon pantes, mula kudu dinyatakaké lan dibélani, dudu disingitaké ing standar spreadsheet.
- **Ngrancukaké tingkat diskonto sosial karo biaya modal swasta.** Biaya utang pamaréntah lan hurdle rate sektor swasta iku konsep sing béda saka tingkat sosial turunan Ramsey, lan ngganti siji karo liyané ing appraisal publik biasané nyimpangaké asil menyang arah sing nguntungaké asil jangka cendhak.
- **Ndiskonto arus kas riil lan nominal kanthi ora konsisten.** Tingkat Green Book iku tingkat riil (wis disesuaikan inflasi); ndiskonto arus kas nominal karo iku nyepelekaké nilai saiki kanthi signifikan.

## Sumber

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation", Annex 6
  (2022). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Stern N. "The Economics of Climate Change: The Stern Review." HM Treasury, 2006.
- Nordhaus WD. "A Review of the Stern Review on the Economics of Climate Change." Journal of
  Economic Literature, 2007;45(3):686–702.
- Ramsey FP. "A Mathematical Theory of Saving." Economic Journal, 1928;38(152):543–559.
