# Brīvprātīgā laika vērtība

Brīvprātīgā laika vērtība ir naudas novērtējums, kas piešķirts neapmaksātam darbam; to visbiežāk izmanto, lai norādītu labdarības organizācijas patieso ekonomisko pēdu — tās pārskatus plus darbu, par kuru tai nebija jāmaksā — vai lai pamatotu, ka kāda intervence ir izmaksu efektīvāka, nekā liecina tikai tās naudas budžets. Dominē divas nacionālās metodoloģijas: ASV Independent Sector novērtējums un Apvienotās Karalistes Nacionālā statistikas biroja (ONS) / NCVO pieeja, un tās vienu un to pašu darba stundu novērtē visai atšķirīgi.

## Kāpēc tas ir svarīgi

Katru gadu Independent Sector sadarbībā ar Merilendas Universitātes Do Good Institute publicē brīvprātīgā laika nacionālo stundas vērtību, kas izveidota no Darba statistikas biroja algu datiem — konkrēti, ražošanas un nepārraudzības darbinieku vidējiem stundas ieņēmumiem privātajā nelauksaimniecības algu sarakstā, plus pabalstu korekcija — un sadalīta pa ASV štatiem. Tās jaunākais izdevums noteica vērtību **$36,14 par stundu 2025. gadam**, pieaugums par 3,9 % pret iepriekšējo gadu, ar štatu līmeņa vērtībām no vairāk nekā $50 Vašingtonā (DC) līdz mazāk nekā $20 Puertoriko. Apvienotajā Karalistē Nacionālais statistikas birojs atsevišķi novērtējis formālās brīvprātīgā darba aizstāšanas izmaksas **£14,43 par stundu** (2017. gada novērtējums), un NCVO UK Civil Society Almanac 2024 izmanto brīvprātīgā darba līdzdalības datus — ap 14,2 miljoniem cilvēku formāli strādāja brīvprātīgi 2021.–22. gadā —, lai novērtētu nozares kopējo brīvprātīgā darba ieguldījumu aptuveni **£18 miljardos**, jeb aptuveni 0,8 % no Apvienotās Karalistes IKP.

Iemesls, kāpēc tas ir svarīgi ārpus grāmatvedības kosmētikas: programma, kas lielā mērā balstās uz brīvprātīgo darbu, var izskatīties krasi lētāka pēc tīras naudas [izmaksām uz iznākumu](../izmaksas-uz-iznākumu/) nekā tāda, kas balstās uz algotiem darbiniekiem, pat ja patiesās resursu izmaksas — cik maksātu šī darba aizstāšana — ir līdzīgas vai augstākas. Finansētāji un vērtētāji, kas ignorē brīvprātīgā laika vērtību, sistemātiski nenovērtē uz brīvprātīgajiem balstītu piegādes modeļu patiesās izmaksas, kas izkropļo efektivitātes salīdzinājumus ar algotu darbinieku modeļiem, kuri nodrošina to pašu iznākumu.

## Matemātika

```
Brīvprātīgā laika vērtība = Ieguldītās brīvprātīgā darba stundas × stundas likme

Likmes izvēle ir svarīga un maina atbildi:
  - Aizstāšanas izmaksu pieeja: algota darbinieka alga, kas veiktu to pašu
    uzdevumu (piem., kvalificēta jauniešu darbinieka aizstāšanas izmaksu likme,
    nevis vispārēja vidējā alga) — visaizstāvamākā uzdevumam specifiskai vērtēšanai
  - Alternatīvo izmaksu pieeja: paša brīvprātīgā zaudētā alga — visaizstāvamākā,
    lai novērtētu, no kā brīvprātīgais atteicies
  - Nacionālā vidējā pieeja: Independent Sector vai ONS viena sajaukta likme —
    visaizstāvamākā galvenajam, starpnozaru salīdzināmam rādītājam
```

Trīs pieejas vienai un tai pašai stundai var atšķirties vairākkārt (jurists, kas strādā brīvprātīgi kā padomes locekļa pilnvarotais, ir ar ļoti atšķirīgu alternatīvo izmaksu likmi no nacionālās vidējās likmes), tāpēc jebkuram ziņotam skaitlim jānorāda, kura metode to radīja.

## Aprēķina piemērs

**Apvienotās Karalistes labdarības organizācija, nacionālā vidējā pieeja**: 5000 brīvprātīgā darba stundas gadā, novērtētas ar £14,43/stundā (ONS aizstāšanas izmaksu novērtējums):

