# Techninė skola kaip viešosios vertės erozija

Techninė skola – tai Wardo Cunninghamo 1992 m. metafora, nusakanti numanomus būsimus kaštus dėl praeityje priimtų skubotų programavimo sprendimų: **pagrindinė suma** (privalomas atlikti taisymo darbas) ir **palūkanos** (nuolatinis trukdis, kurį ji daro teikimui). Senose valdžios IT sistemose tos palūkanos mokamos tiesiai iš viešosios vertės – lėtesnis įstatymų pakeitimų įgyvendinimas, didesnis gyventojams skirtų paslaugų gedimų dažnis ir mažėjantis žmonių, galinčių saugiai prisiliesti prie sistemos, skaičius.

## Kodėl tai svarbu

Senosios pagrindinių kompiuterių (mainframe) ir COBOL laikų sistemos visuose JK valdžios departamentuose – dažniausiai minimi HMRC ir DWP – kelia gerai dokumentuotą ir augančią riziką, kurią Nacionalinė audito tarnyba (National Audit Office) ne kartą pažymėjo, įskaitant savo ataskaitoje *Digital Transformation in Government* (<https://www.nao.org.uk/>): senstančios platformos, kurias brangu keisti, vis sunkiau apsaugoti ir kurios priklauso nuo specialistų, išeinančių į pensiją greičiau, nei jie pakeičiami. Kitaip nei privačiojo sektoriaus atsilikimas, ši skola yra tiesiogiai tarp piliečių ir jų įstatyminių teisių – išmokų skaičiavimo variklis, kurio negalima saugiai keisti, yra politikos įgyvendinimo apribojimas, o ne vien inžinerinis nepatogumas. 2013 m. Universal Credit IT programos paleidimas iš naujo, kai Nacionalinė audito tarnyba nustatė, kad pradinė versija nesukurs vertės už pinigus ir didelę programinės įrangos turto dalį teko nurašyti, yra klasikinis neįkainotos techninės skolos, pasiekiančios veikiančią, ministrams matomą viešąją programą, pavyzdys.

## Matematika

```
SQALE pagrindinė suma = Σ pagal pažeidimus (taisymo laikas) × programuotojo kaštų norma
Techninės skolos santykis (TDR) = taisymo kaštai / perkūrimo kaštai × 100
                    (SonarQube įvertinimai: A ≤5 %, B ≤10 %, C ≤20 %, D ≤50 %)

Palūkanos (skaičius, pateisinantis skolos dengimą):
  palūkanos per metus = Δ teikimo greitis × vertė už greičio vienetą
                + Δ gyventojams skirtų incidentų dažnis × kaštai už incidentą
                + specialistų įgūdžių priemoka × paveikta darbuotojų skaičius
Skolos dengimo atvejis = PV(per horizontą išvengtos palūkanos) − taisymo kaštai
               (diskontuota „Green Book“ socialine diskonto norma, žr.
               social-discount-rate.md)
```

Pagrindinė suma nurodo įsipareigojimą; palūkanos – tai, kas sudaro investicijos pagrindimą viešųjų sąskaitų komitetui.

## Pavyzdys su skaičiavimais

250 000 eilučių prašymų apdorojimo variklis, parašytas senąja 4GL kalba. Naudojant CAST Appmarq lyginamąjį rodiklį – maždaug $3,61 techninės skolos pagrindinės sumos vienai kodo eilutei (≈£2,85 pagal įprastą konversiją):

```
Pagrindinė suma ≈ 250 000 × £2,85 ≈ £712 500
TDR ≈ 16 % (C įvertinimas)
```

Išmatuotos palūkanos: departamentas laiko tris specialistus rangovus, kurių dienos įkainis 40 % didesnis nei standartinių vyresniųjų inžinierių, nes vidiniai įgūdžiai išseko – papildomi £180 000 per metus šešių žmonių komandai. Sistema taip pat sukelia keturis didelius apdorojimo sutrikimus per metus, kurių kiekvienas sustabdo sprendimus maždaug 5 000 pareiškėjų ir nukreipia juos į kontaktų centrą po maždaug £25 už skambutį:

```
Palūkanos ≈ £180 000 (įgūdžių priemoka)
         + 4 × 5 000 × £25 = £500 000 (nukreiptų kontaktų kaštai)
         ≈ £680 000 per metus
```

Tikslinis prasčiausiai veikiančių modulių taisymas kainuoja £1 200 000 ir, pagal modelį, sumažina palūkanas 70 %:

```
Palūkanų sumažėjimas = 0,70 × 680 000 = £476 000 per metus
Atsipirkimas ≈ 1 200 000 / 476 000 ≈ 2,5 metų
```

Tikslinimas svarbus: retai liečiamo kodo taisymas nieko neduoda, nes palūkanos susitelkia ten, kur pasikeitimų dažnis ir skolos tankis pasiekia aukščiausią tašką.

## Ryšys su programine inžinerija

Viešosios vertės požiūris, pakeliantis techninės skolos argumentą aukščiau nei „kodas senas“: pateikite senąją sistemą kaip inventorių, kuriame matyti, kur susitelkęs prarastas teikimo pajėgumas, ir aiškiai susiekite jį su [bendraisiais nuosavybės kaštais](../bendrieji-nuosavybės-kaštai-valdžios-it/), nes palūkanos yra veiklos kaštai, kurie priklauso TCO eilutei, nesvarbu, ar finansų skyrius to kada nors prašė. Skolos apsunkintos sistemos taip pat turi neproporcingą [kibernetinio saugumo](../viešojo-sektoriaus-kibernetinio-saugumo-vertė/) riziką, nes naujinimų dažnis ir skolos tankis koreliuoja – nepataisoma sena sistema yra techninė skola, kurios palūkanos mokamos incidentų rizika, o ne svarais. O kiekvienas kompromisas tarp taisymo ir naujos funkcijos yra pats savaime [delsimo kainos](../delsimo-kaina-viešosiose-programose/) sprendimas: skolos dengimas atideda kitą įstatyminį pakeitimą, kurio vėlavimo kaštus reikia palyginti su sutaupytomis palūkanomis.

## Dažniausios klaidos

- **Tik pagrindinės sumos ataskaita**: didelis, bauginantis taisymo įvertis be palūkanų skaičiaus nieko nepateisina išlaidų tvirtintojui.
- **Įrankių sugeneruotų skolos skaičių suprasti pažodžiui**: SQALE tipo skeneriai skaičiuoja taisyklių pažeidimus; jie praleidžia brangiausią skolos rūšį – architektūrinius sprendimus ir nedokumentuotas senąsias verslo taisykles – o pažymi smulkmenas.
- **„Perrašymas išvengia visko“**: pakeitimo programos turi atitikti tą pačią discipliną kaip ir bet kuris kitas verslo atvejis – kontrafaktiniai kaštai, sėkmės tikimybė ir diskontavimas – o ne gauti išimtį, kaip parodė 2013 m. Universal Credit paleidimas iš naujo.
- **Nulinės skolos utopizmas**: optimalus skolos lygis nėra nulis; skola yra svertas, kuris nupirko ankstesnį teikimą. Aktualus klausimas visada yra palūkanų norma, o ne tai, ar skola apskritai egzistuoja.

## Šaltiniai

- Cunningham W, "The WyCash Portfolio Management System", OOPSLA experience report, 1992.
- CAST, technical debt estimation (Appmarq benchmark). <https://www.castsoftware.com/glossary/technical-debt-estimation>
- National Audit Office, *Digital Transformation in Government* and reports on Universal Credit. <https://www.nao.org.uk/>
