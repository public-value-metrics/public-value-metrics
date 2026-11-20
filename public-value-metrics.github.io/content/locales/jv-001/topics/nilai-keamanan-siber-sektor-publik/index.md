# Nilai Keamanan Siber Sektor Publik (Public Sector Cybersecurity Value)

Nilai keamanan siber sektor publik yaiku disiplin menehi rega marang pangurangan risiko: apa regane nggawe pelanggaran data warga kurang kamungkinane, amarga belanja keamanan ora ngasilake output sing katon nalika mlaku lan ngasilake sing katon banget nalika gagal? Kanggo layanan sing nyekel rekaman tunjangan, data kesehatan, utawa rekaman pajak, sipat "ora katon nalika mlaku" iku persis sebab butuh argumen nilai sing eksplisit, dudu mung centhang kepatuhan.

## Kenapa penting

Cyber Assessment Framework (CAF) saka UK National Cyber Security Centre menehi organisasi sektor publik cara terstruktur kanggo nggawe keamanan dadi disiplin sing bisa dinilai lan adhedhasar outcome, dudu daftar centhang: nemtokake patang tujuan tingkat dhuwur (ngatur risiko keamanan, nglindhungi saka serangan siber, ndeteksi kedadeyan keamanan siber, lan nyuda dampak insiden) sing dipecah dadi outcome kontributor sing bisa dinilai marang pemilik sistem, kanthi semangat sing padha karo poin 9 [digital-service-standard](../standar-layanan-digital/) ("gawe layanan aman sing nglindhungi privasi pangguna"). Apa sing dilindhungi dening penilaian CAF duwe tag rega sing didokumentasi: Cost of a Data Breach Report IBM nglacak rata-rata biaya pelanggaran miturut sektor, lan terus-terusan nemokake sektor publik ing sisih ngisor kisaran dibandhingake keuangan utawa kesehatan (edisi anyar nempatake rata-rata sektor publik kira-kira $2,6-2,9 yuta saben pelanggaran), nanging "luwih murah tinimbang keuangan" ora padha karo "murah", lan pelanggaran pamarentah nanggung biaya sing ora kejangkau kanthi lengkap dening angka laporan: ilange kapercayan warga marang saluran digital, sing nyuda [adopsi digital](../penghematan-saka-pamindhahan-saluran-layanan-saka-telpon-lan-loket-menyang-layanan-digital/) sing didhasari business case pamindhahan saluran, lan biaya politik lan hukum amarga mbukak data sing dipeksa negara marang warga kanggo diwenehake.

## Petungan

Investasi keamanan dinilai kaya belanja pangurangan risiko apa wae: minangka pangurangan kerugian sing diarepake, nganggo identitas manajemen risiko klasik.

```
Annualized Loss Expectancy (ALE) = Single Loss Expectancy (SLE)
                                  × Annualized Rate of Occurrence (ARO)

Nilai kontrol keamanan =
  ALE_sadurunge_kontrol − ALE_sawise_kontrol − biaya taunan kontrol

Kontrol pantes didanai nalika:
  (ALE_sadurunge − ALE_sawise) > biaya taunan kontrol

Penilaian CAF ora langsung ngasilake probabilitas, nanging profil outcome
CAF sawijining layanan (outcome kontributor endi sing "kasembadan",
"sebagian kasembadan", utawa "ora kasembadan") minangka input proksi
sing wajar kanggo ngira ARO; sistem kanthi akses istimewa sing ora diatur
utawa ora ana rencana respons insiden sing wis diuji nduweni ARO realistis
sing luwih dhuwur sacara material tinimbang sing duwe loro-lorone.
```

## Conto petungan

**Sistem manajemen kasus dewan kabupaten sing nyekel rekaman perawatan sosial kanggo 40.000 warga**:

