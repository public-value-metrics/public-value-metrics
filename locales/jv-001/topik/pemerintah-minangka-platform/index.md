# Pemerintah minangka Platform

Government as a Platform (GaaP) yaiku strategi mbangun komponen bareng lan bisa dienggo maneh — layanan notifikasi, layanan pembayaran, layanan identitas — sepisan wae, sacara terpusat, supaya atusan layanan pemerintah individu nggunakake iku tinimbang saben-saben mbangun dhewe. Iki mbingkai ulang infrastruktur digital publik minangka masalah ekonomi platform: nilai ora ana ing integrasi siji-sijine, nanging ing biaya marjinal tim *sabanjure* sing ngadopsi sing nyedhaki nol.

## Kenapa penting

GDS nyetel strategi iki kanthi resmi ing publikasi "Government as a Platform" 2015, kanthi argumen yen pemerintah wis mbangun kapabilitas sing padha — nampa pembayaran, notifikasi pangguna, verifikasi identitas, panelusuran alamat — kapisah ing layanan sawise layanan, saben-saben nanggung pengadaan, penilaian keamanan, lan beban dhukungan terus-terusan dhewe. Alternatife yaiku sawetara platform bareng sing sithik, dibangun kanthi standar dhuwur sepisan lan dienggo maneh ing endi-endi: GOV.UK Notify kanggo ngirim email, pesen teks lan layang, GOV.UK Pay kanggo nampa pembayaran online, lan GOV.UK One Login (penerus program identitas GOV.UK Verify sadurunge) kanggo verifikasi identitas. Skala sing wis dicapai platform-platform iki yaiku bukti paling jelas yen strategi iki berhasil: GOV.UK Pay wis ngolah luwih saka £10 milyar transaksi ing watara 1.800 layanan individu — lan nalika butuh kira-kira patang taun kanggo ngolah £1 milyar sing pisanan, saiki ngolah semono ing watara limang sasi — dene GOV.UK Notify wis ngirim luwih saka 9 milyar pesen atas jenenge luwih saka 1.500 organisasi pemerintah. Saben layanan sing ngadopsi kuwi ora kudu mbangun, ngamanake lan ngopeni gateway pembayaran utawa pipeline pesen dhewe.

## Petungan

```
Biaya mbangun saben layanan (tanpa platform) = N layanan × biaya mbangun,
  nilai-keamanan, lan ngoperasikake siji sistem pembayaran/notifikasi/identitas

Biaya platform = biaya mbangun platform tetep
               + biaya marjinal saben layanan sing ngadopsi (integrasi,
                 konfigurasi, dhukungan tim platform terus-terusan)

Pangguna maneh impas yen:
  biaya mbangun platform < N × (biaya mbangun saben layanan − biaya
  integrasi marjinal)

Kanggo platform sing wis mateng, biaya marjinal saben pengadopsi tambahan
nyedhaki mung biaya transaksi/pesen — biaya tetep diamortisasi ing sakabehe
estate pemerintah, dudu anggaran siji departemen, mula komponen GaaP
biasane didanai sacara terpusat tinimbang ditagihake kanthi pemulihan
biaya kebak marang pengadopsi awal.
```

## Conto petungan

**Pemerintah daerah ngadopsi GOV.UK Pay tinimbang mbangun gateway pembayaran**:

```
Prakiraan mbangun dhewe:
  Karya kepatuhan PCI-DSS + integrasi + pangopènan terus-terusan
  ≈ £85.000 mbangun + £22.000/taun pangopènan

Adopsi GOV.UK Pay:
  Upaya integrasi ≈ £12.000 (wektu pangembang)
  Biaya transaksi: pembayaran kertu pemerintah-menyang-warga biasane
  ditagih persentase cilik + biaya tetep saben transaksi, ora ana
  beban PCI-DSS kapisah sing ditanggung dewan
  ≈ £12.000 sepisan, biaya terus-terusan variabel miturut volume, dudu tetep

Ngirit taun pisanan ≈ £85.000 − £12.000 = £73.000, sadurunge ngitung
£22.000/taun pangopènan sing disingkiri lan risiko kepatuhan sing disingkiri
saka nyimpen data kertu ing sistem sing dijalanake dewan babar pisan —
kategori kaping pindho iki yaiku nilai keamanan sing dibahas ing
public-sector-cybersecurity-value.
```

