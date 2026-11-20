# Pembobotan Distribusional

Pembobotan distribusional nyesuaikan nilai moneter saka biaya utawa manfaat miturut sapa sing nampa, kanthi prinsip yen siji pound tambahan luwih aji tumrap kluwarga miskin tinimbang kluwarga sugih. Green Book HM Treasury nyedhiyakake cara eksplisit kanggo nerapake pembobotan iki, adhedhasar utilitas marjinal penghasilan sing mudhun, supaya appraisal ora meneng-menengan nganggep siji pound sing ditampa desil paling sugih padha nilaine karo siji pound sing ditampa desil paling mlarat.

## Kenapa penting

Analisis biaya-manfaat standar njumlahake pound tanpa takon pound-e sapa, sing sacara implisit nganggep yen siji pound padha nilaine kanggo kabeh wong — anggepan sing wis suwe dingerteni ekonom iku salah. Kluwarga sing penghasilane £15.000/taun ngrasakake tambahan £1.000 kanthi beda banget saka kluwarga sing penghasilane £150.000/taun, amarga utilitas marjinal penghasilan mudhun nalika penghasilan munggah. Yen ora dibobot, appraisal standar sacara sistematis luwih milih intervensi sing nguntungake klompok sing luwih sugih lan wis luwih apik, amarga daya beli sing luwih dhuwur nggelembungake penilaian moneter saka manfaat sing tekan wong-wong kuwi (peningkatan taman cedhak omah larang "nuduhake" manfaat nilai properti sing luwih gedhe tinimbang peningkatan sing padha cedhak omah murah, mung amarga rega luwih dhuwur, dudu amarga keuntungan kesejahteraane luwih gedhe).

Pedoman tambahan Green Book babagan analisis distribusional, dikuwatake sawise tinjauan Treasury 2020 sing nanggapi kritik yen metodologi appraisal sacara sistematis luwih milih London lan Tenggara, nemtokake pendekatan pembobotan resmi adhedhasar anggepan elastisitas utilitas marjinal penghasilan kira-kira 1,3 — tegese penghasilan sing tikel kaping loro kira-kira ngurangi separo (kanthi tepat, 2^-1,3 ≈ 0,41 kali) nilai marjinal saka siji pound tambahan. Iki dudu panyesuaian pembulatan: nerapake iki bisa ngowahi program endi saka loro sing saingan sing nuduhake nilai saiki bersih (net present value) sing luwih dhuwur, utamane nalika mbandhingake intervensi sing kapusatake ing wilayah miskin karo sing nyebar ing populasi umum.

## Petungan

Bobot distribusional Green Book kanggo siji pound manfaat sing ditampa kluwarga ing tingkat penghasilan y, relatif marang siji pound ing tingkat penghasilan rata-rata nasional ȳ:

```
Bobot(y) = (ȳ / y)^e

ing ngendi:
  y  = penghasilan kluwarga (utawa penghasilan klompok sing kena pengaruh)
  ȳ  = penghasilan kluwarga rata-rata (referensi)
  e  = elastisitas utilitas marjinal penghasilan (Green Book: kira-kira 1,3)
```

Nerapake bobot marang manfaat bersih:

```
Manfaat sing dibobot = Σ [manfaat tanpa bobot kanggo klompok i × Bobot(y_i)]
```

Klompok sing penghasilane separo saka rata-rata nasional (y = 0,5ȳ) entuk bobot (1/0,5)^1,3 = 2^1,3 ≈ 2,46 — saben pound manfaat kanggo klompok kuwi dietung aji kira-kira 2,46 kali siji pound kanggo kluwarga sing penghasilane rata-rata.

## Conto petungan

**Rong program lokal sing saingan**, saben-saben nduwe manfaat bersih tanpa bobot £2 yuta/taun, saingan kanggo dana pertumbuhan regional sing padha:

- *Program A*: skema dhukungan bisnis ing kutha makmur, penghasilan kluwarga rata-rata £45.000 (kira-kira 1,3× rata-rata nasional sing diasumsekake £35.000).
- *Program B*: program katrampilan ing wilayah (ward) miskin, penghasilan kluwarga rata-rata £18.000 (kira-kira 0,51× rata-rata nasional).

