# Metrike povjerenja i legitimnosti

Legitimnost i potpora jedna je od triju nogu „strateškog trokuta” Marka Moorea u knjizi *Creating Public Value* (1995), uz samu javnu vrijednost i operativni kapacitet, a to je noga koja se najčešće ne mjeri, jer za razliku od proračuna ili broja izlaznih rezultata legitimnost nema očit jedinstven broj. Metrike povjerenja i legitimnosti skupina su zamjenskih mjera koje vlade rabe da popune tu prazninu: ankete o povjerenju u institucije, ocjene povjerenja nadzornih tijela, podaci o pritužbama i žalbama te pokazatelji političke/zakonodavne potpore.

## Zašto je važno

Mooreov je argument da javni upravitelj koji isporučuje stvarnu vrijednost, ali gubi političku i javnu legitimnost, na kraju gubi okruženje ovlaštenja potrebno da bi to nastavio: financiranje se reže, mandati sužavaju, a usluga gladuje bez obzira na to koliko su dobri njezini ishodi. Legitimnost stoga nije naknadna misao o odnosima s javnošću zalijepljena na bodovnu karticu isporuke; ona je noseći ulaz za pitanje može li misija uopće nastaviti, zbog čega je ravnopravna perspektiva u [kartici bodovanja javne vrijednosti](../kartica-rezultata-javne-vrijednosti/), a ne fusnota. OECD-ov program istraživanja „Trust in Government” vodeći je međunarodni pokušaj kvantifikacije: prati udio građana u državama članicama OECD-a koji kažu da imaju povjerenja u svoju nacionalnu vladu, a njegovi dugoročni podaci pokazuju da je povjerenje vrlo osjetljivo na šokove: i financijska kriza 2008. i pandemija COVID-a 19 izazvale su oštre nacionalne oscilacije, često praćene samo djelomičnim oporavkom, a OECD-ova analiza dosljedno nalazi da su percipirana *kompetentnost* (isporučuje li vlada ono što kaže da će) i percipirana *pravednost/integritet* (djeluje li vlada bez korupcije ili favoriziranja) dva najjača pokretača brojke povjerenja, različita od zadovoljstva bilo kojom pojedinačnom transakcijom. Vlade sve više pokušavaju operacionalizirati legitimnost i na zrnatijoj razini: britanski neovisni regulatori i inspektorati (National Audit Office, Parliamentary and Health Service Ombudsman, sektorski regulatori poput Ofsteda i Care Quality Commission) funkcioniraju kao institucionalizirane provjere legitimnosti, pretvarajući „vjeruje li javnost još ovoj usluzi” u ocjene koje se mogu revidirati.

## Matematika

Povjerenje i legitimnost tema je oblikovana okvirom čije su uporabljive kvantitativne zamjenske mjere:

```
Indeks povjerenja u institucije (u stilu OECD-a)
  = % ispitanika koji odgovaraju „da” na pitanje o povjerenju u vladu,
    praćeno kroz vrijeme, raščlanjeno po demografskim skupinama

Skup zamjenskih mjera legitimnosti (nijedan jedinstveni broj ne zamjenjuje konstrukt):
  - Osnovane pritužbe na 1.000 korisnika usluge (podaci ombudsmana ili interne pritužbe)
  - Stopa uspjeha sudskog preispitivanja / žalbi protiv odluka tijela
  - Ocjena neovisnog regulatora/inspektorata (npr. pojasevi od „izvrsno” do „neadekvatno”)
  - Glasovanja o povjerenju u zakonodavnim/nadzornim odborima ili učestalost kritičnih izvješća
  - Broj zahtjeva za slobodu informacija te stopa otkrivanja/odbijanja, kao zamjenska
    mjera za percipiranu transparentnost

Legitimnost se potvrđuje, a ne izračunava: obranjiva ocjena legitimnosti
trijangulira nekoliko navedenih mjera umjesto da se oslanja na bilo koju jednu.
```

## Primjer iz prakse

**Nacionalna porezna uprava**: trijangulacija legitimnosti za godišnje izvješće o javnoj vrijednosti.

