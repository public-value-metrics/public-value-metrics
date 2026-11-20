# Socialinė diskonto norma

Socialinė diskonto norma ateities kaštus ir naudą paverčia dabarties vertėmis, kad programas, kurių atsipirkimas išsidėsto per dešimtmečius, būtų galima palyginti bendru pagrindu. HM Treasury „Green Book“ nustato mažėjantį grafiką, kurio pradinė reikšmė – 3,5 % pirmiesiems 30 metų, paremtą Ramsey formule – konkretų, cituojamą skaičių, kuris tapo gyvu politiniu ir etiniu ginču, kai tik taikomas ilgo laikotarpio įsipareigojimams, pavyzdžiui, klimato politikai ar infrastruktūrai.

## Kodėl tai svarbu

Svaras naudos, gaunamas po 30 metų, nėra vertas svaro naudos, gaunamo dabar – iš dalies dėl grynojo laiko pirmenybės (žmonės ir visuomenės teikia pirmenybę geriems dalykams greičiau), iš dalies dėl augimo (tikimasi, kad ateities visuomenė bus turtingesnė, todėl svaras jai ribiniu požiūriu reiškia mažiau). „Green Book“ 6 priedas JK standartinę diskonto normą išveda iš Ramsey formulės, derindamas grynąją laiko pirmenybę su numatomu vartojimo augimo tempu ir ribinio vartojimo naudingumo elastingumu, ir gauna skelbiamą 3,5 % per metus normą 0–30 metams, o nuo 31 metų – mažėjantį skelbiamą grafiką (iki 1 % nuo 301 metų). Šis grafikas egzistuoja būtent todėl, kad pastovi 3,5 % norma, sudėtinė per šimtmetį, beveik bet kokią ilgo laikotarpio naudą – potvynių apsaugą, gelbstinčią gyvybes po 80 metų, anglies dioksido sumažinimą, išvengiantį žalos po 100 metų – dabartinės vertės požiūriu paverstų nereikšminga, o tai Treasury laikė neįtikimu etiniu išvedžiojimu tikrai ilgaamžėms infrastruktūros ir aplinkos sprendimams.

Diskonto norma ginčijama būtent todėl, kad jos pasirinkimas nėra neutralus techninis parametras: jis užkoduoja sprendimą, kiek visuomenė turėtų aukotis šiandien dėl dar negimusių žmonių. „Stern Review on the Economics of Climate Change“ (2006) naudojo diskonto normą, artimą nuliui (grynoji laiko pirmenybė apie 0,1 %), teigdama, kad ateities kartų gerovę diskontuoti beveik rinkos normomis yra etiškai nepateisinama, kai žala (katastrofiškas klimato kaita) yra negrįžtama. Kritikai – visų pirma Williamas Nordhausas – tvirtino, kad Sterno beveik nulinė norma perdėjo skubių klimato išlaidų pagrindimą, nes beveik nediskontuotos ateities naudos fone beveik bet kokie dabarties kaštai atrodo pateisinami. Nesutarimas buvo ne dėl matematikos, o dėl to, kieno etinė sistema turėtų nustatyti normą, ir tai tebėra standartinis pavyzdys, kodėl diskonto norma yra politikos pasirinkimas, o ne vien aktuarinė įvestis.

## Matematika

Ramsey formulė, kuria remiasi „Green Book“ norma:

```
r = ρ + η·g

kur:
  r = socialinė diskonto norma
  ρ = grynosios laiko pirmenybės norma (nekantrumas + katastrofos rizika)
  η = ribinio vartojimo naudingumo elastingumas
  g = numatomas metinis vienam gyventojui tenkančio vartojimo augimo tempas
```

„Green Book“ mažėjantis grafikas (6 priedas, iliustracinis – tikslią skelbiamą lentelę žr. dabartiniame leidime):

```
0–30 metai:     3,5 %
31–75 metai:    3,0 %
76–125 metai:   2,5 %
126–200 metai:  2,0 %
201–300 metai:  1,5 %
301+ metai:     1,0 %
```

Būsimos sumos dabartinė vertė:

```
PV = FV / (1 + r)^t
```

## Pavyzdys su skaičiavimais

**Potvynių apsaugos schema**: projektas 40 metais užtikrina £10 milijonų išvengtos potvynių žalos.

Taikant pastovią 3,5 % normą: PV = 10 000 000 / (1,035)^40 ≈ £2,52 mln. – nauda atrodo maža.

Taikant „Green Book“ mažėjantį grafiką (3,5 % 0–30 metams, vėliau 3,0 %), skaičiuojama sudėtinėmis 3,5 % pirmiesiems 30 metų ir 3,0 % 31–40 metams:

```
PV = 10 000 000 / [(1,035)^30 × (1,03)^10]
   = 10 000 000 / [2,807 × 1,344]
   ≈ 10 000 000 / 3,773
   ≈ £2,65 mln.
```

