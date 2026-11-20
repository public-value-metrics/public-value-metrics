# Analisis Efektivitas Biaya ing Pamaréntahan: Mbandhingaké Cara Nggayuh Outcome sing Padha

Analisis efektivitas biaya (cost-effectiveness analysis, CEA) mbandhingaké biaya saka cara-cara alternatif kanggo nggayuh outcome sing *padha*, dituturaké ing unit alami — biaya saben wong turu ing dalan sing dikèki omah, biaya saben murid sing diunggahaké menyang standar sing dikarepaké, biaya saben ton CO2 sing dikurangi — tanpa ngowahi outcomeé dhéwé dadi dhuwit.

## Kenapa penting

Green Book nganggep CEA minangka cara cadangan nalika syarat [analisis biaya-manfaat sosial](../analisis-biaya-manfaat-sosial/) kanggo ngowahi saben manfaat dadi dhuwit dadi ora mung angel nanging ora jujur — ing ngendi menehi rega sing bisa dipercaya marang outcome bakal mbutuhaké asumsi sing ora ana wong sing tenan nduwèni (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>, Chapter 5, bab appraisal opsi ing ngendi outcome ora gampang diowahi dadi dhuwit). CEA iku cara sing dipinjam paling langsung saka ékonomi kesehatan — struktur padha karo cara NICE mbandhingaké perawatan nganggo biaya saben Quality-Adjusted Life Year — nanging ditrapaké marang program publik non-kesehatan: intervensi pendhidhikan saben poin-outcome-murid, program omah saben kluwarga sing dicegah saka ora duwé omah, program tenaga kerja saben outcome pagawéan sing lestari.

Alesan CEA nduwèni panggonan ing jejer SCBA tinimbang kaserep déning iku yaiku maksa nilai moneter marang sawetara outcome ngasilaké angka sing cukup tepat supaya katon wibawa lan cukup dibantah supaya ora ana regane ing debat publik — menehi rega marang "bocah maca ing standar sing dikarepaké" ngundang persis tantangan sing nggagalaké business case ing komite pilihan. CEA ngindhari bantahan kuwi kanthi ora ngladèni: ngurutaké opsi miturut biaya saben unit saka *outcome kuwi dhéwé*, ninggalaké pertimbangan politik kapisah apa outcome iku pantes dikejar babar blas marang kasus strategis.

## Petungan

```
Rasio efektivitas biaya (rata-rata) = Total biaya / Total unit outcome sing dicapai

Rasio efektivitas biaya inkremental (ICER), mbandhingaké opsi A karo opsi B:
ICER = (Biaya_A − Biaya_B) / (Outcome_A − Outcome_B)

Prosedur:
1. Tetepna unit outcome lan cara pangukuran ing kabèh opsi sing dibandhingaké.
2. Hitungen biaya saben opsi kanthi dhasar sing padha (deleng ../green-book-appraisal/, kasus finansial)
   ing cakrawala wektu sing padha.
3. Buangen opsi sing didominasi: opsi apa waé sing biayané luwih akèh saben unit tinimbang
   alternatif sing luwih murah sing nggayuh outcome padha utawa luwih apik dibuwang.
4. Urutna opsi sing isih ana miturut rasio efektivitas biaya inkremental, dudu rata-rata.
```

CEA, dhéwéan, ora bisa ngandhani apa program pantes dibiayai babar blas — mung endi saka sawetara pendekatan kanggo tujuan padha sing paling murah saben unit. Mutusaké apa tujuané dhéwé pantes belanja mbutuhaké ngowahi bali menyang SCBA (yèn ana penilaian sing bisa dipercaya) utawa pertimbangan politik/strategis ing njaba matematika. Yèn outcome tenan ora bisa dikurangi dadi siji unit — amarga program ngasilaké sawetara outcome sing penting kanthi cara sing béda — enggoa [analisis keputusan multi-kriteria](../analisis-keputusan-multikriteria/) minangka gantiné.

## Conto petungan

**Otoritas lokal**: sawijining dewan mbandhingaké telung pendekatan kanggo nyuda turu ing dalan, saben-saben dihitung biayané ing setaun marang outcome "individu sing dipindhahaké menyang panggonan stabil luwih saka 6 sasi":

```
Opsi                             Biaya      Outcome dicapai   CER rata-rata
Housing First (intensif)         £900.000   60                £15.000/outcome
Hostel + dhukungan pindhah       £600.000   50                £12.000/outcome
Outreach + sektor sewa swasta    £350.000   20                £17.500/outcome

ICER, Hostel lawan Outreach:  (600k−350k)/(50−20) = £8.333 saben outcome tambahan
ICER, Housing First lawan Hostel: (900k−600k)/(60−50) = £30.000 saben outcome tambahan
```

