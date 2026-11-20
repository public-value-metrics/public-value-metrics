# DI produktyvumas viešajame sektoriuje

Rodikliai, rodantys, ką DI kodavimo pagalba iš tikrųjų daro inžinerinei produkcijai, – pasiūlymų priėmimo dažnis, kontroliuojamų tyrimų pagreitis, PR (pull request) pralaidumas ir kodo išlikimas – remiasi tikrai prieštaringais įrodymais net prieš pridedant viešojo sektoriaus apribojimus: duomenų klasifikavimas riboja, kurių senosios sistemų dalių DI įrankis apskritai gali liesti, pirkimų ciklai reiškia, kad vertinamas įrankis dažnai atsilieka vienu modelių karta nuo dabartinių galimybių, o saugumo patikimumo reikalavimai nustato, kas ir ką juo gali daryti.

## Kodėl tai svarbu

Du dažniausiai cituojami kontroliuojami tyrimai rodo priešingas kryptis. Peng ir bendraautorių 2023 m. „GitHub Copilot“ atsitiktinių imčių kontroliuojamas tyrimas nustatė, kad programuotojai nuo nulio rašomą HTTP serverio užduotį su „Copilot“ atliko 55,8 % greičiau (1 val. 11 min. prieš 2 val. 41 min., n=95). METR 2025 m. atsitiktinių imčių kontroliuojamas tyrimas nustatė, kad patyrę atvirojo kodo programuotojai, dirbantys su *savo paties brandžiomis saugyklomis*, su 2025 m. pradžios DI įrankiais dirbo 19 % lėčiau, nors tikėjo dirbantys maždaug 20 % greičiau. Abu tyrimai yra tvirti; pats prieštaravimas ir yra išvada – nuo nulio rašomų užduočių veiksmingumas neperkeliamas į brandaus kodo bazės veiksmingumą, o didelė dalis vyriausybės inžinerijos yra darbas su brandžiu kodu sistemose, kurios yra senesnės ir savitesnės nei vidutinė komercinė saugykla. Centrinė skaitmeninių ir duomenų reikalų tarnyba (Central Digital and Data Office) savo Generative AI Framework for HMG (2024, <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>) nustatė atsakingo diegimo principus būtent todėl, kad šio įrodymų pagrindo negalima tiesiog perimti iš tiekėjų demonstracijų; tikimasi, kad departamentai prieš diegdami įvertins įrankius pagal savo duomenų tvarkymo ir saugumo reikalavimus.

## Matematika

```
Priėmimo dažnis  = priimti pasiūlymai / parodyti pasiūlymai
Išlikimo dažnis  = DI kodas, išlikęs iki sujungimo / priimtas DI kodas
Pagreitis        = (t_kontrolinė − t_DI) / t_kontrolinė  (TIK iš kontroliuojamo palyginimo)
Pralaidumo pokytis = Δ sujungtų PR / programuotojui / savaitei

Viešojo sektoriaus aprėpties koeficientas:
  tinkama kodo bazės dalis = kodo eilutės sistemose, kuriose klasifikacija
    (OFFICIAL, OFFICIAL-SENSITIVE, SECRET) apskritai leidžia naudoti įrankį

Vertės modelis = programuotojai × tinkama aprėptis × sutaupytas laikas × pilnutinis įkainis × išnaudojimas
             — kiekvienam dėmeniui reikia vietinio matavimo, o aprėpties
             koeficientas privačiame sektoriuje analogo neturi
```

## Pavyzdys su skaičiavimais

Vyriausybės departamentas išbando DI kodavimo asistentą su 300 programuotojų, tačiau įrankiui leidžiamos tik OFFICIAL klasifikacijos sistemos – 70 % sistemų pagal programuotojų paskirstymą, o likę 30 % (aukštesnės klasifikacijos sistemos) visiškai neįtraukiami.

