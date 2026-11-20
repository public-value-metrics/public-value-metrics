# Rezultatais grįsta atskaitomybė (OBA)

Rezultatais grįsta atskaitomybė (Outcomes-Based Accountability, dar vadinama Results-Based Accountability, RBA) yra Marko Friedmano sistema, skirianti du klausimus, kuriuos viešojo sektoriaus ataskaitos įprastai sulieja: „ar gyventojams sekasi gerai?“ (populiacijos atskaitomybė) ir „ar šiai konkrečiai programai sekasi gerai?“ (veiklos atskaitomybė). Friedmano žodžiais, jų painiojimas yra vienintelė dažniausia priežastis, kodėl gerai vykdomos programos kaltinamos dėl populiacijos tendencijų, kurioms jos niekada neturėjo galios daryti įtakos.

## Kodėl tai svarbu

Friedmanas sistemą išdėstė knygoje *Trying Hard Is Not Good Enough* (2005), teigdamas, kad dauguma viešųjų ataskaitų arba paskandina sprendimų priėmėjus populiacijos lygio statistikoje, kurios nekontroliuoja nė viena agentūra (paauglių nėštumo lygis, nedarbo lygis, tikėtina gyvenimo trukmė), arba programos lygio veiklos skaičiuose (priimti klientai, atlikti nukreipimai), kurie nieko nepasako, ar kieno nors gyvenimas pagerėjo. RBA indėlis yra mažas, discipliniuotas žodynas, išlaikantis abu dalykus atskirai: populiacijos rezultatai (visos populiacijos gerovės sąlygos, pavyzdžiui, „vaikai gimsta sveiki“) nepriklauso jokiai atskirai agentūrai ir reikalauja daug partnerių judėjimo kartu; veiklos rodikliai (kaip gerai konkreti programa aptarnauja savo konkrečius klientus) priklauso vienai agentūrai ir turėtų būti vertinami tik pagal tai, kam ta agentūra iš tikrųjų gali daryti įtaką. Friedmano „trys veiklos klausimai“ (kiek padarėme, kaip gerai tai padarėme ir ar kam nors geriau?) dabar įtvirtinti JAV valstijų ir apskričių socialinių paslaugų sutartyse ir per RBA atitinkančią konsultacinę įmonę bei įrankių rinkinį Clear Impact plačiai naudojami Jungtinės Karalystės ir Sandraugos vietos valdžios užsakymuose. Praktinė reikšmė sutartinė: būsto programa neturėtų netekti finansavimo todėl, kad miesto benamystės lygis išaugo dėl makroekonominių priežasčių, kurių ji negalėjo paveikti, bet tikrai turėtų jo netekti, jei jos pačios klientai nėra apgyvendinami.

## Matematika

```
Populiacijos atskaitomybė („bendras vaizdas“, kurį dalijasi bendruomenė, regionas ar valstybė):
  Rezultatas   - gerovės sąlyga (pvz., „gyventojai yra ekonomiškai saugūs“)
  Rodiklis(-iai) - tos sąlygos matas (pvz., nedarbo lygis, vidutinės namų ūkio pajamos)
  → rodiklio neturi nė viena programa; pokyčiui reikia daug prisidedančiųjų

Veiklos atskaitomybė (už ką atsako viena programa):
  Kiek padarėme?        - veiklos apimtis (aptarnauti klientai, pateikti vienetai)
  Kaip gerai padarėme?  - kokybė / efektyvumas (% užbaigusių programą, kaina vienam klientui)
  Ar kam nors geriau?   - svarbus rezultatas (% dirbančių praėjus 6 mėnesiams po
                          programos, prieš / po arba palyginti su palyginamąja grupe)

Programa vertinama pagal trečią veiklos klausimą, niekada tiesiogiai pagal populiacijos
rodiklį, nebent jos mastas ir sandara tikėtinai galėtų jį pajudinti viena.
```

## Pavyzdys su skaičiavimais

**Miesto finansuojama užimtumo paramos programa**, 500 dalyvių per metus, vietos valdžios užsakyta pagal RBA tipo veiklos sistemą:

```
Populiacijos rodiklis (kontekstas, o ne programos rezultatų kortelė):
  Miesto nedarbo lygis: 6,2 % (padidėjo nuo 5,8 % ankstesniais metais dėl gamyklos
  uždarymo, kurio programa nekontroliavo)

Veiklos rodikliai (tikroji programos atskaitomybė):
  Kiek:       užsiregistravo 500 dalyvių (tikslas 480) - pasiekta
  Kaip gerai: 78 % užbaigimo lygis; kaina vienam užbaigusiajam = 340 000 £ / 390 užbaigusiųjų ≈ 872 £
  Ar geriau:  iš 390 užbaigusiųjų 260 tvariai dirba po 6 mėnesių = 66,7 %
              palyginti su suderintos palyginamosios grupės 41 % (žr. kontrfaktinė analizė)
```

Skaitant pagal populiacijos atskaitomybę programa atrodo nesėkminga: miesto nedarbo lygis padidėjo jai veikiant. Skaitant pagal RBA veiklos atskaitomybę programa sėkminga: ji pasiekė apimties tikslą, išlaikė kokybę ir sukūrė užimtumo rezultatą 25,7 procentinio punkto aukštesnį nei suderintoje palyginamojoje grupėje, o populiacijos rodiklis pasikeitė dėl priežasčių (gamyklos uždarymo), visiškai nepriklausančių nuo programos.

## Ryšys su programine inžinerija

RBA tiesiogiai atitinka pažįstamą SRE skirtį: populiacijos rodikliai yra kaip verslo lygio Šiaurės žvaigždės metrikos, kurių nuo pradžios iki pabaigos nevaldo jokia atskira inžinerijos komanda (įmonės pajamos, rinkos dalis), o veiklos rodikliai yra kaip komandos pačios SLO, tai, ką tos komandos projektavimo sprendimai iš tikrųjų paveikia. Skydelis, pateikiantis abu nenurodęs, kuris yra koks, kviečia būtent tą klaidingą priskyrimą, kurio RBA siekia išvengti: budintis inžinierius kaltinamas dėl metrikos, kurią valdo priklausoma komanda. Užsakydami ar kurdami rezultatų sutarčių ataskaitų įrankius, „kiek / kaip gerai / ar geriau“ trejetą kurkite kaip pirmosios klasės, atskirai filtruojamus laukus, o ne vieną sumaišytą KPI; tai ta pati disciplina kaip pirmaujančių ir atsiliekančių rodiklių atskyrimas [viešojo sektoriaus KPI](../viešojo-sektoriaus-pagrindiniai-veiklos-rodikliai/). RBA taip pat yra atskaitomybės logika, esanti po [mokėjimu pagal rezultatus ir socialinio poveikio obligacijomis](../mokėjimas-pagal-rezultatus-ir-socialinio-poveikio-obligacijos/): PbR sutartis gali teisingai mokėti tik pagal „ar geriau“ veiklos rodiklį, o ne pagal populiacijos rodiklį, nebent intervencija iš tikrųjų yra dominuojanti jo veiksnys.

## Dažniausios klaidos

- **Programos apmokėjimas ar baudimas pagal populiacijos rodiklį, kurio ji nekontroliuoja**: tai vienintelė klaida, kurios išvengti RBA ir egzistuoja; prieš taikydami pasekmes visada išsiaiškinkite, ar programa yra didelis ar mažas populiacijos rezultato prisidėjėjas.
- **„Kiek“ pateikimas tarsi tai būtų „ar geriau“**: veiklos skaičiai (priimti klientai) yra lengviausiai renkami ir mažiausiai informatyvūs duomenys; reikalaukite, kad į klausimą „ar kam nors geriau“ būtų atsakyta tikrais rezultatų duomenimis, idealiu atveju lyginant su kontrfaktiniu scenarijumi (žr. [kontrfaktinė analizė](../kontrafaktinė-analizė/)).
- **RBA rodiklių laikymas amžinai nekintamais**: Friedmano metodas aiškiai iteracinis (ciklas „duomenys, istorija, kas veikia, veiksmų planas“), o ne vienkartinis rezultatų kortelės kūrimo pratimas.
- **Palyginamosios grupės nebuvimas „ar geriau“ vertinimui**: pokytis prieš / po be kontrfaktinio scenarijaus sumaišo programos poveikį su tendencija, kurią populiacija vis tiek būtų rodžiusi.

## Šaltiniai

- Mark Friedman, *Trying Hard Is Not Good Enough: How to Produce Measurable Improvements for
  Customers and Communities*, Trafford Publishing, 2005.
- Clear Impact, "What is Results-Based Accountability?"
  <https://clearimpact.com/results-based-accountability/>
