# Kontrafaktinė analizė

Kontrafaktinis scenarijus (angl. counterfactual) – tai įvertis, kas būtų įvykę nesant intervencijos. Be jo pastebimo pokyčio po programos paleidimo negalima atskirti nuo pokyčio, kuris būtų įvykęs bet kuriuo atveju – nėra kontrafaktinio scenarijaus, nėra poveikio įrodymo, kad ir kokie įtikinami atrodytų prieš ir po skaičiai. HM Treasury „Magenta Book“ laiko patikimo kontrafaktinio scenarijaus sukūrimą pagrindine poveikio vertinimo metodologine užduotimi, svarbesne už bet kurį kitą atskirą dizaino pasirinkimą.

## Kodėl tai svarbu

„Nusikalstamumas sumažėjo 15 % per metus po programos įvedimo“ nėra įrodymas, kad programa veikė, nebent žinote, kas būtų įvykę su nusikalstamumu be jos – nusikalstamumas galėjo sumažėti 20 % bet kuriuo atveju dėl nesusijusių ekonominių ar demografinių tendencijų, o tai reikštų, kad programa iš tikrųjų pabloginusi padėtį kontrafaktinio scenarijaus atžvilgiu, nors neapdorotas skaičius pagerėjo. Tai vienintelė dažniausia analitinė klaida viešojo ir socialinio sektoriaus poveikio teiginiuose: palyginimo prieš ir po supainiojimas su priežastingumo įrodymu. „Magenta Book“ aiškiai teigia, kad poveikio vertinimas egzistuoja atsakyti į kontrafaktinį klausimą – „kokį skirtumą padarė ši intervencija?“ – ir kad atsakymas reikalauja įvertinti, o ne tik apibūdinti, pasaulį, kuris neįvyko.

Skirtingi metodai kontrafaktinį scenarijų kuria su skirtingu patikimumo laipsniu, o vyriausybės vertinimo gairės juos atitinkamai išrikiuoja. Atsitiktinių imčių kontroliuojami tyrimai (RCT), kuriuose asmenys ar teritorijos atsitiktinai paskiriami gauti intervenciją ar ne, sukuria stipriausią kontrafaktinį scenarijų, nes atsitiktinis paskirstymas užtikrina, kad gydymo ir kontrolinė grupės vidutiniškai skiriasi tik tuo, kad gavo intervenciją. Kabineto biuras ir „What Works Network“ skatina RCT visoje JK viešojoje politikoje nuo 2012 m. Elgsenos įžvalgų komandos (Behavioural Insights Team) ataskaitos „Test, Learn, Adapt“, būtent todėl, kad silpnesni dizainai yra jautrūs painiavai – pastebimas skirtumas gali atspindėti, kas pasirinko dalyvauti, o ne programos poveikį. Kur atsitiktinis paskirstymas nepraktiškas ar neetiškas (kaip dažnai būna programoms, turinčioms įstatyminę teisę, ar visos populiacijos politikos pokyčiams), „Magenta Book“ nustato aiškią silpnesnių, bet vis dar naudingų alternatyvų hierarchiją: suderintos lyginamosios grupės, skirtumų skirtumų (difference-in-differences) dizainai, regresijos trūkis (regression discontinuity) aplink tinkamumo ribas ir, kaip paskutinė priemonė, paprastas palyginimas prieš ir po – aiškiai pažymimas kaip silpniausia įrodymų forma, linkusi painioti programos poveikį su visko, kas kartu pasikeitė, poveikiu.

## Matematika

Kontrafaktinis pagrindas, taikomas visiems metodams:

```
Įvertintas poveikis = Rezultatas(su intervencija) − Rezultatas(kontrafaktinis: be intervencijos)

NE:
Įvertintas poveikis ≠ Rezultatas(po) − Rezultatas(prieš)   [supainioja laiką su gydymu]
```

Skirtumų skirtumai, vienas dažniausių kvazieksperimentinių dizainų valdžios vertinime, išskiria gydymo poveikį atimdami paties lyginamosios grupės pokytį prieš ir po:

```
DiD įvertis = [Rezultatas(gydyta, po) − Rezultatas(gydyta, prieš)]
            − [Rezultatas(lyginamoji, po) − Rezultatas(lyginamoji, prieš)]
```

Tai pašalina bet kokią abiem grupėms bendrą tendenciją (pvz., nacionalinį ekonominį poslinkį, veikiantį visus), palikdama tik diferencinį pokytį, priskirtiną intervencijai.

## Pavyzdys su skaičiavimais

**Užimtumo programa, prieš / po (silpnas dizainas)**: darbo paramos schema praneša, kad dalyvių užimtumas per metus išaugo nuo 40 % iki 55 % – naivi išvada „+15 procentinių punktų dėl programos“.

**Ta pati programa, skirtumų skirtumai (stipresnis dizainas)**: suderinta panašių nedalyvavusiųjų lyginamoji grupė, paimta iš tos pačios vietos darbo rinkos, rodo, kad užimtumas per tuos pačius metus išaugo nuo 38 % iki 47 % (vyko nacionalinis ekonomikos atsigavimas).

```
Gydytos grupės pokytis:    55 % − 40 % = +15 procentinių punktų
Lyginamosios grupės pokytis: 47 % − 38 % = +9 procentiniai punktai

DiD įvertis (tikrasis programos poveikis) = 15 − 9 = +6 procentiniai punktai
```

