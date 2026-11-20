# Penyesaran dan Atribusi

Penyesaran (displacement) berlaku apabila manfaat nyata sesuatu program dicapai dengan mengambil aktiviti atau manfaat daripada tempat lain, bukannya mencipta sesuatu yang baharu — kemenangan anda ialah kekalahan orang lain. Atribusi (attribution) ialah persoalan berkaitan tentang berapa banyak hasil (outcome) yang diperhatikan benar-benar boleh dituntut sebagai kredit oleh intervensi anda, apabila pihak dan faktor lain turut menyumbang. Kedua-duanya ialah pelarasan standard dalam panduan penilaian sektor awam UK, bersama deadweight (hasil yang tetap berlaku tanpa intervensi) dan kebocoran (leakage), dan kedua-duanya kerap dilangkau oleh dakwaan impak yang kelihatan jauh lebih kukuh daripada sebenarnya.

## Mengapa ini penting

Skim geran perniagaan pihak berkuasa tempatan yang membantu 50 kedai berpindah ke zon penjanaan semula boleh melaporkan "50 perniagaan disokong, 200 pekerjaan dicipta" — tetapi jika perniagaan itu hanya berpindah dari jalan utama berdekatan dan tidak berkembang, pekerjaan itu disesarkan, bukan dicipta, dan kesan bersih peringkat daerah (atau wilayah) boleh hampir sifar. Magenta Book HM Treasury dan Additionality Guide yang lama digunakan menganggap penyesaran sebagai tolakan wajib justeru kerana kisah kejayaan setempat adalah biasa walaupun ia tidak menghasilkan manfaat bersih peringkat negara atau wilayah — nilai sekadar berpindah, selalunya merugikan kawasan atau pihak yang kehilangannya. Panduan penilaian dana struktur (digunakan untuk program European Regional Development Fund dahulu dan penggantinya di dalam negara, seperti UK Shared Prosperity Fund) memformalkan ini pada tiga skala ruang: penyesaran tempatan (dalam sesebuah pekan), penyesaran wilayah (dalam sesebuah wilayah), dan penyesaran kebangsaan (merentas UK), kerana sesuatu intervensi boleh bersifat additional pada satu skala tetapi penyesaran semata-mata pada skala yang lebih luas — program pekerjaan yang menarik pekerja dari pekan jiran adalah neutral di peringkat kebangsaan walaupun kelihatan seperti kejayaan tempatan.

Atribusi ialah masalah saudaranya dalam penyampaian yang bergantung pada perkongsian, yang kini menjadi norma dalam kerja perkhidmatan awam sektor sosial dan merentas agensi. Apabila tiga organisasi bersama-sama menyampaikan perkhidmatan pencegahan kehilangan tempat tinggal, laporan tahunan setiap organisasi mungkin masing-masing menuntut kredit atas pengurangan yang sama dalam golongan yang tidur di jalanan — apabila dijumlahkan merentas laporan, impak yang dituntut boleh melebihi perubahan sebenar yang diperhatikan, kadangkala beberapa kali ganda. Panduan Magenta Book tentang analisis sumbangan (contribution analysis) wujud khusus kerana atribusi rawak kepada satu pihak sering mustahil dalam penyampaian berbilang agensi, dan jawapan yang jujur selalunya "kami menyumbang kepada hasil ini" dan bukan "kami menyebabkan hasil ini."

## Matematiknya

Penyesaran sebagai sebahagian daripada urutan impak bersih yang standard (lihat [additionality dan deadweight](../additionality-dan-deadweight/) untuk rantaian lengkap):

```
Impak tambahan bersih = Hasil kasar − Deadweight − Penyesaran − Kebocoran, × Pengganda

Kadar penyesaran = manfaat/aktiviti yang dialihkan dari tempat lain
                     / jumlah manfaat/aktiviti kasar yang diperhatikan
```

Atribusi, apabila banyak pihak menyumbang kepada satu hasil, lazimnya dinyatakan sebagai bahagian sumbangan dan bukan peratusan tepat, kerana ia biasanya tidak boleh diukur dengan ketegasan yang sama seperti penyesaran:

```
Bahagian boleh atribusi ≈ f(kekuatan sumbangan kausal, sumbangan pihak lain,
                            faktor luaran/konteks)

Impak yang dituntut tidak boleh melebihi:
  Σ (bahagian boleh atribusi setiap rakan kongsi) ≤ 100% daripada jumlah hasil yang diperhatikan
```

## Contoh yang diselesaikan

**Geran penjanaan semula**: skim geran jalan utama sebuah majlis melaporkan 200 pekerjaan runcit baharu dicipta di zon yang dibiayai. Penyelidikan tinjauan susulan mendapati 60 daripada pekerjaan itu datang daripada perniagaan yang berpindah dari jalan utama jiran yang tidak dibiayai dalam daerah yang sama, dan 30 lagi datang daripada rangkaian kebangsaan yang membuka cawangan yang akan dibuka di suatu tempat dalam wilayah itu tanpa mengira geran.

