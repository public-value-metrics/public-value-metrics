# Plaćanje prema rezultatima i društvene obveznice učinka

Plaćanje prema rezultatima (PbR) plaća pružatelja usluga na temelju potvrđenih postignutih ishoda, a ne
provedenih aktivnosti. Društvena obveznica učinka (SIB) specifična je PbR struktura financiranja u kojoj
privatni ili filantropski investitori unaprijed financiraju pružanje usluge, a državni naručitelj im vraća
sredstva, uz povrat, samo ako neovisno izmjereni ishodi dosegnu dogovorene pragove, čime se rizik isporuke
prebacuje s poreznog obveznika na investitora.

## Zašto je važno

Prva SIB na svijetu pokrenuta je u zatvoru HMP Peterborough u rujnu 2010.: Social Finance prikupio je 5
milijuna £ od 17 investitora za financiranje „One Servicea”, programa rada sa zatvorenicima na kratkim
kaznama (do 12 mjeseci) radi smanjenja ponovnog počinjenja kaznenih djela, pri čemu su Ministarstvo pravosuđa
i Big Lottery Fund pristali vratiti sredstva investitorima samo ako se broj događaja ponovne osude smanji za
najmanje 7,5 % u odnosu na usklađenu nacionalnu usporednu kohortu. Završna kohorta peterboroughskog pilota
zabilježila je smanjenje ponovnih osuda od 9,7 %, znatno iznad praga, pa su investitori otplaćeni s povratom.
Mehanizam je bio važan jer je rješavao konkretan problem naručivanja: država je željela plaćati ishode, a ne
ulaze, ali nije mogla apsorbirati financijski rizik intervencije koja možda ne djeluje, pa je struktura SIB-a
taj rizik prebacila na investitore voljne preuzeti ga. Government Outcomes Lab (GO Lab) na Blavatnik School of
Government u Oxfordu danas održava najpotpuniju javnu bazu dokaza o izvedbi PbR-a i SIB-ova u svijetu, prati
znatno više od 200 obveznica učinka na globalnoj razini i objavljuje istraživanja o tome koja su obilježja
dizajna povezana s uspjehom ili neuspjehom. Pouka kojoj se baza dokaza stalno vraća jest da *odabrana metrika
ishoda*, i tko snosi rizik da je promaši, određuju gotovo sve ostalo o tome kako se PbR ugovor u praksi
ponaša.

## Matematika

```
PbR plaćanje = osnovno plaćanje (ako postoji) + Σ (postignuti ishod × jedinična cijena po ishodu)

Povrat investitora u društvenu obveznicu učinka:
  Izdatak investitora = početni kapital kojim se financira pružanje usluge
  Plaćanje za ishod   = naručitelj plaća samo ako je ishod ≥ prag, razmjerno
                         tome koliko iznad praga izvedba završi
  Povrat investitora  = primljena plaćanja za ishode − izdatak investitora
                         (stopa povrata, često ograničena, koja odražava preuzeti rizik)

Ključni parametri dizajna koji određuju ponašanje cijelog ugovora:
  Metrika ishoda        — mora biti ishod, a ne izlazni rezultat (vidi outcomes-vs-outputs)
  Usporedba/kontrafaktualni scenarij — obično usklađena kohorta (vidi counterfactual-analysis)
  Prag plaćanja         — minimalno poboljšanje prije nego se aktivira bilo kakvo plaćanje
  Krivulja plaćanja     — linearna, stepenasta ili ograničena iznad praga
  Diskont za pripisivanje/mrtvi teret — vidi additionality-and-deadweight
```

## Primjer iz prakse

**Peterborough One Service** (ilustrativne brojke iz objavljenih evaluacija):

```
Prikupljeni kapital investitora:  5.000.000 £
Kohorta:                          ~3.000 muških zatvorenika na kratkim kaznama kroz dvije kohorte
Prag:                             smanjenje događaja ponovne osude ≥ 7,5 % u odnosu na usklađenu
                                   nacionalnu usporednu skupinu, inače nema plaćanja
Rezultat kohorte 1:               smanjenje od 8,4 % — ispod ugovorne granice za tu
                                   kohortu samu prema izvornim pravilima
Rezultat kombinirane/završne kohorte: smanjenje od 9,7 % — iznad praga
Plaćanje za ishod:                država (Ministarstvo pravosuđa / Big Lottery Fund)
                                   plaća po postotnom bodu iznad praga, čime se financira
                                   otplata investitora plus povrat
```

