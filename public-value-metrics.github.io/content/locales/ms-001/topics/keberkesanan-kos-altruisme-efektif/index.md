# Keberkesanan Kos Altruisme Efektif

Penaakulan keberkesanan kos altruisme efektif (effective altruism, EA) menyusun intervensi kebajikan mengikut jumlah kebaikan — paling kerap dinyatakan sebagai nyawa diselamatkan, atau kesihatan diperoleh, bagi setiap dolar yang dibelanjakan — dan mengarahkan wang kepada intervensi yang membeli kebaikan paling banyak pada margin. GiveWell ialah pengamal yang paling berpengaruh dalam bidang ini: ia menerbitkan anggaran kos-setiap-nyawa-diselamatkan dan kos-setiap-hasil yang eksplisit dan dikemas kini untuk senarai kecil "badan amal teratas," dan mengesyorkan penderma memberi kepada mana-mana yang pada masa ini mempunyai ruang untuk lebih banyak pembiayaan pada kadar terbaik.

## Mengapa ini penting

GiveWell menyatakan keberkesanan kos sebagai kriteria utama dalam metodologi yang diterbitkannya: ia mencari intervensi berasaskan bukti, menganggar keberkesanan kosnya dalam unit sepunya, dan menyusun merentas punca yang sama sekali tidak berkaitan — jaring kelambu terhadap malaria, suplemen vitamin A, pindahan tunai, bayaran insentif vaksin — pada paksi tunggal itu. Ini ialah import langsung penaakulan gaya QALY/DALY daripada ekonomi kesihatan ke dalam filantropi: sebagaimana sistem kesihatan bertanya "berapa QALY bagi setiap paun pada margin," GiveWell bertanya "berapa nyawa, atau tahun hayat, bagi setiap dolar pada margin," dan menganggap punca boleh bertukar ganti setelah ditukar kepada unit sepunya itu. Lihat [analisis keberkesanan kos dalam kerajaan](../analisis-keberkesanan-kos-dalam-kerajaan/) untuk sepupu sektor awam bagi rangka penaakulan ini.

Angka GiveWell yang paling kerap dipetik berkaitan Against Malaria Foundation (AMF), yang mengedarkan kelambu dirawat racun serangga. Dalam contoh kerja yang diterbitkan GiveWell (diambil daripada data pembiayaan 2020), kira-kira $4,500 membiayai kelambu yang cukup untuk mengelakkan satu kematian, selepas mengambil kira penggunaan kelambu yang tidak sempurna, kematian asas tanpa kelambu, dan pelarasan untuk funging — kemungkinan AMF akan menerima sebahagian pembiayaan itu daripada penderma lain juga. GiveWell eksplisit bahawa angka ini bergerak mengikut masa dan geografi apabila kelaziman malaria, kos kelambu, dan jurang pembiayaan berubah, dan bahawa kos menyelamatkan nyawa secara amnya dijangka meningkat dari semasa ke semasa apabila peluang termurah diambil dahulu; ia ilustrasi kerja bagi kaedah itu, bukan harga tetap.

## Matematiknya

```
Keberkesanan kos = Kos intervensi / Unit kebaikan yang dihasilkan
                   (cth. $ setiap nyawa diselamatkan, $ setiap DALY dielakkan, $ setiap QALY)

Rantaian GiveWell bagi program kelambu, secara ilustrasi:
  $ setiap kelambu yang dibeli dan dihantar
    ÷ bahagian kelambu yang benar-benar digunakan
    ÷ orang yang dilindungi setiap kelambu
    × kematian tahunan asas tanpa kelambu
    × pengurangan kematian yang boleh diatribusikan kepada penggunaan kelambu (daripada bukti RCT)
    × tahun perlindungan setiap kelambu
    ÷ pelarasan untuk funging (wang menyesarkan pembiayaan penderma lain)
  = $ setiap nyawa diselamatkan (bersih daripada kesan pembiayaan kontrafaktual)
```

Rantaian ini penting kerana setiap langkah ialah tempat anggaran keberkesanan kos lazimnya tersilap — lihat perangkap di bawah — dan kerana ia menjelaskan bahawa "kos setiap nyawa diselamatkan" tidak pernah harga mentah yang diperhatikan; ia anggaran yang dimodelkan, dibina daripada beberapa input yang masing-masing tidak pasti secara berasingan.

