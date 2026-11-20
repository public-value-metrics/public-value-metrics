# Paskirstymo svertinimas

Paskirstymo svertinimas (angl. distributional weighting) koreguoja sąnaudų ar naudos piniginę vertę pagal tai, kas ją gauna, remiantis principu, kad papildomas svaras vargstančiam namų ūkiui vertingesnis nei turtingam. HM Treasury Green Book pateikia aiškų šio svertinimo taikymo metodą, pagrįstą mažėjančiu ribiniu pajamų naudingumu, kad vertinimuose nebūtų tyliai laikoma, jog turtingiausio decilio gautas svaras vertas tiek pat, kiek skurdžiausio.

## Kodėl tai svarbu

Standartinė sąnaudų ir naudos analizė sumuoja svarus nesiklausdama, kieno tai svarai, o tai netiesiogiai reiškia, kad svaras visiems vertas tiek pat, o ekonomistai jau seniai žino, kad ši prielaida klaidinga. Namų ūkis, uždirbantis 15 000 £ per metus, 1 000 £ prieaugį patiria visai kitaip nei uždirbantis 150 000 £ per metus, nes ribinis pajamų naudingumas mažėja augant pajamoms. Be svertinimo standartinis vertinimas sistemingai teikia pirmenybę intervencijoms, naudingoms turtingesnėms, jau pasiturinčioms grupėms, nes jų didesnė perkamoji galia išpučia joms tenkančios naudos piniginę vertę (parko atnaujinimas šalia brangaus būsto „parodo“ didesnę nekilnojamojo turto vertės naudą nei toks pat atnaujinimas šalia pigaus būsto vien dėl to, kad kainos aukštesnės, o ne dėl to, kad gerovės prieaugis didesnis).

Green Book papildomos gairės dėl paskirstymo analizės, sustiprintos po 2020 m. Treasury peržiūros, atsakiusios į kritiką, kad vertinimo metodika sistemingai palankesnė Londonui ir pietryčių Anglijai, nustato formalų svertinimo metodą, pagrįstą prielaida, kad ribinio pajamų naudingumo elastingumas yra apie 1,3, t. y. pajamoms padvigubėjus papildomo svaro ribinė vertė sumažėja maždaug perpus (tiksliau, 2^-1,3 ≈ 0,41 karto). Tai nėra apvalinimo pataisa: ją pritaikius gali pasikeisti, kuri iš dviejų konkuruojančių programų parodo didesnę grynąją dabartinę vertę (angl. net present value), ypač lyginant intervenciją, sutelktą skurdžioje vietovėje, su išskaidyta po visą gyventojų populiaciją.

## Matematika

Green Book paskirstymo svoris svarui naudos, tenkančiai namų ūkiui, kurio pajamų lygis y, palyginti su svaru, tenkančiu nacionaliniam vidutinių pajamų lygiui ȳ:

```
Weight(y) = (ȳ / y)^e

where:
  y  = household income (or income of the affected group)
  ȳ  = average (reference) household income
  e  = elasticity of marginal utility of income (Green Book: approximately 1.3)
```

Svorių taikymas grynajai naudai:

```
Weighted benefit = Σ [unweighted benefit to group i × Weight(y_i)]
```

Grupė, uždirbanti pusę nacionalinio vidurkio (y = 0,5ȳ), gauna svorį (1/0,5)^1,3 = 2^1,3 ≈ 2,46: kiekvienas šiai grupei tenkantis naudos svaras laikomas vertu maždaug 2,46 karto daugiau nei svaras, tenkantis vidutines pajamas gaunančiam namų ūkiui.

## Pavyzdys su skaičiavimais

**Dvi konkuruojančios vietos programos**, kurių kiekvienos nesvertinta grynoji nauda yra 2 mln. £ per metus, varžosi dėl to paties regioninio augimo fondo:

- *A programa*: verslo paramos schema pasiturinčiame mieste, vidutinės namų ūkio pajamos 45 000 £ (maždaug 1,3 karto daugiau už prielaidą apie 35 000 £ nacionalinį vidurkį).
- *B programa*: įgūdžių programa skurdžioje apylinkėje, vidutinės namų ūkio pajamos 18 000 £ (maždaug 0,51 nacionalinio vidurkio).

