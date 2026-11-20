# Pokyčio teorija

Pokyčio teorija – tai aiški, atgaline tvarka sudaryta priežastinė grandinė nuo ilgalaikio tikslo iki būtinų sąlygų ir veiklų, kurios turi egzistuoti, kad tikslas būtų pasiektas, kartu su prielaidomis, siejančiomis kiekvieną grandį. Ji kuriama pradedant nuo norimo rezultato ir pakartotinai klausiant „kas turi būti tiesa prieš pat tai, kad tai įvyktų?“, kol pasiekiamos veiklos, kurias iš tikrųjų galima įgyvendinti – tai priešinga kryptis nei [loginio modelio](../loginis-modelis/), todėl jie vienas kitą papildo, o ne pakeičia.

## Kodėl tai svarbu

Atgalinio susiejimo metodą formalizavo Center for Theory of Change ir ActKnowledge, remdamiesi vertintojos Carol Weiss darbu apie programų prielaidų aiškų išreiškimą, kad jas būtų galima tikrinti, o ne priimti tikėjimu. JK dotacijų vertinimas tai tiesiogiai perėmė: HM Treasury „Magenta Book“ pokyčio teoriją laiko bet kokio vertinimo projekto pradžios tašku, o tokie finansuotojai kaip National Lottery Community Fund reikalauja, kad pareiškėjai ją suformuluotų, prieš finansuodami pasiūlymą. Programinės įrangos inžinieriui ji svarbi todėl, kad pokyčio teorija yra dokumentas, kuris turėtų lemti, ką jūsų sistema turi matuoti – jei priežastinė grandinė sako „išmokų gavimas priklauso nuo to, ar pareiškėjai gauna personalizuotą skaičiavimą“, tai patikrinama prielaida, kurią jūsų produktas gali būti instrumentuotas patvirtinti ar paneigti.

## Matematika

Pokyčio teorija yra struktūrinė, o ne skaitinė. Kiekviena grandis turėtų turėti ir prielaidą, ir rodiklį, kuris galėtų parodyti, kad prielaida klaidinga:

```
Ilgalaikis rezultatas (tikslas)
  ↑ sąlyga + prielaida + rodiklis
Tarpinis rezultatas N
  ↑ sąlyga + prielaida + rodiklis
  ...
Tarpinis rezultatas 1
  ↑ sąlyga + prielaida + rodiklis
Veiklos / intervencijos
  ↑ skirti ištekliai
Įvestys
```

Ši struktūra tiesiogiai maitina [poveikio vertinimo metodus](../poveikio-vertinimo-metodai/), kurie egzistuoja tikrinti, ar kiekvienos grandies prielaidos iš tikrųjų galioja, ir [kontrafaktinę analizę](../kontrafaktinė-analizė/), kuri tikrina, ar ilgalaikis rezultatas būtų įvykęs bet kuriuo atveju.

## Pavyzdys su skaičiavimais

**Vietos valdžia (benamystės prevencija)**: ilgalaikis rezultatas – pastovi nuoma 12 mėnesių šeimoms, kurioms gresia iškeldinimas.

- Sąlyga: šeimos turi realistišką, įperkamą įsiskolinimų grąžinimo planą.
  Prielaida: socialinio darbuotojo suderinti planai tvaresni nei teismo nustatyti.
  Rodiklis: % planų, vis dar veikiančių po 6 mėnesių.
- Sąlyga: šeimos kreipiasi dėl išmokų, į kurias turi teisę.
  Prielaida: skaitmeninis išmokų skaičiuotuvas padidina teisingų prašymų dalį, palyginti su popierinėmis formomis.
  Rodiklis: prašymų tikslumo dalis, lyginant prieš ir po įrankio paleidimo.
- Veiklos: socialinio darbuotojo atranka, skaitmeninis išmokų skaičiuotuvas, derybos dėl įsiskolinimų.

Bandomojoje 120 šeimų grupėje išmokų skaičiuotuvo prielaida pasitvirtino 102 šeimoms (85 %), kurios vėliau teisingai pateikė prašymus, ką patvirtino vėlesnis proceso vertinimas – taip programos komanda gavo įrodymų būtent šiai grandžiai, o ne vieną visos grandinės teiginį apie išvengtą benamystę.

**Labdara (jaunimo mentorystė)**: ilgalaikis rezultatas – sumažėjęs pašalinimas iš mokyklos. Atgaline tvarka susietos sąlygos: pagerėjęs emocijų reguliavimas → pasitikėjimu grįstas santykis su mentoriumi „vienas prieš vieną“ → nuolatinis savaitinis kontaktas dvi pusmečius. Teorija aiškiai parodo, kad „nuolatinio savaitinio kontakto“ sąlygos neįvykdymas (pavyzdžiui, dėl mentorių kaitos) prognozuoja, kad rezultatas neįvyks – tai patikrinamas, paneigiamas teiginys, o ne viltis.

## Ryšys su programine inžinerija

Pokyčio teorija turėtų formuoti produkto duomenų modelį dar prieš sukuriant bet kokį skydelį: nustatyti, kurioms grandims reikia rodiklio, ir instrumentuoti būtent jas, užuot numatytai registravus tai, ką lengviausia. Ji taip pat drausmina plano (roadmap) diskusijas – funkcija, kuri neatitinka jokios grandinės grandies, nėra akivaizdžiai verta kurti. Žr. [loginis modelis](../loginis-modelis/) – į priekį nukreiptą atskaitomybės grandinę, sudaromą susitarus dėl teorijos, [socialinė investicijų grąža](../socialinė-investicijų-grąža/) – metodą, kuris priklauso nuo pokyčio teorijos, nustatant, kuriuos rezultatus vertinti, ir [rezultatai ir produktai](../rezultatai-ir-produktai/) – skirtumą, nuo kurio priklauso tarpinių rezultatų grandys.

## Dažniausios klaidos

- **Painiojimas su logikos modeliu.** Pokyčio teorija yra priežastinė ir aiškinamoji (kodėl manome, kad tai veikia); loginis modelis – nuoseklus ir aprašomasis (kas vyksta kokia tvarka). Sukūrus tik vieną trūksta arba „kodėl“, arba atskaitomybės pėdsako.
- **Prielaidų palikimas neišreikštų.** Visa atgalinio susiejimo vertė yra patikrinamų prielaidų išryškinimas; pokyčio teorija, kuri tik išvardija langelius ir rodykles nenurodydama, kas galėtų paneigti kiekvieną grandį, yra dekoracija.
- **Sukūrimas vieną kartą ir padėjimas į lentyną.** Pokyčio teorija, parašyta finansavimo paraiškai ir niekada neperžiūrėta, nustoja būti naudinga, kai tik įrodymai pradeda prieštarauti grandžiai.
- **Suinteresuotųjų šalių indėlio praleidimas.** Pokyčio teorija, sukurta vien užsakovų be tiesiogiai dirbančių darbuotojų ar naudos gavėjų indėlio, linkusi užkoduoti prielaidas, kuriomis nė vienas paslaugą teikiantis žmogus netiki.

## Šaltiniai

- Center for Theory of Change. <https://www.theoryofchange.org/>
- ActKnowledge. <https://www.actknowledge.org/>
- HM Treasury, Magenta Book (2020), Chapter 3. <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, theory of change guidance. <https://www.tnlcommunityfund.org.uk/>
