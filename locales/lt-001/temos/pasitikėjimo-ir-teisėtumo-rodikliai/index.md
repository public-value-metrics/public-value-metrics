# Pasitikėjimo ir teisėtumo rodikliai

Teisėtumas ir parama yra viena iš trijų Marko Moore'o „strateginio trikampio“ atramų knygoje *Creating Public Value* (1995) – kartu su pačia visuomenine verte ir veiklos pajėgumu – ir būtent ji dažniausiai lieka nematuojama, nes, kitaip nei biudžetas ar produktų skaičius, teisėtumas neturi akivaizdaus vieno skaičiaus. Pasitikėjimo ir teisėtumo rodikliai – tai pakaitinių matų šeima, kuria vyriausybės užpildo šią spragą: institucinio pasitikėjimo apklausos, priežiūros institucijų pasitikėjimo įvertinimai, skundų ir apeliacijų duomenys bei politinės / įstatymų leidybos paramos rodikliai.

## Kodėl tai svarbu

Moore'o argumentas toks: viešasis vadovas, kuris teikia tikrą vertę, bet praranda politinį ir visuomenės teisėtumą, galiausiai praras įgaliojimų aplinką, reikalingą toliau tą vertę teikti – finansavimas karpomas, įgaliojimai siaurinami, o paslauga išsekinama nepriklausomai nuo to, kokie geri jos rezultatai. Todėl teisėtumas nėra viešųjų ryšių priedas, prikabintas prie teikimo rezultatų suvestinės; tai laikančioji įvestis, nuo kurios priklauso, ar misija apskritai gali tęstis, ir todėl jis yra lygiavertė perspektyva [viešosios vertės rezultatų kortelėje](../viešosios-vertės-rezultatų-kortelė/), o ne išnaša. EBPO (OECD) „Trust in Government“ apklausų programa yra pagrindinis tarptautinis bandymas tai kiekybiškai įvertinti: ji seka, kokia dalis piliečių EBPO šalyse sako pasitikintys savo nacionaline vyriausybe, o jos ilgalaikiai duomenys rodo, kad pasitikėjimas labai jautrus sukrėtimams – ir 2008 m. finansų krizė, ir COVID-19 pandemija sukėlė staigius nacionalinio lygio svyravimus, dažnai po jų sekė tik dalinis atsigavimas, o EBPO analizė nuosekliai nustato, kad suvokiamas *kompetentingumas* (ar vyriausybė daro tai, ką žada) ir suvokiamas *sąžiningumas / vientisumas* (ar vyriausybė matoma veikianti be korupcijos ar favoritizmo) yra du stipriausi pasitikėjimo rodiklio veiksniai, atskiri nuo pasitenkinimo bet kuriuo atskiru sandoriu. Vyriausybės vis dažniau bando teisėtumą operacionalizuoti ir smulkesniu lygiu – JK nepriklausomi reguliuotojai ir inspekcijos (Nacionalinė audito tarnyba, Parlamento ir sveikatos paslaugų ombudsmenas, sektorių reguliuotojai, tokie kaip Ofsted ir Care Quality Commission) veikia kaip institucionalizuoti teisėtumo patikrinimai, paversdami „ar visuomenė vis dar pasitiki šia paslauga“ audituojamais įvertinimais.

## Matematika

Pasitikėjimas ir teisėtumas – tai sistemos formos tema, kurios naudojami kiekybiniai pakaitalai yra:

```
Institucinio pasitikėjimo indeksas (EBPO tipo)
  = % apklausos respondentų, atsakančių „taip“ į pasitikėjimo vyriausybe klausimą,
    sekamas laikui bėgant, išskaidytas pagal demografines grupes

Teisėtumo pakaitalų rinkinys (joks vienas skaičius nepakeičia konstrukto):
  - Patenkinti skundai tūkstančiui paslaugų gavėjų (ombudsmeno ar vidiniai skundų duomenys)
  - Teisminės peržiūros / apeliacijų sėkmės dažnis prieš institucijos sprendimus
  - Nepriklausomo reguliuotojo / inspekcijos įvertinimas (pvz., juostos nuo „puikus“ iki „nepakankamas“)
  - Įstatymų leidybos / priežiūros komitetų pasitikėjimo balsavimai ar kritinių ataskaitų dažnis
  - Informacijos laisvės prašymų skaičius ir atskleidimo / atsisakymo dažnis kaip suvokiamo
    skaidrumo pakaitalas

Teisėtumas patvirtinamas, o ne apskaičiuojamas: ginamas teisėtumo vertinimas
trianguliuoja kelis iš išvardytų, o ne remiasi vienu pakaitalu.
```

## Pavyzdys su skaičiavimais

**Nacionalinė mokesčių institucija**: teisėtumo trianguliacija metinei viešosios vertės ataskaitai.

