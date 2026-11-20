# Srauto metrikos vyriausybės teikime

Srauto metrikos (Little dėsnis, nebaigto darbo (angl. work-in-progress, WIP) ribos ir srauto efektyvumas) apibūdina, kaip greitai darbas juda sistema su ribota talpa. Sprinto lenta yra viena tokia sistema; išmokų prašymų eilė, planavimo prašymų registras ar vizų bylų atsilikimas yra lygiai ta pati matematika kita uniforma.

## Kodėl tai svarbu

Vyriausybės bylų srautai yra eilių sistemos, o eilių sistemos paklūsta eilių dėsniams, nesvarbu, ar kas nors jas matuoja. Įstatymu numatyti sprendimų priėmimo terminai tai daro aiškiu: pagal Town and Country Planning režimą dauguma smulkių planavimo prašymų turi 8 savaičių įstatymu numatytą sprendimo tikslą, o dideli prašymai 13 savaičių: ciklo trukmės įsipareigojimą, tiesiogiai įrašytą į įstatymą. Home Office prieglobsčio bylų atsilikimas, ne kartą tirtas National Audit Office ir Home Affairs Select Committee, yra gerai dokumentuotas viešosios sistemos atvejis, kai nebaigtas darbas augo greičiau nei pralaidumas ilgą laiką, ciklo trukmę išplėtęs gerokai už bet kokių įstatymu numatytų ar paslaugos lūkesčių ribų. Srauto metrikos suteikia ir inžinieriams, ir bylų vadovams bendrą kiekybinį žodyną būtent šiam nesėkmės būdui, užuot paliekusios jį kokybiška „atsilikimo problema“.

## Matematika

```
Little's Law:  WIP = Throughput × Cycle Time
           →   Cycle Time = WIP / Throughput

Flow efficiency = active (touch) time / total cycle time   (Vacanti)

WIP limit effect: for fixed throughput, halving WIP roughly halves
average cycle time (Little's Law rearranged) — the lever available
without adding headcount.
```

Tą pačią matematiką, pritaikytą programinės įrangos diegimo vamzdynams, o ne bylų darbui, žr. [DORA metrikos viešajai vertei](../dora-metrikos-viešajai-vertei/).

## Pavyzdys su skaičiavimais

**Vietos valdžios planavimo departamentas**: bet kuriuo metu atvirų 400 prašymų (WIP), komanda išsprendžia 50 prašymų per savaitę (pralaidumas).

```
Cycle time = WIP / Throughput = 400 / 50 = 8 weeks
```

Tai patenka tiksliai į įstatymu numatytą 8 savaičių tikslą smulkiems prašymams, be jokio rezervo, t. y. bet koks gaunamos paklausos ar konsultuojamų subjektų atsakymo laiko kintamumas perkelia sprendimus už teisinio termino ribos.

**Srauto efektyvumas**: iš tų 8 savaičių (56 kalendorinių dienų) prašymas paprastai turi apie 6 valandas faktinio bylos darbuotojo apdorojimo laiko.

```
Flow efficiency = 6 hours / (56 days × 8 working hours/day)
                = 6 / 448 ≈ 1,3%
```

Vacanti etalonas programinės įrangos komandoms nurodo tipinį srauto efektyvumą 15–20 %; vyriausybės bylų darbas, su daugeliu įstatymu numatytų konsultuojamų subjektų perdavimų ir viešųjų konsultacijų langų, dažnai yra dydžio eile žemesnis. 98,7 % „laukimo“ laiko yra ten, kur iš tikrųjų išeina aštuonios savaitės, o ne bylų darbuotojų pajėgumuose.

**WIP ribos intervencija**: apribojus atvirus prašymus vienam bylų darbuotojui iki 15 vietoje neribotų 25 (pralaidumą laikant pastoviu), WIP 16 žmonių komandoje sumažėja nuo 400 iki maždaug 240:

```
New cycle time = 240 / 50 = 4,8 weeks
```

Beveik perpus sutrumpėjusi ciklo trukmė dėl politikos pakeitimo, o ne darbuotojų didinimo, ta pati svirtis, kurią traukia DORA tipo teikimo komandos, ribodamos sprinto WIP.

## Ryšys su programine inžinerija

Srauto metrikos yra bendra kalba tarp teikimo komandos Kanban lentos ir bylų darbo aplinkos, kuriai ji kuria programinę įrangą: bylų darbuotojo eilė ir pull request eilė abi paklūsta Little dėsniui ir abi viršija savo ciklo trukmės tikslus tuo pačiu būdu: per daug WIP, palyginti su pralaidumu. Tai tiesiogiai svarbu [delsimo kaštams viešosiose programose](../delsimo-kaina-viešosiose-programose/): ciklo trukmė × CoD yra svarai, bet kuriuo momentu laukiantys eilėje, ir [paslaugų standartams bei transakcijų metrikoms](../paslaugų-standartai-ir-sandorių-metrikos/), kur paskelbtas vykdymo termino tikslas yra ciklo trukmės įsipareigojimas, kurį praleidus diagnozuoti gali tik srauto metrikos. Bylų darbo sistemos programinė įranga turėtų pateikti WIP ir ciklo trukmę kaip pirmos klasės veiklos metrikas, o ne paslėpti jas bylų valdymo sistemoje, kurios niekas neklausinėja.

## Dažniausios klaidos

- **WIP ribų įvedimas netaisant tikrosios kliūties**: jei apribojimas yra išorinio įstatymu numatyto konsultuojamo subjekto atsakymo laikas, bylų darbuotojų WIP ribojimas tik perkelia eilę aukščiau pagal srautą, o ne ją sutrumpina.
- **Srauto efektyvumo laikymas tikslu, kurį galima apeiti**: skubinant 1,3 % aktyvaus laiko ciklo trukmė vos pasikeičia; svertas beveik visada yra laukimo būsenose, o tai paprastai reiškia proceso pertvarkymą, o ne bylų darbuotojų greitį.
- **Kintamumo ignoravimas**: Little dėsnis aprašo vidurkius; bylų srautui su dideliu paklausos dispersija reikia atsarginės talpos, o ne tik griežtesnės WIP ribos, antraip įstatymu numatyti terminai vis tiek bus praleidžiami nepastoviame uodegos segmente, nors vidurkis gerėja.
- **Nenuoseklus WIP matavimas**: byla, kuri įrašų sistemoje „atvira“, bet iš tikrųjų sustojusi laukiant trečiosios šalies, vis tiek yra WIP; jos neįtraukimas pagraižo skaičius nepakeisdamas piliečiui matomos tikrovės.

## Šaltiniai

- Vacanti D, *Actionable Agile Metrics for Predictability: An Introduction*, Actionable Agile Press, 2015.
- Reinertsen DG, *The Principles of Product Development Flow*, Celeritas Publishing, 2009.
- Ministry of Housing, Communities and Local Government, planning application statutory timescales. <https://www.gov.uk/guidance/making-an-application>
- National Audit Office, reports on Home Office asylum casework and accommodation. <https://www.nao.org.uk/>
