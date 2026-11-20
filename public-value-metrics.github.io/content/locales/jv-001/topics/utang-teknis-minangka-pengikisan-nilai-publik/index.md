# Utang Teknis minangka Pengikisan Nilai Publik

Utang teknis (technical debt) iku metafora Ward Cunningham taun 1992 kanggo biaya ing mangsa ngarep sing kaimplikasi saka kaputusan coding sing ngetutake kepraktisan ing jaman kepungkur: **pokok** (principal, pagawéan remediasi sing dienggo) lan **bunga** (interest, beban terus-terusan marang pangiriman). Ing sawijining estat IT pamaréntah legacy, bunga kuwi dibayar langsung saka nilai publik — pangiriman owah-owahan statutori sing luwih alon, tingkat kegagalan sing luwih dhuwur ing layanan sing madhep warga, lan cacahé wong sing bisa nyenggol sistem kanthi aman saya sithik.

## Kenapa penting

Sistem mainframe lan jaman COBOL legacy ing macem-macem departemen pamaréntah Britania Raya — HMRC lan DWP kalebu sing paling kerep dikutip — nggawa risiko sing wis didokumentasiaké kanthi apik lan saya mundhak sing bola-bali ditandhani déning National Audit Office, kalebu ing laporané *Digital Transformation in Government* (<https://www.nao.org.uk/>): platform tuwa sing larang diowahi, saya angel diamanaké, lan gumantung marang tenaga kerja spesialis sing pensiun luwih cepet tinimbang diganti. Béda karo backlog sektor swasta, utang iki ana langsung antarané warga lan hak statutoriné — mesin petungan tunjangan sing ora bisa diowahi kanthi aman iku kendala pangiriman kabijakan, dudu mung ora nyamanaké rekayasa. Wiwitan maneh program IT Universal Credit ing 2013, nalika National Audit Office nemokaké yèn pambangunan asli ora bakal ngirim value for money lan bagéan gedhé aset piranti lunak kudu dihapus, iku conto kanonik utang teknis sing ora diregani sing kekejar program publik sing urip lan katon ing tingkat menteri.

## Petungan

```
Pokok SQALE = Σ saka pelanggaran (wektu remediasi) × tarif biaya developer
Rasio utang teknis (TDR) = biaya remediasi / biaya pembangunan ulang × 100
                    (tingkat SonarQube: A ≤5%, B ≤10%, C ≤20%, D ≤50%)

Bunga (angka sing mbenerake pelunasan):
  bunga/taun = Δ kecepatan pangiriman × nilai saben satuan kecepatan
             + Δ tingkat insiden sing madhep warga × biaya saben insiden
             + premi kaprigelan spesialis × cacahé personel sing kena
Kasus pelunasan = PV(bunga sing dihindari sajrone horizon) − biaya remediasi
               (didiskonto ing tingkat diskonto sosial Green Book, deleng
               social-discount-rate.md)
```

Pokok nyatakaké kewajiban; bunga iku sing nggawé kasus investasi marang komite akun publik.

## Conto petungan

Mesin pangolahan klaim 250.000 baris sing ditulis nganggo 4GL legacy. Nganggo patokan CAST Appmarq kira-kira $3,61 pokok utang teknis saben baris kode (≈£2,85 ing konversi lumrah):

```
Pokok ≈ 250.000 × £2,85 ≈ £712.500
TDR ≈ 16% (tingkat C)
```

Bunga sing diukur: departemen nahan telung kontraktor spesialis kanthi premi tarif harian 40% ngluwihi tarif insinyur senior standar amarga kaprigelan internal wis ilang — tambahan £180.000/taun ing tim enem wong. Sistem uga nyebabaké patang pemadaman pangolahan utama/taun, saben-saben nundha kaputusan kanggo kira-kira 5.000 pangaju lan ngalihaké wong-wong kuwi menyang pusat kontak ing kira-kira £25/telepon:

```
Bunga ≈ £180.000 (premi kaprigelan)
      + 4 × 5.000 × £25 = £500.000 (biaya kontak sing dialihaké)
      ≈ £680.000/taun
```

Remediasi sing ditarget kanggo modul sing kinerjané paling elek biayané £1.200.000 lan dimodelaké bisa nyuda bunga 70%:

```
Pengurangan bunga = 0,70 × 680.000 = £476.000/taun
Payback ≈ 1.200.000 / 476.000 ≈ 2,5 taun
```

Penargetan iku penting: remediasi kode sing arang disenggol ora ngasilaké apa-apa, amarga bunga numpuk ing panggonan sing frekuensi owah-owahan lan kapadhetan utang loro-lorone paling dhuwur.

## Gegayutan karo rekayasa piranti lunak

Pambingkai nilai publik sing munggahaké kasus utang teknis ngluwihi "kodhéné lawas": nyatakaké estat legacy minangka inventaris panggonan kapasitas pangiriman sing ilang kasebar, lan sambungna kanthi gamblang menyang [total biaya kepemilikan](../total-biaya-kepemilikan-ing-it-pamaréntah/), amarga bunga iku biaya operasional sing kalebu ing baris TCO senajan keuangan durung tau nyuwun. Sistem sing kebak utang uga nggawa pajanan [keamanan siber](../nilai-keamanan-siber-sektor-publik/) sing ora proporsional, amarga irama patching lan kapadhetan utang saling gegayutan — sistem legacy sing ora bisa di-patch iku utang teknis sing bungané dibayar nganggo risiko insiden, dudu pound. Lan saben trade-off remediasi-lawan-fitur dhéwé minangka kaputusan [biaya tundha](../biaya-tundha-ing-program-publik-nilai-publik-sing-ilang-saben-unit-wektu/): nglunasi utang nundha owah-owahan statutori sabanjuré, sing duwé CoD dhéwé sing kudu ditimbang mungsuh bunga sing diirit.

## Jebakan

- **Laporan mung pokok**: estimasi remediasi sing gedhé lan medeni tanpa angka bunga ora mbenerake apa-apa marang pangesah belanja.
- **Angka utang sing digawé piranti dianggep harfiah**: pemindai gaya SQALE ngétung pelanggaran aturan; padha ora nangkep jenis utang sing larang — kaputusan arsitektur lan aturan bisnis legacy sing ora didokumentasiaké — nalika nandhani perkara sepélé.
- **"Nulis ulang ngindhari kabèh iki"**: program panggantos kudu lolos disiplin sing padha karo business case liyané — biaya kontrafaktual, kemungkinan sukses, lan diskonto — dudu pangecualian saka iku, kaya sing dituduhaké wiwitan maneh Universal Credit 2013.
- **Utopianisme utang-nol**: tingkat utang optimal dudu nol; utang iku leverage sing nuku pangiriman luwih awal. Pitakonan sing urip tansah tingkat bunga, dudu apa utang ana utawa ora.

## Sumber

- Cunningham W, "The WyCash Portfolio Management System", OOPSLA experience report, 1992.
- CAST, technical debt estimation (Appmarq benchmark). <https://www.castsoftware.com/glossary/technical-debt-estimation>
- National Audit Office, *Digital Transformation in Government* and reports on Universal Credit. <https://www.nao.org.uk/>
