# Skaitmeninių paslaugų standartas

GOV.UK paslaugų standartas (angl. Service Standard) yra vartai, kuriuos turi įveikti kiekviena centrinės valdžios skaitmeninė paslauga, kad galėtų pradėti veikti: 14 paskelbtų punktų, kuriuos po kiekvieno teikimo etapo vertina nepriklausoma komisija. Tai mechanizmas, paverčiantis „kurkime gerąsias viešąsias paslaugas“ iš šūkio sprendimu „išlaikyta / neišlaikyta“ su dokumentuotu pėdsaku, ir tiesioginis 2012 m. Vyriausybės skaitmeninės strategijos (angl. Government Digital Strategy) principo „skaitmeniniai pagal numatytuosius nustatymus“ (angl. digital by default) paveldėtojas.

## Kodėl tai svarbu

Kol nebuvo paslaugų standarto, vyriausybinių IT projektų nesėkmės dažniausiai paaiškėdavo tik paleidus paslaugą, ir retai jas buvo galima susieti su konkrečiu sprendimu. 2012 m. Vyriausybės skaitmeninė strategija įpareigojo departamentus pertvarkyti 25 didžiausios apimties visuomenei skirtas transakcines paslaugas pagal principą „skaitmeniniai pagal numatytuosius nustatymus“ ir šį įsipareigojimą pagrindė atitikties mechanizmu: paslauga negalėjo pradėti veikti GOV.UK, kol neįveikdavo paslaugos vertinimo pagal tuometį 26 punktų standartą (2019 m. sutrauktą iki 18, o dabar galiojantį 14 punktų standartą, apimantį tris grupes: vartotojų poreikių supratimą, geros paslaugos teikimą ir tinkamų technologijų naudojimą). Paslaugos vertinimas yra tikras įvykis: GDS (Government Digital Service) ar departamento vertintojų komisija peržiūri įrodymus, klausinėja komandą ir dėl kiekvieno punkto priima sprendimą „atitinka“, „neatitinka“ arba „iš dalies atitinka“, kuris skelbiamas paslaugos vertinimo puslapyje. Nepavykęs vertinimas sustabdo paslaugos perėjimą iš uždarosios beta versijos į viešąją beta versiją arba iš beta versijos į galutinę, tad tai tikri vartai, o ne formali apžvalga.

## Matematika

Paslaugų standartas yra sistema, o ne formulė, tačiau jis veikia kaip etapais grįsta sprendimų struktūra:

```
Discovery  → Alpha assessment  → Beta assessment  → Live assessment
             (not mandatory     (mandatory before   (mandatory before
              for all services,  public beta launch) removing "beta" tag
              but recommended)                       and closing old channel)

Each assessment: evidence + team interview → panel verdict per point
  Met / Partially met / Not met
Overall outcome: Pass / Pass with conditions / Fail (re-assessment required)

Cost of a fail ≈ cost of the next sprint cycle to remediate
              + delay to the [channel-shift-savings](../kanalų-perkėlimo-sutaupymai/)
                the service was funded to deliver
```

10 punktas („apibrėžkite, kaip atrodo sėkmė, ir skelbkite veiklos duomenis“) maitina [cost-per-transaction](../kaštai-vienam-sandoriui/) ir [service-standards-and-transaction-metrics](../paslaugų-standartai-ir-sandorių-metrikos/) rodiklius: standartas įpareigoja matuoti, o ne tik teikti paslaugą.

## Pavyzdys su skaičiavimais

**Vietos valdžios būsto prašymų paslauga**: savivaldybės komanda atvyksta į beta vertinimą su paslauga, kuri atitinka 11 iš 14 punktų, bet neatitinka 5 punkto („užtikrinkite, kad paslauga galėtų naudotis visi“), nes nėra pagalbinio skaitmeninio kelio pareiškėjams be interneto prieigos, ir neatitinka 9 punkto, nes asmens duomenys įrašomi atviru tekstu į programos klaidų žurnalus.

