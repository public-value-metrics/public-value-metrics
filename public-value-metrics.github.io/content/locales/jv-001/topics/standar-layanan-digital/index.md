# Standar Layanan Digital

GOV.UK Service Standard yaiku gerbang sing kudu dilewati saben layanan digital pemerintah pusat sadurunge bisa mlaku (go live): 14 poin sing diterbitake, dinilai panel independen ing pungkasan saben fase pangiriman. Iki mekanisme sing ngowahi "gawea layanan publik sing apik" saka slogan dadi keputusan lulus/ora lulus kanthi jejak dokumen, lan yaiku turunan langsung saka mandat "digital by default" ing Government Digital Strategy taun 2012.

## Kenapa penting

Sadurunge Service Standard ana, kegagalan IT pemerintah arang katon nganti peluncuran, lan arang bisa dilacak menyang keputusan sing bisa ditudingake. Government Digital Strategy 2012 nugasake departemen-departemen kanggo ngrancang ulang 25 layanan transaksional sing paling akeh volumene lan ngadhepi publik dadi "digital by default", lan komitmen kasebut didhukung mekanisme kepatuhan: layanan ora bisa mlaku ing GOV.UK tanpa lulus penilaian layanan miturut standar sing nalika iku 26 poin (disederhanakake dadi 18 ing 2019, lan saiki standar 14 poin sing berlaku, nyakup telung klompok: mangerteni kabutuhan pangguna, nyedhiyakake layanan sing apik, lan nggunakake teknologi sing pas). Penilaian layanan iku acara nyata: panel penilai saka GDS utawa departemen mriksa bukti, takon marang tim, lan ngetokake putusan lulus, gagal utawa "ora kapenuhi" kanggo saben poin, sing diterbitake ing kaca penilaian layanan kasebut. Gagal ing penilaian ngalangi layanan pindhah saka beta pribadi menyang beta publik, utawa saka beta menyang live — iki gerbang sing nyata, dudu mung tinjauan.

## Petungan

Service Standard iku kerangka, dudu rumus, nanging fungsine minangka struktur keputusan bertahap (stage-gated):

```
Discovery  → Penilaian Alpha  → Penilaian Beta  → Penilaian Live
             (ora wajib kanggo  (wajib sadurunge   (wajib sadurunge
              kabeh layanan,     peluncuran beta    nyopot tag "beta"
              nanging dianjurake) publik)           lan nutup saluran lawas)

Saben penilaian: bukti + wawancara tim → putusan panel per poin
  Kapenuhi / Kapenuhi sebagian / Ora kapenuhi
Asil sakabehe: Lulus / Lulus kanthi syarat / Gagal (kudu dinilai maneh)

Biaya gagal ≈ biaya siklus sprint sabanjure kanggo mbenerake
              + tundha ing [channel-shift-savings](../penghematan-saka-pamindhahan-saluran-layanan-saka-telpon-lan-loket-menyang-layanan-digital/)
                sing kudune dicapai layanan iki
```

Poin 10 ("nemtokake kaya apa sukses, lan nerbitake data kinerja") yaiku sing nyuplai [cost-per-transaction](../biaya-saben-transaksi-ékonomi-unit-layanan-digital-pamaréntah/) lan [service-standards-and-transaction-metrics](../standar-layanan-lan-metrik-transaksi/) — Standard iki wajibake pangukuran, dudu mung layanane.

## Conto petungan

**Layanan permohonan perumahan pemerintah daerah**: tim dewan kota tekan penilaian beta kanthi layanan sing nyukupi 11 saka 14 poin, nanging gagal ing poin 5 ("pastekake kabeh wong bisa nggunakake layanan") amarga ora ana jalur assisted-digital kanggo pamohon sing ora duwe akses internet, lan gagal ing poin 9 amarga data pribadi kacathet kanthi teks polos ing jejak kesalahan aplikasi.

