# Publiskā sektora kiberdrošības vērtība

Publiskā sektora kiberdrošības vērtība ir riska samazinājuma novērtēšanas disciplīna: cik vērts ir
padarīt iedzīvotāju datu noplūdi mazāk ticamu, ņemot vērā, ka izdevumi drošībai nerada redzamu
izlaidi, kad tie darbojas, un ļoti redzamu — kad tie neizdodas? Pakalpojumam, kas glabā pabalstu
ierakstus, veselības datus vai nodokļu ierakstus, šī "neredzamības, kad darbojas" īpašība ir tieši tas, kāpēc
tam vajadzīgs skaidrs vērtības arguments, nevis tikai atbilstības ķeksītis.

## Kāpēc tas ir svarīgi

Apvienotās Karalistes Nacionālā kiberdrošības centra (NCSC) Kiberdrošības novērtēšanas ietvars
(Cyber Assessment Framework, CAF) sniedz publiskā sektora organizācijām strukturētu veidu, kā padarīt
drošību par novērtējamu, uz rezultātiem balstītu disciplīnu, nevis kontrolsarakstu: tas definē četrus
augsta līmeņa mērķus (drošības riska pārvaldība, aizsardzība pret kiberuzbrukumiem, kiberdrošības notikumu
atklāšana un incidentu ietekmes samazināšana), kas sadalīti veicinošos rezultātos, pret kuriem var novērtēt
sistēmas īpašnieku, tādā pašā garā kā [digitālā pakalpojuma standarta](../digitālo-pakalpojumu-standarts/)
9. punkts ("izveidot drošu pakalpojumu, kas aizsargā lietotāju privātumu"). Pret ko CAF novērtējums
aizsargā, tam ir dokumentēta cena: IBM "Cost of a Data Breach Report" izseko vidējās noplūdes izmaksas pa
nozarēm un konsekventi konstatējis, ka publiskais sektors ir diapazona zemākajā galā salīdzinājumā ar
finansēm vai veselības aprūpi — jaunākajos izdevumos publiskā sektora vidējais ir ap $2,6–2,9 miljoniem
par noplūdi —, taču "zemāk nekā finansēs" nav "zems", un valdības noplūdēm ir izmaksas, ko ziņojuma
skaitļi pilnībā neaptver: iedzīvotāju uzticības zaudējums digitālajiem kanāliem, kas samazina
[digitālo pieņemšanu](../kanālu-pārslēgšanas-ietaupījumi/), no kuras ir atkarīgi kanālu nobīdes biznesa gadījumi,
kā arī politiskās un juridiskās izmaksas par datu atklāšanu, kurus valsts pirmām kārtām piespieda
iedzīvotājus nodot.

## Matemātika

Drošības ieguldījumus novērtē tāpat kā jebkurus riska samazināšanas izdevumus: kā sagaidāmo zaudējumu
samazinājumu, izmantojot klasisko riska pārvaldības identitāti.

```
Gada sagaidāmie zaudējumi (ALE) = Vienreizējo zaudējumu sagaidāmā vērtība (SLE)
                                  × Gada sastopamības biežums (ARO)

Drošības kontroles vērtība =
  ALE_pirms_kontroles − ALE_pēc_kontroles − kontroles gada izmaksas

Kontroli ir vērts finansēt, ja:
  (ALE_pirms − ALE_pēc) > kontroles gada izmaksas

CAF novērtējums tieši nesniedz varbūtību, bet pakalpojuma CAF
rezultātu profils (kuri veicinošie rezultāti ir "sasniegti",
"daļēji sasniegti" vai "nav sasniegti") ir saprātīgs ievaddatu
aizstājējs ARO novērtēšanai — sistēmai ar nepārvaldītu privileģēto piekļuvi
vai bez pārbaudīta incidentu reaģēšanas plāna ir būtiski augstāks
reālistiskais ARO nekā tādai, kurai ir abi.
```

## Aprēķina piemērs

**Apgabala domes lietu pārvaldības sistēma, kas glabā sociālās aprūpes ierakstus 40 000 iedzīvotājiem**:

