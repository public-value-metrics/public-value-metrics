# Model Logika (Logic Model) kanggo Program Layanan Publik

Model logika yaiku diagram linier sing nyambungake input, aktivitas, output, outcome, lan dampak (impact) saka sawijining program. Diwaca saka kiwa menyang tengen minangka rantai akuntabilitas: sumber daya mlebu, aktivitas dilakoni, output diasilake, outcome owah kanggo para panampa manfaat, lan dampak kakumpul ing skala sing luwih jembar utawa luwih dawa wektune. Iki minangka struktur baku sing dikarepake para pendana lan auditor kanggo laporan program, lan dadi pasangan "ngarep" saka [teori perubahan](../teori-owah-owahan-peta-sebab-akibat-saka-tujuan-dawa-mundur-menyang-kegiatan/) sing dipetakake mundur.

## Kenapa penting

Magenta Book saka HM Treasury nemtokake model logika minangka unsur wajib ing rancangan evaluasi program, lan pendana kayata National Lottery Community Fund nyusun cithakan aplikasi lan laporane ngubengi rantai lima kolom iki. Pangguna utamane yaiku meksa program kanggo nyatakake ing sak diagram: pira sing bakal dibelanjakake, apa sing bakal ditindakake nganggo dhuwit kuwi, apa sing bakal diasilake, lan, sing paling penting, apa sing kudune owah minangka asile. Tingkat kajembaran iki asring ora katon ing paragraf prosa. Model logika sing kolom input lan aktivitase wis kaisi nanging kolom outcome-e kosong utawa samar bisa langsung dideteksi, lan iku sebabe pendana njaluk model kasebut.

## Petungan

Model logika iku rantai struktural, dudu rumus:

```
Input           Aktivitas         Output              Outcome               Dampak
(sumber daya    (apa sing         (produk langsung    (owah-owahan          (owah-owahan
 sing wis        ditindakake       sing bisa             kanggo para          jangka dawa,
 dikomitmenake)  nganggo iku)       diitung)              panampa manfaat)     tingkat populasi
                                                                               utawa sistemik)
```

Saben kolom kudu luwih spesifik tinimbang sing sadurunge: input yaiku apa sing dibelanjakake, aktivitas yaiku apa sing ditindakake, output yaiku apa sing dikirim tanpa nggatekake efeke, outcome yaiku apa sing owah minangka asile (bedane dibahas lengkap ing [outcome vs output](../outcome-vs-output-bedane-asil-langsung-lan-owah-owahan-nyata/)), lan dampak yaiku owah-owahan jangka dawa sing langgeng, sing asring mung sebagian bisa diatribusi.

## Conto petungan

**Pemerintah daerah (layanan konsultasi utang digital)**:

- Input: anggaran taunan £180.000, 4,0 FTE penasihat, sistem manajemen kasus.
- Aktivitas: sesi penjangkauan, janji temu konsultasi utang siji-siji.
- Output: 900 janji temu rampung; 750 rencana utang lan tunjangan diterbitake.
- Outcome: saka klien sing nganti tindak lanjut 6 sasi, 60% (450 saka 750) nglaporake tunggakan suda, rata-rata suda £1.200 saben klien, dadi total £540.000 pengurangan tunggakan.
- Dampak: tumurune permohonan tunawisma saka basis klien layanan iki sajrone rong taun, sing mung sebagian bisa diatribusi menyang layanan iki bebarengan karo intervensi liyane (deleng [analisis kontrafaktual](../analisis-kontrafaktual-ngira-ira-apa-sing-bakal-kedadéan-tanpa-intervensi/)).

**Lembaga amal (kemitraan rujukan bank pangan)**:

- Input: £45.000, 1,5 FTE koordinator, perjanjian kemitraan karo 12 lembaga perujuk.
- Aktivitas: triase rujukan, ngemas lan mbagekake paket pangan.
- Output: 5.000 paket pangan dibagekake menyang 1.100 rumah tangga.
- Outcome: 68% rumah tangga sing disurvei (748 saka 1.100) nglaporake ketahanan pangan luwih apik ing telpon tindak lanjut sawise 4 minggu.
- Dampak: kontribusi marang suda-ne panjaluk layanan krisis lokal, sing mung dibuktekake ing statistik wilayah agregat lan ora bisa diatribusi menyang lembaga amal iki piyambak.

## Gegayutan karo rekayasa piranti lunak

Model logika meh dadi model data harfiah kanggo sistem outcome: input lan aktivitas yaiku data operasional sing wis kok duweni (belanja, staf, log sesi); output gampang diinstrumentasi amarga diitung ing titik pangiriman; outcome mbutuhake pengumpulan data tindak lanjut sing dirancang kanthi sengaja (survei, nyambungake data administrasi) lan ora bakal ana yen ora ana sing mbangun; dampak biasane mbutuhake data sing disambungake, longitudinal, utawa tingkat populasi ing njaba sistem program apa wae. Para insinyur sing mbangun piranti pelaporan kudu nuntut para komisioner nemtokake indikator outcome lan dampak nalika tahap desain, tinimbang gampang nggawe dasbor mung output amarga iku sing didhukung data transaksional. Deleng [return sosial investasi](../social-return-on-investment-ngukur-bali-modal-sosial-sing-wis-disesuaikan-karo-deadweight-lan-atribusi/) kanggo metode sing menehi nilai khusus kolom outcome lan dampak, lan [realisasi manfaat](../realisasi-manfaat-mbuktèkaké-manawa-manfaat-ing-business-case-tenan-kawujud/) kanggo nglacak apa kolom dampak bener-bener diwujudake.

## Jebakan

- **Mandheg ing output.** Dasbor sing nglaporake janji temu sing rampung utawa paket pangan sing dibagekake lan nyiratake manfaat mung nglaporake aktivitas, dudu asil; deleng [outcome vs output](../outcome-vs-output-bedane-asil-langsung-lan-owah-owahan-nyata/).
- **Ora ana pranala sebab-akibat sing diterangake antar kolom.** Model logika nyatakake rantai nanging ora nerangake kenapa aktivitas kudu ngasilake output sing banjur ngasilake outcome; panalaran kuwi kalebu ing [teori perubahan](../teori-owah-owahan-peta-sebab-akibat-saka-tujuan-dawa-mundur-menyang-kegiatan/), lan model logika tanpa teori kuwi ing mburine durung diuji.
- **Dianggep minangka dokumen proposal sepisan wae.** Model logika sing digawe mung kanggo nyukupi aplikasi pendanaan lan ora tau dianyari ora maneh nggambarake apa sing bener-bener ditindakake program.
- **Klaim atribusi sing mlebu-mlebu ing kolom dampak.** Ngaku owah-owahan tingkat populasi disebabake mung dening sawijining program, tanpa kontrafaktual, ngluwihi apa sing bisa didhukung bukti.

## Sumber

- HM Treasury, Magenta Book (2020), Chapter 3. <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, logic model guidance. <https://www.tnlcommunityfund.org.uk/>
- W.K. Kellogg Foundation, "Logic Model Development Guide" (2004). <https://www.wkkf.org/resource-directory/resources/2004/01/logic-model-development-guide>
