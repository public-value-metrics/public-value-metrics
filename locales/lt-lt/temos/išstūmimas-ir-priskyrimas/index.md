# Išstūmimas ir priskyrimas

Išstūmimas (angl. displacement) atsiranda tada, kai akivaizdi programos nauda pasiekiama atimant veiklą ar naudą kitur, o ne sukuriant ką nors naujo: jūsų laimėjimas yra kieno nors kito praradimas. Priskyrimas (angl. attribution) yra su tuo susijęs klausimas, kokią stebimo rezultato dalį jūsų intervencija gali pagrįstai laikyti savo nuopelnu, kai prisidėjo ir kiti veikėjai bei veiksniai. Abu šie koregavimai yra standartiniai JK viešojo sektoriaus vertinimo gairėse greta tuščiojo poveikio (angl. deadweight) ir nutekėjimo (angl. leakage), ir abu įprastai praleidžiami teiginiuose apie poveikį, kurie atrodo daug stipresni, nei yra iš tikrųjų.

## Kodėl tai svarbu

Vietos valdžios verslo dotacijų schema, padedanti 50 parduotuvių persikelti į regeneracijos zoną, gali pranešti: „paremta 50 verslų, sukurta 200 darbo vietų“, tačiau jei tie verslai tiesiog persikėlė iš gretimos pagrindinės gatvės, o ne plėtėsi, darbo vietos buvo išstumtos, o ne sukurtos, ir grynasis poveikis visoje savivaldybėje (ar regione) gali būti artimas nuliui. HM Treasury Magenta Book ir seniai naudojamas Additionality Guide išstūmimą traktuoja kaip privalomą atimtį būtent todėl, kad vietos sėkmės istorijos yra įprastos, net kai jos nesukuria jokios grynosios nacionalinės ar regioninės naudos: vertė tiesiog persikėlė, dažnai pakenkdama tai sričiai ar veikėjams, kurie ją prarado. Struktūrinių fondų vertinimo gairės (naudotos buvusioms ES Regioninės plėtros fondo programoms ir jų vidaus įpėdinėms, pavyzdžiui, UK Shared Prosperity Fund) tai formalizuoja trimis erdviniais lygmenimis: vietos išstūmimas (miesto viduje), regioninis išstūmimas (regiono viduje) ir nacionalinis išstūmimas (visoje JK), nes intervencija gali būti papildoma viename lygmenyje, o platesniame būti grynas išstūmimas: užimtumo programa, kuri pritraukia darbuotojus iš gretimo miesto, nacionaliniu mastu yra neutrali, nors vietoje atrodo kaip sėkmė.

Priskyrimas yra giminingas klausimas teikiant paslaugas su daug partnerių, kas dabar yra įprasta socialiniame sektoriuje ir tarpžinybiniame viešųjų paslaugų darbe. Kai trys organizacijos kartu teikia benamystės prevencijos paslaugą, kiekvienos organizacijos metinė ataskaita gali nepriklausomai pasisavinti tą patį gatvėje miegančiųjų skaičiaus sumažėjimą: susumavus ataskaitas, deklaruotas poveikis gali viršyti stebimą realų pokytį, kartais keletą kartų. Magenta Book gairės dėl indėlio analizės (angl. contribution analysis) egzistuoja būtent todėl, kad atsitiktinis priskyrimas vienam veikėjui daugiaagentūriame teikime dažnai neįmanomas, o sąžiningas atsakymas dažnai yra „prisidėjome prie šio rezultato“, o ne „sukėlėme šį rezultatą“.

## Matematika

Išstūmimas kaip standartinės grynojo poveikio sekos dalis (visą grandinę žr. [additionality and deadweight](../papildomumas-ir-tuščiasis-poveikis/)):

```
Net additional impact = Gross outcome − Deadweight − Displacement − Leakage, × Multiplier

Displacement rate = benefit/activity diverted from elsewhere
                     / total gross benefit/activity observed
```

Priskyrimas, kai prie vieno rezultato prisideda keli veikėjai, paprastai išreiškiamas kaip indėlio dalis, o ne tikslus procentas, nes jo paprastai negalima išmatuoti tokiu pat griežtumu kaip išstūmimo:

```
Attributable share ≈ f(strength of causal contribution, other actors' contributions,
                        external/contextual factors)

Claimed impact should never exceed:
  Σ (each partner's attributable share) ≤ 100% of the total observed outcome
```

## Pavyzdys su skaičiavimais

**Regeneracijos dotacija**: savivaldybės pagrindinės gatvės dotacijų schema praneša apie 200 naujų mažmeninės prekybos darbo vietų finansuojamoje zonoje. Tolesnis apklausos tyrimas parodo, kad 60 iš tų darbo vietų atsirado dėl verslų, persikėlusių iš gretimos, nefinansuojamos pagrindinės gatvės toje pačioje savivaldybėje, o dar 30 atsirado nacionalinėms grandinėms atidarius filialus, kurie būtų atsidarę kur nors regione ir be dotacijos.

