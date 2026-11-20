# Indeks Deprivasi Ganda

IMD yaiku ukuran resmi deprivasi relatif kanggo wilayah cilik ing Inggris, ngurutake saben saka 32.844 Lower-layer Super Output Areas (LSOA, saben-saben kira-kira 1.500 warga) ing negara kasebut saka 1 (paling deprivasi) nganti 32.844 (paling ora deprivasi). Diterbitake dening lembaga sing saiki yaiku Ministry of Housing, Communities and Local Government (MHCLG, biyen MHCLG/DCLG), paling anyar minangka English Indices of Deprivation 2019, lan langsung ngarahake pendanaan pemerintah pusat, prioritas kesehatan masyarakat, lan kelayakan kanggo puluhan skema lokal.

## Kenapa penting

Deprivasi dudu siji perkara — lingkungan bisa mlarat penghasilan nanging aman, utawa cukup penghasilan nanging nandhang asil kesehatan ala lan omah ala. Indeks pendahulu IMD (wiwit indikator deprivasi Department of the Environment taun 1970-an) berkembang dadi model pitung domain saiki persis amarga penargetan siji-indikator (tingkat pengangguran piyambak, umpamane) rutin kecolongan wilayah sing deprivasi kanthi cara liya. IMD 2019 nggabungake penghasilan, pagawean, pendidikan, kesehatan, kejahatan, alangan menyang omah lan layanan, lan lingkungan urip dadi siji peringkat komposit saben LSOA, saben domain dibangun saka kumpulan indikator dhewe lan dibobot miturut metodologi MHCLG. Amarga nggarap ing tingkat wilayah cilik (LSOA) tinimbang tingkat pemerintah daerah, iki mbukak kantong deprivasi sing didhelikake ing distrik sing liyane makmur — alesan kenapa IMD, dudu penghasilan rata-rata pemerintah daerah, sing dadi acuan NHS England, pupil premium Department for Education, lan puluhan rumus pendanaan pemerintah daerah. Piranti lunak sing nemtokake kelayakan, ngutamakake outreach, utawa nglaporake dampak miturut wilayah ing Inggris kudu nganggep desil utawa peringkat IMD minangka input kelas siji, dudu pikiran susulan — lan ing ngendi program kanthi sengaja nargetake wilayah paling deprivasi, appraisal-e kudu nerapake [pembobotan distribusional](../pembobotan-distribusional/) sing konsisten karo penargetan kasebut, tinimbang nilai siji pound manfaat padha preduli ing ngendi tibane.

## Petungan

```
7 domain, dibobot:
  Penghasilan                              22,5%
  Pagawean                                 22,5%
  Pendidikan, Katrampilan lan Pelatihan    13,5%
  Deprivasi Kesehatan lan Disabilitas      13,5%
  Kejahatan                                 9,3%
  Alangan menyang Omah lan Layanan          9,3%
  Lingkungan Urip                           9,3%

Saben skor domain: indikator distandarisasi (diurutake, banjur diowahi
menyang distribusi normal) lan digabung nganggo transformasi eksponensial
supaya deprivasi dhuwur ing siji indikator ora bisa ditutup kanthi kebak
dening deprivasi endhek ing liyane ing sajrone domain kuwi.

Skor komposit IMD (LSOA) = Σ (skor domain × bobot domain)
Urutake LSOA miturut skor komposit → 1 (paling deprivasi) nganti 32.844 (paling ora deprivasi)
Desil: peringkat ÷ 3.284 (kira-kira), desil 1 = 10% LSOA paling deprivasi
```

## Conto petungan

**Skor komposit LSOA**, nggunakake skor domain standar ilustratif (0 = ora ana sinyal deprivasi, saya dhuwur = saya deprivasi):

```
Penghasilan          0,35 × 0,225 = 0,07875
Pagawean             0,30 × 0,225 = 0,06750
Pendidikan           0,20 × 0,135 = 0,02700
Kesehatan            0,15 × 0,135 = 0,02025
Kejahatan            0,10 × 0,093 = 0,00930
Alangan Omah         0,05 × 0,093 = 0,00465
Lingkungan Urip      0,08 × 0,093 = 0,00744

Skor komposit = 0,07875 + 0,06750 + 0,02700 + 0,02025
              + 0,00930 + 0,00465 + 0,00744  = 0,21489
```

Skor komposit kuwi banjur diurutake marang skor kabeh 32.844 LSOA. Yen nempatake LSOA ing peringkat 2.950, kalebu desil 1 (2.950 ÷ 3.284 ≈ 0,9, yaiku ing sajrone 10% lingkungan paling deprivasi ing Inggris) — sing kanggo akeh rumus pendanaan iku ambang sing mbukak kelayakan, preduli kepriye skor rata-rata pemerintah daerah sakupenge.

## Gegayutan karo rekayasa piranti lunak

- Layanan apa wae sing nggeokode pangguna menyang kode pos utawa LSOA bisa nggabung tabel lookup IMD sing diterbitake (CSV gratis lan berversi saka MHCLG) kanggo nambah desil deprivasi minangka kovariat — kanggo nargetake outreach, ngutamakake beban kasus, utawa nglaporake outcome miturut pita deprivasi tanpa ngumpulake data pribadi anyar.
- Desil IMD iku pamriksan ekuitas standar kanggo layanan digital publik: nyilangake tabulasi panggunaan layanan, drop-off, utawa kepuasan miturut desil IMD nuduhake jurang akses sing didhelikake metrik agregat — deleng [inklusi digital](../inklusi-digital-mesthekake-digital-by-default-ora-dadi-digital-waé/) lan [metrik kepuasan warga](../metrik-kepuasan-warga-ngukur-pengalaman-langsung-warga-karo-layanan-publik/).
- Amarga peringkat IMD iku relatif (tansah ngetutake sakumpulan peringkat tetep ing sakabehe Inggris), ora bisa nuduhake apa deprivasi sacara nasional munggah utawa mudhun sajrone wektu — mung wilayah endi sing peringkate ing ngendi relatif marang liyane ing edisi kuwi; aja mbangun dashboard tren absolut mung saka peringkat IMD mentah.

## Jebakan

- **Mbandhingake peringkat IMD antar edisi (2015 vs. 2019) minangka tren wektu** — indikator dhasar, geografi, lan metodologi kabeh owah antar edisi; MHCLG kanthi eksplisit nyaranake aja nggunakake owah-owahan peringkat minangka bukti wilayah dadi luwih utawa kurang deprivasi.
- **Nerapake IMD tingkat LSOA marang individu** — LSOA ing desil 1 isih ngandhut kluwarga sing ora deprivasi, lan LSOA desil 10 isih ngandhut sing deprivasi; IMD nggambarake wilayah, dudu wong, lan nggunakake iku minangka proksi kelayakan individu salah ngklasifikasi ing loro arah.
- **Ngabaikake rincian tingkat domain demi peringkat komposit** — rong LSOA kanthi skor komposit identik bisa nduwe profil domain sing beda babar pisan (siji deprivasi kesehatan, siji deprivasi kejahatan); skema penargetan sing ditujokake marang siji masalah kudu nggunakake skor domain sing relevan, dudu komposit campuran.

## Sumber

- Ministry of Housing, Communities and Local Government. "English Indices of Deprivation 2019."
  <https://www.gov.uk/government/statistics/english-indices-of-deprivation-2019>
- MHCLG. "The English Indices of Deprivation 2019: Technical Report."
