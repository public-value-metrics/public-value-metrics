# Trošak po transakciji

Trošak po transakciji jest naslovna metrika jedinične ekonomike državne digitalne usluge: ukupni trošak isporuke kanala podijeljen s brojem transakcija dovršenih putem njega. Bila je vodeća brojka na staroj GOV.UK Performance Platform i broj koji je financirao desetljeće ulaganja „digitalno prema zadanome”, zbog čega je ujedno metrika koju je najlakše namještati.

## Zašto je važno

Digital Efficiency Report Cabinet Officea iz 2012. iznio je usporedbu troškova kanala u izrazima koji su se zadržali: utvrđeno je da digitalne transakcije koštaju oko 20 puta manje nego telefonom i oko 50 puta manje nego licem u lice, s ilustrativnim brojkama lokalne uprave od otprilike 0,15 £ po web transakciji naspram 2,83 £ telefonom i 8,62 £ licem u lice. Ta jedina usporedba postala je opravdanje za redizajn 25 uzornih usluga imenovanih u Government Digital Strategy i za svaki ministarski poslovni slučaj koji je od tada navodio uštede prelaskom na druge kanale. Brojka je doista korisna kao signal reda veličine, ali omjer u potpunosti ovisi o tome što se računa na svakoj strani: pošten trošak telefonskog kanala uključuje osoblje pozivnog centra, telefonski ugovor, obuku i prostor; pošten digitalni trošak uključuje smještaj (hosting), tekuće plaće produktnog tima, vrijeme službe za podršku za neuspjele putove i kanal digitalne pomoći koji zahtijeva točka 5 [Digital Service Standarda](../standard-digitalnih-usluga/). Izvadite dovoljno toga s digitalne strane i svaka usluga izgleda jeftino.

## Matematika

```
Trošak po transakciji = ukupni raspoređeni trošak kanala / dovršene transakcije

Ukupni raspoređeni trošak kanala treba uključivati:
  + hosting i infrastrukturu
  + trošak produktnog/inženjerskog/tima za podršku (amortiziran)
  + trošak sadržaja i dizajna usluge (amortiziran)
  + trošak digitalne pomoći / podrške za pristupačnost
  + trošak potražnje zbog neuspjeha (korisnici koji ne uspiju digitalno
    i vrate se telefonu)
  − jednokratni trošak izgradnje amortizira se kroz očekivani vijek usluge,
    a ne iskazuje u cijelosti u prvoj godini

Uobičajeni računovodstveni trik:
  „Granični trošak po transakciji” (samo hosting, kad je jednom izgrađeno)
  navodi se kao da je „prosječni trošak po transakciji” (ukupni trošak
  uključujući tim koji nastavlja graditi i voditi uslugu). Ta se dva
  mogu razlikovati 10 puta ili više za uslugu s velikim, aktivnim
  isporučiteljskim timom.
```

## Primjer iz prakse

**Usluga obnove poreza na vozila**: 4 milijuna transakcija godišnje.

```
Samo granična brojka (trik):
  Samo hosting + obrada plaćanja = 180.000 £/godišnje
  Trošak po transakciji = 180.000 / 4.000.000 = 0,045 £
  → naslovna brojka navedena u poslovnom slučaju

Puni trošak (poštena brojka):
  Hosting + plaćanje                       180.000 £
  Produktni/inženjerski tim (8 FTE)        720.000 £
  Služba za podršku (neuspjele/sporne tr.) 310.000 £
  Telefonska linija digitalne pomoći       140.000 £
  Ukupno                                 1.350.000 £
  Trošak po transakciji = 1.350.000 / 4.000.000 = 0,3375 £

Puni trošak i dalje je otprilike 8 puta jeftiniji od komparatora
telefonskog kanala od 2,83 £ iz Digital Efficiency Reporta — stvarna i
obranjiva ušteda — ali 7,5 puta viši od samo granične brojke navedene
u prečacu. Oba su broja „istinita”; samo je jedan usporediv s troškom
telefonskog kanala s kojim se uspoređuje.
```

## Veza s programskim inženjerstvom

Trošak po transakciji mjesto je gdje arhitektonske odluke postaju financijski broj: usluga koja se čisto automatski skalira i traži malo ručne intervencije s vremenom smanjuje tu brojku; ona koja zbog zbunjujućih stanja pogreške stvara velik obujam tiketa za podršku povećava je bez obzira na učinkovitost hostinga. To je prirodna prateća metrika točke 10 [Digital Service Standarda](../standard-digitalnih-usluga/) („definirajte kako izgleda uspjeh i objavite podatke o uspješnosti”) i [standarda usluga i metrika transakcija](../standardi-usluga-i-metrike-transakcija/), koji iznosi potpuniji skup KPI-ja unutar kojeg ta brojka stoji. Izravno ulazi i u izračune [ušteda prelaskom na druge kanale](../uštede-prelaskom-na-druge-kanale/) i treba je uskladiti s [ukupnim troškom vlasništva u državnom IT-u](../ukupni-trošak-vlasništva-u-državnom-it-u/) kako se režijski troškovi platforme i dijeljenih usluga ne bi tiho izostavili.

## Zamke

- **Granični trošak prerušen u prosječni**: navođenje troška samo hostinga kad je usluga izgrađena, uz izostavljanje tekućeg tima koji je održava, iterira i podržava; vidi gornji primjer.
- **Izostavljanje troška digitalne pomoći**: kanal nije sukladan načelu „digitalno prema zadanome”, a njegov pravi trošak nije obuhvaćen, ako se telefonska/papirnata rezerva koju zahtijeva [digitalna uključenost](../digitalna-uključenost/) vrednuje zasebno ili zanemari.
- **Ignoriranje potražnje zbog neuspjeha**: transakcije koje počnu digitalno i ne uspiju, pa svejedno stvore telefonski poziv ili papirnati obrazac, trošak su digitalnog kanala, a ne kanala koji uhvati neuspjeh.
- **Usporedba transakcija različite složenosti među kanalima**: telefonski pozivi nerazmjerno obrađuju teške slučajeve (više uzdržavanih osoba, ispravak pogrešaka, ranjivi podnositelji); usporedba prosječnog telefonskog troška s prosječnim digitalnim troškom precjenjuje omjer osim ako se ne uskladi struktura transakcija.

## Izvori

- Cabinet Office, Digital Efficiency Report (2012). <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- GOV.UK Service Manual, service standard, point 10: define what success looks like. <https://www.gov.uk/service-manual/service-standard/point-10-define-success-publish-performance-data>
- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
