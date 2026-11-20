# Šešėlinės kainos

Šešėlinė kaina – tai apskaičiuota vertė, priskiriama gėriui, ištekliui ar išorinio poveikio reiškiniui, kuris neturi stebimos rinkos kainos arba kurio rinkos kaina iškreipta ir neatspindi tikrosios viešosios vertės. Vyriausybės vertinimas remiasi nedideliu oficialių šešėlinių kainų rinkiniu – anglies dioksido, ne darbo laiko, nedirbančio darbo jėgos – kurias skelbia centrinė valdžia, kad visos ministerijos naudotų tą patį skaičių.

## Kodėl tai svarbu

Šešėlinės kainos egzistuoja todėl, kad [socialinė kaštų ir naudos analizė](../socialinė-kaštų-ir-naudos-analizė/) neįmanoma be pinigine išraiška išreikštos kiekvieno kaštų ir naudos elemento vertės, o kelių svarbiausių – išmesto anglies dioksido tonos, keliautojo valandos, kitaip nedirbančio žmogaus darbo valandos – iš viso nėra rinkos kainos arba ji klaidingai atspindi jų tikrąją visuomeninę kainą. HM Treasury ir Energetinio saugumo ir nulinio anglies dioksido išmetimo departamentas (Department for Energy Security and Net Zero) kartu skelbia anglies dioksido šešėlinę kainą, naudojamą visuose JK vyriausybės vertinimuose
(<https://www.gov.uk/government/publications/valuing-greenhouse-gas-emissions-in-policy-appraisal>).
Ji išvedama ne iš jokios anglies dioksido rinkos kainos, o taikant tikslą atitinkantį metodą: anglies dioksido vertė nustatoma pagal ribinius taršos mažinimo kaštus, reikalingus JK įstatymais nustatytiems anglies dioksido biudžetams pasiekti. Tai iš esmės kitokia logika nei stebėti, kiek anglies dioksidas iš tikrųjų kainuoja ES ar JK apyvartinių taršos leidimų prekybos sistemoje.

Šešėlinis darbo užmokesčio dydis darbo srityje remiasi panašia logika. Įdarbinus žmogų, kuris kitaip būtų likęs bedarbis, visuomenei tai nekainuoja viso jo atlyginimo – dalis to atlyginimo yra transfertas iš atsisakytų išmokų ir prarasto laisvalaikio ar paieškos laiko, o ne grynasis papildomas visuomenės išteklių naudojimas, todėl „Green Book“ gairės bedarbių darbui nustato šešėlinę kainą, mažesnę už rinkos atlyginimą, atspindinčią tikruosius to darbo alternatyviąją kainą (žr. [alternatyvioji kaina viešosiose išlaidose](../alternatyvioji-kaina-viešosiose-išlaidose/)), o ne jo rinkos kainą.

## Matematika

```
Anglies dioksido šešėlinė kaina (iliustracinė struktūra; dabartines reikšmes
reikia imti iš oficialios BEIS/DESNZ anglies dioksido verčių priemonės –
nenaudokite pasenusių skaičių):
  Prekybos sektoriaus vertė: remiasi ETS leidimų kainų trajektorijomis
  Neprekybos sektoriaus (tikslą atitinkanti) vertė: nustatoma pagal ribinius
    taršos mažinimo kaštus, reikalingus įstatymais nustatytiems anglies
    dioksido biudžetams pasiekti; ji laikui bėgant auga, nes lengvesnės
    taršos mažinimo galimybės išsenka
  Taikoma taip: £/tonai CO2e × variantu išmestų ar sumažintų tonų skaičius,
    ateities metų vertės diskontuojamos socialine diskonto norma

Šešėlinis darbo užmokesčio dydis (SWR):
  SWR = Rinkos atlyginimas − (sutaupyto laisvalaikio / paieškos laiko vertė
                        + nebemokamų socialinių išmokų vertė)
  Paprastai išreiškiamas rinkos atlyginimo dalimi (pvz., SWR = 0,6
    × rinkos atlyginimas didelio nedarbo vietovėje pagal „Green Book“
    A priedo gaires dėl darbo rinkų su laisvais pajėgumais)
```

Abu dydžiai yra centrinės valdžios nustatytos politikos konvencijos, o ne empiriniai rinkos stebėjimai – visa šešėlinės kainos esmė yra pakeisti trūkstamą ar iškreiptą rinką, todėl vertinime, kuriame ji naudojama, reikia nurodyti dabartinį oficialų šaltinį, o ne išvesti savo skaičių, kad visų ministerijų vertinimai būtų palyginami.

## Pavyzdys su skaičiavimais

**Nacionalinė valdžia**: potvynių apsaugos schemos vertinime apskaičiuojama, kad per 30 metų vertinimo laikotarpį, palyginti su „minimalių veiksmų“ (do minimum) bazine alternatyva, ji kasmet padeda išvengti 400 tonų CO2e išmetimo (mažiau naudojant avarinę techniką ir sumažinant įkūnytąjį anglies dioksido kiekį išvengus atstatymo darbų).

```
Iliustracinė anglies dioksido šešėlinė kaina: £280/tona CO2e (1 metai, vėliau
  auga per vertinimo laikotarpį pagal oficialų neprekybos sektoriaus anglies
  dioksido verčių grafiką)
1 metų anglies dioksido nauda = 400 × £280 = £112 000
```

Kadangi pagal oficialų grafiką anglies dioksido vertė vertinimo laikotarpiu *auga* (atspindint griežtėjančius anglies dioksido biudžetus), analitikas kiekvienam 30 metų srauto metui turi taikyti atitinkamų metų vertę, o ne vienodą normą – naudojant pirmųjų metų vertę visą laiką būtų nuvertinta vėlesnių metų nauda ir iškreiptas reitingas, palyginti su kitais potvynių apsaugos sprendimais, turinčiais kitokį anglies dioksido profilį.

**Vietos valdžia**: savivaldybės užimtumo paramos programa ilgalaikiams bedarbiams gyventojams įdarbina 150 žmonių darbui, mokant £11 per valandą. Vertinant naudojant visą rinkos atlyginimą, programai būtų priskirta £11 × dirbtos valandos kaip visuomeninė nauda, tačiau šešėlinio atlyginimo metodas pripažįsta, kad tai nebuvo iš kitų darbo vietų atėję darbuotojai – tikrieji jų darbo alternatyvioji kaina prieš programą buvo maži.

```
Rinkos atlyginimas: £11,00 per valandą
Šešėlinis atlyginimas (iliustracinis, didelis vietinis nedarbas): 0,6 × rinkos atlyginimas = £6,60 per valandą
Grynoji visuomeninė nauda, tenkanti vienai dirbtai valandai ≈ £11,00 − £6,60 = £4,40 per valandą
  („papildoma“ vertė, sukurta realiai neveikusią darbo jėgą įtraukus į gamybą,
   kitaip nei pats atlyginimas, kuris daugiausia yra transfertas)
```

Todėl užimtumo programų vertinimai didelio nedarbo vietovėse gali rodyti teigiamą grynąją viešąją vertę net tada, kai ta pati programa, vykdoma visiško užimtumo vietovėje, kur išstumta darbo jėga būtų tiesiog paimta iš kitų darbo vietų, jos nerodytų.

## Ryšys su programine inžinerija

Šešėlinės kainos retai tiesiogiai susijusios su programinės įrangos kūrimu, tačiau jos svarbios, kai verslo atvejis teigia, kad IT pokytis duos anglies dioksido ar socialinės naudos – duomenų centrų konsolidavimas, kuriuo siekiama sutaupyti išmetamo anglies dioksido, ar be popieriaus teikiama paslauga, kuria teigiama išvengiant spausdinimo ir pašto siuntimo išmetamo anglies dioksido, turi naudoti dabartinę oficialią anglies dioksido šešėlinę kainą, o ne sugalvotą skaičių, ir taikyti teisingą metų grafiką, o ne vienodą normą – kaip ir bet kokiai kitai „Green Book“ vertinimo įvesčiai. Žr. [bendrosios nuosavybės kaštai valdžios IT](../bendrieji-nuosavybės-kaštai-valdžios-it/) ir [viešojo sektoriaus kibernetinio saugumo vertė](../viešojo-sektoriaus-kibernetinio-saugumo-vertė/) – abiem atvejais šalia tiesiogiai įkainotų elementų dažnai prireikia šešėlinės kainos sunkiai išreiškiamai pinigais įvesčiai (pažeidimo rizikai, prastovoms).

## Dažniausios klaidos

- **Pasenusio anglies dioksido ar atlyginimo dydžio naudojimas.** Abi vertės periodiškai peržiūrimos centrinėse gairėse; vertinimas, paremtas pakeistu dydžiu, nepraeis Treasury patikros.
- **Vienodos anglies dioksido šešėlinės kainos taikymas kelių dešimtmečių vertinimui.** Oficialus grafikas laikui bėgant auga; naudojant pirmųjų metų vertę visą laiką iškreipiamas naudos ar kaštų profilis.
- **Šešėlinio atlyginimo painiojimas su faktinio darbuotojo atlyginimo nuolaida.** Šešėlinis darbo užmokesčio dydis koreguoja *vertinimo* darbo įvesties vertę, o ne atlyginimą, kurį darbuotojas iš tikrųjų gauna – supainiojus šiuos dalykus (klaidingai) gali būti bandoma pateisinti mažesnį nei rinkos atlyginimą.
- **Savo šešėlinės kainos išvedimas vietoj oficialios.** Šešėlinės kainos yra politikos konvencijos būtent tam, kad vertinimai būtų palyginami tarp ministerijų; vietoje sugalvotas skaičius, kad ir kaip gerai pagrįstas, tą palyginamumą sugriauna.

## Šaltiniai

- HM Treasury / Department for Energy Security and Net Zero. "Valuing greenhouse gas emissions in
  policy appraisal." <https://www.gov.uk/government/publications/valuing-greenhouse-gas-emissions-in-policy-appraisal>
- HM Treasury. "The Green Book: appraisal and evaluation in central government," Annex A (shadow
  price of labour, non-work time values).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Little IMD, Mirrlees JA. "Project Appraisal and Planning for Developing Countries." Heinemann,
  1974 (pagrindinė šešėlinių kainų metodika).
