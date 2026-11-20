# Akuntansi Modal Alam (Natural Capital Accounting)

Akuntansi modal alam nempatake lingkungan ing posisi padha karo aset nasional utawa organisasi liyane: ngukur stok sumber daya alam (alas, lemah, kali, rawa, atmosfer) lan aliran layanan sing diasilake (penyerapan karbon, perlindungan banjir, rekreasi, pangan), kanthi cara fisik lan moneter, supaya kerusakan lingkungan katon ing pengambilan keputusan kaya nyusute modal finansial. Inggris minangka salah sijine pamarentah paling maju ing nindakake iki kanthi sistematis, didorong dening 25 Year Environment Plan (2018) lan dilaksanakake liwat akun UK Natural Capital ONS lan pedoman tambahan Green Book HM Treasury.

## Kenapa penting

Akuntansi konvensional, korporat lan pamarentah padha wae, nganggep alas ora ana regane nganti ditebang lan didol minangka kayu, lan nalika iku mung dadi GDP. Akuntansi modal alam ana kanggo nutup jurang kuwi: 25 Year Environment Plan Inggris ngikat pamarentah kanggo nanemake pamikiran modal alam ing kabeh kebijakan, kanthi eksplisit nyatakake ambisi dadi "generasi pisanan sing ninggalake lingkungan ing kondisi sing luwih apik tinimbang sing kita temokake." ONS wiwit nerbitake akun UK Natural Capital taunan (<https://www.ons.gov.uk/economy/environmentalaccounts/bulletins/uknaturalcapitalaccounts/latest>) sing ngira nilai moneter layanan ekosistem (saka rekreasi alas nganti manfaat kesehatan ruang ijo kutha nganti panyimpenan karbon ing lahan gambut) nganggo kerangka National Accounts sing padha karo modal produksi, saengga modal alam bisa mbesuk ana ing neraca sing padha karo dalan, bangunan, lan peralatan. Pedoman Enabling a Natural Capital Approach (ENCA) saka HM Treasury, tambahan kanggo Green Book (<https://www.gov.uk/government/publications/enabling-a-natural-capital-approach-enca-guidance>), nerangake carane para appraiser kudu menehi nilai biaya lan manfaat lingkungan ing business case, supaya proyek dalan sing ngrusak alas kuna utawa proyek banjir sing mulihake rawa bisa dibandhingake kanthi istilah moneter sing konsisten, tinimbang siji duwe angka lan sijine mung paragraf peringatan.

## Petungan

```
Nilai aset layanan ekosistem = NPV aliran layanan sing diwenehake aset

Nilai aset = Σ (t = 1 nganti T) [nilai aliran layanan taunan_t / (1 + r)^t]

ing ngendi:
  nilai aliran layanan_t = jumlah layanan ing taun t × nilai unit
                          (contone kunjungan rekreasi × nilai saben kunjungan;
                           ton karbon sing diserap × rega karbon)
  r = tingkat diskonto (tingkat diskonto sosial Green Book; deleng
      [tingkat diskonto sosial](../tingkat-diskonto-sosial-ngowahi-biaya-lan-manfaat-mangsa-ngarep-dadi-nilai-saiki/))
  T = cakrawala wektu nalika aset diarepake nyedhiyakake layanan kuwi
```

Iki struktur nilai saiki bersih (NPV) sing padha karo sing dienggo kanggo menehi nilai modal produksi utawa appraisal investasi publik apa wae miturut [appraisal Green Book](../appraisal-green-book/); sumbangan akuntansi modal alam yaiku nyedhiyakake jumlah fisik lan nilai unit sing kredibel kanggo layanan sing sadurunge dihargai nol.

## Conto petungan

**Alas kutha, nilai rekreasi**: alas 50 hektare nampa kira-kira 80.000 kunjungan rekreasi saben taun, saben kunjungan dinilai (liwat metode biaya perjalanan utawa stated preference; deleng [valuasi preferensi sing kasingkap](../valuasi-preferensi-sing-kasingkap/) lan [valuasi preferensi sing dinyatakake](../penilaian-preferensi-sing-dinyatakaké-nakokaké-wong-sepira-gelem-mbayar/)) £3 saben kunjungan. Alas kasebut diarepake terus nyedhiyakake layanan iki sajrone 50 taun, diappraisal kanthi tingkat diskonto 3,5%.

```
Nilai rekreasi taunan = 80.000 × £3 = £240.000/taun

NPV sajrone 50 taun ing 3,5% ≈ £240.000 × faktor anuitas(3,5%, 50 taun)
faktor anuitas(3,5%, 50) ≈ 21,4

Nilai aset ≈ £240.000 × 21,4 ≈ £5.136.000
```

**Nambah panyimpenan karbon**: alas sing padha nyerap kira-kira 400 ton CO2 saben taun, dinilai nganggo rega karbon non-dagang pamarentah kira-kira £75/ton (ilustrasi; gunakake nilai karbon BEIS/DESNZ sing diterbitake saiki kanggo appraisal nyata).

```
Nilai karbon taunan = 400 × £75 = £30.000/taun
NPV sajrone 50 taun ing 3,5% ≈ £30.000 × 21,4 ≈ £642.000

Total nilai aset alas (rekreasi + karbon) ≈ £5.136.000 + £642.000
                                          ≈ £5.778.000
```

Iki durung nambah layanan pangurangan banjir, keanekaragaman hayati, utawa kualitas hawa sing uga dijaluk ENCA supaya dipertimbangake dening appraiser; totale sengaja dadi batas ngisor, dudu batas ndhuwur.

## Gegayutan karo rekayasa piranti lunak

- Sistem lingkungan lan manajemen aset kanggo pamarentah daerah lan lembaga (taman, dalan raya, badan banyu) bisa nambahake register modal alam bareng karo register aset fisik, nganggo pola aliran-layanan-kaping-nilai-unit sing padha karo [basis data biaya unit](../basis-data-biaya-satuan-proksi-keuangan-sing-wis-diteliti-kanggo-outcome-sosial/) apa wae sing dijaga organisasi.
- Amarga NPV modal alam sensitif marang tingkat diskonto (deleng faktor anuitas ing conto petungan), piranti apa wae sing ngetung iku kudu nampilake tingkat lan cakrawala minangka input sing katon, aja disembunyikake; prinsip transparansi sing padha dibahas ing [keadilan antargenerasi lan diskonto keberlanjutan](../ekuitas-antar-generasi-lan-diskonto-keberlanjutan/).
- Akun modal alam saya akeh dadi input sing dibutuhake kanggo bagean dampak lingkungan ing business case [appraisal Green Book](../appraisal-green-book/); tim pangiriman sing mbangun piranti business case kudu nganggep akun ONS lan nilai unit ENCA minangka data referensi sing diintegrasikake, dudu sing diitung maneh dening appraiser saka nol saben wektu.

## Jebakan

- **Ngitung kaping pindho layanan ekosistem sing tumpang-tindih.** Nilai rekreasi lan nilai keanekaragaman hayati kanggo situs sing padha bisa nuduhake data kesediaan mbayar sing padha; pedoman ENCA kanthi eksplisit ngelingake supaya ora njumlahake valuasi sing asale saka instrumen survei sing tumpang-tindih.
- **Nganggep nilai aset modal alam iku statis.** Aliran layanan owah miturut iklim, pangelolaan, lan tekanan panggunaan lahan; nilai karbon lan pangurangan banjir alas ing dasawarsa iki dudu sipat permanen situs.
- **Nggunakake nilai unit rata-rata nasional kanggo keputusan sing banget lokal.** Sa hektare alas kutha sing bisa diakses lan sa hektare dataran dhuwur sing terpencil nduweni nilai rekreasi sing beda banget; pedoman ENCA nyaranake nilai lokal utawa khusus situs yen ana, tinimbang gampang nggunakake rata-rata nasional.

## Sumber

- ONS. "UK natural capital accounts."
  <https://www.ons.gov.uk/economy/environmentalaccounts/bulletins/uknaturalcapitalaccounts/latest>
- HM Government. "A Green Future: Our 25 Year Plan to Improve the Environment." (2018)
- HM Treasury / Defra. "Enabling a Natural Capital Approach (ENCA): guidance."
  <https://www.gov.uk/government/publications/enabling-a-natural-capital-approach-enca-guidance>
