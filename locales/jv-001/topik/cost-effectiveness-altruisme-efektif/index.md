# Cost-Effectiveness Altruisme Efektif

Nalar cost-effectiveness altruisme efektif (effective altruism, EA) ngurutake intervensi amal miturut jumlah kabecikan — paling kerep dituduhake minangka nyawa sing disilihake, utawa kesehatan sing dipikolehi, saben dolar sing dibelanjakake — lan ngarahake dhuwit menyang intervensi apa wae sing ngasilake kabecikan paling akeh ing sisih marjinal. GiveWell iku praktisi paling berpengaruh ing bidang iki: nerbitake prakiraan biaya-per-nyawa-disilihake lan biaya-per-outcome sing eksplisit lan dianyari kanggo daftar cilik "amal unggulan", lan nyaranake donatur menehi marang endi wae sing saiki duwe ruang kanggo pendanaan luwih akeh kanthi tingkat paling apik.

## Kenapa penting

GiveWell nyatakake cost-effectiveness minangka kriteria utama ing metodologi sing diterbitake: nggoleki intervensi sing didhukung bukti, ngira cost-effectiveness-e ing unit umum, lan ngurutake antarane sebab-sebab sing babar pisan ora gegandhengan — kelambu nglawan malaria, suplemen vitamin A, transfer tunai, pembayaran insentif vaksin — ing siji sumbu kasebut. Iki impor langsung saka nalar gaya QALY/DALY saka ekonomi kesehatan menyang filantropi: kaya sistem kesehatan takon "pira QALY saben pound ing sisih marjinal," GiveWell takon "pira nyawa, utawa taun-urip, saben dolar ing sisih marjinal," lan nganggep sebab-sebab bisa diijolake sawise diowahi dadi unit umum kasebut. Deleng [cost-effectiveness analysis ing pemerintahan](../analisis-efektivitas-biaya-ing-pamaréntahan-mbandhingaké-cara-nggayuh-outcome-sing-padha/) kanggo sedulur sektor publik saka kerangka nalar iki.

Angka GiveWell sing paling akeh dikutip gegayutan karo Against Malaria Foundation (AMF), sing mbagekake kelambu sing diolesi insektisida. Ing conto petungan GiveWell sing diterbitake (dijupuk saka data pendanaan 2020), kira-kira $4.500 mbiayai kelambu sing cukup kanggo nyegah siji pati, sawise ngitung panggunaan kelambu sing ora sampurna, kematian dhasar tanpa kelambu, lan panyesuaian kanggo funging — kemungkinan AMF bakal nampa sebagian pendanaan kasebut saka donatur liya apa wae. GiveWell eksplisit yen angka iki owah sajrone wektu lan antar geografi nalika prevalensi malaria, biaya kelambu, lan kekurangan pendanaan owah, lan yen biaya nylametake nyawa umume dikarepake munggah sajrone wektu amarga kesempatan paling murah dijupuk luwih dhisik; iku ilustrasi petungan saka metodhe, dudu rega tetep.

## Petungan

```
Cost-effectiveness = Biaya intervensi / Unit kabecikan sing diasilake
                    (contone $ saben nyawa disilihake, $ saben DALY dicegah, $ saben QALY)

Rantai GiveWell kanggo program kelambu, minangka ilustrasi:
  $ saben kelambu sing dituku lan dikirim
    ÷ bagean kelambu sing bener-bener dienggo
    ÷ wong sing dilindhungi saben kelambu
    × kematian taunan dhasar tanpa kelambu
    × pangurangan kematian sing bisa diatribusikake marang panggunaan kelambu (saka bukti RCT)
    × taun perlindungan saben kelambu
    ÷ panyesuaian kanggo funging (dhuwit sing mindhahake pendanaan donatur liya)
  = $ saben nyawa disilihake (bersih saka efek pendanaan kontrafaktual)
```

Rantai iki penting amarga saben langkah iku panggonan ing ngendi prakiraan cost-effectiveness umume salah — deleng jebakan ing ngisor — lan amarga nggawe eksplisit yen "biaya saben nyawa disilihake" ora tau dadi rega mentah sing diamati; iku prakiraan sing dimodelake saka sawetara input sing ora mesthi dhewe-dhewe.

## Conto petungan

