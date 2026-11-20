# Atklāto preferenču vērtēšana

Atklāto preferenču metodes secina netirgus labuma vērtību no novērojamas uzvedības saistītā tirgū, nevis
jautājot cilvēkiem tieši. Hedoniskā cenu noteikšana un ceļojuma izmaksu metode ir divas galvenās
metodes: abas sākas no reāla darījuma un atvasina netiešu cenu lietai, kas nekad netika pārdota tieši.

## Kāpēc tas ir svarīgi

Kamēr [deklarēto preferenču](../deklarēto-preferenču-vērtēšana/) metodes uzdod hipotētisku jautājumu,
atklāto preferenču metodes novēro, par ko cilvēki faktiski maksāja, ko Green Book uzskata par vispārīgi
ticamākiem pierādījumiem, citiem apstākļiem esot vienādiem, jo tos neietekmē hipotētiskā novirze —
hedoniskā māju cenu pētījuma respondenti patiešām samaksāja mērīto uzcenojumu vai atlaidi
(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>,
Annex 2). Hedoniskā cenu noteikšana sadala tirgus cenu — parasti mājokļu cenas — netiešās cenās katrai
labuma pazīmei, ļaujot analītiķiem izdalīt, piemēram, cenas uzcenojumu, ko mājsaimniecības faktiski maksā
par dzīvošanu klusākā vietā vai ar labāku gaisa kvalitāti, statistiski kontrolējot katru citu pazīmi, kas
arī ietekmē mājas cenu (izmērs, atrašanās vieta, skolas apkārtne). Ceļojuma izmaksu metode dara analogu
atpūtas vietām bez ieejas maksas: laiks un nauda, ko cilvēki tērē, ceļojot uz vietu, atklāj apakšējo robežu
tam, cik vieta viņiem ir vērta, jo neviens neuzņemas izmaksas, kas pārsniedz apmeklējuma vērtību viņam.

Abām metodēm ir kopīgs strukturāls ierobežojums: tās var novērtēt tikai to, kas ir iestrādāts esošā tirgus
darījumā. Troksnis pie skrejceļa parādās mājokļu cenās, jo cilvēki, kam svarīgs troksnis, iekārtojas klusākos
mājokļos; sugas, kuru neviens neapmeklē un kuras tuvumā neviens nedzīvo, pastāvēšanas vērtība nekādā
darījumā neparādās vispār, un tieši šo plaisu pastāv, lai aizpildītu [deklarēto preferenču](../deklarēto-preferenču-vērtēšana/)
metodes.

## Matemātika

```
Hedoniskā cenu noteikšana:
  Mājas cena = f(strukturālās pazīmes, atrašanās vietas pazīmes,
                   interesējošā vides pazīme, ...)
  Novērtē ar regresiju; vides pazīmes koeficients
  (visu citu turot nemainīgu) ir tās netiešā cena.

  Pazīmes X netiešā cena = ∂(Mājas cena) / ∂X

Ceļojuma izmaksu metode:
  Apmeklējumu līmenis (apmeklējumi uz iedzīvotāju no zonas i) = f(ceļojuma izmaksas no zonas i,
                   aizstājējvietas, sociālekonomiskās kontroles)
  Novērtē apmeklējumu pieprasījuma līkni kā ceļojuma izmaksu funkciju.
  Patērētāja pārpalikums = laukums zem novērtētās pieprasījuma līknes
                    = vietas vērtība apmeklētājiem
```

Abām metodēm vajadzīga statistiski pamatota kontroļu kopa — sajaucošas pazīmes (hedoniskā) vai tuvas
aizstājējvietas (ceļojuma izmaksu) izlaišana novirza netiešo cenu virzienā, kas ne vienmēr ir iepriekš
skaidrs, tāpēc Green Book Annex 2 prasa ziņot par regresijas specifikāciju un kontrolēm, nevis tikai par
virsraksta koeficientu.

## Aprēķina piemērs

**Valsts valdība**: pašas Green Book oglekļa ēnu cenas metodoloģija daļēji balstās uz hedoniskiem
pierādījumiem, bet vienkāršāks ilustratīvs gadījums ir gaisa kuģu troksnis. Hedoniskais pētījums, kas
regresē māju pārdošanas cenas lidojuma trajektorijas apgabalā pret attālumam svērtu trokšņa iedarbību,
kontrolējot izmēru, vecumu un skolas apkārtni, konstatē, ka katra 1 decibela palielinājums vidējā trokšņa
iedarbībā ir saistīts ar 0,5 % mājas cenas samazinājumu. Tipiskai £280 000 mājai skartajā apgabalā:

```
Netiešā cena uz decibelu = £280 000 × 0,5 % = £1 400 uz mājsaimniecību
Mājsaimniecības, ko skar 3 dB palielinājums no jauna skrejceļa = 18 000
Trokšņa pieauguma kopējās netiešās izmaksas = £1 400 × 3 × 18 000 = £75,6 milj.
```

