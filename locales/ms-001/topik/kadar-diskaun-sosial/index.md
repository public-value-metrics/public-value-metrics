# Kadar Diskaun Sosial

Kadar diskaun sosial menukarkan kos dan manfaat masa depan kepada nilai hari ini supaya program yang pulangannya tersebar sepanjang berdekad-dekad boleh dibandingkan atas asas yang sama. Green Book HM Treasury mewajibkan jadual menurun yang berlabuh pada 3.5% bagi 30 tahun pertama, berdasarkan formula Ramsey — nombor tertentu yang boleh dipetik yang telah menjadi hujah politik dan etika yang hangat setiap kali ia digunakan pada komitmen berhorizon panjang seperti dasar iklim atau infrastruktur.

## Mengapa ini penting

Satu paun manfaat yang diterima dalam 30 tahun tidak bernilai sama dengan satu paun manfaat yang diterima hari ini, sebahagiannya kerana keutamaan masa tulen (individu dan masyarakat lebih suka perkara baik lebih awal) dan sebahagiannya kerana pertumbuhan (masyarakat masa depan dijangka lebih kaya, jadi satu paun kurang bermakna kepadanya pada margin). Annex 6 Green Book memperoleh kadar diskaun piawai UK daripada formula Ramsey, menggabungkan kadar keutamaan masa tulen dengan kadar pertumbuhan penggunaan yang dijangka dan keanjalan utiliti marginal penggunaan, menghasilkan kadar yang diterbitkan sebanyak 3.5% setahun bagi tahun 0–30, menurun dalam jadual yang diterbitkan bagi tahun ke-31 dan seterusnya (sehingga 1% bagi tahun 301+). Jadual ini wujud tepat kerana 3.5% malar yang dikompaun sepanjang satu abad akan menjadikan hampir apa-apa manfaat berhorizon panjang — pertahanan banjir yang menyelamatkan nyawa dalam 80 tahun, pengurangan karbon yang mengelakkan kemudaratan dalam 100 tahun — kelihatan remeh dari segi nilai kini, satu kesimpulan etika yang dianggap Treasury tidak munasabah bagi keputusan infrastruktur dan alam sekitar yang benar-benar berjangka hayat panjang.

Kadar diskaun dipertikaikan tepat kerana pilihannya bukan parameter teknikal yang neutral: ia mengekodkan pertimbangan tentang berapa banyak masyarakat harus berkorban hari ini untuk orang yang belum dilahirkan. Stern Review on the Economics of Climate Change (2006) menggunakan kadar diskaun hampir sifar (keutamaan masa tulen hampir 0.1%), berhujah bahawa mendiskaunkan kebajikan generasi akan datang pada sesuatu yang menyerupai kadar pasaran tidak boleh dipertahankan dari segi etika apabila kemudaratan (perubahan iklim yang membawa bencana) tidak boleh dipulihkan. Pengkritik — terutamanya William Nordhaus — berhujah bahawa kadar hampir sifar Stern melebih-lebihkan kes untuk perbelanjaan iklim segera dengan menjadikan hampir apa-apa kos sekarang kelihatan wajar berbanding manfaat masa depan yang hampir tidak didiskaun. Perselisihan itu bukan tentang matematik; ia tentang kerangka etika siapa yang harus menetapkan kadar, dan ia kekal sebagai ilustrasi piawai mengapa kadar diskaun ialah pilihan dasar, bukan sekadar input aktuari.

## Matematiknya

Formula Ramsey yang mendasari kadar Green Book:

```
r = ρ + η·g

di mana:
  r = kadar diskaun sosial
  ρ = kadar keutamaan masa tulen (ketidaksabaran + risiko bencana)
  η = keanjalan utiliti marginal penggunaan
  g = kadar pertumbuhan tahunan jangkaan penggunaan per kapita
```

Jadual menurun Green Book (Annex 6, ilustrasi — semak edisi semasa untuk jadual diterbitkan yang tepat):

```
Tahun 0–30:    3.5%
Tahun 31–75:   3.0%
Tahun 76–125:  2.5%
Tahun 126–200: 2.0%
Tahun 201–300: 1.5%
Tahun 301+:    1.0%
```

Nilai kini bagi jumlah masa depan:

```
PV = FV / (1 + r)^t
```

## Contoh yang diselesaikan

**Skim pertahanan banjir**: projek menyampaikan £10 juta kerosakan banjir yang dielakkan pada tahun ke-40.

Menggunakan kadar rata 3.5%: PV = 10,000,000 / (1.035)^40 ≈ £2.52 juta — manfaat kelihatan kecil.

Menggunakan jadual menurun Green Book (3.5% bagi tahun 0–30, 3.0% selepas itu), pengiraan mengkompaun pada 3.5% bagi 30 tahun pertama dan 3.0% bagi tahun 31–40:

```
PV = 10,000,000 / [(1.035)^30 × (1.03)^10]
   = 10,000,000 / [2.807 × 1.344]
   ≈ 10,000,000 / 3.773
   ≈ £2.65 juta
```

Jadual menurun itu menaikkan nilai kini manfaat berhorizon panjang secara sederhana berbanding kadar tinggi yang rata — tujuan jelas jadual itu, kerana 3.5% rata selama seabad akan mendiskaunkan manfaat £100 juta pada tahun ke-100 kepada kurang daripada £3.3 juta.

**Infrastruktur digital**: migrasi awan kerajaan yang berharga £4 juta sekarang dijangka mengelakkan £500,000/tahun kos penyelenggaraan legasi selama 15 tahun. Pada 3.5%, nilai kini anuiti itu lebih kurang £500,000 × 11.52 (faktor anuiti 15 tahun pada 3.5%) ≈ £5.76 juta — jelas melebihi kos £4 juta, kes nilai kini bersih positif yang kelihatan jauh lebih lemah pada kadar yang lebih tinggi yang dipilih secara naif (pada 7%, faktor anuiti yang sama jatuh kepada kira-kira 9.11, memberikan £4.56 juta, masih positif tetapi dengan margin yang jauh lebih nipis).

## Kaitan dengan kejuruteraan perisian

Kebanyakan kes perniagaan perisian berjalan selama 3–5 tahun, jauh di dalam jalur 3.5% rata, jadi jadual menurun jarang berkesan secara langsung — tetapi disiplin asasnya penting bagi mana-mana pelaburan teknologi kerajaan dengan hayat aset yang panjang (platform kebangsaan, program infrastruktur data, kontrak berdekad-dekad):

- Gunakan kadar yang diterbitkan Green Book dan bukan "kadar halangan" dalaman yang dipinjam daripada kewangan swasta; juruaudit dan penyemak Treasury akan menjangka jadual piawai.
- Bagi manfaat yang direalisasikan bertahun-tahun kemudian (penjimatan penyelenggaraan jangka panjang platform, nilai majmuk ekosistem data terbuka — lihat [nilai data terbuka](../nilai-data-terbuka/)), pilihan diskaun boleh menukar kes perniagaan daripada positif kepada negatif; jadikan kadar dan horizon sebagai andaian yang jelas, bukan lalai yang tersembunyi.
- Ini disalurkan terus kepada [penilaian Green Book](../penilaian-green-book/), model lima kes yang secara rasmi menghendaki aliran tunai diskaun, dan kepada [penilaian kesejahteraan](../penilaian-kesejahteraan/), di mana persoalan diskaun yang sama timbul bagi manfaat kesejahteraan bukan kewangan.
- Lihat juga [ekuiti antara generasi dan diskaun kemampanan](../ekuiti-antara-generasi-dan-diskaun-kelestarian/) untuk perdebatan Stern lawan Nordhaus yang digunakan khusus pada pelaburan teknologi alam sekitar dan iklim.

## Perangkap

- **Menggunakan kadar rata bagi horizon yang sangat panjang.** Jadual menurun Green Book wujud khusus kerana kadar malar memperkecilkan manfaat berjangka hayat panjang; semak jalur mana yang terpakai dan bukannya lalai kepada 3.5% sepanjang masa.
- **Menganggap kadar diskaun neutral dari segi etika.** Pertikaian Stern-Nordhaus menunjukkan kadar itu mengekodkan pertimbangan nilai tentang generasi akan datang; menukarnya mengubah program mana yang kelihatan wajar, jadi ia harus dinyatakan dan dipertahankan, bukan disembunyikan dalam lalai hamparan.
- **Mengelirukan kadar diskaun sosial dengan kos modal swasta.** Kos pinjaman kerajaan dan kadar halangan sektor swasta ialah konsep berbeza daripada kadar sosial terbitan Ramsey, dan menggantikan satu dengan yang lain dalam penilaian awam lazimnya menyelewengkan keputusan ke arah memihak kepada pulangan jangka pendek.
- **Mendiskaunkan aliran tunai nyata dan nominal secara tidak konsisten.** Kadar Green Book ialah kadar nyata (dilaraskan inflasi); mendiskaunkan aliran tunai nominal dengannya memperkecilkan nilai kini dengan ketara.

## Sumber

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation", Annex 6
  (2022). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Stern N. "The Economics of Climate Change: The Stern Review." HM Treasury, 2006.
- Nordhaus WD. "A Review of the Stern Review on the Economics of Climate Change." Journal of
  Economic Literature, 2007;45(3):686–702.
- Ramsey FP. "A Mathematical Theory of Saving." Economic Journal, 1928;38(152):543–559.
