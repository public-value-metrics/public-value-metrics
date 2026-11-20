# Pamindhahan lan Atribusi

Pamindhahan (displacement) kedadean nalika manfaat sing katon saka sawijining program dicapai kanthi njupuk aktivitas utawa manfaat saka panggonan liya, dudu nggawe samubarang anyar — kamenanganmu iku kekalahane wong liya. Atribusi yaiku pitakonan sing gegandhengan: sepira akeh asil (outcome) sing diamati bisa diakoni intervensimu kanthi sah, nalika pelaku lan faktor liyane uga nyumbang. Loro-lorone minangka panyesuaian standar ing pedoman evaluasi sektor publik Inggris, bebarengan karo deadweight lan leakage, lan loro-lorone rutin dilewati dening klaim dampak sing katon luwih kuwat tinimbang kasunyatane.

## Kenapa penting

Skema hibah bisnis pemerintah daerah sing mbantu 50 toko pindhah menyang zona regenerasi bisa nglaporake "50 bisnis dibantu, 200 lapangan kerja digawe" — nanging yen bisnis-bisnis kuwi mung pindhah saka dalan pasar tetanggan lan dudu ngembang, lapangan kerja kuwi dipindhahake, dudu digawe, lan dampak bersih ing tingkat kabupaten (utawa wilayah) bisa cedhak karo nol. Magenta Book HM Treasury lan Additionality Guide sing wis suwe nganggep pamindhahan minangka pangurangan sing wajib amarga crita sukses lokal iku umum sanajan ora ngasilake manfaat bersih nasional utawa regional — nilai mung pindhah, asring ngrugekake wilayah utawa pelaku sing kelangan. Pedoman evaluasi structural funds (digunakake kanggo program European Regional Development Fund biyen lan penerus domestike, kayata UK Shared Prosperity Fund) ngresmikake iki ing telung skala spasial: pamindhahan lokal (ing sajrone kutha), pamindhahan regional (ing sajrone wilayah), lan pamindhahan nasional (ing sakabehe Inggris), amarga intervensi bisa nambah (additional) ing sawijining skala nanging mung pamindhahan murni ing skala sing luwih jembar — program lapangan kerja sing narik buruh saka kutha tetanggan iku netral sacara nasional sanajan katon kaya sukses lokal.

Atribusi iku masalah sedulure ing pangiriman sing akeh kemitraan, sing saiki dadi norma ing karya layanan publik sektor sosial lan lintas lembaga. Nalika telung organisasi bareng-bareng nyedhiyakake layanan pencegahan tunawisma, laporan taunan saben organisasi bisa dhewe-dhewe ngaku kredit kanggo pangurangan wong turu ing dalan sing padha — yen dijumlahake saka kabeh laporan, dampak sing diklaim bisa ngluwihi owah-owahan nyata sing diamati, kadhang pirang-pirang kali lipat. Pedoman Magenta Book babagan analisis kontribusi ana khusus amarga atribusi acak marang siji pelaku asring ora mungkin ing pangiriman multi-lembaga, lan wangsulan sing jujur asring "kita nyumbang marang outcome iki" tinimbang "kita nyebabake outcome iki."

## Petungan

Pamindhahan minangka bagean saka urutan dampak bersih standar (deleng
[additionality lan deadweight](../additionality-lan-deadweight-nyingkirake-asil-sing-bakal-kedadéan-senajan-tanpa-program/) kanggo rantai lengkap):

```
Dampak tambahan bersih = Outcome kotor − Deadweight − Pamindhahan − Leakage, × Multiplier

Tingkat pamindhahan = manfaat/aktivitas sing dialihake saka panggonan liya
                       / total manfaat/aktivitas kotor sing diamati
```

Atribusi, ing ngendi sawetara pelaku nyumbang marang siji outcome, biasane dituduhake minangka bagian kontribusi tinimbang persentase sing tepat, amarga biasane ora bisa diukur kanthi ketat kaya pamindhahan:

```
Bagian sing bisa diatribusikake ≈ f(kekuwatan kontribusi kausal, kontribusi pelaku liya,
                                    faktor eksternal/kontekstual)

Dampak sing diklaim ora kena ngluwihi:
  Σ (bagian atribusi saben mitra) ≤ 100% saka total outcome sing diamati
```

## Conto petungan

**Hibah regenerasi**: skema hibah dalan pasar saka sawijining dewan nglaporake 200 lapangan kerja ritel anyar digawe ing zona sing didanai. Riset survei lanjutan nemokake yen 60 saka lapangan kerja kuwi asale saka bisnis sing pindhah saka dalan pasar tetanggan sing ora didanai ing kabupaten sing padha, lan 30 liyane saka jaringan toko nasional sing mbukak cabang sing bakal mbukak ing sawijining panggonan ing wilayah kuwi apa wae ana hibah utawa ora.