```
Bobot(A) = (35.000 / 45.000)^1,3 = (0,778)^1,3 ≈ 0,72
Bobot(B) = (35.000 / 18.000)^1,3 = (1,944)^1,3 ≈ 2,53

Manfaat A sing dibobot = £2.000.000 × 0,72 = £1,44 yuta
Manfaat B sing dibobot = £2.000.000 × 2,53 = £5,06 yuta
```

Tanpa bobot, loro program kuwi imbang. Sawise dibobot kanggo dampak distribusional, manfaat Program B luwih saka telung kali luwih gedhe — asil sing mbalikake rekomendasi pendanaan lan nggambarake tujuan eksplisit Green Book nalika mbutuhake pembobotan ditampilake, dudu mung rasio manfaat-biaya tanpa bobot.

**Alokasi hibah amal**: pendana sing mbandhingake hibah £500.000 sing tekan 1.000 kluwarga berpenghasilan rendah (bobot ≈ 2,0, nilai bobot setara £1 yuta) karo £500.000 sing padha tekan 1.000 kluwarga berpenghasilan menengah (bobot ≈ 1,0, nilai bobot setara £500.000) kudu nuduhake kasus distribusional kanthi eksplisit ing makalah dewan, dudu ditinggal supaya disimpulake dhewe.

## Gegayutan karo rekayasa piranti lunak

Pembobotan distribusional arang katon langsung ing metrik pangiriman piranti lunak, nanging kudu mbentuk cara tim rekayasa lan data ngrancang pangukuran lan penargetan:

- Nalika mbangun dashboard dampak utawa kalkulator manfaat, tampilake profil penghasilan utawa deprivasi saka sapa sing kena pengaruh, dudu mung total manfaat agregat — angka agregat tanpa rincian distribusional nutupi persis pembalikan sing dituduhake ing ndhuwur.
- Gandhengna logika penargetan ing desain layanan karo data deprivasi sing padha sing digunakake Green Book — deleng [Index of Multiple Deprivation](../indeks-deprivasi-ganda/) — supaya jangkauan layanan digital bisa dinilai kanggo ekuitas, dudu mung efisiensi (E kaping papat sing dibantah ing [value for money](../value-for-money-ngukur-apa-belanja-publik-menehi-imbangan-biaya-lan-manfaat-sing-paling-apik/)).
- Nalika algoritma ngalokasi sumber daya langka (slot janjian, wektu caseworker, subsidi), fungsi tujuan "maksimalake total manfaat" tanpa bobot bakal, kanthi desain, ngasilake bias sing padha sing arep dikoreksi dening pembobotan Green Book — tandhani iki kanthi eksplisit marang pemilik kabijakan sadurunge ngoptimalake.

## Jebakan

- **Nerapake bobot distribusional kanthi ora konsisten ing sajrone portofolio.** Mbobot manfaat siji program nanging ora pembandhinge ngasilake perbandingan sing bias, dudu sing luwih adil; Green Book mbutuhake perlakuan sing padha (like-for-like).
- **Nggunakake nilai properti utawa pasar minangka proksi kesejahteraan tanpa panyesuaian.** Rega pasar dhewe wis disimpangake dening ketimpangan penghasilan sing ana, sing persis dikoreksi dening pembobotan distribusional — nggunakake nilai pasar sing ora disesuaikan bisa ngitung bias kaping pindho.
- **Ngabaikake variasi ing sajrone klompok.** Mbobot miturut penghasilan rata-rata wilayah (umpamane desil Index of Multiple Deprivation) bisa salah nggambarake individu sing ora cocog karo rata-rata wilayahe; gunakake data penghasilan sing paling rinci sing cukup kasedhiya.
- **Nganggep elastisitas 1,3 minangka konstanta universal.** Green Book dhewe nyathet yen iki prakiraan kanthi kisaran sing masuk akal; uji sensitivitas keputusan gedhe nganggo elastisitas alternatif tinimbang nganggep 1,3 pas.

## Sumber

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation", and
  supplementary guidance on distributional impacts (2022 edition).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury, "Green Book Review 2020: Findings and Response" (addressing regional-bias criticism).
  <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>
- Fujiwara D, Campbell R. "Valuation Techniques for Social Cost-Benefit Analysis." HM Treasury/DWP,
  2011 (background on marginal utility of income elasticity estimates).
