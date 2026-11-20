# DORA metrike za javnu vrijednost

DORA (DevOps Research and Assessment) metrike (učestalost isporuke, vrijeme provedbe promjene, stopa neuspjeha promjena i vrijeme oporavka usluge, uz pouzdanost kao petu) najbolje su potvrđeni referentni pokazatelji učinka isporuke u softverskoj industriji. Prevedene u jezik odgovornosti u javnom sektoru, svaka od njih izravan je pokazatelj koliko brzo i koliko sigurno javna vrijednost stiže do građanina.

## Zašto je važno

Desetljeće DORA-inih istraživanja, objavljivano svake godine kao *Accelerate State of DevOps Report* (metodologija Forsgren, Humblea i Kima, a danas ga provodi Google Cloud), svrstava timove u elitne, visoke, srednje i niske. Elitni timovi isporučuju na zahtjev, od commita do produkcije im treba manje od jednog dana, kod otprilike 5 % promjena dolazi do neuspjeha, a oporavljaju se za manje od sat vremena; niski izvođači isporučuju mjesečno ili rjeđe, treba im mjeseci, kod oko 40 % promjena dolazi do neuspjeha, a oporavak traje tjednima. U državnoj upravi to nisu inženjerske metrike radi dojma: Service Standard Government Digital Servicea traži od timova da „često iteriraju i poboljšavaju” te da brzo odgovaraju na potrebe korisnika, a ministarstva koja ne mogu sigurno i često isporučivati strukturno ne mogu ispuniti taj standard, što god pokazivalo njihovo istraživanje korisnika. Vlastiti rad Cabinet Officea na digitalnoj učinkovitosti pokazao je da je skupo kada se građanina nakon neuspjele ili spore digitalne transakcije pošalje na telefonski ili papirnati kanal: GDS-ov Digital Efficiency Report iz 2012. procijenio je da neke digitalne transakcije koštaju tek 20p, naspram telefonskih ili osobnih kontakata koji koštaju do £8,62, pa neuspjela promjena na usluzi okrenutoj javnosti ne košta samo inženjersko vrijeme, nego stvarne funte prebacuje na proračun kontaktnog centra (vidi [uštede prebacivanjem kanala](../uštede-prelaskom-na-druge-kanale/)).

## Matematika

```
Deployment frequency  = production deployments / time
Lead time for changes = t(deploy) − t(commit), median
Change failure rate   = failed changes / total changes × 100
Time to restore (MTTR) = t(restored) − t(failure), median
Reliability            = SLO attainment (availability, latency, correctness)
```

Prijevodi u javnu vrijednost:

```
Lead time      → weeks in the pipeline × CoD, see cost-of-delay-in-public-programmes
Failure rate   → citizen-facing incident rate: CFR × cost per redirected
                 contact-centre call (or per failed statutory transaction)
Recovery time  → service outage harm: MTTR × (claims/applications blocked
                 per hour) × downstream cost or wellbeing loss per unit
Reliability    → benefit discount: a service at 99% availability delivers
                 ≈ 0,99 of its modelled benefit — the delivery analogue
                 of take-up or compliance shortfall
```

## Primjer iz prakse

Tim portala za zahtjeve za naknade lokalne uprave, prije i poslije ulaganja u inženjering isporuke:

```
                    Before      After
Deploys             monthly     weekly
Lead time           8 weeks     5 days
CFR                 30%         10%
MTTR                3 days      4 hours
```

Tim isporuči oko 25 poboljšanja godišnje, prosječne vrijednosti £8.000 tjedno ([trošak odgode](../trošak-odgode-u-javnim-programima/)). Skraćenje vremena provedbe za otprilike 7,3 tjedna povlači tok koristi svakog poboljšanja unaprijed: 25 × 7,3 × 8.000 ≈ **£1.460.000 godišnje** ranije isporučene vrijednosti. Što se tiče stope neuspjeha: 25 × (0,30 − 0,10) = 5 manje neuspjelih promjena godišnje; svaka neuspjela promjena na javnom portalu obično preusmjeri procijenjenih 2.000 građana na telefonski kanal po £8,62 umjesto 20p, što je neto trošak od otprilike £8,42 × 2.000 ≈ £16.840 po incidentu, pa izbjegavanje 5 incidenata štedi ≈ **£84.200 godišnje**. Ulaganje u inženjering isporuke vrednuje se u istoj valuti kao i svaki drugi slučaj javne vrijednosti.

## Riješen primjer, nastavak: pouzdanost

Ako portal radi uz dostupnost od 97 % umjesto ciljanih 99,5 %, a svaki postotni bod nedostupnosti modelira se kao 2 % zahtjeva izgubljenih odustajanjem, usluga isporučuje otprilike 0,975 svoje modelirane koristi od £2 mil. godišnje, što je diskont koristi od £50.000 godišnje koji nadzorna ploča samo s dostupnošću nikada ne prikazuje.

## Veza s programskim inženjerstvom

DORA metrike operativne su metrike javne usluge u drugoj odjeći: vrijeme provedbe odgovara [standardima usluga i metrikama transakcija](../standardi-usluga-i-metrike-transakcija/); stopa neuspjeha promjena odgovara stopama ponovnog rada i pritužbi; MTTR odgovara tome koliko dugo zakonom propisana usluga nije dostupna podnositeljima zahtjeva. Tehnike poboljšanja prenose se u oba smjera jer su oba sustava redovi čekanja pod ograničenjima odgovornosti: za matematiku redova čekanja vidi [metrike toka u isporuci državne uprave](../metrike-toka-u-isporuci-državne-uprave/). Uočite i DORA-in nalaz iz 2025. da usvajanje umjetne inteligencije korelira s većom propusnošću, ali *lošijom* stabilnošću: intervencija s djelotvornošću i nuspojavama, upravo ona neto analiza koristi koju razrađuje tema [produktivnost umjetne inteligencije](../produktivnost-umjetne-inteligencije-u-javnom-sektoru/) u ovoj skupini.

## Zamke

- **Namještanje metrika**: napuhavanje broja isporuka praznim izdanjima ili izuzimanje hitnih ispravaka iz broja neuspjelih promjena. Definirajte događaje jednako precizno kao što zakonski standard usluge definira „uspješnu transakciju”.
- **Ljestvice među ministarstvima**: DORA klasteri uspoređuju prakse isporuke, a ne usluge s različitim profilima rizika; sustav plaćanja poreza ocijenjen kao „visok” može biti ispravan stav gdje bi „elitni” bio nepromišljen zbog zahtjeva jamstva.
- **Optimizacija samo jedne metrike**: brzina bez stope neuspjeha promjena klasičan je kompromis propusnosti i nestabilnosti; izvještavajte o sve četiri zajedno, a ne kao o jednoj ocjeni.

## Izvori

- DORA research and the annual *Accelerate State of DevOps Report*. <https://dora.dev/>
- Forsgren N, Humble J, Kim G, *Accelerate: The Science of Lean Software and DevOps*, IT Revolution Press, 2018.
- Cabinet Office, Digital Efficiency Report, 2012.
- DORA, 2025 State of AI-assisted Software Development report. <https://dora.dev/dora-report-2025/>
