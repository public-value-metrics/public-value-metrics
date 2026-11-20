# MI produktivitāte publiskajā sektorā

Rādītājiem par to, ko MI kodēšanas palīgs patiesībā dara ar inženieru izlaidi — ieteikumu pieņemšanas līmenim, kontrolēto pētījumu paātrinājumam, PR caurlaidībai un koda saglabāšanai —, ir patiesi pretrunīga pierādījumu bāze vēl pirms publiskā sektora ierobežojumu pievienošanas: datu klasifikācija nosaka, kurām mantotās vides daļām MI rīks vispār drīkst pieskarties, iepirkumu cikli nozīmē, ka vērtētais rīks bieži ir par modeļu paaudzi atpalicis no pašreizējām iespējām, un drošības pielaides prasības nosaka, kas to drīkst lietot un kur.

## Kāpēc tas ir svarīgi

Divi visbiežāk citētie kontrolētie pētījumi norāda pretējos virzienos. Peng et al. 2023. gada GitHub Copilot RCT atklāja, ka izstrādātāji jauna HTTP servera uzdevumu pabeidza par 55,8 % ātrāk ar Copilot (1 h 11 min pret 2 h 41 min, n = 95). METR 2025. gada RCT atklāja, ka pieredzējuši atvērtā koda izstrādātāji, strādājot pie *saviem nobriedušajiem repozitorijiem*, ar 2025. gada sākuma MI rīkiem bija par 19 % lēnāki, lai gan uzskatīja, ka ir aptuveni par 20 % ātrāki. Abi pētījumi ir pamatoti; pretruna ir pats secinājums — efektivitāte jaunu uzdevumu gadījumā nepāriet uz efektivitāti nobriedušā kodu bāzē, un liela daļa valdības inženierijas ir darbs ar nobriedušām kodu bāzēm vidē, kas ir vecāka un savdabīgāka par vidējo komerciālo repozitoriju. Central Digital and Data Office Generative AI Framework for HMG (2024, <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>) izklāsta atbildīgas ieviešanas principus tieši tāpēc, ka šo pierādījumu bāzi nevar vienkārši pārņemt no piegādātāju demonstrācijām; no departamentiem tiek gaidīts, ka pirms ieviešanas tie novērtēs rīkus pēc saviem datu apstrādes un drošības prasībām.

## Matemātika

```
Pieņemšanas līmenis    = pieņemtie ieteikumi / parādītie ieteikumi
Saglabāšanas līmenis   = MI kods, kas nonāk līdz sapludināšanai / pieņemtais MI kods
Paātrinājums           = (t_kontrole − t_MI) / t_kontrole  (TIKAI no kontrolēta salīdzinājuma)
Caurlaidības izmaiņas  = Δ sapludinātie PR/izstrādātājs/nedēļa

Publiskā sektora pārklājuma koeficients:
  piemērojamās kodu bāzes daļa = LOC sistēmās, kurās klasifikācija
    (OFFICIAL, OFFICIAL-SENSITIVE, SECRET) rīka lietošanu vispār pieļauj

Vērtības modelis = izstrādātāji × piemērojamais pārklājums × ietaupītais laiks × pilnā likme × izmantojums
             — katram loceklim vajadzīgs vietējs mērījums, un pārklājuma
             koeficientam nav ekvivalenta privātajā sektorā
```

## Aprēķina piemērs

Valdības departaments izmēģina MI kodēšanas palīgu 300 izstrādātājiem, taču rīka lietošanai piemērotas ir tikai OFFICIAL klasificētās sistēmas — 70 % no vides pēc darbinieku skaita sadalījuma, bet atlikušie 30 % (augstākas klasifikācijas sistēmas) ir izslēgti pilnībā.

```
Piemērojamie izstrādātāji = 300 × 0,70 = 210

Izmēģinājuma rezultāts: paši ziņotais ietaupītais laiks 40 min/dienā;
                        izmērītais uzdevumu līmeņa ietaupījums 12 min/dienā (0,2 h)
                        — METR uztveres plaisa, reproducēta reālos apstākļos

Novērtē IZMĒRĪTO skaitli:
  210 × 0,2 h × 220 dienas × £55/h pilnā likme × 0,6 izmantojums
  = 210 × 44 stundas × £55 × 0,6
  = 9 240 stundas × £55 × 0,6 ≈ £304 920/gadā jauda

Izmaksas: 210 licencētas vietas × £22/mēnesī × 12 ≈ £55 440/gadā

Neto jaudas attiecība ≈ 304 920 / 55 440 ≈ 5,5:1
```

