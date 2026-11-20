# Ponderazzjoni Distributtiva

Il-ponderazzjoni distributtiva taġġusta l-valur monetarju ta' spiża jew benefiċċju skont min jirċevih, fuq il-prinċipju li lira żejda tiswa aktar għal familja foqra milli għal waħda sinjura. Il-Green Book tat-HM Treasury jipprovdi metodu espliċitu biex tiġi applikata din il-ponderazzjoni, ibbażat fuq l-utilità marġinali dejjem tonqos tad-dħul, sabiex il-valutazzjonijiet ma jittrattawx bil-moħbi lira miksuba mid-deċil l-aktar sinjur bħala ugwali fil-valur għal lira miksuba mill-aktar fqir.

## Għaliex hu importanti

L-analiżi standard tal-kost-benefiċċju tinġabar il-liri mingħajr ma tistaqsi tal-min huma, u dan jassumi impliċitament li lira tiswa l-istess għal kulħadd — assunzjoni li l-ekonomisti ilhom jafu li hija falza. Familja li taqla' £15 000/sena tħoss qligħ ta' £1 000 b'mod ferm differenti minn familja li taqla' £150 000/sena, għax l-utilità marġinali tad-dħul tonqos hekk kif id-dħul jogħla. Mhux ippeżat, il-valutazzjoni standard b'mod sistematiku tiffavorixxi interventi li jiffavorixxu gruppi aktar sinjuri u diġà aħjar, għax il-qawwa ogħla tal-ħlas tagħhom tnaffaħ il-valutazzjoni monetarja tal-benefiċċji li jilħquhom (titjib ta' park ħdejn djar għaljin "juri" benefiċċju akbar fil-valur tal-proprjetà mill-istess titjib ħdejn djar rħas, sempliċement għax il-prezzijiet huma ogħla, mhux għax il-qligħ fil-benessri huwa akbar).

