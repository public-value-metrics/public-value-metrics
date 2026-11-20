# Društvena analiza troškova i koristi (SCBA)

Društvena analiza troškova i koristi pretvara svaki trošak i svaku korist neke politike ili programa, tržišne i netržišne, u zajedničku novčanu jedinicu, diskontira buduće tokove na sadašnju vrijednost i prebija ih kako bi dala jedan broj: čini li ovaj prijedlog društvo boljim i koliko?

## Zašto je važno

SCBA je zadana kvantitativna metoda u ekonomskom slučaju [procjene prema Green Booku](../procjena-prema-green-booku/): smjernice Ministarstva financija (HM Treasury) traže da prijedlozi pokažu pozitivnu neto sadašnju društvenu vrijednost (NPSV) kad god se koristi mogu vjerodostojno novčano izraziti, uz spremnost na plaćanje kao temeljno načelo vrednovanja netržišnih dobara
(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>,
Chapter 5). Disciplina koju ona nameće jest da „društvena” analiza troškova i koristi nije isto što i procjena privatnog ulaganja: mora uključiti troškove i koristi koji padaju na treće strane koje nisu strane u transakciji (vanjski učinci), mora rabiti [društvenu diskontnu stopu](../društvena-diskontna-stopa/) umjesto komercijalnog troška kapitala i trebala bi primijeniti [distribucijsko ponderiranje](../distribucijsko-ponderiranje/) gdje funta više znači siromašnijem kućanstvu nego bogatijem.

SCBA zakazuje točno ondje gdje to njezini kritičari očekuju: dobra bez tržišnog analoga (čist zrak, društvena kohezija, vrijednost spašenog života) moraju se novčano izraziti metodama [izjavljenih preferencija](../vrednovanje-prema-izjavljenim-preferencijama/) ili [otkrivenih preferencija](../vrednovanje-na-temelju-otkrivenih-preferencija/), ili se mora konstruirati [sjenska cijena](../sjenske-cijene/). Kad je novčano izražavanje osporeno, a ne samo teško, sam Green Book preporučuje povratak na [analizu troškovne učinkovitosti](../analiza-troškovne-učinkovitosti-u-državnoj-upravi/) ili [višekriterijsku analizu odlučivanja](../višekriterijska-analiza-odlučivanja/) umjesto forsiranja broja u koji nitko ne vjeruje.

## Matematika

```
NPSV = Σ [t=0 do T] (Korist_t − Trošak_t) / (1 + r)^t

pri čemu je:
  Korist_t  = sve novčano izražene koristi u godini t, uključujući netržišna
              dobra vrednovana izjavljenim/otkrivenim preferencijama ili sjenskom cijenom
  Trošak_t  = svi novčano izraženi troškovi u godini t, uključujući oportunitetni
              trošak resursa (vidi ../opportunity-cost-in-public-spending/)
  r         = društvena diskontna stopa (HM Treasury određuje 3,5 %, uz
              smanjenje na niže stope nakon 30. godine, prema Dodatku A Green Booka)
  T         = razdoblje procjene

Omjer koristi i troškova (BCR) = Σ PV(koristi) / Σ PV(troškova)
```

BCR iznad 1 (ili NPSV iznad nule) upućuje na neto društvenu vrijednost. Kategorije vrijednosti za novac prema Green Booku (kako se rabe u procjeni prometa i infrastrukture) označuju raspone BCR-a: ispod 1,0 je slaba vrijednost za novac, 1,0 do 1,5 niska, 1,5 do 2,0 srednja, 2,0 do 4,0 visoka, a iznad 4,0 vrlo visoka. Analiza osjetljivosti, ponovno izračunavanje NPSV-a uz pesimistične i optimistične pretpostavke, obvezna je, a ne neobvezna, jer novčano izražene netržišne koristi nose široke raspone neizvjesnosti.

## Primjer iz prakse

**Lokalna vlast**: općina procjenjuje ulaganje od 3 milijuna £ u novu mrežu biciklističkih i pješačkih staza tijekom 20-godišnjeg razdoblja procjene uz diskontnu stopu od 3,5 %.

