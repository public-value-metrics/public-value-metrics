# Kaštai vienam sandoriui

Kaštai vienam sandoriui – tai pagrindinis valdžios skaitmeninės paslaugos vieneto ekonomikos rodiklis: bendri kanalo teikimo kaštai, padalyti iš per jį užbaigtų sandorių skaičiaus. Tai buvo pagrindinis skaičius senojoje GOV.UK „Performance Platform“ ir skaičius, finansavęs dešimtmetį „pirmiausia skaitmeniniu būdu“ investicijų – būtent todėl tai ir rodiklis, kuriuo labiausiai linkstama manipuliuoti.

## Kodėl tai svarbu

Kabineto biuro (Cabinet Office) 2012 m. Skaitmeninio efektyvumo ataskaita pateikė kanalų kaštų palyginimą taip, kad jis įsiminė: nustatyta, kad skaitmeniniai sandoriai kainuoja maždaug 20 kartų mažiau nei telefonu ir maždaug 50 kartų mažiau nei tiesiogiai, su iliustraciniais vietos valdžios skaičiais – maždaug £0,15 už sandorį internetu, palyginti su £2,83 telefonu ir £8,62 tiesiogiai. Šis vienas palyginimas tapo pagrindimu 25 pavyzdinių paslaugų, nurodytų Vyriausybės skaitmeninėje strategijoje, perprojektavimui ir kiekvienam departamento verslo atvejui, cituojančiam kanalų perkėlimo sutaupymus nuo to laiko. Skaičius iš tikrųjų naudingas kaip eilės tvarkos signalas, tačiau santykis visiškai priklauso nuo to, kas skaičiuojama kiekvienoje pusėje: teisingi telefono kanalo kaštai apima skambučių centro darbuotojus, telefonijos sutartį, mokymą ir patalpas; teisingi skaitmeniniai kaštai apima prieglobą, nuolatinius produkto komandos atlyginimus, pagalbos tarnybos laiką nepavykusioms kelionėms ir padedamą skaitmeninį kanalą, kurio reikalauja [skaitmeninių paslaugų standarto](../skaitmeninių-paslaugų-standartas/) 5 punktas. Pašalinkite pakankamai šių dalykų iš skaitmeninės pusės, ir bet kuri paslauga atrodys pigi.

## Matematika

```
Kaštai vienam sandoriui = bendri priskirti kanalo kaštai / užbaigti sandoriai

Bendri priskirti kanalo kaštai turėtų apimti:
  + prieglobą ir infrastruktūrą
  + produkto / inžinerijos / pagalbos komandos kaštus (amortizuotus)
  + turinio ir paslaugų dizaino kaštus (amortizuotus)
  + padedamo skaitmeninio / prieinamumo palaikymo kaštus
  + gedimo poreikio kaštus (naudotojai, nepavykę skaitmeniniu būdu ir grįžtantys prie telefono)
  − vienkartiniai kūrimo kaštai amortizuojami per numatomą paslaugos gyvavimo laiką,
    o ne visi nurašomi pirmaisiais metais

Dažna apskaitos gudrybė:
  „Ribiniai kaštai vienam sandoriui“ (tik prieglobos, kai jau sukurta) pateikiami
  taip, tarsi būtų „vidutiniai kaštai vienam sandoriui“ (bendri kaštai, įskaitant
  komandą, kuri toliau kuria ir eksploatuoja). Abu gali skirtis 10 kartų ar daugiau
  paslaugai su didele, aktyvia teikimo komanda.
```

## Pavyzdys su skaičiavimais

**Transporto priemonės mokesčio atnaujinimo paslauga**: 4 milijonai sandorių per metus.

