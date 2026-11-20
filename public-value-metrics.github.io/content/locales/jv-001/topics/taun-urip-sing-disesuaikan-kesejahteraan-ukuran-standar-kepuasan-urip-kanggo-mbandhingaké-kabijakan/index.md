# Taun Urip sing Disesuaikan Kesejahteraan (WELLBY): Ukuran Standar Kepuasan Urip kanggo Mbandhingaké Kabijakan

WELLBY iku siji poin tambahan kepuasan urip, ing skala kesejahteraan standar 0–10, kanggo siji wong sajrone setaun. Iku padanan struktural QALY sing dienggo ing ékonomi kesehatan — satuan tunggal sing ngidini mbandhingaké intervensi sing outcome-é ora duwé persamaan liyané — nanging dibangun ing kesejahteraan subjektif tinimbang kahanan kesehatan klinis, lan dinyatakaké ing "Wellbeing guidance for appraisal: supplementary Green Book guidance" HM Treasury (2021).

## Kenapa penting

Appraisal biaya-manfaat mbutuhaké satuan umum kanggo mbandhingaké hibah klub nom-noman mungsuh skéma keselamatan dalan mungsuh layanan kesehatan mental, sing ora duwé ukuran outcome bersama. Ékonomi kesehatan ngrampungaké iki kanggo intervensi klinis nganggo QALY: taun urip sing disesuaikan kualitas, dibobot saka 0 (mati) nganti 1 (kesehatan kebak). Pedoman kesejahteraan HM Treasury ngluwihi logika sing padha menyang belanja publik non-kesehatan, nganggo pitakonan kepuasan urip harmonis ONS ("Overall, how satisfied are you with your life nowadays?", dijawab 0–10) minangka tangga outcome tinimbang indeks kahanan kesehatan. WELLBY 1 tegesé kepuasan urip siji wong munggah siji poin kebak sajrone setaun (utawa, padha, kepuasan sepuluh wong munggah 0,1 poin saben-saben sajrone setaun — WELLBY dijumlahaké ing populasi kaya QALY). Pedoman HM Treasury nyetel nilai moneter ilustratif saben WELLBY (kira-kira £13.000, rega 2019/20) sing dijupuk kanthi nyocogaké data kesejahteraan subjektif karo pendekatan liyané marang nilai taun urip, menehi appraiser cara kanggo ngowahi dadi moneter outcome — suda-ne kesepian, kohési komunitas, akses ruang ijo — sing teknik [penilaian kesejahteraan](../penilaian-kesejahteraan-ngregani-kabijakan-langsung-ing-satuan-kepuasan-urip/) sadurungé mung bisa nggambaraké, dudu mbandhingaké ing dhasar sing padha karo belanja kesehatan utawa keselamatan.

## Petungan

```
WELLBY = Δ kepuasan urip (skala 0–10) × cacahé taun owah-owahan kuwi tahan
        (dijumlahaké ing kabèh wong sing kena)

Manfaat kesejahteraan moneter = WELLBY sing diasilaké × nilai saben WELLBY (nilai rujukan HMT)

cf. QALY = Δ utilitas kahanan kesehatan (skala 0–1) × taun urip ing kahanan kuwi
```

Skala kepuasan 0–10 lan skala utilitas QALY 0–1 ora bisa ditukar tanpa langkah konversi; pedoman HM Treasury ngrembug nyocogaké loro-lorone supaya, contoné, intervensi kesehatan sing dinilai nganggo QALY lan intervensi sosial sing dinilai nganggo WELLBY ora diétung kaping pindho kanthi meneng-meneng utawa ora bisa dibandhingaké ing [appraisal Green Book](../appraisal-green-book/) sing padha.

## Conto petungan

**Layanan kesepian otoritas lokal**: skéma pendampingan nglayani 400 warga tuwa sing terisolasi. Survei tindak lanjut nuduhaké rata-rata kepuasan urip munggah saka 5,2 dadi 6,0 (untung 0,8 poin), lan efek kuwi dikira tahan 2 taun sadurungé ilang.

