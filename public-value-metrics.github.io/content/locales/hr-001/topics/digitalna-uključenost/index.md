# Digitalna uključenost

Digitalna uključenost je disciplina osiguravanja da „digitalno prema zadanome” ne postane „samo digitalno”, odnosno da javne usluge osmišljene oko najjeftinijeg kanala i dalje funkcioniraju za građane koji ga ne mogu ili ne žele koristiti bez pomoći. GDS je skovao konkretan isporučiteljski mehanizam, „assisted digital” (digitalna usluga uz pomoć), kao obvezni zahtjev za svaku državnu digitalnu uslugu, a ne neobavezni dodatak.

## Zašto je važno

Government Digital Strategy iz 2012. jasno je postavila ambiciju: digitalne usluge treba graditi digitalno prema zadanome, no sama je strategija priznala da oko 10 % britanskih odraslih osoba neće moći koristiti usluge bez pomoći te je obvezala ministarstva da pružaju digitalnu podršku uz pomoć, put posredovan ljudima, telefonom, osobno ili preko posrednika, kao dio usluge, a ne zasebnu pričuvnu opciju naknadno dodanu. Ta je obveza danas točka 5 [Digital Service Standarda](../standard-digitalnih-usluga/), „osigurajte da svatko može koristiti uslugu”. Opseg trajne isključenosti prati godišnji UK Consumer Digital Index grupe Lloyds Banking Group: izdanje iz 2024. utvrdilo je da oko 1,6 milijuna ljudi u UK-u i dalje nije na internetu te da je ta skupina izrazito nagnuta prema osobama u dobi 70–79 godina, onima s primanjima ispod 35.000 £ te umirovljenicima ili nezaposlenima, upravo populaciji koja najvjerojatnije ovisi o javnim uslugama koje se redizajniraju. Isto izvješće utvrdilo je da samo 48 % britanske radne snage može obaviti svih 20 zadataka okvira Essential Digital Skills, što znači da isključenost nije binarna povezanost, nego spektar vještina, samopouzdanja i povjerenja koji jednostavna metrika „ima širokopojasni internet” potpuno promašuje.

## Matematika

Digitalna uključenost je okvir i provjera pravednosti, a ne jedna formula, ali se kvantitativno procjenjivanju vrijednosti pridružuje putem [distribucijskog ponderiranja](../distribucijsko-ponderiranje/):

```
Naivna vrijednost prelaska na drugi kanal:
  vrijednost = premješteni obujam × (trošak_stari − trošak_digitalni)     [vidi channel-shift-savings]

Vrijednost prilagođena za uključenost:
  vrijednost = (premješteni obujam × neponderirana ušteda)
             − (isključeni korisnici × trošak pružanja digitalne pomoći)
             − (korekcija distribucijskog pondera za štetu skupinama
                koje su isključene i gube pristup ili suočavaju s
                degradiranom kvalitetom usluge)

Digitalna pomoć nije preostali trošak neuspjeha — to je osmišljen
kanal sa svojim vlastitim [troškom po transakciji](../trošak-po-transakciji/),
obično znatno višim po transakciji od digitalne samouslužne, ali
i dalje obično jeftinijim od naslijeđenog kanala koji djelomično zamjenjuje.
```

## Primjer iz prakse

**Nacionalna usluga naknada u stilu Universal Credita**: 2,5 milijuna zahtjeva godišnje, procijenjeno da za otprilike 10 % podnositelja treba digitalna podrška uz pomoć prema planskoj pretpostavci Government Digital Strategy.

```
Isključena kohorta / kohorta s digitalnom pomoći = 2.500.000 × 10 % = 250.000 zahtjeva/godišnje

Trošak kanala digitalne pomoći (telefonska + osobna podrška,
popunjena osobljem za ranjivost i složenost) ≈ 9,50 £/zahtjevu
  = 250.000 × 9,50 £ = 2.375.000 £/godišnje

Trošak digitalne samousluge za preostalih 90 % ≈ 0,40 £/zahtjevu
  = 2.250.000 × 0,40 £ = 900.000 £/godišnje

Miješani trošak po transakciji = (2.375.000 + 900.000) / 2.500.000
  = 1,31 £/zahtjevu

Dizajn koji preskače digitalnu pomoć kako bi postigao niži naslovni
trošak po transakciji (npr. 0,40 £ miješano, zanemarujući 250.000
isključenih podnositelja) ne uklanja tih 2,375 milijuna £ — pretvara
ih u neostvarena prava, žalbe i potražnju za kriznim uslugama
nizvodno koja pada na posve drugi proračun.
```

## Veza s programskim inženjerstvom

Digitalna pomoć je osmišljen kanal, što znači da ima sučelja, SLA-ove i instrumentaciju kao i svaki drugi: alat za referente koji radi preko telefona, portal za posrednike poput Citizens Advice ili lokalne vlasti ili tijek kioska za osobni dolazak. Tretiranje kao naknadne misli, telefonskog broja sitnim slovima umjesto kanala promišljenog od otkrivanja potreba, najčešći je način na koji usluge ne prođu točku 5 [Digital Service Standarda](../standard-digitalnih-usluga/) na procjeni. Digitalna uključenost je leća pravednosti za svaku drugu temu u ovoj skupini: ograničava koliko agresivno se mogu ostvariti [uštede prelaskom na druge kanale](../uštede-prelaskom-na-druge-kanale/), stavka je koja se mora pošteno uključiti u [trošak po transakciji](../trošak-po-transakciji/) i izravna je primjena [distribucijskog ponderiranja](../distribucijsko-ponderiranje/) na kontekst digitalnih usluga: ušteda koja nerazmjerno pada na ljude koji su već digitalno i ekonomski isključeni treba se ponderirati naniže, a ne tretirati kao jednaka uštedi ravnomjerno raspoređenoj po populaciji.

## Zamke

- **„Digitalno prema zadanome” pročitano kao „samo digitalno”**: zatvaranje telefonske linije ili šaltera čim digitalno korištenje prijeđe prag, bez provjere da preostala kohorta ima doista upotrebljivu alternativu.
- **Mjerenje uključenosti binarnom povezanošću**: „ima širokopojasni internet” ili „posjeduje pametni telefon” loša je zamjena za sposobnost dovršenja konkretne transakcije; jaz u Essential Digital Skills (samo 48 % britanske radne snage obavi svih 20 zadataka, prema Lloydsu 2024.) pokazuje da su vještine i samopouzdanje važni koliko i pristup.
- **Vrednovanje digitalne pomoći kao pogreške zaokruživanja**: proračunavanje kao male rezerve, a ne kao pravog kanala sa svojim [troškom po transakciji](../trošak-po-transakciji/), pa iznenađenje kad je nedovoljno financirana i premalo popunjena osobljem pri pokretanju.
- **Anketiranje samo uspješnih digitalnih dovršitelja**: istraživanje zadovoljstva i upotrebljivosti provedeno isključivo unutar usluge promašuje ljude koji nikad nisu došli tako daleko, a to je upravo populacija koju rad na digitalnoj uključenosti treba zaštititi.

## Izvori

- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
- GOV.UK Service Manual, service standard, point 5: make sure everyone can use the service. <https://www.gov.uk/service-manual/service-standard/point-5-make-sure-everyone-can-use-the-service>
- Lloyds Banking Group, Consumer Digital Index. <https://www.lloydsbank.com/banking-with-us/whats-happening/consumer-digital-index.html>
- Ofcom, digital exclusion review. <https://www.ofcom.org.uk/>
