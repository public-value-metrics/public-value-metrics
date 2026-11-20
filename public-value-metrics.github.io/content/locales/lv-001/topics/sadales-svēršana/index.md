# Sadales svēršana

Sadales svēršana (distributional weighting) pielāgo izmaksu vai ieguvuma naudas vērtību atkarībā no tā, kas to saņem, pamatojoties uz principu, ka papildu mārciņa ir vērtīgāka nabadzīgai nekā bagātai mājsaimniecībai. HM Treasury Green Book (Zaļā grāmata) piedāvā skaidru šīs svēršanas piemērošanas metodi, kas balstīta uz ienākumu izteikti sarūkošo robežderīgumu, lai novērtējumi klusējot neuzskatītu mārciņu, ko ieguvis bagātākais decilis, par līdzvērtīgu mārciņai, ko ieguvis nabadzīgākais.

## Kāpēc tas ir svarīgi

Standarta izmaksu un ieguvumu analīze summē mārciņas, nejautājot, kam tās pieder, un tādējādi netieši pieņem, ka mārciņa visiem ir vienādi vērtīga — pieņēmums, par kuru ekonomisti jau sen zina, ka tas ir aplams. Mājsaimniecība, kas pelna £15 000 gadā, piedzīvo £1 000 ieguvumu pavisam citādi nekā mājsaimniecība, kas pelna £150 000 gadā, jo ienākumu robežderīgums krītas, ienākumiem pieaugot. Ja svēršanu nepiemēro, standarta novērtējums sistemātiski dod priekšroku iejaukšanās pasākumiem, kas nāk par labu turīgākām, jau labāk situētām grupām, jo to augstākā pirktspēja uzpūš tām sasniedzamo ieguvumu naudas vērtējumu (parka uzlabojums pie dārgiem mājokļiem “uzrāda” lielāku īpašuma vērtības ieguvumu nekā tāds pats uzlabojums pie lētiem mājokļiem tikai tāpēc, ka cenas ir augstākas, nevis tāpēc, ka labklājības ieguvums ir lielāks).

Green Book papildu vadlīnijas par sadales analīzi, kas pastiprinātas pēc Treasury 2020. gada pārskata, atbildot uz kritiku, ka novērtēšanas metodoloģija sistemātiski bija labvēlīga Londonai un dienvidaustrumiem, nosaka formālu svēršanas pieeju, kuras pamatā ir pieņemta ienākumu robežderīguma elastība aptuveni 1,3 — tas nozīmē, ka ienākumu dubultošanās aptuveni uz pusi samazina papildu mārciņas robežvērtību (precīzāk, 2^-1,3 ≈ 0,41 reizes). Tā nav noapaļošanas korekcija: tās piemērošana var mainīt, kurai no divām konkurējošām programmām ir augstāka tīrā pašreizējā vērtība, īpaši, salīdzinot nabadzīgā apvidū koncentrētu iejaukšanos ar tādu, kas izkliedēta pa visu iedzīvotāju kopumu.

## Matemātika

Green Book sadales svars mārciņai ieguvuma, kas pienākas mājsaimniecībai ar ienākumu līmeni y, attiecībā pret mārciņu pie valsts vidējā ienākumu līmeņa ȳ:

```
Svars(y) = (ȳ / y)^e

kur:
  y  = mājsaimniecības ienākumi (vai skartās grupas ienākumi)
  ȳ  = vidējie (atskaites) mājsaimniecības ienākumi
  e  = ienākumu robežderīguma elastība (Green Book: aptuveni 1,3)
```

Svaru piemērošana neto ieguvumiem:

```
Svērtais ieguvums = Σ [nesvērtais ieguvums grupai i × Svars(y_i)]
```

Grupa, kas pelna pusi no valsts vidējā (y = 0,5ȳ), saņem svaru (1/0,5)^1,3 = 2^1,3 ≈ 2,46 — katra ieguvuma mārciņa šai grupai tiek skaitīta kā aptuveni 2,46 reizes vērtīgāka par mārciņu vidēju ienākumu mājsaimniecībai.

## Aprēķina piemērs

**Divas konkurējošas vietējās programmas**, katrai nesvērtais neto ieguvums £2 miljoni gadā, kas konkurē par vienu un to pašu reģionālās izaugsmes fondu:

- *A programma*: uzņēmumu atbalsta shēma pārtikušā pilsētā, vidējie mājsaimniecības ienākumi £45 000 (aptuveni 1,3 reizes virs pieņemtā valsts vidējā £35 000).
- *B programma*: prasmju programma nabadzīgā pagastā, vidējie mājsaimniecības ienākumi £18 000 (aptuveni 0,51 no valsts vidējā).

