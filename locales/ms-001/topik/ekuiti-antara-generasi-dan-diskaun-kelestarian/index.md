# Ekuiti antara generasi dan diskaun kelestarian

Mendiskaun kos dan manfaat masa depan kembali kepada nilai kini ialah amalan piawai dalam penilaian awam — lihat [kadar diskaun sosial](../kadar-diskaun-sosial/) — tetapi sebarang kadar diskaun positif, apabila dikompaun sepanjang beberapa dekad atau abad, mengecilkan masa depan yang jauh ke arah sifar dalam istilah hari ini. Bagi keputusan yang akibatnya seabad atau lebih ke hadapan — perubahan iklim, sisa nuklear, kehilangan biodiversiti, kelestarian pencen — fakta matematik itu menjadi fakta etika: diskaun piawai boleh menjadikan mudarat bencana kepada generasi akan datang kelihatan, dalam istilah nilai kini, hampir tidak berbaloi dielakkan.

## Mengapa ini penting

Persamaan Ramsey, diterbitkan oleh Frank Ramsey pada 1928, menguraikan kadar diskaun kepada dua komponen: keutamaan masa tulen (δ, seberapa banyak kita sekadar lebih suka sekarang daripada kemudian, bebas daripada kekayaan) dan kesan pertumbuhan kekayaan (η×g, seberapa banyak kita mendiskaun kerana generasi akan datang dijangka lebih kaya, jadi satu paun tambahan kurang bermakna kepada mereka). Kadar diskaun jangka panjang piawai Green Book UK dibina atas persamaan ini dan mengikut jadual yang *menurun* dan bukan kadar rata — reka bentuk yang berakar pada kerja Martin Weitzman tentang "diskaun gamma," yang menunjukkan bahawa apabila kadar diskaun masa depan itu sendiri tidak pasti, kadar setara-kepastian yang harus anda gunakan secara matematik menurun dari semasa ke semasa, kerana senario kadar rendah mendominasi semakin jauh anda melihat. Stern Review tentang Ekonomi Perubahan Iklim (2006), dipimpin Sir Nicholas Stern, membawa perdebatan etika lebih jauh: Stern berhujah bahawa keutamaan masa tulen harus ditetapkan hampir sifar (beliau menggunakan δ ≈ 0.1%, mencerminkan hanya kebarangkalian kecil bencana yang menamatkan tamadun, bukan keutamaan sebenar untuk masa kini berbanding masa depan), menghasilkan kadar diskaun berkesan yang jauh lebih rendah daripada amalan Green Book konvensional dan, sewajarnya, kes masa kini yang jauh lebih besar untuk tindakan iklim. Pengkritik (terutamanya William Nordhaus) berhujah kadar hampir sifar Stern boleh dipertahankan dari segi etika tetapi tidak konsisten dengan tingkah laku simpanan dan pelaburan yang sebenarnya diperhatikan. Perselisihan ini bukan nota kaki teknikal — ia sebab terbesar mengapa dua ahli ekonomi yang sama tegasnya boleh sampai kepada kesimpulan yang sangat berbeza tentang berapa banyak generasi kini patut berkorban untuk masa depan, dan ia sebab mengapa perisian yang menyokong penilaian pelaburan awam ufuk panjang mesti mendedahkan andaian diskaunnya dan bukan menanamnya dalam lalai hamparan.

## Matematiknya

```
Persamaan Ramsey:   r = δ + η × g

  r = kadar diskaun sosial
  δ = keutamaan masa tulen (kadar ketidaksabaran, bebas daripada kekayaan)
  η = keanjalan utiliti marginal penggunaan (nilai menurun bagi
      penggunaan tambahan apabila orang bertambah kaya)
  g = kadar pertumbuhan jangkaan penggunaan per kapita

Jadual jangka panjang menurun Green Book (anggaran, jalur diterbitkan semasa):
  Tahun 0–30:    3.5%
  Tahun 31–75:   3.0%
  Tahun 76–125:  2.5%
  Tahun 126–200: 2.0%
  Tahun 201–300: 1.5%
  Tahun 301+:    1.0%

Parameter Stern Review: δ ≈ 0.1%, η = 1, g ≈ 1.3%  → r ≈ 1.4%
```

## Contoh yang diselesaikan

**Nilai hari ini bagi £1 mudarat yang dielakkan dalam 100 tahun**, di bawah tiga rejim diskaun:

```
Kadar jangka pendek rata Green Book (3.5%, malar selama 100 tahun):
  PV = 1 / (1.035)^100 ≈ 1 / 31.19 ≈ £0.032   (3.2 pence)

Jadual menurun Green Book (3.5% untuk thn 1–30, 3.0% untuk thn 31–75,
2.5% untuk thn 76–100):
  faktor(1–30)  = 1.035^30  ≈ 2.807
  faktor(31–75) = 1.03^45   ≈ 3.782
  faktor(76–100)= 1.025^25  ≈ 1.854
  jumlah faktor ≈ 2.807 × 3.782 × 1.854 ≈ 19.68
  PV = 1 / 19.68 ≈ £0.051   (5.1 pence)

Keutamaan masa tulen hampir sifar gaya Stern (r ≈ 1.4% rata):
  PV = 1 / (1.014)^100 ≈ 1 / 3.997 ≈ £0.250   (25.0 pence)
```

£1 mudarat yang sama yang dielakkan seabad dari sekarang bernilai 3.2p, 5.1p, atau 25p hari ini bergantung semata-mata pada konvensyen diskaun yang digunakan — julat hampir lapan kali ganda yang menentukan sama ada projek mitigasi iklim dengan kos pendahuluan tinggi dan pulangan seabad kemudian melepasi paras NPV positif sama sekali. Inilah mekanisme di sebalik amaran utama topik ini: pada sebarang kadar rata yang positif secara bermakna, mudarat masa depan yang cukup jauh dipadam secara aritmetik daripada penilaian, tanpa mengira keterukan sebenarnya.

## Kaitan dengan kejuruteraan perisian

- Mana-mana alat penilaian atau kes perniagaan ufuk panjang (infrastruktur, adaptasi iklim, pemodelan pencen) harus melaksanakan jadual *menurun* Green Book, bukan satu kadar rata — lalai kadar rata secara senyap menanam bias anti-masa depan yang jauh lebih kuat daripada yang ditetapkan panduan kerajaan UK semasa.
- Kadar diskaun dan ufuk harus sentiasa didedahkan sebagai parameter yang kelihatan dan boleh diaudit dalam perisian penilaian, dengan kepekaan pengiraan terhadapnya ditunjukkan secara eksplisit (seperti dalam contoh kerja di atas) — menanam kadar dalam fail konfigurasi mengundang tepat "pilihan etika tersembunyi" yang diperingatkan oleh perdebatan Stern-Nordhaus; ini berpasangan dengan perkara ketelusan dalam [perakaunan modal semula jadi](../perakaunan-modal-semula-jadi/) dan mendasari topik [kadar diskaun sosial](../kadar-diskaun-sosial/) secara umum.
- Di mana manfaat sesuatu program secara eksplisit antara generasi (pertahanan banjir, pemulihan modal semula jadi, infrastruktur digital jangka panjang), [analisis kos-faedah sosial](../analisis-kos-manfaat-sosial/) harus melaporkan keputusan di bawah sekurang-kurangnya dua andaian diskaun (piawai Green Book dan kes kepekaan kadar rendah) dan bukan anggaran satu titik, supaya pembuat keputusan melihat bagaimana pilihan kadar diskaun sahaja menggerakkan jawapan.

## Perangkap

- **Mempersembahkan satu NPV berdiskaun tanpa julat kepekaan** — memandangkan betapa banyak kadar diskaun sahaja mengubah jawapan bagi projek ufuk panjang, NPV satu kadar melebih-lebihkan ketepatan secara material; sentiasa laporkan julat yang merangkumi sekurang-kurangnya piawai Green Book dan senario kadar rendah.
- **Menerapkan kadar rata jangka pendek (3.5%) pada penilaian berabad-abad** — panduan Green Book sendiri menetapkan jadual menurun justeru kerana kadar rata dinilai tidak sesuai melepasi kira-kira 30 tahun; menggunakannya juga memperkecil kos jangka panjang.
- **Menganggap δ (keutamaan masa tulen) sebagai parameter yang semata-mata teknikal** — nilai hampir sifar Stern dan nilai tersirat Green Book yang lebih tinggi kedua-duanya boleh dipertahankan hanya sebagai pendirian etika tentang berapa banyak berat yang dihutang masa kini kepada masa depan, bukan nombor "betul" atau "salah" secara empirikal; perisian harus menjadikan andaian itu kelihatan dan bukan mempersembahkan satu angka sebagai betul secara objektif.

## Sumber

- Stern N. "The Economics of Climate Change: The Stern Review." Cambridge University Press, 2006.
- Ramsey FP. "A Mathematical Theory of Saving." The Economic Journal, 1928.
- Weitzman ML. "Gamma Discounting." American Economic Review, 2001.
- HM Treasury. "The Green Book: Central Government Guidance on Appraisal and Evaluation" (Annex 6,
  discount rate schedule).
- Nordhaus WD. "A Review of the Stern Review on the Economics of Climate Change." Journal of
  Economic Literature, 2007.
