# Green Book vertinimas (penkių atvejų modelis)

Green Book yra HM Treasury privalomos gairės JK vyriausybės išlaidų pasiūlymams vertinti. Pagrindinis jos įrankis, penkių atvejų modelis, verčia verslo atvejį atsakyti į penkis atskirus klausimus: ar tai gera idėja, ar pateikia vertę, ar tai galima nupirkti, ar tai įperkama ir ar tai galima įgyvendinti, o ne viską sutraukti į vieną skaičių, kurį ministras galėtų tiesiog patvirtinti.

## Kodėl tai svarbu

Kiekvienas JK centrinės vyriausybės išlaidų pasiūlymas, viršijantis departamento deleguotas ribas, prieš skiriant finansavimą turi pereiti Green Book vertinimą, o HM Treasury Green Book Review 2020 (paskelbta po kritikos, kad procesas šališkas skurdesnių regionų atžvilgiu, žr. <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>) sugriežtino reikalavimą, kad variantai būtų lyginami su tikru „minimalių veiksmų“ (angl. do minimum) bazine linija ir kad strateginis tinkamumas būtų įrodytas dar prieš vertinant pinigų vertę. Pats penkių atvejų modelis yra senesnis už Green Book: jis atsirado Office of Government Commerce kaip standartinė verslo atvejo struktūra, tačiau 2022 m. Green Book leidimas jį įtvirtina kaip privalomą formą bet kuriam verslo atvejui, siekiančiam Treasury patvirtinimo: <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>.

Atvejo skaidymo penkiais būdais esmė yra ta, kad pasiūlymas gali nepavykti bet kurioje vienoje dimensijoje, nesvarbu, kaip sekasi kitose. Strategiškai pagrįstas, ekonomiškai efektyvus IT platformos perkėlimas vis tiek gali neišlaikyti komercinio atvejo, jei jį gali pateikti tik vienas tiekėjas (sukuriant vieno tiekėjo pirkimo riziką), arba neišlaikyti valdymo atvejo, jei departamentas neturi tokio dydžio programų įgyvendinimo patirties. Vienas „pinigų vertės“ įvertis paslepia būtent tokį nesėkmės būdą.

## Matematika

Penkių atvejų modelis yra struktūra, o ne formulė, tačiau kiekvienas atvejis turi savo kiekybinį ar įrodymų testą:

```
1. Strategic case
   Evidence of a spending objective linked to organisational strategy.
   Test: is there a case for change at all? ("do nothing" is always an option.)

2. Economic case
   Options appraisal against a "do minimum" baseline, using
   social cost-benefit analysis or cost-effectiveness analysis.
   Test: which option maximizes net public value?
   See ../social-cost-benefit-analysis/ and ../cost-effectiveness-analysis-in-government/

3. Commercial case
   Market engagement, procurement route, risk allocation between
   buyer and supplier.
   Test: is the preferred option procurable on acceptable terms?

4. Financial case
   Affordability within departmental budget limits, funding source,
   balance sheet treatment.
   Test: can we afford it, this year and every year after?

5. Management case
   Governance, project plan, benefits realization plan, risk register.
   Test: can this organization actually deliver it?
   See ../benefits-realization/
```

Ekonominis atvejis yra ten, kur gyvena kiekybinis vertinimas: variantai lyginami pagal [socialinės diskonto normos](../socialinė-diskonto-norma/) pakoreguotą grynąją dabartinę vertę, naudojant [socialinės sąnaudų ir naudos analizės](../socialinė-kaštų-ir-naudos-analizė/) metodą, o kai naudos negalima sąžiningai išreikšti pinigais, pasitelkiant [ekonominio efektyvumo analizę](../kaštų-veiksmingumo-analizė-valdžios-sektoriuje/) arba [daugiakriterinę sprendimų analizę](../daugiakriterė-sprendimų-analizė/).

## Pavyzdys su skaičiavimais

