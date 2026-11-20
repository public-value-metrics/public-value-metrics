# Kaštai vienam rezultatui

Kaštai vienam rezultatui – tai bendros programos išlaidos, padalytos iš žmonių, pasiekusių apibrėžtą, reikšmingą savo aplinkybių pokytį, skaičiaus, o ne iš tų, kurie tik gavo paslaugą. Tai aštriausias efektyvumo rodiklis, kurį gali naudoti finansuotojas ar teikimo komanda, nes jis priverčia užduoti ankstesnį klausimą, kurio dauguma labdaros organizacijų vengia: kas tiksliai laikoma sėkme?

## Kodėl tai svarbu

Maisto bankas iš to paties metų apskaitos gali pranešti du labai skirtingus skaičius. Kaštai vienam išdalytam maisto paketui gali būti £15. Kaštai vienam namų ūkiui, vėliau pasiekusiam aprūpinimą maistu – nebereikalingam skubios maisto pagalbos, patvirtinta tolesnės stebėsenos metu, – gali būti £340. Abu teisingi. Tik vienas pasako finansuotojui, ar pinigai veikia. Skirtumas tarp jų yra skirtumas tarp produkto ir rezultato: išduotas paketas yra produktas; nebe krizėje esantis namų ūkis yra rezultatas. Žr. [rezultatai ir produktai](../rezultatai-ir-produktai/).

JK trečiasis sektorius du dešimtmečius kūrė infrastruktūrą, kuri priverstų atskirti šiuos dalykus. New Philanthropy Capital „keturių ramsčių požiūris“ į labdaros veiksmingumą aiškiai prašo organizacijų nurodyti rezultatus prieš produktus, o „Inspiring Impact“ – JK finansuotojų remiama poveikio matavimo bendradarbiavimo grupė – skelbia Rezultatų matricą, kurią dabar daugelis dotacijų paraiškų reikalauja užpildyti labdaros organizacijų. Trussell Trust metinė „State of Hunger“ tyrimų programa, vykdoma kartu su Heriot-Watt universitetu, egzistuoja būtent todėl, kad vien paketų skaičius nieko nesako apie tai, ar žmonės išsivaduoja iš maisto nesaugumo.

Kaštai vienam rezultatui ką nors reiškia tik tada, kai nustatytas kontrafaktinis scenarijus: „bet kuriuo atveju“ pasiektas rezultatas nėra rezultatas, kurį programa nupirko. Žr. [kontrafaktinė analizė](../kontrafaktinė-analizė/) ir [išstūmimas ir priskyrimas](../išstūmimas-ir-priskyrimas/).

## Matematika

```
Kaštai vienam rezultatui = Bendri programos kaštai / Apibrėžtą rezultatą pasiekusių naudos gavėjų skaičius

kur:
  Bendri programos kaštai = tiesioginiai teikimo kaštai + teisinga pridėtinių išlaidų dalis
  Apibrėžtas rezultatas   = iš anksto nurodytas, išmatuojamas būsenos pokytis
                            (pvz., „aprūpintas maistu po 6 mėnesių tolesnės stebėsenos“,
                            o ne „gavo maisto paketą“)
```

Palyginkite su [vieneto kaštų duomenų bazėmis](../vieneto-kaštų-duomenų-bazės/) (pvz., sektoriaus konkrečių vieneto kaštų etalonais), kad nuspręstumėte, ar tam tikri kaštai vienam rezultatui yra geri, vidutiniai ar prasti, palyginti su panašiomis intervencijomis.

## Pavyzdys su skaičiavimais

**Maisto bankas, vieneri metai**:

- Bendri programos kaštai: £450 000
- Išdalyta paketų: 30 000
- Kaštai vienam paketui (produkto rodiklis): £450 000 / 30 000 = **£15**

Labdaros organizacija taip pat atlieka šešių mėnesių tolesnės stebėsenos apklausą su namų ūkių imtimi ir nustato, kad 35 % namų ūkių, gavusių tris ar daugiau paketų, praneša nebereikalaujantys skubios maisto pagalbos ir pagal standartinį aprūpinimo maistu apklausos modulį viršija aprūpinimo maistu ribą. Iš 1 800 tais metais tris ar daugiau paketų gavusių namų ūkių 630 pasiekia tą rezultatą.

