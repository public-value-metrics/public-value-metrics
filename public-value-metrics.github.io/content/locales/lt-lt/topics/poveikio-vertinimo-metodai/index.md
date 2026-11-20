# Poveikio vertinimo metodai

Poveikio vertinimo metodai yra statistiniai ir eksperimentiniai dizainai, naudojami įvertinti, ką politika ar programa iš tikrųjų sukėlė, skirtingai nuo to, kas būtų įvykę ir taip: atsitiktinių imčių kontroliuojami tyrimai (RCT), skirtumų skirtumų metodas (angl. difference-in-differences), polinkio balų suporavimas (angl. propensity score matching) ir regresijos trūkio dizainas (angl. regression discontinuity design) yra keturi dažniausiai naudojami JK viešojoje politikoje. Jie egzistuoja, nes dauguma vyriausybės intervencijų negali būti išbandytos laboratorijoje: negalima atsitiktinai parinkti, kuris miestas gaus naują autobuso maršrutą, taip, kaip galima atsitiktinai parinkti, kuris pacientas gaus vaistą, todėl šie metodai pasiskolina tą pačią priežastinę logiką ne visada reikalaudami atsitiktinio paskyrimo.

## Kodėl tai svarbu

HM Treasury Magenta Book A priedas apie kvaziexperimentinius metodus yra kanoninės JK vyriausybės gairės, kaip rinktis tarp šių dizainų, o tokios institucijos kaip Education Endowment Foundation ir What Works Centre for Local Economic Growth įtvirtina įrodymų hierarchiją, pastatytą aplink juos: RCT, kai atsitiktinė atranka įmanoma ir etiška, kvaziexperimentiniai dizainai, kai ne. Metodo pasirinkimas nėra techninis papildymas po fakto: jis lemia, ar vertinimas gali atsakyti „ar programa tai sukėlė?“, ar tik „ar tai įvyko po to, kai programa prasidėjo?“, t. y. tą patį klausimą, kurį [kontrafaktinė analizė](../kontrafaktinė-analizė/) verčia užduoti prieš užsakant bet kokį vertinimą.

## Matematika

```
RCT:
  Impact = mean(outcome | treatment group) − mean(outcome | control group)
  (valid because assignment to treatment is random)

Difference-in-differences (DiD):
  Impact = [outcome_after(treated) − outcome_before(treated)]
         − [outcome_after(control) − outcome_before(control)]
  (requires a "parallel trends" assumption: treated and control would have moved together
   absent the intervention)

Propensity score matching (PSM):
  1. Estimate P(treatment = 1 | covariates X) for every unit → propensity score
  2. Match treated units to untreated units with similar propensity scores
  3. Impact = mean(outcome | treated) − mean(outcome | matched control)

Regression discontinuity design (RDD):
  Impact = jump in outcome observed at the eligibility threshold,
           comparing units just above vs just below the cutoff
```

## Pavyzdys su skaičiavimais

**Vietos valdžia (skirtumų skirtumų metodas probleminių šeimų programai)**: rezultatas yra mokyklos lankomumas. Gydoma vietovė per programos laikotarpį pereina nuo 84 % iki 89 % lankomumo (+5 procentinių punktų); palyginama, bet negydoma vietovė per tą patį laikotarpį pereina nuo 85 % iki 87 % (+2 procentiniai punktai). DiD poveikio įvertis: 5 − 2 = +3 procentiniai punktai, priskirtini programai. Pritaikius 2 000 mokinių kohortai gydomoje vietovėje, tai atitinka maždaug 60 papildomų mokinių (3 % × 2 000), pasiekusių aukštesnę lankomumo kategoriją; ši ekstrapoliacija turėtų būti pateikta su lygiagrečių tendencijų išlyga, o ne kaip tikslus galvų skaičius.

**Labdaros organizacija (polinkio balų suporavimas įsidarbinimo gebėjimų labdarai)**: 300 programos dalyvių suporuojami su 300 asmenų iš didesnio administracinio duomenų rinkinio pagal polinkio balus, sudarytus iš amžiaus, ankstesnės užimtumo istorijos ir kvalifikacijos lygio. Dvylikos mėnesių užimtumo lygis: suporuota gydoma grupė 46 %, suporuota palyginimo grupė 33 %. PSM poveikio įvertis: 46 % − 33 % = +13 procentinių punktų, priskirtinų programai, su sąlyga, kad nėra nestebimo painiavos veiksnio (pvz., motyvacijos), lemiančio ir dalyvavimą, ir rezultatą.

## Ryšys su programine inžinerija

Ar kuris nors iš šių dizainų bus įmanomas vėliau, labai priklauso nuo duomenų inžinerijos sprendimų, priimtų anksti. RDD reikia tiksliai įrašyto bėgančio kintamojo ir tikrai švaraus tinkamumo slenksčio; DiD reikia palyginamų laikotarpių skydelio duomenų ir gydomoms, ir palyginimo vietovėms, o tai reiškia nuoseklius sujungimus tarp sistemų ir metų; PSM reikia turtingų bazinių kovariačių duomenų, užfiksuotų prieš gydymą, o ne rekonstruotų po to. Duomenų modelis, nuo pat pradžių suprojektuotas kartu su [pokyčio teorija](../pokyčio-teorija/) ir [logikos modeliu](../loginis-modelis/) ir fiksuojantis bazines kovariates, datas ir palyginimo grupei tinkamus įrašus, leidžia vėliau atlikti griežtą poveikio vertinimą, o ne brangiai skubotai taisyti po fakto. Papildomą klausimą, į kurį šie metodai patys neatsako, žr. [poveikio ir proceso vertinimas](../poveikio-vertinimas-ir-proceso-vertinimas/).

## Dažniausios klaidos

- **RCT primetimas ten, kur tai neįmanoma ar neetiška**, arba atvirkščiai, kvaziexperimentinio dizaino niekada neapsvarstymas, kai tikra jo galimybė (politikos slenkstis, laipsniškas diegimas) buvo ir liko nepanaudota.
- **Lygiagrečių tendencijų prielaidos ignoravimas DiD.** Jei palyginimo vietovė jau skyrėsi nuo gydomos prieš intervenciją, dviejų taškų palyginimas užterštas; tikrinkite ankstesnes tendencijas, ne tik prieš / po.
- **Suporavimas tik pagal stebimas kovariates PSM.** Nestebima atranka, pvz., dalyvių motyvacija, gali iškreipti įvertį net kai stebimos kovariatos gerai subalansuotos.
- **Bėgančio kintamojo manipuliavimas RDD.** Jei žmonės gali paveikti savo įvertį, kad patektų vos už tinkamumo slenksčio ribų, trūkis nebeišskiria priežastinio poveikio.

## Šaltiniai

- HM Treasury, Magenta Book (2020), Annex A: Quasi-Experimental Methods. <https://www.gov.uk/government/publications/the-magenta-book>
- What Works Centre for Local Economic Growth, evidence review methodology. <https://whatworksgrowth.org/>
- Education Endowment Foundation, evaluation guidance. <https://educationendowmentfoundation.org.uk/>