```
Svars(A) = (35 000 / 45 000)^1,3 = (0,778)^1,3 ≈ 0,72
Svars(B) = (35 000 / 18 000)^1,3 = (1,944)^1,3 ≈ 2,53

Svērtais ieguvums A = £2 000 000 × 0,72 = £1,44 miljoni
Svērtais ieguvums B = £2 000 000 × 2,53 = £5,06 miljoni
```

Nesvērtas programmas ir vienādas. Ar sadales ietekmes svēršanu B programmas ieguvums ir vairāk nekā trīs reizes lielāks — rezultāts, kas apgriež finansēšanas ieteikumu un atspoguļo Green Book skaidro mērķi, pieprasot parādīt svēršanu, nevis tikai nesvērto ieguvumu un izmaksu attiecību.

**Labdarības grantu sadale**: finansētājam, kas salīdzina £500 000 grantu, kas sasniedz 1 000 zemu ienākumu mājsaimniecību (svars ≈ 2,0, svērtā vērtība £1 miljona ekvivalents), ar tādu pašu £500 000, kas sasniedz 1 000 vidēju ienākumu mājsaimniecību (svars ≈ 1,0, svērtā vērtība £500 000 ekvivalents), sadales pamatojums skaidri jāparāda valdes dokumentā, nevis jāatstāj izsecināšanai.

## Saikne ar programmatūras inženieriju

Sadales svēršana reti parādās tieši programmatūras piegādes rādītājos, taču tai jānosaka, kā inženieru un datu komandas veido mērīšanu un mērķēšanu:

- Veidojot ietekmes informācijas paneli vai ieguvumu kalkulatoru, parādiet skarto cilvēku ienākumu vai nelabvēlības profilu, nevis tikai kopējo ieguvumu — apkopoti skaitļi bez sadalījuma slēpj tieši iepriekš parādīto apgriezienu.
- Saistiet mērķēšanas loģiku pakalpojuma dizainā ar tiem pašiem nelabvēlības datiem, ko izmanto Green Book — skatiet [Daudzkārtējās nelabvēlības indekss](../daudzkārtējās-nelabvēlības-indekss/) —, lai digitālā pakalpojuma sasniedzamību varētu vērtēt no taisnīguma, nevis tikai efektivitātes viedokļa (apstrīdētais ceturtais E [vērtībā par naudu](../vērtība-par-naudu/)).
- Ja algoritms sadala nepietiekamu resursu (pieņemšanas laikus, lietu vadītāja laiku, subsīdiju), nesvērta “maksimizēt kopējo ieguvumu” mērķfunkcija pēc konstrukcijas atražos to pašu aizspriedumu, ko Green Book svēršana ir paredzēta labot — skaidri norādiet to politikas īpašniekiem pirms optimizēšanas.

## Biežākās kļūdas

- **Sadales svaru nekonsekventa piemērošana portfelī.** Vienas programmas ieguvumu svēršana, bet tās salīdzināmās programmas nesvēršana dod šķību, nevis taisnīgāku salīdzinājumu; Green Book prasa vienādu attieksmi.
- **Īpašuma vai tirgus vērtību izmantošana kā labklājības aizstājēja bez korekcijas.** Pašas tirgus cenas ir izkropļotas ar esošo ienākumu nevienlīdzību, ko sadales svēršana tieši ir paredzēta labot — nekoriģētu tirgus vērtību izmantošana var divkārt ieskaitīt šo aizspriedumu.
- **Variācijas grupas iekšienē ignorēšana.** Svēršana pēc apgabala vidējiem ienākumiem (piemēram, Daudzkārtējās nelabvēlības indeksa decilis) var sagrozīt to indivīdu situāciju, kas neatbilst sava apgabala vidējam; izmantojiet vispārīgāko saprātīgi pieejamo ienākumu datu detalizāciju.
- **1,3 elastības uzskatīšana par universālu konstanti.** Pati Green Book norāda, ka tā ir aplēse ar ticamu diapazonu; lielus lēmumus pārbaudiet jutīguma analīzē pret alternatīvām elastībām, nevis uzskatiet 1,3 par precīzu.

## Avoti

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation", and
  supplementary guidance on distributional impacts (2022 edition).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury, "Green Book Review 2020: Findings and Response" (addressing regional-bias criticism).
  <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>
- Fujiwara D, Campbell R. "Valuation Techniques for Social Cost-Benefit Analysis." HM Treasury/DWP,
  2011 (background on marginal utility of income elasticity estimates).
