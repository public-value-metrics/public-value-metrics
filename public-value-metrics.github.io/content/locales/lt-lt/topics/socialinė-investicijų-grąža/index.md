# Socialinė investicijų grąža (SROI)

Socialinė investicijų grąža – tai sistema, skirta matuoti, išreikšti pinigais ir apskaitoje atspindėti plačiai suprantamą vertę – socialinę, aplinkos ir ekonominę – ir išreikšti ją santykiu su investuotais ištekliais, pavyzdžiui, „£1,44 socialinės vertės už kiekvieną investuotą £1“. Ji sukurta finansinės apskaitos logikai išplėsti rezultatams, kurių rinkos neįkainoja, neprarandant apskaitos disciplinos: kiekvienas SROI skaičius turi būti atsekamas iki suinteresuotųjų šalių apibrėžto rezultato, įrodymų bazės ir aiškios korekcijos dėl to, kas būtų įvykę bet kuriuo atveju.

## Kodėl tai svarbu

SROI prižiūri Social Value UK ir Social Value International – SROI Network įpėdinės organizacijos; jų „A Guide to Social Return on Investment“ (2012) tebėra pagrindinė metodika. Sistema remiasi septyniais principais – įtraukti suinteresuotąsias šalis, suprasti, kas keičiasi, įvertinti tai, kas svarbu, įtraukti tik esminius dalykus, nepervertinti, būti skaidriems ir patikrinti rezultatą – ir būtent penktas principas, „nepervertinti“, yra tas, kurio dauguma realiai paskelbtų SROI ataskaitų nesilaiko. Santykis, gautas praleidus tuščiojo poveikio ir priskyrimo korekcijas, nėra SROI; tai rinkodaros skaičius, apsivilkęs SROI drabužiais. Programinės įrangos inžinieriai, kuriantys ataskaitų įrankius labdaros organizacijoms, socialinėms įmonėms ar užsakovams, turi žinoti skirtumą, nes įrankis arba užtikrins discipliną, arba leis ją lengvai apeiti.

## Matematika

SROI remiasi [pokyčio teorija](../pokyčio-teorija/), kad nustatytų, kurie rezultatai patenka į apimtį, ir juos išreiškia ta pačia atskaitomybės grandine kaip [loginis modelis](../loginis-modelis/):

```
SROI santykis = Rezultatų dabartinė vertė / Įvesčių vertė

Procesas:
 1. Nustatyti apimtį ir suinteresuotąsias šalis, kurių rezultatai bus matuojami
 2. Susieti rezultatus (pokyčio teorija, pagrįsta įrodymais su suinteresuotosiomis šalimis, o ne prielaida)
 3. Pagrįsti rezultatus įrodymais ir suteikti jiems vertę naudojant finansinius pakaitalus
 4. Nustatyti poveikį: bendroji vertė − tuščiasis poveikis − priskyrimas − išstūmimas, tada taikyti nykimą
 5. Apskaičiuoti SROI: poveikio grynoji dabartinė vertė ÷ įvesčių vertė
 6. Pateikti, naudoti ir įtvirtinti – santykis yra komunikacijos priemonė, o ne galutinis tikslas
```

Tuščiasis poveikis, priskyrimas ir išstūmimas aptariami [papildomumo ir tuščiojo poveikio](../papildomumas-ir-tuščiasis-poveikis/) bei [išstūmimo ir priskyrimo](../išstūmimas-ir-priskyrimas/) temose; visi trys egzistuoja tam, kad iš bendrojo rezultato būtų išskirtas tikrasis [kontrafaktinis](../kontrafaktinė-analizė/) poveikis.

## Pavyzdys su skaičiavimais

**Vietos valdžios užimtumo programa**: metiniai įvesties kaštai £250 000. Šešiasdešimt dalyvių pradeda pastovų darbą; to rezultato finansinis pakaitalas (gerovės padidėjimo, sumažėjusios priklausomybės nuo išmokų ir mokesčių pajamų derinys) pirmaisiais metais yra £8 500 vienam asmeniui – kur atsiranda tokie pakaitalai, žr. [vieneto kaštų duomenų bazės](../vieneto-kaštų-duomenų-bazės/).

