# Bayaran Mengikut Keputusan dan Bon Impak Sosial (PbR/SIB)

Bayaran mengikut keputusan (payment by results, PbR) membayar penyedia berdasarkan hasil yang disahkan telah
dicapai, bukan aktiviti yang dijalankan. Bon impak sosial (social impact bond, SIB) ialah struktur pembiayaan
PbR tertentu yang mana pelabur swasta atau dermawan membiayai penyampaian perkhidmatan di awal dan dibayar balik
— dengan pulangan — oleh pentauliah kerajaan hanya jika hasil yang diukur secara bebas mencapai ambang yang
dipersetujui, lalu memindahkan risiko penyampaian daripada pembayar cukai kepada pelabur.

## Mengapa ini penting

SIB pertama di dunia dilancarkan di HMP Peterborough pada September 2010: Social Finance mengumpulkan £5 juta
daripada 17 pelabur untuk membiayai "One Service," yang bekerja dengan banduan hukuman pendek (kurang 12 bulan)
untuk mengurangkan pengulangan kesalahan, dengan Ministry of Justice dan Big Lottery Fund bersetuju membayar
balik pelabur hanya jika peristiwa sabitan semula berkurang sekurang-kurangnya 7.5% berbanding kohort
perbandingan kebangsaan yang dipadankan. Kohort akhir projek perintis Peterborough merekodkan pengurangan 9.7%
dalam sabitan semula, jauh di atas ambang, dan pelabur dibayar balik dengan pulangan. Mekanisme ini penting
kerana ia menyelesaikan masalah pentauliahan yang khusus: kerajaan mahu membayar untuk hasil dan bukannya input,
tetapi tidak dapat menyerap risiko kewangan intervensi yang mungkin tidak berjaya, jadi struktur SIB
memindahkan risiko itu kepada pelabur yang sanggup menjaminnya. Government Outcomes Lab (GO Lab) di Blavatnik
School of Government, Oxford kini menyelenggarakan asas bukti awam paling lengkap tentang prestasi PbR dan SIB
di seluruh dunia, menjejaki lebih 200 bon impak secara global dan menerbitkan penyelidikan tentang ciri reka
bentuk yang berkait dengan kejayaan atau kegagalan. Pengajaran yang berulang kali dikembalikan oleh asas bukti
itu ialah *metrik hasil yang dipilih*, dan siapa yang menanggung risiko tidak mencapainya, menentukan hampir
segala-galanya tentang cara kontrak PbR sebenarnya berkelakuan dalam amalan.

## Matematiknya

```
Bayaran PbR = bayaran asas (jika ada) + Σ (hasil dicapai × harga seunit bagi setiap hasil)

Pulangan pelabur bon impak sosial:
  Pengeluaran pelabur = modal di awal yang membiayai penyampaian perkhidmatan
  Bayaran hasil       = pentauliah membayar hanya jika hasil ≥ ambang, diskalakan mengikut
                         betapa jauh prestasi mendarat di atas ambang
  Pulangan pelabur    = bayaran hasil diterima − pengeluaran pelabur
                         (kadar pulangan, selalunya dihadkan, mencerminkan risiko yang ditanggung)

Parameter reka bentuk utama yang menentukan tingkah laku seluruh kontrak:
  Metrik hasil          — mesti hasil, bukan output (lihat outcomes-vs-outputs)
  Perbandingan/kontrafaktual — biasanya kohort dipadankan (lihat counterfactual-analysis)
  Ambang bayaran         — penambahbaikan minimum sebelum sebarang bayaran dicetuskan
  Lengkung bayaran        — linear, berperingkat atau dihadkan di atas ambang
  Diskaun atribusi/deadweight — lihat additionality-and-deadweight
```

## Contoh yang diselesaikan

**Peterborough One Service** (angka ilustrasi yang diambil daripada penilaian yang diterbitkan):

```
Modal pelabur dikumpulkan:       £5,000,000
Kohort:                          ~3,000 banduan lelaki hukuman pendek merentas dua kohort
Ambang:                          pengurangan ≥7.5% dalam peristiwa sabitan semula berbanding
                                  kumpulan perbandingan kebangsaan yang dipadankan, atau tiada bayaran
Keputusan Kohort 1:              pengurangan 8.4% — di bawah paras kontrak bagi kohort itu
                                  sahaja di bawah peraturan asal
Keputusan kohort gabungan/akhir: pengurangan 9.7% — di atas ambang
Bayaran hasil:                   kerajaan (Ministry of Justice / Big Lottery Fund)
                                  membayar bagi setiap mata peratusan di atas ambang, membiayai
                                  pembayaran balik pelabur serta pulangan
```