Mažėjantis grafikas kukliai padidina ilgo laikotarpio naudos dabartinę vertę, palyginti su pastovia didele norma – tai yra aiškus grafiko tikslas, nes pastovi 3,5 % norma per šimtmetį £100 milijonų naudą 100 metais diskontuotų iki mažiau nei £3,3 mln.

**Skaitmeninė infrastruktūra**: valdžios debesijos migracija, dabar kainuojanti £4 milijonus, turėtų 15 metų išvengti £500 000 per metus senųjų sistemų priežiūros kaštų. Taikant 3,5 %, to anuiteto dabartinė vertė yra maždaug £500 000 × 11,52 (15 metų anuiteto koeficientas esant 3,5 %) ≈ £5,76 mln. – patogiai viršija £4 mln. kaštus; tai teigiamos grynosios dabartinės vertės atvejis, kuris atrodytų gerokai silpnesnis taikant naiviai pasirinktą didesnę normą (esant 7 %, tas pats anuiteto koeficientas sumažėja iki maždaug 9,11, o tai duoda £4,56 mln. – vis dar teigiama, bet su daug mažesne marža).

## Ryšys su programine inžinerija

Dauguma programinės įrangos verslo atvejų aprėpia 3–5 metus, tai yra gerokai vienodos 3,5 % juostos viduje, todėl mažėjantis grafikas retai tiesiogiai pasireiškia – tačiau pagrindinė disciplina svarbi bet kuriai valdžios technologijų investicijai su ilgu turto naudojimo laiku (nacionalinei platformai, duomenų infrastruktūros programai, kelių dešimtmečių sutarčiai):

- Naudokite „Green Book“ skelbiamą normą, o ne vidinę „barjerinę normą“ (angl. hurdle rate), pasiskolintą iš privačių finansų; auditoriai ir Treasury peržiūros specialistai tikėsis standartinio grafiko.
- Naudai, realizuojamai po daugelio metų (ilgalaikiai platformos priežiūros sutaupymai, atvirų duomenų ekosistemos kaupiama vertė – žr. [atvirųjų duomenų vertė](../atvirųjų-duomenų-vertė/)), diskontavimo pasirinkimas gali verslo atvejį iš teigiamo paversti neigiamu; norma ir horizontas turi būti aiškios prielaidos, o ne paslėptos numatytosios reikšmės.
- Tai tiesiogiai siejasi su [Green Book vertinimu](../green-book-vertinimas/) – penkių atvejų modeliu, kuris formaliai reikalauja diskontuotų pinigų srautų, ir su [gerovės vertinimu](../gerovės-vertinimas/), kur tas pats diskontavimo klausimas kyla nepiniginei gerovės naudai.
- Taip pat žr. [tarpgeneracinis teisingumas ir tvarumo diskontavimas](../tarpgeneracinis-teisingumas-ir-tvarumo-diskontavimas/) – Sterno ir Nordhauso diskusija, pritaikyta būtent aplinkos ir klimato technologijų investicijoms.

## Dažniausios klaidos

- **Pastovios normos naudojimas labai ilgiems horizontams.** „Green Book“ mažėjantis grafikas egzistuoja būtent todėl, kad pastovi norma nuvertina tikrai ilgalaikę naudą; patikrinkite, kuri juosta taikoma, užuot visur numatytai naudoję 3,5 %.
- **Diskonto normos laikymas etiškai neutralia.** Sterno ir Nordhauso ginčas rodo, kad norma užkoduoja vertybinį sprendimą dėl ateities kartų; ją pakeitus keičiasi, kurios programos atrodo pateisinamos, todėl ją reikia nurodyti ir apginti, o ne slėpti skaičiuoklės numatytojoje reikšmėje.
- **Socialinės diskonto normos painiojimas su privačiais kapitalo kaštais.** Valdžios skolinimosi kaštai ir privataus sektoriaus barjerinės normos yra kitokios sąvokos nei iš Ramsey išvesta socialinė norma, ir viena pakeitus kita viešajame vertinime rezultatas paprastai iškreipiamas, palankesnis trumpalaikei grąžai.
- **Realių ir nominalių pinigų srautų diskontavimas nenuosekliai.** „Green Book“ norma yra reali (infliacijai pakoreguota); ja diskontuojant nominalius pinigų srautus, dabartinės vertės esmingai nuvertinamos.

## Šaltiniai

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation", Annex 6
  (2022). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Stern N. "The Economics of Climate Change: The Stern Review." HM Treasury, 2006.
- Nordhaus WD. "A Review of the Stern Review on the Economics of Climate Change." Journal of
  Economic Literature, 2007;45(3):686–702.
- Ramsey FP. "A Mathematical Theory of Saving." Economic Journal, 1928;38(152):543–559.
