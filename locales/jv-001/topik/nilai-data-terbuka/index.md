# Nilai Data Terbuka (Open Data Value)

Nilai data terbuka yaiku masalah ngira regane data pamarentah lan publik nalika ora ana rega: data kuwi ora didol, mula ora ana baris pendapatan, nanging ngeculake data kuwi (rekaman cuaca, jadwal transportasi, wates kode pos, register perusahaan) jelas ngasilake aktivitas ekonomi lan sosial ing hilir. Menehi nilai kanthi bener penting amarga "gratis dirilis" lan "ora ana regane" loro-lorone salah, lan insinyur piranti lunak sing mutusake arep mbukak API utawa dataset butuh argumen sing luwih apik tinimbang salah siji.

## Kenapa penting

Prakiraan top-down sing paling akeh dikutip asale saka laporan McKinsey Global Institute taun 2013 "Open data: Unlocking innovation and performance with liquid information", sing nemtokake potensi nilai taunan data terbuka ing pitu domain (pendidikan, transportasi, produk konsumen, listrik, minyak lan gas, kesehatan, lan keuangan konsumen) antara $3 triliun nganti $5 triliun saben taun sacara global, liwat mekanisme kalebu transparansi sing saya tambah, nyocokake pasokan karo panjaluk kanthi luwih efisien, lan ngidini produk lan layanan anyar sing dibangun ing data kuwi. Angka kasebut minangka prakiraan skenario, dudu asil sing diukur, lan asring salah dikutip kaya-kaya iku pendapatan sing bisa langsung dijupuk pamarentah, nalika nilai kasebut umume dadi hak pihak katelu (bisnis, peneliti, warga) sing nggunakake data, sing persis dadi tujuan mbukak data tinimbang didol. Open Data Institute Inggris, sing didegake bebarengan dening Sir Tim Berners-Lee lan Sir Nigel Shadbolt ing 2012, wiwit mbangun kumpulan studi kasus bottom-up sing luwih rinci (sektor demi sektor, dataset demi dataset) sing luwih migunani kanggo business case nyata tinimbang angka judhul McKinsey, amarga nuduhake mekanisme panggawe nilai, ora mung ukuran agregate.

## Petungan

Data terbuka ora duwe rega pasar, mula metode valuasi dadi gantine; telung pendekatan sing bola-bali muncul, lan ora ana sing cukup piyambak:

```
1. Metode biaya-sing-dihindari / biaya-panggantos:
   nilai ≈ apa sing bakal dibayar pangguna kanggo ngasilake utawa
   melu lisensi data sing padha dhewe, minangka batas ngisor,
   ora nggatekake nilai sing digawe dening panggunaan sing ora
   dikarepake produsen asline

2. Metode analogi pasar / aktivitas hilir:
   nilai ≈ pendapatan utawa penghematan sing digawe dening bisnis/layanan
   sing dibangun ing data (contone aplikasi satnav sing dibangun ing
   data peta lan lalu lintas terbuka); nangkep aktivitas ekonomi nyata
   nanging angel diatribusi kanthi resik menyang rilis data dhewe
   (deleng additionality-and-deadweight)

3. Metode kontingen/preferensi sing dinyatakake:
   nilai ≈ apa sing diucapake pangguna bakal dibayar, utawa wektu sing
   diucapake bisa dihemat; deleng stated-preference-valuation kanggo
   metode umum lan bias-ipun

Ora ana sing ngasilake angka sing resik kaya rega pasar; business case
data terbuka sing kredibel nindakake triangulasi ing antarane loro utawa
luwih, lan eksplisit babagan mekanisme endi sing nindakake pagaweyan.
```

## Conto petungan

**Rilis data pemetaan/alamat nasional ilustratif** (metodologi miturut studi kasus gaya ODI, angka minangka ilustrasi skala sing biasane ditemokake studi kasebut):