Tās ir vienreizējas kapitalizētas izmaksas (iestrādātas mājas cenā), un izvērtējumam jārūpējas, lai tās
nedubultotu ar atsevišķi novērtētu gada trokšņa traucējumu izmaksu plūsmu.

**Labdarības organizācija**: vides labdarības organizācija izmanto ceļojuma izmaksu metodi, lai novērtētu
dabas rezervātu ar brīvu ieeju. Apmeklētāju pasta indeksu aptaujas dati dod vidējās turp un atpakaļ
ceļojuma izmaksas (laiks novērtēts pēc Green Book ieteiktās nedarba laika vērtības, plus degviela) £14 uz
apmeklējumu, ar 40 000 apmeklējumu gadā. Novērtētā pieprasījuma līkne — apmeklējumu līmenis krītas, kad
ceļojuma izmaksas no zonas pieaug — norāda uz patērētāja pārpalikumu uz apmeklējumu, virs faktiski iztērētajiem
£14, aptuveni £9.

```
Kopējā gada vērtība = 40 000 apmeklējumi × (£14 iztērēti + £9 patērētāja pārpalikums)
                    = 40 000 × £23 ≈ £920 000/gadā
```

Tas ievērojami pārsniedz rezervāta nulles ieejas maksas ieņēmumus un dod labdarības organizācijas
pilnvarotajiem aizstāvamu skaitli par vietas atpūtas vērtību, argumentējot finansētājiem.

## Saikne ar programmatūras inženieriju

Atklāto preferenču domāšana publiskā sektora produktu analītikā parādās biežāk, nekā praktiķi apzinās:
lietojuma dati no bezmaksas valdības digitālā pakalpojuma paši ir atklāto preferenču pierādījums par
vērtību (biežums, sesijas ilgums un — visizteiktāk — atkārtota pret vienreizēja lietojuma modeļi var tikt
analizēti tāpat, kā ceļojuma izmaksu modelis apstrādā apmeklējumu biežumu pret attālumu). Ja
pakalpojumam ir patiesi aizstājēji (papīra kanāls, tālruņa līnija), "izmaksas", ko iedzīvotāji uzņemas,
izmantojot digitālo kanālu (laiks, dati, ierīce), var novērtēt un salīdzināt ar lietojumu, tieši atkārtojot
ceļojuma izmaksu loģiku. Skatiet [digitālā pakalpojuma standarts](../digitālo-pakalpojumu-standarts/) un
[atvērto datu vērtība](../atvērto-datu-vērtība/), kas saskaras tieši ar šo vērtēšanas problēmu labumam bez
tiešas tirgus cenas.

## Biežākās kļūdas

- **Izlaista mainīgā novirze hedoniskajos modeļos.** Korelēta pazīme izlaišana (skolas kvalitāte, kas
  korelē gan ar mājas cenu, gan ar interesējošo vides mainīgo) novirza netiešās cenas novērtējumu;
  specifikācija jāziņo un jāpārbauda, nevis tikai rezultāts.
- **Aizstājējvietu ignorēšana ceļojuma izmaksu pētījumos.** Apmeklētāja atklātā vietas vērtība ir
  nenovērtēta, ja eksistē tuvāks aizstājējs un tas nav kontrolēts — apmeklējums var notikt galvenokārt tāpēc,
  ka tas ir bez maksas, nevis tāpēc, ka vieta ir unikāli vērtīga.
- **Atklāto preferenču piemērošana labumam bez jebkāda tirgus atbalsa.** Pastāvēšanas vērtība, iespējas
  vērtība un mantojuma vērtība neparādās nevienā darījumā, un tās nevar atgūt ar hedoniskām vai ceļojuma
  izmaksu metodēm — šī plaisa pieder [deklarēto preferenču vērtēšanai](../deklarēto-preferenču-vērtēšana/).
- **Kapitalizētas (vienreizējas) vērtības jaukšana ar gada plūsmu.** Hedoniskie mājokļu cenu efekti
  parasti ir vienreizējas kapitalizētas vērtības; to uzskatīšana par gada ieguvumu plūsmu uzpūš izvērtējumu.

## Avoti

- HM Treasury. "The Green Book," Annex 2: valuing non-market impacts.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Department for Transport / Civil Aviation Authority. Aircraft noise valuation studies used in
  airport appraisal. <https://www.gov.uk/guidance/aviation-noise>
- Rosen S. "Hedonic Prices and Implicit Markets: Product Differentiation in Pure Competition."
  Journal of Political Economy, 1974.
- Clawson M, Knetsch JL. "Economics of Outdoor Recreation." Johns Hopkins University Press, 1966
  (origin of the travel-cost method).
