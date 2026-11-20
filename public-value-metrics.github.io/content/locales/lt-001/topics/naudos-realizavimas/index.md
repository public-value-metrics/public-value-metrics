# Naudos realizavimas

Naudos realizavimo valdymas – tai drausmė, kai nustatoma, apskaičiuojama bazinė vertė, stebima ir *įrodoma*, kad verslo atvejyje pažadėta nauda po paleidimo iš tikrųjų atsirado. JK viešosiose investicijose ji įtvirtinta HM Treasury „Green Book“ penkių atvejų modelyje (Five Case Model) ir Infrastruktūros ir projektų tarnybos (Infrastructure and Projects Authority) specialiose naudos valdymo gairėse; be jos teiginys „sistema sutaupė darbuotojams trisdešimt minučių vienai paraiškai“ visam laikui lieka nepatikrintu tvirtinimu.

## Kodėl tai svarbu

Verslo atvejai yra pažadai; naudos realizavimas yra auditas. „Green Book“ reikalauja, kad kiekvienas išlaidų atvejis išlaikytų penkis testus – strateginį, ekonominį, komercinį, finansinį ir valdymo – o valdymo atvejis turi nustatyti, kaip nauda bus realizuota *prieš patvirtinimą*: įvardyti savininkai, užfiksuotos bazinės vertės ir nustatytos matavimo datos. Infrastruktūros ir projektų tarnybos gairės *Benefits Management: A Guide to Realizing Benefits for Government Major Projects* (<https://www.gov.uk/government/publications/benefits-management-a-guide-to-realizing-benefits-for-government-major-projects>) atsirado todėl, kad pačios IPA Vyriausybės didžiųjų projektų portfelio ataskaitos ne kartą nurodė pristatymo patikimumą ir naudos realizavimą kaip pasikartojančias didžiųjų programų silpnybes. Projektas gali užsidaryti „laiku ir neviršijant biudžeto“ pagal savo pristatymo etapus, bet vis tiek neįgyvendinti naudos, kuri iš pradžių pateisino išlaidas – IPA gairės šį skirtumą laiko visos drausmės esme.

## Matematika

```
Realizavimo norma = realizuota nauda / prognozuota nauda   (kiekvienai naudai, kiekvienam laikotarpiui)

Mechanizmai, dėl kurių tai galima apskaičiuoti:
  bazinė vertė užfiksuota PRIEŠ paleidimą (kitaip skirtumo išmatuoti neįmanoma)
  kiekviena nauda: įvardytas savininkas, rodiklis, duomenų šaltinis, matavimo grafikas
  prognozė koreguojama dėl optimizmo šališkumo vertinimo metu (Green Book reikalavimas)
  nauda skirstoma į pinigus išlaisvinančią / pajėgumą išlaisvinančią / kokybinę,
  ir stebima bei pranešama atskirai
```

## Pavyzdys su skaičiavimais

**Vietos valdžia**: skaitmeninio planavimo paraiškų portalo verslo atvejis pažadėjo kasmet: £300 000 spausdinimo ir pašto išlaidų sumažinimą (pinigais), 4 500 pareigūnų valandų išlaisvinimą (pajėgumas) ir geresnį pareiškėjų pasitenkinimą (kokybinis). Praėjus dvylikai mėnesių po paleidimo:

```
Nauda              Prognozė   Realizuota   Norma   Įrodymai
Pinigų sutaupymas  £300 000   £210 000     70 %    finansų knyga ir bazinių metų palyginimas
Pareigūnų valandos 4 500      3 200        71 %    laiko ir judesių imtis
Pasitenkinimas     +8 p.p.    +11 p.p.     138 %   pareiškėjų apklausos duomenys

Peržiūros veiksmai (tai ir yra naudos realizavimo prasmė):
pinigų trūkumas siejamas su dviem paslaugų sritimis, kurios išimties tvarka
vis dar tvarko popierines paraiškas → uždaryti išimties kelią;
kito verslo atvejo optimizmo šališkumo korekcija padidinta nuo 10 % iki 25 %,
remiantis šio atvejo prognozavimo klaida.
```

70 % realizavimo norma nėra nesėkmė – tai žinios, leidžiančios kitą prognozę kalibruoti geriau. Neišmatuotas atvejis visada būtų teigęs 100 %, o finansų komanda neturėtų pagrindo to užginčyti.

## Ryšys su programine inžinerija

Inžinerinės organizacijos įprastai tvirtina platformų ir įrankių investicijas pagal prognozuojamą naudą ir beveik niekada jų vėliau neaudituoja – būtent tą patologiją ir skirtas ištaisyti naudos realizavimo valdymas. Lengvas jos perkėlimas: kiekvienas pasiūlymas, viršijantis reikšmingumo ribą, įvardija naudos savininką, bazinį rodiklį ir nustatytą peržiūros datą (paprastai praėjus šešiems mėnesiams po paleidimo), o ankstesnių pasiūlymų realizavimo normos turėtų mažinti organizacijos pasitikėjimą kitomis komandos ar tiekėjo prognozėmis. Taip ratas užsidaro su [„Green Book“ vertinimu](../green-book-vertinimas/), kuris nustato prognozę, kurią ši drausmė audituoja; tai ta pati logika, kuria grindžiamas plačiai skelbiamas radinys, kad didžioji dauguma generatyviojo DI pilotinių projektų nerodo išmatuojamos grąžos – žr. [DI produktyvumas viešajame sektoriuje](../di-produktyvumas-viešajame-sektoriuje/) – nes projektai, kurie *davė* vertę, buvo beveik be išimčių tie, kurie nuo pat pradžių turėjo įvardytą, stebimą naudos eilutę. Tai taip pat priklauso nuo to, ar skiriama, kas iš tikrųjų pristatyta, ir kas iš tikrųjų realizuota – žr. [rezultatai ir produktai](../rezultatai-ir-produktai/).

## Dažniausios klaidos

- **Nėra bazinės vertės prieš paleidimą**: lemtinga, nepataisoma klaida – be jos jokios realizavimo normos negalima apskaičiuoti, tik tvirtinti.
- **Našlaitė nauda**: nauda be įvardyto savininko neturi to, kas rinktų duomenis, ir kiekviena portfelio peržiūra pagal numatytąją tvarką pažymi ją kaip „iš esmės vykstančią pagal planą“.
- **Dvigubas naudos skaičiavimas programų portfelyje**: du projektai abu teigia, kad tas pats išlaisvintas darbuotojų pajėgumas yra jų nauda – laikykite vieną naudos registrą visam portfeliui, kad tai pastebėtumėte.
- **Realizavimo teatras**: lengvų kokybinių laimėjimų matavimas ir ryškus pranešimas apie juos, o pinigų ir pajėgumo eilutės tyliai lieka netikrinamos.
- **Pristatymo painiojimas su realizavimu**: projektas, uždarantis etapus „laiku ir neviršijant biudžeto“, nieko nesako apie tai, ar prognozuota nauda kada nors atsirado – IPA gairės šiuos du klausimus laiko atskirais, turinčiais atskiras įrodymų grandines.

## Šaltiniai

- HM Treasury, Green Book and Five Case Model guidance. <https://www.gov.uk/government/collections/the-green-book-and-accompanying-guidance-and-documents>
- Infrastructure and Projects Authority, *Benefits Management: A Guide to Realizing Benefits for Government Major Projects*. <https://www.gov.uk/government/publications/benefits-management-a-guide-to-realizing-benefits-for-government-major-projects>
- Infrastructure and Projects Authority, Annual Report on the Government Major Projects Portfolio. <https://www.gov.uk/government/collections/infrastructure-and-projects-authority-annual-report>