```
Direct cost of the fail:
  Re-assessment slot: 6–8 week wait for the next available panel
  Remediation sprint: 2 developers × 3 weeks × £550/day ≈ £34 650
  Assisted-digital channel design: 1 researcher × 2 weeks ≈ £5 000

Delay cost: service was forecast to shift 40% of 18 000/year housing
enquiries from £8,50 phone calls to £0,20 digital transactions
  = 7 200 × (£8,50 − £0,20) = £59 760/year foregone, pro-rated for the
    ~2-month delay ≈ £9 960

Total cost of the failed assessment ≈ £49 610
```

Aritmetikos esmė ne tikslumas, o tai, kad nepavykęs vertinimas turi realią, apskaičiuojamą kainą, todėl šie vartai ir yra veiksmingi.

## Ryšys su programine inžinerija

Inžinieriams standartas atrodo ne mažiau kaip architektūros ir teikimo kontrolinis sąrašas nei politikos dokumentas: 11 punktas („pasirinkite tinkamas priemones ir technologijas“) ir 12 punktas („padarykite naują šaltinio kodą atvirą“) yra tiesioginiai inžineriniai sprendimai, o 14 punktas („teikite patikimą paslaugą“) reikalauja tų pačių SLO ir incidentų valdymo procesų, kokių reikia bet kuriai produkcinei sistemai. Tai bendra sistema šiai temų grupei: [cost-per-transaction](../kaštai-vienam-sandoriui/) ir [channel-shift-savings](../kanalų-perkėlimo-sutaupymai/) yra tai, ką standartas siekia finansiškai apsaugoti, [digital-inclusion](../skaitmeninė-įtrauktis/) yra tai, ką turi garantuoti 5 punktas, o [government-as-a-platform](../vyriausybė-kaip-platforma/) komponentai (GOV.UK Notify, Pay, One Login) daugiausia pagal numatymą tenkina 13 punktą („naudokite atvirus standartus, bendrus komponentus ir šablonus ir prisidėkite prie jų“). Kaip „tinkamų priemonių“ punktas veikia viešųjų pirkimų sprendimuose, taip pat žr. [build-vs-buy-in-government](../kurti-ar-pirkti-valdžios-sektoriuje/).

## Dažniausios klaidos

- **Vertinimo laikymas paleidimo dienos atitikties varnele**: komandos, kurios 14 punktų pirmą kartą perskaito likus savaitei iki beta vertinimo, nuspėjamai neišlaiko; standartas turi formuoti sprendimus nuo pat discovery etapo, o ne juos auditoruoti atgaline data.
- **Vertinamas prototipas, o ne paslauga**: puiki demonstracija gali išlaikyti peržiūrą, kurios neišlaikytų tikroji, pagalbinį skaitmeninį kelią turinti ir incidentais valdoma paslaugos versija; vertintojai turi ieškoti šio atotrūkio, tačiau savarankiškai sertifikuojamos smulkios paslaugos jį dažnai praleidžia.
- **Nėra pakartotinio vertinimo prieš didinant mastą**: paslauga, įvertinta įdiegus 5 % apimtimi, automatiškai neišlieka atitinkama ir esant 100 %: keičiasi apkrova, klaidos sukeliama paklausa (angl. failure demand) ir kraštutinių atvejų naudotojai.
- **Paslaugų standarto painiojimas su dizaino sistema**: GOV.UK dizaino sistemos komponentai tenkina kai kuriuos punktus (nuoseklumą, prieinamumą), bet standartas apima ir komandos struktūrą, agile praktiką ir duomenų etiką: gražiai apipavidalinta paslauga vis tiek gali neišlaikyti 2, 6 ar 9 punkto.

## Šaltiniai

- GOV.UK Service Manual, Service Standard. <https://www.gov.uk/service-manual/service-standard>
- GOV.UK Service Manual, point 14: operate a reliable service. <https://www.gov.uk/service-manual/service-standard/point-14-operate-a-reliable-service>
- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
- GOV.UK Service Manual, service assessments. <https://www.gov.uk/service-manual/service-assessments>
