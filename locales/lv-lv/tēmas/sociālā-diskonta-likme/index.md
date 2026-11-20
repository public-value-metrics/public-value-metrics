# Sociālā diskonta likme

Sociālā diskonta likme pārvērš nākotnes izmaksas un ieguvumus šodienas vērtībās, lai programmas, kuru atdeve ir izkliedēta desmitgadēs, varētu salīdzināt uz kopīga pamata. HM Treasury Green Book paredz dilstošu grafiku ar 3,5 % kā atskaites punktu pirmajiem 30 gadiem, balstoties uz Remzija formulu — konkrēts, citējams skaitlis, kas kļuvis par dzīvu politisku un ētisku strīdu ikreiz, kad to piemēro ilga horizonta saistībām, piemēram, klimata politikai vai infrastruktūrai.

## Kāpēc tas ir svarīgi

Ieguvuma mārciņa, kas saņemta pēc 30 gadiem, nav vērta tikpat, cik ieguvuma mārciņa, kas saņemta šodien — daļēji tīras laika preferences dēļ (cilvēki un sabiedrības labāk vēlas labas lietas ātrāk) un daļēji izaugsmes dēļ (nākotnes sabiedrība, domājams, būs bagātāka, tāpēc mārciņa tai uz robežas nozīmē mazāk). Green Book 6. pielikums atvasina Apvienotās Karalistes standarta diskonta likmi no Remzija formulas, apvienojot tīras laika preferences likmi ar paredzamo patēriņa izaugsmes tempu un patēriņa robežderīguma elastību; rezultāts ir publicētā likme 3,5 % gadā 0.–30. gadam, kas turpmāk pazeminās publicētā grafikā 31. gadam un tālāk (līdz 1 % no 301. gada). Šis grafiks pastāv tieši tāpēc, ka nemainīgi 3,5 %, kas salikti simt gadu garumā, padarītu gandrīz jebkuru ilga horizonta ieguvumu — plūdu aizsardzību, kas glābj dzīvības pēc 80 gadiem, oglekļa samazinājumu, kas novērš kaitējumu pēc 100 gadiem — tagadnes vērtībā niecīgu, ko Finanšu ministrija uzskatīja par neticamu ētisku secinājumu patiesi ilgmūžīgiem infrastruktūras un vides lēmumiem.

Diskonta likme ir strīdīga tieši tāpēc, ka izvēle nav neitrāls tehnisks parametrs: tā kodē spriedumu par to, cik daudz sabiedrībai vajadzētu upurēt šodien tiem, kas vēl nav dzimuši. Sterna pārskats par klimata pārmaiņu ekonomiku (2006) izmantoja diskonta likmi, kas ir tuvu nullei (tīra laika preference ap 0,1 %), argumentējot, ka nākamo paaudžu labklājības diskontēšana ar jebkādām tirgum tuvām likmēm ir ētiski neaizstāvama, ja kaitējums (katastrofālas klimata pārmaiņas) ir neatgriezenisks. Kritiķi — īpaši Viljams Nordhauss (William Nordhaus) — apgalvoja, ka Sterna gandrīz nulles likme pārspīlēja pamatojumu tūlītējiem klimata izdevumiem, jo pret gandrīz nediskontētu nākotnes ieguvumu gandrīz jebkura tagadnes izmaksa šķiet attaisnota. Domstarpības nebija par matemātiku, bet par to, kura ētiskā sistēma lai nosaka likmi, un tā joprojām ir standarta ilustrācija tam, kāpēc diskonta likme ir politikas izvēle, nevis tikai aktuāra ievaddati.

## Matemātika

Remzija formula, kas ir Green Book likmes pamatā:

```
r = ρ + η·g

kur:
  r = sociālā diskonta likme
  ρ = tīras laika preferences likme (nepacietība + katastrofas risks)
  η = patēriņa robežderīguma elastība
  g = paredzamais iedzīvotāja patēriņa gada pieauguma temps
```

Green Book dilstošais grafiks (6. pielikums, ilustratīvi — precīzo publicēto tabulu pārbaudiet pēdējā izdevumā):

```
0.–30. gads:    3,5 %
31.–75. gads:   3,0 %
76.–125. gads:  2,5 %
126.–200. gads: 2,0 %
201.–300. gads: 1,5 %
301. gads un tālāk: 1,0 %
```

Nākotnes summas tagadnes vērtība:

```
PV = FV / (1 + r)^t
```

## Aprēķina piemērs

**Plūdu aizsardzības shēma**: projekts 40. gadā nodrošina £10 miljonu novērstu plūdu zaudējumu.

Ar fiksētu 3,5 % likmi: PV = 10 000 000 / (1,035)^40 ≈ £2,52 miljoni — ieguvums šķiet mazs.

Ar Green Book dilstošo grafiku (3,5 % 0.–30. gadam, pēc tam 3,0 %) aprēķins pirmos 30 gadus salikts ar 3,5 %, bet 31.–40. gadu ar 3,0 %:

```
PV = 10 000 000 / [(1,035)^30 × (1,03)^10]
   = 10 000 000 / [2,807 × 1,344]
   ≈ 10 000 000 / 3,773
   ≈ £2,65 miljoni
```

Dilstošais grafiks mēreni paaugstina ilga horizonta ieguvumu tagadnes vērtību salīdzinājumā ar fiksētu augstu likmi — tas ir grafika tiešais mērķis, jo fiksēti 3,5 % simt gadu garumā £100 miljonu ieguvumu 100. gadā diskontētu līdz mazāk nekā £3,3 miljoniem.

**Digitālā infrastruktūra**: valdības mākoņa migrācija, kas tagad izmaksā £4 miljonus, paredzami 15 gadus novērsīs £500 000 gadā mantotās sistēmas uzturēšanas izmaksu. Pie 3,5 % šīs rentes tagadnes vērtība ir aptuveni £500 000 × 11,52 (15 gadu rentes faktors pie 3,5 %) ≈ £5,76 miljoni — droši pārsniedzot £4 miljonu izmaksas, pozitīvs neto tagadnes vērtības gadījums, kas izskatītos manāmi vājāks pie naivi izvēlētas augstākas likmes (pie 7 % tas pats rentes faktors krītas līdz aptuveni 9,11, dodot £4,56 miljonus — joprojām pozitīvi, bet ar daudz šaurāku rezervi).

## Saikne ar programmatūras inženieriju

Lielākā daļa programmatūras biznesa gadījumu aptver 3–5 gadus, kas ir pilnībā fiksētās 3,5 % joslas robežās, tāpēc dilstošais grafiks reti tieši ietekmē; tomēr pamatā esošā disciplīna ir svarīga jebkuram valsts tehnoloģiju ieguldījumam ar ilgu aktīva mūžu (valsts platforma, datu infrastruktūras programma, vairāku desmitgažu līgums):

- Lietojiet Green Book publicēto likmi, nevis iekšēju „barjeras likmi", aizgūtu no privātajām finansēm; revidenti un Finanšu ministrijas pārskatītāji gaidīs standarta grafiku.
- Ieguvumiem, kas realizējas daudzus gadus vēlāk (platformas ilgtermiņa uzturēšanas ietaupījumi, atvērto datu ekosistēmas saliktā vērtība — skatiet [atvērto datu vērtība](../atvērto-datu-vērtība/)), diskontēšanas izvēle var pārvērst biznesa gadījumu no pozitīva uz negatīvu; likmi un horizontu norādiet kā skaidrus pieņēmumus, nevis paslēptas noklusējuma vērtības.
- Tas tieši ietekmē [Green Book novērtējumu](../green-book-novērtējums/), piecu gadījumu modeli, kas formāli prasa diskontētu naudas plūsmu, un [labklājības novērtēšanu](../labklājības-vērtēšana/), kur tas pats diskontēšanas jautājums rodas nemonetāriem labklājības ieguvumiem.
- Skatiet arī [starppaaudžu taisnīgums un ilgtspējas diskontēšana](../starppaaudžu-taisnīgums-un-ilgtspējas-diskontēšana/) par Sterna un Nordhausa debati, kas konkrēti piemērota vides un klimata tehnoloģiju ieguldījumiem.

## Biežākās kļūdas

- **Fiksētas likmes lietošana ļoti ilgiem horizontiem.** Green Book dilstošais grafiks pastāv tieši tāpēc, ka nemainīga likme nenovērtē patiesi ilgmūžīgus ieguvumus; pārbaudiet, kura josla ir piemērojama, nevis visu laiku pēc noklusējuma lietojiet 3,5 %.
- **Diskonta likmes uzskatīšana par ētiski neitrālu.** Sterna–Nordhausa strīds rāda, ka likme kodē vērtību spriedumu par nākamajām paaudzēm; to mainot, mainās tas, kuras programmas šķiet attaisnotas, tāpēc tā jānorāda un jāaizstāv, nevis jāslēpj izklājlapas noklusējumā.
- **Sociālās diskonta likmes sajaukšana ar privātām kapitāla izmaksām.** Valdības aizņēmumu izmaksas un privātā sektora barjeras likmes ir citi jēdzieni nekā no Remzija formulas atvasinātā sociālā likme, un to aizstāšana publiskā novērtējumā parasti izkropļo rezultātu par labu īstermiņa atdevei.
- **Reālo un nominālo naudas plūsmu nekonsekventa diskontēšana.** Green Book likme ir reāla (inflācijai koriģēta) likme; ar to diskontējot nominālas naudas plūsmas, tagadnes vērtības tiek būtiski nenovērtētas.

## Avoti

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation", Annex 6
  (2022). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Stern N. "The Economics of Climate Change: The Stern Review." HM Treasury, 2006.
- Nordhaus WD. "A Review of the Stern Review on the Economics of Climate Change." Journal of
  Economic Literature, 2007;45(3):686–702.
- Ramsey FP. "A Mathematical Theory of Saving." Economic Journal, 1928;38(152):543–559.
