# Metrike toka u isporuci državne uprave

Metrike toka (Littleov zakon, ograničenja rada u tijeku (WIP) i učinkovitost toka) opisuju koliko brzo posao prolazi kroz sustav ograničenog kapaciteta. Ploča sprinta jedan je takav sustav; red zahtjeva za naknade, registar zahtjeva za građevinske dozvole ili zaostatak vizne obrade posve je ista matematika u drugoj odori.

## Zašto je važno

Predmeti u državnoj upravi su sustavi redova čekanja, a sustavi redova čekanja poštuju zakone redova čekanja bez obzira mjeri li ih itko. Zakonski rokovi odlučivanja to čine izričitim: prema britanskom režimu prostornog planiranja (Town and Country Planning) većina manjih zahtjeva za građevinske dozvole ima zakonski cilj odlučivanja od 8 tjedana, a veliki zahtjevi 13 tjedana, dakle obvezu vremena ciklusa upisanu izravno u zakon. Zaostatak obrade zahtjeva za azil u Home Officeu, koji su više puta preispitivali National Audit Office i Home Affairs Select Committee, dobro je dokumentiran slučaj javnog sustava u kojem je rad u tijeku dulje vrijeme rastao brže od propusnosti, zbog čega su vremena ciklusa daleko premašila svako zakonsko ili uslužno očekivanje. Metrike toka daju inženjerima i voditeljima obrade predmeta zajednički kvantitativan rječnik upravo za taj oblik neuspjeha, umjesto da ostane kvalitativan „problem zaostatka”.

## Matematika

```
Little's Law:  WIP = Throughput × Cycle Time
           →   Cycle Time = WIP / Throughput

Flow efficiency = active (touch) time / total cycle time   (Vacanti)

WIP limit effect: for fixed throughput, halving WIP roughly halves
average cycle time (Little's Law rearranged) — the lever available
without adding headcount.
```

Za ekvivalentnu matematiku primijenjenu na softverske cjevovode isporuke, a ne na obradu predmeta, vidi [DORA metrike za javnu vrijednost](../dora-metrike-za-javnu-vrijednost/).

## Primjer iz prakse

**Odjel za prostorno planiranje lokalne uprave**: u svakom je trenutku otvoreno 400 zahtjeva (WIP), a tim rješava 50 zahtjeva tjedno (propusnost).

```
Cycle time = WIP / Throughput = 400 / 50 = 8 weeks
```

To pada točno na zakonski cilj od 8 tjedana za manje zahtjeve, bez ikakve rezerve, što znači da svaka varijabilnost dolazne potražnje ili vremena odgovora savjetovanih strana pomiče odluke preko zakonskog roka.

**Učinkovitost toka**: od tih 8 tjedana (56 kalendarskih dana) zahtjev obično ima oko 6 sati stvarne obrade od strane službenika.

```
Flow efficiency = 6 hours / (56 days × 8 working hours/day)
                = 6 / 448 ≈ 1,3%
```

Vacantijev referentni pokazatelj za softverske timove tipičnu učinkovitost toka postavlja na 15 – 20 %; obrada predmeta u državnoj upravi, s više zakonskih predaja savjetovanim stranama i prozorima javnog savjetovanja, često je za red veličine niža. Tih 98,7 % vremena „čekanja” je mjesto gdje osam tjedana zapravo odlazi, a ne u kapacitetu službenika.

**Intervencija ograničenjem WIP-a**: ograničenje otvorenih zahtjeva po službeniku na 15 umjesto neograničenih 25 (uz konstantnu propusnost) smanjuje WIP s 400 na otprilike 240 u timu od 16 ljudi:

```
New cycle time = 240 / 50 = 4,8 weeks
```

Gotovo prepolovljeno vrijeme ciklusa zahvaljujući promjeni politike, a ne povećanju osoblja: ista poluga koju povlače timovi isporuke u DORA stilu kada ograničavaju WIP sprinta.

## Veza s programskim inženjerstvom

Metrike toka zajednički su jezik između Kanban ploče tima za isporuku i radnog prostora obrade predmeta za koji se softver gradi: red službenika i red pull requestova oba su podložni Littleovu zakonu i oba probijaju ciljeve vremena ciklusa na isti način, previše WIP-a u odnosu na propusnost. To izravno utječe na [trošak odgode u javnim programima](../trošak-odgode-u-javnim-programima/): vrijeme ciklusa × CoD su funte koje u svakom trenutku stoje u redu, te na [standarde usluga i metrike transakcija](../standardi-usluga-i-metrike-transakcija/), gdje je objavljeni cilj vremena obrade obveza vremena ciklusa koju, kada se promaši, mogu dijagnosticirati samo metrike toka. Softver za obradu predmeta treba WIP i vrijeme ciklusa izlagati kao operativne metrike prvog reda, a ne ih zakopati u sustav upravljanja predmetima koji nitko ne upituje.

## Zamke

- **Uvođenje ograničenja WIP-a bez rješavanja stvarnog uskog grla**: ako je ograničenje vrijeme odgovora vanjske zakonske savjetovane strane, ograničavanje WIP-a službenika samo premješta red uzvodno, umjesto da ga skrati.
- **Tretiranje učinkovitosti toka kao cilja koji se može namještati**: žurba oko 1,3 % aktivnog vremena jedva pomiče vrijeme ciklusa; poluga je gotovo uvijek u stanjima čekanja, što obično znači redizajn procesa, a ne brzinu službenika.
- **Zanemarivanje varijabilnosti**: Littleov zakon opisuje prosjeke; opterećenje s velikom varijancom potražnje treba zaštitni kapacitet, a ne samo strože ograničenje WIP-a, inače će se zakonski rokovi i dalje promašivati na nestabilnom repu iako se prosjek poboljšava.
- **Nedosljedno mjerenje WIP-a**: predmet „otvoren” u službenoj evidenciji, a zapravo zaustavljen u čekanju treće strane, i dalje je WIP; njegovo izuzimanje laska brojkama bez promjene stvarnosti iz perspektive građana.

## Izvori

- Vacanti D, *Actionable Agile Metrics for Predictability: An Introduction*, Actionable Agile Press, 2015.
- Reinertsen DG, *The Principles of Product Development Flow*, Celeritas Publishing, 2009.
- Ministry of Housing, Communities and Local Government, planning application statutory timescales. <https://www.gov.uk/guidance/making-an-application>
- National Audit Office, reports on Home Office asylum casework and accommodation. <https://www.nao.org.uk/>