**Ugovor o PbR-u lokalne vlasti (ilustrativno)**: usluga obiteljske intervencije naručena je uz 4.000 £ po
upućenoj obitelji (plaćanje za aktivnost) plus 6.000 £ po obitelji bez daljnje upute zbog zaštite djece 12
mjeseci nakon zatvaranja slučaja (plaćanje za ishod). Upućeno je 200 obitelji, zatvoreno 150 slučajeva, a 96
ih ostaje bez nove upute nakon 12 mjeseci:

```
Plaćanje za aktivnost = 200 × 4.000 £ = 800.000 £
Plaćanje za ishod     = 96 × 6.000 £  = 576.000 £
Ukupni trošak ugovora = 1.376.000 £ za 96 potvrđenih trajnih ishoda
Trošak po potvrđenom ishodu ≈ 14.333 £ (vidi cost-per-outcome)
```

## Veza s programskim inženjerstvom

Plaćanje prema rezultatima prvo je problem usklađivanja poticaja, a tek onda problem podataka, i podatkovni
sustav je mjesto gdje to usklađivanje ili drži ili puca. Neovisna provjera ishoda otporna na neovlaštene
izmjene čitava je igra: naručitelj i pružatelj imaju suprotne poticaje oko kodiranja dvosmislenog slučaja,
pa sustav koji bilježi ishode treba revizijski trag, sporazum o dijeljenju podataka s neovisnim
verifikatorom (često različitim tijelom od pružatelja, ponekad tijelom službene statistike koje usklađuje s
policijskim evidencijama ili evidencijama o naknadama) i nepromjenjivo verzioniranje definicije ishoda,
što je PbR ekvivalent zamke „redefiniranja metrike” iz teme [KPI-jevi javnog sektora](../ključni-pokazatelji-uspješnosti-u-javnom-sektoru/).
Izračuni pripisivanja ovise o metodama usklađene kohorte iz [kontrafaktualne analize](../kontrafaktualna-analiza/),
za koje je potreban ponovljiv, revizijski provjerljiv kod, a ne jednokratna proračunska tablica. A sama
metrika mora biti stvaran ishod, a ne zamjenska aktivnost (vidi [ishodi naspram izlaznih rezultata](../ishodi-naspram-izlaznih-rezultata/)),
jer PbR ugovor koji plaća izlazni rezultat samo preimenuje uobičajeno financiranje uz dodatni transakcijski
trošak. Kad se društveni povrat SIB-a modelira unaprijed, ta procjena obično izravno posuđuje iz metodologije
[socijalnog povrata ulaganja](../društveni-povrat-ulaganja/).

## Zamke

- **Plaćanje zamjenskog ishoda koji je lako izigrati**: „prisustvovanje sesijama” aktivnost je prerušena u
  ishod; inzistirajte na mjeri koja odražava stvarnu traženu promjenu (ponovno činjenje kaznenih djela,
  zaposlenost, stabilnost stanovanja).
- **Nema vjerodostojnog kontrafaktualnog scenarija**: bez usklađene usporedne skupine poboljšanje može biti
  regresija prema sredini ili širi trend, a ne učinak programa (vidi
  [kontrafaktualnu analizu](../kontrafaktualna-analiza/) i
  [dodatnost i mrtvi teret](../dodatnost-i-mrtvi-teret/)).
- **Podcjenjivanje transakcijskih troškova i troškova evaluacije**: neovisna provjera, povezivanje podataka i
  administracija ugovora za PbR/SIB sheme rutinski dosežu dvoznamenkasti postotak vrijednosti ugovora, a baza
  dokaza GO Laba to dokumentira kao čest uzrok prestanka shema.
- **Biranje „lakih” slučajeva ili „parkiranje”**: pružatelji plaćeni po ishodu imaju izravan poticaj da daju
  prednost klijentima koji bi ionako najvjerojatnije uspjeli, a zanemare najteže slučajeve; dizajnirajte razine
  plaćanja ili prilagodbu strukture slučajeva kako biste to suzbili.

## Izvori

- Government Outcomes Lab, University of Oxford, Blavatnik School of Government.
  <https://golab.bsg.ox.ac.uk/>
- Social Finance, "Peterborough Social Impact Bond" evaluation summaries.
  <https://golab.bsg.ox.ac.uk/case-studies/peterborough-social-impact-bond/>
- Ministry of Justice, "Peterborough Social Impact Bond HMP Doncaster: Final Reconviction Results
  for the Peterborough Social Impact Bond."
