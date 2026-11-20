# Indeks Kemiskinan Pelbagai Dimensi (MPI)

MPI mengukur kemiskinan sebagai kekurangan bertindih yang dialami seseorang pada masa yang sama — dalam
kesihatan, pendidikan dan taraf hidup — dan bukannya pendapatan sahaja yang jatuh di bawah satu garisan. Ia
dibangunkan oleh Oxford Poverty and Human Development Initiative (OPHI) bersama Sabina Alkire dan James Foster,
dan telah diterbitkan bersama UNDP dalam setiap Human Development Report sejak 2010, di samping
[Indeks Pembangunan Manusia](../indeks-pembangunan-manusia/).

## Mengapa ini penting

Garis kemiskinan pendapatan terlepas pandang orang yang mempunyai pendapatan tunai yang mencukupi tetapi tidak
mempunyai air bersih, persekolahan, atau telah kehilangan anak — dan ia terlepas pandang hakikat bahawa kekurangan
berkelompok: isi rumah tanpa elektrik jauh lebih berkemungkinan juga tidak mempunyai sanitasi dan mempunyai
kanak-kanak yang kurang zat makanan. Kaedah Alkire-Foster, yang menjadi asas MPI, mengira kekurangan setiap
orang merentas sepuluh penunjuk yang dikelompokkan dalam tiga dimensi berpemberat sama — kesihatan, pendidikan,
taraf hidup — dan hanya mengelaskan seseorang sebagai "miskin MPI" jika skor kekurangan berpemberatnya melepasi
ambang tetap, lalu menangkap pertindihan yang tidak dapat ditangkap oleh set statistik penunjuk tunggal yang
berasingan. OPHI menerbitkan metodologi penuh dan data negara di
<https://ophi.org.uk/multidimensional-poverty-index/>; MPI global yang diselenggarakannya bersama UNDP kini
merangkumi lebih 110 negara. Bagi perisian yang dibina untuk program membanteras kemiskinan — pindahan tunai,
triaj penjagaan sosial, penyasaran bantuan — set penunjuk MPI selalunya paling hampir dengan skema kekurangan
piawai yang telah disahkan merentas berpuluh-puluh pejabat statistik kebangsaan.

## Matematiknya

```
10 penunjuk, 3 dimensi, setiap dimensi berpemberat 1/3:

Kesihatan (1/3):          pemakanan (1/6), kematian kanak-kanak (1/6)
Pendidikan (1/3):         tahun persekolahan (1/6), kehadiran ke sekolah (1/6)
Taraf hidup (1/3):        bahan api memasak, sanitasi, air minuman,
                           elektrik, perumahan, aset (1/18 setiap satu)

skor kekurangan (c) = jumlah pemberat penunjuk yang seseorang mengalami kekurangan

seseorang "miskin MPI" jika c ≥ 1/3 (ambang kemiskinan, k = 33%)

H (nisbah kiraan kepala) = bilangan miskin MPI / jumlah populasi
A (keamatan)              = purata skor kekurangan dalam kalangan yang miskin MPI sahaja

MPI = H × A
```

Kerana MPI mendarabkan *bahagian* yang miskin dengan *betapa* miskinnya mereka, dua wilayah dengan nisbah kiraan
kepala yang sama boleh mempunyai skor MPI yang sangat berbeza jika kekurangan lebih teruk di salah satunya —
logik "tiada penggantian merentas dimensi" yang sama di sebalik min geometri HDI.

## Contoh yang diselesaikan

**Tinjauan kebangsaan terhadap 1,000 orang**: 350 dikenal pasti sebagai miskin pelbagai dimensi (skor kekurangan
≥ 33%). Dalam kalangan 350 individu miskin itu sahaja, purata skor kekurangan ialah 45%.

```
H = 350 / 1000                = 0.350
A = 0.45
MPI = H × A = 0.350 × 0.45    = 0.1575
```

**Membandingkan dua daerah dengan kiraan kepala yang sama**: Daerah A mempunyai H = 0.30 dan A = 0.40 (ramai
miskin, kekurangan sederhana); Daerah B mempunyai H = 0.30 dan A = 0.60 (bilangan miskin yang sama, tetapi
kekurangan lebih teruk — kekurangan elektrik *dan* sanitasi *dan* kehadiran ke sekolah serentak).

```
MPI_A = 0.30 × 0.40 = 0.120
MPI_B = 0.30 × 0.60 = 0.180
```

Nisbah kiraan kepala yang sama, MPI 50% lebih tinggi di Daerah B — sistem penyasaran yang berasaskan kemiskinan
kiraan kepala sahaja akan meletakkan kedua-dua daerah pada kedudukan yang sama dan terlepas bahawa Daerah B
memerlukan intervensi yang lebih mendalam.

## Kaitan dengan kejuruteraan perisian

- Sistem pengurusan kes dan kelayakan bagi program sosial selalunya sudah menyimpan beberapa daripada sepuluh
  penunjuk itu (perumahan, kehadiran ke sekolah, penanda kesihatan) dalam silo yang berasingan; kaedah
  pengiraan Alkire-Foster ialah skema siap pakai untuk menggabungkannya menjadi satu skor kekurangan dan bukannya
  membina model penskoran khusus dari awal.
- Pemisahan kiraan kepala/keamatan (H × A) ialah corak yang berguna secara umum bagi mana-mana papan pemuka yang
  melaporkan "berapa ramai yang terjejas" di samping "betapa teruknya" — menggabungkan kedua-duanya menjadi satu
  nombor, seperti statistik kelaziman mentah, menyembunyikan kes yang memerlukan sumber paling banyak.
- Papan pemuka penunjuk gaya MPI sesuai dipasangkan dengan pelaporan [kos bagi setiap benefisiari](../kos-setiap-benefisiari/)
  untuk program membanteras kemiskinan: kos bagi setiap mata pengurangan MPI ialah unit yang boleh dipertahankan
  untuk membandingkan intervensi yang sangat berbeza (pindahan tunai berbanding infrastruktur sanitasi).

## Perangkap

- **Menganggap sepuluh penunjuk itu universal** — penunjuk MPI global OPHI ditentukur untuk kebolehbandingan
  merentas negara; MPI kebangsaan (banyak negara, termasuk beberapa di Asia Selatan dan Afrika, menerbitkan
  sendiri) menyesuaikan penunjuk dan pemberat dengan konteks tempatan, dan kedua-duanya tidak boleh dibandingkan
  secara langsung.
- **Melaporkan H sahaja** — nisbah kiraan kepala mengabaikan keamatan sepenuhnya; sentiasa laporkan atau hitung
  A bersamanya, atau MPI itu sendiri.
- **Menganggap golongan miskin MPI dan miskin pendapatan sebagai populasi yang sama** — ringkasan negara OPHI
  sendiri lazimnya menunjukkan pertindihan separa sahaja antara kedua-duanya; program yang hanya menyasarkan
  golongan miskin pendapatan akan secara sistematik terlepas bahagian ketara golongan miskin pelbagai dimensi.

## Sumber

- Oxford Poverty and Human Development Initiative. "Multidimensional Poverty Index."
  <https://ophi.org.uk/multidimensional-poverty-index/>
- Alkire S, Foster J. "Counting and Multidimensional Poverty Measurement." Journal of Public
  Economics, 2011.
- UNDP & OPHI. "Global Multidimensional Poverty Index" (annual report).
