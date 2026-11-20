# Metode evaluacije učinka

Metode evaluacije učinka su statistički i eksperimentalni nacrti kojima se procjenjuje što je politika ili program zapravo uzrokovao, za razliku od onoga što bi se dogodilo u svakom slučaju: randomizirana kontrolirana ispitivanja (RCT), razlika razlika (difference-in-differences), uparivanje prema sklonosti (propensity score matching) i nacrt regresijskog diskontinuiteta (regression discontinuity design) četiri su najčešće korištena u britanskoj javnoj politici. Postoje jer se većina državnih intervencija ne može testirati u laboratoriju: ne može se nasumično odrediti koji će grad dobiti novu autobusnu liniju kao što se može nasumično odrediti koji pacijent dobiva lijek, pa te metode posuđuju istu uzročnu logiku bez uvijek zahtijevane nasumične dodjele.

## Zašto je važno

Magenta Book britanskog Ministarstva financija, Annex A o kvazi-eksperimentalnim metodama, kanonske su smjernice britanske vlade za odabir među tim nacrtima, a tijela poput Education Endowment Foundation i What Works Centre for Local Economic Growth institucionaliziraju hijerarhiju dokaza izgrađenu oko njih: RCT-ovi gdje je randomizacija izvediva i etična, kvazi-eksperimentalni nacrti gdje nije. Izbor metode nije tehnički naknadni dodatak: određuje može li evaluacija odgovoriti „je li program to uzrokovao?” ili samo „je li se to dogodilo nakon što je program počeo?”, a to je isto pitanje koje [kontrafaktualna analiza](../kontrafaktualna-analiza/) nastoji nametnuti praktičarima prije nego što se evaluacija uopće naruči.

## Matematika

```
RCT:
  Impact = mean(outcome | treatment group) − mean(outcome | control group)
  (valid because assignment to treatment is random)

Difference-in-differences (DiD):
  Impact = [outcome_after(treated) − outcome_before(treated)]
         − [outcome_after(control) − outcome_before(control)]
  (requires a "parallel trends" assumption: treated and control would have moved together
   absent the intervention)

Propensity score matching (PSM):
  1. Estimate P(treatment = 1 | covariates X) for every unit → propensity score
  2. Match treated units to untreated units with similar propensity scores
  3. Impact = mean(outcome | treated) − mean(outcome | matched control)

Regression discontinuity design (RDD):
  Impact = jump in outcome observed at the eligibility threshold,
           comparing units just above vs just below the cutoff
```

## Primjer iz prakse

**Lokalna uprava (razlika razlika za program za problematične obitelji)**: ishod je pohađanje škole. Područje s intervencijom prelazi s 84 % na 89 % pohađanja (+5 postotnih bodova) tijekom razdoblja programa; usporedivo područje bez intervencije prelazi s 85 % na 87 % (+2 postotna boda) u istom razdoblju. DiD procjena učinka: 5 − 2 = +3 postotna boda koja se mogu pripisati programu. Primijenjeno na skupinu od 2.000 učenika u području s intervencijom, to je u skladu s otprilike 60 dodatnih učenika (3 % × 2.000) koji dosežu višu kategoriju pohađanja, ekstrapolacija koju treba prijaviti s ogradom o paralelnim trendovima, a ne kao točan broj.

**Dobrotvorna organizacija (uparivanje prema sklonosti za organizaciju za zapošljivost)**: 300 sudionika programa upareno je s 300 pojedinaca iz većeg administrativnog skupa podataka pomoću ocjena sklonosti izgrađenih iz dobi, prethodne povijesti zaposlenja i razine kvalifikacije. Stopa zaposlenosti nakon dvanaest mjeseci: uparena skupina s intervencijom 46 %, uparena usporedna skupina 33 %. PSM procjena učinka: 46 % − 33 % = +13 postotnih bodova koji se mogu pripisati programu, uz uvjet da nijedan neopaženi zbunjujući čimbenik (poput motivacije) ne pokreće i sudjelovanje i ishod.

## Veza s programskim inženjerstvom

Je li neki od tih nacrta kasnije izvediv uvelike ovisi o odlukama podatkovnog inženjerstva donesenim rano. RDD treba točno zabilježenu varijablu odabira i doista čistu granicu prihvatljivosti; DiD treba usporedive panel podatke kroz vrijeme za područja s intervencijom i usporedna područja, što znači dosljedna spajanja među sustavima i godinama; PSM treba bogate osnovne kovarijate zabilježene prije intervencije, a ne naknadno rekonstruirane. Podatkovni model osmišljen od početka uz [teoriju promjene](../teorija-promjene/) i [logički model](../logički-model/), koji bilježi osnovne kovarijate, datume i zapise prihvatljive za usporednu skupinu, omogućuje strogu evaluaciju učinka kasnije umjesto skupe naknadne trke. Vidi [evaluaciju učinka naspram evaluacije procesa](../evaluacija-učinka-naspram-evaluacije-procesa/) za komplementarno pitanje na koje te metode same ne odgovaraju.

## Zamke

- **Forsiranje RCT-a gdje je neizvediv ili neetičan**, ili obrnuto, nikad ne razmatranje kvazi-eksperimentalnog nacrta kada je prava prilika za njega (granica politike, postupno uvođenje) bila dostupna i neiskorištena.
- **Zanemarivanje pretpostavke o paralelnim trendovima kod DiD-a.** Ako se usporedno područje već razilazilo od područja s intervencijom prije intervencije, usporedba u dvije točke je kontaminirana; provjerite trendove prije intervencije, a ne samo prije/poslije.
- **Uparivanje samo prema opaženim kovarijatama kod PSM-a.** Neopaženi odabir, poput motivacije sudionika, može iskriviti procjenu čak i kada su opažene kovarijate dobro uravnotežene.
- **Manipulacija varijablom odabira kod RDD-a.** Ako ljudi mogu utjecati na svoj rezultat da pada tik unutar praga prihvatljivosti, diskontinuitet više ne izolira uzročni učinak.

## Izvori

- HM Treasury, Magenta Book (2020), Annex A: Quasi-Experimental Methods. <https://www.gov.uk/government/publications/the-magenta-book>
- What Works Centre for Local Economic Growth, evidence review methodology. <https://whatworksgrowth.org/>
- Education Endowment Foundation, evaluation guidance. <https://educationendowmentfoundation.org.uk/>
