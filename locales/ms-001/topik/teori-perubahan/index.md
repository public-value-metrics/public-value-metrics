# Teori Perubahan

Teori perubahan (theory of change) ialah laluan sebab-akibat yang dipetakan ke belakang secara jelas daripada matlamat jangka panjang kepada prasyarat dan aktiviti yang mesti wujud untuk mencapainya, bersama andaian yang menghubungkan setiap pautan. Ia dibina dengan bermula pada hasil yang dikehendaki dan bertanya "apakah yang mesti benar sebaik sebelum ini, supaya ini berlaku?", berulang kali, sehingga sampai kepada aktiviti yang benar-benar boleh anda sampaikan — arah yang bertentangan dengan [model logik](../model-logik/), dan itulah sebabnya kedua-duanya saling melengkapi dan bukan boleh ditukar ganti.

## Mengapa ini penting

Kaedah pemetaan ke belakang diformalkan oleh Center for Theory of Change dan ActKnowledge, berdasarkan kerja penilai Carol Weiss tentang menjadikan andaian program jelas supaya boleh diuji dan bukan diterima atas dasar kepercayaan. Penilaian geran UK telah menyerap ini secara langsung: Magenta Book HM Treasury menganggap teori perubahan sebagai titik permulaan bagi sebarang reka bentuk penilaian, dan pembiaya seperti National Lottery Community Fund menghendaki pemohon menyatakan satu sebelum mereka membiayai sesuatu cadangan. Sebab ia penting bagi jurutera perisian ialah teori perubahan merupakan dokumen yang harus menentukan apa yang perlu diukur oleh sistem anda — jika rantaian sebab-akibat menyatakan "penerimaan faedah bergantung pada pemohon menerima pengiraan yang diperibadikan", itu dakwaan boleh diuji yang boleh dilengkapi produk anda dengan instrumentasi untuk membuktikan, atau menyangkalnya.

## Matematiknya

Teori perubahan bersifat struktur dan bukan angka. Setiap pautan harus membawa kedua-dua andaian dan penunjuk yang boleh menunjukkan andaian itu palsu:

```
Hasil jangka panjang (matlamat)
  ↑ prasyarat + andaian + penunjuk
Hasil perantara N
  ↑ prasyarat + andaian + penunjuk
  ...
Hasil perantara 1
  ↑ prasyarat + andaian + penunjuk
Aktiviti / intervensi
  ↑ sumber yang diperuntukkan
Input
```

Struktur ini disalurkan terus ke [kaedah penilaian impak](../kaedah-penilaian-impak/), yang wujud untuk menguji sama ada andaian pada setiap pautan benar-benar kukuh, dan ke [analisis kontrafaktual](../analisis-kontrafaktual/), yang menguji sama ada hasil jangka panjang akan berlaku juga.

## Contoh yang diselesaikan

**Pihak berkuasa tempatan (pencegahan gelandangan)**: hasil jangka panjang ialah penyewaan yang mampan pada 12 bulan bagi isi rumah yang berisiko diusir.

- Prasyarat: isi rumah mempunyai pelan pembayaran tunggakan yang realistik dan mampu milik.
  Andaian: pelan yang dirundingkan oleh pekerja kes lebih mampan daripada yang diperintahkan mahkamah.
  Penunjuk: % pelan yang masih aktif pada 6 bulan.
- Prasyarat: isi rumah menuntut faedah yang layak mereka terima.
  Andaian: kalkulator faedah digital meningkatkan tuntutan yang betul berbanding borang kertas.
  Penunjuk: kadar ketepatan tuntutan, dibandingkan sebelum/selepas pelancaran alat.
- Aktiviti: triaj pekerja kes, kalkulator faedah digital, rundingan tunggakan.

Dalam kohort perintis 120 isi rumah, andaian kalkulator faedah terbukti bagi 102 isi rumah (85%) yang kemudian membuat tuntutan dengan betul, dibuktikan oleh penilaian proses berikutnya — memberi pasukan program bukti bagi pautan khusus itu dan bukannya satu dakwaan hujung-ke-hujung tentang gelandangan yang dicegah.

**Badan amal (bimbingan belia)**: hasil jangka panjang ialah pengurangan penggantungan sekolah. Prasyarat yang dipetakan ke belakang: pengawalan emosi yang lebih baik → hubungan satu-lawan-satu yang dipercayai dengan mentor → hubungan mingguan yang konsisten selama dua penggal. Teori itu menjelaskan bahawa kehilangan prasyarat "hubungan mingguan yang konsisten" (katakan, kerana pertukaran mentor) meramalkan hasil tidak akan menyusul, iaitu dakwaan yang boleh diuji dan boleh dipalsukan, bukan harapan.

## Kaitan dengan kejuruteraan perisian

Teori perubahan harus membentuk model data produk sebelum sebarang papan pemuka dibina: kenal pasti pautan mana yang memerlukan penunjuk, dan lengkapkan instrumentasi untuk pautan itu secara khusus, dan bukannya lalai kepada apa sahaja yang paling mudah dilog. Ia juga mendisiplinkan perbincangan peta jalan — ciri yang tidak dipetakan kepada sebarang pautan dalam rantaian tidak jelas wajar dibina. Lihat [model logik](../model-logik/) untuk rantaian akauntabiliti hadapan yang dibina setelah teori dipersetujui, [pulangan sosial atas pelaburan](../pulangan-sosial-atas-pelaburan/) untuk kaedah yang bergantung pada teori perubahan bagi menentukan skop hasil yang dinilai, dan [hasil berbanding output](../hasil-berbanding-output/) untuk perbezaan yang menjadi sandaran pautan hasil perantara.

## Perangkap

- **Mengelirukannya dengan model logik.** Teori perubahan bersifat sebab-akibat dan menjelaskan (mengapa kita percaya ini berkesan); model logik bersifat berjujukan dan deskriptif (apa yang berlaku mengikut urutan apa). Menghasilkan satu sahaja meninggalkan sama ada "mengapa" atau jejak akauntabiliti tidak ada.
- **Membiarkan andaian tersirat.** Seluruh nilai pemetaan ke belakang ialah mendedahkan andaian yang boleh diuji; teori perubahan yang sekadar menyenaraikan kotak dan anak panah tanpa menamakan apa yang boleh menjadikan setiap pautan palsu hanyalah hiasan.
- **Membinanya sekali dan menyimpannya.** Teori perubahan yang ditulis untuk bidaan pembiayaan dan tidak pernah disemak semula berhenti berguna sebaik sahaja bukti mula bercanggah dengan sesuatu pautan.
- **Melangkau input pihak berkepentingan.** Teori perubahan yang dibina sepenuhnya oleh pengomisen tanpa input kakitangan barisan hadapan atau benefisiari cenderung mengekodkan andaian yang tidak dipercayai oleh sesiapa yang menyampaikan perkhidmatan itu.

## Sumber

- Center for Theory of Change. <https://www.theoryofchange.org/>
- ActKnowledge. <https://www.actknowledge.org/>
- HM Treasury, Magenta Book (2020), Chapter 3. <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, panduan teori perubahan. <https://www.tnlcommunityfund.org.uk/>