```
Single Loss Expectancy (biaya pelanggaran), nganggo rata-rata sektor publik
saka Cost of a Data Breach Report IBM anyar ≈ £2,1 yuta
(dikonversi, angka urutan-gedhe; tansah etung maneh saka edisi laporan
saiki, aja nggunakake maneh angka tetep)

ARO saiki (akses istimewa ora diatur, ora ana respons insiden sing diuji,
miturut penilaian dhiri CAF internal sing nuduhake pirang-pirang outcome
"ora kasembadan") ≈ dikira 8% saben taun
  ALE_sadurunge = £2,1 yuta × 0,08 = £168.000/taun

Kontrol sing diusulake: manajemen akses istimewa + rencana respons insiden
sing diuji, mindhah outcome CAF sing relevan dadi "kasembadan", dikira
nyuda ARO dadi 3%/taun
  ALE_sawise = £2,1 yuta × 0,03 = £63.000/taun

Biaya taunan kontrol (piranti + proses + pengujian) = £45.000

Nilai kontrol = (168.000 − 63.000) − 45.000 = £60.000/taun
  positif bersih, danai. Petungan iki uga nuduhake yen kontrol bakal
  tetep pantes didanai sanajan biayane meh kaping telu, yaiku jinis
  pemeriksaan sensitivitas sing kudu ngiringi angka ALE apa wae sing
  dibangun ing probabilitas sing dikira.
```

## Gegayutan karo rekayasa piranti lunak

Insinyur nyekel umume tuas ing persamaan ALE: desain kontrol akses, kebersihan dependensi lan patch, jangkauan logging lan deteksi, lan piranti respons insiden kabeh langsung ngobahake istilah ARO, sebabe penilaian CAF diwaca kaya review arsitektur teknis uga audit kebijakan. Iki [utang teknis minangka erosi nilai publik](../utang-teknis-minangka-pengikisan-nilai-publik/) ing wujud paling akut: sistem sing ora dipatch, ora dimonitor, lan kontrol aksese kurang apik yaiku utang sing bunga-ne yaiku risiko buntut, dudu seret sing mantep; lan kudu direkonsiliasi karo [total biaya kepemilikan ing TI pamarentah](../total-biaya-kepemilikan-ing-it-pamaréntah/) supaya belanja keamanan ora dianggep kapisah saka biaya operasional nyata sistem. Iki uga input langsung kanggo penilaian [value for money](../value-for-money-ngukur-apa-belanja-publik-menehi-imbangan-biaya-lan-manfaat-sing-paling-apik/) miturut Green Book: biaya sing disesuaikan risiko iku bagean saka sisih "biaya" ing appraisal pilihan apa wae, dudu pikiran sabanjure sing dipasang ing pungkasan.

## Jebakan

- **Nganggep penilaian dhiri CAF minangka keamanan dhewe.** Penilaian sing wis rampung nggambarake postur keamanan; ora nggawe; nilai ana ing outcome sing digayuh, dudu dokumen.
- **Nggunakake rata-rata biaya pelanggaran global minangka prakiraan lokal tanpa penyesuaian.** Angka IBM iku rata-rata ing sampel gedhe lan macem-macem; single loss expectancy realistis kanggo dewan lokal cilik arang padha karo departemen pamarentah nasional.
- **Ora nggatekake psikologi risiko buntut ing keputusan investasi.** Probabilitas taunan sing kurang ndadekake belanja keamanan gampang ditundha tanpa wates, nganti taun nalika ora kena ditundha; nguji sensitivitas petungan ALE marang kisaran ARO, kaya ing conto petungan, nglawan iki.
- **Mung ngitung biaya pelanggaran gaya IBM, dudu biaya kapercayan.** Pelanggaran sing nyuda kersa warga nggunakake saluran digital ngikis kasus [channel-shift-savings](../penghematan-saka-pamindhahan-saluran-layanan-saka-telpon-lan-loket-menyang-layanan-digital/) sajrone pirang-pirang taun, biaya sing arang kalebu ing prakiraan biaya pelanggaran.

## Sumber

- National Cyber Security Centre, Cyber Assessment Framework. <https://www.ncsc.gov.uk/collection/caf>
- IBM, Cost of a Data Breach Report. <https://www.ibm.com/reports/data-breach>
- GOV.UK Service Manual, service standard, point 9: create a secure service which protects users' privacy. <https://www.gov.uk/service-manual/service-standard/point-9-create-a-secure-service>