```
Biaya langsung saka kegagalan:
  Slot penilaian ulang: antri 6–8 minggu kanggo panel sing kasedhiya
  Sprint perbaikan: 2 pangembang × 3 minggu × £550/dina ≈ £34.650
  Desain saluran assisted-digital: 1 peneliti × 2 minggu ≈ £5.000

Biaya tundha: layanan diprakirakake mindhahake 40% saka 18.000
pitakonan perumahan/taun saka telpon £8,50 menyang transaksi digital £0,20
  = 7.200 × (£8,50 − £0,20) = £59.760/taun sing ora kaleksanan, diprorata kanggo
    tundha ≈ 2 sasi ≈ £9.960

Total biaya penilaian sing gagal ≈ £49.610
```

Tujuane petungan iki dudu presisine — nanging nuduhake yen penilaian sing gagal nduwe rega sing nyata lan bisa diitung, lan iku sebabe gerbang iki nduwe wibawa.

## Gegayutan karo rekayasa piranti lunak

Kanggo para insinyur, Standard iki kaya daftar cek arsitektur lan pangiriman, ora kurang saka dokumen kabijakan: poin 11 ("pilih piranti lan teknologi sing pas") lan poin 12 ("gawe kode sumber anyar dadi terbuka") yaiku keputusan rekayasa langsung, lan poin 14 ("operasikake layanan sing andal") mbutuhake SLO lan proses insiden kaya sistem produksi apa wae. Iki kerangka payung kanggo klompok topik iki — [cost-per-transaction](../biaya-saben-transaksi-ékonomi-unit-layanan-digital-pamaréntah/) lan [channel-shift-savings](../penghematan-saka-pamindhahan-saluran-layanan-saka-telpon-lan-loket-menyang-layanan-digital/) yaiku sing arep dilindhungi Standard saka sisi keuangan, [digital-inclusion](../inklusi-digital-mesthekake-digital-by-default-ora-dadi-digital-waé/) yaiku sing dijamin poin 5, lan komponen [government-as-a-platform](../pemerintah-minangka-platform/) (GOV.UK Notify, Pay, One Login) nyukupi poin 13 ("nggunakake lan nyumbang marang standar terbuka, komponen umum lan pola") umume kanthi otomatis. Deleng uga [build-vs-buy-in-government](../bangun-utawa-tuku-ing-pamaréntahan-mbandhingaké-pangembangan-khusus-karo-pengadaan-komersial/) kanggo kepriye poin "piranti sing pas" mlaku ing keputusan pengadaan.

## Jebakan

- **Nganggep penilaian mung kotak centhang kepatuhan ing dina peluncuran**: tim sing nembe maca 14 poin sawetara minggu sadurunge penilaian beta meh mesthi gagal; Standard iki dimaksudake mbentuk keputusan wiwit discovery, dudu mriksa sacara retrospektif.
- **Ngevaluasi prototipe, dudu layanane**: demo sing apik bisa lulus tinjauan sing bakal gagal yen versi live sing inklusif assisted-digital lan dikelola insiden dites — penilai dituntut nyoba celah iki, nanging layanan cilik sing sertifikasi dhewe asring nglewati.
- **Ora ana penilaian ulang sadurunge diskalakake**: layanan sing dinilai ing rollout 5% ora otomatis tetep patuh ing 100% — beban, failure demand, lan pangguna kasus pinggiran kabeh owah.
- **Nyampur Service Standard karo design system**: komponen GOV.UK Design System nyukupi sawetara poin (konsistensi, aksesibilitas) nanging Standard uga nyakup struktur tim, praktik agile, lan etika data — layanan sing tampilane apik isih bisa gagal ing poin 2, 6 utawa 9.

## Sumber

- GOV.UK Service Manual, Service Standard. <https://www.gov.uk/service-manual/service-standard>
- GOV.UK Service Manual, point 14: operate a reliable service. <https://www.gov.uk/service-manual/service-standard/point-14-operate-a-reliable-service>
- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
- GOV.UK Service Manual, service assessments. <https://www.gov.uk/service-manual/service-assessments>
