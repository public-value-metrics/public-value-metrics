# Analisis Keputusan Multikriteria (Multi-Criteria Decision Analysis, MCDA)

MCDA menehi skor lan bobot marang pilihan-pilihan adhedhasar sawetara kriteria beda sing dibobot bebarengan, ngasilake pambandhingan peringkat tanpa meksa saben kriteria mlebu menyang siji skala moneter utawa unit alami. Iki minangka metode appraisal kanggo keputusan sing outcome-e sing penting pancen ora bisa dicepetake dadi siji angka.

## Kenapa penting

Green Book kanthi eksplisit mbenerake MCDA (apendiks studi kasus Box 2 lan Annex A mbahas langsung) kanggo appraisal sing manfaate "pancen ora bisa diukur nganggo ukuran sing padha" (genuinely incommensurable), yaiku nalika ngowahi kabeh dadi dhuwit liwat [analisis biaya-manfaat sosial](../analisis-biaya-manfaat-sosial/), utawa dadi siji outcome liwat [analisis efektivitas biaya](../analisis-efektivitas-biaya-ing-pamaréntahan-mbandhingaké-cara-nggayuh-outcome-sing-padha/), bakal salah nggambarake keputusane tinimbang njlentrehake (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>). Pamilihan lokasi kanggo pakunjaran anyar, contone, nimbang biaya modal, dampak marang komunitas, konektivitas transportasi, efek lingkungan, lan kemampuan ngrekrut staf: kriteria sing ora duwe unit bebarengan, lan yen dipeksa nganggo unit bebarengan (biasane dhuwit) bakal nyelipake pertimbangan nilai babagan penting-ora-pentinge dampak lingkungan dibandhingake biaya, nanging didandani kaya petungan objektif.

Kejujuran MCDA uga dadi kelemahan utamane: amarga bobot ditemtokake dening sapa wae sing nglakokake appraisal (utawa dening panel), metode iki mung sah sabisa proses pembobotane. Pedoman Green Book jelas yen kriteria lan bobot kudu disepakati lan diterbitake *sadurunge* pilihan diskor, persis kanggo nyegah reviewer mbalik saka pilihan favorit menyang bobot sing mbenerake pilihan kuwi.

## Petungan

```
Kanggo saben pilihan i lan kriteria j:
  Skor_ij    = kinerja pilihan marang kriteria kuwi (asring 0-100
               utawa 1-10, saka bukti, pertimbangan ahli, utawa skor
               para pemangku kepentingan)
  Bobot_j    = wigati relatif kriteria j, bobot dijumlahake dadi 1 (utawa 100)

Skor bobot pilihan i = Σ_j (Skor_ij × Bobot_j)

Prosedur:
1. Sepakati set kriteria lan bobot SADURUNGE menehi skor pilihan apa wae
   (swing weighting utawa pambandhingan berpasangan, contone AHP, minangka
   metode elisitasi sing umum).
2. Skor saben pilihan marang saben kriteria ing skala sing padha, saka
   bukti yen bisa.
3. Etung total bobot; urutake pilihan.
4. Uji sensitivitas bobot: apa peringkat tetep tahan marang beda
   panemu sing wajar babagan sepira penting saben kriteria?
```

MCDA ora ngasilake nilai absolut sing bisa dipertahanake kaya nilai saiki bersih (net present value) saka SCBA; mung ngasilake peringkat sing gumantung marang bobot sing wis disepakati. Iki dadi kaluwihan nalika keputusane pancen babagan nimbang barang-barang sing ora bisa dibandhingake, lan dadi beban yen dienggo ngindhari gaweyan sing luwih abot yaiku monetisasi nalika monetisasi sejatine bisa ditindakake.

## Conto petungan

**Pemerintah daerah**: dewan sing milih lokasi pusat daur ulang sampah rumah tangga anyar menehi skor telung lokasi marang patang kriteria, sing dibobot dening panel lintas departemen sadurunge kunjungan lokasi apa wae:

