# Kavēšanās izmaksas publiskajās programmās (CoD)

Kavēšanās izmaksas (angl. Cost of Delay) ir sabiedriskā vērtība, kas tiek zaudēta par katru laika vienību, kamēr programma, pakalpojums vai sistēmas izmaiņa *vēl nav* piegādāta. Tas ir šīs tēmu grupas galvenais tilta rādītājs: tas pārvērš „palaišana nobīdījās par sešiem mēnešiem" mārciņās nedēļā vai WELLBY nedēļā, lai kavēšanos varētu apspriest tajā pašā valūtā kā pašu biznesa gadījumu.

## Kāpēc tas ir svarīgi

Reinertsena noteikums — „ja kvantificējat tikai vienu lietu, kvantificējiet kavēšanās izmaksas" — pārceļas uz valdību gandrīz nemainīts, jo publiskās programmas ir neparasti pakļautas tam: biznesa gadījumi tiek apstiprināti pret prognozētu ieguvumu plūsmu, taču plūsma sāk tecēt tikai palaišanas brīdī, un katra nobīdes nedēļa ir zaudētas vērtības nedēļa, ko neviens neizmaksā riska reģistrā. National Audit Office atkārtotā Universal Credit ieviešanas izpēte (sk. tā ziņojumus „Rolling Out Universal Credit", <https://www.nao.org.uk/>) ilustrē šo shēmu: grafika nobīde tika izsekota un ziņota, taču mārciņu nedēļā izmaksas par to, ka pārveidotā sistēma *vēl nav* piegādāta nākamajai pieteikuma iesniedzēju partijai, reti tika norādītas kā virsraksta skaitlis, kaut gan tieši šim skaitlim bija jāvada prioritizēšana un eskalācija. Bez CoD skaitļa kavēta programma izskatās pēc grafika problēmas piegādes valdei; ar to tā ir vērtības erozijas problēma grāmatvedības amatpersonai.

## Matemātika

```
CoD = ieguvums uz laika vienību, kas zaudēts, kamēr nav piegādāts   (£/nedēļā vai WELLBY/nedēļā)

Kopējais kavēšanās zaudējums = CoD × kavēšanās ilgums

Ieguvumu plūsmas, kas jāsummē publiskajām programmām:
  naudu atbrīvojoši ietaupījumi  (krāpšanas/kļūdu samazināšana, novērstas pagaidu izmaksas)
+ nenaudas atbrīvotā jauda       (darbinieku/ierēdņu stundas × pilnās izmaksas)
+ labklājības ieguvums           (WELLBY × £13 000/WELLBY, HMT Green Book
                                  labklājības papildu norādījumi, 2019. gada cenas)
```

Iedzīvotājiem pavērstiem pakalpojumiem izsakiet gan labklājībā, gan naudā — sk. [labklājībai koriģēti dzīves gadi](../labklājības-koriģētie-dzīves-gadi/) pamatvienībai un [alternatīvās izmaksas publiskajos izdevumos](../alternatīvās-izmaksas-publiskajos-izdevumos/), lai uzzinātu, ko kavētā mārciņa citādi varētu būt finansējusi.

## Aprēķina piemērs

**Pašvaldība**: mājokļa pabalsta sistēmas jauninājums samazina pārmaksājuma kļūdas par £150 uz pieteikumu gadā 20 000 aktīvu pieteikumu.

```
Gada ieguvums = 150 × 20 000 = £3 000 000/gadā
CoD = 3 000 000 / 52 ≈ £57 700/nedēļā
12 mēnešu ieviešanas kavējums maksā 52 × 57 700 ≈ £3 000 000 novēršamu kļūdu.
```

**Centrālās valdības aģentūra**: invaliditātes pabalstu novērtēšanas pakalpojums, piegādāts sešus mēnešus (26 nedēļas) vēlāk nekā plānots, nozīmē, ka 200 000 pieteikuma iesniedzēju gadā gaida lēmumu vidēji trīs nedēļas ilgāk. Katra papildu finansiālās nenoteiktības nedēļa tiek modelēta kā −0,0018 WELLBY (dzīves apmierinātības punkta) efekts:

```
WELLBY zaudējums uz pieteikuma iesniedzēju = 3 × 0,0018 = 0,0054
Gada WELLBY zaudējums = 200 000 × 0,0054 = 1 080 WELLBY/gadā
CoD_labklājība = 1 080 / 52 ≈ 20,8 WELLBY/nedēļā
CoD_nauda = 20,8 × £13 000 ≈ £270 000/nedēļā labklājības vērtības
```

26 nedēļu kavējums tātad „maksā" aptuveni 540 WELLBY — ap £7 miljoniem pēc Green Book labklājības novērtējuma —, pārformulējot nokavētu palaišanas datumu kā iedzīvotāju labklājības notikumu, nevis projekta vadības zemsvītras piezīmi.

## Saikne ar programmatūras inženieriju

CoD ir tas, kas padara [DORA rādītājus](../dora-rādītāji-publiskās-vērtības-nodrošināšanai/) un [plūsmas rādītājus](../plūsmas-rādītāji-valdības-piegādē/) finansiāli saprotamus: izpildes laiks konveijerā × CoD ir nauda (vai labklājība), kas sadedzināta rindās, pirms tā nonāk pie iedzīvotāja. Konkrēti:

- **Prioritizēšana**: sakārtojiet uzdevumu sarakstu pēc CoD ÷ ilgums, nevis pēc ieinteresēto pušu senioritātes — programmatūras inženierijas analogs Green Book prasībai vērtēt iespējas pēc vērtības, nevis pēc tā, kas to pieprasa.
- **Iepirkums**: 12–18 mēnešu ietvara iepirkuma ciklam ir CoD; tā izmaksāšana maina steidzamības argumentu paātrinātiem ceļiem un tieši baro [veidot vai pirkt](../veidot-vai-pirkt-valdībā/) lēmumus, kur laiks līdz vērtībai ir lēmuma dzinulis.
- **Ieguvumu gadījums**: katram apstiprināšanā minētajam CoD skaitlim jāparādās atkal [ieguvumu realizācijā](../ieguvumu-realizācija/) — ja kavēšanās izmaksas bija reālas, paātrinātajam ieguvumam jābūt izmērāmam pēc palaišanas.

## Biežākās kļūdas

- **Lineāra CoD pieņēmums**: dažiem publiskajiem pakalpojumiem ir termiņa formas vērtība (likumā noteikts atbilstības datums — CoD lecas uz piespiedu izpildes riska līmeni pēc datuma, pirms tam gandrīz nulle), nevis gluda nedēļas likme. Klasificējiet steidzamības profilu pirms reizināšanas.
- **CoD par izlaidi, ko neviens nevēlas**: kavēšanās maksā tikai tad, ja nepiegādātajam ir vērtība; sistēmai, ko neviens nelietos, ir nulles CoD neatkarīgi no tā, cik tā nokavēta.
- **Kavēšanās un diskontēšanas dubultā uzskaite**: [sociālā diskonta likme](../sociālā-diskonta-likme/) jau novērtē laiku daudzgadu novērtējuma horizontos; CoD ir horizonta iekšējā, operatīvā versija nedēļām un mēnešiem. Izmantojiet CoD grafika nobīdei, NPV nobīdi — daudzgadu pārfāzēšanai.

## Avoti

- Reinertsen DG, *The Principles of Product Development Flow*, Celeritas Publishing, 2009.
- HM Treasury, Green Book supplementary guidance: wellbeing. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>
- National Audit Office, reports on Universal Credit rollout. <https://www.nao.org.uk/>
