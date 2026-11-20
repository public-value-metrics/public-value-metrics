# Uz rezultātiem balstīta atbildība (OBA)

Uz rezultātiem balstīta atbildība (Outcomes-Based Accountability), saukta arī par Results-Based
Accountability (RBA), ir Marka Frīdmena (Mark Friedman) ietvars, kas nošķir divus jautājumus, ko publiskā
sektora pārskati ierasti sajauc: "vai iedzīvotājiem klājas labi?" (iedzīvotāju līmeņa atbildība) un "vai šai
konkrētajai programmai veicas labi?" (snieguma atbildība). Šo divu jaukšana, pēc Frīdmena domām, ir
visbiežākais iemesls, kāpēc labi vadītas programmas tiek vainotas par iedzīvotāju tendencēm, ko tām nekad
nav bijis spēka mainīt.

## Kāpēc tas ir svarīgi

Frīdmens ietvaru izklāstīja grāmatā *Trying Hard Is Not Good Enough* (2005), apgalvojot, ka lielākā daļa
publisko pārskatu vai nu noslīcina lēmumu pieņēmējus iedzīvotāju līmeņa statistikā, ko nekontrolē neviena
atsevišķa aģentūra (pusaudžu grūtniecību līmenis, bezdarba līmenis, paredzamais mūža ilgums), vai arī
programmas līmeņa aktivitāšu skaitā (apkalpotie klienti, veiktie nosūtījumi), kas neko nesaka par to, vai
kāda dzīve ir uzlabojusies. RBA devums ir neliela, disciplinēta vārdnīca, kas abus notur atsevišķi:
iedzīvotāju līmeņa rezultāti (labklājības apstākļi visai iedzīvotāju grupai, piemēram, "bērni piedzimst
veseli") nepieder nevienai atsevišķai aģentūrai un prasa daudzu partneru saskaņotu darbību; snieguma
rādītāji (cik labi konkrēta programma apkalpo savus konkrētos klientus) pieder vienai aģentūrai un jāvērtē
tikai pēc tā, ko šī aģentūra patiešām var ietekmēt. Frīdmena "trīs snieguma jautājumi" — cik daudz mēs
darījām, cik labi mēs to darījām un vai kādam ir labāk? — tagad ir iestrādāti ASV štatu un apgabalu
cilvēkpakalpojumu līgumslēgšanā un, pateicoties ar RBA saskaņotajai konsultāciju firmai un rīkkopai Clear
Impact, plaši izmantoti Apvienotās Karalistes un Sadraudzības valstu vietējo pašvaldību pasūtīšanā.
Praktiskās sekas ir līgumiskas: mājokļu programmu nevajadzētu pārtraukt finansēt tāpēc, ka pilsētas
bezpajumtniecības līmenis pieauga makroekonomisku iemeslu dēļ, kas ir ārpus tās ietekmes, bet to
noteikti vajadzētu pārtraukt finansēt, ja tās pašas klienti netiek nodrošināti ar mājokli.

## Matemātika

```
Iedzīvotāju līmeņa atbildība ("kopaina", ko dala kopiena, reģions vai valsts):
  Rezultāts    — labklājības apstāklis (piem., "iedzīvotāji ir ekonomiski nodrošināti")
  Rādītājs(-i) — šī apstākļa mērs (piem., bezdarba līmenis, mājsaimniecības mediānie ienākumi)
  → neviena atsevišķa programma nepieder rādītājam; izmaiņām nepieciešami daudzi devēji

Snieguma atbildība (par ko atbild viena programma):
  Cik daudz mēs darījām?    — aktivitātes apjoms (apkalpotie klienti, piegādātās vienības)
  Cik labi mēs to darījām?  — kvalitāte/efektivitāte (% pabeidzēju, izmaksas uz klientu)
  Vai kādam ir labāk?       — rezultāts, kas ir svarīgs (% nodarbināto 6 mēnešus pēc
                              programmas, pirms/pēc vai pret salīdzinājuma grupu)

Programmu vērtē pēc trešā snieguma jautājuma, nekad tieši pēc iedzīvotāju līmeņa
rādītāja, ja vien tās mērogs un dizains varētu ticami to mainīt vienatnē.
```

## Aprēķina piemērs

**Pilsētas finansēta nodarbinātības atbalsta programma**, 500 dalībnieku gadā, ko pašvaldība līgumā
noslēgusi saskaņā ar RBA tipa snieguma ietvaru:

```
Iedzīvotāju līmeņa rādītājs (konteksts, nevis programmas rezultātu kartīte):
  Pilsētas bezdarba līmenis: 6,2 % (pieaudzis no 5,8 % iepriekšējā gadā rūpnīcas slēgšanas dēļ,
  kas ir ārpus programmas kontroles)

Snieguma rādītāji (programmas faktiskā atbildība):
  Cik daudz:   500 reģistrēti dalībnieki (mērķis 480) — izpildīts
  Cik labi:    78 % pabeigšanas līmenis; izmaksas uz pabeidzēju = £340 000 / 390 pabeidzēji ≈ £872
  Vai labāk:   no 390 pabeidzējiem 260 ilgstoši nodarbināti 6 mēnešos = 66,7 %
               pret salīdzināmās grupas 41 % (skatiet counterfactual-analysis)
```

Pēc iedzīvotāju līmeņa atbildības lasījuma programma šķiet neveiksmīga — pilsētas bezdarba līmenis
pieauga tās darbības laikā. Pēc RBA snieguma atbildības lasījuma programma ir veiksmīga: tā sasniedza
apjoma mērķi, saglabāja stabilu kvalitāti un radīja nodarbinātības rezultātu, kas par 25,7 procentpunktiem
pārsniedz salīdzināmo grupu, kamēr iedzīvotāju līmeņa rādītājs mainījās iemeslu (rūpnīcas slēgšanas) dēļ,
kas ir pilnībā ārpus programmas kontroles.

## Saikne ar programmatūras inženieriju

RBA tieši atbilst pazīstamam SRE nošķīrumam: iedzīvotāju līmeņa rādītāji ir kā biznesa līmeņa
"Ziemeļzvaigznes" metrikas, kuras nepieder nevienai inženieru komandai no sākuma līdz beigām (uzņēmuma
ieņēmumi, tirgus daļa), savukārt snieguma rādītāji ir kā komandas paša SLO — tas, ko komandas dizaina
lēmumi patiešām maina. Panelis, kas ziņo par abiem, nenorādot, kurš ir kurš, aicina tieši to maldīgo
attiecināšanu, ko RBA tika radīts novērst: dežūrējošs inženieris tiek vainots par metriku, ko kontrolē
atkarību komanda. Pasūtot vai veidojot atskaišu rīkus rezultātu līgumiem, izveidojiet trijotni "cik daudz /
cik labi / vai labāk" kā pirmšķirīgus, atsevišķi filtrējamus laukus, nevis vienu sajauktu KPI — tā ir tā
pati disciplīna, kas nodala priekšlaicīgos un pēcpusējos rādītājus
[publiskā sektora KPI](../publiskā-sektora-kpi/). RBA ir arī atbildības loģika zem
[maksājuma par rezultātu un sociālās ietekmes obligācijām](../maksājums-par-rezultātu-un-sociālās-ietekmes-obligācijas/):
PbR līgums var taisnīgi maksāt tikai par "vai labāk" snieguma rādītāju, nekad par iedzīvotāju līmeņa
rādītāju, ja vien iejaukšanās nav patiesi tā dominējošais virzītājspēks.

## Biežākās kļūdas

- **Programmas apmaksāšana vai sodīšana pēc iedzīvotāju līmeņa rādītāja, ko tā nevar kontrolēt**: tā ir
  vienīgā kļūda, ko RBA ir radīta novērst; pirms sekām piesaistīšanas vienmēr noskaidrojiet, vai programma ir
  liels vai mazs devējs iedzīvotāju līmeņa rezultātā.
- **"Cik daudz" ziņošana kā "vai labāk"**: aktivitāšu skaits (apkalpotie klienti) ir vieglāk savācamie un
  vismazāk informatīvie dati; pieprasiet, lai uz jautājumu "vai kādam ir labāk" atbildētu ar īstiem
  rezultātu datiem, ideālā gadījumā pret kontrafaktisko scenāriju (skatiet
  [kontrafaktiskā analīze](../kontrfaktiskā-analīze/)).
- **RBA rādītāju uzskatīšana par mūžīgi fiksētiem**: Frīdmena metode ir skaidri iteratīva — cikls "dati,
  stāsts, kas darbojas, rīcības plāns" —, nevis vienreizējs rezultātu kartītes izstrādes vingrinājums.
- **Nav salīdzinājuma grupas "vai labāk" vērtēšanai**: izmaiņas pirms/pēc bez kontrafaktiskā scenārija
  sajauc programmas efektu ar tendenci, ko iedzīvotāji būtu uzrādījuši tāpat.

## Avoti

- Mark Friedman, *Trying Hard Is Not Good Enough: How to Produce Measurable Improvements for
  Customers and Communities*, Trafford Publishing, 2005.
- Clear Impact, "What is Results-Based Accountability?"
  <https://clearimpact.com/results-based-accountability/>
