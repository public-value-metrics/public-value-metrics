# Realisasi Manfaat: Mbuktèkaké Manawa Manfaat ing Business Case Tenan Kawujud

Manajemen realisasi manfaat (benefits realization) iku disiplin kanggo ngenali, nemtokaké dhasar, nglacak, lan *mbuktèkaké* yèn manfaat sing dijanjèkaké ing business case tenan kawujud sawisé go-live. Ing investasi publik Britania Raya, iki urip ing Five Case Model Green Book HM Treasury lan pedoman manajemen manfaat khusus saka Infrastructure and Projects Authority; tanpa iku, "sistem iki ngirit telung puluh menit saben klaim kanggo petugas kasus" bakal tetep dadi pratelan sing ora tau diaudit.

## Kenapa penting

Business case iku janji; realisasi manfaat iku audité. Green Book mrèntahaké saben kasus belanja lulus limang uji — strategis, ékonomi, komersial, finansial, lan manajemen — lan kasus manajemen kudu nata cara manfaat bakal diwujudaké *sadurungé disetujoni*: pemilik dijenengaké, dhasar dicathet, lan tanggal pangukuran ditetepaké. Pandhuan Infrastructure and Projects Authority, *Benefits Management: A Guide to Realizing Benefits for Government Major Projects* (<https://www.gov.uk/government/publications/benefits-management-a-guide-to-realizing-benefits-for-government-major-projects>), ana amarga laporan portofolio IPA dhéwé bab Government Major Projects Portfolio bola-bali nemokaké manawa keyakinan pangiriman lan realisasi manfaat disebut minangka kelemahan sing mbalik ing program-program gedhé. Sawijining proyek bisa ditutup "tepat wektu lan tepat anggaran" miturut tonggak pangiriman nanging tetep gagal mbuktèkaké manfaat sing ndadèkaké dhuwit kuwi dibelanjaké — pambédan sing dianggep IPA minangka inti saka disiplin iki.

## Petungan

```
Tarif realisasi = manfaat sing kawujud / manfaat sing diramalaké   (saben manfaat, saben periode)

Mekanisme sing ndadèkaké bisa diétung:
  dhasar dicathet SADURUNGÉ go-live (yèn ora, delta ora bisa diukur)
  saben manfaat: pemilik jenengan, metrik, sumber data, jadwal pangukuran
  ramalan disesuaikan karo optimism bias nalika appraisal (diwajibaké Green Book)
  manfaat digolongaké ngeculaké-kas / kapasitas-bébas / kualitatif,
  dilacak lan dilaporaké dhéwé-dhéwé
```

## Conto petungan

**Otoritas lokal**: business case portal aplikasi perencanaan digital njanjèkaké, saben taun: pengurangan biaya cetak lan pos £300.000 (kas), 4.500 jam petugas dibébaské (kapasitas), lan kepuasan pelamar sing apik (kualitatif). Rolas sasi sawisé go-live:

```
Manfaat           Ramalan    Kawujud    Tarif  Bukti
Hemat kas         £300.000   £210.000   70%    buku besar keuangan vs taun dhasar
Jam petugas       4.500      3.200      71%    sampel time-motion
Kepuasan          +8pp       +11pp      138%   data survei pelamar

Tindakan saka tinjauan (inti realisasi manfaat):
kekurangan kas dilacak menyang rong area layanan sing isih ngolah
aplikasi kertas minangka pengecualian → tutup dalan pengecualian;
koreksi optimism-bias business case sabanjuré dinaékaké saka 10% dadi 25%
adhedhasar kesalahan ramalan kasus iki.
```

Tarif realisasi 70% dudu kegagalan — iku kawruh sing ndadèkaké ramalan sabanjuré luwih pas kalibrasiné. Kasus sing ora diukur bakal ngaku 100% salawasé, lan tim keuangan ora duwé dhasar kanggo nantang.

## Gegayutan karo rekayasa piranti lunak

Organisasi rékayasa rutin nyetujoni investasi platform lan piranti adhedhasar manfaat ramalan lan meh ora tau ngaudit sawisé iku — persis patologi sing arep dibenerake manajemen realisasi manfaat. Cara entheng nggawa: saben usulan ing ndhuwur ambang materialitas nyebutaké pemilik manfaat, metrik dhasar, lan tanggal tinjauan tetep (umumé enem sasi sawisé go-live), lan tarif realisasi saka usulan kepungkur kudu nyuda sepira organisasi percaya ramalan sabanjuré saka sawijining tim utawa vendor. Iki nutup sirkuit bali menyang [appraisal Green Book](../appraisal-green-book/), sing nemtokaké ramalan sing diaudit disiplin iki, lan iki logika padha karo temuan sing akèh dilaporaké yèn mayoritas pilot generative-AI ora nuduhaké bali sing bisa diukur — deleng [produktivitas AI ing sektor publik](../produktivitas-ai-ing-sektor-publik-bukti-tenan-bab-asisten-koding-ai-ing-pamaréntahan/) — amarga pilot sing *tenan* mènèhi nilai, meh tanpa kacuali, yaiku sing duwé baris manfaat sing disebut jenengé lan bisa dilacak wiwit awal. Iki uga gumantung marang bédané apa sing tenan dikirim lan apa sing tenan kawujud — deleng [outcome lawan output](../outcome-vs-output-bedane-asil-langsung-lan-owah-owahan-nyata/).

## Jebakan

- **Ora ana dhasar sadurungé go-live**: kelalaian fatal sing ora bisa dibenerake — tanpa iku, ora ana tarif realisasi sing bisa diétung, mung diklaim.
- **Manfaat yatim**: manfaat tanpa pemilik jenengan ora ana sing ngumpulaké datané, lan saben tinjauan portofolio nglaporaké "umumé ing jalur" kanthi baku.
- **Manfaat kaétung kaping pindho ing portofolio program**: rong proyek padha ngaku kapasitas petugas kasus sing dibébaské minangka manfaaté — jaga siji register manfaat ing saindhenging portofolio kanggo nangkep iki.
- **Teater realisasi**: ngukur lan nglaporaké kemenangan kualitatif sing gampang kanthi mencolok nalika baris kas lan kapasitas ora diperiksa.
- **Mbingungaké pangiriman karo realisasi**: proyek sing nutup tonggak "tepat wektu lan tepat anggaran" ora ngandhani apa-apa apa manfaat ramalan tau kedadéan — pandhuan IPA nganggep iki rong pitakonan beda karo rong jalur bukti beda.

## Sumber

- HM Treasury, Green Book and Five Case Model guidance. <https://www.gov.uk/government/collections/the-green-book-and-accompanying-guidance-and-documents>
- Infrastructure and Projects Authority, *Benefits Management: A Guide to Realizing Benefits for Government Major Projects*. <https://www.gov.uk/government/publications/benefits-management-a-guide-to-realizing-benefits-for-government-major-projects>
- Infrastructure and Projects Authority, Annual Report on the Government Major Projects Portfolio. <https://www.gov.uk/government/collections/infrastructure-and-projects-authority-annual-report>
