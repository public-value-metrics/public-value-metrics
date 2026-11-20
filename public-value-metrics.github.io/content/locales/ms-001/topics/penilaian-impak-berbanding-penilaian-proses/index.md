# Penilaian Impak berbanding Penilaian Proses

Penilaian impak bertanya sama ada sesuatu program menyebabkan hasil (outcome) yang dimaksudkan. Penilaian proses bertanya sama ada program benar-benar disampaikan seperti yang direka — kepada siapa, pada dos berapa, dan dengan halangan atau pemudah cara apa sepanjang jalan. Ini soalan berbeza yang memerlukan kaedah berbeza, dan Magenta Book HM Treasury menganggap menugaskan kedua-duanya bersama sebagai amalan piawai, kerana keputusan impak yang lemah atau nol tidak dapat ditafsir bersendirian: ia tidak dapat memberitahu anda sama ada teori asas program itu salah, atau teori yang baik itu hanya tidak pernah disampaikan dengan betul.

## Mengapa ini penting

Penilaian kerajaan berulang kali mendapati tiada kesan yang boleh diukur daripada sesuatu program sedangkan tiada penilaian proses untuk menerangkan sebabnya — menyebabkan pentauliah tidak dapat membezakan "idea ini tidak berfungsi" (kegagalan teori) daripada "idea ini tidak pernah benar-benar dicuba dengan betul" (kegagalan pelaksanaan). Panduan Medical Research Council tentang penilaian proses intervensi kompleks, diterbitkan dalam BMJ pada 2015 dan dipetik meluas bersama Magenta Book, memformalkan kesetiaan (fidelity), dos, dan capaian (reach) sebagai perkara teras yang mesti diukur oleh penilaian proses. Menugaskan penilaian impak tanpa penilaian proses berisiko meninggalkan reka bentuk program yang benar-benar baik kerana ia disampaikan kepada separuh populasi yang dimaksudkan pada sebahagian kecil keamatan yang dimaksudkan — kesilapan yang dapat dicegah dengan baik oleh pembina sistem, kerana kesetiaan penyampaian ialah tepat apa yang boleh ditangkap oleh sistem data operasi hampir masa nyata.

## Matematiknya

```
Penilaian proses bertanya:
 - Adakah ia disampaikan kepada populasi sasaran, pada dos/keamatan yang dirancang?
 - Adakah penyampaian sepadan dengan reka bentuk model logik / teori perubahan?
 - Apakah halangan atau pemudah cara yang menjejaskan penyampaian?
 Kaedah: semakan kesetiaan terhadap ambang yang ditentukan lebih awal, kajian kes, temu bual,
         data penyampaian pentadbiran.

Penilaian impak bertanya:
 - Apa yang berubah, dan berapa banyak perubahan itu boleh diatribusikan kepada program?
 Kaedah: RCT, DiD, PSM, RDD — lihat impact-evaluation-methods — terhadap kontrafaktual.

Diagnosis gabungan:
 Tiada kesan + kesetiaan tinggi   → kegagalan teori: model itu sendiri tidak menghasilkan hasil
 Tiada kesan + kesetiaan rendah   → kegagalan pelaksanaan: model tidak pernah diuji dengan betul
 Kesan ditemui + kesetiaan tinggi → replikasi dengan yakin
 Kesan ditemui + kesetiaan rendah → siasat lanjut: kesan mungkin rapuh atau khusus tapak
```

## Contoh yang diselesaikan

**Pihak berkuasa tempatan (program keibubapaan)**: penilaian impak menggunakan perbezaan-dalam-perbezaan mendapati perubahan +2 mata peratusan dalam ukuran kesejahteraan kanak-kanak — tidak signifikan secara statistik. Penilaian proses, yang dijalankan bersama, mendapati program hanya mencapai 210 daripada 500 keluarga yang disasarkan (capaian 42%), dan daripada itu, hanya 95 melengkapkan ambang kesetiaan yang ditetapkan lebih awal iaitu 75%+ sesi dihadiri — 19% daripada capaian asal yang dirancang. Kesimpulan: keputusan impak yang lemah selaras dengan kegagalan pelaksanaan, bukan bukti model program tidak berfungsi; tindak balas yang sewajarnya ialah membetulkan laluan rujukan yang menyebabkan keciciran 58%, bukan meninggalkan reka bentuk program.

**Badan amal (program literasi digital)**: penilaian impak mendapati kesan kukuh (+18 mata peratusan pada skor keyakinan digital), dan penilaian proses selari mengesahkan kesetiaan 92% kepada kurikulum yang dirancang merentas kesemua 12 tapak penyampaian. Digabungkan, pembiaya boleh menskalakan program dengan yakin, kerana kesan itu terbukti kekal secara konsisten dan bukan hasil satu tapak yang luar biasa baik.

## Kaitan dengan kejuruteraan perisian

Data penilaian proses ialah tepat apa yang sistem penyampaian mampu tangkap: kehadiran berbanding rancangan, dos sesi, dan keciciran pada setiap peringkat corong rujukan atau pendaftaran — analitik corong yang sama yang sudah dibina jurutera untuk ciri produk, diterapkan pada saluran paip penyampaian program sosial. Menyuap metrik kesetiaan dan capaian kepada pengurus program hampir masa nyata, dan bukan menunggu penilaian akhir geran, membolehkan laluan rujukan yang rosak dibetulkan di pertengahan program dan bukan ditemui hanya selepas tempoh pembiayaan tamat. Lihat [kaedah penilaian impak](../kaedah-penilaian-impak/) untuk reka bentuk kausal yang dipasangkan dengan penilaian proses, [teori perubahan](../teori-perubahan/) dan [model logik](../model-logik/) untuk reka bentuk yang terhadapnya penilaian proses menyemak kesetiaan, dan [realisasi manfaat](../realisasi-manfaat/) untuk menjejaki penyampaian hingga ke hasil yang dijanjikan.

## Perangkap

- **Menugaskan penilaian impak sahaja.** Keputusan nol atau lemah kemudian tidak boleh ditafsir sebagai kegagalan teori atau kegagalan pelaksanaan, iaitu tepat perbezaan yang penting untuk memutuskan apa yang perlu dilakukan seterusnya.
- **Menganggap penilaian proses sebagai tambahan lembut.** Ia memerlukan ketegasan dan kriteria kesetiaan yang ditentukan lebih awal yang sama seperti reka bentuk impak, atau ia runtuh menjadi anekdot apabila keputusan tiba.
- **Mengelirukan "tepat masa dan dalam bajet" dengan "disampaikan seperti yang direka".** Penilaian proses menyemak kesetiaan kepada model — dos, kumpulan sasaran, kandungan — bukan status RAG pengurusan projek.
- **Tidak mendaftar awal ambang kesetiaan.** Memutuskan selepas kejadian apa yang dikira "dos mencukupi" menjadikan sebarang penjelasan bagi keputusan impak yang mengecewakan kelihatan seperti dalih pasca-hoc.

## Sumber

- HM Treasury, Magenta Book (2020). <https://www.gov.uk/government/publications/the-magenta-book>
- Moore G, et al., "Process evaluation of complex interventions: Medical Research Council
  guidance." BMJ 2015;350:h1258. <https://www.bmj.com/content/350/bmj.h1258>
- National Audit Office, programme evaluation reports. <https://www.nao.org.uk/>