Outreach didominasi ing biaya rata-rata déning Hostel, nanging langkah *inkremental* saka Outreach menyang Hostel mung biaya £8.333 saben wong tambahan sing dikèki omah — murah dibandhingaké langkah Housing First, sing biaya £30.000 kanggo saben wong tambahan ngluwihi apa sing dicapai Hostel. Otoritas sing dikendhalèni anggaran lan nggedhèkake skala kudu luwih milih nggedhèkake Hostel sadurungé Housing First, senajan Housing First katon luwih apik ing rasio rata-ratané dhéwé.

**Pamaréntah nasional**: program ngejar-maca dibandhingaké ing telung model pangiriman ing "biaya saben murid sing tekan standar maca miturut umur": tutoring siji-lan-siji (£1.800/murid), tutoring klompok cilik (£700/murid), lan intervensi digital-waé (£150/murid, nanging mung 40% saka tarif outcome tutoring klompok cilik saben murid sing kadaftar yèn disesuaikan karo penurunan keterlibatan). Yèn disesuaikan karo penyelesaian nyata, digital-waé biaya £375 saben murid sing tekan standar — isih paling murah, nanging CEA ora bisa ngandhani apa jumlah mutlak murid sing luwih sithik sing dibantu digital-waé, yèn dikirim ing anggaran padha karo klompok cilik, iku pertukaran sing bisa ditampa nglawan nggayuh luwih sithik murid kanthi ambane luwih gedhé; iku pertimbangan distribusi sing dibalèkaké CEA marang para pengambil keputusan.

## Gegayutan karo rekayasa piranti lunak

CEA iku pigura sing bener nalika tim rékayasa ngevaluasi pendekatan pangiriman kanggo outcome layanan sing *padha* — biaya saben identitas sing diverifikasi kasil ing telung vendor verifikasi identitas, biaya saben kasus sing ditriase bener ing rong rancangan otomatisasi manajemen kasus, biaya saben cacat aksesibilitas sing dirampungaké ing perbaikan internal lawan kontrak. Disiplin sing langsung diimpor: tetepaké unit outcome sadurungé mbandhingaké biaya (dudu "tiket ditutup" — output — nanging "kabutuhan pangguna sing tenan rampung"), lan tansah étungen rasio inkremental antarané sistem urip lan pengganti sing diusulaké, dudu biaya rata-rata saben sistem dhéwé-dhéwé. Deleng [outcome lawan output](../outcome-vs-output-bedane-asil-langsung-lan-owah-owahan-nyata/) lan [biaya saben outcome](../biaya-saben-outcome-ngukur-biaya-kanggo-owah-owahan-sing-tenan-kedadéan/).

## Jebakan

- **Mbandhingaké rasio rata-rata, dudu inkremental, nalika mutusaké ékspansi.** Kaya conto turu ing dalan, opsi kanthi rasio rata-rata paling apik ora tansah unit outcome sabanjuré paling murah kanggo dituku.
- **Milih unit outcome sing sejatiné output.** "Rujukan sing digawé" utawa "sesi sing dikirim" ngukur aktivitas, dudu outcome sing dadi alesan program ana; CEA ing output ngasilaké angka sing katon yakin nanging mangsuli pitakonan sing salah.
- **Mbandhingaké antar outcome sing tenan béda.** CEA mung sah yèn saben opsi nargetaké outcome padha sing diukur cara padha; mbandhingaké "biaya saben wong turu ing dalan sing dikèki omah" karo "biaya saben care leaver ing sewa stabil" mbutuhaké ukuran outcome generik utawa [analisis keputusan multi-kriteria](../analisis-keputusan-multikriteria/), dudu CEA.
- **Ora nggatèkaké daya tahan outcome.** Opsi sing luwih murah sing ngasilaké outcome sing ora tahan (murid sing mundur sawisé intervensi mandheg) ora tenan luwih efektif biaya yèn diukur ing cakrawala sebanding; cocogna periode tindak lanjut ing antarané opsi sing dibandhingaké.

## Sumber

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Chapter 5.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- National Institute for Health and Care Excellence. "Developing NICE guidelines: the manual" —
  cara efektivitas biaya sing diadaptasi pamaréntah iki saka kono.
  <https://www.nice.org.uk/process/pmg20>
- What Works Centre for Homelessness Impact. Cost-effectiveness evidence on homelessness
  interventions. <https://whatworks-homelessness.org.uk/>
