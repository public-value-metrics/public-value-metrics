# Additionality dan Deadweight

Additionality (kepertambahan) menanyakan sama ada sesuatu intervensi menyebabkan hasil yang tidak akan berlaku
sebaliknya. Deadweight ialah cerminannya: bahagian hasil yang tetap akan berlaku walaupun tanpa program,
geran atau subsidi tersebut. Hampir setiap tuntutan impak daripada program kerajaan atau badan amal
membesar-besarkan kesannya sehingga deadweight ditolak, dan itulah sebabnya garis panduan penilaian UK
menganggapnya sebagai pelarasan pertama dan paling penting terhadap mana-mana angka utama.

## Mengapa ini penting

"Kami menyokong 500 perniagaan untuk berkembang" kedengaran seperti satu pencapaian, tetapi jika 300 daripada
perniagaan itu akan berkembang juga — kerana ekonomi tempatan sedang pulih, kerana mereka mempunyai saluran
pembiayaan lain, kerana mereka sudah berada pada trajektori pertumbuhan sebelum program bermula — sumbangan
tambahan sebenar program itu ialah 200, bukan 500. Magenta Book HM Treasury dan "Additionality Guide" HM
Treasury/BIS yang sudah lama digunakan (pada asalnya dibangunkan untuk program pembangunan serantau dan
penjanaan semula, dan digunakan secara meluas dalam penilaian kerajaan UK sejak itu) memformalkan deadweight
sebagai pelarasan permulaan dalam urutan impak bersih yang piawai: kesan kasar tolak deadweight, tolak
anjakan (displacement), tolak ketirisan (leakage), dilaraskan untuk kesan pengganda, bersamaan impak
tambahan bersih. Melangkau langkah ini ialah cara paling lazim tuntutan impak sektor awam dan sosial
digembungkan, sama ada dengan sengaja atau tidak — program geran yang hanya mengukur hasil kasar peserta,
tanpa kumpulan perbandingan, tidak dapat membezakan kesannya sendiri daripada apa yang akan berlaku
walau apa pun.

Deadweight bukan peratusan tetap; ia bergantung sepenuhnya pada kontrafaktual untuk populasi dan intervensi
tertentu (lihat [analisis kontrafaktual](../analisis-kontrafaktual/)). Penilaian pembangunan serantau di
England di bawah Regional Development Agencies terdahulu lazimnya mendapati kadar deadweight dalam julat
20–60% bergantung pada jenis sokongan perniagaan, dan itulah sebabnya penilaian program yang boleh dipercayai
melaporkan julat yang dilaraskan untuk deadweight dan bukannya satu angka andaian, serta mengapa pembiaya
seperti National Lottery Community Fund dan Big Society Capital menghendaki penerima geran menangani
deadweight secara jelas dalam pelaporan hasil dan bukannya melaporkan bilangan peserta kasar.

## Matematiknya

Urutan pelarasan impak bersih yang piawai, seperti yang digariskan dalam panduan penilaian UK (Magenta Book;
HM Treasury/BIS Additionality Guide; panduan penilaian ESIF dan dana struktur):

```
Hasil kasar
  − Deadweight       (apa yang akan berlaku juga)
  − Anjakan          (aktiviti/manfaat yang dialihkan dari tempat lain, bukan dicipta — lihat
                       displacement-and-attribution)
  − Ketirisan        (manfaat yang jatuh di luar kumpulan/kawasan sasaran)
  × Pengganda        (aktiviti ekonomi tidak langsung/teraruh tambahan, jika positif)
  = Impak tambahan bersih
```

Kadar deadweight sebagai kadar perkadaran:

```
Kadar deadweight = hasil yang akan berlaku tanpa intervensi
                   / jumlah hasil kasar yang diperhatikan

Hasil tambahan bersih = Hasil kasar × (1 − Kadar deadweight)
```

## Contoh yang diselesaikan

**Program geran sokongan perniagaan**: skim geran serantau melaporkan bahawa 500 perniagaan yang disokong
meningkatkan pekerjaan pada tahun berikutnya, purata 3 pekerjaan setiap satu — tuntutan kasar sebanyak
1,500 pekerjaan.

Kumpulan perbandingan sepadan yang terdiri daripada perniagaan serupa yang tidak disokong (lihat
[analisis kontrafaktual](../analisis-kontrafaktual/)) menunjukkan bahawa 40% pertumbuhan pekerjaan
perniagaan yang disokong akan berlaku juga, berdasarkan prestasi kumpulan sepadan itu dalam tempoh yang sama.

```
Kadar deadweight = 40%
Pekerjaan tambahan bersih = 1,500 × (1 − 0.40) = 900 pekerjaan
```