**Vietos valdžia**: savivaldybė, vertinanti 12 mln. £ būsto remonto IT sistemą, penkis atvejus pereina taip. Strateginis atvejis: remonto atsilikimas be intervencijos per 18 mėnesių pažeis įstatymu numatytą tinkamų namų standartą. Ekonominis atvejis: trys variantai įkainoti 10 metų vertinimo laikotarpiu esant 3,5 % diskonto normai (pagal 2022 m. Green Book standartinę socialinę laiko pirmenybės normą): „minimalūs veiksmai“ (seną sistemą užtaisyti, NPV −4,1 mln. £), „pirkti“ (COTS platforma, NPV +2,3 mln. £), „kurti“ (individuali platforma, NPV +0,6 mln. £, pritaikius 40 % optimizmo šališkumą programinės įrangos kūrimui nediskontuotiems kapitalo kaštams, pagal Green Book A priedą). Pirkimas laimi ekonominį atvejį. Komercinis atvejis: yra du tinkami tiekėjai, galimas konkurencinis konkursas: išlaikoma. Finansinis atvejis: kapitalą galima gauti iš Public Works Loan Board, einamosios išlaidos telpa į vidutinės trukmės finansinį planą: išlaikoma. Valdymo atvejis: savivaldybė per pastaruosius penkerius metus įgyvendino dvi panašias sistemas: išlaikoma. Pasiūlymas tęsiamas su „pirkti“.

**Centrinės vyriausybės departamentas**: pasiūlymas su stipriu ekonominiu atveju (NPV +40 mln. £), bet kai atitinkamą akreditaciją turi tik vienas tiekėjas, neišlaiko komercinio atvejo konkurencijos testo, todėl reikia arba vieno tiekėjo pirkimo išimties (su sava tikrinimo našta), arba specifikacijos pertvarkymo rinkai atverti: vien ekonominis atvejis to niekada nebūtų atskleidęs.

## Ryšys su programine inžinerija

Inžinerijos komandos vyriausybėje ar iš dotacijų finansuojamose organizacijose paprastai mato tik ekonominį atvejį, nes būtent šią dalį produkto ir inžinerijos vadovybės prašoma pagrįsti („kokia šio perkėlimo ROI?“). Tačiau verslo atvejui, kuris įveikia Treasury ar dotacijų komitetą, reikia visų penkių, o inžinieriai dažnai yra geriausiai pasirengę atsakyti į komercinį atvejį (ar tai tikrai galima nupirkti, ar mus pririša prie vieno tiekėjo nuosavybinio formato?) ir valdymo atvejį (ar turime teikimo gebėjimą, ar tai priklauso nuo trijų konkrečių žmonių neišėjimo?). Prašymą „tik verslo atvejo skaičių“ traktuokite kaip prašymą vienos penktosios tikrojo sprendimo. Kaip dažniausiai apibendrinamas ekonominio atvejo rezultatas, žr. [pinigų vertė](../vertė-už-pinigus/), o finansinio atvejo įprastą kiekybinį branduolį: [bendrieji nuosavybės kaštai](../bendrieji-nuosavybės-kaštai-valdžios-it/).

## Dažniausios klaidos

- **Pirmiausia rašomas ekonominis atvejis, o strateginis atvejis jam pritaikomas.** Green Book Review 2020 nustatė, kad šis nesėkmės būdas skatino vertinimo šališkumą link vietų ir sektorių, kurie jau buvo gerai pagrįsti įrodymais, įtvirtindamas regioninę nelygybę; strateginis atvejis turėtų nustatyti tikslą prieš lyginant variantus.
- **„Minimalių veiksmų“ traktavimas kaip „nieko nedaryti“.** Teisinga bazinė linija yra mažiausių kaštų variantas, kuris vis tiek tenkina minimalius teisinius ar saugos įsipareigojimus, o ne fantazija apie nulines išlaidas: palyginimas su tikru nuliu išpučia kiekvieno varianto akivaizdžią vertę.
- **Komercinio ir valdymo atvejų praleidimas, nes ekonominis atvejis stiprus.** Didelio NPV pasiūlymas, kurio negalima konkurencingai nupirkti ar kurio negali įgyvendinti remianti organizacija, nėra finansuotinas pasiūlymas; Treasury peržiūrėtojai įprastai atmeta dėl šių priežasčių net su įtikinamu ekonominiu atveju.
- **Penkių atvejų modelio taikymas vieną kartą, pradžioje.** Green Book reikalauja atvejį peržiūrėti kiekviename vėlesniame patvirtinimo etape (strateginis preliminarus atvejis, preliminarus verslo atvejis, pilnas verslo atvejis), kai kaštai ir įrodymai tikslėja: atvejis, užšaldytas preliminariame etape, praleidžia kaštų augimą, kurį būtų pastebėjęs vėlesnis etapas.

## Šaltiniai

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury. "Green Book Review 2020: findings and response." 2020.
  <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>
- HM Treasury / Infrastructure and Projects Authority. "Guide to developing the project business
  case." <https://www.gov.uk/government/publications/project-business-case-guide>