```
Tinkami programuotojai = 300 × 0,70 = 210

Piloto rezultatas: pačių pranešta sutaupyta 40 min. per dieną;
              išmatuotas užduočių lygio sutaupymas 12 min. per dieną (0,2 val.)
              — METR suvokimo spraga, pakartota realiame gyvenime

Vertiname IŠMATUOTĄ skaičių:
  210 × 0,2 val. × 220 dienų × £55 per val. pilnutinis įkainis × 0,6 išnaudojimas
  = 210 × 44 valandos × £55 × 0,6
  = 9 240 valandų × £55 × 0,6 ≈ £304 920 per metus pajėgumo

Kaina: 210 licencijuotų vietų × £22 per mėnesį × 12 ≈ £55 440 per metus

Grynasis pajėgumo santykis ≈ 304 920 / 55 440 ≈ 5,5:1
```

Finansuotina esant maždaug trečdaliui pačių praneštos naudos ir tik pritaikius klasifikacijos ribą – licencijavus visus 300 programuotojų pagal pačių pranešamą skaičių būtų pervertinta ir tinkama populiacija, ir tikrasis sutaupymas.

## Ryšys su programine inžinerija

Drausmės, kurios perkeliamos tiesiogiai: atlikite **pragmatinius bandymus** departamento savo kodo bazėje ir su tikrais darbo užsakymais, o ne tiekėjų demonstracinėmis užduotimis, nes METR rezultatas yra būtent brandaus kodo išvada; **priėmimo dažnį laikykite pakaitiniu rodikliu, o ne rezultatu** – didelis priėmimas su mažu išlikimu yra programinės įrangos atitikmuo perteklinei diagnostikai; prie kiekvieno pralaidumo teiginio pridėkite **stabilumo patikrą**, nes DORA 2025 m. ataskaita nustatė, kad DI diegimas didina pralaidumą, bet blogina pakeitimų stabilumą – būtent tokią grynosios naudos analizę ir skirta atlikti [DORA rodikliai visuomeninei vertei](../dora-metrikos-viešajai-vertei/); ir būkite sąžiningi, kad DI įrankiai gali padidinti, o ne sumažinti atotrūkį senosiose sistemose, apsunkintose [techninės skolos](../techninė-skola-kaip-viešosios-vertės-erozija/), nes mokymo duomenys nepakankamai atspindi COBOL, 4GL ir pritaikytą mainframe kodą, kuris įprastas valdžios sektoriuje, todėl pasiūlymų kokybė sistemose, kurioms pagalbos reikia labiausiai, dažnai yra silpniausia. Tai susiję su platesniu klausimu apie [DI vertę valdžios sektoriuje](../dirbtinio-intelekto-vertė-valdžios-sektoriuje/) ir turėtų būti valdoma pagal tuos pačius [viešojo sektoriaus kibernetinio saugumo vertės](../viešojo-sektoriaus-kibernetinio-saugumo-vertė/) apribojimus, kurie nustato, kur bet kuris trečiosios šalies įrankis apskritai gali matyti kodą ar duomenis.

## Dažniausios klaidos

- **Tiekėjų tyrimų perkėlimas**: nuo nulio rašomų užduočių atsitiktinių imčių tyrimų pagreičių taikymas senųjų sistemų integravimo darbui yra būtent ta klaida, kurią atskleidė METR tyrimas.
- **Pačių pranešimas kaip matavimas**: 20 procentinių punktų skirtumas tarp suvokimo ir išmatuoto rezultato yra didžiausias žinomas šios literatūros šališkumas, išpučiantis verslo atvejus, kurie remiasi vien programuotojų apklausomis.
- **Klasifikacijos ribos ignoravimas**: licencijavimo ir vertės modeliai, sudaryti pagal visą darbuotojų skaičių, o ne pagal tinkamą, klasifikacijos požiūriu leistiną poaibį, sistemingai pervertina ir ekonominį veiksmingumą, ir pasiekiamą aprėptį.
- **Pirkimų ciklo atsilikimas**: pagal sistemą vykdomi įrankių pirkimai gali reikšti, kad pilotinis projektas vertina modelio kartą, kuri iki visiško diegimo bus 12–18 mėnesių atsilikusi nuo viešai prieinamos, todėl pradinio verslo atvejo pagreičio prielaida pasensta dar prieš paleidimą.

## Šaltiniai

- Peng S, et al., "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot", 2023. <https://arxiv.org/abs/2302.06590>
- METR, "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity", 2025. <https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/>
- DORA, 2025 State of AI-assisted Software Development report. <https://dora.dev/dora-report-2025/>
- Central Digital and Data Office, Generative AI Framework for HMG, 2024. <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>
