# Nilai Data Terbuka

Nilai data terbuka ialah masalah menganggar nilai data kerajaan dan awam apabila ia tidak mempunyai harga: ia tidak
dijual, jadi tiada baris hasil jualan, namun pelepasannya (rekod cuaca, jadual pengangkutan, sempadan poskod,
daftar syarikat) jelas menjana aktiviti ekonomi dan sosial di hilir. Menilainya dengan baik penting kerana
"percuma untuk dilepaskan" dan "tidak bernilai" kedua-duanya salah, dan jurutera perisian yang memutuskan sama ada
hendak membuka API atau set data memerlukan hujah yang lebih baik daripada kedua-duanya.

## Mengapa ini penting

Anggaran atas-bawah yang paling kerap dipetik datang daripada laporan McKinsey Global Institute 2013 "Open data:
Unlocking innovation and performance with liquid information", yang meletakkan potensi nilai tahunan data terbuka
merentas tujuh domain — pendidikan, pengangkutan, produk pengguna, elektrik, minyak dan gas, penjagaan kesihatan,
dan kewangan pengguna — pada $3 trilion hingga $5 trilion setahun di seluruh dunia, melalui mekanisme termasuk
ketelusan yang meningkat, pemadanan bekalan dengan permintaan dengan lebih cekap, dan membolehkan produk dan
perkhidmatan baharu dibina atas data itu. Angka itu ialah anggaran senario, bukan hasil sebenar yang diukur, dan
ia kerap disalah petik seolah-olah ia hasil yang boleh ditangkap terus oleh kerajaan, sedangkan nilai itu
kebanyakannya terakru kepada pihak ketiga — perniagaan, penyelidik, rakyat — yang menggunakan data tersebut,
dan itulah tujuan membukanya dan bukannya menjualnya. Open Data Institute UK, yang ditubuhkan bersama oleh Sir Tim
Berners-Lee dan Sir Nigel Shadbolt pada 2012, sejak itu telah membina sekumpulan kajian kes bawah-atas yang lebih
terperinci — sektor demi sektor, set data demi set data — yang jauh lebih berguna untuk kes perniagaan sebenar
berbanding angka utama McKinsey, kerana ia menunjukkan mekanisme penciptaan nilai, bukan sekadar saiz
agregatnya.

## Matematiknya

Data terbuka tidak mempunyai harga pasaran, jadi kaedah penilaian menggantikannya; tiga pendekatan berulang kali
digunakan, dan tiada satu pun mencukupi bersendirian:

```
1. Kaedah kos dielakkan / kos penggantian:
   nilai ≈ apa yang pengguna akan bayar untuk menghasilkan atau melesenkan
   data yang setara sendiri — had bawah, mengabaikan nilai yang dicipta
   oleh kegunaan yang tidak pernah dijangka oleh pengeluar asal

2. Kaedah analog pasaran / aktiviti hiliran:
   nilai ≈ hasil jualan atau penjimatan yang dijana oleh perniagaan/perkhidmatan
   yang dibina atas data itu (mis. aplikasi satnav yang dibina atas data peta
   dan trafik terbuka) — menangkap aktiviti ekonomi sebenar tetapi sukar
   dikaitkan dengan bersih kepada pelepasan data itu sendiri (lihat
   additionality-and-deadweight)

3. Kaedah kontinjen/keutamaan dinyatakan:
   nilai ≈ apa yang pengguna katakan mereka sanggup bayar, atau masa yang
   mereka katakan dapat dijimatkan — lihat stated-preference-valuation untuk
   kaedah umum dan biasnya

Tiada satu pun menghasilkan angka sebersih harga pasaran; kes perniagaan
data terbuka yang boleh dipercayai menggabungkan dua atau lebih kaedah, dan
jelas tentang mekanisme mana yang melakukan kerja itu.
```

## Contoh yang diselesaikan

**Pelepasan data pemetaan/alamat kebangsaan sebagai ilustrasi** (metodologi mengikut kajian kes gaya ODI, angka
sebagai ilustrasi skala yang lazimnya ditemui oleh kajian sedemikian):