```
Prakiraan biaya-sing-dihindari:
  Bisnis sing yen ora bakal melu lisensi data pencocokan alamat sing
  padha kanthi komersial, kanthi rata-rata biaya lisensi sing dikira
  £4.000/taun, ing antarane kira-kira 15.000 UKM sing saiki nggunakake
  dataset terbuka gratis
  = 15.000 × £4.000 = £60.000.000/taun mung saka biaya lisensi sing dihindari

Prakiraan aktivitas hilir (luwih spekulatif, butuh kontrafaktual):
  Produk rute pangiriman lan logistik anyar sing dibangun ing data terbuka
  sing ora bakal ana, utawa bakal luwih awon sacara material, tanpa data
  kuwi; mbutuhake pambandhingan karo kontrafaktual yen data tetep
  ditutup utawa dilisensi sacara komersial (counterfactual-analysis),
  amarga sawetara aktivitas kuwi bakal kelakon uga nganggo data
  mbayar kanthi rega luwih dhuwur, yaiku deadweight ing pangertèn
  "nilai sing digawe dening mbukak data"

Business case sing bisa dipertahanake nglaporake angka biaya-sing-dihindari
minangka batas ngisor sing kukuh, lan nganggep angka aktivitas hilir
minangka skenario batas ndhuwur, dudu kasunyatan.
```

## Gegayutan karo rekayasa piranti lunak

Kanggo insinyur, pitakonan nilai data terbuka sing praktis biasane luwih sempit tinimbang angka judhul nasional: apa mbukak API utawa dataset khusus iki (tinimbang tetep ing mburi perjanjian mitra) nambah panggunaan maneh cukup kanggo mbenerake biaya lumintu kanggo dokumentasi, versioning, lan ndhukung minangka antarmuka publik? Biaya pangopènan kuwi nyata lan minangka pasangane ekonomi bangun-sepisan-gunakake-kerep saka [pamarentah minangka platform](../pemerintah-minangka-platform/); loro topik iki sedulur cedhak, siji babagan kode lan infrastruktur bareng, sijine babagan data bareng. Klaim nilai data terbuka apa wae kudu dicek karo [additionality-and-deadweight](../additionality-lan-deadweight-nyingkirake-asil-sing-bakal-kedadéan-senajan-tanpa-program/) sadurunge mlebu business case: aktivitas sing bakal kelakon uga nganggo data sing dilisensi sacara komersial dudu nilai sing digawe dening *mbukak* data.

## Jebakan

- **Ngutip angka $3-5 triliun McKinsey minangka khusus Inggris utawa minangka bagean dataset iki.** Iki prakiraan skenario global pitung sektor saka 2013; nggunakake iku minangka pangali pasti kanggo siji dataset nasional salah nggambarake apa angka iku.
- **Ora ana kontrafaktual.** Ngaku kredit kanggo kabeh aktivitas ekonomi hilir sing dibangun ing data terbuka, tanpa takon pira sing bakal kelakon uga nganggo data mbayar utawa dilisensi kanthi rega luwih dhuwur (deleng [additionality-and-deadweight](../additionality-lan-deadweight-nyingkirake-asil-sing-bakal-kedadéan-senajan-tanpa-program/) lan [counterfactual-analysis](../analisis-kontrafaktual-ngira-ira-apa-sing-bakal-kedadéan-tanpa-intervensi/)).
- **Ngelirukake biaya produksi karo nilai sing digawe.** Dataset sing larang dikumpulake ora otomatis migunani yen dirilis, lan sing murah ora otomatis nilai kurang; nilai ngetutake panggunaan hilir, dudu biaya hulu.
- **Ora nggatekake biaya pangopènan lumintu "terbuka".** Nerbitake ekstrak CSV sepisan ora padha karo komitmen nglakokake API terbuka sing didokumentasi, diversi, lan didhukung; kurang pendanaan sing terakhir sawise woro-woro peluncuran minangka mode kegagalan sing umum.

## Sumber

- McKinsey Global Institute, "Open data: Unlocking innovation and performance with liquid information" (2013). <https://www.mckinsey.com/business-functions/mckinsey-digital/our-insights/open-data-unlocking-innovation-and-performance-with-liquid-information>
- Open Data Institute. <https://theodi.org/>
