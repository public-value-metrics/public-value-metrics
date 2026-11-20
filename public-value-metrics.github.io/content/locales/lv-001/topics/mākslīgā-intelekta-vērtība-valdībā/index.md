# Mākslīgā intelekta vērtība valdībā

Mākslīgā intelekta vērtība valdībā ir prasība, ka publiskajā pakalpojumā izmantotai MI sistēmai jāpārvar tā pati vērtības par ieguldīto naudu un sabiedriskās vērtības latiņa kā jebkuram citam izdevumu lēmumam — ne zemāka tāpēc, ka tā ir jauna, un ne augstāka tāpēc, ka no tās baidās. Tas ir jautājums, uz kuru piegādes komandai jāspēj atbildēt pirms, nevis pēc MI funkcijas ieviešanas: vai tā rada vairāk vērtības, nekā izmaksā, ja garantiju, uzraudzības un riska izmaksas ir godīgi ieskaitītas?

## Kāpēc tas ir svarīgi

Apvienotās Karalistes Central Digital and Data Office (CDDO) 2024. gadā publicēja Generative AI Framework for Government, balstoties uz agrāku pagaidu norādījumu no 2023. gada jūnija, un strukturēja to ap desmit principiem: kas ir ģeneratīvais MI, tā ētiskā ietekme, rīku drošība, kvalitātes nodrošināšanas kontrole, visa ģeneratīvā MI dzīves cikla pārvaldība, patiesu lietojuma gadījumu identificēšana, sadarbība starp valdības iestādēm, pārredzamība, prasmes un pārvaldība. Ietvara uzstāšana uz „jēgpilnu cilvēka kontroli" un pilna dzīves cikla pārvaldību pastāv tāpēc, ka MI projektu biznesa gadījumiem ir specifisks kļūmes veids, kāda nav citiem IT izdevumiem: izmēģinājuma virsraksta produktivitātes skaitli ir viegli iegūt un viegli pārspīlēt, jo to mēra, pirms ņemts vērā verifikācijas, labošanas un uzraudzības slogs, ko rīks rada. Līdzās ietvaram Algorithmic Transparency Recording Standard (ATRS) pieprasa publiskajām iestādēm publicēt standartizētu ierakstu — mērķis, izmantotie dati, veiktspēja, taisnīguma testēšana, cilvēka uzraudzības kārtība — par algoritmiskiem rīkiem, kas būtiski ietekmē lēmumus par privātpersonām; tādējādi MI sistēmas garantiju izmaksas kļūst par publiski pieejamu informāciju, nevis iekšēju aplēsi, ko komanda var klusi izlaist.

## Matemātika

MI ieviešanu vērtē kā papildinājumu standarta [vērtības par ieguldīto naudu](../vērtība-par-naudu/) novērtējumam, nevis tā aizstājēju, MI specifiskos locekļus izdalot skaidri, nevis ievelkot tos vienā „produktivitātes ieguvuma" skaitlī:

```
MI sistēmas neto vērtība =
    produktivitātes ieguvums (ietaupītais laiks × darbinieka pilnās izmaksas)
  − licences/skaitļošanas izmaksas
  − cilvēka verifikācijas un uzraudzības izmaksas (MI rezultāta pārbaude
    pirms tā izmantošanas — tās nesamazinās līdz nullei pat nobriedušiem rīkiem)
  − ATRS dokumentācijas un pastāvīgās uzraudzības izmaksas
  − ar risku koriģētas kaitējuma izmaksas, ko rada kļūdas, aizspriedumi vai
    halucinācijas, svērtas pēc tā, kas šo kaitējumu nes (distributional-weighting)

Izmēģinājuma produktivitātes skaitlis, kas izlaiž uzraudzības locekli, nav
salīdzināms ar parastās darbības izmaksu bāzlīniju, kurā jau iekļauta
līdzvērtīga cilvēka veikta pārbaude — sk. ai-productivity-in-the-public-sector,
kur izklāstīta pilnīgāka produktivitātes mērīšanas disciplīna, no kuras
šis aprēķins aizgūts.
```

## Aprēķina piemērs

**Vietējā pašvaldība izmanto ģeneratīvā MI rīku, lai sagatavotu pirmās atbildes uz ierastiem pašvaldības nodokļa jautājumiem**: 25 000 jautājumu gadā, kas iepriekš pilnībā tika apstrādāti ar darbinieku palīdzību, vidēji 14 minūtes uz jautājumu, darbinieka pilnās izmaksas £34 stundā.

