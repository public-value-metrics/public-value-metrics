# Loģikas modelis

Loģikas modelis ir lineāra diagramma, kas programmā savieto resursus, darbības, izlaidi, rezultātus un
ietekmi. To lasa no kreisās uz labo kā atbildības ķēdi: resursi tiek ieguldīti, notiek darbības,
tiek radīta izlaide, saņēmējiem mainās situācija (rezultāti), bet ietekme uzkrājas plašākā vai
ilgākā laika posmā. Tā ir standarta struktūra, kādu finansētāji un auditori sagaida, sagatavojot
programmas pārskatus, un tā ir uz nākotni vērstais pretstats atpakaļ virzienā veidotajai
[pārmaiņu teorijai](../pārmaiņu-teorija/).

## Kāpēc tas ir svarīgi

HM Treasury "Magenta Book" nosaka loģikas modeli kā obligātu programmas izvērtēšanas plānojuma
elementu, un finansētāji, piemēram, National Lottery Community Fund, veido savas pieteikumu un
pārskatu veidlapas tieši ap šo piecu kolonnu ķēdi. Modeļa vērtība ir tā, ka tas piespiež programmu
vienā diagrammā pateikt, ko tā tērēs, ko ar to darīs, ko radīs un — kas ir būtiskākais — kam
jāmainās šo darbību rezultātā, un to izdarīt konkrētāk, nekā tas parasti izdodas ar teksta
rindkopu. Loģikas modeli, kurā resursu un darbību kolonna ir aizpildīta, bet rezultātu kolonna ir
tukša vai neskaidra, var atpazīt acumirklī, un tieši tāpēc finansētāji to pieprasa.

## Matemātika

Loģikas modelis ir strukturāla ķēde, nevis formula:

```
Resursi         Darbības          Izlaide             Rezultāti             Ietekme
(ieguldītie     (ko ar tiem       (tieši, saskaitāmi  (izmaiņas              (ilgtermiņa,
 līdzekļi)       dara)             produkti)           saņēmējiem)           iedzīvotāju līmeņa
                                                                             vai sistēmiskas
                                                                             izmaiņas)
```

Katrai nākamajai kolonnai jābūt konkrētākai par iepriekšējo: resursi ir tas, ko tērē, darbības ir tas,
ko dara, izlaide ir tas, kas tiek piegādāts neatkarīgi no efekta, rezultāti ir tas, kas mainās
šīs piegādes dēļ — šo atšķirību pilnā apjomā aplūko tēma
[rezultāti pret izlaidi](../rezultāti-pret-izlaidi/) —, bet ietekme ir ilgtspējīgas, bieži vien tikai
daļēji attiecināmas ilgtermiņa pārmaiņas.

## Aprēķina piemērs

**Pašvaldība (digitāls parādu konsultāciju pakalpojums)**:

- Resursi: £180 000 gada budžets, 4,0 pilnas slodzes ekvivalenta konsultanti, lietu pārvaldības sistēma.
- Darbības: informēšanas pasākumi, individuālas parādu konsultācijas.
- Izlaide: 900 sniegtu konsultāciju; 750 izsniegti parādu un pabalstu plāni.
- Rezultāti: no klientiem, kas sasnieguši 6 mēnešu pēcpārbaudi, 60 % (450 no 750) ziņo par
  samazinātiem parādiem, vidēji par £1 200 uz klientu — kopā £540 000 parādu samazinājums.
- Ietekme: izmērāms bezpajumtniecības pieteikumu skaita kritums pakalpojuma klientu vidū divu gadu
  laikā, kas tikai daļēji attiecināms uz šo pakalpojumu līdzās citām iejaukšanās darbībām (skatiet
  [kontrafaktisko analīzi](../kontrfaktiskā-analīze/)).

**Labdarības organizācija (pārtikas bankas nosūtīšanas partnerība)**:

- Resursi: £45 000, 1,5 pilnas slodzes ekvivalenta koordinators, partnerības līgumi ar 12 nosūtītājaģentūrām.
- Darbības: nosūtījumu atlase, pārtikas pakešu komplektēšana un izdale.
- Izlaide: 5 000 pārtikas pakešu, izdalītas 1 100 mājsaimniecībām.
- Rezultāti: 68 % aptaujāto mājsaimniecību (748 no 1 100) 4 nedēļu pēcpārbaudes zvanā ziņo par
  uzlabotu pārtikas nodrošinājumu.
- Ietekme: ieguldījums vietējā krīzes pakalpojumu pieprasījuma samazināšanā, ko apliecina tikai
  apkaimes kopējā statistika un ko nevar attiecināt tikai uz šo labdarības organizāciju.

## Saikne ar programmatūras inženieriju

Loģikas modelis ir gandrīz burtisks rezultātu sistēmas datu modelis: resursi un darbības ir
operatīvie dati, kas jums jau ir (izdevumi, personāls, sesiju žurnāli); izlaidi ir viegli instrumentēt,
jo to uzskaita piegādes vietā; rezultātiem nepieciešama speciāli izstrādāta pēcpārbaužu datu vākšana
(aptaujas, administratīvo datu sasaiste), kas neradīsies, ja to neizveidos; ietekmei parasti
vajadzīgi sasaistīti, garenvirziena vai iedzīvotāju līmeņa dati, kas pārsniedz jebkuras vienas
programmas sistēmas. Atskaišu rīku veidotājiem būtu jāpiespiež pasūtītāji rezultātu un ietekmes
rādītājus definēt jau projektēšanas laikā, nevis pēc noklusējuma izveidot tikai izlaides paneli tāpēc,
ka to atbalsta transakciju dati. Par metodi, kas novērtē tieši rezultātu un ietekmes kolonnas, skatiet
[sociālo atdevi no ieguldījuma](../sociālā-ieguldījumu-atdeve/), bet par to, kā izsekot, vai ietekmes
kolonna patiešām ir sasniegta, — [ieguvumu realizāciju](../ieguvumu-realizācija/).

## Biežākās kļūdas

- **Apstāšanās pie izlaides.** Panelis, kas ziņo par sniegtajām konsultācijām vai izdalītajām
  pakešu skaitu un netieši norāda uz ieguvumu, ziņo par aktivitāti, nevis rezultātiem — skatiet
  [rezultāti pret izlaidi](../rezultāti-pret-izlaidi/).
- **Nav norādīta cēloņsakarība starp kolonnām.** Loģikas modelis parāda ķēdi, bet nepaskaidro,
  kāpēc darbībām jārada izlaide un izlaidei — rezultāti; šis pamatojums pieder
  [pārmaiņu teorijai](../pārmaiņu-teorija/), un loģikas modelis bez tās ir nepārbaudīts.
- **Uzskatīšana par vienreizēju pieteikuma dokumentu.** Loģikas modeļi, kas sagatavoti tikai finansējuma
  pieteikumam un nekad netiek atjaunināti, pārstāj atspoguļot to, ko programma patiesībā dara.
- **Attiecināšanas izplūšana ietekmes kolonnā.** Iedzīvotāju līmeņa izmaiņu piedēvēšana tikai vienai
  programmai bez kontrafaktiskā scenārija pārspīlē to, ko apliecina pierādījumi.

## Avoti

- HM Treasury, Magenta Book (2020), Chapter 3. <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, logic model guidance. <https://www.tnlcommunityfund.org.uk/>
- W.K. Kellogg Foundation, "Logic Model Development Guide" (2004). <https://www.wkkf.org/resource-directory/resources/2004/01/logic-model-development-guide>
