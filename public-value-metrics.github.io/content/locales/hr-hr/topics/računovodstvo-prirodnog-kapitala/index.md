# Računovodstvo prirodnog kapitala

Računovodstvo prirodnog kapitala stavlja okoliš na istu razinu kao i svaku drugu nacionalnu ili
organizacijsku imovinu: mjeri zalihu prirodnih resursa (šume, tla, rijeke, močvare, atmosfera) i tok usluga
koje oni proizvode (pohrana ugljika, zaštita od poplava, rekreacija, hrana), i u fizičkim i u novčanim
jedinicama, tako da se iscrpljivanje okoliša u odlučivanju vidi onako kao što bi se vidjelo trošenje
financijskog kapitala. Ujedinjeno Kraljevstvo jedna je od vlada koje su u sustavnom provođenju toga najdalje
odmakle, potaknuta Planom za okoliš na 25 godina (25 Year Environment Plan, 2018.), a provodi ga kroz
račune prirodnog kapitala UK-a koje vodi ONS i dopunske smjernice uz Green Book Ministarstva financija
(HM Treasury).

## Zašto je važno

Konvencionalno računovodstvo, korporativno i državno, tretira šumu kao bezvrijednu sve dok se ne posiječe
i proda kao drvo, kada postaje BDP. Računovodstvo prirodnog kapitala postoji da zatvori taj jaz: britanski
Plan za okoliš na 25 godina obvezao je vladu da razmišljanje o prirodnom kapitalu ugradi u sve politike,
izričito navodeći ambiciju da bude „prva generacija koja će okoliš ostaviti u boljem stanju nego što smo ga
zatekli”. ONS od tada objavljuje godišnje račune prirodnog kapitala UK-a
(<https://www.ons.gov.uk/economy/environmentalaccounts/bulletins/uknaturalcapitalaccounts/latest>)
koji procjenjuju novčanu vrijednost ekosustavnih usluga, od rekreacije u šumama preko zdravstvenih koristi
urbanih zelenih površina do pohrane ugljika u tresetištima, koristeći isti okvir nacionalnih računa kao i za
proizvedeni kapital, tako da prirodni kapital s vremenom može stajati u istoj bilanci kao ceste, zgrade i
oprema. Smjernice HM Treasuryja „Enabling a Natural Capital Approach” (ENCA), dopuna Green Booku
(<https://www.gov.uk/government/publications/enabling-a-natural-capital-approach-enca-guidance>),
određuju kako procjenitelji trebaju vrednovati ekološke troškove i koristi u poslovnim slučajevima, pa se
cestovni projekt koji uništava prastaru šumu ili projekt protupoplavne zaštite koji obnavlja močvaru mogu
usporediti u dosljednim novčanim izrazima, a ne tako da jedan ima broj, a drugi odlomak ograda.

## Matematika

```
Vrijednost imovine ekosustavne usluge = NPV toka usluga koje imovina pruža

Vrijednost imovine = Σ (t = 1 do T) [vrijednost godišnjeg toka usluga_t / (1 + r)^t]

pri čemu je:
  vrijednost toka usluga_t = količina usluge u godini t × jedinična vrijednost
                          (npr. rekreacijski posjeti × vrijednost po posjetu;
                           tone pohranjenog ugljika × cijena ugljika)
  r = diskontna stopa (socijalna diskontna stopa prema Green Booku — vidi
      [socijalna diskontna stopa](../društvena-diskontna-stopa/))
  T = vremenski horizont tijekom kojeg se očekuje da će imovina pružati uslugu
```

To je identična struktura neto sadašnje vrijednosti koja se koristi za vrednovanje proizvedenog kapitala ili
procjenu bilo kojeg javnog ulaganja prema [procjeni po Green Booku](../procjena-prema-green-booku/): doprinos
računovodstva prirodnog kapitala jest pružanje vjerodostojnih fizičkih količina i jediničnih vrijednosti za
usluge koje su se prije vrednovale nulom.

## Primjer iz prakse

**Urbana šuma, rekreacijska vrijednost**: šuma od 50 hektara prima procijenjenih 80.000 rekreacijskih
posjeta godišnje, od kojih se svaki vrednuje (metodom putnih troškova ili metodom izjavljenih preferencija,
vidi [vrednovanje na temelju otkrivenih preferencija](../vrednovanje-na-temelju-otkrivenih-preferencija/) i
[vrednovanje na temelju izjavljenih preferencija](../vrednovanje-prema-izjavljenim-preferencijama/)) na 3 £ po posjetu.
Očekuje se da će šuma tu uslugu pružati 50 godina, uz procjenu s diskontnom stopom od 3,5 %.

```
Godišnja rekreacijska vrijednost = 80.000 × 3 £ = 240.000 £/godišnje

NPV tijekom 50 godina uz 3,5 % ≈ 240.000 £ × faktor anuiteta (3,5 %, 50 godina)
faktor anuiteta (3,5 %, 50) ≈ 21,4

Vrijednost imovine ≈ 240.000 £ × 21,4 ≈ 5.136.000 £
```

**Dodavanje pohrane ugljika**: ista šuma godišnje veže procijenjenih 400 tona CO2, što se vrednuje po
cijeni ugljika izvan sustava trgovanja koju koristi vlada, od otprilike 75 £/tona (ilustrativno; za
stvarnu procjenu koristite aktualne objavljene vrijednosti ugljika BEIS-a/DESNZ-a).

```
Godišnja vrijednost ugljika = 400 × 75 £ = 30.000 £/godišnje
NPV tijekom 50 godina uz 3,5 % ≈ 30.000 £ × 21,4 ≈ 642.000 £

Ukupna vrijednost imovine šume (rekreacija + ugljik) ≈ 5.136.000 £ + 642.000 £
                                                       ≈ 5.778.000 £
```

To je prije dodavanja ublažavanja poplava, bioraznolikosti ili usluga kvalitete zraka koje ENCA smjernice
također traže od procjenitelja da razmotre: ukupni iznos namjerno je donja, a ne gornja granica.

## Veza s programskim inženjerstvom

- Sustavi upravljanja okolišem i imovinom za lokalne vlasti i agencije (parkovi, prometnice, vodna tijela)
  mogu uz registar fizičke imovine voditi i registar prirodnog kapitala, koristeći isti obrazac tok usluga
  puta jedinična vrijednost kao i svaka druga [baza jediničnih troškova](../baze-jediničnih-troškova/) koju
  organizacija održava.
- Budući da je NPV prirodnog kapitala osjetljiv na diskontnu stopu (vidi faktor anuiteta u primjeru), svaki
  alat koji ga izračunava trebao bi stopu i horizont izložiti kao vidljive ulaze, a ne ih skrivati; isto
  načelo transparentnosti obrađeno je u temi
  [međugeneracijska pravednost i diskontiranje radi održivosti](../međugeneracijska-pravednost-i-diskontiranje-radi-održivosti/).
- Računi prirodnog kapitala sve su češće obvezan ulaz u dijelove o utjecaju na okoliš u poslovnom slučaju
  prema [procjeni po Green Booku](../procjena-prema-green-booku/); isporučiteljski tim koji gradi alate za
  poslovne slučajeve trebao bi račune ONS-a i jedinične vrijednosti ENCA-e tretirati kao referentne podatke
  koje treba integrirati, a ne kao nešto što procjenitelji svaki put iznova računaju od nule.

## Zamke

- **Dvostruko brojanje preklapajućih ekosustavnih usluga**: rekreacijska vrijednost i vrijednost
  bioraznolikosti za isto područje mogu dijeliti iste temeljne podatke o spremnosti na plaćanje; ENCA
  smjernice izričito upozoravaju na zbrajanje vrednovanja izvedenih iz preklapajućih instrumenata
  anketiranja.
- **Tretiranje vrijednosti prirodne imovine kao statične**: tokovi usluga mijenjaju se s klimom,
  upravljanjem i pritiskom promjene namjene zemljišta; vrijednost ugljika i ublažavanja poplava u šumi u
  ovom desetljeću nije trajno svojstvo lokacije.
- **Korištenje nacionalnih prosječnih jediničnih vrijednosti za izrazito lokalnu odluku**: hektar
  pristupačne urbane šume i hektar udaljenog gorja imaju vrlo različite rekreacijske vrijednosti; ENCA
  smjernice preporučuju lokalne ili za lokaciju specifične vrijednosti kada postoje, umjesto zadanog
  posezanja za nacionalnim prosjecima.

## Izvori

- ONS. "UK natural capital accounts."
  <https://www.ons.gov.uk/economy/environmentalaccounts/bulletins/uknaturalcapitalaccounts/latest>
- HM Government. "A Green Future: Our 25 Year Plan to Improve the Environment." (2018)
- HM Treasury / Defra. "Enabling a Natural Capital Approach (ENCA): guidance."
  <https://www.gov.uk/government/publications/enabling-a-natural-capital-approach-enca-guidance>
