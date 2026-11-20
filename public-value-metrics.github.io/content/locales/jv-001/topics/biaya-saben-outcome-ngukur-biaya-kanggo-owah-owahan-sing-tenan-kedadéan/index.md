# Biaya saben Outcome: Ngukur Biaya kanggo Owah-owahan sing Tenan Kedadéan

Biaya saben outcome (cost per outcome) iku total belanja program dibagi jumlah wong sing nggayuh owah-owahan sing ditemtokaké lan bermakna ing kahanané — dudu jumlah sing mung nampa layanan. Iki metrik efisiensi paling landhep sing bisa dienggo pendana utawa tim pangiriman, amarga meksa pitakonan awal sing dihindhari akèh lembaga amal: apa persisé sing dianggep sukses?

## Kenapa penting

Bank pangan bisa nglaporaké rong angka sing beda banget saka akuntansi taun padha. Biaya saben paket pangan sing dibagèkaké bisa £15. Biaya saben kluwarga sing banjur nggayuh keamanan pangan — ora butuh bantuan pangan darurat maneh, diverifikasi ing titik tindak lanjut — bisa £340. Loro-lorone bener. Mung siji sing ngandhani pendana apa dhuwit kuwi mujarab. Celah antarané loro iku celah antara output lan outcome: paket sing diserahaké iku output; kluwarga sing ora ing krisis maneh iku outcome. Deleng [outcome lawan output](../outcome-vs-output-bedane-asil-langsung-lan-owah-owahan-nyata/).

Sektor katelu Britania Raya wis mbangun infrastruktur rong dekade kanggo meksa pambédan iki. "Four pillar approach" New Philanthropy Capital kanggo efektivitas lembaga amal kanthi gamblang njaluk organisasi nyatakaké outcomeé sadurungé outputé, lan Inspiring Impact — kolaboratif pangukuran dampak Britania Raya sing didhukung pendana — nerbitaké Outcomes Matrix sing saiki dibutuhaké akèh aplikasi hibah supaya dilengkapi lembaga amal. Program riset taunan "State of Hunger" Trussell Trust, sing dilakokaké karo Heriot-Watt University, ana persis amarga cacahé paket waé ora ngandhani apa-apa bab apa wong uwal saka ketidakamanan pangan.

Biaya saben outcome mung bermakna yèn kontrafaktual wis ditetepaké: outcome sing digayuh "senajan tanpa" dudu outcome sing dituku program. Deleng [analisis kontrafaktual](../analisis-kontrafaktual-ngira-ira-apa-sing-bakal-kedadéan-tanpa-intervensi/) lan [displacement lan atribusi](../pamindhahan-lan-atribusi/).

## Petungan

```
Biaya saben outcome = Total biaya program / Jumlah panampa manfaat sing nggayuh outcome sing ditemtokaké

ing ngendi:
  Total biaya program   = biaya pangiriman langsung + bagéan adil overhead
  Outcome sing ditemtokaké = owah-owahan kahanan sing wis ditemtokaké lan bisa diukur
                            (contoné "aman pangan ing tindak lanjut 6 sasi",
                            dudu "nampa paket pangan")
```

Bandhingna karo [basis data biaya unit](../basis-data-biaya-satuan-proksi-keuangan-sing-wis-diteliti-kanggo-outcome-sosial/) (contoné benchmark biaya unit khusus sektor) kanggo ngadili apa biaya saben outcome tartamtu iku apik, rata-rata, utawa elek dibandhingaké intervensi sebanding.

## Conto petungan

**Bank pangan, setaun**:

- Total biaya program: £450.000
- Paket sing dibagèkaké: 30.000
- Biaya saben paket (metrik output): £450.000 / 30.000 = **£15**

Lembaga amal uga nglakokaké survei tindak lanjut enem sasi karo sampel kluwarga, nemokaké yèn 35% kluwarga sing nampa telung paket utawa luwih nglaporaké ora butuh bantuan pangan darurat maneh lan skoré ing ndhuwur ambang keamanan pangan ing modul survei keamanan pangan standar. Saka 1.800 kluwarga sing nampa telung paket utawa luwih ing taun kuwi, 630 nggayuh outcome kuwi.