Finansējams, balstoties aptuveni uz vienu trešdaļu no paša ziņotā ieguvuma un tikai pēc klasifikācijas griestu piemērošanas — licencējot visus 300 izstrādātājus, uzticoties pašu ziņotajam skaitlim, būtu pārspīlēta gan piemērojamā populācija, gan patiesais ietaupījums.

## Saikne ar programmatūras inženieriju

Disciplīnas, kas pāriet tieši: veikt **pragmatiskus izmēģinājumus** departamenta paša kodu bāzē un reālos uzdevumos, nevis piegādātāju demonstrāciju uzdevumos, jo METR rezultāts ir tieši nobriedušas kodu bāzes secinājums; uzskatīt **pieņemšanas līmeni par aizstājējrādītāju, nevis iznākumu** — augsta pieņemšana ar zemu saglabāšanu ir programmatūras ekvivalents pārmērīgai diagnosticēšanai; katru caurlaidības apgalvojumu savienot ar **stabilitātes pārbaudi**, jo DORA 2025. gada ziņojums atklāja, ka MI ieviešana palielina caurlaidību, bet pasliktina izmaiņu stabilitāti, un tieši šādu neto ieguvuma analīzi veic [DORA rādītāji sabiedriskajai vērtībai](../dora-rādītāji-publiskās-vērtības-nodrošināšanai/); un godīgi atzīt, ka MI rīki var palielināt, nevis samazināt plaisu [tehniskā parāda](../tehniskais-parāds-kā-sabiedriskās-vērtības-erozija/) apgrūtinātās mantotajās vidēs, jo apmācības dati nepietiekami reprezentē COBOL, 4GL un individuālo lieldatoru kodu, kas valdībā ir izplatīts, tāpēc ieteikumu kvalitāte tieši tajās sistēmās, kurām palīdzība vajadzīga visvairāk, bieži ir vājākā. Tas ir blakus plašākam jautājumam par [MI vērtību valdībā](../mākslīgā-intelekta-vērtība-valdībā/), un to jāreglamentē ar tiem pašiem [publiskā sektora kiberdrošības vērtības](../publiskā-sektora-kiberdrošības-vērtība/) ierobežojumiem, kas nosaka, kur jebkurš trešās puses rīks vispār drīkst redzēt kodu vai datus.

## Biežākās kļūdas

- **Piegādātāju pētījumu pārnešana**: jaunu uzdevumu RCT paātrinājumu piemērošana mantotu sistēmu integrācijas darbam ir tieši tā kļūda, ko atklāja METR pētījums.
- **Paša ziņojums kā mērījums**: 20 procentpunktu plaisa starp uztverto un izmērīto ir lielākā zināmā novirze šajā literatūrā, un tā uzpūš biznesa gadījumus, kas balstās tikai uz izstrādātāju aptaujām.
- **Klasifikācijas griestu ignorēšana**: licencēšanas un vērtības modeļi, kas veidoti uz kopējo darbinieku skaitu, nevis uz piemērojamo, ar klasifikāciju apstiprināto apakškopu, sistemātiski pārspīlē gan izmaksu efektivitāti, gan sasniedzamo pārklājumu.
- **Iepirkumu cikla nobīde**: uz ietvara balstīts rīku iepirkums var nozīmēt, ka izmēģinājums novērtē modeļu paaudzi, kas pilnīgas ieviešanas brīdī ir 12–18 mēnešus atpalikusi no publiski pieejamā, tādējādi sākotnējā biznesa gadījuma paātrinājuma pieņēmums novecojis jau pirms palaišanas.

## Avoti

- Peng S, et al., "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot", 2023. <https://arxiv.org/abs/2302.06590>
- METR, "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity", 2025. <https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/>
- DORA, 2025 State of AI-assisted Software Development report. <https://dora.dev/dora-report-2025/>
- Central Digital and Data Office, Generative AI Framework for HMG, 2024. <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>
