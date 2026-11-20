# Vienības izmaksu datubāzes

Vienības izmaksu datubāze ir iepriekš izpētītu, uz pierādījumiem balstītu finanšu aizstājējrādītāju bibliotēka sociāliem iznākumiem — vērtība pārejai no bezdarba uz nodarbinātību, mazākai vientulībai, stabilam īres līgumam —, kas ļauj praktiķim izteikt iznākumu naudā, katru reizi nepasūtot individuālu vērtēšanas pētījumu. Tās pastāv, lai neliela labdarības organizācija, rakstot finansējuma pieteikumu, varētu piemērot tādu pašu stingrību kā labi resursēts konsultāciju uzņēmums, atkārtoti izmantojot aizstājējrādītāju, ko kāds cits jau ir atvasinājis un publicējis.

## Kāpēc tas ir svarīgi

HACT UK Social Value Bank, izstrādāts kopā ar ekonomistu Danielu Fudživaru (Daniel Fujiwara), izmantojot labklājības vērtēšanas metodes, un Global Value Exchange, atvērta, kolektīvi veidota finanšu aizstājējrādītāju datubāze, ir divas plašāk lietotās Apvienotās Karalistes trešajā un publiskajā sektorā. Abas pastāv tāpēc, ka pamatā esošais vērtēšanas darbs — [labklājības vērtēšana](../labklājības-vērtēšana/) un [deklarēto preferenču vērtēšana](../deklarēto-preferenču-vērtēšana/) — ir dārgs, metodoloģiski prasīgs un lēns, ja to veic no nulles katram projektam. Kopīga, publicēta aizstājējrādītāju bibliotēka pārvērš to, kas citādi būtu vairāku mēnešu pētījums, uzmeklēšanā, un tieši tāpēc tās ir svarīgas gan [sociālās ieguldījumu atdeves](../sociālā-ieguldījumu-atdeve/) aprēķiniem, gan [Sociālās vērtības likuma](../sociālās-vērtības-likums/) piedāvājumu vērtēšanai: bez tām stingra izteikšana naudā būtu pieejama tikai organizācijām, kas pietiekami lielas, lai pasūtītu savus pētījumus.

## Matemātika

Vienības izmaksu datubāze pati neko neaprēķina; tā sniedz vienu ievaddatu aprēķinam, kas tiek veikts citur:

```
Finanšu aizstājējrādītāja vērtība = tirgus cena, VAI ēnu cena, VAI labklājības novērtējums,
                         VAI deklarēto preferenču vērtība
                         definētai iznākuma izmaiņu vienībai
                         (piem., „uz cilvēku, kas pāriet no bezdarba uz nodarbinātību, gadā")

Piemērotā vērtība = sasniegto iznākumu skaits × aizstājējrādītāja vērtība uz vienību
```

Skatiet [ēnu cenas](../ēnu-cenas/), kā aizstājējrādītāju konstruē, ja nav tirgus cenas, un [sociālā ieguldījumu atdeve](../sociālā-ieguldījumu-atdeve/), kā piemērotā vērtība pēc inerces efekts un attiecināšanas korekcijām ieplūst attiecībā.

## Aprēķina piemērs

**Labdarības organizācija (draudzēšanās pakalpojuma SROI)**: vienības izmaksu datubāzes ieraksts „vientulības samazināšana" dod ilustratīvu aizstājējrādītāju £1 100 uz cilvēku gadā. Piemērojot 80 labuma guvējiem: 80 × £1 100 = £88 000 bruto vērtība. Ja tajā pašā datubāzē ir arī aizstājējrādītājs „uzlabota garīgā labklājība", kas balstās uz pārklājošos labklājības aptaujas vienumu, abu aizstājējrādītāju summēšana tiem pašiem 80 cilvēkiem dubultā uzskaitītu daļu no tās pašas pamatā esošās izmaiņas — datubāze nodrošina skaitli, bet šīs pārklāšanās novēršana ir analītiķa atbildība.

**Pašvaldība (darba kluba SROI)**: vienības izmaksu datubāzes ieraksts „pāreja no bezdarba uz ilgstošu nodarbinātību" tiek piemērots 45 dalībniekiem ar ilustratīvu aizstājējrādītāju £8 500 uz cilvēku gadā: 45 × £8 500 = £382 500 bruto vērtība pirms inerces efekta un attiecināšanas korekcijām, kas parādītas [sociālajā ieguldījumu atdevē](../sociālā-ieguldījumu-atdeve/).

## Saikne ar programmatūras inženieriju

Komandām, kas būvē ziņošanas rīkus labdarības organizācijām vai pasūtītājiem, noder iekšējs „iznākumu katalogs" — tabula, kas katru iznākumu, ko produkts vai pakalpojums ticami var pieprasīt, sasaista ar nosauktu aizstājējrādītāju, tā avota datubāzi, publicēšanas datumu un versijas identifikatoru —, lai dažādas komandas organizācijā neizvēlētos nedaudz atšķirīgas vērtības vienam un tam pašam iznākumam. Global Value Exchange atvērto datu iesaiņošana uzmeklēšanas pakalpojumā, vienmēr līdzās skaitlim rādot avotu un datumu, saglabā aizstājējrādītāju revidējamu, nevis par maģisku skaitli, kas apglabāts izklājlapā. Skatiet [sociālā ieguldījumu atdeve](../sociālā-ieguldījumu-atdeve/) un [sociālās vērtības likums](../sociālās-vērtības-likums/) par abām galvenajām vietām, kur šos aizstājējrādītājus patērē.

## Biežākās kļūdas

- **Aizstājējrādītāju uzskatīšana par precīziem.** Lielākā daļa publicēto aizstājējrādītāju ir modelēti vidējie rādītāji no labklājības vērtēšanas pētījumiem ar plašiem ticamības intervāliem; citēšana ar mārciņas precizitāti pārspīlē precizitāti, ko pamatā esošais pētījums atbalsta.
- **Pārklājošos aizstājējrādītāju dubultā uzskaite.** Aizstājējrādītāju (piem., „mazāka vientulība" un „uzlabota garīgā labklājība"), kas atvasināti no pārklājošiem aptaujas konstruktiem, apvienošana divreiz novērtē vienu un to pašu pamatā esošo izmaiņu.
- **Ārpus konteksta esoša aizstājējrādītāja lietošana bez korekcijas.** Aizstājējrādītājs, kalibrēts vienai nacionālajai populācijai un gadam, kas piemērots citur bez inflācijas vai konteksta korekcijas, klusībā nepareizi norāda vērtību.
- **Izcelsmes nepārbaude.** Global Value Exchange ir atvērta un kolektīvi veidota, tāpēc ierakstu kvalitāte atšķiras pa autoriem; pirms skaitļa citēšanas finansējuma pieteikumā vai iepirkuma iesniegumā pārbaudiet pamatā esošo avotu.

## Avoti

- HACT, "UK Social Value Bank." <https://hact.org.uk/tools-and-services/uk-social-value-bank/>
- Global Value Exchange. <https://www.globalvaluexchange.org/>
- Fujiwara D., "The Social Impact of Housing Providers" (HACT, 2013) — methodological basis of the
  UK Social Value Bank.
- Social Value UK, "A Guide to Social Return on Investment," section on financial proxies.