```
Bāzlīnijas (bez MI) izmaksas:
  25 000 × (14/60) × £34 = £198 333 gadā

Izmēģinājuma virsraksta apgalvojums: MI sagatavo atbildi 90 sekundēs,
darbinieks „tikai pārskata un nosūta" — apgalvotais jaunais laiks ir 3 minūtes
  25 000 × (3/60) × £34 = £42 500 gadā
  → apgalvotais ietaupījums £155 833 gadā (izskatās pārveidojošs)

Pilno izmaksu skaitlis, izmērīts pēc 3 mēnešiem darbībā, nevis
izmēģinājuma rūpīgi atlasītajos testa gadījumos:
  Faktiskais pārskatīšanas + labošanas laiks uz atbildi: 6 minūtes (melnrakstiem
  nepieciešama reāla rediģēšana sarežģītiem vai emocionāli jutīgiem jautājumiem)
  25 000 × (6/60) × £34 = £85 000 gadā
  Licences/skaitļošanas izmaksas: £38 000 gadā
  ATRS dokumentācija un ceturkšņa neobjektivitātes/kvalitātes uzraudzība: £14 000 gadā
  Kopējās izmaksas = 85 000 + 38 000 + 14 000 = £137 000 gadā

Reālais ietaupījums = 198 333 − 137 000 = £61 333 gadā — patiess un
saglabāšanas vērts, taču ievērojami mazāks par pusi no izmēģinājuma virsraksta
apgalvojuma, un lai to atklātu, bija vajadzīgs godīgs uzraudzības laika mērījums,
nevis izmēģinājuma labākā gadījuma scenārijs.
```

## Saikne ar programmatūras inženieriju

Šeit satiekas [ai-productivity-in-the-public-sector](../mi-produktivitāte-publiskajā-sektorā/) un šī tēma: inženieru komandas, kas veido MI funkcijas publiskajiem pakalpojumiem, pārvalda instrumentāciju, kas padara iespējamu „reālo" skaitli darba piemērā — reģistrē faktisko pārskatīšanas laiku, rediģēšanas attālumu starp melnrakstu un nosūtīto atbildi un eskalācijas līmeni, nevis uzticas izmēģinājuma demonstrācijas apstākļiem. MI funkcijas jāvērtē pēc [digital-service-standard](../digitālo-pakalpojumu-standarts/) 9. punkta (droša pakalpojuma, lietotāju privātums) un jāsalīdzina ar [public-sector-cybersecurity-value](../publiskā-sektora-kiberdrošības-vērtība/), ja rīks skar iedzīvotāju datus; jebkurai MI sistēmai, kas būtiski ietekmē lēmumus par privātpersonām, nepieciešams ATRS ieraksts, pirms to var uzskatīt par gatavu novērtēšanai — tāpat kā pakalpojumam pirms palaišanas jāiztur [digital-service-standard](../digitālo-pakalpojumu-standarts/) novērtējums.

## Biežākās kļūdas

- **MI-mazgāšana (AI-washing)**: esošas uz noteikumiem balstītas automatizācijas pārsaukšana par „MI", lai piekļūtu MI ieviešanai paredzētam finansējumam vai uzmanībai, nenesot precizitātes vai aizspriedumu riskus, kas patiesībā attaisno ietvara papildu pārbaudi.
- **Izmēģinājuma produktivitātes, nevis ražošanas produktivitātes mērīšana**: izmēģinājumi notiek ar atlasītiem testa gadījumiem un ieinteresētiem, uzmanīgiem pārskatītājiem; ražošanā ir pilns juceklīgais gadījumu klāsts, un pārskatītājiem laika gaitā rodas automatizācijas aizspriedums un viņi rezultātus pārbauda mazāk — abi faktori izkropļo godīgo uzraudzības izmaksu skaitli.
- **ATRS reģistrācijas izlaišana, jo rīks „īsti nav automatizēta lēmumu pieņemšana"**: standarta slieksnis ir būtiska ietekme uz lēmumu par privātpersonu, un to sasniedz lielākā daļa iedzīvotājiem pavērstu MI melnrakstu vai šķirošanas rīku, pat ja cilvēks formāli paraksta.
- **Kļūdu sadales ietekmes ignorēšana**: MI sistēmas kļūdu līmenis, vidēji visiem lietotājiem, var slēpt ievērojami augstāku kļūdu vai aizspriedumu līmeni konkrētām grupām; [distributional-weighting](../sadales-svēršana/) jāpiemēro ar risku koriģētā kaitējuma loceklim, nevis tikai kopējam precizitātes rādītājam.

## Avoti

- Central Digital and Data Office, Generative AI Framework for Government (2024). <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>
- Algorithmic Transparency Recording Standard. <https://www.gov.uk/government/collections/algorithmic-transparency-recording-standard-hub>
- HM Treasury, Green Book: central government guidance on appraisal and evaluation. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-governent>
