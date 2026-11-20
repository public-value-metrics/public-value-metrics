# Pwysheans Dasrannans

Pwysheans dasrannans a ewnans talvos arghansek kost po budhek herwydh piw a'n kevir, war an dhyghtyans bos punt ynkressys moy gwerth dhe dyji boes es dhe unn pros. Green Book HM Treasury a ri fordh eglur rag gweythresa an pwysheans ma, savys war an wordhyans ogasel a'n budhek a dhevar, may na wra arvreythyansow ankavos a bunt a gavas an degves rychesa hevelep dhe bunt a gavas an degves kemmys boghosekka.

## Perag y talvos

Dasserghyans kost-budhek savonek a ssumm puntow heb govyn pyw yw aga funtow, hag ytho a dybys bos punt a'n keth wordhyans dhe bubonan — tybyans a wor yskonomydhyon dhe vos fals termyn hir. Tyji a gav £15,000/bledhen a skwith kavans a £1,000 yn fordh dyffrans dhyworth tyji a gav £150,000/bledhen, drefen an wordhyans ogasel a dhevar a godh pan dhrik an devar. Heb pwysheans, arvreythyans savonek a hwila ankamm a-dhyskis oberyansow a vydh budhek dhe bagasow rych, ow-hedhes yn dhyghtyans, drefen aga nerth wortha-prenans uhel a dhrell an prisyans arghansek a'n budhekow a dhe dhedha (gwellheans park ogas dhe dyji kostek a "dhiskwedh" budhek talvos-pewnans brasa es an keth gwellheans ogas dhe dyji hweg, hepken drefen bos prisyow uhelha, na drefen bos kavans les brassa).

Gidyans ynnansek Green Book war dhaswaytyans dasrannans, kreffhes wosa arvreythyans Treasury 2020 a worthybis dhe gyrtyans bos metodologieth arvreythyans ow-skoodhya Loundres ha'n Soth-Est yn ankamm, a dhyghtyas fordh pwyshek furvys savys war elastisita assumyes a'n wordhyans ogasel a'n devar a nes dhe 1.3 — ow styrya bos dewblyans an devar ow hanterhe an wordhyans ogasel a bunt ynkressys (yn tidh, 2^-1.3 ≈ 0.41 gwaith). Nyns yw hemma ewnans a dhehwelyans: y hyll y wweythresa chanjya pyneyl a'n dew brogram yn kesstrif a dhiskwedh an dalvos kerrenn net uhella, arbennek pan vo kehevelys ebyrnans kuntellys yn tyller diwoesys erbyn unn skoodhys dres an poblans hollek.

## An matematik

Pwys dasrannans Green Book rag punt a vudhek rag tyji orth nivel devar y, hevelepys orth punt orth nivel an devar kresek kenedhlek ȳ:

```
Pwys(y) = (ȳ / y)^e

le:
  y  = devar tyji (po devar an bagas tuchyes)
  ȳ  = devar tyji kresek (dhyskwedh)
  e  = elastisita a'n wordhyans ogasel a'n devar (Green Book: nes dhe 1.3)
```

Gweythresa pwysow dhe vudhekow net:

```
Budhek pwyshys = Σ [budhek anbwyshys dhe bagas i × Pwys(y_i)]
```

Bagas a gav hanter an kresek kenedhlek (y = 0.5ȳ) a gav pwys a (1/0.5)^1.3 = 2^1.3 ≈ 2.46 — pub punt a vudhek dhe'n bagas na a vydh kowntys avel talvos nes dhe 2.46 gwaith punt dhe dyji a'n kresek.

## Ensampel oberys

**Dew brogram leel yn kesstrif**, gans budhek net anbwyshys a £2 vylyon/bledhen pub unn, ow kesstrivya rag an keth fond kressans ranndiryek:

- *Program A*: skim skoodh negys yn tre rych, devar tyji kresek £45,000 (nes dhe 1.3× an kresek kenedhlek assumyes a £35,000).
- *Program B*: program skyllow yn kombrenn diwoesys, devar tyji kresek £18,000 (nes dhe 0.51× an kresek kenedhlek).

