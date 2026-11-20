# Godine života prilagođene dobrobiti (WELLBY)

WELLBY je jedan dodatni bod zadovoljstva životom, na standardnoj ljestvici dobrobiti od 0 do 10, za jednu osobu tijekom jedne godine. To je strukturni analog QALY-ja iz zdravstvene ekonomije, jedinstvene jedinice koja omogućuje usporedbu intervencija čiji ishodi nemaju ništa drugo zajedničko, ali izgrađen na subjektivnoj dobrobiti, a ne na kliničkim zdravstvenim stanjima, i određen u dokumentu Ministarstva financija (HM Treasury) „Wellbeing guidance for appraisal: supplementary Green Book guidance” (2021.).

## Zašto je važno

Analiza troškova i koristi treba zajedničku jedinicu da bi usporedila potporu omladinskom klubu, sigurnosni projekt na cestama i uslugu mentalnog zdravlja, koji ne dijele nijednu mjeru ishoda. Zdravstvena ekonomija riješila je to za kliničke intervencije QALY-jem: godinom života prilagođenom kvaliteti, ponderiranom od 0 (mrtav) do 1 (puno zdravlje). Smjernice Ministarstva financija o dobrobiti proširuju istu logiku na nezdravstvenu javnu potrošnju, rabeći ONS-ovo usklađeno pitanje o zadovoljstvu životom („Overall, how satisfied are you with your life nowadays?”, odgovor od 0 do 10) kao ljestvicu ishoda umjesto indeksa zdravstvenog stanja. WELLBY od 1 znači da se zadovoljstvo životom jedne osobe poveća za cijeli bod tijekom jedne godine (ili, ekvivalentno, da se zadovoljstvo deset ljudi poveća za po 0,1 boda tijekom godine; WELLBY-ji se zbrajaju kroz populaciju kao QALY-ji). Smjernice Ministarstva financija određuju ilustrativnu novčanu vrijednost po WELLBY-ju (oko 13.000 £, cijene 2019./20.), izvedenu usklađivanjem podataka o subjektivnoj dobrobiti s drugim pristupima vrijednosti godine života, što procjenjivačima daje način da novčano izraze ishode (smanjenje usamljenosti, društvenu koheziju, pristup zelenim površinama) koje su tehnike [vrednovanja dobrobiti](../vrednovanje-dobrobiti/) prije mogle samo opisati, a ne usporediti na zajedničkoj osnovi sa zdravstvenom ili sigurnosnom potrošnjom.

## Matematika

```
WELLBY = Δ zadovoljstva životom (ljestvica 0–10) × broj godina trajanja promjene
        (zbrojeno za sve pogođene osobe)

Novčana korist od dobrobiti = ostvareni WELLBY-ji × vrijednost po WELLBY-ju (referentna vrijednost HMT-a)

usp. QALY = Δ korisnosti zdravstvenog stanja (ljestvica 0–1) × godine proživljene u tom stanju
```

Ljestvica zadovoljstva 0–10 i ljestvica korisnosti QALY-ja 0–1 nisu zamjenjive bez koraka pretvorbe; smjernice Ministarstva financija raspravljaju o njihovu usklađivanju tako da, primjerice, zdravstvena intervencija procijenjena u QALY-jima i društvena intervencija procijenjena u WELLBY-jima nisu tiho dvaput brojene niti ostaju neusporedive unutar iste [procjene prema Green Booku](../procjena-prema-green-booku/).

## Primjer iz prakse

**Usluga protiv usamljenosti lokalne vlasti**: program druženja služi 400 izoliranih starijih stanovnika. Naknadne ankete pokazuju da prosječno zadovoljstvo životom raste s 5,2 na 6,0 (dobitak od 0,8 boda), a procjenjuje se da učinak traje 2 godine prije nego što izblijedi.

```
WELLBY-ji = 400 osoba × 0,8 boda × 2 godine = 640 WELLBY-ja

Novčana vrijednost = 640 × 13.000 £ = 8.320.000 £
```

Naspram godišnjeg troška programa od 300.000 £ (600.000 £ za 2 godine) omjer koristi i troškova iznosi otprilike 8.320.000 / 600.000 ≈ **13,9:1**, brojka koja sada može stajati u istoj tablici procjene kao trošak po izbjegnutom QALY-ju zdravstvenog programa ili uštede vremena putovanja prometnog projekta.

**Dobrotvorna organizacija, manjeg opsega**: program zajednice za umjetnost doseže 50 sudionika s izmjerenim dobitkom zadovoljstva od 0,3 boda, koji traje 1 godinu.

```
WELLBY-ji = 50 × 0,3 × 1 = 15 WELLBY-ja
Novčana vrijednost = 15 × 13.000 £ = 195.000 £
```

## Veza s programskim inženjerstvom

- Svaka usluga okrenuta građanima koja već prikuplja stavku ankete o zadovoljstvu životom ili dobrobiti (mnoge platforme lokalnih vlasti i zdravstva i skrbi to čine, slijedeći ONS-ova četiri standardna pitanja o dobrobiti) može izračunati WELLBY-je izravno iz postojećih cjevovoda podataka, umjesto da naručuje posebnu ekonomsku evaluaciju za svaku promjenu usluge.
- WELLBY-ji daju inženjerskim timovima koji grade za izvješćivanje prema [Zakonu o društvenoj vrijednosti](../zakon-o-društvenoj-vrijednosti/) ili [društvenom povratu ulaganja](../društveni-povrat-ulaganja/) nacionalno standardiziran nazivnik koji potvrđuje Ministarstvo financija, izbjegavajući proliferaciju posebnih „ocjena učinka” koje se ne mogu usporediti među ugovorima ili dobavljačima.
- Budući da su WELLBY-ji aditivni kroz ljude i vrijeme, uredno se uklapaju u praćenje ishoda na razini populacije koje se rabi u sustavima [odgovornosti utemeljene na ishodima](../odgovornost-zasnovana-na-ishodima/): nadzorna ploča usluge može iskazivati kumulativne WELLBY-je ostvarene po tromjesečju kao što zdravstveni sustav iskazuje stečene QALY-je.

## Zamke

- **Pretpostavka da su samoprijavljeni dobici zadovoljstva u cijelosti pripisivi intervenciji**: bez kontrafaktuala (usporedne skupine ili dizajna prije/poslije s kontrolama) ne možete odvojiti dobitak WELLBY-ja od općih trendova; vidi [kontrafaktualnu analizu](../kontrafaktualna-analiza/).
- **Miješanje WELLBY-ja i QALY-ja u jednom zbroju bez usklađivanja**: smjernice Ministarstva financija izričite su da ta dva rabe različite ljestvice i različite temeljne teorije vrijednosti; naivno zbrajanje dvaput broji preklapajuću dobrobit.
- **Nekritička uporaba referentne novčane vrijednosti**: brojka £-po-WELLBY-ju nacionalna je prosječna procjena sa stvarnim rasponima neizvjesnosti; smjernice Ministarstva financija preporučuju analizu osjetljivosti, a ne tretiranje te vrijednosti kao fiksnog tečaja.

## Izvori

- HM Treasury. "Wellbeing guidance for appraisal: supplementary Green Book guidance." (2021)
  <https://www.gov.uk/government/publications/wellbeing-guidance-for-appraisal-supplementary-green-book-guidance>
- ONS. "Personal well-being user guidance" (the four standard wellbeing questions).
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing>
- HM Treasury. "The Green Book: Central Government Guidance on Appraisal and Evaluation."