## Contoh yang diselesaikan

Dua intervensi hipotetikal, kedua-duanya berasaskan bukti, bersaing untuk £100,000 marginal yang sama:

- **Kelambu (gaya AMF)**: kira-kira $4,500 setiap nyawa diselamatkan dalam contoh kerja GiveWell yang diterbitkan diambil daripada data 2020, iaitu sangat kasarnya 20 nyawa diselamatkan bagi setiap £100,000 bergantung pada kadar pertukaran dan tahun yang digunakan.
- **Program pembasmian cacing**: tiada manfaat kematian yang munasabah sama sekali, tetapi bukti kuat tentang peningkatan pendapatan jangka panjang daripada pembasmian cacing zaman kanak-kanak; GiveWell menilainya dari segi peningkatan pendapatan, bukan nyawa diselamatkan, yang menyukarkan perbandingan langsung dengan kelambu tanpa unit sepunya. GiveWell menggunakan rangka "pemberat moral" (moral weights) yang eksplisit untuk menukar kedua-duanya kepada satu unit dalaman untuk penyusunan.

Disiplin kaedah EA ialah memaksa perbandingan ini ke tempat terbuka dan bukan membiayai kedua-duanya kerana kedua-duanya "kedengaran baik." Lihat [pulangan sosial atas pelaburan](../pulangan-sosial-atas-pelaburan/) untuk fungsi pemaksa setara yang digunakan oleh perusahaan sosial UK dan pesuruhjaya tempatan, yang bertanya soalan sama — apakah pulangan terbaik setiap paun — dalam idiom nilai berwang dan bukan idiom nyawa/DALY.

## Kaitan dengan kejuruteraan perisian

Jurutera yang membina platform penderma, alat padanan geran, atau papan pemuka impak untuk pembiaya yang sejajar dengan EA (Open Philanthropy, GiveWell sendiri, platform pemberian berkesan seperti Giving What We Can) perlu mewakili anggaran keberkesanan kos sebagai julat dengan andaian yang dinyatakan, bukan nombor tunggal — model yang mendasari mempunyai beberapa input darab yang tidak pasti, dan meruntuhkannya kepada satu angka pada papan pemuka menyalah wakil keyakinan yang dinyatakan GiveWell sendiri. Versikan setiap anggaran mengikut tarikh penerbitan; GiveWell menyemak semula angkanya, kadangkala dengan ketara, apabila bukti RCT baharu atau data jurang pembiayaan tiba, dan platform yang menyimpan cache angka lama secara senyap menjadi salah.

## Perangkap

- **Menganggap anggaran keberkesanan kos sebagai harga tetap.** Ia output model dengan beberapa input darab yang tidak pasti (kadar penggunaan, kematian asas, pelarasan funging); nyatakan tarikh dan versi.
- **Mengabaikan funging/penyesaran.** Membiayai organisasi yang akan menerima wang itu daripada penderma lain juga membeli kebaikan kontrafaktual yang lebih sedikit daripada yang disarankan tajuk utama — lihat [additionality dan deadweight](../additionality-dan-deadweight/) dan [penyesaran dan atribusi](../penyesaran-dan-atribusi/).
- **Membandingkan merentas unit yang tidak serasi tanpa penukaran.** "Nyawa diselamatkan" dan "pendapatan diperoleh" tidak boleh dibandingkan secara langsung tanpa rangka pemberat moral yang eksplisit; mempersembahkannya bersebelahan seolah-olah boleh dibandingkan ialah kesilapan kategori.
- **Pandangan terowong bidang punca.** Menyusun hanya dalam satu bidang punca (cth. hanya badan amal kesihatan global) dan menggelar pemenangnya "badan amal paling berkesan kos" melebih-lebihkan tuntutan; penyusunan merentas punca GiveWell sengaja sempit (kesihatan dan kesejahteraan global), bukan sejagat.

## Sumber

- GiveWell, "Our criteria." <https://www.givewell.org/how-we-work/our-criteria>
- GiveWell, "How Much Does It Cost to Save a Life?" (February 2024 version). <https://www.givewell.org/how-much-does-it-cost-to-save-a-life/february-2024-version>
- GiveWell, Against Malaria Foundation review. <https://www.givewell.org/charities/amf>
- Giving What We Can, on cost-effectiveness across causes. <https://www.givingwhatwecan.org/>
