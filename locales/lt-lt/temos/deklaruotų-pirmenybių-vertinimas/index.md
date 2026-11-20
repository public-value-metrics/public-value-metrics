# Deklaruotų pirmenybių vertinimas

Deklaruotų pirmenybių metodai nerinkos gėrio vertę įvertina tiesiogiai klausdami žmonių, kiek jie būtų pasirengę už jį mokėti arba kokią kompensaciją sutiktų priimti, kad jo atsisakytų, paprastai per struktūruotą apklausą, aprašančią hipotetinį scenarijų. Sąlyginis vertinimas (angl. contingent valuation) yra žinomiausia šios šeimos technika.

## Kodėl tai svarbu

„Green Book“ 2 priedas (papildomos gairės dėl nerinkos poveikių vertinimo) pritaria deklaruotų pirmenybių metodams gėrių, kurių vertei nustatyti iš viso nėra stebimo rinkos sandorio, atveju – oro kokybei, biologinei įvairovei, apsaugai nuo potvynių, kraštovaizdžio egzistavimo vertei, nors kažkas jo niekada gali ir neaplankyti
(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>).
Defra paskelbė savo deklaruotų pirmenybių gaires aplinkos vertinimui būtent todėl, kad didelė aplinkos vertės dalis (buveinių išsaugojimas, vandens kokybė) neturi pakaitinės rinkos, kitaip nei, tarkime, triukšmas, kuris bent jau koreliuoja su stebimomis būsto kainomis (žr. [atskleistų pirmenybių vertinimas](../atskleistų-pirmenybių-vertinimas/)).

Pagrindinis deklaruotų pirmenybių patrauklumas – jais galima įvertinti tiesiog bet ką, įskaitant gėrius, su kuriais niekas niekada nesudarė sandorių – kartu yra ir jų patikimumo problemos šaltinis. Kadangi respondentai iš tikrųjų neišleidžia pinigų, sąlyginio vertinimo apklausos yra pažeidžiamos hipotetinio šališkumo (žmonės pervertina pasirengimą mokėti, kai nėra realaus biudžeto apribojimo), įterpimo efektų (tas pats gėris vertinamas skirtingai, priklausomai nuo to, kas dar yra apklausoje) ir pradinio taško šališkumo derybų žaidimo (angl. bidding game) schemose. 1993 m. NOAA sąlyginio vertinimo grupė, sušaukta po Exxon Valdez naftos išsiliejimo bylų, nustatė projektavimo standartus – dvejetainį „ar mokėtumėte £X, taip/ne“ referendumo formatą vietoj atviro derybų žaidimo ir privalomus priminimus apie faktinį respondento biudžeto apribojimą – kurie tebėra pagrindinis ginamų apklausų standartas.

## Matematika

```
Sąlyginis vertinimas (referendumo formatas):
  Pateikiamas dvejetainis pasirinkimas: „ar mokėtumėte £X per metus už rezultatą Y? taip/ne“
  X atsitiktinai keičiamas tarp respondentų.
  Pasirengimas mokėti apskaičiuojamas kaip funkcija nuo atsakymų „taip/ne“ dalies kiekvienu X.

Vidutinis WTP = plotas po įvertinta paklausos kreive
Bendra vertė = Vidutinis WTP × paveikta populiacija

Pasirinkimo eksperimento (diskretaus pasirinkimo modeliavimo) variantas:
  Respondentams pateikiami pakartotiniai pasirinkimai tarp atributų rinkinių
  (įskaitant kaštų atributą); kiekvieno nekaštinio atributo numanomos kainos
  įvertinamos pagal kompromisus, kuriuos atskleidžia respondentai.
```

Dabartinėje JK praktikoje paprastai teikiama pirmenybė pasirinkimo eksperimento variantui, o ne vieno klausimo sąlyginiam vertinimui, nes verčiant respondentus pakartotinai derinti kelis atributus su kaštais gaunami nuoseklesni, sunkiau manipuliuojami įverčiai nei iš vieno klausimo „taip/ne“.

## Pavyzdys su skaičiavimais

**Nacionalinė valdžia**: Defra užsako sąlyginio vertinimo apklausą upės vandens kokybės gerinimo programos vertei nustatyti. 2 000 namų ūkių referendumo formato apklausa parodo, kad 62 % mokėtų £40 per metus per hipotetinį vandens sąskaitos priedą, o įvertinta paklausos kreivė duoda vidutinį pasirengimą mokėti £28 per metus vienam namų ūkiui.

