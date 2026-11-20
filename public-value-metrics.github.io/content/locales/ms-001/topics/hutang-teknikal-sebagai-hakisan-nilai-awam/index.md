# Hutang Teknikal sebagai Hakisan Nilai Awam

Hutang teknikal ialah metafora Ward Cunningham pada 1992 bagi kos masa depan tersirat daripada keputusan pengekodan masa lalu yang dibuat secara ringkas: sebuah **prinsipal** (kerja pemulihan yang terhutang) dan **faedah** (beban berterusan yang dikenakannya ke atas penyampaian). Dalam estet IT kerajaan legasi, faedah itu dibayar terus daripada nilai awam — penyampaian perubahan berkanun yang lebih perlahan, kadar kegagalan yang lebih tinggi pada perkhidmatan berhadapan warganegara, dan kumpulan orang yang boleh menyentuh sistem itu dengan selamat yang semakin mengecil.

## Mengapa ini penting

Sistem mainframe dan era COBOL legasi di seluruh jabatan kerajaan UK — HMRC dan DWP antara yang paling kerap dipetik — membawa risiko yang didokumenkan dengan baik dan semakin meningkat yang telah dibangkitkan berulang kali oleh National Audit Office, termasuk dalam laporannya *Digital Transformation in Government* (<https://www.nao.org.uk/>): platform yang semakin tua, mahal untuk diubah, semakin sukar diselamatkan, dan bergantung pada tenaga kerja pakar yang bersara lebih pantas daripada ia diganti. Tidak seperti tunggakan sektor swasta, hutang ini terletak terus antara warganegara dan hak berkanun mereka — enjin pengiraan faedah yang tidak dapat diubah dengan selamat ialah kekangan penyampaian dasar, bukan sekadar kesulitan kejuruteraan. Pemulaan semula program IT Universal Credit pada 2013, apabila National Audit Office mendapati binaan asal tidak akan menyampaikan nilai untuk wang dan sebahagian besar aset perisian terpaksa dihapus kira, ialah contoh klasik hutang teknikal yang tidak dinilai yang akhirnya menimpa program awam yang aktif dan dilihat oleh menteri.

## Matematiknya

```
Prinsipal SQALE = Σ merentas pelanggaran (masa pemulihan) × kadar kos pembangun
Nisbah hutang teknikal (TDR) = kos pemulihan / kos pembangunan semula × 100
                    (gred SonarQube: A ≤5%, B ≤10%, C ≤20%, D ≤50%)

Faedah (nombor yang mewajarkan pembayaran balik):
  faedah/tahun = Δ halaju penyampaian × nilai bagi setiap unit halaju
                + Δ kadar insiden berhadapan warganegara × kos bagi setiap insiden
                + premium kemahiran pakar × bilangan kakitangan terjejas
Kes pembayaran balik = PV(faedah dielakkan sepanjang horizon) − kos pemulihan
               (didiskaun pada kadar diskaun sosial Green Book, lihat
               social-discount-rate.md)
```

Prinsipal menyatakan liabiliti; faedah ialah yang membina kes pelaburan kepada jawatankuasa akaun awam.

## Contoh yang diselesaikan

Enjin pemprosesan tuntutan 250,000 baris yang ditulis dalam 4GL legasi. Menggunakan penanda aras CAST Appmarq sekitar $3.61 prinsipal hutang teknikal bagi setiap baris kod (≈£2.85 pada penukaran lazim):

```
Prinsipal ≈ 250,000 × £2.85 ≈ £712,500
TDR ≈ 16% (gred C)
```

Faedah yang diukur: jabatan mengekalkan tiga kontraktor pakar pada premium kadar harian 40% berbanding kadar jurutera kanan piawai kerana kemahiran dalaman telah susut — tambahan £180,000/tahun bagi pasukan enam orang. Sistem itu juga menyebabkan empat gangguan pemprosesan besar setahun, setiap satu menggantung keputusan bagi kira-kira 5,000 pemohon dan mengalihkan mereka ke pusat hubungan pada kira-kira £25/panggilan:

```
Faedah ≈ £180,000 (premium kemahiran)
         + 4 × 5,000 × £25 = £500,000 (kos hubungan dialihkan)
         ≈ £680,000/tahun
```

Pemulihan bersasar bagi modul berprestasi paling buruk berharga £1,200,000 dan dimodelkan mengurangkan faedah sebanyak 70%:

```
Pengurangan faedah = 0.70 × 680,000 = £476,000/tahun
Tempoh bayar balik ≈ 1,200,000 / 476,000 ≈ 2.5 tahun
```

Penyasaran itu penting: memulihkan kod yang jarang disentuh tidak membeli apa-apa, kerana faedah tertumpu di tempat kekerapan perubahan dan ketumpatan hutang kedua-duanya memuncak.

## Kaitan dengan kejuruteraan perisian

Pembingkaian nilai awam yang menaik taraf kes hutang teknikal melebihi "kodnya sudah lama": nyatakan estet legasi sebagai inventori tempat kapasiti penyampaian yang hilang tertumpu, dan kaitkannya secara jelas dengan [jumlah kos pemilikan](../jumlah-kos-pemilikan-dalam-it-kerajaan/), kerana faedah ialah kos operasi yang tergolong dalam baris TCO sama ada pihak kewangan pernah memintanya atau tidak. Sistem yang sarat hutang juga membawa pendedahan [keselamatan siber](../nilai-keselamatan-siber-sektor-awam/) yang tidak seimbang, kerana kekerapan tampalan dan ketumpatan hutang berkorelasi — sistem legasi yang tidak boleh ditampal ialah hutang teknikal yang faedahnya dibayar dalam risiko insiden dan bukannya paun. Dan setiap pertukaran antara pemulihan lawan ciri ialah keputusan [kos kelewatan](../kos-kelewatan-dalam-program-awam/) tersendiri: membayar balik hutang melewatkan perubahan berkanun seterusnya, yang mempunyai CoD tersendiri yang mesti ditimbang berbanding faedah yang dijimatkan.

## Perangkap

- **Pelaporan prinsipal sahaja**: anggaran pemulihan yang besar dan menakutkan tanpa angka faedah tidak mewajarkan apa-apa kepada pelulus perbelanjaan.
- **Angka hutang janaan alat diterima secara literal**: pengimbas gaya SQALE mengira pelanggaran peraturan; ia terlepas jenis hutang yang mahal — keputusan seni bina dan peraturan perniagaan legasi yang tidak didokumenkan — sambil menandakan perkara remeh.
- **"Penulisan semula mengelakkan semuanya"**: program penggantian mesti melepasi disiplin yang sama seperti mana-mana kes perniagaan lain — kos kontrafaktual, kebarangkalian kejayaan dan pendiskaunan — bukan pengecualian daripadanya, seperti yang ditunjukkan oleh pemulaan semula Universal Credit pada 2013.
- **Utopianisme hutang-sifar**: tahap hutang optimum bukan sifar; hutang ialah leveraj yang membeli penyampaian lebih awal. Persoalan sebenar sentiasa kadar faedahnya, bukan sama ada hutang wujud langsung.

## Sumber

- Cunningham W, "The WyCash Portfolio Management System", OOPSLA experience report, 1992.
- CAST, technical debt estimation (Appmarq benchmark). <https://www.castsoftware.com/glossary/technical-debt-estimation>
- National Audit Office, *Digital Transformation in Government* dan laporan mengenai Universal Credit. <https://www.nao.org.uk/>
