# Vyriausybė kaip platforma (GaaP)

Vyriausybė kaip platforma (angl. Government as a Platform) yra strategija kurti bendrus, pakartotinai naudojamus komponentus (pranešimų paslaugą, mokėjimų paslaugą, tapatybės paslaugą) vieną kartą, centralizuotai, kad šimtai atskirų vyriausybės paslaugų jais naudotųsi, o ne kiekviena kurtų savo. Ji perrėmina viešąją skaitmeninę infrastruktūrą kaip platformos ekonomikos problemą: vertė slypi ne vienoje integracijoje, o tame, kad *kitos* ją pasirenkančios komandos ribiniai kaštai artėja prie nulio.

## Kodėl tai svarbu

GDS formaliai išdėstė strategiją 2015 m. leidinyje „Government as a Platform“, teigdama, kad vyriausybė tas pačias galimybes (mokėjimų priėmimą, naudotojų pranešimus, tapatybės patikrinimą, adresų paiešką) kūrė atskirai paslauga po paslaugos, o kiekviena nešė savo pirkimus, saugumo vertinimą ir nuolatinę palaikymo naštą. Alternatyva buvo nedidelis skaičius bendrų platformų, vieną kartą sukurtų aukštu standartu ir pakartotinai naudojamų visur: GOV.UK Notify el. laiškams, SMS žinutėms ir laiškams siųsti, GOV.UK Pay internetiniams mokėjimams priimti ir GOV.UK One Login (ankstesnės GOV.UK Verify tapatybės programos įpėdinis) tapatybei patikrinti. Šių platformų pasiektas mastas yra aiškiausias įrodymas, kad strategija veikė: per GOV.UK Pay apdorota daugiau nei 10 mlrd. £ transakcijų maždaug 1 800 atskirų paslaugų, ir nors pirmajam 1 mlrd. £ apdoroti prireikė maždaug ketverių metų, dabar tiek apdorojama maždaug per penkis mėnesius, o GOV.UK Notify išsiuntė daugiau nei 9 mlrd. žinučių daugiau nei 1 500 vyriausybės organizacijų vardu. Kiekviena iš tų paslaugų išvengė savo mokėjimo šliuzo ar pranešimų vamzdyno kūrimo, apsaugos ir priežiūros.

## Matematika

```
Build cost per service (no platform) = N services × cost to build,
  secure-assess, and run one payment/notification/identity system

Platform cost = fixed platform build cost
              + marginal cost per adopting service (integration,
                configuration, ongoing platform-team support)

Reuse breaks even once:
  platform build cost < N × (per-service build cost − marginal
  integration cost)

For a mature platform, marginal cost per additional adopter approaches
the transaction/message fee alone — the fixed cost is amortized across
the whole government estate, not one department's budget, which is
why GaaP components are usually funded centrally rather than charged
at full cost-recovery to early adopters.
```

## Pavyzdys su skaičiavimais

**Vietos valdžia, pasirenkanti GOV.UK Pay vietoj savo mokėjimo šliuzo kūrimo**:

```
Build-your-own estimate:
  PCI-DSS compliance work + integration + ongoing maintenance
  ≈ £85 000 build + £22 000/year maintenance

GOV.UK Pay adoption:
  Integration effort ≈ £12 000 (developer time)
  Transaction fees: government-to-citizen card payments typically
  charged at a small percentage + fixed fee per transaction, no
  separate PCI-DSS burden carried by the council
  ≈ £12 000 one-off, ongoing cost variable with volume, not fixed

First-year saving ≈ £85 000 − £12 000 = £73 000, before counting the
avoided £22 000/year maintenance and the avoided compliance risk of
holding card data in a council-run system at all — this second
category is the security value covered in
public-sector-cybersecurity-value.
```

Padauginus tuos 73 000 £ iš maždaug 1 800 paslaugų, dabar naudojančių GOV.UK Pay, bendri išvengti kūrimo kaštai visoje vyriausybėje siekia šimtus milijonų: strategijos vertė slypi platformos ekonomikoje, o ne vienoje integracijoje.

## Ryšys su programine inžinerija

Vyriausybė kaip platforma yra tiesioginis argumentas už [build-vs-buy-in-government](../kurti-ar-pirkti-valdžios-sektoriuje/): kai egzistuoja bendras, įvertintas, gerai valdomas komponentas, individualaus ekvivalento kūrimas labai retai yra geresnis [pinigų vertės](../vertė-už-pinigus/) pasirinkimas, ir tai beveik pagal apibrėžimą neatitinka [digital-service-standard](../skaitmeninių-paslaugų-standartas/) 13 punkto („naudokite atvirus standartus, bendrus komponentus ir šablonus ir prisidėkite prie jų“). Ji taip pat keičia [total-cost-of-ownership-in-government-it](../bendrieji-nuosavybės-kaštai-valdžios-it/) formą: platformos pasirinkimas didelę kapitalo ir priežiūros eilutę iškeičia į mažesnius, su naudojimu susietus veiklos kaštus, kuriuos lengviau prognozuoti ir lengviau nutraukti finansavimą, jei paslauga išjungiama. Atviras komponentų pakartotinis naudojimas turi giminaitį [open-data-value](../atvirųjų-duomenų-vertė/): abi yra strategijos tai, ką vyriausybė sukuria vieną kartą, traktuoti kaip bendrą infrastruktūrą, o ne departamento turtą.

## Dažniausios klaidos

- **Šešėlinis perkūrimas**: komandos tyliai kuria savo mokėjimo ar pranešimų integraciją, nes platformos įtraukimo procesas lėtesnis nei pačių padarymas, tai valdymo trinties, o ne technologijos problema, ir ji tyliai ardo pakartotinio naudojimo ekonomiką, nuo kurios priklauso visa strategija.
- **Platformos komandos nepakankamas finansavimas, palyginti su kuriama verte**: vertė kaupiasi naudojantiems departamentams, o kaštai lieka platformos komandai, sukurdami lėtinę nepakankamų investicijų riziką, nebent finansavimas centralizuotas ir apsaugotas; tai bendrųjų gėrybių tragedijos variantas.
- **Platformos sėkmės matavimas vien naudojimu**: pritaikymo skaičiai (prijungtos paslaugos, išsiųstos žinutės) yra pirmaujantis rodiklis, o ne vertės įrodymas; tikrasis testas yra aukščiau pateikta išvengtų kūrimo kaštų ir išvengtos rizikos aritmetika.
- **„Platformos“ laikymas „monolito“ sinonimu**: GaaP komponentai sėkmingi, nes kiekvienas daro vieną dalyką gerai su siaura, stabilia sąsaja; nesusijusių galimybių sujungimas į vieną „platformą“ atkuria individualaus kūrimo problemą kitu mastu.

## Šaltiniai

- Government Digital Service, Government as a Platform. <https://www.gov.uk/government/publications/government-as-a-platform>
- GOV.UK Notify. <https://www.notifications.service.gov.uk/>
- Government Digital Service blog, "GOV.UK Pay at 10: how it started and how it's going". <https://gds.blog.gov.uk/2026/09/02/gov-uk-pay-at-10-how-it-started-and-how-its-going/>
