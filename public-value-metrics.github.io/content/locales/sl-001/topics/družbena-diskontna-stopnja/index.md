# Družbena diskontna stopnja

Družbena diskontna stopnja pretvori prihodnje stroške in koristi v današnje vrednosti, tako da je mogoče programe z donosi, razporejenimi čez desetletja, primerjati na skupni podlagi. Green Book HM Treasury predpisuje padajoč razpored, zasidran pri 3,5 % za prvih 30 let, ki temelji na Ramseyjevi formuli – konkretno, navedljivo število, ki je postalo živ politični in etični spor, kadar se uporabi za dolgoročne zaveze, kot sta podnebna politika ali infrastruktura.

## Zakaj je pomembno

Funt koristi, prejet čez 30 let, ni vreden funta koristi, prejetega danes, deloma zaradi čiste časovne preference (ljudje in družbe imajo raje dobre stvari prej), deloma zaradi rasti (pričakuje se, da bo prihodnja družba bogatejša, zato ji je funt na robu manj pomemben). Priloga 6 Green Book izpelje standardno britansko diskontno stopnjo iz Ramseyjeve formule, ki združuje stopnjo čiste časovne preference s pričakovano stopnjo rasti potrošnje in elastičnostjo mejne koristnosti potrošnje, kar da objavljeno stopnjo 3,5 % na leto za leta 0–30, ki v objavljenem razporedu pada za leta 31 in naprej (do 1 % za leta 301+). Ta razpored obstaja prav zato, ker bi stalnih 3,5 %, obrestnoobrestovanih čez stoletje, skoraj vsako dolgoročno korist – protipoplavno zaščito, ki rešuje življenja čez 80 let, zmanjšanje ogljika, ki prepreči škodo čez 100 let – naredilo zanemarljivo v sedanji vrednosti, kar je Treasury presodil za neverjeten etični sklep pri resnično dolgoživi infrastrukturi in okoljskih odločitvah.

Diskontna stopnja je sporna ravno zato, ker izbira ni nevtralen tehnični parameter: zapisuje presojo o tem, koliko naj družba danes žrtvuje za ljudi, ki se še niso rodili. Stern Review o ekonomiki podnebnih sprememb (2006) je uporabil diskontno stopnjo blizu nič (čista časovna preferenca okoli 0,1 %) in trdil, da je diskontiranje blaginje prihodnjih generacij po čemer koli podobnem tržnim stopnjam etično neobranljivo, kadar je škoda (katastrofalne podnebne spremembe) nepopravljiva. Kritiki – zlasti William Nordhaus – so trdili, da je Sternova skoraj ničelna stopnja preveč poudarila potrebo po takojšnji podnebni porabi, saj naredi skoraj vsak sedanji strošek upravičen proti komaj diskontirani prihodnji koristi. Nesoglasje ni bilo o matematiki, temveč o tem, čigav etični okvir naj določi stopnjo, in ostaja standardni zgled, zakaj je diskontna stopnja politična odločitev, ne le aktuarski vložek.

## Matematika

Ramseyjeva formula, na kateri temelji stopnja Green Book:

```
r = ρ + η·g

kjer je:
  r = družbena diskontna stopnja
  ρ = stopnja čiste časovne preference (nestrpnost + tveganje katastrofe)
  η = elastičnost mejne koristnosti potrošnje
  g = pričakovana letna stopnja rasti potrošnje na prebivalca
```

Padajoči razpored Green Book (Priloga 6, ilustrativno – točno objavljeno tabelo preverite v trenutni izdaji):

```
Leta 0–30:     3,5 %
Leta 31–75:    3,0 %
Leta 76–125:   2,5 %
Leta 126–200:  2,0 %
Leta 201–300:  1,5 %
Leta 301+:     1,0 %
```

Sedanja vrednost prihodnje vsote:

```
PV = FV / (1 + r)^t
```

## Praktični primer

**Načrt protipoplavne zaščite**: projekt prinese £10 milijonov preprečene poplavne škode v letu 40.

Pri enotni stopnji 3,5 %: PV = 10 000 000 / (1,035)^40 ≈ £2,52 milijona – korist je videti majhna.

Po padajočem razporedu Green Book (3,5 % za leta 0–30, nato 3,0 %) se izračun obrestnoobrestuje s 3,5 % prvih 30 let in s 3,0 % za leta 31–40:

```
PV = 10 000 000 / [(1,035)^30 × (1,03)^10]
   = 10 000 000 / [2,807 × 1,344]
   ≈ 10 000 000 / 3,773
   ≈ £2,65 milijona
```

Padajoči razpored zmerno poveča sedanjo vrednost dolgoročnih koristi glede na enotno visoko stopnjo – kar je izrecni namen razporeda, saj bi enotnih 3,5 % čez stoletje korist £100 milijonov v letu 100 diskontiralo na manj kot £3,3 milijona.

**Digitalna infrastruktura**: selitev vlade v oblak, ki zdaj stane £4 milijone, naj bi 15 let preprečila £500 000/leto stroškov vzdrževanja stare opreme. Pri 3,5 % je sedanja vrednost te rente približno £500 000 × 11,52 (15-letni rentni faktor pri 3,5 %) ≈ £5,76 milijona – udobno nad stroškom £4 milijone, pozitiven primer neto sedanje vrednosti, ki bi bil pri naivno izbrani višji stopnji bistveno šibkejši (pri 7 % rentni faktor pade na okoli 9,11, kar da £4,56 milijona, še vedno pozitivno, a z mnogo tanjšo maržo).

## Povezava s programskim inženirstvom

Večina poslovnih primerov programske opreme teče 3–5 let, dobro znotraj enotnega pasu 3,5 %, zato padajoči razpored redko neposredno vpliva – a osnovna disciplina je pomembna pri vsaki vladni tehnološki naložbi z dolgo življenjsko dobo sredstva (nacionalna platforma, program podatkovne infrastrukture, večdesetletna pogodba):

- Uporabite objavljeno stopnjo Green Book in ne notranje »mejne stopnje«, izposojene iz zasebnih financ; revizorji in pregledovalci Treasury bodo pričakovali standardni razpored.
- Pri koristih, uresničenih mnogo let pozneje (dolgoročni prihranki vzdrževanja platforme, naraščajoča vrednost ekosistema odprtih podatkov – glej [vrednost odprtih podatkov](../vrednost-odprtih-podatkov/)), lahko izbira diskontiranja poslovni primer obrne iz pozitivnega v negativnega; stopnjo in horizont naredite izrecni predpostavki, ne skrite privzete vrednosti.
- To neposredno napaja [oceno po Green Book](../ocena-po-green-booku/), model petih primerov, ki formalno zahteva diskontirani denarni tok, in [vrednotenje blaginje](../vrednotenje-blaginje/), kjer se isto vprašanje diskontiranja pojavi pri nedenarnih koristih blaginje.
- Glej tudi [medgeneracijska pravičnost in diskontiranje trajnosti](../medgeneracijska-pravičnost-in-diskontiranje-trajnosti/) za spor Stern proti Nordhausu, uporabljen posebej na okoljske in podnebne tehnološke naložbe.

## Pasti

- **Uporaba enotne stopnje za zelo dolge horizonte.** Padajoči razpored Green Book obstaja prav zato, ker stalna stopnja podceni resnično dolgoživeče koristi; preverite, kateri pas velja, namesto da povsod privzamete 3,5 %.
- **Obravnavanje diskontne stopnje kot etično nevtralne.** Spor Stern–Nordhaus kaže, da stopnja zapisuje vrednostno presojo o prihodnjih generacijah; njena sprememba spremeni, kateri programi se zdijo upravičeni, zato jo je treba navesti in zagovarjati, ne skriti v privzeti vrednosti preglednice.
- **Zamenjava družbene diskontne stopnje z zasebnim stroškom kapitala.** Vladni stroški izposojanja in zasebne mejne stopnje so drugačna pojma od družbene stopnje, izpeljane iz Ramseyja, in zamenjava enega z drugim v javni oceni bo rezultat običajno popačila v smeri naklonjenosti kratkoročnim donosom.
- **Nedosledno diskontiranje realnih in nominalnih denarnih tokov.** Stopnja Green Book je realna (inflacijsko prilagojena) stopnja; diskontiranje nominalnih denarnih tokov z njo bistveno podceni sedanje vrednosti.

## Viri

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation", Annex 6
  (2022). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Stern N. "The Economics of Climate Change: The Stern Review." HM Treasury, 2006.
- Nordhaus WD. "A Review of the Stern Review on the Economics of Climate Change." Journal of
  Economic Literature, 2007;45(3):686–702.
- Ramsey FP. "A Mathematical Theory of Saving." Economic Journal, 1928;38(152):543–559.