```
Pekerjaan kasar yang dituntut = 200
Penyesaran tempatan = 60 (berpindah dalam daerah)
Penyesaran wilayah = 30 (akan dibuka di wilayah itu juga)

Pekerjaan tambahan bersih (peringkat daerah) = 200 − 60 = 140
Pekerjaan tambahan bersih (peringkat wilayah) = 200 − 60 − 30 = 110
```

Tajuk utama yang jujur bergantung pada skala geografi yang dipedulikan pembiaya — kes perniagaan Treasury yang dinilai pada peringkat kebangsaan atau wilayah harus menggunakan 110, bukan 140 peringkat daerah, dan sudah tentu bukan 200 mentah.

**Perkhidmatan gelandangan berbilang agensi**: tiga organisasi rakan kongsi (sebuah majlis, badan amal perumahan, dan sebuah amanah kesihatan) bersama-sama menyampaikan perkhidmatan pengurangan tidur di jalanan. Bilangan yang tidur di jalanan di kawasan itu menurun sebanyak 30 orang sepanjang tahun. Laporan tahunan setiap organisasi menuntut "kami mengurangkan tidur di jalanan sebanyak 30" — apabila dijumlahkan, ketiga-tiga laporan menuntut 90 orang dibantu, tiga kali ganda pengurangan sebenar. Analisis sumbangan yang memberi setiap rakan kongsi satu bahagian (katakan 40% majlis, 35% badan amal, 25% amanah kesihatan, berdasarkan peranan yang didokumenkan dan penilaian bebas) akan melaporkan masing-masing 12, 10.5 dan 7.5, yang berjumlah betul kepada 30 yang diperhatikan.

## Kaitan dengan kejuruteraan perisian

Penyesaran dan atribusi membentuk cara sistem penjejakan impak dan pelaporan hasil harus direka bentuk untuk penyampaian berbilang tapak atau berbilang rakan kongsi:

- Skop geografi dan organisasi harus menjadi medan kelas pertama yang eksplisit dalam mana-mana papan pemuka impak — angka yang dilaporkan "untuk daerah" dan angka yang sama dilaporkan "untuk wilayah" ialah nombor yang berbeza, dan sistem yang mencampurkannya akan menghasilkan nombor yang tidak dapat didamaikan pada peringkat portfolio.
- Apabila beberapa rakan kongsi menyampaikan bersama, sistem hasil harus merekodkan bahagian sumbangan (atau sekurang-kurangnya menandakan atribusi bersama) dan bukan membiarkan modul pelaporan setiap rakan kongsi menuntut 100% hasil bersama secara bebas — jika tidak, penggulungan peringkat portfolio akan melebih-lebihkan jumlah impak, kadangkala teruk.
- Ini berkait dengan [pulangan sosial atas pelaburan](../pulangan-sosial-atas-pelaburan/) dan [pelaporan hasil geran](../pelaporan-hasil-geran/): pengiraan SROI atau IRIS+ yang mengabaikan penyesaran atau terlebih atribusi hasil bersama akan menghasilkan nisbah yang dikembungkan yang tidak tahan audit atau replikasi.

## Perangkap

- **Melaporkan kejayaan tempatan tanpa menyemak penyesaran yang lebih luas.** Sesuatu program boleh kelihatan sangat berjaya pada skala pelaporan terkecil sambil neutral atau malah negatif pada skala yang lebih luas; sentiasa nyatakan skala geografi yang dikenakan oleh angka bersih itu.
- **Membenarkan setiap rakan kongsi dalam penyampaian bersama menuntut kredit penuh.** Melainkan bahagian sumbangan dipersetujui dan didokumenkan, pelaporan penggulungan merentas rakan kongsi akan melebih-lebihkan jumlah impak — semak bahawa tuntutan peringkat rakan kongsi berjumlah tidak lebih daripada jumlah yang diperhatikan.
- **Menganggap atribusi sebagai peratusan tepat sedangkan ia sebenarnya satu pertimbangan.** Analisis sumbangan, tidak seperti kontrafaktual rawak, menghasilkan anggaran yang boleh dipertahankan, bukan fakta yang diukur; kemukakannya dengan ketidakpastian yang sewajarnya, bukan ketepatan palsu.
- **Mengabaikan penyesaran dalam intervensi yang berhadapan pasaran.** Sokongan perniagaan, skim pekerjaan, dan penjanaan semula berasaskan tempat ialah kategori klasik berpenyesaran tinggi; anggap semakan penyesaran sebagai wajib untuk ini, bukan pilihan.

## Sumber

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020), including
  guidance on contribution analysis. <https://www.gov.uk/government/publications/the-magenta-book>
- HM Treasury / Department for Business, Innovation and Skills, "Additionality Guide: A Standard
  Approach to Assessing the Additional Impact of Interventions" (3rd edition).
- European Commission, "Evalsed: The Resource for the Evaluation of Socio-Economic Development" —
  guidance on local, regional, and national displacement scales.
- Mayne J. "Contribution Analysis: An Approach to Exploring Cause and Effect." ILAC Brief No. 16,
  2008.