```
Anggaran kos dielakkan:
  Perniagaan yang jika tidak akan melesenkan data pemadanan alamat yang
  setara secara komersial, pada anggaran purata kos lesen £4,000/
  tahun, merentas anggaran 15,000 PKS yang kini menggunakan set data terbuka percuma
  = 15,000 × £4,000 = £60,000,000/tahun dalam kos pelesenan yang dielakkan sahaja

Anggaran aktiviti hiliran (lebih spekulatif, memerlukan kontrafaktual):
  Produk penghalaan penghantaran dan logistik baharu yang dibina atas data terbuka
  yang tidak akan wujud, atau akan jauh lebih buruk, tanpanya —
  memerlukan perbandingan dengan kontrafaktual data kekal tertutup atau
  berlesen komersial (counterfactual-analysis), kerana sebahagian
  aktiviti itu akan berlaku juga atas data berbayar pada harga yang lebih
  tinggi, iaitu deadweight dalam erti "nilai yang dicipta dengan membukanya"

Kes perniagaan yang boleh dipertahankan melaporkan angka kos dielakkan sebagai
had bawah yang kukuh, dan menganggap angka aktiviti hiliran sebagai senario
had atas, bukan fakta.
```

## Kaitan dengan kejuruteraan perisian

Bagi jurutera, soalan praktikal nilai data terbuka biasanya lebih sempit daripada angka utama kebangsaan: adakah
membuka API atau set data khusus ini (dan bukannya menyimpannya di sebalik perjanjian rakan kongsi) meningkatkan
penggunaan semula dengan cukup untuk mewajarkan kos berterusan mendokumentasi, menversi dan menyokongnya sebagai
antara muka awam? Kos penyelenggaraan itu nyata dan merupakan pasangan kepada ekonomi bina-sekali-guna-semula-kerap
[kerajaan sebagai platform](../kerajaan-sebagai-platform/) — kedua-dua topik itu sangat berkait, satu tentang kod dan
infrastruktur yang dikongsi, satu lagi tentang data yang dikongsi. Sebarang tuntutan nilai data terbuka harus
disemak berbanding [additionality-and-deadweight](../additionality-dan-deadweight/) sebelum dimasukkan ke dalam
kes perniagaan: aktiviti yang akan berlaku juga, atas data berlesen komersial, bukan nilai yang dicipta oleh
*pembukaan* itu.

## Perangkap

- **Memetik angka McKinsey $3–5 trilion sebagai khusus UK atau sebagai bahagian set data ini**: ia ialah anggaran
  senario global tujuh sektor dari 2013 — menggunakannya sebagai pengganda tepat untuk satu set data kebangsaan
  menyalahgambarkan apa sebenarnya angka itu.
- **Tiada kontrafaktual**: menuntut kredit untuk semua aktiviti ekonomi hiliran yang dibina atas data terbuka,
  tanpa bertanya berapa banyak daripadanya akan berlaku juga atas data berbayar atau berlesen pada harga yang
  lebih tinggi (lihat [additionality-and-deadweight](../additionality-dan-deadweight/) dan
  [counterfactual-analysis](../analisis-kontrafaktual/)).
- **Mengelirukan kos pengeluaran dengan nilai yang dicipta**: set data yang mahal untuk dikumpul tidak semestinya
  bernilai untuk dilepaskan, dan yang murah tidak semestinya bernilai rendah — nilai mengikut penggunaan hiliran,
  bukan kos huluan.
- **Mengabaikan kos penyelenggaraan berterusan "terbuka"**: menerbitkan ekstrak CSV sekali sahaja bukan komitmen
  yang sama seperti mengendalikan API terbuka yang didokumentasikan, diversi dan disokong — kekurangan dana untuk
  yang terakhir selepas pengumuman pelancaran ialah mod kegagalan yang lazim.

## Sumber

- McKinsey Global Institute, "Open data: Unlocking innovation and performance with liquid information" (2013). <https://www.mckinsey.com/business-functions/mckinsey-digital/our-insights/open-data-unlocking-innovation-and-performance-with-liquid-information>
- Open Data Institute. <https://theodi.org/>