```
Zamjenska mjera povjerenja u stilu OECD-a (anketa o povjerenju specifična za tijelo):
  58 % ispitanika kaže da vjeruje upravi da će „postupati pošteno prema meni” (pad sa
  64 % prije dvije godine)

Podaci o pritužbama:
  Osnovane pritužbe: 4,2 na 1.000 interakcija poreznih obveznika (porast s 3,1 na 1.000)

Upućivanja ombudsmanu:
  Upućivanja neovisnom uredu Adjudicator's Office: 1.850 u godini, od čega je
  61 % u cijelosti ili djelomično prihvaćeno protiv uprave (porast sa 48 % prethodne godine)

Čitano preko sva tri: povjerenje pada, osnovane pritužbe rastu, a neovisni
nalazi ombudsmana sve češće staju protiv uprave: tri neovisna signala koja
konvergiraju u istom smjeru, što ovo čini vjerodostojnim nalazom o legitimnosti,
a ne šumom u jednoj seriji.
```

Pomak samo jednog od ovih brojeva bio bi slab dokaz; tri neovisne mjere koje se pomiču zajedno u istom razdoblju obrazac je koji tvrdnju o legitimnosti čini obranjivom.

## Veza s programskim inženjerstvom

Metrike legitimnosti rijetko proizvodi nadzorna ploča jednog tima, što je i samo lekcija o oblikovanju: gradite cjevovode izvješćivanja koji mogu preuzimati i uskladiti podatke iz neovisnih vanjskih izvora (sustavi predmeta ombudsmana, izvori ocjena regulatora, dobavljači anketa), a ne arhitektirati izvješćivanje o legitimnosti kao isključivo internu metriku, jer interno nabavljene tvrdnje o legitimnosti („ocjenjujemo se kao vrijedni povjerenja”) nose malu dokaznu težinu: isti problem neovisnosti zabilježen za perspektivu legitimnosti u [kartici bodovanja javne vrijednosti](../kartica-rezultata-javne-vrijednosti/). Cjevovodi podataka o pritužbama i žalbama zaslužuju istu strogost kvalitete podataka kao i svaki cjevovod ishoda koji hrani ugovore o [plaćanju prema rezultatima](../plaćanje-prema-rezultatima-i-društvene-obveznice-učinka/), jer nedovoljno prijavljen ili loše kategoriziran skup pritužbi tiho podcjenjuje problem legitimnosti prije nego postane vidljiv u anketi o povjerenju godinu dana kasnije. Vidi [metrike zadovoljstva građana](../metrike-zadovoljstva-građana/) za parnjaka na razini transakcije ovoj mjeri na razini institucije i [javnu vrijednost](../javna-vrijednost/) za cijeli Mooreov okvir strateškog trokuta kojem ta noga pripada.

## Zamke

- **Tretiranje zadovoljstva kao zamjenske mjere za legitimnost**: građanin može biti zadovoljan sučeljem jedne transakcije, a ipak nepovjerljiv prema instituciji u cjelini (ili obrnuto); vidi [metrike zadovoljstva građana](../metrike-zadovoljstva-građana/) o tome zašto se to dvoje mora iskazivati zasebno.
- **Oslanjanje na jednu samoprijavljenu metriku**: interno provedena anketa o povjerenju bez neovisne potvrde (podaci ombudsmana, ocjene regulatora) lako se odbaci kao samoocjenjivanje; triangulirajte.
- **Zanemarivanje demografske raščlambe**: zbirne nacionalne brojke povjerenja mogu prikriti oštro različitu legitimnost među pojedinim skupinama (prema dobi, etničkoj pripadnosti, dohotku ili regiji); OECD-ova vlastita izdanja Trust in Government raščlanjuju upravo zato.
- **Čitanje jednog pada izazvanog šokom kao trajnog trenda**: brojke povjerenja naglo se kreću oko kriza (financijski slomovi, pandemije, skandali velike vidljivosti) i djelomično se oporavljaju; jednu točku podataka nakon šoka ne bi trebalo ekstrapolirati u dugoročan pad bez više podataka.

## Izvori

- Mark H. Moore, *Creating Public Value: Strategic Management in Government*, Harvard University
  Press, 1995.
- OECD, "Trust in Government." <https://www.oecd.org/en/topics/trust-in-government.html>
- Parliamentary and Health Service Ombudsman, annual casework statistics.
  <https://www.ombudsman.org.uk/>
