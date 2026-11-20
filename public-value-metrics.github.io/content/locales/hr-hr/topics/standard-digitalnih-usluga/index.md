# Standard digitalnih usluga

GOV.UK Service Standard (standard usluga) je vrata kroz koja mora proći svaka digitalna usluga središnje vlade prije pokretanja: 14 objavljenih točaka koje na kraju svake faze isporuke ocjenjuje neovisno povjerenstvo. To je mehanizam koji parolu „gradimo dobre javne usluge” pretvara u odluku „prolazi / ne prolazi” s papirnatim tragom, i izravni nasljednik zahtjeva „digitalno prema zadanim postavkama” (digital by default) iz Government Digital Strategy iz 2012. godine.

## Zašto je važno

Prije Service Standarda neuspjeh državnih informacijskih sustava rijetko je bio vidljiv prije pokretanja i rijetko ga se moglo pripisati odluci na koju bi netko mogao pokazati prstom. Government Digital Strategy iz 2012. obvezala je ministarstva da 25 najopterećenijih transakcijskih usluga namijenjenih javnosti preoblikuju u „digitalno prema zadanim postavkama” te je tu obvezu poduprla mehanizmom usklađenosti: usluge nisu smjele postati dostupne na GOV.UK bez uspješne procjene usluge prema tadašnjem standardu od 26 točaka (2019. sažetom na 18, a danas na važećih 14 točaka u tri skupine: razumijevanje potreba korisnika, pružanje dobre usluge i primjena prave tehnologije). Procjena usluge stvaran je događaj: povjerenstvo procjenitelja iz GDS-a ili ministarstva pregledava dokaze, ispituje tim i donosi presudu (prolazi, ne prolazi ili „nije ispunjeno”) za svaku točku, objavljenu na stranici procjene usluge. Neuspjela procjena blokira prelazak usluge iz privatne beta faze u javnu beta fazu ili iz bete u produkciju. To je stvarna prepreka, a ne puki pregled.

## Matematika

Service Standard je okvir, a ne formula, ali funkcionira kao struktura odlučivanja po fazama:

```
Discovery  → Alpha assessment  → Beta assessment  → Live assessment
             (not mandatory     (mandatory before   (mandatory before
              for all services,  public beta launch) removing "beta" tag
              but recommended)                       and closing old channel)

Each assessment: evidence + team interview → panel verdict per point
  Met / Partially met / Not met
Overall outcome: Pass / Pass with conditions / Fail (re-assessment required)

Cost of a fail ≈ cost of the next sprint cycle to remediate
              + delay to the [channel-shift-savings](../uštede-prelaskom-na-druge-kanale/)
                the service was funded to deliver
```

Točka 10 („definirajte kako izgleda uspjeh i objavite podatke o učinku”) hrani [cost-per-transaction](../trošak-po-transakciji/) i [service-standards-and-transaction-metrics](../standardi-usluga-i-metrike-transakcija/): Standard propisuje mjerenje, a ne samo uslugu.

## Primjer iz prakse

**Usluga prijave za stambeno zbrinjavanje u lokalnoj upravi**: tim jednog vijeća dolazi na beta procjenu s uslugom koja ispunjava 11 od 14 točaka, ali pada na točki 5 („osigurajte da svatko može koristiti uslugu”) jer ne postoji asistirani digitalni put za podnositelje bez pristupa internetu, te pada na točki 9 jer se osobni podaci bilježe u običnom tekstu u tragovima pogrešaka aplikacije.

```
Direct cost of the fail:
  Re-assessment slot: 6–8 week wait for the next available panel
  Remediation sprint: 2 developers × 3 weeks × £550/day ≈ £34.650
  Assisted-digital channel design: 1 researcher × 2 weeks ≈ £5.000

Delay cost: service was forecast to shift 40% of 18.000/year housing
enquiries from £8,50 phone calls to £0,20 digital transactions
  = 7.200 × (£8,50 − £0,20) = £59.760/year foregone, pro-rated for the
    ~2-month delay ≈ £9.960

Total cost of the failed assessment ≈ £49.610
```

Svrha računa nije preciznost, nego činjenica da neuspjela procjena ima stvarnu cijenu koju je moguće izračunati, a upravo zato ta vrata imaju zube.

## Veza s programskim inženjerstvom

Inženjerima se Standard čita jednako kao popis zadataka za arhitekturu i isporuku koliko i kao politički dokument: točka 11 („odaberite prave alate i tehnologiju”) i točka 12 („objavite novi izvorni kod kao otvoren”) izravne su inženjerske odluke, a točka 14 („upravljajte pouzdanom uslugom”) zahtijeva iste SLO-ove i procese upravljanja incidentima kao i svaki produkcijski sustav. To je krovni okvir za ovu skupinu tema: [cost-per-transaction](../trošak-po-transakciji/) i [channel-shift-savings](../uštede-prelaskom-na-druge-kanale/) ono su što Standard financijski pokušava zaštititi, [digital-inclusion](../digitalna-uključenost/) je ono što točka 5 mora jamčiti, a komponente [government-as-a-platform](../državna-uprava-kao-platforma/) (GOV.UK Notify, Pay, One Login) uglavnom same po sebi zadovoljavaju točku 13 („koristite otvorene standarde, zajedničke komponente i obrasce te doprinosite njima”). Pogledajte i [build-vs-buy-in-government](../izgraditi-ili-kupiti-u-državnoj-upravi/) o tome kako se točka „prave alate” odražava u odlukama o nabavi.

## Zamke

- **Procjena kao potvrdni okvir usklađenosti na dan pokretanja**: timovi koji 14 točaka prvi put pročitaju tjedan dana prije beta procjene predvidljivo padaju; Standard treba oblikovati odluke od faze discovery nadalje, a ne ih naknadno revidirati.
- **Procjenjivanje prototipa, a ne usluge**: uglađena demonstracija može proći pregled na kojem bi pala stvarna, asistirana, digitalno uključiva i incidentima upravljana verzija usluge. Procjenitelji bi trebali tražiti taj jaz, ali manje usluge koje se same certificiraju to često preskaču.
- **Nema ponovne procjene prije širenja**: usluga procijenjena pri uvođenju na 5 % korisnika ne ostaje automatski usklađena pri 100 %, jer se mijenjaju opterećenje, neželjena potražnja (failure demand) i rubni slučajevi korisnika.
- **Brkanje Service Standarda s dizajnerskim sustavom**: komponente GOV.UK Design Systema zadovoljavaju neke točke (dosljednost, pristupačnost), ali Standard obuhvaća i strukturu tima, agilnu praksu i etiku podataka, pa lijepo stilizirana usluga ipak može pasti na točkama 2, 6 ili 9.

## Izvori

- GOV.UK Service Manual, Service Standard. <https://www.gov.uk/service-manual/service-standard>
- GOV.UK Service Manual, point 14: operate a reliable service. <https://www.gov.uk/service-manual/service-standard/point-14-operate-a-reliable-service>
- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
- GOV.UK Service Manual, service assessments. <https://www.gov.uk/service-manual/service-assessments>
