# Vrednovanje dobrobiti (WELLBY)

Vrednovanje dobrobiti cijeni učinak politike izravno u pojmovima zadovoljstva životom, rabeći WELLBY (godinu života prilagođenu dobrobiti) kao jedinicu: jedan WELLBY jednak je promjeni od jednog boda na ljestvici zadovoljstva životom od 0 do 10, održanoj godinu dana. To je službeno odobrena alternativa Ministarstva financija (HM Treasury) novčanom izražavanju svake koristi putem spremnosti na plaćanje.

## Zašto je važno

Dokument Ministarstva financija „Wellbeing guidance for appraisal: supplementary Green Book guidance” (2021.,
<https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>)
formalno je uveo podatke o subjektivnoj dobrobiti u procjene središnje države i dao analitičarima put za vrednovanje ishoda (društvena povezanost, mentalno zdravlje, sigurnost, građansko sudjelovanje) koje metode [izjavljenih preferencija](../vrednovanje-prema-izjavljenim-preferencijama/) i [otkrivenih preferencija](../vrednovanje-na-temelju-otkrivenih-preferencija/) teško uvjerljivo cijene, jer su ljudi često loši prognostičari toga koliko će neko dobro doista utjecati na njihovo zadovoljstvo životom. Smjernice, razvijene zajedno s What Works Centre for Wellbeing, određuju preporučenu novčanu vrijednost po WELLBY-ju, 13.000 £ (cijene 2021., povremeno se revidira), izvedenu iz odnosa između dohotka i zadovoljstva životom uočenog u velikim anketama o dobrobiti (ponajprije ONS-ovoj Annual Population Survey, koja od 2011. postavlja četiri ONS4 pitanja o dobrobiti), što analitičarima daje tečaj za pretvorbu natrag u funte kad je potrebna novčana usporedba s drugim procjenama prema Green Booku.

Metoda je važna jer obrće uobičajenu logiku vrednovanja: umjesto da pita koliko bi ljudi platili za ishod (izjavljene preferencije) ili da izvodi vrijednost iz srodne tržišne transakcije (otkrivene preferencije), ona izravno mjeri učinak ishoda na prijavljeno zadovoljstvo životom, zaobilazeći jaz između onoga što ljudi kažu da žele i onoga što ih doista čini boljima. To je ujedno njezino središnje ograničenje: samoprijavljeno zadovoljstvo životom pod utjecajem je prilagodbe i učinaka uokvirivanja koje pažljiv praktičar mora kontrolirati.

## Matematika

```
WELLBY = 1 bod zadovoljstva životom (ljestvica 0-10) održan za 1 osobu tijekom 1 godine

Ukupni WELLBY-ji iz politike =
  Σ (promjena rezultata zadovoljstva životom) × (broj pogođenih osoba)
    × (trajanje u godinama, diskontirano društvenom diskontnom stopom)

Novčana vrijednost = ukupni WELLBY-ji × vrijednost po WELLBY-ju
  (preporučena vrijednost HM Treasuryja: 13.000 £ po WELLBY-ju, cijene 2021.,
   podložno povremenoj reviziji; provjerite važeće smjernice prije uporabe)
```

To se razlikuje od [godine života prilagođene dobrobiti](../godine-života-prilagođene-dobrobiti/) u zdravstvenoj ekonomiji, koja se obično veže uz ljestvice zdravstvene kvalitete života (EQ-5D i slične), a ne uz opće zadovoljstvo životom; to dvoje je srodno, ali nije zamjenjivo, a procjene prema Green Booku trebaju biti izričite o tome koja ljestvica i metoda prikupljanja stoje iza iskazane brojke WELLBY-ja.

## Primjer iz prakse

**Lokalna vlast**: općina provodi program druženja u zajednici za izolirane starije stanovnike, koji služi 400 osoba. Anketa dobrobiti prije/poslije s pitanjem ONS4 o zadovoljstvu životom pokazuje da prosječni rezultat sudionika raste s 5,8 na 6,5 (dobitak od 0,7 boda), održan tijekom 2 godine financiranog trajanja programa.

