# Bina atau Beli dalam Kerajaan

Bina-atau-beli ialah perbandingan berstruktur dan terlaras risiko antara pembangunan khusus dengan
pemerolehan komersial atau komoditi, dibandingkan berdasarkan [jumlah kos pemilikan](../jumlah-kos-pemilikan-dalam-it-kerajaan/)
terdiskaun, masa-ke-nilai dan risiko. Kerajaan secara struktur ialah sektor pembeli — Technology Code of Practice menetapkan anggapan ke arah penyelesaian komoditi dan awan — namun pasukan kejuruteraan dalam jabatan masih lalai kepada membina, atas sebab yang sama seperti pembina di mana-mana.

## Mengapa ini penting

Technology Code of Practice Government Digital Service (<https://www.gov.uk/guidance/the-technology-code-of-practice>) dan panduan Service Manual yang mengiringinya tentang memutuskan sama ada hendak membina atau membeli mendesak jabatan mewajarkan pembangunan khusus berdasarkan anggapan bahawa keupayaan komoditi harus dibeli, bukan dibina, dan hanya keupayaan yang benar-benar baharu dan membezakan misi yang wajar mempunyai kod khusus. Panduan tambahan bias optimisme HM Treasury kepada Green Book, yang diambil daripada kajian semula 2002 Mott MacDonald terhadap perolehan awam yang besar, memberikan projek IT julat peningkatan yang terluas daripada mana-mana kategori yang dinilai — anggaran kos modal disyorkan dinaikkan sebanyak 10% di hujung bawah dan sehingga 200% di hujung atas sebelum digunakan dalam penilaian, mencerminkan betapa teruknya binaan perisian secara sejarah dianggar terlalu rendah merentas perolehan awam. Analisis bina-atau-beli wujud tepat untuk memaksa pelarasan risiko itu ke atas meja sebelum kelulusan, dan bukan membiarkannya muncul sebagai permintaan lebihan perbelanjaan dalam tahun.

## Matematiknya

```
Bandingkan dalam ufuk 3–5 tahun yang sama, didiskaun pada kadar diskaun
sosial Green Book (lihat social-discount-rate.md):

NPV_pilihan = PV(manfaat, dianjak mengikut masa-ke-nilai) − PV(TCO)

Pelarasan risiko (corak bias optimisme Green Book):
  kos bina × 1.1–3.0         (julat peningkatan projek IT, Mott MacDonald)
  masa-ke-nilai bina + 40–60% (prior kelewatan penggunaan)
  beli: tambah semakan realiti integrasi dan kos keluar kontrak sebagai ganti

Pemacu keputusan, mengikut turutan lazim ia menentukan:
  1. pembezaan — adakah keupayaan ini misinya, atau paip?
  2. masa-ke-nilai × kos kelewatan (lihat cost-of-delay-in-public-programmes.md)
  3. jumlah kos pemilikan terlaras risiko
```

## Contoh yang diselesaikan

Sebuah pihak berkuasa tempatan memerlukan sistem pengurusan kes untuk penjagaan sosial dewasa. Beli: SaaS pada £180,000/tahun, beroperasi dalam 4 bulan. Bina: dianggar £900,000 ditambah £150,000/tahun penyelenggaraan, beroperasi dalam 14 bulan.

```
Kos bina terlaras risiko = 900,000 × 1.4 = £1,260,000
TCO 5 tahun:
  beli  = 180,000 × 5 = £900,000
  bina = 1,260,000 + 150,000 × 5 = £2,010,000

Sebutan kelewatan: sistem mengelakkan £40,000/bulan penilaian bertindih;
binaan tiba 10 bulan lebih lewat daripada beli.
CoD = 10 × 40,000 = £400,000

Perbandingan berkesan: £900,000 (beli) berbanding £2,010,000 + £400,000 = £2,410,000 (bina)
```

Beli menang sebanyak kira-kira £1.5 juta sepanjang lima tahun, dan baris tunggal terbesar selepas anggaran bina itu sendiri ialah kos kelewatan yang tidak akan pernah timbul daripada perbandingan capex semata-mata.

## Kaitan dengan kejuruteraan perisian

Disiplin yang berpindah terus daripada analisis ini ke dalam amalan penyampaian: **pelarasan risiko berasaskan prior** — peningkatan Mott MacDonald ialah setara perisian bagi bias optimisme Green Book yang dikenakan secara mekanikal, jadi pasukan harus berhujah untuk pengecualian daripadanya dan bukan menganggap anggaran mereka sendiri sebagai pengecualian; **kejujuran pembanding** — alternatif kepada membina ialah pilihan beli terbaik yang ada, bukan "tiada apa-apa", yang berkait langsung dengan [kos lepas dalam perbelanjaan awam](../kos-peluang-dalam-perbelanjaan-awam/); dan **perbandingan TCO yang jujur** — setiap cadangan bina harus dibandingkan dengan [jumlah kos pemilikan](../jumlah-kos-pemilikan-dalam-it-kerajaan/) penuh pilihan beli, bukan harga senarainya. Jika membina benar-benar menang, [kos kelewatan](../kos-kelewatan-dalam-program-awam/) bagi masa binaan tambahan harus diberi harga secara jelas dalam kes perniagaan, bukan dibiarkan sebagai andaian tersirat bahawa masa tidak penting.

## Perangkap

- **Membandingkan harga senarai vendor dengan anggaran bina yang tidak terlaras risiko**: ini memuji binaan dua kali, sekali pada kos dan sekali pada jadual.
- **Buruh dalaman berharga sifar**: masa kejuruteraan perkhidmatan awam dianggap "percuma" kerana ia sudah berada dalam bajet bilangan kakitangan jabatan, yang menyembunyikan kos lepas sebenarnya berbanding kerja lain yang boleh dilakukan pasukan itu.
- **Kunci masuk (lock-in) tanpa harga dalam kedua-dua arah**: kos keluar vendor dan kebolehpindahan data adalah nyata, tetapi begitu juga faktor bas (bus-factor) binaan khusus dan pergantungannya pada mengekalkan pasukan dalaman yang kecil dan sukar diganti sepanjang hayatnya.
- **Pembezaan misi didakwa untuk paip**: "ini teras kepada kami" ditegaskan tentang middleware integrasi atau stor dokumen — uji ia dengan sama ada warganegara atau pegawai kes akan pernah perasan yang mana satu berjalan di bawahnya.

## Sumber

- Central Digital and Data Office, Technology Code of Practice. <https://www.gov.uk/guidance/the-technology-code-of-practice>
- GOV.UK Service Manual, deciding whether to build or buy technology. <https://www.gov.uk/service-manual>
- HM Treasury, Green Book supplementary guidance on optimism bias. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
