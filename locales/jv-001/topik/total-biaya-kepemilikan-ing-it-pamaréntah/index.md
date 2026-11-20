# Total Biaya Kepemilikan (TCO) ing IT Pamaréntah

Total biaya kepemilikan (total cost of ownership, TCO) iku biaya siklus urip kebak sawijining sistem — akuisisi ditambah saben taun nglakokaké — sing didiskonto menyang tanggal sing padha. Ing IT pamaréntah, kesalahan prakiraan sing paling bisa dijagakaké yaiku mbandhingaké pemasok utawa opsi mung adhedhasar rega akuisisi, nalika operasi lan pangopènan biasané nyakup antara setengah nganti papat per lima tagihan sak umur sistem.

## Kenapa penting

Green Book HM Treasury mrèntahaké kasus keuangan ing business case Five Case Model apa waé nyakup biaya sak umur, dudu mung belanja modal — nanging National Audit Office bola-bali nemokaké departemen nyetujoni investasi IT adhedhasar prakiraan biaya operasional sing ora lengkap utawa optimistis, mung kanggo nemokaké biaya operasi sejati sakwisé sistem urip lan baris anggaran modal wis ditutup. Technology Code of Practice saka Government Digital Service lan Central Digital and Data Office (<https://www.gov.uk/guidance/the-technology-code-of-practice>) nyurung departemen menyang cloud lan hosting komoditas sebagéan amarga iku nggawé biaya sing terus-terusan katon lan bisa dibandhingaké, dudu kekubur ing siji angka pengadaan modal sing katon murah banget nalika disetujoni lan salah larang telung taun sabanjuré.

## Petungan

```
TCO = Biaya akuisisi + Σ(t=1..N) Biaya operasional taunan_t / (1+r)^t
      − nilai sisa (didiskonto)

r = tingkat diskonto sosial standar Green Book HM Treasury, 3,5%/taun
    (jadwal tingkat mudhun kanggo horizon luwih saka 30 taun)

Komponen biaya operasional: hosting/lisensi, dhukungan lan pangopènan,
patching keamanan lan kepatuhan, wektu staf, refresh/migrasi sing direncanakaké
```

Deleng [tingkat diskonto sosial](../tingkat-diskonto-sosial-ngowahi-biaya-lan-manfaat-mangsa-ngarep-dadi-nilai-saiki/) kanggo alesan faktor diskonto penting sajrone umur sistem 5–10 taun sing khas, lan [mbangun lawan tuku ing pamaréntah](../bangun-utawa-tuku-ing-pamaréntahan-mbandhingaké-pangembangan-khusus-karo-pengadaan-komersial/) kanggo kepriyé TCO mlebu keputusan mbangun/tuku.

## Conto petungan

Sawijining departemen mbandhingaké rong sistem manajemen kasus ing horizon 5 taun ing tingkat diskonto 3,5% Green Book.

```
Sistem A: capex £3.500.000, opex £250.000/taun
Sistem B: capex £1.800.000 (katon luwih murah), opex £650.000/taun
          (dhukungan vendor lan beban integrasi sing luwih abot)

Perbandhingan naif mung adhedhasar capex: B menang, £1,8M < £3,5M.

Jumlah faktor diskonto, 5 taun ing 3,5%: 0,966+0,934+0,902+0,871+0,842 ≈ 4,515

TCO_A = 3.500.000 + 250.000 × 4,515 = 3.500.000 + 1.128.750 = £4.628.750
TCO_B = 1.800.000 + 650.000 × 4,515 = 1.800.000 + 2.934.750 = £4.734.750
```

TCO mbalik keputusan naif: Sistem B rada luwih larang sajrone limang taun sakwisé biaya operasional didiskonto lan dijumlahaké, amarga bagéan opex-é saka biaya sak umur 62% (2.934.750 / 4.734.750) dibandhingaké 24% kanggo Sistem A — conto konkrit temuan "pangopènan iku mayoritas tagihan", sing kabèh kasimpen nalika mung mbandhingaké rega etiket.

## Gegayutan karo rekayasa piranti lunak

TCO iku angka sing kudu nggawé disiplin saben keputusan [mbangun lawan tuku](../bangun-utawa-tuku-ing-pamaréntahan-mbandhingaké-pangembangan-khusus-karo-pengadaan-komersial/) lan saben kasus pelunasan [utang teknis](../utang-teknis-minangka-pengikisan-nilai-publik/), amarga bunga utang lan pangopènan sing ditundha loro-lorone baris biaya operasional sing kalebu ing total terdiskonto sing padha, senajan ora ana sing nglacak. Insinyur sing ngusulaké pilihan platform utawa vendor kudu nampilaké tabel TCO kebak, dudu rega pengadaan, amarga rega pengadaan iku persis angka sing kasus keuangan Green Book dirancang kanggo nyegah departemen gumantung dhéwé. TCO uga denominator jujur kanggo pangadilan [value for money](../value-for-money-ngukur-apa-belanja-publik-menehi-imbangan-biaya-lan-manfaat-sing-paling-apik/) — VFM mbandhingaké manfaat karo biaya, lan baris biaya sing kurang diétung nggedhèkaké saben rasio VFM ing business case.

## Jebakan

- **Perbandhingan mung capex**: kesalahan pengadaan sing paling umum — mbandhingaké rega dhaptar pemasok tanpa prakiraan biaya operasional sing cocog kanggo saben opsi.
- **Ngliwati biaya metu lan migrasi**: ekstraksi data pungkasan kontrak, re-platforming, lan penalti vendor lock-in iku baris TCO nyata sing arang ana ing business case asli.
- **Ngliwati biaya keamanan lan kepatuhan**: irama patching, perpanjangan akreditasi, lan biaya audit mundhak saya tuwa lan rumit sistem — deleng [nilai keamanan siber sektor publik](../nilai-keamanan-siber-sektor-publik/) — lan rutin ora dilebokaké ing prakiraan opex.
- **Perbandhingan tanpa diskonto antar opsi kanthi profil biaya sing béda**: mbandhingaké opsi sing abot capex karo sing abot opex tanpa diskonto sacara sistematis nguntungaké opsi sing kebeneran nundha luwih akèh biaya menyang taun-taun candhak.

## Sumber

- HM Treasury, *The Green Book: Central Government Guidance on Appraisal and Evaluation*, 2022. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
- Central Digital and Data Office, Technology Code of Practice. <https://www.gov.uk/guidance/the-technology-code-of-practice>
- National Audit Office, *Digital Transformation in Government*. <https://www.nao.org.uk/>
