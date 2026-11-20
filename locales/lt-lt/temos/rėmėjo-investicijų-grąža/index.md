# Rėmėjo investicijų grąža

Rėmėjo investicijų grąža (angl. donor return on investment) rodo, ką konkretaus rėmėjo svaras iš tikrųjų nuperka rezultatais, o ne kokie yra labdaros organizacijos veiklos santykiai ar jos pačios visam biudžetui apskaičiuota grąža. Ji perkelia investicijų grąžos (angl. ROI) vertinimą iš organizacijos perspektyvos (kaip efektyviai mes veikiame) į rėmėjo perspektyvą (ką keičia mano ribinis įnašas), o šie du skaičiai įprastai, ir klaidingai, laikomi tuo pačiu dalyku.

## Kodėl tai svarbu

Pačios labdaros organizacijos „ROI“, jei šis terminas apskritai vartojamas, paprastai reiškia kažką panašaus į [kaštus vienam gavėjui](../kaštai-vienam-naudos-gavėjui/) arba [labdaros organizacijos pridėtinių išlaidų santykį](../labdaros-organizacijų-pridėtinių-išlaidų-santykis/), t. y. organizacinio veiksmingumo rodiklius. Rėmėjo ROI yra visai kitas klausimas: turint omenyje, kad ši organizacija jau turi kitų pajamų, ką prie ribos prideda *šio* rėmėjo pinigai? Jei organizacija įgyvendintų tą pačią programą su konkrečia 10 000 £ dovana ar be jos, nes turi pakankamai rezervų arba kitas finansuotojas būtų užpildęs spragą, tos dovanos rėmėjo ROI artima nuliui, kad ir kaip gerai atrodytų bendras pridėtinių išlaidų santykis ar kaštai vienam rezultatui.

Tai tas pats papildomumo (angl. additionality) klausimas, kuriuo grindžiamas [pinigų vertės](../vertė-už-pinigus/) vertinimas JK viešosiose išlaidose ir [papildomumas bei tuščiasis poveikis](../papildomumas-ir-tuščiasis-poveikis/) programų vertinime: sukurta vertė gali būti priskiriama finansuotojui tik tiek, kiek ji nebūtų įvykusi ir be jo. Didžiosios rėmėjo patariamosios platformos ir veiksmingo davimo organizacijos (Giving What We Can, GiveWell) savo rekomendacijas aiškiai grindžia šiuo skirtumu, klausdamos ne „ar tai gera labdaros organizacija“, o „ar ši organizacija turi nepadengtos vietos papildomam finansavimui, kad mano dovana būtų papildoma“.

## Matematika

```
Donor ROI ≠ Charity's operating efficiency

Donor ROI  ≈  (Outcome achieved with the gift) − (Outcome that would have
               occurred without it, i.e. the counterfactual)
             ─────────────────────────────────────────────────
                              Size of the gift

Key inputs:
  - Room for more funding (is the charity funding-constrained at the margin?)
  - Funging (would another donor have filled the gap?)
  - Marginal cost-effectiveness at the specific funding level (costs often
    rise as an intervention scales past its easiest-to-reach population)
```

Kaip GiveWell operacionalizuoja klausimą apie „vietą papildomam finansavimui“, žr. [efektyviojo altruizmo ekonominis efektyvumas](../efektyviojo-altruizmo-ekonominis-efektyvumas/), o bendrąjį metodą: [kontrafaktinė analizė](../kontrafaktinė-analizė/).

## Pavyzdys su skaičiavimais

Rėmėjas renkasi tarp dviejų 5 000 £ dovanų:

- **C labdaros organizacija**: turi visiškai finansuojamą pagrindinę programą, 2 mln. £ rezervų ir finansuotojų laukiančiųjų eilę; ribiniai 5 000 £ greičiausiai bus pridėti prie rezervų arba skirti mažesnio prioriteto veiklai. Numatomas rėmėjo papildomas rezultatas: minimalus, nes pinigai akivaizdžiai nekeičia to, kas vyksta.
- **D labdaros organizacija**: maža, įrodymais pagrįsta programa, kuri viešai pareiškė, kad kitą ketvirtį turės atsisakyti aptarnauti 200 žmonių be papildomų 50 000 £, ir jau surinko 42 000 £. Ribiniai 5 000 £ labai tikėtina finansuos realų papildomą teikimą, tarkime, 20 papildomų aptarnautų žmonių, kai pačios organizacijos nurodyti kaštai vienam gavėjui yra 250 £.

Tokia pati dovanos suma, tas pats rėmėjas, kardinaliai skirtinga rėmėjo ROI: ne todėl, kad C organizacija prastesnė (bendrai jos kaštai vienam rezultatui gali būti geresni), o todėl, kad jos ribinė finansavimo spraga jau uždaryta.

## Ryšys su programine inžinerija

Rėmėjų platformos ir rekomendacijų įrankiai per dažnai rodo tik organizacijos lygmens veiksmingumo rodiklius (pridėtinių išlaidų santykį, kaštus vienam gavėjui), nes būtent juos organizacijos skelbia metinėse ataskaitose ir juos lengviausia įtraukti į palyginimo lentelę. Tinkamai pavaizduoti rėmėjo ROI reikia kitokio, sunkiau gaunamo duomenų taško: organizacijos paskelbtos dabartinės finansavimo spragos arba „vietos papildomam finansavimui“, kuri keičiasi per metus ir retai pateikiama kaip struktūrizuoti duomenys. Platformoms, norinčioms palaikyti tikrą rėmėjo ROI mąstymą, reikia arba tiesioginio finansavimo spragų atskleidimo šaltinio (kaip GiveWell rankiniu būdu palaiko savo rekomenduojamoms organizacijoms), arba aiškaus atsisakymo, kad palyginimo lentelė rodo organizacinį veiksmingumą, o ne rėmėjo papildomumą. Metriką, su kuria rėmėjo ROI dažniausiai, ir klaidingai, painiojamas, žr. [labdaros organizacijos pridėtinių išlaidų santykis](../labdaros-organizacijų-pridėtinių-išlaidų-santykis/).

## Dažniausios klaidos

- **Organizacijos veiksmingumo painiojimas su rėmėjo papildomumu.** Gerai valdoma, mažų pridėtinių išlaidų organizacija vis tiek gali turėti beveik nulinę ribinę rėmėjo ROI, jei jos nevaržo finansavimas.
- **Funging ignoravimas.** Jei didelis institucinis finansuotojas bet kuriuo atveju būtų padengęs spragą, individualaus rėmėjo dovana išstumia to finansuotojo pinigus, o ne prideda naujo teikimo.
- **Linijinio ekonominio efektyvumo prielaida dideliu mastu.** Pigiausiai pasiekiami gavėjai dažnai aptarnaujami pirmieji; ribiniai kaštai vienam rezultatui plečiantis programai dažnai auga, todėl kito svaro ROI nėra tas pats kaip jau išleisto vidutinio svaro ROI.
- **Nenurodyta finansavimo spraga.** Organizacija ar platforma, negalinti pasakyti, ką finansuotų kiti X £, negali pagrįsti tikro rėmėjo ROI teiginio, tik vidutinių kaštų teiginį.

## Šaltiniai

- Giving What We Can, on funding gaps and cost-effectiveness in donation decisions. <https://www.givingwhatwecan.org/>
- GiveWell, "Our criteria" (room for more funding as an explicit criterion). <https://www.givewell.org/how-we-work/our-criteria>
- HM Treasury, the Green Book: appraisal and evaluation in central government. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-governent>
