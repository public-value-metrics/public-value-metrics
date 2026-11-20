# Kanalų perkėlimo sutaupymai

Kanalų perkėlimo sutaupymai – tai prognozuojamas kaštų sumažėjimas perkeliant sandorių apimtį iš brangių kanalų – telefono, tiesioginio aptarnavimo prie langelio, popierinio pašto – į pigų skaitmeninį savitarną. Tai finansinis „pirmiausia skaitmeniniu būdu“ variklis, o kartu ir verslo atvejo eilutė, labiausiai linkusi būti klaidinga, nes prielaida, kuria ji remiasi – kad neprisijungę kanalai mažėja augant skaitmeniniam naudojimui, – tik kartais yra teisinga.

## Kodėl tai svarbu

Aritmetika atrodo neginčijama, naudojant Skaitmeninio efektyvumo ataskaitos (Digital Efficiency Report) [kaštų už sandorį](../kaštai-vienam-sandoriui/) skaičius: perkėlus milijoną sandorių iš £8,62 vizito į £0,15 skaitmeninį, sutaupoma daugiau nei 8 mln. svarų. Tačiau sutaupymas tampa perskirstyti tinkamais pinigais tik tada, jei mažėjančio kanalo *pastovūs pajėgumai* iš tikrųjų išformuojami – skambučių centro vietos, aptarnavimo prie langelio darbuotojai, telefono sutarties minutės, – o vietos valdžios skaitmeninės programos ne kartą nustatė, kad bendra kontaktų apimtis nemažėja pagal skaitmeninio naudojimo augimą. Vietos valdžios skaitmeninės transformacijos programų ir tokių organizacijų kaip Socitm bei Vietos valdžios asociacija (Local Government Association) tyrimai dokumentavo pasikartojantį modelį: skaitmeniniai kanalai pritraukia tikrai naują kontaktą (piliečiai, kurie nebūtų skambinę ar lankęsi, dabar tai daro, nes lengviau), o didelė „skaitmeninių“ sandorių dalis nutrūksta pusiaukelėje ir vis tiek sukelia telefono skambutį – todėl telefono apimtis sumažėja kur kas mažiau, nei rodytų skaitmeninio naudojimo procentas, kartais absoliučiais skaičiais išvis nemažėja, nors jos *dalis* bendrame kontakte mažėja.

## Matematika

```
Bendrasis kanalų perkėlimo sutaupymas = perkelta apimtis × (kaina_senas_kanalas − kaina_skaitmeninis)

Grynasis (realizuotas) sutaupymas = bendrasis sutaupymas
                       − naujas / šešėlinis poreikis, sukurtas lengvesnio kanalo
                       − gedimo poreikio kaina (skaitmeniniai gedimai, kurie
                         vis tiek sukelia telefono skambutį ar apsilankymą prie langelio)
                       − neišformuotų pastovių pajėgumų kaina (skambučių
                         centras gali mažinti darbuotojus tik diskrečiais vienetais;
                         15 % apimties sumažėjimas retai leidžia sumažinti 15 %
                         etatų)

Realizavimo riba: sutaupymai tampa užtikrinti tik tada, kai apimtis nukrinta
žemiau lygio, kurį senasis kanalas gali aptarnauti kitu mažesniu diskrečiu
pajėgumų žingsniu (pvz., prarandama viena visa pamaina, viena visa darbo vieta,
viena sutartinė etatų grupė)
```

## Pavyzdys su skaičiavimais

**Apskrities tarybos „mėlynojo ženklelio“ (blue badge) atnaujinimo paslauga**: 60 000 atnaujinimų per metus, anksčiau 100 % telefonu / popieriumi po £6,40 už sandorį. Paleidžiama nauja skaitmeninė paslauga, per metus pasiekiama 65 % skaitmeninio naudojimo, po £0,30 už skaitmeninį sandorį.