```
Weight(A) = (35 000 / 45 000)^1,3 = (0,778)^1,3 ≈ 0,72
Weight(B) = (35 000 / 18 000)^1,3 = (1,944)^1,3 ≈ 2,53

Weighted benefit A = £2 000 000 × 0,72 = £1,44 million
Weighted benefit B = £2 000 000 × 2,53 = £5,06 million
```

Be svertinimo abi programos lygios. Paskirstymo poveikiu pasvertus B programos nauda yra daugiau nei tris kartus didesnė, o tai pakeičia finansavimo rekomendaciją ir atspindi aiškų Green Book tikslą reikalauti rodyti svertinimą, o ne vien nesvertintą naudos ir sąnaudų santykį.

**Labdaros dotacijų paskirstymas**: finansuotojas, lyginantis 500 000 £ dotaciją, pasiekiančią 1 000 mažas pajamas gaunančių namų ūkių (svoris ≈ 2,0, svertinė vertė atitinka 1 mln. £), su tokia pat 500 000 £ dotacija, pasiekiančia 1 000 vidutines pajamas gaunančių namų ūkių (svoris ≈ 1,0, svertinė vertė atitinka 500 000 £), turėtų paskirstymo argumentą aiškiai parodyti savo valdybos dokumente, o ne palikti jį numanyti.

## Ryšys su programine inžinerija

Paskirstymo svertinimas retai tiesiogiai pasirodo programinės įrangos teikimo metrikose, tačiau jis turėtų lemti, kaip inžinerijos ir duomenų komandos projektuoja matavimą ir tikslinimą:

- Kurdami poveikio skydelį (angl. dashboard) ar naudos skaičiuoklę, parodykite paveiktųjų pajamų ar nepritekliaus profilį, o ne tik bendrą naudos sumą: bendri skaičiai be paskirstymo skaidymo paslepia būtent aukščiau parodytą apsivertimą.
- Susiekite paslaugų dizaino tikslinimo logiką su tais pačiais nepritekliaus duomenimis, kuriuos naudoja Green Book (žr. [Index of Multiple Deprivation](../daugialypio-nepritekliaus-indeksas/)), kad skaitmeninės paslaugos aprėptį būtų galima vertinti pagal teisingumą, o ne tik veiksmingumą (ginčytinas ketvirtasis E sąvokoje [value for money](../vertė-už-pinigus/)).
- Kai algoritmas paskirsto ribotą išteklių (vizitų laikus, socialinio darbuotojo laiką, subsidiją), nesvertinė „maksimizuoti bendrą naudą“ tikslo funkcija pagal konstrukciją atkartos tą patį šališkumą, kurį turi ištaisyti Green Book svertinimas: aiškiai į tai atkreipkite politikos savininkų dėmesį prieš optimizuodami.

## Dažniausios klaidos

- **Paskirstymo svorių taikymas nenuosekliai visame portfelyje.** Vienos programos naudos svertinimas, o jos palyginamosios programos ne, sukuria šališką, o ne teisingesnį palyginimą; Green Book reikalauja vienodo požiūrio.
- **Nekilnojamojo turto ar rinkos verčių naudojimas kaip gerovės pakaitalo be koregavimo.** Rinkos kainas pačias iškreipia esama pajamų nelygybė, kurią paskirstymo svertinimas ir turi ištaisyti: nekoreguotų rinkos verčių naudojimas gali dvigubai įskaičiuoti šališkumą.
- **Variacijos grupės viduje ignoravimas.** Svertinimas pagal vietovės vidutines pajamas (pvz., Index of Multiple Deprivation deciliu) gali iškreipti asmenų, neatitinkančių savo vietovės vidurkio, vaizdą; naudokite smulkiausius protingai prieinamus pajamų duomenis.
- **1,3 elastingumo laikymas universalia konstanta.** Pats Green Book pažymi, kad tai įvertis su tikėtinu intervalu; svarbius sprendimus patikrinkite jautrumo analize su alternatyviais elastingumais, o ne laikykite 1,3 tikslia reikšme.

## Šaltiniai

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation", and
  supplementary guidance on distributional impacts (2022 edition).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury, "Green Book Review 2020: Findings and Response" (addressing regional-bias criticism).
  <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>
- Fujiwara D, Campbell R. "Valuation Techniques for Social Cost-Benefit Analysis." HM Treasury/DWP,
  2011 (background on marginal utility of income elasticity estimates).
