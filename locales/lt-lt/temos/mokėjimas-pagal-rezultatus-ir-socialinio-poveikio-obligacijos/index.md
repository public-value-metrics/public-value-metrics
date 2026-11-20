# Mokėjimas pagal rezultatus ir socialinio poveikio obligacijos (PbR/SIB)

Mokėjimas pagal rezultatus (payment by results, PbR) apmoka teikėjui pagal patikrintus pasiektus rezultatus, o ne atliktą veiklą. Socialinio poveikio obligacija (social impact bond, SIB) yra konkreti PbR finansavimo struktūra, kurioje privatūs ar filantropiniai investuotojai iš anksto finansuoja paslaugų teikimą, o vyriausybės užsakovas juos grąžina (su grąža) tik jei nepriklausomai išmatuoti rezultatai pasiekia sutartas ribas; taip teikimo rizika perkeliama nuo mokesčių mokėtojo ant investuotojo.

## Kodėl tai svarbu

Pirmoji pasaulyje SIB buvo pradėta HMP Peterborough kalėjime 2010 m. rugsėjį: Social Finance surinko 5 mln. £ iš 17 investuotojų, kad finansuotų „One Service“, dirbančią su trumpalaikėmis bausmėmis nuteistais kaliniais (iki 12 mėnesių), siekiant sumažinti recidyvą; Teisingumo ministerija ir Big Lottery Fund susitarė grąžinti investuotojams tik jei pakartotinių apkaltinamųjų nuosprendžių skaičius sumažės bent 7,5 %, palyginti su suderinta nacionaline palyginamąja kohorta. Paskutinė Peterborough bandomojo projekto kohorta užfiksavo 9,7 % pakartotinių nuosprendžių sumažėjimą, ženkliai viršijantį ribą, ir investuotojams buvo grąžinta su grąža. Mechanizmas buvo svarbus, nes išsprendė konkrečią užsakymo problemą: vyriausybė norėjo mokėti už rezultatus, o ne už išteklius, bet negalėjo prisiimti finansinės rizikos dėl intervencijos, kuri gali neveikti, todėl SIB struktūra perkėlė tą riziką investuotojams, pasirengusiems ją prisiimti. Government Outcomes Lab (GO Lab) Oksfordo Blavatnik valdymo mokykloje dabar tvarko išsamiausią viešą PbR ir SIB veiklos įrodymų bazę pasaulyje, stebi gerokai daugiau nei 200 poveikio obligacijų visame pasaulyje ir skelbia tyrimus apie tai, kokios sandaros savybės koreliuoja su sėkme ar nesėkme. Pamoka, prie kurios įrodymų bazė nuolat grįžta, yra tai, kad *pasirinkta rezultato metrika* ir tai, kas prisiima jos nepasiekimo riziką, lemia beveik viską kita apie tai, kaip PbR sutartis veikia praktikoje.

## Matematika

```
PbR mokėjimas = bazinis mokėjimas (jei yra) + Σ (pasiektas rezultatas × vieneto kaina už rezultatą)

Socialinio poveikio obligacijos investuotojo grąža:
  Investuotojo įnašas     = pradinis kapitalas, finansuojantis paslaugų teikimą
  Mokėjimas už rezultatą  = užsakovas moka tik jei rezultatas ≥ riba, skalėje
                            pagal tai, kiek aukščiau ribos pasiekiamas rezultatas
  Investuotojo grąža      = gauti mokėjimai už rezultatus − investuotojo įnašas
                            (grąžos norma, dažnai ribojama, atspindinti prisiimtą riziką)

Pagrindiniai sandaros parametrai, lemiantys visos sutarties elgseną:
  Rezultato metrika          - turi būti rezultatas, o ne produktas (žr. rezultatai ir produktai)
  Palyginimas / kontrfaktinis scenarijus - paprastai suderinta kohorta (žr. kontrfaktinė analizė)
  Mokėjimo riba              - minimalus pagerėjimas, nuo kurio pradedama mokėti
  Mokėjimo kreivė            - tiesinė, laiptuota ar ribojama virš ribos
  Priskyrimo / deadweight nuolaida - žr. papildomumas ir deadweight
```

## Pavyzdys su skaičiavimais

**Peterborough „One Service“** (iliustraciniai skaičiai iš paskelbtų vertinimų):

```
Surinktas investuotojų kapitalas:  5 000 000 £
Kohorta:                           ~3 000 trumpai nuteistų vyrų dviejose kohortose
Riba:                              ≥7,5 % pakartotinių nuosprendžių sumažėjimas,
                                    palyginti su suderinta nacionaline palyginamąja
                                    grupe, kitaip nemokama
1 kohortos rezultatas:             8,4 % sumažėjimas - žemiau sutartinės kartelės
                                    vien tai kohortai pagal pirminias taisykles
Bendras / galutinės kohortos rezultatas: 9,7 % sumažėjimas - virš ribos
Mokėjimas už rezultatą:            vyriausybė (Teisingumo ministerija / Big Lottery
                                    Fund) moka už kiekvieną procentinį punktą virš
                                    ribos, finansuodama investuotojų grąžinimą ir grąžą
```