```
Tik ribinis skaičius (gudrybė):
  Tik prieglobos + mokėjimų apdorojimas = £180 000 per metus
  Kaštai vienam sandoriui = 180 000 / 4 000 000 = £0,045
  → pagrindinis skaičius, nurodomas verslo atvejyje

Pilnai įskaičiuotas skaičius (sąžiningas):
  Prieglobos + mokėjimai               £180 000
  Produkto / inžinerijos komanda (8 FTE) £720 000
  Pagalbos tarnyba (nepavykę / klausimai) £310 000
  Padedama skaitmeninė telefono linija £140 000
  Iš viso                              £1 350 000
  Kaštai vienam sandoriui = 1 350 000 / 4 000 000 = £0,3375

Pilnai įskaičiuotas skaičius vis dar maždaug 8 kartus pigesnis už £2,83
telefono kanalo palyginamąjį skaičių iš Skaitmeninio efektyvumo ataskaitos –
tikras ir pagrįstas sutaupymas – bet 7,5 karto didesnis už tik ribinį skaičių,
nurodomą sutrumpintoje versijoje. Abu skaičiai „teisingi“; tik vienas
palyginamas su telefono kanalo kaštais, su kuriais jis lyginamas.
```

## Ryšys su programine inžinerija

Kaštai vienam sandoriui yra vieta, kur architektūros sprendimai tampa finansų skaičiumi: paslauga, kuri sklandžiai automatiškai plečiasi ir reikalauja mažai rankinio įsikišimo, laikui bėgant mažina šį skaičių; ta, kuri sukuria didelį pagalbos užklausų kiekį dėl painių klaidų būsenų, jį didina nepriklausomai nuo prieglobos efektyvumo. Tai natūralus palydovinis rodiklis [skaitmeninių paslaugų standarto](../skaitmeninių-paslaugų-standartas/) 10 punktui („apibrėžkite, kaip atrodo sėkmė, ir skelbkite veiklos duomenis“) ir [paslaugų standartams ir sandorių rodikliams](../paslaugų-standartai-ir-sandorių-metrikos/), kuriame išdėstytas pilnesnis pagrindinių rodiklių rinkinys, kuriame šis skaičius yra. Jis taip pat tiesiogiai maitina [kanalų perkėlimo sutaupymų](../kanalų-perkėlimo-sutaupymai/) skaičiavimus ir turėtų būti suderintas su [bendrosiomis nuosavybės išlaidomis valdžios IT](../bendrieji-nuosavybės-kaštai-valdžios-it/), kad platformos ir bendrųjų paslaugų pridėtinės išlaidos nebūtų tyliai praleistos.

## Dažniausios klaidos

- **Ribiniai kaštai, apsirengę vidutiniais**: nurodomi tik prieglobos kaštai, kai paslauga jau sukurta, praleidžiant nuolatinę komandą, kuri ją prižiūri, iteruoja ir palaiko – žr. pavyzdį aukščiau.
- **Padedamo skaitmeninio kanalo kaštų neįtraukimas**: kanalas neatitinka „pirmiausia skaitmeniniu būdu“, o jo tikrieji kaštai neužfiksuoti, jei telefono / popieriaus atsarginis variantas, kurio reikalauja [skaitmeninė įtrauktis](../skaitmeninė-įtrauktis/), įkainojamas atskirai arba ignoruojamas.
- **Gedimo poreikio ignoravimas**: sandoriai, kurie prasideda skaitmeniniu būdu ir nepavyksta, vis tiek sukeldami telefono skambutį ar popierinę formą, yra skaitmeninio kanalo kaštai, o ne kanalo, kuris pagauna gedimą.
- **Skirtingo sudėtingumo sandorių lyginimas tarp kanalų**: telefonu neproporcingai tvarkomi sunkūs atvejai (keli išlaikytiniai, klaidų taisymas, pažeidžiami pareiškėjai); vidutinių telefono ir vidutinių skaitmeninių kaštų lyginimas pervertina santykį, nebent sandorių mišinys suderintas.

## Šaltiniai

- Cabinet Office, Digital Efficiency Report (2012). <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- GOV.UK Service Manual, service standard, point 10: define what success looks like. <https://www.gov.uk/service-manual/service-standard/point-10-define-success-publish-performance-data>
- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
