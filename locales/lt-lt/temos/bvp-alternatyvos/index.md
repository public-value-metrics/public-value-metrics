# BVP alternatyvos

BVP alternatyvos yra metrikos, sukurtos tam, ką bendrasis vidaus produktas (BVP) struktūriškai ignoruoja: neapmokamam rūpinimosi darbui, aplinkos ištekliams išsekimui, pajamų paskirstymui ir tam, ar augimas iš tikrųjų gerina gyvenimą. Geriausiai žinomos yra tikrosios pažangos rodiklis (angl. Genuine Progress Indicator, GPI) ir Butano bendrosios nacionalinės laimės (angl. Gross National Happiness, GNH) indeksas; įtakingiausiai pagrindimą jas rimtai vertinti pateikė 2009 m. Stiglitz-Sen-Fitoussi komisija. Inžinieriams, kuriantiems vyriausybės skydelius ar KPI sistemas, „kuris skaičius laikomas pažanga“ yra dizaino sprendimas su realiomis pasekmėmis tam, kas gauna finansavimą.

## Kodėl tai svarbu

Simon Kuznets, 1930-aisiais sukūręs JAV nacionalines sąskaitas, 1934 m. įspėjo Kongresą, kad „tautos gerovę vargiai galima spręsti pagal nacionalinių pajamų matavimą“: šį įspėjimą rodiklis beveik iš karto peraugo. BVP naftos išsiliejimo likvidavimą skaičiuoja kaip augimą, o tėvų neapmokamą vaikų priežiūrą kaip nieką; jis neskiria išlaidų, kurios kuria patvarią gerovę, nuo išlaidų, kurios tik kompensuoja jau padarytą žalą. Stiglitz-Sen-Fitoussi komisija, sušaukta Prancūzijos prezidento Nicolas Sarkozy ir vadovaujama Joseph Stiglitz, Amartya Sen ir Jean-Paul Fitoussi, 2009 m. pranešė, kad statistikos sistemos turėtų perkelti akcentą „nuo ekonominės gamybos matavimo prie žmonių gerovės matavimo“ ir kad tvarumas turėtų būti sekamas atskirai nuo dabartinės gerovės, o ne sulietas į vieną skaičių. BVP alternatyvos operacionalizuoja šią rekomendaciją. GPI, 1990-aisiais sukurtas ekspertų centro Redefining Progress ir besiremiantis William Nordhaus ir James Tobin 1972 m. Ekonominės gerovės matu, prasideda nuo asmeninio vartojimo (kaip ir BVP), tada prideda ne rinkos naudas, kurių BVP praleidžia (namų ūkio darbas, savanorystė), ir atima gynybines bei išsekimo sąnaudas (nusikalstamumą, taršą, kelionę į darbą, išteklių mažėjimą), kurias BVP klaidingai skaičiuoja kaip teigiamas. Butano GNH indeksas, administruojamas GNH Centre Bhutan (<https://www.gnhcentre.bt/>), eina dar toliau, pakeisdamas augimą kaip šalies konstitucinį tikslą: jis sujungia 33 rodiklius 9 srityse (psichologinę gerovę, sveikatą, švietimą, laiko naudojimą, kultūrinę įvairovę, valdymą, bendruomenės gyvybingumą, ekologinę įvairovę ir gyvenimo lygį) į vieną pakankamumu grįstą įvertį, tiesiogiai naudojamą vyriausybės politikos pasiūlymams atrinkti.

## Matematika

```
GPI = personal consumption expenditure
      + non-market benefits (household labour, volunteering, higher education)
      − defensive and social costs (crime, pollution, commuting, family breakdown)
      − depletion of natural and social capital (resource drawdown, farmland loss)

GNH sufficiency score, per domain:
  a person is "sufficient" in a domain once they clear its threshold on each indicator
  Happiness Index = (% of population sufficient in ≥ 6 of 9 domains)
                    + (weighted average shortfall of the "not-yet-happy" minority)
```

## Pavyzdys su skaičiavimais

**Regionas, GPI**: asmeninis vartojimas yra 50 mlrd. $. Pridedama apskaičiuota namų ūkio ir savanorių darbo vertė 12 mlrd. $ (pakeitimo kaštų atlyginimo normos; žr. [savanorių laiko vertė](../savanorių-laiko-vertė/)). Atimami apskaičiuoti metiniai kelionės į darbą spūsčių (3 mlrd. $), nusikalstamumo (4 mlrd. $) ir ilgalaikio išteklių išsekimo (6 mlrd. $) kaštai:

```
GPI = 50 + 12 − 3 − 4 − 6 = 49 ($bn)
```

Jei tais metais BVP išaugo nuo 50 mlrd. $ iki 55 mlrd. $ (+10 %), bet gynybiniai ir išsekimo kaštai augo greičiau nei vartojimas, GPI gali kristi net ir augant BVP: „slenksčio hipotezė“, kurią GPI tyrėjai nurodo didelių pajamų ekonomikoms maždaug nuo 1970-ųjų, kai augimas toliau kilo, o GPI nusistovėjo plynaukštėje.

**Pilietis, GNH**: respondentas pasiekia pakankamumo slenkstį 7 iš 9 sričių (sveikata, švietimas, gyvenimo lygis, bendruomenės gyvybingumas, kultūrinė įvairovė, ekologinė įvairovė, laiko naudojimas), bet nepasiekia psichologinės gerovės ir valdymo. Kadangi 7 ≥ 6, jis skaičiuojamas „laimingu“ galvų skaičiavime; indeksas atskirai seka dviejų trūkumų gylį, kad siaura sėkmė nesiskirtų nuo patogios.

## Ryšys su programine inžinerija

- KPI skydelis, modeliuojamas tik pagal pralaidumą ar išlaidas (BVP modelis), sistemingai praleis žalą, padarytą kuriant tą pralaidumą: palaikymo bilietų skaičius, traktuojamas kaip „įsitraukimas“, o ne „naudotojų nepasitenkinimas“, yra programinės įrangos teikimo versija, kai naftos išsiliejimas skaičiuojamas kaip augimas.
- GPI stiliaus apskaita yra naudingas audito šablonas bet kuriam [viešojo sektoriaus KPI](../viešojo-sektoriaus-pagrindiniai-veiklos-rodikliai/) rinkiniui: kiekvienai pagrindinei išvesties metrikai paklauskite, kokias gynybines sąnaudas ji tyliai patiria (pakartotinis darbas, reagavimas į incidentus, perdegimas) ir jas atimkite, kaip GPI atima gynybines išlaidas iš vartojimo.
- GNH sričių pakankamumo metodas (išlaikyta / neišlaikyta kiekvienoje dimensijoje, tada agregavimas) struktūriškai yra ta pati technika kaip [daugiakriterinė sprendimų analizė](../daugiakriterė-sprendimų-analizė/) ir verta pakartotinio naudojimo visur, kur vienas skaliarinis įvertis paslėptų kritiškai nepavykusią dimensiją.

## Dažniausios klaidos

- **GPI laikymas tikslia nacionaline sąskaita**: skirtingai nei BVP, GPI neturi vienos standartizuotos metodikos; skirtingi tyrimai skirtingai svertina kelionės į darbą kaštus, savanorių laiką ar išteklių išsekimą, todėl GPI palyginimai tarp tyrimų yra daug mažiau patikimi nei BVP palyginimai tarp šalių.
- **GNH perkėlimas be pakeitimų į kitą politikos kultūrą**: jo sričių svoriai ir pakankamumo slenksčiai nustatyti per Butano konsultacijas; nukopijavus skaičių be pagrindinio konsultavimo proceso gaunama tuščia metrika, kuria niekas nepasitiki.
- **Prielaida, kad BVP alternatyva pakeičia sąnaudų ir naudos vertinimą**: tai diagnostiniai, visos ekonomikos rodikliai, o ne vienos programos sprendimų įrankiai; tam naudokite [socialinė sąnaudų ir naudos analizė](../socialinė-kaštų-ir-naudos-analizė/).

## Šaltiniai

- Stiglitz JE, Sen A, Fitoussi J-P. "Report by the Commission on the Measurement of Economic
  Performance and Social Progress." (2009) <https://ec.europa.eu/eurostat/documents/118025/118123/Fitoussi+Commission+report>
- GNH Centre Bhutan. <https://www.gnhcentre.bt/>
- Redefining Progress. "The Genuine Progress Indicator: A Tool for Sustainable Development."
- Nordhaus WD, Tobin J. "Is Growth Obsolete?" (1972), NBER.