```
Kaštai vienam rezultatui = £450 000 / 630 = £714 vienam namų ūkiui, pasiekusiam aprūpinimą maistu
```

Būtent £714 turėtų naudoti finansuotojas, lyginantis šią labdaros organizaciją su pinigų pervedimų bandomuoju projektu ar skolų konsultavimo paslauga, o ne £15. Jei panaši pinigų pervedimų programa tame pačiame regione pasiekia aprūpinimą maistu po £500 namų ūkiui, maisto bankas nėra akivaizdžiai efektyvesnis kelias to paties rezultato link, nors jo kaštai vienam paketui atrodo maži.

## Ryšys su programine inžinerija

Dauguma bylų valdymo sistemų kuriamos produktams registruoti, nes produktai yra tai, kas vyksta sandorio viduje (išduodamas paketas, pateikiama forma). Rezultatai paprastai įvyksta vėliau, dažnai už sistemos įprasto fiksavimo lango ribų, ir reikalauja sąmoningo dizaino sprendimo: tolesnės stebėsenos mechanizmą (apklausos paleidiklį, pakartotinio kontakto darbo eigą, duomenų susiejimo užduotį) kurkite kaip pirmos klasės funkciją, o ne kaip metinei ataskaitai prikabintą papildinį. Sektoriui skirtas dotacijų valdymo ar bylų valdymo platformas kuriantys inžinieriai turėtų laikyti „koks yra rezultato įvykis ir kaip jį stebime“ reikalavimų klausimu, užduodamu prieš fiksuojant duomenų modelį – kur kas sunkiau vėliau pridėti rezultato lauką nei produkto skaitiklį. Kaip struktūrizuoti tą reikalavimų pokalbį, žr. [rezultatai ir produktai](../rezultatai-ir-produktai/) ir [logikos modelis](../loginis-modelis/), o greitesnį, grubesnį rodiklį, kurio komandos griebiasi, kai rezultatų stebėsena dar nesukurta, – [kaštai vienam naudos gavėjui](../kaštai-vienam-naudos-gavėjui/).

## Dažniausios klaidos

- **Produktų, apsirengusių rezultatais, pateikimas.** „Pasiekti žmonės“ nėra „žmonės, kuriems padėta“. Jei rodiklį galima gauti iš sistemos žurnalo be jokio tolesnio kontakto, tai beveik tikrai produktas.
- **Vardiklio manipuliavimas.** Rezultatų populiacijos susiaurinimas iki „programą baigusiųjų“ tyliai išmeta iškritusius – dažnai sunkiausius atvejus – ir išpučia akivaizdų dažnį. Vardiklį nurodykite kaip visus pradėjusius, o ne visus baigusius.
- **Nėra kontrafaktinio scenarijaus.** Skaičiuojant bet ką, pasiekusį rezultatą, įskaitant tuos, kurie būtų jį pasiekę ir be programos, pervertinama tai, ką programa nupirko. Žr. [kontrafaktinė analizė](../kontrafaktinė-analizė/).
- **Lyginimas tarp nesuderinamų rezultatų apibrėžimų.** „Aprūpintas maistu“, išmatuotas patvirtintu apklausos moduliu, nėra palyginamas su „aprūpintas maistu“, pačių pranešta pasitenkinimo formoje; kaštų vienam rezultatui lyga sąžininga tik tada, kai rezultatų apibrėžimai sutampa.

## Šaltiniai

- New Philanthropy Capital (NPC), "Four Pillar Approach" to charity effectiveness. <https://www.thinknpc.org/resource-hub/four-pillar-approach/>
- Inspiring Impact, Outcomes Matrix and impact measurement resources. <https://inspiringimpact.org/>
- Trussell Trust and Heriot-Watt University, "State of Hunger" research programme. <https://www.trusselltrust.org/state-of-hunger/>
- GiveWell, "Our criteria" (cost-effectiveness as the leading criterion for charity recommendation). <https://www.givewell.org/how-we-work/our-criteria>
