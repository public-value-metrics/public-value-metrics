# Pelaporan Outcome Hibah (IRIS+)

Pelaporan outcome hibah yaiku praktik ing ngendi penerima hibah nglaporake metrik outcome sing standar lan bisa dibandhingake marang pendana — beda karo saben pendana nggawe cithakan pelaporan khusus dhewe. IRIS+, sing dikelola Global Impact Investing Network (GIIN), yaiku standar sing paling akeh diadopsi: katalog metrik kinerja sosial, lingkungan, lan keuangan sing wis ditetepake sing dibutuhake utawa disaranake investor dampak lan, saya akeh, yayasan pemberi hibah marang penerima hibah.

## Kenapa penting

Sadurunge pelaporan standar, saben yayasan njaluk penerima hibah nyetel indikator sing beda kanthi format beda, lan amal ukuran menengah kanthi sepuluh pendana bisa nglakokake sepuluh proses pelaporan paralel kanggo karya sing tumpang tindih — pendorong beban pelaporan sing wis didokumentasi apik sing arep dikurangi standardisasi outcome hibah. IRIS+ ngatasi iki kanthi menehi pendana lan penerima hibah kosakata bareng: Core Metrics Sets sing dikelompokake miturut tema (contone omah terjangkau, akses energi resik, inklusi keuangan), saben metrik ditetepake cukup tepat supaya "lapangan kerja sing digawe" utawa "kluwarga sing dilayani" tegese padha sapa wae sing nglaporake, lan diselarasake karo Tujuan Pembangunan Berkelanjutan PBB (SDG) supaya pendana bisa ngumpulake data tingkat penerima hibah dadi narasi SDG tingkat portofolio. GIIN nglaporake yen metrik IRIS digunakake dening kira-kira setengah investor dampak lan sapérangan gedhe manajer dana, bank, lan lembaga keuangan pembangunan sing aktif ing bidang iki.

Standardisasi paling penting ing ngendi gegayutan karo [outcome vs output](../outcome-vs-output-bedane-asil-langsung-lan-owah-owahan-nyata/): IRIS+ ngarahake pelaporan menyang metrik outcome lan dampak sing ditetepake tinimbang apa wae sing kebeneran dicathet sistem manajemen kasus penerima hibah, sing persis jurang sing diterangake [cost per outcome](../biaya-saben-outcome-ngukur-biaya-kanggo-owah-owahan-sing-tenan-kedadéan/) versus [cost per beneficiary](../biaya-saben-panampa-manfaat-ngukur-jangkauan-dudu-owah-owahan/).

## Petungan

Pelaporan outcome hibah iku kerangka lan proses, dudu rumus:

```
1. Pendana milih Core Metrics Set sing relevan karo tema hibah
   (contone IRIS+ "Financial Inclusion" utawa "Sustainable Agriculture")
2. Saben metrik nduwe definisi, unit, lan cara itungan tetep
   sing diterbitake GIIN — dudu digawe saben pendana
3. Penerima hibah nglaporake marang definisi metrik sing padha ing kabeh
   pendana sing nggunakake standar kasebut, nyuda upaya pelaporan dobel
4. Pendana ngagregasi metrik tingkat penerima hibah dadi pelaporan tingkat
   portofolio, bisa dibandhingake taun-taun lan antar penerima hibah
   nggunakake metrik sing padha
```

Kauntungan efisiensi iku kombinatorial: ngstandarisasi N pendana × M penerima hibah menyang siji kosakata bareng ngowahi N×M hubungan pelaporan khusus dadi kira-kira N+M pemetaan marang siji standar.

## Conto petungan

**Penerima hibah kanthi telung pendana, sadurunge standardisasi**: nglaporake "wong sing dilayani" marang Pendana 1 nganggo definisi headcount, "beneficiary sing dijangkau" marang Pendana 2 nganggo definisi kluwarga, lan "individu sing kena dampak" marang Pendana 3 nganggo definisi episode layanan (dadi siji wong sing teka kaping pindho diitung kaping pindho). Telung laporan, telung angka, ora ana sing bisa dibandhingake, lan ora ana sing bisa dibandhingake karo angka penerima hibah liyane sanajan ing portofolio pendana sing padha.

**Penerima hibah sing padha miturut IRIS+**: nglaporake marang metrik individu-sing-dijangkau IRIS+ sing ditetepake bebarengan karo metrik outcome sing ditetepake saka Core Metrics Set sing relevan, nggunakake metodologi itungan GIIN sing diterbitake kanggo loro-lorone. Kabeh telung pendana saiki nampa angka sing padha, diitung kanthi cara sing padha, lan bisa mbandhingake cost per unit sing ditetepake IRIS+ saka penerima hibah iki karo penerima hibah liyane ing portofolio nganggo metrik sing identik — setara, ing skala infrastruktur pelaporan, karo nduwe [basis data unit cost](../basis-data-biaya-satuan-proksi-keuangan-sing-wis-diteliti-kanggo-outcome-sosial/) bareng.

## Gegayutan karo rekayasa piranti lunak

Platform manajemen hibah kudu nganggep identifier metrik IRIS+ minangka foreign key, dudu teks bebas: nyimpen kode metrik sing diterbitake bebarengan karo nilai sing dilaporake penerima hibah (tinimbang kolom sing digawe lokal kanthi jeneng "beneficiaries") yaiku sing ndadekake agregasi lintas pendana lan lintas portofolio bisa mengko tanpa proyek pembersihan data. Ing ngendi platform kudu ndhukung pendana sing durung ngadopsi IRIS+, desain pragmatis yaiku ngidini metrik lokal dipetakake menyang definisi IRIS+ sing paling cedhak tinimbang meksa saben pendana menyang standar langsung — kemampuan dibandhingake saya apik kanthi bertahap nalika luwih akeh graf dipetakake marang identifier bareng. Deleng topik sedulur [cost per outcome](../biaya-saben-outcome-ngukur-biaya-kanggo-owah-owahan-sing-tenan-kedadéan/) kanggo apa sing kudu diitung nganggo angka sing dilaporake sawise dikumpulake.

## Jebakan

- **Nganggep adopsi IRIS+ minangka kemampuan dibandhingake otomatis.** Rong penerima hibah bisa loro-lorone nglaporake marang metrik IRIS+ sing padha lan isih ora bisa dibandhingake yen kualitas data dhasar utawa asumsi kontrafaktual beda; standar nemtokake definisi, dudu ketegasan pangukuran.
- **Metrik "selaras IRIS" sing digawe pendana.** Metrik sing mung diilhami basa IRIS+ nanging dudu definisi sing diterbitake nyata ngenalake maneh fragmentasi sing arep dirampungake standar.
- **Kesel pelaporan saka pilihan sing kakehan.** Mbutuhake penerima hibah nglaporake marang sakabehe Core Metrics Set nalika mung rong utawa telung metrik sing relevan kanggo keputusan nggawe maneh masalah beban ing bungkus standar.
- **Ora ana metrik outcome babar pisan.** IRIS+ kalebu akeh metrik output murni (contone cacah wong sing dilayani); milih mung iku, lan ora ana metrik tingkat outcome, ngasilake pelaporan wujud [cost-per-beneficiary](../biaya-saben-panampa-manfaat-ngukur-jangkauan-dudu-owah-owahan/) ing label pelaporan outcome.

## Sumber

- GIIN, IRIS+ system. <https://iris.thegiin.org/>
- GIIN, IRIS+ Catalog of Metrics. <https://iris.thegiin.org/metrics/>
- GIIN, About IRIS+. <https://iris.thegiin.org/about/>