```
Pwys(A) = (35,000 / 45,000)^1.3 = (0.778)^1.3 ≈ 0.72
Pwys(B) = (35,000 / 18,000)^1.3 = (1.944)^1.3 ≈ 2.53

Budhek pwyshys A = £2,000,000 × 0.72 = £1.44 mylyon
Budhek pwyshys B = £2,000,000 × 2.53 = £5.06 mylyon
```

Anbwyshys, an dhew brogram yw kehevelys. Pwyshys rag effeyth dasrannans, budhek Program B a vydh moy es teyr gwaith brasa — deveth a dreyl an erhys arghansya ha dhiskwedh an porpos eglur a'n Green Book orth erghi dhe dhiskwedhes an pwysheans, nyns yw hepken an kevradh budhek-kost anbwyshys.

**Dyvyskans grant kevarghadow**: skoodhyer ow-kehevelya grant a £500,000 ow-tos dhe 1,000 tyji a gevedh isel (pwys ≈ 2.0, talvos pwyshys kehevelys dhe £1 vylyon) erbyn an keth £500,000 ow-tos dhe 1,000 tyji a gevedh kres (pwys ≈ 1.0, talvos pwyshys kehevelys dhe £500,000) a dal diskwedh an kas dasrannans yn eglur y'n paper bwrdh, heb y asa dhe vos kyrghys.

## Kevrenn gans ynjynnerieth medhelweyth

Pwysheans dasrannans a dheu nebes y'n metryksow delivrans software yn ewn, mes a dal furvya fatell wra bagasow ynjynnans ha data dyssynnya musuryans ha kesstrivyans:

- Pan wruthyl tablyn-bord effeyth po kalkulyer budhekow, diskwedh an profil devar po diwoesys a bys piw yw tuchyes, nyns yw hepken hollek budhek kuntellys — figyrow kuntellys heb dyvyskans dasrannans a gudh an keth dehwelyans diskwedhys a-uskis.
- Kevrenn an lojyk kesstrivya yn dyssynnans servis gans an keth data diwoesys a devnydh Green Book — mir [Kevrennlyver Diwoesys Lies](../kevrennlyver-diwoesys-lies/) — may hyller arvreythya skopen servis didhital rag ekwita, nyns yw hepken effeyth (an peswora E dadhelys yn [talvos rag arghans](../talvedh-rag-arghans/)).
- Pan wra algorythm dyghtya resos skant (spasow gwelvos, termyn kesgonyer, subsidi), an folyans amkan "gorwessa an budhek hollek" anbwyshys a wra, dre strukturyans, dasprynya an keth tuedh a vo an pwysheans Green Book ow-ewnhe — gwra ervira hemma eglur dhe berghennoryon polici kyns amkanysa.

## Trapow

- **Gweythresa pwysow dasrannans yn tebel dres portfolio.** Pwyshys budhekow unn brogram hag anbwyshys y gesstrivyer a wra kehevelyans tuedhek, nyns yw helles; an Green Book a erghi ervirans kehevelep a'n keth.
- **Devnydhya prisyow tir po varghas avel mesorer les heb ewnans.** Prisyow varghas yw tuedhys gans anekwalita devar a ra bos; pwysheans dasrannans a dal y ewnhe — devnydhya talvosow varghas anewnhes a yll dewblya an tuedh.
- **Ankevi chanj aberth bagas.** Pwysheans herwydh devar kresek a'n tyller (rag ensampel decil a'n Kevrennlyver Diwoesys Lies) a yll gaudhek tus na dhes hevel dhe gresek aga thyller; devnydhya an data devar moyha hir yw yn hewl wordhyes.
- **Ewnhe an elastisita 1.3 avel kevadh kenedhlek.** An Green Book y honan a notyas bos hemma kavans gans pegh gwrys; whithra dewisyow bras erbyn elastisitaow erel yn le dhe dhiskwedh 1.3 avel ewn.

## Fentynyow

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation", and
  supplementary guidance on distributional impacts (2022 edition).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury, "Green Book Review 2020: Findings and Response" (addressing regional-bias criticism).
  <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>
- Fujiwara D, Campbell R. "Valuation Techniques for Social Cost-Benefit Analysis." HM Treasury/DWP,
  2011 (background on marginal utility of income elasticity estimates).
