# Pembayaran Adhedhasar Asil lan Obligasi Dampak Sosial (Payment by Results and Social Impact Bonds, PbR/SIB)

Payment by results (PbR) mbayar panyedhia adhedhasar outcome sing wis diverifikasi, dudu aktivitas sing ditindakake. Social impact bond (SIB) yaiku struktur pembiayaan PbR khusus ing ngendi investor swasta utawa filantropi mbiayai pangiriman layanan ing wiwitan lan dibayar maneh, kanthi return, dening komisioner pamarentah mung yen outcome sing diukur kanthi mandiri tekan ambang sing disepakati, saengga risiko pangiriman pindhah saka pembayar pajak menyang investor.

## Kenapa penting

SIB pisanan ing donya diluncurake ing HMP Peterborough ing September 2010: Social Finance ngumpulake £5 yuta saka 17 investor kanggo mbiayai "One Service", sing makarya karo tahanan ukuman cendhak (sangisoring 12 sasi) kanggo nyuda residivisme, kanthi Ministry of Justice lan Big Lottery Fund sarujuk mbayar maneh investor mung yen kedadeyan reconviction suda paling ora 7,5% dibandhingake kohort pembanding nasional sing dicocokake. Kohort pungkasan saka pilot Peterborough nyathet penurunan reconviction 9,7%, jelas ing ndhuwur ambang, lan investor dibayar maneh kanthi return. Mekanisme iki penting amarga ngatasi masalah komisioning tartamtu: pamarentah pengin mbayar outcome tinimbang input, nanging ora bisa nyerep risiko finansial intervensi sing bisa wae ora mlaku, mula struktur SIB mindhah risiko kuwi menyang investor sing gelem njamin. Government Outcomes Lab (GO Lab) ing Blavatnik School of Government Oxford saiki njaga basis bukti publik paling lengkap babagan kinerja PbR lan SIB ing saindenging jagad, nglacak luwih saka 200 obligasi dampak sacara global lan nerbitake riset babagan fitur desain apa sing gegandhengan karo sukses utawa gagal. Piwulang sing bola-bali dibalekake basis bukti yaiku *metrik outcome sing dipilih*, lan sapa sing nanggung risiko ora kasembadan, nemtokake meh kabeh liyane babagan carane kontrak PbR bener-bener tumindak ing praktik.

## Petungan

```
Pembayaran PbR = pembayaran dhasar (yen ana) + Σ (outcome sing digayuh × rega unit saben outcome)

Return investor obligasi dampak sosial:
  Modal investor      = modal ing wiwitan sing mbiayai pangiriman layanan
  Pembayaran outcome  = komisioner mung mbayar yen outcome ≥ ambang, diskalakake miturut
                         sepira ngluwihi ambang kinerja kasebut
  Return investor     = pembayaran outcome sing ditampa − modal investor
                         (tingkat return, asring diwatesi, nggambarake risiko sing dijupuk)

Parameter desain utama sing nemtokake tumindak kabeh kontrak:
  Metrik outcome         — kudu outcome, dudu output (deleng outcomes-vs-outputs)
  Pembanding/kontrafaktual — biasane kohort sing dicocokake (deleng counterfactual-analysis)
  Ambang pembayaran       — peningkatan minimum sadurunge pembayaran apa wae kepicu
  Kurva pembayaran        — linier, bertahap, utawa diwatesi ing ndhuwur ambang
  Diskon atribusi/deadweight — deleng additionality-and-deadweight
```

## Conto petungan

**Peterborough One Service** (angka ilustratif saka evaluasi sing diterbitake):

```
Modal investor sing diklumpukake: £5.000.000
Kohort:                           ~3.000 tahanan lanang ukuman cendhak ing rong kohort
Ambang:                           penurunan reconviction ≥7,5% dibandhingake klompok pembanding
                                  nasional sing dicocokake, utawa ora ana pembayaran
Asil Kohort 1:                    penurunan 8,4% (sangisoring bar kontraktual kanggo kohort
                                  kasebut piyambak miturut aturan asli)
Asil kohort gabungan/pungkasan:   penurunan 9,7% (ing ndhuwur ambang)
Pembayaran outcome:               pamarentah (Ministry of Justice / Big Lottery Fund)
                                  mbayar saben poin persentase ing ndhuwur ambang, mbiayai
                                  pambayaran maneh investor plus return
```