```
EBPO tipo pasitikėjimo pakaitalas (departamento pasitikėjimo apklausa):
  58 % respondentų sako pasitikintys, kad institucija „elgiasi su manimi sąžiningai“
  (sumažėjo nuo 64 % prieš dvejus metus)

Skundų duomenys:
  Patenkinti skundai: 4,2 tūkstančiui mokesčių mokėtojų sąveikų (padidėjo nuo 3,1 tūkstančiui)

Ombudsmeno nukreipimai:
  Nukreipimai į nepriklausomo Adjudicator's Office: 1 850 per metus, iš kurių
  61 % patenkinti visiškai ar iš dalies prieš instituciją (padidėjo nuo 48 % ankstesniais metais)

Skaitant visus tris: pasitikėjimas mažėja, patenkintų skundų daugėja, o
nepriklausomi ombudsmeno sprendimai vis dažniau stoja prieš instituciją –
trys nepriklausomi signalai, krypstantys ta pačia linkme, ir tai daro šią išvadą
patikima teisėtumo išvada, o ne triukšmu vienoje iš eilučių.
```

Vieno iš šių skaičių pokytis būtų silpnas įrodymas; trys nepriklausomi matai, judantys kartu tuo pačiu laikotarpiu, yra modelis, dėl kurio teisėtumo teiginys tampa ginamas.

## Ryšys su programine inžinerija

Teisėtumo rodikliai retai gaminami vienos komandos skydelyje, o tai pati savaime yra projektavimo pamoka: kurkite ataskaitų srautus, galinčius priimti ir suderinti duomenis iš nepriklausomų išorės šaltinių (ombudsmeno bylų sistemų, reguliuotojų įvertinimų šaltinių, apklausų tiekėjų), užuot teisėtumo ataskaitas kūrę kaip vien vidinį rodiklį, nes vidiniu būdu gauti teisėtumo teiginiai („patys save vertiname kaip patikimus“) turi mažai įrodomojo svorio – ta pati nepriklausomumo problema, aprašyta teisėtumo perspektyvai [viešosios vertės rezultatų kortelėje](../viešosios-vertės-rezultatų-kortelė/). Skundų ir apeliacijų duomenų srautams reikia tokio paties duomenų kokybės griežtumo kaip ir bet kuriam rezultatų srautui, maitinančiam [mokėjimas pagal rezultatus ir socialinio poveikio obligacijos](../mokėjimas-pagal-rezultatus-ir-socialinio-poveikio-obligacijos/) sutartis, nes nepakankamai pranešti ar prastai suskirstyti skundų duomenys tyliai nuvertina teisėtumo problemą, kol ji tampa matoma pasitikėjimo apklausoje po metų. Žr. [piliečių pasitenkinimo rodikliai](../piliečių-pasitenkinimo-rodikliai/) – sandorio lygio atitikmenį šiam institucijos lygio matui, ir [viešoji vertė](../viešoji-vertė/) – visą Moore'o strateginio trikampio sistemą, kuriai ši atrama priklauso.

## Dažniausios klaidos

- **Pasitenkinimo laikymas teisėtumo pakaitalu**: pilietis gali būti patenkintas vieno sandorio sąsaja, bet nepasitikėti institucija apskritai (ar atvirkščiai) – žr. [piliečių pasitenkinimo rodikliai](../piliečių-pasitenkinimo-rodikliai/), kodėl šie du dalykai turi būti pateikiami atskirai.
- **Pasikliovimas vienu savarankiškai pateikiamu matu**: vidinė pasitikėjimo apklausa be nepriklausomo patvirtinimo (ombudsmeno duomenų, reguliuotojų įvertinimų) lengvai atmetama kaip savęs vertinimas; trianguliuokite.
- **Demografinio išskaidymo ignoravimas**: bendri nacionaliniai pasitikėjimo skaičiai gali užmaskuoti smarkiai besiskiriantį teisėtumą tarp konkrečių grupių (pagal amžių, etninę kilmę, pajamas ar regioną) – pati EBPO „Trust in Government“ leidiniuose būtent dėl to skaido duomenis.
- **Vieno sukrėtimo sukelto nuosmukio laikymas ilgalaike tendencija**: pasitikėjimo skaičiai smarkiai svyruoja aplink krizes (finansų krachus, pandemijas, plačiai nuskambėjusius skandalus) ir iš dalies atsigauna; vieno po sukrėtimo gauto duomenų taško negalima ekstrapoliuoti į ilgalaikį smukimą neturint daugiau duomenų.

## Šaltiniai

- Mark H. Moore, *Creating Public Value: Strategic Management in Government*, Harvard University
  Press, 1995.
- OECD, "Trust in Government." <https://www.oecd.org/en/topics/trust-in-government.html>
- Parliamentary and Health Service Ombudsman, annual casework statistics.
  <https://www.ombudsman.org.uk/>
