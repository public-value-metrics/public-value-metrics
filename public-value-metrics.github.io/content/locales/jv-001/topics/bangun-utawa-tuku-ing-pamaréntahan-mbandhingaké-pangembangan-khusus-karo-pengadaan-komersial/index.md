# Bangun utawa Tuku ing Pamaréntahan: Mbandhingaké Pangembangan Khusus karo Pengadaan Komersial

Build-vs-buy (bangun lawan tuku) iku pambandhingan terstruktur lan disesuaikan risiko antara pangembangan khusus lan akuisisi komersial utawa komoditas, dibandhingaké miturut [total biaya kepemilikan](../total-biaya-kepemilikan-ing-it-pamaréntah/) sing didiskonto, wektu-menyang-nilai, lan risiko. Pamaréntah sacara struktural iku sektor sing tuku — Technology Code of Practice nemtokaké praduga marang solusi komoditas lan cloud — nanging tim rékayasa ing njero departemen isih cenderung mbangun, amarga alesan sing padha karo para pembangun ing ngendi waé.

## Kenapa penting

Technology Code of Practice saka Government Digital Service (<https://www.gov.uk/guidance/the-technology-code-of-practice>) lan pandhuan Service Manual sing gandhèng bab mutusaké bangun utawa tuku meksa departemen mbenerake pangembangan pesenan nglawan praduga yèn kapabilitas komoditas kudu dituku, dudu dibangun, lan mung kapabilitas sing tenan anyar lan mbédakaké misi sing pantes nganggo kode khusus. Pandhuan tambahan optimism bias HM Treasury kanggo Green Book, sing dijupuk saka tinjauan Mott MacDonald 2002 bab pengadaan publik gedhé, maringi proyek TI kisaran kenaikan paling amba saka kategori apa waé sing dinilai — perkiraan biaya modal dianjurake dinaékaké 10% ing sisih rendah lan nganti 200% ing sisih dhuwur sadurungé dienggo ing appraisal, nggambaraké sepira parahé pembangunan piranti lunak biyèn dicilikaké ing pengadaan publik. Analisis build-vs-buy ana persis kanggo meksa penyesuaian risiko kuwi dadi ana ing meja sadurungé persetujuan, tinimbang ngidinaké muncul minangka panjaluk tambahan anggaran ing taun jalan.

## Petungan

```
Bandhingna ing cakrawala 3–5 taun sing padha, didiskonto nganggo tarif
diskonto sosial Green Book (deleng social-discount-rate.md):

NPV_opsi = PV(manfaat, digeser miturut wektu-menyang-nilai) − PV(TCO)

Penyesuaian risiko (pola optimism bias Green Book):
  biaya bangun × 1,1–3,0        (kisaran kenaikan proyek TI, Mott MacDonald)
  wektu-menyang-nilai bangun + 40–60% (praduga telat penyebaran)
  tuku: tambahaké cek realitas integrasi lan biaya metu kontrak

Panentu keputusan, miturut urutan sing umumé nemtokaké:
  1. diferensiasi — apa kapabilitas iki misiné, utawa mung pipa?
  2. wektu-menyang-nilai × biaya tundha (deleng cost-of-delay-in-public-programmes.md)
  3. total biaya kepemilikan sing disesuaikan risiko
```

## Conto petungan

Sawijining otoritas lokal butuh sistem manajemen kasus kanggo perawatan sosial dewasa. Tuku: SaaS £180.000/taun, tayang ing 4 sasi. Bangun: perkiraan £900.000 plus pangopèni £150.000/taun, tayang ing 14 sasi.

```
Biaya bangun sing disesuaikan risiko = 900.000 × 1,4 = £1.260.000
TCO 5 taun:
  tuku   = 180.000 × 5 = £900.000
  bangun = 1.260.000 + 150.000 × 5 = £2.010.000

Istilah tundha: sistem ngindhari £40.000/sasi ing asesmen dobel;
bangun teka 10 sasi luwih telat tinimbang tuku.
CoD = 10 × 40.000 = £400.000

Pambandhingan efektif: £900.000 (tuku) lawan £2.010.000 + £400.000 = £2.410.000 (bangun)
```

Tuku menang kira-kira £1,5 yuta sajroning limang taun, lan baris tunggal paling gedhé sawisé perkiraan bangun dhéwé yaiku biaya tundha sing ora bakal katon ing pambandhingan capex murni.

## Gegayutan karo rekayasa piranti lunak

Disiplin saka analisis iki sing langsung pindhah menyang praktik pangiriman: **penyesuaian risiko adhedhasar prior** — kenaikan Mott MacDonald iku padhané optimism bias Green Book ing piranti lunak sing ditrapaké sacara mekanis, mula tim kudu mbantah pengecualian saka iku, dudu nganggep perkiraané iku pengecualian; **kejujuran pembanding** — alternatif saka mbangun iku opsi tuku paling apik sing ana, dudu "ora ana apa-apa", sing langsung gandhèng karo [biaya kesempatan ing belanja publik](../biaya-kesempatan-ing-belanja-publik/); lan **pambandhingan TCO jujur** — saben usulan bangun kudu dibandhingaké karo [total biaya kepemilikan](../total-biaya-kepemilikan-ing-it-pamaréntah/) lengkap opsi tuku, dudu rega dhaptaré. Yèn bangun tenan menang, [biaya tundha](../biaya-tundha-ing-program-publik-nilai-publik-sing-ilang-saben-unit-wektu/) saka tambahan wektu bangun kudu dihargai kanthi gamblang ing business case, dudu ditinggal minangka asumsi ora diucapaké yèn wektu ora penting.

## Jebakan

- **Mbandhingaké rega dhaptar vendor karo perkiraan bangun sing ora disesuaikan risiko**: iki ngalem bangun kaping pindho, sapisan ing biaya lan sapisan ing jadwal.
- **Tenaga kerja internal sing dihargai nol**: wektu rékayasa pegawai negeri dianggep "gratis" amarga wis ana ing anggaran jumlah staf departemen, sing nyingidaké biaya kesempatan sejatiné marang gawéan liya sing bisa ditindakaké tim kuwi.
- **Lock-in tanpa rega ing loro arah**: biaya metu vendor lan portabilitas data iku nyata, nanging uga bus-factor saka bangunan pesenan lan gumantungé marang njaga tim internal cilik sing angel diganti sajroning umuré.
- **Diferensiasi misi diklaim kanggo pipa**: "iki inti kanggo kita" dipratelakaké bab middleware integrasi utawa panyimpenan dokumen — ujinen apa warga utawa petugas kasus bakal tau nggatèkaké endi sing mlaku ing ngisor.

## Sumber

- Central Digital and Data Office, Technology Code of Practice. <https://www.gov.uk/guidance/the-technology-code-of-practice>
- GOV.UK Service Manual, deciding whether to build or buy technology. <https://www.gov.uk/service-manual>
- HM Treasury, Green Book supplementary guidance on optimism bias. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
