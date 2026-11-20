# Daudzkritēriju lēmumu analīze (MCDA)

MCDA novērtē un salīdzina variantus pēc vairākiem atšķirīgiem, svērtiem kritērijiem vienlaikus un
sniedz sarindotu salīdzinājumu, nespiežot visus kritērijus vienā naudas vai dabiskajā mērvienībā.
Tā ir izvērtēšanas metode lēmumiem, kuros svarīgos rezultātus patiesi nevar reducēt uz vienu skaitli.

## Kāpēc tas ir svarīgi

Green Book tieši atļauj MCDA (to apspriež gan 2. izcēlums ar gadījumu pētījumiem, gan A pielikums)
tādiem izvērtējumiem, kuros ieguvumi ir "patiesi nesamērojami": kad pārvēršana naudā ar
[sociālo izmaksu un ieguvumu analīzi](../sociālā-izmaksu-un-ieguvumu-analīze/) vai vienā rezultātā ar
[izmaksu efektivitātes analīzi](../izmaksu-efektivitātes-analīze-valdībā/) lēmumu drīzāk
sagrozītu, nevis noskaidrotu
(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>).
Piemēram, jauna cietuma vietas izvēlē jāsabalansē kapitālizmaksas, ietekme uz kopienu, transporta
pieejamība, ietekme uz vidi un darbinieku piesaistes iespējas — kritēriji, kuriem nav kopīgas
mērvienības un kuru piespiedu pārvēršana vienā mērvienībā (parasti naudā) slepus ievilktu vērtību
spriedumu par, piemēram, vides ietekmes un izmaksu relatīvo nozīmību, ietērptu šķietami objektīvā
aritmētikā.

MCDA godīgums ir arī tās galvenais vājums: tā kā svarus nosaka tas, kas veic izvērtējumu (vai
ekspertu grupa), metode ir tikpat leģitīma, cik leģitīms ir svēršanas process. Green Book norādījumi
skaidri paredz, ka kritēriji un svari jāvienojas un jāpublicē *pirms* variantu vērtēšanas, lai
novērstu situāciju, kad izvērtētājs no vēlamā varianta atpakaļgaitā izvēlas svarus, kas to
pamato.

## Matemātika

```
Katram variantam i un kritērijam j:
  Score_ij   = varianta sniegums pret šo kritēriju (bieži 0-100
               vai 1-10, pēc pierādījumiem, ekspertu vērtējuma vai
               ieinteresēto pušu vērtējuma)
  Weight_j   = kritērija j relatīvā nozīme, svaru summa ir 1 (vai 100)

Varianta i svērtais vērtējums = Σ_j (Score_ij × Weight_j)

Procedūra:
1. Vienojieties par kritēriju kopu un svariem PIRMS jebkura varianta
   vērtēšanas (svaru "šūpošana" jeb swing weighting vai pāru salīdzināšana,
   piemēram, AHP, ir bieži izmantotas izvēles metodes).
2. Novērtējiet katru variantu pret katru kritēriju vienotā skalā,
   pēc iespējas balstoties uz pierādījumiem.
3. Aprēķiniet svērtās summas; sarindojiet variantus.
4. Pārbaudiet svaru jutīgumu: vai rangs saglabājas, ja pastāv
   ticamas domstarpības par katra kritērija nozīmi?
```

MCDA nesniedz aizstāvamu absolūto vērtību tā, kā to dara SCBA neto tagadnes vērtība — tā dod tikai
rangu, kas ir atkarīgs no saskaņotajiem svariem. Tā ir priekšrocība, ja lēmums patiesi ir par
nesamērojamu labumu savstarpēju kompromisu, un trūkums, ja to izmanto, lai izvairītos no grūtākā
darba — monetizācijas —, kad monetizācija patiesībā bija iespējama.

## Aprēķina piemērs

**Pašvaldība**: dome, izvēloties vietu jaunam mājsaimniecību atkritumu pārstrādes centram,
novērtē trīs vietas pēc četriem kritērijiem, kuru svarus noteikusi starpnodaļu komisija pirms jebkuras
vietas apskates:

```
Kritēriji (svars):        Kapitālizmaksas (30 %)  Transporta pieejamība (25 %)
                           Ietekme uz kopienu (25 %)  Ietekme uz vidi (20 %)

Vietu vērtējumi (0-100, augstāk = labāk):
A vieta: izmaksas 80, pieejamība 60, kopiena 40, vide 70
B vieta: izmaksas 60, pieejamība 90, kopiena 70, vide 50
C vieta: izmaksas 90, pieejamība 50, kopiena 80, vide 60

Svērtās summas:
A vieta = 80(0,30) + 60(0,25) + 40(0,25) + 70(0,20) = 24+15+10+14 = 63
B vieta = 60(0,30) + 90(0,25) + 70(0,25) + 50(0,20) = 18+22,5+17,5+10 = 68
C vieta = 90(0,30) + 50(0,25) + 80(0,25) + 60(0,20) = 27+12,5+20+12 = 71,5
```

C vieta ierindojas augstāk. Jutīguma pārbaude, kurā ietekmes uz kopienu svars tiek mainīts no 25 %
uz 35 % (10 punktus atņemot kapitālizmaksām), maina C vietas summu uz 71,5 − 3 + 8 = 76,5, bet B
vietas — uz 68 − 6 + 7 = 69; C vieta joprojām ir vadībā, tātad rangs ir noturīgs pret šādām ticamām
domstarpībām par svariem, un tieši šādu pārbaudi Green Book sagaida redzēt ziņojumā.

**Labdarības organizācija**: dotāciju fonds, kas izvēlas starp parādu konsultāciju pakalpojuma,
pārtikas banku tīkla un finanšu pratības programmas finansēšanu, izmanto MCDA, nevis SROI (skatiet
[sociālo atdevi no ieguldījuma](../sociālā-ieguldījumu-atdeve/)), tieši tāpēc, ka pilnvarotie
labticīgi nav vienisprātis, vai krīzes palīdzībai vai profilaksei jāpiešķir lielāks svars — MCDA
ļauj vienoties par domstarpību *formu* (svaru diapazonu), nevis izlikties, ka to atrisina viens
SROI koeficients.

## Saikne ar programmatūras inženieriju

MCDA ir dabisks rīks piegādātāju un arhitektūras izvēlei, ja kritēriji patiesi konfliktē: izvēle starp
mākonī izvietotu un lokāli uzstādītu lietu pārvaldības sistēmu līdzsvaro izmaksas, datu
suverenitātes risku, pieejamību un piegādes ātrumu tā, ka to nevar reducēt uz vienu skaitli.
Inženieru vadītājiem jāpieprasa, lai svēršana notiktu pirms variantu vērtēšanas — tieši tā, kā to
prasa Green Book —, jo svēršanas vingrinājums, ko veic pēc īsā saraksta redzēšanas, nemaldīgi sliecas
uz to variantu, kuru telpā jau atbalstīja. Par bieži sastopamu MCDA pielietojumu skatiet
[izstrāde pret iegādi valdībā](../veidot-vai-pirkt-valdībā/), bet par saistītu strukturētas
vērtēšanas rīku, ko lieto pēc lēmuma, nevis pirms tā, — [sabiedriskās vērtības rezultātu kartīti](../sabiedriskās-vērtības-rezultātu-kartīte/).

## Biežākās kļūdas

- **Svaru noteikšana pēc variantu redzēšanas.** Tas ir visbiežākais veids, kā MCDA tiek manipulēta,
  tīši vai netīši; publicējiet svarus pirms vērtēšanas un reģistrējiet, kas tos noteica.
- **Svērtās summas uztvere kā precīza skaitļa.** Starpība starp 71,5 un 68 nav statistiski nozīmīga,
  ja jutīguma analīze neapliecina, ka rangs ir stabils; ziņojiet diapazonus, nevis šķietamu
  precizitāti.
- **MCDA izmantošana, lai izvairītos no monetizācijas, kas patiesībā bija iespējama.** Ja lielāko daļu
  kritēriju varēja ticami novērtēt naudā, MCDA izvēle [SCBA](../sociālā-izmaksu-un-ieguvumu-analīze/) vietā
  atmet informāciju, ko izvērtējums būtu varējis izmantot.
- **Ļaut vienai dominējošai ieinteresētajai pusei noteikt visus svarus.** Green Book labā prakse
  paredz svarus iegūt no reprezentatīvas komisijas, nevis no pasūtītāja direktora, lai izvērtējums
  vienkārši neatveidotu to, ko šī persona jau vēlējās.

## Avoti

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Annex A
  (multi-criteria decision analysis) and Box 2 case studies.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Department for Communities and Local Government. "Multi-criteria analysis: a manual." 2009.
  <https://www.gov.uk/government/publications/multi-criteria-analysis-a-manual>
- Belton V, Stewart TJ. "Multiple Criteria Decision Analysis: An Integrated Approach." Kluwer,
  2002.
