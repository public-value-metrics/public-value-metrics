# Valuasi Preferensi sing Kasingkap (Revealed Preference Valuation)

Metode preferensi sing kasingkap (revealed preference) nyimpulake nilai barang non-pasar saka prilaku sing bisa diamati ing pasar sing gegandhengan, tinimbang takon langsung marang wong. Hedonic pricing lan metode biaya perjalanan (travel-cost) yaiku rong teknik pekarya utama: loro-lorone diwiwiti saka transaksi nyata lan nurunake rega implisit kanggo barang sing ora tau didol langsung.

## Kenapa penting

Ing ngendi metode [preferensi sing dinyatakake](../penilaian-preferensi-sing-dinyatakaké-nakokaké-wong-sepira-gelem-mbayar/) ngajokake pitakonan hipotetis, metode preferensi sing kasingkap ngamati apa sing bener-bener dibayar wong, sing dianggep Green Book umume minangka bukti sing luwih kredibel, kabeh liyane padha, amarga ora kena bias hipotetis: responden ing studi rega omah hedonic bener-bener mbayar premium utawa diskon sing diukur (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>, Annex 2). Hedonic pricing mecah rega pasar, biasane rega omah, dadi rega implisit kanggo saben atribut barang, ngidini analis ngisolasi, contone, premium rega sing bener-bener dibayar rumah tangga kanggo manggon ing panggonan sing luwih tenang utawa kanthi kualitas hawa sing luwih apik, ngendhalekake sacara statistik kabeh atribut liyane sing uga mengaruhi rega omah (ukuran, lokasi, wilayah sekolah). Metode biaya perjalanan nindakake perkara analog kanggo situs rekreasi tanpa biaya mlebu: wektu lan dhuwit sing dibelanjakake wong kanggo lelungan menyang situs ngungkapake batas ngisor apa regane situs kuwi kanggo wong-wong mau, amarga ora ana sing nanggung biaya sing ngluwihi regane kunjungan kuwi kanggo dheweke.

Loro metode nuduhake watesan struktural: mung bisa menehi nilai apa sing kalebu ing transaksi pasar sing wis ana. Rame cedhak landasan pacu katon ing rega omah amarga wong sing peduli marang rame milih omah sing luwih tenang; nilai eksistensi spesies sing ora ana wong sing ngunjungi utawa manggon cedhak ora katon ing transaksi apa wae, yaiku jurang sing ana kanggo diisi dening metode [preferensi sing dinyatakake](../penilaian-preferensi-sing-dinyatakaké-nakokaké-wong-sepira-gelem-mbayar/).

## Petungan

```
Hedonic pricing:
  Rega omah = f(atribut struktural, atribut lokasi,
                 atribut lingkungan sing dikarepake, ...)
  Prakira liwat regresi; koefisien ing atribut lingkungan
  (kabeh liyane konstan) yaiku rega implisite.

  Rega implisit atribut X = ∂(Rega omah) / ∂X

Metode biaya perjalanan:
  Tingkat kunjungan (kunjungan per kapita saka zona i) = f(biaya perjalanan saka zona i,
                 situs pengganti, kontrol sosio-ekonomi)
  Prakira kurva panjaluk kunjungan minangka fungsi biaya perjalanan.
  Surplus konsumen = area ing sangisoring kurva panjaluk sing diprakira
                    = nilai situs kanggo para pengunjung
```

Loro metode mbutuhake set kontrol sing sehat sacara statistik: ngilangi atribut sing ngelirukake (hedonic) utawa situs pengganti sing cedhak (biaya perjalanan) ngbias rega implisit ing arah sing ora tansah jelas ing wiwitan, sebabe Annex 2 Green Book mbutuhake spesifikasi regresi lan kontrol dilaporake, dudu mung koefisien judhul.

## Conto petungan

**Pamarentah nasional**: metodologi rega bayangan karbon Green Book dhewe sebagian narik bukti hedonic, nanging kasus ilustratif sing luwih prasaja yaiku rame pesawat. Studi hedonic sing meregresi rega adol omah ing wilayah jalur penerbangan marang paparan rame sing dibobot jarak, ngendhalekake ukuran, umur, lan wilayah sekolah, nemokake saben kenaikan 1 desibel paparan rame rata-rata gegandhengan karo penurunan rega omah 0,5%. Kanggo omah umum £280.000 ing wilayah sing kena:

```
Rega implisit saben desibel = £280.000 × 0,5% = £1.400 saben rumah tangga
Rumah tangga sing kena kenaikan 3dB saka landasan pacu anyar = 18.000
Biaya implisit agregat kenaikan rame = £1.400 × 3 × 18.000 = £75,6 yuta
```

Iki biaya sepisan sing dikapitalisasi (kalebu ing rega omah), sing kudu ditindakake appraisal kanthi ati-ati supaya ora dihitung kaping pindho marang aliran biaya gangguan rame taunan sing diprakira kapisah.

**Lembaga amal**: lembaga amal lingkungan nggunakake metode biaya perjalanan kanggo menehi nilai cagar alam tanpa biaya mlebu. Data survei babagan kode pos pengunjung menehi rata-rata biaya perjalanan pulang-pergi (wektu dinilai ing nilai wektu non-kerja sing disaranake Green Book, plus bahan bakar) £14 saben kunjungan, kanthi 40.000 kunjungan saben taun. Kurva panjaluk sing diprakira, tingkat kunjungan mudhun nalika biaya perjalanan saka zona munggah, nuduhake surplus konsumen saben kunjungan, ing ndhuwur £14 sing bener-bener dibelanjakake, kira-kira £9.

```
Total nilai taunan = 40.000 kunjungan × (£14 dibelanjakake + £9 surplus konsumen)
                    = 40.000 × £23 ≈ £920.000/taun
```

Iki ngluwihi banget pendapatan biaya mlebu nol cagar lan menehi para wali amanat lembaga amal angka sing bisa dipertahanake kanggo nilai rekreasi situs nalika ngajokake kasus marang pendana.

## Gegayutan karo rekayasa piranti lunak

Pamikiran preferensi sing kasingkap katon ing analitik produk sektor publik luwih kerep tinimbang sing disadari praktisi: data panggunaan saka layanan digital pamarentah gratis dhewe minangka bukti nilai preferensi sing kasingkap (frekuensi, dawa sesi, lan sing paling ngandhani, pola panggunaan bola-bali versus sepisan, bisa dianalisis kaya model biaya perjalanan nganggep frekuensi kunjungan marang jarak). Ing ngendi layanan duwe pengganti nyata (saluran kertas, telpon), "biaya" sing ditanggung warga kanggo nggunakake saluran digital (wektu, data, piranti) bisa diprakira lan dibandhingake karo panggunaan, mbaleni logika biaya perjalanan langsung. Deleng [standar layanan digital](../standar-layanan-digital/) lan [nilai data terbuka](../nilai-data-terbuka/), sing ngadhepi masalah valuasi persis iki kanggo barang tanpa rega pasar langsung.

## Jebakan

- **Bias variabel sing ditinggal ing model hedonic.** Ngilangi atribut sing gegandhengan (kualitas sekolah sing gegandhengan karo rega omah lan variabel lingkungan sing dikarepake) ngbias prakiraan rega implisit; spesifikasi kudu dilaporake lan diteliti, dudu mung asile.
- **Ora nggatekake situs pengganti ing studi biaya perjalanan.** Nilai kasingkap pengunjung kanggo situs diremehake yen ana pengganti sing luwih cedhak lan ora dikendhalekake; dheweke bisa wae ngunjungi utamane amarga gratis, dudu amarga unik berharga.
- **Nrapake preferensi sing kasingkap menyang barang tanpa gema pasar babar blas.** Nilai eksistensi, nilai opsi, lan nilai warisan ora katon ing transaksi apa wae lan ora bisa dipulihake dening metode hedonic utawa biaya perjalanan; jurang kuwi dadi bagean [valuasi preferensi sing dinyatakake](../penilaian-preferensi-sing-dinyatakaké-nakokaké-wong-sepira-gelem-mbayar/).
- **Ngelirukake nilai sing dikapitalisasi (sepisan) karo aliran taunan.** Efek rega omah hedonic biasane nilai sing dikapitalisasi sepisan; nganggepe minangka aliran manfaat taunan ngembungake appraisal.

## Sumber

- HM Treasury. "The Green Book," Annex 2: valuing non-market impacts.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Department for Transport / Civil Aviation Authority. Aircraft noise valuation studies used in
  airport appraisal. <https://www.gov.uk/guidance/aviation-noise>
- Rosen S. "Hedonic Prices and Implicit Markets: Product Differentiation in Pure Competition."
  Journal of Political Economy, 1974.
- Clawson M, Knetsch JL. "Economics of Outdoor Recreation." Johns Hopkins University Press, 1966
  (origin of the travel-cost method).