```
Vidutinis WTP = £28 / namų ūkiui / per metus
Namų ūkių vandens baseine = 340 000
Bendra metinė vertė = £28 × 340 000 = £9,52 mln. per metus

Per 20 metų vertinimo laikotarpį taikant 3,5 % diskonto normą (anuiteto koeficientas ≈ 14,2):
PV(nauda) ≈ £9,52 mln. × 14,2 ≈ £135 mln.
```

Šis bendras dydis vėliau lyginamas su programos [socialinės kaštų ir naudos analizės](../socialinė-kaštų-ir-naudos-analizė/) kaštų puse. „Green Book“ reikalauja tokius deklaruotų pirmenybių įrodymus pateikti kartu su pasikliautinuoju intervalu ir apklausos metodika, o ne kaip plikąjį taškinį įvertį, būtent todėl, kad pagrindinis skaičius yra trapesnis nei rinkos kaina.

**Labdara**: paveldo fondas apklausia lankytojus ir nelankytojus apie pasirengimą mokėti, kad būtų išvengta istorinio pastato uždarymo, kurio nei viena grupė būtinai nelanko (jo egzistavimo vertė). Kadangi nelankytojai, kurie niekada nepamatys pastato, vis tiek nurodo teigiamą WTP, apklausa užfiksuoja egzistavimo ir palikimo vertę, kurios paprastas lankytojų mokesčių pajamų skaičiavimas (atskleistų pirmenybių pakaitalas) visiškai nepastebėtų – tai rodo tikrąjį deklaruotų pirmenybių pranašumą ten, kur nėra jokio rinkos sandorio, kuris atskleistų vertę.

## Ryšys su programine inžinerija

Deklaruotų pirmenybių metodai retai tiesiogiai taikomi programinės inžinerijos darbui, tačiau inžinieriai, kuriantys piliečių konsultavimo platformas, biudžeto dalyvavimo įrankius ar viešųjų apklausų infrastruktūrą, dažnai kuria instrumentą, nuo kurio priklauso ekonomika. Apklausos projektavimo detalių – atsitiktinių pasiūlymo sumų, dvejetainio referendumo formato vietoj atvirų klausimų, aiškių priminimų apie biudžeto apribojimą – tinkamas parengimas nėra naudotojo patirties smulkmena, o tai, kas daro gautą vertinimą ginamą po patikros; prastai suprojektuota programėlės apklausa gali paversti negaliojančia kelių mėnesių vėlesnę ekonominę analizę. Žr. [piliečių pasitenkinimo rodikliai](../piliečių-pasitenkinimo-rodikliai/) – bendresnė visuomenės nuomonės duomenų, kurie turės analitinį svorį, rinkimo disciplina.

## Dažniausios klaidos

- **Atviri klausimai „kiek mokėtumėte?“.** Jie gerokai labiau linkę į strateginį ir inkaravimo šališkumą nei dvejetainis referendumo formatas; NOAA grupės rekomendacija naudoti referendumo formatą egzistuoja būtent todėl, kad atviras vertės išgavimas veikia prastai.
- **Nėra priminimo apie faktinį respondento biudžeto apribojimą.** Be jo deklaruojamas WTP paprastai viršija tai, ką tie patys žmonės mokėtų, kai kyla tikras biudžeto kompromisas – hipotetinis šališkumas.
- **Įterpimo efektų ignoravimas.** Tas pats gėris, vertinamas atskirai ir kaip didesnio rinkinio dalis, duoda skirtingus WTP įverčius; nurodykite, kas dar, jei kas nors, buvo apklausos kontekste.
- **Vienos apklausos taškinio įverčio laikymas galutiniu.** „Green Book“ praktika tikisi intervalo ir žinomų šališkumų aptarimo, o ne plikojo skaičiaus, perkelto į kaštų ir naudos lentelę tarsi tai būtų rinkos kaina.

## Šaltiniai

- HM Treasury. "The Green Book," Annex 2: valuing non-market impacts.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Defra. "Valuing environmental impacts: practical guidelines" (contingent valuation and choice
  experiment guidance). <https://www.gov.uk/government/collections/valuing-environmental-impacts>
- Arrow K, et al. "Report of the NOAA Panel on Contingent Valuation." Federal Register, 1993.
- Mitchell RC, Carson RT. "Using Surveys to Value Public Goods: The Contingent Valuation Method."
  Resources for the Future, 1989.
