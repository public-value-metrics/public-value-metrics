# Kurti ar pirkti valdžios sektoriuje

„Kurti ar pirkti“ (angl. build vs buy) – tai struktūrizuotas, riziką įskaitantis individualaus kūrimo ir komercinio ar standartinio įsigijimo palyginimas pagal diskontuotas [bendrąsias nuosavybės išlaidas](../bendrieji-nuosavybės-kaštai-valdžios-it/), laiką iki vertės ir riziką. Valdžios sektorius struktūriškai yra pirkėjas – Technologijų praktikos kodeksas (Technology Code of Practice) nustato prielaidą, kad teikiami pirmenybę standartiniams ir debesijos sprendimams, – tačiau departamentų viduje dirbančios inžinierių komandos vis tiek pagal nutylėjimą linkusios kurti, dėl tų pačių priežasčių kaip ir kūrėjai visur kitur.

## Kodėl tai svarbu

Vyriausybės skaitmeninės tarnybos (Government Digital Service) Technologijų praktikos kodeksas (<https://www.gov.uk/guidance/the-technology-code-of-practice>) ir su juo susijusios Service Manual gairės dėl sprendimo kurti ar pirkti skatina departamentus pagrįsti individualų kūrimą, remiantis prielaida, kad standartinė galimybė turi būti perkama, o ne kuriama, ir kad tik tikrai naują, misiją išskiriančią galimybę verta kurti individualiu kodu. HM Treasury optimizmo šališkumo papildomos „Green Book“ gairės, paremtos 2002 m. Mott MacDonald didelių viešųjų pirkimų apžvalga, IT projektams nustato plačiausią pakėlimo intervalą iš visų vertintų kategorijų – kapitalo kaštų įverčius prieš naudojant vertinime rekomenduojama padidinti nuo 10 % apatinėje ribos iki 200 % viršutinėje, atspindint, kaip smarkiai programinės įrangos kūrimas istoriškai buvo nuvertintas viešuosiuose pirkimuose. „Kurti ar pirkti“ analizė egzistuoja būtent tam, kad šią rizikos korekciją išvestų į paviršių prieš patvirtinimą, o ne leistų jai išplaukti kaip metų eigoje prašomam viršijimui.

## Matematika

```
Lyginama per tą patį 3–5 metų horizontą, diskontuojant „Green Book“
socialine diskonto norma (žr. social-discount-rate.md):

NPV_variantas = PV(nauda, pastumta laiko iki vertės) − PV(TCO)

Rizikos korekcijos („Green Book“ optimizmo šališkumo modelis):
  kūrimo kaina × 1,1–3,0        (IT projektų pakėlimo intervalas, Mott MacDonald)
  kūrimo laikas iki vertės + 40–60 % (ankstesnis diegimo vėlavimo pasiskirstymas)
  pirkimas: vietoj to pridedama integracijos realybės patikra ir sutarties nutraukimo kaštai

Sprendimo veiksniai, jų lemiamumo eilės tvarka:
  1. diferencijavimas – ar ši galimybė yra misija, ar vamzdynas?
  2. laikas iki vertės × delsimo kaina (žr. cost-of-delay-in-public-programmes.md)
  3. riziką įskaitančios bendrosios nuosavybės išlaidos
```

## Pavyzdys su skaičiavimais

Vietos valdžiai reikia suaugusiųjų socialinės globos bylų valdymo sistemos. Pirkti: SaaS už £180 000 per metus, veikia po 4 mėnesių. Kurti: įvertinta £900 000 plius £150 000 per metus priežiūrai, veikia po 14 mėnesių.

```
Riziką įskaičiavusi kūrimo kaina = 900 000 × 1,4 = £1 260 000
5 metų TCO:
  pirkimas = 180 000 × 5 = £900 000
  kūrimas  = 1 260 000 + 150 000 × 5 = £2 010 000

Delsimo dėmuo: sistema leidžia išvengti £40 000 per mėnesį dubliuotų vertinimų;
kūrimas atkeliauja 10 mėnesių vėliau nei pirkimas.
CoD = 10 × 40 000 = £400 000

Efektyvus palyginimas: £900 000 (pirkimas) prieš £2 010 000 + £400 000 = £2 410 000 (kūrimas)
```

Pirkimas laimi maždaug 1,5 mln. svarų per penkerius metus, o didžiausia atskira eilutė po paties kūrimo įverčio yra delsimo kaina, kurios grynas kapitalo išlaidų palyginimas niekada nebūtų parodęs.

## Ryšys su programine inžinerija

Drausmės, kurios iš šios analizės tiesiogiai perkeliamos į diegimo praktiką: **ankstesniais pasiskirstymais grįsta rizikos korekcija** – Mott MacDonald pakėlimas yra programinės įrangos atitikmuo mechaniškai taikomam „Green Book“ optimizmo šališkumui, todėl komandos turėtų ginti išimtis, o ne manyti, kad jų įvertis yra išimtis; **sąžiningas palyginimas** – alternatyva kūrimui yra geriausias prieinamas pirkimo variantas, o ne „nieko“, tai tiesiogiai susiję su [alternatyviaisiais kaštais viešosiose išlaidose](../alternatyvioji-kaina-viešosiose-išlaidose/); ir **sąžiningas TCO palyginimas** – kiekvienas kūrimo pasiūlymas turi būti lyginamas su pilnomis pirkimo varianto [bendrosiomis nuosavybės išlaidomis](../bendrieji-nuosavybės-kaštai-valdžios-it/), o ne jo kainoraščio kaina. Kur kūrimas iš tikrųjų laimi, papildomo kūrimo laiko [delsimo kaina](../delsimo-kaina-viešosiose-programose/) turėtų būti aiškiai įkainota verslo atvejyje, o ne palikta kaip neišsakyta prielaida, kad laikas nesvarbus.

## Dažniausios klaidos

- **Tiekėjo kainoraščio kainos lyginimas su rizikos nekoreguotu kūrimo įverčiu**: tai du kartus pataikauja kūrimui – ir kaina, ir tvarkaraščiu.
- **Nulinė vidinio darbo kaina**: valstybės tarnybos inžinierių laikas laikomas „nemokamu“, nes jau yra departamento etatų biudžete, o tai paslepia tikruosius alternatyvuosius kaštus, palyginti su kitu darbu, kurį ta komanda galėtų atlikti.
- **Neįkainotas įsipareigojimas (lock-in) abiem kryptimis**: tiekėjo keitimo ir duomenų perkeliamumo kaštai yra realūs, bet taip pat realus yra individualaus kūrimo autobuso faktorius (bus factor) ir priklausomybė nuo mažos, sunkiai pakeičiamos vidinės komandos išlaikymo visą gyvavimo laiką.
- **Misijos išskirtinumo teigimas apie vamzdyną**: „tai mums esminė“ tvirtinama apie integracijos tarpinę programinę įrangą ar dokumentų saugyklą – patikrinkite, ar pilietis ar bylos tvarkytojas kada nors pastebėtų, kuris iš jų veikia apačioje.

## Šaltiniai

- Central Digital and Data Office, Technology Code of Practice. <https://www.gov.uk/guidance/the-technology-code-of-practice>
- GOV.UK Service Manual, deciding whether to build or buy technology. <https://www.gov.uk/service-manual>
- HM Treasury, Green Book supplementary guidance on optimism bias. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