**Kontrak PbR pamarentah daerah (ilustratif)**: layanan intervensi kulawarga dikomisi kanthi £4.000 saben kulawarga sing dirujuk (pembayaran aktivitas) plus £6.000 saben kulawarga tanpa rujukan perlindungan bocah maneh 12 sasi sawise ditutup (pembayaran outcome). 200 kulawarga dirujuk, 150 kasus ditutup, 96 tetep tanpa rujukan ing 12 sasi:

```
Pembayaran aktivitas = 200 × £4.000 = £800.000
Pembayaran outcome   = 96 × £6.000  = £576.000
Total biaya kontrak = £1.376.000 kanggo 96 outcome lestari sing dikonfirmasi
Biaya saben outcome sing dikonfirmasi ≈ £14.333 (deleng cost-per-outcome)
```

## Gegayutan karo rekayasa piranti lunak

Pembayaran adhedhasar asil iku masalah penyelarasan insentif sadurunge dadi masalah data, lan sistem data iku panggonan ing ngendi penyelarasan kuwi tahan utawa pedhot. Verifikasi outcome sing mandiri lan katon yen dirusak yaiku kabeh pamaine: komisioner lan panyedhia duwe insentif sing bertentangan babagan carane kasus ambigu dikode, mula sistem sing nyathet outcome butuh jejak audit, perjanjian pambagi data karo verifier mandiri (asring badan beda saka panyedhia, kadhang badan statistik resmi sing nyocokake karo rekaman polisi utawa tunjangan), lan versioning outcome sing ora bisa diowahi kanggo definisi outcome, padha karo jebakan "ngowahi metrik" ing [KPI sektor publik](../kpi-sektor-publik/). Petungan atribusi gumantung ing metode kohort sing dicocokake saka [counterfactual-analysis](../analisis-kontrafaktual-ngira-ira-apa-sing-bakal-kedadéan-tanpa-intervensi/), sing butuh kode sing bisa direproduksi lan diaudit, dudu spreadsheet sepisan wae. Lan metrik dhewe kudu outcome sing asli, dudu aktivitas proksi (deleng [outcome vs output](../outcome-vs-output-bedane-asil-langsung-lan-owah-owahan-nyata/)), amarga kontrak PbR sing mbayar output mung menehi label anyar marang pendanaan business-as-usual kanthi biaya transaksi tambahan. Nalika return sosial SIB dimodelake kanthi prospektif, appraisal kuwi biasane langsung nyilih metodologi [return sosial investasi](../social-return-on-investment-ngukur-bali-modal-sosial-sing-wis-disesuaikan-karo-deadweight-lan-atribusi/).

## Jebakan

- **Mbayar outcome proksi sing gampang dimanipulasi.** "Kehadiran ing sesi" yaiku aktivitas sing didandani dadi outcome; tuntut ukuran sing nggambarake owah-owahan sing bener-bener dikarepake (residivisme, pagaweyan, stabilitas omah).
- **Ora ana kontrafaktual sing kredibel.** Tanpa klompok pembanding sing dicocokake, peningkatan bisa dadi regresi menyang rata-rata utawa tren sing luwih jembar, dudu efek program; deleng [counterfactual-analysis](../analisis-kontrafaktual-ngira-ira-apa-sing-bakal-kedadéan-tanpa-intervensi/) lan [additionality-and-deadweight](../additionality-lan-deadweight-nyingkirake-asil-sing-bakal-kedadéan-senajan-tanpa-program/).
- **Ngremehake biaya transaksi lan evaluasi.** Verifikasi mandiri, panyambungan data, lan administrasi kontrak kanggo skema PbR/SIB rutin tekan angka rong digit minangka persentase nilai kontrak; basis bukti GO Lab nyathet iki minangka pendorong bola-bali penghentian skema.
- **Cherry-picking utawa "parking".** Panyedhia sing dibayar saben outcome duwe insentif langsung kanggo ngutamakake klien sing paling mungkin sukses wae lan ngenyang kasus paling angel; rancang tingkat pembayaran utawa penyesuaian campuran kasus kanggo nglawan iki.

## Sumber

- Government Outcomes Lab, University of Oxford, Blavatnik School of Government.
  <https://golab.bsg.ox.ac.uk/>
- Social Finance, "Peterborough Social Impact Bond" evaluation summaries.
  <https://golab.bsg.ox.ac.uk/case-studies/peterborough-social-impact-bond/>
- Ministry of Justice, "Peterborough Social Impact Bond HMP Doncaster: Final Reconviction Results
  for the Peterborough Social Impact Bond."