```
Ostvareni WELLBY-ji = 400 osoba × 0,7 boda × 2 godine = 560 WELLBY-ja
Novčana vrijednost = 560 × 13.000 £ = 7,28 milijuna £
Trošak programa = 450.000 £ za 2 godine

Omjer koristi i troškova ≈ 7,28 milijuna £ / 0,45 milijuna £ ≈ 16:1
```

Ovako visok omjer treba potaknuti provjeru, a ne slavlje: smjernice Green Booka o dobrobiti izričito upozoravaju da se samoprijavljeni dobici na malom uzorku ne prihvaćaju olako bez provjere učinaka selekcije (jesu li se u program uključili samo najdruštveniji stanovnici kojima je najvjerojatnije bilo da će se poboljšati?) i bez usporedne skupine; dobro oblikovana evaluacija odbila bi kontrafaktualnu promjenu uočenu kod nesudionika, vidi [kontrafaktualnu analizu](../kontrafaktualna-analiza/).

**Središnja država**: usporedba dvaju programa zapošljavanja WELLBY-jima, a ne samo zaradom, hvata da nezaposlenost nosi trošak dobrobiti izvan izgubljenog dohotka: britansko istraživanje dobrobiti dosljedno nalazi da nezaposlenost smanjuje zadovoljstvo životom više nego što bi predviđao sam gubitak dohotka, zbog nenovčanih učinaka gubitka strukture, svrhe i društvenog kontakta. Program procijenjen samo prema dobitku u zaradi podcijenio bi svoju vrijednost u odnosu na onaj procijenjen dodatno prema WELLBY-jima.

## Veza s programskim inženjerstvom

Vrednovanje dobrobiti rijetko izravno stiže do inženjerskih timova, ali oblikuje što se definira kao „uspjeh” za proizvode društvenog sektora i javnih usluga: digitalna platforma za druženje, alat za trijažu mentalnog zdravlja ili platforma zajednice za izolirane stanovnike trebaju očekivati da će se njihov učinak na kraju mjeriti na ovaj način, što znači da analitika proizvoda mora bilježiti *tko* je dosegnut i *koliko dugo*, a ne samo brojeve korištenja. Ugradite instrumentaciju ankete o dobrobiti (ONS4 ili provjerene ekvivalente) u evaluaciju usluge od početka umjesto da je naknadno dodajete; naknadno ugrađivanje polazne vrijednosti dobrobiti nakon pokretanja usluge u potpunosti gubi usporedbu prije/poslije. Vidi [ishode naspram izlaznih rezultata](../ishodi-naspram-izlaznih-rezultata/) i [metode evaluacije učinka](../metode-evaluacije-učinka/).

## Zamke

- **Nema kontrafaktuala ni usporedne skupine.** Dobitak dobrobiti prije/poslije bez kontrole onoga što bi se dogodilo u svakom slučaju precjenjuje učinak programa; vidi [kontrafaktualnu analizu](../kontrafaktualna-analiza/) i [dodatnost i mrtvi teret](../dodatnost-i-mrtvi-teret/).
- **Mali, samoodabrani uzorci.** Ankete dobrobiti sudionika programa koji su se sami uključili sklone su pristranosti odabira: ljudi koji su se uključili i ostali plauzibilno su već bili u uzlaznom trendu.
- **Tretiranje pretvorbe £-po-WELLBY-ju kao precizne.** Novčana vrijednost politička je konvencija izvedena iz regresija dohotka i dobrobiti, a ne tržišna cijena; rabite je za usporedivost među procjenama prema Green Booku, a ne kao tvrdnju o tome što dobrobit „vrijedi”.
- **Brkanje WELLBY-ja sa zdravstvenim QALY-jima.** Mjere različite konstrukte na različitim ljestvicama; vidi [godine života prilagođene dobrobiti](../godine-života-prilagođene-dobrobiti/) za zdravstveno-ekonomsku varijantu i ne usrednjujte ih zajedno.

## Izvori

- HM Treasury. "Wellbeing guidance for appraisal: supplementary Green Book guidance." 2021.
  <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>
- What Works Centre for Wellbeing. <https://whatworkswellbeing.org/>
- Office for National Statistics. "Personal well-being in the UK" (ONS4 measures).
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing>
- Fujiwara D, et al. "Wellbeing Valuation: A Nascent Field?" LSE / Simetrica research summaries.
