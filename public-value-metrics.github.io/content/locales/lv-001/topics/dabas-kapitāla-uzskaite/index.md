# Dabas kapitāla uzskaite

Dabas kapitāla uzskaite nostāda vidi tādā pašā statusā kā jebkuru citu valsts vai organizācijas aktīvu:
tā mēra dabas resursu krājumus (mežus, augsnes, upes, mitrājus, atmosfēru) un to radīto pakalpojumu plūsmu
(oglekļa piesaisti, plūdu aizsardzību, atpūtu, pārtiku) gan fiziskā, gan naudas izteiksmē, lai vides
noplicināšana parādītos lēmumu pieņemšanā tāpat, kā to darītu finanšu kapitāla izšķērdēšana. Apvienotā
Karaliste ir viena no valdībām, kas šajā jomā sistemātiski tikusi vistālāk, ko veicinājis 25 gadu vides
plāns (2018) un ko īsteno ONS Apvienotās Karalistes dabas kapitāla konti un HM Treasury Green Book
papildu norādījumi.

## Kāpēc tas ir svarīgi

Parastā grāmatvedība — gan korporatīvā, gan valdības — uzskata mežu par bezvērtīgu, līdz tas tiek nocirsts
un pārdots kā kokmateriāls, un tikai tad tas kļūst par IKP. Dabas kapitāla uzskaite pastāv, lai šo plaisu
aizvērtu: Apvienotās Karalistes 25 gadu vides plāns uzņēmās valdības saistību iestrādāt dabas kapitāla
domāšanu visās politikas jomās, skaidri formulējot mērķi būt "pirmajai paaudzei, kas atstāj vidi labākā
stāvoklī, nekā mēs to atradām". ONS kopš tā laika publicē ikgadējus Apvienotās Karalistes dabas kapitāla
kontus (<https://www.ons.gov.uk/economy/environmentalaccounts/bulletins/uknaturalcapitalaccounts/latest>),
kuros ekosistēmu pakalpojumu — sākot ar mežu atpūtas vērtību un pilsētu zaļo zonu ieguvumiem veselībai un
beidzot ar kūdrāju oglekļa uzkrāšanu — naudas vērtība tiek novērtēta, izmantojot to pašu Nacionālo kontu
sistēmu, ko lieto saražotajam kapitālam, lai dabas kapitāls laika gaitā varētu atrasties vienā bilancē ar
ceļiem, ēkām un aprīkojumu. HM Treasury norādījumi "Enabling a Natural Capital Approach" (ENCA), kas
papildina Green Book
(<https://www.gov.uk/government/publications/enabling-a-natural-capital-approach-enca-guidance>),
nosaka, kā izvērtētājiem jānovērtē vides izmaksas un ieguvumi biznesa gadījumos, lai ceļa projektu, kas
iznīcina senu mežu, un plūdu aizsardzības projektu, kas atjauno mitrāju, varētu salīdzināt konsekventos
naudas izteiksmē, nevis vienam dodot skaitli, bet otram — rindkopu ar atrunām.

## Matemātika

```
Ekosistēmas pakalpojuma aktīva vērtība = aktīva sniegto pakalpojumu plūsmas NPV

Aktīva vērtība = Σ (t = 1 līdz T) [pakalpojumu gada plūsmas vērtība_t / (1 + r)^t]

kur:
  pakalpojumu plūsmas vērtība_t = pakalpojuma apjoms gadā t × vienības vērtība
                          (piem., atpūtas apmeklējumi × vērtība par apmeklējumu;
                           piesaistītās CO2 tonnas × oglekļa cena)
  r = diskonta likme (Green Book sociālā diskonta likme — skatiet
      [sociālā diskonta likme](../sociālā-diskonta-likme/))
  T = laika horizonts, kurā sagaida, ka aktīvs sniegs pakalpojumu
```

Tā ir tā pati neto tagadnes vērtības struktūra, ko izmanto saražotā kapitāla vērtēšanai vai jebkura
publiskā ieguldījuma izvērtēšanai saskaņā ar [Green Book izvērtējumu](../green-book-novērtējums/) — dabas
kapitāla uzskaites devums ir ticamu fizisku apjomu un vienību vērtību nodrošināšana pakalpojumiem, kas
iepriekš bija novērtēti ar nulli.

## Aprēķina piemērs

**Pilsētas mežs, atpūtas vērtība**: 50 hektāru meža gadā apmeklē aptuveni 80 000 atpūtnieku, un katrs
apmeklējums (ar ceļojuma izmaksu vai deklarēto preferenču metodi — skatiet
[atklāto preferenču vērtēšanu](../atklāto-preferenču-vērtēšana/) un
[deklarēto preferenču vērtēšanu](../deklarēto-preferenču-vērtēšana/)) novērtēts ar £3. Paredzams, ka mežs
šo pakalpojumu sniegs 50 gadus, izvērtējot ar 3,5 % diskonta likmi.

```
Gada atpūtas vērtība = 80 000 × £3 = £240 000/gadā

NPV 50 gados ar 3,5 % ≈ £240 000 × anuitātes koeficients (3,5 %, 50 gadi)
anuitātes koeficients (3,5 %, 50) ≈ 21,4

Aktīva vērtība ≈ £240 000 × 21,4 ≈ £5 136 000
```

**Oglekļa uzkrāšanas pievienošana**: tas pats mežs gadā piesaista aptuveni 400 tonnu CO2, ko vērtē pēc
valdības netirgoto oglekļa cenas, apmēram £75/tonnā (ilustratīvi — īstam izvērtējumam izmantojiet
aktuālās BEIS/DESNZ publicētās oglekļa vērtības).

```
Gada oglekļa vērtība = 400 × £75 = £30 000/gadā
NPV 50 gados ar 3,5 % ≈ £30 000 × 21,4 ≈ £642 000

Meža aktīva kopējā vērtība (atpūta + ogleklis) ≈ £5 136 000 + £642 000
                                                   ≈ £5 778 000
```

Tas ir pirms plūdu mazināšanas, bioloģiskās daudzveidības vai gaisa kvalitātes pakalpojumu pievienošanas,
ko ENCA norādījumi arī aicina izvērtētājus apsvērt — kopsumma ir apzināti apakšējā robeža, nevis augšējā.

## Saikne ar programmatūras inženieriju

- Pašvaldību un aģentūru vides un aktīvu pārvaldības sistēmas (parki, ceļi, ūdenstilpes) līdzās fizisko
  aktīvu reģistram var uzturēt dabas kapitāla reģistru, izmantojot to pašu paraugu "pakalpojumu plūsma
  reizināta ar vienības vērtību", kādu lieto jebkurā citā organizācijas uzturētā
  [vienību izmaksu datubāzē](../vienības-izmaksu-datubāzes/).
- Tā kā dabas kapitāla NPV ir jutīga pret diskonta likmi (skatiet piemēra anuitātes koeficientu),
  jebkuram rīkam, kas to aprēķina, likme un horizonts jāpiedāvā kā redzami ievaddati, nevis jāslēpj —
  tas ir tas pats pārredzamības princips, kas aplūkots tēmā
  [starppaaudžu taisnīgums un ilgtspējas diskontēšana](../starppaaudžu-taisnīgums-un-ilgtspējas-diskontēšana/).
- Dabas kapitāla konti arvien biežāk ir obligāts ievaddatu avots vides ietekmes sadaļām
  [Green Book izvērtējuma](../green-book-novērtējums/) biznesa gadījumā; piegādes komandai, kas veido
  biznesa gadījumu rīkus, ONS kontu un ENCA vienību vērtības jāuzskata par atsauces datiem, kas
  jāintegrē, nevis tādiem, ko izvērtētāji katru reizi pārrēķina no nulles.

## Biežākās kļūdas

- **Pārklājošos ekosistēmu pakalpojumu dubultā uzskaite** — vienas vietas atpūtas vērtība un
  bioloģiskās daudzveidības vērtība var balstīties uz vieniem un tiem pašiem gatavības maksāt datiem;
  ENCA norādījumi skaidri brīdina nesummēt novērtējumus, kas iegūti no pārklājošiem aptaujas
  instrumentiem.
- **Dabas kapitāla aktīva vērtības uzskatīšana par statisku** — pakalpojumu plūsmas mainās līdz ar
  klimatu, apsaimniekošanu un zemes izmantošanas spiedienu; meža oglekļa un plūdu mazināšanas vērtība
  šajā desmitgadē nav vietas pastāvīga īpašība.
- **Valsts vidējo vienības vērtību izmantošana ļoti vietējam lēmumam** — hektāram pieejama pilsētas meža
  un hektāram attālu augstieņu ir ļoti atšķirīga atpūtas vērtība; ENCA norādījumi iesaka izmantot
  vietējās vai konkrētai vietai raksturīgās vērtības, ja tās ir pieejamas, nevis pēc noklusējuma
  valsts vidējās.

## Avoti

- ONS. "UK natural capital accounts."
  <https://www.ons.gov.uk/economy/environmentalaccounts/bulletins/uknaturalcapitalaccounts/latest>
- HM Government. "A Green Future: Our 25 Year Plan to Improve the Environment." (2018)
- HM Treasury / Defra. "Enabling a Natural Capital Approach (ENCA): guidance."
  <https://www.gov.uk/government/publications/enabling-a-natural-capital-approach-enca-guidance>