```
Vērtība = 5000 × £14,43 = £72 150
```

Ja organizācijas naudas izdevumi tajā gadā bija £300 000, tās patiesās resursu izmaksas — nauda plus brīvprātīgo darbs — ir £372 150, aptuveni par 24 % augstākas, nekā liecina tikai naudas skaitlis. Izmaksu uz iznākumu aprēķins, izmantojot tikai £300 000 naudas skaitli, nenovērtē patiesās izmaksas par to pašu rezervi.

**ASV labdarības organizācija, nacionālā vidējā pieeja**: 2000 brīvprātīgā darba stundas, novērtētas ar $36,14/stundā (Independent Sector, 2025. gada izdevums):

```
Vērtība = 2000 × $36,14 = $72 280
```

**Tā pati ASV organizācija, alternatīvo izmaksu pieeja**: ja brīvprātīgie nesamērīgi bieži ir pensionēti profesionāļi, kuru iepriekšējie ieņēmumi vidēji bija $60/stundā, alternatīvo izmaksu novērtējums būtu $120 000 — par divām trešdaļām augstāks nekā nacionālā vidējā skaitļa — ilustrējot, kāpēc metode jānorāda.

## Saikne ar programmatūras inženieriju

Sistēmām, kas reģistrē brīvprātīgā darba stundas (maiņu plānošanas rīki, brīvprātīgo pārvaldības platformas), jāfiksē stundas uzdevuma vai lomas līmenī, nevis tikai kopsumma, lai aizstāšanas izmaksu likmi varētu piemērot katrai lomai atsevišķi, nevis vienu vispārēju nacionālo vidējo likmi jauktam brīvprātīgo darbaspēkam (pilnvarotā stunda un uzraugošā stunda nav ekonomiski līdzvērtīgas). Likmes un izmantotās metodoloģijas glabāšana līdzās aprēķinātajai vērtībai — ne tikai gala naudas skaitlim — ļauj turpmākajai ziņošanai (gada pārskati, [sociālās ieguldījumu atdeves](../sociālā-ieguldījumu-atdeve/) aprēķini, finansētāju ziņojumi) skaitli vēlāk atkārtot vai apstrīdēt, nevis uzskatīt to par necaurspīdīgu konstanti. Skatiet [izmaksas uz iznākumu](../izmaksas-uz-iznākumu/), kāpēc brīvprātīgā laika vērtības izlaišana sistemātiski nenovērtē patiesās piegādes izmaksas.

## Biežākās kļūdas

- **Vienas vispārējas likmes lietošana strukturāli atšķirīgām lomām.** Nacionālās vidējās algas likme, kas piemērota profesionālai bezmaksas stundai (juridiskai, finanšu, klīniskai), to krasi nenovērtē; saskaņojiet likmi ar aizstājamo lomu, kad vien uzdevums ir prasmīgs.
- **Dubultā uzskaite pret algoto darbinieku izmaksām.** Ja brīvprātīgie aizstāj darbu, kas citādi tiktu apmaksāts, pārliecinieties, ka novērtējums pievienojas naudas izdevumiem, nevis tiek uzslānīts virs jau piepūsta personāla novērtējuma.
- **Novecojušas likmes citēšana bez datuma.** Independent Sector un ONS likmes mainās katru gadu (vai tiek pārvērtētas tikai periodiski, ONS gadījumā); brīvprātīgā laika skaitlis ziņojumā bez datuma salīdzināšanai ir gandrīz bezjēdzīgs.
- **Brīvprātīgā laika vērtības uzskatīšana par līdzekļu piesaistes aktīvu.** Tā ir izmaksu uzskaites korekcija patiesu resursu izmaksu izpratnei, nevis jauna nauda, ko labdarības organizācija var tērēt; to sajaukšana maldina valdi, kas lasa pārskatus.

## Avoti

- Independent Sector and the Do Good Institute (University of Maryland), "Value of Volunteer Time." <https://www.independentsector.org/value-of-volunteer-time/>
- Independent Sector, Value of Volunteer Time methodology. <https://independentsector.org/research/value-of-volunteer-time-methodology/>
- NCVO, UK Civil Society Almanac 2024. <https://www.ncvo.org.uk/news-and-insights/news-index/uk-civil-society-almanac-2024/>
- Office for National Statistics, volunteering valuation estimate, as cited in NCVO analysis. <https://www.ncvo.org.uk/>
