# Indeks Kemiskinan Multidimensi (Multidimensional Poverty Index, MPI)

MPI ngukur kemiskinan minangka kekurangan (deprivation) sing tumpang-tindih lan dialami wong ing wektu bebarengan, ing bidang kesehatan, pendidikan, lan standar urip, tinimbang mung penghasilan sing ana ing sangisoring garis. Iki dikembangake dening Oxford Poverty and Human Development Initiative (OPHI) karo Sabina Alkire lan James Foster, lan diterbitake bebarengan karo UNDP ing saben Human Development Report wiwit 2010, bareng karo [Indeks Pembangunan Manusia](../indeks-pembangunan-manungsa/).

## Kenapa penting

Garis kemiskinan penghasilan ora nggatekake wong sing nduweni cukup penghasilan awujud awis nanging ora duwe banyu resik, sekolah, utawa ngalami kematian anak, lan uga ora nggatekake kasunyatan yen kekurangan iku ngumpul: rumah tangga tanpa listrik luwih gedhe kemungkinane uga ora duwe sanitasi lan duwe anak kurang gizi. Metode Alkire-Foster, sing dadi dhasar MPI, ngitung kekurangan saben wong ing sepuluh indikator sing dikelompokake dadi telung dimensi kanthi bobot padha (kesehatan, pendidikan, standar urip), lan mung nggolongake wong minangka "miskin MPI" yen skor kekurangan sing dibobot ngluwihi ambang tetep, saengga bisa nangkep tumpang-tindih sing ora bisa dijupuk dening kumpulan statistik indikator tunggal sing kapisah. OPHI nerbitake metodologi lengkap lan data negara ing <https://ophi.org.uk/multidimensional-poverty-index/>; MPI global sing dijaga bebarengan karo UNDP saiki nyakup luwih saka 110 negara. Kanggo piranti lunak sing dibangun kanggo program anti-kemiskinan (transfer awis, triase perawatan sosial, penargetan bantuan), set indikator MPI asring minangka sing paling cedhak karo skema kekurangan standar sing wis divalidasi ing puluhan kantor statistik nasional.

## Petungan

```
10 indikator, 3 dimensi, saben dimensi dibobot 1/3:

Kesehatan (1/3):          nutrisi (1/6), kematian anak (1/6)
Pendidikan (1/3):         lawase sekolah (1/6), kehadiran sekolah (1/6)
Standar urip (1/3):       bahan bakar masak, sanitasi, banyu ngombe,
                          listrik, omah, aset (1/18 saben-saben)

skor kekurangan (c) = jumlah bobot indikator sing dialami wong kuwi

wong "miskin MPI" yen c ≥ 1/3 (ambang kemiskinan, k = 33%)

H (rasio jumlah) = jumlah miskin MPI / total populasi
A (intensitas)    = rata-rata skor kekurangan mung ing antarane sing miskin MPI

MPI = H × A
```

Amarga MPI ngalikake *bagean* sing miskin karo *sepira* miskine, rong wilayah kanthi rasio jumlah sing padha bisa nduweni skor MPI sing beda banget yen kekurangane luwih abot ing salah sijine; logika "ora ana substitusi antar dimensi" iki padha karo mean geometris ing HDI.

## Conto petungan

**Survei nasional 1.000 wong**: 350 diidentifikasi minangka miskin multidimensi (skor kekurangan ≥ 33%). Ing antarane 350 wong miskin kuwi wae, rata-rata skor kekurangane 45%.

```
H = 350 / 1.000               = 0,350
A = 0,45
MPI = H × A = 0,350 × 0,45    = 0,1575
```

**Mbandhingake rong distrik kanthi jumlah sing padha**: Distrik A nduweni H = 0,30 lan A = 0,40 (akeh sing miskin, kekurangane sedheng); Distrik B nduweni H = 0,30 lan A = 0,60 (jumlah miskin padha, nanging kekurangane luwih abot, yaiku ora duwe listrik *lan* sanitasi *lan* kehadiran sekolah bebarengan).

```
MPI_A = 0,30 × 0,40 = 0,120
MPI_B = 0,30 × 0,60 = 0,180
```

Rasio jumlah padha, MPI 50% luwih dhuwur ing Distrik B; sistem penargetan sing mung adhedhasar kemiskinan jumlah bakal ngurutake rong distrik kuwi padha lan ora weruh yen Distrik B butuh intervensi sing luwih jero.

## Gegayutan karo rekayasa piranti lunak

- Sistem manajemen kasus lan kelayakan kanggo program sosial asring wis nyimpen sawetara saka sepuluh indikator (omah, kehadiran sekolah, panandha kesehatan) ing silo kapisah; metode ngitung Alkire-Foster minangka skema siap-pakai kanggo nggabungake dadi siji skor kekurangan, tinimbang mbangun model penilaian khusus saka nol.
- Pamisahan jumlah/intensitas (H × A) minangka pola sing umume migunani kanggo dasbor apa wae sing nglaporake "pira sing kena" bebarengan karo "sepira abote"; ngringkes loro-lorone dadi siji angka, kaya statistik prevalensi mentah, nyelehake persis kasus sing butuh sumber daya paling akeh.
- Dasbor indikator gaya MPI cocog karo laporan [biaya saben panampa manfaat](../biaya-saben-panampa-manfaat-ngukur-jangkauan-dudu-owah-owahan/) kanggo program anti-kemiskinan: biaya saben poin penurunan MPI minangka unit sing bisa dipertahanake kanggo mbandhingake intervensi sing beda banget (transfer awis vs. infrastruktur sanitasi).

## Jebakan

- **Nganggep sepuluh indikator iku universal.** Indikator MPI global OPHI dikalibrasi kanggo bisa dibandhingake antar negara; MPI nasional (akeh negara, kalebu sawetara ing Asia Kidul lan Afrika, nerbitake dhewe) nyesuaikake indikator lan bobot karo konteks lokal, lan loro-lorone ora bisa dibandhingake langsung.
- **Nglaporake H wae.** Rasio jumlah ora nggatekake intensitas babar blas; tansah laporake utawa etung A bebarengan karo iku, utawa MPI dhewe.
- **Nganggep miskin MPI lan miskin penghasilan iku populasi sing padha.** Ringkesan negara OPHI dhewe biasane nuduhake tumpang-tindih mung sebagian; program sing mung nargetake sing miskin penghasilan bakal sacara sistematis ora kejangkau bagean sing wigati saka sing miskin multidimensi.

## Sumber

- Oxford Poverty and Human Development Initiative. "Multidimensional Poverty Index."
  <https://ophi.org.uk/multidimensional-poverty-index/>
- Alkire S, Foster J. "Counting and Multidimensional Poverty Measurement." Journal of Public
  Economics, 2011.
- UNDP & OPHI. "Global Multidimensional Poverty Index" (annual report).
