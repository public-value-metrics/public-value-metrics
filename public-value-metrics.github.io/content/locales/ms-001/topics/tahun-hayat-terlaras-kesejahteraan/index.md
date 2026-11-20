# Tahun Hayat Terlaras Kesejahteraan (WELLBY)

WELLBY ialah satu mata tambahan kepuasan hidup, pada skala kesejahteraan piawai 0–10, bagi seorang selama setahun. Ia analog struktur kepada QALY yang digunakan dalam ekonomi kesihatan — satu unit yang membolehkan anda membandingkan intervensi yang hasilnya tiada persamaan lain — tetapi dibina atas kesejahteraan subjektif dan bukan keadaan kesihatan klinikal, dan digariskan dalam "Wellbeing guidance for appraisal: supplementary Green Book guidance" (2021) HM Treasury.

## Mengapa ini penting

Penilaian kos-manfaat memerlukan unit sepunya untuk membandingkan geran kelab belia dengan skim keselamatan jalan raya dan dengan perkhidmatan kesihatan mental, yang tiada satu pun berkongsi ukuran hasil. Ekonomi kesihatan menyelesaikan ini bagi intervensi klinikal dengan QALY: tahun hayat terlaras kualiti, diberi pemberat dari 0 (mati) hingga 1 (kesihatan penuh). Panduan kesejahteraan HM Treasury melanjutkan logik yang sama kepada perbelanjaan awam bukan kesihatan, menggunakan soalan kepuasan hidup selaras ONS ("Overall, how satisfied are you with your life nowadays?", dijawab 0–10) sebagai tangga hasil dan bukannya indeks keadaan kesihatan. WELLBY 1 bermakna kepuasan hidup seseorang naik satu mata penuh selama setahun (atau, setara, kepuasan sepuluh orang naik 0.1 mata setiap seorang selama setahun — WELLBY dijumlahkan merentas populasi seperti QALY). Panduan HM Treasury menetapkan nilai kewangan ilustrasi bagi setiap WELLBY (sekitar £13,000, harga 2019/20) yang diperoleh dengan mendamaikan data kesejahteraan subjektif dengan pendekatan lain terhadap nilai tahun hayat, memberi penilai cara memonetisasi hasil — pengurangan kesunyian, perpaduan komuniti, akses ruang hijau — yang sebelum ini hanya dapat digambarkan oleh teknik [penilaian kesejahteraan](../penilaian-kesejahteraan/), bukan dibandingkan atas landasan sepunya dengan perbelanjaan kesihatan atau keselamatan.

## Matematiknya

```
WELLBY = Δ kepuasan hidup (skala 0–10) × bilangan tahun perubahan itu berterusan
        (dijumlahkan merentas semua orang yang terjejas)

Manfaat kesejahteraan yang dimonetisasi = WELLBY yang dijana × nilai bagi setiap WELLBY (nilai rujukan HMT)

bandingkan QALY = Δ utiliti keadaan kesihatan (skala 0–1) × tahun hidup dalam keadaan itu
```

Skala kepuasan 0–10 dan skala utiliti QALY 0–1 tidak boleh ditukar ganti tanpa langkah penukaran; panduan HM Treasury membincangkan pendamaian keduanya supaya, contohnya, intervensi kesihatan yang dinilai dalam QALY dan intervensi sosial yang dinilai dalam WELLBY tidak dikira dua kali secara senyap atau dibiarkan tidak setanding dalam [penilaian Green Book](../penilaian-green-book/) yang sama.

## Contoh yang diselesaikan

**Perkhidmatan kesunyian pihak berkuasa tempatan**: skim persahabatan melayani 400 penduduk warga emas yang terpencil. Tinjauan susulan menunjukkan purata kepuasan hidup naik daripada 5.2 kepada 6.0 (peningkatan 0.8 mata), dan kesannya dianggarkan berterusan selama 2 tahun sebelum pudar.

```
WELLBY = 400 orang × 0.8 mata × 2 tahun = 640 WELLBY

Nilai dimonetisasi = 640 × £13,000 = £8,320,000
```

Berbanding kos program tahunan £300,000 (£600,000 sepanjang 2 tahun), nisbah manfaat-kos ialah kira-kira 8,320,000 / 600,000 ≈ **13.9:1** — angka yang kini boleh berada dalam jadual penilaian yang sama dengan kos-bagi-setiap-QALY-dielakkan skim kesihatan atau penjimatan masa perjalanan skim pengangkutan.

**Badan amal, skala lebih kecil**: program seni komuniti mencapai 50 peserta dengan peningkatan kepuasan terukur 0.3 mata, berterusan selama 1 tahun.

```
WELLBY = 50 × 0.3 × 1 = 15 WELLBY
Nilai dimonetisasi = 15 × £13,000 = £195,000
```

## Kaitan dengan kejuruteraan perisian

- Mana-mana perkhidmatan berhadapan warganegara yang sudah mengumpul item tinjauan kepuasan hidup atau kesejahteraan (banyak platform pihak berkuasa tempatan dan kesihatan-dan-penjagaan berbuat demikian, mengikut empat soalan kesejahteraan piawai ONS) boleh mengira WELLBY terus daripada saluran paip data sedia ada dan bukannya mengomisen penilaian ekonomi khusus bagi setiap perubahan perkhidmatan.
- WELLBY memberi pasukan kejuruteraan yang membina untuk pelaporan [akta nilai sosial](../akta-nilai-sosial/) atau [pulangan sosial atas pelaburan](../pulangan-sosial-atas-pelaburan/) penyebut piawai kebangsaan yang disahkan HM Treasury, mengelakkan percambahan "skor impak" khusus yang tidak boleh dibandingkan merentas kontrak atau pembekal.
- Oleh sebab WELLBY bersifat tambah merentas orang dan masa, ia tersusun dengan kemas ke dalam penjejakan hasil peringkat populasi yang digunakan dalam sistem [akauntabiliti berasaskan hasil](../akauntabiliti-berasaskan-hasil/) — papan pemuka perkhidmatan boleh melaporkan WELLBY kumulatif yang dijana setiap suku tahun seperti sistem kesihatan melaporkan QALY yang diperoleh.

## Perangkap

- **Mengandaikan peningkatan kepuasan yang dilaporkan sendiri sepenuhnya boleh diatribusikan kepada intervensi** — tanpa kontrafaktual (kumpulan perbandingan atau reka bentuk sebelum/selepas dengan kawalan), anda tidak dapat mengasingkan peningkatan WELLBY daripada arah aliran umum; lihat [analisis kontrafaktual](../analisis-kontrafaktual/).
- **Mencampurkan WELLBY dan QALY dalam satu jumlah tanpa pendamaian** — panduan HM Treasury jelas bahawa keduanya menggunakan skala berbeza dan teori nilai asas berbeza; menjumlahkannya secara naif mengira dua kali kebajikan yang bertindih.
- **Menggunakan nilai kewangan rujukan tanpa kritikal** — angka £-bagi-setiap-WELLBY ialah anggaran purata kebangsaan dengan jalur ketidakpastian sebenar; panduan HM Treasury mengesyorkan analisis sensitiviti, bukan menganggapnya sebagai kadar pertukaran tetap.

## Sumber

- HM Treasury. "Wellbeing guidance for appraisal: supplementary Green Book guidance." (2021)
  <https://www.gov.uk/government/publications/wellbeing-guidance-for-appraisal-supplementary-green-book-guidance>
- ONS. "Personal well-being user guidance" (empat soalan kesejahteraan piawai).
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing>
- HM Treasury. "The Green Book: Central Government Guidance on Appraisal and Evaluation."