Sąžiningas priskirtinas poveikis yra 6 procentiniai punktai, o ne 15 – daugiau nei pusė akivaizdaus pagerėjimo prieš / po būtų įvykusi nepriklausomai nuo programos, paskatinta to paties ekonomikos atsigavimo, kuris kėlė lyginamąją grupę.

**Regresijos trūkis, tinkamumo riba**: dotacijų schema prieinama tik įmonėms, turinčioms mažiau nei 50 darbuotojų. Rezultatų palyginimas tarp įmonių, esančių ką tik žemiau ribos (45–49 darbuotojai, tinkamos), ir įmonių, esančių ką tik virš jos (50–54 darbuotojai, netinkamos), sukuria patikimą kontrafaktinį scenarijų, nes įmonės abipus savavališkos administracinės ribos kitais atžvilgiais yra panašios – tinkamumą lemia riba, o ne kokia nors pagrindinė verslo charakteristika. £2 000 vidutinis rezultatų skirtumas tarp dviejų grupių, stebimas tik ties riba, gali būti priskirtas dotacijai kur kas didesniu pasitikėjimu nei paprastas visų tinkamų ir visų netinkamų įmonių (kurios sistemingai skiriasi dydžiu) palyginimas.

## Ryšys su programine inžinerija

Kontrafaktinis mąstymas turėtų formuoti, kaip projektuojamos poveikio sekimo sistemos ir vertinimo konvejeriai valdžios ir socialinio sektoriaus programinei įrangai:

- Lyginamosios grupės duomenų rinkimą įdiekite į sistemą nuo pat pradžių – fiksuokite, kas buvo tinkamas, bet neįtrauktas, ar suderintą nedalyvavusiųjų kohortą, – užuot pritaikę po to, kai programa jau įvykdyta ir yra tik duomenys prieš / po.
- Kur atsitiktinis paskirstymas įmanomas (etapinis diegimas, skaitmeninė paslauga įjungiama kai kuriems naudotojams anksčiau nei kitiems), instrumentuokite sistemą taip, kad atsitiktinis paskirstymas būtų išsaugotas kaip užklausiamas laukas; etapinis diegimas netyčia sunaikina savo vertinimo vertę, jei paskirstymo tvarka neregistruojama.
- Tai pagrindinis metodas, ant kurio remiasi [poveikio vertinimo metodai](../poveikio-vertinimo-metodai/) ir kuris juos atskiria nuo [poveikio vertinimo ir proceso vertinimo](../poveikio-vertinimas-ir-proceso-vertinimas/) – pastarasis klausia, ar programa buvo teikiama taip, kaip numatyta, o ne ar ji sukėlė poveikį.
- [Papildomumas ir tuščiasis poveikis](../papildomumas-ir-tuščiasis-poveikis/) bei [išstūmimas ir priskyrimas](../išstūmimas-ir-priskyrimas/) iš esmės yra kontrafaktiniai klausimai – tuščiasis poveikis yra „koks būtų buvęs šis konkretus rezultatas be intervencijos“, taikomas korekcijos, o ne viso vertinimo dizaino lygmeniu.

## Dažniausios klaidos

- **Palyginimo prieš / po laikymas priežastingumo įrodymu.** Tai dažniausia ir pati svarbiausia klaida viešojo ir socialinio sektoriaus poveikio ataskaitose; pokytis prieš / po supainioja programos poveikį su kiekvienu kitu dalyku, kuris pasikeitė per tą patį laikotarpį.
- **Lyginamosios grupės, sistemingai besiskiriančios nuo gydytos grupės, naudojimas.** Suderinta lyginamoji grupė turi būti tikrai panaši pagal svarbias charakteristikas (žr. [kontrafaktinė analizė](../kontrafaktinė-analizė/) „Magenta Book“ metodų hierarchiją); programos dalyvių (kurie pasirinko dalyvauti ir dažnai yra labiau motyvuoti) lyginimas su nedalyvavusiais (kurie nedalyvavo) kelia atrankos šališkumo, apsimetančio programos poveikiu, riziką.
- **Atsitiktinio paskirstymo galimybių sunaikinimas dėl prasto teikimo dizaino.** Etapinis ar atsitiktinis diegimas išsaugo savo vertinimo vertę tik tada, jei paskirstymas tikrai atsitiktinis ir užregistruotas – leidimas vietos vadovams rinktis, kas eina pirmas, sugriauna tikslą.
- **Per didelio tikslumo teigimas iš silpno dizaino.** Įvertis prieš / po turėtų būti pateikiamas kaip orientacinis, o ne kaip išmatuotas poveikio dydis; „Magenta Book“ įrodymų hierarchija egzistuoja tam, kad teiginio stiprumas atitiktų jį sukūrusio dizaino stiprumą.

## Šaltiniai

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020), and its
  supplementary guide on quasi-experimental methods.
  <https://www.gov.uk/government/publications/the-magenta-book>
- Cabinet Office / Behavioural Insights Team, "Test, Learn, Adapt: Developing Public Policy with
  Randomized Controlled Trials" (2012).
- What Works Network, standards of evidence guidance. <https://www.gov.uk/guidance/what-works-network>
- Angrist JD, Pischke J-S. *Mostly Harmless Econometrics: An Empiricist's Companion*. Princeton
  University Press, 2009 (standartinis šaltinis skirtumų skirtumų ir regresijos trūkio
  metodams).
