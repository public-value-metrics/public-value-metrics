# Rezultatai ir produktai

Produktas (output) yra tiesioginis, suskaičiuojamas veiklos rezultatas: jis atsiranda tą akimirką, kai vyksta paslaugos teikimas, nepaisant to, kokį poveikį turi. Rezultatas (outcome) yra pokytis, kuris vėliau atsiranda dalyvaujantiems žmonėms, vietovei ar sistemai. „500 žmonių dalyvavo darbo paieškos seminare“ yra produktas: tai tiesa, net jei nė vienas iš jų nerado darbo. „500 žmonių įsidarbinimo galimybės pagerėjo“ yra rezultato teiginys, ir jam reikia pokyčio, o ne vien dalyvavimo įrodymų; šis painiojimas sukuria daugiau klaidinančių dotacijų ataskaitų nei beveik bet kuri kita sektoriaus matavimo klaida.

## Kodėl tai svarbu

HM Treasury Magenta Book ir finansuotojai, tokie kaip National Lottery Community Fund, reikalauja rezultatų ataskaitų būtent todėl, kad produktai yra tai, ką programos pateikia pagal numatytąją tvarką: juos pigu skaičiuoti, jie visada prieinami ir visada atrodo teigiamai. Produktų skaičius tiesiogine prasme niekada negali sumažėti dėl programos nesėkmės: daugiau surengtų užsiėmimų visada yra „daugiau“, o rezultatas gali atskleisti, kad programa neveikia. National Audit Office ne kartą kritikavo vyriausybės programas, kad jos pateikia veiklos lygį tarsi tai būtų sėkmės įrodymas; programinė įranga, kuri palengvina tik produktų pateikimą, tai pagal numatytąją tvarką sustiprina, nes produktams nereikia tolesnio duomenų rinkimo, o rezultatams reikia.

## Matematika

Formulės nėra, bet yra patikimas testas metrikai klasifikuoti:

```
Produkto testas:  ar jį galima suskaičiuoti paslaugos teikimo vietoje, ar tai tiesa, net jei gavėjui poveikio nėra?
Rezultato testas: ar, kad jis turėtų prasmę, reikia palyginimo prieš / po arba su / be?

Jei skaičius gali būti teisingas ir kam nors nesuteikiant jokios naudos, tai yra produktas.
```

Tai yra platesnės [loginio modelio](../loginis-modelis/) grandinės dalis ir priklauso nuo [pokyčių teorijoje](../pokyčio-teorija/) apibrėžtų rezultatų ryšių; rezultato pavertimui pinigais naudojami metodai aprašyti skyriuje [socialinė investicijų grąža](../socialinė-investicijų-grąža/).

## Pavyzdys su skaičiavimais

**Savivaldybė (užimtumo parama)**: produktas, 500 žmonių dalyvavo darbo paieškos seminaruose. Rezultatas, po 12 mėnesių tolesnės apklausos 140 iš tų 500 (28 %) tvariai dirba (6+ mėnesių). Palyginamoji grupė su panašiomis charakteristikomis, bet be galimybės dalyvauti programoje, per tą patį laikotarpį turi 15 % pradinį užimtumo lygį. Grynasis rezultato pagerėjimas: 28 % − 15 % = 13 procentinių punktų, taigi apskaičiuota, kad 500 × 0,13 = 65 papildomi žmonės dirba, nors kitaip nedirbtų. Tai priskirtinas rezultatas, skiriasi ir nuo 500 dalyvavimo skaičiaus, ir nuo 140 neapdoroto įsidarbinimo skaičiaus.

**Labdaros organizacija (raštingumo labdara)**: produktas, 1 200 skaitymo užsiėmimų, surengtų 300 vaikų. Rezultatas, vidutinis skaitymo amžius pagerėjo 8 mėnesiais per 6 mėnesių laikotarpį, o tikėtina natūrali 6 mėnesių pažanga yra 6 mėnesiai. Grynasis rezultato pokytis: 8 − 6 = 2 mėnesių papildomas skaitymo amžiaus pagerėjimas vienam vaikui, priskirtinas programai, o ne visi 8 mėnesiai.

## Ryšys su programine inžinerija

Įvykių žurnalai ir transakcinės sistemos produktus instrumentuoja beveik automatiškai (puslapių peržiūros, sesijos, uždarytos užklausos, užregistruoti susitikimai), nes juos generuoja sistema, atlikdama savo darbą. Rezultatams reikia duomenų modelio, kuris to paties asmens duomenis užfiksuoja vėlesniu laiko momentu, palyginti su pradine padėtimi ar palyginamąja grupe, ir tai reikia suprojektuoti sąmoningai: tolesnės apklausos, susieti administraciniai įrašai ar palyginamoji kohorta. Ataskaitų įrankis, palaikantis tik pirmąjį, tyliai stumia organizaciją link ataskaitų vien apie produktus, nesvarbu, ko prašė finansuotojas. Kur rezultatai yra atskaitomybės grandinėje, žr. [loginis modelis](../loginis-modelis/), kaip šį skirtumą paversti vienetinių sąnaudų metrika, žr. [kaina už rezultatą](../kaštai-vienam-rezultatui/), o apie platesnį metrikų parinkimo šabloną žr. [viešojo sektoriaus KPI](../viešojo-sektoriaus-pagrindiniai-veiklos-rodikliai/).

## Dažniausios klaidos

- **Produktų pateikimas kaip rezultatų.** „Dalyvavo 500 žmonių“ numano naudą jos neįrodydamas; dalyvavimą aiškiai pažymėkite kaip produktą.
- **Nėra pradinės padėties ar palyginamosios grupės.** Rezultato skaičius be kontrfaktinio scenarijaus (žr. [kontrfaktinė analizė](../kontrafaktinė-analizė/)) negali atskirti programos poveikio nuo to, kas vis tiek būtų įvykę.
- **Optimizavimas finansuojamai metrikai.** Kai finansavimas siejamas su produktų apimtimi, teikėjų komandos racionaliai maksimizuoja dalyvavimą, o ne ilgalaikį pokytį; tai Goodharto dėsnio nesėkmės forma.
- **Rezultatų plovimas (outcome washing).** Produkto metrikos pervadinimas rezultatų skambesio kalba („įsitraukimo rezultatai: 500 dalyvių“) be jokio tolesnio matavimo.

## Šaltiniai

- HM Treasury, Magenta Book (2020). <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, outcomes reporting guidance. <https://www.tnlcommunityfund.org.uk/>
- National Audit Office, value-for-money report methodology. <https://www.nao.org.uk/>