Il-gwida supplimentari tal-Green Book dwar l-analiżi distributtiva, imsaħħa wara r-reviżjoni tat-Teżor tal-2020 li wieġbet għall-kritika li l-metodoloġija tal-valutazzjoni b'mod sistematiku ffavorixxiet Londra u x-Xlokk, tistabbilixxi approċċ formali ta' ponderazzjoni bbażat fuq elastiċità assunta tal-utilità marġinali tad-dħul ta' madwar 1,3 — li tfisser li t-tkabbir tad-dħul b'ammont doppju jnaqqas bin-nofs bejn wieħed u ieħor (b'mod preċiż, 2^-1,3 ≈ 0,41 darba) il-valur marġinali ta' lira addizzjonali. Dan mhuwiex aġġustament ta' arrotondament: l-applikazzjoni tiegħu tista' tbiddel liema minn żewġ programmi li jikkompetu juri l-ogħla valur preżenti nett, partikolarment meta wieħed iqabbel intervent konċentrat f'żona deprivata ma' wieħed mifrux mal-popolazzjoni ġenerali.

## Il-matematika

Il-piż distributtiv tal-Green Book għal lira ta' benefiċċju li tmur għand familja f'livell ta' dħul y, relattiv għal lira f'livell ta' dħul medju nazzjonali ȳ:

```
Piż(y) = (ȳ / y)^e

fejn:
  y  = dħul tal-familja (jew dħul tal-grupp affettwat)
  ȳ  = dħul medju (ta' referenza) tal-familja
  e  = elastiċità tal-utilità marġinali tad-dħul (Green Book: madwar 1,3)
```

Applikazzjoni tal-piżijiet għall-benefiċċji netti:

```
Benefiċċju ppeżat = Σ [benefiċċju mhux ippeżat lill-grupp i × Piż(y_i)]
```

Grupp li jaqla' nofs il-medja nazzjonali (y = 0,5ȳ) jieħu piż ta' (1/0,5)^1,3 = 2^1,3 ≈ 2,46 — kull lira ta' benefiċċju lil dak il-grupp tgħodd bħala li tiswa madwar 2,46 darbiet lira lil familja b'dħul medju.

## Eżempju prattiku

**Żewġ programmi lokali li jikkompetu**, kull wieħed b'benefiċċju nett mhux ippeżat ta' £2 miljun/sena, li jikkompetu għall-istess fond reġjonali tat-tkabbir:

- *Programm A*: skema ta' appoġġ għan-negozji f'belt prospera, dħul medju tal-familja £45 000 (madwar 1,3× il-medja nazzjonali assunta ta' £35 000).
- *Programm B*: programm ta' ħiliet f'ward deprivat, dħul medju tal-familja £18 000 (madwar 0,51× il-medja nazzjonali).

```
Piż(A) = (35 000 / 45 000)^1,3 = (0,778)^1,3 ≈ 0,72
Piż(B) = (35 000 / 18 000)^1,3 = (1,944)^1,3 ≈ 2,53

Benefiċċju ppeżat A = £2 000 000 × 0,72 = £1,44 miljun
Benefiċċju ppeżat B = £2 000 000 × 2,53 = £5,06 miljun
```

Mhux ippeżati, iż-żewġ programmi huma ndaqs. Ippeżati għall-impatt distributtiv, il-benefiċċju tal-Programm B huwa aktar minn tliet darbiet akbar — riżultat li jiwassal biex tinqaleb ir-rakkomandazzjoni tal-finanzjament u jirrifletti l-iskop espliċitu tal-Green Book meta jeħtieġ li l-ponderazzjoni tintwera, mhux biss il-proporzjon mhux ippeżat tal-benefiċċju mal-ispiża.

**Allokazzjoni ta' għotja ta' karità**: finanzjatur li jqabbel għotja ta' £500 000 li tilħaq 1 000 familja b'dħul baxx (piż ≈ 2,0, valur ippeżat ekwivalenti għal £1 miljun) ma' l-istess £500 000 li jilħqu 1 000 familja b'dħul medju (piż ≈ 1,0, valur ippeżat ekwivalenti għal £500 000) għandu juri l-każ distributtiv b'mod espliċitu fid-dokument tal-bord tiegħu, mhux iħallih biex jiġi dedott.

## Rabta mal-inġinerija tas-software

Il-ponderazzjoni distributtiva rari tidher direttament fil-metriċi tal-forniment tas-softwer, imma għandha tiffurmaw kif it-timijiet tal-inġinerija u tad-dejta jfasslu l-kejl u t-targeting:

- Meta tibni dashboard ta' impatt jew kalkulatur tal-benefiċċji, esponi l-profil tad-dħul jew tad-deprivazzjoni ta' min huwa affettwat, mhux biss it-total aggregat tal-benefiċċju — ċifri aggregati mingħajr tqassim distributtiv jaħbu eżattament l-inverżjoni murija hawn fuq.
- Orbot il-loġika tat-targeting fid-disinn tas-servizz mal-istess dejta ta' deprivazzjoni li juża l-Green Book — ara [l-Indiċi tad-Deprivazzjoni Multipla](../indiċi-tad-deprivazzjoni-multipla/) — sabiex il-ħarsa tas-servizz diġitali tkun tista' tiġi vvalutata għall-ekwità, mhux biss għall-effiċjenza (l-E raba' kontestata fil-[valur għall-flus](../valur-għall-flus/)).
- Meta algoritmu jalloka riżorsa skarsa (slots ta' appuntament, ħin tal-każisti, sussidju), funzjoni objettiv mhux ippeżata ta' "massimizza l-benefiċċju totali" se tirriproduċi, bid-disinn, l-istess preġudizzju li l-ponderazzjoni tal-Green Book teżisti biex tikkoreġi — ifjaġġja dan b'mod espliċitu lis-sidien tal-politika qabel ma toptimizza.

## Żbalji komuni

- **Il-piżijiet distributtivi jiġu applikati b'mod inkonsistenti madwar portafoll.** Jekk tippeża l-benefiċċji ta' programm wieħed imma mhux tal-komparatur tiegħu tkun qed tagħmel tqabbil preġudikat, mhux aktar ġust; il-Green Book jeżiġi trattament bħal ma' bħal.
- **Jintużaw il-valuri tal-proprjetà jew tas-suq bħala proxy għall-benessri mingħajr aġġustament.** Il-prezzijiet tas-suq huma nfushom distorti mill-inugwaljanza eżistenti fid-dħul, li eżattament hija dak li l-ponderazzjoni distributtiva hija maħsuba li tikkoreġi — l-użu ta' valuri tas-suq mhux aġġustati jista' jgħodd darbtejn il-preġudizzju.
- **Titħalla barra l-varjazzjoni ġewwa l-grupp.** Il-ponderazzjoni skont id-dħul medju taż-żona (eż. deċil tal-Indiċi tad-Deprivazzjoni Multipla) tista' tirrappreżenta ħażin individwi li ma jaqblux mal-medja taż-żona tagħhom; uża d-dejta tad-dħul bl-iżgħar dettall li jkun raġonevolment disponibbli.
- **L-elastiċità ta' 1,3 titqies bħala kostanti universali.** Il-Green Book innifsu jinnota li din hija stima b'firxa plawżibbli; ittestja s-sensittività tad-deċiżjonijiet kbar kontra elastiċitajiet alternattivi minflok ma tittratta 1,3 bħala eżatta.

## Sorsi

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation", u
  gwida supplimentari dwar l-impatti distributtivi (edizzjoni tal-2022).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury, "Green Book Review 2020: Findings and Response" (li twieġeb għall-kritika dwar preġudizzju reġjonali).
  <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>
- Fujiwara D, Campbell R. "Valuation Techniques for Social Cost-Benefit Analysis." HM Treasury/DWP,
  2011 (sfond dwar l-istimi tal-elastiċità tal-utilità marġinali tad-dħul).