- Bendroji rezultato vertė: 60 × £8 500 = £510 000
- Atėmus tuščiąjį poveikį (40 % tikriausiai būtų susiradę darbą ir be programos): £510 000 × 0,60 = £306 000
- Atėmus priskyrimą (30 % likusio pokyčio lemia kitų institucijų parama): £306 000 × 0,70 = £214 200
- Antrųjų metų rezultatas esant 30 % nykimui: £214 200 × 0,70 = £149 940, diskontuotas 3,5 % per metus (žr. [socialinė diskonto norma](../socialinė-diskonto-norma/)): £149 940 ÷ 1,035 = £144 870
- Visa poveikio dabartinė vertė: £214 200 + £144 870 = £359 070
- **SROI santykis: £359 070 ÷ £250 000 = 1,44**, pateikiamas kaip „£1,44 socialinės vertės už kiekvieną investuotą £1“

**Labdara**: £60 000 kainuojanti draugystės paslauga sumažina vienatvę 80 vyresnio amžiaus žmonių, vertinamų pakaitalu £1 100 vienam asmeniui per metus. Bendroji vertė £88 000; atėmus 35 % tuščiojo poveikio ir 15 % priskyrimo, grynasis poveikis yra £88 000 × 0,65 × 0,85 = £48 620, o SROI santykis – 0,81, t. y. žemiau lūžio taško; tai teisėta ir naudinga išvada, o ne nesėkmė, kurios nereikėtų aprašyti.

## Ryšys su programine inžinerija

SROI skaičiuoklė, leidžianti vartotojui įvesti rezultatų skaičius ir pakaitalų vertes, bet neturinti privalomo tuščiojo poveikio, priskyrimo ar susietos pokyčio teorijos lauko, pagal numatytąsias nuostatas pateiks išpūstus santykius, nes korekcijų praleidimas yra mažiausio pasipriešinimo kelias. Įrašykite discipliną į schemą: kiekviena rezultato eilutė turėtų nurodyti suinteresuotųjų šalių grupę, įrodymais pagrįstą kiekį, finansinį pakaitalą su jo šaltiniu ir privalomus tuščiojo poveikio / priskyrimo laukus. Žr. [rezultatai ir produktai](../rezultatai-ir-produktai/) – skirtumą, nuo kurio priklauso SROI rezultatų susiejimas, ir [loginis modelis](../loginis-modelis/) – grandinę, kurią įrankis turėtų atkartoti savo duomenų modelyje.

## Dažniausios klaidos

- **Tuščiojo poveikio ir priskyrimo praleidimas.** Pagrindinis santykis be šių korekcijų yra bendrasis, o ne grynojo poveikio dydis, o Social Value UK principai aiškiai reikalauja abiejų.
- **Santykių palyginimas tarp organizacijų.** SROI santykis priklauso nuo apimties ir pakaitalų pasirinkimų, daromų kiekvienu atveju atskirai; laikyti vienos ataskaitos 4:1 santykį „geresniu“ už kitos 2:1 reiškia ignoruoti tai, kad prielaidos nėra standartizuotos kaip finansinės apskaitos santykiai.
- **Persidengiančių pakaitalų dvigubas skaičiavimas.** „Sumažėjusios vienatvės“ pakaitalo sudėjimas su „pagerėjusios psichinės gerovės“ pakaitalu tiems patiems naudos gavėjams gali dukart įvertinti tą patį pokytį.
- **Suinteresuotųjų šalių įtraukimo praleidimas.** Pirmasis principas reikalauja, kad rezultatai būtų apibrėžiami kartu su juos patiriančiais žmonėmis, o ne modelį kuriančio analitiko prielaida.

## Šaltiniai

- Social Value UK / Social Value International. <https://socialvalueuk.org/>
- The SROI Network, "A Guide to Social Return on Investment" (2012).
- Social Value International, "The Principles of Social Value." <https://www.socialvalueint.org/principles>