Skalakake £73.000 kuwi ing watara 1.800 layanan sing saiki nggunakake GOV.UK Pay lan biaya mbangun agregat sing disingkiri ing sakabehe pemerintah ana ing atusan yuta — ekonomi platform, dudu integrasi siji-sijine, iku panggonan ing ngendi nilai strategi bener-bener manggon.

## Gegayutan karo rekayasa piranti lunak

Government as a Platform iku argumen langsung kanggo [build-vs-buy-in-government](../bangun-utawa-tuku-ing-pamaréntahan-mbandhingaké-pangembangan-khusus-karo-pengadaan-komersial/): nalika komponen bareng, wis dinilai, lan dikelola apik ana, mbangun sing sepadan khusus arang banget dadi pilihan [value-for-money](../value-for-money-ngukur-apa-belanja-publik-menehi-imbangan-biaya-lan-manfaat-sing-paling-apik/) sing luwih apik, lan gagal ing poin 13 [digital-service-standard](../standar-layanan-digital/) ("nggunakake lan nyumbang marang standar terbuka, komponen umum lan pola") meh miturut definisi. Iki uga ngowahi wujud [total-cost-of-ownership-in-government-it](../total-biaya-kepemilikan-ing-it-pamaréntah/): adopsi platform nuker baris modal lan pangopènan gedhe karo biaya operasional sing luwih cilik lan gegandhengan panggunaan, sing luwih gampang diprakirakake lan luwih gampang didanani yen layanan dipensiunake. Panggunaan maneh komponen kanthi terbuka nduwe sedulur ing [open-data-value](../nilai-data-terbuka/) — loro-lorone strategi kanggo nganggep samubarang sing diasilake pemerintah sepisan minangka infrastruktur bareng tinimbang aset departemen.

## Jebakan

- **Mbangun maneh ing bayang-bayang (shadow rebuilding)**: tim meneng-menengan mbangun integrasi pembayaran utawa notifikasi dhewe amarga proses onboarding platform luwih alon tinimbang nglakoni dhewe — masalah gesekan tata kelola, dudu teknologi, lan meneng-menengan nggerus ekonomi panggunaan maneh sing dadi dhasar kabeh strategi.
- **Kurang ndanai tim platform relatif marang nilai sing digawe**: nilai ngumpul ing departemen pangguna dene biaya manggon ing tim platform, nggawe risiko kurang investasi kronis kajaba pendanaan dipusatake lan dilindhungi — versi tragedi barang umum.
- **Ngukur sukses platform mung saka panggunaan**: angka adopsi (layanan sing onboarding, pesen sing dikirim) iku indikator awal, dudu bukti nilai; ujian sing sejati yaiku petungan biaya mbangun lan risiko sing disingkiri ing ndhuwur.
- **Nganggep "platform" padha karo "monolit"**: komponen GaaP sukses amarga saben-saben nindakake siji perkara kanthi apik nganggo antarmuka sempit lan stabil — nggabung kapabilitas sing ora gegandhengan dadi siji "platform" nggawe maneh masalah mbangun khusus ing skala beda.

## Sumber

- Government Digital Service, Government as a Platform. <https://www.gov.uk/government/publications/government-as-a-platform>
- GOV.UK Notify. <https://www.notifications.service.gov.uk/>
- Government Digital Service blog, "GOV.UK Pay at 10: how it started and how it's going". <https://gds.blog.gov.uk/2026/09/02/gov-uk-pay-at-10-how-it-started-and-how-its-going/>