```
Vienreizējo zaudējumu sagaidāmā vērtība (noplūdes izmaksas), izmantojot publiskā
sektora vidējo no nesenā IBM Cost of a Data Breach Report ≈ £2,1 milj.
(konvertēts, kārtas lieluma skaitlis — vienmēr atvasiniet no
aktuālā ziņojuma izdevuma, nevis izmantojiet fiksētu skaitli)

Pašreizējais ARO (nepārvaldīta privileģētā piekļuve, nav pārbaudīta incidentu
reaģēšana, saskaņā ar iekšējo CAF pašnovērtējumu, kas uzrāda vairākus
"nav sasniegti" rezultātus) ≈ aprēķināts 8 % gadā
  ALE_pirms = £2,1 milj. × 0,08 = £168 000/gadā

Piedāvātā kontrole: privileģētās piekļuves pārvaldība + pārbaudīts incidentu
reaģēšanas plāns, pārceļot attiecīgos CAF rezultātus uz "sasniegti",
paredzams, ka ARO samazināsies līdz 3 %/gadā
  ALE_pēc = £2,1 milj. × 0,03 = £63 000/gadā

Kontroles gada izmaksas (rīki + process + testēšana) = £45 000

Kontroles vērtība = (168 000 − 63 000) − 45 000 = £60 000/gadā
  neto pozitīva — finansēt. Aprēķins arī parāda, ka kontrole
  būtu finansējama pat pie gandrīz trīskāršām izmaksām, un tāda jutīguma
  pārbaude jāpievieno jebkuram ALE skaitlim, kas balstīts uz aprēķinātām
  varbūtībām.
```

## Saikne ar programmatūras inženieriju

Inženieriem pieder lielākā daļa ALE vienādojuma sviru: piekļuves kontroles dizains, atkarību un ielāpu
higiēna, žurnalēšanas un atklāšanas pārklājums un incidentu reaģēšanas rīki visi tieši maina ARO locekli,
tāpēc CAF novērtējums līdzinās tehniskās arhitektūras pārskatam tikpat lielā mērā kā politikas auditam. Tas ir
[tehniskais parāds kā publiskās vērtības erozija](../tehniskais-parāds-kā-sabiedriskās-vērtības-erozija/) visakūtākajā formā
— neielāpotas, neuzraudzītas, slikti piekļuves kontrolētas sistēmas ir parāds, kura procentu maksājums ir
astes risks, nevis vienmērīga bremze —, un tas jāsaskaņo ar
[kopējām īpašumtiesību izmaksām valdības IT](../kopējās-piederības-izmaksas-valsts-it/), lai drošības
izdevumus neuzskatītu par atsevišķiem no sistēmas reālajām darbināšanas izmaksām. Tas ir arī tiešs ievaddatu
avots [izmaksu lietderības (value for money)](../vērtība-par-naudu/) novērtējumiem saskaņā ar Green Book:
ar risku koriģētās izmaksas ir daļa no jebkura variantu izvērtējuma izmaksu puses, nevis papildinājums beigās.

## Biežākās kļūdas

- **CAF pašnovērtējuma uzskatīšana par pašu drošību**: pabeigts novērtējums apraksta drošības stāvokli, bet
  to neizveido — vērtība ir sasniegtajos rezultātos, nevis dokumentā.
- **Globālo vidējo noplūdes izmaksu izmantošana kā vietējā novērtējuma bez korekcijas**: IBM skaitļi ir
  vidējie lielos, daudzveidīgos paraugos; mazas pašvaldības reālistiskā vienreizējo zaudējumu sagaidāmā
  vērtība reti ir tāda pati kā valsts valdības departamentam.
- **Astes riska psiholoģijas ignorēšana ieguldījumu lēmumos**: zema gada varbūtība ļauj drošības izdevumus
  bezgalīgi atlikt, līdz pat gadam, kad tas nenotiek — ALE aprēķina jutīguma pārbaude pret ARO diapazonu,
  kā piemērā, tam pretojas.
- **Skaitīt tikai IBM tipa noplūdes izmaksas, nevis uzticības izmaksas**: noplūde, kas mazina iedzīvotāju
  gatavību izmantot digitālos kanālus, gadiem ilgi sagrauj [kanālu nobīdes ietaupījumu](../kanālu-pārslēgšanas-ietaupījumi/)
  pamatojumu — izmaksas, kuras reti iekļauj noplūdes izmaksu aprēķinos.

## Avoti

- National Cyber Security Centre, Cyber Assessment Framework. <https://www.ncsc.gov.uk/collection/caf>
- IBM, Cost of a Data Breach Report. <https://www.ibm.com/reports/data-breach>
- GOV.UK Service Manual, service standard, point 9: create a secure service which protects users' privacy. <https://www.gov.uk/service-manual/service-standard/point-9-create-a-secure-service>