```
Biaya saben outcome = £450.000 / 630 = £714 saben kluwarga sing nggayuh keamanan pangan
```

Angka £714 iku sing kudu dienggo pendana sing mbandhingaké lembaga amal iki karo pilot transfer tunai utawa layanan nasihat utang — dudu £15. Yèn program transfer tunai sebanding ing wilayah padha nggayuh keamanan pangan ing £500 saben kluwarga, bank pangan ora jelas dalan sing luwih efisien menyang outcome padha, senajan biaya saben paketé katon murah.

## Gegayutan karo rekayasa piranti lunak

Akèh sistem manajemen kasus dibangun kanggo nyathet output, amarga output iku sing kedadéan ing njero transaksi (paket diserahaké, formulir dikirim). Outcome biasané kedadéan luwih telat, kerep ing njaba jendhela pangumpulan normal sistem, lan mbutuhaké kaputusan rancangan sing sengaja: bangun mekanisme tindak lanjut (pemicu survei, alur kontak maneh, kegiatan linkage data) minangka fitur kelas siji, dudu tambahan sing ditempèl kanggo laporan taunan. Insinyur sing mbangun platform manajemen hibah utawa manajemen kasus kanggo sektor kudu nganggep "apa kedadéan outcome, lan kepriyé kita mirsani" minangka pitakonan syarat sing ditakoni sadurungé model data ditetepaké — luwih angel tinimbang nambah kolom outcome sawisé kasunyatan tinimbang counter output. Deleng [outcome lawan output](../outcome-vs-output-bedane-asil-langsung-lan-owah-owahan-nyata/) lan [model logika](../model-logika-kanggo-program-layanan-publik/) kanggo cara nata obrolan syarat kuwi, lan [biaya saben panampa manfaat](../biaya-saben-panampa-manfaat-ngukur-jangkauan-dudu-owah-owahan/) kanggo metrik sing luwih cepet lan luwih kasar sing digoleki tim nalika pelacakan outcome durung dibangun.

## Jebakan

- **Nglaporaké output sing disamar dadi outcome.** "Wong sing kejangkau" dudu "wong sing dibantu." Yèn metrik bisa dikasilaké saka log sistem tanpa kontak tindak lanjut, meh mesthi iku output.
- **Ngolah penyebut.** Nyempitaké populasi outcome dadi "sing ngrampungaké program" kanthi meneng-meneng nyuwèkaké wong sing mundur — asring kasus sing paling angel — lan nggedhèkake tarif sing katon. Nyatakna penyebut minangka kabèh wong sing miwiti, dudu kabèh sing rampung.
- **Ora ana kontrafaktual.** Ngétung sapa waé sing nggayuh outcome, kalebu sing bakal nggayuh senajan tanpa, nggedhèkake apa sing dituku program. Deleng [analisis kontrafaktual](../analisis-kontrafaktual-ngira-ira-apa-sing-bakal-kedadéan-tanpa-intervensi/).
- **Mbandhingaké antar definisi outcome sing ora cocog.** "Aman pangan" sing diukur déning modul survei sing wis divalidasi ora bisa dibandhingaké karo "aman pangan" sing dilaporaké dhéwé ing formulir kepuasan; tabel liga biaya-saben-outcome mung jujur yèn definisi outcome cocog.

## Sumber

- New Philanthropy Capital (NPC), "Four Pillar Approach" to charity effectiveness. <https://www.thinknpc.org/resource-hub/four-pillar-approach/>
- Inspiring Impact, Outcomes Matrix and impact measurement resources. <https://inspiringimpact.org/>
- Trussell Trust and Heriot-Watt University, "State of Hunger" research programme. <https://www.trusselltrust.org/state-of-hunger/>
- GiveWell, "Our criteria" (cost-effectiveness as the leading criterion for charity recommendation). <https://www.givewell.org/how-we-work/our-criteria>