Pencapaian yang boleh dilaporkan dengan jujur oleh program ini ialah 900 pekerjaan, bukan 1,500 — penurunan
40% semata-mata daripada pelarasan deadweight, sebelum anjakan atau ketirisan dipertimbangkan.

**Program pekerjaan badan amal**: sebuah badan amal menempatkan 200 penganggur jangka panjang ke dalam
pekerjaan dengan kos £600,000 (£3,000 setiap penempatan, kasar). Data pasaran buruh kebangsaan menunjukkan
bahawa, tanpa sebarang intervensi, kira-kira 15% daripada kohort penganggur jangka panjang yang setanding
mendapat kerja dalam tempoh yang sama melalui pusingan semula pasaran kerja secara semula jadi.

```
Kadar deadweight = 15%
Penempatan tambahan bersih = 200 × (1 − 0.15) = 170
Kos sebenar bagi setiap penempatan tambahan = £600,000 / 170 ≈ £3,529
```

Angka kos bagi setiap penempatan secara kasar (£3,000) memperkecilkan kos sebenar sumbangan tambahan badan
amal itu sebanyak kira-kira 15%.

## Kaitan dengan kejuruteraan perisian

Additionality dan deadweight penting secara langsung bagi sesiapa yang membina perisian pengukuran impak
atau pengurusan geran untuk sektor awam atau sosial:

- Sistem pelaporan hasil harus menangkap kumpulan perbandingan atau garis dasar mengikut reka bentuk, bukan
  sekadar hasil peserta — memasang kontrafaktual selepas sistem dilancarkan tanpanya jauh lebih sukar
  daripada membina penangkapannya sejak awal (lihat [analisis kontrafaktual](../analisis-kontrafaktual/)).
- Papan pemuka yang hanya melaporkan bilangan peserta kasar akan melebih-lebihkan impak secara sistematik
  kepada pembiaya dan badan pengawasan; jika anggaran deadweight wujud (daripada literatur penilaian atau
  kumpulan perbandingan), perisian harus memaparkan angka bersih deadweight di samping angka kasar, bukan
  menggantikannya.
- Ini berkait langsung dengan [pulangan sosial atas pelaburan](../pulangan-sosial-atas-pelaburan/), yang nisbah
  SROI-nya hanya boleh dipercayai setelah deadweight (dan anjakan) ditolak daripada hasil kasar yang
  dituntut — kalkulator SROI yang meninggalkan langkah ini akan menghasilkan nisbah yang digembungkan dan
  tidak tahan penelitian.

## Perangkap

- **Melaporkan hasil kasar seolah-olah semuanya tambahan.** Ini ialah kesilapan pengukuran impak yang paling
  lazim dalam pelaporan geran dan program; sentiasa tanya "adakah ini akan berlaku juga?" sebelum
  menerbitkan angka utama.
- **Menganggap satu peratusan deadweight terpakai di mana-mana.** Deadweight sangat berbeza mengikut sektor,
  populasi dan keadaan ekonomi tempatan; gunakan kumpulan perbandingan atau bukti khusus sektor dan bukannya
  menggunakan semula angka daripada penilaian yang tidak berkaitan.
- **Mengelirukan deadweight dengan anjakan.** Deadweight berkenaan hasil kontrafaktual bagi peserta yang
  sama; anjakan berkenaan kesan ke atas orang atau tempat lain — lihat
  [anjakan dan atribusi](../penyesaran-dan-atribusi/). Mencampuradukkan keduanya membawa kepada
  pengiraan berganda atau pengiraan kurang bagi pelarasan itu.
- **Deadweight yang dilaporkan sendiri oleh peserta.** Bertanya kepada benefisiari "adakah ini akan berlaku
  tanpa bantuan kami?" menghasilkan anggaran deadweight yang rendah secara sistematik (peserta cenderung
  memberi kredit kepada program); kumpulan perbandingan bebas jauh lebih boleh dipercayai.

## Sumber

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020).
  <https://www.gov.uk/government/publications/the-magenta-book>
- HM Treasury / Department for Business, Innovation and Skills, "Additionality Guide: A Standard
  Approach to Assessing the Additional Impact of Interventions" (3rd edition), originally developed
  with English Partnerships and the Housing Corporation.
- European Commission, "Evalsed: The Resource for the Evaluation of Socio-Economic Development" —
  panduan mengenai deadweight, anjakan dan ketirisan dalam penilaian dana struktur.
- National Lottery Community Fund, "Guidance on Outcomes and Impact Reporting." <https://www.tnlcommunityfund.org.uk/>