```
Lapangan kerja kotor sing diklaim = 200
Pamindhahan lokal = 60 (pindhah ing sajrone kabupaten)
Pamindhahan regional = 30 (bakal mbukak ing wilayah kuwi tanpa hibah)

Lapangan kerja tambahan bersih (tingkat kabupaten) = 200 − 60 = 140
Lapangan kerja tambahan bersih (tingkat regional) = 200 − 60 − 30 = 110
```

Judhul sing jujur gumantung marang skala geografis sing dadi perhatian pendana — business case Treasury sing dievaluasi ing tingkat nasional utawa regional kudu nggunakake 110, dudu 140 tingkat kabupaten, lan mesthi ora 200 mentah.

**Layanan tunawisma multi-lembaga**: telung organisasi mitra (dewan kota, amal perumahan, lan trust kesehatan) bareng-bareng nyedhiyakake layanan pangurangan wong turu ing dalan. Wong turu ing dalan ing wilayah kuwi mudhun 30 wong sajrone setaun. Laporan taunan saben organisasi ngaku "kita nyuda wong turu ing dalan 30" — yen dijumlahake, telung laporan ngaku mbantu 90 wong, kaping telu saka pangurangan sing sejatine. Analisis kontribusi sing menehi saben mitra bagean (umpamane 40% dewan, 35% amal, 25% trust kesehatan, adhedhasar peran sing didokumentasi lan penilaian independen) bakal nglaporake 12, 10,5, lan 7,5, sing nek dijumlahake pas dadi 30 sing diamati.

## Gegayutan karo rekayasa piranti lunak

Pamindhahan lan atribusi mbentuk cara sistem pelacakan dampak lan pelaporan outcome kudu dirancang kanggo pangiriman multi-lokasi utawa multi-mitra:

- Lingkup geografis lan organisasi kudu dadi kolom eksplisit lan kelas siji ing dashboard dampak apa wae — angka sing dilaporake "kanggo kabupaten" lan angka sing padha dilaporake "kanggo wilayah" iku angka sing beda, lan sistem sing nyampur loro-lorone bakal ngasilake angka sing ora bisa direkonsiliasi ing tingkat portofolio.
- Nalika sawetara mitra nyedhiyakake bareng, sistem outcome kudu nyathet bagian kontribusi (utawa paling ora menehi tandha atribusi bareng) tinimbang ngeculake modul pelaporan saben mitra ngaku 100% saka outcome bareng — yen ora, rekapitulasi tingkat portofolio bakal nglebokake dampak total, kadhang parah banget.
- Iki gegandhengan karo [social return on investment](../social-return-on-investment-ngukur-bali-modal-sosial-sing-wis-disesuaikan-karo-deadweight-lan-atribusi/) lan [grant outcomes reporting](../pelaporan-outcome-hibah/): petungan SROI utawa IRIS+ sing ngabaikan pamindhahan utawa ngatribusikake outcome bareng kanthi berlebihan bakal ngasilake rasio sing digelembungake lan ora bakal tahan audit utawa replikasi.

## Jebakan

- **Nglaporake sukses lokal tanpa mriksa pamindhahan sing luwih jembar.** Program bisa katon sukses banget ing skala pelaporan paling cilik nanging netral utawa malah negatif ing skala sing luwih jembar; tansah nyebutake skala geografis sing dadi dasar angka bersih.
- **Ngeculake saben mitra ing pangiriman bareng ngaku kredit kebak.** Yen bagian kontribusi ora disepakati lan didokumentasi, pelaporan rekapitulasi antar mitra bakal nglebokake dampak total — priksa yen klaim tingkat mitra yen dijumlahake ora ngluwihi total sing diamati.
- **Nganggep atribusi minangka persentase sing tepat, padahal iku sejatine pertimbangan.** Analisis kontribusi, beda karo kontrafaktual acak, ngasilake prakiraan sing bisa dipertahankan, dudu kasunyatan sing diukur; sajikake kanthi ketidakpastian sing pantes tinimbang presisi palsu.
- **Ngabaikake pamindhahan ing intervensi sing madhep pasar.** Dhukungan bisnis, skema ketenagakerjaan, lan regenerasi adhedhasar panggonan iku kategori klasik kanthi pamindhahan dhuwur; anggep pamriksan pamindhahan minangka wajib kanggo kabeh iki, dudu pilihan.

## Sumber

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020), including
  guidance on contribution analysis. <https://www.gov.uk/government/publications/the-magenta-book>
- HM Treasury / Department for Business, Innovation and Skills, "Additionality Guide: A Standard
  Approach to Assessing the Additional Impact of Interventions" (3rd edition).
- European Commission, "Evalsed: The Resource for the Evaluation of Socio-Economic Development" —
  guidance on local, regional, and national displacement scales.
- Mayne J. "Contribution Analysis: An Approach to Exploring Cause and Effect." ILAC Brief No. 16,
  2008.