```
WELLBY = 400 wong × 0,8 poin × 2 taun = 640 WELLBY

Nilai moneter = 640 × £13.000 = £8.320.000
```

Mungsuh biaya program taunan £300.000 (£600.000 sajrone 2 taun), rasio manfaat-biaya kira-kira 8.320.000 / 600.000 ≈ **13,9:1** — angka sing saiki bisa dilebokaké ing tabel appraisal sing padha karo biaya-saben-QALY-sing-dicegah skéma kesehatan utawa penghematan wektu lelungan skéma transportasi.

**Lembaga amal, skala luwih cilik**: program seni komunitas nggayuh 50 peserta kanthi untung kepuasan sing diukur 0,3 poin, tahan 1 taun.

```
WELLBY = 50 × 0,3 × 1 = 15 WELLBY
Nilai moneter = 15 × £13.000 = £195.000
```

## Gegayutan karo rekayasa piranti lunak

- Layanan sing madhep warga apa waé sing wis ngumpulaké item survei kepuasan urip utawa kesejahteraan (akèh platform otoritas lokal lan kesehatan-lan-perawatan nglakoni, ngetutake patang pitakonan kesejahteraan standar ONS) bisa ngétung WELLBY langsung saka pipeline data sing wis ana tinimbang mréntahaké evaluasi ékonomi khusus kanggo saben owah-owahan layanan.
- WELLBY menehi tim rekayasa sing mbangun kanggo pelaporan [social value act](../social-value-act-kewajiban-hukum-nimbang-nilai-sosial-ing-pengadaan-publik/) utawa [social return on investment](../social-return-on-investment-ngukur-bali-modal-sosial-sing-wis-disesuaikan-karo-deadweight-lan-atribusi/) denominator sing distandarisasi sacara nasional lan didhukung HM-Treasury, ngindhari proliferasi "skor dampak" khusus sing ora bisa dibandhingaké ing kontrak utawa pemasok.
- Amarga WELLBY bisa dijumlahaké ing wong lan wektu, iku nyusun kanthi rapi menyang jenis pelacakan outcome tingkat populasi sing dienggo ing sistem [akuntabilitas adhedhasar outcome](../akuntabilitas-adhedhasar-outcome/) — dasbor layanan bisa nglaporaké WELLBY kumulatif sing diasilaké saben kuartal kaya sistem kesehatan nglaporaké QALY sing dipikolèhi.

## Jebakan

- **Nganggep untung kepuasan laporan dhéwé kabèh bisa diatribusiaké marang intervensi** — tanpa kontrafaktual (klompok pembanding utawa desain sakdurungé/sakwisé kanthi kontrol), sampeyan ora bisa misahaké untung WELLBY saka tren umum; deleng [analisis kontrafaktual](../analisis-kontrafaktual-ngira-ira-apa-sing-bakal-kedadéan-tanpa-intervensi/).
- **Nyampur WELLBY lan QALY ing siji total tanpa rekonsiliasi** — pedoman HM Treasury gamblang yèn loro-lorone nganggo skala sing béda lan teori nilai dhasar sing béda; njumlahaké kanthi naif ngétung kaping pindho kesejahteraan sing tumpang tindih.
- **Nganggo nilai moneter rujukan tanpa kritis** — angka £-saben-WELLBY iku estimasi rata-rata nasional kanthi pita ketidakpastian nyata; pedoman HM Treasury nyaranaké analisis sensitivitas, dudu nganggep minangka kurs tetep.

## Sumber

- HM Treasury. "Wellbeing guidance for appraisal: supplementary Green Book guidance." (2021)
  <https://www.gov.uk/government/publications/wellbeing-guidance-for-appraisal-supplementary-green-book-guidance>
- ONS. "Personal well-being user guidance" (the four standard wellbeing questions).
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing>
- HM Treasury. "The Green Book: Central Government Guidance on Appraisal and Evaluation."