```
Naivus (bendrasis) sutaupymo skaičiavimas:
  39 000 perkelta × (£6,40 − £0,30) = £237 900 per metus

Kas iš tikrųjų įvyko pagal tarybos kontaktų centro duomenis:
  Telefono apimtis sumažėjo nuo 60 000 per metus iki 46 000 per metus (−23 %, o ne −65 %)
  nes: 9 000 skaitmeninių kelionių nutrūko ir sukėlė tolesnį skambutį
       (gedimo poreikio nutekėjimas), o 4 000 žmonių, kurie anksčiau
       išvis neatnaujindavo, dabar atnaujina, radę, kad tai lengva internete
       (šešėlinis poreikis – tikras prieigos pagerinimas, bet ne sutaupymas)

  Telefono kontaktų centras komplektuojamas 8 000 skambučių / etatui grupėmis;
  14 000 skambučių sumažėjimas (60 000 → 46 000) išlaisvina 1,75 etato,
  praktikoje apvalinama žemyn iki 1 etato, kuris iš tikrųjų perskirstytas = £34 000 per metus

Realizuotas sutaupymas = £34 000 per metus plius išvengtos skaitmeninio kanalo
  kūrimo / eksploatavimo išlaidos 39 000 sandorių ≈ £34 000 + (39 000 × £0,30
  skaitmeninė kaina jau įskaityta) – tik dalis £237 900 pagrindinio skaičiaus,
  nors paslauga vis tiek vienareikšmiškai geresnė naudotojams.
```

## Ryšys su programine inžinerija

Inžinerinė pamoka tokia: kanalų perkėlimo sutaupymus realizuoja *operaciniai* sprendimai (darbo grafikai, išformavimas, sutarčių perderinimas), o ne programinės įrangos paleidimas – komanda gali atitikti kiekvieną [skaitmeninių paslaugų standarto](../skaitmeninių-paslaugų-standartas/) punktą ir vis tiek pasiekti nulinį grynąjį sutaupymą, jei niekas neišformuoja senojo kanalo pastovių pajėgumų. Gedimo poreikio instrumentavimas (kur skaitmeninėje kelionėje naudotojai nutraukia ir ką daro toliau) yra išsprendžiama piltuvo analitikos problema ir vienas didžiausią poveikį turinčių dalykų, kuriuos inžinerijos komanda gali padaryti sutaupymų atvejui apsaugoti; tai taip pat tiesioginė nuoroda į [kaštus už sandorį](../kaštai-vienam-sandoriui/), kuriuos gedimo poreikis tyliai išpučia. Platesnę drausmę tikrinti, ar verslo atvejo sutaupymai tikrai atsiranda, žr. [naudos realizavimas](../naudos-realizavimas/), o kodėl neprisijungęs kanalas paprastai negali ir neturėtų būti visiškai uždarytas – [skaitmeninė įtrauktis](../skaitmeninė-įtrauktis/).

## Dažniausios klaidos

- **Prielaida apie 1:1 kanalų pakeitimą**: skaitmeninio naudojimo modeliavimas kaip tiesioginis atėmimas iš telefono / langelio apimties, ignoruojant šešėlinį poreikį ir gedimo poreikio nutekėjimą, dokumentuotą vietos valdžios kanalų perkėlimo tyrimuose.
- **Bendrųjų sutaupymų įtraukimas prieš išformavimą**: sutaupymo įskaitymas verslo atvejyje tais metais, kai naudojimas padidėja, o ne tais metais (jei kada nors), kai senojo kanalo pajėgumai iš tikrųjų sumažinami.
- **Personalo kaštų laiptuotos prigimties ignoravimas**: 20 % apimties sumažėjimas retai virsta 20 % kaštų sumažėjimu, nes kontaktų centrai ir langeliai komplektuojami diskrečiomis grupėmis, o ne tolydžiai.
- **Šešėlinio poreikio laikymas švaistymu**: naujas kontaktas iš anksčiau atskirtų ar atgrasytų naudotojų yra tikras [visuomeninės vertės](../viešoji-vertė/) padidėjimas, o ne modeliavimo klaida – apie tai reikėtų pranešti kaip apie prieigos rezultatą, o ne atimti kaip triukšmą.

## Šaltiniai

- Cabinet Office, Digital Efficiency Report (2012). <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- Local Government Association, digital transformation and channel shift resources. <https://www.local.gov.uk/our-support/efficiency-and-income-generation/digital-transformation>
- Socitm, local public services digital insight research. <https://www.socitm.net/>