Rong intervensi hipotetis, loro-lorone didhukung bukti, saingan kanggo £100.000 marjinal sing padha:

- **Kelambu (gaya AMF)**: kira-kira $4.500 saben nyawa disilihake miturut conto petungan GiveWell sing diterbitake saka data 2020, yaiku kira-kira 20 nyawa disilihake saben £100.000 gumantung kurs lan taun sing digunakake.
- **Program obat cacing**: ora ana manfaat kematian sing masuk akal babar pisan, nanging bukti kuwat babagan peningkatan penghasilan jangka dawa saka obat cacing nalika bocah; GiveWell nilai iki kanthi istilah peningkatan penghasilan, dudu nyawa disilihake, sing nggawe angel dibandhingake langsung karo kelambu tanpa unit bareng. GiveWell nggunakake kerangka "bobot moral" eksplisit kanggo ngowahi loro-lorone dadi siji unit internal kanggo pengurutan.

Disiplin metodhe EA yaiku meksa perbandingan iki dadi terbuka tinimbang mbiayai loro-lorone amarga loro-lorone "kayane apik." Deleng [social return on investment](../social-return-on-investment-ngukur-bali-modal-sosial-sing-wis-disesuaikan-karo-deadweight-lan-atribusi/) kanggo fungsi pemaksa sepadan sing digunakake wirausaha sosial Inggris lan komisioner lokal, sing takon pitakonan padha — apa imbal hasil paling apik saben pound — ing idiom nilai sing dimoneterisasi tinimbang idiom nyawa/DALY.

## Gegayutan karo rekayasa piranti lunak

Insinyur sing mbangun platform donatur, piranti pencocokan hibah, utawa dashboard dampak kanggo pendana sing selaras EA (Open Philanthropy, GiveWell dhewe, platform pemberian efektif kayata Giving What We Can) kudu nggambarake prakiraan cost-effectiveness minangka kisaran kanthi asumsi sing dinyatakake, dudu angka tunggal — model dhasare nduwe sawetara input multiplikatif sing ora mesthi, lan nyuda iku dadi siji angka ing dashboard salah nggambarake tingkat kapercayan sing GiveWell dhewe nyatakake. Versi saben prakiraan miturut tanggal terbit; GiveWell ngrevisi angkane, kadhang akeh, nalika bukti RCT anyar utawa data kekurangan pendanaan teka, lan platform sing nyimpen angka lawas kanthi meneng-menengan dadi salah.

## Jebakan

- **Nganggep prakiraan cost-effectiveness minangka rega tetep.** Iku output model kanthi sawetara input multiplikatif sing ora mesthi (tingkat panggunaan, kematian dhasar, panyesuaian funging); sebutake tanggal lan versine.
- **Ngabaikake funging/pamindhahan.** Mbiayai organisasi sing bakal nampa dhuwit saka donatur liya apa wae tuku kabecikan kontrafaktual sing luwih sithik tinimbang judhul sing disaranake — deleng [additionality lan deadweight](../additionality-lan-deadweight-nyingkirake-asil-sing-bakal-kedadéan-senajan-tanpa-program/) lan [pamindhahan lan atribusi](../pamindhahan-lan-atribusi/).
- **Mbandhingake antar unit sing ora cocog tanpa konversi.** "Nyawa disilihake" lan "penghasilan sing dipikolehi" ora bisa dibandhingake langsung tanpa kerangka bobot moral eksplisit; nampilake loro-lorone sisih-sisihan kaya bisa dibandhingake iku kesalahan kategori.
- **Pandangan trowongan area sebab.** Ngurutake mung ing sajrone area sebab (contone mung amal kesehatan global) lan nyebut pemenang "amal paling cost-effective" ngluwihi klaim; pengurutan lintas-sebab GiveWell sengaja sempit (kesehatan lan kesejahteraan global), dudu universal.

## Sumber

- GiveWell, "Our criteria." <https://www.givewell.org/how-we-work/our-criteria>
- GiveWell, "How Much Does It Cost to Save a Life?" (February 2024 version). <https://www.givewell.org/how-much-does-it-cost-to-save-a-life/february-2024-version>
- GiveWell, Against Malaria Foundation review. <https://www.givewell.org/charities/amf>
- Giving What We Can, on cost-effectiveness across causes. <https://www.givingwhatwecan.org/>
