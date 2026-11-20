# Poveikio vertinimas ir proceso vertinimas

Poveikio vertinimas klausia, ar programa sukėlė numatytus rezultatus. Proceso vertinimas klausia, ar programa iš tikrųjų buvo įgyvendinta taip, kaip suprojektuota: kam, kokia doze ir su kokiomis kliūtimis ar palengvinimais pakeliui. Tai skirtingi klausimai, reikalaujantys skirtingų metodų, o HM Treasury Magenta Book traktuoja abiejų užsakymą kartu kaip standartinę praktiką, nes silpnas ar nulinis poveikio rezultatas pats savaime nėra interpretuojamas: jis nepasako, ar programos pagrindinė teorija buvo klaidinga, ar gera teorija tiesiog niekada nebuvo tinkamai įgyvendinta.

## Kodėl tai svarbu

Vyriausybės vertinimai ne kartą nustatė, kad programa neturi išmatuojamo poveikio, tačiau neturėjo proceso vertinimo, kuris paaiškintų kodėl, ir užsakovai negalėjo atskirti „ši idėja neveikia“ (teorijos nesėkmė) nuo „ši idėja niekada nebuvo tinkamai išbandyta“ (įgyvendinimo nesėkmė). Medical Research Council gairės dėl sudėtingų intervencijų proceso vertinimo, paskelbtos BMJ 2015 m. ir plačiai cituojamos kartu su Magenta Book, formalizavo ištikimybę (angl. fidelity), dozę ir aprėptį kaip pagrindinius dalykus, kuriuos proceso vertinimas turi matuoti. Užsakyti poveikio vertinimą be proceso vertinimo rizikuojama atsisakyti iš tikrųjų patikimo programos dizaino, nes jis buvo pateiktas pusei numatytos populiacijos ir mažai daliai numatyto intensyvumo, o tokios klaidos sistemų kūrėjas gali gerai išvengti, nes teikimo ištikimybę geriausiai fiksuoja veiklos duomenų sistemos beveik realiu laiku.

## Matematika

```
Process evaluation asks:
 - Was it delivered to the target population, at the planned dose/intensity?
 - Did delivery match the logic model / theory of change design?
 - What barriers or facilitators affected delivery?
 Methods: fidelity checks against pre-specified thresholds, case studies, interviews,
          administrative delivery data.

Impact evaluation asks:
 - What changed, and how much of that change is attributable to the programme?
 Methods: RCT, DiD, PSM, RDD — see impact-evaluation-methods — against a counterfactual.

Combined diagnosis:
 No effect  + high fidelity  → theory failure: the model itself did not produce the outcome
 No effect  + low fidelity   → implementation failure: the model was never properly tested
 Effect found + high fidelity → replicate with confidence
 Effect found + low fidelity  → investigate further: the effect may be fragile or site-specific
```

## Pavyzdys su skaičiavimais

**Vietos valdžia (tėvystės programa)**: poveikio vertinimas, naudojant skirtumų skirtumų metodą, nustato +2 procentinių punktų vaiko gerovės rodiklio pokytį, statistiškai nereikšmingą. Kartu vykdytas proceso vertinimas nustato, kad programa pasiekė tik 210 iš 500 tikslinių šeimų (42 % aprėptis), o iš jų tik 95 pasiekė iš anksto nustatytą ištikimybės slenkstį (75 %+ lankytų užsiėmimų), t. y. 19 % pradinės planuotos aprėpties. Išvada: silpnas poveikio rezultatas atitinka įgyvendinimo nesėkmę, o ne įrodymą, kad programos modelis neveikia; tinkamas atsakas yra ištaisyti nukreipimo kelią, sukėlusį 58 % kritimą, o ne atsisakyti programos dizaino.

**Labdaros organizacija (skaitmeninio raštingumo programa)**: poveikio vertinimas nustato stiprų efektą (+18 procentinių punktų skaitmeninio pasitikėjimo įvertyje), o lygiagretus proceso vertinimas patvirtina 92 % ištikimybę planuojamai mokymo programai visose 12 teikimo vietų. Kartu finansuotojas gali plėsti programą užtikrintai, nes parodyta, kad efektas išlieka nuosekliai, o ne yra vienos neįprastai gerai veikiančios vietos produktas.

## Ryšys su programine inžinerija

Proceso vertinimo duomenys yra būtent tai, ką teikimo sistemos gerai fiksuoja: lankomumas pagal planą, užsiėmimų dozė ir atkrytis kiekviename nukreipimo ar registracijos piltuvo etape: tos pačios piltuvo analitikos, kurią inžinieriai jau kuria produkto funkcijoms, tik pritaikytos socialinės programos teikimo vamzdynui. Ištikimybės ir aprėpties metrikų teikimas programos vadovams beveik realiu laiku, o ne laukiant dotacijos pabaigos vertinimo, leidžia sugedusį nukreipimo kelią ištaisyti programos viduryje, o ne atrasti tik pasibaigus finansavimo laikotarpiui. Priežastinius dizainus, su kuriais proceso vertinimas derinamas, žr. [poveikio vertinimo metodai](../poveikio-vertinimo-metodai/), dizainą, pagal kurį proceso vertinimas tikrina ištikimybę: [pokyčio teorija](../pokyčio-teorija/) ir [logikos modelis](../loginis-modelis/), o teikimo sekimą iki pažadėtų rezultatų: [naudos realizavimas](../naudos-realizavimas/).

## Dažniausios klaidos

- **Tik poveikio vertinimo užsakymas.** Nulinis ar silpnas rezultatas tada negali būti interpretuojamas kaip teorijos ar įgyvendinimo nesėkmė, o būtent šis skirtumas svarbus sprendžiant, ką daryti toliau.
- **Proceso vertinimo traktavimas kaip minkštojo priedo.** Jam reikia to paties griežtumo ir iš anksto nustatytų ištikimybės kriterijų kaip poveikio dizainui, antraip rezultatams atėjus jis virsta anekdotais.
- **„Laiku ir pagal biudžetą“ painiojimas su „įgyvendinta, kaip suprojektuota“.** Proceso vertinimas tikrina ištikimybę modeliui (dozę, tikslinę grupę, turinį), o ne projektų valdymo RAG būseną.
- **Ištikimybės slenksčių neregistravimas iš anksto.** Sprendimas po fakto, kas laikoma „pakankama doze“, bet kokį nuviliančio poveikio rezultato paaiškinimą paverčia atrodančiu kaip post hoc atsiprašymas.

## Šaltiniai

- HM Treasury, Magenta Book (2020). <https://www.gov.uk/government/publications/the-magenta-book>
- Moore G, et al., "Process evaluation of complex interventions: Medical Research Council
  guidance." BMJ 2015;350:h1258. <https://www.bmj.com/content/350/bmj.h1258>
- National Audit Office, programme evaluation reports. <https://www.nao.org.uk/>
