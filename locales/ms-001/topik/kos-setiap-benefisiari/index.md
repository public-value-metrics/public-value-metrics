# Kos Setiap Benefisiari

Kos setiap benefisiari ialah jumlah kos program dibahagikan dengan bilangan orang unik yang menerima
perkhidmatan — sesiapa yang disentuh, tanpa mengira sama ada keadaan mereka sebenarnya berubah. Ia ialah
angka kecekapan terpantas yang boleh dihasilkan sesebuah organisasi, kerana "siapa yang kami layani" hampir
selalu sudah ada dalam sistem pengurusan kes, sedangkan "siapa yang dibantu" biasanya tidak.

## Mengapa ini penting

Pembiaya meminta kos setiap benefisiari secara berterusan, dan atas sebab yang boleh dipertahankan: ia
tersedia serta-merta, ia boleh dibandingkan merentas portfolio program yang sangat berbeza, dan ia jujur
tentang jangkauan dengan cara yang tidak dimiliki oleh tuntutan hasil — yang lebih lama untuk disahkan dan
lebih mudah dibesar-besarkan. UK Charities SORP (Statement of Recommended Practice), yang mengawal cara badan
amal melapor di bawah FRS 102, menghendaki laporan tahunan pemegang amanah menerangkan pencapaian berbanding
objektif, tetapi kebanyakan akaun pengurusan badan amal yang lebih kecil masih lalai kepada kos unit
berasaskan jangkauan kerana ia murah dihasilkan dan mesra audit.

Bahayanya ialah menganggap kos setiap benefisiari seolah-olah ia menjawab soalan yang tidak dapat
dijawabnya: sama ada wang itu berkesan. Lihat [kos setiap hasil](../kos-setiap-hasil/) untuk metrik yang
benar-benar menjawabnya, dan [hasil berbanding output](../hasil-berbanding-output/) untuk perbezaan asasnya. Kos
setiap benefisiari ialah metrik triaj dan jangkauan yang sah — ia memberitahu pembiaya sejauh mana wang
boleh dimanfaatkan — tetapi kos setiap benefisiari yang rendah boleh bermakna sama ada kecekapan sebenar atau
perkhidmatan yang begitu nipis sehingga tidak mengubah apa-apa.

## Matematiknya

```
Kos setiap benefisiari = Jumlah kos program / Bilangan orang unik yang dilayani

Kontras:
Kos setiap hasil       = Jumlah kos program / Bilangan orang yang mencapai hasil yang ditakrifkan

Kos setiap benefisiari sentiasa ≤ kos setiap hasil, kerana populasi hasil ialah subset
(selalunya kecil) populasi benefisiari.
```

## Contoh yang diselesaikan

**Bank makanan, tahun yang sama dengan contoh kos setiap hasil**:

- Jumlah kos program: £450,000
- Isi rumah unik yang dilayani (tiga bungkusan atau lebih): 1,800

```
Kos setiap benefisiari = £450,000 / 1,800 = £250 bagi setiap isi rumah yang dilayani
```

Bandingkan kedua-dua metrik bersebelahan:

| Metrik | Penyebut | Keputusan |
|---|---|---|
| Kos setiap benefisiari | 1,800 isi rumah dilayani | £250 |
| Kos setiap hasil | 630 isi rumah mencapai keterjaminan makanan | £714 |

Pembiaya yang hanya melihat £250 mungkin menyimpulkan ini badan amal yang sangat cekap. Pembiaya yang
melihat kedua-dua angka boleh bertanya soalan yang lebih berguna: adakah jurang antara jangkauan (1,800)
dengan hasil (630) ialah jurang pengumpulan data, jurang reka bentuk, atau gambaran jujur betapa sukarnya
keterjaminan makanan dicapai dengan bantuan makanan sahaja?

**Badan amal latihan pekerjaan, ilustrasi**: kos setiap benefisiari (didaftarkan) = £2,000; kos setiap hasil
(pekerjaan mampan pada 6 bulan) = £11,000, kerana hanya 18% pendaftar menamatkan program dan
mendapat kerja yang mampan. Dua angka yang berbeza dengan faktor lima adalah lazim di mana sahaja kadar
penyiapan atau ketahanan rendah — badan amal latihan dan bank makanan secara struktur serupa di sini.

## Kaitan dengan kejuruteraan perisian

Kos setiap benefisiari ialah metrik lalai dalam perisian bukan untung kerana ia metrik yang terhasil
daripada rekod benefisiari tanpa kerja tambahan: cipta kes, log perkhidmatan, kira baris. Membina sistem
yang turut menyokong kos setiap hasil bermakna sengaja menambah entiti kelas pertama kedua — peristiwa hasil,
bertarikh dan ditakrifkan secara bebas daripada penyampaian perkhidmatan — dan menahan godaan membiarkan
"kes ditutup" mewakili "hasil dicapai". Apabila menetapkan skop platform pengurusan geran atau CRM, tanya
mana satu daripada dua metrik yang sebenarnya dipaparkan oleh setiap papan pemuka, dan labelkan dengan
sewajarnya; mencampuradukkan keduanya dalam satu jubin "impak" ialah antara punca peringkat perisian yang
paling lazim bagi perangkap di bawah. Lihat [pangkalan data kos unit](../pangkalan-data-kos-seunit/)
untuk penanda aras mana-mana metrik setelah ia dilabel dengan betul.

## Perangkap

- **Mempersembahkan kos setiap benefisiari sebagai impak.** Ia mengukur jangkauan, bukan perubahan. Labelkan papan pemuka
  dan laporan "kos setiap orang yang dilayani", bukan "kos setiap orang yang dibantu".
- **Pengiraan berganda merentas program.** Seseorang yang menerima bungkusan makanan dan nasihat hutang
  daripada badan amal yang sama ialah satu benefisiari, bukan dua, jika penyebut bertujuan menerangkan jangkauan
  unik; tentukan dan dokumenkan konvensyen mana yang digunakan.
- **Menganggap angka lebih rendah sentiasa lebih baik.** Kelab makan tengah hari tanpa janji sentiasa
  mengalahkan perkhidmatan pengurusan kes intensif pada kos setiap benefisiari, kerana kos menyentuh seseorang
  dengan ringan lebih rendah. Itu tidak mengatakan apa-apa tentang mana yang menghasilkan perubahan lebih
  tahan lama bagi setiap paun.
- **Menukar penyebut secara senyap antara laporan.** Angka kos setiap benefisiari yang disebut dalam satu
  laporan tahunan terhadap "didaftarkan" dan dalam laporan seterusnya terhadap "selesai" tidak setanding
  dari tahun ke tahun; nyatakan penyebut setiap kali.

## Sumber

- Charity Commission for England and Wales, guidance on charity reporting. <https://www.gov.uk/government/organizations/charity-commission>
- Charities SORP (FRS 102). <https://www.charitysorp.org/>
- New Philanthropy Capital (NPC), "Four Pillar Approach." <https://www.thinknpc.org/resource-hub/four-pillar-approach/>
