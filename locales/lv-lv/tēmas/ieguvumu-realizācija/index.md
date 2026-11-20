# Ieguvumu realizācija

Ieguvumu realizācijas pārvaldība ir disciplīna, kas identificē, nosaka bāzlīniju, izseko un *pierāda*, ka biznesa gadījumā solītie ieguvumi pēc palaišanas patiešām ir iestājušies. Apvienotās Karalistes publiskajos ieguldījumos tā ir iekļauta HM Treasury Green Book piecu gadījumu modelī (Five Case Model) un Infrastructure and Projects Authority speciālajos ieguvumu pārvaldības norādījumos; bez tās apgalvojums „sistēma ietaupīja darbiniekiem trīsdesmit minūtes uz pieteikumu" uz visiem laikiem paliek neauditēts apgalvojums.

## Kāpēc tas ir svarīgi

Biznesa gadījumi ir solījumi; ieguvumu realizācija ir audits. Green Book prasa, lai katrs izdevumu gadījums izturētu piecus pārbaudījumus — stratēģisko, ekonomisko, komerciālo, finansiālo un pārvaldības —, un pārvaldības gadījumam *pirms apstiprināšanas* jāizklāsta, kā ieguvumi tiks realizēti: nosaukti īpašnieki, fiksētas bāzlīnijas un noteikti mērījumu datumi. Infrastructure and Projects Authority ceļvedis *Benefits Management: A Guide to Realizing Benefits for Government Major Projects* (<https://www.gov.uk/government/publications/benefits-management-a-guide-to-realizing-benefits-for-government-major-projects>) pastāv tāpēc, ka paša IPA ziņojumos par Government Major Projects Portfolio atkārtoti konstatēts, ka piegādes pārliecība un ieguvumu realizācija ir atkārtoti minēti kā vājie punkti lielajās programmās. Projekts var noslēgties „laikā un budžeta ietvaros" attiecībā pret piegādes atskaites punktiem, tomēr nerealizēt ieguvumus, kas sākotnēji attaisnoja naudas tērēšanu — IPA norādījumi šo atšķirību uzskata par visas disciplīnas jēgu.

## Matemātika

```
Realizācijas līmenis = realizētie ieguvumi / prognozētie ieguvumi   (katram ieguvumam, katram periodam)

Mehānismi, kas padara to aprēķināmu:
  bāzlīnija fiksēta PIRMS palaišanas (citādi starpība nav izmērāma)
  katram ieguvumam: nosaukts īpašnieks, rādītājs, datu avots, mērījumu grafiks
  prognoze koriģēta pēc optimisma novirzes novērtēšanas laikā (Green Book prasība)
  ieguvumi iedalīti naudas atbrīvojošos / jaudu atbrīvojošos / kvalitatīvajos,
  izsekoti un uzrādīti atsevišķi
```

## Aprēķina piemērs

**Vietējā pašvaldība**: digitālā būvatļauju pieteikumu portāla biznesa gadījums solīja gadā: £300 000 drukāšanas un pasta izmaksu samazinājumu (nauda), 4 500 atbrīvotas ierēdņu stundas (jauda) un uzlabotu pieteikumu iesniedzēju apmierinātību (kvalitatīvi). Divpadsmit mēnešus pēc palaišanas:

```
Ieguvums          Prognoze   Realizēts  Līmenis  Pierādījumi
Naudas ietaupījumi £300 000  £210 000   70 %     finanšu virsgrāmata pret bāzlīnijas gadu
Ierēdņu stundas   4 500      3 200      71 %     laika-kustību izlase
Apmierinātība     +8 pp      +11 pp     138 %    pieteikumu iesniedzēju aptaujas dati

Darbības pēc pārskata (ieguvumu realizācijas jēga):
naudas iztrūkums attiecināts uz divām pakalpojumu jomām, kas izņēmuma kārtā
joprojām apstrādā papīra pieteikumus → slēgt izņēmuma ceļu;
nākamā biznesa gadījuma optimisma novirzes korekcija paaugstināta no 10 % uz 25 %,
balstoties uz šī gadījuma prognozēšanas kļūdu.
```

70 % realizācijas līmenis nav neveiksme — tās ir zināšanas, kas ļauj nākamo prognozi kalibrēt labāk. Neizmērīts gadījums uz visiem laikiem apgalvotu 100 %, un finanšu komandai nebūtu pamata to apstrīdēt.

## Saikne ar programmatūras inženieriju

Inženieru organizācijas ierasti apstiprina platformu un rīku ieguldījumus, balstoties uz prognozēto ieguvumu, un gandrīz nekad tos pēc tam neauditē — tieši to patoloģiju, ko ieguvumu realizācijas pārvaldība ir paredzēta labot. Vieglā versija: katrs priekšlikums virs būtiskuma sliekšņa nosauc ieguvuma īpašnieku, bāzlīnijas rādītāju un fiksētu pārskata datumu (parasti seši mēneši pēc palaišanas), un iepriekšējo priekšlikumu realizācijas līmeņiem jāsamazina organizācijas uzticēšanās komandas vai piegādātāja nākamajai prognozei. Tas noslēdz loku atpakaļ uz [Green Book novērtēšanu](../green-book-novērtējums/), kas nosaka prognozi, kuru šī disciplīna auditē, un tā ir tā pati loģika, kas stāv aiz plaši ziņotā secinājuma, ka liela daļa ģeneratīvā MI izmēģinājumu neuzrāda izmērāmu atdevi — sk. [MI produktivitāte publiskajā sektorā](../mi-produktivitāte-publiskajā-sektorā/) —, jo izmēģinājumi, kas *atdeva* vērtību, gandrīz bez izņēmuma bija tie, kuriem no paša sākuma bija nosaukta, izsekojama ieguvumu līnija. Tas ir atkarīgs arī no atšķirības starp to, kas faktiski piegādāts, un to, kas faktiski realizēts — sk. [iznākumi un izlaide](../rezultāti-pret-izlaidi/).

## Biežākās kļūdas

- **Nav bāzlīnijas pirms palaišanas**: liktenīgs, nelabojams izlaidums — bez tās nekad nevar aprēķināt realizācijas līmeni, tikai apgalvot to.
- **Ieguvuma bāreņi**: ieguvumam bez nosaukta īpašnieka nav neviena, kas vāc datus, un katrā portfeļa pārskatā tas pēc noklusējuma tiek uzrādīts kā „kopumā grafikā".
- **Ieguvumu dubultā uzskaite programmu portfelī**: divi projekti abi apgalvo to pašu atbrīvoto darbinieku jaudu kā savu ieguvumu — jātur viens ieguvumu reģistrs visā portfelī, lai to pamanītu.
- **Realizācijas teātris**: viegli sasniedzamo kvalitatīvo uzvaru izmērīšana un izcelšana, kamēr naudas un jaudas līnijas klusi paliek neizpētītas.
- **Piegādes sajaukšana ar realizāciju**: projekts, kas „laikā un budžeta ietvaros" noslēdz atskaites punktus, neko nesaka par to, vai prognozētais ieguvums vispār iestājies — IPA norādījumi to uzskata par diviem atsevišķiem jautājumiem ar diviem atsevišķiem pierādījumu ceļiem.

## Avoti

- HM Treasury, Green Book and Five Case Model guidance. <https://www.gov.uk/government/collections/the-green-book-and-accompanying-guidance-and-documents>
- Infrastructure and Projects Authority, *Benefits Management: A Guide to Realizing Benefits for Government Major Projects*. <https://www.gov.uk/government/publications/benefits-management-a-guide-to-realizing-benefits-for-government-major-projects>
- Infrastructure and Projects Authority, Annual Report on the Government Major Projects Portfolio. <https://www.gov.uk/government/collections/infrastructure-and-projects-authority-annual-report>
