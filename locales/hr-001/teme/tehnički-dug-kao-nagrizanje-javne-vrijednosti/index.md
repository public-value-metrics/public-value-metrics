# Tehnički dug kao nagrizanje javne vrijednosti

Tehnički dug metafora je Warda Cunninghama iz 1992. za podrazumijevani budući trošak prošlih prečaca u kodiranju: **glavnica** (dugovani posao sanacije) i **kamata** (stalno kočenje isporuke koje on izaziva). U naslijeđenom državnom IT okruženju ta se kamata plaća izravno iz javne vrijednosti: sporija isporuka zakonskih promjena, veća stopa kvarova na uslugama okrenutima građanima i sve manji broj ljudi koji uopće smiju sigurno dirati sustav.

## Zašto je važno

Naslijeđeni sustavi na središnjim računalima i iz doba COBOL-a u britanskim državnim ministarstvima (HMRC i DWP među najčešće navođenima) nose dobro dokumentiran i rastući rizik na koji je National Audit Office više puta upozorio, uključujući izvješće *Digital Transformation in Government* (<https://www.nao.org.uk/>): stare platforme koje je skupo mijenjati, sve ih je teže osigurati i ovise o specijalističkoj radnoj snazi koja odlazi u mirovinu brže nego što se zamjenjuje. Za razliku od zaostataka u privatnom sektoru, taj dug stoji izravno između građana i njihovih zakonskih prava: mehanizam za izračun naknada koji se ne može sigurno mijenjati ograničenje je provedbe politike, a ne samo inženjerska neugodnost. Ponovno pokretanje IT programa Universal Credit 2013., kad je National Audit Office utvrdio da izvorna izvedba neće donijeti vrijednost za novac te je znatan dio softverske imovine trebalo otpisati, kanonski je primjer necijenjenog tehničkog duga koji sustiže živ, ministarski vidljiv javni program.

## Matematika

```
SQALE glavnica = Σ po prekršajima (vrijeme sanacije) × cijena rada programera
Omjer tehničkog duga (TDR) = trošak sanacije / trošak ponovnog razvoja × 100
                    (SonarQube ocjene: A ≤5 %, B ≤10 %, C ≤20 %, D ≤50 %)

Kamata (broj koji opravdava otplatu):
  kamata/godišnje = Δ brzina isporuke × vrijednost po jedinici brzine
                  + Δ stopa incidenata prema građanima × trošak po incidentu
                  + premija za specijalističke vještine × pogođeni broj zaposlenih
Slučaj otplate = PV(izbjegnuta kamata kroz horizont) − trošak sanacije
               (diskontirano društvenom diskontnom stopom Green Booka, vidi
               social-discount-rate.md)
```

Glavnica iskazuje obvezu; kamata je ono što daje investicijski slučaj pred odborom za javne račune.

## Primjer iz prakse

Mehanizam za obradu zahtjeva od 250.000 redaka, napisan u naslijeđenom 4GL-u. Uz CAST Appmarq mjerilo od otprilike 3,61 $ glavnice tehničkog duga po retku koda (≈ 2,85 £ uz tipičnu pretvorbu):

```
Glavnica ≈ 250.000 × 2,85 £ ≈ 712.500 £
TDR ≈ 16 % (ocjena C)
```

Izmjerena kamata: ministarstvo zadržava tri specijalistička izvođača uz 40 % višu dnevnicu od standardnih stopa viših inženjera jer su interne vještine nestale: dodatnih 180.000 £/godišnje na timu od šest osoba. Sustav također uzrokuje četiri velika zastoja obrade godišnje, a svaki obustavlja odluke za oko 5.000 podnositelja i preusmjerava ih u kontaktni centar po otprilike 25 £ po pozivu:

```
Kamata ≈ 180.000 £ (premija za vještine)
       + 4 × 5.000 × 25 £ = 500.000 £ (trošak preusmjerenih kontakata)
       ≈ 680.000 £/godišnje
```

Ciljana sanacija najlošije izvedenih modula košta 1.200.000 £, a modelirano je da smanjuje kamatu za 70 %:

```
Smanjenje kamate = 0,70 × 680.000 = 476.000 £/godišnje
Povrat ≈ 1.200.000 / 476.000 ≈ 2,5 godine
```

Ciljanje je važno: sanacija rijetko dirana koda ne donosi ništa, jer se kamata koncentrira ondje gdje učestalost promjena i gustoća duga zajedno dosežu vrhunac.

## Veza s programskim inženjerstvom

Okvir javne vrijednosti koji slučaj tehničkog duga podiže iznad „kod je star”: prikažite naslijeđeno okruženje kao popis mjesta na kojima je koncentriran izgubljeni kapacitet isporuke i izričito ga povežite s [ukupnim troškom vlasništva](../ukupni-trošak-vlasništva-u-državnom-it-u/), jer je kamata operativni trošak koji pripada u TCO redak bez obzira je li ga financije ikad zatražile. Sustavi opterećeni dugom nose i nerazmjernu izloženost [kibernetičkoj sigurnosti](../vrijednost-kibernetičke-sigurnosti-u-javnom-sektoru/), jer su učestalost zakrpa i gustoća duga u korelaciji: sustav koji se ne može zakrpati tehnički je dug čija se kamata plaća rizikom od incidenata, a ne funtama. A svaki kompromis između sanacije i značajki sam je po sebi odluka o [trošku odgode](../trošak-odgode-u-javnim-programima/): otplata duga odgađa sljedeću zakonsku promjenu, koja ima vlastiti trošak odgode što ga treba odvagnuti naspram ušteđene kamate.

## Zamke

- **Izvješćivanje samo o glavnici**: velika, zastrašujuća procjena sanacije bez iznosa kamate ne opravdava ništa pred odobravateljem potrošnje.
- **Doslovno uzimanje brojki duga koje generiraju alati**: skeneri u stilu SQALE broje kršenja pravila; promašuju skupu vrstu duga, arhitektonske odluke i nedokumentirana naslijeđena poslovna pravila, a označuju sitnice.
- **„Prepisivanje izbjegava sve to”**: programi zamjene moraju zadovoljiti istu disciplinu kao svaki drugi poslovni slučaj (kontrafaktualni trošak, vjerojatnost uspjeha i diskontiranje), a ne dobiti izuzeće od nje, kao što je pokazalo ponovno pokretanje Universal Credita 2013.
- **Utopizam nultog duga**: optimalna razina duga nije nula; dug je poluga koja je kupila raniju isporuku. Živo pitanje uvijek je kamatna stopa, a ne postoji li dug uopće.

## Izvori

- Cunningham W, "The WyCash Portfolio Management System", OOPSLA experience report, 1992.
- CAST, technical debt estimation (Appmarq benchmark). <https://www.castsoftware.com/glossary/technical-debt-estimation>
- National Audit Office, *Digital Transformation in Government* and reports on Universal Credit. <https://www.nao.org.uk/>
