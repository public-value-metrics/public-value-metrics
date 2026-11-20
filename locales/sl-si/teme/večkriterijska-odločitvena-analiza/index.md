# Večkriterijska odločitvena analiza (MCDA)

MCDA ocenjuje in tehta možnosti glede na več različnih, uteženih meril hkrati ter ustvari razvrščeno primerjavo, ne da bi bilo treba vsa merila stlačiti v eno denarno ali naravno merilo. To je metoda vrednotenja za odločitve, pri katerih se izidov, ki so pomembni, resnično ne da zvesti na eno samo število.

## Zakaj je pomembno

Green Book, britanski priročnik za vrednotenje javnih naložb, MCDA izrecno dopušča (obravnavata jo neposredno tako dodatek s študijami primerov v Okvirju 2 kot Priloga A) za presoje, pri katerih so koristi »resnično neprimerljive«, torej kjer bi pretvorba vsega v denar prek [družbene analize stroškov in koristi](../družbena-analiza-stroškov-in-koristi/) ali v en sam izid prek [analize stroškovne učinkovitosti](../analiza-stroškovne-učinkovitosti-v-upravi/) odločitev izkrivila, namesto da bi jo pojasnila (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>). Izbira lokacije za nov zapor, na primer, tehta kapitalske stroške proti vplivu na skupnost, prometni povezanosti, okoljskemu učinku in možnosti zaposlovanja osebja – to so merila brez skupne enote, pri katerih bi vsiljena skupna enota (običajno denar) prikrito vnesla vrednostno sodbo o relativni pomembnosti, recimo, okoljskega vpliva v primerjavi s stroški, oblečeno v objektivno aritmetiko.

Poštenost MCDA je hkrati njena največja ranljivost: ker uteži določi tisti, ki izvaja vrednotenje (ali komisija), je metoda legitimna le toliko, kolikor je legitimen postopek utežitve. Smernice Green Booka izrecno zahtevajo, da se merila in uteži dogovorijo in objavijo *preden* se možnosti ocenijo, prav zato, da recenzent ne more od želene možnosti nazaj izračunati uteži, ki jo opravičujejo.

## Matematika

```
Za vsako možnost i in merilo j:
  Ocena_ij   = uspešnost možnosti glede na to merilo (pogosto 0-100
               ali 1-10, na podlagi dokazov, strokovne presoje ali ocen deležnikov)
  Utež_j     = relativna pomembnost merila j, uteži se seštejejo v 1 (ali 100)

Utežena ocena možnosti i = Σ_j (Ocena_ij × Utež_j)

Postopek:
1. Dogovorite se o naboru meril in utežeh PRED ocenjevanjem katere koli možnosti
   (uteževanje z nihanjem (swing weighting) ali primerjava v parih, npr. AHP,
   sta običajni metodi pridobivanja uteži).
2. Ocenite vsako možnost glede na vsako merilo na skupni lestvici,
   kjer je mogoče na podlagi dokazov.
3. Izračunajte utežene vsote; razvrstite možnosti.
4. Preizkusite občutljivost uteži: ali razvrstitev preživi verjetno
   nestrinjanje o tem, kako pomembno naj bo posamezno merilo?
```

MCDA ne ustvari zagovorljive absolutne vrednosti, kot jo ustvari neto sedanja vrednost pri družbeni analizi stroškov in koristi (SCBA); ustvari le razvrstitev, pogojeno z dogovorjenimi utežmi. To je prednost, kadar gre odločitev res za tehtanje neprimerljivih dobrin, in slabost, če se uporabi za izogibanje težjemu delu denarnega vrednotenja, kjer bi bilo to dejansko mogoče.

## Praktični primer

**Lokalna oblast**: občina, ki izbira lokacijo za nov center za ravnanje z gospodinjskimi odpadki, oceni tri lokacije glede na štiri merila, ki jih je medresorska komisija uteževala še pred ogledom lokacij:

```
Merila (utež):            Kapitalski stroški (30 %)  Prometna dostopnost (25 %)
                           Vpliv na skupnost (25 %)  Okoljski vpliv (20 %)

Ocene lokacij (0-100, višje = bolje):
Lokacija A: stroški 80, dostop 60, skupnost 40, okolje 70
Lokacija B: stroški 60, dostop 90, skupnost 70, okolje 50
Lokacija C: stroški 90, dostop 50, skupnost 80, okolje 60

Utežene vsote:
Lokacija A = 80(0,30) + 60(0,25) + 40(0,25) + 70(0,20) = 24+15+10+14 = 63
Lokacija B = 60(0,30) + 90(0,25) + 70(0,25) + 50(0,20) = 18+22,5+17,5+10 = 68
Lokacija C = 90(0,30) + 50(0,25) + 80(0,25) + 60(0,20) = 27+12,5+20+12 = 71,5
```

Lokacija C je razvrščena najvišje. Preizkus občutljivosti, ki utež vpliva na skupnost poveča s 25 % na 35 % (10 točk vzame kapitalskim stroškom), spremeni skupno oceno lokacije C na 71,5 − 3 + 8 = 76,5, lokacije B pa na 68 − 6 + 7 = 69 – lokacija C še vedno vodi, torej je razvrstitev odporna proti temu verjetnemu nestrinjanju o utežeh, kar je natanko preverjanje, za katerega Green Book pričakuje, da bo poročano.

**Dobrodelna organizacija**: ustanova za dodeljevanje donacij, ki izbira med financiranjem storitve svetovanja o dolgovih, mreže bank hrane in programa finančne pismenosti, uporabi MCDA namesto SROI (glej [družbeni donos naložbe](../družbeni-donos-naložbe/)) prav zato, ker se skrbniki v dobri veri ne strinjajo, ali naj ima večjo težo krizna pomoč ali preventiva – MCDA jim omogoča, da se dogovorijo o *obliki* nestrinjanja (razponu uteži), namesto da bi se pretvarjali, da ga razreši eno samo razmerje SROI.

## Povezava s programskim inženirstvom

MCDA je naravno orodje za izbiro dobavitelja in arhitekture, kadar so merila resnično navzkrižna: izbira med oblačnim in lokalno nameščenim sistemom za vodenje primerov tehta stroške, tveganje podatkovne suverenosti, dostopnost in hitrost izvedbe na načine, ki se ne zvedejo na eno število. Vodje inženirjev naj vztrajajo, da se utežitev opravi pred ocenjevanjem možnosti, natanko tako, kot zahteva Green Book, saj se utežitev, opravljena po ogledu ožjega izbora, zanesljivo nagne k možnosti, ki ji je bila soba že naklonjena. Za pogosto uporabo MCDA glej [izdelati ali kupiti v državni upravi](../razvoj-ali-nakup-v-upravi/), za sorodno orodje strukturiranega ocenjevanja, ki se uporablja po odločitvi in ne pred njo, pa [kazalniška kartica javne vrednosti](../kazalniška-kartica-javne-vrednosti/).

## Pasti

- **Določanje uteži po ogledu možnosti.** To je daleč najpogostejši način, kako se MCDA zlorablja, namerno ali ne; uteži objavite pred ocenjevanjem in zabeležite, kdo jih je določil.
- **Obravnava utežene vsote kot trdne številke.** Ocena 71,5 proti 68 ni statistično pomembna razlika, razen če analiza občutljivosti potrdi, da je razvrstitev stabilna; poročajte razpone, ne lažne natančnosti.
- **Uporaba MCDA za izogibanje denarnemu vrednotenju, ki bi bilo dejansko izvedljivo.** Če bi bilo večino meril mogoče verodostojno ovrednotiti, privzeta uporaba MCDA namesto [SCBA](../družbena-analiza-stroškov-in-koristi/) zavrže informacije, ki bi jih vrednotenje lahko uporabilo.
- **Prepustitev vseh uteži enemu prevladujočemu deležniku.** Dobra praksa po Green Booku pričakuje, da se uteži pridobijo od reprezentativne komisije, ne od direktorja naročnika, da vrednotenje preprosto ne bi ponovno izpeljalo tega, kar je ta oseba že želela.

## Viri

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Annex A
  (multi-criteria decision analysis) and Box 2 case studies.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Department for Communities and Local Government. "Multi-criteria analysis: a manual." 2009.
  <https://www.gov.uk/government/publications/multi-criteria-analysis-a-manual>
- Belton V, Stewart TJ. "Multiple Criteria Decision Analysis: An Integrated Approach." Kluwer,
  2002.
