# Vrednovanje prema izjavljenim preferencijama

Metode izjavljenih preferencija procjenjuju vrijednost netržišnog dobra izravnim pitanjem ljudima koliko bi bili spremni platiti za njega ili koliku bi naknadu bili spremni prihvatiti da ga se odreknu, obično kroz strukturiranu anketu koja opisuje hipotetski scenarij. Uvjetno vrednovanje (engl. contingent valuation) najpoznatija je tehnika u toj skupini.

## Zašto je važno

Annex 2 Green Booka (dopunske smjernice o vrednovanju netržišnih učinaka) odobrava metode izjavljenih preferencija za dobra za koja uopće nema vidljive tržišne transakcije iz koje bi se mogla izvesti vrijednost: kvaliteta zraka, bioraznolikost, zaštita od poplava, egzistencijalna vrijednost krajolika koji netko možda nikad neće posjetiti
(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>).
Defra je objavila vlastite smjernice o izjavljenim preferencijama za procjenu okoliša upravo zato što velik dio vrijednosti okoliša (očuvanje staništa, kvaliteta vode) uopće nema zamjensko tržište, za razliku od, recimo, buke koja barem korelira s vidljivim cijenama kuća (vidi [vrednovanje prema otkrivenim preferencijama](../vrednovanje-na-temelju-otkrivenih-preferencija/)).

Temeljna privlačnost izjavljenih preferencija, da mogu vrednovati doslovno sve, uključujući dobra kojima nitko nikad nije trgovao, ujedno je izvor njihova problema vjerodostojnosti. Budući da ispitanici zapravo ne troše novac, ankete uvjetnog vrednovanja podložne su hipotetskoj pristranosti (ljudi precjenjuju spremnost na plaćanje kad nema stvarnog proračunskog ograničenja), učincima ugnježđivanja (isto dobro vrednuje se drukčije ovisno o tome što je još u anketi) i pristranosti polazne točke u izvedbama s nadmetanjem. NOAA-in panel o uvjetnom vrednovanju iz 1993., sazvan nakon sudskih sporova oko izlijevanja nafte Exxon Valdez, odredio je standarde izvedbe (binarni referendumski format „biste li platili £X, da/ne” umjesto otvorenog nadmetanja i obvezne podsjetnike na stvarno proračunsko ograničenje ispitanika) koji ostaju referentni standard za obranjive ankete.

## Matematika

```
Uvjetno vrednovanje (referendumski format):
  Predstaviti binarni izbor: „biste li platili £X godišnje za ishod Y? da/ne”
  Slučajno varirati X među ispitanicima.
  Prilagoditi spremnost na plaćanje kao funkciju udjela odgovora da/ne pri svakom X.

Prosječni WTP = površina ispod procijenjene krivulje potražnje
Ukupna vrijednost = prosječni WTP × pogođeno stanovništvo

Varijanta eksperimenta izbora (modeliranje diskretnog izbora):
  Ispitanicima predstaviti ponovljene izbore između skupova svojstava
  (uključujući svojstvo troška), procijeniti implicitne cijene za svako
  netroškovno svojstvo iz kompromisa koje ispitanici otkrivaju.
```

Varijanta eksperimenta izbora u današnjoj se britanskoj praksi općenito preferira u odnosu na uvjetno vrednovanje jednim pitanjem, jer prisiljavanje ispitanika da više puta odvagnu nekoliko svojstava naspram troška daje unutarnje dosljednije procjene koje je teže namjestiti nego jedno pitanje da/ne.

## Primjer iz prakse

**Središnja država**: Defra naručuje anketu uvjetnog vrednovanja kako bi vrednovala program poboljšanja kvalitete riječne vode. Anketa referendumskog formata na 2.000 kućanstava utvrđuje da bi 62 % platilo 40 £ godišnje putem hipotetskog dodatka računu za vodu, a procijenjena krivulja potražnje daje prosječnu spremnost na plaćanje od 28 £ godišnje po kućanstvu.

