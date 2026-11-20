# Auna Rabon Fa'ida bisa Matsayin Mutane

Auna rabon fa'ida bisa matsayin mutane (distributional weighting) tana daidaita ƙimar kuɗi ta kuɗin da aka kashe ko fa'idar da aka samu bisa ga wanda ya karɓe ta, bisa ƙa'idar cewa ƙarin fam ɗaya yana da daraja ga gidan talaka fiye da na mawadaci. Green Book na HM Treasury yana ba da wata hanya bayyananniya ta amfani da wannan awo, wadda aka gina a kan raguwar amfanin ƙarshe na samun kuɗi, domin kimantawa kada su ɗauki fam ɗaya da mafi arzikin ɓangare goma na jama'a (decile) suka samu a matsayin daidai da fam ɗaya da mafi talaucin suka samu ba tare da an lura ba.

## Dalilin da ya sa yake da muhimmanci

Daidaitaccen nazarin fa'ida da kuɗi yana jimillar fam ba tare da tambayar fam ɗin na wane ne ba, wanda a bayyane yake ɗauka cewa fam yana da daraja ɗaya ga kowa — zato da masana tattalin arziki suka daɗe suna sani ba gaskiya ba ne. Gidan da ke samun £15,000/shekara yana jin ƙarin £1,000 daban da gidan da ke samun £150,000/shekara, domin amfanin ƙarshe na samun kuɗi yana raguwa yayin da kuɗin shiga ke ƙaruwa. Idan ba a auna ba, daidaitaccen kimantawa yana fifita shiga tsakani masu amfanar da ƙungiyoyi masu arziki, waɗanda tuni suke da kyau, ta tsari, domin ƙarfin kashe kuɗinsu mafi girma yana ƙara ƙimar kuɗi ta fa'idodin da ke isa gare su (gyaran wurin shakatawa kusa da gidaje masu tsada yana "nuna" fa'idar darajar kadara mafi girma fiye da gyara iri ɗaya kusa da gidaje masu arha, saboda farashi ne ya fi girma kawai, ba don ribar jin daɗi ta fi girma ba).

Jagorar ƙari ta Green Book kan nazarin rabon fa'ida, wadda aka ƙarfafa bayan bitar Treasury ta 2020 ta mayar da martani ga suka cewa hanyar kimantawa ta fifita London da Kudu maso Gabas ta tsari, tana shimfiɗa wata hanyar auna ta ƙa'ida bisa zaton ƙwanƙwasar amfanin ƙarshe na samun kuɗi (elasticity) ta kusan 1.3 — wato ninka kuɗin shiga yana rage ƙimar ƙarin fam ɗaya zuwa kusan rabi (musamman, 2^-1.3 ≈ sau 0.41). Wannan ba gyaran zagaye ba ne: amfani da shi na iya canza ko wanne shiri cikin biyu masu gasa ya nuna mafi girman ƙimar yanzu ta riba (net present value), musamman lokacin kwatanta shiga tsakani da aka mayar da hankali a yankin talauci da wanda aka watsa a tsakanin yawan jama'a gabaɗaya.

## Lissafi

Nauyin rabo na Green Book ga fam ɗaya na fa'ida da ke tafiya ga gida a matakin kuɗin shiga y, idan aka kwatanta da fam ɗaya a matakin matsakaicin kuɗin shiga na ƙasa ȳ:

```
Weight(y) = (ȳ / y)^e

where:
  y  = household income (or income of the affected group)
  ȳ  = average (reference) household income
  e  = elasticity of marginal utility of income (Green Book: approximately 1.3)
```

Amfani da nauyi ga ribar fa'ida:

```
Weighted benefit = Σ [unweighted benefit to group i × Weight(y_i)]
```

Ƙungiyar da ke samun rabin matsakaicin na ƙasa (y = 0.5ȳ) tana samun nauyi na (1/0.5)^1.3 = 2^1.3 ≈ 2.46 — kowane fam na fa'ida ga wannan ƙungiya yana ƙidayuwa a matsayin kusan sau 2.46 na fam ɗaya ga gida mai matsakaicin kuɗin shiga.

## Misali aiki

**Shirye-shiryen gida biyu masu gasa**, kowanne da ribar fa'ida da ba a auna ba ta £2 million/shekara, suna gasa kan asusun haɓaka yanki ɗaya:

- *Shiri A*: tsarin tallafin kasuwanci a gari mai wadata, matsakaicin kuɗin shigar gida £45,000 (kusan sau 1.3 na matsakaicin ƙasa da aka zata na £35,000).
- *Shiri B*: shirin ƙwarewa a unguwa mai talauci, matsakaicin kuɗin shigar gida £18,000 (kusan sau 0.51 na matsakaicin ƙasa).

```
Weight(A) = (35,000 / 45,000)^1.3 = (0.778)^1.3 ≈ 0.72
Weight(B) = (35,000 / 18,000)^1.3 = (1.944)^1.3 ≈ 2.53

Weighted benefit A = £2,000,000 × 0.72 = £1.44 million
Weighted benefit B = £2,000,000 × 2.53 = £5.06 million
```

Ba tare da auna ba, shirye-shiryen biyu daidai suke. Idan aka auna su don tasirin rabo, fa'idar Shiri B ta fi ta A girma fiye da sau uku — sakamakon da ke juya shawarar bayar da kuɗi kuma yana nuna ainihin manufar Green Book na buƙatar nuna aunawar, ba kawai ma'aunin fa'ida-da-kuɗi mara awo ba.

**Rarraba tallafin ƙungiyar agaji**: mai ba da kuɗi da ke kwatanta tallafin £500,000 da ke isa ga gidaje 1,000 masu ƙarancin kuɗin shiga (nauyi ≈ 2.0, ƙimar da aka auna ta daidai da £1 million) da £500,000 iri ɗaya da ke isa ga gidaje 1,000 masu matsakaicin kuɗin shiga (nauyi ≈ 1.0, ƙimar da aka auna ta daidai da £500,000) ya kamata ya nuna hujjar rabo a fili a takardar kwamitin gudanarwarsa, ba ya bar ta ta zama abin da za a fahimta kawai ba.

## Alaƙa da injiniyancin manhaja

Auna rabon fa'ida da wuya ya bayyana kai tsaye a ma'aunin isar da manhaja, amma ya kamata ya tsara yadda ƙungiyoyin injiniya da bayanai ke tsara aunawa da zaɓar masu amfana:

- Lokacin gina allon tasiri ko na'urar lissafin fa'ida, nuna bayanin kuɗin shiga ko talauci na waɗanda abin ya shafa, ba jimillar fa'ida kaɗai ba — jimillar lambobi ba tare da rarrabuwar rabo ba suna ɓoye daidai juyawar da aka nuna a sama.
- Haɗa dabarar zaɓar masu amfana a ƙirar hidima da bayanan talauci iri ɗaya da Green Book ke amfani da su — duba [Ma'aunin Talauci Mai Fuskoki Da Dama](../maaunin-talauci-mai-fuskoki-da-dama-na-ingila/) — domin a iya tantance isar hidimar dijital don adalci, ba don inganci kaɗai ba (E ta huɗu mai cece-kuce a [ƙimar kuɗi](../ƙimar-da-aka-samu-daidai-da-kuɗi/)).
- Lokacin da algorithm ke rarraba wani abu mai ƙaranci (lokutan alƙawari, lokacin ma'aikacin shari'a, tallafi), manufar "ƙara jimillar fa'ida zuwa mafi girma" da ba a auna ba za ta, ta hanyar ginanta, sake haifar da ɓangarancin da auna Green Book ya wanzu don gyarawa — nuna wannan a fili ga masu mallakar manufofi kafin a inganta.

## Tarkuna

- **Yin amfani da nauyin rabo ba daidai ba a faɗin jerin shirye-shirye.** Auna fa'idodin shiri ɗaya amma ba na abokin gasar sa ba yana haifar da kwatance mai ɓangaranci, ba mai adalci ba; Green Book yana buƙatar kulawa iri ɗaya.
- **Amfani da ƙimar kadara ko kasuwa a matsayin wakili na jin daɗi ba tare da gyara ba.** Farashin kasuwa da kansu rashin daidaiton kuɗin shiga na yanzu ya gurɓata su, wanda shi ne ainihin abin da auna rabon fa'ida aka nufa ya gyara — amfani da ƙimar kasuwa marasa gyara na iya ƙidaya ɓangarancin sau biyu.
- **Watsi da bambanci a cikin ƙungiya.** Auna bisa matsakaicin kuɗin shiga na yanki (misali decile na Index of Multiple Deprivation) na iya bayyana mutane da ba su dace da matsakaicin yankinsu ba ba daidai ba; yi amfani da bayanan kuɗin shiga mafi cikakken bayani da za a iya samu da hankali.
- **Ɗaukar ƙwanƙwasar 1.3 a matsayin madawwamin ƙima.** Green Book da kansa ya lura cewa ƙiyasi ne mai iyakar yiwuwa; gwada muhimman shawarwari da wasu ƙwanƙwasai dabam maimakon ɗaukar 1.3 a matsayin daidai.

## Majiyoyi

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation", and
  supplementary guidance on distributional impacts (2022 edition).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury, "Green Book Review 2020: Findings and Response" (addressing regional-bias criticism).
  <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>
- Fujiwara D, Campbell R. "Valuation Techniques for Social Cost-Benefit Analysis." HM Treasury/DWP,
  2011 (background on marginal utility of income elasticity estimates).
