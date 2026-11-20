# Indeks višestruke deprivacije (IMD)

IMD je službena mjera relativne deprivacije za mala područja u Engleskoj: rangira svako od 32.844 područja najniže razine (Lower-layer Super Output Areas, LSOA, svako s otprilike 1.500 stanovnika) od 1 (najdeprivirano) do 32.844 (najmanje deprivirano). Objavljuje ga današnje Ministarstvo stanovanja, zajednica i lokalne uprave (MHCLG, ranije MHCLG/DCLG), posljednji put kao English Indices of Deprivation 2019, i izravno usmjerava financiranje središnje vlade, određivanje prioriteta javnog zdravstva i prihvatljivost za desetke lokalnih shema.

## Zašto je važno

Deprivacija nije jedna stvar: susjedstvo može biti siromašno dohotkom, ali sigurno, ili imati dostatan dohodak, a trpjeti zbog lošeg zdravlja i lošeg stanovanja. Prethodnici IMD-a (koji sežu u pokazatelje deprivacije Department of the Environment iz 1970-ih) razvili su se u današnji model sa sedam domena upravo zato što je ciljanje jednim pokazateljem (recimo samo stopom nezaposlenosti) rutinski propuštalo područja deprivirana na druge načine. IMD 2019 kombinira dohodak, zaposlenost, obrazovanje, zdravlje, kriminal, prepreke stanovanju i uslugama te životni okoliš u jedan složeni rang po LSOA-u; svaka je domena izgrađena iz vlastitog skupa pokazatelja i ponderirana prema metodologiji MHCLG-a. Budući da djeluje na razini malih područja (LSOA), a ne lokalne uprave, otkriva džepove deprivacije skrivene unutar inače bogatih okruga: razlog zašto se NHS England, pupil premium Department for Education i desetci formula financiranja lokalnih uprava zapravo oslanjaju na IMD, a ne na prosječni dohodak lokalne uprave. Softver koji određuje prihvatljivost, daje prioritet dosegu ili izvještava o učinku po području u Engleskoj treba tretirati decil ili rang IMD-a kao ulaz prvog reda, a ne naknadnu misao, a gdje program namjerno cilja najdeprivirana područja, njegova procjena treba primijeniti [distribucijsko ponderiranje](../distribucijsko-ponderiranje/) u skladu s tim ciljanjem, umjesto da vrednuje funtu koristi jednako bez obzira gdje završi.

## Matematika

```
7 domains, weighted:
  Income                              22,5%
  Employment                          22,5%
  Education, Skills and Training      13,5%
  Health Deprivation and Disability   13,5%
  Crime                                9,3%
  Barriers to Housing and Services     9,3%
  Living Environment                   9,3%

Each domain score: indicators standardized (ranked, then transformed
towards a normal distribution) and combined by exponential transformation
so that high deprivation on any one indicator cannot be fully cancelled
out by low deprivation on others within that domain.

IMD composite score (LSOA) = Σ (domain score × domain weight)
Rank LSOAs by composite score → 1 (most deprived) to 32.844 (least deprived)
Deciles: rank ÷ 3.284 (approx.), decile 1 = most deprived 10% of LSOAs
```

## Primjer iz prakse

**Složena ocjena LSOA-a**, uz ilustrativne standardizirane ocjene domena (0 = nema signala deprivacije, više = deprivirano):

```
Income               0,35 × 0,225 = 0,07875
Employment           0,30 × 0,225 = 0,06750
Education            0,20 × 0,135 = 0,02700
Health               0,15 × 0,135 = 0,02025
Crime                0,10 × 0,093 = 0,00930
Barriers to Housing  0,05 × 0,093 = 0,00465
Living Environment   0,08 × 0,093 = 0,00744

Composite score = 0,07875 + 0,06750 + 0,02700 + 0,02025
                + 0,00930 + 0,00465 + 0,00744  = 0,21489
```

Ta se složena ocjena zatim rangira prema ocjenama svih 32.844 LSOA-a. Ako LSOA stavi na rang 2.950, pada u decil 1 (2.950 ÷ 3.284 ≈ 0,9, tj. unutar najdeprivinijih 10 % susjedstava u Engleskoj), što je za mnoge formule financiranja prag koji otključava prihvatljivost, bez obzira na prosječnu ocjenu okolne lokalne uprave.

## Veza s programskim inženjerstvom

- Svaka usluga koja geokodira korisnike na poštanski broj ili LSOA može spojiti objavljenu tablicu pretraživanja IMD-a (besplatan, verzioniran CSV od MHCLG-a) i dodati decil deprivacije kao kovarijatu: za ciljanje dosega, određivanje prioriteta opterećenja predmeta ili izvještavanje o ishodima po pojasu deprivacije bez prikupljanja novih osobnih podataka.
- Decil IMD-a standardna je provjera pravednosti za javne digitalne usluge: unakrsna tablica korištenja usluge, odustajanja ili zadovoljstva po decilu IMD-a otkriva jazove u pristupu koje agregatna metrika skriva; vidi [digitalnu uključenost](../digitalna-uključenost/) i [metrike zadovoljstva građana](../metrike-zadovoljstva-građana/).
- Budući da je rang IMD-a relativan (uvijek čini fiksan skup rangova u cijeloj Engleskoj), ne može pokazati raste li ili pada deprivacija na nacionalnoj razini tijekom vremena, samo koja su područja rangirana gdje u odnosu jedna na druga u tom izdanju; ne gradite nadzorne ploče apsolutnih trendova samo na sirovom rangu IMD-a.

## Zamke

- **Usporedba rangova IMD-a među izdanjima (2015. naspram 2019.) kao vremenskog trenda**: temeljni pokazatelji, geografije i metodologija mijenjaju se među izdanjima; MHCLG izričito savjetuje protiv korištenja promjena ranga kao dokaza da je područje postalo više ili manje deprivirano.
- **Primjena IMD-a na razini LSOA-a na pojedince**: LSOA u decilu 1 i dalje sadrži nedeprivirana kućanstva, a LSOA u decilu 10 i dalje sadrži deprivirana; IMD opisuje područja, a ne ljude, a korištenje kao zamjene za individualnu prihvatljivost pogrešno klasificira u oba smjera.
- **Zanemarivanje detalja na razini domena u korist složenog ranga**: dva LSOA-a s identičnim složenim ocjenama mogu imati potpuno različite profile domena (jedan deprivirano zdravljem, drugi kriminalom); shema ciljanja usmjerena na jedan problem treba koristiti ocjenu relevantne domene, a ne miješani složeni rang.

## Izvori

- Ministry of Housing, Communities and Local Government. "English Indices of Deprivation 2019."
  <https://www.gov.uk/government/statistics/english-indices-of-deprivation-2019>
- MHCLG. "The English Indices of Deprivation 2019: Technical Report."