```
Prosječni WTP = 28 £/kućanstvu/godišnje
Kućanstva u slivu = 340.000
Ukupna godišnja vrijednost = 28 £ × 340.000 = 9,52 milijuna £/godišnje

Kroz 20-godišnje razdoblje procjene uz diskontnu stopu od 3,5 % (anuitetni faktor ≈ 14,2):
PV(koristi) ≈ 9,52 milijuna £ × 14,2 ≈ 135 milijuna £
```

Ta se ukupna brojka zatim uspoređuje sa stranom troškova programa u [društvenoj analizi troškova i koristi](../društvena-analiza-troškova-i-koristi/). Green Book traži da se takvi dokazi izjavljenih preferencija iskažu uz interval pouzdanosti i metodologiju ankete, a ne kao gola točkasta procjena, upravo zato što je temeljni broj krhkiji od tržišne cijene.

**Dobrotvorna organizacija**: zaklada za baštinu ispituje posjetitelje i neposjetitelje o spremnosti na plaćanje za sprječavanje zatvaranja povijesne zgrade koju nijedna skupina nužno ne posjećuje (njezina egzistencijalna vrijednost). Budući da neposjetitelji koji zgradu nikad neće vidjeti ipak iskazuju pozitivan WTP, anketa hvata egzistencijalnu i nasljednu vrijednost koju bi jednostavno brojanje prihoda od ulaznica posjetitelja (zamjenska mjera otkrivenih preferencija) potpuno promašilo, što pokazuje stvarnu prednost izjavljenih preferencija ondje gdje ne postoji nikakva tržišna transakcija koja bi otkrila vrijednost.

## Veza s programskim inženjerstvom

Metode izjavljenih preferencija rijetko se izravno primjenjuju na softversko inženjerstvo, ali inženjeri koji grade platforme za savjetovanje s građanima, alate za participativno proračunavanje ili infrastrukturu javnih anketa često grade instrument o kojem ekonomija ovisi. Ispravno oblikovanje anketnih detalja (nasumični iznosi ponuda, binarno referendumsko uokvirivanje umjesto otvorenih pitanja, izričiti podsjetnici na proračunsko ograničenje) nije UX ljubaznost nego ono što dobiveno vrednovanje čini obranjivim pod provjerom; loše oblikovana anketa u aplikaciji može poništiti mjesece kasnije ekonomske analize. Vidi [metrike zadovoljstva građana](../metrike-zadovoljstva-građana/) za općenitiju disciplinu prikupljanja podataka o javnom mnijenju koji će nositi analitičku težinu.

## Zamke

- **Otvorena pitanja „koliko biste platili?”** Daleko su sklonija strateškoj pristranosti i pristranosti sidrenja nego binarno referendumsko uokvirivanje; preporuka NOAA-ina panela da se rabi referendumski format postoji upravo zato što otvoreno ispitivanje loše funkcionira.
- **Nema podsjetnika na stvarno proračunsko ograničenje ispitanika.** Bez njega izjavljeni WTP redovito premašuje ono što bi iste osobe platile kad je u igri stvarni proračunski kompromis: hipotetska pristranost.
- **Zanemareni učinci ugnježđivanja.** Isto dobro vrednovano samo i vrednovano kao dio većeg paketa daje različite procjene WTP-a; navedite što je još, ako išta, bilo u okviru ankete.
- **Tretiranje točkaste procjene jedne ankete kao konačne.** Praksa Green Booka očekuje raspon i raspravu o poznatim pristranostima, a ne golu brojku prenesenu u tablicu troškova i koristi kao da je tržišna cijena.

## Izvori

- HM Treasury. "The Green Book," Annex 2: valuing non-market impacts.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Defra. "Valuing environmental impacts: practical guidelines" (contingent valuation and choice
  experiment guidance). <https://www.gov.uk/government/collections/valuing-environmental-impacts>
- Arrow K, et al. "Report of the NOAA Panel on Contingent Valuation." Federal Register, 1993.
- Mitchell RC, Carson RT. "Using Surveys to Value Public Goods: The Contingent Valuation Method."
  Resources for the Future, 1989.