**Vietos valdžios PbR sutartis (iliustracinė)**: šeimos intervencijos tarnyba užsakoma už 4 000 £ už kiekvieną nukreiptą šeimą (mokėjimas už veiklą) plius 6 000 £ už šeimą be tolesnio vaiko apsaugos nukreipimo praėjus 12 mėnesių po bylos uždarymo (mokėjimas už rezultatą). Nukreiptos 200 šeimų, uždarytos 150 bylų, 96 liko be nukreipimo praėjus 12 mėnesių:

```
Mokėjimas už veiklą    = 200 × 4 000 £ = 800 000 £
Mokėjimas už rezultatą = 96 × 6 000 £  = 576 000 £
Bendra sutarties kaina = 1 376 000 £ už 96 patvirtintus tvarius rezultatus
Kaina už patvirtintą rezultatą ≈ 14 333 £ (žr. kaina už rezultatą)
```

## Ryšys su programine inžinerija

Mokėjimas pagal rezultatus yra paskatų suderinimo problema, prieš tapdamas duomenų problema, o duomenų sistema yra ta vieta, kurioje šis suderinimas išlieka arba subyra. Nepriklausomas, klastoti neleidžiantis rezultatų patikrinimas yra visa esmė: užsakovas ir teikėjas turi priešingas paskatas, kaip koduojamas dviprasmiškas atvejis, todėl rezultatus registruojanti sistema turi turėti audito pėdsaką, duomenų dalijimosi susitarimą su nepriklausomu tikrintoju (dažnai kita institucija nei teikėjas, kartais oficialiosios statistikos institucija, lyginanti su policijos ar išmokų įrašais) ir nekeičiamą rezultato apibrėžimo versijavimą; tai PbR atitikmuo „metrikos pakeitimo“ spąstų, aprašytų [viešojo sektoriaus KPI](../viešojo-sektoriaus-pagrindiniai-veiklos-rodikliai/). Priskyrimo skaičiavimai priklauso nuo [kontrfaktinės analizės](../kontrafaktinė-analizė/) suderintos kohortos metodų, kuriems reikia atkuriamo, audituojamo kodo, o ne vienkartinės skaičiuoklės. O pati metrika turi būti tikras rezultatas, o ne veiklos pakaitalas (žr. [rezultatai ir produktai](../rezultatai-ir-produktai/)), nes PbR sutartis, mokanti už produktą, tiesiog pervadina įprastą finansavimą su papildomomis sandorio sąnaudomis. Kai SIB socialinė grąža modeliuojama perspektyviai, tas vertinimas paprastai tiesiogiai skolinasi iš [socialinės investicijų grąžos](../socialinė-investicijų-grąža/) metodikos.

## Dažniausios klaidos

- **Mokėjimas už lengvai iškreipiamą pakaitinį rezultatą**: „dalyvavimas užsiėmimuose“ yra veikla, apsirengusi rezultatu; reikalaukite matavimo, atspindinčio tikrąjį siekiamą pokytį (recidyvas, užimtumas, būsto stabilumas).
- **Nėra patikimo kontrfaktinio scenarijaus**: be suderintos palyginamosios grupės pagerėjimas galėjo būti regresija į vidurkį ar platesnė tendencija, o ne programos poveikis (žr. [kontrfaktinė analizė](../kontrafaktinė-analizė/) ir [papildomumas ir deadweight](../papildomumas-ir-tuščiasis-poveikis/)).
- **Sandorio ir vertinimo sąnaudų nuvertinimas**: nepriklausomas patikrinimas, duomenų susiejimas ir PbR/SIB schemų sutarčių administravimas įprastai siekia dviženklį procentą nuo sutarties vertės; GO Lab įrodymų bazė tai dokumentuoja kaip pasikartojančią schemų nutraukimo priežastį.
- **Atranka ar „sulaikymas“ (parking)**: teikėjai, apmokami už rezultatą, turi tiesioginę paskatą teikti pirmenybę klientams, kuriems ir taip labiausiai tikėtina sėkmė, o sunkiausius atvejus atidėti; kad to išvengtumėte, projektuokite mokėjimo pakopas ar atvejų sudėties korekciją.

## Šaltiniai

- Government Outcomes Lab, University of Oxford, Blavatnik School of Government.
  <https://golab.bsg.ox.ac.uk/>
- Social Finance, "Peterborough Social Impact Bond" evaluation summaries.
  <https://golab.bsg.ox.ac.uk/case-studies/peterborough-social-impact-bond/>
- Ministry of Justice, "Peterborough Social Impact Bond HMP Doncaster: Final Reconviction Results
  for the Peterborough Social Impact Bond."
