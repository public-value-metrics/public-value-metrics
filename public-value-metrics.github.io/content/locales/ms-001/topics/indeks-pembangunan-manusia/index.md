# Indeks Pembangunan Manusia (HDI)

HDI ialah alternatif utama PBB kepada menyusun negara mengikut pendapatan semata-mata: ia menggabungkan jangka hayat, pendidikan, dan pendapatan menjadi satu nombor antara 0 dan 1, berasaskan premis — dihujahkan oleh ahli ekonomi Amartya Sen dan dibangunkan untuk PBB oleh Mahbub ul Haq — bahawa pembangunan ialah tentang memperluas apa yang boleh dilakukan dan dijadikan oleh manusia, bukan sekadar apa yang mereka peroleh. Ia diterbitkan setiap tahun dalam Human Development Report Program Pembangunan PBB (UNDP) sejak 1990.

## Mengapa ini penting

Sebelum HDI, "pembangunan" diukur hampir sepenuhnya dengan KNK per kapita, yang tidak mengatakan apa-apa tentang sama ada pertumbuhan sampai kepada kesihatan atau pendidikan rakyat biasa. Pendekatan keupayaan (capability approach) Sen membingkai semula pembangunan sebagai perluasan kebebasan sebenar, dan ul Haq menjadikannya indeks yang boleh diterbitkan yang dapat digunakan UNDP untuk menyusun setiap negara, memaksa kerajaan yang menjadi kaya dengan pendapatan semata-mata tetapi mengabaikan kesihatan atau persekolahan menghadapi kedudukan yang lebih buruk daripada yang disarankan KDNK mereka (negara minyak Teluk dan sesetengah ekonomi ekstraktif ialah contoh standard). Struktur tiga hala HDI juga ialah nenek moyang metodologi langsung bagi [Indeks Kemiskinan Pelbagai Dimensi](../indeks-kemiskinan-pelbagai-dimensi/): kedua-duanya enggan membenarkan satu dimensi membeli balik kekurangan dalam dimensi lain, menggunakan min geometri dan bukan aritmetik. UNDP menerbitkan nota teknikal penuh dan data asas untuk setiap edisi (<https://hdr.undp.org/data-center/human-development-index>), yang merupakan sumber kanonik bagi sesiapa yang membina atas indeks itu dan bukan menerbitkannya semula.

## Matematiknya

```
Indeks Jangka Hayat (LEI)       = (LE − 20) / (85 − 20)

Indeks Purata Tahun Persekolahan = purata tahun persekolahan / 15
Indeks Jangkaan Tahun Persekolahan = jangkaan tahun persekolahan / 18
Indeks Pendidikan (EI)           = (Indeks Purata + Indeks Jangkaan) / 2

Indeks Pendapatan (II)           = (ln(GNI per kapita) − ln(100)) / (ln(75000) − ln(100))

HDI = (LEI × EI × II) ^ (1/3)     [min geometri tiga subindeks]
```

Min geometri itu disengajakan: kerana ia mendarab dan bukan memurnkan purata, skor yang sangat tinggi dalam satu dimensi tidak boleh mengimbangi sepenuhnya skor yang sangat rendah dalam dimensi lain — reka bentuk yang diguna pakai UNDP pada 2010 khusus untuk menghukum ketidakseimbangan, menggantikan formula min aritmetik sebelumnya.

## Contoh yang diselesaikan

**Negara berpendapatan sederhana**: jangka hayat 72 tahun, purata tahun persekolahan 8, jangkaan tahun persekolahan 13, GNI per kapita $12,000.

```
LEI = (72 − 20) / (85 − 20)              = 52 / 65   = 0.800
MYSI = 8 / 15                                        = 0.533
EYSI = 13 / 18                                       = 0.722
EI = (0.533 + 0.722) / 2                             = 0.628
II = (ln(12000) − ln(100)) / (ln(75000) − ln(100))
   = (9.393 − 4.605) / (11.225 − 4.605)
   = 4.788 / 6.620                                   = 0.723

HDI = (0.800 × 0.628 × 0.723) ^ (1/3)
    = (0.363) ^ (1/3)                                ≈ 0.713
```

HDI 0.713 jatuh dalam jalur "pembangunan manusia tinggi" UNDP (0.700–0.799); "sangat tinggi" bermula pada 0.800. Perhatikan betapa sensitifnya hasil itu terhadap subindeks yang paling lemah: jika purata tahun persekolahan ialah 4 dan bukan 8 (MYSI = 0.267, EI = 0.494), HDI jatuh kepada (0.800 × 0.494 × 0.723)^(1/3) ≈ 0.639 — turun satu jalur penuh — walaupun tiada perkara lain berubah.

## Kaitan dengan kejuruteraan perisian

- Corak min geometri boleh digunakan semula secara langsung bagi mana-mana skor komposit perkhidmatan atau produk yang anda tidak mahu satu dimensi yang kukuh menutupi dimensi lemah yang kritikal — cth. menggabungkan skor kebolehcapaian, prestasi, dan kebolehpercayaan bagi perkhidmatan digital awam secara pendaraban dan bukan purata berpemberat, supaya perkhidmatan yang pantas tetapi tidak boleh dicapai tidak boleh mendapat skor "baik".
- Transformasi log pendapatan HDI (nilai marginal yang menurun bagi satu paun tambahan) ialah logik yang sama di sebalik [pemberatan pengagihan](../pemberatan-pengagihan/) dalam penilaian: tambahan $1,000 bermakna jauh lebih banyak kepada isi rumah miskin berbanding kaya, dan melayan kedua-duanya secara linear salah menilai impak.
- Mana-mana papan pemuka yang melaporkan satu skor "inklusi digital" atau "hasil rakyat" gabungan harus mendokumenkan formula pengagregatannya seeksplisit nota teknikal UNDP — lihat [KPI sektor awam](../kpi-sektor-awam/) dan [kad skor nilai awam](../kad-skor-nilai-awam/).

## Perangkap

- **Memurnkan purata dan bukan menggunakan min geometri** — min aritmetik membenarkan pendapatan tinggi menutupi kesihatan atau pendidikan yang lemah sepenuhnya; seluruh tujuan perubahan metodologi 2010 ialah menghentikan penggantian itu.
- **Membandingkan HDI tahun ke tahun seolah-olah ia KDNK yang dilaraskan inflasi** — UNDP menetapkan semula asas indeks secara berkala (had minimum/maksimum baharu, had persekolahan disemak), jadi perubahan kedudukan boleh mencerminkan kemas kini metodologi, bukan peralihan sebenar; sentiasa semak edisi HDR mana yang menjadi sumber angka.
- **Menganggap HDI sebagai ukuran kemiskinan** — ia purata kebangsaan dan tidak mengatakan apa-apa tentang pengagihan dalam sesebuah negara; untuk itu, gunakan [Indeks Kemiskinan Pelbagai Dimensi](../indeks-kemiskinan-pelbagai-dimensi/) atau HDI terlaras ketaksamaan UNDP yang berasingan.

## Sumber

- UNDP. "Human Development Index (HDI)" technical notes and data.
  <https://hdr.undp.org/data-center/human-development-index>
- UNDP. Human Development Report 1990 (the index's introduction).
- Sen A. "Development as Freedom." Oxford University Press, 1999.