```
Kriteria (bobot):         Biaya modal (30%)  Akses transportasi (25%)
                           Dampak komunitas (25%)  Dampak lingkungan (20%)

Skor lokasi (0-100, luwih dhuwur = luwih apik):
Lokasi A: biaya 80, akses 60, komunitas 40, lingkungan 70
Lokasi B: biaya 60, akses 90, komunitas 70, lingkungan 50
Lokasi C: biaya 90, akses 50, komunitas 80, lingkungan 60

Total bobot:
Lokasi A = 80(0,30) + 60(0,25) + 40(0,25) + 70(0,20) = 24+15+10+14 = 63
Lokasi B = 60(0,30) + 90(0,25) + 70(0,25) + 50(0,20) = 18+22,5+17,5+10 = 68
Lokasi C = 90(0,30) + 50(0,25) + 80(0,25) + 60(0,20) = 27+12,5+20+12 = 71,5
```

Lokasi C peringkat paling dhuwur. Uji sensitivitas sing ngowahi bobot dampak komunitas saka 25% dadi 35% (njupuk 10 poin saka biaya modal) ngowahi total Lokasi C dadi 71,5 − 3 + 8 = 76,5 lan Lokasi B dadi 68 − 6 + 7 = 69; Lokasi C tetep unggul, dadi peringkate kuwat marang beda panemu sing wajar babagan pembobotan, yaiku pemeriksaan sing dikarepake Green Book kanggo dilaporake.

**Lembaga amal**: yayasan pemberi hibah sing milih antarane mbiayai layanan konsultasi utang, jaringan bank pangan, lan program literasi keuangan nganggo MCDA tinimbang SROI (deleng [return sosial investasi](../social-return-on-investment-ngukur-bali-modal-sosial-sing-wis-disesuaikan-karo-deadweight-lan-atribusi/)) amarga para wali amanat beda panemu kanthi iktikad apik babagan apa bantuan krisis utawa pencegahan sing kudu luwih abot; MCDA ngidini wong-wong kuwi sepakat babagan *wujud* beda panemu kuwi (kisaran bobot) tinimbang pura-pura siji rasio SROI bisa ngrampungake.

## Gegayutan karo rekayasa piranti lunak

MCDA minangka piranti sing wajar kanggo pamilihan vendor lan arsitektur nalika kriteria pancen bertentangan: milih antarane sistem manajemen kasus sing dihosting ing cloud lan sing on-premises nimbang biaya, risiko kedaulatan data, aksesibilitas, lan kacepetan pangiriman kanthi cara sing ora bisa dicepetake dadi siji angka. Pimpinan teknik kudu mekso pembobotan dilakoni sadurunge pilihan diskor, persis kaya sing dituntut Green Book, amarga latihan pembobotan sing ditindakake sawise ndeleng daftar cendhak biasane geser menyang pilihan sing wis disenengi ing ruang rapat. Deleng [bangun vs tuku ing pemerintah](../bangun-utawa-tuku-ing-pamaréntahan-mbandhingaké-pangembangan-khusus-karo-pengadaan-komersial/) kanggo aplikasi MCDA sing umum, lan [scorecard nilai publik](../scorecard-nilai-publik/) kanggo piranti penilaian terstruktur sing gegandhengan sing dienggo sawise keputusan, dudu sadurunge.

## Jebakan

- **Nemtokake bobot sawise ndeleng pilihan.** Iki cara sing paling umum MCDA dimanipulasi, disengaja utawa ora; terbitake bobot sadurunge menehi skor, lan cathet sapa sing nemtokake.
- **Nganggep total bobot minangka angka sing pasti.** Skor 71,5 dibandhingake 68 dudu selisih sing bermakna sacara statistik kajaba analisis sensitivitas mastekake peringkat kuwi stabil; laporake kisaran, aja presisi palsu.
- **Nggunakake MCDA kanggo ngindhari monetisasi sing sejatine bisa.** Yen umume kriteria bisa dihargai kanthi kredibel, ngandelake MCDA tinimbang [SCBA](../analisis-biaya-manfaat-sosial/) mbuang informasi sing bisa dienggo appraisal.
- **Ngidini siji pemangku kepentingan dominan nemtokake kabeh bobot dhewekan.** Praktik apik Green Book ngarepake bobot dijupuk saka panel perwakilan, dudu direktur sponsor, supaya appraisal ora mung nurunake maneh apa sing wis dikarepake wong kuwi.

## Sumber

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Annex A
  (multi-criteria decision analysis) and Box 2 case studies.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Department for Communities and Local Government. "Multi-criteria analysis: a manual." 2009.
  <https://www.gov.uk/government/publications/multi-criteria-analysis-a-manual>
- Belton V, Stewart TJ. "Multiple Criteria Decision Analysis: An Integrated Approach." Kluwer,
  2002.