```
Troškovi: 3 milijuna £ kapitala u godini 0, 50.000 £/godišnje održavanja (godine 1 do 20)
PV(održavanja) ≈ 50.000 £ × 14,2 (20-godišnji anuitetni faktor uz 3,5 %) ≈ 710.000 £
Ukupni PV(troškova) ≈ 3,71 milijuna £

Koristi (sve novčano izražene objavljenim alatima za vrednovanje DfT-a/WHO-a):
  Korist za zdravlje od veće tjelesne aktivnosti: 180.000 £/godišnje
  Smanjenje izostanaka s posla: 40.000 £/godišnje
  Rasterećenje prometa (manje vožnji automobilom): 60.000 £/godišnje
  Ukupni tok koristi: 280.000 £/godišnje
PV(koristi) ≈ 280.000 £ × 14,2 ≈ 3,98 milijuna £

NPSV = 3,98 milijuna £ − 3,71 milijuna £ = +0,27 milijuna £
BCR = 3,98 / 3,71 = 1,07 → „niska” vrijednost za novac
```

Projekt zadovoljava prag, ali tek za dlaku; analiza osjetljivosti uz 20 % nižu procjenu koristi za zdravlje (što odražava stvarnu neizvjesnost vrednovanja tjelesne aktivnosti) spušta BCR ispod 1,0, i upravo zato Green Book traži da se tablica osjetljivosti objavi uz glavni broj, a ne samo središnja procjena.

**Dobrotvorna organizacija**: program sprječavanja dojenačke smrtnosti koji košta 500.000 £ godišnje vrednuje se vrijednošću statističkog života (VSL), sjenskom cijenom, a ne opaženom tržišnom cijenom, od otprilike 2,1 milijuna £ (podatak Ministarstva financija ažuriran 2023., i sam izveden iz studija izjavljenih preferencija). Sprječavanje jedne dojenačke smrti godišnje uz trošak od 500.000 £ daje BCR od 4,2, što je uvjerljivo „vrlo visoka” vrijednost za novac, ali cijeli rezultat počiva na brojci VSL-a, zbog čega svaka SCBA koja rabi VSL mora je objaviti kao pretpostavku, a ne kao činjenicu.

## Veza s programskim inženjerstvom

SCBA je prirodan okvir za odluke o ulaganju u platforme i infrastrukturu u državnom softveru: usporedba zajedničke platforme za identitet s točkastim rješenjima pojedinih ministarstava, primjerice, zahtijeva novčano izražavanje koristi kao što su manji trošak dvostrukog uvođenja korisnika, manje prijevara i brže vrijeme do usluge, koje same po sebi nemaju tržišnu cijenu. Inženjeri koji grade temeljnu uslugu trebali bi očekivati da će voditelji programa tražiti ulazne podatke za tu analizu: jedinične troškove transakcija (vidi [trošak po transakciji](../trošak-po-transakciji/)), očekivane količine i troškove degradacije/zastoja. Disciplina koju je najvažnije preuzeti: diskontirati buduće koristi, izričito imenovati kontrafaktualnu polaznu vrijednost (vidi [kontrafaktualnu analizu](../kontrafaktualna-analiza/)) i nikad ne predstaviti jednu točkastu procjenu bez raspona osjetljivosti.

## Zamke

- **Dvostruko brojenje koristi.** Brojenje i „uštede vremena” i „produktivnosti stečene tim vremenom” kao zasebnih stavki koristi precjenjuje slučaj; ušteda vremena jest korist, a njezina daljnja upotreba nije dodatna korist osim ako je neovisno dokazana.
- **Izostavljanje istisnutih troškova.** Projekt koji prebacuje zagušenje s jedne ceste na drugu ili prijevaru s jednog kanala na drugi nije stvorio neto korist koju implicira njegov glavni NPSV, vidi [istiskivanje i pripisivanje učinka](../istiskivanje-i-pripisivanje-učinka/).
- **Rabljenje privatne diskontne stope.** Primjena komercijalnog troška kapitala (recimo 8 do 10 %) umjesto društvene diskontne stope sustavno podcjenjuje dugoročne javne koristi poput zdravstvenih i okolišnih dobitaka, vidi [društvenu diskontnu stopu](../društvena-diskontna-stopa/).
- **Novčano izražavanje neosporenog i mahanje rukom nad osporenim.** Ako su dvije trećine koristi prijedloga samouvjereno novčano izražena ušteda učinkovitosti, a jedna trećina klimavo novčano izražen dobitak u dobrobiti, glavni NPSV tiho miješa tvrd broj s mekim; iskažite ih zasebno.

## Izvori

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Chapter 5.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury. "Green Book supplementary guidance: value of a statistical life." 2023.
  <https://www.gov.uk/government/publications/green-book-supplementary-guidance-value-of-a-statistical-life>
- Department for Transport. "TAG unit A1.1: cost-benefit analysis." Transport Analysis Guidance.
  <https://www.gov.uk/guidance/transport-analysis-guidance-tag>