**Kontrak PbR pihak berkuasa tempatan (ilustrasi)**: perkhidmatan intervensi keluarga ditauliahkan pada £4,000
bagi setiap keluarga yang dirujuk (bayaran aktiviti) serta £6,000 bagi setiap keluarga tanpa rujukan perlindungan
kanak-kanak selanjutnya 12 bulan selepas penutupan (bayaran hasil). 200 keluarga dirujuk, 150 kes ditutup, 96
kekal bebas rujukan pada 12 bulan:

```
Bayaran aktiviti  = 200 × £4,000 = £800,000
Bayaran hasil     = 96 × £6,000  = £576,000
Jumlah kos kontrak = £1,376,000 bagi 96 hasil berterusan yang disahkan
Kos bagi setiap hasil yang disahkan ≈ £14,333 (lihat cost-per-outcome)
```

## Kaitan dengan kejuruteraan perisian

Bayaran mengikut keputusan ialah masalah penyelarasan insentif sebelum menjadi masalah data, dan sistem data
ialah tempat penyelarasan itu sama ada kekal atau pecah. Pengesahan hasil yang bebas dan kelihatan jika diusik
ialah keseluruhan permainan: pentauliah dan penyedia mempunyai insentif bertentangan tentang cara kes yang kabur
dikodkan, jadi sistem yang merekod hasil memerlukan jejak audit, perjanjian perkongsian data dengan pengesah bebas
(selalunya badan yang berbeza daripada penyedia, kadangkala badan statistik rasmi yang memadankan rekod polis atau
faedah), dan penversian tidak berubah bagi takrifan hasil — setara PbR kepada perangkap "mentakrifkan semula
metrik" dalam [KPI sektor awam](../kpi-sektor-awam/). Pengiraan atribusi bergantung pada kaedah kohort
dipadankan [counterfactual-analysis](../analisis-kontrafaktual/), yang memerlukan kod yang boleh diulang dan
boleh diaudit, bukan hamparan sekali sahaja. Dan metrik itu sendiri mestilah hasil sebenar, bukan aktiviti proksi
— lihat [hasil berbanding output](../hasil-berbanding-output/) — kerana kontrak PbR yang membayar untuk output hanya
melabelkan semula pembiayaan seperti biasa dengan kos transaksi tambahan. Apabila pulangan sosial SIB dimodelkan
secara prospektif, penilaian itu lazimnya meminjam terus daripada metodologi
[pulangan sosial atas pelaburan](../pulangan-sosial-atas-pelaburan/).

## Perangkap

- **Membayar untuk hasil proksi yang mudah dimanipulasi**: "kehadiran di sesi" ialah aktiviti yang menyamar
  sebagai hasil; tegaskan ukuran yang mencerminkan perubahan sebenar yang dicari (pengulangan kesalahan,
  pekerjaan, kestabilan perumahan).
- **Tiada kontrafaktual yang boleh dipercayai**: tanpa kumpulan perbandingan dipadankan, penambahbaikan boleh jadi
  regresi kepada min atau arah aliran yang lebih luas, bukan kesan program — lihat
  [counterfactual-analysis](../analisis-kontrafaktual/) dan
  [additionality-and-deadweight](../additionality-dan-deadweight/).
- **Memandang rendah kos transaksi dan penilaian**: pengesahan bebas, pautan data dan pentadbiran kontrak bagi
  skim PbR/SIB lazimnya mencecah dua digit sebagai peratusan nilai kontrak — asas bukti GO Lab mendokumentasikan
  ini sebagai pemacu berulang penghentian skim.
- **Memilih yang mudah atau "memarkir"**: penyedia yang dibayar bagi setiap hasil mempunyai insentif langsung
  untuk mengutamakan klien yang paling berkemungkinan berjaya juga dan mengetepikan kes yang paling sukar —
  reka bentuk peringkat bayaran atau pelarasan campuran kes untuk menanganinya.

## Sumber

- Government Outcomes Lab, University of Oxford, Blavatnik School of Government.
  <https://golab.bsg.ox.ac.uk/>
- Social Finance, "Peterborough Social Impact Bond" evaluation summaries.
  <https://golab.bsg.ox.ac.uk/case-studies/peterborough-social-impact-bond/>
- Ministry of Justice, "Peterborough Social Impact Bond HMP Doncaster: Final Reconviction Results
  for the Peterborough Social Impact Bond."