```
Gross jobs claimed = 200
Local displacement = 60 (moved within the borough)
Regional displacement = 30 (would have opened regionally anyway)

Net additional jobs (borough level) = 200 − 60 = 140
Net additional jobs (regional level) = 200 − 60 − 30 = 110
```

Sąžiningas pagrindinis skaičius priklauso nuo geografinio masto, kuris rūpi finansuotojui: Treasury verslo atvejis, vertinamas nacionaliniu ar regioniniu lygmeniu, turėtų naudoti 110, o ne savivaldybės lygmens 140 ir tikrai ne neapdorotus 200.

**Daugiaagentūrė benamystės paslauga**: trys partnerių organizacijos (savivaldybė, būsto labdaros organizacija ir sveikatos trestas) kartu teikia gatvėje miegančiųjų skaičiaus mažinimo paslaugą. Gatvėje miegančiųjų vietovėje per metus sumažėjo 30 žmonių. Kiekvienos organizacijos atskira metinė ataskaita teigia: „sumažinome gatvėje miegančiųjų skaičių 30“: susumavus trys ataskaitos teigia, kad padėta 90 žmonių, t. y. triskart daugiau nei faktinis sumažėjimas. Indėlio analizė, priskirianti kiekvienam partneriui dalį (tarkime, 40 % savivaldybei, 35 % labdaros organizacijai, 25 % sveikatos trestui, remiantis dokumentuotu vaidmeniu ir nepriklausomu vertinimu), pateiktų atitinkamai 12, 10,5 ir 7,5, kurių suma teisingai sudaro stebimus 30.

## Ryšys su programine inžinerija

Išstūmimas ir priskyrimas lemia, kaip reikėtų projektuoti poveikio sekimo ir rezultatų ataskaitų sistemas, skirtas daugelio vietų ar daugelio partnerių teikimui:

- Geografinė ir organizacinė aprėptis turėtų būti aiškūs, pirmos klasės laukai bet kurioje poveikio skydelyje (angl. dashboard): skaičius, pateiktas „savivaldybei“, ir tas pats skaičius, pateiktas „regionui“, yra skirtingi skaičiai, o sistema, kuri juos painioja, pateiks skaičius, kurių neįmanoma suderinti portfelio lygmeniu.
- Kai keli partneriai teikia paslaugas kartu, rezultatų sistema turėtų registruoti indėlio dalis (arba bent pažymėti bendrą priskyrimą), o ne leisti kiekvieno partnerio ataskaitų moduliui nepriklausomai pasisavinti 100 % bendro rezultato, antraip portfelio lygmens sumos pervertins bendrą poveikį, kartais labai.
- Tai susiję su [social return on investment](../socialinė-investicijų-grąža/) ir [grant outcomes reporting](../dotacijų-rezultatų-ataskaitos/): SROI ar IRIS+ skaičiavimas, kuris ignoruoja išstūmimą arba pernelyg daug priskiria bendriems rezultatams, duos išpūstą santykį, kuris neatlaikys audito ar pakartojimo.

## Dažniausios klaidos

- **Vietos sėkmės skelbimas netikrinant platesnio išstūmimo.** Programa mažiausiame ataskaitų teikimo lygmenyje gali atrodyti labai sėkminga, o platesniame būti neutrali ar net neigiama; visada nurodykite geografinį mastą, kuriam taikomas grynasis skaičius.
- **Leidimas kiekvienam bendro teikimo partneriui pasisavinti visą nuopelną.** Jei indėlio dalys nesutartos ir nedokumentuotos, partnerių ataskaitų sumos pervertins bendrą poveikį; patikrinkite, ar partnerių lygmens teiginių suma neviršija stebimos bendros sumos.
- **Priskyrimo traktavimas kaip tikslaus procento, nors iš tikrųjų tai vertinimas.** Indėlio analizė, skirtingai nuo atsitiktinės imties kontrafaktinės situacijos (angl. counterfactual), pateikia pagrįstą įvertį, o ne išmatuotą faktą; pateikite ją su atitinkamu netikrumu, o ne klaidingu tikslumu.
- **Išstūmimo ignoravimas rinkai skirtose intervencijose.** Verslo parama, užimtumo schemos ir vietovėmis grįsta regeneracija yra klasikinės didelio išstūmimo kategorijos; išstūmimo patikras joms laikykite privalomomis, o ne pasirenkamomis.

## Šaltiniai

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020), including
  guidance on contribution analysis. <https://www.gov.uk/government/publications/the-magenta-book>
- HM Treasury / Department for Business, Innovation and Skills, "Additionality Guide: A Standard
  Approach to Assessing the Additional Impact of Interventions" (3rd edition).
- European Commission, "Evalsed: The Resource for the Evaluation of Socio-Economic Development" —
  guidance on local, regional, and national displacement scales.
- Mayne J. "Contribution Analysis: An Approach to Exploring Cause and Effect." ILAC Brief No. 16,
  2008.
